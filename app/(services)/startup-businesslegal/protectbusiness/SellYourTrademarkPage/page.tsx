"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  { icon: "shield", text: "Protection against Copycats: Even after selling, protection continues for the new owner" },
  { icon: "badgeIndianRupee", text: "Registered brand is a valuable asset that can be legally monetized" },
  { icon: "trendingUp", text: "Facilitates business expansion and growth for assignor or assignee" },
  { icon: "checkCircle", text: "Improves brand credibility through legally recorded ownership transfer" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Trademark Application / Registration Number",
  "Name of the transferor (current owner)",
  "Name of the transferee (new owner)",
  "Board Resolution (if either party is a company)",
  "Trademark Assignment Deed",
];

const deliverables = [
  "Documentation support and facilitation",
  "Trademark Registry filing receipt",
  "Screenshot of Assignment filing",
];

const sections = [
  {
    title: "Pre-Requisites for Trademark Assignment",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is Trademark Assignment?",
    a: "Trademark Assignment is the permanent transfer of ownership of a trademark from one person or company (Assignor) to another (Assignee). Like any other asset, a trademark can be sold for consideration.",
  },
  {
    q: "How do you sell a trademark?",
    a: "Selling a trademark does not mean selling the entire business. Ownership of a specific brand or logo is transferred by executing a Trademark Assignment Deed between the parties.",
  },
  {
    q: "What is a Trademark Assignment Deed?",
    a: "It is a legal agreement defining the terms of trademark transfer, including consideration amount, territory, and whether the transfer is with or without goodwill.",
  },
  {
    q: "What are the key clauses in an Assignment Deed?",
    a: "Key clauses include sale consideration, geographical usage rights, and whether goodwill is included. These directly affect stamp duty and enforceability.",
  },
  {
    q: "What is the difference between Trademark Licensing and Assignment?",
    a: "Licensing allows temporary usage rights while ownership remains unchanged. Assignment permanently transfers ownership to the new holder.",
  },
] satisfies FAQItem[];

/* ================================
   HERO WITH FREE ADD-ONS BANNER
================================ */

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);

  const addons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "Assignment\nDeed Support",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "TM Registry\nFiling Receipt",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      label: "Screenshot of\nAssignment Filing",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Legal Ownership\nTransfer",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Sell Your <span className="text-orange-300">Trademark</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legally transfer your trademark ownership and monetize your brand with a secure assignment process.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Trademark Assignment • Ownership Transfer
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,499
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              60% OFF
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 25 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
          </p>

          {/* Add-ons box */}
          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                      {addon.label}
                    </p>
                    {i < addons.length - 1 && (
                      <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">
                        +
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Facilitation Fees. Government Charges Extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function SellYourTrademarkPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Sell Your Trademark"
        subtitle="Legally transfer your trademark ownership and monetize your brand with a secure assignment process."
        badgeText="Trademark Assignment • Ownership Transfer"
        icon="badgeIndianRupee"
        serviceID="SELL_YOUR_TRADEMARK"
        contentTitle="Why Trademark Assignment Matters"
        contentDescription="A trademark is a valuable intellectual property asset. Through a legally valid assignment process, you can permanently transfer ownership, unlock financial value, and ensure the new owner receives full statutory protection."
        section1Title="Key Benefits of Selling a Trademark"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-orange-400/20",
          orb2: "bg-red-500/20",
          iconBg: "from-red-500 to-orange-400",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-red-500"
        primaryBg="bg-gradient-to-r from-red-500 to-orange-400"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-500"
      />
    </>
  );
}
