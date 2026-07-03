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
 { icon: "scale", text: "Boosts transparency and trust among stakeholders" },
 { icon: "shield", text: "Protection from penalty and legal actions" },
 { icon: "home", text: "Eligibility to raise unsecured loans from the Director (as applicable)" },
 { icon: "checkCircle", text: "Ensures compliance under the Companies Act, 2013" },
 { icon: "users", text: "Formalizes the structure and decision-making authority of the Board" },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
 "ROC Return filing must be up to date",
 "DIN of minimum 1 director should be in 'Approved' status",
 "One valid DSC (Digital Signature Certificate) of an existing director",
 "Appointee must be an Indian Resident (if required)",
];

const deliverables = [
 "All filed e-forms with MCA (DIR-12)",
 "MCA payment challan",
 "Board Resolution draft",
 "Consent letter draft (DIR-2)",
 "Proper record keeping and statutory compliance",
];

const sections = [
 {
 title: "Pre-Requisites for Director Appointment",
 icon: "fileText",
 type: "list",
 data: prerequisites,
 },
 {
 title: "Lawizer Deliverables",
 icon: "home",
 type: "grid",
 data: deliverables,
 },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
 {
 q: "What documents are required for director appointment?",
 a: "A) Documents required from Director: PAN Card, Residence Proof, DIN declarations, Consent letter for appointment (DIR-2) etc. B) Documents required from Company: Board Meeting Resolution for Appointment and Letter of Appointment. Lawizer will assist in preparing and filing these documents with the ROC.",
 },
 {
 q: "What is Consent Letter from Director?",
 a: "A Consent Letter (Form DIR-2) is the written approval by the proposed director confirming acceptance of appointment. It must be submitted to the company before filing DIR-12.",
 },
 {
 q: "What form is filed for adding a director?",
 a: "Form DIR-12 is filed with the MCA portal to notify the appointment of a director.",
 },
 {
 q: "What are the fees and charges for appointing a director?",
 a: "Filing DIR-12 within the time limit generally attracts a nominal fee. Standard filing fee example: ₹300 (subject to MCA fee schedule).",
 },
 {
 q: "Minimum number of directors required in a company?",
 a: "Private Limited Company: 2 Directors. One Person Company: 1 Director. Public Limited Company: 3 Directors.",
 },
 {
 q: "Maximum number of directors allowed?",
 a: "Default maximum is 15 directors. To exceed 15, the company must follow the procedural steps under the Companies Act.",
 },
 {
 q: "Minimum age to become a director?",
 a: "Minimum age is 18 years. For a Managing Director, minimum age is typically 21 years where applicable.",
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
 <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
 </svg>
 ),
 label: "DIR-12 Filed\nwith MCA",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
 <circle cx="9" cy="7" r="4" />
 <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
 </svg>
 ),
 label: "Board Resolution\nDraft",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
 <rect x="7" y="2" width="10" height="4" rx="1" />
 </svg>
 ),
 label: "Consent Letter\nDraft (DIR-2)",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <rect x="2" y="5" width="20" height="14" rx="2" />
 <path d="M2 9l10 6 10-6" />
 </svg>
 ),
 label: "MCA Payment\nChallan",
 },
 ];

 return (
 <section
 ref={heroRef}
 className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
 >
 <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />

 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="mb-6"
 >
 <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
 <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
 <circle cx="9" cy="7" r="4" />
 <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
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
 Appointment of <span className="text-blue-300">Director</span>
 </h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
 Legally add a director to your Board with board resolutions, DIR-12 filing, and MCA formalities.
 </p>
 <p className="text-sm mb-8 text-blue-300">
 Companies Act Compliant • MCA Filing • Board Governance
 </p>

 <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
 @ Rs. 1,999 – 3,499 <sup className="text-lg font-semibold">*</sup>
 </p>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
 Online Process &nbsp;·&nbsp; Expert Facilitation &nbsp;·&nbsp; End-to-End Support
 </p>

 <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
 <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
 <p className="text-white font-semibold text-sm sm:text-base">Also Get Absolutely Free</p>
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
 <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">+</span>
 )}
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

/* ---------- PAGE ---------- */

export default function AppointmentOfDirectorPage() {
 return (
 <>
 <HeroWithAddons />
 <ServicePageLayout
 title="Appointment of Director & DIR-12 Filing"
 subtitle="Legally add a director to your Board, handling board resolutions, DIR-12 filing, and MCA formalities to ensure full compliance."
 badgeText="Companies Act compliant • MCA filing • Board governance"
 icon="users"
 serviceID="APPOINTMENT_OF_DIRECTOR_&_DIR-12_FILING"
 contentTitle="The Importance of Formal Appointment"
 contentDescription="Appointing a director is a statutory requirement that involves specific forms (DIR-2 and DIR-12), board approvals, and filing with the Registrar of Companies (ROC). A compliant appointment is essential for legal validity and governance."
 section1Title="Key Benefits of a Compliant Appointment"
 benefits={benefits}
 sections={sections}
 faqs={faqs}
 hideHero={true}
 theme={{
 orb1: "bg-blue-500/20",
 orb2: "bg-purple-500/20",
 iconBg: "from-blue-500 to-purple-500",
 badgeText: "text-blue-300",
 }}
 primaryColor="text-blue-600"
 primaryBg="bg-gradient-to-r from-blue-600 to-purple-600"
 primaryHoverBg="bg-gradient-to-r from-blue-700 to-purple-700"
 />
 </>
 );
}
