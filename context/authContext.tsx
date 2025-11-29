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
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isSignInModalOpen: boolean;
  setIsSignInModalOpen: (open: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
  refreshUser: () => {},
  logout: () => {},
  isAuthModalOpen: false,
  setIsAuthModalOpen: () => {},
  isSignInModalOpen: false,
  setIsSignInModalOpen: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

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
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn: !!user,
        refreshUser,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isSignInModalOpen,
        setIsSignInModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
