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
      label: "Drafted & Registered\nGift Deed",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
      label: "Step-by-Step\nRegistration Support",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Digital Copy\nProvided",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1f0f17] via-[#7f1d1d] to-[#3b0a1a] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 21s-6-4.35-9-8a5 5 0 019-6 5 5 0 019 6c-3 3.65-9 8-9 8z"/>
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
            Gift Deed <span className="text-pink-300">Drafting & Registration</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legally transfer ownership of property or assets voluntarily and without monetary exchange.
          </p>

          <p className="text-sm mb-8 text-pink-300">
            Legal Ownership Transfer • Secure Registration • Family Asset Protection
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹6,499
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(244,63,94,0.15)]">
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
            *Final pricing depends on property type, state stamp duty, and complexity.
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
  { icon: "scale", text: "Legal ownership transfer without monetary exchange" },
  { icon: "shield", text: "Protects donor and donee rights" },
  { icon: "fileText", text: "Essential for property registration and mutation" },
  { icon: "users", text: "Formalizes voluntary transfer of assets" },
  { icon: "home", text: "Secures family property transactions" },
  { icon: "checkCircle", text: "Ensures the deed is legally valid and registered" },
] satisfies BenefitItem[];

const prerequisites = [
  "Donor and donee details (name, address, ID)",
  "Property/asset details (address, type, area)",
  "Consent and signature of donor",
  "Supporting Documents (Original title deed, tax receipts, ID proofs)",
];

const deliverables = [
  "Drafted and registered Gift Deed",
  "Clause-wise explanation",
  "Digital copy",
  "Step-by-step registration guidance",
  "Legally valid deed protecting both parties",
];

const sections = [
  {
    title: "Pre-Requisites for Gift Deed Drafting",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "home",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is a Gift Deed?",
    a: "A Gift Deed transfers ownership voluntarily without monetary consideration.",
  },
  {
    q: "Is registration mandatory?",
    a: "Yes, registration is mandatory for immovable property to be legally valid.",
  },
  {
    q: "What is the stamp duty?",
    a: "Stamp duty varies by state and relationship between donor and donee.",
  },
  {
    q: "Can a Gift Deed be revoked?",
    a: "Generally no, unless specific revocation clause or legal grounds exist.",
  },
  {
    q: "Why use Lawizer?",
    a: "Lawizer ensures legal validity, compliance, and protection of rights.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function GiftDeedDraftingPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Gift Deed Drafting & Registration"
        subtitle="Legally transfer ownership of property or assets voluntarily and securely."
        badgeText="Lawizer ensures your Gift Deed is legally compliant and registered."
        icon="heart"
        serviceID="GIFT_DEED_DRAFTING_&_REGISTRATION"
        contentTitle="Why a Registered Gift Deed is Important"
        contentDescription="A registered Gift Deed legally transfers ownership without consideration and prevents future disputes."
        section1Title="Key Benefits of Gift Deed Registration"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-red-500/20",
          orb2: "bg-pink-500/20",
          iconBg: "from-red-500 to-pink-500",
          badgeText: "text-pink-300",
        }}
        primaryColor="text-red-500"
        primaryBg="bg-gradient-to-r from-red-500 to-pink-500"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-pink-600"
      />
    </>
  );
}
