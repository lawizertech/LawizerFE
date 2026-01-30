import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: "Authorization token missing" },
        { status: 401 },
      );
    }

    const { serviceCode, notes } = await req.json();

    const backendRes = await fetch(`${BASE_URL}/user/service-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify({ serviceCode, notes }),
      cache: "no-store",
    });

    const text = await backendRes.text();
    const data = text ? JSON.parse(text) : null;

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: data?.message || "Failed" },
        { status: backendRes.status },
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("/api/user/service-request error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
