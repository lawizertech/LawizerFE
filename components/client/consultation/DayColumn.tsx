"use client";

import { motion } from "framer-motion";
import { SlotChip, type SlotStatus } from "./SlotChip";
import { getTimePeriod } from "@/lib/consultation-config";
import { Sun, Cloud, Moon } from "lucide-react";

interface SlotData {
  time: string;      // "10:00 AM"
  isoStart: string;  // UTC ISO string
  status: SlotStatus;
}

interface DayColumnProps {
  dayLabel: string;     // "Mon"
  dateLabel: string;    // "8"
  monthLabel: string;   // "Oct"
  badge?: string;       // "Today" | "Tomorrow"
  slots: SlotData[];
  selectedSlotISO: string | null;
  onSelectSlot: (isoStart: string) => void;
  direction?: number;   // -1 for prev, 1 for next (animation direction)
  hideHeader?: boolean; // If true, only renders the time slots
  slotCols?: 1 | 2;     // Number of columns for the slots grid
}

const periodIcons = {
  Morning: Sun,
  Afternoon: Cloud,
  Evening: Moon,
};

export function DayColumn({
  dayLabel,
  dateLabel,
  monthLabel,
  badge,
  slots,
  selectedSlotISO,
  onSelectSlot,
  direction = 0,
  hideHeader = false,
  slotCols = 1,
}: DayColumnProps) {
  // Group slots by period
  const grouped: Record<string, SlotData[]> = {};
  for (const slot of slots) {
    // Parse hour from the time string (e.g. "10:00 AM" → 10, "2:30 PM" → 14)
    const match = slot.time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (match) {
      let hour = parseInt(match[1]);
      const ampm = match[3].toUpperCase();
      if (ampm === "PM" && hour !== 12) hour += 12;
      if (ampm === "AM" && hour === 12) hour = 0;
      const period = getTimePeriod(hour);
      if (!grouped[period]) grouped[period] = [];
      grouped[period].push(slot);
    }
  }

  const periods = ["Morning", "Afternoon", "Evening"] as const;
  const hasSlots = slots.length > 0;

  return (
    <motion.div
      className="flex-1 min-w-0"
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Day header */}
      {!hideHeader && (
        <div className="text-center mb-4 pb-3 border-b border-[var(--border)]">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
              {dayLabel}
            </span>
            {badge && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--brand)] bg-[var(--brand-light)] px-2 py-0.5 rounded-full border border-[rgba(202,45,66,0.15)]">
                {badge}
              </span>
            )}
          </div>
          <div className="text-2xl font-extrabold text-[var(--text-primary)]">
            {dateLabel}
          </div>
          <div className="text-xs font-medium text-[var(--text-muted)] uppercase tracking-wide">
            {monthLabel}
          </div>
        </div>
      )}

      {/* Slots grouped by period */}
      {hasSlots ? (
        <div className="space-y-4" role="radiogroup" aria-label={`Slots for ${dayLabel} ${dateLabel} ${monthLabel}`}>
          {periods.map((period) => {
            const periodSlots = grouped[period];
            if (!periodSlots || periodSlots.length === 0) return null;

            const Icon = periodIcons[period];

            return (
              <div key={period}>
                <div className="flex items-center gap-1.5 mb-2 px-1">
                  <Icon size={12} className="text-[var(--text-muted)]" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--text-muted)]">
                    {period}
                  </span>
                </div>
                <div className={slotCols === 2 ? "grid grid-cols-2 gap-2" : "flex flex-col gap-2"}>
                  {periodSlots.map((slot, i) => (
                    <motion.div
                      key={slot.isoStart}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.03, duration: 0.2 }}
                    >
                      <SlotChip
                        time={slot.time}
                        status={
                          selectedSlotISO === slot.isoStart
                            ? "selected"
                            : slot.status
                        }
                        onSelect={() => onSelectSlot(slot.isoStart)}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-8 text-sm text-[var(--text-muted)]">
          No slots available
        </div>
      )}
    </motion.div>
  );
}
