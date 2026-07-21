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

    const admin = createAdminClient();

    // Sanitize filename and create storage path
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
    const storagePath = `${serviceId}/${timestamp}_${cleanFileName}`;

    // Convert file to ArrayBuffer/Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 1. Upload directly to Supabase Storage 'case_documents' bucket
    const { data: storageData, error: storageError } = await admin.storage
      .from("case_documents")
      .upload(storagePath, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: true,
      });

    if (storageError) {
      console.error("Supabase storage upload error:", storageError);
      return NextResponse.json(
        { success: false, message: storageError.message || "Storage upload failed" },
        { status: 500 }
      );
    }

    // 2. Get Public URL
    const { data: publicUrlData } = admin.storage
      .from("case_documents")
      .getPublicUrl(storagePath);

    const publicUrl = publicUrlData?.publicUrl || storagePath;

    // 3. Insert record into `case_documents` PostgreSQL table
    const docId = crypto.randomUUID();
    const { error: dbError } = await admin.from("case_documents").insert({
      id: docId,
      case_id: serviceId,
      storage_path: publicUrl,
      filename: file.name,
      file_type: file.type || "application/octet-stream",
      size_bytes: file.size,
    });

    if (dbError) {
      console.error("Database insert case_documents error:", dbError);
    }

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
