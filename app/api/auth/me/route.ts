/**
 * GET /api/auth/me
 *
 * Next.js proxy that forwards the request to the backend's GET /auth/me
 * endpoint to retrieve the authenticated user's session data.
 *
 * The frontend calls this after a successful token refresh to restore the
 * user profile. It sends the in-memory access token as an Authorization
 * header AND forwards the HttpOnly cookie (in case the backend needs it).
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

    return NextResponse.json(
      { success: true, data: body.data ?? body.user ?? body },
      { status: 200 }
    );
  } catch (error) {
    console.error("[/api/auth/me] GET Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal error" },
      { status: 500 }
    );
  }
}
