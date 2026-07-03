"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "trendingUp", text: "Enables scaling, business expansion, and new ventures" },
  { icon: "banknote", text: "Creates opportunities for raising funds from new investors" },
  { icon: "users", text: "Boosts transparency and trust among stakeholders" },
  { icon: "scale", text: "Ensures legal compliance and protects against penalties" },
] satisfies BenefitItem[];

const prerequisitesAuth = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Details of the required Increase in Authorized Capital",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director",
  "MOA (Memorandum of Association) must contain the necessary capital clause",
];
const prerequisitesPaidUp = [
  "Bank Statement showing deposit of Paid up Capital amount",
  "Share certificates of the Company (for updating)",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director",
];
const deliverables = [
  "Filed e-forms with MCA (Form SH-7)",
  "MCA payment challan for filing fees and stamp duty",
  "Drafted Shareholders' Special Resolution (EGM)",
  "Updated MOA and AOA copy",
  "Guidance on printing new Share Certificates",
];
const sections = [
  { title: "Pre-Requisites for Increase in Authorized Capital", icon: "fileText", type: "list", data: prerequisitesAuth },
  { title: "Pre-Requisites for Increase in Paid-up Capital", icon: "checkCircle", type: "list", data: prerequisitesPaidUp },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is maximum share capital allowed for a Company?", a: "There is no maximum limit for the Authorized Share Capital of a Private or Public Limited Company under the Companies Act, 2013." },
  { q: "What is the difference between Authorized Capital & Paid up capital?", a: "Authorized Capital is the maximum limit up to which a Company can issue shares. Paid Up Capital is the actual amount invested by shareholders." },
  { q: "What documents are required for increasing the capital?", a: "MOA, AOA, Board Meeting documents, and documents for Extra Ordinary General Meeting (EGM). Lawizer assists in drafting and filing all documents." },
  { q: "What forms are filed for increasing Company capital?", a: "Form SH-7 is the primary form filed with the ROC to register the increase in Authorized Share Capital." },
  { q: "What is the time limit to file capital increase with ROC?", a: "Form SH-7 must be filed within 30 days from passing the Special Resolution in the EGM." },
  { q: "Is Stamp Duty payable on increase in Authorized Capital?", a: "Yes, Stamp Duty is payable and varies depending on the State and the amount of capital increase." },
  { q: "Are Share Certificates required after capital increase?", a: "Yes, Share Certificates must be updated and issued to reflect the revised capital structure." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "SH-7 Filed\nwith MCA" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, label: "Special Resolution\n(EGM) Draft" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>, label: "Updated MOA\n& AOA Copy" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>, label: "Share Certificate\nGuidance" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]">
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Increase in <span className="text-green-300">Share Capital</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Legally expand your company's capital base to unlock growth, attract investors, and stay compliant.</p>
          <p className="text-sm mb-8 text-green-300">Form SH-7 • Companies Act, 2013 • Growth Ready</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 2,499 – 4,999 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Within 30 Days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation</p>
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

export default function IncreasingCapitalOfCompanyPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="Increase in Authorized Share Capital" subtitle="Legally expand your company's capital base to unlock growth, attract investors, and stay compliant with ROC filings." badgeText="Form SH-7 • Companies Act, 2013 • Growth Ready" icon="banknote" serviceID="INCREASE_IN_AUTHORIZED_SHARE_CAPITAL" contentTitle="The Importance of Capital Expansion" contentDescription="Increasing Authorized Capital raises the ceiling for issuing shares, enabling fundraising and expansion without repeated MOA amendments. The process requires a Special Resolution and timely filing of Form SH-7 to avoid penalties." section1Title="Key Benefits of Increasing Share Capital" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-green-500/20", orb2: "bg-teal-500/20", iconBg: "from-green-500 to-teal-500", badgeText: "text-green-300" }} primaryColor="text-green-500" primaryBg="bg-gradient-to-r from-green-600 to-teal-500" primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-600" /></>
  );
}
