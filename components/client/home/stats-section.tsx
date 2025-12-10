"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      number: 5000,
      suffix: "+",
      label: "Legal Consultations",
    },
    {
      number: 1000,
      suffix: "+",
      label: "Documents Drafted",
    },
    {
      number: 100,
      suffix: "+",
      label: "Businesses Served",
    },
  ];

  // Custom hook to animate number
  function AnimatedNumber({ value }: { value: number }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000; 
      const increment = value / (duration / 16); 
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return <>{count.toLocaleString()}</>;
  }

  return (
    <section className="bg-primary py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-base sm:text-lg md:text-xl text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
