"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield, // Using Shield for consistency
  CheckCircle2, // Using CheckCircle2 for consistency
  ArrowRight,
  ChevronDown,
  Calendar, // Icon for due dates
  Scale, // Icon for legal compliance
  Clock, // Icon for penalties/time
  Users, // Icon for Private Limited Company
} from "lucide-react";

export default function RocReturnFilingPvtLtdPage() {
  const [openFaq, setOpenFaq] = useState(0); // State for FAQ Accordion

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
      text: "Boosts Confidence and Trust among stakeholders",
    },
    {
      icon: Clock,
      text: "Avoiding mandatory 'Strike Off' of the Company for non-filing",
    },
  ];

  const prerequisites = [
    "Auditor Report, Audited Balance Sheet & Profit and Loss Account",
    "Attendance of a minimum of 1 director for the AGM (or signing of minutes)",
    "Signature of a minimum of 1 director on the financials (Director's Report/Board Report)",
    "DIN of all Directors should be in APPROVED Status",
    "One valid Digital Signature (DSC) of a Director (for e-filing)",
  ];

  const deliverables = [
    "All filed e-forms with MCA (AOC-4, MGT-7, ADT-1)",
    "MCA payment challan for filing fees",
    "Auditor's Report and Audited Financial Statements",
    "Certificate of filing compliance",
  ];

  const faqs = [
    {
      q: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return?",
      a: "Yes. ROC return gives details of changes that have taken place in the company during the year and must be filed **even if the company has not done any business** during the year. Nil returns are mandatory.",
    },
    {
      q: "What Forms are to be filed for ROC Return?",
      a: "The mandatory annual forms are: **MGT-7** (Annual Return/Compliance), **AOC-4** (Financial Statements/Balance Sheet), and **ADT-1** (For Appointment/Reappointment of Auditors).",
    },
    {
      q: "What is the Annual Filing due date?",
      a: "A) The first annual filing is due on the **30th of December** of the next year from incorporation. B) Subsequent filings are due on the **30th of September** every year (based on the AGM date of September 30th).",
    },
    {
      q: "What is the Penalty for late filing of a Company ROC return?",
      a: "Late fees of **₹100 per day** apply on Form MGT-7 and AOC-4 until rectified. For Form ADT-1, penalties are steep, increasing from 2x up to **12x** the normal fee depending on the delay duration.",
    },
    {
      q: "Who is responsible for filing the Company ROC Return?",
      a: "It is the duty of the Company and its Directors to file the ROC Return, as both the Company and the Directors are liable for non-filing and associated penalties.",
    },
    {
      q: "What are the ROC Return Filing fees and charges?",
      a: "A company having an Authorized Capital up to ₹1 lakh is charged **₹300** for each Form AOC-4 and MGT-7. For companies with ₹5 lakh or more Authorized Capital, the charge is **₹400** per form.",
    },
  ];

  // Set primary color palette (using Blue/Purple theme for Formal Compliance)
  const primaryColor = "text-blue-500";
  const primaryBg = "bg-gradient-to-r from-blue-600 to-purple-600";
  const primaryHoverBg = "bg-gradient-to-r from-blue-700 to-purple-700";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/roc-return-filing.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-2xl">
                <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            ROC Annual Return Filing for Pvt Ltd
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Mandatory annual compliance for Private Limited Companies, involving
            timely filing of **AOC-4** (Financials) and **MGT-7** (Annual
            Return) to avoid heavy penalties.
          </p>
          <p className="mt-3 text-sm text-blue-300">
            Lawizer ensures compliance, handles audited financial statements,
            and timely filing under the Companies Act, 2013.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-900/50 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                The Importance of Timely Annual Filing
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                ROC Annual Filing is non-negotiable. Failure to file **Form
                AOC-4** (Financials) and **Form MGT-7** (Annual Return) by the
                deadline (September 30th) results in an uncapped, cumulative
                late fee of **₹100 per day per form**. This compliance step is
                crucial for maintaining 'Active' status and protecting
                Directors' DINs from disqualification.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Compliant Pvt Ltd Filing
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-700/50 border border-slate-600 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-slate-900 shadow-sm">
                      <b.icon
                        className={`w-5 h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-sm text-slate-200 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Prerequisites Section - New Style */}
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-yellow-500" />
                Pre-Requisites for Filing (AOC-4 & MGT-7)
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                The compliance documents and director statuses required for
                annual filing include:
              </p>
              <div className="space-y-3 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-1 text-slate-300"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-300 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              {/* Deliverables Section - New Style */}
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-900/50 border border-blue-800"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <p className="text-sm text-slate-200 font-medium">{d}</p>
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
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-600">
              <h3 className="text-xl font-bold text-white mb-3">
                Ensure Pvt Ltd Compliance: AOC-4 & MGT-7
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Meet the mandatory annual deadlines to avoid uncapped penalties
                and protect your Director DINs from disqualification.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-slate-900 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Pvt Ltd Return Filing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Compliance Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-600">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Timely Filing: AOC-4 & MGT-7</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Avoid ₹100/day Uncapped Penalty</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Director DIN Protection</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section - New Style with useState Accordion */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800 rounded-3xl p-8 shadow-xl shadow-slate-900/50 border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-700/60 hover:bg-slate-700 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>
                <div
                  // Dynamic height based on state for smooth accordion transition
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-slate-300 leading-relaxed whitespace-pre-line">
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
