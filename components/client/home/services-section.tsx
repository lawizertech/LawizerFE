"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
      }
    ],
  },
  {
    id: 2,
    key: "protect",
    label: "Protect",
    tagline: "Legally bind every relationship before disputes or breaches arise.",
    accent: "#1d4ed8",
    glow: "rgba(29,78,216,0.22)",
    soft: "#eff6ff",
    tw: {
      border: "border-blue-700",
      bgSoft: "bg-[#eff6ff]",
      text: "text-blue-700",
      bg: "bg-blue-700",
      shadow: "shadow-[0_8px_36px_rgba(29,78,216,0.22)]",
      borderHover: "border-blue-700/50",
      gradient: "from-blue-700 to-blue-700/80",
    },
    cta: {
      bold: "Operating without agreements?",
      rest: "Don't wait for a dispute — get covered today.",
      btn: "Talk to a Lawyer",
      href: "/contact",
    },
    categories: [
      {
        label: "Brand & Intellectual Property Protection",
        items: [
          {
            name: "Trademark Registration",
            price: "₹1,199",
            was: "₹3,499",
            badge: "POPULAR",
            url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
          },
          {
            name: "Copyright Registration",
            price: "₹1,500",
            was: "₹3,999",
            badge: "65% OFF",
            url: "/startup-businesslegal/protectbusiness/CopyrightRegistrationPage",
          },
          {
            name: "Patent Search & Registration",
            price: "₹4,999",
            was: "₹9,999",
            badge: "PATENT TAB",
            url: "/startup-businesslegal/protectbusiness/PatentRegistrationPage",
          },
          {
            name: "Reply to Trademark Objection",
            price: "₹1,999–₹3,999",
            was: "₹5,999–₹8,999",
            url: "/startup-businesslegal/protectbusiness/ReplyToTrademarkObjectionPage",
          },
          {
            name: "Trademark Renewal",
            price: "₹999",
            was: "₹2,499",
            badge: "60% OFF",
            url: "/startup-businesslegal/protectbusiness/RenewTrademarkPage",
          },
        ],
      },
      {
        label: "Legal Agreements",
        items: [
          { name: "Co-Founder Agreement", price: "₹1,499", was: "₹3,999", url: "/documentation/co-founder-agreement" },
          {
            name: "Shareholders' Agreement",
            price: "₹1,499",
            was: "₹8,999",
            url: "/documentation/shareholder-subscription-agreement",
          },
          {
            name: "Non-Disclosure Agreement (NDA)",
            price: "₹1,499",
            was: "₹1,999",
            url: "/documentation/non-disclosure-agreement",
          },
          { name: "Employment Agreement", price: "₹1,499", was: "₹3,499", url: "/documentation/employment-agreement" },
          {
            name: "Consultancy Agreement",
            price: "₹1,499",
            was: "₹3,199",
            url: "/documentation/consultancy-agreement",
          },
          {
            name: "Service Agreement & Term Sheet",
            price: "₹1,499",
            was: "₹4,499",
            url: "/documentation/service-agreement-term-sheet",
          },
          {
            name: "IP Assignment Agreement",
            price: "₹1,499",
            was: "₹4,999",
            url: "/documentation/ip-assignment-agreement",
          },
          {
            name: "Joint Venture Agreement",
            price: "₹1,499",
            was: "₹7,999",
            url: "/documentation/joint-venture-agreement",
          },
          {
            name: "Privacy Policy & Terms of Use",
            price: "₹1,499",
            was: "₹2,999",
            url: "/documentation/privacy-terms-of-use",
          },
          { name: "SaaS Agreement", price: "₹1,499", was: "₹5,999", url: "/documentation/saas-agreement" },
          { name: "Franchise Agreement", price: "₹1,499", was: "₹6,999", url: "/documentation/franchise-agreement" },
          { name: "Licensing Agreement", price: "₹1,499", was: "₹5,499", url: "/documentation/licensing-agreement" },
          { name: "Letter of Intent (LOI)", price: "₹1,499", was: "₹2,999", url: "/documentation/letter-of-intent" },
          {
            name: "Power of Attorney (Drafting)",
            price: "₹1,499",
            was: "₹2,499",
            url: "/documentation/power-of-attorney-drafting",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    key: "sustain",
    label: "Sustain",
    tagline: "Stay compliant — ROC filings, renewals & changes handled for you.",
    accent: "#15803d",
    glow: "rgba(21,128,61,0.22)",
    soft: "#f0fdf4",
    tw: {
      border: "border-green-700",
      bgSoft: "bg-[#f0fdf4]",
      text: "text-green-700",
      bg: "bg-green-700",
      shadow: "shadow-[0_8px_36px_rgba(21,128,61,0.22)]",
      borderHover: "border-green-700/50",
      gradient: "from-green-700 to-green-700/80",
    },
    cta: {
      bold: "Missed a compliance deadline?",
      rest: "We handle late filings and penalty mitigation too.",
      btn: "Fix It Now",
      href: "/contact",
    },
    categories: [
      {
        label: "ROC Filings",
        items: [
          {
            name: "ROC Return Filing — Pvt Ltd",
            price: "₹999",
            was: "₹4,999",
            url: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage",
          },
          {
            name: "ROC Return Filing — OPC",
            price: "₹999",
            was: "₹3,999",
            url: "/startup-businesslegal/managebusiness/ROCReturnFilingForOPCPage",
          },
          {
            name: "ROC Return Filing — LLP",
            price: "₹999",
            was: "₹3,499",
            url: "/startup-businesslegal/managebusiness/ROCReturnFilingForLLPPage",
          },
        ],
      },
      {
        label: "Company Changes & Management",
        items: [
          {
            name: "Appointment of Director",
            price: "₹999",
            was: "₹4,999",
            url: "/startup-businesslegal/managebusiness/AppointmentOfDirectorPage",
          },
          {
            name: "Resignation of Director",
            price: "₹999",
            was: "₹3,999",
            url: "/startup-businesslegal/managebusiness/ResignationOfDirectorPage",
          },
          {
            name: "Change of Registered Office",
            price: "₹999",
            was: "₹3,499",
            url: "/startup-businesslegal/managebusiness/ChangeInOfficeAddressPage",
          },
          {
            name: "Increase Authorised Capital",
            price: "₹999",
            was: "₹5,999",
            url: "/startup-businesslegal/managebusiness/IncreasingCapitalOfCompanyPage",
          },
        ],
      },
      {
        label: "Closure & IP Maintenance",
        items: [
          {
            name: "Closure of Pvt Ltd Company",
            price: "₹999",
            was: "₹9,999",
            url: "/startup-businesslegal/managebusiness/ClosureOfPvtLtdPage",
          },
          {
            name: "Closure of OPC",
            price: "₹999",
            was: "₹7,999",
            url: "/startup-businesslegal/managebusiness/ClosureOfOPCPage",
          },
          {
            name: "Closure of LLP",
            price: "₹999",
            was: "₹6,999",
            url: "/startup-businesslegal/managebusiness/ClosureOfLLPPage",
          },
          {
            name: "Sell Your Trademark",
            price: "₹999",
            was: "₹2,499",
            badge: "60% OFF",
            url: "/startup-businesslegal/protectbusiness/SellYourTrademarkPage",
          },
          {
            name: "Reply to Copyright Objection",
            price: "₹999",
            was: "₹2,499",
            badge: "60% OFF",
            url: "/startup-businesslegal/protectbusiness/ReplyToCopyrightObjectionPage",
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
        <div className="mob-accordion-left">
          <span className="mob-accordion-emoji">{phase.id === 1 ? "🏗️" : phase.id === 2 ? "🛡️" : "♻️"}</span>
          <div>
            <span className="mob-accordion-phase" style={{ color: phase.accent }}>Phase {phase.id}</span>
            <span className="mob-accordion-label">{phase.label}</span>
            <span className="mob-accordion-count">{total} services</span>
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
      <section id="services" className="bg-white pt-16 pb-20 relative overflow-hidden">
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
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border-[1.5px] border-brand-red/20 text-brand-red px-[18px] py-[5px] rounded-full text-[11px] font-bold tracking-[1.8px] uppercase mb-[22px]">
              <span className="w-[5px] h-[5px] rounded-full bg-brand-red inline-block" />
              Legal Services
            </span>

            <h2 className="font-[family-name:var(--)] text-[clamp(26px,3.8vw,50px)] font-extrabold text-[#0D0F14] leading-[1.1] tracking-[-0.025em] m-0 mb-4">
              Every legal need.
              <br />
              <span className="text-brand-red">One trusted platform.</span>
            </h2>

            <p className="text-[15px] lg:text-[17px] text-gray-600 leading-7 max-w-[520px] mx-auto">
              Pick a phase and explore all your services — with real prices, real pages, one click away.
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
                className="bg-white border-[1.5px] border-[#E4E8F0] rounded-[22px] shadow-[0_4px_40px_rgba(0,0,0,0.07)] overflow-hidden"
              >
                <div className={`flex items-center justify-between flex-wrap gap-3.5 px-8 py-[22px] border-b-[1.5px] border-[#EEF1F6] ${phase.tw.bgSoft}`}>
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] shrink-0 ${phase.tw.bg}`}>
                      {phase.id === 1 ? "🏗️" : phase.id === 2 ? "🛡️" : "♻️"}
                    </div>
                    <div>
                      <div className="font-[family-name:var(--,'Syne',sans-serif)] text-lg font-extrabold text-[#0D0F14]">Phase {phase.id} — {phase.label}</div>
                      <div className="text-[13px] text-gray-500 mt-[3px]">{phase.categories.reduce((n, c) => n + c.items.length, 0)} services across {phase.categories.length} categories</div>
                    </div>
                  </div>
                  <Link href={phase.cta.href} className={`inline-flex items-center gap-[9px] px-6 py-3 text-white rounded-xl no-underline text-[13.5px] font-bold transition-all duration-200 shrink-0 whitespace-nowrap relative overflow-hidden bg-gradient-to-br ${phase.tw.gradient} ${phase.tw.shadow}`}>
                    <span className="relative z-10">{phase.cta.btn}</span>
                    <span className="relative z-10 text-base">→</span>
                  </Link>
                </div>
                <div className="p-8">
                  {phase.categories.map((cat, ci) => (
                    <motion.div key={cat.label} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: ci * 0.07 }} className={ci < phase.categories.length - 1 ? "mb-8" : "mb-0"}>
                      <div className="flex items-center gap-3 mb-3.5">
                        <span className={`text-[10.5px] font-extrabold uppercase tracking-[1.8px] px-3.5 py-1.5 rounded-full shrink-0 ${phase.tw.text} ${phase.tw.bgSoft}`}>{cat.label}</span>
                        <div className="flex-1 h-px bg-gray-100" />
                        <span className="text-[11px] text-gray-400 font-semibold shrink-0">{cat.items.length} services</span>
                      </div>
                      <div className="ls-grid">
                        {cat.items.map((svc) => <SvcRow key={svc.url} svc={svc} phase={phase} />)}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className={`mx-6 mb-6 p-5 rounded-2xl border-[1.5px] flex items-center flex-wrap gap-4 justify-between ${phase.tw.bgSoft} ${phase.tw.border}/20`}>
                  <p className="m-0 text-sm text-gray-900 leading-relaxed">
                    <strong className="font-bold">{phase.cta.bold}</strong>{" "}
                    <span className="text-gray-600">{phase.cta.rest}</span>
                  </p>
                  <CtaButton href={phase.cta.href} phase={phase}>{phase.cta.btn}</CtaButton>
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
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] no-underline transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden ${hov ? phase.tw.borderHover : "border-[#EAEDF2]"} ${hov ? phase.tw.bgSoft : "bg-[#FAFBFC]"} ${hov ? "-translate-y-[2px]" : "translate-y-0"} ${hov ? phase.tw.shadow : "shadow-none"}`}
    >
      {/* left edge bar */}
      <span
        className={`absolute left-0 top-0 bottom-0 transition-all duration-150 rounded-l-xl ${phase.tw.bg}`}
        style={{ width: hov ? 3 : 0 }}
      />

      {/* name */}
      <span
        className={`flex-1 text-[13.5px] font-semibold leading-[1.35] transition-colors duration-150 ${hov ? "text-[#0D0F14]" : "text-[#2C3140]"}`}
      >
        {svc.name}
      </span>

      {/* badge */}
      {svc.badge && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-600/10 text-green-700 border border-green-600/20 whitespace-nowrap shrink-0">
          {svc.badge}
        </span>
      )}

      {/* price block */}
      <span style={{
        display:"flex", flexDirection:"column", alignItems:"flex-end",
        flexShrink:0, marginLeft:6, gap:3,
      }}>
        {/* was price — subtle strikethrough */}
        <span style={{
          fontSize:10, color:"#C0C5D0",
          textDecoration:"line-through", lineHeight:1,
          fontWeight:500, letterSpacing:"0.01em",
        }}>
          {svc.was}
        </span>
        {/* real price chip */}
        <span style={{
          display:"inline-flex", alignItems:"baseline", gap:1,
          background: hov ? phase.accent : `${phase.accent}18`,
          color: hov ? "#fff" : phase.accent,
          padding:"3px 9px", borderRadius:8,
          transition:"all 0.18s",
        }}>
          <span style={{ fontSize:13, fontWeight:800, lineHeight:1.2 }}>
            {svc.price}
          </span>
          <span style={{ fontSize:11, fontWeight:900, lineHeight:1, marginLeft:1 }}>*</span>
        </span>
      </span>

      {/* arrow */}
      <span
        className={`text-base shrink-0 transition-all duration-150 ${phase.tw.text} ${hov ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-1.5"}`}
      >
        →
      </span>
    </Link>
  );
}

// ─── premium cta button ───────────────────────────────────────────────────────
function CtaButton({ href, phase, children }: { href: string; phase: Phase; children: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl no-underline text-sm font-bold shrink-0 whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] tracking-[0.01em] bg-gradient-to-br ${hov ? phase.tw.gradient : phase.tw.bg} ${hov ? phase.tw.shadow : "shadow-sm"} ${hov ? "-translate-y-0.5" : "translate-y-0"}`}
    >
      {children}
      <span
        className={`text-base inline-block transition-transform duration-200 ${hov ? "translate-x-[3px]" : "translate-x-0"}`}
      >
        →
      </span>
    </Link>
  );
}
