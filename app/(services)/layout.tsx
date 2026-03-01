"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, PhoneCall, X } from "lucide-react";
import { useAuth } from "@/context/authContext";

const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props}>{children}</button>
);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showBar, setShowBar] = useState(false);
  const { isLoggedIn, setIsSignInModalOpen } = useAuth();

  // Only show the bottom bar after user scrolls past 80% of the viewport height
  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = async () => {
    if (!isLoggedIn) {
      setIsSignInModalOpen(true);
      return;
    }

    if (loading || success) return;

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setIsSignInModalOpen(true);
        return;
      }

      const response = await fetch("/api/user/request-call", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.success && response.ok) {
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError(data.message || "Failed to request call");
        setTimeout(() => setError(null), 3000);
      }
    } catch (err) {
      console.error("Error requesting call:", err);
      setError("Network error. Please try again.");
      setTimeout(() => setError(null), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <main>{children}</main>

      {/* Error Toast */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 bg-red-50 border border-red-200 rounded-lg px-4 py-3 shadow-lg max-w-md"
        >
          <div className="flex items-start gap-3">
            <div className="bg-red-100 rounded-full p-1">
              <X className="h-4 w-4 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">{error}</p>
            </div>
            <button
              onClick={() => setError(null)}
              className="text-red-400 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}

      {/* Fixed Bottom Bar — only visible after scrolling past the hero */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            key="bottom-bar"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4"
          >
            <div className="w-full max-w-4xl flex justify-between items-center bg-white border border-gray-200 rounded-xl shadow-lg px-4 py-3 md:px-6 md:py-4 mx-auto">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
                  Free Consultation
                </h3>
                <p className="text-xs md:text-sm text-gray-500 truncate">
                  Get expert advice from our verified professionals.
                </p>
              </div>

              <Button
                onClick={handleClick}
                disabled={loading || success}
                className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300 disabled:cursor-not-allowed ${
                  success
                    ? "bg-[#21ae17]"
                    : loading
                      ? "bg-blue-400"
                      : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {success ? (
                  <motion.div
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.05 }}
                      className="bg-white rounded-full p-1"
                    >
                      <Check className="h-4 w-4 text-green-600" />
                    </motion.div>
                    <span className="text-white font-medium">Requested</span>
                  </motion.div>
                ) : loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                    Requesting...
                  </>
                ) : (
                  <>
                    <PhoneCall className="h-4 w-4" />
                    Request a Call
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}