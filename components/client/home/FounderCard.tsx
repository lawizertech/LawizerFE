"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { ArchImage } from "./ArchImage";
import { FOUNDER, CONSULTATION_PRICE, CONSULTATION_DURATION_MIN } from "@/lib/consultation-config";

export function FounderCard() {
  const showPrice = CONSULTATION_PRICE > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className="relative w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#e4e8f0] pt-16 md:pt-8"
    >
      {/* Top section with Image + Text */}
      <div className="flex flex-col md:flex-row px-6 md:px-10 gap-6 md:gap-10 items-center md:items-start relative z-10">
        
        {/* Arch Image - pops out of top on mobile, sits flush on bottom divider */}
        <div className="md:mt-0 md:-mb-1 -mt-28 flex-shrink-0">
          <ArchImage 
            src={FOUNDER.image} 
            alt={FOUNDER.name} 
          />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left md:pt-4 pb-8 md:pb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-sm font-extrabold tracking-[0.15em] text-[var(--text-muted)] uppercase mb-2">
              Talk to the <span className="text-[var(--brand)] highlight">Founder</span>
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-[family-name:var(--font-head)] leading-tight mb-1">
              {FOUNDER.name}
            </h3>
            <p className="text-[13px] font-semibold text-[var(--text-secondary)] uppercase tracking-wide">
              {FOUNDER.role} <span className="mx-1.5 opacity-50">•</span> {FOUNDER.secondaryRole}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="w-full max-w-md mx-auto md:mx-0 space-y-2.5"
          >
            <div className="h-px bg-gray-200 w-full rounded" />
            <p className="text-[15px] leading-relaxed font-medium text-[var(--text-secondary)]">
              An hour with the mind behind Lawizer. Bring your startup idea or legal question and get honest, practical advice from someone who has built it himself.
            </p>
            <div className="h-px bg-gray-200 w-full rounded" />
            
            {showPrice && (
              <p className="text-sm font-semibold text-[var(--brand)] mt-2">
                ₹{CONSULTATION_PRICE} <span className="text-[var(--text-muted)] font-medium mx-1">•</span> {CONSULTATION_DURATION_MIN}-min video call
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer Band */}
      <div className="border-t border-[#e4e8f0] bg-[var(--bg-soft)] rounded-b-3xl px-6 py-6 md:py-8 flex flex-col items-center justify-center relative z-0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full max-w-xs space-y-3"
        >
          <Link
            href="/free-consultation"
            className="btn-hero w-full justify-center group flex items-center gap-2"
          >
            Book Your Slot
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-[var(--brand)] bg-[rgba(202,45,66,0.06)] border border-[rgba(202,45,66,0.2)] rounded-full px-3 py-1.5 shadow-2xs">
            <Flame size={13} className="text-[var(--brand)] animate-bounce shrink-0" />
            <span>2/5 slots left · Hurry up and book now!</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
