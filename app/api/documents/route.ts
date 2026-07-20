import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const caseId = searchParams.get("caseId");

    if (!caseId) {
      return NextResponse.json({ error: "caseId parameter required" }, { status: 400 });
    }

    const admin = createAdminClient();

    const { data: docs, error } = await admin
      .from("case_documents")
      .select("id, case_id, storage_path, filename, file_type, size_bytes, created_at")
      .eq("case_id", caseId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("GET /api/documents error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const formattedDocs = (docs || []).map((d: any) => ({
      id: d.id,
      caseId: d.case_id,
      name: d.filename || "Case Document",
      fileUrl: d.storage_path,
      fileType: d.file_type,
      sizeBytes: d.size_bytes,
      createdAt: d.created_at,
    }));

    return NextResponse.json({ success: true, documents: formattedDocs });
  } catch (err: any) {
    console.error("GET /api/documents exception:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
