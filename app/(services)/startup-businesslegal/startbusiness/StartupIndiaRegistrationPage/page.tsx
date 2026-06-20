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
  { icon: "fileText", text: "DPIIT Recognition Certificate (Digital)" },
  { icon: "shield", text: "Eligibility for 100% Income Tax exemption for 3 consecutive years" },
  { icon: "trendingUp", text: "Up to 80% rebate on patent filing & 50% on trademark filing" },
  { icon: "building2", text: "Self-certification under Labour & Environmental Laws" },
  { icon: "users", text: "Access to ₹10,000 Cr Government Fund of Funds via VCs" },
  { icon: "shield", text: "Angel Tax exemption under Section 56" },
  { icon: "trendingUp", text: "Fast-track company exit within 90 days" },
  { icon: "fileText", text: "Relaxation in public procurement & government tenders" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Entity age must be less than 10 years from incorporation",
  "Entity type must be Private Limited, LLP, or Registered Partnership Firm",
  "Annual turnover should not exceed ₹100 Crore in any financial year",
  "Business must focus on innovation or improvement of products/services",
  "Entity should not be formed by splitting or reconstruction",
  "Certificate of Incorporation / Registration Certificate",
  "Company / LLP / Firm PAN Card",
  "Pitch deck or brief write-up on innovation & scalability",
  "PAN & Aadhaar of Directors / Partners",
  "Authorisation letter",
];

const deliverables = [
  "DPIIT Startup India Recognition Certificate",
  "Confirmation of eligibility for Startup India benefits",
  "Access to Startup India portal dashboard",
];

const sections = [
  {
    title: "Eligibility & Documentation",
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
    q: "How much time does Startup India registration take?",
    a: "DPIIT generally issues the Startup India Recognition Certificate within 2 working days after successful submission.",
  },
  {
    q: "Will my startup get income tax exemption automatically?",
    a: "No. After DPIIT recognition, you must separately apply for tax exemption under Section 80IAC.",
  },
  {
    q: "Is commercial office space mandatory?",
    a: "No. Residential or rented premises can be used as the registered office address.",
  },
  {
    q: "Is the Startup India certificate valuable?",
    a: "Yes. It provides tax benefits, funding access, government recognition, and compliance relaxations.",
  },
  {
    q: "Is Startup India registration free?",
    a: "Yes. There are no government fees for obtaining DPIIT Startup India recognition.",
  },
  {
    q: "Is Startupwala connected to the Government?",
    a: "No. Startupwala (or similar platforms) are private consultants and not government representatives.",
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
      label: "DPIIT Recognition\nCertificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      label: "Startup India\nPortal Access",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Angel Tax\nExemption",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: "80% Patent\nFiling Rebate",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
              <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 12v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
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
            Startup India <span className="text-orange-300">Registration</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Get DPIIT recognition and unlock tax benefits, funding access, and compliance relaxations.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            DPIIT Recognition • Tax Benefits • Govt-backed
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,499
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              60% OFF
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

/* ================================
   PAGE
================================ */

export default function StartupIndiaRegistrationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        serviceID="STARTUP_INDIA_REGISTRATION"
        title="Startup India Registration"
        subtitle="Get DPIIT recognition and unlock tax benefits, funding access, and compliance relaxations."
        badgeText="DPIIT Recognition • Tax Benefits • Govt-backed"
        icon="rocket"
        contentTitle="Overview"
        contentDescription="Startup India Registration grants official DPIIT recognition under the Government of India's flagship initiative. Recognized startups gain access to tax exemptions, intellectual property rebates, simplified compliance, government funding support, and faster exit mechanisms — all designed to encourage innovation and entrepreneurship."
        section1Title="Key Benefits of Startup India Registration"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-orange-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-orange-500 to-red-500",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-orange-500"
        primaryBg="bg-gradient-to-r from-orange-500 to-red-500"
        primaryHoverBg="bg-gradient-to-r from-orange-600 to-red-600"
      />
    </>
  );
}
