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

  // Duplicate logos for seamless looping
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
              duration: 20,
              repeat: Infinity,
            }}
          >
            {logos.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[150px] h-16 bg-gray-50 rounded-xl shadow-sm 
                grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={50}
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
