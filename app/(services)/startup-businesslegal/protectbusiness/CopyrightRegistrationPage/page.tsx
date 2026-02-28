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
  { icon: "fileText", text: "Official record of authorship and ownership" },
  { icon: "shield", text: "Provides legal evidence in infringement disputes" },
  { icon: "trendingUp", text: "Easier to license, sell, or transfer rights" },
  { icon: "shield", text: "Prevents others from copying or distributing your work without permission" },
  { icon: "building2", text: "Enhances commercial value of creative work" },
] satisfies BenefitItem[];

/* ================================
   SECTIONS
================================ */

const prerequisites = [
  "Complete copyright application form (Form XIV)",
  "Copies of the work to be registered (2 copies for unpublished, 3 for published works)",
  "Full details of applicant (name, address, nationality, contact)",
  "Author's details (if different from applicant)",
  "Proof of identity and address (PAN/Aadhaar/Passport/Voter ID)",
  "Statement of applicant's interest (owner/author/assignee/publisher)",
  "Power of Attorney, if applying through agent/advocate",
  "Title, category, language, and publication details of the work",
  "Statutory fee payment (online/DD/IPO)",
];

const deliverables = [
  "Copyright Registration Certificate",
  "Diary Number for application tracking",
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
    q: "Is registration mandatory for copyright protection?",
    a: "No, copyright protection exists automatically upon creation. However, registration is highly recommended as it provides legal evidence in infringement disputes.",
  },
  {
    q: "What works can be registered?",
    a: "The Copyright Act covers literary, musical, dramatic, and artistic works, cinematograph films, sound recordings, and computer software (including source code).",
  },
  {
    q: "How long does it take?",
    a: "The legal waiting period is 30 days for any objections. If there are no objections, the process generally takes between 2 to 9 months for final registration.",
  },
  {
    q: "Who can apply?",
    a: "The author, the owner of the copyright (if different from the author), or any other person interested in the copyright (such as a publisher or assignee) can apply.",
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
      label: "Copyright\nRegistration Certificate",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M14.83 14.83a4 4 0 10-5.66-5.66" />
        </svg>
      ),
      label: "Diary Number\nfor Tracking",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      label: "Legal Proof of\nOwnership",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      label: "Infringement\nProtection",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
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
              <circle cx="12" cy="12" r="10" />
              <path d="M14.83 14.83a4 4 0 10-5.66-5.66" />
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
            Copyright <span className="text-orange-300">Registration</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Legally establish ownership of your original creative works and gain enforceable proof against infringement.
          </p>
          <p className="text-sm mb-8 text-orange-300">
            Copyright Act • IP Protection • Legal Proof
          </p>

          {/* Pricing */}
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 2,499 – 4,999 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            In 2–9 months &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function CopyrightRegistrationPage() {
  return (
    <>
      <HeroWithAddons />

      <ServicePageLayout
        title="Copyright Registration"
        subtitle="Legally establish ownership of your original creative works and gain enforceable proof against infringement."
        badgeText="Copyright Act • IP Protection • Legal Proof"
        icon="copyright"
        serviceID="COPYRIGHT_REGISTRATION"
        contentTitle="Overview"
        contentDescription="Copyright registration is the process of legally establishing the ownership of original creative works such as literary content, art, music, films, software, and more. While copyright exists automatically upon creation, registration provides official proof and makes enforcement easier in case of infringement. The process is done before the Copyright Office, and a certificate is issued upon approval."
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
        primaryColor="text-[#c92c41]"
        primaryBg="bg-gradient-to-r from-[#c92c41] to-[#e99b2b]"
        primaryHoverBg="bg-gradient-to-r from-[#b12438] to-[#d8891f]"
      />
    </>
  );
}