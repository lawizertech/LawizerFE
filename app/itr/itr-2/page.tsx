"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  DollarSign, // Icon for Investor/Capital Gains
  ArrowRight,
  CheckCircle2,
  FileText,
  Home,
  ChevronDown,
  Scale,
} from "lucide-react";

export default function ITR2Page() {
  const [openFaq, setOpenFaq] = useState(0);

  // Content based on ITR-2 details
  const applicableTo = [
    "Individual or Hindu Undivided Family (HUF) who is not eligible to file ITR-1 ",
    "Does not have income from 'Profits and Gains of Business or Profession' ",
    "Total Income exceeding ₹50 Lakh ",
    "Income from more than one House Property ",
    "Income from Capital Gains (Long-term or Short-term) ",
    "Having Foreign Assets or Foreign Income ",
    "Being a Director in a company or having held unlisted equity shares ",
  ];

  const documentsNeeded = [
    "All documents from ITR-1 ",
    "Capital Gains statement (from sale of shares, mutual funds, property, etc.) ",
    "Details of all Foreign Assets and Foreign Income (if applicable) ",
    "Rental receipts/property tax receipts (for House Property income) ",
  ];

  const faqs = [
    {
      q: "Who should file ITR-2?",
      a: "ITR-2 is for individuals or HUFs who are not eligible for ITR-1 and do NOT have business or professional income. This usually includes those with high salaries, capital gains, multiple properties, or foreign income/assets.",
    },
    {
      q: "If I sell mutual funds and make a profit, which ITR form should I use?",
      a: "You must file ITR-2 since the profit from the sale of mutual funds is considered Capital Gains income. ITR-1 is not applicable for Capital Gains.",
    },
    {
      q: "Can I file ITR-2 if I am a Director in a Private Limited Company?",
      a: "Yes, ITR-2 is applicable if you are a Director in a company or have held unlisted equity shares at any time during the financial year.",
    },
    {
      q: "What extra documents are needed for ITR-2 compared to ITR-1?",
      a: "You will need the Capital Gains statement, details of all foreign assets/income, and rental receipts for multiple properties, in addition to all ITR-1 documents.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-indigo-600";
  const primaryBg = "bg-gradient-to-r from-indigo-600 to-purple-600";
  const primaryHoverBg = "bg-gradient-to-r from-indigo-700 to-purple-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/taxhero.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-2xl">
                <DollarSign className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            ITR-2 Filing
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            **The Investor's Choice:** For individuals/HUFs with Capital Gains,
            Foreign Assets, or multiple properties, but **excluding** income from
            business or profession.
          </p>
          <p className="mt-3 text-sm text-purple-300">
            Our CAs simplify complex filings involving foreign assets and capital
            gains, ensuring full compliance and accurate tax computation.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Who Should File ITR-2?
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Applicable to:
              </h3>
              <div className="space-y-2 mb-8">
                {applicableTo.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Key Documents Needed:
              </h3>
              <div className="space-y-2 mb-8">
                {documentsNeeded.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <FileText
                      className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-red-600" />
                Crucial Exclusion: Business Income
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100 transition-colors">
                  <CheckCircle2
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-slate-700 text-sm">
                    ITR-2 cannot be used if you have income from "Profits and Gains of Business or Profession". You must use ITR-3 instead.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Still having queries?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Feel free to talk to our tax consultant for free over call/chat as per your convenience.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start ITR-2 Filing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Free Tax Consultation
              </button>
            </div>
          </motion.aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-indigo-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-slate-700 leading-relaxed">
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