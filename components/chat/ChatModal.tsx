"use client";

import { useEffect, useRef, useState } from "react";
import { useChatMessages } from "@/lib/chat/useChatMessages";
import { sendMessage } from "@/lib/chat/sendMessage";
import { setTyping, useTypingStatus } from "@/lib/chat/typing";

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

  const [uid, setUid] = useState<string | null>(null);

  // Load UID once
  useEffect(() => {
    const storedUid = localStorage.getItem("uid");
    if (storedUid) setUid(storedUid);
  }, []);

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
      <div className="w-[360px] h-[480px] bg-white rounded-2xl shadow-xl flex flex-col border">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-3 rounded-t-2xl flex justify-between">
          <span className="font-semibold text-sm">Chat Consultation</span>
          <button onClick={onClose}>✕</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2 bg-gray-50">
          {messages.map((msg) => {
            const isMine = msg.senderRole === role;

            return (
              <div
                key={msg.id}
                className={`flex ${isMine ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-3 py-2 rounded-xl text-sm max-w-[75%] ${
                    isMine
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-white border rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            );
          })}

          {isOtherTyping && (
            <div className="text-xs text-gray-400 italic">Typing...</div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="border-t p-3 flex gap-2">
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
            className="flex-1 border rounded-lg px-3 py-2 text-sm disabled:bg-gray-100"
          />
          <button
            onClick={send}
            disabled={!uid}
            className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
