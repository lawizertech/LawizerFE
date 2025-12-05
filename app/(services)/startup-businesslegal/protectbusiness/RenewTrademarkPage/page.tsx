"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RefreshCw, ArrowRight } from "lucide-react";

export default function RenewTrademarkPage() {
  const benefits = [
    "Protection against Copycats: Safeguards your brand from unauthorized use.",
    "Registered brand is a valuable asset: Protects a key business asset.",
    "Helps business expansion and growth: Provides legal foundation for scaling.",
    "Builds credibility and market image: Reinforces brand trustworthiness.",
  ];

  const prerequisites = [
    "Trademark Application Number",
    "TM-M (Authorisation letter)",
  ];

  const deliverables = [
    "Trademark Registry filing receipt",
    "Screenshot of renewal filing",
  ];

  const faqs = [
    {
      q: "What is Trademark Renewal?",
      a: "A registered trademark is valid for 10 years and must be renewed to continue protection. Renewal extends validity for another 10 years.",
    },
    {
      q: "What is the Timeline & Fees for Trademark Renewal?",
      a: "Renewal can be filed anytime up to the expiry date and within one year after expiry (with additional fees). Renewal within 6 months post-expiry is straightforward; beyond that extra fees and paperwork apply. If not renewed within 12 months after expiry, the mark may be marked Abandoned.",
    },
    {
      q: "What is the difference between Registration and Renewal?",
      a: "Registration is the process to obtain the trademark initially (application, examination, opposition stages). Renewal is a post-registration procedural step (Form TM-R) to extend the life of an already registered mark.",
    },
    {
      q: "How do I start the renewal process?",
      a: "Provide the trademark application/registration number and an authorisation (TM-M). We will draft and file the TM-R on your behalf and provide receipts/screenshots after filing.",
    },
  ];

  // Define color palette using original hex codes
  const primaryRed = "#c92c41";
  const primaryBlue = "#4c3df7";
  const primaryOrange = "#e99b2b";
  const primaryDark = "#0e172b";
  const gradientStart = primaryOrange;
  const gradientEnd = primaryRed;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ef] via-[#f4f0ff] to-[#edf7ff] text-gray-900">
      {/* HERO SECTION - Adjusted for mobile
       * h-[50vh] instead of h-[75vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative h-[50vh] sm:h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/trademark-renewal-light.png"
          alt="Trademark Renewal"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 sm:px-6 max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <RefreshCw
              className="w-12 h-12 sm:w-16 sm:h-16"
              style={{ color: primaryRed }}
            />
          </motion.div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
            style={{ color: primaryDark }}
          >
            Renew Your <span style={{ color: primaryBlue }}>Trademark</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Extend your trademark protection for another **10 years** by filing
            Form **TM-R** on time. Keep your brand secure and maintain your
            exclusive rights.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Adjusted padding and spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-10 sm:space-y-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100"
        >
          <h2
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
            style={{ color: primaryRed }}
          >
            Why Renew Your Trademark?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Renewing your trademark extends its statutory protection for an
            additional **10 years**. File Form **TM-R** before expiry (or within
            the permitted grace period) and keep the legal ownership,
            enforcement rights, and goodwill associated with your mark intact.
          </p>
        </motion.section>

        {/* Info Grid - Changed to single column on mobile, remains 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          <InfoCard title="Benefits" color={primaryOrange} items={benefits} />
          <InfoCard
            title="Pre-Requisites"
            color={primaryBlue}
            items={prerequisites}
          />
          <InfoCard
            title="Deliverables"
            color={primaryRed}
            items={deliverables}
          />
        </div>

        {/* CTA - Adjusted padding and text size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#e99b2b] via-[#c92c41] to-[#4c3df7] p-[1px] rounded-xl sm:rounded-3xl shadow-lg"
        >
          <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10">
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: primaryDark }}
            >
              Ready to Renew Your Trademark?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
              We will prepare and file the TM-R application, pay statutory fees
              (if applicable), and send you filing receipts and screenshots.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-[#c92c41] to-[#4c3df7] hover:opacity-95 transition flex items-center justify-center gap-2">
                Renew Now <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm sm:text-base border border-[#0e172b]/10 text-[#0e172b] hover:bg-[#0e172b] hover:text-white transition">
                Get Legal Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQs - Adjusted padding and text size */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100"
        >
          <h3
            className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6"
            style={{ color: primaryBlue }}
          >
            FAQs
          </h3>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group border border-gray-200 hover:border-[#c92c41]/50 rounded-lg sm:rounded-xl p-4 cursor-pointer bg-white transition"
              >
                <summary
                  className="font-medium text-sm sm:text-base"
                  style={{ color: primaryDark }}
                >
                  {faq.q}
                </summary>
                <p className="mt-2 text-xs sm:text-sm text-gray-700">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* Reusable InfoCard - Adjusted for mobile responsiveness */
function InfoCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition"
    >
      <h3
        className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2"
        style={{ color }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: color }}
        />
        {title}
      </h3>

      <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
        {items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    </motion.div>
  );
}
