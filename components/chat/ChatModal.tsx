"use client";

import { useEffect, useRef, useState } from "react";
import { useChatMessages } from "@/lib/chat/useChatMessages";
import { sendMessage } from "@/lib/chat/sendMessage";
import { setTyping, useTypingStatus } from "@/lib/chat/typing";
import { Send, X } from "lucide-react";
import { useAuth } from "@/context/authContext";


export default function ChatModal({
  bookingId,
  role,
  onClose,
}: {
  bookingId: string;
  role: "expert" | "client";
  onClose: () => void;
}) {
  const messages = useChatMessages(bookingId);
  const isOtherTyping = useTypingStatus(bookingId, role);

  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const { user } = useAuth();
  const uid = user?.uid ?? null;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    return () => {
      setTyping(bookingId, role, false);
    };
  }, [bookingId, role]);

  const send = async () => {
    if (!input.trim() || !uid) return;

    await sendMessage({
      bookingId,
      text: input,
      senderId: uid,
      senderRole: role,
    });

    setInput("");
    setTyping(bookingId, role, false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="w-[350px] sm:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-100 overflow-hidden font-sans">
        {/* Header */}
        <div className="bg-[#C0392B] text-white px-5 py-4 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="font-bold text-sm tracking-wide">Live Consultation</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-lg transition duration-150"
            aria-label="Close chat"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 bg-slate-50/50">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6 space-y-1">
              <p className="text-xs font-semibold text-slate-500">No messages yet</p>
              <p className="text-[11px] text-slate-400">Send a message to start your consultation session.</p>
            </div>
          ) : (
            messages.map((msg) => {
              const isMine = msg.senderRole === role;

              return (
                <div key={msg.id} className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed max-w-[80%] ${
                      isMine
                        ? "bg-[#C0392B] text-white rounded-tr-none shadow-[0_2px_8px_rgba(192,57,43,0.15)]"
                        : "bg-white text-slate-800 border border-slate-100 rounded-tl-none shadow-[0_1px_4px_rgba(0,0,0,0.02)]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })
          )}

          {isOtherTyping && (
            <div className="flex items-center gap-1.5 bg-white border border-slate-100 rounded-2xl px-3.5 py-2.5 w-max shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Composer */}
        <div className="border-t border-slate-100 p-3 bg-white flex gap-2 items-center shrink-0">
          <input
            disabled={!uid}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setTyping(bookingId, role, true);

              if (typingTimeout.current) {
                clearTimeout(typingTimeout.current);
              }

              typingTimeout.current = setTimeout(() => {
                setTyping(bookingId, role, false);
              }, 800);
            }}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder={!uid ? "Loading chat..." : "Type a message..."}
            className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-xs outline-none focus:border-[#C0392B] disabled:bg-slate-50 transition"
          />
          <button
            onClick={send}
            disabled={!uid || !input.trim()}
            className="bg-[#C0392B] text-white p-2 rounded-xl disabled:opacity-50 hover:bg-[#A03024] transition shrink-0 cursor-pointer"
            aria-label="Send message"
          >
            <Send size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
