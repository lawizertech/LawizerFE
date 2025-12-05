"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  Building2,
  ChevronDown,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function StartupIndiaRegistrationPage() {
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: FileText,
      text: "DPIIT Recognition Certificate (Digital)",
    },
    {
      icon: Shield,
      text: "Eligibility for 100% Income Tax Exemption (3 consecutive years out of first 10)",
    },
    {
      icon: TrendingUp,
      text: "Up to 80% rebate on patent filing fees and 50% rebate on trademark filing fees",
    },
    {
      icon: Building2,
      text: "Self-certification for compliance under Labour and Environmental Laws",
    },
    {
      icon: Users,
      text: "Access to ₹10,000 crore Fund of Funds (via VCs)",
    },
    {
      icon: Shield,
      text: "Angel Tax Exemption (Section 56)",
    },
    {
      icon: TrendingUp,
      text: "Fast-tracked company exit within 90 days",
    },
    {
      icon: FileText,
      text: "Relaxation in public procurement norms and government tenders",
    },
  ];

  const prerequisites = [
    "Company Age: Less than 10 years old from incorporation date",
    "Company Type: Must be a Private Limited, LLP, or Registered Partnership Firm",
    "Annual Turnover: Should not exceed ₹100 Crore in any financial year",
    "Innovation: Must be innovating or improving products, services, or processes",
    "Original Entity: Should not be formed by splitting or reconstructing an existing business",
    "Certificate of Incorporation/Registration Certificate",
    "Company/LLP/Firm PAN Card",
    "Pitch Deck or brief write-up on business innovation & scalability",
    "Details of Directors/Partners (PAN/Aadhaar)",
    "Authorization Letter",
  ];

  const deliverables = [
    "DPIIT Recognition Certificate",
    "Confirmation of Eligibility for Startup Benefits",
    "Access to Startup India Portal Dashboard",
  ];

  const faqs = [
    {
      q: "How much time does Startup India Registration take?",
      a: "DPIIT usually issues the certificate within 2 working days after submission of the complete online application and documents.",
    },
    {
      q: "Will my company be eligible for Tax exemption?",
      a: "Yes. After getting Startup India Recognition, you can apply separately for tax exemption under Section 80IAC.",
    },
    {
      q: "Is commercial office space required for Startup India registration?",
      a: "No. You can use your residential or rented address as your registered office.",
    },
    {
      q: "Is the Startup India certificate valuable?",
      a: "Absolutely. It helps you gain recognition, government benefits, funding access, and credibility as an innovative startup.",
    },
    {
      q: "Is Startupwala connected with the Startup India programme?",
      a: "No. Startupwala is a private advisory company and not an official representative of the government scheme.",
    },
    {
      q: "What are the Government fees for Startup India Recognition?",
      a: "There are no Government fees. The Startup India recognition process is completely free.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-[#0e172b] via-[#121f3c] to-[#0e172b]">
        <div className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center opacity-10" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#c92c41]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-[#4c3df7]/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c92c41] to-[#e99b2b] rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-[#c92c41] to-[#e99b2b] p-3 rounded-xl sm:p-4">
                <Rocket
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Startup India Registration
            <span className="block mt-1 text-2xl md:text-4xl bg-gradient-to-r from-[#e99b2b] to-[#c92c41] bg-clip-text text-transparent">
              (DPIIT Recognition)
            </span>
          </h1>
          <p className="text-sm md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
            Get officially recognized under the Startup India initiative —
            unlock **tax benefits**, **funding access**, and faster compliance
            for your venture.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA - Adjusted for mobile
       * px-4 instead of px-6
       * py-10 instead of py-16
       */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Grid Layout - Stacked on small screens */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* PRIMARY CONTENT CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#c92c41] to-[#e99b2b] rounded-full" />
                Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                **Startup India Registration** provides official **DPIIT
                Recognition** to eligible startups under the Government of
                India’s flagship programme. This recognition brings access to
                tax exemptions, simplified compliance, IPR rebates, and
                government funding support, all aimed at driving **innovation**
                and job creation.
              </p>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#c92c41]" />
                Key Benefits
              </h3>
              {/* Benefits Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-orange-50/40 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-1 sm:p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                      <b.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#c92c41]"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug pt-0.5">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-[#4c3df7]" />
                Prerequisites
              </h3>
              {/* Prerequisites List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[#e99b2b]"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#4c3df7]" />
                What You'll Receive
              </h3>
              {/* Deliverables Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4c3df7] flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            // No sticky on mobile, better for scrolling
            className="lg:sticky lg:top-24 h-fit"
          >
            {/* ASIDE CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-gradient-to-br from-[#0e172b] to-[#121f3c] rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Ready to Get DPIIT Recognition?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Apply for Startup India recognition or book a free consultation
                with our experts today.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button className="w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-gradient-to-r from-[#c92c41] to-[#e99b2b] text-white shadow-lg shadow-[#c92c41]/30 hover:shadow-xl hover:shadow-[#e99b2b]/40 transition-all duration-300 mb-3">
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Apply for Recognition
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Consultation
              </button>

              {/* Checklists - smaller text and icons */}
              <div className="mt-5 pt-5 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#e99b2b]" />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#e99b2b]" />
                  <span>Expert Legal Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#e99b2b]" />
                  <span>2 Days Completion</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section - Adjusted for mobile
         * p-6 instead of p-8
         */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-[#4c3df7] to-[#c92c41] rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-[#e99b2b]/60 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-[#e99b2b]/10 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {/* Adjusted max-height for better collapse transition on mobile */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700 leading-relaxed">
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
