"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gavel, // Icon for Registration/Official Process
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Home,
  Scale,
  ChevronDown,
} from "lucide-react";

export default function PropertyRegistrationPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Makes Property Registration Easy, Transparent & Legally Secure",
    },
    {
      icon: Gavel,
      text: "Ensures all government compliances are met",
    },
    {
      icon: Users,
      text: "Verifies ownership papers and checks stamp duty/registration charges",
    },
    {
      icon: Scale,
      text: "Ensures a smooth, legally valid transfer of ownership",
    },
    {
      icon: FileText,
      text: "Guidance through the entire process, from document drafting to final registration",
    },
  ];

  const prerequisites = [
    "Estimation of the property value",
    "Sale deed",
    "Payment of the stamp duty & registration charges",
    "Approach the Sub-Registrar for registration",
    "Documents submission",
    "Other documents as per the local requirements",
  ];

  const registrationProcedure = [
    "Documents must be submitted to the Sub-Registrar of Assurances whose jurisdiction the property is situated in.",
    "The authorised signatories for the seller and the purchaser must be present along with two witnesses for registration.",
    "Signatories must carry their proof of identity (Aadhaar Card, PAN Card, or other government-issued ID).",
    "Signatories representing someone else must furnish the power of attorney.",
    "Company representatives must carry adequate documents, like power of attorney/letter of authority, along with a copy of the board's resolution.",
    "You need to present the property card, original documents, and proof of stamp duty payment to the sub-registrar.",
    "The sub-registrar will verify if adequate stamp duty has been paid as per the ready reckoner.",
    "Witnesses must establish their identity and carry ID proofs and address proofs; their biometric identity will also be scanned.",
  ];

  const faqs = [
    {
      q: "What is the purpose of property registration?",
      a: "Property registration makes the transfer of ownership legally valid and enforceable. It is the formality of officially recording the transaction in government records.",
    },
    {
      q: "What is the difference between Stamp Duty and Registration Charge?",
      a: "Stamp duty is the tax you pay to the government for attaining legal ownership over an asset, while the registration charge is the fee to get this legal formality completed in the government records.",
    },
    {
      q: "What happens if stamp duty is deficient?",
      a: "If there is any deficit in the stamp duty, the registrar will refuse to register the documents.",
    },
    {
      q: "Are witnesses mandatory for registration?",
      a: "Yes, the authorised signatories for the seller and the purchaser must be present along with two witnesses for registration. Witnesses must also establish their identity.",
    },
    {
      q: "Does Lawizer assist with location-specific requirements?",
      a: "Yes. For example, if you’re registering a flat in Hyderabad’s Gachibowli area, Lawizer will verify your ownership papers, check charges, and ensure a smooth transfer.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-red-600";
  const primaryBg = "bg-gradient-to-r from-red-600 to-orange-600";
  const primaryHoverBg = "bg-gradient-to-r from-red-700 to-orange-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for red/orange theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-orange-500 p-4 rounded-2xl">
                <Gavel
                  className="w-16 h-16 text-white"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Property Registration (Sale Deed Registration)
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Register your property safely and hassle-free with **Lawizer's expert
            legal support**, from document verification to final submission at the
            Sub-Registrar office.
          </p>
          <p className="mt-3 text-sm text-orange-300">
            Lawizer — Making Property Registration Easy, Transparent & Legally Secure.
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
                Key Benefits of Lawizer's Registration Support
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                We guide you through the mandatory legal process of recording your
                ownership, ensuring all legal and financial requirements are correctly
                met for a smooth and legitimate transfer.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Service Highlights
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
                      <b.icon className={`w-5 h-5 ${primaryColor}`} strokeWidth={2} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-green-600" />
                Procedure of Property Registration
              </h3>
              <div className="space-y-3 mb-8">
                {registrationProcedure.map((p, i) => (
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
                Tentative Pre-Requisites
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {prerequisites.map((d, i) => (
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
                Register Your Property Securely
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure a smooth and legally valid transfer of ownership with our
                expert guidance through documentation and compliance.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Registration Process
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
                  <span>Expert Legal Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Preparation and Verification of Sale Deed</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Guidance on Stamp Duty & Charges</span>
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