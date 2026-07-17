// TODO: implement with Supabase Realtime
import { useState } from "react";

export function setTyping(_bookingId: string, _role: "expert" | "client", _value: boolean): void {
  // implement
}

export function useTypingStatus(_bookingId: string, _role: "expert" | "client"): boolean {
  const [typing] = useState(false);
  return typing;
}
