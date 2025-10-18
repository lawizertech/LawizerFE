"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel, // Icon for Legal Authorization
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
  const [openFaq, setOpenFaq] = useState(0);

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
    "Principal and attorney details (name, address, ID proofs) ",
    "Scope of powers (financial, property, general, or specific) ",
    "Property or asset details (if applicable) ",
  ];

  const deliverables = [
    "Drafted POA document with legal clauses ",
    "Clause-wise explanation ",
    "Digital copy & guidance for notarization/registration ",
  ];

  const faqs = [
    {
      q: "What is a Power of Attorney (POA)?",
      a: "A Power of Attorney is a legal document that authorizes a person (attorney) to act on behalf of another (principal) in financial, property, or legal matters.",
    },
    {
      q: "Why is a POA important for property matters?",
      a: "If you cannot be physically present, a POA allows the attorney to execute property transactions, such as selling your flat or managing assets, legally on your behalf.",
    },
    {
      q: "What is the difference between a General and a Special POA?",
      a: "A General POA grants broad authority across various matters, while a Special POA limits the attorney to specific acts or transactions, such as signing documents for a single property sale.",
    },
    {
      q: "Is registration of a POA necessary?",
      a: "A registered POA is legally enforceable and accepted by government and financial institutions. Lawizer guides you through registration requirements to ensure the POA is valid for property matters.",
    },
    {
      q: "What details are required to draft a POA?",
      a: "You need to provide the details and ID proofs of both the principal and the attorney, along with a clear scope outlining the specific powers being granted (e.g., financial, property, general, or specific).",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-yellow-600";
  const primaryBg = "bg-gradient-to-r from-yellow-500 to-orange-500";
  const primaryHoverBg = "bg-gradient-to-r from-yellow-600 to-orange-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for yellow/orange theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-2xl">
                <Gavel
                  className="w-16 h-16 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Power of Attorney (POA) Drafting
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A crucial legal document that authorizes a trusted person to act on
            your behalf in **financial, property, or legal matters**.
          </p>
          <p className="mt-3 text-sm text-yellow-300">
            Lawizer drafts your POA professionally, legally compliant, and with
            clear powers and responsibilities.
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
                <div className="w-1 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full" />
                Importance of a Clear Power of Attorney
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A well-drafted POA is vital when the principal cannot be present
                or needs assistance managing their affairs. It ensures their interests
                are legally protected and prevents potential misuse of authority.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Gavel className={`w-5 h-5 ${primaryColor}`} />
                Key Protections & Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-yellow-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                Pre-Requisites Required for Drafting
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To prepare your legally sound Power of Attorney, please gather the
                following information:
              </p>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
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
                <Home className="w-5 h-5 text-blue-600" />
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
                Authorize with Confidence
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure the person you authorize can act effectively, and your
                interests remain protected, with a legally secure POA.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start POA Drafting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Customized Scope of Powers</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Guidance for Registration & Notarization</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Complete Legal Clarity</span>
                </div>
              </div>
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-yellow-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-yellow-50 transition-colors"
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