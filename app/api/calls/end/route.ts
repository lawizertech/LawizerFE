/**
 * POST /api/calls/end
 *
 * Marks a call as ended, calculates duration, logs a CALL_ENDED event.
 * Called by VideoCall's hangUp() on either side.
 *
 * Body: { callId, reason? }
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  callId: z.string().uuid(),
  reason: z.enum(["hang-up", "rejected", "timeout", "error"]).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    // Auth is best-effort here — we still try to end the call if possible
    const admin = createAdminClient();
    let actorId: string | null = null;

    const authHeader = req.headers.get("authorization");
    if (authHeader?.startsWith("Bearer ")) {
      const { data: { user } } = await admin.auth.getUser(authHeader.replace("Bearer ", ""));
      actorId = user?.id ?? null;
    }

    const { callId, reason = "hang-up" } = parsed.data;

    const { data: call, error: callErr } = await admin
      .from("calls")
      .select("started_at, answered_at, status, caller_id, callee_id")
      .eq("id", callId)
      .single();

    if (callErr || !call) {
      return NextResponse.json({ error: "Call not found" }, { status: 404 });
    }

    // Verify requester is a participant (skip if auth not provided — best-effort)
    if (actorId && call.caller_id !== actorId && call.callee_id !== actorId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Calculate duration in seconds from answered_at → now
    const now = new Date();
    const answerTime = call.answered_at ? new Date(call.answered_at) : null;
    const duration = answerTime ? Math.round((now.getTime() - answerTime.getTime()) / 1000) : 0;

    const { error: updateErr } = await admin
      .from("calls")
      .update({
        status: "ended",
        ended_at: now.toISOString(),
        duration,
      })
      .eq("id", callId);

    if (updateErr) {
      console.error("calls update error:", updateErr);
      return NextResponse.json({ error: "Failed to end call" }, { status: 500 });
    }

    await admin.from("call_events").insert({
      call_id: callId,
      event_type: "CALL_ENDED",
      actor_id: actorId,
      metadata: { reason, duration },
    }).then(({ error }) => {
      if (error) console.warn("call_events insert warning:", error);
    });

    return NextResponse.json({ success: true, duration });
  } catch (err: any) {
    console.error("POST /api/calls/end error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
