"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
  { icon: "scale", text: "Removes legal hassles and avoids continuing non-compliance" },
  { icon: "shield", text: "Protection from penalty and legal actions" },
  { icon: "home", text: "Boosts Transparency and Trust among stakeholders" },
  { icon: "fileText", text: "Avoids legal complications due to outdated records" },
] satisfies BenefitItem[];

const prerequisites = [
  "Form INC-20A for Commencement of Business should have been filed",
  "Copy of Latest Utility Bill of New office (Not Older than 45 Days)",
  "Copy of Rental Agreement/Sale Deed of the new office",
  "DIN of minimum 1 Director should be in 'APPROVED' Status",
  "One Valid Digital Signature (DSC) of an existing Director.",
];
const deliverables = [
  "Board Resolution draft for shifting of office",
  "Filed e-form INC-22 with MCA",
  "MCA payment challan and acknowledgment",
  "Guidance on post-filing statutory updates (Name Plate, Letterhead)",
  "Declaration for Shifting of Registered Office",
];
const sections = [
  { title: "Documentation and Pre-Requisites", icon: "fileText", type: "list", data: prerequisites },
  { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
  { q: "What documents are required for Office Address Change?", a: "New Address Proof, Board Resolution, NOC for Shifting of Registered Office and Declaration for Shifting of Registered Office. Lawizer will guide in the document preparation and filing of Forms." },
  { q: "What are the fees and charges for Shifting of Office Address?", a: "Rs. 300 is for Form INC-22 if filed within the prescribed time limit. Note that Stamp Duty on the Rent/Lease Agreement is a separate, variable cost." },
  { q: "What Forms are to be filed for changing the Company Address?", a: "Form INC-22 is the primary form filed with the ROC to notify the change. Other forms (like MGT-14 or INC-28) may be required depending on the type of shift (e.g., state change)." },
  { q: "What is time limit to file change of office address documents with ROC?", a: "The time limit is 30 days from passing of the Board Resolution for shifting of Registered Office." },
  { q: "What actions need to be taken after shifting of registered office address of Company?", a: "The Name Plate mentioning the address has to be modified, the Letterhead of the Company has to be changed, the Statutory Register has to be shifted to the new registered office, Shop Act License & PAN card need to be updated." },
  { q: "What are different types of Registered Office Shifting?", a: "a) Within the Local Limits of the City b) Within the limits of the same ROC c) Within the same state but different ROC (Only in case of Maharashtra and Tamil Nadu) d) From one state to another (Complex process requiring Central Government approval)." },
] satisfies FAQItem[];

function HeroWithAddons() {
  const heroRef = useRef<HTMLElement>(null);
  const addons = [
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "INC-22\nFiled with MCA" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>, label: "Board Resolution\nDraft" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Address Change\nDeclaration" },
    { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>, label: "MCA Payment\nChallan" },
  ];
  return (
    <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6" style={{ paddingTop: "100px", paddingBottom: "56px" }}>
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-500 shadow-lg inline-flex">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Change in Registered <span className="text-yellow-300">Office Address</span></h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Update your company's statutory address legally with timely ROC filings (INC-22).</p>
          <p className="text-sm mb-8 text-yellow-300">ROC Compliant • INC-22 Filing • Timely Updates</p>
          <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 1,499 – 2,999 <sup className="text-lg font-semibold">*</sup></p>
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

export default function ChangeInOfficeAddressPage() {
  return (
    <><HeroWithAddons />
    <ServicePageLayout title="Change in Registered Office Address" subtitle="Update your company's statutory address legally and compliantly, ensuring all ROC filings (INC-22) are completed on time." badgeText="ROC compliant • INC-22 filing • Timely updates" icon="mapPin" serviceID="CHANGE_IN_REGISTERED_OFFICE_ADDRESS" contentTitle="The Importance of Timely Filing" contentDescription="Changing your registered office address is a mandatory, multi-step compliance process. It requires passing a Board Resolution and filing Form INC-22 with the Registrar of Companies (ROC) within 30 days of the resolution. Timely compliance prevents penalties and maintains your company's legal status." section1Title="Key Benefits of Proper Address Filing" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-yellow-500/20", orb2: "bg-orange-500/20", iconBg: "from-yellow-500 to-orange-500", badgeText: "text-yellow-300" }} primaryColor="text-blue-600" primaryBg="bg-gradient-to-r from-blue-600 to-purple-600" primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700" /></>
  );
}