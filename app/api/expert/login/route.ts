import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get("authorization") ?? "";

    const backendRes = await fetch(`${BACKEND_URL}/expert/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(body),
    });

    const resData = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: resData.message ?? "Expert Login failed" },
        { status: backendRes.status }
      );
    }

    const response = NextResponse.json(
      { success: true, ...resData },
      { status: 200 }
    );

    // Extract refreshToken to set on browser via Next.js response.cookies API
    let refreshToken = body.refreshToken || resData.refreshToken;

    if (!refreshToken) {
      const setCookieHeader = backendRes.headers.get("set-cookie");
      if (setCookieHeader) {
        const match = setCookieHeader.match(/refreshToken=([^;]+)/);
        if (match && match[1]) {
          refreshToken = match[1];
        }
      }
    }

    if (refreshToken) {
      response.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 days in seconds
      });
    }

    return response;
  } catch (error) {
    console.error("[/api/expert/login] Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal error" },
      { status: 500 }
    );
  }
}
