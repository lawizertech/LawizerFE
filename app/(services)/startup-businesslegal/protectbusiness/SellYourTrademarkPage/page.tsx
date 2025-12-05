"use client";

import React from "react";
import { motion } from "framer-motion";
import { BadgeIndianRupee, ArrowRight } from "lucide-react";

export default function SellYourTrademarkPage() {
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

  // Define color palette using original hex codes
  const primaryRed = "#c92c41";
  const primaryBlue = "#4c3df7";
  const primaryOrange = "#e99b2b";
  const primaryDark = "#0e172b";
  const accentLight = "#f4f0ff"; // A light background color

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ef] via-[#f4f0ff] to-[#edf7ff] text-gray-900">
      {/* HERO SECTION - Adjusted for mobile
       * h-[50vh] instead of h-[75vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative h-[50vh] sm:h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/sell-trademark-light.png"
          alt="Sell Your Trademark"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white/90" />

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
            <BadgeIndianRupee
              className="w-12 h-12 sm:w-16 sm:h-16"
              style={{ color: primaryOrange }}
            />
          </motion.div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
            style={{ color: primaryDark }}
          >
            Sell Your <span style={{ color: primaryRed }}>Trademark</span>
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transfer your trademark rights **legally and securely** with a
            proper assignment process. Turn your brand into a valuable, sellable
            asset.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Adjusted padding and spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-10 sm:space-y-16">
        {/* Description - Adjusted padding and text size */}
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
            What is Trademark Assignment?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            Selling your trademark involves **permanently transferring
            ownership** rights from the current owner (Assignor) to another
            person or entity (Assignee). This process, known as a **Trademark
            Assignment**, must be recorded with the Registrar of Trademarks
            using **Form TM-P**. The buyer gains full ownership and rights to
            use and protect the brand name or logo.
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
              Looking to Sell Your Trademark?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
              We handle the documentation, Assignment Deed drafting, and
              **TM-P** filing — ensuring a smooth and legally valid transfer of
              your brand ownership.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-[#c92c41] to-[#4c3df7] hover:opacity-95 transition flex items-center justify-center gap-2">
                Sell Now <ArrowRight className="w-4 h-4" />
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
                className="group border border-gray-200 hover:border-[#e99b2b]/50 rounded-lg sm:rounded-xl p-4 cursor-pointer bg-white transition"
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

/* Reusable Info Card Component - Adjusted for mobile responsiveness */
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
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
