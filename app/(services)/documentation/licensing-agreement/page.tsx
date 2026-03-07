"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects intellectual property rights and revenue streams." },
  { icon: "scale", text: "Ensures legally enforceable usage terms and restrictions." },
  { icon: "gavel", text: "Clearly defines royalties, scope of use, and license terms." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Licensor and licensee details",
      "Scope of licensed intellectual property",
      "Royalty structure or license fees",
      "Duration, territory, and special conditions",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: [
      "Customized Licensing Agreement drafting",
      "Clear royalty, scope, and term definitions",
      "Risk-mitigated structure protecting IP ownership",
      "Legally enforceable agreement aligned with business goals",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Licensing Agreement?", a: "A Licensing Agreement allows one party (the licensee) to use intellectual property, technology, or products owned by another party (the licensor) under defined terms." },
  { q: "Why is a Licensing Agreement important?", a: "It protects the licensor's IP and revenue by clearly defining usage rights, restrictions, royalties, and legal enforceability." },
  { q: "What details must be clearly defined?", a: "The agreement must specify the scope of the license, royalty or fee structure, duration, territory, and termination conditions." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Licensing\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Royalty &\nScope Definition",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "IP Ownership\nProtection",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      label: "Duration &\nTerritory Clauses",
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
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Licensing Agreement <span className="text-pink-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally binding agreement governing the licensed use of intellectual property, technology, or products.
          </p>
          <p className="text-sm mb-8 text-pink-300">
            IP Protection • Royalties • Enforceable Terms
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 2,999 <sup className="text-lg font-semibold">*</sup>
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

export default function LicensingAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Licensing Agreement Drafting"
        subtitle="A legally binding agreement governing the licensed use of intellectual property, technology, or products."
        badgeText="IP protection • Royalties • Enforceable terms"
        icon="fileText"
        serviceID="LICENSING_AGREEMENT_DRAFTING"
        contentTitle="Why a Licensing Agreement Is Critical"
        contentDescription="A Licensing Agreement enables you to monetize intellectual property while retaining ownership. It clearly defines how, where, and for how long your IP can be used, protecting both revenue and legal rights."
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