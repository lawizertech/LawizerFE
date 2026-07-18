"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";
import ChatModal from "@/components/chat/ChatModal";
import VoiceCallModal from "@/components/call/VoiceCallModal";

// TODO: replace Firebase RTDB call-signaling with Supabase Realtime channel `call:<bookingId>`
//   - subscribe to "ringing" event from lawyer
//   - broadcast "accepted" / "rejected" back
//   - broadcast "ended" to tear down

export default function UserConnectPage() {
  const { serviceId: bookingId } = useParams<{ serviceId: string }>();

  const [incomingCall, setIncomingCall] = useState<{ type: "voice" | "video" } | null>(null);
  const [showVoiceCall, setShowVoiceCall] = useState(false);

  const [booking, setBooking] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (!bookingId) return;

    // TODO: subscribe to Supabase Realtime channel `call:${bookingId}`:
    //   - on event "ringing" → setIncomingCall({ type: payload.type })
    //   - on event "ended"   → setIncomingCall(null)
    // Return cleanup that unsubscribes the channel.
  }, [bookingId]);

  useEffect(() => {
    if (!bookingId) return;

    const loadBooking = async () => {
      const res = await serverApi.get(`/api/user/consultations/${bookingId}`);
      setBooking(res.data.booking);
    };

    loadBooking();
  }, [bookingId]);

  if (!booking) return <p className="pt-6 text-2xl font-bold">Loading consultation...</p>;

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Consultation with {booking.expertName}</h1>
        <p className="text-gray-500 text-sm mt-1">Booking ID: {booking.bookingId}</p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-gray-800">Connect Options</h2>

        <button
          onClick={() => setShowChat(true)}
          className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Chat
        </button>

        <button disabled className="w-full py-3 rounded-lg bg-gray-100 text-gray-400">
          Voice Call (Coming Soon)
        </button>

        <button disabled className="w-full py-3 rounded-lg bg-gray-100 text-gray-400">
          Video Call (Coming Soon)
        </button>
      </div>

      {showChat && <ChatModal bookingId={booking.bookingId} role="client" onClose={() => setShowChat(false)} />}

      {incomingCall && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center">
            <h2 className="text-xl font-bold mb-2">
              Incoming {incomingCall.type === "voice" ? "Voice" : "Video"} Call
            </h2>

            <p className="text-gray-600 mb-6">{booking.expertName} is calling you</p>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  // TODO: broadcast "rejected" on Supabase Realtime channel `call:${bookingId}`
                  setIncomingCall(null);
                }}
                className="flex-1 py-2 rounded-lg bg-red-600 text-white"
              >
                Reject
              </button>

              <button
                onClick={() => {
                  // TODO: broadcast "accepted" on Supabase Realtime channel `call:${bookingId}`
                  setIncomingCall(null);
                  setShowVoiceCall(true);
                }}
                className="flex-1 py-2 rounded-lg bg-green-600 text-white"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}

      {showVoiceCall && (
        <VoiceCallModal bookingId={booking.bookingId} role="client" onClose={() => setShowVoiceCall(false)} />
      )}
    </>
  );
}
