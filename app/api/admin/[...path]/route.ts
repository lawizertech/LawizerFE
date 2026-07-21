import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export async function GET(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  try {
    const resolvedParams = await params;
    const pathStr = resolvedParams.path.join("/");
    const url = new URL(req.url);
    const queryString = url.search;

    const targetUrl = `${BACKEND_URL}/admin/${pathStr}${queryString}`;
    const res = await fetch(targetUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("[/api/admin proxy GET] Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to fetch admin backend" }, { status: 500 });
  }
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ path: string[] }> }) {
  try {
    const resolvedParams = await params;
    const pathStr = resolvedParams.path.join("/");
    const body = await req.json();

    const targetUrl = `${BACKEND_URL}/admin/${pathStr}`;
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error("[/api/admin proxy POST] Error:", error);
    return NextResponse.json({ success: false, message: error.message || "Failed to post admin backend" }, { status: 500 });
  }
}
