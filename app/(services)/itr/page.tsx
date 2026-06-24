"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCallback } from "@/context/callbackContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Phone, X, ArrowRight, Shield, Lock, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   THEME CONSTANTS
   Match the Lawizer site palette: red primary, navy text
───────────────────────────────────────────────────────── */
const RED       = "#c0392b";
const RED_LIGHT = "#e74c3c";
const NAVY      = "#0e172b";

/* ─────────────────────────────────────────────────────────
   PLAN DATA
   To add / edit a plan, update this array only.
   - accentColor : the tier's signature color
   - glowColor   : same color as RGB string for box-shadow rgba()
   - popular     : shows the "Most Popular" pill + red CTA
   - excludedSources : only Bronze has this; set null for others
───────────────────────────────────────────────────────── */
const plans = [
  {
    id:            "bronze",
    name:          "Bronze",
    subtitle:      "Tax Filing + Computation Explanation",
    price:         2499,
    originalPrice: 6873,
    tier:          "Essential",
    accentColor:   "#c17f3a",
    glowColor:     "193,127,58",
    emoji:         "🥉",
    features: [
      "Direct Interaction with Expert",
      "Tax calculation walkthrough",
      "Filing done in 24 hours",
    ],
    incomeSources: [
      "Salary income < ₹50L",
      "Interest Income (Savings, Term deposits)",
    ],
    excludedSources: "Capital Gains, FnO, Business Income, Crypto",
  },
  {
    id:            "silver",
    name:          "Silver",
    subtitle:      "Tax Filing with Interactive Video Call",
    price:         4499,
    originalPrice: 12498,
    tier:          "Most Popular",
    accentColor:   RED,
    glowColor:     "192,57,43",
    emoji:         "🥈",
    popular:       true,           // ← controls red border, pill, red Buy Now
    features: [
      "Video Call with Expert",
      "Tax calculation walkthrough",
      "Graphical Tax Reports",
    ],
    incomeSources: [
      "Salary & Interest Income – any range",
      "Capital Gains (Stocks, MF, FnO, Intraday, Crypto, Property)",
      "Freelance, Online gaming",
    ],
    excludedSources: null,
  },
  {
    id:            "gold",
    name:          "Gold",
    subtitle:      "Tax Filing + Tax Planning for the Next Year",
    price:         6499,
    originalPrice: 17498,
    tier:          "Advanced",
    accentColor:   "#b8860b",
    glowColor:     "184,134,11",
    emoji:         "🥇",
    features: [
      "Tax filing in direct video call",
      "Tax calculation walkthrough",
      "Next year tax planning in video call",
    ],
    incomeSources: [
      "All income sources covered",
      "NRI, ESOPs, RSUs, Foreign income",
      "Business income included",
    ],
    excludedSources: null,
  },
  {
    id:            "diamond",
    name:          "Diamond",
    subtitle:      "Tax Filing + Advisory Assistance All Year-round",
    price:         34999,
    originalPrice: 99998,
    tier:          "Elite",
    accentColor:   "#3d6ab0",
    glowColor:     "61,106,176",
    emoji:         "💎",
    features: [
      "Unlimited video calls",
      "Tax calculation walkthrough",
      "Monthly advisory video calls",
      "Dedicated priority support",
    ],
    incomeSources: [
      "All income sources covered",
      "NRI, ESOPs, RSUs, Foreign income",
      "Complex business structures",
    ],
    excludedSources: null,
  },
];

/* ─────────────────────────────────────────────────────────
   OFFER CODE
   Displayed on every card with a copy-to-clipboard button
───────────────────────────────────────────────────────── */
const OFFER_CODE = "OFFERITR";

/* ─────────────────────────────────────────────────────────
   COPY CODE BUTTON
   Copies OFFER_CODE to clipboard; shows "Copied!" for 2s
───────────────────────────────────────────────────────── */
function CopyCode({ code, accent }: { code: string; accent: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="transition-all hover:opacity-100 opacity-40"
    >
      {copied
        ? <span className="text-[10px] font-semibold" style={{ color: accent }}>Copied!</span>
        : <Copy className="w-3 h-3 text-gray-400" />}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
   ITR PLANS SECTION
   Drop this anywhere on the ITR services page.
   Routes:
     Buy Now   → /payment?plan={id}
     Know more → /itr/itr-plans/{id}  (matches folder structure)
───────────────────────────────────────────────────────── */
export default function ITRPlans() {
  const { openCallback } = useCallback();
  const router = useRouter();

  return (
    <section className="relative py-28 overflow-hidden" style={{ background: "#f8f9fb" }}>

      {/* ── Global styles + card animations ─────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');
        .itr-root { font-family: 'Outfit', sans-serif; }

        /* Card lift + scale on hover */
        .plan-card {
          transition: transform 0.32s cubic-bezier(0.34, 1.3, 0.64, 1), box-shadow 0.32s ease;
        }
        .plan-card:hover { transform: translateY(-12px) scale(1.01); }

        /* Buy Now shimmer sweep on hover */
        .buy-btn { position: relative; overflow: hidden; transition: all 0.25s ease; }
        .buy-btn::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s ease;
        }
        .buy-btn:hover::after { transform: translateX(100%); }
        .buy-btn:hover { filter: brightness(1.1); }
      `}</style>

      {/* ── Subtle top red hairline ──────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${RED}60, transparent)` }}
      />

      {/* ── Ambient red glow blob (top-centre background) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-64 opacity-[0.06] blur-3xl rounded-full"
          style={{ background: RED }}
        />
      </div>

      <div className="itr-root max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* ── Section header ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Pill label */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6 text-xs font-semibold tracking-widest uppercase"
            style={{ color: RED, borderColor: `${RED}30`, background: `${RED}08` }}
          >
            <Sparkles className="w-3 h-3" /> ITR Filing Plans
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-5 leading-tight" style={{ color: NAVY }}>
            Transparent Pricing.<br />
            <span style={{ color: RED }}>Expert-Assisted</span> ITR Filing.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-base leading-relaxed">
            Every plan includes a dedicated Chartered Accountant.
            Choose based on your income complexity.
          </p>
        </motion.div>

        {/* ── Plan cards grid ──────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.09 }}
              className="plan-card relative flex flex-col rounded-[28px] overflow-visible bg-white"
              style={{
                /* Popular (Silver): red ring + stronger dual-layer glow
                   Others: faint grey ring + softer tier-colored glow      */
                boxShadow: plan.popular
                  ? `0 0 0 2px ${plan.accentColor}, 0 16px 48px rgba(${plan.glowColor},0.30), 0 32px 80px rgba(${plan.glowColor},0.18), 0 4px 12px rgba(0,0,0,0.06)`
                  : `0 0 0 1.5px rgba(0,0,0,0.06), 0 12px 40px rgba(${plan.glowColor},0.18), 0 28px 64px rgba(${plan.glowColor},0.10), 0 2px 8px rgba(0,0,0,0.04)`,
              }}
            >

              {/* ── "Most Popular" floating pill — Silver only ── */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className="px-4 py-1.5 rounded-full text-[11px] font-bold text-white shadow-lg whitespace-nowrap"
                    style={{
                      background: `linear-gradient(135deg, ${RED}, ${RED_LIGHT})`,
                      boxShadow: `0 4px 16px rgba(192,57,43,0.4)`,
                    }}
                  >
                    ✦ Most Popular
                  </div>
                </div>
              )}

              {/* ── Card header: tinted bg, tier label, name, price ── */}
              <div
                className="relative px-7 pt-8 pb-7 rounded-t-[28px] overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${plan.accentColor}12, ${plan.accentColor}05)` }}
              >
                {/* Decorative corner glow circle */}
                <div
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10"
                  style={{ background: plan.accentColor }}
                />

                {/* Tier label + plan name + subtitle + emoji badge */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span
                      className="text-[10px] font-bold tracking-[0.18em] uppercase block mb-1"
                      style={{ color: plan.accentColor }}
                    >
                      {plan.tier}
                    </span>
                    <h3 className="text-2xl font-bold" style={{ color: NAVY }}>{plan.name}</h3>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed max-w-[150px]">{plan.subtitle}</p>
                  </div>

                  {/* Emoji on a white raised tile with tier-colored glow */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0"
                    style={{
                      background: "white",
                      border: `1.5px solid ${plan.accentColor}25`,
                      boxShadow: `0 4px 12px rgba(${plan.glowColor},0.2)`,
                    }}
                  >
                    {plan.emoji}
                  </div>
                </div>

                {/* Original price (strikethrough) + current price + 60% OFF badge */}
                <div className="mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-xs">Just at</span>
                    <span className="text-gray-400 text-xs line-through">
                      ₹{plan.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                      style={{ background: plan.accentColor }}
                    >
                      60% OFF
                    </span>
                  </div>
                  <div className="text-4xl font-extrabold mt-1 tracking-tight" style={{ color: NAVY }}>
                    ₹{plan.price.toLocaleString("en-IN")}
                  </div>
                </div>

                {/* Offer code chip with one-click copy */}
                <div
                  className="flex items-center gap-2 mt-3 px-3 py-2 rounded-xl w-fit"
                  style={{ background: "rgba(255,255,255,0.8)", border: `1px dashed ${plan.accentColor}40` }}
                >
                  <span className="text-gray-500 text-[11px]">Code:</span>
                  <span className="text-[11px] font-bold" style={{ color: NAVY }}>{OFFER_CODE}</span>
                  <CopyCode code={OFFER_CODE} accent={plan.accentColor} />
                </div>
              </div>

              {/* ── Gradient divider (header → body) ─────────── */}
              <div
                className="h-px mx-7"
                style={{ background: `linear-gradient(90deg, transparent, ${plan.accentColor}30, transparent)` }}
              />

              {/* ── Card body ────────────────────────────────── */}
              <div className="px-7 py-6 flex flex-col flex-1">

                {/* Features checklist */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${plan.accentColor}18` }}
                      >
                        <Check className="w-3 h-3" style={{ color: plan.accentColor }} />
                      </div>
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Income sources — tinted box per tier color */}
                <div
                  className="rounded-2xl px-5 py-4 mb-6 flex-1"
                  style={{ background: `${plan.accentColor}07`, border: `1px solid ${plan.accentColor}20` }}
                >
                  <p
                    className="text-[10px] font-bold tracking-[0.15em] uppercase mb-3"
                    style={{ color: plan.accentColor }}
                  >
                    For Income Sources
                  </p>
                  <ul className="space-y-2">
                    {plan.incomeSources.map((src, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: `${plan.accentColor}80` }}
                        />
                        <span className="text-gray-500 text-xs leading-relaxed">{src}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Excluded sources row — only rendered for Bronze */}
                  {plan.excludedSources && (
                    <div className="mt-3 pt-3 border-t border-gray-100">
                      <span className="text-[10px] font-semibold text-gray-400">Excluded: </span>
                      <span className="text-[10px] text-gray-400">{plan.excludedSources}</span>
                    </div>
                  )}
                </div>

                {/* ── CTAs ─────────────────────────────────────── */}
                <div className="flex flex-col gap-2 mt-auto">

                  {/* Buy Now → /payment?plan={id} */}
                  <button
                    onClick={() => router.push("/payment?plan=" + plan.id)}
                    className="buy-btn w-full py-3.5 rounded-2xl text-sm font-bold text-white"
                    style={{
                      /* Silver (popular): full red gradient
                         Others: tier accent gradient             */
                      background: plan.popular
                        ? `linear-gradient(135deg, ${RED} 0%, ${RED_LIGHT} 100%)`
                        : `linear-gradient(135deg, ${plan.accentColor} 0%, ${plan.accentColor}cc 100%)`,
                      boxShadow: `0 4px 20px rgba(${plan.glowColor}, 0.35)`,
                    }}
                  >
                    Buy Now
                  </button>

                  {/* Know more → /itr/itr-plans/{id}
                      Navigates to the individual plan detail page
                      (app/itr/itr-plans/{bronze|silver|gold|diamond}/page.tsx) */}
                  <button
                    onClick={() => router.push("/itr/itr-plans/" + plan.id)}
                    className="w-full py-2.5 text-center text-sm font-medium flex items-center justify-center gap-1.5 group opacity-50 hover:opacity-80 transition-opacity"
                    style={{ color: plan.accentColor }}
                  >
                    Know more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom trust + callback bar ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4" style={{ color: RED }} />
            Secure payments
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Lock className="w-4 h-4" style={{ color: RED }} />
            100% confidential
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200" />

          {/* Opens RequestCallPopup modal */}
          <button
            onClick={() => openCallback("Income Tax & GST")}
            className="flex items-center gap-2 text-sm font-semibold group transition-all"
            style={{ color: NAVY }}
          >
            <Phone className="w-4 h-4" style={{ color: RED }} />
            Not sure? Talk to a tax expert — free
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: RED }} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
