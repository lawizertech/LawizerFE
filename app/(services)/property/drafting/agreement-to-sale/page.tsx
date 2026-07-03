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
      label: "Professionally\nDrafted Agreement",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Buyer & Seller\nProtection",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
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
      label: "Stamp Paper\nGuidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1c0f0a] via-[#7c2d12] to-[#3f1a07] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
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
          <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M7 8h10M7 12h6M7 16h8"/>
              <rect x="3" y="4" width="18" height="16" rx="2"/>
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
            Agreement to Sale <span className="text-yellow-300">Drafting</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            The critical first legal step defining price, payment schedule, and possession terms.
          </p>

          <p className="text-sm mb-8 text-yellow-300">
            Legally Binding • Dispute Prevention • Secure Property Transactions
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹4,499
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(249,115,22,0.15)]">
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
            *Final pricing depends on complexity and customization requirements.
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
  { icon: "users", text: "Legally binds both buyer and seller." },
  { icon: "fileText", text: "Defines price, payment schedule, and possession timeline." },
  { icon: "shield", text: "Protects buyer against unauthorized transfer." },
  { icon: "shield", text: "Protects seller against payment defaults." },
  { icon: "home", text: "Foundation for smooth property transaction." },
  { icon: "scale", text: "Essential base for final Sale Deed registration." },
] satisfies BenefitItem[];

const keyElements = [
  "Buyer and seller details",
  "Complete property description",
  "Sale price and payment schedule",
  "Possession terms",
  "Conditions precedent & subsequent",
  "Representations & warranties",
  "Indemnity clause",
  "Dispute resolution mechanism",
  "Termination clauses",
];

const deliverables = [
  "Professionally drafted Agreement",
  "Legally precise documentation",
  "Protection of buyer and seller interests",
  "Clause-wise explanation",
  "Digital copy for stamp paper printing",
  "Guidance on stamp paper value",
];

const sections = [
  {
    title: "Key Elements Covered in the Agreement",
    icon: "gavel",
    type: "list",
    data: keyElements,
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is an Agreement to Sale?",
    a: "It records mutually agreed terms before executing the Sale Deed.",
  },
  {
    q: "Is it the same as a Sale Deed?",
    a: "No. It promises future transfer; Sale Deed transfers ownership immediately.",
  },
  {
    q: "Why is proper drafting important?",
    a: "It prevents disputes and protects financial interests.",
  },
  {
    q: "Is it location-specific?",
    a: "Yes, Lawizer drafts as per local state property laws.",
  },
  {
    q: "What is the drafting process?",
    a: "Lawyer discusses details, drafts agreement, and guides stamp requirements.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function AgreementToSaleDraftingPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Agreement to Sale Drafting"
        subtitle="The critical first legal step defining price, payment schedule, and possession terms."
        badgeText="Lawizer ensures your Agreement to Sale is precise and legally valid."
        icon="fileText"
        serviceID="AGREEMENT_TO_SALE_DRAFTING"
        contentTitle="Why a Proper Agreement to Sale Is Essential"
        contentDescription="A professionally drafted Agreement to Sale protects both parties and forms the base for smooth Sale Deed execution."
        section1Title="Key Protections and Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-orange-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-orange-500 to-yellow-500",
          badgeText: "text-yellow-400",
        }}
        primaryColor="text-orange-600"
        primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
      />
    </>
  );
}
