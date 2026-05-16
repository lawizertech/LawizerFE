"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "scale", text: "Removes legal hassles and avoids continuing non-compliance" },
  { icon: "shield", text: "Eliminates the risk of accumulating penalties and fines" },
  { icon: "checkCircle", text: "Formal closure frees partners from LLP statutory obligations" },
  { icon: "building", text: "Removes the entity's 'defaulter' status (if applicable)" },
] satisfies BenefitItem[];

const prerequisites = [
  "Annual ROC Return Filings (Form 8 and Form 11) must be up to date",
  "LLP Should be Inoperative for more than 1 or 2 consecutive Financial Years",
  "Bank Account of the LLP should be Closed and Statement of Accounts prepared",
  "Latest Filed Income Tax Returns and Indemnity Bond/Affidavit prepared",
  "DIN of all Designated Partners should be in 'APPROVED' Status",
  "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
];
const deliverables = [
  "All filed e-forms with MCA (e.g., Form 24)",
  "MCA payment challan for closure fees",
  "LLP Closure Certificate (Confirmation of Striking Off)",
  "Drafted Indemnity Bond and Affidavit documents",
  "Partner Resolution for voluntary closure",
];
const sections = [
  { title: "Pre-Requisites for Striking Off (Form 24)", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is Closure of LLP?", a: "Closure of an LLP is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the Registrar of Companies (ROC) records." },
  { q: "What is the difference between Closure, Winding up, Dissolution of LLP?", a: "Closure (or Striking Off) is typically done voluntarily for non-operational LLPs (via Form 24/FTE). Winding up is a formal liquidation, either voluntary or by court order, involving asset distribution. Dissolution is the final act of ending the legal existence." },
  { q: "Why ROC filing is required for Closing an LLP?", a: "It is necessary to file Closure with the ROC (MCA) so the database is updated. Unless this is approved, the LLP is not legally closed and is still required to file all regular annual returns and compliances, incurring penalties if not done." },
  { q: "What is Fast Track Exit (FTE) Scheme (for LLP)?", a: "FTE is an LLP closure scheme initiated by MCA for easy and faster striking off (closure) of LLPs that meet specific eligibility criteria, often related to being non-operational for a period." },
  { q: "Which LLP is eligible to apply for Closure of LLP?", a: "Generally, any LLP which has been inoperative for more than 1 year (or 2 years depending on the method) from the date of its incorporation can apply for Closure, provided all other pre-requisites are met." },
  { q: "What documents are required for Closure of LLP?", a: "Application for Striking off (Form 24), Partners' Resolution for closure, Consent of Partners, Partners' Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents." },
  { q: "Which form is required to be filed for Closure of LLP with ROC?", a: "Form 24 is the primary e-form required to be filed with the ROC for the Striking Off (Closure) of the LLP." },
  { q: "What is the time limit to file Closure documents with ROC?", a: "The Form 24 has to be filed with ROC office within 30 days from the date of Signing of the Statement of Assets and Liabilities for all partners." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>, label: "LLP Closure\nCertificate" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "Form 24\nFiled with MCA" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, label: "Partner Resolution\nfor Closure" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Indemnity Bond\n& Affidavit" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Closure of <span className="text-yellow-300">LLP</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Formally dissolve your non-operational LLP by striking its name off ROC records via Form 24.</p>
          <p className="text-sm mb-8 text-yellow-300">LLP Act Compliant • Form 24 Filing • Penalty-Free Exit</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 4,999 – 9,999 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Online Process &nbsp;·&nbsp; Expert Facilitation &nbsp;·&nbsp; End-to-End Support</p>
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

export default function ClosureOfLLPPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="Closure of LLP (Striking Off)" subtitle="Formally dissolve your non-operational Limited Liability Partnership by striking its name off the ROC records via Form 24 to avoid future penalties." badgeText="LLP Act compliant • Form 24 filing • Penalty-free exit" icon="fileWarning" serviceID="CLOSURE_OF_LLP" contentTitle="The Importance of Legal Closure" contentDescription="Even if your LLP has ceased business, it remains a legal entity with mandatory annual filing obligations (Form 8 and 11). Legal closure via striking off (Form 24) is critical to eliminate statutory compliance requirements, remove the tag of defaulter, and prevent the accrual of heavy penalties." section1Title="Key Benefits of Formal LLP Closure" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-red-600/20", orb2: "bg-yellow-500/20", iconBg: "from-red-500 to-yellow-500", badgeText: "text-yellow-300" }} primaryColor="text-red-500" primaryBg="bg-gradient-to-r from-red-600 to-yellow-500" primaryHoverBg="bg-gradient-to-r from-red-700 to-yellow-600" /></>
  );
}