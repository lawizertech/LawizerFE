"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, PhoneCall, X } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { useCallback } from "@/context/callbackContext";
import { usePathname } from "next/navigation";

const Button = ({
 children,
 ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
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
 className="fixed bottom-2 left-1/2 -translate-x-1/2 z-10 w-full px-3 "
 >
 <div className="w-fit max-w-xl flex items-center gap-4 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full shadow-lg pr-4 pl-8 py-3 mx-auto">
 <div className="flex-1 min-w-0 pr-4">
 <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
 Request a Callback
 </h3>
 <p className="text-xs md:text-sm text-gray-500 truncate">
 Get expert advice from our verified professionals.
 </p>
 </div>

 <Button
 onClick={handleRequestCallback}
 className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300 bg-brand-red hover:brightness-110 text-white`}
 >
 <PhoneCall className="h-4 w-4" />
 Request Callback
 </Button>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 );
}
