"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote, // Main icon for Capital/Finance
  ArrowRight,
  ChevronDown,
  Shield,
  FileText,
  Scale,
  Calendar,
  CheckCircle2,
  Users, // Icon for Company/Shareholders
  TrendingUp, // New icon for Growth
} from "lucide-react";

export default function IncreasingCapitalOfCompanyPage() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  // Structured content to match the new card design
  const benefits = [
    {
      icon: TrendingUp,
      text: "Enables scaling, business expansion, and new ventures",
    },
    {
      icon: Banknote,
      text: "Creates opportunities for raising funds from new investors",
    },
    {
      icon: Users,
      text: "Boosts transparency and trust among stakeholders",
    },
    {
      icon: Scale,
      text: "Ensures legal compliance and protects against penalties",
    },
  ];

  const prerequisitesAuth = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Details of the required Increase in Authorized Capital",
    "DIN of minimum 1 Director should be in 'APPROVED' Status",
    "One Valid Digital Signature (DSC) of an existing Director",
    "MOA (Memorandum of Association) must contain the necessary capital clause",
  ];

  const prerequisitesPaidUp = [
    "Bank Statement showing deposit of Paid up Capital amount",
    "Share certificates of the Company (for updating)",
    "DIN of minimum 1 Director should be in 'APPROVED' Status",
    "One Valid Digital Signature (DSC) of an existing Director",
  ];

  const deliverables = [
    "Filed e-forms with MCA (Form SH-7)",
    "MCA payment challan for filing fees and stamp duty",
    "Drafted Shareholders' Special Resolution (EGM)",
    "Updated MOA and AOA copy",
    "Guidance on printing new Share Certificates",
  ];

  const faqs = [
    {
      q: "What is maximum share capital allowed for a Company?",
      a: "There is no maximum limit for the Authorized Share Capital of a Private or Public Limited Company under the Companies Act, 2013.",
    },
    {
      q: "What is the difference between Authorized Capital & Paid up capital?",
      a: "The **Authorized Capital** is the maximum limit up to which a Company can issue shares. The **Paid Up Capital** is the actual part of the Authorized Capital for which Shareholders have made the investment into the Company.",
    },
    {
      q: "What documents are required for increasing the capital?",
      a: "MOA (Memorandum of Association), AOA (Articles of Association), documents for Board Meeting, and documents for Extra Ordinary General Meeting (EGM) of the Shareholders. Lawizer assists in preparing and filing these.",
    },
    {
      q: "What Forms are to be filed for increasing the Company capital?",
      a: "Form **SH-7** is the primary form filed with the ROC to register the increase in Authorized Share Capital.",
    },
    {
      q: "What is time limit to file change of capital documents with ROC?",
      a: "The time limit is **30 days** from passing of the Special Resolution in the Extra Ordinary General Meeting (EGM) for the increase in Authorized Share Capital.",
    },
    {
      q: "Do we have to pay Stamp duty for increase in Authorized Capital?",
      a: "Yes, Stamp duty is legally payable on the Increase of Authorized Capital. The amount depends on the size of the increase and the State in which the company is incorporated.",
    },
    {
      q: "Do I need Share Certificates for Increase in Capital assignment of the Company?",
      a: "Yes, Share certificates need to be updated and issued to reflect the changes in the capital structure. We can guide and assist you in the proper issuance of the new Share Certificates.",
    },
  ];

  // Set primary color palette (using Green/Teal theme for Growth/Finance)
  const primaryColor = "text-green-500";
  const primaryBg = "bg-gradient-to-r from-green-600 to-teal-500";
  const primaryHoverBg = "bg-gradient-to-r from-green-700 to-teal-600";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/increase-capital.jpg')] bg-cover bg-center opacity-10" />

        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl sm:p-4">
                <Banknote
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Increasing Authorized Share Capital
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Legally expand your company’s capital base (Authorized and Paid-up)
            to unlock growth opportunities, attract investors, and ensure ROC
            compliance via **Form SH-7**.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-green-300 px-2">
            Lawizer handles the Special Resolution, MOA amendment, stamp duty
            calculation, and timely filing of Form SH-7.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Grid Layout - Stacked on small screens */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/50 border border-slate-700">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full" />
                The Importance of Capital Expansion
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Increasing your company's Authorized Capital is a crucial step
                for growth. It increases the ceiling for equity issuance,
                allowing the company to raise further capital and bring in new
                shareholders without amending the MOA repeatedly. The process
                requires a **Special Resolution** and filing **Form SH-7**
                within the statutory deadline.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Benefits of Increasing Capital
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
                Pre-Requisites for Capital Increase
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                The process varies slightly depending on whether you are
                increasing Authorized or Paid-up Capital:
              </p>

              <div className="space-y-4 mb-6 sm:mb-8">
                {/* Auth Capital */}
                <div className="p-4 rounded-xl bg-slate-700/60 border border-slate-600">
                  <h4 className="font-semibold text-green-300 mb-2 text-base sm:text-lg">
                    1️⃣ For Increase in Authorized Capital (MOA Amendment):
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {prerequisitesAuth.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-green-500 flex-shrink-0 mt-1"
                          strokeWidth={2}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Paid-up Capital */}
                <div className="p-4 rounded-xl bg-slate-700/60 border border-slate-600">
                  <h4 className="font-semibold text-green-300 mb-2 text-base sm:text-lg">
                    2️⃣ For Increase in Paid up Capital (Share Allotment):
                  </h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    {prerequisitesPaidUp.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-green-500 flex-shrink-0 mt-1"
                          strokeWidth={2}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-600">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Expand Capital & Fuel Your Growth
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Ensure compliant filing of Form SH-7, correctly calculate stamp
                duty, and legally update your capital structure to attract
                investment.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Capital Increase (Form SH-7)
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Capital Consultation
              </button>

              {/* Checklists - smaller text and icons */}
              <div className="mt-5 pt-5 border-t border-slate-600">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Timely Form SH-7 Filing (30 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Stamp Duty Calculation & Payment</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>MOA/AOA Amendment Drafting</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

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
                className="border border-slate-700 rounded-lg sm:rounded-xl overflow-hidden hover:border-green-500 transition-colors"
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
                      openFaq === i ? "rotate-180 text-green-500" : ""
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
