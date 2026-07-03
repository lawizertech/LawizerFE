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
  { icon: "trendingUp", text: "Easy Bank Loan up to 1 Crore without collateral/mortgage" },
  { icon: "shield", text: "Preference in procuring Government tenders" },
  { icon: "trendingUp", text: "1% exemption on interest rate on Bank Overdraft (OD)" },
  { icon: "fileText", text: "Concession in Electricity bills" },
  { icon: "shield", text: "Protection against the delay in payment from Buyers" },
  { icon: "trendingUp", text: "Tax Rebates" },
  { icon: "fileText", text: "Special 50% discount on Govt. fees for Trademark & Patent" },
  { icon: "shield", text: "Fast resolution of disputes" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "If the Applicant is Proprietorship Firm: Proprietor's PAN card, Address proof of Proprietor, Aadhaar Card of Proprietor",
  "If the Applicant is Partnership Firm: PAN Card of the Firm or Partnership Deed, Address proof of the Firm, Aadhaar Card of the Authorised Signatory",
  "If the Applicant is Pvt. Ltd./OPC/Public Ltd.: Incorporation Certificate or PAN of Company, PAN card and address proof of Director, Aadhaar Card of Authorised Signatory",
  "If the Applicant is LLP: PAN card of LLP, PAN card and address proof of all the Partners, Aadhaar Card of Authorised Signatory",
];

const deliverables = ["MSME/UDHYAM CERTIFICATE"];

const sections = [
  {
    title: "Prerequisites",
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
    q: "What is MSME?",
    a: "MSME meaning Micro Small and Medium Enterprises as defined under MSME development Act 2006.",
  },
  {
    q: "What is MSME Registration?",
    a: "MSME registration is the procedure to get your firm registered under MSME development Act for SME benefits.",
  },
  {
    q: "What is difference between MSME, SSI and Udyog Aadhaar?",
    a: "There is no difference between MSME, SSI & Udyog Aadhaar. There are all one and the same.",
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
      label: "MSME / Udhyam\nCertificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      label: "Govt. Tender\nPreference",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      ),
      label: "Collateral-Free\nLoan Upto ₹1Cr",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "50% Discount on\nTrademark Fees",
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
              <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
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
            MSME / <span className="text-orange-300">Udhyam Registration</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Register your business online for free to unlock government benefits, priority lending, and protections.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Govt-recognized • Free • Fast
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,999
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              50% OFF
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 10 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function MSMEUdhyamRegistrationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        serviceID="MSME_UDHYAM_REGISTRATION"
        title="MSME / Udhyam Registration"
        subtitle="Register your business online for free to unlock government benefits, priority lending, and protections."
        badgeText="Govt-recognized • Free • Fast"
        icon="building"
        contentTitle="Overview"
        contentDescription="MSME/Udhyam Registration is the simplified online process by which micro, small, and medium enterprises register their business with the government to access various benefits."
        section1Title="Key Benefits"
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
        primaryColor="text-orange-600"
        primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
        primaryHoverBg="bg-gradient-to-r from-[#b02538] to-[#d88920]"
      />
    </>
  );
}
