import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { z } from "zod";

const assignCaseSchema = z.object({
  caseId: z.string().uuid().optional(),
  clientId: z.string().uuid(),
  professionalId: z.string().uuid(),
  caseType: z.string().default("Corporate Legal & Tax Consultation"),
  title: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = assignCaseSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid parameters", details: parsed.error.format() },
        { status: 400 }
      );
    }

    const { caseId, clientId, professionalId, caseType, title } = parsed.data;
    const admin = createAdminClient();

    // Verify professional exists
    const { data: prof, error: profError } = await admin
      .from("profiles")
      .select("id, name, role")
      .eq("id", professionalId)
      .single();

    if (profError || !prof) {
      return NextResponse.json({ error: "Professional profile not found" }, { status: 404 });
    }

    // Verify client exists
    const { data: client, error: clientError } = await admin
      .from("profiles")
      .select("id, name, role")
      .eq("id", clientId)
      .single();

    if (clientError || !client) {
      return NextResponse.json({ error: "Client profile not found" }, { status: 404 });
    }

    const caseMetadata = {
      title: title || caseType,
      description: `Active litigation & consultation channel between ${client.name || "Client"} and ${prof.name || "Professional"}`,
      updated_at: new Date().toISOString(),
    };

    if (caseId) {
      // Update or insert with explicit ID
      const { data: updatedCase, error: updateError } = await admin
        .from("cases")
        .upsert({
          id: caseId,
          client_id: clientId,
          professional_id: professionalId,
          case_type: caseType,
          status: "in_progress",
          metadata: caseMetadata,
          updated_at: new Date().toISOString(),
        })
        .select(`
          id,
          case_type,
          status,
          metadata,
          created_at,
          client:profiles!client_id(id, name, email),
          professional:profiles!professional_id(id, name, email)
        `)
        .single();

      if (updateError) {
        console.error("Failed to assign case:", updateError);
        return NextResponse.json({ error: "Failed to assign case", details: updateError }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: `Case ${caseId} assigned successfully to ${prof.name || prof.id}`,
        case: updatedCase,
      });
    } else {
      // Create new case
      const { data: newCase, error: insertError } = await admin
        .from("cases")
        .insert({
          client_id: clientId,
          professional_id: professionalId,
          case_type: caseType,
          status: "in_progress",
          metadata: caseMetadata,
        })
        .select(`
          id,
          case_type,
          status,
          metadata,
          created_at,
          client:profiles!client_id(id, name, email),
          professional:profiles!professional_id(id, name, email)
        `)
        .single();

      if (insertError) {
        console.error("Failed to create case:", insertError);
        return NextResponse.json({ error: "Failed to create case" }, { status: 500 });
      }

      return NextResponse.json({
        success: true,
        message: `New case created and assigned to ${prof.name || prof.id}`,
        case: newCase,
      });
    }
  } catch (err: any) {
    console.error("POST /api/cases/assign error:", err);
    return NextResponse.json({ error: err.message || "Internal server error" }, { status: 500 });
  }
}
