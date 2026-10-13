// ============================================================
// Calendar Helpers — ICS generation & Google Calendar URLs
// ============================================================

import {
  CONSULTATION_DURATION_MIN,
  FOUNDER,
} from "@/lib/consultation-config";

// --------------- ICS (.ics) File Generation ---------------

interface ICSEventParams {
  title: string;
  description: string;
  location: string;
  startUTC: Date;
  endUTC: Date;
  uid: string;
  organizerEmail?: string;
}

function escapeICS(text: string): string {
  return text
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\n/g, "\\n");
}

function formatICSDate(date: Date): string {
  return date
    .toISOString()
    .replace(/[-:]/g, "")
    .replace(/\.\d{3}/, "");
}

export function generateICSContent(params: ICSEventParams): string {
  const { title, description, location, startUTC, endUTC, uid, organizerEmail } = params;
  const now = new Date();

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Lawizer//Consultation Booking//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(now)}`,
    `DTSTART:${formatICSDate(startUTC)}`,
    `DTEND:${formatICSDate(endUTC)}`,
    `SUMMARY:${escapeICS(title)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(location)}`,
    "STATUS:CONFIRMED",
    ...(organizerEmail
      ? [`ORGANIZER;CN=${escapeICS(FOUNDER.name)}:mailto:${organizerEmail}`]
      : []),
    // 30-minute reminder
    "BEGIN:VALARM",
    "TRIGGER:-PT30M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${escapeICS(title)} starts in 30 minutes`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}

export function downloadICSFile(params: ICSEventParams, filename = "lawizer-consultation.ics") {
  const content = generateICSContent(params);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --------------- Google Calendar URL ---------------

interface GoogleCalendarParams {
  title: string;
  description: string;
  location: string;
  startUTC: Date;
  endUTC: Date;
}

function formatGoogleDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function generateGoogleCalendarURL(params: GoogleCalendarParams): string {
  const { title, description, location, startUTC, endUTC } = params;
  const base = "https://calendar.google.com/calendar/render";
  const urlParams = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: `${formatGoogleDate(startUTC)}/${formatGoogleDate(endUTC)}`,
    details: description,
    location: location,
  });

  return `${base}?${urlParams.toString()}`;
}

// --------------- Outlook Web URL ---------------

export function generateOutlookURL(params: GoogleCalendarParams): string {
  const { title, description, location, startUTC, endUTC } = params;
  const base = "https://outlook.live.com/calendar/0/action/compose";
  const urlParams = new URLSearchParams({
    rru: "addevent",
    subject: title,
    body: description,
    location: location,
    startdt: startUTC.toISOString(),
    enddt: endUTC.toISOString(),
  });

  return `${base}?${urlParams.toString()}`;
}

// --------------- Helper to build event params from a booking ---------------

export interface BookingCalendarData {
  bookingId: string;
  slotStartUTC: Date;
  reason: string;
  meetUrl: string;
}

export function buildCalendarEventParams(data: BookingCalendarData) {
  const { bookingId, slotStartUTC, reason, meetUrl } = data;
  const endUTC = new Date(slotStartUTC.getTime() + CONSULTATION_DURATION_MIN * 60 * 1000);

  const title = `Lawizer Consultation with ${FOUNDER.name}`;
  const description = [
    `${CONSULTATION_DURATION_MIN}-minute video consultation with ${FOUNDER.name}`,
    "",
    `Reason: ${reason}`,
    "",
    `Join the call: ${meetUrl}`,
    "",
    "Please join 2–3 minutes early to test your camera and microphone.",
  ].join("\n");
  const location = meetUrl;
  const uid = `consultation-${bookingId}@lawizer.com`;

  return {
    title,
    description,
    location,
    startUTC: slotStartUTC,
    endUTC,
    uid,
    organizerEmail: FOUNDER.email,
  };
}
