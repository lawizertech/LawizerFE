/**
 * GET /api/auth/session
 *
 * Returns the currently authenticated user's profile by forwarding the
 * request (with the HttpOnly refresh cookie) to the backend /auth/me endpoint.
 *
 * This is the authoritative source of user data — the frontend never decodes
 * the JWT to display profile information.
 *
 * POST /api/auth/logout
 *
 * Asks the backend to invalidate the refresh token and instructs the browser
 * to clear the HttpOnly refresh cookie.
 */

import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest) {
  try {
    const cookieHeader = req.headers.get("cookie") ?? "";
    const authHeader = req.headers.get("authorization") ?? "";

    const backendRes = await fetch(`${BACKEND_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
        Authorization: authHeader,
      },
    });

    const body = await backendRes.json();

    if (!backendRes.ok) {
      return NextResponse.json(
        { success: false, message: body.message ?? "Unauthorized" },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({ success: true, user: body.user ?? body.data ?? body }, { status: 200 });
  } catch (error) {
    console.error("[/api/auth/session] GET Error:", error);
    return NextResponse.json({ success: false, message: "Internal error" }, { status: 500 });
  }
}
