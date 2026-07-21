/**
 * GET /api/user/case-by-booking?bookingId=<id>
 *
 * Looks up the `cases` table for a case that was created from the given
 * booking. The booking ID is stored in `cases.metadata->>'booking_id'`
 * (or `cases.booking_id` if you have a direct FK column — adjust the query
 * to match your actual schema).
 *
 * Returns: { caseId: string } or { caseId: null }
 *
 * Authorization: requires a valid Bearer token. The caller must be either the
 * client or the professional on the case, or an admin.
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const bookingId = searchParams.get("bookingId");

    if (!bookingId) {
      return NextResponse.json({ error: "bookingId is required" }, { status: 400 });
    }

    // Validate caller identity
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.replace("Bearer ", "");
    const admin = createAdminClient();
    const {
      data: { user },
      error: authError,
    } = await admin.auth.getUser(token);

    if (authError || !user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }

    // ── Strategy 1: direct booking_id FK column (preferred) ──────────────────
    // If your `cases` table has a `booking_id uuid` column, use this:
    let caseId: string | null = null;

    const { data: direct } = await admin
      .from("cases")
      .select("id, client_id, professional_id")
      .eq("booking_id", bookingId)
      .maybeSingle();

    if (direct) {
      // Ensure caller is a participant
      const isParticipant =
        direct.client_id === user.id || direct.professional_id === user.id;

      const { data: profile } = await admin
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .maybeSingle();

      if (!isParticipant && profile?.role !== "admin") {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }

      caseId = direct.id;
    } else {
      // ── Strategy 2: booking ID stored in metadata JSON ──────────────────────
      const { data: meta } = await admin
        .from("cases")
        .select("id, client_id, professional_id")
        .eq("metadata->>booking_id", bookingId)
        .maybeSingle();

      if (meta) {
        const isParticipant =
          meta.client_id === user.id || meta.professional_id === user.id;

        const { data: profile } = await admin
          .from("profiles")
          .select("role")
          .eq("id", user.id)
          .maybeSingle();

        if (!isParticipant && profile?.role !== "admin") {
          return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        caseId = meta.id;
      }
    }

    return NextResponse.json({ caseId });
  } catch (err: any) {
    console.error("GET /api/user/case-by-booking error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
