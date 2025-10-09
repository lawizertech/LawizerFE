"use client";

import { motion } from "framer-motion";

export function TrustSection() {
  const companies = [
    "TechCorp",
    "StartupHub",
    "GlobalTrade",
    "InnovateLabs",
    "FinanceFirst",
    "PropertyPro",
    "MediaGroup",
    "RetailCo",
  ];

  // Duplicate the array so it loops seamlessly
  const logos = [...companies, ...companies];

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-600 mb-12 uppercase tracking-wide">
          Trusted by thousands of clients
        </h2>

        {/* Scrolling container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20, // speed of the slide (lower = faster)
              repeat: Infinity,
            }}
          >
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-16 bg-gray-50 rounded-xl shadow-sm 
                grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <span className="text-lg font-semibold text-gray-500">
                  {logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
