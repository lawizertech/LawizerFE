"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "checkCircle", text: "Provides clarity on employee rights and employer obligations." },
  { icon: "shield", text: "Prevents disputes over compensation, termination, or confidentiality." },
  { icon: "scale", text: "Ensures compliance with labour and employment laws." },
  { icon: "fileText", text: "Includes clause-wise explanation on non-compete, confidentiality, and termination." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Employee and employer details",
      "Compensation, role, responsibilities, and benefits",
      "Duration and termination clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Drafting legally compliant employment agreements",
      "Clause explanation including non-compete and confidentiality",
      "Clear termination and notice-period clauses",
      "Advice on dispute prevention and compliance",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is an Employment Agreement?", a: "It is a legal document outlining the terms of employment, including roles, salary, benefits, and termination policies." },
  { q: "Why is an Employment Agreement important?", a: "It provides clarity on employee rights and employer obligations, ensures compliance with labour laws, and prevents disputes over compensation or termination." },
  { q: "Does the agreement cover confidentiality and non-compete clauses?", a: "Yes. The agreement includes detailed clauses on confidentiality, non-compete, and termination with proper legal explanation." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Employment\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Non-Compete &\nConfidentiality",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: "Termination &\nNotice Period",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Labour Law\nCompliance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Employment Agreement <span className="text-teal-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally compliant contract defining roles, salary, benefits, and termination terms.
          </p>
          <p className="text-sm mb-8 text-teal-300">
            Labour-law Compliant • Dispute Prevention • Clear Obligations
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,999 <sup className="text-lg font-semibold">*</sup>
          </p>
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

export default function EmploymentAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Employment Agreement Drafting"
        subtitle="A legally compliant contract defining roles, salary, benefits, and termination terms."
        badgeText="Labour-law compliant • Dispute prevention • Clear obligations"
        icon="users"
        serviceID="EMPLOYMENT_AGREEMENT_DRAFTING"
        contentTitle="Why a Compliant Employment Agreement Is Essential"
        contentDescription="A strong employment agreement creates a clear framework for the working relationship, reduces legal risk, and ensures compliance with labour and employment laws."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-green-500/20", orb2: "bg-teal-500/20", iconBg: "from-green-500 to-teal-500", badgeText: "text-teal-300" }}
        primaryColor="text-green-600"
        primaryBg="bg-gradient-to-r from-green-600 to-teal-600"
        primaryHoverBg="bg-gradient-to-r from-green-700 to-teal-700"
      />
    </>
  );
}