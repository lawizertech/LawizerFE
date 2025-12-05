"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  Shield,
  FileText,
  Gavel,
  ChevronDown,
  Home,
} from "lucide-react";

export default function RelinquishmentDeedPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Gavel,
      text: "Legally transfers ownership rights of a co-owner's share to another party",
    },
    {
      icon: Users,
      text: "Prevents future disputes by clearly recording the intention to relinquish ownership",
    },
    {
      icon: FileText,
      text: "Essential for registration to update land/property records with local authorities",
    },
    {
      icon: Shield,
      text: "Supports inheritance & partition cases, helping in family property settlements",
    },
    {
      icon: CheckCircle2,
      text: "Protects interests of all parties by ensuring clarity and consent of all co-owners",
    },
  ];

  const prerequisites = [
    "Details of the relinquishing party: Name, address, PAN/Aadhaar, relationship with other owners",
    "Details of the beneficiary: Name, address, PAN/Aadhaar, and relation",
    "Property details: Address, type (flat/house/plot), area, and ownership shares",
    "Supporting documents: Original sale deed/title deed, property tax receipts, and ID proofs of all parties",
    "Mutual consent: All co-owners must agree and sign the deed",
  ];

  const deliverables = [
    "Legally drafted relinquishment deed compliant with local property laws",
    "Clause-wise explanation so all parties understand the transfer of ownership",
    "Digital copy & editable version ready for printing, signing, and registration",
    "Step-by-step registration guidance for sub-registrar office",
    "Expert legal support to clarify doubts and ensure smooth execution",
  ];

  const faqs = [
    {
      q: "What is a Relinquishment Deed?",
      a: "A Relinquishment Deed is a legal document used when a co-owner of a property voluntarily gives up their share in favor of another co-owner or family member.",
    },
    {
      q: "Is a Relinquishment Deed mandatory for family property transfer?",
      a: "Yes, it is required to legally transfer a co-owner’s share and update property records.",
    },
    {
      q: "Can a co-owner relinquish their share in favor of a non-family member?",
      a: "Yes. But such transfers may be treated as sale or gift depending on the case, affecting stamp duty.",
    },
    {
      q: "Does Lawizer help with registration?",
      a: "Yes. Lawizer provides complete guidance for the registration process.",
    },
    {
      q: "What documents are required to draft the deed?",
      a: "Details of all parties, ownership information, original title documents, and property-related papers.",
    },
  ];

  const primaryColor = "text-indigo-600";
  const primaryBg = "bg-gradient-to-r from-indigo-600 to-blue-600";
  const primaryHoverBg = "bg-gradient-to-r from-indigo-700 to-blue-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-slate-100">
      {/* HERO */}
      <section className="relative flex items-center justify-center text-center min-h-[60vh] md:min-h-[70vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 py-10"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-br from-indigo-500 to-blue-500 p-4 rounded-2xl">
              <Users className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Relinquishment Deed Drafting
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto">
            Legally transfer a co-owner's share in a property{" "}
            <strong>voluntarily</strong> to another co-owner or family member.
          </p>
          <p className="mt-3 text-xs md:text-sm text-blue-300">
            Professionally drafted. Legally compliant. Hassle-free.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-blue-500 rounded-full" />
                Why a Relinquishment Deed Is Important
              </h2>

              <p className="text-slate-700 mb-6 text-sm md:text-base leading-relaxed">
                Used mainly in inheritance or partition cases, this deed removes
                ambiguity and prevents future conflicts by formalizing the
                transfer of shares.
              </p>

              {/* BENEFITS */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Users className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-indigo-50/50 border hover:shadow-md"
                  >
                    <div className="p-2 bg-white shadow-sm rounded-lg">
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
                Prerequisites
              </h3>

              <div className="space-y-3 mb-10">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-xs md:text-sm text-slate-700">{p}</p>
                  </div>
                ))}
              </div>

              {/* DELIVERABLES */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-red-600" />
                What You Receive
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                    <p className="text-xs md:text-sm text-slate-700 font-medium">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-white text-lg md:text-xl font-bold mb-3">
                Ensure Smooth Property Transfer
              </h3>

              <p className="text-slate-300 text-xs md:text-sm mb-6 leading-relaxed">
                Proper documentation prevents confusion and protects all parties
                legally.
              </p>

              <button
                className={`w-full group relative px-5 py-3 md:px-6 md:py-4 rounded-xl font-semibold text-sm md:text-base ${primaryBg} text-white shadow-lg hover:shadow-xl mb-3`}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Deed Drafting
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition" />
                </span>
              </button>

              <button className="w-full px-5 py-3 md:px-6 md:py-4 rounded-xl font-semibold text-sm md:text-base bg-white/10 text-white border border-white/20 hover:bg-white/20">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3 text-slate-300 text-xs md:text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Compliant with Local Laws
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Minimizes Future Disputes
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Registration Assistance
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-indigo-300 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-slate-50 hover:bg-indigo-50"
                >
                  <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 md:w-5 md:h-5 text-slate-600 transition ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all overflow-hidden ${
                    openFaq === i
                      ? "max-h-40 opacity-100 p-4 md:p-5"
                      : "max-h-0 opacity-0 p-0"
                  }`}
                >
                  <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
