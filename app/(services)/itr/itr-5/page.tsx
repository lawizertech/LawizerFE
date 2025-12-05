"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase, // Icon for LLP/Entity
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel,
  ChevronDown,
  Scale,
} from "lucide-react";

export default function ITR5Page() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  // Content based on ITR-5 details
  const applicableTo = [
    "For persons other than Individual, HUF, or Company (i.e., those not eligible to file ITR-1, ITR-2, ITR-3, ITR-4, or ITR-6)",
    "Firms (including partnership firms)",
    "Limited Liability Partnerships (LLPs)",
    "Association of Persons (AOPs) and Body of Individuals (BOIs)",
    "Artificial Juridical Persons (AJP), Estates, Business Trusts, and Investment Funds",
  ];

  const documentsNeeded = [
    "PAN Card & Aadhaar of the partners/members (for verification)",
    "Books of Accounts and Financial Statements (Balance Sheet, P&L Account)",
    "Audit Report (if liable for Tax Audit)",
    "Bank Statements",
    "Details of Partner's/Member's Capital Account",
  ];

  const faqs = [
    {
      q: "Who is required to file ITR-5?",
      a: "ITR-5 is the 'Entity Form' designed for non-individual taxpayers who are not companies. This includes Firms, Limited Liability Partnerships (LLPs), Association of Persons (AOPs), and Body of Individuals (BOIs).",
    },
    {
      q: "Can an LLP file ITR-4?",
      a: "No. LLPs must file ITR-5, as they are specifically excluded from using forms meant for individuals or the presumptive scheme (ITR-4).",
    },
    {
      q: "What key financial documents are mandatory for ITR-5?",
      a: "The entity must maintain and submit detailed Books of Accounts and Financial Statements (Balance Sheet, P&L), along with a mandatory Audit Report if liable for Tax Audit.",
    },
    {
      q: "Does this form cover AOPs and BOIs?",
      a: "Yes, ITR-5 is applicable to Association of Persons (AOPs) and Body of Individuals (BOIs).",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-red-600";
  const primaryBg = "bg-gradient-to-r from-red-600 to-pink-600";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-pink-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/taxhero.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-pink-500 p-3 rounded-xl sm:p-4">
                <Briefcase
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            ITR-5 Filing
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            **The Entity Form:** Mandatory for **Firms, LLPs, AOPs, and
            BOIs**—any non-individual taxpayer not filing ITR-6 or ITR-7.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-pink-300 px-2">
            Our CAs ensure accurate preparation of financial statements and
            audit reports for compliant entity filing.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA - Adjusted for mobile
       * px-4 instead of px-6
       * py-10 instead of py-16
       */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Grid Layout - Stacked on small screens */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* PRIMARY CONTENT CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
                Who Should File ITR-5?
              </h2>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                Applicable to:
              </h3>
              {/* Applicable To List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {applicableTo.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                Key Documents Needed:
              </h3>
              {/* Documents Needed List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {documentsNeeded.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <FileText
                      className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Gavel className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                Key Requirement: Financial Statements
              </h3>
              {/* Key Requirement Box - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100 transition-colors">
                  <CheckCircle2
                    className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0 mt-0.5"
                    strokeWidth={2}
                  />
                  <p className="text-slate-700 text-sm">
                    All entities filing ITR-5 must mandatorily maintain **Books
                    of Accounts** and prepare **Financial Statements** (Balance
                    Sheet and P&L Account), requiring professional CA
                    assistance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* SIDEBAR ASIDE - Adjusted for mobile */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // No sticky on mobile, better for scrolling
            className="lg:sticky lg:top-24 h-fit"
          >
            {/* ASIDE CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Still having queries?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Feel free to talk to our tax consultant for free over call/chat
                as per your convenience.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start ITR-5 Filing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Free Tax Consultation
              </button>
            </div>
          </motion.aside>
        </div>

        {/* FAQ SECTION - Adjusted for mobile
         * p-6 instead of p-8
         */}
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
                {/* Adjusted max-height for better collapse transition on mobile */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700 leading-relaxed">
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
