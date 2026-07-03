export type FirestoreTimestamp = {
  _seconds: number;
  _nanoseconds: number;
};

export type Booking = {
  bookingId: string;
  userId: string;
  expertUid: string;
  expertId: string;
  expertName: string;
  expertType: "adv" | "ca";
  callType: "voice" | "video" | "chat";
  bookingDate: FirestoreTimestamp;
  bookedAt: FirestoreTimestamp;
  rate: number;
  status: "pending" | "confirmed" | "cancelled";

  expertBio?: string;
  experienceYears?: number;
  specialization?: string[];
};

export type UserRole = "USER" | "LAWIZER_EXPERT";
