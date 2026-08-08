import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing", errorCode: "TOKEN_MISSING" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const backendRes = await fetch(`${BASE}/notifications/${id}/read`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
      },
    });

    const data = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Failed to mark notification as read",
          errorCode: data?.errorCode || null,
        },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: data.message || "Notification marked as read",
    });
  } catch (error) {
    console.error("POST /api/user/notifications/[id]/read error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
