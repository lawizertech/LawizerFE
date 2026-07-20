"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient();

// Shared channel registry: one channel per caseId, ref-counted.
const channelRegistry = new Map<string, { channel: ReturnType<typeof supabase.channel>; refs: number }>();

function getOrCreateChannel(caseId: string) {
  if (!channelRegistry.has(caseId)) {
    const ch = supabase.channel(`chat_typing_${caseId}`);
    ch.subscribe();
    channelRegistry.set(caseId, { channel: ch, refs: 0 });
  }
  const entry = channelRegistry.get(caseId)!;
  entry.refs += 1;
  return entry.channel;
}

function releaseChannel(caseId: string) {
  const entry = channelRegistry.get(caseId);
  if (!entry) return;
  entry.refs -= 1;
  if (entry.refs <= 0) {
    supabase.removeChannel(entry.channel);
    channelRegistry.delete(caseId);
  }
}

/**
 * Broadcasts a typing event on the `chat_typing_<caseId>` channel.
 * `bookingId` is treated as `caseId` for backwards compat.
 */
export function setTyping(
  bookingId: string,
  role: "expert" | "client",
  value: boolean
): void {
  const caseId = bookingId;
  const entry = channelRegistry.get(caseId);
  if (!entry) return;
  void entry.channel.send({
    type: "broadcast",
    event: "typing",
    payload: { role, isTyping: value },
  });
}

/**
 * Returns true when the *other* participant (opposite of `role`) is typing.
 * Subscribes to the `chat_typing_<caseId>` broadcast channel.
 */
export function useTypingStatus(
  bookingId: string,
  role: "expert" | "client"
): boolean {
  const [isTyping, setIsTyping] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!bookingId) return;

    const caseId = bookingId;
    const otherRole = role === "expert" ? "client" : "expert";
    const channel = getOrCreateChannel(caseId);

    const handleEvent = (_event: string, payload: { role: string; isTyping: boolean }) => {
      if (payload.role !== otherRole) return;
      setIsTyping(payload.isTyping);

      // Auto-clear typing indicator after 3 s if no update received
      if (timerRef.current) clearTimeout(timerRef.current);
      if (payload.isTyping) {
        timerRef.current = setTimeout(() => setIsTyping(false), 3000);
      }
    };

    // Subscribe to broadcast events on the channel
    channel.on("broadcast", { event: "typing" }, ({ payload }: { payload: { role: string; isTyping: boolean } }) =>
      handleEvent("typing", payload)
    );

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      releaseChannel(caseId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookingId, role]);

  return isTyping;
}
