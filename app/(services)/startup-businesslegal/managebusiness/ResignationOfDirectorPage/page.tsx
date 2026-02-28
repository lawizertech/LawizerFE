"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "shield", text: "Protects the resigning director from future penalties and liabilities" },
  { icon: "scale", text: "Ensures the company records are compliant under Companies Act, 2013" },
  { icon: "userMinus", text: "Creates an opportunity for the director to take up a new role/directorship" },
  { icon: "checkCircle", text: "Boosts transparency and trust among all stakeholders" },
] satisfies BenefitItem[];

const prerequisites = [
  "All prior forms relating to the appointment of the Director should have been filed",
  "DIN of minimum 1 Director should be in 'approved' status (to ensure quorum)",
  "One valid Digital Signature (DSC) of an existing Director (for company filing)",
  "Resignation Letter from the resigning Director must be submitted",
];
const deliverables = [
  "All filed e-forms with MCA (DIR-12 filed by Company & DIR-11 filed by Director)",
  "MCA payment challan for filing fees",
  "Drafted Board Meeting Resolution and Minutes",
  "Drafted Resignation Acceptance Letter from the Company",
];
const sections = [
  { title: "Pre-Requisites for Resignation Filing", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What documents are required for director resignation?", a: "A) Documents required from Director: PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc. B) Documents required from Company: Board Meeting Resolution and Letter of Appointment. Lawizer will assist in preparing and filing these documents with the ROC." },
  { q: "What is a Resignation Letter from Director?", a: "When a Director wishes to step down, they officially submit a written letter to the company informing them of their voluntary resignation, specifying the effective date." },
  { q: "Which forms are to be filed for resignation of director?", a: "Form DIR-12 is filed by the company (within 30 days of acceptance) and Form DIR-11 is filed by the resigning director (within 30 days of resignation date) with the ROC." },
  { q: "If there are only two directors, can one resign?", a: "No. The company must maintain the minimum required number of directors (two for a Pvt Ltd). A new additional director must be appointed first, after which the resignation can proceed." },
  { q: "Is there any liability after resignation?", a: "The resigning director remains liable only for non-compliance and actions during their tenure, but is explicitly not liable for any company actions or non-compliance occurring after the effective date of resignation." },
  { q: "Difference between Resignation and Removal of Director?", a: "Resignation is voluntary — initiated by the director. Removal is involuntary — initiated by the company against the director's will, requiring a Special Notice and Ordinary Resolution." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "DIR-12 & DIR-11\nFiled with MCA" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, label: "Board Meeting\nResolution Draft" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>, label: "Resignation\nAcceptance Letter" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>, label: "MCA Payment\nChallan" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M16 17l5-5-5-5M19 12H9M13 7l-5 5 5 5"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Resignation of <span className="text-blue-300">Director</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Ensure a director's voluntary resignation is legally executed, protecting both Director (DIR-11) and Company (DIR-12).</p>
          <p className="text-sm mb-8 text-blue-300">Companies Act, 2013 • DIR-11 • DIR-12</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 1,999 – 3,499 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Within 30 Days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation</p>
          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20"><p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p></div>
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

export default function ResignationOfDirectorPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="Resignation of Director & ROC Filing" subtitle="Ensure the voluntary resignation of a Director is legally executed, protecting both the Director (DIR-11) and the Company (DIR-12) from future liabilities and penalties." badgeText="Companies Act, 2013 • DIR-11 • DIR-12" icon="userMinus" serviceID="RESIGNATION_OF_DIRECTOR_&_ROC_FILING" contentTitle="The Importance of Formal Compliance" contentDescription="A Director's resignation requires dual compliance: the Company must file DIR-12 (within 30 days of acceptance) and the resigning Director must file DIR-11 (within 30 days of resignation). Failing to file DIR-11 leaves the director's name on the records and exposed to non-compliance penalties. A correctly executed process formally ends the director's statutory liabilities." section1Title="Key Benefits of a Compliant Resignation" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-blue-600/20", orb2: "bg-purple-600/20", iconBg: "from-blue-500 to-purple-500", badgeText: "text-blue-300" }} primaryColor="text-blue-500" primaryBg="bg-gradient-to-r from-blue-600 to-purple-600" primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700" /></>
  );
}