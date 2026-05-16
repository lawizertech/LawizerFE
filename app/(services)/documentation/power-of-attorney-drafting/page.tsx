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
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"/>
        </svg>
      ),
      label: "Legally Compliant\nDrafted POA",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Clearly Defined\nPowers & Limits",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Clause-wise\nExplanation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Notarization &\nRegistration Guidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1c0f0a] via-[#92400e] to-[#451a03] text-white px-4 sm:px-6"
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
              <path d="M6 3h12l3 6-9 12L3 9l3-6z"/>
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
            Power of Attorney <span className="text-yellow-300">Drafting</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Authorize a trusted person to legally act on your behalf in financial, property, or legal matters.
          </p>

          <p className="text-sm mb-8 text-yellow-300">
            Legal Authority • Risk Protection • Compliance Assured
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,499
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Customized Drafting · Legal Clarity · Registration Guidance
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(234,179,8,0.15)]">
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
            *Final pricing depends on scope of powers and customization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               PAGE CONTENT                                 */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "users", text: "Authorizes another person to legally act on your behalf." },
  { icon: "shield", text: "Protects your interests in transactions." },
  { icon: "scale", text: "Prevents misuse by defining clear limitations." },
  { icon: "home", text: "Ensures validity under local laws." },
  { icon: "fileText", text: "Professionally drafted document outlining powers." },
] satisfies BenefitItem[];

const prerequisites = [
  "Principal and attorney details with ID proofs",
  "Scope of powers (general or specific)",
  "Property or asset details (if applicable)",
];

const deliverables = [
  "Legally compliant POA document",
  "Clause-wise explanation",
  "Digital copy with notarization guidance",
];

const sections = [
  {
    title: "Information Required for Drafting",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What Lawizer Delivers",
    icon: "home",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is a Power of Attorney?",
    a: "A legal document authorizing someone to act on your behalf.",
  },
  {
    q: "Why is POA important for property?",
    a: "It allows execution of transactions when principal is absent.",
  },
  {
    q: "Difference between General and Special POA?",
    a: "General grants broad powers; Special limits to specific acts.",
  },
  {
    q: "Is registration necessary?",
    a: "Registered POA is legally enforceable and widely accepted.",
  },
  {
    q: "What details are required?",
    a: "Principal & attorney details with specific powers granted.",
  },
] satisfies FAQItem[];

export default function PowerOfAttorneyDraftingPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Power of Attorney (POA) Drafting"
        subtitle="A legally binding document authorizing someone to act on your behalf."
        badgeText="Lawizer drafts your POA with full legal clarity and compliance."
        icon="gavel"
        serviceID="POWER_OF_ATTORNEY_DRAFTING"
        contentTitle="Why a Properly Drafted POA Is Essential"
        contentDescription="A professionally drafted POA defines authority clearly, prevents misuse, and ensures enforceability."
        section1Title="Key Protections and Benefits"
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
        primaryBg="bg-gradient-to-r from-yellow-500 to-orange-500"
        primaryHoverBg="bg-gradient-to-r from-yellow-600 to-orange-600"
      />
    </>
  );
}