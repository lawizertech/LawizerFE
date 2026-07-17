const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

class SupabaseRealtimeManager {
  private ws: WebSocket | null = null;
  private refCounter = 0;
  private heartbeatInterval: any = null;
  private subscriptions = new Map<string, Set<(event: string, payload: any) => void>>();
  private joinedTopics = new Set<string>();
  private connectionPromise: Promise<WebSocket> | null = null;

  private getRef() {
    return (++this.refCounter).toString();
  }

  private connect(): Promise<WebSocket> {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      return Promise.resolve(this.ws);
    }
    if (this.connectionPromise) {
      return this.connectionPromise;
    }

    this.connectionPromise = new Promise((resolve, reject) => {
      try {
        if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
          console.warn("Supabase credentials missing. Realtime features disabled.");
          return;
        }
        const wsUrl = `${SUPABASE_URL.replace("https://", "wss://")}/realtime/v1/websocket?apikey=${SUPABASE_ANON_KEY}&vsn=1.0.0`;
        const socket = new WebSocket(wsUrl);

        socket.onopen = () => {
          this.ws = socket;
          this.connectionPromise = null;
          this.startHeartbeat();
          // Re-join any previously registered topics
          for (const topic of this.subscriptions.keys()) {
            void this.joinTopic(topic);
          }
          resolve(socket);
        };

        socket.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            const topic = data.topic;
            // Parse Phoenix broadcast frames
            if (data.event === "broadcast" && data.payload) {
              const innerEvent = data.payload.event;
              const innerPayload = data.payload.payload;
              const listeners = this.subscriptions.get(topic);
              if (listeners) {
                listeners.forEach((cb) => cb(innerEvent, innerPayload));
              }
            }
          } catch (err) {
            console.error("Error parsing socket message:", err);
          }
        };

        socket.onclose = () => {
          this.cleanup();
          // Auto-reconnect after 3 seconds
          setTimeout(() => this.connect(), 3000);
        };

        socket.onerror = (err) => {
          console.error("Supabase Realtime socket error:", err);
          socket.close();
        };
      } catch (err) {
        this.connectionPromise = null;
        reject(err);
      }
    });

    return this.connectionPromise;
  }

  private startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(
          JSON.stringify({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.getRef(),
          })
        );
      }
    }, 30000);
  }

  private stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private async joinTopic(topic: string) {
    try {
      const socket = await this.connect();
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            topic,
            event: "phx_join",
            payload: {},
            ref: this.getRef(),
          })
        );
        this.joinedTopics.add(topic);
      }
    } catch (err) {
      console.error(`Failed to join topic ${topic}:`, err);
    }
  }

  private cleanup() {
    this.ws = null;
    this.connectionPromise = null;
    this.joinedTopics.clear();
    this.stopHeartbeat();
  }

  public async subscribe(channel: string, callback: (event: string, payload: any) => void) {
    const topic = `realtime:${channel}`;
    let listeners = this.subscriptions.get(topic);
    if (!listeners) {
      listeners = new Set();
      this.subscriptions.set(topic, listeners);
    }
    listeners.add(callback);

    await this.joinTopic(topic);

    return {
      unsubscribe: () => {
        listeners?.delete(callback);
        if (listeners?.size === 0) {
          this.subscriptions.delete(topic);
          if (this.ws && this.ws.readyState === WebSocket.OPEN && this.joinedTopics.has(topic)) {
            this.ws.send(
              JSON.stringify({
                topic,
                event: "phx_leave",
                payload: {},
                ref: this.getRef(),
              })
            );
            this.joinedTopics.delete(topic);
          }
        }
      },
    };
  }

  public async broadcast(channel: string, event: string, payload: any) {
    try {
      const topic = `realtime:${channel}`;
      const socket = await this.connect();
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(
          JSON.stringify({
            topic,
            event: "broadcast",
            payload: {
              type: "broadcast",
              event,
              payload,
            },
            ref: this.getRef(),
          })
        );
      }
    } catch (err) {
      console.error(`Failed to broadcast to ${channel}:`, err);
    }
  }
}

export const supabaseRealtime = new SupabaseRealtimeManager();
