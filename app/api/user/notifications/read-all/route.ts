import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

/**
 * POST /api/user/notifications/read-all
 *
 * Marks all unread notifications for the authenticated user as read.
 * Previously this was handled by a req.url.endsWith() check inside the
 * parent /notifications route, which never fired because Next.js routes
 * /notifications/read-all to the [id] dynamic segment, not the parent.
 * This dedicated file fixes that routing gap.
 */
export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing", errorCode: "TOKEN_MISSING" },
        { status: 401 }
      );
    }

    const backendRes = await fetch(`${BASE}/notifications/read-all`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    const data = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Failed to mark all notifications as read",
          errorCode: data?.errorCode || null,
        },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data?.message || "All notifications marked as read",
    });
  } catch (error) {
    console.error("POST /api/user/notifications/read-all error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
