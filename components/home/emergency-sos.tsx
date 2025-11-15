"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function EmergencySOS() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSOS = () => {
    setShowPopup(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      <Button
        onClick={handleSOS}
        className="bg-blue-800 hover:bg-blue-700 text-white px-35 py-6 rounded-lg text-lg font-semibold shadow-xl transition-all transform hover:scale-105"
      >
        Emergency SOS
      </Button>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl px-10 py-8 text-center max-w-sm mx-auto"
            >
              <h2 className="text-2xl font-semibold text-blue-800 mb-3">
                🚨 Emergency Alert
              </h2>
              <p className="text-gray-700 font-medium">
                Just wait for{" "}
                <span className="text-red-600 font-semibold">2 minutes</span> —
                your help is on the way.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
