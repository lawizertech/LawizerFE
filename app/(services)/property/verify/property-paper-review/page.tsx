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
      label: "Detailed Document\nExamination",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Ownership & Risk\nAssessment",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "One-on-One Legal\nConsultation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Compliance &\nRegulatory Check",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#134e4a] to-[#042f2e] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M9 12h6M9 16h6M9 8h6"/>
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
            Property Paper Review <span className="text-cyan-300">& Consultation</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Get expert legal review of your property documents and a clear oral consultation on ownership, risks, and compliance.
          </p>

          <p className="text-sm mb-8 text-cyan-300">
            Document Verification • Legal Risk Detection • Compliance Review
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹1,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Consultation Included · Expert Real Estate Lawyers · Fast Turnaround
          </p>

          {/* ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(20,184,166,0.15)]">
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
            *Final pricing depends on document volume and complexity.
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
  { icon: "shield", text: "Detects legal risks early by identifying disputes, encumbrances, or ownership issues before buying." },
  { icon: "checkCircle", text: "Verifies authenticity by confirming documents are genuine and properly executed." },
  { icon: "clock", text: "Saves time and money by avoiding costly legal troubles or fraudulent deals later." },
  { icon: "scale", text: "Ensures compliance with state and municipal property regulations." },
  { icon: "users", text: "Provides legal clarity for confident property decisions." },
] satisfies BenefitItem[];

const targetAudience = [
  "Homebuyers wanting to validate documents before purchase",
  "Real estate investors evaluating new properties",
  "Heirs or inheritors unsure of legal ownership",
  "Sellers wanting paperwork clarity",
  "Anyone seeking legal clarity before a transaction",
];

const sections = [
  {
    title: "Who Is This Service For?",
    icon: "users",
    type: "list",
    data: targetAudience,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What does the Property Paper Review involve?",
    a: "Expert lawyers examine title deeds, agreements, mutation papers, and tax receipts, followed by a clear oral consultation.",
  },
  {
    q: "Why is early review important?",
    a: "It detects legal risks before purchase, preventing disputes and financial losses.",
  },
  {
    q: "What documents are checked?",
    a: "Title deeds, sale agreements, mutation papers, tax receipts and related property documents.",
  },
  {
    q: "Do I get a written report?",
    a: "This service includes a detailed oral consultation explaining the legal position.",
  },
  {
    q: "Is this suitable for inherited property?",
    a: "Yes, it helps heirs understand ownership clarity and compliance.",
  },
] satisfies FAQItem[];

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function PropertyPaperReviewPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Property Paper Review & Legal Consultation"
        subtitle="Get expert legal review of your property documents and a clear oral consultation on ownership, risks, and compliance."
        badgeText="Lawizer ensures your property papers are genuine, updated, and dispute-free before any transaction."
        icon="fileText"
        serviceID="PROPERTY_PAPER_REVIEW_&_LEGAL_CONSULTATION"
        contentTitle="Why Property Paper Review Is Important"
        contentDescription="Before buying, selling, or inheriting a property, it is essential to verify documents are legally sound. Professional review identifies ownership issues, encumbrances, non-compliance, and potential disputes."
        section1Title="Key Benefits of Property Paper Review"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-teal-500/20",
          orb2: "bg-cyan-500/20",
          iconBg: "from-teal-500 to-cyan-500",
          badgeText: "text-cyan-300",
        }}
        primaryColor="text-teal-600"
        primaryBg="bg-gradient-to-r from-teal-500 to-cyan-500"
        primaryHoverBg="bg-gradient-to-r from-teal-600 to-cyan-600"
      />
    </>
  );
}