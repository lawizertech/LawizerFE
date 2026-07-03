'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, ArrowRight, BookOpen, X } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type GuideCard = {
 id: number;
 category: string;
 icon: string;
 title: string;
 description: string;
 readTime: string;
 href: string;
};

// ─── Data — 12 guides across 6 categories ────────────────────────────────────

const GUIDES: GuideCard[] = [
 // Company Registration
 {
 id: 1,
 category: 'Company Registration',
 icon: '🏢',
 title: 'How to Register a Private Limited Company in India (Step-by-Step 2025)',
 description: 'From Digital Signature Certificates and DIN to SPICe+ filing and your Certificate of Incorporation — a complete walkthrough for founders.',
 readTime: '12 min read',
 href: '#',
 },
 {
 id: 4,
 category: 'Company Registration',
 icon: '⚖️',
 title: 'OPC vs LLP vs Pvt Ltd: Which Structure is Right for Your Startup?',
 description: 'A practical side-by-side comparison of tax treatment, compliance burden, investor-readiness, and liability protection to help you choose wisely.',
 readTime: '8 min read',
 href: '#',
 },
 {
 id: 6,
 category: 'Company Registration',
 icon: '👤',
 title: 'How to Add a Director to Your Company (MCA e-form DIR-12 Guide)',
 description: 'Step-by-step walkthrough of obtaining DIN, drafting consent letters, board resolutions, and filing DIR-12 on the MCA portal correctly.',
 readTime: '7 min read',
 href: '#',
 },
 {
 id: 7,
 category: 'Company Registration',
 icon: '🚀',
 title: 'Startup India DPIIT Recognition: Benefits & Application Process',
 description: 'Unlock tax exemptions, self-certification, and easier winding up. Learn how to apply for DPIIT recognition through the Startup India portal.',
 readTime: '9 min read',
 href: '#',
 },
 {
 id: 10,
 category: 'Company Registration',
 icon: '📋',
 title: 'Annual Compliance Checklist for Private Limited Companies',
 description: 'MGT-7, AOC-4, DIR-3 KYC, auditor appointments — a month-by-month filing calendar so your company never misses a deadline.',
 readTime: '10 min read',
 href: '#',
 },
 // GST
 {
 id: 2,
 category: 'GST',
 icon: '💰',
 title: 'GST Registration for Startups: Documents, Process & Fees',
 description: 'A plain-English walkthrough of GST thresholds, mandatory vs. voluntary registration, required documents, and the step-by-step GSTN portal process.',
 readTime: '10 min read',
 href: '#',
 },
 {
 id: 12,
 category: 'GST',
 icon: '🛒',
 title: 'GST for E-Commerce Sellers: Registration, TCS & Returns',
 description: 'TCS obligations, mandatory registration regardless of turnover, GSTR-8 filing, and how Amazon, Flipkart, and Meesho deduct tax at source.',
 readTime: '9 min read',
 href: '#',
 },
 // Trademark & IP
 {
 id: 3,
 category: 'Trademark & IP',
 icon: '™️',
 title: 'Trademark Registration in India: Classes, Fees & Timeline',
 description: 'Choose the right Nice class, run a pre-filing clearance search, file Form TM-A, and understand what happens from filing to registration certificate.',
 readTime: '14 min read',
 href: '#',
 },
 {
 id: 11,
 category: 'Trademark & IP',
 icon: '📝',
 title: 'How to File a Trademark Objection Reply in India',
 description: 'Received an examination report? Learn how to understand grounds of objection, draft a compelling reply under Rule 45, and file within the 30-day window.',
 readTime: '8 min read',
 href: '#',
 },
 // Funding & Cap Table
 {
 id: 8,
 category: 'Funding & Cap Table',
 icon: '📈',
 title: 'Angel Funding 101: Term Sheets, SAFE Notes & Legal Checklist',
 description: 'Understand valuation caps, pro-rata rights, information rights, and the key legal documents every founder must review before signing with an angel investor.',
 readTime: '13 min read',
 href: '#',
 },
 {
 id: 9,
 category: 'Funding & Cap Table',
 icon: '💼',
 title: 'ESOP for Startups: How to Set Up an Employee Stock Option Plan',
 description: 'Draft an ESOP pool, set vesting schedules, handle the Companies Act requirements, and communicate the plan clearly to attract and retain top talent.',
 readTime: '11 min read',
 href: '#',
 },
 // MSME/Udyam
 {
 id: 5,
 category: 'MSME/Udyam',
 icon: '🏭',
 title: 'MSME/Udyam Registration: Who Qualifies & How to Apply Free',
 description: 'Check if your business meets the turnover and investment criteria, then complete your Udyam Registration online in under 30 minutes — completely free.',
 readTime: '6 min read',
 href: '#',
 },
];

// ─── Category config ──────────────────────────────────────────────────────────

const CATEGORIES = [
 { id: 'All', label: 'All Guides', emoji: '📚' },
 { id: 'Company Registration', label: 'Company Registration', emoji: '🏢' },
 { id: 'GST', label: 'GST', emoji: '💰' },
 { id: 'Trademark & IP', label: 'Trademark & IP', emoji: '™️' },
 { id: 'Funding & Cap Table', label: 'Funding & Cap Table', emoji: '📈' },
 { id: 'Employment & HR', label: 'Employment & HR', emoji: '👥' },
 { id: 'MSME/Udyam', label: 'MSME/Udyam', emoji: '🏭' },
];

// ─── Category accent colours ──────────────────────────────────────────────────

const CATEGORY_GRADIENT: Record<string, string> = {
 'Company Registration': 'from-[#1a1a2e] to-[#e94560]',
 'GST': 'from-[#093028] to-[#237a57]',
 'Trademark & IP': 'from-[#0f3460] to-[#533483]',
 'Funding & Cap Table': 'from-[#134e5e] to-[#71b280]',
 'Employment & HR': 'from-[#2c3e50] to-[#3498db]',
 'MSME/Udyam': 'from-[#f7971e] to-[#ffd200]',
};

function cardGradient(cat: string) {
 return CATEGORY_GRADIENT[cat] ?? 'from-[#1a1a2e] to-[#302b63]';
}

// ─── Animation variants ───────────────────────────────────────────────────────

const containerVariants = {
 hidden: {},
 visible: {
 transition: { staggerChildren: 0.07, delayChildren: 0.05 },
 },
};

const cardVariants = {
 hidden: { opacity: 0, y: 28 },
 visible: {
 opacity: 1,
 y: 0,
 transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
 },
 exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
};

const heroVariants = {
 hidden: { opacity: 0, y: 20 },
 visible: (delay: number) => ({
 opacity: 1,
 y: 0,
 transition: { duration: 0.6, delay, ease: "easeOut" as const },
 }),
};

// ─── GuideCard component ──────────────────────────────────────────────────────

function GuideCardComponent({ guide }: { guide: GuideCard }) {
 return (
 <motion.article
 variants={cardVariants}
 layout
 className="group relative flex flex-col bg-white border border-[#e5e7eb] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#e94560]/40 transition-all duration-400 hover:-translate-y-1"
 >
 {/* Coloured top banner */}
 <div
 className={`h-[6px] w-full bg-gradient-to-r ${cardGradient(guide.category)} shrink-0`}
 />

 {/* Icon area */}
 <div className="px-5 pt-5 pb-0 flex items-center gap-3">
 <span
 className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f8f8ff] to-[#f0f0ff] border border-[#e5e7eb] shrink-0"
 aria-hidden="true"
 >
 {guide.icon}
 </span>
 <span className="text-[#e94560] text-[10px] font-bold uppercase tracking-widest">
 {guide.category}
 </span>
 </div>

 {/* Body */}
 <div className="flex flex-col flex-1 px-5 pt-3 pb-5">
 <h3 className="text-[#1a1a2e] font-bold text-sm leading-snug mb-2 line-clamp-3 group-hover:text-[#e94560] transition-colors duration-300">
 {guide.title}
 </h3>

 <p className="text-[#6b7280] text-xs leading-relaxed mb-4 line-clamp-3 flex-1">
 {guide.description}
 </p>

 {/* Footer */}
 <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#f3f4f6]">
 <span className="flex items-center gap-1.5 text-[#9ca3af] text-xs font-medium">
 <Clock className="w-3 h-3" aria-hidden="true" />
 {guide.readTime}
 </span>
 <a
 href={guide.href}
 className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e94560] hover:gap-2.5 transition-all duration-200"
 aria-label={`Read guide: ${guide.title}`}
 >
 Read Guide
 <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
 </a>
 </div>
 </div>

 {/* Full-card hover overlay */}
 <div className="absolute inset-0 bg-gradient-to-br from-[#e94560]/3 to-[#f5a623]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl" />
 </motion.article>
 );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function GuidesPage() {
 const [activeCategory, setActiveCategory] = useState('All');
 const [searchQuery, setSearchQuery] = useState('');

 // AND logic: both category tab + search must match
 const visibleGuides = useMemo(() => {
 return GUIDES.filter((g) => {
 const matchesCategory =
 activeCategory === 'All' || g.category === activeCategory;
 const q = searchQuery.toLowerCase().trim();
 const matchesSearch =
 !q ||
 g.title.toLowerCase().includes(q) ||
 g.description.toLowerCase().includes(q) ||
 g.category.toLowerCase().includes(q);
 return matchesCategory && matchesSearch;
 });
 }, [activeCategory, searchQuery]);

 const clearSearch = () => setSearchQuery('');

 return (
 <div className="min-h-screen bg-white">

 {/* ── HERO ─────────────────────────────────────────────────────────── */}
 <div className="relative overflow-hidden bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center min-h-screen pt-24 md:pt-28 pb-12 px-5">
 {/* Decorative glows */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#e94560]/15 rounded-full blur-3xl" />
 <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl" />
 <div className="absolute top-1/2 -translate-y-1/2 right-0 w-72 h-72 bg-[#e94560]/10 rounded-full blur-3xl" />
 </div>

 <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
 {/* Badge */}
 <motion.div
 custom={0}
 variants={heroVariants}
 initial="hidden"
 animate="visible"
 className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
 >
 <BookOpen className="w-4 h-4 text-[#f5a623]" aria-hidden="true" />
 <span className="text-sm font-semibold text-white/90">Free Compliance Knowledge Base</span>
 </motion.div>

 {/* H1 */}
 <motion.h1
 custom={0.1}
 variants={heroVariants}
 initial="hidden"
 animate="visible"
 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight"
 >
 Free Legal &amp; Compliance Guides{' '}
 <span className="bg-gradient-to-r from-[#f5a623] via-[#e94560] to-[#ff6b8a] bg-clip-text text-transparent">
 for Indian Founders
 </span>
 </motion.h1>

 {/* Subtitle */}
 <motion.p
 custom={0.2}
 variants={heroVariants}
 initial="hidden"
 animate="visible"
 className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
 >
 Plain-language how-to guides on company registration, GST, trademark, ESOP, and more — written by Lawizer&apos;s legal team. No jargon. No paywalls.
 </motion.p>

 {/* Search bar */}
 <motion.div
 custom={0.3}
 variants={heroVariants}
 initial="hidden"
 animate="visible"
 className="max-w-xl mx-auto mb-10"
 >
 <div className="relative group">
 {/* Glow ring on focus */}
 <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e94560]/50 via-[#f5a623]/50 to-[#e94560]/50 blur-md opacity-0 group-focus-within:opacity-100 transition-opacity duration-400 pointer-events-none" />
 <div className="relative flex items-center rounded-full bg-white/10 border border-white/25 backdrop-blur-xl hover:border-white/40 focus-within:border-white/60 transition-all duration-300 px-2 py-2">
 <Search className="w-5 h-5 text-white/50 ml-3 mr-2 shrink-0" aria-hidden="true" />
 <input
 type="search"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search guides — GST, trademark, ESOP…"
 className="flex-1 bg-transparent text-white placeholder-white/40 text-sm outline-none font-medium pr-2"
 aria-label="Search guides"
 />
 {searchQuery && (
 <button
 onClick={clearSearch}
 className="text-white/40 hover:text-white/80 transition-colors px-2"
 aria-label="Clear search"
 >
 <X className="w-4 h-4" />
 </button>
 )}
 <button
 className="ml-1 px-5 py-2 rounded-full bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white font-bold text-sm shrink-0 hover:shadow-lg hover:shadow-[#e94560]/30 hover:scale-105 transition-all duration-300"
 aria-label="Search"
 >
 Search
 </button>
 </div>
 </div>
 </motion.div>

 {/* Stats */}
 <motion.div
 custom={0.4}
 variants={heroVariants}
 initial="hidden"
 animate="visible"
 className="flex flex-wrap justify-center gap-8"
 >
 {[
 { value: '12', label: 'Expert Guides' },
 { value: '6', label: 'Categories' },
 { value: '100%', label: 'Free Forever' },
 ].map(({ value, label }) => (
 <div key={label} className="text-center">
 <div className="text-2xl font-extrabold text-white">{value}</div>
 <div className="text-white/60 text-xs font-medium mt-0.5">{label}</div>
 </div>
 ))}
 </motion.div>
 </div>
 </div>

 {/* ── CATEGORY FILTER TABS ─────────────────────────────────────────── */}
 <div className="sticky top-[72px] z-40 bg-white/95 backdrop-blur-sm border-b border-[#e5e7eb] shadow-sm">
 <div className="max-w-7xl mx-auto px-5 py-3">
 <div className="flex flex-wrap gap-2">
 {CATEGORIES.map((cat) => {
 const count =
 cat.id === 'All'
 ? GUIDES.length
 : GUIDES.filter((g) => g.category === cat.id).length;
 const isActive = activeCategory === cat.id;
 // Categories with 0 guides (Employment & HR) are greyed out
 const isEmpty = count === 0;

 return (
 <button
 key={cat.id}
 onClick={() => !isEmpty && setActiveCategory(cat.id)}
 disabled={isEmpty}
 className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border-2 ${
 isActive
 ? 'bg-[#e94560] text-white border-[#e94560] shadow-md shadow-[#e94560]/20'
 : isEmpty
 ? 'bg-white text-[#c9cdd4] border-[#f3f4f6] cursor-not-allowed'
 : 'bg-white text-[#1a1a2e] border-[#e5e7eb] hover:border-[#e94560] hover:text-[#e94560] hover:scale-105'
 }`}
 >
 <span aria-hidden="true">{cat.emoji}</span>
 <span>{cat.label}</span>
 <span
 className={`text-xs font-normal ${
 isActive ? 'text-white/75' : 'text-[#9ca3af]'
 }`}
 >
 ({count})
 </span>
 </button>
 );
 })}
 </div>
 </div>
 </div>

 {/* ── CARDS GRID ───────────────────────────────────────────────────── */}
 <section className="max-w-7xl mx-auto px-5 py-10">
 <AnimatePresence mode="wait">
 {visibleGuides.length > 0 ? (
 <motion.div
 key={`${activeCategory}-${searchQuery}`}
 variants={containerVariants}
 initial="hidden"
 animate="visible"
 exit={{ opacity: 0 }}
 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
 >
 {visibleGuides.map((guide) => (
 <GuideCardComponent key={guide.id} guide={guide} />
 ))}
 </motion.div>
 ) : (
 <motion.div
 key="empty"
 initial={{ opacity: 0, y: 16 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0 }}
 className="text-center py-24"
 >
 <div className="text-6xl mb-4">🔍</div>
 <h2 className="text-2xl font-bold text-[#1a1a2e] mb-2">
 No guides found
 </h2>
 <p className="text-[#6b7280] mb-6">
 No guides match &ldquo;{searchQuery}&rdquo;
 {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}.
 </p>
 <button
 onClick={() => { clearSearch(); setActiveCategory('All'); }}
 className="inline-flex items-center gap-2 bg-[#e94560] text-white rounded-full px-6 py-2.5 font-bold text-sm hover:bg-[#d63550] transition-colors"
 >
 <X className="w-4 h-4" />
 Clear filters
 </button>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Result count */}
 {visibleGuides.length > 0 && (searchQuery || activeCategory !== 'All') && (
 <p className="text-center text-sm text-[#9ca3af] mt-6">
 Showing {visibleGuides.length} of {GUIDES.length} guides
 {activeCategory !== 'All' ? ` in ${activeCategory}` : ''}
 {searchQuery ? ` matching "${searchQuery}"` : ''}
 </p>
 )}
 </section>

 {/* ── BOTTOM CTA BANNER ────────────────────────────────────────────── */}
 <section className="relative overflow-hidden px-5 py-16 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
 {/* Glows */}
 <div className="absolute inset-0 pointer-events-none overflow-hidden">
 <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560]/20 rounded-full blur-3xl" />
 <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f5a623]/15 rounded-full blur-3xl" />
 </div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.55, ease: "easeOut" as const }}
 className="relative z-10 max-w-3xl mx-auto text-center"
 >
 <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#e94560]/20 border border-[#e94560]/30">
 <span className="text-[#e94560] text-xs font-bold uppercase tracking-widest">
 Ready to take action?
 </span>
 </div>
 <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
 Need help doing this?{' '}
 <span className="bg-gradient-to-r from-[#f5a623] to-[#e94560] bg-clip-text text-transparent">
 Lawizer handles it end-to-end.
 </span>
 </h2>
 <p className="text-white/65 text-base mb-8 max-w-xl mx-auto">
 Stop wrestling with portals and paperwork. Our legal experts handle your registration, filings, and compliance — at fixed, transparent fees.
 </p>
 <div className="flex flex-wrap gap-3 justify-center">
 <a
 href="/free-consultation"
 className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white rounded-full px-7 py-3 font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 hover:scale-105 transition-all duration-300"
 >
 Get Free Consultation
 <ArrowRight className="w-4 h-4" aria-hidden="true" />
 </a>
 <a
 href="/startup-businesslegal"
 className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-7 py-3 font-bold text-sm hover:bg-white/20 hover:border-white/40 transition-all duration-300"
 >
 View All Services
 </a>
 </div>
 </motion.div>
 </section>
 </div>
 );
}
