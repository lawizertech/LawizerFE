import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ success: false, message: "Authorization token missing" }, { status: 401 });
    }

    // Parse request body
    const body = await req.json();

    // Validate required fields
    if (!body.serviceCode) {
      return NextResponse.json({ success: false, message: "Service code is required" }, { status: 400 });
    }

    if (body.clientDetails) {
      const { fullName, email, phone } = body.clientDetails;
      if (!fullName || !email || !phone) {
        return NextResponse.json(
          {
            success: false,
            message: "Full name, email, and phone are required",
          },
          { status: 400 },
        );
      }
    }

    // Forward request to backend
    const backendRes = await fetch(`${BASE}/user/start-process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Failed to start process",
        },
        { status: backendRes.status },
      );
    }

    const data = await backendRes.json();

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (err) {
    console.error("/api/user/start-process error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
