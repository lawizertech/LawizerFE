"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Correction of incorrect CIBIL records and restoration of credit score." },
  { icon: "scale", text: "Immediate stoppage of illegal harassment by recovery agents." },
  { icon: "checkCircle", text: "Compensation for financial loss, costs incurred, and mental harassment." },
  { icon: "users", text: "Legal action compelling banks to issue no-dues certificates and rectify records." },
] satisfies BenefitItem[];

const prerequisites = [
  "Detailed written complaint to the bank or NBFC's nodal officer.",
  "Escalation to the CEO in cases of continued harassment.",
  "Supporting documents such as loan agreement, payment receipts, and CIBIL/credit reports.",
  "Evidence of harassment including call recordings, messages, or police complaints (if any).",
  "Mandatory waiting period of 30 days after lodging complaint with the bank.",
];
const deliverables = [
  "Drafting of legal petition for Consumer Commission or RBI Ombudsman.",
  "Issuance of legal notices to the bank and credit bureaus (CIBIL, Equifax, etc.).",
  "Representation to secure rectification of credit records and compensation.",
];
const sections = [
  { title: "Pre-requisites for Filing a Loan or CIBIL Dispute Case", icon: "fileText", type: "list", data: prerequisites },
  { title: "What Lawizer Delivers", icon: "scale", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a CIBIL or credit score dispute?", a: "A dispute arises when incorrect loan status such as 'written-off', 'default', or 'settled' is wrongly reported, damaging the consumer's creditworthiness." },
  { q: "What qualifies as harassment by recovery agents?", a: "Threats, repeated calls, intimidation, public shaming, or abusive conduct by bank or NBFC recovery agents in violation of RBI's Fair Practices Code." },
  { q: "Why is correcting CIBIL errors important?", a: "Incorrect CIBIL data can prevent future loans for housing, vehicles, education, or business. Legal action forces correction and restores financial credibility." },
  { q: "Where is the legal case filed?", a: "Cases are filed before the Consumer Commission or the RBI Integrated Ombudsman depending on the nature of the dispute." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Legal Notice\nto Bank",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "CIBIL\nRectification",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
      label: "Consumer Commission\nRepresentation",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Compensation\nRecovery",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Loan & Advance <span className="text-orange-300">Disputes</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legal remedy for incorrect CIBIL reporting and harassment by banks or recovery agents.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            CIBIL Rectification • Anti-Harassment • Legal Protection
          </p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            30-Day Notice Period &nbsp;·&nbsp; End-to-End Handling &nbsp;·&nbsp; RBI Compliant
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

export default function LoanAdvanceDisputesPage() {
  notFound();
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        serviceID="LOAN_ADVANCE_DISPUTES"
        title="Loan & Advance Disputes"
        subtitle="Legal remedy for incorrect CIBIL reporting and harassment by banks or recovery agents."
        badgeText="CIBIL Rectification • Anti-Harassment • Legal Protection"
        icon="users"
        contentTitle="Resolve CIBIL Errors & Stop Recovery Harassment"
        contentDescription="Incorrect credit reporting and unlawful recovery practices can permanently damage your financial future. Legal action compels banks to correct CIBIL errors, stop harassment, and compensate affected consumers."
        section1Title="Why Legal Action is Necessary"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-red-500/20", orb2: "bg-orange-500/20", iconBg: "from-red-500 to-orange-500", badgeText: "text-orange-300" }}
        primaryColor="text-red-600"
        primaryBg="bg-gradient-to-r from-red-600 to-orange-600"
        primaryHoverBg="bg-gradient-to-r from-red-700 to-orange-700"
      />
    </>
  );
}
