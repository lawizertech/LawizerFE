"use client";

import { useEffect, useRef } from "react";
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
  {
    icon: "shield",
    text: "Seamless Input Tax Credit (ITC) on purchases to reduce tax liability",
  },
  {
    icon: "trendingUp",
    text: "Legal authority to collect GST from customers",
  },
  {
    icon: "fileText",
    text: "Simplified compliance with single nationwide registration",
  },
  {
    icon: "building2",
    text: "Access to unified national market without barriers",
  },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Aggregate turnover exceeding ₹20 Lakh in a financial year (₹10 Lakh for Special Category States)",
  "Any inter-state supply of goods or services",
  "E-commerce operators and vendors selling through online portals",
  "Specific cases: Non-residents, importers, and certain notified suppliers",
  "PAN card of the business/applicant",
  "Proof of business address (rent agreement, utility bill, etc.)",
  "Identity and address proof of proprietors/partners/directors (Aadhaar, Voter ID, etc.)",
  "Bank account details and cancellation cheque",
  "Authorization letter or board resolution (if applicable)",
  "Digital photograph of the authorized signatory",
];

const deliverables = [
  "15-digit Goods and Services Tax Identification Number (GSTIN)",
  "GST Registration Certificate",
  "Login credentials for GST Portal",
  "Eligibility to file GST returns and claim ITC",
];

const sections = [
  {
    title: "Prerequisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "What You'll Receive",
    icon: "building2",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What is Central GST (CGST)?",
    a: "When the supply of goods and services takes place WITHIN a state (intra-state), two taxes are levied. One part is levied by the State Government, and the other is by the Central Government. The tax levied by the Central Government is known as Central GST (CGST).",
  },
  {
    q: "What is State GST (SGST)?",
    a: "State GST (SGST) is the component of GST collected by the state government on all goods and services supplied within that state (intra-state trade).",
  },
  {
    q: "What is Integrated GST (IGST)?",
    a: "When the supply of goods and services takes place BETWEEN two states (inter-state), Integrated GST (IGST) is levied by the Central Government. In the case of inter-state supply, only IGST is applicable.",
  },
  {
    q: "What are the benefits of GST in India?",
    a: "Many indirect taxes like VAT, Excise Duty, Service Tax, CST, Import-Export, Octroi, Luxury Tax, and Entertainment Tax have been subsumed under GST. This requires only a single GST registration, resulting in fewer compliances and helping businesses focus more on their core operations.",
  },
  {
    q: "What are the GST Rates in India?",
    a: "The GST rate depends on the type of goods and services. Currently, the main slab rates are 5%, 12%, 18%, and 28%. Gold and rough diamonds are taxed separately at 3% and 0.25%, respectively.",
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
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "GSTIN\nCertificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      ),
      label: "GST Portal\nLogin Credentials",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" />
        </svg>
      ),
      label: "ITC Claim\nEligibility",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "GST Return\nFiling Support",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#c92c41]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#4c3df7]/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#c92c41] to-[#e99b2b] shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
              <rect x="7" y="2" width="10" height="4" rx="1" />
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
            GST Registration
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Enroll your business under India's unified tax system to comply, collect, and claim credits seamlessly.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            GSTIN • ITC Benefits • Nationwide Compliance
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹1,999
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              50% OFF
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 7 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

/* ================================
   PAGE
================================ */

export default function GSTRegistrationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        serviceID="GST_REGISTRATION"
        title="GST Registration"
        subtitle="Enroll your business under India's unified tax system to comply, collect, and claim credits seamlessly."
        badgeText="GSTIN • ITC Benefits • Nationwide Compliance"
        icon="fileText"
        contentTitle="Overview"
        contentDescription="Goods and Services Tax (GST) is a comprehensive, destination-based indirect tax that has replaced multiple indirect taxes in India. GST Registration is mandatory for businesses whose aggregate turnover exceeds the prescribed limit and for certain other categories of suppliers. Registration allows businesses to legally collect GST from customers and claim Input Tax Credit (ITC), ensuring a seamless flow of tax credit."
        section1Title="Key Benefits of GST Registration"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-[#c92c41]/20",
          orb2: "bg-[#4c3df7]/20",
          iconBg: "from-[#c92c41] to-[#e99b2b]",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-[#c92c41]"
        primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
        primaryHoverBg="bg-gradient-to-r from-[#b12438] to-[#d8891f]"
      />
    </>
  );
}
