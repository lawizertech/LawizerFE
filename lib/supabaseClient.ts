const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

interface SupabaseAuthResponse {
  success: boolean;
  message?: string;
  user?: {
    id: string;
    email: string;
  };
  session?: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  };
}

/**
 * Custom REST Client for Supabase Authentication
 * Avoids loading the full Supabase SDK, keeping client-side bundle size minimal.
 */

export async function supabaseSignUp(
  email: string,
  password: string,
  metadata?: Record<string, any>
): Promise<SupabaseAuthResponse> {
  try {
    const payload: Record<string, any> = { email, password };
    payload.options = { data: metadata || {} };

    if (typeof window !== "undefined") {
      payload.options.emailRedirectTo = window.location.origin;
    }

    const res = await fetch(`${SUPABASE_URL}/auth/v1/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.msg || data.error_description || data.message || "Failed to sign up",
      };
    }

    return {
      success: true,
      user: {
        id: data.id,
        email: data.email || email,
      },
      session: data.session ? {
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token,
        expires_in: data.session.expires_in,
      } : undefined,
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Network error during signup" };
  }
}

export async function supabaseSignIn(email: string, password: string): Promise<SupabaseAuthResponse> {
  try {
    const res = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.error_description || data.msg || data.message || "Invalid email or password",
      };
    }

    return {
      success: true,
      user: {
        id: data.user.id,
        email: data.user.email,
      },
      session: {
        access_token: data.access_token,
        refresh_token: data.refresh_token,
        expires_in: data.expires_in,
      },
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Network error during signin" };
  }
}

export async function supabaseResetPassword(email: string): Promise<{ success: boolean; message?: string }> {
  try {
    const payload: Record<string, any> = { email };

    if (typeof window !== "undefined") {
      payload.options = {
        redirectTo: window.location.origin,
      };
    }

    const res = await fetch(`${SUPABASE_URL}/auth/v1/recover`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": SUPABASE_ANON_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.msg || data.error_description || data.message || "Failed to send reset email",
      };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, message: error.message || "Network error during password recovery" };
  }
}

export function supabaseGoogleSignIn() {
  if (typeof window !== "undefined") {
    const redirectUrl = window.location.origin;
    window.location.href = `${SUPABASE_URL}/auth/v1/authorize?provider=google&redirect_to=${redirectUrl}`;
  }
}
