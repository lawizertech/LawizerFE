"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { sortChatMessages, upsertChatMessages, type ChatMessage } from "@/lib/chat";

/**
 * Subscribes to all messages for the given `caseId` (passed here as
 * `bookingId` for backwards-compat) and keeps state up to date via
 * Supabase Realtime postgres_changes.
 *
 * Returns messages in ascending chronological order.
 */
export function useChatMessages(bookingId: string): ChatMessage[] {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const supabase = createClient();
  const channelRef = useRef<ReturnType<typeof supabase.channel> | null>(null);

  useEffect(() => {
    if (!bookingId) return;

    // Treat bookingId as caseId (the caller should ensure it's a valid case UUID)
    const caseId = bookingId;

    // Initial fetch
    supabase
      .from("chat_messages")
      .select("*")
      .eq("case_id", caseId)
      .is("deleted_at", null)
      .order("created_at", { ascending: true })
      .limit(50)
      .then(({ data, error }) => {
        if (error) {
          console.error("useChatMessages initial fetch error:", error);
          return;
        }
        if (data) {
          setMessages(sortChatMessages(data.map((m) => ({ ...m, status: "sent" as const }))));
        }
      });

    // Real-time subscription
    const channel = supabase
      .channel(`chat_hook_${caseId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "chat_messages",
          filter: `case_id=eq.${caseId}`,
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            const newMsg = payload.new as ChatMessage;
            setMessages((prev) => upsertChatMessages(prev, { ...newMsg, status: "sent" }));
          } else if (payload.eventType === "UPDATE") {
            setMessages((prev) => upsertChatMessages(prev, payload.new as ChatMessage));
          } else if (payload.eventType === "DELETE") {
            const deleted = payload.old as { id: string };
            setMessages((prev) => prev.filter((m) => m.id !== deleted.id));
          }
        }
      )
      .subscribe((status) => {
        if (status === "CHANNEL_ERROR") {
          console.error("useChatMessages channel error for case:", caseId);
        }
      });

    channelRef.current = channel;

    return () => {
      channelRef.current = null;
      supabase.removeChannel(channel);
    };
  }, [bookingId]);

  return messages;
}
