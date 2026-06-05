import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email/mailer";
import { callbackRequestEmailTemplate } from "@/lib/email/templates";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

/**
 * Get user profile from backend using auth token
 */
async function getUserProfile(authHeader: string) {
  try {
    const profileRes = await fetch(`${BASE}/auth/profile`, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    if (profileRes.ok) {
      return await profileRes.json();
    }
    return null;
  } catch (err) {
    console.error("Failed to fetch user profile:", err);
    return null;
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing" },
        { status: 401 },
      );
    }

    // Forward request to backend (no body needed - user details auto-filled)
    const backendRes = await fetch(`${BASE}/user/request-call`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Failed to request call",
        },
        { status: backendRes.status },
      );
    }

    const data = await backendRes.json();

    // 📧 Send confirmation email to user
    try {
      const userProfile = await getUserProfile(authHeader);

      if (userProfile?.email) {
        const userName = userProfile.displayName || userProfile.email.split("@")[0];
        const emailHtml = callbackRequestEmailTemplate(userName, userProfile.email);

        await sendEmail({
          to: userProfile.email,
          subject: "Callback Request Received - Lawizer",
          html: emailHtml,
          from: "admin@lawizer.com",
        });

        console.log(
          `Callback confirmation email sent to ${userProfile.email}`
        );
      }
    } catch (emailErr) {
      // Log email error but don't fail the request
      console.error("Failed to send callback email:", emailErr);
    }

    return NextResponse.json({
      success: true,
      message: "Callback request submitted. Confirmation email sent.",
      ...data,
    });
  } catch (err) {
    console.error("/api/user/request-call error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
