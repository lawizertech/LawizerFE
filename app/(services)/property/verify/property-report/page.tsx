"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";

export default function PropertyReportPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    { icon: Shield, text: "A safe investment in property." },
    {
      icon: CheckCircle2,
      text: "No fear of any hidden litigation or loan on the property.",
    },
    { icon: Clock, text: "Peace of mind at the convenience of your home." },
    { icon: Users, text: "Transact with complete confidence." },
  ];

  const processSteps = [
    "Upload/Email all the documents on our portal or it can be picked up from your address.",
    "A detailed review of all the documents by a Senior property Lawyer (200-300 pages).",
    "Verifying property details with Government records (if required).",
    "Creating a continuity of the property paper trail and identifying missing papers.",
    "Creating a detailed verification report with senior property lawyer’s observations.",
    "After the report, you get a dedicated time slot with the lawyer to clarify all doubts.",
    "All this is completed within 5 days.",
  ];

  const faqs = [
    {
      q: "What does the Property Report uncover?",
      a: "Ownership records, title clarity, encumbrances, government approvals, and pending disputes.",
    },
    {
      q: "Why is the report process thorough?",
      a: "Detailed review by Senior property Lawyer + verification with Government records to create a complete paper trail.",
    },
    {
      q: "How long does it take to get the report?",
      a: "The entire process is completed within 5 days.",
    },
    {
      q: "Is there consultation after the report?",
      a: "Yes, a dedicated session with the senior property lawyer to explain the report.",
    },
    {
      q: "Does Lawizer check for RERA approval?",
      a: "Yes, reports verify whether the property is RERA-approved, free from legal issues, and fully compliant.",
    },
  ];

  const primaryColor = "text-indigo-600";
  const primaryBg = "bg-gradient-to-r from-indigo-600 to-blue-600";
  const primaryHoverBg = "bg-gradient-to-r from-indigo-700 to-blue-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[55vh] sm:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/propertyreport.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 sm:px-6 py-8 sm:py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4 sm:mb-6 pt-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-blue-500 p-3 sm:p-4 rounded-2xl">
                <Home
                  className="w-6 sm:w-16 h-6 sm:h-16 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-white tracking-tight">
            Verified Property Report
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-2">
            Make every property deal safe and stress-free with Lawizer's
            Verified Property Report.
          </p>
          <p className="text-xs sm:text-sm text-blue-300">
            Lawizer — Legal clarity for every property.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              {/* Why Report */}
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" />
                Why You Need a Property Search Report
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-8">
                Our detailed reports uncover ownership records, title clarity,
                encumbrances, government approvals, and pending disputes.
              </p>

              {/* Benefits */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon
                        className={`w-5 h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Process */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                The Verification Process (within 5 days)
              </h3>
              <div className="space-y-3 mb-8">
                {processSteps.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 mt-2" />
                    <p className="text-sm sm:text-base text-slate-700">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sticky Aside */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit w-full"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Consult Lawizer for Free
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
                Know Your Property Before You Buy It. Invest smartly,
                confidently, and with complete legal assurance.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Get Your Property Report
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Free Consultation
              </button>
            </div>
          </motion.aside>
        </div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
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
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-indigo-50 transition-colors text-sm sm:text-base"
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
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-700 leading-relaxed text-sm sm:text-base">
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
