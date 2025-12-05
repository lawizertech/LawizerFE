"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory,
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Scale,
  ChevronDown,
  Clock,
} from "lucide-react";

export default function JointDevelopmentAgreementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const benefits = [
    {
      icon: Users,
      text: "Protects Rights of Landowner & Developer (Ownership, Profit-sharing, Responsibilities)",
    },
    {
      icon: Shield,
      text: "Prevents Disputes (Over construction delays, payments, or possession)",
    },
    {
      icon: Scale,
      text: "Ensures Legal Compliance (With property, contract, and municipal laws)",
    },
    {
      icon: Clock,
      text: "Defines Project Timelines (Construction milestones, approvals, and handover schedules)",
    },
    {
      icon: FileText,
      text: "Supports Enforcement (Serves as evidence in case of legal disputes or breach of terms)",
    },
    {
      icon: Factory,
      text: "Secures your investment and clearly defines revenue share",
    },
  ];

  const prerequisites = [
    "Landowner Details: Name, address, PAN/Aadhaar, property documents",
    "Developer Details: Company registration, contact info, PAN, and prior project experience",
    "Property Details: Location, area, and land title proof",
    "Development Terms: Profit-sharing ratio, project timeline, construction standards, and approvals required",
    "Special Clauses (Optional): Penalties, dispute resolution, exit clauses, or guarantees",
  ];

  const deliverables = [
    "Legally Drafted Joint Development Agreement tailored for your property and project",
    "Clause-wise Explanation so both parties understand obligations and rights",
    "Digital Copy & Editable Version ready for signing and registration",
    "Guidance for Registration & Approvals under local laws",
    "Expert Legal Consultation to clarify terms and ensure smooth execution",
  ];

  const faqs = [
    {
      q: "What is a Joint Development Agreement (JDA)?",
      a: "A JDA is a legal contract between a landowner and a developer. It outlines the terms for developing a property, specifying rights, responsibilities, profit-sharing, timelines, and legal obligations.",
    },
    {
      q: "Why is a professionally drafted JDA essential?",
      a: "A JDA protects both parties by clearly defining profit-sharing, construction responsibilities, and timelines. It prevents conflicts and acts as legal evidence if disputes arise.",
    },
    {
      q: "What should a landowner look for in a JDA?",
      a: "Clear revenue share terms, developer responsibilities, timelines for government approvals, and strong dispute resolution clauses.",
    },
    {
      q: "Are JDAs suitable for both commercial and residential projects?",
      a: "Yes. Lawizer drafts customized JDAs for residential, commercial, and mixed-use developments, ensuring compliance with relevant laws.",
    },
    {
      q: "What is Lawizer's role in the JDA process?",
      a: "Lawizer offers expert drafting, consultation, and end-to-end guidance on registration and government approvals.",
    },
  ];

  const primaryColor = "text-green-600";
  const primaryBg = "bg-gradient-to-r from-teal-500 to-green-600";
  const primaryHoverBg = "bg-gradient-to-r from-teal-600 to-green-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100">
      {/* HERO */}
      <section className="relative flex items-center justify-center text-center min-h-[60vh] sm:min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/developmentlegal.png')] bg-cover bg-center opacity-10" />

        {/* floating lights */}
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-4 sm:px-6 py-10 sm:py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0], rotateY: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-teal-500 to-green-500 p-4 sm:p-6 rounded-2xl">
                <Factory
                  className="w-12 h-12 sm:w-16 sm:h-16 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Joint Development Agreement (JDA)
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto">
            A legal contract between a landowner and developer outlining
            responsibilities, profit-sharing, and timelines for property
            development.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-green-300">
            Lawizer ensures your JDA is professionally drafted and legally
            sound.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100">
              {/* WHY */}
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-slate-900 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-green-500 rounded-full" />
                Why a Joint Development Agreement is Crucial
              </h2>

              <p className="text-sm sm:text-base text-slate-700 mb-8 leading-relaxed">
                The JDA governs the entire lifecycle of a development project,
                ensuring legal clarity on revenue sharing, approvals,
                construction timelines, and rights of both parties.
              </p>

              {/* BENEFITS */}
              <h3 className="text-lg sm:text-xl font-semibold mb-5 text-slate-900 flex items-center gap-2">
                <Shield className={`w-5 h-5 sm:w-6 sm:h-6 ${primaryColor}`} />
                Key Protections & Benefits
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-green-50/50 border border-slate-100 hover:shadow-md transition"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${primaryColor}`}
                      />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 font-medium">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* PREREQUISITES */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                Pre-Requisites Required
              </h3>

              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <p className="text-sm sm:text-base text-slate-700">{p}</p>
                  </div>
                ))}
              </div>

              {/* DELIVERABLES */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                Lawizer Deliverables
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-600" />
                    <p className="text-sm sm:text-base font-medium text-slate-700">
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
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Secure Your Development Project
              </h3>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                Draft a legally strong JDA to ensure protection, clarity, and
                smooth execution.
              </p>

              <button
                className={`w-full px-6 py-4 rounded-xl font-semibold text-white shadow-lg ${primaryBg} hover:${primaryHoverBg} transition mb-3`}
              >
                <span className="flex items-center justify-center gap-2">
                  Start JDA Drafting
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 transition">
                Book Expert Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700 space-y-2">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Expert Drafting
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  Custom for Residential & Commercial
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
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
          className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-green-300 transition"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-green-50 transition"
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ${
                    openFaq === i ? "max-h-40 p-4 sm:p-5" : "max-h-0 p-0"
                  } overflow-hidden`}
                >
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
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
