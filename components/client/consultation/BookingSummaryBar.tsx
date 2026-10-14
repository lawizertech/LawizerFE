"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, Pencil } from "lucide-react";
import { CONSULTATION_DURATION_MIN, FOUNDER_TIMEZONE } from "@/lib/consultation-config";

interface BookingSummaryBarProps {
  slotStart: string | null; // UTC ISO string
  onClear: () => void;
}

function formatSlotSummary(isoStart: string): string {
  const date = new Date(isoStart);
  const endDate = new Date(date.getTime() + CONSULTATION_DURATION_MIN * 60 * 1000);

  const dayFormatter = new Intl.DateTimeFormat("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    timeZone: FOUNDER_TIMEZONE,
  });

  const timeFormatter = new Intl.DateTimeFormat("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZone: FOUNDER_TIMEZONE,
  });

  const dayStr = dayFormatter.format(date);
  const startTime = timeFormatter.format(date).toUpperCase();
  const endTime = timeFormatter.format(endDate).toUpperCase();

  return `${dayStr} · ${startTime} – ${endTime} IST`;
}

export function BookingSummaryBar({ slotStart, onClear }: BookingSummaryBarProps) {
  return (
    <AnimatePresence>
      {slotStart && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="bg-[var(--brand-light)] border-[1.5px] border-[rgba(202,45,66,0.2)] rounded-[var(--radius-md)] px-4 py-3 mt-4"
        >
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 text-[var(--brand)]">
                <Calendar size={14} />
                <span className="text-sm font-bold">
                  {formatSlotSummary(slotStart)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-medium text-[var(--text-muted)]">
                <Video size={11} />
                {CONSULTATION_DURATION_MIN}-min video call
              </div>
            </div>
            <button
              type="button"
              onClick={onClear}
              className="flex items-center gap-1 text-xs font-semibold text-[var(--brand)] hover:underline cursor-pointer"
            >
              <Pencil size={11} />
              Change
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
