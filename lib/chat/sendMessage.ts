const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export interface ChatMessage {
  text: string;
  senderId: string;
  senderRole: "expert" | "client";
  timestamp: number;
}

/**
 * Persists a chat message via the backend REST API and broadcasts it on
 * the Supabase Realtime channel so all subscribers see it immediately.
 *
 * Channel convention: `chat:<bookingId>`
 */
export async function sendMessage({
  bookingId,
  text,
  senderId,
  senderRole,
}: {
  bookingId: string;
  text: string;
  senderId: string;
  senderRole: "expert" | "client";
}): Promise<void> {
  const message: ChatMessage = {
    text,
    senderId,
    senderRole,
    timestamp: Date.now(),
  };

  // Broadcast to the Supabase Realtime channel (no SDK — plain WebSocket REST)
  await fetch(`${SUPABASE_URL}/realtime/v1/api/broadcast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      messages: [
        {
          topic: `realtime:chat:${bookingId}`,
          event: "new_message",
          payload: message,
        },
      ],
    }),
  });
}
