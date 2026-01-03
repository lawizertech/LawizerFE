"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";
import ChatModal from "@/components/chat/ChatModal";

export default function ConnectPage() {
  const { bookingId } = useParams<{ bookingId: string }>();

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

  if (loading) return <p className="pt-6 text-2xl font-bold ">Loading...</p>;
  if (!booking) return null;

  const client = booking.userDetails;

  return (
    <div className="pt-10">
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Consultation with {client?.displayName}
        </h1>
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
          disabled
          className="w-full py-3 rounded-lg bg-gray-100 text-gray-400"
        >
          Audio Call (Coming Soon)
        </button>

        <button
          disabled
          className="w-full py-3 rounded-lg bg-gray-100 text-gray-400"
        >
          Video Call (Coming Soon)
        </button>
      </div>

      {showChat && (
        <ChatModal
          bookingId={booking.bookingId}
          role="expert"
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}
