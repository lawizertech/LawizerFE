"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, // Icon for Small Business/Presumptive
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel,
  ChevronDown,
  Scale,
} from "lucide-react";

export default function ITR4Page() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  // Content based on ITR-4 (Sugam) details
  const applicableTo = [
    "Resident Individual, HUF, or Firm (other than LLP)",
    "Total Income is up to ₹50 Lakh",
    "Opting for Presumptive Taxation Scheme under: Section 44AD (Business Income), Section 44ADA (Professional Income), or Section 44AE (Goods Carriage business)",
    "Includes income from Salary, One House Property, and Other Sources",
  ];

  const documentsNeeded = [
    "PAN Card & Aadhaar Card",
    "Form 26AS and AIS",
    "Bank Statements for turnover/gross receipts (to calculate presumptive income)",
    "Documents for claiming deductions (Section 80C, 80D, etc.)",
  ];

  const notApplicable = [
    "Individuals whose income exceeds ₹50 Lakh",
    "Non-residents (NR) or Not Ordinarily Residents (NOR)",
    "Director in a company or those with Capital Gains (except certain types up to ₹1.25 Lakh)",
  ];

  const faqs = [
    {
      q: "What is the Presumptive Taxation Scheme?",
      a: "The scheme (under Sections 44AD/ADA/AE) allows small taxpayers to declare income at a minimum prescribed rate (e.g., 6% or 8% of turnover) instead of maintaining detailed Books of Accounts, simplifying the filing process.",
    },
    {
      q: "Who can use ITR-4 (Sugam)?",
      a: "ITR-4 is the 'Small Business Special' form, designed for Resident Individuals, HUFs, or Firms (other than LLP) with an income up to ₹50 Lakh who opt for the Presumptive Taxation Scheme.",
    },
    {
      q: "Can an LLP file ITR-4?",
      a: "No. ITR-4 is for Individuals, HUFs, or Firms (other than LLP). LLPs must file ITR-5.",
    },
    {
      q: "Do I still need to submit bank statements?",
      a: "Yes. While you don't need full financial statements, bank statements are required to verify the turnover/gross receipts necessary to calculate your presumptive income.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-yellow-600";
  const primaryBg = "bg-gradient-to-r from-yellow-600 to-orange-600";
  const primaryHoverBg = "bg-gradient-to-r from-yellow-700 to-orange-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-100">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/taxhero.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl sm:p-4">
                <Users
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            ITR-4 (Sugam) Filing
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            **The Small Business Special:** For Individuals, HUFs, and Firms
            opting for the **Presumptive Taxation Scheme** (44AD/ADA/AE) with
            total income up to **₹50 Lakh**.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-orange-300 px-2">
            Our CAs simplify filings for small businesses and professionals
            using the presumptive method, ensuring quick and easy compliance.
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
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                Who Should File ITR-4?
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
                    className="flex items-start gap-3 p-3 rounded-lg bg-yellow-50/50 border border-yellow-100 transition-colors"
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
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
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
                      className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Gavel className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                Not Applicable to: (Important Note)
              </h3>
              {/* Not Applicable List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {notApplicable.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
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
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start ITR-4 Filing
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
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-yellow-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-yellow-50 transition-colors"
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
