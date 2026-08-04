"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import {
  Send,
  Flag,
  Loader2,
  AlertCircle,
  Clock,
  Check,
  CheckCheck,
  MessageSquare,
  ShieldCheck,
  X,
  Scale,
  Phone,
  Video,
  ArrowLeft,
  Calendar,
  PlayCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sortChatMessages, upsertChatMessages, type ChatMessage, type SenderRole } from "@/lib/chat";
import { IncomingCallOverlay } from "./IncomingCallOverlay";
import VideoCall from "@/components/call/VideoCall";
import { RecordingsModal } from "./RecordingsModal";
import { StreamCallOverlay } from "@/components/calling/StreamCallOverlay";
import { useCallNotifications } from "@/hooks/useCallNotifications";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { CALL_INCOMING, chatChannel } from "@/lib/call/callEvents";
import type { CallMode, IncomingCallPayload } from "@/lib/call/callTypes";

// ── Props ──────────────────────────────────────────────────────────────────────
const parseUtcDate = (dateVal: string | Date | null | undefined): Date => {
  if (!dateVal) return new Date();
  if (dateVal instanceof Date) return dateVal;
  
  let s = dateVal.trim();
  // If naive timestamp, treat it as UTC by replacing space with T and appending Z
  if (!s.endsWith("Z") && !/[+-]\d{2}(:\d{2})?$/.test(s)) {
    s = s.replace(" ", "T");
    if (!s.includes("T")) {
      return new Date(s);
    }
    s = s + "Z";
  }
  return new Date(s);
};

interface ChatEngineProps {
  caseId: string;
  currentUserId: string;
  /** The peer's Supabase user ID — required to initiate calls. */
  peerId?: string;
  senderRole?: SenderRole;
  professionalName?: string;
  caseTitle?: string;
  onClose?: () => void;
}

// ── Component ──────────────────────────────────────────────────────────────────

export function ChatEngine({
  caseId,
  currentUserId,
  peerId,
  senderRole = "client",
  professionalName = "Assigned Professional",
  caseTitle = "Case Workspace",
  onClose,
}: ChatEngineProps) {
  const supabase = createClient();

  // ── Chat state ─────────────────────────────────────────────────────────────
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);

  const [showRecordings, setShowRecordings] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<Record<string, boolean>>({});
  const [isTyping, setIsTyping] = useState<Record<string, boolean>>({});

  // ── Call state ─────────────────────────────────────────────────────────────
  const [incomingCall, setIncomingCall] = useState<{
    mode: CallMode;
    callId: string;
    callerId: string;
  } | null>(null);

  // activeCall: false = no call, or { mode, callId } when a call is live
  const [activeCall, setActiveCall] = useState<{ mode: CallMode; callId: string } | false>(false);

  // Rate limit for session creation
  const [isSessionCoolingDown, setIsSessionCoolingDown] = useState(false);

  // Fix 5: ref kept in sync synchronously so broadcast handlers never read stale state
  const activeCallRef = useRef<typeof activeCall>(false);
  const setActiveCallSafe = useCallback((next: typeof activeCall) => {
    activeCallRef.current = next; // sync — runs before React batches the setState
    setActiveCall(next);
  }, []);

  // Ringtone plays while incomingCall is non-null
  useCallNotifications({ isRinging: incomingCall !== null });

  // ── Refs ───────────────────────────────────────────────────────────────────
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const loadingMoreRef = useRef(false);
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ── Client-side mark as read ───────────────────────────────────────────────
  const markAsReadClient = async () => {
    try {
      await supabase
        .from("chat_messages")
        .update({ read_at: new Date().toISOString() })
        .eq("case_id", caseId)
        .neq("sender_id", currentUserId)
        .is("read_at", null);
    } catch (err) {
      console.error("markAsReadClient error:", err);
    }
  };

  // ── Real-time setup ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!currentUserId || !caseId) return;

    fetchMessages();

    const channel = supabase
      .channel(chatChannel(caseId), {
        config: { presence: { key: currentUserId } },
      })
      // ── chat_messages postgres_changes ─────────────────────────────────────
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "chat_messages", filter: `case_id=eq.${caseId}` },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const newMsg = payload.new as ChatMessage;
            if (newMsg.sender_id === currentUserId && newMsg.message_type !== "meeting_link") return;
            setMessages((prev) => upsertChatMessages(prev, { ...newMsg, status: "sent" }));
            setTimeout(scrollToBottom, 50);
            void markAsReadClient();
          } else if (payload.eventType === "UPDATE") {
            setMessages((prev) => upsertChatMessages(prev, payload.new as ChatMessage));
          }
        }
      )
      // ── notifications table — DB-reliable backup for incoming calls ─────────
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "notifications",
          filter: `recipient_id=eq.${currentUserId}`,
        },
        (payload) => {
          const n = payload.new as { type: string; payload: Record<string, any> };
          if (n.type !== "incoming_call") return;
          if (activeCallRef.current) return; // already in a call
          const p = n.payload ?? {};
          if (p.call_id && p.caller_id !== currentUserId) {
            setIncomingCall({
              mode: (p.mode as CallMode) ?? "voice",
              callId: p.call_id,
              callerId: p.caller_id,
            });
          }
        }
      )
      // ── Presence ───────────────────────────────────────────────────────────
      .on("presence", { event: "sync" }, () => {
        const state = channel.presenceState();
        const online: Record<string, boolean> = {};
        for (const [key] of Object.entries(state)) online[key] = true;
        setOnlineUsers(online);
      })
      // ── Typing broadcast ───────────────────────────────────────────────────
      .on("broadcast", { event: "typing" }, (payload) => {
        if (payload.payload.userId === currentUserId) return;
        setIsTyping((prev) => ({ ...prev, [payload.payload.userId]: payload.payload.isTyping }));
      })
      // ── Incoming call broadcast ───────────────────────────────────────────
      .on("broadcast", { event: CALL_INCOMING }, ({ payload }: { payload: IncomingCallPayload }) => {
        if (payload.callerId === currentUserId) return;
        if (activeCallRef.current) return;
        setIncomingCall({ mode: payload.mode, callId: payload.callId, callerId: payload.callerId });
      })
      .subscribe(async (status) => {
        if (status === "SUBSCRIBED") {
          await channel.track({ online_at: new Date().toISOString() });
          void markAsReadClient();
        }
      });

    channelRef.current = channel;

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      channelRef.current = null;
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caseId, currentUserId]);

  // ── Fetch messages (paginated) ─────────────────────────────────────────────
  const fetchMessages = async (oldestDate?: string) => {
    try {
      let query = supabase
        .from("chat_messages")
        .select("*")
        .eq("case_id", caseId)
        .is("deleted_at", null)
        .order("created_at", { ascending: false })
        .limit(30);

      if (oldestDate) query = query.lt("created_at", oldestDate);

      const { data, error } = await query;
      if (error) throw error;
      if (data) {
        const formatted = sortChatMessages(data.map((m) => ({ ...m, status: "sent" as const })));
        if (oldestDate) {
          setMessages((prev) => upsertChatMessages(prev, formatted));
        } else {
          setMessages(formatted);
          setTimeout(scrollToBottom, 100);
        }
      if (data.length < 30) setHasMore(false);
      }
    } catch (err: any) {
      console.error("Failed to fetch messages:", err?.message || JSON.stringify(err, Object.getOwnPropertyNames(err)));
    } finally {
      setIsLoading(false);
      loadingMoreRef.current = false;
    }
  };

  const scrollToBottom = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  // Mobile virtual keyboard layout adjustment
  useEffect(() => {
    if (typeof window === "undefined" || !window.visualViewport) return;

    const handleViewportResize = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    };

    window.visualViewport.addEventListener("resize", handleViewportResize);
    window.visualViewport.addEventListener("scroll", handleViewportResize);

    return () => {
      window.visualViewport?.removeEventListener("resize", handleViewportResize);
      window.visualViewport?.removeEventListener("scroll", handleViewportResize);
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollTop === 0 && hasMore && !loadingMoreRef.current && messages.length > 0) {
      loadingMoreRef.current = true;
      const oldest = messages[0].created_at;
      if (oldest) fetchMessages(oldest);
      else loadingMoreRef.current = false;
    }
  };

  // ── Send message ───────────────────────────────────────────────────────────
  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const textToSend = inputText.trim();
    setInputText("");
    if (inputRef.current) inputRef.current.style.height = "auto";

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    channelRef.current?.send({
      type: "broadcast",
      event: "typing",
      payload: { userId: currentUserId, isTyping: false },
    });

    const tempId = crypto.randomUUID();
    const tempMsg: ChatMessage = {
      id: tempId,
      case_id: caseId,
      sender_id: currentUserId,
      text: textToSend,
      created_at: new Date().toISOString(),
      flagged_by: [],
      status: "sending",
      read_at: null,
    };

    setMessages((prev) => upsertChatMessages(prev, tempMsg));
    setTimeout(scrollToBottom, 50);

    const { error } = await supabase.from("chat_messages").insert({
      id: tempId,
      case_id: caseId,
      sender_id: currentUserId,
      text: textToSend,
      sender_role: senderRole,
      message_type: "text",
    });

    if (error) {
      console.error("Supabase client send error:", error);
      setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, status: "error" } : m)));
    } else {
      setMessages((prev) => prev.map((m) => (m.id === tempId ? { ...m, status: "sent" } : m)));
    }
  };

  // ── Flag message (client-side) ─────────────────────────────────────────────
  const handleFlag = async (messageId: string) => {
    const targetMsg = messages.find((m) => m.id === messageId);
    if (!targetMsg) return;
    const currentFlags = targetMsg.flagged_by || [];
    if (currentFlags.includes(currentUserId)) return;

    const newFlags = [...currentFlags, currentUserId];
    setMessages((prev) =>
      prev.map((m) => (m.id === messageId ? { ...m, flagged_by: newFlags } : m))
    );

    await supabase
      .from("chat_messages")
      .update({ flagged_by: newFlags })
      .eq("id", messageId);
  };

  // ── Typing ─────────────────────────────────────────────────────────────────
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 140)}px`;
    }
    channelRef.current?.send({
      type: "broadcast",
      event: "typing",
      payload: { userId: currentUserId, isTyping: true },
    });
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      channelRef.current?.send({
        type: "broadcast",
        event: "typing",
        payload: { userId: currentUserId, isTyping: false },
      });
    }, 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // ── Peer resolution (auto-detect if peerId prop omitted) ─────────────────
  const [resolvedPeerId, setResolvedPeerId] = useState<string | undefined>(peerId);

  useEffect(() => {
    if (peerId) {
      setResolvedPeerId(peerId);
      return;
    }
    if (!caseId || !currentUserId) return;

    supabase
      .from("cases")
      .select("client_id, professional_id")
      .eq("id", caseId)
      .maybeSingle()
      .then(({ data }) => {
        if (data) {
          const otherId = data.client_id === currentUserId ? data.professional_id : data.client_id;
          if (otherId) setResolvedPeerId(otherId);
        }
      });
  }, [caseId, currentUserId, peerId]);

  // ── Initiate outbound call ─────────────────────────────────────────────────
  const initiateCall = async (mode: CallMode) => {
    const targetPeerId = resolvedPeerId || peerId;
    if (!targetPeerId || targetPeerId === currentUserId) return;
    if (activeCallRef.current) return; // already in a call

    try {
      const token = getAccessToken();
      const res = await fetch("/api/calls/initiate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ caseId, mode, calleeId: targetPeerId }),
      });

      if (!res.ok) {
        console.error("Failed to initiate call:", await res.text());
        return;
      }

      const { callId } = (await res.json()) as { callId: string };

      // Broadcast incoming-call on the chat channel so the callee's ChatEngine picks it up
      await channelRef.current?.send({
        type: "broadcast",
        event: CALL_INCOMING,
        payload: {
          callId,
          callerId: currentUserId,
          mode,
        } satisfies IncomingCallPayload,
      });

      setActiveCallSafe({ mode, callId });
    } catch (err) {
      console.error("initiateCall error:", err);
    }
  };

  // ── Initiate meeting session ─────────────────────────────────────────────────
  const handleCreateSession = async (type: 'video' | 'voice') => {
    if (isSessionCoolingDown) return;

    try {
      setIsSessionCoolingDown(true);
      // Reset cooldown after 15 seconds
      setTimeout(() => setIsSessionCoolingDown(false), 15000);

      const token = getAccessToken();
      const title = type === 'video' ? "Video Consultation" : "Voice Consultation";
      const res = await fetch("/api/meetings/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ caseId, title, type }),
      });

      if (!res.ok) {
        console.error("Failed to create session:", await res.text());
      }
    } catch (err) {
      console.error("handleCreateSession error:", err);
    }
  };

  // ── Accept / Reject incoming call ──────────────────────────────────────────
  const handleAcceptCall = () => {
    if (!incomingCall) return;
    setActiveCallSafe({ mode: incomingCall.mode, callId: incomingCall.callId });
    setIncomingCall(null);
  };

  const handleRejectCall = async () => {
    if (!incomingCall) return;
    const token = getAccessToken();
    await fetch("/api/calls/reject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({ callId: incomingCall.callId }),
    }).catch(() => {});
    setIncomingCall(null);
  };

  // ── Derived ────────────────────────────────────────────────────────────────
  const otherParticipantsTyping = Object.entries(isTyping).some(
    ([id, typing]) => typing && id !== currentUserId
  );
  const isOtherOnline = Object.keys(onlineUsers).some((id) => id !== currentUserId);
  const targetPeer = resolvedPeerId || peerId;
  const canCall = !!targetPeer && targetPeer !== currentUserId;

  // ── Active call: render StreamCallOverlay ──────────────────────────────────
  if (activeCall) {
    return (
      <StreamCallOverlay
        caseId={caseId}
        currentUserId={currentUserId}
        peerName={professionalName}
        mode={activeCall.mode}
        onClose={() => setActiveCallSafe(false)}
      />
    );
  }

  // ── Chat UI ────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white border border-gray-200/80 rounded-2xl shadow-xl font-sans relative">
      {/* Fixed WhatsApp-style Header */}
      <header className="px-3.5 sm:px-5 py-3 bg-slate-900 text-white flex items-center justify-between shrink-0 z-20 sticky top-0 border-b border-slate-800">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          {onClose && (
            <button
              onClick={onClose}
              className="p-1 -ml-1 text-gray-300 hover:text-white transition cursor-pointer lg:hidden"
              aria-label="Back to chat list"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#c92c41] to-rose-700 text-white flex items-center justify-center font-bold text-sm shadow-md shrink-0 border border-white/10">
            <Scale size={18} />
          </div>
          <div className="min-w-0">
            <h2 className="text-xs sm:text-sm font-bold truncate leading-tight">
              {professionalName}{" "}
              <span className="text-gray-400 font-normal hidden sm:inline">— {caseTitle}</span>
            </h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isOtherOnline ? "bg-emerald-400 animate-pulse" : "bg-gray-400"
                }`}
              />
              <span className="text-[10px] sm:text-[11px] text-gray-300 font-medium">
                {isOtherOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Call buttons — only shown when peerId is known */}
          {canCall && (
            <>
              <button
                onClick={() => handleCreateSession('video')}
                disabled={isSessionCoolingDown}
                className={`p-1.5 rounded-lg flex items-center gap-1 ml-1 transition cursor-pointer ${
                  isSessionCoolingDown 
                    ? "text-gray-500 bg-white/5 cursor-not-allowed" 
                    : "text-gray-300 hover:bg-white/10 hover:text-emerald-400"
                }`}
                aria-label="Create Video Session"
                title={isSessionCoolingDown ? "Please wait 15s..." : "Create a video session link"}
              >
                <Video size={16} />
                <span className="text-xs font-semibold hidden md:inline">
                  {isSessionCoolingDown ? "Wait..." : "Video Session"}
                </span>
              </button>
              <button
                onClick={() => handleCreateSession('voice')}
                disabled={isSessionCoolingDown}
                className={`p-1.5 rounded-lg flex items-center gap-1 ml-1 transition cursor-pointer ${
                  isSessionCoolingDown 
                    ? "text-gray-500 bg-white/5 cursor-not-allowed" 
                    : "text-gray-300 hover:bg-white/10 hover:text-emerald-400"
                }`}
                aria-label="Create Voice Session"
                title={isSessionCoolingDown ? "Please wait 15s..." : "Create an audio-only session link"}
              >
                <Phone size={16} />
                <span className="text-xs font-semibold hidden md:inline">
                  {isSessionCoolingDown ? "Wait..." : "Voice Session"}
                </span>
              </button>
              <button
                onClick={() => setShowRecordings(true)}
                className="p-1.5 rounded-lg flex items-center gap-1 ml-1 transition cursor-pointer text-gray-300 hover:bg-white/10 hover:text-emerald-400"
                aria-label="View Recordings"
                title="View previous session recordings"
              >
                <PlayCircle size={16} />
                <span className="text-xs font-semibold hidden md:inline">Recordings</span>
              </button>
            </>
          )}

          {showRecordings && <RecordingsModal caseId={caseId} onClose={() => setShowRecordings(false)} />}

          {onClose && (
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition cursor-pointer"
              aria-label="Close Chat"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </header>

      {/* Incoming Call Overlay */}
      <AnimatePresence>
        {incomingCall && (
          <IncomingCallOverlay
            mode={incomingCall.mode}
            title={professionalName}
            onAccept={handleAcceptCall}
            onReject={handleRejectCall}
          />
        )}
      </AnimatePresence>

      {/* Message List */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50/60 to-white relative"
      >
        <div className="text-center my-2">
          <span className="bg-rose-50 text-[#c92c41] text-[10px] font-bold px-3 py-1 rounded-full border border-rose-100 shadow-2xs inline-flex items-center gap-1.5">
            <ShieldCheck size={12} />
            Lawizer Encrypted Litigation Channel
          </span>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center h-48">
            <Loader2 className="animate-spin text-[#c92c41]" size={28} />
          </div>
        ) : messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center p-6 space-y-2">
            <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-100 text-[#c92c41] flex items-center justify-center shadow-2xs">
              <MessageSquare size={22} />
            </div>
            <p className="text-xs font-bold text-gray-800">No messages yet</p>
            <p className="text-[11px] text-gray-500 max-w-xs">
              Send a message to start direct communication with {professionalName}.
            </p>
          </div>
        ) : (
          messages.map((msg) => {
            const isMine = msg.sender_id === currentUserId;
            const formattedTime = msg.created_at
              ? parseUtcDate(msg.created_at).toLocaleTimeString("en-IN", {
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "Asia/Kolkata",
                })
              : "";

            return (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: isMine ? 6 : -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                className={`flex flex-col ${isMine ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed relative group ${
                    isMine
                      ? "bg-[#c92c41] text-white rounded-tr-none shadow-md shadow-rose-900/10"
                      : "bg-white text-gray-900 rounded-tl-none border border-gray-200/80 shadow-2xs"
                  }`}
                >
                  {!isMine && (
                    <span className="text-[10px] font-bold text-[#c92c41] block mb-1">
                      {professionalName}
                    </span>
                  )}
                  {msg.message_type === "meeting_link" ? (
                    <div className="flex flex-col gap-2 mt-1 min-w-[150px]">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Video size={14} />
                        </div>
                        <div>
                          <p className="font-bold text-xs">Video Session</p>
                          <p className="text-[10px] opacity-80">Click to join</p>
                        </div>
                      </div>
                      <a
                        href={`/meet/${msg.text}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-center w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1.5 rounded-lg text-xs transition-colors"
                      >
                        Join Meeting
                      </a>
                    </div>
                  ) : (
                    <p className="whitespace-pre-wrap break-words">{msg.text}</p>
                  )}

                  <div
                    className={`flex items-center justify-end gap-1 mt-1 text-[9.5px] ${
                      isMine ? "text-rose-100" : "text-gray-400"
                    }`}
                  >
                    <span>{formattedTime}</span>
                    {isMine && msg.status === "sending" && (
                      <Clock size={10} className="animate-pulse" />
                    )}
                    {isMine && msg.status === "sent" && !msg.read_at && <Check size={12} />}
                    {isMine && msg.status === "sent" && msg.read_at && <CheckCheck size={12} />}
                    {isMine && msg.status === "error" && (
                      <AlertCircle size={10} className="text-amber-300" />
                    )}
                  </div>

                  {!isMine && (
                    <button
                      onClick={() => handleFlag(msg.id)}
                      disabled={msg.flagged_by?.includes(currentUserId)}
                      className="absolute -right-7 top-2 opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-400 hover:text-red-500 disabled:opacity-30 cursor-pointer"
                      title="Flag message"
                    >
                      <Flag size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })
        )}

        {otherParticipantsTyping && (
          <div className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-2xl px-3.5 py-2.5 w-max shadow-2xs">
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "0ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}
      </div>

      {/* Input Composer */}
      <form
        onSubmit={handleSend}
        className="bg-white p-3 border-t border-gray-200/80 flex items-center gap-2 shrink-0 z-20 sticky bottom-0 shadow-2xs"
      >
        <textarea
          ref={inputRef}
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setTimeout(scrollToBottom, 200)}
          placeholder={`Message ${professionalName}...`}
          disabled={isLoading}
          rows={1}
          className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-xs text-gray-800 outline-none focus:ring-2 focus:ring-[#c92c41]/20 focus:border-[#c92c41] focus:bg-white transition resize-none max-h-[140px]"
        />
        <button
          type="submit"
          disabled={!inputText.trim()}
          className="w-9 h-9 rounded-xl bg-[#c92c41] hover:bg-[#a8233a] disabled:bg-gray-200 disabled:text-gray-400 text-white flex items-center justify-center transition cursor-pointer shrink-0 shadow-xs active:scale-95"
          aria-label="Send Message"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
