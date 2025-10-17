"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote, // Main icon for Banking
  ArrowRight,
  CheckCircle2,
  Shield, // For Zero-Liability
  FileText,
  Users, // For Ombudsman/Commission
  Clock, // For Timelines
  ChevronDown,
} from "lucide-react";

export default function DigitalBankingFraudPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Recovery of Loss: Enforcing RBI's 'zero-liability' and 'limited-liability' rules[cite: 4, 6].",
    },
    {
      icon: Users,
      text: "Full legal representation before the RBI Integrated Ombudsman or Consumer Commission[cite: 14].",
    },
    {
      icon: CheckCircle2,
      text: "Securing a full refund of the unauthorized debited amount and compensation for mental anguish[cite: 14].",
    },
    {
      icon: FileText,
      text: "Drafting a legally sound complaint citing relevant RBI circulars[cite: 12].",
    },
  ];

  const preRequisites = [
    "Report to Bank: Must file a formal written complaint with the bank immediately (within 3 days for zero-liability claims)[cite: 8].",
    "Police/Cyber Complaint: Filing an FIR/Cyber Complaint (highly recommended to establish facts)[cite: 9].",
    "Waiting Period: Must wait for 30 days after lodging the complaint with the bank for a response/resolution[cite: 10].",
  ];

  const deliverables = [
    "Document Preparation: Drafting a legally sound complaint for the RBI Ombudsman or Consumer Commission[cite: 12].",
    "Legal Notice: Issuing a final legal notice to the bank detailing the legal liability and demand for recovery[cite: 13].",
    "Representation: Full legal representation before the RBI Integrated Ombudsman or the appropriate Consumer Commission[cite: 14].",
  ];

  const faqs = [
    {
      q: "What types of fraud are covered by this service?",
      a: "These disputes involve financial losses due to scams (phishing, vishing, malware), unauthorized use of Debit/Credit Cards, or failed digital transactions (UPI/NEFT/RTGS) where the money is debited but not credited[cite: 3].",
    },
    {
      q: "What are the RBI's liability rules?",
      a: "The RBI enforces 'zero-liability' and 'limited-liability' rules. If the customer reports the fraud within a specified timeframe and has not been negligent, the bank is generally liable to compensate the loss[cite: 4, 5].",
    },
    {
      q: "When must I report the fraud to the bank?",
      a: "You must file a formal written complaint with the bank immediately, ideally within 3 days for zero-liability claims[cite: 8].",
    },
    {
      q: "Does Lawizer handle the Consumer Commission representation?",
      a: "Yes, we provide full legal representation before the RBI Integrated Ombudsman or the appropriate Consumer Commission to secure a full refund and compensation[cite: 14].",
    },
  ];

  // Define a distinct color theme for banking/finance
  const primaryColor = "text-blue-600";
  const primaryBg = "bg-gradient-to-r from-blue-600 to-cyan-600";
  const primaryHoverBg = "bg-gradient-to-r from-blue-700 to-cyan-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/bankinglegal.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-500 p-4 rounded-2xl">
                <Banknote className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Digital & Electronic Banking Fraud
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legal action to recover financial losses from **unauthorized transactions**
            (phishing, card fraud, failed digital payments) using RBI guidelines[cite: 3].
          </p>
          <p className="mt-3 text-sm text-cyan-300">
            We enforce the RBI's "zero-liability" rules to secure your full refund and compensation[cite: 4, 14].
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
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
                Why Legal Action is Necessary for Recovery
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Filing a case is often necessary to enforce the bank's liability, especially if they initially deny your claim. We utilize the RBI's clear directives on customer liability to compel compensation[cite: 6].
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Our Service
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <Clock className="w-5 h-5 text-orange-600" />
                Pre-requisites for Filing a Case
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                Strict adherence to these timelines and reporting requirements is mandatory to initiate a successful claim:
              </p>
              <div className="space-y-2 mb-8">
                {preRequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-cyan-50/50 border border-cyan-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-600" />
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
                Recover Your Lost Funds
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Start the formal recovery process now. We handle the legal filing
                and representation to get your unauthorized debited amount refunded.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Recovery Case
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-blue-50 transition-colors"
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