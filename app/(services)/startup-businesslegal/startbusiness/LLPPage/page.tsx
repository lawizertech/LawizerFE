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
  {
    icon: "shield",
    text: "Limited liability protection to partners' personal assets",
  },
  {
    icon: "trendingUp",
    text: "Better image and enhanced credibility in the market",
  },
  {
    icon: "fileText",
    text: "No mandatory audit requirement and minimal annual compliances",
  },
  {
    icon: "building",
    text: "Continuity of business with perpetual succession",
  },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "Minimum of 2 partners are required",
  "If a body corporate is a partner, a natural person must be nominated",
  "No concept of share capital — partners contribute agreed capital",
  "KYC documents of partners (PAN, identity proof, address proof)",
];

const deliverables = [
  "DIN for 2 designated partners",
  "Digital Signature Certificate (DSC) for 1 partner",
  "LLP Incorporation Certificate",
  "Drafted and filed LLP Agreement",
  "LLP PAN Card",
  "LLP TAN / TDS Number",
  "Bank account opening assistance",
];

const sections = [
  {
    title: "Pre-Requisites for LLP Registration",
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
    q: "What documents are required to set up an LLP in India?",
    a: "Basic documents such as photograph, PAN card, and one address proof of the partners are sufficient for LLP incorporation.",
  },
  {
    q: "Is commercial office space required to start an LLP?",
    a: "No. You may use a residential or rented address as the registered office. The address can be changed later if required.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "The ROC is a government authority under the Ministry of Corporate Affairs responsible for registration and compliance of LLPs and companies.",
  },
  {
    q: "Do partners need to visit the ROC office physically?",
    a: "No. LLP incorporation is a completely online process. All filings and approvals are handled digitally.",
  },
  {
    q: "Is LLP registration required to be renewed every year?",
    a: "No renewal is required. However, LLPs must file basic annual returns to remain compliant.",
  },
  {
    q: "What is a DIN?",
    a: "DIN (Designated Partner Identification Number) is a unique identification number issued by the MCA to become a designated partner in an LLP.",
  },
  {
    q: "What is a DSC?",
    a: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
  },
  {
    q: "Can the LLP office address be changed after incorporation?",
    a: "Yes. The registered office address of an LLP can be changed anytime after incorporation.",
  },
  {
    q: "What is an LLP Agreement?",
    a: "The LLP Agreement defines the internal rules of the LLP, including capital contribution, profit sharing, business activities, and partner rights.",
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
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      label: "DIN for 2\nDesignated Partners",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "DSC for\n1 Partner",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "LLP Incorporation\nCertificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "LLP Agreement\nDrafted & Filed",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
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
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
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
            Limited Liability Partnership
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A flexible business structure combining partnership benefits with limited liability protection.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            LLP Registration • Startup Friendly • Low Compliance
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹3,999
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              Save ₹2,500
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 15 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function LLPIncorporationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        serviceID="LIMITED_LIABILITY_PARTNERSHIP"
        title="Limited Liability Partnership (LLP)"
        subtitle="A flexible business structure combining partnership benefits with limited liability protection."
        badgeText="LLP Registration • Startup Friendly • Low Compliance"
        icon="briefcase"
        contentTitle="Why Choose an LLP for Your Business?"
        contentDescription="A Limited Liability Partnership (LLP) under the LLP Act, 2008 offers the operational flexibility of a partnership with the legal protection of limited liability. It is ideal for startups, professionals, and small businesses seeking structure with minimal compliance."
        section1Title="Key Benefits of LLP Registration"
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
