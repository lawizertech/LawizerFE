"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { setAccessToken, clearAccessToken } from "@/lib/auth/tokenStore";
import { publicApi } from "@/lib/auth/publicApi";
import axios from "axios";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface UserData {
  uid: string;
  email: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
  isProfileComplete?: boolean;
  hasPassword?: boolean;
}

interface AuthContextType {
  /** Hydrated user object — null when logged out or still loading. */
  user: UserData | null;
  /** True while the initial /api/auth/refresh call is in flight. */
  loading: boolean;
  isLoggedIn: boolean;
  /**
   * Call after a successful login to store the token in memory and set the
   * user in context.  Components should call this instead of writing to
   * localStorage directly.
   */
  login: (accessToken: string, userData: UserData) => void;
  logout: () => Promise<void>;
  /** Re-fetches user profile from the backend. */
  refreshUser: () => Promise<void>;
  // ── Modal controls ────────────────────────────────────────────────────────
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: (open: boolean) => void;
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: (open: boolean) => void;
  isCompleteProfileModalOpen: boolean;
  setIsCompleteProfileModalOpen: (open: boolean) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
  login: () => {},
  logout: async () => {},
  refreshUser: async () => {},
  isSignupModalOpen: false,
  setIsSignupModalOpen: () => {},
  isSignInModalOpen: false,
  setIsSignInModalOpen: () => {},
  isCompleteProfileModalOpen: false,
  setIsCompleteProfileModalOpen: () => {},
});

// ─── Provider ─────────────────────────────────────────────────────────────────

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Modal visibility state
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isCompleteProfileModalOpen, setIsCompleteProfileModalOpen] = useState(false);

  // ── login() — called from signin/signup/oauth handlers ─────────────────────
  const login = (accessToken: string, userData: UserData) => {
    setAccessToken(accessToken);
    // Normalize role to uppercase so ProtectedRoute comparisons are consistent.
    const normalizedUser: UserData = {
      ...userData,
      role: (userData.role ?? "CLIENT").toUpperCase(),
    };
    setUser(normalizedUser);
    
    // Store display-only hints in localStorage (non-sensitive data only)
    // These are used by the header to show user name/avatar before session restore
    if (typeof window !== "undefined") {
      localStorage.setItem("displayName", normalizedUser.name ?? "");
      localStorage.setItem("avatarUrl", normalizedUser.avatarUrl ?? "");
      localStorage.setItem("userRole", normalizedUser.role ?? "CLIENT");
    }
  };

  // ── logout() — clears memory and HttpOnly cookie ────────────────────────────
  const logout = async () => {
    clearAccessToken();

    // Remove display-only localStorage hints.
    if (typeof window !== "undefined") {
      localStorage.removeItem("displayName");
      localStorage.removeItem("avatarUrl");
      localStorage.removeItem("userRole");
    }

    // Tell the server to invalidate the refresh token and clear the cookie.
    // MUST AWAIT so browser receives Set-Cookie: refreshToken=; MaxAge=0 before navigation!
    try {
      await axios.post("/api/auth/logout", {}, { withCredentials: true, timeout: 3000 });
    } catch {
      // Best-effort. Cookie clearance response handled above.
    }

    setUser(null);

    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  // ── refreshUser() — re-fetch profile using the current access token ─────────
  const refreshUser = async () => {
    const { getAccessToken } = await import("@/lib/auth/tokenStore");
    const token = getAccessToken();
    if (!token) return;

    try {
      const res = await axios.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      if (res.data?.success && res.data?.data) {
        const u = res.data.data;
        setUser({
          uid: u.uid ?? u.id,
          email: u.email,
          name: u.name,
          role: (u.role ?? "CLIENT").toUpperCase(),
          avatarUrl: u.photo_url ?? u.avatarUrl,
          isProfileComplete: u.isProfileComplete,
          hasPassword: u.has_password ?? u.hasPassword,
        });
      }
    } catch {
      // Session endpoint unavailable — keep existing user state.
    }
  };

  // ── silentRefresh() — called on mount to restore session after page reload ──
  const silentRefresh = async (): Promise<boolean> => {
    try {
      const res = await axios.post("/api/auth/refresh", {}, { withCredentials: true, timeout: 3000 });
      if (res.data?.accessToken) {
        setAccessToken(res.data.accessToken);
        return true;
      }
      return false;
    } catch {
      // No refresh cookie or backend unavailable — user is not logged in.
      return false;
    }
  };

  // ── fetchUserAfterRefresh() — get user data after obtaining a new token ─────
  const fetchUserAfterRefresh = async () => {
    const { getAccessToken } = await import("@/lib/auth/tokenStore");
    const token = getAccessToken();
    if (!token) return;

    // Retry once with a short delay in case the backend is momentarily slow.
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await axios.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
          timeout: 3000,
        });
        if (res.data?.success && res.data?.data) {
          const u = res.data.data;
          setUser({
            uid: u.uid ?? u.id,
            email: u.email,
            name: u.name,
            role: (u.role ?? "CLIENT").toUpperCase(),
            avatarUrl: u.photo_url ?? u.avatarUrl,
            isProfileComplete: u.isProfileComplete,
            hasPassword: u.has_password ?? u.hasPassword,
          });
          return; // success — stop retrying
        }
      } catch {
        if (attempt === 0) {
          // Brief pause before retry
          await new Promise((r) => setTimeout(r, 500));
        }
        // Second attempt also failed — user stays null (logged out).
      }
    }
  };

  // ── Google OAuth / magic-link hash handler ──────────────────────────────────
  const handleAuthRedirect = async (): Promise<boolean> => {
    if (typeof window === "undefined" || !window.location.hash) return false;

    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const supabaseAccessToken = params.get("access_token");
    const supabaseRefreshToken = params.get("refresh_token") ?? undefined;
    const tokenType = params.get("type");

    if (!supabaseAccessToken) return false;

    // Password-recovery link — do NOT log in, redirect to reset page instead.
    if (tokenType === "recovery") {
      if (window.location.pathname !== "/auth/reset-password") {
        window.location.href = `/auth/reset-password${window.location.hash}`;
      }
      return true;
    }

    // Google OAuth / magic-link sign-in
    setIsRedirecting(true);
    window.history.replaceState(null, "", window.location.pathname);

    try {
      // Decode JWT payload to extract metadata (safe — no secrets here).
      let providers: string[] = [];
      let parsedPayload: Record<string, any> | null = null;
      try {
        const payloadBase64 = supabaseAccessToken.split(".")[1];
        parsedPayload = JSON.parse(
          decodeURIComponent(
            atob(payloadBase64)
              .split("")
              .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
              .join("")
          )
        );
        const avatarUrl =
          parsedPayload?.user_metadata?.avatar_url ||
          parsedPayload?.user_metadata?.picture;
        if (avatarUrl) {
          localStorage.setItem("avatarUrl", avatarUrl);
        }
        providers = parsedPayload?.app_metadata?.providers ?? [];
      } catch (jwtErr) {
        console.error("Failed to parse JWT payload:", jwtErr);
      }

      const isExpertOAuth = typeof window !== "undefined" && localStorage.getItem("pending_expert_oauth") === "true";
      if (typeof window !== "undefined") {
        localStorage.removeItem("pending_expert_oauth");
      }

      // Dynamic import avoids circular dependency with api.ts.
      const { loginUser, signupUser } = await import("@/lib/apis/api");
      const requestedRole = isExpertOAuth ? "professional" : undefined;
      let res = await loginUser(supabaseAccessToken, supabaseRefreshToken, requestedRole);

      // Auto-signup fallback for first-time Google OAuth users.
      if (!res.success && providers.includes("google") && parsedPayload) {
        const uid = parsedPayload.sub;
        const email = parsedPayload.email ?? "";
        const name =
          parsedPayload.user_metadata?.full_name ||
          parsedPayload.user_metadata?.name ||
          "";
        if (uid) {
          const signupRes = await signupUser(supabaseAccessToken, uid, name, email, "");
          if (signupRes.success) {
            res = await loginUser(supabaseAccessToken, supabaseRefreshToken, requestedRole);
          }
        }
      }

      if (res.success) {
        const userRole = (res.data.role ?? "CLIENT").toUpperCase();

        // Store token in memory with permanent immutable account role from database
        login(res.token, {
          uid: res.data.uid ?? res.data.id,
          email: res.data.email,
          name: res.data.name,
          role: userRole,
          avatarUrl: res.data.photo_url ?? res.data.avatarUrl,
          isProfileComplete: res.data.isProfileComplete,
          hasPassword: res.data.hasPassword,
        });

        const isSocialOnly =
          providers.length > 0 &&
          !providers.includes("email") &&
          !res.data.hasPassword;

        if (!res.data.isProfileComplete || isSocialOnly) {
          setIsCompleteProfileModalOpen(true);
        } else {
          // Automatic dashboard navigation based on PERMANENT account role
          if (typeof window !== "undefined") {
            if (userRole === "EXPERT" || userRole === "PROFESSIONAL" || userRole === "LAWYER") {
              window.location.replace("/expert/dashboard");
            } else {
              window.location.replace("/user/dashboard");
            }
          }
        }

        return true;
      } else {
        console.error("Backend auth failed:", res);
      }
    } catch (error) {
      console.error("Failed to verify redirect auth token:", error);
    }

    return false;
  };

  // ── Initialisation effect ───────────────────────────────────────────────────
  useEffect(() => {
    const init = async () => {
      try {
        // 1. Handle Supabase OAuth / magic-link hash in the URL.
        const redirected = await handleAuthRedirect();

        if (!redirected) {
          // 2. Try to restore session silently from the HttpOnly refresh cookie.
          const refreshed = await silentRefresh();
          if (refreshed) {
            await fetchUserAfterRefresh();
          }
        }
      } finally {
        setLoading(false);
        setIsRedirecting(false);
      }
    };

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── openSignInModal custom event listener ────────────────────────────────────
  // ServicePageLayout and other non-context components can trigger the sign-in
  // modal by dispatching: window.dispatchEvent(new CustomEvent("openSignInModal"))
  useEffect(() => {
    const handleOpenSignIn = () => setIsSignInModalOpen(true);
    window.addEventListener("openSignInModal", handleOpenSignIn);
    return () => window.removeEventListener("openSignInModal", handleOpenSignIn);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user,
        login,
        logout,
        refreshUser,
        isSignupModalOpen,
        setIsSignupModalOpen,
        isSignInModalOpen,
        setIsSignInModalOpen,
        isCompleteProfileModalOpen,
        setIsCompleteProfileModalOpen,
      }}
    >
      {isRedirecting && (
        <div className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-[9999] transition-all duration-300">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#c92c41] border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg animate-pulse">
              Signing you in…
            </p>
          </div>
        </div>
      )}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
