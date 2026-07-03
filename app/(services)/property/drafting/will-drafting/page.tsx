"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";

/* -------------------------------------------------------------------------- */
/*                                   HERO                                     */
/* -------------------------------------------------------------------------- */

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);

  const addons = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M7 8h10M7 12h6M7 16h8"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Professionally Drafted\nWill Document",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0 1 8.5 4C10.24 4 11.91 4.81 12 6c.09-1.19 1.76-2 3.5-2A4.5 4.5 0 0 1 20 8.5C20 13.5 12 21 12 21z"/>
        </svg>
      ),
      label: "Dispute\nPrevention",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M9 12h6M9 16h6M9 8h6"/>
          <rect x="3" y="4" width="18" height="16" rx="2"/>
        </svg>
      ),
      label: "Clause-wise\nExplanation",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
          <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"/>
        </svg>
      ),
      label: "Registration\nGuidance",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#2a0f1c] via-[#be185d] to-[#4c0519] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
    >
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M12 21C12 21 4 13.5 4 8.5A4.5 4.5 0 0 1 8.5 4C10.24 4 11.91 4.81 12 6c.09-1.19 1.76-2 3.5-2A4.5 4.5 0 0 1 20 8.5C20 13.5 12 21 12 21z"/>
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
            Will Drafting & <span className="text-red-300">Estate Planning</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Ensure your assets are distributed exactly as you wish, preventing disputes and protecting your family.
          </p>

          <p className="text-sm mb-8 text-red-300">
            Secure Legacy • Legal Clarity • Family Protection
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              ₹2,999
            </p>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* FREE ADDONS */}
          <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(244,63,94,0.15)]">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>

            <div className="py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                      {addon.icon}
                    </div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line text-center">
                      {addon.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Final pricing depends on complexity of assets and customization.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               ORIGINAL CONTENT                             */
/* -------------------------------------------------------------------------- */

const benefits = [
  { icon: "checkCircle", text: "Ensures your property is inherited according to your wishes" },
  { icon: "users", text: "Prevents family disputes over asset distribution" },
  { icon: "gavel", text: "Legally enforceable when properly registered" },
  { icon: "shield", text: "Drafted to be clear, legally valid, and compliant under Indian law" },
] satisfies BenefitItem[];

const prerequisites = [
  "Details of assets & beneficiaries",
  "Personal details of the testator",
  "Witness details for signing",
];

const deliverables = [
  "Professionally drafted Will",
  "Clause-wise explanation",
  "Digital copy & registration guidance",
];

const sections = [
  { title: "Pre-Requisites", icon: "fileText", type: "list", data: prerequisites },
  { title: "What You Receive", icon: "gavel", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What is the purpose of a Will?", a: "A Will ensures your assets are distributed according to your wishes." },
  { q: "Is registration mandatory?", a: "Registration is not compulsory but highly advisable." },
  { q: "What assets can be included?", a: "Movable and immovable assets including property and investments." },
  { q: "Who is the Testator?", a: "The person who makes the Will." },
  { q: "Does Lawizer assist beyond drafting?", a: "Yes, including guidance for registration." },
] satisfies FAQItem[];

export default function WillDraftingPage() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        hideHero={true}
        title="Will Drafting & Estate Planning"
        subtitle="Ensure your assets are distributed exactly as you wish."
        badgeText="Legally valid • Clear • Secure"
        icon="heart"
        serviceID="WILL_DRAFTING_&_ESTATE_PLANNING"
        contentTitle="Importance of Drafting a Will"
        contentDescription="A Will protects your legacy, prevents disputes, and ensures legal clarity."
        section1Title="Key Benefits"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        theme={{
          orb1: "bg-pink-500/20",
          orb2: "bg-red-500/20",
          iconBg: "from-pink-500 to-red-500",
          badgeText: "text-red-300",
        }}
        primaryColor="text-pink-600"
        primaryBg="bg-gradient-to-r from-pink-600 to-red-600"
        primaryHoverBg="bg-gradient-to-r from-pink-700 to-red-700"
      />
    </>
  );
}
