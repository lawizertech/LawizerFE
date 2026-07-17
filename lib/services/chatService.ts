import { db } from "@/lib/firebaseClient";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  limit,
} from "firebase/firestore";
import { ChatMessage } from "@/lib/types/serviceWorkspace";

export interface ChatSubscription {
  unsubscribe: () => void;
}

export interface ChatService {
  subscribeToMessages(
    serviceId: string,
    onUpdate: (messages: ChatMessage[]) => void,
    onError: (error: any) => void
  ): ChatSubscription;

  sendMessage(serviceId: string, userId: string, text: string): Promise<void>;
}

class FirebaseChatService implements ChatService {
  subscribeToMessages(
    serviceId: string,
    onUpdate: (messages: ChatMessage[]) => void,
    onError: (error: any) => void
  ): ChatSubscription {
    const q = query(
      collection(db, "serviceChats", serviceId, "messages"),
      orderBy("createdAt", "asc"),
      limit(200)
    );

    const unsubscribe = onSnapshot(
      q,
      (snap) => {
        const msgs = snap.docs.map((doc) => {
          const data = doc.data() as any;
          const userMsg = data.senderRole === "USER";

          let timeStr = "Just now";
          if (data.createdAtMs) {
            timeStr = new Date(data.createdAtMs).toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
            });
          }

          return {
            sender: userMsg ? ("user" as const) : ("expert" as const),
            text: data.text || "",
            time: timeStr,
          };
        });
        onUpdate(msgs);
      },
      (error) => {
        console.error("Firebase chat subscription error:", error);
        onError(error);
      }
    );

    return { unsubscribe };
  }

  async sendMessage(serviceId: string, userId: string, text: string): Promise<void> {
    await addDoc(collection(db, "serviceChats", serviceId, "messages"), {
      senderId: userId,
      senderRole: "USER",
      text,
      createdAt: serverTimestamp(),
      createdAtMs: Date.now(),
      read: false,
    });
  }
}

// Global instance that can be swapped later (e.g. export const chatService = new SupabaseChatService())
export const chatService: ChatService = new FirebaseChatService();
