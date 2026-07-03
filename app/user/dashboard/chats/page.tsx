"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { getUserBookings } from "@/lib/apis/api";
import { ref, get } from "firebase/database";
import { rtdb } from "@/lib/firebaseClient";
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
 const [selectedBookingId, setSelectedBookingId] = useState<string | null>(
 null
 );

 useEffect(() => {
 const loadChats = async () => {
 try {
 /* 1️⃣ Fetch user bookings */
 const res = await getUserBookings();
 const bookings: Booking[] = res.consultations || [];

 if (bookings.length === 0) {
 setChats([]);
 return;
 }

 /* 2️⃣ Check RTDB for each bookingId */
 const chatPromises = bookings.map(async (booking) => {
 const chatRef = ref(rtdb, `chatRooms/${booking.bookingId}`);
 const snapshot = await get(chatRef);

 if (!snapshot.exists()) return null;

 const data = snapshot.val();

 return {
 bookingId: booking.bookingId,
 expertName: booking.expertName,
 lastMessage: data.lastMessage || "",
 updatedAt: data.updatedAt || 0,
 };
 });

 const chatResults = (await Promise.all(chatPromises)).filter(
 Boolean
 ) as Chat[];

 /* 3️⃣ Sort by latest activity */
 chatResults.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));

 setChats(chatResults);
 } catch (err) {
 console.error("Failed to load chats", err);
 } finally {
 setLoading(false);
 }
 };

 loadChats();
 }, []);

 /* ---------- UI STATES ---------- */

 if (loading) return <p>Loading chats...</p>;

 if (chats.length === 0) {
 return <div className="text-gray-500 mt-10">No chats yet.</div>;
 }

 /* ---------- UI ---------- */

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
 <p className="text-sm text-gray-500 truncate">
 {chat.lastMessage || "Open chat"}
 </p>
 </div>
 </div>
 </div>
 ))}
 </div>

 {/* CHAT MODAL */}
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
