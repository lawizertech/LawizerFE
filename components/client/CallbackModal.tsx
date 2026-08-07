"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ShieldAlert } from "lucide-react";

interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function CallbackModal({ isOpen, onClose, serviceName }: CallbackModalProps) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setMessage("Please fill in all fields");
      setMessageType("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage("Please enter a valid email address");
      setMessageType("error");
      return;
    }

    const phoneRegex = /^[0-9\s\-\+\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      setMessage("Please enter a valid phone number");
      setMessageType("error");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: serviceName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Callback request submitted successfully!");
        setMessageType("success");
        setFormData({ name: "", email: "", phone: "" });
        setTimeout(() => {
          onClose();
          setMessage("");
        }, 2000);
      } else {
        setMessage(data.message || "Failed to submit callback request");
        setMessageType("error");
      }
    } catch (error) {
      setMessage("Failed to submit callback request");
      setMessageType("error");
      console.error("Callback error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-[#050d1a]/70 backdrop-blur-md z-50 overflow-y-auto"
          onClick={onClose}
        >
          <div className="min-h-full flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-[420px] bg-white rounded-[24px] sm:rounded-3xl shadow-[0_24px_56px_rgba(5,13,26,0.3)] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top decorative gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#c92c41] to-[#e99b2b] rounded-t-full" />

              <div className="p-5 sm:p-8">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 sm:right-5 sm:top-5 p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>

              {/* Header */}
              <div className="mb-7">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight mb-2">Request a Callback</h2>
                <p className="text-xs sm:text-sm text-gray-500">
                  Leave your details and our expert for <span className="font-semibold text-[#c92c41]">{serviceName}</span> will reach out shortly.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="E.g. Jane Doe"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-[#0e172b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c92c41]/30 focus:border-[#c92c41] focus:bg-white transition-all"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-[#0e172b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c92c41]/30 focus:border-[#c92c41] focus:bg-white transition-all"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label htmlFor="phone" className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 sm:py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-sm text-[#0e172b] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c92c41]/30 focus:border-[#c92c41] focus:bg-white transition-all"
                    disabled={loading}
                    required
                  />
                </div>

                {/* Message */}
                <AnimatePresence>
                  {message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className={`overflow-hidden rounded-xl text-xs sm:text-sm font-medium ${
                        messageType === "success"
                          ? "bg-green-50 text-green-700 border border-green-200 p-3"
                          : "bg-red-50 text-red-700 border border-red-200 p-3"
                      }`}
                    >
                      {message}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full relative overflow-hidden bg-[#c92c41] text-white font-bold py-3.5 sm:py-4 rounded-xl shadow-[0_8px_20px_rgba(201,44,65,0.24)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">{loading ? "Submitting..." : "Request Call"}</span>
                  </motion.button>
                </div>

                <p className="text-[11px] text-gray-400 text-center mt-2 flex items-center justify-center gap-1.5">
                  <ShieldAlert className="w-3 h-3" /> Your information is secure
                </p>
              </form>
            </div>
          </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
