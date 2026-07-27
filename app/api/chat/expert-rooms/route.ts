import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const profId = searchParams.get("profId");

    if (!profId) {
      return NextResponse.json({ error: "profId parameter required" }, { status: 400 });
    }

    const admin = createAdminClient();

    const { data: casesData, error } = await admin
      .from("cases")
      .select(`
        id,
        case_type,
        status,
        created_at,
        client_id,
        client:profiles!client_id(id, name, email)
      `)
      .eq("professional_id", profId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("GET /api/chat/expert-rooms error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    const rooms = (casesData || []).map((c: any) => {
      const clientName = c.client?.name || c.client?.email || "Assigned Client";
      const cTitle = c.case_type || `Case #${c.id.substring(0, 8).toUpperCase()}`;

      return {
        caseId: c.id,
        clientId: c.client_id,
        clientName,
        caseTitle: cTitle,
        lastMessage: "Direct encrypted litigation channel with client",
        updatedAt: c.created_at,
      };
    });

    return NextResponse.json({ success: true, rooms });
  } catch (err: any) {
    console.error("GET /api/chat/expert-rooms exception:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
