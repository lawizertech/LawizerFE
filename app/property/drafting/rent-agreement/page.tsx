"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart, // Main icon for Estate Planning
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Gavel,
  ChevronDown,
} from "lucide-react";

export default function WillDraftingPage() {
  const [openFaq, setOpenFaq] = useState(0);

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
      a: "While registration of a Will is not compulsory under Indian law, it is highly advisable as a registered Will is legally enforceable and helps prevent disputes among family members later.",
    },
    {
      q: "What kind of assets can be included in a Will?",
      a: "A Will can cover all types of assets, including residential properties (like a flat in New Town, Kolkata), financial assets, investments, and personal belongings.",
    },
    {
      q: "Who is the Testator?",
      a: "The Testator is the person making and executing the Will, detailing how their assets should be distributed upon their demise.",
    },
    {
      q: "Does Lawizer assist with the process beyond drafting?",
      a: "Yes. Lawizer helps draft a clear, legally valid Will and guides you through the registration process under Indian law.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-pink-600";
  const primaryBg = "bg-gradient-to-r from-pink-600 to-red-600";
  const primaryHoverBg = "bg-gradient-to-r from-pink-700 to-red-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-pink-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/estateplanning.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for pink/red theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-pink-500 to-red-500 p-4 rounded-2xl">
                <Heart className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Will Drafting & Estate Planning
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ensure your assets are distributed exactly according to your wishes
            after your lifetime, **preventing family disputes and ensuring legal
            enforceability**.
          </p>
          <p className="mt-3 text-sm text-red-300">
            Lawizer helps draft a clear, legally valid Will and guides you
            through registration under Indian law.
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
                <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-red-500 rounded-full" />
                Importance of Drafting a Will
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A Will is an act of responsibility that secures your legacy and
                provides peace of mind to your loved ones. It dictates the
                distribution of your property, protecting your beneficiaries and
                preventing disputes under succession laws.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Heart className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of a Lawizer Will
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-pink-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <FileText className="w-5 h-5 text-orange-600" />
                Pre-Requisites Required for Drafting
              </h3>
              <p className="text-700 leading-relaxed mb-4">
                To draft your Will, please provide the following necessary
                details:
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
                Plan Your Estate with Clarity
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Draft a clear and legally sound Will to ensure your property and
                assets are managed exactly as you intend after your lifetime.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Will Drafting
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
                  <span>Prevents Future Family Disputes</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Legally Valid & Enforceable</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Guidance for Registration</span>
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-pink-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-pink-50 transition-colors"
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
