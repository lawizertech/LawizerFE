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
          <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h6M9 13h6M9 17h6"/>
        </svg>
      ),
      label: "Professionally Drafted\nLease Agreement",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Business Risk\nProtection",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Clause-wise\nExplanation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Registration\nGuidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1a1033] via-[#4c1d95] to-[#1e1b4b] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M3 21h18M5 21V7l8-4 8 4v14"/>
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
            Commercial Lease <span className="text-purple-300">Agreement Drafting</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legally define the terms for your office, shop, or warehouse lease with professional drafting.
          </p>

          <p className="text-sm mb-8 text-purple-300">
            Business Protection • Legal Compliance • Secure Tenancy
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹5,499
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(147,51,234,0.15)]">
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
            *Final pricing depends on lease complexity and customization.
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
  { icon: "shield", text: "Defines landlord and tenant rights clearly." },
  { icon: "users", text: "Avoids disputes on rent, deposits, and maintenance." },
  { icon: "scale", text: "Ensures compliance with West Bengal regulations." },
  { icon: "gavel", text: "Acts as legal proof in court or tribunals." },
  { icon: "fileText", text: "Customizable business-specific clauses." },
  { icon: "building", text: "Protects long-term business investments." },
] satisfies BenefitItem[];

const prerequisites = [
  "Landlord details (name, address, PAN)",
  "Tenant business details (registration, PAN)",
  "Commercial property details (location, size)",
  "Lease terms (rent, deposit, duration)",
  "Optional clauses (signage, sublease, utilities)",
];

const deliverables = [
  "Customized Commercial Lease Agreement",
  "Clause-wise explanation",
  "Digital editable copy",
  "Registration guidance (if required)",
  "Expert legal consultation",
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
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is a Commercial Lease Agreement?",
    a: "It defines the legal relationship between landlord and tenant for commercial property.",
  },
  {
    q: "How is it different from residential rent?",
    a: "Commercial leases include business-specific clauses and are more complex.",
  },
  {
    q: "Why choose Lawizer?",
    a: "Specialized drafting tailored to West Bengal commercial property laws.",
  },
  {
    q: "Does it cover renewal and exit?",
    a: "Yes, renewal, exit clauses, and maintenance are clearly defined.",
  },
  {
    q: "Is registration mandatory?",
    a: "Depends on duration and local laws; Lawizer guides compliance.",
  },
] satisfies FAQItem[];

export default function CommercialLeaseAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Commercial Lease Agreement Drafting"
        subtitle="Legally define the terms for your commercial property lease."
        badgeText="Lawizer ensures your commercial lease is compliant and enforceable."
        icon="building"
        serviceID="COMMERCIAL_LEASE_AGREEMENT_DRAFTING"
        contentTitle="Why a Proper Commercial Lease Agreement Is Important"
        contentDescription="A professionally drafted agreement protects both landlord and tenant and secures long-term business interests."
        section1Title="Key Protections and Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-purple-500/20",
          orb2: "bg-indigo-500/20",
          iconBg: "from-purple-500 to-indigo-500",
          badgeText: "text-purple-300",
        }}
        primaryColor="text-purple-600"
        primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
        primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
      />
    </>
  );
}
