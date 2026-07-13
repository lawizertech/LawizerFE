"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  uid: string;
  email: string;
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

  // 🔥 CHECK LOCAL STORAGE FOR LOGIN
  const refreshUser = () => {
    const uid = localStorage.getItem("uid");
    const email = localStorage.getItem("email");

    if (uid && email) {
      setUser({ uid, email });
    } else {
      setUser(null);
    }

    setLoading(false);
  };

  // On first load
  useEffect(() => {
    const handleAuthRedirect = async () => {
      if (typeof window !== "undefined" && window.location.hash) {
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const accessToken = params.get("access_token");

        if (accessToken) {
          try {
            // Extract avatar URL from JWT payload
            try {
              const payloadBase64 = accessToken.split(".")[1];
              // Decode base64 safely (handles unicode)
              const payloadJson = JSON.parse(
                decodeURIComponent(
                  atob(payloadBase64)
                    .split("")
                    .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                    .join("")
                )
              );
              const avatarUrl = payloadJson.user_metadata?.avatar_url || payloadJson.user_metadata?.picture;
              if (avatarUrl) {
                localStorage.setItem("avatar_url", avatarUrl);
              }
            } catch (jwtErr) {
              console.error("Failed to parse JWT payload:", jwtErr);
            }

            // Import api client dynamically to avoid circular dependency
            const { loginUser } = await import("@/lib/apis/api");
            const res = await loginUser(accessToken);

            if (res.success) {
              localStorage.setItem("uid", res.data.uid || res.data.id);
              localStorage.setItem("email", res.data.email);
              localStorage.setItem("token", res.token);
              localStorage.setItem("role", res.data.role);
              localStorage.setItem("userProfile", JSON.stringify(res.data));

              // Clean up the URL hash
              window.history.replaceState(null, "", window.location.pathname);
            }
          } catch (error) {
            console.error("Failed to verify redirect auth token:", error);
          }
        }
      }
    };

    handleAuthRedirect().finally(() => {
      refreshUser();
    });
  }, []);

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
    localStorage.removeItem("avatar_url");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user || false,
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
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
