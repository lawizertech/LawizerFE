"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects sensitive business information and trade secrets." },
  { icon: "scale", text: "Legally enforceable protection in case of unauthorized disclosure." },
  { icon: "users", text: "Enables safe collaboration, partnerships, and funding discussions." },
  { icon: "fileText", text: "Customized NDA drafting based on your business or project needs." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all parties involved",
      "Nature and scope of confidential information",
      "Duration of confidentiality obligations",
      "Exclusions and permitted disclosures",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "scale",
    type: "grid",
    data: [
      "Tailor-made Non-Disclosure Agreement drafting",
      "Clear definition of confidential information",
      "Balanced obligations for both parties",
      "Legally enforceable NDA aligned with business goals",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Non-Disclosure Agreement (NDA)?", a: "A Non-Disclosure Agreement is a legal contract that obligates parties to keep shared confidential information private and protected from unauthorized disclosure." },
  { q: "Why is an NDA important for startups and businesses?", a: "An NDA protects sensitive business information and trade secrets, allowing startups and businesses to discuss ideas, partnerships, or funding safely." },
  { q: "What should an NDA clearly define?", a: "An NDA must define what constitutes confidential information, the duration of confidentiality, permitted disclosures, and consequences of breach." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "NDA\nDraft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Confidential Info\nDefinition",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: "Duration &\nPermitted Disclosures",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Breach &\nRemedies Clauses",
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
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Non-Disclosure Agreement (NDA) <span className="text-pink-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally enforceable agreement to protect confidential information and trade secrets.
          </p>
          <p className="text-sm mb-8 text-pink-300">
            Confidentiality • Trade Secrets • Legal Protection
          </p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹1,999
            </p>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            1–2 Days &nbsp;·&nbsp; Expert Drafting &nbsp;·&nbsp; Fully Customized
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

export default function NDAAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Non-Disclosure Agreement (NDA) Drafting"
        subtitle="A legally enforceable agreement to protect confidential information and trade secrets."
        badgeText="Confidentiality • Trade secrets • Legal protection"
        icon="shield"
        serviceID="NON-DISCLOSURE_AGREEMENT_DRAFTING"
        contentTitle="Why an NDA Is Essential for Business"
        contentDescription="An NDA safeguards proprietary information while allowing businesses to collaborate, negotiate, and explore opportunities without risking misuse or disclosure of sensitive data."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-red-500/20", orb2: "bg-pink-500/20", iconBg: "from-red-500 to-pink-500", badgeText: "text-pink-300" }}
        primaryColor="text-red-600"
        primaryBg="bg-gradient-to-r from-red-600 to-pink-600"
        primaryHoverBg="bg-gradient-to-r from-red-700 to-pink-700"
      />
    </>
  );
}