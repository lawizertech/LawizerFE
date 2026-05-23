"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TrustSection() {
  const companies = [
    { name: "PhonePe", logo: "/logos/PhonePe.png" },
    { name: "Razorpay", logo: "/logos/Razorpay.svg" },
    { name: "Switch", logo: "/logos/Snitch.png" },
    { name: "Man Matters", logo: "/logos/ManMatters.png" },
    { name: "Tata Steel", logo: "/logos/TataSteel.png" },
    { name: "TCS", logo: "/logos/TCS.png" },
    { name: "Zomato", logo: "/logos/Zomato.webp" },
    { name: "CESC", logo: "/logos/CESC.svg" },
  ];

  const logos = [...companies, ...companies];

  return (
    <section className="bg-white py-6 sm:py-8 lg:py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-base sm:text-lg lg:text-xl font-bold text-gray-600 mb-4 sm:mb-6 uppercase tracking-wide">
          Associated <span style={{ color: "var(--brand)" }}>with</span>
        </h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {logos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[50px] lg:min-w-[80px] h-8 sm:h-10 md:h-12 bg-gray-50 rounded-xl shadow-sm grayscale-0 opacity-100 transition-all"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={40}
                  className="object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
