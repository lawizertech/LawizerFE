"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  UserMinus, // Main icon for Resignation/Exit
  FileText,
  CheckCircle2, // Using CheckCircle2 for style consistency
  ArrowRight,
  ChevronDown,
  Shield, // Using Shield for style consistency
  Calendar, // New icon for time limit/compliance
  Scale, // New icon for legal compliance
} from "lucide-react";

export default function ResignationOfDirectorPage() {
  const [openFaq, setOpenFaq] = useState(0); // State for FAQ Accordion

  // Structured content to match the new card design
  const benefits = [
    {
      icon: Shield,
      text: "Protects the resigning director from future penalties and liabilities",
    },
    {
      icon: Scale,
      text: "Ensures the company records are compliant under Companies Act, 2013",
    },
    {
      icon: UserMinus,
      text: "Creates an opportunity for the director to take up a new role/directorship",
    },
    {
      icon: CheckCircle2,
      text: "Boosts transparency and trust among all stakeholders",
    },
  ];

  const prerequisites = [
    "All prior forms relating to the appointment of the Director should have been filed",
    "DIN of minimum 1 Director should be in 'approved' status (to ensure quorum)",
    "One valid Digital Signature (DSC) of an existing Director (for company filing)",
    "Resignation Letter from the resigning Director must be submitted",
  ];

  const deliverables = [
    "All filed e-forms with MCA (DIR-12 filed by Company & DIR-11 filed by Director)",
    "MCA payment challan for filing fees",
    "Drafted Board Meeting Resolution and Minutes",
    "Drafted Resignation Acceptance Letter from the Company",
  ];

  const faqs = [
    {
      q: "What documents are required for director resignation?",
      a: `A) Documents required from Director:
Resignation Letter and proof of delivery to the company.

B) Documents required from Company:
Board Meeting Resolution for Resignation, Minutes, and Resignation Acceptance Letter. Lawizer assists in preparing and filing these with ROC (DIR-12 and DIR-11).`,
    },
    {
      q: "What is a Resignation Letter from Director?",
      a: "When a Director wishes to step down, they officially submit a written letter to the company informing them of their voluntary resignation, specifying the effective date.",
    },
    {
      q: "Which forms are to be filed for resignation of director?",
      a: "Form **DIR-12** is filed by the company (within 30 days of acceptance) and Form **DIR-11** is filed by the resigning director (within 30 days of resignation date) with the ROC.",
    },
    {
      q: "If there are only two directors, can one resign?",
      a: "No. The company must maintain the minimum required number of directors (two for a Pvt Ltd). A new additional director must be appointed first, after which the resignation can proceed.",
    },
    {
      q: "Is there any liability after resignation?",
      a: "The resigning director remains liable only for non-compliance and actions during their tenure, but is explicitly not liable for any company actions or non-compliance occurring after the effective date of resignation.",
    },
    {
      q: "Difference between Resignation and Removal of Director?",
      a: "Resignation is **voluntary** — initiated by the director. Removal is **involuntary** — initiated by the company against the director’s will, requiring a Special Notice and Ordinary Resolution.",
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
        <div className="absolute inset-0 bg-[url('/resignation-director.jpg')] bg-cover bg-center opacity-10" />

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
                <UserMinus className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Resignation of Director & ROC Filing
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ensure the **voluntary resignation** of a Director is legally
            executed, protecting both the Director (DIR-11) and the Company
            (DIR-12) from future liabilities and penalties.
          </p>
          <p className="mt-3 text-sm text-blue-300">
            Lawizer handles the Board Resolution, acceptance, and timely filing
            of both mandatory forms under the Companies Act, 2013.
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
                The Importance of Formal Compliance
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                A Director's resignation requires dual compliance: the Company
                must file **DIR-12** (within 30 days of acceptance) and the
                resigning Director must file **DIR-11** (within 30 days of
                resignation). Failing to file DIR-11 leaves the director's name
                on the records and exposed to non-compliance penalties. A
                correctly executed process formally ends the director's
                statutory liabilities.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of a Compliant Resignation
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
                Pre-Requisites for Resignation Filing
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                To ensure a smooth and timely filing process, the following
                documents and statuses are required:
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
                Ensure a Seamless & Liability-Free Exit
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                We handle both the company's (DIR-12) and the director's
                (DIR-11) filing requirements to guarantee full legal protection
                post-resignation.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-slate-900 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Resignation Filing (DIR-11 & DIR-12)
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
                  <span>Dual Filing: DIR-11 & DIR-12</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Resignation Acceptance Drafting</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Director's Liability Cleared</span>
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
