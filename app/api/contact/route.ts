import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";
import { contactInquiryEmailTemplate } from "@/lib/email/templates";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  try {
    const { name, email, phone, serviceType, inquiry, source } = await req.json();

    // Validation
    if (!name || !email || !phone || !serviceType || !inquiry) {
      return NextResponse.json({ success: false, message: "All fields are required" }, { status: 400 });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Invalid email address" }, { status: 400 });
    }

    // Generate email HTML
    const emailHtml = contactInquiryEmailTemplate(name, email, serviceType, inquiry);

    // Send confirmation email to user
    await sendEmail({
      to: email,
      subject: `Your Inquiry Received - Lawizer (Ref: ${serviceType})`,
      html: emailHtml,
    });

    // Send notification to admin
    const adminEmailHtml = `
 <html>
 <head>
 <style>
 body { font-family: Arial, sans-serif; background-color: #f5f5f5; }
 .container { max-width: 600px; margin: 20px auto; background: white; padding: 20px; border-radius: 8px; }
 .header { background: linear-gradient(135deg, #e94560, #ff6b8a); color: white; padding: 15px; border-radius: 4px; margin-bottom: 20px; }
 .field { margin: 15px 0; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px; }
 .label { font-weight: bold; color: #e94560; }
 .footer { margin-top: 20px; font-size: 12px; color: #888; }
 </style>
 </head>
 <body>
 <div class="container">
 <div class="header">
 <h2 style="margin: 0;">📬 New Contact Inquiry</h2>
 </div>
 
 <div class="field">
 <span class="label">Source:</span> ${source ? `${source} (from /contact)` : "Contact Form"}
 </div>
 
 <div class="field">
 <span class="label">Name:</span> ${name}
 </div>
 
 <div class="field">
 <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
 </div>
 
 <div class="field">
 <span class="label">Service Type:</span> ${serviceType}
 </div>
 
 <div class="field">
 <span class="label">Inquiry:</span>
 <p style="margin: 10px 0; color: #555; white-space: pre-wrap;">${inquiry.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
 </div>
 
 <div class="footer">
 <p>Submitted on: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
 <p>Reference ID: ${new Date().getTime()}</p>
 </div>
 </div>
 </body>
 </html>
 `;

    // Send admin notification (don't wait for it)
    sendEmail({
      to: "admin@lawizer.com",
      subject: `[NEW INQUIRY] ${serviceType} - ${name}`,
      html: adminEmailHtml,
    }).catch((err) => console.error("Failed to send admin notification:", err));

    // SAVE TO ADMIN DASHBOARD DATABASE
    try {
      const saveRes = await fetch(`${BASE}/user/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          service: serviceType,
          message: inquiry,
          source,
        }),
      });

      const saveData = await saveRes.json();

      console.log("Contact Save Response:", saveData);

      if (!saveRes.ok) {
        console.error("Dashboard save failed:", saveData);
      }
    } catch (error) {
      console.error("Failed to save contact inquiry:", error);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. We'll get back to you shortly.",
    });
  } catch (err) {
    console.error("/api/contact error:", err);
    return NextResponse.json({ success: false, message: "Failed to submit inquiry" }, { status: 500 });
  }
}
