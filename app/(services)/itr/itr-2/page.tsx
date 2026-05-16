"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* -------------------------------------------------------------------------- */
/*                                   HERO                                     */
/* -------------------------------------------------------------------------- */

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);

  const addons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 3v18M3 12h18" />
        </svg>
      ),
      label: "Capital Gains\nComputation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M4 4h16v16H4z" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      ),
      label: "Foreign Asset\nDisclosure",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "Detailed\nIncome Reporting",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Notice &\nScrutiny Protection",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#4c1d95] to-[#2e1065] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M3 12h18M12 3v18" />
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
            ITR-2 <span className="text-purple-300">Filing</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            For individuals & HUFs with capital gains, foreign assets, or multiple properties.
          </p>

          <p className="text-sm mb-8 text-purple-300">
            Capital Gains • Foreign Income • High-Income Taxpayers
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 799 - 1,299 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Accurate Disclosure · Compliance Assured · Expert Handling
          </p>

          {/* FREE ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(124,58,237,0.15)]">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>

            <div className="py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line text-center">
                      {addon.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Final pricing depends on number of transactions and foreign disclosures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                            ORIGINAL CONTENT                                */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "badgeIndianRupee", text: "Ideal for capital gains & foreign asset holders" },
  { icon: "fileText", text: "Handles multiple properties & investments" },
  { icon: "scale", text: "Ensures compliance with Income Tax rules" },
  { icon: "shield", text: "Avoids notices with accurate disclosures" },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Who Should File ITR-2",
    icon: "checkCircle",
    type: "list",
    data: [
      "Individuals or HUFs not eligible for ITR-1",
      "No business income",
      "Income exceeding ₹50 lakh",
      "Multiple house properties",
      "Capital gains income",
      "Foreign assets or foreign income",
      "Director in company or unlisted equity holder",
    ],
  },
  {
    title: "Key Documents Required",
    icon: "fileText",
    type: "list",
    data: [
      "ITR-1 documents",
      "Capital gains statements",
      "Foreign asset details",
      "Rental income statements",
    ],
  },
  {
    title: "Important Exclusion",
    icon: "scale",
    type: "grid",
    data: [
      "Cannot file if business income exists",
      "Business income requires ITR-3",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "Who should file ITR-2?",
    a: "Individuals or HUFs with capital gains, foreign income, or multiple properties.",
  },
  {
    q: "If I sell shares, which ITR applies?",
    a: "ITR-2 must be filed for capital gains income.",
  },
  {
    q: "Can a company director file ITR-2?",
    a: "Yes, if no business income exists.",
  },
  {
    q: "What extra documents are needed?",
    a: "Capital gains, foreign asset disclosures, and multiple property details.",
  },
] satisfies FAQItem[];

export default function ITR2Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="ITR-2 Filing"
        subtitle="For individuals & HUFs with complex income structures."
        badgeText="Capital gains • Foreign assets • High-income"
        icon="badgeIndianRupee"
        serviceID="ITR-2_FILING"
        contentTitle="When Is ITR-2 Applicable?"
        contentDescription="ITR-2 applies to taxpayers with capital gains, foreign income, or multiple house properties."
        section1Title="Why Choose Professional Filing"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-indigo-500/20",
          orb2: "bg-purple-500/20",
          iconBg: "from-indigo-500 to-purple-500",
          badgeText: "text-purple-300",
        }}
        primaryColor="text-indigo-600"
        primaryBg="bg-gradient-to-r from-indigo-600 to-purple-600"
        primaryHoverBg="bg-gradient-to-r from-indigo-700 to-purple-700"
      />
    </>
  );
}