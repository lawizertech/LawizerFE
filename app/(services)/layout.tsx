"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, PhoneCall, X } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { useCallback } from "@/context/callbackContext";
import { usePathname } from "next/navigation";

const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button {...props}>{children}</button>
);

interface LayoutProps {
  children: React.ReactNode;
}

// Map route segments to service names
const serviceNameMap: Record<string, string> = {
  banking: "Banking & Finance",
  family: "Family Law",
  property: "Property Legal",
  itr: "Income Tax & GST",
  challan: "Challan Issues",
  "startup-businesslegal": "Startup & Business Legal",
  "civil-commercial": "Civil & Commercial",
  documentation: "Documentation Services",
};

export default function Layout({ children }: LayoutProps) {
  const [showBar, setShowBar] = useState(false);
  const { openCallback } = useCallback();
  const pathname = usePathname();

  // Extract service name from pathname
  const getServiceName = () => {
    const segments = pathname.split("/").filter(Boolean);
    const serviceKey = segments[1]; // Get the service segment (second part after /)
    return serviceNameMap[serviceKey] || "Legal Service";
  };

  // Show bar only after user scrolls past 200% of viewport height
  useEffect(() => {
    const handleScroll = () => {
      setShowBar(window.scrollY > window.innerHeight * 2);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRequestCallback = () => {
    openCallback(getServiceName());
  };

  return (
    <div className="min-h-screen relative">
      <main>{children}</main>

      {/* Fixed Bottom Bar */}
      <AnimatePresence>
        {showBar && (
          <motion.div
            key="bottom-bar"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed bottom-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none flex justify-center"
          >
            <div className="w-full max-w-xl flex items-center justify-between gap-3 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.12)] p-2 pl-5 sm:pr-4 sm:pl-8 sm:py-3 pointer-events-auto">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate leading-tight">Request a Callback</h3>
                <p className="hidden sm:block text-xs md:text-sm text-gray-500 truncate mt-0.5">
                  Get expert advice from our verified professionals.
                </p>
              </div>

              <Button
                onClick={handleRequestCallback}
                className="shrink-0 px-5 py-2 sm:px-5 sm:py-2.5 rounded-full text-[13px] sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 bg-brand-red hover:brightness-110 text-white"
              >
                <PhoneCall className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                <span className="shrink-0">Request</span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
