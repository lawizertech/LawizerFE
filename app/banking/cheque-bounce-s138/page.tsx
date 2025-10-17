"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel, // Main icon for Criminal Law/Court
  ArrowRight,
  CheckCircle2,
  FileText,
  Clock, // For strict timelines
  Scale, // For legal debt
  ChevronDown,
} from "lucide-react";

export default function ChequeBounceS138Page() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Gavel,
      text: "Criminal Remedy for Debt Recovery: Section 138 is a criminal offense carrying possibility of imprisonment and heavy fines[cite: 36].",
    },
    {
      icon: Clock,
      text: "Faster, more effective mechanism for debt recovery than a lengthy civil suit[cite: 37].",
    },
    {
      icon: Scale,
      text: "The goal is to secure the principal amount, interest, and legal costs[cite: 38].",
    },
    {
      icon: FileText,
      text: "Securing the final court order/judgment and ensuring the recovery of the cheque amount, fine, and compensation[cite: 50].",
    },
  ];

  const preRequisites = [
    "Presentation & Dishonor: The cheque must be presented to the bank within its validity period (usually 3 months)[cite: 40].",
    "Legal Notice (Mandatory): The payee must send a formal written Legal Notice to the drawer demanding payment within 30 days of receiving the 'Cheque Return Memo'[cite: 41].",
    "15-Day Waiting Period: The drawer must fail to make the payment within 15 days of receiving the Legal Notice[cite: 42].",
    "Complaint Filing: A criminal complaint must be filed before the appropriate Magistrate's Court within 30 days from the expiry of the 15-day notice period[cite: 43].",
  ];

  const documentsRequired = [
    "Original Cheque that was dishonored[cite: 45].",
    "Original 'Cheque Return Memo' (bank memo stating the reason for the bounce)[cite: 46].",
    "Copy of the Legal Demand Notice sent to the drawer[cite: 47].",
    "Original Postal/Courier Receipt and Acknowledgement (proof that the drawer received the notice)[cite: 48].",
  ];

  const deliverables = [
    "Timely & Precise Legal Notice: Drafting and dispatching a legally compliant demand notice via Registered Post within the 30-day statutory limit[cite: 50].",
    "Complaint Drafting & Filing: Drafting and filing the criminal complaint under Section 138 before the jurisdictional Magistrate's Court within the strict 30-day window[cite: 50].",
    "Representation & Trial: Full representation during the trial, including the Complainant's Sworn Statement and cross-examination[cite: 50].",
    "Execution: Securing the final court order/judgment and ensuring the recovery of the cheque amount, fine, and compensation[cite: 50].",
  ];

  const faqs = [
    {
      q: "What is the basis for a Section 138 case?",
      a: "The criminal offense occurs when a cheque is dishonored primarily due to 'insufficient funds' or the amount 'exceeding the arrangement' with the bank. The cheque must have been issued for the discharge of a legally enforceable debt or liability[cite: 33, 34].",
    },
    {
      q: "What is the key benefit of filing a criminal case over a civil suit?",
      a: "Section 138 is a powerful deterrent because it is a criminal offense, carrying the possibility of imprisonment and heavy fines, which forces the drawer to take the matter seriously. It is a faster mechanism for debt recovery[cite: 36, 37].",
    },
    {
      q: "What is the strict timeline for legal notice?",
      a: "The payee must send a formal written Legal Notice to the drawer demanding payment within 30 days of receiving the 'Cheque Return Memo' from the bank[cite: 41].",
    },
    {
      q: "What must happen before I file the court complaint?",
      a: "You must wait for the drawer to fail to make the payment within 15 days of receiving the Legal Notice. Then, the criminal complaint must be filed within 30 days from the expiry of that 15-day notice period[cite: 42, 43].",
    },
  ];

  // Define a distinct color theme for criminal/enforcement
  const primaryColor = "text-purple-600";
  const primaryBg = "bg-gradient-to-r from-purple-600 to-indigo-600";
  const primaryHoverBg = "bg-gradient-to-r from-purple-700 to-indigo-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/bankinglegal.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl">
                <Gavel className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Cheque Bounce Cases (Section 138)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Filing a **criminal complaint** under the Negotiable Instruments Act to
            secure debt recovery when a cheque is dishonored due to insufficient
            funds[cite: 31, 33].
          </p>
          <p className="mt-3 text-sm text-indigo-300">
            We ensure strict adherence to timelines for the Legal Notice and filing the complaint before the Magistrate's Court[cite: 41, 43].
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
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full" />
                Why Section 138 is the Best Remedy for Debt
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Section 138 offers a robust criminal remedy that serves as a powerful deterrent, often resulting in quicker settlement than protracted civil suits. It allows the payee to secure the principal amount, interest, and legal costs[cite: 36, 37, 38].
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Gavel className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Criminal Proceedings
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-purple-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                Mandatory Legal Prerequisites (Strict Timelines)
              </h3>
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
                <FileText className="w-5 h-5 text-indigo-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-indigo-50/50 border border-indigo-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-indigo-600" />
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
                Start Your Debt Recovery
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure timely filing of the Legal Notice and the criminal complaint to meet the strict statutory deadlines.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  File Section 138 Case
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
                <h4 className="text-lg font-semibold text-white mb-2">Documents Required:</h4>
                <div className="text-slate-300 text-sm space-y-1">
                  <p>• Original Cheque & Return Memo [cite: 45, 46]</p>
                  <p>• Legal Demand Notice Copy [cite: 47]</p>
                  <p>• Postal Receipt & Acknowledgement [cite: 48]</p>
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-purple-50 transition-colors"
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