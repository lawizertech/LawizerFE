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
      label: "Stamp Duty\nGuidance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Registered POA\nDocument",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Step-by-Step\nProcess Support",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Legal Validity\nAssurance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#0b1120] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M6 3h12l3 6-9 12L3 9l3-6z"/>
            </svg>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Registration of <span className="text-blue-300">Power of Attorney</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Ensure your Power of Attorney is legally enforceable and valid for property and financial matters.
          </p>

          <p className="text-sm mb-8 text-blue-300">
            Legal Recognition • Property Validity • Government Acceptance
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹4,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            3–5 Days &nbsp;·&nbsp; Expert Guidance &nbsp;·&nbsp; Full Legal Support
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(99,102,241,0.15)]">
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
            *Final pricing depends on state stamp duty and complexity of authority granted.
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
  { icon: "gavel", text: "A registered POA is legally enforceable and accepted by institutions." },
  { icon: "shield", text: "Guidance through West Bengal registration requirements." },
  { icon: "users", text: "Prevents disputes by establishing validity of granted power." },
] satisfies BenefitItem[];

const deliverables = [
  "Guidance on stamp duty & registration",
  "Registered POA document",
  "Step-by-step process support",
];

const sections = [
  {
    title: "Lawizer Deliverables",
    icon: "fileText",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "Why is registering a POA necessary?",
    a: "Registration ensures enforceability and acceptance by institutions.",
  },
  {
    q: "Is registration mandatory for property matters?",
    a: "Yes, registration is generally required for immovable property transactions.",
  },
  {
    q: "What does Lawizer provide?",
    a: "Stamp duty guidance and complete registration process support.",
  },
  {
    q: "How does Sub-Registrar verify POA?",
    a: "Identity verification and authentication during registration.",
  },
  {
    q: "Can overseas POA be registered?",
    a: "Yes, after embassy authentication and local stamping.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function PowerOfAttorneyRegistrationPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Registration of Power of Attorney (POA)"
        subtitle="Ensure your Power of Attorney is legally enforceable and valid for property and financial matters."
        badgeText="Lawizer guides you through West Bengal registration requirements."
        icon="gavel"
        serviceID="REGISTRATION_OF_POWER_OF_ATTORNEY"
        contentTitle="Why POA Registration is Mandatory for Property"
        contentDescription="Registration converts the POA into a public record, ensuring authenticity and preventing legal challenges."
        section1Title="Key Benefits of Lawizer's POA Registration Support"
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
