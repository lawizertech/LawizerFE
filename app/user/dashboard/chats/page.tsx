"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Scale, ShieldCheck } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/context/authContext";
import { ChatEngine } from "@/components/chat/ChatEngine";
import { getUserBookings } from "@/lib/apis/api";

interface CaseChatItem {
  caseId: string;
  professionalName: string;
  caseTitle: string;
  lastMessage?: string;
  updatedAt?: string;
}

export default function ChatsPage() {
  const { user } = useAuth();
  const [chatRooms, setChatRooms] = useState<CaseChatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedChat, setSelectedChat] = useState<CaseChatItem | null>(null);

  const supabase = createClient();
  const userRole = user?.role?.toUpperCase();
  const effectiveUserId = user?.uid || null;

  useEffect(() => {
    if (!effectiveUserId) return;
    const loadUserChats = async () => {
      try {
        setLoading(true);
        // 1. Query assigned cases from Supabase
        const res = await fetch(`/api/chat/user-rooms?clientId=${effectiveUserId}`);
        const data = await res.json();

        let mappedRooms: CaseChatItem[] = [];
        if (data.success && Array.isArray(data.rooms)) {
          mappedRooms = data.rooms;
        }

        setChatRooms(mappedRooms);

        // Auto-select first chat room if none selected
        if (mappedRooms.length > 0) {
          setSelectedChat((prev) => prev || mappedRooms[0]);
        }
      } catch (err) {
        console.error("Failed to load user chats:", err);
      } finally {
        setLoading(false);
      }
    };

    void loadUserChats();

    // 2. Real-time subscription to cases table changes (e.g. when assigned in admin panel)
    const casesChannel = supabase
      .channel("user_cases_channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "cases" },
        () => {
          console.log("[Realtime] Case assignment changed, reloading user chats...");
          void loadUserChats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(casesChannel);
    };
  }, [effectiveUserId]);

  if (!effectiveUserId) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans">
        <Scale className="text-gray-300 mb-2" size={32} />
        <p className="text-xs font-semibold">Please sign in to view your case chats.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500 font-sans">
        <Scale className="animate-pulse text-[#c92c41] mb-2" size={32} />
        <p className="text-xs font-semibold">Loading assigned case chats...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 font-sans pb-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-gray-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <MessageCircle size={22} className="text-[#c92c41]" />
            Case Litigation Chats
          </h1>
          <p className="text-xs text-gray-500 mt-0.5">
            Direct, real-time encrypted consultation channels with your assigned legal professionals.
          </p>
        </div>

        {selectedChat && (
          <span className="text-xs font-bold text-[#c92c41] bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100 self-start sm:self-auto">
            {chatRooms.length} Active Channel{chatRooms.length > 1 ? "s" : ""}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Chat Rooms List */}
        <div className={`lg:col-span-4 space-y-3 ${selectedChat ? "hidden lg:block" : "block"}`}>
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-1">
            Assigned Professionals
          </h2>

          <div className="space-y-2.5">
            {chatRooms.map((room) => {
              const isSelected = selectedChat?.caseId === room.caseId;
              return (
                <div
                  key={room.caseId}
                  onClick={() => setSelectedChat(room)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? "bg-rose-50/70 border-[#c92c41] shadow-xs"
                      : "bg-white border-gray-200/80 hover:border-gray-300 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? "bg-[#c92c41] text-white shadow-xs"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <ShieldCheck size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <p className="font-bold text-xs text-gray-900 truncate">
                          {room.professionalName}
                        </p>
                        <span className="text-[10px] text-gray-400 shrink-0 font-mono">
                          #{room.caseId.slice(0, 5)}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-[#c92c41] truncate mt-0.5">
                        {room.caseTitle}
                      </p>
                      <p className="text-[11px] text-gray-400 truncate mt-1">
                        {room.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Embedded Chat Engine Window */}
        <div className={`lg:col-span-8 h-[calc(100dvh-130px)] sm:h-[650px] md:h-[700px] ${selectedChat ? "block" : "hidden lg:block"}`}>
          {selectedChat ? (
            <ChatEngine
              key={selectedChat.caseId}
              caseId={selectedChat.caseId}
              currentUserId={effectiveUserId}
              senderRole="client"
              professionalName={selectedChat.professionalName}
              caseTitle={selectedChat.caseTitle}
              onClose={() => setSelectedChat(null)}
            />
          ) : (
            <div className="bg-white rounded-2xl border border-gray-200/80 h-full flex flex-col items-center justify-center p-8 text-center">
              <MessageCircle size={32} className="text-gray-300 mb-2" />
              <p className="text-xs font-bold text-gray-500">Select a case channel to view conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
