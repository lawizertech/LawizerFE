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
          Register in 4 <span className="text-brand-red">Simple Steps</span>
        </div>
        <motion.div
          className="steps-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 relative"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >

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
            <div className="step-h">Get Your Deliverables</div>
            <div className="step-p">Receive what you asked for.</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
