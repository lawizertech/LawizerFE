"use client";

import { motion } from "framer-motion";
import { PhoneCall, Calendar } from "lucide-react";
import Link from "next/link";

export function TalkToFounderSection() {
  return (
    <section className="py-6 sm:py-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          
          {/* Founder Image / Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-brand-red blur-2xl opacity-20 rounded-full"></div>
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/founder.jpeg" 
                alt="Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-full shadow-lg">
              <div className="bg-green-100 text-green-700 p-2 rounded-full">
                <PhoneCall size={20} />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3"
            >
              Talk directly to the <span className="text-brand-red">Founder</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6"
            >
              Starting a business can be overwhelming. Let's get on a quick call to discuss your vision, address your legal concerns, and map out the right structure for your startup. No commitments, just honest advice from someone who's been there.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
            >
              <Link 
                href="/free-consultation"
                className="flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
              >
                <Calendar size={18} />
                Book Consultation (₹4,999)
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
