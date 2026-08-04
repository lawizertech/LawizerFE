import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const caseId = body.caseId || "default";
    const timestamp = Math.round(new Date().getTime() / 1000);
    const targetFolder = `lawizer/case_documents/${caseId}`;

    const apiSecret = "TxlNdzzcfL0s8QzhUI2LaEhy38o";
    const apiKey = "969715443973461";
    const cloudName = "q1n6i5c4";

    const stringToSign = `folder=${targetFolder}&timestamp=${timestamp}`;
    const signature = crypto
      .createHash("sha1")
      .update(stringToSign + apiSecret)
      .digest("hex");

    return NextResponse.json({
      success: true,
      timestamp,
      signature,
      folder: targetFolder,
      apiKey,
      cloudName,
      uploadUrl: `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
    });
  } catch (error) {
    console.error("POST /api/documents/cloudinary-signature error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
