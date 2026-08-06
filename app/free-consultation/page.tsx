"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ShieldCheck, Phone, MessageSquare, User, X } from "lucide-react";

export default function FreeConsultationPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/free-consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, reason }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const trustPoints = [
    { icon: ShieldCheck, label: "100% Confidential" },
    { icon: Phone, label: "We Call You Back" },
    { icon: MessageSquare, label: "No Commitment" },
  ];

  return (
    <>
      {/* Full-page layout with navbar offset */}
      <div className="min-h-[100dvh] pt-28 sm:pt-32 pb-12 bg-[var(--bg-soft)] flex justify-center px-4 sm:px-6 font-[family-name:var(--)]">
        <div className="w-full max-w-[520px] my-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="text-center mb-9"
          >
            {/* Brand badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--brand-light)] border-[1.5px] border-[rgba(202,45,66,0.2)] text-[var(--brand)] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] inline-block animate-[pulse-premium_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
              Free · No Commitment
            </div>

            <h1 className="font-[family-name:var(--)] text-[clamp(28px,5vw,40px)] font-extrabold text-[var(--text-primary)] leading-tight tracking-tight mb-3">
              Book a Free <span className="text-[var(--brand)]">Consultation</span>
            </h1>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[380px] mx-auto font-medium">
              Tell us your concern and our legal experts will get back to you promptly.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="bg-white/85 backdrop-blur-md border-[1.5px] border-[#e4e8f0]/70 rounded-[var(--radius-xl)] p-6 sm:px-8 sm:py-9 shadow-[var(--shadow-lg)] w-full"
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mb-5">
                <label
                  htmlFor="fc-name"
                  className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-primary)] mb-2"
                >
                  <User size={13} />
                  Full Name
                </label>
                <input
                  id="fc-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full px-4 py-3 border-[1.5px] border-[var(--border)] rounded-[var(--radius-md)] text-sm font-[family-name:var(--)] text-[var(--text-primary)] bg-[var(--bg-soft)] outline-none transition-colors duration-200 focus:border-[var(--brand)]"
                />
              </div>

              {/* Phone */}
              <div className="mb-5">
                <label
                  htmlFor="fc-phone"
                  className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-primary)] mb-2"
                >
                  <Phone size={13} />
                  Phone Number
                </label>
                <input
                  id="fc-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full px-4 py-3 border-[1.5px] border-[var(--border)] rounded-[var(--radius-md)] text-sm font-[family-name:var(--)] text-[var(--text-primary)] bg-[var(--bg-soft)] outline-none transition-colors duration-200 focus:border-[var(--brand)]"
                />
              </div>

              {/* Reason */}
              <div className="mb-7">
                <label
                  htmlFor="fc-reason"
                  className="flex items-center gap-1.5 text-[13px] font-semibold text-[var(--text-primary)] mb-2"
                >
                  <MessageSquare size={13} />
                  Reason for Consultation
                </label>
                <textarea
                  id="fc-reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Briefly describe your legal concern (e.g. company registration, property dispute, GST issue...)"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border-[1.5px] border-[var(--border)] rounded-[var(--radius-md)] text-sm font-[family-name:var(--)] text-[var(--text-primary)] bg-[var(--bg-soft)] outline-none resize-y min-h-[110px] transition-colors duration-200 leading-relaxed focus:border-[var(--brand)]"
                />
              </div>

              {/* Error */}
              {error && <p className="text-[var(--brand)] text-[13px] mb-4 font-medium">⚠ {error}</p>}

              {/* Submit */}
              <div className="flex justify-center mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn-hero px-10 min-w-[220px] justify-center text-base py-3.5 border-none ${loading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"}`}
                >
                  {loading ? "Submitting..." : "Book Consultation"}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 flex-wrap mt-6"
          >
            {trustPoints.map((tp, i) => {
              const Icon = tp.icon;
              return (
                <div key={i} className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)]">
                  <Icon size={13} className="text-[var(--accent-green)]" />
                  {tp.label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Success popup */}
      <AnimatePresence>
        {success && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccess(false)}
              className="absolute inset-0 bg-[#0d0f14]/60 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 32 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="relative bg-white rounded-[var(--radius-xl)] px-9 pt-12 pb-10 max-w-[420px] w-full text-center shadow-[0_32px_80px_rgba(0,0,0,0.2)]"
            >
              {/* Close */}
              <button
                onClick={() => setSuccess(false)}
                className="absolute top-4 right-4 bg-[var(--bg-soft)] border-none rounded-[var(--radius-sm)] w-8 h-8 flex items-center justify-center cursor-pointer text-[var(--text-muted)]"
              >
                <X size={16} />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
                className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[var(--accent-green)] to-[#0e9254] flex items-center justify-center mx-auto mb-6 shadow-[0_12px_32px_rgba(20,168,90,0.3)]"
              >
                <CheckCircle size={36} color="white" strokeWidth={2.5} />
              </motion.div>

              <h2 className="font-[family-name:var(--)] text-[22px] font-extrabold text-[var(--text-primary)] mb-3 leading-tight">
                Request Received! 🎉
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-7 font-medium">
                Your request has been received. Our team will get back to you soon.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="btn-hero w-full justify-center text-[15px] py-3 border-none"
              >
                Done
              </button>

              <p className="text-[11px] text-[var(--text-muted)] mt-4">
                Questions? Email us at{" "}
                <a href="mailto:lawizertech@gmail.com" className="text-[var(--brand)] font-semibold">
                  lawizertech@gmail.com
                </a>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
