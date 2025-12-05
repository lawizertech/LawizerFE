"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Scale,
  ChevronDown,
  Home,
} from "lucide-react";

export default function PowerOfAttorneyDraftingPage() {
  const [openFaq, setOpenFaq] = useState<number>(-1);

  const benefits = [
    {
      icon: Users,
      text: "Authorizes another person to act legally on your behalf ",
    },
    {
      icon: Shield,
      text: "Protects your interests in property, banking, or business transactions ",
    },
    {
      icon: Scale,
      text: "Prevents misuse with clear powers and limitations ",
    },
    {
      icon: Home,
      text: "Ensures the POA protects your interests and is valid under local laws (e.g., West Bengal) ",
    },
    {
      icon: FileText,
      text: "Professionally drafted, legally compliant, and clearly outlines powers and responsibilities ",
    },
  ];

  const prerequisites = [
    "Principal and attorney details (name, address, ID proofs)",
    "Scope of powers (financial, property, general, or specific)",
    "Property or asset details (if applicable)",
  ];

  const deliverables = [
    "Drafted POA document with legal clauses",
    "Clause-wise explanation",
    "Digital copy & guidance for notarization/registration",
  ];

  const faqs = [
    {
      q: "What is a Power of Attorney (POA)?",
      a: "A Power of Attorney is a legal document that authorizes a person (attorney) to act on behalf of another (principal) in financial, property, or legal matters.",
    },
    {
      q: "Why is a POA important for property matters?",
      a: "If you cannot be physically present, a POA allows the attorney to execute property transactions legally on your behalf.",
    },
    {
      q: "What is the difference between a General and a Special POA?",
      a: "A General POA grants broad authority, while a Special POA limits the attorney to specific acts or transactions.",
    },
    {
      q: "Is registration of a POA necessary?",
      a: "A registered POA is legally enforceable and accepted by government and financial institutions.",
    },
    {
      q: "What details are required to draft a POA?",
      a: "You need details and ID proofs of both the principal and the attorney, plus the specific powers being granted.",
    },
  ];

  const primaryColor = "text-yellow-600";
  const primaryBg = "bg-gradient-to-r from-yellow-500 to-orange-500";
  const primaryHoverBg = "bg-gradient-to-r from-yellow-600 to-orange-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-100">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mb-6 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 blur-xl opacity-50 rounded-2xl" />
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-2xl">
                <Gavel className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Power of Attorney (POA) Drafting
          </h1>

          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            A crucial legal document that authorizes a trusted person to act on
            your behalf in{" "}
            <strong>financial, property, or legal matters</strong>.
          </p>

          <p className="mt-3 text-xs md:text-sm text-yellow-300">
            Lawizer drafts your POA professionally, with full legal clarity.
          </p>
        </motion.div>
      </section>

      {/* CONTENT GRID */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* LEFT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                Importance of a Clear Power of Attorney
              </h2>

              <p className="text-sm md:text-base text-slate-700 mb-8 leading-relaxed">
                A well-drafted POA is vital when the principal cannot be present
                or needs assistance managing their affairs. It prevents misuse
                and ensures legal protection.
              </p>

              {/* BENEFITS */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className={`w-5 h-5 ${primaryColor}`} />
                Key Protections & Benefits
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon className={`w-5 h-5 ${primaryColor}`} />
                    </div>
                    <p className="text-xs md:text-sm text-slate-700 font-medium">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* PREREQUISITES */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Pre-Requisites Required for Drafting
              </h3>

              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-xs md:text-sm text-slate-700">{p}</p>
                  </div>
                ))}
              </div>

              {/* DELIVERABLES */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-blue-600" />
                Lawizer Deliverables
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-100"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <p className="text-xs md:text-sm text-slate-700">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                Authorize with Confidence
              </h3>

              <p className="text-xs md:text-sm text-slate-300 mb-6">
                Ensure the authorized person can act legally and effectively.
              </p>

              <button
                className={`w-full px-6 py-4 text-sm md:text-base rounded-xl font-semibold ${primaryBg} text-white`}
              >
                Start POA Drafting
              </button>

              <button className="w-full px-6 py-4 mt-3 rounded-xl text-sm md:text-base font-semibold bg-white/10 text-white border border-white/20">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700 space-y-2">
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Customized Scope of Powers
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Registration & Notarization Guidance
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Complete Legal Clarity
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-xl">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="p-5 w-full flex justify-between text-left bg-slate-50 hover:bg-yellow-50"
                >
                  <span className="font-semibold text-sm md:text-base text-slate-900">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === i && (
                  <p className="px-5 pb-5 text-xs md:text-sm text-slate-700">
                    {f.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
