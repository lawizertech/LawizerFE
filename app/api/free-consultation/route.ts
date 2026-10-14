// ============================================================
// POST /api/free-consultation
// Handles: create-order (pending booking + Razorpay order)
//          verify-payment (confirm booking + create Stream meeting)
// ============================================================

import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";
import { createAdminClient } from "@/lib/supabase/server";
import crypto from "crypto";
import {
  CONSULTATION_PRICE,
  CONSULTATION_DURATION_MIN,
  PENDING_EXPIRY_MINUTES,
  WEEKLY_SLOT_CAP,
  FOUNDER_TIMEZONE,
  FOUNDER,
  MIN_NOTICE_HOURS,
  WORK_START_HOUR,
  WORK_END_HOUR,
  LUNCH_START_HOUR,
  LUNCH_END_HOUR,
} from "@/lib/consultation-config";

const AMOUNT_PAISE = CONSULTATION_PRICE * 100;

/**
 * Get Mon 00:00 and Sun 23:59:59 IST for the week containing a given UTC date.
 */
function getISTWeekBounds(utcDate: Date) {
  // Convert to IST
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(utcDate.getTime() + istOffset);
  const dayOfWeek = istDate.getUTCDay(); // 0=Sun
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(istDate);
  monday.setUTCDate(istDate.getUTCDate() + diffToMonday);
  monday.setUTCHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setUTCDate(monday.getUTCDate() + 6);
  sunday.setUTCHours(23, 59, 59, 999);

  // Convert back to UTC
  return {
    mondayUTC: new Date(monday.getTime() - istOffset).toISOString(),
    sundayUTC: new Date(sunday.getTime() - istOffset).toISOString(),
  };
}

/**
 * Validate that a slot_start is valid (working hours, not lunch, min notice, etc.)
 */
function validateSlotStart(slotStartUTC: Date): string | null {
  const now = new Date();

  // Min notice check
  const minNoticeMs = MIN_NOTICE_HOURS * 60 * 60 * 1000;
  if (slotStartUTC.getTime() - now.getTime() < minNoticeMs) {
    return `Slots must be booked at least ${MIN_NOTICE_HOURS} hours in advance.`;
  }

  // Convert to IST for hour checks
  const istOffset = 5.5 * 60 * 60 * 1000;
  const istDate = new Date(slotStartUTC.getTime() + istOffset);
  const hour = istDate.getUTCHours();
  const minute = istDate.getUTCMinutes();

  // Working hours check
  if (hour < WORK_START_HOUR || hour >= WORK_END_HOUR) {
    return "Slot is outside working hours.";
  }

  // Lunch break check
  const slotEndMinutes = hour * 60 + minute + CONSULTATION_DURATION_MIN;
  if (
    hour * 60 + minute < LUNCH_END_HOUR * 60 &&
    slotEndMinutes > LUNCH_START_HOUR * 60
  ) {
    return "Slot overlaps with the lunch break.";
  }

  // Past check
  if (slotStartUTC <= now) {
    return "Cannot book a slot in the past.";
  }

  return null;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === "create-order") {
      const { name, phone, email, reason, userId, slotStart } = body;

      if (!name || !phone || !reason) {
        return NextResponse.json({ success: false, message: "Name, phone, and consultation reason are required" }, { status: 400 });
      }

      if (!email || !email.includes("@")) {
        return NextResponse.json({ success: false, message: "A valid email address is required" }, { status: 400 });
      }

      if (!slotStart) {
        return NextResponse.json({ success: false, message: "Please select a time slot" }, { status: 400 });
      }

      const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(phone)) {
        return NextResponse.json({ success: false, message: "Invalid phone number" }, { status: 400 });
      }

      const slotStartUTC = new Date(slotStart);
      if (isNaN(slotStartUTC.getTime())) {
        return NextResponse.json({ success: false, message: "Invalid slot time" }, { status: 400 });
      }

      // Validate slot
      const validationError = validateSlotStart(slotStartUTC);
      if (validationError) {
        return NextResponse.json({ success: false, message: validationError }, { status: 400 });
      }

      const admin = createAdminClient();
      const now = new Date();

      // Clean expired pending bookings
      const expiryThreshold = new Date(now.getTime() - PENDING_EXPIRY_MINUTES * 60 * 1000);
      try {
        await admin
          .from("consultation_bookings")
          .update({ status: "expired" })
          .eq("status", "pending")
          .lt("created_at", expiryThreshold.toISOString());
      } catch {}
      try {
        await admin
          .from("meetings")
          .update({ status: "expired" })
          .eq("status", "pending")
          .lt("created_at", expiryThreshold.toISOString());
      } catch {}

      // Check weekly cap
      const { mondayUTC, sundayUTC } = getISTWeekBounds(slotStartUTC);
      let weeklyCount = 0;

      const { count: cbCount, error: cbCountErr } = await admin
        .from("consultation_bookings")
        .select("id", { count: "exact", head: true })
        .in("status", ["confirmed", "pending"])
        .gte("slot_start", mondayUTC)
        .lte("slot_start", sundayUTC);

      if (!cbCountErr && cbCount !== null) {
        weeklyCount = cbCount;
      } else {
        // Fallback to meetings table
        const { count: mtCount } = await admin
          .from("meetings")
          .select("id", { count: "exact", head: true })
          .in("status", ["confirmed", "pending", "scheduled"])
          .gte("start_time", mondayUTC)
          .lte("start_time", sundayUTC);
        weeklyCount = mtCount ?? 0;
      }

      if (weeklyCount >= WEEKLY_SLOT_CAP) {
        return NextResponse.json({
          success: false,
          message: "All slots for this week are fully booked. Please try next week.",
        }, { status: 409 });
      }

      // Check if slot is already taken
      let slotTaken = false;
      const { data: existingSlot, error: existingSlotErr } = await admin
        .from("consultation_bookings")
        .select("id")
        .eq("slot_start", slotStartUTC.toISOString())
        .in("status", ["confirmed", "pending"])
        .maybeSingle();

      if (!existingSlotErr && existingSlot) {
        slotTaken = true;
      } else if (existingSlotErr) {
        // Fallback to checking meetings table
        const { data: existingMeeting } = await admin
          .from("meetings")
          .select("id")
          .eq("start_time", slotStartUTC.toISOString())
          .in("status", ["confirmed", "pending", "scheduled"])
          .maybeSingle();
        if (existingMeeting) {
          slotTaken = true;
        }
      }

      if (slotTaken) {
        return NextResponse.json({
          success: false,
          message: "That slot was just booked by someone else. Please pick another.",
          refreshAvailability: true,
        }, { status: 409 });
      }

      // Resolve client profile & case record
      let clientId: string | null = null;
      const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId || "");

      if (isValidUUID) {
        const { data: existingProfile } = await admin
          .from("profiles")
          .select("id")
          .eq("id", userId)
          .maybeSingle();

        if (existingProfile) {
          clientId = existingProfile.id;
        } else {
          // Attempt to create profile if user exists in auth.users
          const { error: insertErr } = await admin.from("profiles").insert({
            id: userId,
            role: "client",
            name: name,
            phone: phone,
            email: email || `${phone}@guest.lawizer.com`,
            has_password: false,
          });
          if (!insertErr) {
            clientId = userId;
          }
        }
      }

      // If still not resolved, check by phone
      if (!clientId && phone) {
        const { data: phoneProfile } = await admin
          .from("profiles")
          .select("id")
          .eq("phone", phone)
          .maybeSingle();

        if (phoneProfile) {
          clientId = phoneProfile.id;
        }
      }

      // If still not resolved (guest / testing with non-UUID), fallback to existing profile in DB
      if (!clientId) {
        const { data: fallbackProfile } = await admin
          .from("profiles")
          .select("id")
          .limit(1)
          .maybeSingle();

        if (fallbackProfile) {
          clientId = fallbackProfile.id;
        }
      }

      // Update profile with real name & email if available
      if (clientId && email) {
        try {
          await admin.from("profiles").update({ email, name, phone }).eq("id", clientId);
        } catch {}
      }

      let newCase: { id: string } | null = null;
      if (clientId) {
        const { data: createdCase, error: caseErr } = await admin
          .from("cases")
          .insert({
            client_id: clientId,
            case_type: "FOUNDER_CONSULTATION",
            status: "pending_payment",
            stages: [
              {
                id: "stage-1",
                key: "paid_money",
                title: "Payment Completed",
                description: `Fee of ₹${CONSULTATION_PRICE} paid successfully`,
                status: "pending",
              },
              {
                id: "stage-2",
                key: "lawyer_assigned",
                title: "Founder Consultation",
                description: "Consultation call with the founder",
                status: "pending",
              }
            ]
          })
          .select("id")
          .single();

        if (caseErr) {
          console.error("Failed to create case:", caseErr);
        } else {
          newCase = createdCase;
        }
      }

      // Create pending booking
      const slotEndUTC = new Date(slotStartUTC.getTime() + CONSULTATION_DURATION_MIN * 60 * 1000);
      const expiresAt = new Date(now.getTime() + PENDING_EXPIRY_MINUTES * 60 * 1000);
      const bookingId = crypto.randomUUID();
      let usingConsultationBookings = true;

      const { error: bookingError } = await admin
        .from("consultation_bookings")
        .insert({
          id: bookingId,
          user_id: clientId || null,
          user_name: name,
          user_phone: phone,
          reason,
          slot_start: slotStartUTC.toISOString(),
          slot_end: slotEndUTC.toISOString(),
          timezone: FOUNDER_TIMEZONE,
          status: "pending",
          expires_at: expiresAt.toISOString(),
          case_id: newCase?.id || null,
        });

      if (bookingError) {
        if (bookingError.code === "23505") {
          return NextResponse.json({
            success: false,
            message: "That slot was just booked. Please pick another.",
            refreshAvailability: true,
          }, { status: 409 });
        }

        // Fallback: If consultation_bookings table does not exist (PGRST205), reserve in meetings table
        usingConsultationBookings = false;
        const { error: meetingError } = await admin
          .from("meetings")
          .insert({
            id: bookingId,
            case_id: newCase?.id,
            title: `Founder Consultation - ${name}`,
            scheduled_for: slotStartUTC.toISOString(),
            start_time: slotStartUTC.toISOString(),
            end_time: slotEndUTC.toISOString(),
            status: "pending",
            type: "video",
          });

        if (meetingError) {
          console.error("Failed to reserve in meetings fallback:", meetingError);
          return NextResponse.json({ success: false, message: "Failed to reserve slot in database" }, { status: 500 });
        }
      }

      // Check payment gateway credentials
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      // Dev Mode: Allow testing when Razorpay credentials are not yet configured in .env.local
      if (!keyId || !keySecret) {
        const devOrderId = `order_dev_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

        if (newCase) {
          await admin.from("payments").insert({
            case_id: newCase.id,
            razorpay_order_id: devOrderId,
            status: "created",
            amount: CONSULTATION_PRICE,
          });
        }

        if (usingConsultationBookings) {
          await admin
            .from("consultation_bookings")
            .update({ razorpay_order_id: devOrderId })
            .eq("id", bookingId);
        }

        return NextResponse.json({
          success: true,
          isDevMode: true,
          orderId: devOrderId,
          keyId: "rzp_test_dev_mode",
          amount: AMOUNT_PAISE,
          bookingId,
          price: CONSULTATION_PRICE,
          expiresAt: expiresAt.toISOString(),
        });
      }

      // Production / Configured Razorpay flow
      const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
      const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          amount: AMOUNT_PAISE,
          currency: "INR",
          notes: {
            booking_id: bookingId,
            name,
            phone,
            reason,
            slot_start: slotStartUTC.toISOString(),
          },
        }),
      });

      if (!orderRes.ok) {
        // Release the pending booking
        if (usingConsultationBookings) {
          await admin.from("consultation_bookings").update({ status: "expired" }).eq("id", bookingId);
        } else {
          await admin.from("meetings").update({ status: "expired" }).eq("id", bookingId);
        }
        const errDetails = await orderRes.json().catch(() => null);
        console.error("Razorpay order creation failed:", errDetails);
        return NextResponse.json({ success: false, message: "Failed to initialize payment order" }, { status: 500 });
      }

      const orderData = await orderRes.json();

      // Update booking with Razorpay order ID
      if (usingConsultationBookings) {
        await admin
          .from("consultation_bookings")
          .update({ razorpay_order_id: orderData.id })
          .eq("id", bookingId);
      }

      if (newCase) {
        await admin.from("payments").insert({
          case_id: newCase.id,
          razorpay_order_id: orderData.id,
          status: "created",
          amount: CONSULTATION_PRICE,
        });
      }

      return NextResponse.json({
        success: true,
        isDevMode: false,
        orderId: orderData.id,
        keyId,
        amount: AMOUNT_PAISE,
        bookingId,
        price: CONSULTATION_PRICE,
        expiresAt: expiresAt.toISOString(),
      });
    }

    if (action === "verify-payment") {
      const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        name,
        phone,
        email,
        reason,
        userId,
        bookingId,
        isDevMode,
      } = body;

      if (!name || !phone || !reason || !bookingId) {
        return NextResponse.json({ success: false, message: "Missing verification parameters" }, { status: 400 });
      }

      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      // Verify Razorpay signature if not in dev mode
      if (!isDevMode && keySecret) {
        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
          return NextResponse.json({ success: false, message: "Missing payment tokens" }, { status: 400 });
        }
        const expectedSignature = crypto
          .createHmac("sha256", keySecret)
          .update(`${razorpay_order_id}|${razorpay_payment_id}`)
          .digest("hex");

        if (expectedSignature !== razorpay_signature) {
          return NextResponse.json({ success: false, message: "Payment verification failed. Invalid signature." }, { status: 400 });
        }
      }

      const admin = createAdminClient();
      const confirmedPaymentId = razorpay_payment_id || `pay_dev_${Date.now()}`;

      // Confirm the booking in consultation_bookings (if exists) or meetings
      let slotStartISO: string | null = null;
      let slotEndISO: string | null = null;
      let caseId: string | null = null;

      const { data: booking } = await admin
        .from("consultation_bookings")
        .update({
          status: "confirmed",
          razorpay_payment_id: confirmedPaymentId,
          confirmed_at: new Date().toISOString(),
        })
        .eq("id", bookingId)
        .select("id, slot_start, slot_end, case_id")
        .maybeSingle();

      if (booking) {
        slotStartISO = booking.slot_start;
        slotEndISO = booking.slot_end;
        caseId = booking.case_id;
      } else {
        // Fallback: Check meetings table
        const { data: meeting } = await admin
          .from("meetings")
          .select("id, case_id, start_time, end_time")
          .eq("id", bookingId)
          .maybeSingle();

        if (meeting) {
          slotStartISO = meeting.start_time;
          slotEndISO = meeting.end_time;
          caseId = meeting.case_id;
        }
      }

      // Create Stream.io meeting via NestJS backend if available
      let meetingId: string | null = null;
      try {
        const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
        const meetingRes = await fetch(`${backendUrl}/meetings/create`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "video",
            title: `Founder Consultation - ${name}`,
            scheduledAt: slotStartISO || new Date().toISOString(),
            duration: CONSULTATION_DURATION_MIN,
            participants: userId ? [userId] : [],
            bookingId: bookingId,
          }),
        });

        if (meetingRes.ok) {
          const meetingData = await meetingRes.json();
          meetingId = meetingData.meeting?.id || meetingData.meetingId || bookingId;
        } else {
          meetingId = bookingId;
        }
      } catch (meetErr) {
        meetingId = bookingId;
      }

      // Build meeting URL
      const meetUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://lawizer.com"}/meet/${meetingId}`;

      // Update consultation_bookings with meeting ID if table exists
      await admin
        .from("consultation_bookings")
        .update({ meeting_id: meetingId })
        .eq("id", bookingId);

      // Also ensure meetings record is confirmed
      await admin
        .from("meetings")
        .update({
          status: "confirmed",
          meeting_link: meetUrl,
        })
        .eq("id", bookingId);

      // Update case and payment records
      if (caseId) {
        await admin.from("payments").update({
          razorpay_payment_id: confirmedPaymentId,
          status: "captured",
          verified_at: new Date().toISOString(),
        }).eq("case_id", caseId);

        await admin.from("cases").update({
          status: "created",
          stages: [
            {
              id: "stage-1",
              key: "paid_money",
              title: "Payment Completed",
              description: `Fee of ₹${CONSULTATION_PRICE} paid successfully`,
              status: "completed",
            },
            {
              id: "stage-2",
              key: "lawyer_assigned",
              title: "Founder Consultation",
              description: "Consultation call with the founder",
              status: "pending",
            }
          ]
        }).eq("id", caseId);
      }

      // Send email notification
      const slotDate = new Date(slotStartISO || Date.now());
      const slotDateStr = slotDate.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: FOUNDER_TIMEZONE,
      });
      const slotTimeStr = slotDate.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: FOUNDER_TIMEZONE,
      });

      // Generate Google Calendar Link
      const gCalStart = slotDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
      const slotEndDate = new Date(slotEndISO || (slotDate.getTime() + 30 * 60 * 1000));
      const gCalEnd = slotEndDate.toISOString().replace(/-|:|\.\d\d\d/g, "");
      const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Founder Consultation — Lawizer")}&dates=${gCalStart}/${gCalEnd}&details=${encodeURIComponent(`Founder Legal & Startup Consultation with Suvam Ghosh.\nMeeting Room: ${meetUrl}`)}&location=${encodeURIComponent(meetUrl)}`;

      // 1. Send confirmation email to client
      if (email) {
        try {
          await sendEmail({
            to: email,
            subject: `Confirmed: Founder Consultation with Suvam Ghosh – Lawizer`,
            html: `
              <div style="font-family: 'DM Sans', Arial, -apple-system, BlinkMacSystemFont, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e4e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.06);">
                <!-- Header -->
                <div style="background: linear-gradient(135deg, #0c2340 0%, #1a365d 100%); padding: 32px 24px; text-align: center; color: #ffffff;">
                  <div style="display: inline-block; background: #ffffff; padding: 6px 12px; border-radius: 8px; margin-bottom: 12px;">
                    <span style="font-weight: 800; color: #ca2d42; font-size: 16px; letter-spacing: -0.5px;">LAWIZER</span>
                  </div>
                  <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Consultation Confirmed!</h1>
                  <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 14px;">Direct Video Session with Founder & Legal Head</p>
                </div>

                <!-- Body -->
                <div style="padding: 32px 28px;">
                  <p style="font-size: 16px; color: #1e293b; margin: 0 0 16px; font-weight: 600;">
                    Hello ${name},
                  </p>
                  <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 24px;">
                    Your 30-minute 1-on-1 consultation session with <strong>Suvam Ghosh</strong> (Founder & Legal Head of Lawizer) has been successfully reserved and confirmed.
                  </p>

                  <!-- Session Details Card -->
                  <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 28px;">
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: #ca2d42; margin-bottom: 14px;">
                      Meeting Schedule Details
                    </div>
                    <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 500; width: 35%;">Date:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${slotDateStr}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Time:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 700;">${slotTimeStr} IST</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Duration:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">30 Minutes</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Consultant:</td>
                        <td style="padding: 6px 0; color: #0f172a; font-weight: 600;">Suvam Ghosh (Founder & Legal Head)</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; color: #64748b; font-weight: 500;">Payment:</td>
                        <td style="padding: 6px 0; color: #16a34a; font-weight: 700;">₹${CONSULTATION_PRICE} (Verified)</td>
                      </tr>
                    </table>
                  </div>

                  <!-- CTA Button -->
                  <div style="text-align: center; margin-bottom: 28px;">
                    <a href="${meetUrl}" target="_blank" style="display: inline-block; background-color: #ca2d42; color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 700; font-size: 15px; box-shadow: 0 4px 12px rgba(202, 45, 66, 0.25);">
                      Join Video Meeting Room
                    </a>
                    <p style="font-size: 12px; color: #64748b; margin: 10px 0 0;">
                      Or copy this URL: <a href="${meetUrl}" style="color: #ca2d42; word-break: break-all;">${meetUrl}</a>
                    </p>
                  </div>

                  <!-- Add to Calendar Link -->
                  <div style="text-align: center; margin-bottom: 28px; padding: 12px; background: #fff1f2; border-radius: 8px; border: 1px dashed rgba(202,45,66,0.3);">
                    <a href="${gCalUrl}" target="_blank" style="color: #ca2d42; font-weight: 700; font-size: 13px; text-decoration: none;">
                      📅 Add to Google Calendar
                    </a>
                  </div>

                  <!-- Instructions -->
                  <div style="border-top: 1px solid #e2e8f0; padding-top: 20px; font-size: 13px; color: #64748b; line-height: 1.6;">
                    <p style="font-weight: 700; color: #0f172a; margin: 0 0 6px;">Important Instructions:</p>
                    <ul style="margin: 0; padding-left: 18px;">
                      <li>Please join the meeting link 2 minutes prior to your scheduled time.</li>
                      <li>Have your startup questions, drafts, or legal concerns ready for discussion.</li>
                      <li>You can also view this meeting and your active status anytime in your <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://lawizer.com"}/user/dashboard?tab=consultations" style="color: #ca2d42; font-weight: 600;">Lawizer Dashboard</a>.</li>
                    </ul>
                  </div>
                </div>

                <!-- Footer -->
                <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8;">
                  <p style="margin: 0 0 4px;">Lawizer Technologies Pvt. Ltd.</p>
                  <p style="margin: 0;">Need to reschedule or have questions? Contact us at <a href="mailto:lawizertech@gmail.com" style="color: #64748b;">lawizertech@gmail.com</a></p>
                </div>
              </div>
            `,
          });
        } catch (clientErr) {
          console.error("Failed to send client confirmation email:", clientErr);
        }
      }

      // 2. Send notification to admin / founder
      try {
        await sendEmail({
          to: "lawizertech@gmail.com",
          subject: `[PAID CONSULTATION - ₹${CONSULTATION_PRICE}] ${name} (${email || phone}) — ${slotDateStr} ${slotTimeStr}`,
          html: `
            <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f8f9fc; padding: 32px; border-radius: 16px;">
              <div style="background: #ca2d42; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
                <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 800;">Consultation Booking Confirmed</h1>
                <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 8px 0 0;">Payment of ₹${CONSULTATION_PRICE} Verified Successfully</p>
              </div>
              <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e4e8f0;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600; width: 40%;">Name</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Email</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${email || "N/A"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Phone</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Date & Time</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${slotDateStr}, ${slotTimeStr} IST</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Meeting Link</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0;"><a href="${meetUrl}" style="color: #ca2d42; font-size: 14px; font-weight: 600;">${meetUrl}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Payment ID</td>
                    <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #ca2d42; font-family: monospace; font-size: 14px; font-weight: 600;">${confirmedPaymentId}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px 0; color: #8a90a2; font-size: 13px; font-weight: 600; vertical-align: top;">Reason</td>
                    <td style="padding: 12px 0; color: #0d0f14; font-size: 14px; line-height: 1.6;">${reason}</td>
                  </tr>
                </table>
              </div>
              <p style="color: #8a90a2; font-size: 12px; text-align: center; margin-top: 20px;">Lawizer · lawizertech@gmail.com</p>
            </div>
          `,
        });
      } catch (adminErr) {
        console.error("Failed to send admin notification email:", adminErr);
      }

      return NextResponse.json({
        success: true,
        message: `Your booking and payment of ₹${CONSULTATION_PRICE} have been verified successfully.`,
        bookingId: bookingId,
        meetingId,
        meetUrl,
        slotStart: slotStartISO || new Date().toISOString(),
        slotEnd: slotEndISO || new Date().toISOString(),
        price: CONSULTATION_PRICE,
      });
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
  } catch (err) {
    console.error("/api/free-consultation error:", err);
    return NextResponse.json({ success: false, message: "Failed to process request" }, { status: 500 });
  }
}
