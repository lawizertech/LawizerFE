"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Phone, Video } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type FirestoreTimestamp = {
  _seconds: number;
  _nanoseconds: number;
};

type UserConsultation = {
  bookingId: string;
  userId: string;
  expertUid: string;
  expertId: string;
  expertName: string;
  expertType: "adv" | "ca";
  callType: "voice" | "video" | "chat";
  bookingDate: FirestoreTimestamp;
  rate: number | null;
  serviceId?: string;
  status: "pending" | "confirmed" | "cancelled";
  bookedAt: FirestoreTimestamp;
  createdAt: FirestoreTimestamp;
  updatedAt: FirestoreTimestamp;
};

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

export default function MyConsultationsTab() {
  const [consultations, setConsultations] = useState<UserConsultation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const res = await getUserBookings();

      if (Array.isArray(res)) {
        setConsultations(res);
      } else if (res?.consultations) {
        setConsultations(res.consultations);
      }

      setLoading(false);
    };

    load();
  }, []);

  if (loading) {
    return <p className="text-sm text-gray-500">Loading consultations…</p>;
  }

  return (
    <div className="space-y-6">
      {/* TITLE */}
      <div>
        <h1 className="text-2xl font-semibold">My Consultations</h1>
        <p className="text-sm text-gray-500 mt-1">
          All your consultations with experts
        </p>
      </div>

      {/* EMPTY */}
      {consultations.length === 0 && (
        <div className="bg-white rounded-xl p-10 text-center text-gray-500">
          No consultations yet
        </div>
      )}

      {/* LIST */}
      <div className="space-y-4">
        {consultations.map((c) => (
          <ConsultationCard key={c.bookingId} consultation={c} />
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CARD                                        */
/* -------------------------------------------------------------------------- */

function ConsultationCard({
  consultation,
}: {
  consultation: UserConsultation;
}) {
  const bookingDate = new Date(consultation.bookingDate._seconds * 1000);

  return (
    <div className="bg-white rounded-xl p-5 space-y-3 border">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="font-medium">{consultation.expertName}</h3>
        <StatusBadge status={consultation.status} />
      </div>

      {/* META */}
      <p className="text-sm text-gray-500 capitalize">
        {consultation.expertType === "adv"
          ? "Advocate"
          : "Chartered Accountant"}
      </p>

      <div className="flex flex-wrap gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          <Calendar size={14} />
          {bookingDate.toLocaleDateString()}
        </span>

        <span className="flex items-center gap-1">
          <Clock size={14} />
          {bookingDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>

        <span className="flex items-center gap-1 capitalize">
          {consultation.callType === "video" ? (
            <Video size={14} />
          ) : (
            <Phone size={14} />
          )}
          {consultation.callType}
        </span>
      </div>

      {/* FOOTER */}
      <div className="flex justify-between items-center pt-2">
        <span className="font-medium">₹{consultation.rate ?? 0}</span>

        {consultation.status === "pending" && (
          <button className="text-sm text-red-500 hover:underline">
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              STATUS BADGE                                  */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full capitalize ${
        map[status] ?? "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}
