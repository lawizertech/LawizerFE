"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { serverApi } from "@/lib/apis/axios";
import { ChatEngine } from "@/components/chat/ChatEngine";
import { Loader2, Scale } from "lucide-react";

// TODO: wire voice-call signaling via Supabase Realtime channel `call:<caseId>`

export default function UserConnectPage() {
  const { serviceId: bookingId } = useParams<{ serviceId: string }>();
  const { user } = useAuth();

  const [booking, setBooking] = useState<any>(null);
  const [caseId, setCaseId] = useState<string | null>(null);
  const [loadingBooking, setLoadingBooking] = useState(true);
  const [loadingCase, setLoadingCase] = useState(true);
  const [caseError, setCaseError] = useState(false);

  // ── 1. Fetch the booking details ──────────────────────────────────────────
  useEffect(() => {
    if (!bookingId) return;

    serverApi
      .get(`/api/user/consultations/${bookingId}`)
      .then((res) => setBooking(res.data.booking ?? res.data))
      .catch((err) => console.error("Failed to load booking:", err))
      .finally(() => setLoadingBooking(false));
  }, [bookingId]);

  // ── 2. Resolve the caseId from the bookingId ──────────────────────────────
  useEffect(() => {
    if (!bookingId) return;

    const token = getAccessToken();
    fetch(`/api/user/case-by-booking?bookingId=${encodeURIComponent(bookingId)}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })
      .then((r) => r.json())
      .then((data: { caseId?: string | null; error?: string }) => {
        if (data.caseId) {
          setCaseId(data.caseId);
        } else {
          // No case assigned yet
          setCaseError(false); // not an error — just no case yet
        }
      })
      .catch(() => setCaseError(true))
      .finally(() => setLoadingCase(false));
  }, [bookingId]);

  const isLoading = loadingBooking || loadingCase;
  const currentUserId = user?.uid ?? null;

  // ── Loading state ─────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <Loader2 className="animate-spin text-[#c92c41] mr-2" size={28} />
        <span className="text-sm font-semibold">Loading consultation…</span>
      </div>
    );
  }

  // ── No booking found ──────────────────────────────────────────────────────
  if (!booking) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <Scale className="text-gray-300 mb-2" size={32} />
        <p className="text-sm font-semibold">Consultation not found.</p>
      </div>
    );
  }

  const expertName: string = booking.expertName ?? booking.expert?.name ?? "Your Legal Professional";
  const caseTitle: string =
    booking.serviceId
      ? `Booking #${(booking.bookingId ?? bookingId ?? "").toString().slice(0, 8).toUpperCase()}`
      : `Consultation with ${expertName}`;

  // ── No case assigned yet ──────────────────────────────────────────────────
  if (!caseId) {
    return (
      <div className="space-y-6 font-sans pb-10">
        {/* Booking info header */}
        <div className="bg-white rounded-2xl shadow-xs p-6 border border-gray-200/80">
          <h1 className="text-2xl font-bold text-gray-800">
            Consultation with {expertName}
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Booking ID: {(booking.bookingId ?? bookingId ?? "").toString().slice(0, 8).toUpperCase()}
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center max-w-lg mx-auto">
          <Scale className="text-amber-500 mx-auto mb-2" size={28} />
          <p className="font-semibold text-amber-800 text-sm">
            Chat channel not ready yet
          </p>
          <p className="text-amber-600 text-xs mt-1">
            Your professional has not yet been assigned to this consultation.
            The chat channel will appear automatically once they accept the booking.
          </p>
        </div>
      </div>
    );
  }

  // ── Chat ready ────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 font-sans pb-10">
      {/* Booking info header */}
      <div className="bg-white rounded-2xl shadow-xs p-6 border border-gray-200/80">
        <h1 className="text-2xl font-bold text-gray-800">
          Consultation with {expertName}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Booking: {(booking.bookingId ?? bookingId ?? "").toString().slice(0, 8).toUpperCase()}
          &nbsp;&bull;&nbsp;
          <span className="capitalize">{booking.callType ?? "chat"}</span>
        </p>
      </div>

      {/* Chat Window */}
      {currentUserId ? (
        <div className="h-[640px]">
          <ChatEngine
            key={caseId}
            caseId={caseId}
            currentUserId={currentUserId}
            peerId={booking.expertId ?? booking.professionalId ?? booking.expert?.id}
            senderRole="client"
            professionalName={expertName}
            caseTitle={caseTitle}
          />
        </div>
      ) : (
        <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
          Sign in to access the chat.
        </div>
      )}
    </div>
  );
}
