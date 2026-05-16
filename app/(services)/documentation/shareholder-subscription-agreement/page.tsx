"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects investor and company rights through legally structured funding." },
  { icon: "checkCircle", text: "Ensures clarity on shareholding, voting rights, and dividend entitlement." },
  { icon: "scale", text: "Legally enforceable agreement in case of shareholder disputes." },
  { icon: "users", text: "Suitable for startup funding rounds and corporate investments." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "fileText",
    type: "list",
    data: [
      "Company and investor details",
      "Number, class, and type of shares to be issued",
      "Share price and investment amount",
      "Rights, obligations, and exit clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "users",
    type: "grid",
    data: [
      "Drafting Shareholder Subscription Agreements",
      "Structuring shareholding and voting rights",
      "Guidance on dividend and liquidation rights",
      "Exit clauses and investor protection mechanisms",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Shareholder Subscription Agreement?", a: "It is a legal agreement governing the issuance of shares to investors and defining their rights, obligations, and relationship with the company." },
  { q: "Why is this agreement important for investors?", a: "It ensures clarity on shareholding, voting rights, dividend entitlement, and protects the investor's interests legally." },
  { q: "What clauses are typically included?", a: "It includes share issuance details, rights and obligations of shareholders, governance provisions, and exit clauses." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Subscription\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>,
      label: "Shareholding &\nVoting Rights",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Dividend &\nLiquidation Rights",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Exit & Investor\nProtection",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Shareholder Subscription Agreement <span className="text-violet-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legally structured agreements governing investment and share issuance.
          </p>
          <p className="text-sm mb-8 text-violet-300">
            Funding • Shareholding • Governance
          </p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹8,999
            </p>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            3–5 Days &nbsp;·&nbsp; Expert Drafting &nbsp;·&nbsp; Investor-Ready
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

export default function ShareholderSubscriptionAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Shareholder Subscription Agreement"
        subtitle="Legally structured agreements governing investment and share issuance."
        badgeText="Funding • Shareholding • Governance"
        icon="gavel"
        serviceID="SHAREHOLDER_SUBSCRIPTION_AGREEMENT"
        contentTitle="Why a Subscription Agreement Is Essential for Funding"
        contentDescription="A Shareholder Subscription Agreement formalizes capital investment into a company, clearly defining shareholder rights, obligations, and governance structures. It ensures legal compliance and reduces the risk of future disputes between founders and investors."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-purple-500/20", orb2: "bg-violet-500/20", iconBg: "from-purple-500 to-violet-500", badgeText: "text-violet-300" }}
        primaryColor="text-purple-600"
        primaryBg="bg-gradient-to-r from-purple-600 to-violet-600"
        primaryHoverBg="bg-gradient-to-r from-purple-700 to-violet-700"
      />
    </>
  );
}