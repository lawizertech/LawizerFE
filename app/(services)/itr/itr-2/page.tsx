"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Gavel,
  Users,
  Scale,
  FileText,
  Home,
  Heart,
  Clock,
  TrendingUp,
  Calendar,
  MapPin,
  FileWarning,
  Building2,
  UserMinus,
  Banknote,
  User,
  Copyright,
  RefreshCw,
  PenTool,
  BadgeIndianRupee,
  Briefcase,
  Rocket,
} from "lucide-react";
import { useState } from "react";

/* ---------- ICON MAP ---------- */

const ICON_MAP = {
  gavel: Gavel,
  shield: Shield,
  users: Users,
  scale: Scale,
  fileText: FileText,
  home: Home,
  heart: Heart,
  checkCircle: CheckCircle2,
  clock: Clock,
  building: Home,
  factory: Home,
  trendingUp: TrendingUp,
  calendar: Calendar,
  mapPin: MapPin,
  fileWarning: FileWarning,
  building2: Building2,
  userMinus: UserMinus,
  banknote: Banknote,
  user: User,
  copyright: Copyright,
  refresh: RefreshCw,
  penTool: PenTool,
  badgeIndianRupee: BadgeIndianRupee,
  briefcase: Briefcase,
  rocket: Rocket,
} as const;

export type IconName = keyof typeof ICON_MAP;

/* ---------- TYPES ---------- */

export interface BenefitItem {
  icon: IconName;
  text: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SectionBlock {
  title: string;
  icon?: IconName;
  type: "list" | "grid";
  data: string[];
}

/* ---------- ALERT ---------- */

type AlertType = "info" | "warning" | "success" | "danger";

interface AlertConfig {
  type: AlertType;
  title: string;
  description?: string;
}

interface ThemeConfig {
  orb1: string;
  orb2: string;
  iconBg: string;
  badgeText: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  icon: IconName;

  contentTitle: string;
  contentDescription?: string;
  section1Title: string;

  benefits: BenefitItem[];
  sections?: SectionBlock[];
  faqs: FAQItem[];

  alert?: AlertConfig;

  theme: ThemeConfig;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
}

/* ---------- ALERT ICON ---------- */

function AlertIcon({ type }: { type: AlertType }) {
  const cls = "w-5 h-5 mt-0.5 shrink-0";

  switch (type) {
    case "info":
      return <FileText className={`${cls} text-blue-600`} />;
    case "warning":
      return <Clock className={`${cls} text-yellow-600`} />;
    case "success":
      return <CheckCircle2 className={`${cls} text-green-600`} />;
    case "danger":
      return <FileWarning className={`${cls} text-red-600`} />;
  }
}

/* ---------- COMPONENT ---------- */

export default function ServicePageLayout(props: ServicePageLayoutProps) {
  const {
    theme,
    icon,
    title,
    subtitle,
    badgeText,
    contentTitle,
    contentDescription,
    section1Title,
    benefits,
    sections,
    faqs,
    alert,
    primaryColor,
    primaryBg,
    primaryHoverBg,
  } = props;

  /** ✅ FAQ CLOSED BY DEFAULT */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const HeroIcon = ICON_MAP[icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50">
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center text-center min-h-[60vh] overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        <div
          className={`absolute top-1/4 left-1/4 w-72 h-72 ${theme.orb1} blur-3xl rounded-full`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${theme.orb2} blur-3xl rounded-full`}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-4 py-10"
        >
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-xl bg-gradient-to-br ${theme.iconBg}`}>
              <HeroIcon className="w-14 h-14 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-3">{title}</h1>
          <p className="text-slate-300 mb-3">{subtitle}</p>
          <p className={`text-sm ${theme.badgeText}`}>{badgeText}</p>
        </motion.div>
      </section>

      {/* ================= ALERT ================= */}
      {alert && (
        <div className="max-w-6xl mx-auto px-4 mt-6">
          <div
            className={`flex gap-4 p-5 rounded-2xl border ${
              alert.type === "info"
                ? "bg-blue-50 border-blue-200"
                : alert.type === "warning"
                  ? "bg-yellow-50 border-yellow-200"
                  : alert.type === "success"
                    ? "bg-green-50 border-green-200"
                    : "bg-red-50 border-red-200"
            }`}
          >
            <AlertIcon type={alert.type} />
            <div>
              <p className="font-semibold text-sm">{alert.title}</p>
              {alert.description && (
                <p className="text-sm opacity-90">{alert.description}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= MAIN ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow border">
            <h2 className="text-2xl font-bold mb-6 flex gap-3">
              <span
                className={`w-1 rounded-full bg-gradient-to-b ${theme.iconBg}`}
              />
              {contentTitle}
            </h2>

            {contentDescription && (
              <p className="text-slate-700 text-sm mb-8 max-w-2xl">
                {contentDescription}
              </p>
            )}

            {/* BENEFITS */}
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className={primaryColor} />
              {section1Title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((b) => {
                const Icon = ICON_MAP[b.icon];
                return (
                  <div
                    key={b.text}
                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border hover:shadow-lg transition"
                  >
                    <Icon className={`${primaryColor} w-10 h-10`} />
                    <p className="text-sm text-slate-800">{b.text}</p>
                  </div>
                );
              })}
            </div>

            {/* EXTRA SECTIONS */}
            {sections?.map((section) => {
              const Icon = section.icon ? ICON_MAP[section.icon] : null;

              return (
                <div key={section.title} className="mb-12">
                  <h3 className="text-xl font-bold mb-5 flex gap-3">
                    {Icon && <Icon className="w-5 h-5 text-green-600" />}
                    {section.title}
                  </h3>

                  {section.type === "list" && (
                    <div className="space-y-3">
                      {section.data.map((item) => (
                        <div
                          key={item}
                          className="flex gap-4 p-4 bg-slate-50 rounded-xl border"
                        >
                          <CheckCircle2 className="text-green-600 mt-1" />
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === "grid" && (
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {section.data.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-2"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow">
              <h3 className="text-xl font-bold mb-3">
                Start Your Legal Process
              </h3>
              <p className="text-slate-300 text-sm mb-6">
                Expert legal guidance, end-to-end support.
              </p>

              <button
                className={`w-full ${primaryBg} py-4 rounded-xl font-semibold hover:opacity-90 transition`}
              >
                Start Process <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </aside>
        </div>

        {/* FAQs */}
        <section className="bg-white rounded-3xl p-8 shadow border">
          <h3 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">
                <button
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 text-left flex justify-between bg-slate-50"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown
                    className={`transition ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <p id={`faq-${i}`} className="p-5 text-sm text-slate-700">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
