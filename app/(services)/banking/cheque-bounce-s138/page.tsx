"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel, // Main icon for Criminal Law/Court
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock, // For strict timelines
  Scale, // For legal debt
  ChevronDown,
} from "lucide-react";

export default function ChequeBounceS138Page() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Gavel,
      text: "Criminal Remedy for Debt Recovery: Section 138 is a criminal offense carrying possibility of imprisonment and heavy fines.",
    },
    {
      icon: Clock,
      text: "Faster, more effective mechanism for debt recovery than a lengthy civil suit.",
    },
    {
      icon: Scale,
      text: "The goal is to secure the principal amount, interest, and legal costs.",
    },
    {
      icon: FileText,
      text: "Securing the final court order/judgment and ensuring the recovery of the cheque amount, fine, and compensation.",
    },
  ];

  const preRequisites = [
    "Presentation & Dishonor: The cheque must be presented to the bank within its validity period (usually 3 months).",
    "Legal Notice (Mandatory): The payee must send a formal written Legal Notice to the drawer demanding payment within 30 days of receiving the 'Cheque Return Memo'.",
    "15-Day Waiting Period: The drawer must fail to make the payment within 15 days of receiving the Legal Notice.",
    "Complaint Filing: A criminal complaint must be filed before the appropriate Magistrate's Court within 30 days from the expiry of the 15-day notice period.",
  ];

  const documentsRequired = [
    "Original Cheque that was dishonored.",
    "Original 'Cheque Return Memo' (bank memo stating the reason for the bounce).",
    "Copy of the Legal Demand Notice sent to the drawer.",
    "Original Postal/Courier Receipt and Acknowledgement (proof that the drawer received the notice).",
  ];

  const deliverables = [
    "Timely & Precise Legal Notice: Drafting and dispatching a legally compliant demand notice via Registered Post within the 30-day statutory limit.",
    "Complaint Drafting & Filing: Drafting and filing the criminal complaint under Section 138 before the jurisdictional Magistrate's Court within the strict 30-day window.",
    "Representation & Trial: Full representation during the trial, including the Complainant's Sworn Statement and cross-examination.",
    "Execution: Securing the final court order/judgment and ensuring the recovery of the cheque amount, fine, and compensation.",
  ];

  const faqs = [
    {
      q: "What is the basis for a Section 138 case?",
      a: "The criminal offense occurs when a cheque is dishonored primarily due to 'insufficient funds' or the amount 'exceeding the arrangement' with the bank. The cheque must have been issued for the discharge of a legally enforceable debt or liability.",
    },
    {
      q: "What is the key benefit of filing a criminal case over a civil suit?",
      a: "Section 138 is a powerful deterrent because it is a criminal offense, carrying the possibility of imprisonment and heavy fines, which forces the drawer to take the matter seriously. It is a faster mechanism for debt recovery.",
    },
    {
      q: "What is the strict timeline for legal notice?",
      a: "The payee must send a formal written Legal Notice to the drawer demanding payment within 30 days of receiving the 'Cheque Return Memo' from the bank.",
    },
    {
      q: "What must happen before I file the court complaint?",
      a: "You must wait for the drawer to fail to make the payment within 15 days of receiving the Legal Notice. Then, the criminal complaint must be filed within 30 days from the expiry of that 15-day notice period.",
    },
  ];

  // Define a distinct color theme for criminal/enforcement
  const primaryColor = "text-purple-600";
  const primaryBg = "bg-gradient-to-r from-purple-600 to-indigo-600";
  const primaryHoverBg = "bg-gradient-to-r from-purple-700 to-indigo-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/bankinglegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-500 p-3 rounded-xl sm:p-4">
                <Gavel
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Cheque Bounce Cases (Section 138)
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Filing a **criminal complaint** under the Negotiable Instruments Act
            to secure debt recovery when a cheque is dishonored due to
            insufficient funds.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-indigo-300 px-2">
            We ensure strict adherence to timelines for the Legal Notice and
            filing the complaint before the Magistrate's Court.
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
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                Why Section 138 is the Best Remedy for Debt
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                Section 138 offers a robust criminal remedy that serves as a
                powerful deterrent, often resulting in quicker settlement than
                protracted civil suits. It allows the payee to secure the
                principal amount, interest, and legal costs.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Benefits of Criminal Proceedings
              </h3>
              {/* Benefits Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-purple-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                Mandatory Legal Prerequisites (Strict Timelines)
              </h3>
              {/* Prerequisites List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {preRequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                Lawizer Deliverables
              </h3>
              {/* Deliverables Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {d}
                    </p>
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
                Start Your Debt Recovery
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Ensure timely filing of the Legal Notice and the criminal
                complaint to meet the strict statutory deadlines.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  File Section 138 Case
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Consultation
              </button>

              {/* Documents Required List - smaller text */}
              <div className="mt-5 pt-5 border-t border-slate-700">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-2">
                  Documents Required:
                </h4>
                <div className="text-slate-300 text-xs sm:text-sm space-y-1">
                  <p>• Original Cheque & Return Memo </p>
                  <p>• Legal Demand Notice Copy </p>
                  <p>• Postal Receipt & Acknowledgement </p>
                </div>
              </div>
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
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-purple-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-purple-50 transition-colors"
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
