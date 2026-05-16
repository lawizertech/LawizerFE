"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="steps-strip" id="process">
      <div className="steps-wrap">
        <div className="steps-label">How It Works</div>
        <div className="steps-title">
          Register in 4 <span style={{ color: "var(--brand)" }}>Simple Steps</span>
        </div>
        <motion.div
          className="steps-grid"
          style={{ position: "relative" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Animated Connector Bar */}
          <motion.div 
            className="steps-bar-animated"
            initial={{ width: 0 }}
            whileInView={{ width: "72%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "linear", delay: 0.2 }}
            style={{
              position: "absolute",
              top: "28px",
              left: "14%",
              height: "2px",
              background: "repeating-linear-gradient(90deg, var(--brand) 0, var(--brand) 6px, transparent 6px, transparent 14px)",
              zIndex: 0,
              opacity: 0.8
            }}
          />

          <motion.div className="step" variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.6 } }
          }}>
            <div className="step-num">1</div>
            <div className="step-h">Choose Service</div>
            <div className="step-p">Pick the registration type that suits your business goals.</div>
          </motion.div>

          <motion.div className="step" variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.6 } }
          }}>
            <div className="step-num">2</div>
            <div className="step-h">Submit Documents</div>
            <div className="step-p">Upload your documents securely from anywhere in India.</div>
          </motion.div>

          <motion.div className="step" variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.6 } }
          }}>
            <div className="step-num">3</div>
            <div className="step-h">We File & Track</div>
            <div className="step-p">Our experts handle all government filings and follow-ups.</div>
          </motion.div>

          <motion.div className="step" variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0, transition: { delay: 2.6, duration: 0.6 } }
          }}>
            <div className="step-num">4</div>
            <div className="step-h">Get Certificate</div>
            <div className="step-p">Receive your incorporation certificate & you're official!</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
