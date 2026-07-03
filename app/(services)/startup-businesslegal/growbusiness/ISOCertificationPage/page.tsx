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
  { icon: "trendingUp", text: "Helps in building Management processes suitable for the business" },
  { icon: "shield", text: "Inspires confidence and improves public image" },
  { icon: "building", text: "Provides eligibility to enter global markets" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
  "PAN Card of the organisation",
  "Address Proof of the organisation",
  "PAN card of Authorised signatory",
];

const deliverables = ["ISO CERTIFICATE"];

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
    q: "What is ISO 9001:2015?",
    a: "ISO means International Standard Organization. ISO prescribes a set of requirements, if maintained business organization, ISO certificate is issued to such organization. ISO 9001:2015 is the International Standard for Quality Management Systems (QMS). It provides a set of requirements that helps management of business to achieve customer satisfaction.",
  },
  {
    q: "What is benefit of ISO Certification in India?",
    a: "ISO certification gives the confidence that your business has the capability to provide HIGH QUALITY goods and services to its customers. Improves public image, Inspires confidence of the market and helps in growth of business, Helps in getting Govt. Tenders, Provides eligibility to enter global markets, Good marketing tool.",
  },
  {
    q: "How many days it takes to complete ISO 9001 process in India?",
    a: "It depends upon the size of the business and current level of management practices. Typically it may take from 5 to 90 working days.",
  },
  {
    q: "Who can apply for ISO 9001 standards?",
    a: "ISO 9001 standard is applicable to companies of any size or sector. Any business like Proprietorship firm, Partnership, Private Limited Companies, LLP, One Person company, Public Ltd., Trusts, NGO, Hospitals, Govt. Agencies.",
  },
  {
    q: "What are ISO certification bodies?",
    a: "They are the registered organizations eligible to issue ISO certificates to Companies adhering to ISO standards.",
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
      label: "ISO\nCertificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3c-2.5 3-4 5.5-4 9s1.5 6 4 9M12 3c2.5 3 4 5.5 4 9s-1.5 6-4 9M3 12h18" />
        </svg>
      ),
      label: "Global Market\nEligibility",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Quality\nAssurance Mark",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "Govt. Tender\nEligibility",
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
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="M9 12l2 2 4-4" />
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
            ISO <span className="text-orange-300">Certification</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Achieve international standards for quality and efficiency to boost credibility and access global opportunities.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Globally Recognized • Quality-Driven • Trustworthy
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

export default function ISOCertificationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="ISO Certification"
        subtitle="Achieve international standards for quality and efficiency to boost credibility and access global opportunities."
        badgeText="Globally recognized • Quality-driven • Trustworthy"
        icon="shield"
        serviceID="ISO_CERTIFICATION"
        contentTitle="Overview"
        contentDescription="ISO Certification signifies that a company adheres to established International Organization for Standardization (ISO) standards, indicating a commitment to quality and efficient management systems."
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
