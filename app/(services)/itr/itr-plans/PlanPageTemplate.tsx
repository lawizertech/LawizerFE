"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, ArrowLeft, Star, Upload, Copy,
  Phone, X, ChevronDown, ChevronUp,
  ShieldCheck, Clock, Users, BadgeCheck, Zap, FileText, CalendarCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────
   TYPE — edit each tier's page.tsx to customise content
───────────────────────────────────────────────────────── */
export type PlanConfig = {
  id:            string;
  name:          string;
  subtitle:      string;
  price:         number;
  originalPrice: number;
  accentColor:   string;
  glowRGB:       string;
  emoji:         string;
  tier:          string;
  tagline:       string;
  about:         string;
  servicesIncluded:  string[];
  whoShouldBuy:      string[];
  howItsDone:        { step: number; title: string; desc: string }[];
  documentsRequired: string[];
  estimateDays:      number;
  faqs:              { q: string; a: string }[];
};

const NAVY       = "#0e172b";
const OFFER_CODE = "OFFERITR";

/* ─────────────────────────────────────────────────────────
   SECTION HEADING
───────────────────────────────────────────────────────── */
function SectionHeading({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-3" style={{ color: NAVY }}>{title}</h2>
      <div className="h-[3px] w-10 rounded-full" style={{ background: accent }} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   FAQ ACCORDION ITEM
───────────────────────────────────────────────────────── */
function FAQItem({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group">
        <span className="text-sm font-semibold text-gray-800 leading-snug">{q}</span>
        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ background: open ? `${accent}15` : "transparent" }}>
          {open
            ? <ChevronUp   className="w-3.5 h-3.5" style={{ color: accent }} />
            : <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden">
            <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   OFFER CODE CHIP (used inside the glass hero panel)
   White-on-accent version for use on colored backgrounds
───────────────────────────────────────────────────────── */
function OfferChipGlass() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(OFFER_CODE); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all hover:opacity-90"
      style={{ background: "rgba(255,255,255,0.14)", borderColor: "rgba(255,255,255,0.28)" }}>
      <span className="text-white/60 text-[11px]">Code</span>
      <span className="text-white font-bold text-[11px] tracking-wide">{OFFER_CODE}</span>
      {copied
        ? <span className="text-[10px] font-bold" style={{ color: "rgba(255,255,255,0.8)" }}>✓ Copied</span>
        : <Copy className="w-3 h-3 text-white/50" />}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   OFFER CODE CHIP (used inside the sidebar card)
   Accent-on-white version for use on white backgrounds
───────────────────────────────────────────────────────── */
function OfferChipLight({ accent }: { accent: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(OFFER_CODE); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all hover:opacity-80"
      style={{ background: `${accent}08`, borderColor: `${accent}30`, color: accent }}>
      <Copy className="w-2.5 h-2.5" />
      <span className="text-[10px] font-bold">{copied ? "Copied!" : OFFER_CODE}</span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   SIDEBAR PURCHASE CARD
   Sticky while scrolling content. Distinct from the hero
   panel — white background, richer trust details.
───────────────────────────────────────────────────────── */
function SidebarCard({ plan, onCallback }: { plan: PlanConfig; onCallback: () => void }) {
  const router   = useRouter();
  const discount = Math.round((1 - plan.price / plan.originalPrice) * 100);

  return (
    <div className="rounded-3xl overflow-hidden bg-white"
      style={{
        border:     `1.5px solid ${plan.accentColor}25`,
        boxShadow:  `0 20px 60px rgba(${plan.glowRGB},0.14), 0 4px 20px rgba(0,0,0,0.05)`,
      }}>

      {/* Accent top stripe */}
      <div className="h-1"
        style={{ background: `linear-gradient(90deg, ${plan.accentColor}70, ${plan.accentColor}, ${plan.accentColor}70)` }} />

      {/* Pricing block — lightly tinted */}
      <div className="px-6 pt-6 pb-5" style={{ background: `${plan.accentColor}06` }}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-white px-2.5 py-1 rounded-lg"
              style={{ background: plan.accentColor }}>{discount}% OFF</span>
            <span className="text-gray-400 text-xs line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <OfferChipLight accent={plan.accentColor} />
        </div>
        <div className="text-[2.4rem] font-extrabold tracking-tight leading-none" style={{ color: NAVY }}>
          ₹{plan.price.toLocaleString("en-IN")}
        </div>
        <p className="text-gray-400 text-xs mt-1.5">All inclusive · No hidden charges</p>
      </div>

      {/* CTAs + trust badges */}
      <div className="px-6 py-5 space-y-3">
        <button onClick={() => router.push(`/payment?plan=${plan.id}`)}
          className="relative w-full py-4 rounded-2xl text-sm font-bold text-white overflow-hidden group transition-all hover:brightness-110"
          style={{
            background:  `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}bb)`,
            boxShadow:   `0 6px 24px rgba(${plan.glowRGB},0.35)`,
          }}>
          <span className="relative z-10">Buy Now</span>
          {/* shimmer sweep */}
          <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </button>

        <button onClick={onCallback}
          className="w-full py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all border hover:shadow-sm"
          style={{ color: plan.accentColor, borderColor: `${plan.accentColor}30`, background: `${plan.accentColor}06` }}>
          <Phone className="w-3.5 h-3.5" /> Request a Callback
        </button>

        {/* Trust badges */}
        <div className="pt-4 border-t border-gray-100 space-y-2.5">
          {[
            { icon: Clock,       text: `${plan.estimateDays}-day turnaround`  },
            { icon: BadgeCheck,  text: "Expert CA-assisted filing"            },
            { icon: ShieldCheck, text: "100% secure & confidential"           },
            { icon: FileText,    text: "ITR acknowledgement included"         },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${plan.accentColor}12` }}>
                <Icon className="w-3.5 h-3.5" style={{ color: plan.accentColor }} />
              </div>
              <span className="text-xs text-gray-500">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   CALLBACK MODAL
───────────────────────────────────────────────────────── */
function CallbackModal({ plan, onClose }: { plan: PlanConfig; onClose: () => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
      onClick={onClose}>
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}>

        <div className="h-1.5"
          style={{ background: `linear-gradient(90deg, ${plan.accentColor}, ${plan.accentColor}80)` }} />

        <div className="p-8">
          <button onClick={onClose}
            className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X className="w-4 h-4 text-gray-500" />
          </button>

          <div className="flex items-center gap-4 mb-7">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{ background: `${plan.accentColor}12` }}>
              <Phone className="w-5 h-5" style={{ color: plan.accentColor }} />
            </div>
            <div>
              <h3 className="text-xl font-bold" style={{ color: NAVY }}>Request a Callback</h3>
              <p className="text-sm text-gray-400 mt-0.5">Expert calls you within 2 hours</p>
            </div>
          </div>

          <div className="space-y-3">
            {["Full Name", "Mobile Number", "Email Address"].map(ph => (
              <input key={ph} type="text" placeholder={ph}
                className="w-full border border-gray-200 rounded-2xl px-5 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-gray-300 transition" />
            ))}
            <button className="w-full py-4 rounded-2xl text-sm font-bold text-white mt-1 transition-all hover:brightness-110 hover:shadow-lg"
              style={{ background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}bb)` }}>
              Book My Call
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN PAGE
   Structure:
     1. Slim sticky buy-bar   — fades IN only after hero exits viewport
     2. Hero                  — full-bleed accent gradient, glass price panel
     3. Stats strip
     4. Body (content + sticky sidebar)
     5. Mobile bottom bar
───────────────────────────────────────────────────────── */
export default function PlanPage({ plan }: { plan: PlanConfig }) {
  const router  = useRouter();
  const [modal,      setModal]      = useState(false);
  const [buyBarShow, setBuyBarShow] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  /* Watch hero — show slim buy-bar only when hero is off-screen */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setBuyBarShow(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const discount = Math.round((1 - plan.price / plan.originalPrice) * 100);

  const stats = [
    { icon: Star,        label: "Avg Rating",    value: "4.9 / 5"                   },
    { icon: Users,       label: "Clients Served", value: "50,000+"                  },
    { icon: Clock,       label: "Turnaround",     value: `${plan.estimateDays} Days` },
    { icon: ShieldCheck, label: "Data Security",  value: "Bank-Level"                },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap');
        .shimmer { position: relative; overflow: hidden; }
        .shimmer::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .shimmer:hover::after { transform: translateX(100%); }
      `}</style>

      {/* ══════════════════════════════════════════════════
          1. SLIM BUY BAR
          Slides down from top once hero exits viewport.
          Completely different from the sidebar card —
          shows plan identity + price inline in one bar.
      ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {buyBarShow && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0,   opacity: 1 }}
            exit={{   y: -80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white"
            style={{ borderTop: `2px solid ${plan.accentColor}40`, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>


            <div className="max-w-6xl mx-auto px-8 h-18 flex items-center justify-between gap-6">

              {/* Left: back link + divider + plan name only (no subtitle) */}
              <div className="flex items-center gap-4 min-w-0 flex-1">
                <button onClick={() => router.push("/itr")}
                  className="flex items-center gap-1.5 flex-shrink-0 group transition-colors text-gray-400 hover:text-gray-700">
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span className="text-xs font-semibold hidden sm:block">Plans</span>
                </button>
                <div className="w-px h-4 bg-gray-200 flex-shrink-0" />
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-base flex-shrink-0">{plan.emoji}</span>
                  <span className="font-bold text-sm truncate" style={{ color: NAVY }}>{plan.name} Plan</span>
                  <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-md flex-shrink-0"
                    style={{ background: plan.accentColor }}>{discount}% OFF</span>
                </div>
              </div>

              {/* Right: price + actions — no centre column, everything right-aligned */}
              <div className="flex items-center gap-5 flex-shrink-0">
                <div className="flex items-baseline gap-2 hidden sm:flex">
                  <span className="text-xs text-gray-400 line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</span>
                  <span className="text-lg font-extrabold" style={{ color: NAVY }}>₹{plan.price.toLocaleString("en-IN")}</span>
                </div>
                <div className="w-px h-4 bg-gray-200 hidden sm:block" />
                <button onClick={() => setModal(true)}
                  className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-xl border transition-all hover:shadow-sm hidden sm:flex"
                  style={{ color: plan.accentColor, borderColor: `${plan.accentColor}30`, background: `${plan.accentColor}06` }}>
                  <Phone className="w-3.5 h-3.5" /> Callback
                </button>
                <button onClick={() => router.push(`/payment?plan=${plan.id}`)}
                  className="shimmer text-sm font-bold text-white px-6 py-2.5 rounded-xl transition-all hover:brightness-110"
                  style={{
                    background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`,
                    boxShadow:  `0 4px 16px rgba(${plan.glowRGB},0.28)`,
                  }}>
                  Buy Now
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════════
          2. HERO
          Full-bleed accent gradient. Price lives here in
          a glassmorphism panel — not repeated at the top.
          A wave SVG melts it into the white body below.
      ══════════════════════════════════════════════════ */}
      <header ref={heroRef} className="relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${plan.accentColor} 0%, ${plan.accentColor}cc 60%, ${plan.accentColor}99 100%)` }}>

        {/* Decorative overlays */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top-right glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20"
            style={{ background: "rgba(255,255,255,0.2)", filter: "blur(60px)" }} />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-28 opacity-30"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.12), transparent)" }} />
          {/* Dot grid */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
            <defs>
              <pattern id={`dots-${plan.id}`} x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#dots-${plan.id})`} />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-0">
          {/* Back to Plans */}
          <button onClick={() => router.push("/itr")} className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm mb-10 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Plans
          </button>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end pb-12">

            {/* Left — identity */}
            <div>
              {/* Tier pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/18 backdrop-blur-sm rounded-full px-4 py-2 mb-5"
                style={{ border: "1px solid rgba(255,255,255,0.25)" }}>
                <span className="text-xl">{plan.emoji}</span>
                <span className="text-white/90 text-xs font-bold tracking-widest uppercase">{plan.tier}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-sm">
                {plan.name} Plan
              </h1>
              <p className="text-white/80 text-lg mb-1.5">{plan.subtitle}</p>
              <p className="text-white/55 text-sm mb-7 max-w-lg">{plan.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-8">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />)}
                </div>
                <span className="text-white font-semibold text-sm">4.9</span>
                <span className="text-white/50 text-sm">· 31,545 reviews</span>
              </div>

              {/* Mobile-only inline CTA */}
              <div className="flex flex-wrap items-center gap-3 lg:hidden">
                <div>
                  <div className="text-white/55 text-sm line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</div>
                  <div className="text-3xl font-extrabold text-white">₹{plan.price.toLocaleString("en-IN")}</div>
                </div>
                <button onClick={() => router.push(`/payment?plan=${plan.id}`)}
                  className="shimmer bg-white text-sm font-bold px-7 py-3.5 rounded-2xl transition-all hover:shadow-xl hover:scale-105"
                  style={{ color: plan.accentColor }}>
                  Buy Now
                </button>
                <button onClick={() => setModal(true)}
                  className="flex items-center gap-1.5 text-white/80 hover:text-white text-sm font-medium border border-white/25 rounded-2xl px-4 py-3.5 transition-all">
                  <Phone className="w-4 h-4" /> Callback
                </button>
              </div>
            </div>

            {/* Right — glass price panel (desktop only, lives inside hero) */}
            <div className="hidden lg:block flex-shrink-0 self-end">
              <div className="rounded-3xl overflow-hidden w-72"
                style={{
                  background:    "rgba(255,255,255,0.13)",
                  backdropFilter:"blur(18px)",
                  border:        "1.5px solid rgba(255,255,255,0.28)",
                  boxShadow:     "0 20px 60px rgba(0,0,0,0.14)",
                }}>
                <div className="px-7 py-6">
                  {/* Top row: discount badge + offer code */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-[11px] font-bold text-white bg-white/25 px-2.5 py-1 rounded-lg">
                      {discount}% OFF
                    </span>
                    <OfferChipGlass />
                  </div>

                  {/* Price */}
                  <div className="text-white/55 text-sm line-through mb-0.5">
                    ₹{plan.originalPrice.toLocaleString("en-IN")}
                  </div>
                  <div className="text-[2.6rem] font-extrabold text-white leading-none mb-1">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </div>
                  <div className="text-white/45 text-xs mb-6">All inclusive · No hidden charges</div>

                  {/* Buy Now — white button on coloured bg */}
                  <button onClick={() => router.push(`/payment?plan=${plan.id}`)}
                    className="shimmer w-full py-4 rounded-2xl text-sm font-bold mb-3 transition-all hover:shadow-xl hover:scale-[1.02]"
                    style={{ background: "white", color: plan.accentColor }}>
                    Buy Now
                  </button>

                  <button onClick={() => setModal(true)}
                    className="w-full py-3 rounded-2xl text-sm font-semibold text-white/80 hover:text-white border border-white/22 hover:border-white/45 flex items-center justify-center gap-2 transition-all">
                    <Phone className="w-3.5 h-3.5" /> Request a Callback
                  </button>

                  {/* Micro trust row */}
                  <div className="mt-5 pt-5 border-t border-white/15 flex items-center justify-around">
                    {[
                      { icon: ShieldCheck, text: "Secure"   },
                      { icon: BadgeCheck,  text: "CA-Filed" },
                      { icon: Zap,         text: `${plan.estimateDays}d`   },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex flex-col items-center gap-1.5">
                        <Icon className="w-4 h-4 text-white/65" />
                        <span className="text-white/55 text-[10px] font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Wave bottom edge melting into white */}
        <div className="relative h-14 overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 56" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,56 L0,28 Q360,0 720,24 Q1080,48 1440,20 L1440,56 Z" fill="white" />
          </svg>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          3. STATS STRIP
      ══════════════════════════════════════════════════ */}
      <div className="border-b border-gray-100 bg-gray-50/40">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-5">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${plan.accentColor}12` }}>
                <Icon className="w-4 h-4" style={{ color: plan.accentColor }} />
              </div>
              <div>
                <div className="text-sm font-bold leading-tight" style={{ color: NAVY }}>{value}</div>
                <div className="text-[11px] text-gray-400">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          4. BODY — content left, sticky sidebar right
      ══════════════════════════════════════════════════ */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16">

          {/* ── Content sections ── */}
          <div className="space-y-16 min-w-0">

            {/* About */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="About this Plan" accent={plan.accentColor} />
              <p className="text-gray-500 leading-relaxed">{plan.about}</p>
            </motion.section>

            {/* Services — 2-col card grid */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Services Included" accent={plan.accentColor} />
              <div className="grid sm:grid-cols-2 gap-3">
                {plan.servicesIncluded.map((s, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${plan.accentColor}18` }}>
                      <Check className="w-3 h-3" style={{ color: plan.accentColor }} />
                    </div>
                    <span className="text-gray-600 text-sm leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Who should buy */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Who Should Buy" accent={plan.accentColor} />
              <div className="grid sm:grid-cols-2 gap-3">
                {plan.whoShouldBuy.map((w, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl transition-colors"
                    style={{ background: `${plan.accentColor}06`, border: `1px solid ${plan.accentColor}18` }}>
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: plan.accentColor }} />
                    <span className="text-gray-600 text-sm leading-snug">{w}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* How it's done — numbered spine */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="How It's Done" accent={plan.accentColor} />
              <p className="text-gray-400 text-sm -mt-4 mb-8">100% digital. No physical visits needed.</p>
              {plan.howItsDone.map((s, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center w-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white z-10"
                      style={{ background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}bb)`,
                               boxShadow: `0 4px 14px rgba(${plan.glowRGB},0.35)` }}>
                      {s.step}
                    </div>
                    {i < plan.howItsDone.length - 1 && (
                      <div className="w-0.5 flex-1 my-1.5 rounded-full" style={{ background: `${plan.accentColor}25` }} />
                    )}
                  </div>
                  <div className={`pt-1 ${i < plan.howItsDone.length - 1 ? "pb-10" : "pb-0"}`}>
                    <div className="text-base font-semibold mb-1.5" style={{ color: NAVY }}>{s.title}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </motion.section>

            {/* Documents */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Documents Required" accent={plan.accentColor} />
              <div className="grid sm:grid-cols-2 gap-3">
                {plan.documentsRequired.map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${plan.accentColor}10` }}>
                      <Upload className="w-3.5 h-3.5" style={{ color: plan.accentColor }} />
                    </div>
                    <span className="text-gray-600 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* FAQs */}
            <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <SectionHeading title="Frequently Asked Questions" accent={plan.accentColor} />
              <div className="rounded-2xl border border-gray-100 px-6 bg-white shadow-sm">
                {plan.faqs.map((faq, i) => (
                  <FAQItem key={i} q={faq.q} a={faq.a} accent={plan.accentColor} />
                ))}
              </div>
            </motion.section>

          </div>

          {/* ── Sticky sidebar (desktop only) ── */}
          <div className="hidden lg:block">
            <div className="sticky top-36">
              <SidebarCard plan={plan} onCallback={() => setModal(true)} />
            </div>
          </div>

        </div>
      </main>

      {/* ══════════════════════════════════════════════════
          5. NOT SURE YET — full-width CTA banner
      ══════════════════════════════════════════════════ */}
      <div className="bg-white py-16">
      <motion.section
        initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="relative overflow-hidden mx-6 lg:mx-auto lg:max-w-6xl rounded-3xl"
        style={{
          background: `linear-gradient(135deg, ${plan.accentColor}0e 0%, ${plan.accentColor}06 100%)`,
          border: `1.5px solid ${plan.accentColor}20`,
        }}>
        <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-20"
          style={{ background: plan.accentColor }} />
        <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full blur-2xl pointer-events-none opacity-10"
          style={{ background: plan.accentColor }} />
        <div className="relative px-8 py-12 sm:px-14 sm:py-14 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: `${plan.accentColor}18` }}>
                <CalendarCheck className="w-5 h-5" style={{ color: plan.accentColor }} />
              </div>
              <h3 className="text-xl font-bold" style={{ color: NAVY }}>Not sure yet?</h3>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-md">
              Have questions about which plan suits you? Talk to one of our Chartered
              Accountants — free of charge, zero commitment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <button onClick={() => setModal(true)}
              className="shimmer w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-bold text-white transition-all hover:brightness-110"
              style={{
                background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`,
                boxShadow:  `0 6px 24px rgba(${plan.glowRGB},0.30)`,
              }}>
              <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> Book a Free Call</span>
            </button>
            <button onClick={() => router.push("/itr")}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl text-sm font-semibold border transition-all hover:shadow-sm"
              style={{ color: plan.accentColor, borderColor: `${plan.accentColor}35`, background: "white" }}>
              Compare All Plans
            </button>
          </div>
        </div>
      </motion.section>
      </div>

      {/* ══════════════════════════════════════════════════
          6. MOBILE STICKY BOTTOM BAR
          Visible only on &lt; lg. Shows price + two actions.
      ══════════════════════════════════════════════════ */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/96 backdrop-blur border-t border-gray-100 shadow-2xl px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <div className="text-xs text-gray-400 line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</div>
            <div className="text-xl font-extrabold leading-tight" style={{ color: NAVY }}>
              ₹{plan.price.toLocaleString("en-IN")}
            </div>
          </div>
          <button onClick={() => setModal(true)}
            className="w-12 h-12 rounded-2xl border flex items-center justify-center flex-shrink-0 transition-all hover:shadow-sm"
            style={{ borderColor: `${plan.accentColor}30`, background: `${plan.accentColor}08`, color: plan.accentColor }}>
            <Phone className="w-4 h-4" />
          </button>
          <button onClick={() => router.push(`/payment?plan=${plan.id}`)}
            className="shimmer flex-1 py-3.5 rounded-2xl text-sm font-bold text-white transition-all hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`,
              boxShadow:  `0 4px 16px rgba(${plan.glowRGB},0.35)`,
            }}>
            Buy Now
          </button>
        </div>
      </div>
      <div className="lg:hidden h-20" />

      {/* Callback modal */}
      <AnimatePresence>
        {modal && <CallbackModal plan={plan} onClose={() => setModal(false)} />}
      </AnimatePresence>
    </div>
  );
}