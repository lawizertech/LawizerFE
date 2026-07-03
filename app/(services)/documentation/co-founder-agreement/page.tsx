"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { serverApi } from "@/lib/apis/axios";
import { useState } from "react";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const SERVICE_CODE = "CO_FOUNDER_AGREEMENT";

const benefits = [
  { icon: "gavel", text: "Prevents conflicts among founders by clearly defining rights and obligations." },
  { icon: "checkCircle", text: "Clarifies equity ownership, contributions, and decision-making authority." },
  { icon: "shield", text: "Protects business continuity and investor confidence." },
  { icon: "fileText", text: "Defines roles, responsibilities, profit-sharing, and exit mechanisms." },
] satisfies BenefitItem[];

const sections = [
  {
    type: "alert",
    data: { type: "warning", title: "Critical for Every Startup", description: "Lack of a Co-Founder Agreement is one of the biggest reasons for startup failure and investor rejection." },
  },
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Founder details, roles, and equity distribution",
      "Decision-making mechanisms and voting rights",
      "Contributions (monetary, intellectual property, or assets)",
      "Exit, vesting, and dispute resolution clauses",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Startup-specific co-founder agreement",
      "Equity, vesting, and dilution-safe clauses",
      "Governance and decision-making framework",
      "Exit, deadlock, and dispute resolution provisions",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is a Co-Founder Agreement?", a: "It is a legal contract between startup founders defining equity ownership, roles, responsibilities, decision-making, and exit mechanisms." },
  { q: "Why is a Co-Founder Agreement important?", a: "It prevents founder disputes, protects the startup's future, and is essential for raising external investment." },
  { q: "Does it cover intellectual property?", a: "Yes. It clearly assigns ownership of intellectual property created by founders to the company." },
  { q: "Can the agreement be customized?", a: "Absolutely. Lawizer drafts agreements tailored to your startup's structure, stage, and long-term vision." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Co-Founder\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
      label: "Equity & Vesting\nClauses",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "IP Ownership\nProtection",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Exit & Dispute\nResolution",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Co-Founder Agreement <span className="text-purple-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally enforceable agreement defining equity, roles, responsibilities, and exit mechanisms for startup founders.
          </p>
          <p className="text-sm mb-8 text-purple-300">
            Startup-ready • Investor-friendly • Dispute-proof
          </p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹3,999
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

export default function CoFounderAgreementPage() {
  const [requesting, setRequesting] = useState(false);

  const handleStartService = async () => {
    try {
      setRequesting(true);
      const token = localStorage.getItem("token");
      if (!token) { toast.error("Please login to continue"); return; }
      const res = await serverApi.post("/api/user/service-request", { serviceCode: SERVICE_CODE });
      if (!res.data?.success) { toast.error(res.data?.message || "Failed to start service"); return; }
      toast.success("Service request submitted successfully 🎉");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setRequesting(false);
    }
  };

  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="Co-Founder Agreement Drafting"
        subtitle="A legally enforceable agreement defining equity, roles, responsibilities, and exit mechanisms for startup founders."
        badgeText="Startup-ready • Investor-friendly • Dispute-proof"
        icon="users"
        serviceID="CO-FOUNDER_AGREEMENT_DRAFTING"
        contentTitle="Why a Co-Founder Agreement Is Crucial"
        contentDescription="A Co-Founder Agreement establishes clarity among founders, safeguards intellectual property, and creates a strong legal foundation required for scaling and raising investment."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-indigo-500/20", orb2: "bg-purple-500/20", iconBg: "from-indigo-500 to-purple-500", badgeText: "text-purple-300" }}
        primaryColor="text-indigo-600"
        primaryBg="bg-gradient-to-r from-indigo-600 to-purple-600"
        primaryHoverBg="bg-gradient-to-r from-indigo-700 to-purple-700"
      />
    </>
  );
}
