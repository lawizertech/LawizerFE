"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle, X, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ProcessModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "success" | "error";
  processCode?: string;
  message?: string;
}

export default function ProcessResultModal({
  isOpen,
  onClose,
  type,
  processCode,
  message,
}: ProcessModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyProcessCode = () => {
    if (processCode) {
      navigator.clipboard.writeText(processCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {type === "success" ? (
              /* ============ SUCCESS MODAL ============ */
              <div className="p-8 text-center">
                {/* Success Icon with Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                    duration: 0.6,
                  }}
                  className="mx-auto w-20 h-20 mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center"
                >
                  <CheckCircle
                    className="w-12 h-12 text-white"
                    strokeWidth={2.5}
                  />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-slate-900 mb-3"
                >
                  Request Submitted!
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-600 mb-6"
                >
                  Your service has been requested successfully. We will get back
                  to you within 24 hours.
                </motion.p>

                {/* Process Code */}
                {processCode && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-5 mb-6 border border-slate-200"
                  >
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Process Code
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <code className="text-lg font-mono font-bold text-slate-900 tracking-tight">
                        {processCode}
                      </code>
                      <button
                        onClick={handleCopyProcessCode}
                        className="flex items-center gap-2 px-3 py-2 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg transition text-sm font-medium text-slate-700"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-green-600" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Info Box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6"
                >
                  <p className="text-sm text-blue-800">
                    📧 A confirmation email has been sent to your registered
                    email address.
                  </p>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-green-600/30"
                >
                  Got it, Thanks!
                </motion.button>
              </div>
            ) : (
              /* ============ ERROR MODAL ============ */
              <div className="p-8 text-center">
                {/* Error Icon with Animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    delay: 0.2,
                    duration: 0.6,
                  }}
                  className="mx-auto w-20 h-20 mb-6 bg-gradient-to-br from-red-400 to-rose-500 rounded-full flex items-center justify-center"
                >
                  <XCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-slate-900 mb-3"
                >
                  Request Failed
                </motion.h2>

                {/* Message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-slate-600 mb-6"
                >
                  {message ||
                    "Unable to submit your request. Please try again or contact support."}
                </motion.p>

                {/* Support Info */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6"
                >
                  <p className="text-sm text-slate-700 mb-2 font-medium">
                    Need Help?
                  </p>
                  <p className="text-sm text-slate-600">
                    Contact our support team at{" "}
                    <a
                      href="mailto:support@example.com"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      support@example.com
                    </a>
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-3"
                >
                  <button
                    onClick={onClose}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 rounded-xl transition"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => window.location.reload()}
                    className="flex-1 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-semibold py-4 rounded-xl transition shadow-lg shadow-red-600/30"
                  >
                    Try Again
                  </button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
