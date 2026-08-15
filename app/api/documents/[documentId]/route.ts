import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import crypto from "crypto";

export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ documentId: string }> }
) {
  try {
    const { documentId } = await context.params;

    // 1. Authenticate Request
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    // Verify token with Supabase Auth
    const { data: { user }, error: authError } = await admin.auth.getUser(token);
    if (authError || !user) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    const authenticatedUserId = user.id;

    // 2. Fetch document from PostgreSQL
    const { data: doc, error: fetchError } = await admin
      .from("case_documents")
      .select("id, case_id, storage_path, filename, uploaded_by")
      .eq("id", documentId)
      .single();

    if (fetchError || !doc) {
      return NextResponse.json({ success: false, message: "Document not found" }, { status: 404 });
    }

    // 3. Fetch Case and User Profile for Authorization
    const [caseQuery, profileQuery] = await Promise.all([
      admin.from("cases").select("id, professional_id").eq("id", doc.case_id).single(),
      admin.from("profiles").select("id, role").eq("id", authenticatedUserId).single(),
    ]);

    const caseData = caseQuery.data;
    const profile = profileQuery.data;

    if (caseQuery.error || !caseData) {
      return NextResponse.json({ success: false, message: "Associated case not found" }, { status: 404 });
    }

    // 4. Enforce Authorization Checks
    const isAssignedProfessional = caseData.professional_id === authenticatedUserId;
    const isDocumentOwner = doc.uploaded_by === authenticatedUserId;
    const isAdmin = profile?.role?.toLowerCase() === "admin";

    if (!isAssignedProfessional && !isDocumentOwner && !isAdmin) {
      return NextResponse.json({ success: false, message: "Forbidden" }, { status: 403 });
    }

    const storagePath = doc.storage_path;
    const isCloudinary = storagePath.includes("res.cloudinary.com");

    // 5. Delete file from physical storage
    if (isCloudinary) {
      // Clean up Cloudinary Asset
      const match = storagePath.match(/res\.cloudinary\.com\/[^/]+\/([^/]+)\/upload\/v\d+\/(.+)$/);
      if (match) {
        const resourceType = match[1];
        const pathAndFile = match[2];
        const publicId = resourceType === "raw" ? pathAndFile : pathAndFile.replace(/\.[^/.]+$/, "");

        const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
        const apiKey = process.env.CLOUDINARY_API_KEY;
        const apiSecret = process.env.CLOUDINARY_API_SECRET;

        if (!cloudName || !apiKey || !apiSecret) {
          return NextResponse.json(
            { success: false, message: "Cloudinary credentials missing from environment" },
            { status: 500 }
          );
        }

        try {
          const timestamp = Math.round(new Date().getTime() / 1000);
          const stringToSign = `public_id=${publicId}&timestamp=${timestamp}`;
          const signature = crypto
            .createHash("sha1")
            .update(stringToSign + apiSecret)
            .digest("hex");

          const cloudinaryFormData = new FormData();
          cloudinaryFormData.append("public_id", publicId);
          cloudinaryFormData.append("timestamp", timestamp.toString());
          cloudinaryFormData.append("api_key", apiKey);
          cloudinaryFormData.append("signature", signature);

          const destroyRes = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/destroy`,
            {
              method: "POST",
              body: cloudinaryFormData,
            }
          );

          if (!destroyRes.ok) {
            const errInfo = await destroyRes.json().catch(() => null);
            console.error("Cloudinary delete API rejected request:", errInfo);
            return NextResponse.json(
              { success: false, message: "Cloudinary storage delete failed" },
              { status: 502 }
            );
          }

          const destroyResult = await destroyRes.json().catch(() => null);
          if (!destroyResult || (destroyResult.result !== "ok" && destroyResult.result !== "not found")) {
            console.error("Cloudinary delete result invalid:", destroyResult);
            return NextResponse.json(
              { success: false, message: `Cloudinary storage delete failed: ${destroyResult?.result || "unknown error"}` },
              { status: 502 }
            );
          }
        } catch (cloudErr: any) {
          console.error("Cloudinary delete exception:", cloudErr);
          return NextResponse.json(
            { success: false, message: `Cloudinary storage delete failed: ${cloudErr.message || cloudErr}` },
            { status: 502 }
          );
        }
      } else {
        console.warn("Cloudinary URL did not match expected structure for deletion parsing.");
      }
    } else {
      // Fallback for legacy Supabase Storage URL
      let relativePath = storagePath;
      if (storagePath.includes("/case_documents/")) {
        relativePath = storagePath.split("/case_documents/")[1];
      }
      if (relativePath) {
        const { error: storageErr } = await admin.storage
          .from("case_documents")
          .remove([relativePath]);
        if (storageErr) {
          console.error("Supabase storage delete error:", storageErr.message);
          return NextResponse.json(
            { success: false, message: `Supabase storage delete failed: ${storageErr.message}` },
            { status: 502 }
          );
        }
      }
    }

    // 6. Delete row from PostgreSQL database
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
