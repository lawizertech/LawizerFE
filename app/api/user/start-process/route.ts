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

async function forwardStartProcess(authHeader: string, body: unknown) {
  return fetch(`${BASE}/user/start-process`, {
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

    // Validate required fields
    if (!body.serviceCode) {
      return NextResponse.json({ success: false, message: "Service code is required" }, { status: 400 });
    }

    if (body.clientDetails) {
      const { fullName, email, phone } = body.clientDetails;
      if (!fullName || !email || !phone) {
        return NextResponse.json(
          {
            success: false,
            message: "Full name, email, and phone are required",
          },
          { status: 400 },
        );
      }
    }

    // Forward request to backend
    let backendRes = await forwardStartProcess(authHeader, body);

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);

      if (backendRes.status === 401 && error?.errorCode === "TOKEN_EXPIRED") {
        const newToken = await renewToken(authHeader);

        if (newToken) {
          backendRes = await forwardStartProcess(`Bearer ${newToken}`, body);
        }
      }
    }

    if (!backendRes.ok) {
      const error = await backendRes.json().catch(() => null);
      return NextResponse.json(
        {
          success: false,
          message: error?.message || "Failed to start process",
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
    console.error("/api/user/start-process error:", err);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
