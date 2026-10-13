// ============================================================
// GET /api/consultations/availability?from=YYYY-MM-DD&to=YYYY-MM-DD
// Returns booked/pending slots and weekly availability count.
// ============================================================

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";
import {
  WEEKLY_SLOT_CAP,
  PENDING_EXPIRY_MINUTES,
  FOUNDER_TIMEZONE,
} from "@/lib/consultation-config";

/**
 * Get the Monday 00:00 and Sunday 23:59:59 (IST) for a given date string.
 * Week is defined as Mon–Sun IST.
 */
function getISTWeekBounds(dateStr: string) {
  // Parse in IST by appending timezone
  const date = new Date(`${dateStr}T00:00:00+05:30`);
  const dayOfWeek = date.getDay(); // 0=Sun, 1=Mon, ...
  const diffToMonday = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

  const monday = new Date(date);
  monday.setDate(date.getDate() + diffToMonday);
  monday.setHours(0, 0, 0, 0);

  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  sunday.setHours(23, 59, 59, 999);

  return {
    mondayISO: monday.toISOString(),
    sundayISO: sunday.toISOString(),
  };
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const from = searchParams.get("from"); // YYYY-MM-DD
    const to = searchParams.get("to");     // YYYY-MM-DD

    if (!from || !to) {
      return NextResponse.json(
        { error: "Missing 'from' and 'to' query parameters (YYYY-MM-DD)" },
        { status: 400 }
      );
    }

    const admin = createAdminClient();
    const now = new Date();

    // 1. Clean up expired pending bookings
    const expiryThreshold = new Date(now.getTime() - PENDING_EXPIRY_MINUTES * 60 * 1000);
    try {
      await admin
        .from("consultation_bookings")
        .update({ status: "expired" })
        .eq("status", "pending")
        .lt("created_at", expiryThreshold.toISOString());
    } catch {}
    try {
      await admin
        .from("meetings")
        .update({ status: "expired" })
        .eq("status", "pending")
        .lt("created_at", expiryThreshold.toISOString());
    } catch {}

    // 2. Query booked/pending slots in the requested date range
    const fromUTC = new Date(`${from}T00:00:00+05:30`).toISOString();
    const toUTC = new Date(`${to}T23:59:59+05:30`).toISOString();

    let bookedSlots: Array<{ slot_start: string; status: "confirmed" | "pending" }> = [];
    let isConsultationBookingsAvailable = true;

    const { data: slots, error: slotsError } = await admin
      .from("consultation_bookings")
      .select("id, slot_start, slot_end, status, created_at")
      .in("status", ["confirmed", "pending"])
      .gte("slot_start", fromUTC)
      .lte("slot_start", toUTC)
      .order("slot_start", { ascending: true });

    if (!slotsError && slots) {
      bookedSlots = slots.map((s) => ({
        slot_start: s.slot_start,
        status: s.status as "confirmed" | "pending",
      }));
    } else {
      isConsultationBookingsAvailable = false;
      // Fallback: Query from `meetings` table
      const { data: meetingSlots } = await admin
        .from("meetings")
        .select("id, start_time, end_time, status, created_at")
        .in("status", ["confirmed", "pending", "scheduled"])
        .gte("start_time", fromUTC)
        .lte("start_time", toUTC)
        .order("start_time", { ascending: true });

      if (meetingSlots) {
        bookedSlots = meetingSlots
          .filter((m) => m.start_time)
          .map((m) => {
            const raw = String(m.start_time);
            const iso = raw.endsWith("Z") ? raw : `${raw}Z`;
            return {
              slot_start: new Date(iso).toISOString(),
              status: (m.status === "pending" ? "pending" : "confirmed") as "confirmed" | "pending",
            };
          });
      }
    }

    // 3. Count bookings for the current week (Mon–Sun IST) toward the cap
    //    Use "today" in IST to determine the current week
    const todayIST = new Date(now.toLocaleString("en-US", { timeZone: FOUNDER_TIMEZONE }));
    const todayStr = `${todayIST.getFullYear()}-${String(todayIST.getMonth() + 1).padStart(2, "0")}-${String(todayIST.getDate()).padStart(2, "0")}`;
    const { mondayISO, sundayISO } = getISTWeekBounds(todayStr);

    let bookedCount = 0;
    if (isConsultationBookingsAvailable) {
      const { count: weeklyCount } = await admin
        .from("consultation_bookings")
        .select("id", { count: "exact", head: true })
        .in("status", ["confirmed", "pending"])
        .gte("slot_start", mondayISO)
        .lte("slot_start", sundayISO);
      bookedCount = weeklyCount ?? 0;
    } else {
      const { count: weeklyCount } = await admin
        .from("meetings")
        .select("id", { count: "exact", head: true })
        .in("status", ["confirmed", "pending", "scheduled"])
        .gte("start_time", mondayISO)
        .lte("start_time", sundayISO);
      bookedCount = weeklyCount ?? 0;
    }

    const slotsRemaining = Math.max(0, WEEKLY_SLOT_CAP - bookedCount);

    return NextResponse.json({
      bookedSlots,
      weeklyCount: bookedCount,
      weeklyCap: WEEKLY_SLOT_CAP,
      slotsRemaining,
      timezone: FOUNDER_TIMEZONE,
    }, {
      headers: {
        // Cache for 30 seconds on the edge, stale-while-revalidate for 60s
        "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60",
      },
    });
  } catch (err) {
    console.error("/api/consultations/availability exception:", err);
    // Graceful fallback for exceptions (e.g. missing Supabase URL in env)
    return NextResponse.json({
      bookedSlots: [],
      weeklyCount: 0,
      weeklyCap: WEEKLY_SLOT_CAP,
      slotsRemaining: WEEKLY_SLOT_CAP,
      timezone: FOUNDER_TIMEZONE,
    });
  }
}
