"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, // Main icon for Agreement/Contract
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Home,
  Gavel,
  Scale, // Used for legal compliance
  ChevronDown,
} from "lucide-react";

export default function AgreementToSaleDraftingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Users,
      text: "Legally Binds Both Parties (Buyer & Seller)",
    },
    {
      icon: FileText,
      text: "Defines Clear Terms (Price, Schedule, Possession)",
    },
    {
      icon: Shield,
      text: "Protects Buyer's Rights against transfer or mortgage",
    },
    {
      icon: Shield,
      text: "Protects Seller's Interest against payment default",
    },
    {
      icon: Home,
      text: "Lays Foundation for a Smooth Property Transaction",
    },
    {
      icon: Scale,
      text: "Essential Base Document for Final Sale Deed Registration",
    },
  ];

  const keyElements = [
    "Parties Involved (Names, Addresses, Details of buyer and seller)",
    "Description of the Property (Location, Size, Type, ID features)",
    "Sale Price and Payment Terms (Agreed price and schedule)",
    "Possession Date (When the buyer will take possession)",
    "Conditions Precedent and Subsequent (Conditions to be fulfilled before/after sale)",
    "Represenations and Warranties (Seller's warranty on title, authority, and absence of encumbrances)",
    "Indemnity Clause (Seller indemnifies buyer for losses due to title defects)",
    "Dispute Resolution (Clause outlining how disputes will be resolved)",
    "Termination Clause (Conditions and consequences of contract termination)",
  ];

  // Deliverables are inferred from the process descriptions for drafting and review
  const deliverables = [
    "Professionally Drafted Agreement to Sale",
    "Legally Valid and Precise Document",
    "Protection of Buyer and Seller Interests",
    "Clause-wise Explanation for complete clarity",
    "Digital Copy ready for printing on stamp paper",
    "Guidance on Stamp Paper Value (as prescribed by the state government)",
  ];

  const faqs = [
    {
      q: "What is an Agreement to Sale?",
      a: "An Agreement to Sale is the first legal step before a Sale Deed. It defines the mutual terms between the buyer and seller, such as price, payment schedule, possession date, and conditions for final transfer. It safeguards both parties and establishes the foundation for the final transaction.",
    },
    {
      q: "Is an Agreement to Sale the same as a Sale Deed?",
      a: "No. The Agreement to Sale is a promise to transfer the property in the future, establishing the terms and conditions. The Sale Deed is the final legal document that officially transfers ownership immediately. The Agreement to Sale acts as the base document for the final Sale Deed registration.",
    },
    {
      q: "Why is a proper Agreement to Sale important?",
      a: "It legally binds both parties, preventing last-minute cancellations or disputes. It clearly defines all terms, protects the buyer from the seller transferring or mortgaging the property elsewhere, and provides the seller security against payment default.",
    },
    {
      q: "Does Lawizer draft the Agreement to Sale based on the location of the property (e.g., Kolkata vs. Hyderabad)?",
      a: "Yes. Lawizer ensures the Agreement to Sale is precise, legally valid, and tailored to the specific property and transaction, keeping state-specific nuances in mind.",
    },
    {
      q: "What is the process for drafting the agreement?",
      a: "The process involves three steps: 1) Lawyer discusses property details and requirements with you. 2) Lawyer drafts the agreement after initial discussion. 3) The Sale Agreement is printed on a non-judicial stamp paper of the value prescribed by the state government.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-orange-600";
  const primaryBg = "bg-gradient-to-r from-red-500 to-orange-500";
  const primaryHoverBg = "bg-gradient-to-r from-red-600 to-orange-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for orange/red theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-orange-500 to-yellow-500 p-4 rounded-2xl">
                <FileText className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Agreement to Sale Drafting
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            The critical **first legal step** defining mutual terms (price,
            schedule, possession) to safeguard buyer and seller interests before
            the final property transfer.
          </p>
          <p className="mt-3 text-sm text-yellow-400">
            Lawizer ensures your agreement is precise, legally valid, and fully
            protects your investment.
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
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full" />
                Why You Need a Proper Agreement to Sale
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                An **Agreement to Sale** (or Agreement to Sell) is vital because
                it's the documented commitment that precedes the final sale. It
                prevents last-minute disputes and ensures clarity on the most
                important aspects of the deal: **price, payment schedule, and
                possession date**.
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
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-orange-50/50 border border-slate-100 hover:shadow-md transition-shadow"
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
                <Gavel className="w-5 h-5 text-purple-600" />
                Key Elements to Check
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                When drafting or reviewing your agreement, ensure all these
                crucial legal clauses are clearly addressed:
              </p>
              <div className="space-y-2 mb-8">
                {keyElements.map((p, i) => (
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
                <FileText className="w-5 h-5 text-blue-600" />
                What Lawizer Delivers
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
                Draft Your Agreement Today
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Secure your transaction with an agreement drafted by expert
                property lawyers specializing in local laws (e.g., Kolkata,
                Howrah, Rajarhat).
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Agreement Drafting
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Property Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Customized for Your Transaction</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Expert Legal Drafting</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Fast & Hassle-Free Process</span>
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
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-orange-50 transition-colors"
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
