"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";

const benefits = [
 { icon: "scale", text: "Removes legal hassles and avoids continuing non-compliance" },
 { icon: "shield", text: "Eliminates the risk of accumulating penalties and fines" },
 { icon: "checkCircle", text: "Formal closure frees the director from OPC statutory obligations" },
 { icon: "building2", text: "Removes the entity's 'defaulter' status (if applicable)" },
] satisfies BenefitItem[];

const prerequisites = [
 "Form INC-20A for Commencement of Business should have been filed",
 "Annual ROC Return Filings should be up to date (or statement prepared)",
 "OPC should be inoperative for more than 1 or 2 consecutive financial years",
 "Bank Account of the OPC should be closed and Statement of Accounts prepared",
 "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
 "DIN of all Directors should be in 'APPROVED' status",
 "One valid Digital Signature (DSC) of an existing Director",
];
const deliverables = [
 "All filed e-forms with MCA (e.g., Form STK-2)",
 "MCA payment challan for closure fees",
 "OPC Closure Certificate (Confirmation of Striking Off)",
 "Drafted Indemnity Bond and Affidavit documents",
 "Board Resolution and Director's Consent for voluntary closure",
];
const sections = [
 { title: "Pre-Requisites for Striking Off (Form STK-2)", icon: "fileText", type: "list", data: prerequisites },
 { title: "Lawizer Deliverables", icon: "calendar", type: "grid", data: deliverables },
] satisfies SectionBlock[];

const faqs = [
 { q: "What is Closure of OPC?", a: "Closure of an OPC is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the ROC records." },
 { q: "What is the difference between Closure, Winding up, and Dissolution?", a: "Closure (Striking Off via FTE) is voluntary for non-operational OPCs (Form STK-2). Winding up is a formal liquidation, either voluntary or court-ordered. Dissolution is the final act of legal termination." },
 { q: "Why ROC filing is required for Closing an OPC?", a: "ROC filing (STK-2) officially removes the OPC from government records. Without this approval, the OPC must continue mandatory annual filings, incurring penalties if not done." },
 { q: "What is Fast Track Exit (FTE) Scheme?", a: "A simplified MCA process for easy and faster voluntary closure of inoperative companies, including OPCs, by filing Form STK-2." },
 { q: "Which OPC is eligible for Closure?", a: "Any OPC not being a Section 8 Company and inactive for over one year since incorporation or one year prior to application can apply for closure." },
 { q: "What are the costs involved?", a: "Filing fee for Form STK-2: ₹10,000. Notary and Stamp Paper charges may vary (approx. ₹1,200–₹1,500)." },
 { q: "What documents are required?", a: "Application for striking off, Board Resolution, Director's Consent, Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents." },
 { q: "What is the time limit to file?", a: "Form STK-2 must be filed with the ROC office within 30 days from the date of Signing of the Statement of Assets and Liabilities." },
] satisfies FAQItem[];

function HeroWithAddons() {
 const heroRef = useRef<HTMLElement>(null);
 const addons = [
 { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3"/><rect x="7" y="2" width="10" height="4" rx="1"/></svg>, label: "OPC Closure\nCertificate" },
 { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"/></svg>, label: "STK-2 Filed\nwith MCA" },
 { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, label: "Indemnity Bond\n& Affidavit" },
 { icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 9l10 6 10-6"/></svg>, label: "MCA Payment\nChallan" },
 ];
 return (
 <section ref={heroRef} className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]">
 <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-600/20 blur-3xl rounded-full pointer-events-none" />
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-yellow-600/20 blur-3xl rounded-full pointer-events-none" />
 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
 <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="mb-6">
 <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-yellow-500 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
 </div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex flex-col items-center">
 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">Closure of <span className="text-yellow-300">OPC</span></h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">Formally dissolve your One Person Company via the Fast Track Exit (FTE) Scheme using Form STK-2.</p>
 <p className="text-sm mb-8 text-yellow-300">Companies Act, 2013 • FTE Scheme • STK-2 Filing</p>
 <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">@ Rs. 5,999 – 11,999 <sup className="text-lg font-semibold">*</sup></p>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">Online Process &nbsp;·&nbsp; Expert Facilitation &nbsp;·&nbsp; End-to-End Support</p>
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

export default function ClosureOfOPCPage() {
 return (
 <><HeroWithAddons />
 <ServicePageLayout serviceID="CLOSURE_OF_OPC" title="Closure of OPC (Striking Off)" subtitle="Formally dissolve your One Person Company via the Fast Track Exit (FTE) Scheme and strike its name off the ROC records using Form STK-2." badgeText="Companies Act, 2013 • FTE Scheme • STK-2 Filing" icon="user" contentTitle="The Importance of Legal Closure (FTE)" contentDescription="The Fast Track Exit (FTE) route via Form STK-2 is the simplified way to close a non-operational OPC. Failure to formally close the OPC means mandatory annual filings continue, leading to heavy fines and non-compliance issues for the Director. Legal striking off removes all future compliance burdens." section1Title="Key Benefits of Formal OPC Closure" benefits={benefits} sections={sections} faqs={faqs} hideHero={true} theme={{ orb1: "bg-red-600/20", orb2: "bg-yellow-600/20", iconBg: "from-red-500 to-yellow-500", badgeText: "text-yellow-300" }} primaryColor="text-red-500" primaryBg="bg-gradient-to-r from-red-600 to-yellow-500" primaryHoverBg="bg-gradient-to-r from-red-700 to-yellow-600" /></>
 );
}
