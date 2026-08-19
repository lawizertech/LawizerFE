"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check,
  ArrowLeft,
  Star,
  Upload,
  Copy,
  Phone,
  X,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Clock,
  Users,
  BadgeCheck,
  Zap,
  FileText,
  CalendarCheck,
} from "lucide-react";
import { PlanConfig } from "./PlanPageTemplate";

export const OFFER_CODE = "OFFERITR";

export const tierStyles: Record<string, any> = {
  silver: {
    from: "#94a3b8",
    to: "#475569",
    text: "text-slate-700",
    bgSoft: "bg-slate-100",
    borderLight: "border-slate-200",
    bg: "bg-slate-50",
    shadow: "rgba(71,85,105,0.4)",
  },
  gold: {
    from: "#fbbf24",
    to: "#d97706",
    text: "text-amber-700",
    bgSoft: "bg-amber-100",
    borderLight: "border-amber-200",
    bg: "bg-amber-50",
    shadow: "rgba(217,119,6,0.4)",
  },
  diamond: {
    from: "#8b5cf6",
    to: "#4c1d95",
    text: "text-violet-700",
    bgSoft: "bg-violet-100",
    borderLight: "border-violet-200",
    bg: "bg-violet-50",
    shadow: "rgba(76,29,149,0.4)",
  },
  bronze: {
    from: "#f87171",
    to: "#b91c1c",
    text: "text-red-700",
    bgSoft: "bg-red-100",
    borderLight: "border-red-200",
    bg: "bg-red-50",
    shadow: "rgba(185,28,28,0.4)",
  },
};

export function SectionHeading({ title, accent }: { title: string; accent: string }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl font-bold mb-2 text-brand-navy">{title}</h2>
      <div className="h-[3px] w-10 rounded-full" style={{ background: accent }} />
    </div>
  );
}

export function FAQItem({ q, a, plan }: { q: string; a: string; plan: PlanConfig }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="text-sm font-semibold text-gray-800 leading-snug">{q}</span>
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors transition-colors duration-300 ${open ? tierStyles[plan.id].bgSoft : "bg-transparent"}`}
        >
          {open ? (
            <ChevronUp className={`w-3.5 h-3.5 ${tierStyles[plan.id].text}`} />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-10">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function OfferChipGlass() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(OFFER_CODE);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border transition-all hover:opacity-90 bg-white/10 border-white/30"
    >
      <span className="text-white/60 text-[11px]">Code</span>
      <span className="text-white font-bold text-[11px] tracking-wide">{OFFER_CODE}</span>
      {copied ? (
        <span className="text-[10px] font-bold text-white/80">✓ Copied</span>
      ) : (
        <Copy className="w-3 h-3 text-white/50" />
      )}
    </button>
  );
}

export function OfferChipLight({ plan }: { plan: PlanConfig }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(OFFER_CODE);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all hover:opacity-80 ${tierStyles[plan.id].bgSoft} ${tierStyles[plan.id].borderLight} ${tierStyles[plan.id].text}`}
    >
      <Copy className="w-2.5 h-2.5" />
      <span className="text-[10px] font-bold">{copied ? "Copied!" : OFFER_CODE}</span>
    </button>
  );
}

export function SidebarCard({ plan, onCallback, onBuyNow, paymentState, razorpayReady }: { plan: PlanConfig; onCallback: () => void; onBuyNow: () => void; paymentState: string; razorpayReady: boolean }) {
  const router = useRouter();
  const discount = Math.round((1 - plan.price / plan.originalPrice) * 100);

  return (
    <div
      className="rounded-3xl overflow-hidden bg-white"
      style={{
        border: `1.5px solid ${plan.accentColor}25`,
        boxShadow: `0 20px 60px rgba(${plan.glowRGB},0.14), 0 4px 20px rgba(0,0,0,0.05)`,
      }}
    >
      <div className={`h-1 ${tierStyles[plan.id].bgSoft} bg-gradient-to-r`} />

      <div className={`px-6 pt-6 pb-5 ${tierStyles[plan.id].bgSoft}`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`text-[11px] font-bold text-white px-2.5 py-1 rounded-lg ${tierStyles[plan.id].text.replace("text-", "bg-")} text-white`}
            >
              {discount}% OFF
            </span>
            <span className="text-gray-400 text-xs line-through">₹{plan.originalPrice.toLocaleString("en-IN")}</span>
          </div>
          <OfferChipLight plan={plan} />
        </div>
        <div className="text-[2.4rem] font-extrabold tracking-tight leading-none text-brand-navy">
          ₹{plan.price.toLocaleString("en-IN")}
        </div>
        <p className="text-gray-400 text-xs mt-1.5">All inclusive · No hidden charges</p>
      </div>

      <div className="px-6 py-5 space-y-3">
        <button
          onClick={onBuyNow}
          disabled={paymentState !== "idle" || !razorpayReady}
          className="relative w-full py-4 rounded-2xl text-sm font-bold text-white overflow-hidden group transition-all hover:brightness-110 disabled:opacity-70 flex items-center justify-center gap-2"
          style={{
            background: `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}bb)`,
            boxShadow: `0 6px 24px rgba(${plan.glowRGB},0.35)`,
          }}
        >
          {paymentState === "creating" && <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Preparing...</>}
          {paymentState === "paying" && <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Awaiting Payment...</>}
          {paymentState === "verifying" && <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Verifying...</>}
          {paymentState === "success" && <><Check className="w-4 h-4" /> Success!</>}
          {paymentState === "idle" && (
            <>
              <span className="relative z-10">Buy Now</span>
              <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </>
          )}
        </button>

        <button
          onClick={onCallback}
          className={`w-full py-3 rounded-2xl text-sm font-semibold flex items-center justify-center gap-2 transition-all border hover:shadow-sm ${tierStyles[plan.id].text} ${tierStyles[plan.id].borderLight} ${tierStyles[plan.id].bgSoft}`}
        >
          <Phone className="w-3.5 h-3.5" /> Request a Callback
        </button>

        <div className="pt-4 border-t border-gray-100 space-y-2.5">
          {[
            { icon: Clock, text: `${plan.estimateDays}-day turnaround` },
            { icon: BadgeCheck, text: "Expert CA-assisted filing" },
            { icon: ShieldCheck, text: "100% secure & confidential" },
            { icon: FileText, text: "ITR acknowledgement included" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 ${tierStyles[plan.id].bgSoft}`}
              >
                <Icon className={`w-3.5 h-3.5 ${tierStyles[plan.id].text}`} />
              </div>
              <span className="text-xs text-gray-500">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
