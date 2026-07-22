import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL;

export async function POST(req: NextRequest) {
  try {
    // 1. Get the signature from headers
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { success: false, message: "Missing Razorpay signature" },
        { status: 400 }
      );
    }

    // 2. Read RAW body as ArrayBuffer to preserve exact byte sequence for HMAC validation
    const rawBodyBuffer = await req.arrayBuffer();

    // 3. Forward to backend using raw body
    const backendRes = await fetch(`${BACKEND_URL}/webhooks/razorpay`, {
      method: "POST",
      headers: {
        "x-razorpay-signature": signature,
        // Since we are sending raw buffer, we must set content-type to JSON 
        // because Razorpay sends JSON.
        "Content-Type": "application/json",
      },
      body: rawBodyBuffer,
    });

    const responseData = await backendRes.text();

    if (!backendRes.ok) {
      console.error(`Webhook backend error [${backendRes.status}]:`, responseData);
      return NextResponse.json(
        { success: false, message: "Webhook processing failed in backend" },
        { status: backendRes.status }
      );
    }

    // Forward backend response
    return new NextResponse(responseData, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error: any) {
    console.error("Razorpay Webhook Proxy Error:", error.message);
    return NextResponse.json(
      { success: false, message: "Internal Server Error in Webhook Proxy" },
      { status: 500 }
    );
  }
}
