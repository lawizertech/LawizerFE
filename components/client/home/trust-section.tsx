"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TrustSection() {
  const companies = [
    { name: "PhonePe", logo: "/logos/PhonePe.png" },
    { name: "Razorpay", logo: "/logos/Razorpay.svg" },
    {
      name: "Startup India",
      render: () => (
        <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-50 to-orange-50/50 border border-emerald-100/40 rounded-xl px-4 py-2 hover:border-emerald-250 transition-colors select-none">
          <span className="font-extrabold text-[12px] uppercase tracking-wider text-emerald-600">Startup</span>
          <span className="font-extrabold text-[12px] uppercase tracking-wider text-orange-500">India</span>
        </div>
      )
    },
    { name: "Snitch", logo: "/logos/Snitch.png" },
    { name: "Man Matters", logo: "/logos/ManMatters.png" },
    { name: "Tata Steel", logo: "/logos/TataSteel.png" },
    { name: "TCS", logo: "/logos/TCS.png" },
    { name: "Zomato", logo: "/logos/Zomato.webp" },
    { name: "CESC", logo: "/logos/CESC.svg" },
    { name: "Physics Wallah", logo: "/logos/PhysicsWallah.svg" },
    { name: "Bharat Petroleum", logo: "/logos/bharat_petroleum.png" },
    { name: "ONGC", logo: "/logos/ongc.png" },
    {
      name: "Make in India",
      render: () => (
        <div className="bg-slate-900 border border-slate-800 text-white font-extrabold text-[11px] uppercase tracking-[0.08em] rounded-xl px-4 py-2 hover:bg-black transition-colors select-none flex items-center gap-1.5 shrink-0">
          <span>🇮🇳</span>
          <span>MAKE IN INDIA</span>
        </div>
      )
    }
  ];

  const logos = [...companies, ...companies, ...companies]; // Tripled for extra smooth continuous loop

  return (
    <section className="bg-white py-4 sm:py-6 lg:py-8 overflow-hidden">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6">
        
        {/* Header Label */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] m-0">
            Associated <span className="text-brand-red">With</span>
          </h3>
        </div>

        {/* Marquee Wrapper with Fade Gradients */}
        <div className="relative w-full overflow-hidden">
          {/* Left fading edge */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          
          {/* Right fading edge */}
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <motion.div
            className="flex gap-4 sm:gap-6 whitespace-nowrap w-max"
            animate={{ x: ["-33.33%", "0%"] }} // Adjusted animation offset for tripled list
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {logos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8 py-5 bg-slate-50/50 hover:bg-white border border-slate-100/50 rounded-2xl hover:shadow-[0_8px_20px_rgba(0,0,0,0.03)] transition-all duration-300 w-44 h-20 shrink-0 group cursor-default"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {company.render ? (
                    company.render()
                  ) : (
                    <Image
                      src={company.logo!}
                      alt={company.name}
                      width={110}
                      height={50}
                      className="object-contain max-h-11 max-w-[120px] opacity-80 hover:opacity-100 group-hover:scale-105 transition-all duration-200"
                    />
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
