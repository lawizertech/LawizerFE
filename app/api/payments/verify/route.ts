import { NextResponse } from "next/server";

const BASE = process.env.NEXT_PUBLIC_API_URL!;

async function renewToken(authHeader: string) {
  const renewRes = await fetch(`${BASE}/auth/renew-token`, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
    cache: "no-store",
  });

  if (!renewRes.ok) {
    return null;
  }

  const renewData = await renewRes.json().catch(() => null);
  return renewData?.newToken || null;
}

async function forwardVerifyPayment(authHeader: string, body: unknown) {
  return fetch(`${BASE}/payments/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: authHeader,
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ success: false, message: "Authorization token missing" }, { status: 401 });
    }

    // Parse request body
    const body = await req.json();

    // Validate required fields — processCode is optional; the backend can resolve
    // it from the razorpay_order_id stored on the case document.
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;
    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment verification parameters missing (razorpay_payment_id, razorpay_order_id, razorpay_signature are required)",
        },
        { status: 400 },
      );
    }

    // Forward request to backend
    let backendRes = await forwardVerifyPayment(authHeader, body);

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);

      if (backendRes.status === 401 && error?.errorCode === "TOKEN_EXPIRED") {
        const newToken = await renewToken(authHeader);

        if (newToken) {
          backendRes = await forwardVerifyPayment(`Bearer ${newToken}`, body);
        }
      }
    }

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Failed to verify payment",
        },
        { status: backendRes.status },
      );
    }

    const data = await backendRes.json();

    return NextResponse.json({
      success: true,
      ...data,
    });
  } catch (err) {
    console.error("/api/payments/verify error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
