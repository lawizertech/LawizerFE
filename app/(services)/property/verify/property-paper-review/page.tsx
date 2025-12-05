"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Clock,
  ChevronDown,
  Scale,
} from "lucide-react";

export default function PropertyPaperReviewPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Detects Legal Risks Early: Identifies disputes, encumbrances, or ownership issues before buying.",
    },
    {
      icon: CheckCircle2,
      text: "Verifies Authenticity: Confirms that all property documents are genuine and properly executed.",
    },
    {
      icon: Clock,
      text: "Saves Time & Money: Avoids costly legal troubles or fraudulent deals later.",
    },
    {
      icon: Scale,
      text: "Ensures Compliance: Checks if your property follows all state and municipal regulations.",
    },
    {
      icon: Users,
      text: "Gives Legal Clarity: Helps you make confident property decisions with expert advice.",
    },
  ];

  const targetAudience = [
    "Homebuyers wanting to validate documents before purchase",
    "Real estate investors evaluating new properties",
    "Heirs or inheritors unsure of legal ownership",
    "Sellers wanting to ensure paperwork is in order",
    "Anyone seeking legal clarity on a property before any transaction",
  ];

  const faqs = [
    {
      q: "What does the Property Paper Review involve?",
      a: "Lawizer’s service connects you directly with expert real estate lawyers who carefully examine your documents—like title deeds, sale agreements, mutation papers, and tax receipts—and give you a clear oral consultation on the property’s legal status.",
    },
    {
      q: "Why is an early review important?",
      a: "It detects legal risks early, identifying disputes, encumbrances, or ownership issues before buying, which saves you time and avoids costly legal troubles or fraudulent deals later.",
    },
    {
      q: "What kind of documents are checked?",
      a: "The lawyers examine documents such as title deeds, sale agreements, mutation papers, and tax receipts.",
    },
    {
      q: "Do I get a written report?",
      a: "The service provides a clear oral consultation on the property's legal status.",
    },
    {
      q: "Is this service suitable for inherited property?",
      a: "Yes, this service is suitable for heirs or inheritors who are unsure of legal ownership.",
    },
  ];

  const primaryColor = "text-teal-600";
  const primaryBg = "bg-gradient-to-r from-teal-500 to-cyan-500";
  const primaryHoverBg = "bg-gradient-to-r from-teal-600 to-cyan-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-slate-100">
      {/* Header Section */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/propertyreview.png')] bg-cover bg-center opacity-10" />

        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-3xl sm:max-w-4xl px-4 sm:px-6 pt-16"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-teal-500 to-cyan-500 p-4 rounded-2xl">
                <FileText
                  className="w-12 sm:w-16 h-12 sm:h-16 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Property Paper Review & Consultation
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Connect directly with expert lawyers to examine your property
            documents and receive a **clear oral consultation** on the legal
            status and risks.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-cyan-300">
            Lawizer ensures your property papers are genuine, updated, and
            dispute-free before you make a move.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-cyan-500 rounded-full" />
                Why Property Paper Review is Important
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8 text-sm sm:text-base">
                Before buying or selling a property, it’s crucial to know
                whether your papers are legally sound. A thorough review can
                detect legal risks early and prevent fraudulent deals.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Legal Paper Review
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-gradient-to-br from-slate-50 to-teal-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon
                        className={`w-5 h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-600" />
                Who is this Service for?
              </h3>
              <div className="space-y-2 mb-8">
                {targetAudience.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 sm:p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-sm sm:text-slate-700">{p}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Know Your Documents
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Make confident property decisions with expert advice and
                complete legal clarity on your paperwork.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Paper Review
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-teal-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-teal-50 transition-colors"
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
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-slate-700 leading-relaxed">
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
