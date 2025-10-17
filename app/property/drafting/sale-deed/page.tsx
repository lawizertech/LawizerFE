"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText, // Main icon for Deed/Contract
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  Home,
  Gavel,
  ChevronDown,
} from "lucide-react";

export default function SaleDeedDraftingPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Gavel,
      text: "Legal Ownership Proof: Acts as the ultimate evidence of property ownership",
    },
    {
      icon: Users,
      text: "Protects Buyer & Seller: Clearly defines terms to avoid future disputes",
    },
    {
      icon: CheckCircle2,
      text: "Ensures Legal Compliance: Meets all requirements under the Indian Registration Act and Transfer of Property Act",
    },
    {
      icon: Shield,
      text: "Secures Your Investment: Prevents fraud, misrepresentation, and hidden liabilities",
    },
    {
      icon: FileText,
      text: "Mandatory for Registration: A well-drafted deed ensures smooth property registration without legal hurdles",
    },
  ];

  const draftingProcess = [
    "STEP 1: Understanding property details and requirement: Lawyer will discuss this with you.",
    "STEP 2: Drafting of the Agreement: Lawyer will draft your sale deed after an initial discussion.",
    "STEP 3: Printing of Sale Agreement: The Sale Deed shall be printed on a non-judicial stamp paper of the value as prescribed by the state government.",
  ];

  const whyChooseLawizer = [
    "Expert Legal Drafting: Crafted by professional property lawyers experienced in Indian real estate law.",
    "Customized for You: Every Sale Deed is tailored to your specific property and transaction.",
    "Complete Legal Clarity: We explain every clause so you know exactly what you’re signing.",
    "End-to-End Support: From drafting to registration — all under one roof.",
    "Fast & Hassle-Free Process: Get your Sale Deed drafted online with quick turnaround and transparent pricing.",
  ];

  const faqs = [
    {
      q: "What is a Sale Deed?",
      a: "A Sale Deed is the final legal document that officially transfers ownership of a property from the seller to the buyer. It defines the rights, terms, and responsibilities of both parties, making it the most crucial step in any property transaction.",
    },
    {
      q: "How does a Sale Deed differ from an Agreement to Sale?",
      a: "The Agreement to Sale is a preliminary contract setting the terms, while the Sale Deed is the final instrument that executes the actual transfer of ownership. Registration is compulsory for the Sale Deed.",
    },
    {
      q: "Is stamp paper mandatory for the Sale Deed?",
      a: "Yes. The Sale Deed must be printed on a non-judicial stamp paper of the value prescribed by the state government for it to be legally valid and registrable.",
    },
    {
      q: "Why is legal compliance important when drafting the Sale Deed?",
      a: "A compliant Sale Deed meets all requirements under the Indian Registration Act and Transfer of Property Act. This is necessary for official registration and secures your investment against fraud or hidden liabilities.",
    },
    {
      q: "Can Lawizer help if I am buying or selling property in different cities?",
      a: "Yes. Lawizer ensures your Sale Deed is perfectly drafted, legally compliant, and completely secure, whether you're buying a flat in Gurugram's Sector 56 or selling a plot in Hyderabad's Madhapur.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-purple-600";
  const primaryBg = "bg-gradient-to-r from-purple-600 to-violet-600";
  const primaryHoverBg = "bg-gradient-to-r from-purple-700 to-violet-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for purple/violet theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-500 to-violet-500 p-4 rounded-2xl">
                <FileText className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Sale Deed Drafting
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Drafting the final, most crucial legal document that officially
            **transfers property ownership** and secures your investment.
          </p>
          <p className="mt-3 text-sm text-violet-300">
            Lawizer ensures your Sale Deed is perfectly drafted, legally
            compliant, and completely secure.
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
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-violet-500 rounded-full" />
                Why a Properly Drafted Sale Deed is Important
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                The Sale Deed is the ultimate proof of your legal title and
                investment. Its accuracy is paramount for preventing legal
                disputes and ensuring a smooth property registration.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits
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
                <Gavel className="w-5 h-5 text-red-600" />
                The Drafting Process
              </h3>
              <div className="space-y-3 mb-8">
                {draftingProcess.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50 border border-red-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0 mt-2" />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Home className="w-5 h-5 text-teal-600" />
                Why Choose Lawizer?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyChooseLawizer.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-teal-50/50 border border-teal-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-teal-600" />
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
                Secure Your Final Property Transfer
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure your ownership is legally watertight with a perfectly
                drafted and compliant Sale Deed.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Sale Deed Drafting
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
                  <span>Expert Drafting by Property Lawyers</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Customized for Your Transaction</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>End-to-End Drafting to Registration Support</span>
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
