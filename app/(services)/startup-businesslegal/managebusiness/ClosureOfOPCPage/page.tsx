"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileWarning, // Main icon for Closure/Warning
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Shield,
  FileText,
  Scale,
  Calendar,
  User, // Unique icon for One Person Company
} from "lucide-react";

export default function ClosureOfOPCPage() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  // Structured content to match the new card design
  const benefits = [
    {
      icon: Scale,
      text: "Removes legal hassles and avoids continuing non-compliance",
    },
    {
      icon: Shield,
      text: "Eliminates the risk of accumulating penalties and fines",
    },
    {
      icon: CheckCircle2,
      text: "Formal closure frees the director from OPC statutory obligations",
    },
    {
      icon: Building2,
      text: "Removes the entity's 'defaulter' status (if applicable)",
    },
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Annual ROC Return Filings should be up to date (or statement prepared)",
    "OPC should be inoperative for more than 1 or 2 consecutive financial years (depending on scheme)",
    "Bank Account of the OPC should be closed and Statement of Accounts prepared",
    "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
    "DIN of all Directors should be in ‘APPROVED’ status",
    "One valid Digital Signature (DSC) of an existing Director",
  ];

  const deliverables = [
    "All filed e-forms with MCA (e.g., Form STK-2)",
    "MCA payment challan for closure fees",
    "OPC Closure Certificate (Confirmation of Striking Off)",
    "Drafted Indemnity Bond and Affidavit documents",
    "Board Resolution and Director’s Consent for voluntary closure",
  ];

  const faqs = [
    {
      q: "What is Closure of OPC?",
      a: "Closure of an OPC is the formal legal process of voluntarily dissolving the business and legally ending its existence by striking its name off the Registrar of Companies (ROC) records.",
    },
    {
      q: "What is the difference between Closure, Winding up, and Dissolution?",
      a: "Closure (Striking Off via FTE) is voluntary for non-operational OPCs (Form STK-2). Winding up is a formal liquidation, either voluntary or court-ordered. Dissolution is the final act of legal termination.",
    },
    {
      q: "Why ROC filing is required for Closing an OPC?",
      a: "ROC filing (STK-2) officially removes the OPC from government records. Without this approval, the OPC must continue mandatory annual filings, incurring penalties if not done.",
    },
    {
      q: "What is Fast Track Exit (FTE) Scheme?",
      a: "A simplified MCA process for easy and faster voluntary closure of inoperative companies, including OPCs, by filing Form STK-2.",
    },
    {
      q: "Which OPC is eligible for Closure?",
      a: "Any OPC not being a Section 8 Company and inactive for over **one year** since incorporation or one year prior to application can apply for closure.",
    },
    {
      q: "What are the costs involved?",
      a: "Filing fee for Form STK-2: **₹10,000**. Notary and Stamp Paper charges may vary (approx. ₹1,200–₹1,500).",
    },
    {
      q: "What documents are required?",
      a: "Application for striking off, Board Resolution, Director’s Consent, Affidavit, Indemnity Bond, and Statement of Assets and Liabilities are key documents. Lawizer assists in preparing and filing these.",
    },
    {
      q: "What is the time limit to file?",
      a: "Form STK-2 must be filed with the ROC office within **30 days** from the date of Signing of the Statement of Assets and Liabilities.",
    },
  ];

  // Set primary color palette (using Warning Orange/Red/Yellow theme for a dark background)
  const primaryColor = "text-red-500";
  const primaryBg = "bg-gradient-to-r from-red-600 to-yellow-500";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-yellow-600";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/closurelegal.jpg')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-yellow-500 p-3 rounded-xl sm:p-4">
                <User
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Closure of OPC (Striking Off)
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Formally dissolve your One Person Company via the **Fast Track Exit
            (FTE) Scheme** and strike its name off the ROC records using **Form
            STK-2**.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-yellow-300 px-2">
            Lawizer ensures your OPC closure is compliant with the Companies
            Act, 2013, handling all statutory forms and documentation.
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
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-yellow-500 rounded-full" />
                The Importance of Legal Closure (FTE)
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                The **Fast Track Exit (FTE)** route via **Form STK-2** is the
                simplified way to close a non-operational OPC. Failure to
                formally close the OPC means mandatory annual filings continue,
                leading to heavy fines and non-compliance issues for the
                Director. Legal striking off removes all future compliance
                burdens.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Benefits of Formal OPC Closure
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
                Pre-Requisites for Striking Off (Form STK-2)
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                To apply for FTE under Form STK-2, ensure the following
                eligibility and documentation requirements are met:
              </p>
              {/* Prerequisites List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-700 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-300 text-sm">{p}</p>
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
                Finalize OPC Closure & Avoid Penalties
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Legally end your OPC's existence via the FTE scheme and free
                yourself from all mandatory annual compliance risks.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start OPC Closure (Form STK-2)
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book FTE Consultation
              </button>

              {/* Checklists - smaller text and icons */}
              <div className="mt-5 pt-5 border-t border-slate-600">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Timely Form STK-2 Filing (30 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Defaulter Tag Removed</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Indemnity Bond & Affidavit Drafting</span>
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
                className="border border-slate-700 rounded-lg sm:rounded-xl overflow-hidden hover:border-red-500 transition-colors"
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
                      openFaq === i ? "rotate-180 text-yellow-500" : ""
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
