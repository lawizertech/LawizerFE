"use client";

import { motion } from "framer-motion";

export function CommentsSection() {
  const comments = [
    {
      name: "Rahul Verma",
      role: "Founder, TechNova",
      comment: "Lawizer made my company registration so easy! Got my incorporation certificate in just a week without stepping out.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      role: "E-commerce Seller",
      comment: "GST registration was a breeze. Their support team was available on WhatsApp and helped me through every step.",
      rating: 5,
    },
    {
      name: "Amit Desai",
      role: "CEO, Desai Foods",
      comment: "Filed my trademark through them. Very transparent pricing and excellent dashboard to track progress.",
      rating: 5,
    },
    {
      name: "Sneha Patel",
      role: "Freelance Designer",
      comment: "I used Lawizer for my ITR filing. The CA assigned to me was very knowledgeable and saved me a lot of tax.",
      rating: 5,
    }
  ];

  return (
    <section className="bg-gray-50 py-6 md:py-8 overflow-hidden border-b border-gray-100">
      <div className="w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex overflow-hidden"
        >
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
          >
            {[...comments, ...comments, ...comments, ...comments].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[300px] w-[300px] sm:min-w-[350px] sm:w-[350px] flex-shrink-0 mr-6"
              >
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm italic mb-4 leading-relaxed">"{item.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
