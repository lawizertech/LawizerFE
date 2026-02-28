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
      label: "Clause-by-Clause\nExplanation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Risk & Legal\nCompliance Check",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "One-on-One\nConsultation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Legal Suggestions\n& Clarifications",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#78350f] to-[#3f1d0d] text-white px-4 sm:px-6"
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
              <path d="M7 8h10M7 12h6M7 16h8"/>
              <rect x="3" y="4" width="18" height="16" rx="2"/>
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
            Sale Agreement <span className="text-orange-300">Review</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Expert legal review to ensure your Agreement to Sale is legally sound, valid, and enforceable.
          </p>

          <p className="text-sm mb-8 text-orange-300">
            Legal Protection • Risk Detection • Enforceable Contract
          </p>

          {/* PRICE */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,999 <sup className="text-lg font-semibold">*</sup>
          </p>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Consultation Included · Senior Property Lawyers · Online Review
          </p>

          {/* ADDONS BOX */}
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
            *Final pricing depends on agreement complexity and length.
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
  { icon: "scale", text: "Legally binds both parties and prevents last-minute disputes." },
  { icon: "checkCircle", text: "Defines clear payment schedule, possession dates, and responsibilities." },
  { icon: "shield", text: "Protects buyer and seller rights from misuse or default." },
  { icon: "shield", text: "Prevents fraud and misrepresentation in transactions." },
  { icon: "fileText", text: "Forms the legal foundation for execution of the final Sale Deed." },
] satisfies BenefitItem[];

const processSteps = [
  "Upload your agreement and select a convenient consultation time.",
  "Senior lawyers analyze and interpret the agreement.",
  "Connect with the lawyer for detailed clarification and review.",
];

const sections = [
  {
    title: "How the Agreement Review Works",
    icon: "clock",
    type: "list",
    data: processSteps,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is the purpose of reviewing the Agreement to Sale?",
    a: "It ensures all terms are legally valid and protect both parties from disputes.",
  },
  {
    q: "What does Lawizer ensure during review?",
    a: "The agreement is enforceable, clear, and compliant with Indian property laws.",
  },
  {
    q: "Who conducts the review?",
    a: "Senior and experienced property lawyers conduct the review.",
  },
  {
    q: "How does consultation work?",
    a: "Upload your document, choose time, and connect via scheduled call.",
  },
  {
    q: "Is this service available across India?",
    a: "Yes, Lawizer provides agreement review services nationwide.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function SaleAgreementReviewPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Sale Agreement / Agreement to Sale Review"
        subtitle="Expert legal review to ensure your Agreement to Sale is legally sound and enforceable."
        badgeText="Lawizer ensures your agreement is legally valid under Indian property laws."
        icon="fileText"
        serviceID="SALE_AGREEMENT_AGREEMENT_TO_SALE_REVIEW"
        contentTitle="Why Reviewing a Sale Agreement Is Important"
        contentDescription="A properly reviewed Sale Agreement clearly defines buyer and seller rights, prevents disputes, and ensures enforceability for final property transfer."
        section1Title="Key Benefits of Sale Agreement Review"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-yellow-500/20",
          orb2: "bg-orange-500/20",
          iconBg: "from-yellow-500 to-orange-500",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-yellow-600"
        primaryBg="bg-gradient-to-r from-yellow-500 to-orange-500"
        primaryHoverBg="bg-gradient-to-r from-yellow-600 to-orange-600"
      />
    </>
  );
}