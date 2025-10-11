"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, FileWarning, ShieldCheck, ArrowRight } from "lucide-react";

export default function ClosureOfPvtLtdPage() {
  const benefits = [
    "Removes legal hassles and reduces continuing non-compliance",
    "Reduces unnecessary financial losses",
    "Protects directors from future penalties and liabilities",
    "Brings peace of mind by officially ending company obligations",
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Annual ROC Return Filings should be up to date",
    "Company should be inoperative for more than 2 consecutive financial years",
    "Bank Account of the Company should be closed",
    "Latest filed Income Tax Returns",
    "DIN of all Directors should be in ‘APPROVED’ status",
    "One valid Digital Signature (DSC) of an existing Director",
  ];

  const faqs = [
    {
      q: "What is Closure of Company?",
      a: "When the existence of a company as a legal entity comes to an end, it is known as closure of the company.",
    },
    {
      q: "What is the difference between Closure, Winding up, and Dissolution?",
      a: "Closure is voluntary under Fast Track Exit (FTE). Winding up may be voluntary or court-ordered with a liquidator. Dissolution is the final legal end of a company, often initiated by the court.",
    },
    {
      q: "Why is ROC filing required for Closure?",
      a: "Even if business stops, the company remains legally active until ROC approves closure. Filing ensures removal from MCA records and exemption from further filings.",
    },
    {
      q: "What is Fast Track Exit (FTE) Scheme?",
      a: "An MCA initiative for simplified and faster voluntary closure of inoperative companies.",
    },
    {
      q: "Which companies are eligible for Closure under FTE?",
      a: "Any Private Limited Company (not Section 8) that has been inoperative for over 1 year since incorporation.",
    },
    {
      q: "What are the costs involved in Closing a Company?",
      a: "ROC filing fee for Form STK-2: ₹10,000. Notary & Stamp Paper charges: ₹1,200 – ₹1,500 (approx).",
    },
    {
      q: "What documents are required for Closure?",
      a: "Application for striking off, Board Resolution, Consent of Directors, Director’s Affidavit, Indemnity Bond, and Statement of Assets & Liabilities.",
    },
    {
      q: "What is the time limit to file Closure documents with ROC?",
      a: "Form STK-2 must be filed within 30 days from the date of signing the Statement of Assets & Liabilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6ff] via-[#fffaf6] to-[#f7faff] text-[#0e172b]">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/company-closure.jpg"
          alt="Closure of Pvt Ltd Company"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6ff] via-transparent to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0e172b]">
            Closure of Pvt Ltd Company
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Legally conclude your company’s operations and ensure full compliance with ROC under the Companies Act, 2013.
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#c92c41]">Description</h2>
          <p className="text-gray-700 leading-relaxed">
            Closure of a Private Limited Company (Pvt. Ltd.) is the formal legal process of shutting down the business and
            removing its name from the Registrar of Companies (ROC) records. The most common method for a solvent company
            is <strong>Striking Off (Fast Track Exit)</strong>, which requires the company to be non-operational for a prescribed
            period and have no pending liabilities. It involves shareholder approval and filing{" "}
            <strong>Form STK-2</strong> with the ROC. This ensures proper legal closure and compliance under the{" "}
            <strong>Companies Act, 2013</strong>.
          </p>
        </motion.section>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-[#4c3df7]" />
            <h2 className="text-2xl font-semibold text-[#c92c41]">Benefits</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {benefits.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* Pre-requisites */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FileWarning className="text-[#e99b2b]" />
            <h2 className="text-2xl font-semibold text-[#c92c41]">Pre-requisites</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {prerequisites.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* Deliverables */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-[#4c3df7]" />
            <h2 className="text-2xl font-semibold text-[#c92c41]">Deliverables</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>All filed e-Forms with MCA</li>
            <li>MCA payment challan</li>
            <li>Company Closure Certificate from ROC</li>
          </ul>
        </motion.section>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#c92c41]">FAQ’s</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-[#0e172b] mb-2">
                  {i + 1}. {faq.q}
                </h3>
                <p className="text-gray-700 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-10"
        >
          <button className="px-8 py-3 bg-[#4c3df7] text-white rounded-full shadow-md hover:bg-[#3b2fd1] transition flex items-center mx-auto gap-2">
            Get Expert Assistance <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
