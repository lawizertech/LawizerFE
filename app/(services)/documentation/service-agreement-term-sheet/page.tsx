"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "checkCircle", text: "Clearly defines scope, fees, deliverables, and timelines for services." },
  { icon: "shield", text: "Prevents disputes related to services, payments, or expectations." },
  { icon: "scale", text: "Ensures legal enforceability of service commitments." },
  { icon: "clock", text: "Provides clarity on obligations, milestones, and timelines." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "fileText",
    type: "list",
    data: [
      "Details of the service provider and client",
      "Scope of services and deliverables",
      "Fees, payment terms, and deadlines",
      "Service timelines and milestones",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "clock",
    type: "grid",
    data: [
      "Drafting of Service Agreements or Term Sheets",
      "Clear definition of scope, fees, and deliverables",
      "Timeline and milestone structuring",
      "Guidance on obligations and legal clauses",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Service Agreement?", a: "A Service Agreement is a legally binding document that defines the scope of services, fees, deliverables, and timelines between parties." },
  { q: "What is a Term Sheet in service arrangements?", a: "A Term Sheet is a preliminary, usually non-binding document that outlines key commercial terms before a detailed Service Agreement is executed." },
  { q: "Why is defining scope and timelines important?", a: "Clear scope, fees, and timelines prevent misunderstandings, reduce disputes, and ensure enforceability of service obligations." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Service Agreement\nDraft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
      label: "Term Sheet\nDraft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: "Milestone &\nTimeline Clauses",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Scope & Fees\nDefinition",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-500 to-green-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M9 14l2 2 4-4"/>
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Service Agreement & Term Sheet <span className="text-teal-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Clear, enforceable contracts defining scope, fees, deliverables, and timelines.
          </p>
          <p className="text-sm mb-8 text-green-300">
            Scope • Fees • Timelines • Enforceable
          </p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹4,499
            </p>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            2–3 Days &nbsp;·&nbsp; Expert Drafting &nbsp;·&nbsp; Fully Customized
          </p>

          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">{addon.icon}</div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">{addon.label}</p>
                    {i < addons.length - 1 && <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">+</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">*Facilitation Fees. Government Charges Extra.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServiceAgreementTermSheetPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Service Agreement & Term Sheet Drafting"
        subtitle="Clear, enforceable contracts defining scope, fees, deliverables, and timelines."
        badgeText="Scope • Fees • Timelines • Enforceable"
        icon="fileText"
        serviceID="SERVICE_AGREEMENT_&_TERM_SHEET_DRAFTING"
        contentTitle="Why a Service Agreement Is Critical"
        contentDescription="A properly drafted Service Agreement or Term Sheet ensures clarity on service expectations, payments, and timelines. It legally binds both parties and prevents disputes arising from unclear obligations or deliverables."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-teal-500/20", orb2: "bg-green-500/20", iconBg: "from-teal-500 to-green-500", badgeText: "text-green-300" }}
        primaryColor="text-teal-600"
        primaryBg="bg-gradient-to-r from-teal-600 to-green-600"
        primaryHoverBg="bg-gradient-to-r from-teal-700 to-green-700"
      />
    </>
  );
}
