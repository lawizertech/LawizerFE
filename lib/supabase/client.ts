import { createClient as createSupabaseClient, SupabaseClient } from "@supabase/supabase-js";
import { getAccessToken } from "@/lib/auth/tokenStore";

/**
 * Singleton Supabase browser client configured with dynamic bearer token injection.
 */

let _client: SupabaseClient | null = null;

export function createClient(): SupabaseClient {
  if (_client) {
    const token = getAccessToken();
    if (token) {
      // Keep Realtime WebSocket token in sync
      _client.realtime.setAuth(token);
    }
    return _client;
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables."
    );
  }

  _client = createSupabaseClient(supabaseUrl, supabaseAnonKey, {
    global: {
      fetch: (url, options = {}) => {
        const token = getAccessToken();
        const headers = new Headers(options.headers || {});
        if (token) {
          headers.set("Authorization", `Bearer ${token}`);
        }
        return fetch(url, { ...options, headers });
      },
    },
    realtime: {
      params: {
        eventsPerSecond: 10,
      },
    },
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  const initialToken = getAccessToken();
  if (initialToken) {
    _client.realtime.setAuth(initialToken);
  }

  return _client;
}

/**
 * FOR TESTING ONLY — resets the singleton so tests can inject a fresh client.
 */
export function _resetClientForTesting(): void {
  _client = null;
}
