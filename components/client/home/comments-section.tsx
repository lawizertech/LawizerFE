"use client";

import { motion } from "framer-motion";

/* ── Avatar color palette matching the reference ── */
const AVATAR_COLORS = [
  { bg: "bg-pink-500", text: "text-white" },
  { bg: "bg-blue-600", text: "text-white" },
  { bg: "bg-purple-500", text: "text-white" },
  { bg: "bg-emerald-500", text: "text-white" },
  { bg: "bg-amber-500", text: "text-white" },
  { bg: "bg-indigo-500", text: "text-white" },
  { bg: "bg-rose-500", text: "text-white" },
  { bg: "bg-teal-500", text: "text-white" },
];

const comments = [
  {
    name: "Saurabh Gupta",
    initials: "S",
    role: "Founder, TechNova",
    comment: "Very helpful and systematic way of doing things. Company registration was completed smoothly.",
    rating: 5,
  },
  {
    name: "Mohit Jain",
    initials: "M",
    role: "E-commerce Seller",
    comment: "The team providing best customer support with best overall experience. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vinay Kumar",
    initials: "V",
    role: "Startup Founder",
    comment: "Trademark registration filing was great. Thank you! The process was completely hassle-free.",
    rating: 5,
  },
  {
    name: "Kumary Shanky G S",
    initials: "K",
    role: "Business Owner",
    comment: "Excellent service. Thank you so much Lawizer. Got my GST registration done in just 3 days.",
    rating: 5,
  },
  {
    name: "Seema Patel",
    initials: "S",
    role: "Freelance Designer",
    comment: "Good communication, good process. I am very satisfied with the ITR filing service.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    initials: "R",
    role: "CEO, Verma Foods",
    comment: "Lawizer made my company registration so easy! Got my incorporation certificate in just a week.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    initials: "P",
    role: "E-commerce Seller",
    comment: "GST registration was a breeze. Their support team was available on WhatsApp at every step.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    initials: "A",
    role: "CEO, Desai Foods",
    comment: "Filed my trademark through them. Very transparent pricing and excellent dashboard to track progress.",
    rating: 5,
  },
];

export function CommentsSection() {
  return (
    <section className="bg-gray-50/80 py-3 md:py-4 overflow-hidden border-b border-gray-100">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex overflow-hidden"
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-gray-50/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          >
            {[...comments, ...comments, ...comments, ...comments].map((item, index) => {
              const colorIdx = index % AVATAR_COLORS.length;
              const avatarColor = AVATAR_COLORS[colorIdx];

              return (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 min-w-[290px] w-[290px] sm:min-w-[320px] sm:w-[320px] flex-shrink-0 mr-4 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow duration-300 flex flex-col"
                >
                  {/* Header: Avatar + Name + Stars */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Colored Avatar Initial */}
                    <div className={`w-10 h-10 rounded-full ${avatarColor.bg} ${avatarColor.text} flex items-center justify-center font-bold text-[16px] shrink-0 shadow-sm`}>
                      {item.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-[13px] leading-snug truncate">{item.name}</h4>
                      {/* Star rating */}
                      <div className="flex items-center gap-1 mt-0.5">
                        <div className="flex text-yellow-400">
                          {[...Array(item.rating)].map((_, i) => (
                            <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment text */}
                  <p className="text-gray-600 text-[13px] leading-relaxed flex-1">
                    <span className="text-brand-red font-bold mr-0.5">❝</span>
                    {item.comment}
                  </p>

                  {/* Footer: Role */}
                  <div className="mt-3 pt-3 border-t border-gray-50">
                    <p className="text-[11px] text-gray-400 font-medium">{item.role}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
