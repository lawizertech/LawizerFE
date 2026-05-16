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
          <path d="M9 12h6M9 16h6M9 8h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "CA-Assisted\nFiling",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Accurate &\nCompliant",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M3 12h18M12 3v18" />
        </svg>
      ),
      label: "Tax Saving\nGuidance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 17l4 4 4-4M12 12v9M4 4h16v6H4z" />
        </svg>
      ),
      label: "Quick Online\nProcess",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#052e16] via-[#065f46] to-[#022c22] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 3v18M3 12h18" />
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
            ITR-1 <span className="text-teal-300">(Sahaj) Filing</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            For salaried individuals with income up to ₹50 Lakh — simple, fast, and accurate filing.
          </p>

          <p className="text-sm mb-8 text-teal-300">
            Salary Income • One House Property • Interest Income
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 499 - 799 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Expert Filing · Error-Free · Notice Protection
          </p>

          {/* FREE ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(16,185,129,0.15)]">
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
            *Final pricing depends on complexity of deductions and income details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               ORIGINAL CONTENT                             */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "users", text: "For resident individuals with income primarily from salary and one house property" },
  { icon: "checkCircle", text: "Applicable where total income does not exceed ₹50 Lakh" },
  { icon: "fileText", text: "Income computed based on Form 16, AIS, and Form 26AS" },
  { icon: "shield", text: "Filed accurately by professionals to ensure compliance" },
] satisfies BenefitItem[];

const applicableTo = [
  "Resident Individual with Total Income up to ₹50 Lakh",
  "Income from Salary or Pension",
  "Income from One House Property",
  "Income from Other Sources (Interest)",
  "Agricultural Income up to ₹5,000",
];

const documentsNeeded = [
  "PAN & Aadhaar",
  "Form 16",
  "Form 26AS & AIS",
  "Interest Certificates",
  "Investment Proofs (80C, 80D)",
];

const notApplicable = [
  "Non-residents (NR/NOR)",
  "More than one house property",
  "Capital gains or business income",
  "Director in company / unlisted equity holder",
];

const sections = [
  { title: "Applicable To", icon: "checkCircle", type: "list", data: applicableTo },
  { title: "Documents Needed", icon: "fileText", type: "list", data: documentsNeeded },
  { title: "Not Applicable To", icon: "home", type: "list", data: notApplicable },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "Who is eligible for ITR-1?",
    a: "Resident Individuals with total income up to ₹50 Lakh and simple income structure.",
  },
  {
    q: "What is the income limit?",
    a: "Total income must not exceed ₹50 Lakh.",
  },
  {
    q: "Can I file if I have two properties?",
    a: "No, you must file ITR-2 instead.",
  },
  {
    q: "Is Form 16 required?",
    a: "Yes, along with PAN, Aadhaar, and investment proofs.",
  },
] satisfies FAQItem[];

export default function ITR1Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="ITR-1 (Sahaj) Filing"
        subtitle="For salaried individuals with simple income structure."
        badgeText="CA-assisted • Fast • Accurate"
        icon="users"
        serviceID="ITR_1_FILLING"
        contentTitle="Who Should File ITR-1?"
        contentDescription="ITR-1 is for salaried individuals and pensioners with total income up to ₹50 Lakh."
        section1Title="Key Highlights"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-green-500/20",
          orb2: "bg-teal-500/20",
          iconBg: "from-green-500 to-teal-500",
          badgeText: "text-teal-300",
        }}
        primaryColor="text-green-600"
        primaryBg="bg-gradient-to-r from-green-600 to-teal-600"
        primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-700"
      />
    </>
  );
}