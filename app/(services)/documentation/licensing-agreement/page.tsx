"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, // Icon for Agreement
  ArrowRight,
  CheckCircle2,
  Shield,
  Scale,
  Gavel,
  ChevronDown,
} from "lucide-react";

export default function LicensingAgreementPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Protects IP rights and revenue ",
    },
    {
      icon: Scale,
      text: "Ensures enforceable usage terms ",
    },
    {
      icon: Gavel,
      text: "Drafting agreements with royalties, scope, and term definitions ",
    },
  ];

  const preRequisites = [
    "Licensor & licensee details ",
    "Scope of IP and royalties ",
    "Duration and special clauses ",
  ];

  const deliverables = [
    "Drafting agreements with royalties, scope, and term definitions ",
  ];

  const faqs = [
    {
      q: "What is a Licensing Agreement?",
      a: "It governs the licensing of intellectual property, technology, or products from one party (licensor) to another (licensee).",
    },
    {
      q: "Why is a Licensing Agreement important?",
      a: "It protects the licensor's IP rights and revenue by ensuring that the usage terms are clearly defined and legally enforceable.",
    },
    {
      q: "What details are crucial for the agreement?",
      a: "The agreement must clearly define the scope of the IP being licensed, the royalties or fees involved, and the duration of the license.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-red-600";
  const primaryBg = "bg-gradient-to-r from-red-600 to-pink-600";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-pink-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/businesslegal.png')] bg-cover bg-center opacity-10" />
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
                <FileText
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Licensing Agreement Drafting
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Governs the licensing of **intellectual property, technology, or
            products**, securing usage terms and revenue streams.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-pink-300 px-2">
            Lawizer drafts agreements with clear royalties, scope, and term
            definitions to ensure enforceable usage terms.
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
            <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
                Why a Licensing Agreement Protects Your IP
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                This document is essential for **monetizing your intellectual
                property** (IP) while retaining ownership. It establishes the
                limits of use and ensures you receive appropriate compensation
                (**royalties**).
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Protections & Benefits
              </h3>
              {/* Benefits Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-red-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                Pre-Requisites for Drafting
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To define the terms of the license, the following key details
                are required:
              </p>
              <div className="space-y-2 mb-6 sm:mb-8">
                {preRequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
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
                <Gavel className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {d}
                    </p>
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
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Monetize Your Intellectual Property
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Legally define the scope of use, royalties, and duration to
                ensure maximum protection and revenue from your technology or
                products.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Agreement Drafting
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Consultation
              </button>
            </div>
          </motion.aside>
        </div>

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
