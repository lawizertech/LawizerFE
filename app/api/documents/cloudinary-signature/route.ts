import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    // We allow this endpoint for both clients and experts, so we forward the auth header if present.
    // However, some flows might not have it strictly required here depending on backend logic.
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (authHeader) headers["Authorization"] = authHeader;

    const body = await req.json();

    const backendRes = await fetch(`${BASE}/documents/cloudinary-signature`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    if (!backendRes.ok) {
      const errorBody = await backendRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: errorBody?.message || "Failed to generate signature",
        },
        { status: backendRes.status },
      );
    }

    const data = await backendRes.json();
    return NextResponse.json({ success: true, ...data });
  } catch (error) {
    console.error("POST /api/documents/cloudinary-signature error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
