/**
 * POST /api/auth/refresh
 *
 * Next.js proxy that forwards the browser's HttpOnly refresh cookie to the
 * backend and returns a new access token to the client.
 *
 * Why a proxy?
 * ─────────────
 * The refresh cookie is HttpOnly — JavaScript cannot read it. The browser sends
 * it automatically on every same-origin request. This route bridges the gap:
 * the frontend calls /api/auth/refresh (same origin), the cookie rides along,
 * and this handler forwards it to the actual backend.
 *
 * The backend should also set a new HttpOnly refresh cookie in its response
 * (token rotation). We forward that Set-Cookie header back to the browser.
 */

import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    // Get refresh token from cookie or header
    const cookieToken = req.cookies.get("refreshToken")?.value;
    const reqCookieHeader = req.headers.get("cookie");
    const cookieHeader =
      reqCookieHeader && reqCookieHeader.trim().length > 0
        ? reqCookieHeader
        : cookieToken
        ? `refreshToken=${cookieToken}`
        : "";

    console.log("[/api/auth/refresh] Cookie header present:", cookieHeader ? "YES" : "NO");

    const backendRes = await fetch(`${BACKEND_URL}/auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
    });

    const body = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: body.message ?? "Refresh failed" },
        { status: backendRes.status }
      );
    }

    // Build the success response.
    const response = NextResponse.json(
      { success: true, accessToken: body.accessToken ?? body.token },
      { status: 200 }
    );

    // If the backend rotated the refresh token, set the new cookie via Next.js cookies API
    const newRefreshToken = body.refreshToken;
    if (newRefreshToken) {
      response.cookies.set("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });
    }

    return response;
  } catch (error) {
    console.error("[/api/auth/refresh] Error:", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
