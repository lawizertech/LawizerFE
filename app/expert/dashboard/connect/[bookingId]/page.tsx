"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";
import ChatModal from "@/components/chat/ChatModal";
import VoiceCallModal from "@/components/call/VoiceCallModal";

// TODO: replace Firebase RTDB call-signaling with Supabase Realtime channel `call:<bookingId>`
//   - broadcast "ringing" event when lawyer initiates a voice call
//   - listen for "accepted" / "rejected" from client
//   - broadcast "ended" on hang-up

export default function ConnectPage() {
  const { bookingId } = useParams<{ bookingId: string }>();
  const [showVoiceCall, setShowVoiceCall] = useState(false);

  const [booking, setBooking] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!bookingId) return;

    const loadBooking = async () => {
      const res = await serverApi.get(`/api/expert/consultations/${bookingId}`);
      setBooking(res.data.booking);
      setLoading(false);
    };

    loadBooking();
  }, [bookingId]);

  if (loading) return <p className="pt-6 text-2xl font-bold">Loading...</p>;
  if (!booking) return null;

  const client = booking.userDetails;

  return (
    <div className="pt-10">
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Consultation with {client?.displayName}</h1>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-gray-800">Connect Options</h2>

        <button
          className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          onClick={() => setShowChat(true)}
        >
          Chat
        </button>

        <button
          onClick={() => {
            // TODO: broadcast "ringing" event on Supabase Realtime channel `call:${booking.bookingId}`
            // with payload: { type: "voice", caller: "lawyer", userId: booking.userId, lawyerId: booking.expertUid }
            setShowVoiceCall(true);
          }}
          className="w-full py-3 rounded-lg bg-green-600 text-white"
        >
          Voice Call
        </button>

        <button disabled className="w-full py-3 rounded-lg bg-gray-100 text-gray-400">
          Video Call (Coming Soon)
        </button>
      </div>

      {showChat && <ChatModal bookingId={booking.bookingId} role="expert" onClose={() => setShowChat(false)} />}

      {showVoiceCall && (
        <VoiceCallModal bookingId={booking.bookingId} role="lawyer" onClose={() => setShowVoiceCall(false)} />
      )}
    </div>
  );
}
