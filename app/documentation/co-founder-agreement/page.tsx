"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, // Icon for Founders/Partners
  ArrowRight,
  CheckCircle2,
  Shield,
  FileText,
  Gavel, // For legal advisory
  ChevronDown,
} from "lucide-react";

export default function CoFounderAgreementPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Gavel,
      text: "Prevents conflicts among founders [cite: 314]",
    },
    {
      icon: CheckCircle2,
      text: "Clarifies ownership, contributions, and decision-making rights [cite: 315]",
    },
    {
      icon: Shield,
      text: "Protects business continuity and investment [cite: 316]",
    },
    {
      icon: FileText,
      text: "Defines roles, equity, responsibilities, profit-sharing, and exit mechanisms [cite: 313]",
    },
  ];

  const preRequisites = [
    "Founder details, roles, and equity distribution [cite: 320]",
    "Decision-making mechanisms and exit clauses [cite: 321]",
    "Contributions (monetary, intellectual property, or assets) [cite: 322]",
  ];

  const deliverables = [
    "Drafting agreements tailored for your startup structure [cite: 317]",
    "Guidance on equity, roles, and governance clauses [cite: 318]",
    "Legal advisory for potential disputes [cite: 319]",
  ];

  const faqs = [
    {
      q: "What is a Co-founder Agreement?",
      a: "It is a legal contract among startup founders that defines roles, equity, responsibilities, profit-sharing, decision-making, and exit mechanisms[cite: 313].",
    },
    {
      q: "Why is a Co-founder Agreement crucial?",
      a: "It prevents conflicts among founders and is key to clarifying ownership, contributions, and decision-making rights, thereby protecting business continuity[cite: 314, 315, 316].",
    },
    {
      q: "What sensitive topics does the agreement cover?",
      a: "The agreement formally clarifies contributions (monetary, intellectual property, or assets), equity distribution, and what happens when a founder decides to leave (exit mechanisms)[cite: 313, 321, 322].",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-indigo-600";
  const primaryBg = "bg-gradient-to-r from-indigo-600 to-purple-600";
  const primaryHoverBg = "bg-gradient-to-r from-indigo-700 to-purple-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/businesslegal.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-indigo-500 to-purple-500 p-4 rounded-2xl">
                <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Co-founder Agreement Drafting
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legal contract defining **roles, equity, responsibilities, and exit
            mechanisms** to secure your startup's foundation and prevent conflicts
            [cite: 313, 314].
          </p>
          <p className="mt-3 text-sm text-purple-300">
            Lawizer drafts agreements tailored for your startup structure, guiding
            on equity, roles, and governance clauses[cite: 317, 318].
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full" />
                Why a Co-founder Agreement is Crucial
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                For a startup, clarity among founders is the primary safeguard.
                This agreement formalizes contributions (IP/monetary) and ownership,
                which is vital for attracting future investment[cite: 315, 316].
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Protections & Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon className={`w-5 h-5 ${primaryColor}`} strokeWidth={2} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Pre-Requisites for Drafting
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To draft an accurate legal contract, the following crucial details
                are required:
              </p>
              <div className="space-y-2 mb-8">
                {preRequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-blue-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <p className="text-sm text-slate-700 font-medium">{d}</p>
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
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Build on a Solid Partnership
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Define the future of your startup clearly by formalizing the
                partnership, equity, and decision-making today.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Co-founder Drafting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Legal Advisory
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-indigo-50 transition-colors"
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
                  <p className="px-5 pb-5 text-slate-700 leading-relaxed">
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