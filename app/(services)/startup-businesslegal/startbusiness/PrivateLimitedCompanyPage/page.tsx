"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";
import { useCallback } from "@/context/callbackContext";

/* ================================
   BENEFITS
================================ */

const benefits = [
  { icon: "shield", text: "Limited Liability Protection to Directors" },
  { icon: "trendingUp", text: "Better image and credibility in the market" },
  { icon: "building2", text: "Easy to raise funds and loans" },
  { icon: "users", text: "Preferred business structure for investors" },
  { icon: "users", text: "Easy to attract and retain employees" },
  { icon: "fileText", text: "Easy to sell or transfer ownership" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Minimum 2 shareholders",
  "Minimum 2 directors",
  "Directors and shareholders can be the same person",
  "At least one director must be an Indian resident (182 days stay in previous FY)",
  "PAN card copy (mandatory for Indian nationals)",
  "Identity proof (Passport, Voter ID, Driving License, Aadhaar Card)",
  "Address proof (Bank statement / Utility bill – not older than 30–60 days)",
];

const deliverables = [
  "DIN (Director Identification Number) for 2 directors",
  "Digital Signature Certificates (DSC) for promoters",
  "Company Name Approval (RUN / SPICe)",
  "MOA & AOA drafting",
  "Certificate of Incorporation",
  "Company PAN Card",
  "Company TAN / TDS Number",
  "Bank Account Opening support",
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
    q: "What documents are required to set up a Private Limited Company?",
    a: "Only basic documents are required such as photograph, PAN card, and address proof of directors.",
  },
  {
    q: "Is commercial office space required?",
    a: "No. You can use your residential or rented address as the registered office. This can be changed later.",
  },
  {
    q: "Who is the Registrar of Companies (ROC)?",
    a: "ROC is a government authority responsible for company registrations. Each state has at least one ROC office.",
  },
  {
    q: "Is physical presence required during incorporation?",
    a: "No. The entire incorporation process is completed online without visiting the ROC office.",
  },
  {
    q: "Is Private Limited Company registration renewable?",
    a: "No renewal is required. However, annual ROC filings are mandatory.",
  },
  {
    q: "What is DIN?",
    a: "Director Identification Number (DIN) is a unique ID issued by ROC to a person appointed as director.",
  },
  {
    q: "What is DSC?",
    a: "Digital Signature Certificate (DSC) is used to electronically sign ROC forms during incorporation.",
  },
  {
    q: "Can the registered office be changed later?",
    a: "Yes, the company's registered office address can be changed anytime after incorporation.",
  },
  {
    q: "Is minimum capital required?",
    a: "There is no minimum capital requirement. Capital can be deposited after incorporation.",
  },
  {
    q: "Are GST and PF mandatory after incorporation?",
    a: "No. GST and PF apply only after crossing prescribed threshold limits.",
  },
] satisfies FAQItem[];

/* ================================
   HERO WITH FREE ADD-ONS BANNER
================================ */

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const { openCallback } = useCallback();

  // Hide the floating "Free Consultation" popup while hero is visible,
  // show it again once user scrolls past the hero.
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Try to find the popup by common selectors — adjust if your popup has a specific id/class
    const getPopup = () =>
      document.querySelector<HTMLElement>(
        '[class*="consultation"], [class*="Consultation"], [id*="consultation"], [id*="Consultation"], [class*="free-popup"], [class*="chat-widget"], [class*="ChatWidget"]'
      );

    const observer = new IntersectionObserver(
      ([entry]) => {
        const popup = getPopup();
        if (!popup) return;
        // Hide popup while hero is intersecting (visible), show when scrolled past
        popup.style.visibility = entry.isIntersecting ? "hidden" : "visible";
        popup.style.opacity = entry.isIntersecting ? "0" : "1";
        popup.style.pointerEvents = entry.isIntersecting ? "none" : "auto";
        popup.style.transition = "opacity 0.3s ease";
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const addons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 4v5M16 4v5" />
        </svg>
      ),
      label: "Company\nPAN & TAN",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "MOA + AOA +\nIncorporation Certificate",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      {/* Background image — matches ServicePageLayout's own hero style */}
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />

      {/* Colour orbs — same as ServicePageLayout */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated briefcase icon — restored from original */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            </svg>
          </div>
        </motion.div>

        {/* Title — fade in from below, same as ServicePageLayout hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Private Limited Company
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            A scalable, investor-friendly business structure with limited liability protection.
          </p>

          <p className="text-sm mb-8 text-orange-300">
            Startup Friendly • Investor Ready • Limited Liability
          </p>

          {/* Pricing */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹4,999
            </p>
            <motion.div
              whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
              className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
            >
              80% OFF
            </motion.div>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-2 tracking-wide">
            In 15 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
          </p>

          {/* Govt Fees Notice + Callback */}
          <div className="mb-8 flex flex-col items-center gap-2">
            <p className="text-orange-300 text-sm sm:text-base font-bold tracking-wide">
              ⚠️ Government Fees + DSC Fees Excluded
            </p>
            <button
              onClick={() => openCallback("Private Limited Company")}
              className="mt-1 text-xs sm:text-sm text-white/80 underline underline-offset-2 hover:text-orange-300 transition-colors duration-200 cursor-pointer"
            >
              📞 Want to know more about the fee structure? Request a Callback
            </button>
          </div>

          {/* Add-ons box */}
          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-12">
              <div className="grid grid-cols-2 gap-8 items-start justify-items-center max-w-sm mx-auto">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                      {addon.label}
                    </p>
                    {i < addons.length - 1 && (
                      <span className="absolute -right-4 top-4 text-white/40 text-xl font-light">
                        +
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Facilitation Fees only. Government Fees & DSC Fees are charged separately.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ================================
   PAGE
================================ */

export default function PrivateLimitedCompanyPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Private Limited Company"
        subtitle="A scalable, investor-friendly business structure with limited liability protection."
        badgeText="Startup Friendly • Investor Ready • Limited Liability"
        icon="briefcase"
        serviceID="PRIVATE_LIMITED_COMPANY"
        contentTitle="Overview"
        contentDescription="A Private Limited Company (Pvt. Ltd.) is one of the most popular business structures in India. It requires a minimum of two directors and shareholders, offers limited liability protection, and operates as a separate legal entity. This structure is ideal for startups and growing businesses looking to raise funds, attract talent, and scale operations with credibility."
        section1Title="Key Benefits of Private Limited Company"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-blue-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-red-500 to-orange-500",
          badgeText: "text-orange-300",
        }}
        primaryColor="text-red-500"
        primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
      />
    </>
  );
}
