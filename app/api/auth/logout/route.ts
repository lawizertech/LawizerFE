/**
 * POST /api/auth/logout
 *
 * Invalidates the refresh token on the backend and clears the HttpOnly
 * refresh cookie from the browser.
 *
 * The frontend cannot clear an HttpOnly cookie with JavaScript — only a
 * server response with `Set-Cookie: refreshToken=; MaxAge=0` can do it.
 * This route issues that response.
 */

import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const authHeader = req.headers.get("authorization") ?? "";

    // Ask the backend to invalidate the refresh token in its database.
    // Best-effort: we clear the cookie regardless of whether the backend call
    // succeeds, so the user is always logged out on this device.
    try {
      await fetch(`${BACKEND_URL}/auth/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: cookieHeader,
          Authorization: authHeader,
        },
      });
    } catch {
      // Backend unavailable — still clear the cookie locally.
    }

    // Build a response that clears the refresh cookie on the browser.
    const response = NextResponse.json({ success: true }, { status: 200 });

    // Clear the cookie via Next.js response.cookies API
    response.cookies.delete("refreshToken");

    return response;
  } catch (error) {
    console.error("[/api/auth/logout] Error:", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
