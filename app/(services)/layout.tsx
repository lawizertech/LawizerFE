"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, PhoneCall } from "lucide-react";

// Assuming you have a component library, using a basic HTML button for portability.
// If using Shadcn/ui or similar, replace this with your actual Button import.
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

  const handleClick = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1200);
  };

  return (
    <div className="min-h-screen relative">
      <main>{children}</main>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
        className="fixed bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full px-4"
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
            disabled={success}
            className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-all duration-300 ${
              success ? "bg-[#21ae17]" : "bg-blue-600 hover:bg-blue-700"
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
            ) : (
              <>
                <PhoneCall className="h-4 w-4" />
                Request a Call
              </>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
