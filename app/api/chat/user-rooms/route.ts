import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const clientId = searchParams.get("clientId");

    if (!clientId) {
      return NextResponse.json({ error: "clientId parameter required" }, { status: 400 });
    }

    const admin = createAdminClient();

    const { data: casesData, error } = await admin
      .from("cases")
      .select(`
        id,
        case_type,
        status,
        created_at,
        professional_id,
        professional:profiles!professional_id(id, name, email)
      `)
      .eq("client_id", clientId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("GET /api/chat/user-rooms error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Filter to cases that have an assigned professional or active status
    const assignedCases = (casesData || []).filter((c: any) => c.professional_id || c.professional);

    const rooms = assignedCases.map((c: any) => {
      const profName = c.professional?.name || c.professional?.email || "Assigned Professional";
      const cTitle = c.case_type || `Case #${c.id.substring(0, 8).toUpperCase()}`;

      return {
        caseId: c.id,
        professionalId: c.professional_id,
        professionalName: profName,
        caseTitle: cTitle,
        lastMessage: "Live real-time encrypted litigation channel",
        updatedAt: c.created_at,
      };
    });

    return NextResponse.json({ success: true, rooms });
  } catch (err: any) {
    console.error("GET /api/chat/user-rooms exception:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
