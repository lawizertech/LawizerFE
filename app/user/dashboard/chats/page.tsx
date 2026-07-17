"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";
import ChatModal from "@/components/chat/ChatModal";

interface Booking {
  bookingId: string;
  expertName: string;
}

interface Chat {
  bookingId: string;
  expertName: string;
  lastMessage?: string;
  updatedAt?: number;
}

export default function ChatsPage() {
  const [chats, setChats] = useState<Chat[]>([]);
  const [loading, setLoading] = useState(true);

  const [showChat, setShowChat] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<string | null>(null);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const res = await getUserBookings();
        const bookings: Booking[] = res.consultations || [];

        // TODO: replace RTDB snapshot with Supabase query for chat metadata
        // For now surface every booking as a potential chat room
        const chatList: Chat[] = bookings.map((b) => ({
          bookingId: b.bookingId,
          expertName: b.expertName,
          lastMessage: "",
          updatedAt: 0,
        }));

        setChats(chatList);
      } catch (err) {
        console.error("Failed to load chats", err);
      } finally {
        setLoading(false);
      }
    };

    loadChats();
  }, []);

  if (loading) return <p>Loading chats...</p>;

  if (chats.length === 0) {
    return <div className="text-gray-500 mt-10">No chats yet.</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Your Chats</h1>

      <div className="space-y-3 max-w-xl">
        {chats.map((chat) => (
          <div
            key={chat.bookingId}
            onClick={() => {
              setSelectedBookingId(chat.bookingId);
              setShowChat(true);
            }}
            className="bg-white p-4 rounded-xl shadow hover:shadow-md cursor-pointer transition"
          >
            <div className="flex items-center gap-3">
              <MessageCircle size={18} className="text-indigo-600" />

              <div className="min-w-0">
                <p className="font-medium text-gray-800">{chat.expertName}</p>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage || "Open chat"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showChat && selectedBookingId && (
        <ChatModal
          bookingId={selectedBookingId}
          role="client"
          onClose={() => {
            setShowChat(false);
            setSelectedBookingId(null);
          }}
        />
      )}
    </>
  );
}
