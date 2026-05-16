"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/authContext";

const LETTERS = ["S", "O", "S"];

export function EmergencyButton() {
  const [showConfirm, setShowConfirm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { isLoggedIn, setIsSignInModalOpen } = useAuth();

  const handleOpen = () => {
    isLoggedIn ? setShowConfirm(true) : setIsSignInModalOpen(true);
  };

  const cancelSOS = () => setShowConfirm(false);

  const confirmSOS = () => {
    setShowConfirm(false);
    setShowPopup(true);
    window.location.href = "tel:9062815535";
    setTimeout(() => setShowPopup(false), 5000);
  };

  return (
    <div>
      {/* Floating button — pill grows leftward from icon */}
      <div
        className="fixed bottom-24 right-8 z-50 flex items-center justify-end cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleOpen}
      >
        {/* Expanding pill container — anchored to the right (icon side) */}
        <motion.div
          initial={false}
          animate={{
            width: hovered ? "115px" : "48px",
            backgroundColor: hovered ? "#dc2626" : "transparent",
            boxShadow: hovered
              ? "0 4px 20px rgba(220,38,38,0.5), 0 2px 8px rgba(0,0,0,0.2)"
              : "0 0 0 rgba(0,0,0,0)",
          }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="flex items-center justify-end overflow-hidden"
          style={{
            height: "48px",
            borderRadius: "24px",
            position: "relative",
          }}
        >
          {/* Letters — fade in after pill expands */}
          <div className="flex items-center pl-4 pr-1 flex-shrink-0">
            {LETTERS.map((letter, i) => {
              const total = LETTERS.length;
              const enterDelay = 0.15 + (total - 1 - i) * 0.055;
              const exitDelay = i * 0.04;

              return (
                <AnimatePresence key={i}>
                  {hovered && (
                    <motion.span
                      key={`letter-${i}`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: 10,
                        transition: { delay: exitDelay, duration: 0.12 },
                      }}
                      transition={{
                        delay: enterDelay,
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        color: "white",
                        display: "inline-block",
                        lineHeight: 1,
                        marginLeft: "1px",
                      }}
                    >
                      {letter}
                    </motion.span>
                  )}
                </AnimatePresence>
              );
            })}
          </div>

          {/* Icon — always visible, sits on the right */}
          <motion.div
            animate={
              hovered
                ? { filter: "drop-shadow(0 0 6px rgba(255,255,255,0.6))" }
                : { filter: "drop-shadow(0 0 0px rgba(255,255,255,0))" }
            }
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-12 h-12 relative z-10"
          >
            <Image
              src="/emergency-call.png"
              alt="emergency"
              width={48}
              height={48}
              className="rounded-full"
            />
          </motion.div>
        </motion.div>
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