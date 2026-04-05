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
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
        </svg>
      ),
      label: "Detailed Legal\nOpinion",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Government Record\nVerification",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <path d="M2 9l10 6 10-6"/>
        </svg>
      ),
      label: "RERA Compliance\nCheck",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Post-Report\nConsultation",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0b1120] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M3 12l9-9 9 9"/>
              <path d="M9 21V9h6v12"/>
            </svg>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Verified <span className="text-blue-300">Property Report</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Make every property deal safe and stress-free with Lawizer’s comprehensive property verification.
          </p>

          <p className="text-sm mb-8 text-blue-300">
            Legal clarity • Ownership Verification • Government Cross-Check
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Delivery: Within 5 Days · Senior Property Lawyers · Online Process
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(79,70,229,0.15)]">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>

            <div className="py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                      {addon.label}
                    </p>
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

/* -------------------------------------------------------------------------- */
/*                                PAGE CONTENT                                */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "shield", text: "A safe investment in property with clear legal ownership." },
  { icon: "checkCircle", text: "Eliminates fear of hidden litigation, loans, or encumbrances." },
  { icon: "clock", text: "Peace of mind with complete verification from home." },
  { icon: "users", text: "Enables you to transact with complete confidence." },
] satisfies BenefitItem[];

const processSteps = [
  "Upload or email all property documents, or request doorstep pickup.",
  "Senior property lawyers review all documents (200–300 pages).",
  "Verification with government records wherever required.",
  "Establish continuity of property paper trail.",
  "Detailed property verification report is prepared.",
  "Dedicated consultation slot after report delivery.",
  "Entire process completed within 5 days.",
];

const sections = [
  {
    title: "The Property Verification Process",
    icon: "clock",
    type: "list",
    data: processSteps,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What does the Property Report uncover?",
    a: "Ownership records, title clarity, encumbrances, government approvals, RERA compliance, and pending disputes.",
  },
  {
    q: "Why is the process thorough?",
    a: "Prepared by senior lawyers with government cross-verification ensuring complete paper trail.",
  },
  {
    q: "How long does it take?",
    a: "The full verification process is completed within 5 days.",
  },
  {
    q: "Is consultation included?",
    a: "Yes, a dedicated consultation session is included.",
  },
  {
    q: "Does it check RERA?",
    a: "Yes, RERA approval and compliance are verified.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                  EXPORT                                    */
/* -------------------------------------------------------------------------- */

export default function PropertyReportPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Verified Property Report"
        subtitle="Make every property deal safe and stress-free with Lawizer’s comprehensive Verified Property Report."
        badgeText="Lawizer — Legal clarity for every property."
        icon="home"
        serviceID="VERIFIED_PROPERTY_REPORT"
        contentTitle="Why You Need a Property Search Report"
        contentDescription="A Verified Property Report gives you complete visibility into ownership history, title clarity, encumbrances, approvals, and disputes. This legal due diligence protects you from fraud and costly mistakes."
        section1Title="Key Benefits of a Verified Property Report"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-indigo-500/20",
          orb2: "bg-blue-500/20",
          iconBg: "from-indigo-500 to-blue-500",
          badgeText: "text-blue-300",
        }}
        primaryColor="text-indigo-600"
        primaryBg="bg-gradient-to-r from-indigo-600 to-blue-600"
        primaryHoverBg="bg-gradient-to-r from-indigo-700 to-blue-700"
      />
    </>
  );
}