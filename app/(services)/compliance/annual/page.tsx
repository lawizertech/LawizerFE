"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, ShieldAlert, BarChart3, ChevronRight, CheckCircle2, X, Phone } from "lucide-react";
import { useCallback } from "@/context/callbackContext";

// ─── Types ────────────────────────────────────────────────────────────────────

type EntityKey = "pvt" | "opc" | "llp";

type StatItem = { label: string; value: string };

type RailItem = {
  form: string;
  month: number;
  dueDate: string;
  recurring?: boolean;
};

type RailLane = {
  label: string;
  color: "roc" | "tax" | "gst" | "kyc";
  items: RailItem[];
};

type Plan = {
  name: string;
  tagline: string;
  monthlyPrice: string;
  annualPrice: string;
  annualWas: string;
  included: string[];
  excluded: string[];
  featured?: boolean;
};

type FilingRow = {
  form: string;
  what: string;
  due: string;
  tag: "inc" | "add";
  plan: string;
};

type CompareRow = {
  provider: string;
  scope: string;
  fee: string;
  bookkeeping: string;
  gst: string;
  dedicatedCA: string;
  isUs?: boolean;
};

type PenaltyData = {
  headline: string;
  body: string;
  figure: string;
};

type EntityData = {
  label: string;
  shortLabel: string;
  h1: string;
  sub: string;
  stats: StatItem[];
  rail: RailLane[];
  penalty: PenaltyData;
  plans: Plan[];
  filings: FilingRow[];
  compare: CompareRow[];
};

// ─── Lane color tokens ────────────────────────────────────────────────────────

const LANE = {
  roc: { dot: "bg-indigo-500", pill: "bg-indigo-50 text-indigo-700 border-indigo-200", label: "ROC / MCA" },
  tax: { dot: "bg-green-500",  pill: "bg-green-50  text-green-700  border-green-200",  label: "Income tax" },
  gst: { dot: "bg-amber-500",  pill: "bg-amber-50  text-amber-700  border-amber-200",  label: "GST"        },
  kyc: { dot: "bg-gray-600",   pill: "bg-gray-50   text-gray-700   border-gray-200",   label: "KYC"        },
};

const MONTHS = ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"];
const Q_STARTS = new Set([0,3,6,9]);

// ─── Data ─────────────────────────────────────────────────────────────────────

const DATA: Record<EntityKey, EntityData> = {
  pvt: {
    label: "Private Limited",
    shortLabel: "Pvt Ltd",
    h1: "Every Pvt Ltd filing, on one calendar.",
    sub: "A private limited company has the heaviest compliance load of the three structures — statutory audit from rupee one, four board meetings, an AGM, and two separate ROC returns. Here's the full year, priced.",
    stats: [
      { label: "Governed by",    value: "Companies Act, 2013"     },
      { label: "Annual ROC forms", value: "AOC-4, MGT-7A"           },
      { label: "Audit",          value: "Mandatory, any turnover" },
      { label: "Board meetings", value: "4 per year"              },
    ],
    rail: [
      { label: "ROC & MCA",    color: "roc", items: [{ form:"AOC-4",    month:6, dueDate:"30 Oct" },{ form:"MGT-7A", month:7, dueDate:"29 Nov" }] },
      { label: "Income tax",   color: "tax", items: [{ form:"ITR-6",    month:6, dueDate:"31 Oct" },{ form:"TDS Q1", month:3, dueDate:"31 Jul" },{ form:"TDS Q3", month:9, dueDate:"31 Jan" }] },
      { label: "GST",          color: "gst", items: [{ form:"GSTR-1/3B",month:0, dueDate:"", recurring:true },{ form:"GSTR-9",month:8, dueDate:"31 Dec" }] },
      { label: "Director KYC", color: "kyc", items: [{ form:"DIR-3 KYC",month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "A late annual return is not a small fine.",
      body: "AOC-4 and MGT-7A each attract ₹100 per day with no upper ceiling, running until the day you file. Directors of a company that misses filings for two straight years are disqualified for five years and their DIN is deactivated.",
      figure: "₹100/day",
    },
    plans: [
      {
        name:"Essential", tagline:"Dormant or pre-revenue companies that only need ROC and MCA filings kept clean.",
        monthlyPrice:"₹749/mo", annualPrice:"₹8,999/yr", annualWas:"₹11,999",
        included:["AOC-4 + MGT-7A annual filing","ADT-1 auditor appointment","DIR-3 KYC for 2 directors","Board meeting minutes & statutory registers","Share certificate book (free)"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
      },
      {
        name:"Growth", tagline:"Operating companies with invoices, a bank account and a GST number to keep filed.",
        monthlyPrice:"₹1,499/mo", annualPrice:"₹17,999/yr", annualWas:"₹22,999",
        included:["Everything in Essential","Bookkeeping up to 150 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-6 corporate return","Dedicated CA on WhatsApp"],
        excluded:["TDS returns","Payroll & ESI/PF"],
        featured:true,
      },
      {
        name:"Complete", tagline:"Funded or scaling companies with payroll, TDS and investor reporting obligations.",
        monthlyPrice:"₹2,249/mo", annualPrice:"₹26,999/yr", annualWas:"₹33,999",
        included:["Everything in Growth","Quarterly TDS returns (24Q/26Q)","Payroll, PF and ESI filings","Unlimited transaction bookkeeping","MIS pack every quarter","Priority filing, same-day turnaround"],
        excluded:[],
      },
    ],
    filings: [
      { form:"INC-20A",     what:"Declaration that the company has commenced business. Blocks all activity until filed.", due:"180 days from incorporation",  tag:"inc", plan:"Essential" },
      { form:"AOC-4",       what:"Audited financial statements filed with the ROC.",                                     due:"30 days from AGM",              tag:"inc", plan:"Essential" },
      { form:"MGT-7A",      what:"Annual return for small companies and OPCs.",                                          due:"60 days from AGM",              tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",   what:"Annual identity verification for every director holding a DIN.",                       due:"30 September",                  tag:"inc", plan:"Essential" },
      { form:"ITR-6",       what:"Corporate income tax return.",                                                         due:"31 October (audited)",          tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B", what:"Monthly outward supplies and summary return.",                                         due:"11th and 20th monthly",         tag:"add", plan:"Growth"    },
      { form:"GSTR-9",      what:"Annual GST reconciliation.",                                                           due:"31 December",                   tag:"add", plan:"Growth"    },
      { form:"24Q / 26Q",   what:"Quarterly TDS returns on salary and vendor payments.",                                 due:"31st of month after quarter",   tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",    scope:"ROC + bookkeeping + GST + ITR",              fee:"₹17,999/yr (₹1,499/mo)", bookkeeping:"yes",     gst:"yes",     dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala AMC",     scope:"ROC compliance AMC",                         fee:"₹15,240/yr (₹1,270/mo)", bookkeeping:"no",      gst:"no",      dedicatedCA:"no"  },
      { provider:"Startupwala one-off", scope:"Annual ROC return only",                     fee:"₹3,999 one-time",        bookkeeping:"no",      gst:"no",      dedicatedCA:"no"  },
      { provider:"Vakilsearch",         scope:"Compliance + accounting + GST, entry rate",  fee:"from ₹3,499",            bookkeeping:"partial", gst:"partial", dedicatedCA:"no"  },
    ],
  },

  opc: {
    label: "One Person Company",
    shortLabel: "OPC",
    h1: "OPC compliance, without the Pvt Ltd overhead.",
    sub: "An OPC skips the AGM and, with a single director, skips board meetings too. The ROC filings and the statutory audit stay. Here's what actually applies to you — and what you shouldn't be paying for.",
    stats: [
      { label: "Governed by",    value: "Companies Act, 2013"   },
      { label: "Annual ROC forms", value: "AOC-4, MGT-7A"          },
      { label: "Audit",          value: "Mandatory, any turnover" },
      { label: "AGM",            value: "Not required"             },
    ],
    rail: [
      { label: "ROC & MCA",    color: "roc", items: [{ form:"AOC-4",    month:8, dueDate:"27 Dec" },{ form:"MGT-7A", month:7, dueDate:"28 Nov" }] },
      { label: "Income tax",   color: "tax", items: [{ form:"ITR-6",    month:6, dueDate:"31 Oct" },{ form:"TDS Q1", month:3, dueDate:"31 Jul" }] },
      { label: "GST",          color: "gst", items: [{ form:"GSTR-1/3B",month:0, dueDate:"", recurring:true },{ form:"GSTR-9",month:8, dueDate:"31 Dec" }] },
      { label: "Director KYC", color: "kyc", items: [{ form:"DIR-3 KYC",month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "No AGM does not mean no deadline.",
      body: "An OPC files AOC-4 within 180 days of the financial year ending — 27 December, not 30 October. Miss it and the ₹100 per day additional fee runs uncapped, and the sole director's DIN is at risk after two consecutive defaults.",
      figure: "₹100/day",
    },
    plans: [
      {
        name:"Essential", tagline:"Solo founders with a registered OPC and little or no turnover yet.",
        monthlyPrice:"₹549/mo", annualPrice:"₹6,599/yr", annualWas:"₹8,999",
        included:["AOC-4 + MGT-7A annual filing","ADT-1 auditor appointment","DIR-3 KYC for 1 director","Statutory registers maintained","Share certificate book (free)"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
      },
      {
        name:"Growth", tagline:"Consultants and single-owner businesses that are billing clients and filing GST.",
        monthlyPrice:"₹1,166/mo", annualPrice:"₹13,999/yr", annualWas:"₹17,999",
        included:["Everything in Essential","Bookkeeping up to 100 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-6 corporate return","Dedicated CA on WhatsApp"],
        excluded:["TDS returns","Payroll & ESI/PF"],
        featured:true,
      },
      {
        name:"Complete", tagline:"OPCs approaching the ₹2 crore conversion threshold, with staff on the books.",
        monthlyPrice:"₹1,749/mo", annualPrice:"₹20,999/yr", annualWas:"₹26,999",
        included:["Everything in Growth","Quarterly TDS returns","Payroll, PF and ESI filings","Unlimited transaction bookkeeping","Pvt Ltd conversion advisory","Priority filing, same-day turnaround"],
        excluded:[],
      },
    ],
    filings: [
      { form:"INC-20A",     what:"Declaration of commencement of business.",                                              due:"180 days from incorporation",          tag:"inc", plan:"Essential" },
      { form:"AOC-4",       what:"Financial statements. OPCs file within 180 days of FY end, not from an AGM.",           due:"27 December",                          tag:"inc", plan:"Essential" },
      { form:"MGT-7A",      what:"Abridged annual return for OPCs and small companies.",                                  due:"60 days from FY end deemed AGM",       tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",   what:"Director identity verification.",                                                       due:"30 September",                         tag:"inc", plan:"Essential" },
      { form:"ITR-6",       what:"Corporate income tax return.",                                                          due:"31 October (audited)",                 tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B", what:"Monthly GST returns, if registered.",                                                  due:"11th and 20th monthly",                tag:"add", plan:"Growth"    },
      { form:"GSTR-9",      what:"Annual GST return.",                                                                    due:"31 December",                          tag:"add", plan:"Growth"    },
      { form:"24Q / 26Q",   what:"Quarterly TDS returns.",                                                                due:"31st of month after quarter",          tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",     scope:"ROC + bookkeeping + GST + ITR",  fee:"₹13,999/yr (₹1,166/mo)", bookkeeping:"yes", gst:"yes", dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala OPC AMC",  scope:"OPC ROC compliance AMC",         fee:"₹11,976/yr (₹998/mo)",   bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
      { provider:"Startupwala one-off",  scope:"OPC annual ROC return only",     fee:"₹3,999 one-time",         bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
      { provider:"Vakilsearch",          scope:"Corporate compliance, entry rate",fee:"from ₹999",               bookkeeping:"no",  gst:"no",  dedicatedCA:"no"  },
    ],
  },

  llp: {
    label: "Limited Liability Partnership",
    shortLabel: "LLP",
    h1: "Two forms a year. Both of them uncapped if you're late.",
    sub: "An LLP is the lightest structure to run — no AGM, no board meetings, no audit until you cross ₹40 lakh turnover or ₹25 lakh contribution. But Form 11 and Form 8 carry penalties with no ceiling, so the dates matter more than the volume.",
    stats: [
      { label: "Governed by",    value: "LLP Act, 2008"            },
      { label: "Annual ROC forms", value: "Form 11, Form 8"        },
      { label: "Audit",          value: "Only above ₹40L turnover" },
      { label: "Board meetings", value: "Not required"             },
    ],
    rail: [
      { label: "ROC & MCA",   color: "roc", items: [{ form:"Form 11",    month:1, dueDate:"30 May" },{ form:"Form 8", month:6, dueDate:"30 Oct" }] },
      { label: "Income tax",  color: "tax", items: [{ form:"ITR-5",      month:3, dueDate:"31 Jul" },{ form:"ITR-5 audited", month:6, dueDate:"31 Oct" }] },
      { label: "GST",         color: "gst", items: [{ form:"GSTR-1/3B",  month:0, dueDate:"", recurring:true },{ form:"GSTR-9", month:8, dueDate:"31 Dec" }] },
      { label: "Partner KYC", color: "kyc", items: [{ form:"DIR-3 KYC",  month:5, dueDate:"30 Sep" }] },
    ],
    penalty: {
      headline: "The LLP penalty has no upper limit.",
      body: "Form 11 and Form 8 each carry ₹100 per day of delay with no cap — a return forgotten for a year costs ₹36,500 per form. A missed Form 11 can additionally attract a fine starting at ₹25,000 and running up to ₹5 lakh.",
      figure: "₹5 lakh",
    },
    plans: [
      {
        name:"Essential", tagline:"LLPs below the audit threshold that only need the two annual ROC forms filed.",
        monthlyPrice:"₹499/mo", annualPrice:"₹5,999/yr", annualWas:"₹7,999",
        included:["Form 11 annual return","Form 8 statement of account & solvency","DIR-3 KYC for 2 partners","LLP agreement kept on record","Filing reminders by SMS and email"],
        excluded:["Monthly bookkeeping","GST returns","Income tax return"],
      },
      {
        name:"Growth", tagline:"Trading and services LLPs with regular invoices and a GST registration.",
        monthlyPrice:"₹1,082/mo", annualPrice:"₹12,999/yr", annualWas:"₹16,999",
        included:["Everything in Essential","Bookkeeping up to 150 txns/month","GSTR-1 and GSTR-3B, monthly","GSTR-9 annual return","ITR-5 income tax return","Dedicated CA on WhatsApp"],
        excluded:["Statutory audit","Payroll & TDS"],
        featured:true,
      },
      {
        name:"Complete", tagline:"LLPs past ₹40 lakh turnover, where audit and TDS both kick in.",
        monthlyPrice:"₹1,583/mo", annualPrice:"₹18,999/yr", annualWas:"₹24,999",
        included:["Everything in Growth","Statutory audit coordination","Quarterly TDS returns","Payroll, PF and ESI filings","Partner capital account reconciliation","Priority filing, same-day turnaround"],
        excluded:[],
      },
    ],
    filings: [
      { form:"LLP Agreement", what:"Executed agreement filed after incorporation. ₹100/day penalty if late.",           due:"30 days from incorporation",          tag:"inc", plan:"Essential" },
      { form:"Form 11",       what:"Annual return covering partners and contribution.",                                  due:"30 May",                              tag:"inc", plan:"Essential" },
      { form:"Form 8",        what:"Statement of account and solvency.",                                                 due:"30 October",                          tag:"inc", plan:"Essential" },
      { form:"DIR-3 KYC",     what:"KYC for every designated partner holding a DIN.",                                   due:"30 September",                        tag:"inc", plan:"Essential" },
      { form:"ITR-5",         what:"LLP income tax return.",                                                             due:"31 July, or 31 October if audited",   tag:"add", plan:"Growth"    },
      { form:"GSTR-1 / 3B",   what:"Monthly GST returns, if registered.",                                               due:"11th and 20th monthly",               tag:"add", plan:"Growth"    },
      { form:"GSTR-9",        what:"Annual GST return.",                                                                 due:"31 December",                         tag:"add", plan:"Growth"    },
      { form:"Tax audit",     what:"Applies above ₹40 lakh turnover or ₹25 lakh contribution.",                        due:"30 September",                        tag:"add", plan:"Complete"  },
    ],
    compare: [
      { provider:"Lawizer — Growth",    scope:"ROC + bookkeeping + GST + ITR",     fee:"₹12,999/yr (₹1,082/mo)", bookkeeping:"yes",     gst:"yes", dedicatedCA:"yes", isUs:true },
      { provider:"Startupwala LLP AMC", scope:"LLP ROC compliance AMC",            fee:"₹10,884/yr (₹907/mo)",   bookkeeping:"no",      gst:"no",  dedicatedCA:"no"  },
      { provider:"Vakilsearch",         scope:"LLP annual filing, Form 11 + Form 8",fee:"quote on call",          bookkeeping:"no",      gst:"no",  dedicatedCA:"no"  },
      { provider:"Typical CA firm",     scope:"LLP annual compliance",             fee:"₹10,000–20,000/yr",       bookkeeping:"varies",  gst:"no",  dedicatedCA:"yes" },
    ],
  },
};

const ENTITY_KEYS: EntityKey[] = ["pvt","opc","llp"];

// ─── Rail pill with tooltip ────────────────────────────────────────────────────

function RailPill({ item, color }: { item: RailItem; color: keyof typeof LANE }) {
  const [show, setShow] = useState(false);
  const tip = item.recurring ? "Recurring, every month" : `Due: ${item.dueDate}`;
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
        aria-label={`${item.form} — ${tip}`}
        className={`text-[10.5px] font-bold px-2.5 py-[3px] rounded-full border whitespace-nowrap cursor-pointer transition-all duration-150 hover:-translate-y-px hover:shadow-sm ${LANE[color].pill}`}
      >
        {item.form}
      </button>
      {show && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-30 pointer-events-none">
          <div className="bg-[#0e172b] text-white text-[11px] font-medium px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
            {tip}
          </div>
          <div className="w-2 h-2 bg-[#0e172b] rotate-45 mx-auto -mt-[5px]" />
        </div>
      )}
    </div>
  );
}

// ─── Compare cell ─────────────────────────────────────────────────────────────

function CCell({ v }: { v: string }) {
  if (v === "yes") return <span className="font-semibold text-green-600 text-sm">Included</span>;
  if (v === "no")  return <span className="text-gray-300 text-sm">—</span>;
  return <span className="text-gray-500 text-sm italic">{v}</span>;
}

// ─── Plan tag ─────────────────────────────────────────────────────────────────

function PlanTag({ tag, plan }: { tag:"inc"|"add"; plan:string }) {
  return tag === "inc"
    ? <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-green-50 text-green-700 border border-green-200">✓ {plan}</span>
    : <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10.5px] font-bold bg-amber-50 text-amber-700 border border-amber-200">+ {plan}</span>;
}

// ─── Section header pill (matches site pattern) ───────────────────────────────

function SectionEyebrow({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-[1.6px] uppercase mb-4 border ${color}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
      {children}
    </span>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function AnnualCompliancePage() {
  const [active, setActive] = useState<EntityKey>("pvt");
  const entity = DATA[active];
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const { openCallback } = useCallback();

  return (
    <div className="min-h-screen bg-[#f8f7f4]">

      {/* ══════════════════════════════════════════
          HERO — matches startup page style
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-start sm:justify-center text-center overflow-hidden min-h-[100svh] bg-[#050d1a]"
      >
        {/* Parallax photo layer */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center scale-110"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(5,13,26,0.97)_0%,rgba(10,20,45,0.90)_50%,rgba(140,20,35,0.18)_100%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_52%,rgba(201,44,65,0.13)_0%,transparent_68%)]" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.7)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7)1px,transparent 1px)", backgroundSize:"56px 56px" }}
        />

        {/* Ambient orbs */}
        <motion.div
          animate={{ x:[0,28,0], y:[0,-18,0], opacity:[0.35,0.65,0.35] }}
          transition={{ duration:9, repeat:Infinity, ease:"easeInOut" }}
          className="absolute top-[22%] left-[12%] w-56 h-56 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(201,44,65,0.26)_0%,transparent_70%)] blur-[32px]"
        />
        <motion.div
          animate={{ x:[0,-18,0], y:[0,22,0], opacity:[0.2,0.45,0.2] }}
          transition={{ duration:11, repeat:Infinity, ease:"easeInOut", delay:3.5 }}
          className="absolute bottom-[28%] right-[8%] w-72 h-72 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,transparent_70%)] blur-[44px]"
        />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl px-4 sm:px-8 pt-32 sm:pt-28 pb-20 w-full mt-auto sm:mt-0 mb-auto">

          {/* Eyebrow */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.55 }} className="flex justify-center mb-7">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#c92c41]/15 border border-[#c92c41]/40 text-[#ff8a9a]">
              <Calendar className="w-3 h-3" />
              Annual compliance · FY 2026–27
            </span>
          </motion.div>

          {/* Dynamic H1 */}
          <AnimatePresence mode="wait">
            <motion.h1
              key={`h1-${active}`}
              initial={{ opacity:0, y:24 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-14 }}
              transition={{ duration:0.42 }}
              className="font-black tracking-tight text-white leading-[1.06] mb-5 text-[clamp(1.9rem,4.8vw,3.5rem)] drop-shadow-[0_2px_48px_rgba(0,0,0,0.55)]"
            >
              {entity.h1}
            </motion.h1>
          </AnimatePresence>

          {/* Dynamic sub */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${active}`}
              initial={{ opacity:0, y:14 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              transition={{ duration:0.38, delay:0.06 }}
              className="text-sm sm:text-base max-w-2xl mx-auto mb-9 text-[#d7deeb]/80 leading-[1.75]"
            >
              {entity.sub}
            </motion.p>
          </AnimatePresence>

          <motion.div
            initial={{ opacity:0, y:20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.6, delay:0.25 }}
            className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10"
          >
            {ENTITY_KEYS.map((key) => {
              const on = active === key;
              return (
                <button
                  key={key}
                  id={`tab-${key}`}
                  onClick={() => setActive(key)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 border cursor-pointer ${
                    on
                      ? "bg-gradient-to-br from-[#c92c41] to-[#9d1f31] text-white border-transparent shadow-[0_4px_28px_rgba(201,44,65,0.4)]"
                      : "text-white/70 border-white/20 bg-white/10 hover:bg-white/15 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  {DATA[key].label}
                </button>
              );
            })}
          </motion.div>

          {/* Stat strip */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${active}`}
              initial={{ opacity:0, y:14 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              transition={{ duration:0.32 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {entity.stats.map((s) => (
                <div key={s.label} className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-4 py-3 text-left backdrop-blur-sm">
                  <div className="text-[10px] font-semibold text-white/45 uppercase tracking-[0.12em] mb-1">{s.label}</div>
                  <div className="text-[13px] font-bold text-white leading-snug">{s.value}</div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Trust signals */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.9 }} className="flex flex-wrap items-center justify-center gap-6 mt-12">
            {["Zero penalties guaranteed","Dedicated CA assigned","Same-day response SLA"].map(b => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />
                <span className="text-xs text-[#c3d0e4]/75">{b}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div animate={{ y:[0,8,0] }} transition={{ duration:2.2, repeat:Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
          <span className="text-white text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          BODY CONTENT
      ══════════════════════════════════════════ */}
      <div className="w-full overflow-x-hidden max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

        {/* ── Filing Calendar ──────────────────────────────────────── */}
        <motion.section
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-20"
        >
          <SectionEyebrow color="bg-indigo-50 text-indigo-600 border-indigo-100">Filing calendar</SectionEyebrow>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight mb-2">Your filing year at a glance</h2>
          <p className="text-sm text-gray-500 mb-5 max-w-xl leading-relaxed">
            Financial year runs April to March. Hover any marker for the exact due date.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-5 mb-6">
            {(["roc","tax","gst","kyc"] as const).map(c => (
              <div key={c} className="flex items-center gap-1.5">
                <span className={`w-2.5 h-2.5 rounded-full ${LANE[c].dot}`} />
                <span className="text-xs font-semibold text-gray-600">{LANE[c].label}</span>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`rail-${active}`}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              transition={{ duration:0.3 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto"
            >
              <div className="min-w-[680px] p-5">
                {/* Month headers */}
                <div className="grid mb-1" style={{ gridTemplateColumns:"112px repeat(12,1fr)" }}>
                  <div />
                  {MONTHS.map((m,i) => (
                    <div key={m} className="text-center">
                      {Q_STARTS.has(i) && <div className="text-[7.5px] font-black uppercase tracking-[0.15em] text-[#c92c41] mb-0.5">Q{[1,2,3,4][[0,3,6,9].indexOf(i)]}</div>}
                      <div className={`text-[10.5px] font-bold ${Q_STARTS.has(i) ? "text-[#c92c41]" : "text-gray-400"}`}>{m}</div>
                    </div>
                  ))}
                </div>

                {/* Lanes */}
                {entity.rail.map((lane,li) => (
                  <div key={lane.label} className={`grid items-center ${li < entity.rail.length-1 ? "mb-1.5" : ""}`} style={{ gridTemplateColumns:"112px repeat(12,1fr)" }}>
                    <div className="flex items-center gap-1.5 pr-2">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${LANE[lane.color].dot}`} />
                      <span className="text-[10.5px] font-semibold text-gray-600 leading-tight">{lane.label}</span>
                    </div>
                    {MONTHS.map((_,mi) => {
                      const item = lane.items.find(it => it.month === mi);
                      return (
                        <div key={mi} className="flex items-center justify-center min-h-[34px] px-0.5">
                          {item
                            ? <RailPill item={item} color={lane.color} />
                            : <div className={`w-full h-px ${Q_STARTS.has(mi) ? "bg-red-100" : "bg-gray-100"}`} />
                          }
                        </div>
                      );
                    })}
                  </div>
                ))}

                {/* Bottom quarter markers */}
                <div className="grid mt-2 border-t border-gray-50 pt-1" style={{ gridTemplateColumns:"112px repeat(12,1fr)" }}>
                  <div />
                  {MONTHS.map((_,i) => (
                    <div key={i} className={`h-2 border-l ${Q_STARTS.has(i) ? "border-[#c92c41]/30" : "border-gray-100"}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* ── Penalty Callout ───────────────────────────────────────── */}
        <motion.section
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.55 }}
          className="mb-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`penalty-${active}`}
              initial={{ opacity:0, x:-8 }}
              animate={{ opacity:1, x:0 }}
              exit={{ opacity:0, x:8 }}
              transition={{ duration:0.3 }}
              className="relative overflow-hidden rounded-2xl bg-white border border-red-100 shadow-sm"
              style={{ borderLeft:"4px solid #dc2626" }}
            >
              <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-red-50/70 to-transparent pointer-events-none" />
              <div className="flex flex-col sm:flex-row">
                <div className="flex-1 p-6 sm:p-8">
                  <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-50 border border-red-100">
                    <ShieldAlert className="w-3 h-3 text-red-600" />
                    <span className="text-[10.5px] font-bold text-red-600 uppercase tracking-[0.1em]">Penalty risk</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#0e172b] mb-3 leading-snug">{entity.penalty.headline}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{entity.penalty.body}</p>
                </div>
                <div className="flex items-center justify-center bg-red-50 px-8 sm:px-14 py-6 sm:py-0 shrink-0 border-t sm:border-t-0 sm:border-l border-red-100">
                  <div className="text-center">
                    <div className="text-[2.2rem] sm:text-[2.6rem] font-black text-red-600 leading-none">{entity.penalty.figure}</div>
                    <div className="text-[10px] font-semibold text-red-400 mt-1.5 uppercase tracking-widest">per day penalty</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* ── Pricing Plans ─────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-20"
        >
          <SectionEyebrow color="bg-[#fbebed] text-[#c92c41] border-[rgba(202,45,66,0.18)]">Pricing</SectionEyebrow>
          <AnimatePresence mode="wait">
            <motion.h2
              key={`plans-h-${active}`}
              initial={{ opacity:0, y:8 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-6 }}
              transition={{ duration:0.3 }}
              className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight mb-2"
            >
              {entity.label} — annual compliance plans
            </motion.h2>
          </AnimatePresence>
          <p className="text-sm text-gray-500 mb-10">Billed annually. Cancel any time before the next filing cycle begins.</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`plans-${active}`}
              initial={{ opacity:0, y:16 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-10 }}
              transition={{ duration:0.38 }}
            >
              {/* Card grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
                {entity.plans.map((plan, pi) => {
                  const isFeatured = !!plan.featured;
                  const tierFill  = ["#e2e8f0", "#c92c41", "#e99b2b"];
                  const tierEmpty = "#e2e8f0";
                  const was = parseInt(plan.annualWas.replace(/[^\d]/g,""), 10);
                  const now = parseInt(plan.annualPrice.replace(/[^\d]/g,""), 10);
                  const savingsPct = was && now ? Math.round((was - now) / was * 100) : 0;
                  return (
                    <motion.div
                      key={plan.name}
                      whileHover={{
                        scale: 1.03,
                        boxShadow: isFeatured
                          ? "0 0 0 1.5px rgba(233,155,43,0.55),0 36px 72px rgba(14,23,43,0.38),0 12px 28px rgba(233,155,43,0.16)"
                          : "0 16px 48px rgba(14,23,43,0.14),0 4px 16px rgba(14,23,43,0.08)",
                        transition:{ duration:0.2, ease:"easeOut" },
                      }}
                      className="relative flex flex-col overflow-hidden"
                      style={{
                        borderRadius:"20px",
                        ...(isFeatured
                          ? {
                              background:"linear-gradient(155deg,#0e172b 0%,#152040 55%,#0b1428 100%)",
                              boxShadow:"0 0 0 1.5px rgba(233,155,43,0.42),0 28px 56px rgba(14,23,43,0.28),0 8px 20px rgba(233,155,43,0.08)",
                            }
                          : {
                              background:"white",
                              border:"1px solid rgba(14,23,43,0.08)",
                              boxShadow:"0 2px 12px rgba(14,23,43,0.05)",
                            }),
                      }}
                    >
                      {/* Featured: animated gold top stripe */}
                      {isFeatured && (
                        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-[20px] overflow-hidden">
                          <div className="h-full w-full" style={{ background:"linear-gradient(90deg,#e99b2b,#f5c76a,#e99b2b)", backgroundSize:"200% 100%", animation:"shimmer-slide 2.4s linear infinite" }} />
                        </div>
                      )}

                      {/* Decorative wave at card bottom */}
                      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                        style={{ opacity: isFeatured ? 0.06 : 0.03 }}>
                        <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="w-full h-full">
                          <path d={pi===0 ? "M0 60 Q100 20 200 60 Q300 100 400 60 L400 120 L0 120 Z" : pi===1 ? "M0 40 Q80 90 200 50 Q320 10 400 60 L400 120 L0 120 Z" : "M0 70 Q120 30 240 70 Q320 100 400 50 L400 120 L0 120 Z"}
                            fill={isFeatured ? "white" : "#0e172b"}/>
                        </svg>
                      </div>

                      {/* Tier bar */}
                      <div className="flex items-center gap-1.5 px-5 pt-5 mb-4">
                        {entity.plans.map((_,ti) => (
                          <div key={ti} className="h-[3px] flex-1 rounded-full transition-all duration-500"
                            style={{ background: ti <= pi ? tierFill[pi] : tierEmpty }} />
                        ))}
                      </div>

                      {isFeatured && (
                        <div className="mx-5 -mt-1 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-[0.12em] uppercase"
                            style={{ background:"linear-gradient(90deg,rgba(233,155,43,0.18),rgba(245,199,106,0.1))", color:"#f5c76a", border:"1px solid rgba(233,155,43,0.28)" }}>
                            ★ Most chosen
                          </span>
                        </div>
                      )}

                      <div className="px-5 pb-6 flex flex-col flex-grow">
                        {/* Name + tagline */}
                        <h3 className="text-[17px] font-extrabold mb-1.5 leading-tight"
                          style={{ color: isFeatured ? "white" : "#0e172b" }}>
                          {plan.name}
                        </h3>
                        <p className="text-[12px] leading-relaxed mb-5"
                          style={{ color: isFeatured ? "rgba(195,218,255,0.5)" : "#9ca3af" }}>
                          {plan.tagline}
                        </p>

                        {/* Price */}
                        <div className="mb-5">
                          <div className="flex items-end gap-2 flex-wrap">
                            <span className="text-[2rem] font-black leading-none tracking-tight"
                              style={{ color: isFeatured ? "#f5c76a" : "#c92c41" }}>
                              {plan.monthlyPrice.replace("/mo","")}
                            </span>
                            <span className="text-[11px] font-semibold pb-0.5"
                              style={{ color: isFeatured ? "rgba(255,255,255,0.35)" : "#9ca3af" }}>/mo</span>
                          </div>
                          <div className="flex items-center gap-2 mt-2 flex-wrap">
                            <span className="text-[13px] font-bold"
                              style={{ color: isFeatured ? "rgba(255,255,255,0.82)" : "#0e172b" }}>
                              {plan.annualPrice}
                            </span>
                            <span className="text-[12px] line-through"
                              style={{ color: isFeatured ? "rgba(255,255,255,0.22)" : "#d1d5db" }}>
                              {plan.annualWas}
                            </span>
                            {savingsPct > 0 && (
                              <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full"
                                style={{ background:"rgba(22,163,74,0.09)", color:"#16a34a", border:"1px solid rgba(22,163,74,0.2)" }}>
                                {savingsPct}% off
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px mb-5"
                          style={{ background: isFeatured ? "rgba(255,255,255,0.08)" : "rgba(14,23,43,0.06)" }} />

                        {/* Included */}
                        <ul className="space-y-2.5 mb-4 flex-grow">
                          {plan.included.map(item => (
                            <li key={item} className="flex items-start gap-2.5 text-[12.5px]">
                              <div className="mt-[2px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                                style={{ background: isFeatured ? "rgba(74,222,128,0.16)" : "rgba(22,163,74,0.1)" }}>
                                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                  <path d="M1.5 5L4 7.5L8.5 2.5" stroke={isFeatured ? "#4ade80" : "#16a34a"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                              <span style={{ color: isFeatured ? "rgba(218,232,255,0.88)" : "#374151" }}>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Excluded */}
                        {plan.excluded.length > 0 && (
                          <ul className="space-y-2 mb-5">
                            {plan.excluded.map(item => (
                              <li key={item} className="flex items-start gap-2.5 text-[12px]">
                                <div className="mt-[2px] w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0"
                                  style={{ background: isFeatured ? "rgba(255,255,255,0.05)" : "rgba(14,23,43,0.04)" }}>
                                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                                    <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke={isFeatured ? "rgba(255,255,255,0.2)" : "#d1d5db"} strokeWidth="2" strokeLinecap="round"/>
                                  </svg>
                                </div>
                                <span className="line-through" style={{ color: isFeatured ? "rgba(255,255,255,0.2)" : "#d1d5db" }}>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* CTAs */}
                        <div className="mt-auto pt-4 flex flex-col gap-2">
                          <motion.button
                            whileHover={{ scale:1.02 }}
                            whileTap={{ scale:0.97 }}
                            onClick={() => openCallback("Annual Compliance")}
                            className="relative w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide cursor-pointer overflow-hidden"
                            style={
                              isFeatured
                                ? { color:"#0e172b", boxShadow:"0 6px 24px rgba(233,155,43,0.36),inset 0 1px 0 rgba(255,255,255,0.3)" }
                                : { background:"#c92c41", color:"white", boxShadow:"0 4px 18px rgba(201,44,65,0.28),inset 0 1px 0 rgba(255,255,255,0.12)" }
                            }
                          >
                            {isFeatured && (
                              <span className="absolute inset-0 rounded-2xl"
                                style={{ background:"linear-gradient(90deg,#e99b2b,#f5c76a,#e99b2b)", backgroundSize:"200% 100%", animation:"shimmer-slide 2.4s linear infinite" }} />
                            )}
                            <span className="relative">Start with {plan.name}</span>
                          </motion.button>
                          <button
                            onClick={() => openCallback("Annual Compliance — CA consultation")}
                            className="w-full text-[11.5px] text-center py-1.5 font-medium cursor-pointer bg-transparent border-none transition-colors duration-200"
                            style={{ color: isFeatured ? "rgba(255,255,255,0.28)" : "#9ca3af" }}
                            onMouseEnter={e => (e.currentTarget.style.color = isFeatured ? "rgba(255,255,255,0.7)" : "#c92c41")}
                            onMouseLeave={e => (e.currentTarget.style.color = isFeatured ? "rgba(255,255,255,0.28)" : "#9ca3af")}
                          >
                            Talk to a CA first
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Trust signals row */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-5 border-t border-gray-100">
                <p className="text-[11px] text-gray-400">All prices excl. 18% GST. Govt & MCA fees billed at actuals.</p>
                <div className="flex items-center gap-5">
                  {["No lock-in","Dedicated CA","Zero-penalty SLA"].map(b => (
                    <div key={b} className="flex items-center gap-1.5">
                      <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[10.5px] font-medium text-gray-500">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              <style>{`@keyframes shimmer-slide{0%{background-position:200% 0}100%{background-position:-200% 0}}`}</style>
            </motion.div>
          </AnimatePresence>
        </motion.section>





        {/* ── Filing Table ──────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-20"
        >
          <SectionEyebrow color="bg-green-50 text-green-700 border-green-100">What&apos;s included</SectionEyebrow>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight mb-2">Filing by filing</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-xl leading-relaxed">
            Everything below is handled by a qualified CA or CS. Nothing gets outsourced to a form-filling desk.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`filings-${active}`}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              transition={{ duration:0.3 }}
              className="rounded-2xl border border-gray-200 shadow-sm overflow-x-auto"
            >
              <table className="w-full min-w-[520px] bg-white text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#f8f7f4]">
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em] w-[100px]">Form</th>
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">What it does</th>
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em] w-[140px]">Due date</th>
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em] w-[110px]">Plan</th>
                  </tr>
                </thead>
                <tbody>
                  {entity.filings.map((row, i) => (
                    <tr key={row.form+i} className={`border-b border-gray-50 hover:bg-[#f8f7f4]/60 transition-colors ${i===entity.filings.length-1 ? "border-b-0" : ""}`}>
                      <td className="px-4 py-3.5 font-bold text-[#0e172b] align-top text-[13px]">{row.form}</td>
                      <td className="px-4 py-3.5 text-gray-500 leading-relaxed align-top">{row.what}</td>
                      <td className="px-4 py-3.5 text-gray-500 align-top font-medium">{row.due}</td>
                      <td className="px-4 py-3.5 align-top"><PlanTag tag={row.tag} plan={row.plan} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* ── Competitor Compare ────────────────────────────────────── */}
        <motion.section
          initial={{ opacity:0, y:40 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6 }}
          className="mb-20"
        >
          <SectionEyebrow color="bg-indigo-50 text-indigo-600 border-indigo-100">Comparison</SectionEyebrow>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight mb-2">How our pricing compares</h2>
          <p className="text-sm text-gray-500 mb-8 max-w-2xl leading-relaxed">
            Published professional fees for a comparable annual scope, excluding government charges. Competitor figures are their advertised entry rates and typically exclude bookkeeping, GST and income tax filing.
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={`compare-${active}`}
              initial={{ opacity:0, y:10 }}
              animate={{ opacity:1, y:0 }}
              exit={{ opacity:0, y:-8 }}
              transition={{ duration:0.3 }}
              className="rounded-2xl border border-gray-200 shadow-sm overflow-x-auto"
            >
              <table className="w-full min-w-[540px] bg-white text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-[#f8f7f4]">
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">Provider</th>
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">Scope</th>
                    <th className="text-left px-4 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">Professional fee</th>
                    <th className="text-center px-3 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">Bookkeeping</th>
                    <th className="text-center px-3 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">GST returns</th>
                    <th className="text-center px-3 py-3.5 text-[10.5px] font-bold text-gray-400 uppercase tracking-[0.08em]">Dedicated CA</th>
                  </tr>
                </thead>
                <tbody>
                  {entity.compare.map((row,i) => (
                    <tr
                      key={row.provider+i}
                      className={`border-b border-gray-50 transition-colors ${row.isUs ? "bg-[#fbebed]/40 hover:bg-[#fbebed]/60" : "hover:bg-[#f8f7f4]/60"} ${i===entity.compare.length-1 ? "border-b-0" : ""}`}
                    >
                      <td className={`px-4 py-3.5 align-top ${row.isUs ? "font-bold text-[#0e172b]" : "text-gray-600 font-medium"}`}>
                        {row.provider}
                        {row.isUs && <span className="ml-2 text-[9px] font-bold text-[#c92c41] bg-[#fbebed] border border-[rgba(202,45,66,0.2)] rounded-full px-2 py-0.5 uppercase tracking-wide">us</span>}
                      </td>
                      <td className="px-4 py-3.5 text-gray-500 align-top">{row.scope}</td>
                      <td className={`px-4 py-3.5 align-top ${row.isUs ? "font-bold text-[#0e172b]" : "text-gray-600"}`}>{row.fee}</td>
                      <td className="px-3 py-3.5 text-center align-top"><CCell v={row.bookkeeping} /></td>
                      <td className="px-3 py-3.5 text-center align-top"><CCell v={row.gst} /></td>
                      <td className="px-3 py-3.5 text-center align-top"><CCell v={row.dedicatedCA} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </motion.section>
      </div>

      {/* ══════════════════════════════════════════
          FOOTER CTA BAND — matches startup page dark style
      ══════════════════════════════════════════ */}
      <section className="bg-[#050d1a] relative overflow-hidden py-20">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{ backgroundImage:"linear-gradient(rgba(255,255,255,0.7)1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.7)1px,transparent 1px)", backgroundSize:"56px 56px" }}
        />
        <motion.div
          animate={{ x:[0,20,0], y:[0,-14,0], opacity:[0.2,0.45,0.2] }}
          transition={{ duration:11, repeat:Infinity, ease:"easeInOut" }}
          className="absolute top-[10%] right-[12%] w-64 h-64 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(201,44,65,0.22)_0%,transparent_70%)] blur-[40px]"
        />

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8 text-center">
          <motion.div
            initial={{ opacity:0, y:24 }}
            whileInView={{ opacity:1, y:0 }}
            viewport={{ once:true, amount:0.5 }}
            transition={{ duration:0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#c92c41]/15 border border-[#c92c41]/30 text-[#ff8a9a] mb-7">
              <Phone className="w-3 h-3" />
              Free compliance check
            </span>

            <h2 className="text-2xl sm:text-3xl font-black text-white leading-[1.12] tracking-tight mb-5">
              Not sure which filings apply to you?
            </h2>
            <p className="text-sm sm:text-base text-[#d7deeb]/65 leading-relaxed mb-10 max-w-lg mx-auto">
              Send us your CIN or LLPIN. We'll pull your MCA master data, list every pending filing, and quote you in one working day. No charge for the check.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale:1.04, boxShadow:"0 0 36px rgba(201,44,65,0.5)" }}
                whileTap={{ scale:0.97 }}
                onClick={() => openCallback("Annual Compliance — free check")}
                className="group relative flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white cursor-pointer transition-all bg-gradient-to-br from-[#c92c41] to-[#9d1f31] shadow-[0_4px_28px_rgba(201,44,65,0.38),inset_0_1px_0_rgba(255,255,255,0.14)]"
              >
                <BarChart3 className="w-4 h-4" />
                Get my compliance report
              </motion.button>

              <Link
                href="/contact"
                id="cta-contact-compliance"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white transition-all bg-white/10 border border-white/20 backdrop-blur-md no-underline hover:bg-white/15"
              >
                Talk to a CA
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
