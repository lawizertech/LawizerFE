import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const caseId = body.caseId || "default";
    const timestamp = Math.round(new Date().getTime() / 1000);
    const targetFolder = `lawizer/case_documents/${caseId}`;

    const apiSecret = process.env.CLOUDINARY_API_SECRET || "";
    const apiKey = process.env.CLOUDINARY_API_KEY || "";
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "";

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
