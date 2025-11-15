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
  Users, // Icon for Private Limited Company
} from "lucide-react";

export default function ClosureOfPvtLtdPage() {
  const [openFaq, setOpenFaq] = useState(0); // State for FAQ Accordion

  // Structured content to match the new card design
  const benefits = [
    {
      icon: Scale,
      text: "Removes legal hassles and avoids continuing non-compliance",
    },
    {
      icon: Shield,
      text: "Protects directors from future penalties and liabilities",
    },
    {
      icon: CheckCircle2,
      text: "Formal closure frees the company from all statutory obligations",
    },
    {
      icon: Building2,
      text: "Stops unnecessary financial losses (audit/filing fees)",
    },
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Annual ROC Return Filings should be up to date",
    "Company should be inoperative for more than 2 consecutive financial years (or 1 year for FTE)",
    "Bank Account of the Company should be closed and Statement of Accounts prepared",
    "Latest filed Income Tax Returns, Indemnity Bond, and Affidavit prepared",
    "DIN of all Directors should be in ‘APPROVED’ status",
    "One valid Digital Signature (DSC) of an existing Director",
  ];

  const deliverables = [
    "All filed e-forms with MCA (e.g., Form STK-2)",
    "MCA payment challan for closure fees",
    "Company Closure Certificate (Confirmation of Striking Off)",
    "Drafted Indemnity Bond and Affidavit documents",
    "Board and Shareholder Resolution for voluntary closure",
  ];

  const faqs = [
    {
      q: "What is Closure of Company?",
      a: "When the existence of a Private Limited Company as a legal entity comes to an end, it is known as closure of the company. This is typically achieved via the Striking Off or Winding Up process.",
    },
    {
      q: "What is the difference between Closure, Winding up, and Dissolution?",
      a: "Closure is voluntary under Fast Track Exit (FTE). Winding up may be voluntary or court-ordered with a liquidator. Dissolution is the final legal termination of a company, often initiated by the court.",
    },
    {
      q: "Why is ROC filing required for Closure?",
      a: "Even if business stops, the company remains legally active until ROC approves closure (STK-2). Filing ensures removal from MCA records and exemption from further annual compliance filings, avoiding penalties.",
    },
    {
      q: "What is Fast Track Exit (FTE) Scheme?",
      a: "An MCA initiative for simplified and faster voluntary closure of inoperative companies (Pvt Ltd) by filing Form STK-2.",
    },
    {
      q: "Which companies are eligible for Closure under FTE?",
      a: "Any Private Limited Company (not Section 8) that has been inoperative for over **one year** since incorporation or one year prior to the application can apply for closure.",
    },
    {
      q: "What are the costs involved in Closing a Company?",
      a: "ROC filing fee for Form STK-2: **₹10,000**. Notary & Stamp Paper charges may vary (approx. ₹1,200 – ₹1,500).",
    },
    {
      q: "What documents are required for Closure?",
      a: "Application for striking off, Board Resolution, Special Resolution (Shareholders), Director’s Affidavit, Indemnity Bond, and Statement of Assets & Liabilities.",
    },
    {
      q: "What is the time limit to file Closure documents with ROC?",
      a: "Form STK-2 must be filed with the ROC office within **30 days** from the date of signing the Statement of Assets & Liabilities.",
    },
  ];

  // Set primary color palette (using Warning Orange/Red/Yellow theme for a dark background)
  const primaryColor = "text-red-500";
  const primaryBg = "bg-gradient-to-r from-red-600 to-yellow-500";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-yellow-600";

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('/closurelegal.jpg')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-yellow-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-yellow-500 p-4 rounded-2xl">
                <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Closure of Private Limited Company
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Formally dissolve your non-operational Private Limited Company by
            striking its name off the ROC records via **Form STK-2** (FTE).
          </p>
          <p className="mt-3 text-sm text-yellow-300">
            Lawizer ensures your company closure is compliant with the Companies
            Act, 2013, handling all statutory forms and resolutions.
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
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-yellow-500 rounded-full" />
                The Importance of Legal Closure (FTE)
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                The **Fast Track Exit (FTE)** route via **Form STK-2** is the
                simplified way to close a non-operational Private Limited
                Company. Failure to formally close means mandatory annual
                filings continue (incurring heavy fines), and the Directors
                remain liable. Legal striking off removes all future compliance
                burdens and protects the directors.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Formal Company Closure
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
                Pre-Requisites for Striking Off (Form STK-2)
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                To apply for FTE under Form STK-2, ensure the following
                eligibility and documentation requirements are met:
              </p>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-700 transition-colors"
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
                Finalize Company Closure & Protect Directors
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Legally end your company's existence via the FTE scheme and free
                directors from all future compliance risks and liabilities.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-slate-900 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Company Closure (Form STK-2)
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book FTE Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-600">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Timely Form STK-2 Filing (30 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Directors' Liability Ended</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Resolutions & Affidavit Drafting</span>
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
                className="border border-slate-700 rounded-xl overflow-hidden hover:border-red-500 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-700/60 hover:bg-slate-700 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-yellow-500" : ""
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
