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
      label: "Balance Sheet\nReporting",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M4 4h16v16H4z" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      ),
      label: "P&L Statement\nDisclosure",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Audit\nCompliance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "CA-Assisted\nFiling",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#7c2d12] via-[#ea580c] to-[#991b1b] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg inline-flex">
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
            ITR-3 <span className="text-orange-200">Filing</span>
          </h1>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mb-2">
            For individuals & HUFs with business or professional income.
          </p>

          <p className="text-sm mb-8 text-orange-200">
            Business Income • Audit Ready • Professional Filing
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,199 – 1,999 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-200 text-xs sm:text-sm mb-8 tracking-wide">
            Detailed Reporting · Audit Compliance · Expert Handling
          </p>

          {/* FREE ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(249,115,22,0.15)]">
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
            *Final pricing depends on turnover, audit requirements, and complexity.
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
  { icon: "trendingUp", text: "Mandatory for business or professional income" },
  { icon: "fileText", text: "Accurate Balance Sheet & P&L reporting" },
  { icon: "scale", text: "Compliant with Income Tax Act & Section 44AB" },
  { icon: "gavel", text: "Expert handling of complex income structures" },
] satisfies BenefitItem[];

const applicableTo = [
  "Individuals or HUFs with Proprietary Business or Profession",
  "Partners receiving remuneration or interest",
  "Business income with capital gains/salary",
  "Entrepreneurs and professionals",
];

const documentsRequired = [
  "ITR-2 documents",
  "Books of Accounts",
  "Balance Sheet & P&L",
  "Tax Audit Report (if applicable)",
  "Business bank statements",
];

const sections = [
  { title: "Who Should File ITR-3", icon: "users", type: "list", data: applicableTo },
  { title: "Documents Required", icon: "fileText", type: "list", data: documentsRequired },
  {
    title: "Why Expert Assistance Matters",
    icon: "gavel",
    type: "grid",
    data: [
      "Mandatory financial disclosures",
      "Higher scrutiny by IT Department",
      "Audit compliance under 44AB",
      "Penalty avoidance through accuracy",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "Who must file ITR-3?",
    a: "Individuals or HUFs with business or professional income.",
  },
  {
    q: "Can partners file ITR-3?",
    a: "Yes, partners receiving remuneration or interest must file ITR-3.",
  },
  {
    q: "Is ITR-3 required with capital gains?",
    a: "Yes, once business income exists, ITR-3 becomes mandatory.",
  },
  {
    q: "Is CA assistance recommended?",
    a: "Yes, due to complexity and audit requirements.",
  },
] satisfies FAQItem[];

export default function ITR3Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="ITR-3 Filing"
        subtitle="For individuals & HUFs with business or professional income."
        badgeText="Business Income • Audit Ready • CA Assisted"
        icon="trendingUp"
        serviceID="ITR-3_FILING"
        contentTitle="Who Should File ITR-3?"
        contentDescription="ITR-3 applies to entrepreneurs and professionals requiring detailed financial disclosures."
        section1Title="Key Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-orange-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-orange-500 to-red-500",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-orange-600"
        primaryBg="bg-gradient-to-r from-orange-600 to-red-600"
        primaryHoverBg="bg-gradient-to-r from-orange-700 to-red-700"
      />
    </>
  );
}
