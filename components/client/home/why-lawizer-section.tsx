"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";

export function WhyLawizerSection() {
  function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <div className="why-section w-full px-4 md:px-12 py-6 md:py-8 max-w-7xl mx-auto" id="why">
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

        <div className="w-full lg:w-1/2 max-w-lg mx-auto relative mt-8 lg:mt-0">
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand)] to-red-500 rounded-[32px] blur-3xl opacity-[0.08]" />
          
          <div className="relative bg-white rounded-[32px] p-6 sm:p-8 border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.06)] overflow-hidden">
            {/* Top decorative gradient spot */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative grid grid-cols-2 gap-4 mb-6">
              {/* Stat 1 - Full width */}
              <div className="col-span-2 bg-[#F8FAFC] rounded-2xl p-5 sm:p-6 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Businesses Registered</div>
                  <div className="font-[family-name:var(--)] text-3xl sm:text-[42px] font-black text-[var(--brand)] leading-none tracking-tight">
                    <AnimatedNumber value="1000" suffix="K+" />
                  </div>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-50 text-[var(--brand)] flex items-center justify-center border border-red-100">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                </div>
              </div>
              
              {/* Stat 2 */}
              <div className="col-span-1 bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 flex flex-col justify-center">
                <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Approval<br/>Rate</div>
                <div className="font-[family-name:var(--)] text-2xl sm:text-3xl font-black text-gray-900 leading-none tracking-tight">
                  <AnimatedNumber value="99" suffix="%" />
                </div>
              </div>

              {/* Stat 3 */}
              <div className="col-span-1 bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100 flex flex-col justify-center">
                <div className="text-[10px] sm:text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">Avg Completion<br/>Time</div>
                <div className="font-[family-name:var(--)] text-2xl sm:text-3xl font-black text-gray-900 leading-none tracking-tight">
                  <AnimatedNumber value="7" suffix=" Days" />
                </div>
              </div>
            </div>
            
            {/* Banner */}
            <div className="relative bg-gradient-to-r from-red-50 to-white rounded-2xl p-5 border border-red-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100/50 flex items-center justify-center text-brand-red shrink-0 shadow-xs">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-snug mb-0.5">Promoting Startup Culture in West Bengal</span>
                <span className="text-[12px] font-medium text-gray-500 leading-relaxed pr-2">Supporting founders from Kolkata to every corner of the state</span>
              </div>
            </div>

            {/* Founders Community WhatsApp CTA */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col items-center text-center">
              <span className="text-sm font-bold text-gray-800 mb-3">
                Join 2000+ founders who started their journey at Lawizer
              </span>
              <motion.a
                href="https://chat.whatsapp.com/CsUOsG0IIVtJs1IvnypR6u?s=sh&p=i&ilr=1&amv=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(37,211,102,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 bg-[#25D366] text-white font-semibold px-6 py-3.5 rounded-xl shadow-md whatsapp-highlight w-full"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
                </svg>
                <span className="text-[15px] tracking-wide text-center">Join Our Founders Community</span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
