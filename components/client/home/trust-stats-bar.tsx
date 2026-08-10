"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedNumber({ value, suffix = "", isDecimal = false }: { value: number, suffix?: string, isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    let start = 0;
    if (isInView) {
      const duration = 1500;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [value, isInView, isDecimal]);

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}</span>;
}

export function TrustStatsBar() {
  const logos = [
    { name: "Startup India", logo: "/logos/StartupIndia.png" },
    { name: "DPIIT", logo: "/logos/DPIIT.png" },
    { name: "MSME", logo: "/logos/MSME.png" },
    { name: "ISO", logo: "/logos/ISO.png" },
  ];

  return (
    <section className="bg-white py-3 md:py-4">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12">
        <div className="border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-4 sm:py-5 px-6 lg:px-8 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-0">
          
          {/* Associated With */}
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap justify-center xl:pr-8 xl:mr-8 xl:w-auto w-full">
            <span className="text-[13px] font-bold text-gray-700 uppercase tracking-wide">Associated With</span>
            <div className="flex items-center gap-4">
               {/* Fallback to text if logos aren't there, since the user's image shows specific logos */}
               <div className="flex items-center gap-1">
                 <span className="font-bold text-green-700">Startup</span>
                 <span className="font-bold text-orange-500">India</span>
               </div>
               <div className="text-[11px] font-bold text-gray-600 text-center leading-tight">
                 DPIIT<br/>#startupindia
               </div>
               <div className="text-[12px] font-bold text-gray-800">
                 MSME
               </div>
               <div className="text-blue-700 font-bold text-[12px] flex items-center justify-center border border-blue-700 rounded-full w-8 h-8 text-center leading-tight">
                 ISO
               </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-10 flex-1 justify-between xl:justify-end w-full xl:w-auto">
            {/* Stat 1 */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center pt-4 md:pt-0">
              <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-xl shrink-0">🏢</span>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  <AnimatedNumber value={1000} suffix="+" />
                </span>
                <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Businesses Registered</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center pt-4 md:pt-0">
              <span className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-xl shrink-0">⭐</span>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  <AnimatedNumber value={2000} suffix="+" />
                </span>
                <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Happy Reviews</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-center pt-4 md:pt-0">
              <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center p-2 shrink-0">
                <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  <AnimatedNumber value={4.7} suffix="/5" isDecimal={true} />
                </span>
                <span className="text-[11px] text-gray-500 font-medium leading-tight mt-0.5">Google Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
