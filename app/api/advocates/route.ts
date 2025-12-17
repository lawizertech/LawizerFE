import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

export async function GET() {
  try {
    const firebaseRes = await fetch(`${BASE}/consultation/fetch-advocates`, {
      method: "GET",
      cache: "no-store",
    });

    if (!firebaseRes.ok) {
      const errorBody = await firebaseRes.json().catch(() => null);

      return NextResponse.json(
        {
          success: false,
          message: errorBody?.message || "Failed to fetch advocates",
          errorCode: errorBody?.errorCode || null,
        },
        { status: firebaseRes.status }
      );
    }

    const data = await firebaseRes.json();
    console.log("Called and data below is sent");
    console.log(data);

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (err: any) {
    console.error("/api/advocates error:", err);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
        errorCode: null,
      },
      { status: 500 }
    );
  }
}
