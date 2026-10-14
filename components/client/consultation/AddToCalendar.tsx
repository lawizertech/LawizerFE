"use client";

import { motion } from "framer-motion";
import { Calendar, Apple, Mail } from "lucide-react";
import {
  buildCalendarEventParams,
  generateGoogleCalendarURL,
  generateOutlookURL,
  downloadICSFile,
  type BookingCalendarData,
} from "@/lib/calendar";

interface AddToCalendarProps {
  bookingData: BookingCalendarData;
}

export function AddToCalendar({ bookingData }: AddToCalendarProps) {
  const eventParams = buildCalendarEventParams(bookingData);

  const googleURL = generateGoogleCalendarURL(eventParams);
  const outlookURL = generateOutlookURL(eventParams);

  const handleAppleCalendar = () => {
    downloadICSFile(eventParams);
  };

  const buttons = [
    {
      label: "Google Calendar",
      icon: Calendar,
      color: "bg-white border-[var(--border)] text-[var(--text-primary)] hover:border-blue-400 hover:bg-blue-50",
      onClick: () => window.open(googleURL, "_blank"),
    },
    {
      label: "Apple Calendar",
      icon: Apple,
      color: "bg-white border-[var(--border)] text-[var(--text-primary)] hover:border-gray-500 hover:bg-gray-50",
      onClick: handleAppleCalendar,
    },
    {
      label: "Outlook",
      icon: Mail,
      color: "bg-white border-[var(--border)] text-[var(--text-primary)] hover:border-blue-500 hover:bg-blue-50",
      onClick: () => window.open(outlookURL, "_blank"),
    },
  ];

  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
        Add to Calendar
      </p>
      <div className="flex flex-wrap gap-2">
        {buttons.map((btn, i) => {
          const Icon = btn.icon;
          return (
            <motion.button
              key={btn.label}
              type="button"
              onClick={btn.onClick}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.25 }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[var(--radius-md)] border-[1.5px] text-sm font-semibold transition-all duration-200 cursor-pointer ${btn.color}`}
            >
              <Icon size={16} />
              {btn.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
