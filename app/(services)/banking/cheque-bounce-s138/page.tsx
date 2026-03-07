"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "gavel", text: "Criminal remedy for debt recovery with imprisonment and heavy fines under law." },
  { icon: "clock", text: "Faster and more effective recovery mechanism compared to lengthy civil suits." },
  { icon: "scale", text: "Recovery of cheque amount along with interest, compensation, and legal costs." },
  { icon: "fileText", text: "End-to-end handling till final court order and execution of recovery." },
] satisfies BenefitItem[];

const prerequisites = [
  "Cheque must be presented within its validity period (generally 3 months).",
  "Cheque should be dishonored for legally recognized reasons such as insufficient funds.",
  "Legal Demand Notice must be sent within 30 days of receiving the Cheque Return Memo.",
  "Drawer must fail to make payment within 15 days of receiving the notice.",
  "Criminal complaint must be filed within 30 days after expiry of the 15-day notice period.",
];
const documentsRequired = [
  "Original dishonored cheque.",
  "Original cheque return memo issued by the bank.",
  "Copy of the legal demand notice sent to the drawer.",
  "Postal or courier receipt and delivery acknowledgement.",
];
const deliverables = [
  "Drafting and dispatch of a legally compliant demand notice.",
  "Drafting and filing of Section 138 criminal complaint before Magistrate Court.",
  "Complete legal representation during trial and hearings.",
  "Execution support to recover cheque amount, fine, and compensation.",
];
const sections = [
  { title: "Mandatory Legal Prerequisites (Strict Timelines)", icon: "clock", type: "list", data: prerequisites },
  { title: "Documents Required", icon: "fileText", type: "list", data: documentsRequired },
  { title: "What Lawizer Delivers", icon: "scale", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "When does a cheque bounce become a criminal offence?", a: "When a cheque issued towards a legally enforceable debt is dishonored due to insufficient funds or similar reasons, and statutory timelines under Section 138 are followed." },
  { q: "Why is Section 138 more effective than a civil suit?", a: "It is a criminal offence carrying imprisonment and fines, creating strong pressure on the drawer to settle quickly." },
  { q: "What is the deadline for sending the legal notice?", a: "The legal demand notice must be sent within 30 days of receiving the cheque return memo from the bank." },
  { q: "When can the court complaint be filed?", a: "If payment is not made within 15 days of notice receipt, the complaint must be filed within the next 30 days." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>,
      label: "Legal Demand\nNotice Draft",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
      label: "S.138 Complaint\nFiling",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      label: "Court\nRepresentation",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
      label: "Recovery &\nExecution Support",
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M14 14l-4.5 4.5M18.5 9.5l-9 9M9.5 4l3 3-7 7-3-3 7-7zM14.5 9l3 3 1-4-4 1z"/>
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            Cheque Bounce Case <span className="text-indigo-300">(Section 138)</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            Criminal proceedings under the Negotiable Instruments Act for fast and effective debt recovery.
          </p>
          <p className="text-sm mb-8 text-indigo-300">
            Criminal Remedy • Strict Timelines • Court Representation
          </p>

          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
            @ Rs. 1,499 <sup className="text-lg font-semibold">*</sup>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            Notice within 30 Days &nbsp;·&nbsp; End-to-End Handling &nbsp;·&nbsp; Court Filing
          </p>

          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                {addons.map((addon, i) => (
                  <div key={i} className="relative flex flex-col items-center gap-3 w-full">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">{addon.icon}</div>
                    <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">{addon.label}</p>
                    {i < addons.length - 1 && <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">+</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">*Facilitation Fees. Government Charges Extra.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function ChequeBounceS138Page() {
  return (
    <>
      <HeroWithAddons />
      <ServicePageLayout
        serviceID="CHEQUE_BOUNCE_S138"
        title="Cheque Bounce Case (Section 138)"
        subtitle="Criminal proceedings under the Negotiable Instruments Act for fast and effective debt recovery."
        badgeText="Criminal Remedy • Strict Timelines • Court Representation"
        icon="gavel"
        contentTitle="Recover Your Money Through Section 138 Proceedings"
        contentDescription="Section 138 of the Negotiable Instruments Act provides a powerful criminal remedy against cheque dishonour. Strict timelines apply, and professional handling ensures faster recovery of dues, interest, and compensation."
        section1Title="Why Section 138 Is the Strongest Debt Recovery Tool"
        benefits={benefits}
        sections={sections}
        faqs={faqs}
        hideHero={true}
        theme={{ orb1: "bg-purple-500/20", orb2: "bg-indigo-500/20", iconBg: "from-purple-500 to-indigo-500", badgeText: "text-indigo-300" }}
        primaryColor="text-purple-600"
        primaryBg="bg-gradient-to-r from-purple-600 to-indigo-600"
        primaryHoverBg="bg-gradient-to-r from-purple-700 to-indigo-700"
      />
    </>
  );
}