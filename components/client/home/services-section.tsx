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
      <style>{`
        .ls-section { background:#fff; padding:96px 0 80px; position:relative; overflow:hidden; }
        .ls-section::before {
          content:''; position:absolute; top:-160px; right:-120px;
          width:520px; height:520px; border-radius:50%; pointer-events:none;
          background:radial-gradient(circle, rgba(202,45,66,0.06) 0%, transparent 65%);
        }
        /* tab grid */
        .ls-tabs { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-bottom:32px; }
        /* service grid */
        .ls-grid  { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:10px; }
        @media(max-width:900px)  { .ls-grid  { grid-template-columns:1fr 1fr; } }
        @media(max-width:640px)  { .ls-tabs  { grid-template-columns:1fr; gap:10px; }
                                   .ls-grid  { grid-template-columns:1fr; }
                                   .ls-panel-body { padding:20px 16px; }
                                   .ls-panel-head { padding:18px 16px; } }
        @media(prefers-reduced-motion:reduce){ *, *::before, *::after { transition:none!important; animation:none!important; } }
      `}</style>

      <section id="services" className="ls-section">
        <div style={{ maxWidth:1180, margin:"0 auto", padding:"0 24px", position:"relative", zIndex:1 }}>

          {/* HEADER ─────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity:0, y:36 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.3 }}
            transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
            style={{ textAlign:"center", marginBottom:56 }}
          >
            <span style={{
              display:"inline-flex", alignItems:"center", gap:8,
              background:"rgba(202,45,66,0.07)", border:"1.5px solid rgba(202,45,66,0.2)",
              color:"#ca2d42", padding:"5px 18px", borderRadius:100,
              fontSize:11, fontWeight:700, letterSpacing:"1.8px", textTransform:"uppercase",
              marginBottom:22,
            }}>
              <span style={{ width:5, height:5, borderRadius:"50%", background:"#ca2d42", display:"inline-block" }}/>
              Legal Services
            </span>

            <h2 style={{
              fontFamily:"var(--font-head,'Syne',sans-serif)",
              fontSize:"clamp(28px,3.8vw,50px)", fontWeight:800,
              color:"#0D0F14", lineHeight:1.1, letterSpacing:"-0.025em",
              margin:"0 0 16px",
            }}>
              Every legal need.<br/>
              <span style={{ color:"#ca2d42" }}>One trusted platform.</span>
            </h2>

            <p style={{ fontSize:17, color:"#4A5060", lineHeight:1.75, maxWidth:520, margin:"0 auto" }}>
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
                  style={{
                    all:"unset", boxSizing:"border-box",
                    display:"flex", flexDirection:"column",
                    padding:"22px 24px", borderRadius:18,
                    border: on ? `2px solid ${p.accent}` : "2px solid #E8ECF0",
                    background: on ? p.soft : "#FAFBFC",
                    cursor:"pointer", position:"relative", overflow:"hidden",
                    transition:"all 0.25s cubic-bezier(0.22,1,0.36,1)",
                    boxShadow: on ? `0 8px 36px ${p.glow}` : "0 1px 4px rgba(0,0,0,0.04)",
                    transform: on ? "translateY(-4px)" : "none",
                  }}
                >
                  {/* animated top bar */}
                  <motion.span
                    animate={{ scaleX: on ? 1 : 0, opacity: on ? 1 : 0 }}
                    initial={false}
                    transition={{ duration:0.22 }}
                    style={{
                      position:"absolute", top:0, left:0, right:0, height:3,
                      background:p.accent, borderRadius:"18px 18px 0 0",
                      transformOrigin:"left",
                    }}
                  />

                  {/* phase badge */}
                  <span style={{
                    display:"inline-flex", alignItems:"center", gap:6,
                    width:"fit-content",
                    background: on ? p.accent : "#EAEDF2",
                    color: on ? "#fff" : "#8A90A2",
                    borderRadius:100, padding:"4px 12px",
                    fontSize:11, fontWeight:700, marginBottom:12,
                    transition:"all 0.22s",
                  }}>
                    <span style={{
                      width:16, height:16, borderRadius:"50%",
                      background: on ? "rgba(255,255,255,0.25)" : "#C4C9D6",
                      color: on ? "#fff" : "#6B7280",
                      display:"inline-flex", alignItems:"center", justifyContent:"center",
                      fontSize:9, fontWeight:900, lineHeight:1,
                    }}>{p.id}</span>
                    Phase {p.id}
                  </span>

                  <span style={{
                    fontFamily:"var(--font-head,'Syne',sans-serif)",
                    fontSize:22, fontWeight:800, lineHeight:1.15,
                    color: on ? p.accent : "#0D0F14",
                    marginBottom:8, transition:"color 0.22s",
                  }}>
                    {p.label}
                  </span>

                  <span style={{ fontSize:13, color:"#8A90A2", lineHeight:1.55, flex:1 }}>
                    {p.tagline}
                  </span>

                  <span style={{
                    display:"inline-flex", alignItems:"center", gap:5,
                    marginTop:14,
                    fontSize:12, fontWeight:700,
                    color: on ? p.accent : "#B0B7C3",
                    transition:"color 0.22s",
                  }}>
                    {total} services
                    <span style={{
                      display:"inline-block",
                      transition:"transform 0.22s",
                      transform: on ? "translateX(3px)" : "none",
                    }}>→</span>
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* T&C note */}
          <p style={{ fontSize:11, color:"#9CA3AF", marginBottom:28, marginTop:-16, paddingLeft:4 }}>
            * T&amp;C applied. Prices shown are indicative and may vary based on requirements.
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={phase.key}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-12 }}
              transition={{ duration:0.28, ease:[0.22,1,0.36,1] }}
              style={{
                background:"#fff",
                border:"1.5px solid #E4E8F0",
                borderRadius:22,
                boxShadow:"0 4px 40px rgba(0,0,0,0.07)",
                overflow:"hidden",
              }}
            >
              {/* panel header */}
              <div
                className="ls-panel-head"
                style={{
                  display:"flex", alignItems:"center", justifyContent:"space-between",
                  flexWrap:"wrap", gap:14,
                  padding:"22px 32px",
                  background: phase.soft,
                  borderBottom:"1.5px solid #EEF1F6",
                }}
              >
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{
                    width:48, height:48, borderRadius:14,
                    background:phase.accent,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:22, flexShrink:0,
                  }}>
                    {phase.id===1?"🏗️":phase.id===2?"🛡️":"♻️"}
                  </div>
                  <div>
                    <div style={{
                      fontFamily:"var(--font-head,'Syne',sans-serif)",
                      fontSize:18, fontWeight:800, color:"#0D0F14",
                    }}>
                      Phase {phase.id} — {phase.label}
                    </div>
                    <div style={{ fontSize:13, color:"#8A90A2", marginTop:3 }}>
                      {phase.categories.reduce((n,c)=>n+c.items.length,0)} services across {phase.categories.length} categories
                    </div>
                  </div>
                </div>

                {/* premium CTA button */}
                <Link
                  href={phase.cta.href}
                  style={{
                    display:"inline-flex", alignItems:"center", gap:9,
                    padding:"12px 24px",
                    background:`linear-gradient(135deg, ${phase.accent} 0%, ${phase.accent}cc 100%)`,
                    color:"#fff", borderRadius:12, textDecoration:"none",
                    fontSize:13.5, fontWeight:700,
                    boxShadow:`0 6px 20px ${phase.glow}`,
                    transition:"all 0.2s",
                    flexShrink:0, whiteSpace:"nowrap",
                    position:"relative", overflow:"hidden",
                  }}
                >
                  <span style={{ position:"relative", zIndex:1 }}>{phase.cta.btn}</span>
                  <span style={{ position:"relative", zIndex:1, fontSize:16 }}>→</span>
                </Link>
              </div>

              {/* categories */}
              <div className="ls-panel-body" style={{ padding:"28px 32px" }}>
                {phase.categories.map((cat, ci) => (
                  <motion.div
                    key={cat.label}
                    initial={{ opacity:0, y:14 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.3, delay:ci*0.07, ease:[0.22,1,0.36,1] }}
                    style={{ marginBottom: ci < phase.categories.length-1 ? 32 : 0 }}
                  >
                    {/* category header */}
                    <div style={{
                      display:"flex", alignItems:"center", gap:12,
                      marginBottom:14,
                    }}>
                      <span style={{
                        fontSize:10.5, fontWeight:800,
                        textTransform:"uppercase", letterSpacing:"1.8px",
                        color:phase.accent,
                        background:phase.soft,
                        padding:"5px 14px", borderRadius:100,
                        flexShrink:0,
                      }}>
                        {cat.label}
                      </span>
                      <div style={{ flex:1, height:1, background:"#EAEDF2" }}/>
                      <span style={{ fontSize:11, color:"#C0C5D0", fontWeight:600, flexShrink:0 }}>
                        {cat.items.length} services
                      </span>
                    </div>

                    <div className="ls-grid">
                      {cat.items.map((svc) => (
                        <SvcRow key={svc.url} svc={svc} accent={phase.accent} soft={phase.soft} glow={phase.glow}/>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA strip */}
              <div style={{
                margin:"0 24px 24px",
                padding:"20px 24px",
                borderRadius:16,
                background:phase.soft,
                border:`1.5px solid ${phase.accent}22`,
                display:"flex", alignItems:"center",
                flexWrap:"wrap", gap:16,
                justifyContent:"space-between",
              }}>
                <p style={{ margin:0, fontSize:14, color:"#0D0F14", lineHeight:1.6 }}>
                  <strong style={{ fontWeight:700 }}>{phase.cta.bold}</strong>{" "}
                  <span style={{ color:"#4A5060" }}>{phase.cta.rest}</span>
                </p>
                <CtaButton href={phase.cta.href} accent={phase.accent} glow={phase.glow}>
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
function SvcRow({ svc, accent, soft, glow }: { svc:Svc; accent:string; soft:string; glow:string }) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={svc.url}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"flex", alignItems:"center", gap:12,
        padding:"12px 16px",
        borderRadius:12,
        border:`1.5px solid ${hov ? accent+"50" : "#EAEDF2"}`,
        background: hov ? soft : "#FAFBFC",
        textDecoration:"none",
        transition:"all 0.18s cubic-bezier(0.22,1,0.36,1)",
        transform: hov ? "translateY(-2px)" : "none",
        boxShadow: hov ? `0 6px 20px ${glow}` : "none",
        position:"relative", overflow:"hidden",
      }}
    >
      {/* left edge bar */}
      <span style={{
        position:"absolute", left:0, top:0, bottom:0,
        width: hov ? 3 : 0,
        background:accent,
        borderRadius:"12px 0 0 12px",
        transition:"width 0.18s",
      }}/>

      {/* name */}
      <span style={{
        flex:1, fontSize:13.5, fontWeight:600,
        color: hov ? "#0D0F14" : "#2C3140",
        lineHeight:1.35, transition:"color 0.18s",
      }}>
        {svc.name}
      </span>

      {/* badge */}
      {svc.badge && (
        <span style={{
          fontSize:10, fontWeight:700,
          padding:"2px 8px", borderRadius:100,
          background:"rgba(22,163,74,0.09)",
          color:"#15803d",
          border:"1px solid rgba(22,163,74,0.18)",
          whiteSpace:"nowrap", flexShrink:0,
        }}>
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
          background: hov ? accent : `${accent}18`,
          color: hov ? "#fff" : accent,
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
      <span style={{
        fontSize:16, color:accent, flexShrink:0,
        opacity: hov ? 1 : 0,
        transform: hov ? "translateX(0)" : "translateX(-6px)",
        transition:"all 0.18s",
      }}>→</span>
    </Link>
  );
}

// ─── premium cta button ───────────────────────────────────────────────────────
function CtaButton({ href, accent, glow, children }: {
  href:string; accent:string; glow:string; children:React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <Link
      href={href}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"inline-flex", alignItems:"center", gap:8,
        padding:"12px 26px",
        background: hov
          ? `linear-gradient(135deg, ${accent}ee, ${accent}aa)`
          : `linear-gradient(135deg, ${accent}, ${accent}cc)`,
        color:"#fff", borderRadius:12, textDecoration:"none",
        fontSize:14, fontWeight:700, flexShrink:0, whiteSpace:"nowrap",
        boxShadow: hov
          ? `0 10px 32px ${glow}, 0 2px 8px ${glow}`
          : `0 4px 16px ${glow}`,
        transform: hov ? "translateY(-2px)" : "none",
        transition:"all 0.2s cubic-bezier(0.22,1,0.36,1)",
        letterSpacing:"0.01em",
      }}
    >
      {children}
      <span style={{
        fontSize:16,
        transform: hov ? "translateX(3px)" : "none",
        transition:"transform 0.2s",
        display:"inline-block",
      }}>→</span>
    </Link>
  );
}
