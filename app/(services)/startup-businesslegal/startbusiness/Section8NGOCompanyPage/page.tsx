"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* ---------- BENEFITS ---------- */

const benefits = [
  { icon: "shield", text: "Multiple privileges and exemptions under the Companies Act" },
  { icon: "fileText", text: "No minimum paid-up capital requirement" },
  { icon: "shield", text: "Exemption from stamp duty on incorporation" },
  { icon: "fileText", text: "CARO audit provisions generally not applicable" },
  { icon: "users", text: "Partnership firms can become members in their own capacity" },
  { icon: "trendingUp", text: "Donors eligible for tax deduction under Section 80G" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Minimum 2 members for Private Section 8 Company and 7 for Public Section 8 Company",
  "Minimum 2 directors (private) or 3 directors (public)",
  "Directors and members can be the same individuals",
  "Registered office address proof",
  "PAN, identity proof, and address proof of directors",
];

const deliverables = [
  "Director Identification Number (DIN)",
  "Digital Signature Certificate (DSC)",
  "Company name approval",
  "Memorandum of Association (MOA)",
  "Articles of Association (AOA)",
  "Certificate of Incorporation",
  "Company PAN Card",
  "Company TAN / TDS Number",
  "Bank account opening assistance",
];

const sections = [
  {
    title: "Pre-Requisites for Section 8 Registration",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You'll Receive",
    icon: "building",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Section 8 Company?",
    a: "A Section 8 Company is a non-profit organization registered under the Companies Act, 2013, formed to promote charitable objectives such as education, social welfare, arts, or environment.",
  },
  {
    q: "Is commercial office space mandatory?",
    a: "No. Residential or rented premises can be used as the registered office address.",
  },
  {
    q: "Is Section 8 registration renewed annually?",
    a: "No. Once incorporated, it remains valid until closed. However, annual ROC compliance filings are mandatory.",
  },
  {
    q: "Can profits be distributed to members?",
    a: "No. All profits must be reinvested toward the charitable objectives of the company.",
  },
  {
    q: "Is there any minimum capital requirement?",
    a: "No. Section 8 companies usually operate as companies limited by guarantee and do not require minimum share capital.",
  },
  {
    q: "Are PF and GST automatically applicable?",
    a: "No. Applicability depends on employee count, turnover, and nature of activities — not company type.",
  },
  {
    q: "Can a Section 8 company be converted into a Private Limited Company?",
    a: "Yes, subject to approval from the Registrar of Companies and compliance with prescribed procedures.",
  },
  {
    q: "What is a DIN?",
    a: "DIN (Director Identification Number) is a unique number issued by MCA for individuals intending to act as company directors.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to electronically sign documents submitted to the ROC.",
  },
  {
    q: "Do we need to deposit funds before incorporation?",
    a: "No. Funds are deposited after incorporation once the company bank account is opened.",
  },
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
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      label: "Director\nIdentification No.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Digital Signature\nCertificate (DSC)",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "Certificate of\nIncorporation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "MOA & AOA\nDrafted",
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
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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
            Section 8 <span className="text-orange-300">NGO Company</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A highly credible non-profit structure for social, charitable, and public welfare initiatives.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Non-Profit • Tax Benefits • Limited Liability
          </p>

          {/* Pricing */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 8,999 – 14,999 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 20 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
          </p>

          {/* Add-ons box */}
          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                      {addon.label}
                    </p>
                    {i < addons.length - 1 && (
                      <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">
                        +
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Facilitation Fees. Government Charges Extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */

export default function Section8NGOCompanyPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        serviceID="SECTION_8_NGO_COMPANY"
        title="Section 8 NGO Company"
        subtitle="A highly credible non-profit structure for social, charitable, and public welfare initiatives."
        badgeText="Non-Profit • Tax Benefits • Limited Liability"
        icon="users"
        contentTitle="Why Choose a Section 8 Company?"
        contentDescription="A Section 8 Company under the Companies Act, 2013 is an ideal legal structure for NGOs and non-profit organizations. It offers high credibility, tax exemptions, and limited liability while ensuring that all profits are used strictly for charitable objectives."
        section1Title="Key Benefits of Section 8 Registration"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-red-500/20",
          orb2: "bg-orange-400/20",
          iconBg: "from-red-500 to-orange-400",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-red-500"
        primaryBg="bg-gradient-to-r from-red-500 to-orange-400"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-500"
      />
    </>
  );
}
