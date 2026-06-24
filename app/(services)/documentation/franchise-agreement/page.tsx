"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects the franchisor's brand identity and business model." },
  { icon: "checkCircle", text: "Ensures franchisee compliance with quality and operational standards." },
  { icon: "scale", text: "Prevents disputes related to royalties, territory, or termination." },
  { icon: "users", text: "Drafting franchise agreements compliant with Indian laws." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites from Client",
    icon: "checkCircle",
    type: "list",
    data: [
      "Franchisor and franchisee details",
      "Franchise model, fees, and territory",
      "Operational guidelines and royalty structure",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "fileText",
    type: "grid",
    data: [
      "Drafting franchise agreements compliant with Indian laws",
      "Clause-by-clause legal explanation",
      "Clear definition of rights, obligations, and royalties",
      "Guidance on registration, if required",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Franchise Agreement?", a: "A Franchise Agreement is a legal contract between a franchisor (brand owner) and a franchisee defining rights, obligations, royalties, territory, and operational standards." },
  { q: "Why is a Franchise Agreement important for the franchisor?", a: "It protects the franchisor's brand and business model while ensuring franchisee compliance with quality and operational standards." },
  { q: "What key details should be clearly defined?", a: "The agreement must define rights, obligations, royalty structure, territory, and termination terms to prevent disputes." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Franchise\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Royalty &\nTerritory Clauses",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Brand Protection\nClauses",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Clause-by-Clause\nExplanation",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Franchise Agreement <span className="text-yellow-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally sound contract defining rights, obligations, royalties, and operational standards.
          </p>
          <p className="text-sm mb-8 text-yellow-300">
            Brand Protection • Indian Law Compliant • Dispute Prevention
          </p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹6,999
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

export default function FranchiseAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Franchise Agreement Drafting"
        subtitle="A legally sound contract defining rights, obligations, royalties, and operational standards."
        badgeText="Brand protection • Indian law compliant • Dispute prevention"
        icon="building2"
        serviceID="FRANCHISE_AGREEMENT_DRAFTING"
        contentTitle="Why a Franchise Agreement Is Crucial"
        contentDescription="A strong Franchise Agreement safeguards brand integrity and creates a clear, enforceable framework for a successful franchisor–franchisee relationship."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-yellow-500/20", orb2: "bg-orange-500/20", iconBg: "from-yellow-500 to-orange-500", badgeText: "text-yellow-300" }}
        primaryColor="text-yellow-600"
        primaryBg="bg-gradient-to-r from-yellow-500 to-orange-500"
        primaryHoverBg="bg-gradient-to-r from-yellow-600 to-orange-600"
      />
    </>
  );
}
