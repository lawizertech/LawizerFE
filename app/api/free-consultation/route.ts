import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";

export async function POST(req: Request) {
  try {
    const { name, phone, reason } = await req.json();

    if (!name || !phone || !reason) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Notify team at lawizertech@gmail.com
    await sendEmail({
      to: "lawizertech@gmail.com",
      subject: `[FREE CONSULTATION REQUEST] ${name}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; background: #f8f9fc; padding: 32px; border-radius: 16px;">
          <div style="background: #ca2d42; border-radius: 12px; padding: 24px; text-align: center; margin-bottom: 24px;">
            <h1 style="color: white; font-size: 22px; margin: 0; font-weight: 800;">New Free Consultation Request</h1>
            <p style="color: rgba(255,255,255,0.8); font-size: 13px; margin: 8px 0 0;">Received via Lawizer Free Consultation Page</p>
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
      message: "Your request has been received. Our team will get back to you soon.",
    });
  } catch (err) {
    console.error("/api/free-consultation error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to submit request" },
      { status: 500 }
    );
  }
}
