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
  { icon: "shield", text: "Grants exclusive legal rights to use your brand name, logo, or slogan" },
  { icon: "shield", text: "Protection against misuse or infringement by competitors" },
  { icon: "trendingUp", text: "Enhances business credibility and brand value" },
  { icon: "fileText", text: "Allows use of ® symbol" },
  { icon: "building2", text: "Enables trademark licensing, assignment and franchising" },
  { icon: "trendingUp", text: "Essential for online marketplaces, export, and government tenders" },
  { icon: "shield", text: "TM registration can provide strong legal standing in disputes" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "For Individuals/Sole Proprietors/MSME/Startups: Applicant's PAN card, Address proof, MSME/Udhyam/Startup recognition if applicable (for fee concession), Aadhaar card/Passport/Driving License",
  "For Companies/LLP/Partnership Firms: Company/LLP Incorporation Certificate/Partnership Deed, PAN card of entity, Address proof of authorized signatory/partners/directors, Udyam Registration Certificate for MSME discount if applicable, TM-48 Form (authorizes attorney/agent), Copy of logo (optional, required for device marks)",
];

const deliverables = [
  "Acknowledgment Receipt with TM Application Number",
  "Registered Trademark Certificate (upon approval)",
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
    q: "What can be registered as a trademark?",
    a: "Names, logos, symbols, slogans, shapes, and combinations used to distinguish goods/services.",
  },
  {
    q: "How long does the process take?",
    a: "The legal process involves several stages (filing, examination, publication, registration) and generally takes approximately 6–12 months if uncontested by third parties.",
  },
  {
    q: "Can a trademark be renewed?",
    a: "Yes, a registered trademark is valid for 10 years and can be renewed indefinitely by paying the prescribed renewal fee (Form TM-R).",
  },
  {
    q: "What if my application is objected to?",
    a: "If the Examiner raises an objection in the Examination Report, you must file a formal reply within 30 days. You may also be required to attend a hearing.",
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
      label: "TM Application\nAcknowledgment",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
        </svg>
      ),
      label: "® Symbol\nUsage Right",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Brand\nInfringement Shield",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        </svg>
      ),
      label: "Trademark\nCertificate",
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
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
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
            Trademark <span className="text-orange-300">Registration</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Secure exclusive rights to your brand identity and safeguard against infringement.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Brand Protection • ® Rights • Legal Enforcement
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 1,199 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹3,499
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              Save ₹2,300
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 30 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function TrademarkRegistrationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Trademark Registration"
        subtitle="Secure exclusive rights to your brand identity and safeguard against infringement."
        badgeText="Brand Protection • ® Rights • Legal Enforcement"
        icon="penTool"
        serviceID="TRADEMARK_REGISTRATION"
        contentTitle="Overview"
        contentDescription="Trademark registration is a legal process for securing exclusive rights over a distinctive brand name, logo, slogan, or symbol that identifies your goods or services. Registered trademarks protect your intellectual property, prevent unauthorized use, and build brand credibility. A registered trademark is valid for 10 years and can be renewed indefinitely."
        section1Title="Key Benefits of Trademark Registration"
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
