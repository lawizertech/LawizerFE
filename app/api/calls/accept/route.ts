/**
 * POST /api/calls/accept
 *
 * Updates the call status to "accepted" and logs a CALL_ACCEPTED event.
 * Called by the callee's VideoCall component after it receives the WebRTC offer.
 *
 * Body: { callId }
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import { z } from "zod";

const schema = z.object({
  callId: z.string().uuid(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();
    const { data: { user }, error: authError } = await admin.auth.getUser(authHeader.replace("Bearer ", ""));
    if (authError || !user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    const { callId } = parsed.data;

    const { data: call, error: callErr } = await admin
      .from("calls")
      .select("accepted_by, status")
      .eq("id", callId)
      .single();

    if (callErr || !call) {
      return NextResponse.json({ error: "Call not found" }, { status: 404 });
    }

    const now = new Date().toISOString();

    const { error: updateErr } = await admin
      .from("calls")
      .update({ status: "accepted", accepted_by: user.id, connected_at: now })
      .eq("id", callId);

    if (updateErr) {
      return NextResponse.json({ error: "Failed to accept call" }, { status: 500 });
    }

    await admin.from("call_events").insert({
      call_id: callId,
      event_type: "CALL_ACCEPTED",
      actor_id: user.id,
      metadata: {},
    }).then(({ error }) => {
      if (error) console.warn("call_events insert warning:", error);
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("POST /api/calls/accept error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
