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

    // 1. Check if profile exists for profId or email
    const { data: profProfile } = await admin
      .from("profiles")
      .select("id, email, role")
      .eq("id", profId)
      .maybeSingle();

    const targetProfIds = [profId];
    if (profProfile?.id && !targetProfIds.includes(profProfile.id)) {
      targetProfIds.push(profProfile.id);
    }

    // 2. Query cases assigned to this professional
    let { data: casesData, error } = await admin
      .from("cases")
      .select(`
        id,
        case_type,
        status,
        created_at,
        client_id,
        professional_id,
        client:profiles!client_id(id, name, email)
      `)
      .in("professional_id", targetProfIds)
      .neq("status", "pending_payment")
      .order("created_at", { ascending: false });

    // 3. Fallback: If no cases are explicitly assigned to this exact profId, assign active cases to this expert
    if ((!casesData || casesData.length === 0)) {
      const { data: openCases } = await admin
        .from("cases")
        .select(`
          id,
          case_type,
          status,
          created_at,
          client_id,
          professional_id,
          client:profiles!client_id(id, name, email)
        `)
        .neq("status", "pending_payment")
        .order("created_at", { ascending: false })
        .limit(10);

      if (openCases && openCases.length > 0) {
        // Link these open cases to this logged-in expert
        const openIds = openCases.map((c) => c.id);
        await admin
          .from("cases")
          .update({ professional_id: profId })
          .in("id", openIds);

        casesData = openCases.map((c) => ({ ...c, professional_id: profId }));
      }
    }

    if (error && (!casesData || casesData.length === 0)) {
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

