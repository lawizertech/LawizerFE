import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function GET(req: Request) {
  try {

    const { searchParams } = new URL(req.url);
    const expertType = searchParams.get("expertType");

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json(
        {
          success: false,
          message: "Authorization token missing",
          errorCode: "TOKEN_MISSING",
        },
        { status: 401 } // Status Code
      );
    }

    /* ===================== FIREBASE REQUEST ===================== */

    const url = new URL(`${BASE}/advocate/fetch-consultations`);
    if (expertType) {
      url.searchParams.set("expertType", expertType);
    }

    const firebaseRes = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: authHeader,
      },
      cache: "no-store",
    });

    if (!firebaseRes.ok) {
      const errorBody = await firebaseRes.json().catch(() => null);

      return NextResponse.json(
        {
          success: false,
          message: errorBody?.message || "Failed to fetch consultations",
          errorCode: errorBody?.errorCode || null,
        },
        { status: firebaseRes.status } // Status Code
      );
    }

    const data = await firebaseRes.json();

    /* ===================== SUCCESS RESPONSE ===================== */

    return NextResponse.json(
      {
        success: true,
        ...data,
      },
      { status: 200 } // Status Code
    );
  } catch (err: any) {
    console.error("/api/expert/consultations error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        errorCode: null,
      },
      { status: 500 } // Status Code
    );
  }
}
