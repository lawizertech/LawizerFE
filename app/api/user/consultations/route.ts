import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

function getUserIdFromAuth(req: NextRequest): string | null {
  const url = new URL(req.url);
  const queryUserId = url.searchParams.get("userId");
  if (queryUserId) return queryUserId;

  const authHeader = req.headers.get("authorization");
  if (authHeader?.startsWith("Bearer ")) {
    try {
      const token = authHeader.substring(7);
      const parts = token.split(".");
      if (parts.length === 3) {
        const payload = JSON.parse(Buffer.from(parts[1], "base64").toString("utf-8"));
        return payload.sub || payload.uid || payload.id || null;
      }
    } catch {}
  }
  return null;
}

export async function GET(req: NextRequest) {
  try {
    const userId = getUserIdFromAuth(req);
    const admin = createAdminClient();
    const consultations: any[] = [];

    // 1. Fetch from Supabase cases & meetings
    if (userId) {
      const clientIds = [userId];
      const isValidUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(userId);
      if (isValidUUID) {
        const { data: prof } = await admin.from("profiles").select("id, phone").eq("id", userId).maybeSingle();
        if (prof?.phone) {
          const { data: siblingProfiles } = await admin.from("profiles").select("id").eq("phone", prof.phone);
          siblingProfiles?.forEach((p) => {
            if (!clientIds.includes(p.id)) clientIds.push(p.id);
          });
        }
      }

      // Look up cases for this user
      const { data: userCases } = await admin
        .from("cases")
        .select("id, case_type, status, created_at")
        .in("client_id", clientIds)
        .eq("case_type", "FOUNDER_CONSULTATION");

      if (userCases && userCases.length > 0) {
        const caseIds = userCases.map((c) => c.id);
        const { data: meetings } = await admin
          .from("meetings")
          .select("id, case_id, title, scheduled_for, start_time, end_time, status, meeting_link, created_at")
          .in("case_id", caseIds)
          .order("start_time", { ascending: false });

        if (meetings) {
          for (const m of meetings) {
            const dateVal = m.start_time || m.scheduled_for || m.created_at;
            const dateSeconds = Math.floor(new Date(dateVal).getTime() / 1000);
            const createdSeconds = Math.floor(new Date(m.created_at || dateVal).getTime() / 1000);

            consultations.push({
              bookingId: m.id,
              userId: userId,
              expertUid: "founder",
              expertId: "founder",
              expertName: "Suvam Ghosh (Founder & Legal Head)",
              expertType: "adv",
              callType: "video",
              meetingLink: m.meeting_link || `/meet/${m.id}`,
              bookingDate: {
                _seconds: dateSeconds,
                _nanoseconds: 0,
              },
              bookedAt: {
                _seconds: createdSeconds,
                _nanoseconds: 0,
              },
              rate: 999,
              status: m.status === "confirmed" || m.status === "scheduled" ? "confirmed" : m.status || "pending",
              expertBio: "Founder of Lawizer. Legal consultation and strategic startup advisory.",
              specialization: ["Startup Law", "Contracts", "Corporate Compliance"],
              experienceYears: 5,
              title: m.title || "Founder Consultation",
              caseId: m.case_id,
            });
          }
        }
      }

      // Check consultation_bookings table if it exists
      try {
        const { data: cbList } = await admin
          .from("consultation_bookings")
          .select("id, user_id, user_name, reason, slot_start, slot_end, status, meeting_id, case_id, created_at")
          .eq("user_id", userId)
          .order("slot_start", { ascending: false });

        if (cbList) {
          for (const cb of cbList) {
            // Avoid duplicates if already present from meetings table
            if (consultations.some((c) => c.bookingId === cb.id || (cb.case_id && c.caseId === cb.case_id))) {
              continue;
            }
            const dateSeconds = Math.floor(new Date(cb.slot_start).getTime() / 1000);
            const createdSeconds = Math.floor(new Date(cb.created_at || cb.slot_start).getTime() / 1000);

            consultations.push({
              bookingId: cb.id,
              userId: userId,
              expertUid: "founder",
              expertId: "founder",
              expertName: "Suvam Ghosh (Founder & Legal Head)",
              expertType: "adv",
              callType: "video",
              meetingLink: cb.meeting_id ? `/meet/${cb.meeting_id}` : `/meet/${cb.id}`,
              bookingDate: {
                _seconds: dateSeconds,
                _nanoseconds: 0,
              },
              bookedAt: {
                _seconds: createdSeconds,
                _nanoseconds: 0,
              },
              rate: 999,
              status: cb.status === "confirmed" ? "confirmed" : "pending",
              expertBio: "Founder of Lawizer. Legal consultation and strategic startup advisory.",
              specialization: ["Startup Law", "Contracts", "Corporate Compliance"],
              experienceYears: 5,
              title: "Founder Consultation",
              caseId: cb.case_id,
            });
          }
        }
      } catch {}
    }

    // 2. Also try fetching backend consultations if accessible
    try {
      const BASE = process.env.NEXT_PUBLIC_API_URL;
      const authHeader = req.headers.get("authorization");
      if (BASE && authHeader) {
        const backendRes = await fetch(`${BASE}/user/consultations`, {
          method: "GET",
          headers: { Authorization: authHeader },
          cache: "no-store",
        });
        if (backendRes.ok) {
          const backendData = await backendRes.json();
          const items = Array.isArray(backendData) ? backendData : backendData?.consultations;
          if (Array.isArray(items)) {
            for (const item of items) {
              if (!consultations.some((c) => c.bookingId === item.bookingId)) {
                consultations.push(item);
              }
            }
          }
        }
      }
    } catch {}

    return NextResponse.json({
      success: true,
      consultations,
    });
  } catch (err: any) {
    console.error("GET /api/user/consultations error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
