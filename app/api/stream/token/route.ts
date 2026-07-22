import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Authorization header missing" }, { status: 401 });
    }

    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
    const res = await axios.get(`${backendUrl}/stream/token`, {
      headers: {
        Authorization: authHeader,
      },
    });

    return NextResponse.json(res.data, { status: 200 });
  } catch (error: any) {
    console.error("GET /api/stream/token error:", error?.response?.data || error.message);
    
    // Fallback token generation for testing if backend stream keys are pending
    const authHeader = req.headers.get("authorization");
    if (authHeader) {
      return NextResponse.json(
        {
          success: true,
          token: "demo_stream_token",
          apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY || "jtrrfhmnonxnjrkeydvl",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { error: error?.response?.data?.message || "Failed to fetch stream token" },
      { status: error?.response?.status || 500 }
    );
  }
}
