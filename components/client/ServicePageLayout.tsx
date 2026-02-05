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
} from "lucide-react";
import build from "next/dist/build";
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

  theme: ThemeConfig;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
}

/* ---------- COMPONENT ---------- */

export default function ServicePageLayout({
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
  primaryColor,
  primaryBg,
  primaryHoverBg,
}: ServicePageLayoutProps) {
  const [openFaq, setOpenFaq] = useState(0);
  const HeroIcon = ICON_MAP[icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
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

      {/* ================= MAIN ================= */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow border">
            <h2 className="text-2xl font-bold mb-6 flex gap-3">
              <span className="w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
              {contentTitle}
            </h2>

            {contentDescription && (
              <p className="text-slate-700 text-sm leading-relaxed mb-8 max-w-2xl">
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
                    className="
    flex gap-4 p-4 bg-slate-50 rounded-xl border
    transition-all duration-300
    hover:shadow-xl hover:-translate-y-1
    hover:border-slate-200
  "
                  >
                    <Icon className={`${primaryColor} w-10 h-10`} />
                    <p className="text-sm text-slate-800 leading-relaxed">
                      {b.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* SECTIONS */}
            {sections?.map((section) => {
              const SectionIcon = section.icon ? ICON_MAP[section.icon] : null;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-12"
                >
                  <h3 className="text-xl font-bold mb-5 flex items-center gap-3">
                    {SectionIcon && (
                      <SectionIcon className="w-5 h-5 text-green-600" />
                    )}
                    {section.title}
                  </h3>

                  {/* LIST */}
                  {section.type === "list" && (
                    <div className="space-y-3">
                      {section.data.map((item) => (
                        <div
                          key={item}
                          className="
    flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100
    transition-all duration-300
    hover:shadow-lg hover:bg-white
  "
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <p className="text-sm text-slate-800 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* GRID */}
                  {section.type === "grid" && (
                    <ul className="grid sm:grid-cols-2 gap-5">
                      {section.data.map((item) => (
                        <li
                          key={item}
                          className="
    flex items-center gap-4 px-4 py-2
    bg-blue-50/70 border border-blue-100 rounded-2xl
    transition-all duration-300
    hover:shadow-xl hover:bg-blue-100/70
    hover:-translate-y-0.5
  "
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                          <span className="text-sm font-medium text-slate-800">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
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
                className={`w-full ${primaryBg} py-4 rounded-xl font-semibold`}
              >
                Start Process <ArrowRight className="inline ml-2" />
              </button>
            </div>
          </aside>
        </div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-red-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-red-50"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700">
                    {f.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
