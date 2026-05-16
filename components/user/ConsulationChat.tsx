"use client";

import { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  limit,
  addDoc,
} from "firebase/firestore";
import { Send, Phone, Video } from "lucide-react";
import { db } from "@/lib/firebaseClient";
import { Booking } from "@/types/booking";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type Message = {
  id: string;
  senderId: string;
  senderRole: "USER" | "EXPERT";
  text: string;
  createdAt?: any;
};

/* -------------------------------------------------------------------------- */
/*                               COMPONENT                                    */
/* -------------------------------------------------------------------------- */

export default function ConsultationChat({
  booking,
  currentUserId,
  currentUserRole,
}: {
  booking: Booking;
  currentUserId: string;
  currentUserRole: "USER" | "EXPERT";
}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  const bookingDate = new Date(booking.bookingDate._seconds * 1000);

  /* ===================== REALTIME LISTENER ===================== */
  useEffect(() => {
    if (!currentUserId || !booking.bookingId) return;

    const q = query(
      collection(db, "consultationChats", booking.bookingId, "messages"),
      orderBy("createdAt", "asc"),
      limit(200),
    );

    const unsub = onSnapshot(q, (snap) => {
      setMessages(
        snap.docs.map((d) => ({
          id: d.id,
          ...(d.data() as any),
        })),
      );
    });

    return () => unsub();
  }, [booking.bookingId, currentUserId]);

  /* ===================== AUTO SCROLL ===================== */
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ===================== SEND MESSAGE (API READY) ===================== */
  const sendMessage = async () => {
    if (!text.trim()) return;

    await addDoc(
      collection(db, "consultationChats", booking.bookingId, "messages"),
      {
        bookingId: booking.bookingId,
        text,
        senderId: currentUserId,
        senderRole: currentUserRole,
        createdAt: serverTimestamp(),
        createdAtMs: Date.now(),
        read: false,
      },
    );

    setText("");
  };

  /* -------------------------------------------------------------------------- */
  /*                                  UI                                        */
  /* -------------------------------------------------------------------------- */

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-white border rounded-xl shadow-xl flex flex-col justify-center transition-all ${
        open ? "w-[340px] h-[460px]" : "w-[240px] h-[52px]"
      }`}
    >
      {/* HEADER */}
      <div
        onClick={() => setOpen(!open)}
        className="px-4 py-3 border-b cursor-pointer flex justify-between items-center"
      >
        <div>
          <p className="font-medium text-sm">{booking.expertName}</p>
          {open && (
            <p className="text-xs text-gray-500 capitalize flex items-center gap-1">
              {booking.callType === "video" ? (
                <Video size={12} />
              ) : (
                <Phone size={12} />
              )}
              {booking.callType} consultation ·{" "}
              {bookingDate.toLocaleDateString()}
            </p>
          )}
        </div>
        <span className="text-xs text-gray-400">{open ? "—" : "Chat ▲"}</span>
      </div>

      {open && (
        <>
          {/* STATUS BAR */}
          <div className="px-4 py-1 text-xs bg-gray-50 border-b flex justify-between">
            <span className="capitalize">
              Status: <b>{booking.status}</b>
            </span>
            <span>₹{booking.rate}</span>
          </div>

          {/* MESSAGES */}
          <div className="flex-1 overflow-y-auto p-3 text-xs flex flex-col gap-2">
            {messages.length === 0 && (
              <p className="text-gray-400 text-center mt-4">
                Start your consultation chat…
              </p>
            )}

            {messages.map((m) => {
              const isMe = m.senderId === currentUserId;
              return (
                <div
                  key={m.id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl whitespace-pre-wrap break-words ${
                      isMe
                        ? "bg-[#c92c41] text-white"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* INPUT */}
          {booking.status === "confirmed" && (
            <div className="border-t p-2 flex gap-2">
              <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 border rounded-md px-2 py-1 text-xs"
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="bg-[#c92c41] text-white px-2 rounded-md"
              >
                <Send size={14} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
