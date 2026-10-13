// ============================================================
// Consultation Configuration — Single source of truth
// All consultation scheduling, pricing, and availability
// settings are defined here.
// ============================================================

/** Price in INR (whole rupees) */
export const CONSULTATION_PRICE = 999;

/** Duration in minutes */
export const CONSULTATION_DURATION_MIN = 30;

/** Maximum bookings per week (Mon–Sun IST) */
export const WEEKLY_SLOT_CAP = 5;

/** Working hours in IST (24h format) */
export const WORK_START_HOUR = 10; // 10:00 AM
export const WORK_END_HOUR = 19;   // 7:00 PM

/** Lunch break in IST (excluded from slots) */
export const LUNCH_START_HOUR = 13; // 1:00 PM
export const LUNCH_END_HOUR = 14;   // 2:00 PM

/** Buffer between sessions in minutes */
export const BUFFER_MINUTES = 15;

/** Minimum advance notice for booking (in hours) */
export const MIN_NOTICE_HOURS = 2;

/** How far ahead users can book (in days) */
export const MAX_BOOKING_DAYS_AHEAD = 14;

/** Pending booking expiry in minutes */
export const PENDING_EXPIRY_MINUTES = 10;

/** Timezone for the founder */
export const FOUNDER_TIMEZONE = "Asia/Kolkata";

/** Founder details */
export const FOUNDER = {
  name: "Sagnik Bhattacharya",
  role: "Founder – Lawizer",
  secondaryRole: "Managing Director – Zeptus Private Limited",
  image: "/founder.jpeg",
  email: "lawizertech@gmail.com",
} as const;

/**
 * Generate all possible slot start times for a given day.
 * Returns an array of { hour, minute } in IST.
 */
export function generateSlotTimes(): { hour: number; minute: number }[] {
  const slots: { hour: number; minute: number }[] = [];
  const effectiveSlotLength = CONSULTATION_DURATION_MIN + BUFFER_MINUTES; // 45 min total

  let currentHour = WORK_START_HOUR;
  let currentMinute = 0;

  while (currentHour < WORK_END_HOUR) {
    // Skip lunch break
    const slotEndHour = currentHour + Math.floor((currentMinute + CONSULTATION_DURATION_MIN) / 60);
    const slotEndMinute = (currentMinute + CONSULTATION_DURATION_MIN) % 60;

    const slotStartInMinutes = currentHour * 60 + currentMinute;
    const slotEndInMinutes = slotEndHour * 60 + slotEndMinute;
    const lunchStartInMinutes = LUNCH_START_HOUR * 60;
    const lunchEndInMinutes = LUNCH_END_HOUR * 60;

    // Only add if slot doesn't overlap with lunch and ends before work end
    const overlapsLunch =
      slotStartInMinutes < lunchEndInMinutes && slotEndInMinutes > lunchStartInMinutes;

    if (!overlapsLunch && slotEndInMinutes <= WORK_END_HOUR * 60) {
      slots.push({ hour: currentHour, minute: currentMinute });
    }

    // Advance by slot length (duration + buffer)
    currentMinute += effectiveSlotLength;
    if (currentMinute >= 60) {
      currentHour += Math.floor(currentMinute / 60);
      currentMinute = currentMinute % 60;
    }
  }

  return slots;
}

/**
 * Get the time period label for a given hour.
 */
export function getTimePeriod(hour: number): "Morning" | "Afternoon" | "Evening" {
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}
