"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function WhyLawizerSection() {
  function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
      let start = 0;
      if (isInView) {
        const duration = 1500;
        const increment = numericValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            start = numericValue;
            clearInterval(timer);
          }
          setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
      } else {
        setCount(0);
      }
    }, [numericValue, isInView]);

    const formatDisplay = (val: number) => {
      if (suffix.includes("K")) {
        return (val / 1000).toFixed(0);
      }
      return val.toLocaleString();
    };

    return (
      <span ref={ref}>
        {value.includes("₹") ? "₹" : ""}
        {formatDisplay(count)}
        {suffix || (value.includes("+") ? "+" : value.includes("★") ? "★" : "")}
      </span>
    );
  }

  return (
    <div className="why-section" id="why">
      <div className="why-grid">
        <div>
          <h2 className="section-title" style={{
            fontFamily: "var(--font-head)",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "var(--text-primary)",
            marginBottom: "20px"
          }}>
            Why <span style={{ color: "var(--brand)" }}>Lawizer</span>: Built for India's<br />
            <span style={{ color: "var(--brand)" }}>New-Age</span> Founders
          </h2>
          <p className="section-sub" style={{ 
            fontSize: "17px", 
            color: "var(--text-secondary)", 
            lineHeight: 1.7,
            marginBottom: "32px",
            maxWidth: "520px"
          }}>
            We understand the startup grind. No legalese, no hidden fees, no chasing — just clear, fast, and professional compliance support.
          </p>

          <ul className="why-points">
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">100% Online — No Office Visits</div>
                <div className="s">Submit all documents from your laptop or phone. We manage the rest with government portals.</div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Transparent, All-Inclusive Pricing</div>
                <div className="s">The price you see includes government fees, professional fees, and all incidentals. Zero surprises.</div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Dedicated Expert for Your Account</div>
                <div className="s">One point of contact via WhatsApp, from document collection to certificate delivery.</div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Specialists in West Bengal & Pan-India</div>
                <div className="s">Deep local expertise in Kolkata and WB jurisdiction, with nationwide registration capabilities.</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="why-visual">
          <div className="why-stat-grid">
            <div className="why-stat">
              <div className="n"><AnimatedNumber value="2000" suffix="K+" /></div>
              <div className="l">Businesses<br />Registered</div>
            </div>
            <div className="why-stat">
              <div className="n"><AnimatedNumber value="99" suffix="%" /></div>
              <div className="l">Approval<br />Rate</div>
            </div>
            <div className="why-stat">
              <div className="n"><AnimatedNumber value="7" suffix=" Days" /></div>
              <div className="l">Avg Completion<br />Time</div>
            </div>
          </div>
          <div className="why-bar">
            <div className="why-bar-icon">🚀</div>
            <div className="why-bar-text">
              <div className="t">Promoting Startup Culture in West Bengal</div>
              <div className="s">Supporting founders from Kolkata to every corner of the state</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
