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
    <div className="why-section w-full px-4 md:px-12 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto" id="why">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6 break-words">
            Why <span className="text-brand-red">Lawizer</span>: Built for India's<br />
            <span className="text-brand-red">New-Age</span> Founders
          </h2>
          <p className="section-sub text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
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

        <div className="why-visual w-full lg:w-1/2 max-w-lg mx-auto">
          <div className="why-stat-grid grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="why-stat p-3 sm:p-4 min-w-[80px]">
              <div className="n text-xl sm:text-2xl md:text-3xl"><AnimatedNumber value="1000" suffix="K+" /></div>
              <div className="l text-2xs sm:text-xs">Businesses<br />Registered</div>
            </div>
            <div className="why-stat p-3 sm:p-4">
              <div className="n text-xl sm:text-2xl md:text-3xl"><AnimatedNumber value="99" suffix="%" /></div>
              <div className="l text-2xs sm:text-xs">Approval<br />Rate</div>
            </div>
            <div className="why-stat p-3 sm:p-4">
              <div className="n text-xl sm:text-2xl md:text-3xl"><AnimatedNumber value="7" suffix=" Days" /></div>
              <div className="l text-2xs sm:text-xs">Avg Completion<br />Time</div>
            </div>
          </div>
          <div className="why-bar flex items-center gap-4">
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
