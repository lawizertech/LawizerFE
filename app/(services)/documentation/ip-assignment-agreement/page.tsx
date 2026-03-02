"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Ensures lawful and complete transfer of intellectual property rights." },
  { icon: "scale", text: "Prevents future disputes related to IP ownership." },
  { icon: "gavel", text: "Professionally drafted IP assignment agreements." },
  { icon: "fileText", text: "Guidance on registration, where applicable." },
] satisfies BenefitItem[];

const sections = [
  {
    title: "Pre-Requisites for Drafting",
    icon: "checkCircle",
    type: "list",
    data: [
      "Details of the intellectual property being assigned",
      "Assignor and assignee information",
      "Scope and nature of the IP transfer",
    ],
  },
  {
    title: "What Lawizer Delivers",
    icon: "gavel",
    type: "grid",
    data: [
      "Drafting legally sound IP assignment agreements",
      "Clear definition of ownership transfer",
      "Protection against future ownership claims",
      "Registration guidance, if applicable",
    ],
  },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is an Intellectual Property Assignment Agreement?", a: "It is a legal document that transfers ownership of intellectual property from one party (assignor) to another (assignee)." },
  { q: "Why is a formal IP assignment agreement necessary?", a: "Without a written agreement, IP ownership can remain unclear, leading to disputes. A formal assignment legally secures ownership." },
  { q: "What types of intellectual property can be assigned?", a: "The agreement can cover copyrights, trademarks, patents, trade secrets, and other intellectual property rights." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "IP Assignment\nAgreement Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Ownership\nTransfer Clauses",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/></svg>,
      label: "Future Claims\nProtection",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>,
      label: "Registration\nGuidance",
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
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            IP Assignment Agreement <span className="text-indigo-300">Drafting</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A legally enforceable document to formally transfer intellectual property ownership.
          </p>
          <p className="text-sm mb-8 text-indigo-300">
            Clear Ownership • Dispute Prevention • Registration-ready
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 2,499 <sup className="text-lg font-semibold">*</sup>
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

export default function IPAssignmentAgreementPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="IP Assignment Agreement Drafting"
        subtitle="A legally enforceable document to formally transfer intellectual property ownership."
        badgeText="Clear ownership • Dispute prevention • Registration-ready"
        icon="shield"
        serviceID="IP_ASSIGNMENT_AGREEMENT_DRAFTING"
        contentTitle="Why an IP Assignment Agreement Is Essential"
        contentDescription="An IP Assignment Agreement ensures that ownership of intellectual property is legally transferred, eliminating ambiguity and protecting the assignee from future claims."
        section1Title="Key Protections & Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-purple-500/20", orb2: "bg-indigo-500/20", iconBg: "from-purple-500 to-indigo-500", badgeText: "text-indigo-300" }}
        primaryColor="text-purple-600"
        primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
        primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
      />
    </>
  );
}