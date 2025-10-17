"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, // Main icon for Commercial property
  ArrowRight,
  CheckCircle2,
  Users,
  Shield,
  FileText,
  Scale, // Used for legal compliance
  ChevronDown,
  Gavel,
} from "lucide-react";

export default function CommercialLeaseAgreementPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Legal Protection: Clearly defines rights and obligations of landlord and tenant",
    },
    {
      icon: Users,
      text: "Avoids Disputes: Covers key areas like rent, deposits, maintenance, and renewal",
    },
    {
      icon: Scale,
      text: "Compliance with Local Laws: Ensures adherence to West Bengal tenancy and commercial regulations",
    },
    {
      icon: Gavel,
      text: "Proof in Case of Conflict: Serves as legal evidence in courts or tribunals",
    },
    {
      icon: FileText,
      text: "Customizable Terms: Allows special clauses for business requirements (e.g., signage, utilities, renovations)",
    },
    {
      icon: Building2,
      text: "Minimizes Risks and Protects Business Investment",
    },
  ];

  const prerequisites = [
    "Landlord Details: Name, address, PAN (if applicable), contact info",
    "Tenant Details: Name, business registration, PAN, contact info",
    "Property Details: Address, type of commercial property (shop, office, warehouse), area in sq. ft.",
    "Lease Terms: Rent, security deposit, maintenance charges, lease duration, notice period, renewal terms",
    "Special Clauses (Optional): Subleasing, signage rights, utilities, or renovation permissions",
  ];

  const deliverables = [
    "Legally Drafted Commercial Lease Agreement tailored for your property and transaction",
    "Clause-wise Explanation so both parties understand their rights and obligations",
    "Digital Copy & Editable Version ready for printing, signing, or notarization",
    "Guidance for Registration under West Bengal property laws (if applicable)",
    "Expert Legal Consultation to clarify doubts or review modifications",
  ];

  const faqs = [
    {
      q: "What is a Commercial Lease Agreement?",
      a: "A Commercial Lease Agreement legally defines the terms between a landlord and tenant for commercial properties, such as offices, shops, warehouses, or retail spaces. It covers rent, security deposit, lease duration, and maintenance responsibilities.",
    },
    {
      q: "How is a commercial lease different from a residential rent agreement?",
      a: "Commercial leases are typically more complex, longer in duration, and include specialized clauses relating to business operations, signage, renovations, subleasing, and zoning compliance, tailored specifically for the business's needs.",
    },
    {
      q: "Why should I choose Lawizer for my commercial lease drafting?",
      a: "Lawizer provides expert legal drafting created by lawyers specializing in West Bengal commercial property law. Our agreements are customized for your specific business type (office, shop, warehouse) and offer end-to-end support from drafting to registration guidance.",
    },
    {
      q: "Does the agreement cover complex terms like renewal and exit clauses?",
      a: "Yes. The Commercial Lease Agreement covers rent, security deposit, lease duration, maintenance responsibilities, renewal, and exit terms, ensuring comprehensive protection for both parties.",
    },
    {
      q: "Do I need to register my Commercial Lease Agreement?",
      a: "Registration requirements depend on the lease duration and local laws. Lawizer provides guidance for registration under West Bengal property laws (if applicable) to ensure the agreement is legally enforceable.",
    },
  ];

  // Set primary color palette
  const primaryColor = "text-purple-600";
  const primaryBg = "bg-gradient-to-r from-purple-600 to-indigo-600";
  const primaryHoverBg = "bg-gradient-to-r from-purple-700 to-indigo-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/commerciallegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs (adjusted for purple/indigo theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-500 p-4 rounded-2xl">
                <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Commercial Lease Agreement
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Legally define the terms for your **office, shop, or warehouse**
            lease with a document tailored to protect your business interests
            and minimize future disputes.
          </p>
          <p className="mt-3 text-sm text-purple-300">
            Lawizer ensures your commercial lease is professionally drafted and
            fully compliant with West Bengal laws.
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
                Importance of a Proper Commercial Lease
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A robust Commercial Lease Agreement is the backbone of your
                business operation, establishing clear rules on rent, duration,
                and responsibilities. It is crucial for minimizing risks and
                protecting your business investment.
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
                <FileText className="w-5 h-5 text-green-600" />
                Pre-Requisites Required from You
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To draft your Commercial Lease Agreement efficiently, please
                provide the following details:
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
                <Building2 className="w-5 h-5 text-red-600" />
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
                Draft Your Commercial Lease
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Secure your business location with an agreement drafted by
                experts specializing in West Bengal commercial property law.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Commercial Drafting
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
                  <span>Tailored for Offices, Shops, and Warehouses</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Transparent & Quick Online Process</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>End-to-End Legal Support</span>
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
