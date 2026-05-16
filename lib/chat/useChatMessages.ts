import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { rtdb } from "../firebaseClient";

export function useChatMessages(bookingId: string) {
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const messagesRef = ref(rtdb, `chatRooms/${bookingId}/messages`);

    const unsub = onValue(messagesRef, (snap) => {
      const data = snap.val();
      if (!data) return setMessages([]);

      const list = Object.entries(data).map(([id, msg]: any) => ({
        id,
        ...msg,
      }));

      setMessages(list.sort((a, b) => a.timestamp - b.timestamp));
    });

    return () => unsub();
  }, [bookingId]);

  return messages;
}
