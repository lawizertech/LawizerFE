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
          <path d="M3 12h18M12 3v18" />
        </svg>
      ),
      label: "Presumptive\nComputation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M4 9h16" />
        </svg>
      ),
      label: "Turnover\nVerification",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Section 44AD /\n44ADA Compliance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "CA-Assisted\nFast Filing",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#78350f] via-[#f59e0b] to-[#7c2d12] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg inline-flex">
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
            ITR-4 <span className="text-yellow-200">(Sugam) Filing</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mb-2">
            Simplified income tax return for small businesses and professionals under the Presumptive Taxation Scheme.
          </p>

          <p className="text-sm mb-8 text-yellow-200">
            Section 44AD • 44ADA • 44AE • Small Business
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 699 – 1,399 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-200 text-xs sm:text-sm mb-8 tracking-wide">
            Simplified Compliance · Quick Filing · Expert Reviewed
          </p>

          {/* FREE ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(234,179,8,0.15)]">
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

          <p className="mt-4 text-slate-200 text-xs italic">
            *Final pricing depends on turnover and complexity of income disclosures.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                             ORIGINAL CONTENT                               */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "users", text: "Simple compliance under Presumptive Taxation" },
  { icon: "fileText", text: "No detailed books required" },
  { icon: "scale", text: "Lower compliance burden under 44AD/44ADA/44AE" },
  { icon: "gavel", text: "CA-assisted filing to avoid mistakes" },
] satisfies BenefitItem[];

const applicableTo = [
  "Resident Individuals, HUFs, or Firms (other than LLP)",
  "Total income up to ₹50 Lakh",
  "Opting for Presumptive Taxation Scheme",
  "Income from Salary / House Property allowed",
];

const documentsRequired = [
  "PAN & Aadhaar",
  "Form 26AS & AIS",
  "Bank statements for turnover",
  "Investment proofs",
];

const notApplicable = [
  "Income exceeding ₹50 Lakh",
  "Non-residents",
  "Directors in companies",
  "Excess capital gains",
];

const sections = [
  { title: "Who Should File ITR-4", icon: "users", type: "list", data: applicableTo },
  { title: "Documents Required", icon: "fileText", type: "list", data: documentsRequired },
  { title: "Who Cannot Use ITR-4", icon: "gavel", type: "grid", data: notApplicable },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is Presumptive Taxation?",
    a: "It allows eligible taxpayers to declare income at a fixed percentage without maintaining books.",
  },
  {
    q: "Who can file ITR-4?",
    a: "Resident Individuals, HUFs, or Firms (other than LLP) opting for presumptive taxation.",
  },
  {
    q: "Can LLP file ITR-4?",
    a: "No, LLP must file ITR-5.",
  },
  {
    q: "Are bank statements required?",
    a: "Yes, to determine turnover and presumptive income.",
  },
] satisfies FAQItem[];

export default function ITR4Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="ITR-4 (Sugam) Filing"
        subtitle="Simplified return for small businesses under Presumptive Taxation."
        badgeText="Presumptive Tax • Small Business • Fast Filing"
        icon="users"
        serviceID="ITR-4_FILING"
        contentTitle="Who Should File ITR-4?"
        contentDescription="ITR-4 is ideal for small businesses and professionals opting for presumptive taxation."
        section1Title="Key Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-yellow-500/20",
          orb2: "bg-orange-500/20",
          iconBg: "from-yellow-500 to-orange-500",
          badgeText: "text-yellow-300",
        }}
        primaryColor="text-yellow-600"
        primaryBg="bg-gradient-to-r from-yellow-600 to-orange-600"
        primaryHoverBg="bg-gradient-to-r from-yellow-700 to-orange-700"
      />
    </>
  );
}
