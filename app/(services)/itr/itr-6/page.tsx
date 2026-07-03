"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
 { icon: "building", text: "Mandatory return for all companies registered under Companies Act" },
 { icon: "fileText", text: "Accurate filing with audited financial statements" },
 { icon: "scale", text: "Correct computation of corporate tax & MAT (if applicable)" },
 { icon: "shield", text: "Ensures statutory compliance & avoids penalties" },
] satisfies BenefitItem[];

const applicableTo = [
 "Private Limited Companies",
 "Public Limited Companies",
 "One Person Companies (OPC)",
 "Any company registered under Companies Act, 2013 or 1956",
];
const documentsNeeded = [
 "PAN Card of the Company",
 "Audited Balance Sheet & Profit and Loss Account",
 "Audit Report (mandatory)",
 "Details for Minimum Alternate Tax (MAT), if applicable",
 "Digital Signature Certificate (DSC) for filing",
];
const exclusions = [
 "Companies claiming exemption under Section 11",
 "Charitable or religious companies (they must file ITR-7 instead)",
];
const sections = [
 { title: "Who Should File ITR-6", icon: "checkCircle", type: "list", data: applicableTo },
 { title: "Mandatory Documents", icon: "fileText", type: "list", data: documentsNeeded },
 { title: "Important Exclusions", icon: "gavel", type: "alert", data: exclusions },
] satisfies SectionBlock[];

const faqs = [
 { q: "Who is required to file ITR-6?", a: "ITR-6 is mandatory for all companies registered under the Companies Act, including Private Limited, Public Limited, and OPCs." },
 { q: "Can any company avoid filing ITR-6?", a: "Only companies claiming exemption under Section 11 (charitable or religious purposes) are excluded and must file ITR-7 instead." },
 { q: "Are audited financial statements mandatory?", a: "Yes. Companies must submit audited Balance Sheet, Profit & Loss Account, and Audit Report while filing ITR-6." },
 { q: "Is Digital Signature mandatory for ITR-6?", a: "Yes. ITR-6 must be filed using a valid Digital Signature Certificate (DSC) of the company." },
 { q: "What is MAT in ITR-6?", a: "Minimum Alternate Tax (MAT) applies to companies paying low or no tax. MAT computation details must be included in ITR-6 if applicable." },
] satisfies FAQItem[];

function HeroWithAddons() {
 const heroRef = useRef<HTMLElement>(null);
 const addons = [
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
 label: "ITR-6\nFiling",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
 label: "Acknowledgment\nReceipt",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
 label: "MAT\nComputation",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>,
 label: "DSC-Based\nFiling",
 },
 ];

 return (
 <section
 ref={heroRef}
 className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
 >
 <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />

 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
 <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
 <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
 <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"/>
 </svg>
 </div>
 </motion.div>

 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
 ITR-6 <span className="text-purple-300">Filing</span>
 </h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
 For all Companies registered under the Companies Act.
 </p>
 <p className="text-sm mb-8 text-purple-300">
 Private Ltd • Public Ltd • OPC
 </p>

 <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
 @ Rs. 4,999 – 9,999 <sup className="text-lg font-semibold">*</sup>
 </p>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
 Due: Oct 31 &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function ITR6Page() {
 return (
 <>
 <HeroWithAddons />
 <ServicePageLayout
 title="ITR-6 Filing"
 subtitle="For all Companies registered under the Companies Act."
 badgeText="Private Ltd • Public Ltd • OPC"
 icon="building"
 serviceID="ITR-6_FILING"
 contentTitle="Overview"
 contentDescription="ITR-6 is the prescribed Income Tax Return for companies registered under the Companies Act. It requires filing with audited financial statements, mandatory digital signature, and detailed corporate tax or MAT computation where applicable."
 section1Title="Key Highlights of ITR-6"
 benefits={benefits}
 sections={sections}
 faqs={faqs}
 hideHero={true}
 theme={{ orb1: "bg-purple-500/20", orb2: "bg-violet-500/20", iconBg: "from-purple-500 to-violet-500", badgeText: "text-purple-300" }}
 primaryColor="text-purple-600"
 primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
 primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
 />
 </>
 );
}
