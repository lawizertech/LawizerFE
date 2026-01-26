import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization token missing",
          errorCode: "TOKEN_MISSING",
        },
        { status: 401 },
      );
    }

    const body = await req.json();

    const backendRes = await fetch(`${BASE}/expert/request-service`, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      cache: "no-store",
    });

    if (!backendRes.ok) {
      const errorBody = await backendRes.json().catch(() => null);

      return NextResponse.json(
        {
          success: false,
          message: errorBody?.message || "Failed to request service",
          errorCode: errorBody?.errorCode || null,
        },
        { status: backendRes.status },
      );
    }

    const data = await backendRes.json();

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (error) {
    console.error("/api/expert/request-service error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        errorCode: null,
      },
      { status: 500 },
    );
  }
}
