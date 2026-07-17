import { supabaseRealtime } from "@/lib/supabaseRealtime";
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

class SupabaseChatService implements ChatService {
  private localMessages = new Map<string, ChatMessage[]>();

  subscribeToMessages(
    serviceId: string,
    onUpdate: (messages: ChatMessage[]) => void,
    onError: (error: any) => void
  ): ChatSubscription {
    const channel = `chat:${serviceId}`;

    if (!this.localMessages.has(serviceId)) {
      this.localMessages.set(serviceId, []);
    }

    onUpdate(this.localMessages.get(serviceId)!);

    let unsub: (() => void) | null = null;

    const setup = async () => {
      try {
        const sub = await supabaseRealtime.subscribe(channel, (event, payload) => {
          if (event === "new_message") {
            const list = this.localMessages.get(serviceId) || [];
            const msg: ChatMessage = {
              sender: payload.senderId === "USER" || payload.senderRole === "USER" ? "user" : "expert",
              text: payload.text || "",
              time: new Date(payload.createdAtMs || Date.now()).toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              }),
            };
            if (!list.some(m => m.text === msg.text && m.sender === msg.sender)) {
              list.push(msg);
              this.localMessages.set(serviceId, list);
              onUpdate([...list]);
            }
          }
        });
        unsub = sub.unsubscribe;
      } catch (err) {
        onError(err);
      }
    };

    void setup();

    return {
      unsubscribe: () => {
        unsub?.();
      },
    };
  }

  async sendMessage(serviceId: string, userId: string, text: string): Promise<void> {
    const channel = `chat:${serviceId}`;
    const payload = {
      senderId: "USER",
      senderRole: "USER",
      text,
      createdAtMs: Date.now(),
    };

    const list = this.localMessages.get(serviceId) || [];
    const localMsg: ChatMessage = {
      sender: "user",
      text,
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    list.push(localMsg);
    this.localMessages.set(serviceId, list);

    await supabaseRealtime.broadcast(channel, "new_message", payload);
  }
}

export const chatService: ChatService = new SupabaseChatService();
