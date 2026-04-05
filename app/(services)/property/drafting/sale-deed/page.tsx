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
          <path d="M7 8h10M7 12h6M7 16h8" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "Legally Compliant\nDrafted Sale Deed",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Fraud & Risk\nProtection",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "Clause-wise\nExplanation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
          <rect x="3" y="4" width="18" height="16" rx="2" />
        </svg>
      ),
      label: "Registration\nGuidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M5 3h14l3 6-10 12L2 9l3-6z" />
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
            Sale Deed <span className="text-violet-300">Drafting</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            The final and most critical legal document that officially transfers property ownership.
          </p>

          <p className="text-sm mb-8 text-violet-300">
            Ownership Transfer • Legal Compliance • Investment Protection
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹5,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(139,92,246,0.15)]">
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
            *Final pricing depends on transaction complexity and property value.
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
  { icon: "gavel", text: "Acts as the ultimate proof of ownership." },
  { icon: "users", text: "Protects buyer and seller rights." },
  { icon: "checkCircle", text: "Fully compliant with Indian laws." },
  { icon: "shield", text: "Prevents fraud and hidden liabilities." },
  { icon: "fileText", text: "Mandatory for smooth registration." },
] satisfies BenefitItem[];

const draftingProcess = [
  "Lawyer discusses property details and transaction requirements.",
  "Professional drafting with legal and factual checks.",
  "Printing on state-prescribed non-judicial stamp paper.",
];

const whyChooseLawizer = [
  "Drafted by expert property lawyers.",
  "Customized for your transaction.",
  "Clause-wise explanation for clarity.",
  "End-to-end support till registration.",
  "Fast online process with transparent pricing.",
];

const sections = [
  {
    title: "The Sale Deed Drafting Process",
    icon: "gavel",
    type: "list",
    data: draftingProcess,
  },
  {
    title: "Why Choose Lawizer",
    icon: "home",
    type: "grid",
    data: whyChooseLawizer,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is a Sale Deed?",
    a: "It officially transfers ownership from seller to buyer.",
  },
  {
    q: "How is it different from Agreement to Sale?",
    a: "Agreement sets terms; Sale Deed completes ownership transfer.",
  },
  {
    q: "Is stamp paper mandatory?",
    a: "Yes, state-prescribed non-judicial stamp paper is required.",
  },
  {
    q: "Why is compliance critical?",
    a: "Ensures enforceability and protects from future disputes.",
  },
  {
    q: "Does Lawizer draft for different cities?",
    a: "Yes, across India with state-specific compliance.",
  },
] satisfies FAQItem[];

export default function SaleDeedDraftingPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Sale Deed Drafting"
        subtitle="The final legal document transferring property ownership."
        badgeText="Legally compliant • Secure • Registration-ready"
        icon="fileText"
        serviceID="SALE_DEED_DRAFTING"
        contentTitle="Why a Properly Drafted Sale Deed Is Essential"
        contentDescription="A professionally drafted Sale Deed ensures legal compliance, smooth registration, and long-term property protection."
        section1Title="Key Benefits of a Professionally Drafted Sale Deed"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-purple-500/20",
          orb2: "bg-violet-500/20",
          iconBg: "from-purple-500 to-violet-500",
          badgeText: "text-violet-300",
        }}
        primaryColor="text-purple-600"
        primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
        primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
      />
    </>
  );
}