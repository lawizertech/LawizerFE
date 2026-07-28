import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json({ error: "Authorization header missing" }, { status: 401 });
    }

    const body = await req.json();
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
    
    const res = await axios.post(`${backendUrl}/meetings/create`, body, {
      headers: {
        Authorization: authHeader,
      },
    });

    return NextResponse.json(res.data, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/meetings/create error:", error?.response?.data || error.message);

    return NextResponse.json(
      { error: error?.response?.data?.message || "Failed to create meeting" },
      { status: error?.response?.status || 500 }
    );
  }
}
