"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCallback } from "@/context/callbackContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Phone, X, ArrowRight, Shield, Lock, Sparkles, Loader2 } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { useRazorpay } from "@/hooks/useRazorpay";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { toast } from "sonner";

/* ─────────────────────────────────────────────────────────
 THEME CONSTANTS
 Match the Lawizer site palette: red primary, navy text
───────────────────────────────────────────────────────── */

/* ─────────────────────────────────────────────────────────
 PLAN DATA
 To add / edit a plan, update this array only.
 - accentColor : the tier's signature color
 - glowColor : same color as RGB string for box-shadow rgba()
 - popular : shows the "Most Popular" pill + red CTA
 - excludedSources : only Bronze has this; set null for others
───────────────────────────────────────────────────────── */

const tierStyles: Record<string, any> = {
  bronze: {
    text: "text-tier-bronze",
    bg: "bg-tier-bronze",
    bgLight: "bg-tier-bronze/10",
    bgLighter: "bg-tier-bronze/5",
    border: "border-tier-bronze/20",
    glow: "shadow-tier-bronze/20",
    gradientHeader: "bg-gradient-to-br from-tier-bronze/10 to-tier-bronze/5",
    gradientButton: "bg-gradient-to-br from-tier-bronze to-tier-bronze/80",
    boxShadowHover: "shadow-[0_4px_20px_rgba(193,127,58,0.35)]",
    boxShadowCard:
      "shadow-[0_0_0_1.5px_rgba(0,0,0,0.06),0_12px_40px_rgba(193,127,58,0.18),0_28px_64px_rgba(193,127,58,0.10),0_2px_8px_rgba(0,0,0,0.04)]",
    pillShadow: "",
    pillBg: "",
  },
  silver: {
    text: "text-tier-silver",
    bg: "bg-tier-silver",
    bgLight: "bg-tier-silver/10",
    bgLighter: "bg-tier-silver/5",
    border: "border-tier-silver/20",
    glow: "shadow-tier-silver/20",
    gradientHeader: "bg-gradient-to-br from-tier-silver/10 to-tier-silver/5",
    gradientButton: "bg-gradient-to-br from-brand-red to-brand-red-light",
    boxShadowHover: "shadow-[0_4px_20px_rgba(192,57,43,0.35)]",
    boxShadowCard:
      "shadow-[0_0_0_2px_var(--color-tier-silver),0_16px_48px_rgba(192,57,43,0.30),0_32px_80px_rgba(192,57,43,0.18),0_4px_12px_rgba(0,0,0,0.06)]",
    pillShadow: "shadow-[0_4px_16px_rgba(192,57,43,0.4)]",
    pillBg: "bg-gradient-to-br from-brand-red to-brand-red-light",
  },
  gold: {
    text: "text-tier-gold",
    bg: "bg-tier-gold",
    bgLight: "bg-tier-gold/10",
    bgLighter: "bg-tier-gold/5",
    border: "border-tier-gold/20",
    glow: "shadow-tier-gold/20",
    gradientHeader: "bg-gradient-to-br from-tier-gold/10 to-tier-gold/5",
    gradientButton: "bg-gradient-to-br from-tier-gold to-tier-gold/80",
    boxShadowHover: "shadow-[0_4px_20px_rgba(184,134,11,0.35)]",
    boxShadowCard:
      "shadow-[0_0_0_1.5px_rgba(0,0,0,0.06),0_12px_40px_rgba(184,134,11,0.18),0_28px_64px_rgba(184,134,11,0.10),0_2px_8px_rgba(0,0,0,0.04)]",
    pillShadow: "",
    pillBg: "",
  },
  diamond: {
    text: "text-tier-diamond",
    bg: "bg-tier-diamond",
    bgLight: "bg-tier-diamond/10",
    bgLighter: "bg-tier-diamond/5",
    border: "border-tier-diamond/20",
    glow: "shadow-tier-diamond/20",
    gradientHeader: "bg-gradient-to-br from-tier-diamond/10 to-tier-diamond/5",
    gradientButton: "bg-gradient-to-br from-tier-diamond to-tier-diamond/80",
    boxShadowHover: "shadow-[0_4px_20px_rgba(61,106,176,0.35)]",
    boxShadowCard:
      "shadow-[0_0_0_1.5px_rgba(0,0,0,0.06),0_12px_40px_rgba(61,106,176,0.18),0_28px_64px_rgba(61,106,176,0.10),0_2px_8px_rgba(0,0,0,0.04)]",
    pillShadow: "",
    pillBg: "",
  },
};

const plans = [
  {
    id: "bronze",
    name: "Bronze",
    subtitle: "Tax Filing + Computation Explanation",
    price: 2499,
    originalPrice: 6873,
    tier: "Essential",
    emoji: "🥉",
    features: ["Direct Interaction with Expert", "Tax calculation walkthrough", "Filing done in 24 hours"],
    incomeSources: ["Salary income < ₹50L", "Interest Income (Savings, Term deposits)"],
    excludedSources: "Capital Gains, FnO, Business Income, Crypto",
  },
  {
    id: "silver",
    name: "Silver",
    subtitle: "Tax Filing with Interactive Video Call",
    price: 4499,
    originalPrice: 12498,
    tier: "Most Popular",
    emoji: "🥈",
    popular: true, // ← controls red border, pill, red Buy Now
    features: ["Video Call with Expert", "Tax calculation walkthrough", "Graphical Tax Reports"],
    incomeSources: [
      "Salary & Interest Income – any range",
      "Capital Gains (Stocks, MF, FnO, Intraday, Crypto, Property)",
      "Freelance, Online gaming",
    ],
    excludedSources: null,
  },
  {
    id: "gold",
    name: "Gold",
    subtitle: "Tax Filing + Tax Planning for the Next Year",
    price: 6499,
    originalPrice: 17498,
    tier: "Advanced",
    emoji: "🥇",
    features: [
      "Tax filing in direct video call",
      "Tax calculation walkthrough",
      "Next year tax planning in video call",
    ],
    incomeSources: ["All income sources covered", "NRI, ESOPs, RSUs, Foreign income", "Business income included"],
    excludedSources: null,
  },
  {
    id: "diamond",
    name: "Diamond",
    subtitle: "Tax Filing + Advisory Assistance All Year-round",
    price: 34999,
    originalPrice: 99998,
    tier: "Elite",
    emoji: "💎",
    features: [
      "Unlimited video calls",
      "Tax calculation walkthrough",
      "Monthly advisory video calls",
      "Dedicated priority support",
    ],
    incomeSources: ["All income sources covered", "NRI, ESOPs, RSUs, Foreign income", "Complex business structures"],
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
function CopyCode({ code, accentClass }: { code: string; accentClass: string }) {
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
      {copied ? (
        <span className={`text-[10px] font-semibold ${accentClass}`}>Copied!</span>
      ) : (
        <Copy className="w-3 h-3 text-gray-400" />
      )}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────
 ITR PLANS SECTION
 Drop this anywhere on the ITR services page.
 Routes:
 Buy Now → /payment?plan={id}
 Know more → /itr/itr-plans/{id} (matches folder structure)
───────────────────────────────────────────────────────── */
export default function ITRPlans() {
  const { openCallback } = useCallback();
  const router = useRouter();
  
  const { user } = useAuth();
  const { isLoaded: razorpayReady, initializePayment } = useRazorpay();
  const [activePlanId, setActivePlanId] = useState<string | null>(null);
  const [paymentState, setPaymentState] = useState<"idle" | "creating" | "paying" | "verifying" | "success">("idle");

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      const pending = sessionStorage.getItem("pendingAutoBuy");
      if (pending) {
        const plan = plans.find(p => p.id === pending);
        if (plan) {
          sessionStorage.removeItem("pendingAutoBuy");
          handleStartProcess(plan);
        }
      }
    }
  }, [user]);

  const handleStartProcess = async (plan: typeof plans[0]) => {
    if (!user) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("pendingAutoBuy", plan.id);
        window.dispatchEvent(new CustomEvent("openSignInModal"));
      }
      return;
    }

    try {
      setActivePlanId(plan.id);
      setPaymentState("creating");
      const token = getAccessToken();

      const orderRes = await fetch("/api/user/start-process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          serviceCode: plan.id,
          clientDetails: {
            fullName: user.name || "Client",
            email: user.email || "client@lawizer.com",
            phone: (user as any)?.phone || "9999999999",
          },
          urgency: "NORMAL",
        }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to create order");
      }

      const orderData = await orderRes.json();
      if (!orderData.success) {
        throw new Error(orderData.message || "Failed to create order");
      }

      const orderObj = orderData.razorpayOrder || orderData.order;
      const razorpayKey = orderData.keyId || orderObj?.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!orderObj || !orderObj.amount || !orderObj.id) {
        throw new Error("Invalid order data received from payment server");
      }

      setPaymentState("paying");
      await new Promise<void>((resolve, reject) => {
        const options = {
          key: razorpayKey,
          amount: orderObj.amount,
          currency: orderObj.currency || "INR",
          name: "Lawizer",
          description: plan.name + " Plan",
          order_id: orderObj.id,
          prefill: {
            name: user.name || "",
            email: user.email || "",
            contact: (user as any)?.phone || "",
          },
          theme: { color: "#c92c41" },
          modal: {
            ondismiss: function () {
              setPaymentState("idle");
              setActivePlanId(null);
              reject(new Error("Payment cancelled by user"));
            }
          },
          handler: async function (response: any) {
            try {
              setPaymentState("verifying");
              const verifyRes = await fetch("/api/payments/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success) throw new Error(verifyData.message || "Payment verification failed");

              setPaymentState("success");
              toast.success("Payment successful! Our team will contact you shortly.");
              window.dispatchEvent(new CustomEvent("triggerConfetti", { detail: { amount: plan.price } }));
              router.push("/user/dashboard?tab=services");
              resolve();
            } catch (verifyErr: any) {
              setPaymentState("idle");
              setActivePlanId(null);
              reject(verifyErr);
            }
          },
        };
        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", (response: any) => {
          setPaymentState("idle");
          setActivePlanId(null);
          reject(new Error(response.error.description));
        });
        rzp.open();
      });
    } catch (err: any) {
      console.error("[ITRPlans] Payment error:", err);
      const errorMsg = err.message || "Failed to process payment";
      setPaymentState("idle");
      setActivePlanId(null);
      if (errorMsg !== "Payment cancelled by user") toast.error(errorMsg);
    }
  };

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden bg-brand-light-bg">
      {/* ── Subtle top red hairline ──────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

      {/* ── Ambient red glow blob (top-centre background) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-64 opacity-[0.06] blur-3xl rounded-full bg-brand-red" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section header ───────────────────────────────── */}
        {/* Section header — animate on mount, no scroll trigger so it's always visible */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Pill label */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border mb-6 text-xs font-semibold tracking-widest uppercase text-brand-red border-brand-red/30 bg-brand-red/10">
            <Sparkles className="w-3 h-3" />
            Expert-Assisted ITR Filing
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 leading-tight text-brand-navy">
            Transparent Pricing.
            <br />
            <span className="text-brand-red">Expert-Assisted</span> ITR Filing.
          </h2>
          <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Every plan includes a dedicated Chartered Accountant. Choose based on your income complexity.
          </p>
        </motion.div>

        {/* ── Plan cards grid ──────────────────────────────── */}
        {/* 
          Mobile (< sm):  1 column — full width cards 
          Tablet (sm–lg): 2 columns — comfortable side by side
          Desktop (xl+):  4 columns — all plans in one row
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              /* overflow-visible lets the "Most Popular" pill float above the card top */
              className={`relative flex flex-col rounded-[28px] overflow-visible bg-white transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-[1.01] ${tierStyles[plan.id].boxShadowCard}`}
            >
              {/* ── "Most Popular" floating pill — Silver only ── */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div
                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold text-white whitespace-nowrap ${tierStyles[plan.id].pillBg} ${tierStyles[plan.id].pillShadow}`}
                  >
                    ✦ Most Popular
                  </div>
                </div>
              )}

              {/* ── Card header: tinted bg, tier label, name, price ── */}
              <div
                className={`relative px-4 pt-6 pb-4 rounded-t-[28px] overflow-hidden ${tierStyles[plan.id].gradientHeader}`}
              >
                {/* Decorative corner glow circle */}
                <div
                  className={`absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 ${tierStyles[plan.id].bg}`}
                />

                {/* Tier label + plan name + subtitle + emoji badge */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1 min-w-0 pr-3">
                    <span
                      className={`text-[10px] font-bold tracking-[0.18em] uppercase block mb-1 ${tierStyles[plan.id].text}`}
                    >
                      {plan.tier}
                    </span>
                    <h3 className="text-2xl font-bold text-brand-navy">{plan.name}</h3>
                    <p className="text-gray-400 text-xs mt-1 leading-relaxed">{plan.subtitle}</p>
                  </div>

                  {/* Emoji on a white raised tile with tier-colored glow */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm flex-shrink-0 bg-white border ${tierStyles[plan.id].border} ${tierStyles[plan.id].glow}`}
                  >
                    {plan.emoji}
                  </div>
                </div>

                {/* Original price (strikethrough) + current price + 60% OFF badge */}
                <div className="mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-gray-400 text-xs">Just at</span>
                    <span className="text-gray-400 text-xs line-through">
                      ₹{plan.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${tierStyles[plan.id].bg}`}
                    >
                      60% OFF
                    </span>
                  </div>
                  <div className="text-4xl font-extrabold mt-1 tracking-tight text-brand-navy">
                    ₹{plan.price.toLocaleString("en-IN")}
                  </div>
                </div>

                {/* Offer code chip with one-click copy */}
                <div
                  className={`flex items-center gap-2 mt-2 px-3 py-1.5 rounded-xl w-fit bg-white/80 border border-dashed ${tierStyles[plan.id].border}`}
                >
                  <span className="text-gray-500 text-[11px]">Code:</span>
                  <span className="text-[11px] font-bold text-brand-navy">{OFFER_CODE}</span>
                  <CopyCode code={OFFER_CODE} accentClass={tierStyles[plan.id].text} />
                </div>
              </div>

              {/* ── Gradient divider (header → body) ─────────── */}
              <div
                className={`h-px mx-5 bg-gradient-to-r from-transparent via-current to-transparent opacity-30 ${tierStyles[plan.id].text}`}
              />

              {/* ── Card body ────────────────────────────────── */}
              <div className="px-4 py-4 flex flex-col flex-1">
                {/* Features checklist */}
                <ul className="space-y-2 mb-4">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tierStyles[plan.id].bgLight}`}
                      >
                        <Check className={`w-3 h-3 ${tierStyles[plan.id].text}`} />
                      </div>
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Income sources — tinted box per tier color */}
                <div
                  className={`rounded-2xl px-4 py-3 mb-4 flex-1 border ${tierStyles[plan.id].bgLighter} ${tierStyles[plan.id].border}`}
                >
                  <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-3 ${tierStyles[plan.id].text}`}>
                    For Income Sources
                  </p>
                  <ul className="space-y-1.5">
                    {plan.incomeSources.map((src, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${tierStyles[plan.id].bg} opacity-80`}
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
                  {/* Buy Now -> Razorpay */}
                  <button
                    onClick={() => handleStartProcess(plan)}
                    disabled={activePlanId === plan.id && paymentState !== "idle" || !razorpayReady}
                    className={`group relative overflow-hidden w-full py-3 rounded-2xl text-sm font-bold text-white transition-all duration-300 hover:brightness-110 disabled:opacity-70 flex items-center justify-center gap-2 ${tierStyles[plan.id].gradientButton} ${tierStyles[plan.id].boxShadowHover}`}
                  >
                    {activePlanId === plan.id && paymentState === "creating" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {activePlanId === plan.id && paymentState === "paying" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {activePlanId === plan.id && paymentState === "verifying" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {activePlanId === plan.id && paymentState === "success" && <Check className="w-4 h-4" />}
                    {(activePlanId !== plan.id || paymentState === "idle") && (
                      <>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-full" />
                        Buy Now
                      </>
                    )}
                  </button>

                  {/* Know more → /itr/itr-plans/{id}
 Navigates to the individual plan detail page
 (app/itr/itr-plans/{bronze|silver|gold|diamond}/page.tsx) */}
                  <button
                    onClick={() => router.push("/itr/itr-plans/" + plan.id)}
                    className={`w-full py-2.5 text-center text-sm font-medium flex items-center justify-center gap-1.5 group opacity-50 hover:opacity-80 transition-opacity ${tierStyles[plan.id].text}`}
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
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
        >
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Shield className="w-4 h-4 text-brand-red flex-shrink-0" />
            Secure payments
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Lock className="w-4 h-4 text-brand-red flex-shrink-0" />
            100% confidential
          </div>
          <div className="hidden sm:block w-px h-4 bg-gray-200" />

          {/* Opens RequestCallPopup modal */}
          <button
            onClick={() => openCallback("Income Tax & GST")}
            className="flex items-center gap-2 text-brand-navy text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
            Not sure? Talk to a tax expert — free
            <ArrowRight className="w-4 h-4 text-brand-red" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
