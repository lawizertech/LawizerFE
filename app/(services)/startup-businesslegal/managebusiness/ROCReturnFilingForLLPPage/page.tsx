"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "calendar", text: "Helps in maintaining 'Active' status in the MCA Portal" },
  { icon: "shield", text: "Protection from steep penalty and legal actions" },
  { icon: "scale", text: "Boosts Confidence and Trust among partners and stakeholders" },
  { icon: "clock", text: "Avoiding mandatory 'Strike Off' action by the ROC for non-filing" },
] satisfies BenefitItem[];

const prerequisites = [
  "For Form 11 Filing (Annual Return): DIN of all Designated Partners should be in APPROVED Status, Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
  "For Form 8 Filing (Statement of Accounts): Turnover less than 40 Lac: Signed Balance Sheet & P&L. Turnover more than 40 Lac: Audited Balance Sheet (Mandatory), DIN of all Designated Partners should be in APPROVED Status, Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
];
const deliverables = [
  "All filed e-forms with MCA (Form 8 and Form 11)",
  "MCA payment challan for filing fees",
  "Financial statements preparation (if required)",
  "Certificate of filing compliance",
];
const sections = [
  { title: "Pre-Requisites for Filing (Form 8 & Form 11)", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What Forms are to be filed for ROC Return (for LLP)?", a: "LLP needs to file two eForms every year: Form 11 for the Annual Return (Compliance) and Form 8 for the Statement of Accounts (Financials)." },
  { q: "What is the LLP Annual Filing due date?", a: "Due date for filing Form 11 is 30th May of each year. Due date for filing Form 8 is 30th October of every year." },
  { q: "What is the Penalty for late filing of LLP return?", a: "Late fees of ₹100 per day is charged on each Form (Form 11 and Form 8) from the day after the due date until the filing is completed. The penalty is uncapped." },
  { q: "How to calculate Penalty for late filing of LLP Annual filing?", a: "Penalty calculation is: ₹100 x Number of days delay for Form 11 + ₹100 x Number of days delay for Form 8." },
  { q: "Is there any chance of waiver of penalty for non-filing of Form 11 & Form 8?", a: "No, there is typically no provision for waiver of penalty. The MCA has not recently announced any general waiver or amnesty scheme, making timely filing essential." },
  { q: "What happens if an LLP does not file annual returns?", a: "A) LLP & its Partners become liable for steep, uncapped late fees. B) ROC may issue notice to close the LLP. C) ROC can disqualify and block the DIN of Designated Partners, preventing them from joining other entities." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "Form 11\n(Annual Return)" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>, label: "Form 8\n(Financials)" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>, label: "MCA Payment\nChallan" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Filing Compliance\nCertificate" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">ROC Annual Filing <span className="text-blue-300">for LLP</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Mandatory annual compliance for LLPs — timely filing of Form 8 (Financials) and Form 11 (Annual Return) to avoid heavy penalties.</p>
          <p className="text-sm mb-8 text-blue-300">LLP Act, 2008 • Form 8 • Form 11</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 2,499 – 5,999 <sup className="text-lg font-semibold">*</sup></p>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Due: May 30 & Oct 30 &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation</p>
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

export default function ROCReturnFilingForLLPPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="ROC Annual Return Filing for LLP" subtitle="Mandatory annual compliance for Limited Liability Partnerships (LLP), involving timely filing of Form 8 (Financials) and Form 11 (Annual Return) to avoid heavy penalties." badgeText="LLP Act, 2008 • Form 8 • Form 11" icon="fileText" serviceID="ROC_ANNUAL_RETURN_FILING_FOR_LLP" contentTitle="The Importance of Timely Annual Filing" contentDescription="ROC Annual Filing is non-negotiable for an LLP. Failing to file Form 8 and Form 11 by their respective deadlines (October 30th and May 30th) results in an uncapped, cumulative late fee of ₹100 per day per form. This compliance step is crucial for maintaining 'Active' status and protecting Designated Partners' DINs from disqualification." section1Title="Key Benefits of Compliant LLP Filing" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-blue-600/20", orb2: "bg-purple-600/20", iconBg: "from-blue-500 to-purple-500", badgeText: "text-blue-300" }} primaryColor="text-blue-500" primaryBg="bg-gradient-to-r from-blue-600 to-purple-600" primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700" /></>
  );
}