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
      <div
        style={{
          minHeight: "100dvh",
          paddingTop: "80px", // clears fixed navbar
          background: "var(--bg-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "96px 16px 48px",
          fontFamily: "var(--font-body)",
        }}
      >
        <div style={{ width: "100%", maxWidth: 520 }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            style={{ textAlign: "center", marginBottom: 36 }}
          >
            {/* Brand badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "var(--brand-light)",
                border: "1.5px solid rgba(202,45,66,0.2)",
                color: "var(--brand)",
                padding: "6px 16px",
                borderRadius: 100,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--brand)",
                  display: "inline-block",
                  animation: "pulse-premium 3s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              />
              Free · No Commitment
            </div>

            <h1
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(28px, 5vw, 40px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Book a Free{" "}
              <span style={{ color: "var(--brand)" }}>Consultation</span>
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: 380,
                margin: "0 auto",
                fontWeight: 500,
              }}
            >
              Tell us your concern and our legal experts will get back to you promptly.
            </p>
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            style={{
              background: "rgba(255,255,255,0.85)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1.5px solid rgba(228,232,240,0.7)",
              borderRadius: "var(--radius-xl)",
              padding: "36px 32px",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="fc-name"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
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
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 14,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)",
                    background: "var(--bg-soft)",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 20 }}>
                <label
                  htmlFor="fc-phone"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
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
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 14,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)",
                    background: "var(--bg-soft)",
                    outline: "none",
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Reason */}
              <div style={{ marginBottom: 28 }}>
                <label
                  htmlFor="fc-reason"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: 8,
                  }}
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
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1.5px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    fontSize: 14,
                    fontFamily: "var(--font-body)",
                    color: "var(--text-primary)",
                    background: "var(--bg-soft)",
                    outline: "none",
                    resize: "vertical",
                    minHeight: 110,
                    transition: "border-color 0.2s",
                    boxSizing: "border-box",
                    lineHeight: 1.6,
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--brand)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                />
              </div>

              {/* Error */}
              {error && (
                <p
                  style={{
                    color: "var(--brand)",
                    fontSize: 13,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  ⚠ {error}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn-hero"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: 16,
                  padding: "15px 24px",
                  opacity: loading ? 0.7 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                  border: "none",
                }}
              >
                {loading ? "Submitting..." : "Book Consultation"}
              </button>
            </form>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 24,
              flexWrap: "wrap",
              marginTop: 24,
            }}
          >
            {trustPoints.map((tp, i) => {
              const Icon = tp.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 12,
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={13} style={{ color: "var(--accent-green)" }} />
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
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccess(false)}
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(13,15,20,0.6)",
                backdropFilter: "blur(8px)",
              }}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 32 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              style={{
                position: "relative",
                background: "white",
                borderRadius: "var(--radius-xl)",
                padding: "48px 36px 40px",
                maxWidth: 420,
                width: "100%",
                textAlign: "center",
                boxShadow: "0 32px 80px rgba(0,0,0,0.2)",
              }}
            >
              {/* Close */}
              <button
                onClick={() => setSuccess(false)}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "var(--bg-soft)",
                  border: "none",
                  borderRadius: "var(--radius-sm)",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--text-muted)",
                }}
              >
                <X size={16} />
              </button>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.15, type: "spring", stiffness: 260, damping: 20 }}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent-green) 0%, #0e9254 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  boxShadow: "0 12px 32px rgba(20,168,90,0.3)",
                }}
              >
                <CheckCircle size={36} color="white" strokeWidth={2.5} />
              </motion.div>

              <h2
                style={{
                  fontFamily: "var(--font-head)",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  marginBottom: 12,
                  lineHeight: 1.2,
                }}
              >
                Request Received! 🎉
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--text-secondary)",
                  lineHeight: 1.65,
                  marginBottom: 28,
                  fontWeight: 500,
                }}
              >
                Your request has been received. Our team will get back to you soon.
              </p>

              <button
                onClick={() => setSuccess(false)}
                className="btn-hero"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: 15,
                  padding: "13px 24px",
                  border: "none",
                }}
              >
                Done
              </button>

              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  marginTop: 16,
                }}
              >
                Questions? Email us at{" "}
                <a
                  href="mailto:lawizertech@gmail.com"
                  style={{ color: "var(--brand)", fontWeight: 600 }}
                >
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
