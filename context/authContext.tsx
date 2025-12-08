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
  const [isCompleteProfileModalOpen, setIsCompleteProfileModalOpen] =
    useState(false);

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
    refreshUser();
  }, []);

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("uid");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    localStorage.removeItem("userProfile");
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
