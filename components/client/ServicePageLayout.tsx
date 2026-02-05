"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  FileText,
  LucideIcon,
  Shield,
} from "lucide-react";
import { useState } from "react";

/* ---------- TYPES ---------- */

interface BenefitItem {
  icon: LucideIcon;
  text: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ThemeConfig {
  orb1: string;
  orb2: string;
  iconBg: string;
  badgeText: string;
}

interface ServicePageLayoutProps {
  contentTitle: string;
  section1Title: string;
  section2Title: string;
  section3Title?: string;
  title: string;
  subtitle: string;
  badgeText: string;
  icon: LucideIcon;

  benefits: BenefitItem[];
  procedures?: string[];
  prerequisites?: string[];
  faqs: FAQItem[];

  theme: ThemeConfig;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
}

/* ---------- COMPONENT ---------- */

export default function ServicePageLayout({
  theme,
  icon: Icon,
  title,
  contentTitle,
  section1Title,
  section2Title,
  subtitle,
  badgeText,
  benefits,
  procedures,
  prerequisites,
  faqs,
  primaryColor,
  primaryBg,
  primaryHoverBg,
}: ServicePageLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      {/* ================= HERO ================= */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        <div
          className={`absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 ${theme.orb1} rounded-full blur-3xl animate-pulse`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 ${theme.orb2} rounded-full blur-3xl animate-pulse delay-1000`}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${theme.iconBg} rounded-xl blur-md opacity-50`}
              />
              <div
                className={`relative bg-gradient-to-br ${theme.iconBg} p-3 sm:p-4 rounded-xl`}
              >
                <Icon className="w-10 h-10 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-white">
            {title}
          </h1>

          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <p className={`mt-3 text-xs sm:text-sm ${theme.badgeText}`}>
            {badgeText}
          </p>
        </motion.div>
      </section>

      {/* ================= MAIN ================= */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              {/* SECTION HEADER */}
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                {contentTitle}
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                We guide you through the mandatory legal process of recording
                your ownership, ensuring all legal and financial requirements
                are correctly met for a smooth and legitimate transfer.
              </p>

              {/* SERVICE HIGHLIGHTS */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                {section1Title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-red-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-1 sm:p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                      <b.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug pt-0.5">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                {section2Title}
              </h3>
              {/* PROCEDURE */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {procedures?.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              {/* PREREQUISITES */}
              {prerequisites && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {prerequisites.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <p className="text-xs sm:text-sm text-slate-700 font-medium">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Register Your Property Securely
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6">
                Ensure a smooth and legally valid transfer of ownership with our
                expert guidance through documentation and compliance.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Registration Process
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>
            </div>
          </motion.aside>
        </div>

        {/* ================= FAQ ================= */}
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
