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
  { icon: "shield", text: "Protection against Copycats and Unauthorized Use" },
  { icon: "checkCircle", text: "Enhances Credibility and Market Reputation" },
  { icon: "fileText", text: "Supports Business Growth and Expansion" },
  { icon: "calendar", text: "Secures Legal Backing and Timely Filing" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = ["Copyright Diary Number", "Copyright Objection Notice"];

const deliverables = [
  "Reply Drafting Support and Facilitation",
  "Filing Receipt for the Reply",
];

const sections = [
  {
    title: "Pre-Requisites",
    icon: "fileText",
    type: "list",
    data: prerequisites,
  },
  {
    title: "Deliverables",
    icon: "calendar",
    type: "grid",
    data: deliverables,
  },
] satisfies SectionBlock[];

/* ================================
   FAQs
================================ */

const faqs = [
  {
    q: "What is Copyright Objection?",
    a: "Copyright Objection means the copyright department has examined your application and raised concerns. You must respond to clarify and justify your claim.",
  },
  {
    q: "Why file a Reply to Copyright Objection?",
    a: "Submitting a reply within the prescribed time (15–30 days) is crucial. Failure to respond can lead to rejection of your application.",
  },
  {
    q: "How to Respond to Copyright Objection?",
    a: "The response requires legal drafting expertise. Our experts help prepare and file the reply according to your objection's grounds.",
  },
  {
    q: "What happens after filing the reply?",
    a: "The copyright department reviews the submitted reply and proceeds with the registration process upon acceptance.",
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
      label: "Expert Reply\nDrafting",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
          <rect x="7" y="2" width="10" height="4" rx="1" />
        </svg>
      ),
      label: "Filing Receipt\nfor Reply",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Timely Filing\nWithin Deadline",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Legal Expert\nReview",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Animated icon */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-red-500 shadow-lg inline-flex">
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
            Reply to Copyright <span className="text-yellow-300">Objection</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            File a professional reply to copyright objections and secure your registration without delays.
          </p>
          <p className="text-sm mb-8 text-yellow-300">
            Legal Drafting • Timely Filing • Expert Handling
          </p>

          {/* Pricing */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,999 – 3,999 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Within 15–30 Days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function ReplyToCopyrightObjectionPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Reply to Copyright Objection"
        subtitle="File a professional reply to copyright objections and secure your registration without delays."
        badgeText="Legal Drafting • Timely Filing • Expert Handling"
        icon="penTool"
        serviceID="REPLY_TO_COPYRIGHT_OBJECTION"
        contentTitle="Why Responding to an Objection Matters"
        contentDescription="When the Copyright Office raises an objection, it means your application requires clarification or justification. A well-drafted and timely reply is mandatory to avoid rejection. Our legal experts analyze the objection grounds, prepare a professional response, and ensure correct filing within the prescribed timeline."
        section1Title="Key Benefits of Filing a Proper Reply"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{
          orb1: "bg-yellow-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-yellow-500 to-red-500",
          badgeText: "text-yellow-300",
        }}
        primaryColor="text-blue-600"
        primaryBg="bg-gradient-to-r from-[#c92c41] to-[#4c3df7]"
        primaryHoverBg="bg-gradient-to-r from-[#4c3df7] to-[#c92c41]"
      />
    </>
  );
}