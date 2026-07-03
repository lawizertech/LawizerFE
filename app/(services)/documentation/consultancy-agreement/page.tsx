"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
 { icon: "shield", text: "Protects the legal and financial interests of both the consultant and the company." },
 { icon: "checkCircle", text: "Clearly defines scope of work, deliverables, timelines, and payment terms." },
 { icon: "users", text: "Prevents misuse of confidential and proprietary information." },
 { icon: "fileText", text: "Customized drafting aligned with your business requirements." },
] satisfies BenefitItem[];

const sections = [
 {
 type: "alert",
 data: { type: "info", title: "Avoid Scope & Payment Disputes", description: "A properly drafted Consultancy Agreement prevents scope creep, delayed payments, and confidentiality breaches." },
 },
 {
 title: "Pre-Requisites for Drafting",
 icon: "checkCircle",
 type: "list",
 data: [
 "Consultant and company details",
 "Scope of work and deliverables",
 "Fees, payment schedule, and duration",
 "Confidentiality and IP ownership requirements",
 ],
 },
 {
 title: "What Lawizer Delivers",
 icon: "scale",
 type: "grid",
 data: [
 "Tailored consultancy agreement",
 "Clear scope and milestone definition",
 "Payment and termination clauses",
 "Confidentiality and IP protection",
 ],
 },
] satisfies SectionBlock[];

const faqs = [
 { q: "What is a Consultancy Agreement?", a: "It is a legal contract defining the relationship, scope of work, deliverables, fees, and confidentiality obligations between a consultant and a company." },
 { q: "Why is defining scope important?", a: "Clear scope prevents disputes related to additional work, delayed delivery, and payment conflicts." },
 { q: "Does it protect confidential information?", a: "Yes. The agreement includes confidentiality and non-disclosure clauses to safeguard sensitive business information." },
] satisfies FAQItem[];

function HeroWithAddons() {
 const heroRef = useRef<HTMLElement>(null);
 const addons = [
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
 label: "Consultancy\nAgreement Draft",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
 label: "Scope & Milestone\nDefinition",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
 label: "Payment &\nTermination Clauses",
 },
 {
 icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
 label: "Confidentiality\n& IP Protection",
 },
 ];

 return (
 <section
 ref={heroRef}
 className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
 >
 <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
 <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
 <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
 <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
 <polyline points="14 2 14 8 20 8"/>
 <line x1="16" y1="13" x2="8" y2="13"/>
 <line x1="16" y1="17" x2="8" y2="17"/>
 <polyline points="10 9 9 9 8 9"/>
 </svg>
 </div>
 </motion.div>

 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
 Consultancy Agreement <span className="text-cyan-300">Drafting</span>
 </h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
 A legally binding contract defining scope, deliverables, fees, and confidentiality for consultancy engagements.
 </p>
 <p className="text-sm mb-8 text-blue-300">
 Clear Scope • Secure Payments • Confidentiality Protected
 </p>

 <div className="flex items-center justify-center gap-3 mb-1">
 <p className="text-3xl sm:text-4xl font-extrabold text-white">
 @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
 </p>
 <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
 ₹3,199
 </p>
 </div>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
 3–5 Days &nbsp;·&nbsp; Expert Drafting &nbsp;·&nbsp; Fully Customized
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

export default function ConsultancyAgreementPage() {
 return (
 <>
 <HeroWithAddons />
 <ServicePageLayout
 title="Consultancy Agreement Drafting"
 subtitle="A legally binding contract defining scope, deliverables, fees, and confidentiality for consultancy engagements."
 badgeText="Clear scope • Secure payments • Confidentiality protected"
 icon="fileText"
 serviceID="CONSULTANCY_AGREEMENT_DRAFTING"
 contentTitle="Why a Consultancy Agreement Is Essential"
 contentDescription="A Consultancy Agreement sets clear expectations, protects confidential information, and provides a legally enforceable framework for professional engagements."
 section1Title="Key Protections & Benefits"
 benefits={benefits}
 sections={sections}
 faqs={faqs}
 hideHero={true}
 theme={{ orb1: "bg-cyan-500/20", orb2: "bg-blue-500/20", iconBg: "from-cyan-500 to-blue-500", badgeText: "text-blue-300" }}
 primaryColor="text-cyan-600"
 primaryBg="bg-gradient-to-r from-cyan-600 to-blue-600"
 primaryHoverBg="bg-gradient-to-r from-cyan-700 to-blue-700"
 />
 </>
 );
}
