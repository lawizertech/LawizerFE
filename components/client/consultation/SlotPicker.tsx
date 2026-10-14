"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, AlertCircle, RefreshCw } from "lucide-react";
import { DayColumn } from "./DayColumn";
import type { SlotStatus } from "./SlotChip";
import {
  generateSlotTimes,
  CONSULTATION_DURATION_MIN,
  FOUNDER_TIMEZONE,
  MIN_NOTICE_HOURS,
  MAX_BOOKING_DAYS_AHEAD,
  WEEKLY_SLOT_CAP,
} from "@/lib/consultation-config";

interface BookedSlot {
  slot_start: string;
  status: "confirmed" | "pending";
}

export interface AvailabilityData {
  bookedSlots: BookedSlot[];
  weeklyCount: number;
  weeklyCap: number;
  slotsRemaining: number;
  timezone: string;
}

interface SlotPickerProps {
  selectedSlot: string | null;
  onSelectSlot: (isoStart: string | null) => void;
  onAvailabilityChange?: (data: AvailabilityData | null) => void;
}

/**
 * Format a UTC Date to IST time string like "10:00 AM"
 */
function formatTimeIST(date: Date): string {
  return date.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: FOUNDER_TIMEZONE,
  }).toUpperCase();
}

/**
 * Get IST date parts for a UTC Date
 */
function getISTDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: FOUNDER_TIMEZONE,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const parts = formatter.formatToParts(date);
  return {
    weekday: parts.find((p) => p.type === "weekday")?.value || "",
    day: parts.find((p) => p.type === "day")?.value || "",
    month: parts.find((p) => p.type === "month")?.value || "",
  };
}

/**
 * Create a Date in IST for a given date + time
 */
function createISTDate(dateStr: string, hour: number, minute: number): Date {
  // dateStr is YYYY-MM-DD, construct in IST
  const isoStr = `${dateStr}T${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:00+05:30`;
  return new Date(isoStr);
}

/**
 * Get today's date string in IST (YYYY-MM-DD)
 */
function getTodayIST(): string {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: FOUNDER_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);
  return parts; // Returns YYYY-MM-DD
}

/**
 * Add days to a date string
 */
function addDays(dateStr: string, days: number): string {
  const d = new Date(`${dateStr}T12:00:00+05:30`);
  d.setDate(d.getDate() + days);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: FOUNDER_TIMEZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
  return parts;
}

/**
 * Check if user's timezone differs from IST
 */
function getUserTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return FOUNDER_TIMEZONE;
  }
}

// Skeleton loader for a day column
function DayColumnSkeleton() {
  return (
    <div className="flex-1 min-w-0 animate-pulse">
      <div className="text-center mb-4 pb-3 border-b border-[var(--border)]">
        <div className="h-3 w-10 bg-gray-200 rounded mx-auto mb-2" />
        <div className="h-7 w-8 bg-gray-200 rounded mx-auto mb-1" />
        <div className="h-3 w-8 bg-gray-200 rounded mx-auto" />
      </div>
      <div className="space-y-3">
        {[...Array(3)].map((_, g) => (
          <div key={g}>
            <div className="h-3 w-16 bg-gray-200 rounded mb-2" />
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-10 w-[88px] bg-gray-100 rounded-[var(--radius-md)]" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SlotPicker({ selectedSlot, onSelectSlot, onAvailabilityChange }: SlotPickerProps) {
  const [windowStart, setWindowStart] = useState<string>(getTodayIST());
  const [activeDateStr, setActiveDateStr] = useState<string>(getTodayIST());
  const [availability, setAvailability] = useState<AvailabilityData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [direction, setDirection] = useState(0);

  const todayIST = getTodayIST();
  const userTimezone = getUserTimezone();
  const showTimezoneNote = userTimezone !== FOUNDER_TIMEZONE;

  const slotTimes = useMemo(() => generateSlotTimes(), []);

  // Generate the 3 days in the current window
  const days = useMemo(() => {
    return [0, 1, 2].map((offset) => {
      const dateStr = addDays(windowStart, offset);
      const sampleDate = new Date(`${dateStr}T12:00:00+05:30`);
      const parts = getISTDateParts(sampleDate);

      let badge: string | undefined;
      if (dateStr === todayIST) badge = "Today";
      else if (dateStr === addDays(todayIST, 1)) badge = "Tomorrow";

      return {
        dateStr,
        dayLabel: parts.weekday,
        dateLabel: parts.day,
        monthLabel: parts.month,
        badge,
      };
    });
  }, [windowStart, todayIST]);

  // Fetch availability
  const fetchAvailability = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const from = days[0].dateStr;
      const to = addDays(windowStart, MAX_BOOKING_DAYS_AHEAD);

      const res = await fetch(`/api/consultations/availability?from=${from}&to=${to}`);
      if (!res.ok) throw new Error("Failed to fetch availability");

      const data: AvailabilityData = await res.json();
      setAvailability(data);
      onAvailabilityChange?.(data);
    } catch (err) {
      console.error("Availability fetch error:", err);
      setError("Could not load availability. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [days, windowStart, onAvailabilityChange]);

  useEffect(() => {
    fetchAvailability();
  }, [fetchAvailability]);

  // Build slot data for each day
  const daySlots = useMemo(() => {
    const now = new Date();
    const minNoticeMs = MIN_NOTICE_HOURS * 60 * 60 * 1000;
    const bookedTimestamps = new Set(
      availability?.bookedSlots.map((s) => new Date(s.slot_start).getTime()) || []
    );

    return days.map((day) => {
      const slots = slotTimes.map((st) => {
        const slotDate = createISTDate(day.dateStr, st.hour, st.minute);
        const isoStart = slotDate.toISOString();
        const timeLabel = formatTimeIST(slotDate);

        let status: SlotStatus = "available";

        if (slotDate.getTime() <= now.getTime()) {
          status = "past";
        } else if (slotDate.getTime() - now.getTime() < minNoticeMs) {
          status = "past"; // Too soon
        } else if (bookedTimestamps.has(slotDate.getTime())) {
          status = "booked";
        }

        return { time: timeLabel, isoStart, status };
      });

      // Filter out past slots entirely
      return slots.filter((s) => s.status !== "past");
    });
  }, [days, availability, slotTimes]);

  // Navigation handlers
  const canGoPrev = windowStart > todayIST;
  const maxDate = addDays(todayIST, MAX_BOOKING_DAYS_AHEAD - 2);
  const canGoNext = windowStart < maxDate;

  const handlePrev = () => {
    if (!canGoPrev) return;
    setDirection(-1);
    setWindowStart((prev) => {
      const newStart = addDays(prev, -3);
      const finalStart = newStart < todayIST ? todayIST : newStart;
      setActiveDateStr(finalStart);
      return finalStart;
    });
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setDirection(1);
    setWindowStart((prev) => {
      const newStart = addDays(prev, 3);
      setActiveDateStr(newStart);
      return newStart;
    });
  };

  // Fully booked state
  const isFullyBooked = availability && availability.slotsRemaining <= 0;

  // Active day resolution
  const activeDayIndex = days.findIndex(d => d.dateStr === activeDateStr);
  const displayIndex = activeDayIndex !== -1 ? activeDayIndex : 0;
  const displayDay = days[displayIndex];
  const displaySlots = daySlots[displayIndex];

  return (
    <div className="space-y-4">
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <h3 className="text-base sm:text-lg font-bold text-[var(--text-primary)]">
          Select a Time Slot
        </h3>

        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-2">
          {/* Timezone label (hidden on mobile to save space, note below covers it) */}
          <div className="hidden sm:flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)] bg-[var(--bg-soft)] px-2.5 py-1 rounded-full border border-[var(--border)]">
            <Globe size={11} />
            IST (Asia/Kolkata)
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-1 ml-auto sm:ml-0">
            <button
              type="button"
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous 3 days"
              className="p-1.5 rounded-lg border border-[var(--border)] bg-white hover:bg-[var(--bg-soft)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next 3 days"
              className="p-1.5 rounded-lg border border-[var(--border)] bg-white hover:bg-[var(--bg-soft)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Timezone note */}
      {showTimezoneNote && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="text-[11px] text-[var(--text-muted)] bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 font-medium"
        >
          ⏰ Times shown in IST (India Standard Time). Your local timezone: {userTimezone}
        </motion.p>
      )}

      {/* Fully booked state */}
      {isFullyBooked && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-[var(--radius-md)] px-4 py-3"
        >
          <AlertCircle size={16} className="text-amber-600 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-bold text-amber-800">Fully Booked This Week</p>
            <p className="text-xs text-amber-700 mt-0.5">
              All {WEEKLY_SLOT_CAP} slots for this week are taken. Use the arrows to check next week's availability.
            </p>
          </div>
        </motion.div>
      )}

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between bg-red-50 border border-red-200 rounded-[var(--radius-md)] px-4 py-3"
        >
          <div className="flex items-center gap-2 text-sm text-red-700 font-medium">
            <AlertCircle size={14} />
            {error}
          </div>
          <button
            type="button"
            onClick={fetchAvailability}
            className="text-xs font-bold text-[var(--brand)] hover:underline cursor-pointer flex items-center gap-1"
          >
            <RefreshCw size={12} />
            Retry
          </button>
        </motion.div>
      )}

      {/* ======================= */}
      {/* MOBILE LAYOUT (Tabbed)  */}
      {/* ======================= */}
      <div className="md:hidden space-y-4">
        {/* Tabbed Date Selector */}
        <div className="flex gap-2">
          {days.map((day) => {
            const isActive = day.dateStr === activeDateStr;
            return (
              <button
                key={day.dateStr}
                onClick={() => setActiveDateStr(day.dateStr)}
                className={`flex-1 flex flex-col items-center justify-center p-2.5 rounded-[var(--radius-lg)] border-[1.5px] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "border-[var(--brand)] bg-[rgba(202,45,66,0.04)] text-[var(--brand)] shadow-sm"
                    : "border-[var(--border)] bg-white text-[var(--text-secondary)] hover:border-gray-300"
                }`}
              >
                <div className="flex items-center gap-1 mb-0.5">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-[var(--brand)]" : "text-[var(--text-muted)]"}`}>
                    {day.dayLabel}
                  </span>
                  {day.badge && (
                    <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded-sm ${isActive ? "bg-[var(--brand)] text-white" : "bg-gray-100 text-gray-500"}`}>
                      {day.badge}
                    </span>
                  )}
                </div>
                <span className={`text-xl font-extrabold ${isActive ? "text-[var(--brand)]" : "text-[var(--text-primary)]"}`}>
                  {day.dateLabel}
                </span>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isActive ? "text-[var(--brand)]" : "text-[var(--text-muted)]"}`}>
                  {day.monthLabel}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Time Slots */}
        <div>
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <DayColumnSkeleton />
              </motion.div>
            ) : (
              <motion.div
                key={displayDay.dateStr}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <DayColumn
                  dayLabel={displayDay.dayLabel}
                  dateLabel={displayDay.dateLabel}
                  monthLabel={displayDay.monthLabel}
                  slots={displaySlots}
                  selectedSlotISO={selectedSlot}
                  onSelectSlot={onSelectSlot}
                  hideHeader={true}
                  slotCols={2}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ======================= */}
      {/* DESKTOP LAYOUT (3 Cols) */}
      {/* ======================= */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {loading ? (
            <>
              <DayColumnSkeleton />
              <DayColumnSkeleton />
              <DayColumnSkeleton />
            </>
          ) : (
            days.map((day, i) => (
              <DayColumn
                key={day.dateStr}
                dayLabel={day.dayLabel}
                dateLabel={day.dateLabel}
                monthLabel={day.monthLabel}
                badge={day.badge}
                slots={daySlots[i]}
                selectedSlotISO={selectedSlot}
                onSelectSlot={onSelectSlot}
                direction={direction}
                hideHeader={false}
              />
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
