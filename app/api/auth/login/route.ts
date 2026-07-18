/**
 * POST /api/auth/login
 *
 * Next.js proxy that forwards the user's login request (idToken + refreshToken)
 * to the backend and forwards the HttpOnly Set-Cookie header back to the browser
 * on the same origin (localhost:3000).
 */

import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const authHeader = req.headers.get("authorization") ?? "";

    const backendRes = await fetch(`${BACKEND_URL}/auth/login`, {
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
        { success: false, message: resData.message ?? "Login failed" },
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
      // Fallback: extract refreshToken from backend set-cookie header if NestJS set it
      const setCookieHeader = backendRes.headers.get("set-cookie");
      if (setCookieHeader) {
        const match = setCookieHeader.match(/refreshToken=([^;]+)/);
        if (match && match[1]) {
          refreshToken = match[1];
        }
      }
    }

    console.log("[/api/auth/login] Setting refreshToken cookie:", refreshToken ? "YES" : "NO");

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
    console.error("[/api/auth/login] Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal error" },
      { status: 500 }
    );
  }
}
