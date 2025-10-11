"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, BarChart3, ShieldCheck, PenTool, HelpCircle, CheckCircle } from "lucide-react";

export default function RocReturnFilingPvtLtdPage() {
  const benefits = [
    "Helps in maintaining 'Active' status in the MCA Portal",
    "Boosts Confidence and Trust",
    "Protection from Penalty and Legal actions",
    "Avoiding mandatory 'Strike Off' of the Company",
  ];

  const prerequisites = [
    "Auditor Report, Balance Sheet & Profit and loss account",
    "Attendance of a minimum of 1 director for the AGM",
    "Signature of a minimum of 1 director on the financials",
    "DIN of all Directors should be in APPROVED Status",
    "One valid digital signature (DSC) of a director",
  ];

  const deliverables = [
    "All filed e-forms with MCA",
    "MCA payment challan",
  ];

  const faqs = [
    {
      q: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return?",
      a: "Yes. ROC return gives details of changes that have taken place in the company during the year and must be filed even if the company has not done any business during the year.",
    },
    {
      q: "What Forms are to be filed for ROC Return?",
      a: "The eForms to be filed for Annual ROC filing are: MGT-7 (Annual Return), AOC-4 (Financial Statements, Balance Sheet & P&L Account), and ADT-1 (For Appointment of Auditors).",
    },
    {
      q: "What is the Annual Filing due date?",
      a: "A) The first annual filing is due on the 30th of December of the next year from incorporation. B) Subsequent filings are due on the 30th of September of the year in which the Financial Year ends.",
    },
    {
      q: "Who is responsible for filing the Company ROC Return?",
      a: "It is the duty of the Company and its Directors to file the ROC Return, as both are liable for non-filing.",
    },
    {
      q: "What are the ROC Return Filing fees and charges?",
      a: "A company having an Authorized Capital of ₹1 lakh is charged ₹300 for each Form AOC-4 and MGT-7. For companies with ₹5 lakh or more Authorized Capital, the charge is ₹400 per form.",
    },
    {
      q: "What is the Penalty for late filing of a Company ROC return?",
      a: "Late fees of ₹100 per day apply on Form MGT-7 and AOC-4 until rectified. For Form ADT-1: up to 30 days = 2× normal fee, 30–60 days = 4×, 60–90 days = 6×, 90–180 days = 10×, and beyond 180 days = 12×.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #fff8ef 0%, #f4f0ff 50%, #edf7ff 100%)",
      }}
    >
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full">
        <img
          src="/roc-return-filing.png"
          alt="ROC Return Filing for Pvt Ltd"
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/30 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4"
          >
            ROC Return Filing for Pvt Ltd
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-[#0e172b]/80 text-lg"
          >
            Ensure your Private Limited Company stays compliant with timely ROC filings under the Companies Act, 2013.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-4 flex items-center gap-2">
            <FileText className="text-[#e99b2b]" /> Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            ROC Return Filing is the mandatory annual submission of financial statements and compliance documents to the Registrar of Companies (ROC). 
            For a Private Limited Company, this includes filing Form AOC-4 (Financial Statements) and Form MGT-7 (Annual Return) every year. 
            Timely filing is compulsory to avoid penalties and maintain an active compliance status under the Companies Act, 2013.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-6 flex items-center gap-2">
            <ShieldCheck className="text-[#c92c41]" /> Benefits
          </h2>
          <ul className="space-y-3 text-gray-700">
            {benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle className="text-[#4c3df7] w-5 h-5 mt-1 flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-4 flex items-center gap-2">
            <PenTool className="text-[#4c3df7]" /> Pre-requisites
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {prerequisites.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-4 flex items-center gap-2">
            <BarChart3 className="text-[#e99b2b]" /> Deliverables
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#c92c41]" /> Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <p className="font-semibold text-[#0e172b]">{faq.q}</p>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
