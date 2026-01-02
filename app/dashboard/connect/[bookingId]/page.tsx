"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { serverApi } from "@/lib/apis/axios";
import ChatModal from "@/components/chat/ChatModal";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function UserConnectPage() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState<any>(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const loadBooking = async () => {
      const res = await serverApi.get(`/api/user/consultations/${bookingId}`);
      setBooking(res.data.booking);
    };
    loadBooking();
  }, [bookingId]);

  if (!booking) {
    return <p className="p-6">Loading consultation...</p>;
  }

  const expertName = booking.expertName;
  const callType = booking.callType;

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-white shadow rounded-tr-3xl rounded-br-3xl border-r p-6 hidden md:flex flex-col pt-24">
        <h2 className="text-2xl font-semibold mb-8 text-gray-800">Menu</h2>

        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
            <MessageCircle size={20} />
            Chats
            <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
              🚧
            </span>
          </button>

          <button className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 font-medium">
            <PhoneCall size={20} />
            Calls
            <span className="ml-2 text-xs bg-yellow-200 text-yellow-800 px-2 py-[2px] rounded-full">
              🚧
            </span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 pt-24">
        <div className="max-w-2xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Consultation with {expertName}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Booking ID: {booking.bookingId}
            </p>
          </div>

          {/* Options */}
          <div className="bg-white rounded-2xl shadow p-6 space-y-4">
            <h2 className="font-semibold text-gray-800">Connect Options</h2>

            {/* Chat */}
            <button
              onClick={() => setShowChat(true)}
              className={`w-full py-3 rounded-lg font-medium transition ${"bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              Chat
            </button>

            {/* Audio */}
            <button
              disabled
              className="w-full py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Voice Call (Coming Soon)
            </button>

            {/* Video */}
            <button
              disabled
              className="w-full py-3 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
            >
              Video Call (Coming Soon)
            </button>
          </div>
        </div>
      </main>

      {/* CHAT MODAL */}
      {showChat && (
        <ChatModal
          bookingId={booking.bookingId}
          role="client"
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}
