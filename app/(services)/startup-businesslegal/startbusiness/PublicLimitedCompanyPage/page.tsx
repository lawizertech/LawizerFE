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
 { icon: "shield", text: "Limited liability protection for directors" },
 { icon: "trendingUp", text: "Higher credibility and public trust" },
 { icon: "users", text: "Easy access to large-scale funding and loans" },
 { icon: "trendingUp", text: "Preferred structure for public investment" },
 { icon: "fileText", text: "Free transferability of shares" },
 { icon: "building2", text: "Best suited for heavy capital-intensive businesses" },
] satisfies BenefitItem[];

/* ================================
 SECTIONS
================================ */

const prerequisites = [
 "Minimum 7 shareholders",
 "Minimum 3 directors",
 "Directors and shareholders can be the same person",
 "At least one director must be an Indian resident",
 "Minimum authorised share capital as prescribed by law",
 "PAN, identity proof, and address proof of directors and shareholders",
];

const deliverables = [
 "DIN (Director Identification Number) for 3 directors",
 "Digital Signature Certificates (DSC) for shareholders",
 "Company name approval",
 "MOA & AOA drafting",
 "Certificate of Incorporation",
 "Company PAN Card",
 "Company TAN / TDS Number",
 "Bank account opening documentation support",
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
 q: "What documents are required to set up a Public Limited Company?",
 a: "Basic documents such as photograph, PAN card, and address proof of directors and shareholders are required.",
 },
 {
 q: "Is commercial office space mandatory?",
 a: "No. A residential or rented address can be used as the registered office and can be changed later.",
 },
 {
 q: "Who is the Registrar of Companies (ROC)?",
 a: "ROC is a government authority responsible for registering and regulating companies in India.",
 },
 {
 q: "Is physical presence required for incorporation?",
 a: "No. The entire Public Limited Company incorporation process is completed online.",
 },
 {
 q: "Is Public Limited Company registration renewable?",
 a: "No renewal is required, but annual ROC compliance filings are mandatory.",
 },
 {
 q: "What is a DIN?",
 a: "Director Identification Number (DIN) is a unique number issued to individuals appointed as directors.",
 },
 {
 q: "What is a DSC?",
 a: "A Digital Signature Certificate (DSC) is used to sign electronic forms filed with the ROC.",
 },
 {
 q: "Can the registered office address be changed later?",
 a: "Yes, the registered office address can be changed anytime after incorporation by following due procedure.",
 },
 {
 q: "Is share capital required at the time of incorporation?",
 a: "No. Share capital can be deposited after incorporation once the company bank account is opened.",
 },
 {
 q: "Are GST and PF automatically applicable?",
 a: "No. GST and PF apply only after crossing prescribed threshold limits.",
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
 <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
 <circle cx="9" cy="7" r="4" />
 <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
 </svg>
 ),
 label: "DIN for\n3 Directors",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
 </svg>
 ),
 label: "DSC for\nShareholders",
 },
 {
 icon: (
 <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
 <path d="M9 14l2 2 4-4M7 4H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V5a1 1 0 00-1-1h-3" />
 <rect x="7" y="2" width="10" height="4" rx="1" />
 </svg>
 ),
 label: "Certificate of\nIncorporation",
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
 <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

 <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">

 {/* Animated icon */}
 <motion.div
 animate={{ y: [0, -10, 0] }}
 transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
 className="mb-6"
 >
 <div className="p-4 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg inline-flex">
 <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
 <path d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11M20 10v11M8 10v11M12 10v11M16 10v11" />
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
 Public Limited <span className="text-orange-300">Company</span>
 </h1>
 <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
 A large-scale corporate structure designed to raise public capital with strong credibility.
 </p>
 <p className="text-sm mb-8 text-orange-300">
 Public Company • Investor Ready • Limited Liability
 </p>

 {/* Pricing */}
 <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
 @ Rs. 19,999 – 29,999 <sup className="text-lg font-semibold">*</sup>
 </p>
 <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
 In 20 days &nbsp;·&nbsp; Online Process &nbsp;·&nbsp; Facilitation
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

export default function PublicLimitedCompanyPage() {
 return (
 <>
 <HeroWithAddons />

 <ServicePageLayout
 serviceID="PUBLIC_LIMITED_COMPANY"
 title="Public Limited Company"
 subtitle="A large-scale corporate structure designed to raise public capital with strong credibility."
 badgeText="Public Company • Investor Ready • Limited Liability"
 icon="building2"
 contentTitle="Overview"
 contentDescription="A Public Limited Company (PLC) is a corporate entity governed by the Companies Act, 2013. It requires a minimum of seven shareholders and three directors and can raise capital by offering shares to the public. PLCs enjoy limited liability, higher credibility, and are ideal for businesses planning large-scale expansion and public investment."
 section1Title="Key Benefits of Public Limited Company"
 benefits={benefits}
 sections={sections}
 faqs={faqs}
 hideHero={true}
 theme={{
 orb1: "bg-red-500/20",
 orb2: "bg-blue-500/20",
 iconBg: "from-red-500 to-orange-500",
 badgeText: "text-orange-300",
 }}
 primaryColor="text-red-500"
 primaryBg="bg-gradient-to-r from-red-500 to-orange-500"
 primaryHoverBg="bg-gradient-to-r from-red-600 to-orange-600"
 />
 </>
 );
}
