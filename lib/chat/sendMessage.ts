import { createClient } from "@/lib/supabase/client";
import type { SenderRole } from "@/lib/chat";

const supabase = createClient();

/**
 * Inserts a new message into the `chat_messages` table.
 * Supabase Realtime (postgres_changes) broadcasts the INSERT to all
 * subscribers of the `chat_<caseId>` channel automatically.
 *
 * Note: the `bookingId` param here is used as `case_id` — callers that still
 * pass a booking ID should resolve the case ID before calling this function,
 * or use ChatEngine directly (which handles it end-to-end).
 */
export async function sendMessage(opts: {
  bookingId: string;          // treated as case_id
  text: string;
  senderId: string;
  senderRole: "expert" | "client";
}): Promise<void> {
  const { bookingId: caseId, text, senderId, senderRole } = opts;

  const role: SenderRole = senderRole === "expert" ? "professional" : "client";

  const { error } = await supabase.from("chat_messages").insert({
    id: crypto.randomUUID(),
    case_id: caseId,
    sender_id: senderId,
    text: text.trim(),
    sender_role: role,
    message_type: "text",
  });

  if (error) {
    console.error("sendMessage error:", error);
    throw error;
  }
}
