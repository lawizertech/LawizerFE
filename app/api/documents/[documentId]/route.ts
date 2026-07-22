import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ documentId: string }> }
) {
  try {
    const { documentId } = await context.params;
    const admin = createAdminClient();

    // 1. Fetch document from PostgreSQL
    const { data: doc, error: fetchError } = await admin
      .from("case_documents")
      .select("id, storage_path, filename")
      .eq("id", documentId)
      .single();

    if (fetchError || !doc) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }

    // Extract relative storage path if URL
    let relativePath = doc.storage_path;
    if (doc.storage_path.includes("/case_documents/")) {
      relativePath = doc.storage_path.split("/case_documents/")[1];
    }

    // 2. Remove file from Supabase Storage bucket
    if (relativePath) {
      const { error: storageErr } = await admin.storage
        .from("case_documents")
        .remove([relativePath]);
      if (storageErr) {
        console.warn("Storage file delete warning:", storageErr.message);
      }
    }

    // 3. Remove row from PostgreSQL case_documents table
    const { error: dbErr } = await admin.from("case_documents").delete().eq("id", documentId);
    if (dbErr) {
      console.error("PostgreSQL document delete error:", dbErr);
      return NextResponse.json({ success: false, message: dbErr.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Document deleted successfully",
      deletedDocumentId: documentId,
    });
  } catch (err: any) {
    console.error("DELETE /api/documents exception:", err);
    return NextResponse.json(
      { success: false, message: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
