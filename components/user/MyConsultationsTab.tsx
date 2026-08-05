"use client";

import { useEffect, useState } from "react";
import { Calendar, Phone, Video, MessageCircle, ArrowLeft, Loader2 } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { useAuth } from "@/context/authContext";
import { ChatEngine } from "@/components/chat/ChatEngine";
import { Booking } from "@/types/booking";

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT */
/* -------------------------------------------------------------------------- */

export default function MyConsultationsTab() {
  const { user } = useAuth();
  const [consultations, setConsultations] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Booking | null>(null);

  useEffect(() => {
    const load = async () => {
      const res = await getUserBookings();
      if (Array.isArray(res)) setConsultations(res);
      else if (res?.consultations) setConsultations(res.consultations);
      setLoading(false);
    };
    load();
  }, []);

  if (loading) return (
    <div className="flex items-center gap-2 text-gray-500 p-6">
      <Loader2 className="animate-spin text-[#c92c41]" size={20} />
      <span className="text-sm">Loading consultations…</span>
    </div>
  );

  /* --------------------------- DETAILS VIEW --------------------------- */
  if (selected) {
    return (
      <ConsultationDetails
        consultation={selected}
        currentUserId={user?.uid ?? ""}
        onBack={() => setSelected(null)}
      />
    );
  }

  /* ----------------------------- LIST VIEW ---------------------------- */
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">My Consultations</h1>

      {consultations.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-200 shadow-xs mt-6">
          <div className="w-12 h-12 rounded-full bg-rose-50 text-[#c92c41] flex items-center justify-center mx-auto mb-3">
            <Calendar size={24} />
          </div>
          <p className="text-base font-bold text-gray-800">No consultations booked</p>
          <p className="text-sm text-gray-500 mt-1 max-w-sm mx-auto mb-4">
            You haven&apos;t scheduled any consultations with our experts yet. Contact us to book a session.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {consultations.map((c) => {
            const bookingDate = new Date(c.bookingDate._seconds * 1000);

            return (
              <div
                key={c.bookingId}
                onClick={() => setSelected(c)}
                className="bg-white rounded-xl p-5 space-y-3 border cursor-pointer hover:shadow transition"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{c.expertName}</h3>
                  <StatusBadge status={c.status} />
                </div>

                <p className="text-sm text-gray-500 capitalize">
                  {c.expertType === "adv" ? "Advocate" : "Chartered Accountant"}
                </p>

                <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {bookingDate.toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1 capitalize">
                    {c.callType === "video" ? <Video size={14} /> : <Phone size={14} />}
                    {c.callType}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* CONSULTATION DETAILS VIEW */
/* -------------------------------------------------------------------------- */

function ConsultationDetails({
  consultation,
  currentUserId,
  onBack,
}: {
  consultation: Booking;
  currentUserId: string;
  onBack: () => void;
}) {
  const [showChat, setShowChat] = useState(false);
  const [caseId, setCaseId] = useState<string | null>(null);
  const [caseLoading, setCaseLoading] = useState(false);

  const bookingDate = new Date(consultation.bookingDate._seconds * 1000);

  // Resolve caseId when user opens chat
  const handleOpenChat = async () => {
    setShowChat(true);
    if (caseId) return; // already resolved

    setCaseLoading(true);
    try {
      const token = getAccessToken();
      const res = await fetch(
        `/api/user/case-by-booking?bookingId=${encodeURIComponent(consultation.bookingId)}`,
        { headers: token ? { Authorization: `Bearer ${token}` } : {} }
      );
      const data: { caseId?: string | null } = await res.json();
      if (data.caseId) setCaseId(data.caseId);
    } catch (err) {
      console.error("case-by-booking lookup error:", err);
    } finally {
      setCaseLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
        <ArrowLeft size={16} />
        Back to consultations
      </button>

      {!showChat ? (
        <div className="bg-white rounded-xl p-6 border space-y-6">
          {/* EXPERT INFO */}
          <div>
            <h2 className="text-xl font-semibold">{consultation.expertName}</h2>
            <p className="text-gray-500">
              {consultation.expertType === "adv" ? "Advocate" : "Chartered Accountant"}
            </p>
          </div>

          {/* DETAILS */}
          <div className="text-sm text-gray-700 space-y-2">
            {consultation.experienceYears != null && (
              <p>
                <strong>Experience:</strong> {consultation.experienceYears}+ years
              </p>
            )}
            {consultation.specialization && consultation.specialization.length > 0 && (
              <p>
                <strong>Specialization:</strong> {consultation.specialization.join(", ")}
              </p>
            )}
            {consultation.expertBio && (
              <p>
                <strong>About:</strong> {consultation.expertBio}
              </p>
            )}
          </div>

          {/* BOOKING INFO */}
          <div className="flex gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {bookingDate.toLocaleDateString()}
            </span>
          </div>

          {/* ACTIONS */}
          <div className="flex gap-3 flex-wrap">
            {consultation.callType !== "chat" && (
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex gap-2 items-center cursor-pointer">
                {consultation.callType === "video" ? <Video size={16} /> : <Phone size={16} />}
                Join {consultation.callType} Call
              </button>
            )}

            <button
              onClick={handleOpenChat}
              className="border px-4 py-2 rounded-lg flex gap-2 items-center cursor-pointer hover:bg-gray-50 transition"
            >
              <MessageCircle size={16} />
              Chat with Expert
            </button>
          </div>
        </div>
      ) : (
        /* ── Inline Chat Panel ──────────────────────────────────────────── */
        <div className="space-y-4">
          <button
            onClick={() => setShowChat(false)}
            className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to details
          </button>

          <div className="h-[600px]">
            {caseLoading ? (
              <div className="flex items-center justify-center h-full text-gray-400">
                <Loader2 className="animate-spin text-[#c92c41] mr-2" size={24} />
                <span className="text-sm">Loading chat…</span>
              </div>
            ) : caseId && currentUserId ? (
              <ChatEngine
                key={caseId}
                caseId={caseId}
                currentUserId={currentUserId}
                senderRole="client"
                professionalName={consultation.expertName}
                caseTitle={`Consultation — ${consultation.expertName}`}
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center p-6 bg-white rounded-2xl border border-gray-200">
                <MessageCircle size={28} className="text-gray-300 mb-2" />
                <p className="text-sm font-semibold text-gray-600">Chat channel not ready yet</p>
                <p className="text-xs text-gray-400 mt-1">
                  The chat channel will appear once your professional is assigned to this case.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* STATUS BADGE */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    confirmed: "bg-green-100 text-green-700",
    pending: "bg-yellow-100 text-yellow-700",
    cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full capitalize ${map[status] ?? "bg-gray-100 text-gray-600"}`}>
      {status}
    </span>
  );
}
