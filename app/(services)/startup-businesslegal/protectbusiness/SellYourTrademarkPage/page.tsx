"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

export default function SellYourTrademarkPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    "Protection against Copycats: Even after selling, protection continues for the new owner.",
    "Registered brand is a valuable asset: A trademark is a monetizable business asset.",
    "Facilitates business expansion and growth: Enables growth for assignor or assignee.",
    "Improves brand credibility and image: Properly managed transfers enhance brand trust.",
  ];

  const prerequisites = [
    "Trademark Application Number",
    "Name of the transferee (person receiving the trademark)",
    "Name of the transferor (person selling the trademark)",
    "Board Resolution (if either party is a company)",
    "Trademark Assignment Deed",
  ];

  const deliverables = [
    "Documentation support and facilitation",
    "Trademark Registry filing receipt",
    "Screenshot of Assignment filing",
  ];

  const faqs = [
    {
      q: "What is Trademark Assignment?",
      a: "Trademark Assignment means the permanent transfer of ownership of a trademark from one person or company (Assignor) to another (Assignee). Just like any asset, a trademark can be sold for a price.",
    },
    {
      q: "How to sell a trademark?",
      a: "Selling a trademark doesn’t mean selling the entire company. It involves transferring ownership of a specific brand or logo by executing an Assignment Deed between the parties.",
    },
    {
      q: "What is a Trademark Assignment Deed?",
      a: "It is a legal agreement between the buyer and seller of a trademark that sets the terms of transfer — such as selling price, territory of use, and whether goodwill is included.",
    },
    {
      q: "What are key clauses in the Assignment Deed?",
      a: "Important clauses include the sale consideration, geographical limits for use, and whether the transfer is with or without goodwill. These affect stamp duty calculations and enforceability.",
    },
    {
      q: "What is the difference between Licensing and Assignment?",
      a: "Licensing allows another person to use a trademark for a limited time while ownership remains with the original holder. Assignment transfers full ownership permanently.",
    },
  ];

  const primaryRed = "text-red-500";
  const primaryOrange = "text-orange-500";
  const primaryBlue = "text-blue-500";

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] sm:min-h-[65vh] overflow-hidden px-4">
        <img
          src="/sell-trademark-light.png"
          alt="Sell Trademark"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-2"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4"
          >
            <BadgeIndianRupee className="w-12 h-12 sm:w-16 sm:h-16 text-orange-400" />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Sell Your <span className="text-red-500">Trademark</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transfer your trademark rights <strong>legally and securely</strong>{" "}
            with a proper assignment process. Turn your brand into a valuable,
            sellable asset.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Benefits Section */}
            <ContentCard
              title="Benefits"
              items={benefits}
              color={primaryOrange}
            />

            {/* Prerequisites Section */}
            <ContentCard
              title="Pre-Requisites"
              items={prerequisites}
              color={primaryBlue}
            />

            {/* Deliverables Section */}
            <ContentCard
              title="Deliverables"
              items={deliverables}
              color={primaryRed}
            />
          </motion.div>

          {/* Sidebar CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-red-500 to-orange-400 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Sell Your Trademark Securely
              </h3>
              <p className="text-white text-sm sm:text-base mb-5 sm:mb-6">
                We handle the documentation, Assignment Deed drafting, and TM-P
                filing — ensuring a smooth and legally valid transfer of your
                brand ownership.
              </p>
              <button className="w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white shadow-lg hover:opacity-90 transition-all duration-300 mb-3 flex items-center justify-center gap-2">
                Sell Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/20 text-white border border-white/30 hover:bg-white/30 transition-all duration-300 text-sm sm:text-base">
                Get Legal Consultation
              </button>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-200"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-lg overflow-hidden hover:border-red-500 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-gray-900">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
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

// Info/Content Card Component
function ContentCard({
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
      className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition"
    >
      <h3
        className={`text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2 ${color}`}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ backgroundColor: color.replace("text-", "#") }}
        />
        {title}
      </h3>
      <ul className="text-sm sm:text-base text-gray-700 space-y-2 list-disc list-inside">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
