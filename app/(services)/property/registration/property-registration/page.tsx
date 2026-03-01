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
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Sale Deed\nVerification",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Stamp Duty\nCalculation Support",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Complete\nRegistration Guidance",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Location-Specific\nCompliance Check",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1f0f0f] via-[#7c2d12] to-[#431407] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 shadow-lg inline-flex">
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
            Property <span className="text-orange-300">Registration</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Register your property safely and hassle-free with expert legal support.
          </p>

          <p className="text-sm mb-8 text-orange-300">
            Legally Secure Transfer • Government Compliance • Hassle-Free Process
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 4,999 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Drafting + Stamp Guidance · Registration Support · Legal Compliance
          </p>

          {/* ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(234,88,12,0.15)]">
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
            *Final pricing depends on property value and state-specific charges.
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
  { icon: "shield", text: "Makes Property Registration Easy, Transparent & Legally Secure" },
  { icon: "gavel", text: "Ensures all government compliances are met" },
  { icon: "users", text: "Verifies ownership papers and checks stamp duty charges" },
  { icon: "scale", text: "Ensures a smooth, legally valid transfer of ownership" },
  { icon: "fileText", text: "Guidance from drafting to final registration" },
] satisfies BenefitItem[];

const registrationProcedure = [
  "Submit documents to Sub-Registrar within property jurisdiction.",
  "Seller, purchaser, and two witnesses must be present.",
  "Carry valid ID proofs (Aadhaar, PAN, etc.).",
  "Provide valid POA if representing another person.",
  "Company transactions require Board Resolution & authorization.",
  "Present ownership documents & stamp duty proof.",
  "Sub-Registrar verifies stamp duty as per ready reckoner rates.",
  "Witness biometric verification required.",
];

const prerequisites = [
  "Estimation of property value",
  "Sale deed",
  "Stamp duty & registration charge payment",
  "Approaching Sub-Registrar",
  "Submission of required documents",
  "Other local jurisdictional documents",
];

const sections = [
  {
    title: "Procedure of Property Registration",
    icon: "fileText",
    type: "list",
    data: registrationProcedure,
  },
  {
    title: "Tentative Pre-Requisites",
    icon: "home",
    type: "grid",
    data: prerequisites,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is the purpose of property registration?",
    a: "It makes ownership transfer legally valid and officially recorded.",
  },
  {
    q: "Difference between Stamp Duty and Registration Charge?",
    a: "Stamp duty is tax on ownership transfer; registration charge records it officially.",
  },
  {
    q: "What if stamp duty is deficient?",
    a: "Sub-Registrar may refuse registration.",
  },
  {
    q: "Are witnesses mandatory?",
    a: "Yes, seller and purchaser must be present with two witnesses.",
  },
  {
    q: "Does Lawizer assist with location requirements?",
    a: "Yes, Lawizer ensures compliance with local registration rules.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function PropertyRegistrationPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Property Registration (Sale Deed Registration)"
        subtitle="Register your property safely and hassle-free with expert legal support."
        badgeText="Lawizer — Making Property Registration Easy, Transparent & Legally Secure."
        icon="gavel"
        serviceID="PROPERTY_REGISTRATION"
        contentTitle="Key Benefits of Lawizer's Registration Support"
        section1Title="Service Highlights"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-red-500/20",
          orb2: "bg-orange-500/20",
          iconBg: "from-red-500 to-orange-500",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-red-600"
        primaryBg="bg-gradient-to-r from-red-600 to-orange-600"
        primaryHoverBg="bg-gradient-to-r from-red-700 to-orange-700"
      />
    </>
  );
}