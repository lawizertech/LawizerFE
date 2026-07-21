/**
 * POST /api/calls/initiate
 *
 * Creates a call record in the `calls` table and logs a CALL_CREATED event.
 * The caller's client-side VideoCall component will then broadcast `call-ping`
 * on the `room_{caseId}` Supabase channel to begin WebRTC signaling.
 *
 * Body: { caseId, mode, calleeId }
 * Returns: { callId, callRecord }
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  caseId: z.string().uuid(),
  mode: z.enum(["voice", "video"]),
  calleeId: z.string().uuid(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body", details: parsed.error.flatten() }, { status: 400 });
    }

    // ── Auth ─────────────────────────────────────────────────────────────────
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();
    const { data: { user }, error: authError } = await admin.auth.getUser(authHeader.replace("Bearer ", ""));
    if (authError || !user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    const { caseId, mode, calleeId } = parsed.data;

    // ── Verify caller is a case participant ───────────────────────────────────
    const { data: caseData, error: caseErr } = await admin
      .from("cases")
      .select("client_id, professional_id")
      .eq("id", caseId)
      .single();

    if (caseErr || !caseData) {
      return NextResponse.json({ error: "Case not found" }, { status: 404 });
    }

    const isParticipant = caseData.client_id === user.id || caseData.professional_id === user.id;
    if (!isParticipant) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // ── Insert call record ───────────────────────────────────────────────────
    const callId = crypto.randomUUID();
    const now = new Date().toISOString();

    const { data: callRecord, error: insertErr } = await admin
      .from("calls")
      .insert({
        id: callId,
        case_id: caseId,
        initiated_by: user.id,
        mode,
        status: "initiated",
        started_at: now,
        recording_enabled: false,
      })
      .select()
      .single();

    if (insertErr) {
      console.error("calls insert error:", insertErr);
      return NextResponse.json({ error: "Failed to create call record" }, { status: 500 });
    }

    // ── Log call event ────────────────────────────────────────────────────────
    await admin.from("call_events").insert({
      call_id: callId,
      event_type: "CALL_CREATED",
      actor_id: user.id,
      metadata: { mode, case_id: caseId },
    }).then(({ error }) => {
      if (error) console.warn("call_events insert warning:", error);
    });

    // ── Create notification for callee ────────────────────────────────────────
    await admin.from("notifications").insert({
      recipient_id: calleeId,
      type: "incoming_call",
      payload: {
        call_id: callId,
        case_id: caseId,
        caller_id: user.id,
        mode,
      },
    }).then(({ error }) => {
      if (error) console.warn("notification insert warning:", error);
    });

    return NextResponse.json({ callId, callRecord }, { status: 201 });
  } catch (err: any) {
    console.error("POST /api/calls/initiate error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
