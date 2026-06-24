"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "calendar", text: "Helps in maintaining 'Active' status on the MCA Portal" },
  { icon: "shield", text: "Protection from steep penalties and legal actions" },
  { icon: "scale", text: "Boosts confidence and trust among stakeholders" },
  { icon: "clock", text: "Avoids mandatory strike-off due to non-filing" },
] satisfies BenefitItem[];

const prerequisites = [
  "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
  "Signature of the Director on financials and forms",
  "DIN of Director and Nominee should be in APPROVED status",
  "One valid Digital Signature (DSC) of the Director",
  "Appointment of Statutory Auditor via Form ADT-1 (mandatory)",
];
const deliverables = [
  "Filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
  "MCA payment challan for filing fees",
  "Auditor's Report and Financial Statements",
  "Certificate of filing compliance",
];
const sections = [
  { title: "Pre-Requisites for OPC ROC Filing", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "Is ROC filing mandatory even if OPC has not done any business?", a: "Yes. ROC return filing is mandatory even if the OPC has not carried out any business activity. Nil returns must also be filed every year." },
  { q: "Which forms are required for OPC ROC Annual Filing?", a: "The mandatory forms are AOC-4 (Financial Statements), MGT-7 (Annual Return), and ADT-1 (Appointment of Auditor)." },
  { q: "What is the due date for OPC annual filing?", a: "The first annual filing is due on 30th December of the year following incorporation. Subsequent filings are due on 30th September every year." },
  { q: "Who is responsible for filing ROC returns for OPC?", a: "The sole Director of the OPC is responsible for ROC compliance and filing of annual returns." },
  { q: "What is the penalty for late filing of OPC ROC returns?", a: "A late fee of ₹100 per day applies on both AOC-4 and MGT-7 without any maximum cap. ADT-1 also attracts penalties depending on delay." },
  { q: "Is AGM required for OPC?", a: "No. OPCs are exempt from holding an Annual General Meeting (AGM). Resolutions are signed and recorded by the sole member/director." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "AOC-4\n(Financials)" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>, label: "MGT-7\n(Annual Return)" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>, label: "ADT-1\n(Auditor Appt.)" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Filing Compliance\nCertificate" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">ROC Annual Filing <span className="text-blue-300">for OPC</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Mandatory annual compliance for One Person Companies to avoid penalties, DIN disqualification, and strike-off.</p>
          <p className="text-sm mb-8 text-blue-300">AOC-4 • MGT-7 • ADT-1 • Companies Act, 2013</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 2,999 – 5,999 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Due: Sep 30 &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation</p>
          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20"><p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p></div>
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

export default function ROCReturnFilingForOPCPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="ROC Annual Return Filing for OPC" subtitle="Mandatory annual compliance for One Person Companies to avoid penalties, DIN disqualification, and strike-off." badgeText="AOC-4 • MGT-7 • ADT-1 • Companies Act, 2013" icon="user" serviceID="ROC_ANNUAL_RETURN_FILING_FOR_OPC" contentTitle="Why Timely ROC Filing for OPC Is Critical" contentDescription="ROC annual filing is mandatory for OPCs even if no business activity has occurred. Failure to file AOC-4 and MGT-7 results in uncapped penalties of ₹100 per day per form and risks DIN disqualification. Timely compliance ensures the company remains active and legally protected." section1Title="Key Benefits of OPC ROC Compliance" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-blue-500/20", orb2: "bg-purple-500/20", iconBg: "from-blue-500 to-purple-500", badgeText: "text-blue-300" }} primaryColor="text-blue-500" primaryBg="bg-gradient-to-r from-blue-600 to-purple-600" primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700" /></>
  );
}
