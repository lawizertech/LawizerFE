"use client";

import { useEffect, useState } from "react";
import { Phone, Video, Loader2, MessageCircle } from "lucide-react";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { ChatEngine } from "@/components/chat/ChatEngine";
import { Booking } from "@/types/booking";

/* -------------------------------------------------------------------------- */
/* ConsultationChat
 *
 * A collapsible floating chat widget rendered on the consultation detail page.
 * It resolves the `caseId` from the `booking.bookingId` then delegates all
 * real-time messaging to <ChatEngine />.
 * -------------------------------------------------------------------------- */

export default function ConsultationChat({
  booking,
  currentUserId,
  currentUserRole,
}: {
  booking: Booking;
  currentUserId: string;
  currentUserRole: "USER" | "EXPERT";
}) {
  const [open, setOpen] = useState(true);
  const [caseId, setCaseId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const bookingDate = new Date(booking.bookingDate._seconds * 1000);
  const senderRole = currentUserRole === "USER" ? "client" : "professional";

  // ── Resolve caseId from bookingId ─────────────────────────────────────────
  useEffect(() => {
    if (!booking.bookingId) {
      setLoading(false);
      return;
    }

    const token = getAccessToken();
    fetch(
      `/api/user/case-by-booking?bookingId=${encodeURIComponent(booking.bookingId)}`,
      { headers: token ? { Authorization: `Bearer ${token}` } : {} }
    )
      .then((r) => r.json())
      .then((data: { caseId?: string | null }) => {
        if (data.caseId) setCaseId(data.caseId);
      })
      .catch((err) => console.error("ConsultationChat: case lookup error:", err))
      .finally(() => setLoading(false));
  }, [booking.bookingId]);

  /* -------------------------------------------------------------------------- */
  /* UI */
  /* -------------------------------------------------------------------------- */

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col transition-all duration-200 ${
        open ? "w-[360px] h-[520px]" : "w-[260px] h-[52px]"
      }`}
    >
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="px-4 py-3 border-b border-gray-100 cursor-pointer flex justify-between items-center shrink-0 rounded-t-2xl"
      >
        <div>
          <p className="font-semibold text-sm text-gray-800">{booking.expertName}</p>
          {open && (
            <p className="text-xs text-gray-500 capitalize flex items-center gap-1 mt-0.5">
              {booking.callType === "video" ? <Video size={12} /> : <Phone size={12} />}
              {booking.callType} · {bookingDate.toLocaleDateString()}
            </p>
          )}
        </div>
        <span className="text-xs text-gray-400 ml-2 shrink-0">{open ? "—" : "Chat ▲"}</span>
      </div>

      {/* BODY */}
      {open && (
        <div className="flex-1 overflow-hidden rounded-b-2xl">
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-400">
              <Loader2 className="animate-spin text-[#c92c41] mr-2" size={20} />
              <span className="text-xs">Loading chat…</span>
            </div>
          ) : caseId && currentUserId ? (
            <ChatEngine
              key={caseId}
              caseId={caseId}
              currentUserId={currentUserId}
              senderRole={senderRole as "client" | "professional"}
              professionalName={booking.expertName}
              caseTitle={`Consultation — ${booking.expertName}`}
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <MessageCircle size={24} className="text-gray-300 mb-2" />
              <p className="text-xs font-semibold text-gray-500">Chat channel not ready yet</p>
              <p className="text-[11px] text-gray-400 mt-1">
                A case must be assigned to this booking before the chat opens.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
