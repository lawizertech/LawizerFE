import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action } = body;

    if (action === "create-order") {
      const { name, phone, reason } = body;

      if (!name || !phone || !reason) {
        return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
      }

      const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
      if (!phoneRegex.test(phone)) {
        return NextResponse.json({ success: false, message: "Invalid phone number" }, { status: 400 });
      }

      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
      const keySecret = process.env.RAZORPAY_KEY_SECRET;

      if (!keyId || !keySecret) {
        return NextResponse.json({ success: false, message: "Payment gateway credentials not configured" }, { status: 500 });
      }

      // Create Razorpay order securely on backend
      const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");
      const orderRes = await fetch("https://api.razorpay.com/v1/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${auth}`,
        },
        body: JSON.stringify({
          amount: 499900, // ₹4,999 in paise
          currency: "INR",
          notes: {
            name,
            phone,
            reason,
          },
        }),
      });

      if (!orderRes.ok) {
        const errDetails = await orderRes.json().catch(() => null);
        console.error("Razorpay order creation failed:", errDetails);
        return NextResponse.json({ success: false, message: "Failed to initialize payment order" }, { status: 500 });
      }

      const orderData = await orderRes.json();
      return NextResponse.json({
        success: true,
        orderId: orderData.id,
        keyId,
        amount: 499900,
      });
    }

    if (action === "verify-payment") {
      const { razorpay_payment_id, razorpay_order_id, razorpay_signature, name, phone, reason } = body;

      if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature || !name || !phone || !reason) {
        return NextResponse.json({ success: false, message: "Missing verification parameters" }, { status: 400 });
      }

      const keySecret = process.env.RAZORPAY_KEY_SECRET;
      if (!keySecret) {
        return NextResponse.json({ success: false, message: "Payment credentials missing" }, { status: 500 });
      }

      // Verify Razorpay signature securely (cannot be hacked from frontend)
      const expectedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (expectedSignature !== razorpay_signature) {
        return NextResponse.json({ success: false, message: "Payment verification failed. Invalid signature." }, { status: 400 });
      }

      // Send email notification upon verified payment
      await sendEmail({
        to: "lawizertech@gmail.com",
        subject: `[PAID CONSULTATION REQUEST - ₹4,999] ${name}`,
        html: `
          <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f8f9fc; padding: 32px; border-radius: 16px;">
            <div style="background: #ca2d42; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
              <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 800;">Consultation Booking Confirmed</h1>
              <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 8px 0 0;">Payment of ₹4,999 Verified Successfully</p>
            </div>
            <div style="background: white; border-radius: 12px; padding: 24px; border: 1px solid #e4e8f0;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600; width: 40%;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-size: 14px; font-weight: 600;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Razorpay Payment ID</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #ca2d42; font-family: monospace; font-size: 14px; font-weight: 600;">${razorpay_payment_id}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #8a90a2; font-size: 13px; font-weight: 600;">Razorpay Order ID</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; color: #0d0f14; font-family: monospace; font-size: 14px; font-weight: 600;">${razorpay_order_id}</td>
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

      return NextResponse.json({
        success: true,
        message: "Your booking and payment of ₹4,999 have been verified successfully. Our team will get back to you soon.",
      });
    }

    return NextResponse.json({ success: false, message: "Invalid action" }, { status: 400 });
  } catch (err) {
    console.error("/api/free-consultation error:", err);
    return NextResponse.json({ success: false, message: "Failed to process request" }, { status: 500 });
  }
}
