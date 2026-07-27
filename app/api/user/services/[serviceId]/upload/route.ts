import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(
  req: NextRequest,
  context: { params: Promise<{ serviceId: string }> }
) {
  try {
    const { serviceId } = await context.params;
    const formData = await req.formData();
    const docKey = (formData.get("documentKey") as string) || "general_document";
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ success: false, message: "No file provided" }, { status: 400 });
    }

    // Convert file to Base64 Data URI for Cloudinary upload
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const mimeType = file.type || "application/octet-stream";
    const base64Data = `data:${mimeType};base64,${buffer.toString("base64")}`;

    // Call NestJS Backend Cloudinary Upload Endpoint
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    try {
      const uploadRes = await fetch(`${backendUrl}/api/documents/cloudinary-upload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          caseId: serviceId,
          fileData: base64Data,
          filename: file.name,
          fileType: mimeType,
        }),
      });

      const uploadJson = await uploadRes.json();

      if (uploadJson.success && uploadJson.document) {
        return NextResponse.json({
          success: true,
          document: {
            ...uploadJson.document,
            docKey,
          },
        });
      }
    } catch (backendErr) {
      console.warn("NestJS Backend Cloudinary endpoint notice:", backendErr);
    }

    // Fallback: Direct database insert if backend endpoint not called directly
    const admin = createAdminClient();
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const storagePath = `${serviceId}/${timestamp}_${cleanFileName}`;

    const { data: storageData, error: storageError } = await admin.storage
      .from("case_documents")
      .upload(storagePath, buffer, {
        contentType: mimeType,
        upsert: true,
      });

    const { data: publicUrlData } = admin.storage
      .from("case_documents")
      .getPublicUrl(storagePath);

    const publicUrl = publicUrlData?.publicUrl || storagePath;
    const docId = crypto.randomUUID();

    await admin.from("case_documents").insert({
      id: docId,
      case_id: serviceId,
      storage_path: publicUrl,
      filename: file.name,
      file_type: mimeType,
      size_bytes: file.size,
    });

    return NextResponse.json({
      success: true,
      document: {
        id: docId,
        caseId: serviceId,
        docKey,
        name: file.name,
        fileUrl: publicUrl,
        size: file.size,
        createdAt: new Date().toISOString(),
      },
    });
  } catch (err: any) {
    console.error("Upload API route exception:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}

