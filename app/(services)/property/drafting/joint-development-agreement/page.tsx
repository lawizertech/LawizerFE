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
          <path d="M3 21h18M5 21V7l8-4 8 4v14" />
        </svg>
      ),
      label: "Customized JDA\nDrafting",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Revenue Sharing\nProtection",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8" />
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
      label: "Registration &\nApproval Guidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#065f46] to-[#052e16] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M3 21h18M5 21V7l8-4 8 4v14" />
            </svg>
          </div>
        </motion.div>

        {/* Title & Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Joint Development <span className="text-green-300">Agreement (JDA)</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally binding agreement between a landowner and developer defining responsibilities, profit-sharing, and timelines.
          </p>

          <p className="text-sm mb-8 text-green-300">
            Secure Investment • Revenue Clarity • Legal Safeguards
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹8,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS BOX */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(16,185,129,0.15)]">
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
            *Final pricing depends on project size, revenue structure, and complexity.
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
  { icon: "users", text: "Protects rights of landowner and developer." },
  { icon: "shield", text: "Prevents disputes over timelines and payments." },
  { icon: "scale", text: "Ensures compliance with property and development laws." },
  { icon: "clock", text: "Defines clear project milestones and approvals." },
  { icon: "fileText", text: "Acts as enforceable legal evidence." },
  { icon: "factory", text: "Secures investment and revenue-sharing mechanisms." },
] satisfies BenefitItem[];

const prerequisites = [
  "Landowner details & ownership documents",
  "Developer company registration & PAN",
  "Clear land title & property details",
  "Profit-sharing & construction timelines",
  "Optional clauses for penalties & dispute resolution",
];

const deliverables = [
  "Customized Joint Development Agreement",
  "Clause-wise explanation",
  "Editable digital copy",
  "Registration & approval guidance",
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
    icon: "factory",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

const faqs = [
  {
    q: "What is a Joint Development Agreement?",
    a: "A legal contract defining responsibilities, profit-sharing, and timelines between landowner and developer.",
  },
  {
    q: "Why is professional drafting important?",
    a: "It prevents disputes and protects revenue interests.",
  },
  {
    q: "What should landowners review carefully?",
    a: "Revenue share, approvals, penalties, and dispute clauses.",
  },
  {
    q: "Is JDA suitable for commercial projects?",
    a: "Yes, JDAs apply to residential, commercial, and mixed-use developments.",
  },
  {
    q: "Does Lawizer assist with registration?",
    a: "Yes, including drafting, consultation, and approval guidance.",
  },
] satisfies FAQItem[];

export default function JointDevelopmentAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Joint Development Agreement (JDA)"
        subtitle="A legally binding agreement defining responsibilities, profit-sharing, and timelines."
        badgeText="Lawizer ensures your JDA is professionally drafted and enforceable."
        icon="factory"
        serviceID="JOINT_DEVELOPMENT_AGREEMENT"
        contentTitle="Why a Joint Development Agreement Is Crucial"
        contentDescription="A professionally drafted JDA protects revenue sharing, timelines, and legal compliance for smooth project execution."
        section1Title="Key Protections and Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-teal-500/20",
          orb2: "bg-green-500/20",
          iconBg: "from-teal-500 to-green-500",
          badgeText: "text-green-300",
        }}
        primaryColor="text-green-600"
        primaryBg="bg-gradient-to-r from-teal-500 to-green-600"
        primaryHoverBg="bg-gradient-to-r from-teal-600 to-green-700"
      />
    </>
  );
}