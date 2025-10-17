"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users, // Main icon for Disputes/Harassment
  ArrowRight,
  CheckCircle2,
  FileText,
  Shield,
  Scale,
  ChevronDown,
} from "lucide-react";

export default function LoanAdvanceDisputesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Reputation and Future Credit: Compelling the bank to issue a no-dues certificate and rectify CIBIL errors[cite: 21].",
    },
    {
      icon: Scale,
      text: "Stop Harassment: Legal action forces the bank to cease all illegal recovery practices immediately[cite: 22].",
    },
    {
      icon: CheckCircle2,
      text: "Securing compensation for financial loss, costs incurred, and emotional distress[cite: 30].",
    },
    {
      icon: Users,
      text: "Drafting a petition seeking a mandatory injunction to rectify the CIBIL record[cite: 28].",
    },
  ];

  const preRequisites = [
    "Formal Complaint: Detailed written complaint to the bank/NBFC's Nodal Officer and the CEO (for harassment cases)[cite: 24].",
    "Documentary Proof: Copies of the loan agreement, payment receipts, credit information reports (CIBIL/Equifax), and evidence of harassment (call recordings, WhatsApp messages, police complaints if any)[cite: 25].",
    "Waiting Period: Must wait for 30 days for the bank's response before escalating[cite: 26].",
  ];

  const deliverables = [
    "Legal Strategy & Petition: Drafting a petition for the Consumer Commission or the RBI Ombudsman[cite: 28].",
    "Notice to Credit Bureaus: Issuing notices to CIBIL and other bureaus along with the bank[cite: 29].",
    "Compensation: Securing compensation for financial loss and emotional distress[cite: 30].",
  ];

  const faqs = [
    {
      q: "What constitutes a CIBIL/Credit Score dispute?",
      a: "Disputes over incorrect or erroneous reporting of loan status (e.g., 'Settled' shown as 'Written Off' or 'Defaulter') which severely damages the consumer's creditworthiness[cite: 17].",
    },
    {
      q: "What is considered harassment by recovery agents?",
      a: "Cases involving coercive, intimidating, or inappropriate behavior by the bank's internal or external Recovery Agents, in violation of RBI's Fair Practices Code[cite: 18].",
    },
    {
      q: "Why is fixing CIBIL errors so important?",
      a: "An incorrect CIBIL score can cripple a consumer's ability to get future loans (home, car, education). Filing a case compels the bank to rectify the error and restore financial reputation[cite: 20, 21].",
    },
    {
      q: "Where is the legal complaint filed?",
      a: "We draft a petition for the Consumer Commission or the RBI Ombudsman[cite: 28].",
    },
  ];

  // Define a distinct color theme for disputes
  const primaryColor = "text-red-600";
  const primaryBg = "bg-gradient-to-r from-red-600 to-orange-600";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-orange-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/bankinglegal.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-orange-500 p-4 rounded-2xl">
                <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Loan & Advance Disputes (CIBIL Errors & Harassment)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legal remedy for **incorrect credit reporting (CIBIL)** and action
            against **coercive or intimidating harassment** by recovery
            agents[cite: 17, 18].
          </p>
          <p className="mt-3 text-sm text-orange-300">
            We restore your financial reputation and compel banks to cease
            illegal recovery practices immediately[cite: 21, 22].
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
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                Why Filing a Case is Crucial
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Legal action is the most effective way to compel a bank to
                rectify severe errors in CIBIL reports, which can otherwise
                cripple your future borrowing capability. It also serves as a
                critical defense against illegal harassment by recovery
                agents[cite: 20, 22].
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Legal Action
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-red-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <FileText className="w-5 h-5 text-purple-600" />
                Pre-requisites for Filing a Case
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                You must establish a clear paper trail before escalating the
                dispute:
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
                <Scale className="w-5 h-5 text-blue-600" />
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
                Restore Your Financial Integrity
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Take mandatory legal steps to rectify CIBIL errors and secure
                compensation for harassment and mental trauma.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start CIBIL Rectification Case
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-red-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-red-50 transition-colors"
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
