"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import CallbackModal from "@/components/client/CallbackModal";

const STEPS = [
  {
    num: 1,
    iconPath: "M9 11l3 3L22 4 M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
    title: "Choose Service",
    desc: "Pick the registration type that suits your business goals — company, GST, trademark and more.",
    color: "#c92c41",
    bg: "rgba(201,44,65,0.12)",
  },
  {
    num: 2,
    iconPath: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
    title: "Submit Documents",
    desc: "Upload your documents securely from anywhere in India — our portal keeps everything encrypted.",
    color: "#2563eb",
    bg: "rgba(37,99,235,0.12)",
  },
  {
    num: 3,
    iconPath: "M12 2a10 10 0 110 20A10 10 0 0112 2z M12 6v6l4 2",
    title: "We File & Track",
    desc: "Our legal experts handle all government filings and follow-ups. You get real-time status updates.",
    color: "#059669",
    bg: "rgba(5,150,105,0.12)",
  },
  {
    num: 4,
    iconPath: "M22 12l-4 0-3 9-6-18-3 9H2",
    title: "Get Your Certificate",
    desc: "Receive your official registration certificate and all deliverables — straight to your dashboard.",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.12)",
  },
];

function StepCard({ step, index }: { step: (typeof STEPS)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="hiw-step-card"
      style={{ "--hiw-glow": `${step.color}66` } as React.CSSProperties}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
    >
      {/* Top: icon + number badge */}
      <div className="hiw-step-top">
        <motion.div
          className="hiw-icon-wrap"
          style={{ background: step.bg, color: step.color }}
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d={step.iconPath} />
          </svg>
        </motion.div>
        <div className="hiw-step-num" style={{ background: step.color }}>
          {step.num}
        </div>
      </div>

      <div className="hiw-step-body">
        <h3 className="hiw-step-title">{step.title}</h3>
        <p className="hiw-step-desc">{step.desc}</p>
      </div>
    </motion.div>
  );
}

export function HowItWorksSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-80px" });

  return (
    <section className="hiw-section" id="process">
      <div className="hiw-wrap">
        {/* Header */}
        <motion.div
          ref={titleRef}
          className="hiw-header"
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="hiw-label">HOW IT WORKS</span>
          <h2 className="hiw-title">
            Register in 4{" "}
            <span className="hiw-title-accent">Simple Steps</span>
          </h2>
          <p className="hiw-subtitle">
            From choosing your service to getting your certificate — we handle everything in days, not months.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="hiw-grid">
          {STEPS.map((step, i) => (
            <div key={step.num} className="hiw-step-wrapper">
              <StepCard step={step} index={i} />
              {/* Connector — hidden after last step */}
              {i < STEPS.length - 1 && (
                <div className="hiw-connector">
                  <svg className="hiw-arrow" viewBox="0 0 40 16" fill="none">
                    <path d="M0 8H34 M28 2L36 8L28 14" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="hiw-connector-v" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="hiw-cta-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button onClick={() => setIsModalOpen(true)} className="hiw-cta-btn border-none cursor-pointer font-[inherit]">
            Request Callback
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="hiw-cta-note">⚡ Average completion: 7–10 working days</span>
        </motion.div>
      </div>

      <CallbackModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceName="General Inquiry" 
      />
    </section>
  );
}
