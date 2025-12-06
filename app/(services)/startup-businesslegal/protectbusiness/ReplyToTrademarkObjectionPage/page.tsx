"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileWarning,
  ArrowRight,
  ChevronDown,
  Shield,
  CheckCircle2,
  FileText,
  Calendar,
} from "lucide-react";

export default function ReplyToTrademarkObjectionPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Protection against Copycats: Strengthens your claim over the brand.",
    },
    {
      icon: CheckCircle2,
      text: "Secures a Valuable Asset: A registered brand is a critical company asset.",
    },
    {
      icon: FileText,
      text: "Aids in Business Growth: Supports your brand expansion.",
    },
    {
      icon: Calendar,
      text: "Builds Credibility: Establishes trust and market credibility.",
    },
  ];

  const prerequisites = ["Trademark Application Number"];

  const deliverables = [
    "Reply Drafting support and facilitation",
    "Trademark Registry filing receipt",
    "Screenshot of the reply filing",
  ];

  const faqs = [
    {
      q: "What is a Trademark Objection?",
      a: "A Trademark Objection means the trademark registry has examined your application and found reasons to object. The objection is issued by the Trademark department, not a third party.",
    },
    {
      q: "Why is it important to file a Reply?",
      a: "A proper reply must be submitted within 30 days of the examination report. Failure may result in the application being marked 'Abandoned'.",
    },
    {
      q: "How do you respond to a Trademark Objection?",
      a: "Responses require legal knowledge and drafting skills; professional assistance is recommended.",
    },
    {
      q: "What happens after filing the reply?",
      a: "The reply is submitted online and the status remains 'Objected' until review, which takes 6–12 months.",
    },
  ];

  const heroBgGradient =
    "bg-gradient-to-br from-yellow-500 via-orange-400 to-red-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* HERO */}
      <section
        className={`relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden ${heroBgGradient}`}
      >
        <div className="absolute inset-0 bg-[url('/protect.png')] bg-cover bg-center opacity-20" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-yellow-400 to-red-500 p-3 rounded-xl sm:p-4">
                <FileWarning
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Reply to Trademark Objection
          </h1>
          <p className="text-sm md:text-lg text-yellow-100 max-w-2xl mx-auto leading-relaxed px-2">
            Defend your brand by professionally responding to objections raised
            by the Trademark Registry.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16 grid lg:grid-cols-3 gap-8">
        {/* PRIMARY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-400 to-yellow-500 rounded-full" />
            Key Information
          </h2>

          {/* BENEFITS */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            Benefits
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100 hover:shadow-md transition-shadow"
              >
                <div className="p-1 sm:p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                  <b.icon
                    className="w-4 h-4 sm:w-5 sm:h-5 text-red-500"
                    strokeWidth={2}
                  />
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                  {b.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* PREREQUISITES */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
            Prerequisites
          </h3>
          <div className="space-y-2 mb-6">
            {prerequisites.map((p, i) => (
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

          {/* DELIVERABLES */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
              >
                <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SIDEBAR CTA */}
        {/* Sticky Sidebar CTA */}
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:sticky lg:top-24 overflow-false"
        >
          {/* ASIDE CARD */}
          <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-600">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
              Respond Professionally & On Time
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
              Get expert assistance to draft and file your trademark objection
              reply, ensuring timely submission and full legal compliance.
            </p>

            {/* Primary Button */}
            <button className="w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3">
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                Start Filing Your Reply
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            {/* Secondary Button */}
            <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
              Book Legal Consultation
            </button>

            {/* Checklists */}
            <div className="mt-5 pt-5 border-t border-slate-600">
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span>Drafted Reply for Trademark Objection</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span>Filing Receipt from Trademark Registry</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                <span>Screenshot Proof of Filing Submission</span>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-3 bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100 mt-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-400 to-yellow-500 rounded-full" />
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-red-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-red-50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
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
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
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
