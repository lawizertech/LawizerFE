"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/authContext";

export function MobileFAB() {
  const [open, setOpen] = useState(false);
  const [showSOSConfirm, setShowSOSConfirm] = useState(false);
  const { isLoggedIn, setIsSignInModalOpen } = useAuth();

  const handleSOS = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (isLoggedIn) {
      setShowSOSConfirm(true);
    } else {
      setIsSignInModalOpen(true);
    }
  };

  const confirmSOS = () => {
    setShowSOSConfirm(false);
    window.location.href = "tel:9062815535";
  };

  return (
    <>
      {/* Visible ONLY on mobile — hidden on lg+ where individual buttons take over */}
      <div
        className="lg:hidden"
        style={{
          position: "fixed",
          bottom: "calc(16px + env(safe-area-inset-bottom, 0px))",
          right: 16,
          zIndex: 50,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 12,
        }}
      >
        {/* Fan-out action buttons */}
        <AnimatePresence>
          {open && (
            <>
              {/* SOS */}
              <motion.button
                key="fab-sos"
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.85 }}
                transition={{ duration: 0.18, delay: 0.06 }}
                onClick={handleSOS}
                className="flex items-center gap-2 text-white font-bold text-sm px-4 rounded-full min-h-[44px] min-w-[44px]"
                style={{
                  background: "#dc2626",
                  boxShadow: "0 4px 18px rgba(220,38,38,0.45)",
                }}
                aria-label="SOS Emergency Call"
              >
                🚨 SOS Call
              </motion.button>

              {/* WhatsApp */}
              <motion.a
                key="fab-wa"
                initial={{ opacity: 0, y: 10, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.85 }}
                transition={{ duration: 0.18 }}
                href="https://wa.me/919062815535"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold text-sm px-4 rounded-full min-h-[44px]"
                style={{
                  background: "#25D366",
                  boxShadow: "0 4px 18px rgba(37,211,102,0.45)",
                  textDecoration: "none",
                }}
                aria-label="Chat on WhatsApp"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
                </svg>
                WhatsApp
              </motion.a>
            </>
          )}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setOpen(v => !v)}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          aria-label={open ? "Close actions" : "Help & emergency"}
          style={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #c92c41 0%, #a02030 100%)",
            color: "#fff",
            fontSize: 22,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 6px 24px rgba(201,44,65,0.45)",
            flexShrink: 0,
          }}
        >
          {open ? "✕" : "?"}
        </motion.button>
      </div>

      {/* Dimmed backdrop when open */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="fab-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="lg:hidden"
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49,
              background: "rgba(0,0,0,0.25)",
            }}
          />
        )}
      </AnimatePresence>

      {/* SOS confirm dialog */}
      <AnimatePresence>
        {showSOSConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 60, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)" }}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.22 }}
              style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", maxWidth: 340, width: "90%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.25)" }}
            >
              <div style={{ fontSize: 32 }}>🚨</div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#dc2626", margin: "12px 0 8px" }}>Emergency Call</h2>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 24 }}>
                This will immediately dial our emergency legal helpline. Confirm?
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <button
                  onClick={() => setShowSOSConfirm(false)}
                  style={{ padding: "10px 20px", borderRadius: 10, background: "#f3f4f6", color: "#374151", fontWeight: 600, fontSize: 14, border: "none", cursor: "pointer", minHeight: 44 }}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmSOS}
                  style={{ padding: "10px 20px", borderRadius: 10, background: "#dc2626", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", minHeight: 44 }}
                >
                  Call Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
