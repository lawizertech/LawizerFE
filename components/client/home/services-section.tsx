"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, ShieldCheck, TrendingUp, ArrowRight, HelpCircle, Rocket } from "lucide-react";

// ─── types ───────────────────────────────────────────────────────────────────
type Svc = { name: string; price: string; was: string; badge?: string; url: string };
type Cat = { label: string; items: Svc[] };
type Phase = {
  id: number;
  key: string;
  label: string;
  tagline: string;
  accent: string;
  glow: string;
  soft: string;
  tw: {
    border: string;
    bgSoft: string;
    text: string;
    bg: string;
    shadow: string;
    borderHover: string;
    gradient: string;
  };
  categories: Cat[];
  cta: { bold: string; rest: string; btn: string; href: string };
};

// ─── real prices from actual service pages ───────────────────────────────────
const PHASES: Phase[] = [
  {
    id: 1,
    key: "establish",
    label: "Establish",
    tagline: "Register your business & lay the legal groundwork from day one.",
    accent: "#ca2d42",
    glow: "rgba(202,45,66,0.22)",
    soft: "#fef2f3",
    tw: {
      border: "border-brand-red",
      bgSoft: "bg-[#fef2f3]",
      text: "text-brand-red",
      bg: "bg-brand-red",
      shadow: "shadow-[0_8px_36px_rgba(202,45,66,0.22)]",
      borderHover: "border-brand-red/50",
      gradient: "from-brand-red to-brand-red/80",
    },
    cta: {
      bold: "Ready to register your business?",
      rest: "Browse all services or talk to a legal expert to find the right fit.",
      btn: "View All Services",
      href: "/startup-businesslegal",
    },
    categories: [
      {
        label: "Business Incorporation",
        items: [
          {
            name: "Private Limited Company",
            price: "₹999",
            was: "₹4,999",
            badge: "70% OFF",
            url: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage",
          },
          {
            name: "One Person Company (OPC)",
            price: "₹999",
            was: "₹2,999",
            badge: "67% OFF",
            url: "/startup-businesslegal/startbusiness/OnePersonCompanyPage",
          },
          {
            name: "Limited Liability Partnership",
            price: "₹999",
            was: "₹3,999",
            badge: "Save ₹2,500",
            url: "/startup-businesslegal/startbusiness/LLPPage",
          },
          {
            name: "Startup India Registration",
            price: "₹999",
            was: "₹2,499",
            badge: "60% OFF",
            url: "/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage",
          },
          {
            name: "GST Registration",
            price: "₹999",
            was: "₹1,999",
            badge: "50% OFF",
            url: "/startup-businesslegal/startbusiness/GSTRegistrationPage",
          },
          {
            name: "Section 8 Company (NGO)",
            price: "₹999",
            was: "₹17,999+",
            url: "/startup-businesslegal/startbusiness/Section8NGOCompanyPage",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    key: "secure",
    label: "Secure",
    accent: "#0284c7",
    glow: "rgba(2,132,199,0.22)",
    soft: "#f0f9ff",
    tw: {
      border: "border-sky-600",
      bgSoft: "bg-[#f0f9ff]",
      text: "text-sky-600",
      bg: "bg-sky-600",
      shadow: "shadow-[0_8px_36px_rgba(2,132,199,0.22)]",
      borderHover: "border-sky-600/50",
      gradient: "from-sky-600 to-sky-550",
    },
    tagline: "Legally bind every relationship before disputes or issues arise.",
    cta: {
      bold: "Ready to secure your business?",
      rest: "Draft agreements, protect your brand, and manage liabilities early.",
      btn: "View Security Services",
      href: "/startup-businesslegal",
    },
    categories: [
      {
        label: "IPR & Protection",
        items: [
          {
            name: "Trademark Registration",
            price: "₹999",
            was: "₹2,999",
            badge: "Most Popular",
            url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
          },
          {
            name: "Trademark Objection Reply",
            price: "₹1,499",
            was: "₹3,999",
            url: "/startup-businesslegal/protectbusiness/TrademarkObjectionReplyPage",
          },
          {
            name: "Copyright Registration",
            price: "₹2,499",
            was: "₹5,999",
            url: "/startup-businesslegal/protectbusiness/CopyrightRegistrationPage",
          },
        ],
      },
      {
        label: "Legal Drafting",
        items: [
          {
            name: "Co-Founder Agreement",
            price: "₹1,499",
            was: "₹3,999",
            url: "/documentation/co-founder-agreement",
          },
          {
            name: "Partnership Deed",
            price: "₹1,499",
            was: "₹3,999",
            url: "/startup-businesslegal/startbusiness/PartnershipFirmPage",
          },
          {
            name: "Non-Disclosure Agreement (NDA)",
            price: "₹999",
            was: "₹2,499",
            url: "/startup-businesslegal/protectbusiness/NDADraftingPage",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    key: "scale",
    label: "Scale",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.22)",
    soft: "#f5f3ff",
    tw: {
      border: "border-violet-600",
      bgSoft: "bg-[#f5f3ff]",
      text: "text-violet-600",
      bg: "bg-violet-600",
      shadow: "shadow-[0_8px_36px_rgba(124,58,237,0.22)]",
      borderHover: "border-violet-600/50",
      gradient: "from-violet-600 to-violet-550",
    },
    tagline: "Stay compliant, file returns, and focus on expanding operations.",
    cta: {
      bold: "Ready to scale your business?",
      rest: "Handle ROC filings, GST returns, and certifications seamlessly.",
      btn: "View Scaling Services",
      href: "/startup-businesslegal",
    },
    categories: [
      {
        label: "Growth & Compliance",
        items: [
          {
            name: "FSSAI Registration",
            price: "₹999",
            was: "₹1,999",
            url: "/startup-businesslegal/growbusiness/FSSAIRegistrationPage",
          },
          {
            name: "ISO Certification",
            price: "₹1,499",
            was: "₹2,999",
            badge: "International",
            url: "/startup-businesslegal/growbusiness/ISOCertificationPage",
          },
          {
            name: "MSME Udhyam Registration",
            price: "₹499",
            was: "₹1,499",
            url: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",
          },
        ],
      },
      {
        label: "Filing & Returns",
        items: [
          {
            name: "GST Return Filing",
            price: "₹499",
            was: "₹1,499",
            badge: "Per Month",
            url: "/startup-businesslegal/managebusiness/GstReturnFilingPage",
          },
          {
            name: "ROC Return Filing (Pvt Ltd)",
            price: "₹4,999",
            was: "₹9,999",
            url: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage",
          },
          {
            name: "Income Tax Return (ITR)",
            price: "₹499",
            was: "₹1,999+",
            url: "/itr",
          },
        ],
      },
    ],
  },
];

// ─── Mobile accordion item ────────────────────────────────────────────────────
function MobilePhaseAccordion({ phase, isOpen, onToggle }: { phase: Phase; isOpen: boolean; onToggle: () => void }) {
  const total = phase.categories.reduce((n, c) => n + c.items.length, 0);
  return (
    <div className={`mob-accordion-item ${isOpen ? "mob-accordion-open" : ""}`} style={{ borderColor: isOpen ? phase.accent : undefined }}>
      {/* Header — tap to toggle */}
      <button className="mob-accordion-header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="mob-accordion-left flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white shrink-0 ${phase.tw.bg}`}>
            {phase.id === 1 ? (
              <Rocket className="w-5 h-5" />
            ) : phase.id === 2 ? (
              <ShieldCheck className="w-5 h-5" />
            ) : (
              <TrendingUp className="w-5 h-5" />
            )}
          </div>
          <div>
            <span className="mob-accordion-phase block" style={{ color: phase.accent }}>Phase {phase.id}</span>
            <span className="mob-accordion-label block text-sm font-bold text-slate-800">{phase.label}</span>
            <span className="mob-accordion-count text-[11px] text-slate-400 font-semibold">{total} services</span>
          </div>
        </div>
        <motion.span
          className="mob-accordion-chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </button>

      {/* Expandable body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="mob-accordion-body">
              {phase.categories.map((cat, ci) => (
                <div key={cat.label} className={ci < phase.categories.length - 1 ? "mb-5" : "mb-0"}>
                  {/* category label */}
                  <div className="mob-cat-header">
                    <span className="mob-cat-label" style={{ color: phase.accent, background: `${phase.accent}14` }}>{cat.label}</span>
                    <span className="mob-cat-count">{cat.items.length} services</span>
                  </div>
                  {/* service rows */}
                  <div className="flex flex-col gap-2">
                    {cat.items.map((svc) => (
                      <MobileSvcRow key={svc.url} svc={svc} phase={phase} />
                    ))}
                  </div>
                </div>
              ))}
              {/* CTA */}
              <Link
                href={phase.cta.href}
                className="mob-accordion-cta"
                style={{ background: phase.accent }}
              >
                {phase.cta.btn} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Mobile service row (touch-optimised, no hover) ───────────────────────────
function MobileSvcRow({ svc, phase }: { svc: Svc; phase: Phase }) {
  return (
    <Link href={svc.url} className="mob-svc-row group block">
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between items-start w-full">
          <span className="mob-svc-name text-[#0D0F14] font-extrabold text-[15px] leading-snug pr-4">{svc.name}</span>
          {svc.badge && (
            <span 
              className="mob-svc-badge shrink-0" 
              style={{ 
                background: `linear-gradient(90deg, ${phase.accent}15, ${phase.accent}05)`, 
                color: phase.accent,
                border: `1px solid ${phase.accent}25`
              }}
            >
              {svc.badge}
            </span>
          )}
        </div>
        <div className="flex justify-between items-end w-full mt-2">
          <div className="flex items-center gap-1.5 text-[10.5px] font-bold tracking-widest text-[#8A90A2] uppercase">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: phase.accent, opacity: 0.7 }} />
            Explore
          </div>
          <div className="mob-svc-prices flex items-center gap-2">
            <span className="mob-svc-was text-[12px] text-[#A0AABF] line-through font-semibold">{svc.was}</span>
            <span 
              className="mob-svc-price text-[15px] font-extrabold tracking-tight px-3 py-1 rounded-[10px]" 
              style={{ background: `${phase.accent}12`, color: phase.accent }}
            >
              {svc.price}*
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

// ─── component ────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const [active, setActive] = useState(0);
  // Mobile accordion: which phase is open (-1 = none)
  const [mobileOpen, setMobileOpen] = useState<number>(0);
  const phase = PHASES[active];

  const toggleMobile = (i: number) => setMobileOpen(prev => prev === i ? -1 : i);

  return (
    <>
      <section id="services" className="bg-white py-6 md:py-8 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-[160px] -right-[120px] w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(202,45,66,0.06)_0%,transparent_65%)]" />

        <div className="max-w-[1180px] mx-auto px-4 sm:px-6 relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-10 lg:mb-14"
          >
            <h2 className="font-[family-name:var(--)] text-[clamp(26px,3.8vw,50px)] font-extrabold text-[#0D0F14] leading-[1.1] tracking-[-0.025em] m-0 mb-4">
              Every legal need.
              <br />
              <span className="text-brand-red">One trusted platform.</span>
            </h2>

            <p className="text-[15px] lg:text-[17px] text-gray-600 leading-7 max-w-[520px] mx-auto">
              Pick a phase and explore all your services, with real prices, real pages, one click away.
            </p>
          </motion.div>

          {/* ── DESKTOP TABS (lg+) ────────────────────────────────── */}
          <div className="hidden lg:block">
            <div className="ls-tabs">
              {PHASES.map((p, i) => {
                const on = active === i;
                const total = p.categories.reduce((n, c) => n + c.items.length, 0);
                return (
                  <motion.button
                    key={p.key}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    whileTap={{ scale: 0.98 }}
                    className={`all-unset box-border flex flex-col px-6 py-[22px] rounded-[18px] cursor-pointer relative overflow-hidden transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] border-2 ${on ? p.tw.border : "border-[#E8ECF0]"} ${on ? p.tw.bgSoft : "bg-[#FAFBFC]"} ${on ? p.tw.shadow : "shadow-[0_1px_4px_rgba(0,0,0,0.04)]"} ${on ? "-translate-y-1" : "translate-y-0"}`}
                  >
                    <motion.span
                      animate={{ scaleX: on ? 1 : 0, opacity: on ? 1 : 0 }}
                      initial={false}
                      transition={{ duration: 0.22 }}
                      className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] origin-left ${p.tw.bg}`}
                    />
                    <span className={`inline-flex items-center gap-1.5 w-fit rounded-full px-3 py-1 text-[11px] font-bold mb-3 transition-all duration-220 ${on ? p.tw.bg : "bg-[#EAEDF2]"} ${on ? "text-white" : "text-[#8A90A2]"}`}>
                      <span className={`w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-black leading-none ${on ? "bg-white/25 text-white" : "bg-[#C4C9D6] text-[#6B7280]"}`}>{p.id}</span>
                      Phase {p.id}
                    </span>
                    <span className={`font-[family-name:var(--,'Syne',sans-serif)] text-[22px] font-extrabold leading-[1.15] mb-2 transition-colors duration-220 ${on ? p.tw.text : "text-[#0D0F14]"}`}>{p.label}</span>
                    <span className="text-[13px] text-gray-400 leading-relaxed flex-1 text-left">{p.tagline}</span>
                    <span className={`inline-flex items-center gap-1.5 mt-3.5 text-xs font-bold transition-colors duration-220 ${on ? p.tw.text : "text-[#B0B7C3]"}`}>
                      {total} services
                      <span className={`inline-block transition-transform duration-220 ${on ? "translate-x-[3px]" : "translate-x-0"}`}>→</span>
                    </span>
                  </motion.button>
                );
              })}
            </div>

            <p style={{ fontSize:11, color:"#9CA3AF", marginBottom:28, marginTop:-16, paddingLeft:4 }}>
              * T&amp;C applied. Prices shown are indicative and may vary based on requirements.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={phase.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-slate-100 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-hidden"
              >
                {/* Phase Header Banner */}
                <div className={`flex items-center justify-between flex-wrap gap-4 px-4 sm:px-8 py-4 sm:py-5 border-b border-slate-100 ${phase.tw.bgSoft}`}>
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm ${phase.tw.bg}`}>
                      {phase.id === 1 ? (
                        <Rocket className="w-5.5 h-5.5" />
                      ) : phase.id === 2 ? (
                        <ShieldCheck className="w-5.5 h-5.5" />
                      ) : (
                        <TrendingUp className="w-5.5 h-5.5" />
                      )}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--,'Syne',sans-serif)] text-[17px] font-black text-slate-900 leading-snug">
                        Phase {phase.id}: {phase.label}
                      </div>
                      <div className="text-[12px] text-slate-400 font-semibold mt-0.5">
                        {phase.categories.reduce((n, c) => n + c.items.length, 0)} services across {phase.categories.length} {phase.categories.length === 1 ? "category" : "categories"}
                      </div>
                    </div>
                  </div>
                  
                  {/* View All button */}
                  <Link 
                    href={phase.cta.href} 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-xl no-underline text-xs font-bold transition-all duration-200 hover:bg-black shadow-sm shrink-0"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Categories Grid Container */}
                <div className="p-4 sm:p-8">
                  {phase.categories.map((cat, ci) => (
                    <motion.div 
                      key={cat.label} 
                      initial={{ opacity: 0, y: 14 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.3, delay: ci * 0.07 }} 
                      className={ci < phase.categories.length - 1 ? "mb-8" : "mb-0"}
                    >
                      {/* Sub-header divider */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`text-[10px] font-black uppercase tracking-[2px] px-3.5 py-1.5 rounded-full shrink-0 ${phase.tw.text} ${phase.tw.bgSoft}`}>
                          {cat.label}
                        </span>
                        <div className="flex-1 h-px bg-slate-100/80" />
                        <span className="text-[10.5px] text-slate-400 font-bold shrink-0">{cat.items.length} services</span>
                      </div>

                      {/* Services list grid */}
                      <div className="ls-grid">
                        {cat.items.map((svc) => <SvcRow key={svc.url} svc={svc} phase={phase} />)}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Help Banner at the bottom */}
                <div className="mx-4 sm:mx-8 mb-6 sm:mb-8 p-4 sm:p-5 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col sm:flex-row items-center gap-4 sm:gap-5 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.015)] flex items-center justify-center text-slate-400 shrink-0">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-800 m-0">Still unsure?</h4>
                      <p className="text-[11.5px] text-slate-400 font-semibold m-0 mt-0.5">Get personalized advice for your business from our expert team.</p>
                    </div>
                  </div>
                  <Link 
                    href="/free-consultation" 
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 hover:text-black hover:border-slate-300 rounded-xl no-underline text-xs font-bold transition-all duration-200 shadow-sm shrink-0"
                  >
                    <span>Talk to Expert</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-black" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── MOBILE + TABLET ACCORDION (< lg) ─────────────────── */}
          <div className="lg:hidden">
            <p className="text-[11px] text-gray-400 mb-4">* T&amp;C applied. Prices shown are indicative and may vary.</p>
            <div className="flex flex-col gap-3">
              {PHASES.map((p, i) => (
                <MobilePhaseAccordion
                  key={p.key}
                  phase={p}
                  isOpen={mobileOpen === i}
                  onToggle={() => toggleMobile(i)}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

// ─── service row ──────────────────────────────────────────────────────────────
function SvcRow({ svc, phase }: { svc: Svc; phase: Phase }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={svc.url}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="flex items-center gap-3 px-5 py-4 bg-slate-50/40 hover:bg-white border border-slate-100 rounded-2xl no-underline hover:shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
    >
      {/* Dynamic left edge bar */}
      <span
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 origin-left scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 rounded-l-2xl"
        style={{ backgroundColor: phase.accent }}
      />

      {/* Name */}
      <span
        className="flex-1 text-[13.5px] font-bold text-slate-700 leading-snug transition-colors duration-200 group-hover:text-slate-900 pr-1.5"
      >
        {svc.name}
      </span>

      {/* Badge / Discount */}
      {svc.badge && (
        <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 border border-emerald-100/50 uppercase tracking-wide shrink-0 whitespace-nowrap">
          {svc.badge}
        </span>
      )}

      {/* Price block */}
      <span className="flex flex-col items-end shrink-0 ml-1.5 gap-0.5">
        {/* was price */}
        {svc.was && (
          <span className="text-[10px] text-slate-350 line-through font-semibold leading-none tracking-wide">
            {svc.was}
          </span>
        )}
        {/* real price chip */}
        <span 
          className="inline-flex items-baseline gap-0.5 px-2.5 py-1 rounded-lg transition-all duration-200"
          style={{ 
            backgroundColor: hov ? phase.accent : `${phase.accent}12`, 
            color: hov ? "#fff" : phase.accent 
          }}
        >
          <span className="text-[13px] font-black leading-none">{svc.price}</span>
          <span className="text-[9px] font-black leading-none ml-0.5">*</span>
        </span>
      </span>

      {/* Arrow right sliding in on hover */}
      <ArrowRight
        className={`w-3.5 h-3.5 shrink-0 transition-all duration-200 opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0`}
        style={{ color: phase.accent }}
      />
    </Link>
  );
}
