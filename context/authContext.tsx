"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  uid: string;
  email: string;
  name?: string;
  role?: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: UserData | null;
  loading: boolean;
  isLoggedIn: boolean;
  refreshUser: () => void;
  logout: () => void;
  isSignupModalOpen: boolean;
  setIsSignupModalOpen: (open: boolean) => void;
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: (open: boolean) => void;
  isCompleteProfileModalOpen: boolean;
  setIsCompleteProfileModalOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
  refreshUser: () => {},
  logout: () => {},
  isSignupModalOpen: false,
  setIsSignupModalOpen: () => {},
  isSignInModalOpen: false,
  setIsSignInModalOpen: () => {},
  isCompleteProfileModalOpen: false,
  setIsCompleteProfileModalOpen: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isCompleteProfileModalOpen, setIsCompleteProfileModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);


  // 🔥 CHECK LOCAL STORAGE FOR LOGIN
  const refreshUser = () => {
    const uid = localStorage.getItem("uid");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    const avatarUrl = localStorage.getItem("avatar_url");

    if (uid && email) {
      setUser({
        uid,
        email,
        name: name || undefined,
        role: role || "USER",
        avatarUrl: avatarUrl || undefined,
      });
    } else {
      setUser(null);
    }

    setLoading(false);
  };

  // On first load — handle Supabase hash redirects (Google OAuth and email magic links)
  useEffect(() => {
    const handleAuthRedirect = async (): Promise<boolean> => {
      if (typeof window === "undefined" || !window.location.hash) return false;

      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const accessToken = params.get("access_token");
      const tokenType = params.get("type"); // "recovery" | "signup" | "magiclink" | null

      if (!accessToken) return false;

      // ── Password recovery link ──────────────────────────────────────────────
      // type=recovery means the user clicked "Forgot password" in their email.
      // We must NOT log them in — instead forward them to the reset-password page
      // with the token intact so they can set a new password there.
      if (tokenType === "recovery") {
        // Keep the hash on the URL so /auth/reset-password can read the token.
        if (window.location.pathname !== "/auth/reset-password") {
          window.location.href = `/auth/reset-password${window.location.hash}`;
        }
        return true;
      }

      // ── Google OAuth / magic-link sign-in ───────────────────────────────────
      setIsRedirecting(true);

      // Always remove the token from the URL bar immediately so it doesn't get stuck
      window.history.replaceState(null, "", window.location.pathname);

      try {
        // Decode JWT payload to extract metadata
        let providers: string[] = [];
        let parsedPayload: any = null;
        try {
          const payloadBase64 = accessToken.split(".")[1];
          parsedPayload = JSON.parse(
            decodeURIComponent(
              atob(payloadBase64)
                .split("")
                .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                .join("")
            )
          );
          const avatarUrl = parsedPayload?.user_metadata?.avatar_url || parsedPayload?.user_metadata?.picture;
          if (avatarUrl) localStorage.setItem("avatar_url", avatarUrl);
          providers = parsedPayload?.app_metadata?.providers || [];
        } catch (jwtErr) {
          console.error("Failed to parse JWT payload:", jwtErr);
        }

        // Dynamic import avoids a circular dependency with api.ts
        const { loginUser, signupUser } = await import("@/lib/apis/api");
        let res = await loginUser(accessToken);

        // Auto-signup fallback for first-time Google OAuth users
        if (!res.success && providers.includes("google") && parsedPayload) {
          const uid = parsedPayload.sub;
          const email = parsedPayload.email || "";
          const name = parsedPayload.user_metadata?.full_name || parsedPayload.user_metadata?.name || "";
          
          if (uid) {
            const signupRes = await signupUser(accessToken, uid, name, email, "");
            if (signupRes.success) {
              // Retry login after successful registration
              res = await loginUser(accessToken);
            }
          }
        }

        if (res.success) {
          localStorage.setItem("uid", res.data.uid || res.data.id);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.token);
          localStorage.setItem("role", res.data.role);
          localStorage.setItem("userProfile", JSON.stringify(res.data));

          const isSocialOnly = providers.length > 0 && !providers.includes("email") && !res.data.hasPassword;
          localStorage.setItem("is_social_only", isSocialOnly ? "true" : "false");

          const needsPassword = isSocialOnly;
          if (!res.data.isProfileComplete || needsPassword) {
            setIsCompleteProfileModalOpen(true);
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

    handleAuthRedirect()
      .then(() => refreshUser())
      .finally(() => setIsRedirecting(false));
  }, []);

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("avatar_url");
    localStorage.removeItem("role");
    localStorage.removeItem("is_social_only");
    setUser(null);
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user,
        refreshUser,
        logout,
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
            <div className="w-12 h-12 border-4 border-[#c92c41] border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg animate-pulse">Signing you in…</p>
          </div>
        </div>
      )}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
