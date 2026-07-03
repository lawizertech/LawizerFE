"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── types ───────────────────────────────────────────────────────────────────
type Svc   = { name:string; price:string; was:string; badge?:string; url:string };
type Cat   = { label:string; items:Svc[] };
type Phase = {
  id:number; key:string; label:string; tagline:string;
  accent:string; glow:string; soft:string;
  tw: {
    border: string; bgSoft: string; text: string; bg: string; shadow: string;
    borderHover: string; gradient: string;
  };
  categories:Cat[];
  cta:{ bold:string; rest:string; btn:string; href:string };
};

// ─── real prices from actual service pages ───────────────────────────────────
const PHASES: Phase[] = [
  {
    id:1, key:"establish",
    label:"Establish",
    tagline:"Register your business & lay the legal groundwork from day one.",
    accent:"#ca2d42", glow:"rgba(202,45,66,0.22)", soft:"#fef2f3",
    tw: { border: "border-brand-red", bgSoft: "bg-[#fef2f3]", text: "text-brand-red", bg: "bg-brand-red", shadow: "shadow-[0_8px_36px_rgba(202,45,66,0.22)]", borderHover: "border-brand-red/50", gradient: "from-brand-red to-brand-red/80" },
    cta:{ bold:"Ready to register your business?", rest:"Browse all services or talk to a legal expert to find the right fit.", btn:"View All Services", href:"/startup-businesslegal" },
    categories:[
      {
        label:"Business Incorporation",
        items:[
          { name:"Private Limited Company",        price:"₹999",  was:"₹4,999",  badge:"70% OFF", url:"/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" },
          { name:"One Person Company (OPC)",        price:"₹999",  was:"₹2,999",  badge:"67% OFF", url:"/startup-businesslegal/startbusiness/OnePersonCompanyPage" },
          { name:"Limited Liability Partnership",   price:"₹999",  was:"₹3,999",  badge:"Save ₹2,500", url:"/startup-businesslegal/startbusiness/LLPPage" },
          { name:"Startup India Registration",      price:"₹999",  was:"₹2,499",  badge:"60% OFF", url:"/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage" },
          { name:"GST Registration",                price:"₹999",  was:"₹1,999",  badge:"50% OFF", url:"/startup-businesslegal/startbusiness/GSTRegistrationPage" },
          { name:"Section 8 Company (NGO)",         price:"₹999",  was:"₹17,999+", url:"/startup-businesslegal/startbusiness/Section8NGOCompanyPage" },
        ],
      },
      {
        label:"ITR Filing Plans",
        items:[
          { name:"Bronze — Salaried Filing",        price:"₹2,499",  was:"₹6,873",  badge:"Essential",    url:"/itr/itr-plans#bronze" },
          { name:"Silver — With Video Call",         price:"₹4,499",  was:"₹12,498", badge:"Most Popular", url:"/itr/itr-plans#silver" },
          { name:"Gold — + Next Year Planning",      price:"₹6,499",  was:"₹17,498", badge:"Advanced",     url:"/itr/itr-plans#gold" },
          { name:"Diamond — Year-round Advisory",   price:"₹34,999", was:"₹99,998", badge:"Elite",        url:"/itr/itr-plans#diamond" },
        ],
      },
      {
        label:"IP, Trademarks & Certifications",
        items:[
          { name:"Trademark Registration",          price:"₹999",  was:"₹3,499",  badge:"Save ₹2,300", url:"/startup-businesslegal/protectbusiness/TrademarkRegistrationPage" },
          { name:"Copyright Registration",          price:"₹1,500",was:"₹3,999",  badge:"63% OFF", url:"/startup-businesslegal/protectbusiness/CopyrightRegistrationPage" },
          { name:"MSME / Udyam Registration",       price:"₹1,499",was:"₹2,999",  badge:"50% OFF", url:"/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage" },
          { name:"ISO Certification",               price:"₹1,499",was:"₹2,999",  badge:"50% OFF", url:"/startup-businesslegal/growbusiness/ISOCertificationPage" },
        ],
      },
    ],
  },
  {
    id:2, key:"protect",
    label:"Protect",
    tagline:"Legally bind every relationship before disputes or breaches arise.",
    accent:"#1d4ed8", glow:"rgba(29,78,216,0.22)", soft:"#eff6ff",
    tw: { border: "border-blue-700", bgSoft: "bg-[#eff6ff]", text: "text-blue-700", bg: "bg-blue-700", shadow: "shadow-[0_8px_36px_rgba(29,78,216,0.22)]", borderHover: "border-blue-700/50", gradient: "from-blue-700 to-blue-700/80" },
    cta:{ bold:"Operating without agreements?", rest:"Don't wait for a dispute — get covered today.", btn:"Talk to a Lawyer", href:"/contact" },
    categories:[
      {
        label:"Founder & Investor Agreements",
        items:[
          { name:"Co-Founder Agreement",             price:"₹1,499",was:"₹3,999",  url:"/documentation/co-founder-agreement" },
          { name:"Shareholders' Agreement",          price:"₹1,499",was:"₹8,999",  url:"/documentation/shareholder-subscription-agreement" },
          { name:"Joint Venture Agreement",          price:"₹1,499",was:"₹7,999",  url:"/documentation/joint-venture-agreement" },
          { name:"Letter of Intent (LOI)",           price:"₹1,499",was:"₹2,999",  url:"/documentation/letter-of-intent" },
        ],
      },
      {
        label:"Clients, Vendors & Team",
        items:[
          { name:"Non-Disclosure Agreement (NDA)",   price:"₹1,499",was:"₹1,999",  url:"/documentation/non-disclosure-agreement" },
          { name:"Employment Agreement",             price:"₹1,499",was:"₹3,499",  url:"/documentation/employment-agreement" },
          { name:"Consultancy Agreement",            price:"₹1,499",was:"₹3,199",  url:"/documentation/consultancy-agreement" },
          { name:"Service Agreement & Term Sheet",   price:"₹1,499",was:"₹4,499",  url:"/documentation/service-agreement-term-sheet" },
          { name:"Franchise Agreement",              price:"₹1,499",was:"₹6,999",  url:"/documentation/franchise-agreement" },
          { name:"Licensing Agreement",              price:"₹1,499",was:"₹5,499",  url:"/documentation/licensing-agreement" },
        ],
      },
      {
        label:"IP, Digital & Specialized",
        items:[
          { name:"IP Assignment Agreement",          price:"₹1,499",was:"₹4,999",  url:"/documentation/ip-assignment-agreement" },
          { name:"Privacy Policy & Terms of Use",    price:"₹1,499",was:"₹2,999",  url:"/documentation/privacy-terms-of-use" },
          { name:"SaaS Agreement",                   price:"₹1,499",was:"₹5,999",  url:"/documentation/saas-agreement" },
          { name:"Power of Attorney (Drafting)",     price:"₹1,499",was:"₹2,499",  url:"/documentation/power-of-attorney-drafting" },
          { name:"Reply to Trademark Objection",     price:"₹1,999–₹3,999",was:"₹5,999–₹8,999", url:"/startup-businesslegal/protectbusiness/ReplyToTrademarkObjectionPage" },
          { name:"Trademark Renewal",                price:"₹999",was:"₹2,499",    badge:"60% OFF", url:"/startup-businesslegal/protectbusiness/RenewTrademarkPage" },
        ],
      },
    ],
  },
  {
    id:3, key:"sustain",
    label:"Sustain",
    tagline:"Stay compliant — ROC filings, renewals & changes handled for you.",
    accent:"#15803d", glow:"rgba(21,128,61,0.22)", soft:"#f0fdf4",
    tw: { border: "border-green-700", bgSoft: "bg-[#f0fdf4]", text: "text-green-700", bg: "bg-green-700", shadow: "shadow-[0_8px_36px_rgba(21,128,61,0.22)]", borderHover: "border-green-700/50", gradient: "from-green-700 to-green-700/80" },
    cta:{ bold:"Missed a compliance deadline?", rest:"We handle late filings and penalty mitigation too.", btn:"Fix It Now", href:"/contact" },
    categories:[
      {
        label:"ROC Filings",
        items:[
          { name:"ROC Return Filing — Pvt Ltd",      price:"₹999",  was:"₹4,999",  url:"/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage" },
          { name:"ROC Return Filing — OPC",          price:"₹999",  was:"₹3,999",  url:"/startup-businesslegal/managebusiness/ROCReturnFilingForOPCPage" },
          { name:"ROC Return Filing — LLP",          price:"₹999",  was:"₹3,499",  url:"/startup-businesslegal/managebusiness/ROCReturnFilingForLLPPage" },
        ],
      },
      {
        label:"Company Changes & Management",
        items:[
          { name:"Appointment of Director",          price:"₹999",  was:"₹4,999",  url:"/startup-businesslegal/managebusiness/AppointmentOfDirectorPage" },
          { name:"Resignation of Director",          price:"₹999",  was:"₹3,999",  url:"/startup-businesslegal/managebusiness/ResignationOfDirectorPage" },
          { name:"Change of Registered Office",      price:"₹999",  was:"₹3,499",  url:"/startup-businesslegal/managebusiness/ChangeInOfficeAddressPage" },
          { name:"Increase Authorised Capital",      price:"₹999",  was:"₹5,999",  url:"/startup-businesslegal/managebusiness/IncreasingCapitalOfCompanyPage" },
        ],
      },
      {
        label:"Closure & IP Maintenance",
        items:[
          { name:"Closure of Pvt Ltd Company",       price:"₹999",  was:"₹9,999",  url:"/startup-businesslegal/managebusiness/ClosureOfPvtLtdPage" },
          { name:"Closure of OPC",                   price:"₹999",  was:"₹7,999",  url:"/startup-businesslegal/managebusiness/ClosureOfOPCPage" },
          { name:"Closure of LLP",                   price:"₹999",  was:"₹6,999",  url:"/startup-businesslegal/managebusiness/ClosureOfLLPPage" },
          { name:"Sell Your Trademark",              price:"₹999",  was:"₹2,499",  badge:"60% OFF", url:"/startup-businesslegal/protectbusiness/SellYourTrademarkPage" },
          { name:"Reply to Copyright Objection",     price:"₹999",  was:"₹2,499",  badge:"60% OFF", url:"/startup-businesslegal/protectbusiness/ReplyToCopyrightObjectionPage" },
        ],
      },
    ],
  },
];

// ─── component ────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const phase = PHASES[active];

  return (
    <>

      <section id="services" className="bg-white pt-24 pb-20 relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -top-[160px] -right-[120px] w-[520px] h-[520px] rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(202,45,66,0.06)_0%,transparent_65%)]" />

        <div className="max-w-[1180px] mx-auto px-6 relative z-10">

          {/* HEADER ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity:0, y:36 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 bg-brand-red/10 border-[1.5px] border-brand-red/20 text-brand-red px-[18px] py-[5px] rounded-full text-[11px] font-bold tracking-[1.8px] uppercase mb-[22px]">
              <span className="w-[5px] h-[5px] rounded-full bg-brand-red inline-block"/>
              Legal Services
            </span>

            <h2 className="font-[family-name:var(--font-head)] text-[clamp(28px,3.8vw,50px)] font-extrabold text-[#0D0F14] leading-[1.1] tracking-[-0.025em] m-0 mb-4">
              Every legal need.<br/>
              <span className="text-brand-red">One trusted platform.</span>
            </h2>

            <p className="text-[17px] text-gray-600 leading-7 max-w-[520px] mx-auto">
              Pick a phase and explore all your services — with real prices, real pages, one click away.
            </p>
          </motion.div>

          {/* PHASE TABS ──────────────────────────────────────────── */}
          <div className="ls-tabs">
            {PHASES.map((p, i) => {
              const on = active === i;
              const total = p.categories.reduce((n,c)=>n+c.items.length,0);
              return (
                <motion.button
                  key={p.key}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  whileTap={{ scale:0.98 }}
                  className={`all-unset box-border flex flex-col px-6 py-[22px] rounded-[18px] cursor-pointer relative overflow-hidden transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] border-2 ${on ? p.tw.border : 'border-[#E8ECF0]'} ${on ? p.tw.bgSoft : 'bg-[#FAFBFC]'} ${on ? p.tw.shadow : 'shadow-[0_1px_4px_rgba(0,0,0,0.04)]'} ${on ? '-translate-y-1' : 'translate-y-0'}`}
                >
                  {/* animated top bar */}
                  <motion.span
                    animate={{ scaleX: on ? 1 : 0, opacity: on ? 1 : 0 }}
                    initial={false}
                    transition={{ duration:0.22 }}
                    className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-[18px] origin-left ${p.tw.bg}`}
                  />

                  {/* phase badge */}
                  <span className={`inline-flex items-center gap-1.5 w-fit rounded-full px-3 py-1 text-[11px] font-bold mb-3 transition-all duration-220 ${on ? p.tw.bg : 'bg-[#EAEDF2]'} ${on ? 'text-white' : 'text-[#8A90A2]'}`}>
                    <span className={`w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px] font-black leading-none ${on ? 'bg-white/25 text-white' : 'bg-[#C4C9D6] text-[#6B7280]'}`}>
                      {p.id}
                    </span>
                    Phase {p.id}
                  </span>

                  <span className={`font-[family-name:var(--font-head,'Syne',sans-serif)] text-[22px] font-extrabold leading-[1.15] mb-2 transition-colors duration-220 ${on ? p.tw.text : 'text-[#0D0F14]'}`}>
                    {p.label}
                  </span>

                  <span className="text-[13px] text-gray-400 leading-relaxed flex-1 text-left">
                    {p.tagline}
                  </span>

                  <span className={`inline-flex items-center gap-1.5 mt-3.5 text-xs font-bold transition-colors duration-220 ${on ? p.tw.text : 'text-[#B0B7C3]'}`}>
                    {total} services
                    <span className={`inline-block transition-transform duration-220 ${on ? 'translate-x-[3px]' : 'translate-x-0'}`}>→</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* CONTENT PANEL ───────────────────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.key}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-12 }}
              transition={{ duration:0.28, ease:[0.22,1,0.36,1] }}
              className="bg-white border-[1.5px] border-[#E4E8F0] rounded-[22px] shadow-[0_4px_40px_rgba(0,0,0,0.07)] overflow-hidden"
            >
              {/* panel header */}
              <div className={`flex items-center justify-between flex-wrap gap-3.5 px-8 py-[22px] border-b-[1.5px] border-[#EEF1F6] ${phase.tw.bgSoft}`}>
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] shrink-0 ${phase.tw.bg}`}>
                    {phase.id===1?"🏗️":phase.id===2?"🛡️":"♻️"}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-head,'Syne',sans-serif)] text-[18px] font-extrabold text-[#0D0F14]">
                      Phase {phase.id} — {phase.label}
                    </div>
                    <div className="text-[13px] text-gray-500 mt-[3px]">
                      {phase.categories.reduce((n,c)=>n+c.items.length,0)} services across {phase.categories.length} categories
                    </div>
                  </div>
                </div>

                {/* premium CTA button */}
                <Link
                  href={phase.cta.href}
                  className={`inline-flex items-center gap-[9px] px-6 py-3 text-white rounded-xl no-underline text-[13.5px] font-bold transition-all duration-200 shrink-0 whitespace-nowrap relative overflow-hidden bg-gradient-to-br ${phase.tw.gradient} ${phase.tw.shadow}`}
                >
                  <span className="relative z-10">{phase.cta.btn}</span>
                  <span className="relative z-10 text-base">→</span>
                </Link>
              </div>

              {/* categories */}
              <div className="p-4 sm:p-7 md:p-8">
                {phase.categories.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity:0, y:14 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.3, delay:ci*0.07, ease:[0.22,1,0.36,1] }}
                    className={ci < phase.categories.length - 1 ? "mb-8" : "mb-0"}
                  >
                    {/* category header */}
                    <div className="flex items-center gap-3 mb-3.5">
                      <span className={`text-[10.5px] font-extrabold uppercase tracking-[1.8px] px-3.5 py-1.5 rounded-full shrink-0 ${phase.tw.text} ${phase.tw.bgSoft}`}>
                        {cat.label}
                      </span>
                      <div className="flex-1 h-px bg-gray-100"/>
                      <span className="text-[11px] text-gray-400 font-semibold shrink-0">
                        {cat.items.length} services
                      </span>
                    </div>

                    <div className="ls-grid">
                      {cat.items.map((svc) => (
                        <SvcRow key={svc.url} svc={svc} phase={phase} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA strip */}
              <div className={`mx-4 sm:mx-6 mb-4 sm:mb-6 p-5 sm:px-6 rounded-2xl border-[1.5px] flex items-center flex-wrap gap-4 justify-between ${phase.tw.bgSoft} ${phase.tw.border}/20`}>
                <p className="m-0 text-sm text-gray-900 leading-relaxed">
                  <strong className="font-bold">{phase.cta.bold}</strong>{" "}
                  <span className="text-gray-600">{phase.cta.rest}</span>
                </p>
                <CtaButton href={phase.cta.href} phase={phase}>
                  {phase.cta.btn}
                </CtaButton>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}

// ─── service row ──────────────────────────────────────────────────────────────
function SvcRow({ svc, phase }: { svc:Svc; phase:Phase }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={svc.url}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] no-underline transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] relative overflow-hidden ${hov ? phase.tw.borderHover : 'border-[#EAEDF2]'} ${hov ? phase.tw.bgSoft : 'bg-[#FAFBFC]'} ${hov ? '-translate-y-[2px]' : 'translate-y-0'} ${hov ? phase.tw.shadow : 'shadow-none'}`}
    >
      {/* left edge bar */}
      <span className={`absolute left-0 top-0 bottom-0 transition-all duration-150 rounded-l-xl ${phase.tw.bg}`} style={{ width: hov ? 3 : 0 }} />

      {/* name */}
      <span className={`flex-1 text-[13.5px] font-semibold leading-[1.35] transition-colors duration-150 ${hov ? 'text-[#0D0F14]' : 'text-[#2C3140]'}`}>
        {svc.name}
      </span>

      {/* badge */}
      {svc.badge && (
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-600/10 text-green-700 border border-green-600/20 whitespace-nowrap shrink-0">
          {svc.badge}
        </span>
      )}

      {/* price block */}
      <span className="flex flex-col items-end shrink-0 ml-1">
        <span className="text-[11px] text-[#B0B7C3] line-through leading-none">
          {svc.was}
        </span>
        <span className={`text-[14px] font-extrabold leading-[1.2] transition-colors duration-150 ${hov ? phase.tw.text : 'text-[#0D0F14]'}`}>
          {svc.price}
        </span>
      </span>

      {/* arrow */}
      <span className={`text-base shrink-0 transition-all duration-150 ${phase.tw.text} ${hov ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1.5'}`}>
        →
      </span>
    </Link>
  );
}

// ─── premium cta button ───────────────────────────────────────────────────────
function CtaButton({ href, phase, children }: {
  href:string; phase:Phase; children:React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      className={`inline-flex items-center gap-2 px-6 py-3 text-white rounded-xl no-underline text-sm font-bold shrink-0 whitespace-nowrap transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] tracking-[0.01em] bg-gradient-to-br ${hov ? phase.tw.gradient : phase.tw.bg} ${hov ? phase.tw.shadow : 'shadow-sm'} ${hov ? '-translate-y-0.5' : 'translate-y-0'}`}
    >
      {children}
      <span className={`text-base inline-block transition-transform duration-200 ${hov ? 'translate-x-[3px]' : 'translate-x-0'}`}>
        →
      </span>
    </Link>
  );
}
