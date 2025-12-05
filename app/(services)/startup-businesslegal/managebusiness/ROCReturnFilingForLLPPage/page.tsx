"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Calendar,
  Scale,
  Clock,
} from "lucide-react";

export default function ROCReturnFilingForLLPPage() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  // Structured content to match the new card design
  const benefits = [
    {
      icon: Calendar,
      text: "Helps in maintaining 'Active' status in the MCA Portal",
    },
    {
      icon: Shield,
      text: "Protection from steep penalty and legal actions",
    },
    {
      icon: Scale,
      text: "Boosts Confidence and Trust among partners and stakeholders",
    },
    {
      icon: Clock,
      text: "Avoiding mandatory 'Strike Off' action by the ROC for non-filing",
    },
  ];

  // Note: Prerequisites array is formatted to handle the sub-bullets cleanly for the overview section.
  const prerequisites = [
    "**For Form 11 Filing (Annual Return):**",
    "• DIN of all Designated Partners should be in APPROVED Status",
    "• Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
    "**For Form 8 Filing (Statement of Accounts):**",
    "• Turnover less than 40 Lac: Signed Balance Sheet & P&L",
    "• Turnover more than 40 Lac: Audited Balance Sheet (Mandatory)",
    "• DIN of all Designated Partners should be in APPROVED Status",
    "• Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
  ];

  const deliverables = [
    "All filed e-forms with MCA (Form 8 and Form 11)",
    "MCA payment challan for filing fees",
    "Financial statements preparation (if required)",
    "Certificate of filing compliance",
  ];

  const faqs = [
    {
      q: "What Forms are to be filed for ROC Return (for LLP)?",
      a: "LLP needs to file two eForms every year: **Form 11** for the Annual Return (Compliance) and **Form 8** for the Statement of Accounts (Financials).",
    },
    {
      q: "What is the LLP Annual Filing due date?",
      a: "Due date for filing **Form 11** is **30th May** of each year. Due date for filing **Form 8** is **30th October** of every year.",
    },
    {
      q: "What is the Penalty for late filing of LLP return?",
      a: "Late fees of **₹100 per day** is charged on each Form (Form 11 and Form 8) from the day after the due date until the filing is completed. The penalty is uncapped.",
    },
    {
      q: "How to calculate Penalty for late filing of LLP Annual filing?",
      a: "Penalty calculation is: **₹100 x Number of days delay** for Form 11 + **₹100 x Number of days delay** for Form 8.",
    },
    {
      q: "Is there any chance of waiver of penalty for non-filing of Form 11 & Form 8?",
      a: "No, there is typically no provision for waiver of penalty. The MCA has not recently announced any general waiver or amnesty scheme, making timely filing essential.",
    },
    {
      q: "What happens if an LLP does not file annual returns?",
      a: "A) LLP & its Partners become liable for steep, uncapped late fees. B) ROC may issue notice to close the LLP. C) ROC can disqualify and block the DIN of Designated Partners, preventing them from joining other entities.",
    },
  ];

  // Set primary color palette (using Blue/Purple theme for Formal Compliance)
  const primaryColor = "text-blue-500";
  const primaryBg = "bg-gradient-to-r from-blue-600 to-purple-600";
  const primaryHoverBg = "bg-gradient-to-r from-blue-700 to-purple-700";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/roc-llp.jpg')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-xl sm:p-4">
                <FileText
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            ROC Annual Return Filing for LLP
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Mandatory annual compliance for Limited Liability Partnerships
            (LLP), involving timely filing of **Form 8** (Financials) and **Form
            11** (Annual Return) to avoid heavy penalties.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-blue-300 px-2">
            Lawizer ensures compliance, handles financial statement preparation,
            and timely filing under the LLP Act, 2008.
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
            <div className="bg-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/50 border border-slate-700">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                The Importance of Timely Annual Filing
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                ROC Annual Filing is non-negotiable for an LLP. Failing to file
                Form 8 and Form 11 by their respective deadlines (October 30th
                and May 30th) results in an uncapped, cumulative late fee of
                **₹100 per day per form**. This compliance step is crucial for
                maintaining 'Active' status and protecting Designated Partners'
                DINs from disqualification.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Benefits of Compliant LLP Filing
              </h3>
              {/* Benefits Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-slate-700/50 border border-slate-600 hover:shadow-md transition-shadow"
                  >
                    <div className="p-1 sm:p-2 rounded-lg bg-slate-900 shadow-sm flex-shrink-0">
                      <b.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-medium leading-snug pt-0.5">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Prerequisites Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                Pre-Requisites for Filing (Form 8 & 11)
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                The compliance documents and statuses required depend on the
                LLP's financial size:
              </p>
              {/* Prerequisites List - Adjusted padding and text size. Handled complex list structure. */}
              <div className="space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-1 text-slate-300"
                  >
                    <span className="text-green-500 flex-shrink-0 mt-0.5">
                      {/* Custom icon/bullet logic */}
                      {p.startsWith("•") ? (
                        <span className="text-xs">•</span>
                      ) : p.startsWith("**") ? (
                        <Scale
                          className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400"
                          strokeWidth={1.5}
                        />
                      ) : (
                        <div className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </span>
                    <p
                      className={`text-slate-300 text-sm ${
                        p.startsWith("**")
                          ? "font-bold text-white mt-0.5"
                          : p.startsWith("•")
                          ? "ml-0.5"
                          : "mt-0.5"
                      }`}
                    >
                      {p.replace(/[\*\•]/g, "").trim()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Deliverables Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                Lawizer Deliverables
              </h3>
              {/* Deliverables Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-900/50 border border-blue-800"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-200 font-medium">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar CTA */}
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
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-600">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Ensure LLP Compliance: File Form 8 & 11
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Meet the mandatory annual deadlines (May 30th & Oct 30th) to
                avoid uncapped penalties and partner DIN disqualification.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start LLP Return Filing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Compliance Consultation
              </button>

              {/* Checklists - smaller text and icons */}
              <div className="mt-5 pt-5 border-t border-slate-600">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Timely Filing: Form 8 & Form 11</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Avoid ₹100/day Uncapped Penalty</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Partner DIN Protection</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section - Adjusted for mobile
         * p-6 instead of p-8
         */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/50 border border-slate-700"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-700 rounded-lg sm:rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-700/60 hover:bg-slate-700 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-white pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>
                <div
                  // Dynamic height based on state for smooth accordion transition
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-300 leading-relaxed whitespace-pre-line">
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
