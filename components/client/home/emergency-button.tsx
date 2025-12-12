"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";

export function EmergencyButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { isLoggedIn, setIsSignInModalOpen } = useAuth();

  const handleOpen = () => {
    isLoggedIn ? setShowConfirm(true) : setIsSignInModalOpen(true);
  };

  const cancelSOS = () => {
    setShowConfirm(false);
  };

  const confirmSOS = () => {
    setShowConfirm(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
  };

  return (
    <div>
      {/* Emergency Floating Icon */}
      <div onClick={handleOpen}>
        <Image
          src={"/emergency-call.png"}
          alt="emergency"
          width={48}
          height={48}
          className="fixed bottom-24 right-8 z-50 cursor-pointer"
        />
      </div>

      {/* Confirm Modal */}
      <AnimatePresence>
        {showConfirm && (
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
              <h2 className="text-2xl font-semibold text-red-600 mb-3">
                ⚠️ Confirm Emergency Alert
              </h2>
              <p className="text-gray-700 mb-6">
                Are you sure you want to send an emergency alert? This will
                notify your emergency contact immediately.
              </p>

              <div className="flex justify-center space-x-4">
                <Button
                  onClick={cancelSOS}
                  className="bg-gray-400 hover:bg-gray-500 text-white font-semibold rounded-lg"
                >
                  Cancel
                </Button>
                <Button
                  onClick={confirmSOS}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
                >
                  Yes, Send SOS!
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Popup After Sending */}
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
                ✅ Emergency Alert Sent
              </h2>
              <p className="text-gray-700 font-medium">
                Help is on the way. Please wait for{" "}
                <span className="text-red-600 font-semibold">2 minutes</span>.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
