"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";
import ChatModal from "@/components/chat/ChatModal";

export default function UserConnectPage() {
  const { bookingId } = useParams<{ bookingId: string }>();

  const [booking, setBooking] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (!bookingId) return;

    const loadBooking = async () => {
      const res = await serverApi.get(`/api/user/consultations/${bookingId}`);
      setBooking(res.data.booking);
    };

    loadBooking();
  }, [bookingId]);

  if (!booking)
    return <p className="pt-6 text-2xl font-bold">Loading consultation...</p>;

  return (
    <>
      <div className="bg-white rounded-2xl shadow p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Consultation with {booking.expertName}
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Booking ID: {booking.bookingId}
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 space-y-4 max-w-xl">
        <h2 className="font-semibold text-gray-800">Connect Options</h2>

        <button
          onClick={() => setShowChat(true)}
          className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Chat
        </button>

        <button
          disabled
          className="w-full py-3 rounded-lg bg-gray-100 text-gray-400"
        >
          Voice Call (Coming Soon)
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
          role="client"
          onClose={() => setShowChat(false)}
        />
      )}
    </>
  );
}
