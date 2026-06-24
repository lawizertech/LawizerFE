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
  { icon: "shield", text: "Protection against Copycats: Strengthens your claim over the brand" },
  { icon: "checkCircle", text: "Secures a Valuable Asset: A registered brand is a critical company asset" },
  { icon: "fileText", text: "Aids in Business Growth: Supports your brand expansion" },
  { icon: "calendar", text: "Builds Credibility: Establishes trust and market credibility" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = ["Trademark Application Number"];

const deliverables = [
  "Reply drafting support and facilitation",
  "Trademark Registry filing receipt",
  "Screenshot of the reply filing",
];

const sections = [
  {
    title: "Prerequisites for Filing Reply",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Lawizer Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
  {
    q: "What is a Trademark Objection?",
    a: "A Trademark Objection means the trademark registry has examined your application and found reasons to object. The objection is issued by the Trademark Department, not a third party.",
  },
  {
    q: "Why is it important to file a reply?",
    a: "A proper reply must be submitted within 30 days of the examination report. Failure to respond may result in the application being marked as 'Abandoned'.",
  },
  {
    q: "How do you respond to a Trademark Objection?",
    a: "Responses require legal understanding and professional drafting. Expert assistance ensures objections are addressed correctly and convincingly.",
  },
  {
    q: "What happens after filing the reply?",
    a: "The reply is submitted online. The application status remains 'Objected' until examination by the Trademark Registry, which typically takes 6–12 months.",
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
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
      ),
      label: "Reply Drafting\nSupport",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "TM Registry\nFiling Receipt",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4" />
        </svg>
      ),
      label: "Screenshot of\nReply Filing",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Filed Within\n30-Day Deadline",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-red-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
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
            Reply to Trademark <span className="text-yellow-300">Objection</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Defend your trademark application with a professionally drafted and timely response.
          </p>
          <p className="text-sm mb-8 text-yellow-300">
            Trademark Objection • Reply Filing
          </p>

          {/* Pricing */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,999 – 3,999 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Within 30 Days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function ReplyToTrademarkObjectionPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Reply to Trademark Objection"
        subtitle="Defend your trademark application with a professionally drafted and timely response."
        badgeText="Trademark Objection • Reply Filing"
        icon="fileWarning"
        serviceID="REPLY_TO_TRADEMARK_OBJECTION"
        contentTitle="Why Replying to a Trademark Objection Matters"
        contentDescription="When the Trademark Registry raises an objection, a legally sound reply must be filed within 30 days. A strong response protects your brand from abandonment, strengthens your ownership claim, and moves your application closer to registration."
        section1Title="Key Benefits of Filing a Proper Reply"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-yellow-400/20",
          orb2: "bg-red-500/20",
          iconBg: "from-yellow-400 to-red-500",
          badgeText: "text-yellow-200",
        }}
        primaryColor="text-red-500"
        primaryBg="bg-gradient-to-r from-red-500 to-yellow-500"
        primaryHoverBg="bg-gradient-to-r from-red-600 to-yellow-600"
      />
    </>
  );
}
