import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization token missing",
          errorCode: "TOKEN_MISSING",
        },
        { status: 401 }
      );
    }

    const firebaseRes = await fetch(`${BASE}/advocate/expert/profile`, {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    if (!firebaseRes.ok) {
      const errorBody = await firebaseRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: errorBody?.message || "Failed to fetch expert profile",
          errorCode: errorBody?.errorCode || null,
        },
        { status: firebaseRes.status }
      );
    }

    const data = await firebaseRes.json();

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (err: any) {
    console.error("/api/expert/profile error:", err);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        errorCode: null,
      },
      { status: 500 }
    );
  }
}
