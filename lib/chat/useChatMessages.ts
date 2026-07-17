// TODO: implement with Supabase Realtime
import { useState } from "react";

export function useChatMessages(bookingId: string): any[] {
  const [messages] = useState<any[]>([]);
  return messages;
}
