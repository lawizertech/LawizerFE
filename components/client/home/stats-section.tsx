"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export function StatsSection() {
  const stats = [
    {
      number: 10000,
      suffix: "+",
      label: "Businesses Registered",
    },
    {
      number: 20000,
      suffix: "+",
      label: "Happy Reviews",
    },
    {
      number: 4.5,
      suffix: "/5",
      label: "Google Rating",
    },
  ];

  function AnimatedNumber({ value }: { value: number }) {
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
          setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
      } else {
        setCount(0); // Reset when out of view
      }
    }, [value, isInView]);

    return <span ref={ref}>{count.toLocaleString()}</span>;
  }

  return (
        <section className="bg-primary py-6 sm:py-8 lg:py-10 px-4 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex flex-wrap gap-4 justify-center">


          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="flex-1 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">
                <AnimatedNumber value={stat.number} />
                {stat.suffix}
              </div>
              <div className="text-sm sm:text-base text-white/90">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
