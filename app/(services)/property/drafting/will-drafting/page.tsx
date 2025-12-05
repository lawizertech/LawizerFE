"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Gavel,
  ChevronDown,
} from "lucide-react";

export default function WillDraftingPage() {
  const [openFaq, setOpenFaq] = useState(-1);

  const benefits = [
    {
      icon: CheckCircle2,
      text: "Ensures your property is inherited according to your wishes",
    },
    {
      icon: Users,
      text: "Prevents family disputes over asset distribution",
    },
    {
      icon: Gavel,
      text: "Legally enforceable when properly registered",
    },
    {
      icon: Shield,
      text: "Drafted to be clear, legally valid, and compliant under Indian law",
    },
  ];

  const prerequisites = [
    "Details of assets & beneficiaries",
    "Personal details of the testator (name, age, address, ID)",
    "Witness details for signing",
  ];

  const deliverables = [
    "Professionally drafted Will",
    "Clause-wise explanation",
    "Digital copy & registration guidance",
  ];

  const faqs = [
    {
      q: "What is the purpose of a Will?",
      a: "A Will ensures your assets are distributed according to your wishes after your lifetime, providing legal clarity to your intentions.",
    },
    {
      q: "Is it mandatory to register a Will?",
      a: "Registration is not compulsory, but highly advisable as a registered Will is stronger legally and avoids future disputes.",
    },
    {
      q: "What kind of assets can be included in a Will?",
      a: "All movable and immovable assets, including property, bank accounts, shares, jewellery, and personal belongings.",
    },
    {
      q: "Who is the Testator?",
      a: "The Testator is the person who makes the Will, stating how their assets should be distributed.",
    },
    {
      q: "Does Lawizer assist beyond drafting?",
      a: "Yes, Lawizer helps with drafting and guides you through the registration process.",
    },
  ];

  const primaryColor = "text-pink-600";
  const primaryBg = "bg-gradient-to-r from-pink-600 to-red-600";
  const primaryHoverBg = "bg-gradient-to-r from-pink-700 to-red-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-slate-100">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center text-center min-h-[55vh] md:min-h-[65vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/estateplanning.png')] bg-cover bg-center opacity-10" />

        <div className="absolute top-1/4 left-1/4 w-56 h-56 md:w-96 md:h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-96 md:h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6 py-12"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500">
                <Heart className="w-12 h-12 md:w-16 md:h-16 text-white" />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Will Drafting & Estate Planning
          </h1>
          <p className="text-sm md:text-lg text-slate-300 leading-relaxed">
            Ensure your assets are distributed exactly as you wish, preventing
            disputes and maintaining family harmony.
          </p>
          <p className="mt-3 text-xs md:text-sm text-red-300">
            Lawizer helps you draft a legally valid Will with registration
            guidance.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-100">
              {/* WHY WILL */}
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-7 bg-gradient-to-b from-pink-500 to-red-500 rounded-full" />
                Importance of Drafting a Will
              </h2>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-8">
                A Will ensures your legacy is safely passed on according to your
                wishes, protecting your beneficiaries and preventing legal
                disputes.
              </p>

              {/* BENEFITS */}
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Heart className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-pink-50 border border-slate-100"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon className={`w-5 h-5 ${primaryColor}`} />
                    </div>
                    <p className="text-sm text-slate-700 leading-snug">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* PRE-REQUISITES */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Pre-Requisites
              </h3>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 hover:bg-slate-50 rounded-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm text-slate-700">{p}</p>
                  </div>
                ))}
              </div>

              {/* DELIVERABLES */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-blue-600" />
                What You Receive
              </h3>

              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-100 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <p className="text-sm text-slate-700">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDEBAR */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Plan Your Estate with Clarity
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Create a clear, legally compliant Will to secure your assets and
                protect your loved ones.
              </p>

              <button
                className={`w-full px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg hover:shadow-xl transition-all mb-3`}
              >
                Start Will Drafting
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700 space-y-3">
                {[
                  "Prevents Family Disputes",
                  "Legally Valid & Enforceable",
                  "Guidance for Registration",
                ].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 text-slate-300 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 md:p-8 mt-12 shadow-xl border border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 hover:border-pink-300 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="font-semibold text-slate-900 pr-4 text-sm md:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all ${
                    openFaq === i ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-4 md:px-5 pb-5 text-slate-700 text-sm leading-relaxed">
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
