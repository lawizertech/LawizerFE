import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing", errorCode: "TOKEN_MISSING" },
        { status: 401 }
      );
    }

    const backendRes = await fetch(`${BASE}/notifications/recent`, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    const data = await backendRes.json().catch(() => null);

    if (!backendRes.ok) {
      if (backendRes.status === 404) {
        return NextResponse.json({
          success: true,
          notifications: [],
        });
      }

      return NextResponse.json(
        {
          success: false,
          message: data?.message || "Failed to fetch notifications",
          errorCode: data?.errorCode || null,
        },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({
      success: true,
      notifications: data.notifications || [],
    });
  } catch (error) {
    console.error("GET /api/user/notifications error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing", errorCode: "TOKEN_MISSING" },
        { status: 401 }
      );
    }

    // Only endpoint here is read-all
    if (req.url.endsWith("/read-all")) {
      const backendRes = await fetch(`${BASE}/notifications/read-all`, {
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
            message: data?.message || "Failed to mark all as read",
            errorCode: data?.errorCode || null,
          },
          { status: backendRes.status }
        );
      }

      return NextResponse.json({
        success: true,
        message: data.message || "All notifications marked as read",
      });
    }

    return NextResponse.json({ success: false, message: "Not found" }, { status: 404 });
  } catch (error) {
    console.error("POST /api/user/notifications error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
