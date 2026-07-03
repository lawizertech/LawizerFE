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
 {
 icon: "shield",
 text: "Limited liability protection to the owner's personal assets",
 },
 {
 icon: "trendingUp",
 text: "Enhanced credibility and easier access to funding",
 },
 {
 icon: "fileText",
 text: "Fewer compliances compared to traditional private companies",
 },
 {
 icon: "building",
 text: "Perpetual succession even with a single owner",
 },
] satisfies BenefitItem[];

/* ---------- SECTIONS ---------- */

const prerequisites = [
 "Single natural person who is an Indian citizen and resident",
 "Mandatory appointment of a nominee (successor)",
 "No minimum paid-up share capital requirement",
 "PAN, Aadhaar, photographs, address proofs of director and nominee",
 "Proof of registered office address",
];

const deliverables = [
 "DIN for 1 Director",
 "Digital Signature Certificate (DSC)",
 "OPC Certificate of Incorporation",
 "Memorandum of Association (MOA)",
 "Articles of Association (AOA)",
 "Company PAN Card",
 "Company TAN",
 "Bank account opening assistance",
];

const sections = [
 {
 title: "Pre-Requisites for OPC Registration",
 icon: "fileText",
 type: "list",
 data: prerequisites,
 },
 {
 title: "What You'll Receive",
 icon: "building",
 type: "grid",
 data: deliverables,
 },
] satisfies SectionBlock[];

/* ---------- FAQs ---------- */

const faqs = [
 {
 q: "What is a One Person Company (OPC)?",
 a: "An OPC is a type of private company incorporated by a single natural person under the Companies Act, 2013. It provides limited liability and separate legal entity status.",
 },
 {
 q: "Who can form an OPC in India?",
 a: "Any natural person who is an Indian citizen and resident in India (minimum 182 days stay in the previous calendar year) can incorporate an OPC.",
 },
 {
 q: "Is a nominee mandatory for OPC registration?",
 a: "Yes. The sole member must appoint a nominee who will become the shareholder in case of death or incapacity.",
 },
 {
 q: "What documents are required to set up an OPC?",
 a: "PAN card, Aadhaar card, photographs, address proofs of the director and nominee, and registered office proof are required.",
 },
 {
 q: "Is commercial office space required for OPC?",
 a: "No. A residential address can be used as the registered office, subject to compliance requirements.",
 },
 {
 q: "Who is the Registrar of Companies (ROC)?",
 a: "The ROC is a government authority under the Ministry of Corporate Affairs responsible for company registrations and compliance.",
 },
 {
 q: "Is physical visit to ROC required?",
 a: "No. OPC incorporation is a completely online process handled digitally.",
 },
 {
 q: "What is a DIN?",
 a: "DIN (Director Identification Number) is a unique identification number issued by MCA to become a director in a company.",
 },
 {
 q: "What is a DSC?",
 a: "A Digital Signature Certificate (DSC) is used to electronically sign documents filed with the ROC.",
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
 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
 <circle cx="12" cy="7" r="4" />
 </svg>
 ),
 label: "DIN for\n1 Director",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
 </svg>
 ),
 label: "Digital Signature\nCertificate (DSC)",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
 <rect x="7" y="2" width="10" height="4" rx="1" />
 </svg>
 ),
 label: "OPC Certificate\nof Incorporation",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M9 12h6M9 16h6M9 8h6M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" />
 </svg>
 ),
 label: "MOA & AOA\nDrafted",
 },
 ];

 return (
 <section
 ref={heroRef}
 className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6 pt-[100px] pb-[56px]"
 >
 <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
 <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full pointer-events-none" />

 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

 {/* Animated icon */}
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="mb-6"
 >
 <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-400 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
 <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
 <circle cx="12" cy="7" r="4" />
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
 One Person Company <span className="text-orange-300">(OPC)</span>
 </h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
 A smart business structure for solo entrepreneurs with limited liability and full legal recognition.
 </p>
 <p className="text-sm mb-8 text-orange-300">
 Single Owner • Limited Liability • Company Status
 </p>

 {/* Pricing */}
 <div className="flex items-center justify-center gap-3 mb-1">
 <p className="text-3xl sm:text-4xl font-extrabold text-white">
 @ Rs. 999 <sup className="text-lg font-semibold">*</sup>
 </p>
 <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
 ₹2,999
 </p>
 <motion.div
 whileHover={{ boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)" }}
 className="bg-green-500 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300"
 >
 67% OFF
 </motion.div>
 </div>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
 In 15 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function OnePersonCompanyPage() {
 return (
 <>
 <HeroWithAddons />

 <ServicePageLayout
 serviceID="ONE_PERSON_COMPANY"
 title="One Person Company (OPC)"
 subtitle="A smart business structure for solo entrepreneurs with limited liability and full legal recognition."
 badgeText="Single Owner • Limited Liability • Company Status"
 icon="user"
 contentTitle="Why Choose a One Person Company?"
 contentDescription="A One Person Company (OPC) under the Companies Act, 2013 allows solo entrepreneurs to enjoy the benefits of a private limited company with reduced compliance burden. It offers limited liability, separate legal identity, and long-term business continuity."
 section1Title="Key Benefits of OPC Registration"
 benefits={benefits}
 sections={sections}
 faqs={faqs}
 hideHero={true}
 theme={{
 orb1: "bg-red-500/20",
 orb2: "bg-orange-400/20",
 iconBg: "from-red-500 to-orange-400",
 badgeText: "text-orange-300",
 }}
 primaryColor="text-red-500"
 primaryBg="bg-gradient-to-r from-red-500 to-orange-400"
 primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-500"
 />
 </>
 );
}
