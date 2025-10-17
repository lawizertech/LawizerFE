"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart, // Main icon for Gift/Voluntary Transfer
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Scale, // Used for legal compliance
  ChevronDown,
  Home,
} from "lucide-react";

export default function GiftDeedDraftingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Scale,
      text: "Legal ownership transfer without monetary exchange",
    },
    {
      icon: Shield,
      text: "Protects donor and donee rights",
    },
    {
      icon: FileText,
      text: "Essential for property registration and mutation",
    },
    {
      icon: Users,
      text: "Formalizes voluntary transfer of assets",
    },
    {
      icon: Home,
      text: "Secures the transaction for family members (e.g., gifting a flat)",
    },
    {
      icon: CheckCircle2,
      text: "Ensures the deed is legally valid and registered",
    },
  ];

  const prerequisites = [
    "Donor and donee details (name, address, ID)",
    "Property/asset details (address, type, area)",
    "Consent and signature of donor",
    "Supporting Documents (Original title deed, tax receipts, and ID proofs)",
  ];

  const deliverables = [
    "Drafted and registered Gift Deed",
    "Clause-wise explanation",
    "Digital copy",
    "Step-by-step guidance for registration",
    "Legally valid deed that protects both donor and donee rights",
  ];

  const faqs = [
    {
      q: "What is a Gift Deed?",
      a: "A Gift Deed transfers ownership of property or assets voluntarily from the donor (giver) to the donee (receiver) without any monetary consideration (money changing hands).",
    },
    {
      q: "Is registration of a Gift Deed mandatory?",
      a: "Yes, for immovable property (like a house or land), the Gift Deed must be registered with the Sub-Registrar's office to be legally valid and effective. Registration is also essential for property mutation.",
    },
    {
      q: "What is the stamp duty on a Gift Deed?",
      a: "Stamp duty for a Gift Deed varies significantly from state to state and depends on the relationship between the donor and donee. Many states offer rebates or lower duties if the property is gifted to close family members.",
    },
    {
      q: "Can a Gift Deed be revoked?",
      a: "Generally, a Gift Deed, once validly executed and registered, cannot be revoked unless there is a specific clause in the deed allowing for revocation under certain conditions, or if the gift was made under fraud, undue influence, or coercion. Mutual consent is often required.",
    },
    {
      q: "Why use Lawizer for Gift Deed drafting?",
      a: "Lawizer ensures the deed is legally valid, properly registered, and protects both donor and donee rights, handling all legal nuances (e.g., for gifting a flat in Rajarhat, Kolkata).",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-red-500";
  const primaryBg = "bg-gradient-to-r from-red-500 to-pink-500";
  const primaryHoverBg = "bg-gradient-to-r from-red-600 to-pink-600";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for red/pink theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-pink-500 p-4 rounded-2xl">
                <Heart className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Gift Deed Drafting & Registration
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legally transfer ownership of your property or assets to a family
            member **voluntarily and without monetary exchange**, ensuring the
            transfer is valid and secure.
          </p>
          <p className="mt-3 text-sm text-pink-300">
            Lawizer ensures your Gift Deed is legally compliant and registered
            to secure the ownership transfer.
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
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-pink-500 rounded-full" />
                Importance of a Registered Gift Deed
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A Gift Deed is the official instrument used for gifting
                property. Registration is mandatory for immovable assets to
                ensure the transfer is legally enforceable, updating land
                records, and preventing future disputes among heirs.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Heart className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Using a Gift Deed
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
                <FileText className="w-5 h-5 text-orange-600" />
                Pre-Requisites Required for Drafting
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To prepare your legally sound Gift Deed, please gather the
                following information:
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
                <Home className="w-5 h-5 text-blue-600" />
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
                Transfer Ownership Safely
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure your voluntary property transfer is legally sound,
                registered, and protects both the donor and donee.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Gift Deed Drafting
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
                  <span>Legally Valid & Registered Deed</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Protects Donor and Donee Rights</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Step-by-Step Registration Guidance</span>
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
