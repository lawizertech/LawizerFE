import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";
import {
  callbackRequestUserEmailTemplate,
  callbackRequestAdminEmailTemplate,
} from "@/lib/email/templates";

export async function POST(req: Request) {
  // Guard: check email config is present before doing anything
  if (
    !process.env.EMAIL_HOST ||
    !process.env.EMAIL_PORT ||
    !process.env.EMAIL_USER ||
    !process.env.EMAIL_PASS
  ) {
    console.error(
      "/api/callback: Email environment variables are not configured. " +
      "Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, and EMAIL_PASS in .env.local"
    );
    return NextResponse.json(
      { success: false, message: "Email service is not configured on the server." },
      { status: 503 }
    );
  }

  try {
    const { name, email, phone, service } = await req.json();

    // Validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Basic phone validation
    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Invalid phone number" },
        { status: 400 }
      );
    }

    // Generate email HTML for user
    const userEmailHtml = callbackRequestUserEmailTemplate(name, service);

    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: `Callback Request Confirmed - ${service} - Lawizer`,
      html: userEmailHtml,
    });

    // Generate email HTML for admin
    const adminEmailHtml = callbackRequestAdminEmailTemplate(
      name,
      email,
      phone,
      service
    );

    // Send support ticket to admin (non-blocking)
    sendEmail({
      to: "admin@lawizer.com",
      subject: `[CALLBACK REQUEST] ${service} - ${name}`,
      html: adminEmailHtml,
    }).catch((err) =>
      console.error("Failed to send admin callback notification:", err)
    );

    return NextResponse.json({
      success: true,
      message: "Callback request submitted successfully!",
    });
  } catch (err) {
    console.error("/api/callback error:", err);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
