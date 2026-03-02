"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects investments of all joint venture partners." },
  { icon: "gavel", text: "Defines clear governance and dispute resolution mechanisms." },
  { icon: "fileText", text: "Joint Venture agreements drafted in compliance with Indian law." },
  { icon: "checkCircle", text: "Clear guidance on profit sharing, timelines, and exit strategies." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of all joint venture parties",
      "Investment contributions and ownership ratios",
      "Governance and management structure",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Legally compliant Joint Venture agreements",
      "Clear profit-sharing and governance structure",
      "Defined dispute resolution mechanisms",
      "Well-structured exit and termination clauses",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Joint Venture (JV) Agreement?", a: "A Joint Venture Agreement defines the partnership structure, investment contributions, management responsibilities, and profit-sharing terms between collaborating parties." },
  { q: "Why is a formal JV Agreement necessary?", a: "It protects investments, establishes governance rules, and provides dispute resolution mechanisms, reducing legal and operational risks." },
  { q: "What key elements are covered in a JV Agreement?", a: "The agreement covers capital contribution, profit sharing, governance, decision-making, dispute resolution, and exit strategies." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "JV Agreement\nDraft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Profit Sharing\n& Governance",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Dispute\nResolution",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Exit &\nTermination Clauses",
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
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Joint Venture Agreement <span className="text-orange-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally binding agreement defining investment, management, and profit-sharing in a joint venture.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Investment Protection • Governance Clarity • Dispute Control
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 4,499 <sup className="text-lg font-semibold">*</sup>
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

export default function JointVentureAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Joint Venture (JV) Agreement Drafting"
        subtitle="A legally binding agreement defining investment, management, and profit-sharing in a joint venture."
        badgeText="Investment protection • Governance clarity • Dispute control"
        icon="users"
        serviceID="JOINT_VENTURE_AGREEMENT_DRAFTING"
        contentTitle="Why a Joint Venture Agreement Is Essential"
        contentDescription="A well-drafted Joint Venture Agreement protects the interests of all parties by clearly defining management roles, profit sharing, governance, and exit mechanisms from the outset."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-yellow-500/20", orb2: "bg-orange-500/20", iconBg: "from-yellow-500 to-orange-500", badgeText: "text-orange-300" }}
        primaryColor="text-yellow-600"
        primaryBg="bg-gradient-to-r from-yellow-600 to-orange-600"
        primaryHoverBg="bg-gradient-to-r from-yellow-700 to-orange-700"
      />
    </>
  );
}