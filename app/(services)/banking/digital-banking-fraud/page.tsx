"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Recovery of loss by enforcing RBI zero-liability and limited-liability rules" },
  { icon: "users", text: "Full legal representation before RBI Ombudsman or Consumer Commission" },
  { icon: "checkCircle", text: "Refund of unauthorized debits with compensation for mental harassment" },
  { icon: "fileText", text: "Legally drafted complaint citing RBI circulars and case law" },
] satisfies BenefitItem[];

const preRequisites = [
  "Immediate written complaint to the bank (within 3 days for zero-liability cases)",
  "FIR or Cyber Crime complaint (strongly recommended)",
  "Waiting period of 30 days after lodging complaint with bank",
];
const deliverables = [
  "Drafting complaint for RBI Integrated Ombudsman / Consumer Commission",
  "Issuance of legal notice to the bank demanding recovery",
  "Complete legal representation until final resolution",
];
const sections = [
  { title: "Pre-requisites for Filing a Case", icon: "clock", type: "list", data: preRequisites },
  { title: "What Lawizer Delivers", icon: "fileText", type: "list", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What types of digital banking fraud are covered?", a: "Phishing, vishing, card fraud, unauthorized UPI/NEFT/RTGS transactions, and failed digital payments where money is debited but not credited." },
  { q: "What are RBI zero-liability rules?", a: "If the customer reports unauthorized transactions promptly and is not negligent, RBI guidelines require banks to compensate the full loss." },
  { q: "When should I report fraud to the bank?", a: "Immediately. Ideally within 3 days to qualify for zero-liability protection under RBI rules." },
  { q: "Do you represent clients before Consumer Commission?", a: "Yes. We handle full representation before the RBI Integrated Ombudsman and Consumer Commissions." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "RBI Ombudsman\nComplaint Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>,
      label: "Legal Notice\nto Bank",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Court\nRepresentation",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Loss Recovery\nand Compensation",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <rect x="2" y="5" width="20" height="14" rx="2"/>
              <path d="M2 9h20M7 15h2M11 15h4"/>
            </svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Digital & Electronic Banking <span className="text-cyan-300">Fraud</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Legal recovery of losses from unauthorized digital transactions.</p>
          <p className="text-sm mb-8 text-cyan-300">RBI Ombudsman • Consumer Commission</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 1,199 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Report within 3 Days &nbsp;·&nbsp; End-to-End Handling &nbsp;·&nbsp; RBI Compliant</p>
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

export default function DigitalBankingFraudPage() {
  notFound();
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        serviceID="DIGITAL_BANKING_FRAUD"
        title="Digital & Electronic Banking Fraud"
        subtitle="Legal recovery of losses from unauthorized digital transactions."
        badgeText="RBI Ombudsman • Consumer Commission"
        icon="banknote"
        contentTitle="Why Legal Action Is Necessary"
        contentDescription="Banks often deny liability in cases of digital fraud despite clear RBI guidelines. Legal action is required to enforce zero-liability or limited-liability rules and recover unauthorized debits along with compensation."
        section1Title="Key Benefits of Our Legal Support"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-blue-500/20", orb2: "bg-cyan-500/20", iconBg: "from-blue-500 to-cyan-500", badgeText: "text-cyan-300" }}
        primaryColor="text-blue-600"
        primaryBg="bg-gradient-to-r from-blue-600 to-cyan-600"
        primaryHoverBg="bg-gradient-to-r from-blue-700 to-cyan-700"
      />
    </>
  );
}
