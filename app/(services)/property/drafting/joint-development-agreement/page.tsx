"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Factory, // Icon for Development/Construction
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Scale, // Used for legal compliance
  ChevronDown,
  Clock, // For timelines
} from "lucide-react";

export default function JointDevelopmentAgreementPage() {
  const [openFaq, setOpenFaq] = useState(0);

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
      a: "A JDA is a legal contract between a landowner and a developer. It outlines the terms for developing a property (e.g., constructing residential or commercial buildings), specifying rights, responsibilities, profit-sharing, timelines, and legal obligations of both parties.",
    },
    {
      q: "Why is a professionally drafted JDA essential?",
      a: "A JDA protects both parties' interests by clearly defining profit-sharing, construction responsibilities, and timelines. It prevents conflicts over delays or payments and serves as critical evidence in case of any legal dispute or breach of terms.",
    },
    {
      q: "What should a landowner look for in a JDA?",
      a: "The landowner must ensure the agreement clearly defines the revenue share, the developer's construction responsibilities, the schedule for obtaining government approvals, and strong dispute resolution mechanisms.",
    },
    {
      q: "Are JDAs suitable for both commercial and residential projects?",
      a: "Yes. Lawizer drafts customized JDAs tailored for residential, commercial, or mixed-use projects, ensuring the agreement aligns with the project's specific nature and local development laws.",
    },
    {
      q: "What is Lawizer's role in the JDA process?",
      a: "Lawizer provides expert legal drafting by lawyers experienced in real estate and development laws. We offer end-to-end support, including drafting, consultation, and assistance with registration and approvals.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-green-600";
  const primaryBg = "bg-gradient-to-r from-teal-500 to-green-600";
  const primaryHoverBg = "bg-gradient-to-r from-teal-600 to-green-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/developmentlegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for green/teal theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-teal-500 to-green-500 p-4 rounded-2xl">
                <Factory className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Joint Development Agreement (JDA)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A precise legal contract between a **landowner and a developer**
            outlining profit-sharing, responsibilities, and timelines for
            property development.
          </p>
          <p className="mt-3 text-sm text-green-300">
            Lawizer ensures your JDA is professionally drafted, legally sound,
            and protects your interests throughout the project.
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
                <div className="w-1 h-8 bg-gradient-to-b from-teal-500 to-green-500 rounded-full" />
                Why a Joint Development Agreement is Crucial
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                The JDA is the foundational document for any property
                development project. It governs the entire lifecycle, providing
                legal clarity on revenue share, construction quality, and
                approval processes, thereby mitigating major financial and legal
                risks.
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
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-green-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <FileText className="w-5 h-5 text-yellow-600" />
                Pre-Requisites Required for Drafting
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To draft a JDA efficiently, please provide the following
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
                <Factory className="w-5 h-5 text-red-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-600" />
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
                Secure Your Development Project
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Draft a robust, customized JDA to ensure legal clarity,
                profit-sharing security, and protection for both landowner and
                developer.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start JDA Drafting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Expert Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Expert Drafting by Real Estate Lawyers</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Customized for Residential or Commercial Use</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>End-to-End Registration Assistance</span>
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-green-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-green-50 transition-colors"
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
