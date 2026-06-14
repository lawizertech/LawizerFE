"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ================================
   BENEFITS
================================ */

const benefits = [
  { icon: "briefcase", text: "Mandatory return for Firms, LLPs, AOPs & BOIs" },
  { icon: "scale", text: "Accurate reporting of partner capital & profit sharing" },
  { icon: "fileText", text: "Proper preparation of Balance Sheet & P&L Account" },
  { icon: "shield", text: "Ensures compliance with audit & tax regulations" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const applicableTo = [
  "Partnership Firms (registered or unregistered)",
  "Limited Liability Partnerships (LLPs)",
  "Association of Persons (AOPs)",
  "Body of Individuals (BOIs)",
  "Artificial Juridical Persons, Business Trusts & Investment Funds",
];

const documentsNeeded = [
  "PAN Card of the firm/LLP/entity",
  "Books of Accounts (Balance Sheet & Profit & Loss Account)",
  "Audit Report (if applicable)",
  "Bank Statements",
  "Details of Partner's / Member's Capital Accounts",
];

const keyRequirement = [
  "Maintenance of Books of Accounts is mandatory",
  "Preparation of Balance Sheet and P&L Account required",
  "Tax Audit report must be attached if audit is applicable",
];

const sections = [
  { title: "Who Should File ITR-5", icon: "checkCircle", type: "list", data: applicableTo },
  { title: "Documents Required", icon: "fileText", type: "list", data: documentsNeeded },
  { title: "Important Compliance Requirement", icon: "gavel", type: "alert", data: keyRequirement },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  { q: "Who is required to file ITR-5?", a: "ITR-5 is applicable to non-individual taxpayers such as Firms, LLPs, AOPs, BOIs, Business Trusts, and Investment Funds, excluding companies." },
  { q: "Can an LLP file ITR-4?", a: "No. LLPs are specifically required to file ITR-5 and cannot opt for presumptive taxation under ITR-4." },
  { q: "Are books of accounts mandatory for ITR-5?", a: "Yes. All entities filing ITR-5 must maintain proper books of accounts and prepare financial statements." },
  { q: "Is tax audit applicable for ITR-5 filers?", a: "Yes. If the entity crosses prescribed turnover limits or meets audit criteria, a tax audit report must be filed along with ITR-5." },
] satisfies FAQItem[];

/* ================================
   HERO WITH FREE ADD-ONS BANNER
================================ */

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);

  const addons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/>
          <rect x="7" y="2" width="10" height="4" rx="1"/>
        </svg>
      ),
      label: "ITR-5\nAcknowledgment",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/>
        </svg>
      ),
      label: "Balance Sheet\n& P&L Prep",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      label: "Partner Capital\nAccount Report",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      label: "Tax Audit\nCompliance Check",
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

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <rect x="2" y="7" width="20" height="14" rx="2"/>
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            ITR-5 <span className="text-red-300">Filing</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            For Firms, LLPs, AOPs, BOIs & other non-individual entities.
          </p>
          <p className="text-sm mb-8 text-red-300">
            Firms • LLPs • AOPs • BOIs
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,499 – 2,499 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Before Due Date &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
          </p>

          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">{addon.label}</p>
                    {i < addons.length - 1 && (
                      <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">+</span>
                    )}
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

/* ================================
   PAGE
================================ */

export default function ITR5Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        title="ITR-5 Filing"
        subtitle="For Firms, LLPs, AOPs, BOIs & other non-individual entities."
        badgeText="Firms • LLPs • AOPs • BOIs"
        icon="briefcase"
        serviceID="ITR-5_FILING"
        contentTitle="Overview"
        contentDescription="ITR-5 is the prescribed Income Tax Return for non-individual entities such as partnership firms, LLPs, AOPs, BOIs, and business trusts. It requires detailed financial reporting, including books of accounts, partner capital details, and audit compliance where applicable."
        section1Title="Key Highlights of ITR-5"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-red-500/20",
          orb2: "bg-pink-500/20",
          iconBg: "from-red-500 to-pink-500",
          badgeText: "text-red-300",
        }}
        primaryColor="text-red-600"
        primaryBg="bg-gradient-to-r from-red-600 to-pink-600"
        primaryHoverBg="bg-gradient-to-r from-red-700 to-pink-700"
      />
    </>
  );
}
