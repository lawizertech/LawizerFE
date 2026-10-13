"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type SlotStatus = "available" | "selected" | "booked" | "past";

interface SlotChipProps {
  time: string; // e.g. "10:00 AM"
  status: SlotStatus;
  onSelect?: () => void;
}

export function SlotChip({ time, status, onSelect }: SlotChipProps) {
  const isInteractive = status === "available" || status === "selected";

  return (
    <motion.button
      type="button"
      role="radio"
      aria-checked={status === "selected"}
      aria-label={`${time} — ${status === "booked" ? "unavailable" : status === "past" ? "past" : status === "selected" ? "selected" : "available"}`}
      disabled={!isInteractive}
      onClick={isInteractive ? onSelect : undefined}
      className={cn(
        "relative w-full flex items-center justify-center px-2 py-2.5 rounded-[var(--radius-md)] text-[13px] font-semibold transition-all duration-200 cursor-pointer",
        "border-[1.5px] outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2",
        // Available
        status === "available" &&
          "border-[var(--border)] bg-white text-[var(--text-primary)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)] hover:text-[var(--brand)] hover:shadow-sm",
        // Selected
        status === "selected" &&
          "border-[var(--brand)] bg-[var(--brand)] text-white shadow-[0_4px_16px_rgba(202,45,66,0.3)]",
        // Booked
        status === "booked" &&
          "border-slate-200 bg-slate-100 text-slate-400 cursor-not-allowed pointer-events-none select-none shadow-none opacity-85",
        // Past
        status === "past" &&
          "border-transparent bg-gray-50 text-gray-300 cursor-not-allowed opacity-40 hidden"
      )}
      whileTap={isInteractive ? { scale: 0.95 } : undefined}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="flex items-center justify-center gap-1.5 w-full">
        {status === "selected" && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Check size={14} strokeWidth={3} />
          </motion.span>
        )}
        <span className={status === "booked" ? "line-through text-slate-400 text-xs font-semibold" : ""}>
          {time}
        </span>
        {status === "booked" && (
          <span className="ml-1 text-[9px] uppercase tracking-wider font-bold bg-slate-200 text-slate-500 px-1.5 py-0.5 rounded">
            Booked
          </span>
        )}
      </span>

      {/* Ripple effect on selection */}
      {status === "selected" && (
        <motion.span
          className="absolute inset-0 rounded-[var(--radius-md)] bg-white/20"
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
}
