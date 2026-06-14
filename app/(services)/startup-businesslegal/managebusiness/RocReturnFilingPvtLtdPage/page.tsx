"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "calendar", text: "Helps in maintaining 'Active' status in the MCA Portal" },
  { icon: "shield", text: "Protection from steep penalty and legal actions" },
  { icon: "scale", text: "Boosts Confidence and Trust among stakeholders" },
  { icon: "clock", text: "Avoiding mandatory 'Strike Off' of the Company for non-filing" },
] satisfies BenefitItem[];

const prerequisites = [
  "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
  "Attendance of a minimum of 1 director for the AGM (or signing of minutes)",
  "Signature of a minimum of 1 director on the financials (Director's Report/Board Report)",
  "DIN of all Directors should be in APPROVED Status",
  "One valid Digital Signature (DSC) of a Director (for e-filing)",
];
const deliverables = [
  "All filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
  "MCA payment challan for filing fees",
  "Auditor's Report and Audited Financial Statements",
  "Certificate of filing compliance",
];
const sections = [
  { title: "Pre-Requisites for Filing (AOC-4 & MGT-7)", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return?", a: "Yes. ROC return gives details of changes that have taken place in the company during the year and must be filed even if the company has not done any business during the year. Nil returns are mandatory." },
  { q: "What Forms are to be filed for ROC Return?", a: "The mandatory annual forms are: MGT-7 (Annual Return/Compliance), AOC-4 (Financial Statements/Balance Sheet), and ADT-1 (For Appointment/Reappointment of Auditors)." },
  { q: "What is the Annual Filing due date?", a: "A) The first annual filing is due on the 30th of December of the next year from incorporation. B) Subsequent filings are due on the 30th of September every year (based on the AGM date of September 30th)." },
  { q: "What is the Penalty for late filing of a Company ROC return?", a: "Late fees of ₹100 per day apply on Form MGT-7 and AOC-4 until rectified. For Form ADT-1, penalties are steep, increasing from 2x up to 12x the normal fee depending on the delay duration." },
  { q: "Who is responsible for filing the Company ROC Return?", a: "It is the duty of the Company and its Directors to file the ROC Return, as both the Company and the Directors are liable for non-filing and associated penalties." },
  { q: "What are the ROC Return Filing fees and charges?", a: "A company having an Authorized Capital up to ₹1 lakh is charged ₹300 for each Form AOC-4 and MGT-7. For companies with ₹5 lakh or more Authorized Capital, the charge is ₹400 per form." },
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
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">ROC Annual Filing <span className="text-blue-300">for Pvt Ltd</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Mandatory annual compliance for Private Limited Companies — AOC-4 (Financials) and MGT-7 (Annual Return) to avoid heavy penalties.</p>
          <p className="text-sm mb-8 text-blue-300">Companies Act, 2013 • AOC-4 • MGT-7</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 3,499 – 7,999 <sup className="text-lg font-semibold">*</sup></p>
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

export default function RocReturnFilingPvtLtdPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout serviceID="ROC_ANNUAL_RETURN_FILING_PVT_LTD" title="ROC Annual Return Filing for Pvt Ltd" subtitle="Mandatory annual compliance for Private Limited Companies, involving timely filing of AOC-4 (Financials) and MGT-7 (Annual Return) to avoid heavy penalties." badgeText="Companies Act, 2013 • AOC-4 • MGT-7" icon="users" contentTitle="The Importance of Timely Annual Filing" contentDescription="ROC Annual Filing is non-negotiable. Failure to file Form AOC-4 (Financials) and Form MGT-7 (Annual Return) by the deadline (September 30th) results in an uncapped, cumulative late fee of ₹100 per day per form. This compliance step is crucial for maintaining 'Active' status and protecting Directors' DINs from disqualification." section1Title="Key Benefits of Compliant Pvt Ltd Filing" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-blue-600/20", orb2: "bg-purple-600/20", iconBg: "from-blue-500 to-purple-500", badgeText: "text-blue-300" }} primaryColor="text-blue-500" primaryBg="bg-gradient-to-r from-blue-600 to-purple-600" primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700" /></>
  );
}
