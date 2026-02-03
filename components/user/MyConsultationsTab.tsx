"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Phone,
  Video,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
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
  status: "pending" | "confirmed" | "cancelled";

  // EXTRA DETAILS (mock / backend later)
  expertBio?: string;
  experienceYears?: number;
  specialization?: string[];
};

/* -------------------------------------------------------------------------- */
/*                               MAIN COMPONENT                               */
/* -------------------------------------------------------------------------- */

export default function MyConsultationsTab() {
  const [consultations, setConsultations] = useState<UserConsultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<UserConsultation | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await getUserBookings();
      if (Array.isArray(res)) setConsultations(res);
      else if (res?.consultations) setConsultations(res.consultations);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return <p>Loading consultations…</p>;

  /* --------------------------- DETAILS VIEW --------------------------- */
  if (selected) {
    return (
      <ConsultationDetails
        consultation={selected}
        onBack={() => setSelected(null)}
      />
    );
  }

  /* ----------------------------- LIST VIEW ---------------------------- */
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Consultations</h1>

      <div className="space-y-4">
        {consultations.map((c) => {
          const bookingDate = new Date(c.bookingDate._seconds * 1000);

          return (
            <div
              key={c.bookingId}
              onClick={() => setSelected(c)}
              className="bg-white rounded-xl p-5 space-y-3 border cursor-pointer hover:shadow transition"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{c.expertName}</h3>
                <StatusBadge status={c.status} />
              </div>

              {/* META */}
              <p className="text-sm text-gray-500 capitalize">
                {c.expertType === "adv" ? "Advocate" : "Chartered Accountant"}
              </p>

              <div className="flex justify-between gap-4 text-xs text-gray-500">
                <div className="flex flex-wrap gap-4 text-gray-500">
                  {" "}
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {bookingDate.toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1 capitalize">
                    {c.callType === "video" ? (
                      <Video size={14} />
                    ) : (
                      <Phone size={14} />
                    )}
                    {c.callType}
                  </span>{" "}
                </div>
                {c.status === "confirmed" && (
                  <div className=" flex justify-end">
                    <button
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click double-trigger
                        setSelected(c);
                      }}
                    >
                      Proceed
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                          CONSULTATION DETAILS VIEW                          */
/* -------------------------------------------------------------------------- */

function ConsultationDetails({
  consultation,
  onBack,
}: {
  consultation: UserConsultation;
  onBack: () => void;
}) {
  const [showChat, setShowChat] = useState(false);
  const bookingDate = new Date(consultation.bookingDate._seconds * 1000);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-sm text-gray-600"
      >
        <ArrowLeft size={16} />
        Back to consultations
      </button>

      <div className="bg-white rounded-xl p-6 border space-y-6">
        {/* EXPERT INFO */}
        <div>
          <h2 className="text-xl font-semibold">{consultation.expertName}</h2>
          <p className="text-gray-500">
            {consultation.expertType === "adv"
              ? "Advocate"
              : "Chartered Accountant"}
          </p>
        </div>

        {/* DESCRIPTION */}
        <div className="text-sm text-gray-700 space-y-2">
          <p>
            <strong>Experience:</strong> {consultation.experienceYears ?? 8}+
            years
          </p>
          <p>
            <strong>Specialization:</strong>{" "}
            {consultation.specialization?.join(", ") ??
              "Corporate Law, Taxation"}
          </p>
          <p>
            <strong>About:</strong>{" "}
            {consultation.expertBio ??
              "Experienced professional providing expert consultation."}
          </p>
        </div>

        {/* BOOKING INFO */}
        <div className="flex gap-6 text-sm text-gray-500">
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
        </div>

        {/* ACTIONS */}
        <div className="flex gap-3">
          {consultation.callType !== "chat" && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2">
              {consultation.callType === "video" ? (
                <Video size={16} />
              ) : (
                <Phone size={16} />
              )}
              Join {consultation.callType} Call
            </button>
          )}

          <button
            onClick={() => setShowChat(true)}
            className="border px-4 py-2 rounded-lg flex gap-2"
          >
            <MessageCircle size={16} />
            Chat with Expert
          </button>
        </div>
      </div>

      {/* CHAT MODAL */}
      {showChat && <ChatModal onClose={() => setShowChat(false)} />}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                CHAT MODAL                                  */
/* -------------------------------------------------------------------------- */

function ChatModal({ onClose }: { onClose: () => void }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Chat</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div className="h-60 border rounded p-2 text-sm overflow-y-auto">
          {messages.map((m, i) => (
            <div key={i} className="mb-1">
              {m}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border rounded px-2 py-1"
            placeholder="Type a message…"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-3 rounded"
            onClick={() => {
              if (!message.trim()) return;
              setMessages((m) => [...m, message]);
              setMessage("");
            }}
          >
            Send
          </button>
        </div>
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
