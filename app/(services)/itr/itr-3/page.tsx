"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp, // Icon for Business
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel, // For Audit/Books of Accounts
  ChevronDown,
  Scale,
} from "lucide-react";

export default function ITR3Page() {
  const [openFaq, setOpenFaq] = useState(0);

  // Content based on ITR-3 details
  const applicableTo = [
    "Individual or Hindu Undivided Family (HUF) having income from 'Profits and Gains of Business or Profession' ",
    "Income from Proprietary Business or Profession ",
    "Being a Partner in a Firm (receiving salary, interest, etc. from the firm) ",
    "Income from Capital Gains, Salary, House Property, and Other Sources IN ADDITION to business/profession income ",
  ];

  const documentsNeeded = [
    "All documents from ITR-2 ",
    "Books of Accounts and Financial Statements (Balance Sheet, P&L Account) ",
    "Audit Report (if liable for Tax Audit under Section 44AB) ",
    "Bank Statements for business transactions ",
  ];

  const faqs = [
    {
      q: "Who is ITR-3 designed for?",
      a: "ITR-3 is primarily for Individual or HUF taxpayers who have income from a Proprietary Business or Profession. It is the form used by entrepreneurs and business owners.",
    },
    {
      q: "Can I file ITR-3 if I am a partner in a firm?",
      a: "Yes. If you are a partner in a firm and receive income like salary or interest from the firm, you must file ITR-3.",
    },
    {
      q: "What extra financial documents are crucial for ITR-3?",
      a: "Beyond typical salary and investment documents, you must provide your Books of Accounts, Financial Statements (Balance Sheet, P&L), and a mandatory Audit Report if you are liable for a Tax Audit under Section 44AB.",
    },
    {
      q: "If I have business income and also made capital gains, do I use ITR-2 or ITR-3?",
      a: "You must use ITR-3. If you have any income from business or profession, ITR-3 is mandatory, even if you have other sources of income like Capital Gains or salary.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-orange-600";
  const primaryBg = "bg-gradient-to-r from-orange-600 to-red-600";
  const primaryHoverBg = "bg-gradient-to-r from-orange-700 to-red-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/taxhero.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-orange-500 to-red-500 p-4 rounded-2xl">
                <TrendingUp className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            ITR-3 Filing
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            **The Entrepreneur's Form:** Mandatory for Individuals and HUFs having
            income from **Proprietary Business or Profession**.
          </p>
          <p className="mt-3 text-sm text-red-300">
            Our CAs handle complex business income, financial statements, and audit
            requirements to ensure accurate and compliant ITR-3 filing.
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
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
                Who Should File ITR-3?
              </h2>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Applicable to:
              </h3>
              <div className="space-y-2 mb-8">
                {applicableTo.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-orange-50/50 border border-orange-100 transition-colors"
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
                <FileText className="w-5 h-5 text-purple-600" />
                Mandatory Documents Needed:
              </h3>
              <div className="space-y-2 mb-8">
                {documentsNeeded.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <FileText
                      className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-red-600" />
                Why Expert Assistance is Necessary
              </h3>
              <div className="space-y-2 mb-8">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100 transition-colors">
                  <CheckCircle2
                    className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-slate-700 text-sm">
                    ITR-3 requires mandatory disclosure of the Balance Sheet, Profit & Loss Account, and often a Tax Audit Report, making professional CA assistance vital for compliance.
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
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start ITR-3 Filing
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-orange-50 transition-colors"
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