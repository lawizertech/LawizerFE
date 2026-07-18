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
            Why <span className="text-brand-red">Lawizer</span>: Built for India's
            <br />
            <span className="text-brand-red">New-Age</span> Founders
          </h2>
          <p className="section-sub text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
            We understand the startup grind. No legalese, no hidden fees, no chasing — just clear, fast, and
            professional compliance support.
          </p>

          <ul className="why-points">
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">100% Online — No Office Visits</div>
                <div className="s">
                  Submit all documents from your laptop or phone. We manage the rest with government portals.
                </div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Transparent, All-Inclusive Pricing</div>
                <div className="s">
                  The price you see includes government fees, professional fees, and all incidentals. Zero surprises.
                </div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Dedicated Expert for Your Account</div>
                <div className="s">
                  One point of contact via WhatsApp, from document collection to certificate delivery.
                </div>
              </div>
            </li>
            <li>
              <div className="why-check">✓</div>
              <div className="why-point-text">
                <div className="t">Specialists in West Bengal & Pan-India</div>
                <div className="s">
                  Deep local expertise in Kolkata and WB jurisdiction, with nationwide registration capabilities.
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="why-visual w-full lg:w-1/2 max-w-lg mx-auto">
          <div className="why-stat-grid grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="why-stat p-3 sm:p-4 min-w-[80px]">
              <div className="n text-xl sm:text-2xl md:text-3xl">
                <AnimatedNumber value="1000" suffix="K+" />
              </div>
              <div className="l text-2xs sm:text-xs">
                Businesses
                <br />
                Registered
              </div>
            </div>
            <div className="why-stat p-3 sm:p-4">
              <div className="n text-xl sm:text-2xl md:text-3xl">
                <AnimatedNumber value="99" suffix="%" />
              </div>
              <div className="l text-2xs sm:text-xs">
                Approval
                <br />
                Rate
              </div>
            </div>
            <div className="why-stat p-3 sm:p-4">
              <div className="n text-xl sm:text-2xl md:text-3xl">
                <AnimatedNumber value="7" suffix=" Days" />
              </div>
              <div className="l text-2xs sm:text-xs">
                Avg Completion
                <br />
                Time
              </div>
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

      {/* Founders Community WhatsApp CTA — outside the box, centred */}
      <div className="flex justify-center mt-10">
        <motion.a
          href="https://chat.whatsapp.com/CsUOsG0IIVtJs1IvnypR6u?s=sh&p=i&ilr=1&amv=1"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          animate={{ y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.4, ease: "easeOut" },
            y: { duration: 1.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.05, y: 0, boxShadow: "0 10px 32px rgba(37,211,102,0.4)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-7 py-4 rounded-2xl shadow-lg"
        >
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
          </svg>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide">Join Our Founders Community</span>
            <span className="text-xs font-normal opacity-80">Free WhatsApp Group · Exclusive for Founders</span>
          </div>
        </motion.a>
      </div>
    </div>
  );
}
