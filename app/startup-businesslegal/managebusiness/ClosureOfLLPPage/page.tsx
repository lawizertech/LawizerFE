"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileWarning, Building2, CheckCircle2, HelpCircle } from "lucide-react";

export default function ClosureOfLLPPage() {
  const benefits = [
    "Removes legal hassles and reduces continuing non-compliance.",
    "Reduction in losses and removing the tag of defaulter.",
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed (Equivalent for LLP if applicable, otherwise state general compliance)",
    "Annual ROC Return Filings (Form 8 and Form 11) should be up to date",
    "LLP Should be Inoperative for more than 2 consecutive Financial years (or 1 year for specific schemes)",
    "Bank Account of the LLP should be Closed",
    "Latest Filed Income Tax Returns",
    "DIN of all Designated Partners should be in 'APPROVED' Status",
    "Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
  ];

  const deliverables = [
    "All filed e-forms with MCA",
    "MCA payment challan",
    "LLP Closure Certificate from ROC",
  ];

  const faqs = [
    {
      q: "What is Closure of LLP?",
      a: "When the existence of the LLP as a legal entity comes to an end it is known as the Closure of the LLP.",
    },
    {
      q: "What is the difference between Closure, Winding up, Dissolution of LLP?",
      a: "Closure of the LLP is done voluntarily, often through striking off. Winding up of the LLP may be voluntary or by the order of the Court by appointing an official liquidator. Dissolution is initiated by the Court for ending the legal existence of the LLP.",
    },
    {
      q: "Why ROC filing is required for Closing an LLP?",
      a: "It is necessary to file Closure with the ROC as ROC or MCA database needs to be updated and the LLP is free from all its legal compliances as it is officially closed. Even though business of the LLP is closed, unless closure documents are filed and approved by the ROC, LLP is not legally closed and needs to file all regular returns.",
    },
    {
      q: "What is Fast Track Exit (FTE) Scheme (for LLP)?",
      a: "FTE is an LLP closure scheme initiated by MCA for easy and faster closure of LLP (often related to striking off).",
    },
    {
      q: "Which LLP is eligible to apply for Closure of LLP?",
      a: "Any LLP which has been inoperative for more than 1 year from the date of its incorporation (or 2 years depending on the specific method) can apply for Closure of LLP.",
    },
    {
      q: "What are the expenses and cost involved in Closing an LLP?",
      a: "The filing fees for forms (like Form 24) and other charges will apply, similar to the Pvt Ltd closure fees, with Stamp Paper and Notary Charges potentially ranging between Rs. 1200 to Rs. 1500 or as per actuals.",
    },
    {
      q: "What documents are required for Closure of LLP?",
      a: "Application for Striking off of the LLP, Partners' Resolution for closure, Consent of Partners, Partners' Affidavit, Indemnity Bond, Statement of Assets and Liabilities. Startupwala will guide in the document preparation and filing of Forms.",
    },
    {
      q: "Which form is required to be filed for Closure of LLP with ROC?",
      a: "Form 24.",
    },
    {
      q: "What is the time limit to file Closure documents with ROC?",
      a: "The Form has to be filed with ROC office within 30 days from the date of Signing of the Statement of Assets and Liabilities for both.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0e172b] text-white py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto px-6"
      >
        <div className="flex justify-center mb-6">
          <Building2 className="w-16 h-16 text-[#e99b2b]" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-[#e99b2b]">
          Closure of LLP
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Closure of a Limited Liability Partnership (LLP) is the formal legal
          process of voluntarily dissolving the business and striking its name
          from the Registrar of Companies (ROC) records. This is done through a
          process called{" "}
          <span className="text-[#4c3df7] font-semibold">Striking Off</span> or
          winding up. To be eligible, the LLP must either be non-operational for
          one year or be ready for formal winding up. The partners must file the
          necessary forms (Form 24) with the ROC to conclude all statutory
          compliance and legal obligations under the LLP Act, 2008.
        </p>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16 px-6"
      >
        <h2 className="text-2xl font-semibold text-[#e99b2b] mb-4">Benefits</h2>
        <ul className="space-y-3 text-gray-300">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#4c3df7] mt-1 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Pre-requisites Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16 px-6"
      >
        <h2 className="text-2xl font-semibold text-[#e99b2b] mb-4">
          Pre-requisites
        </h2>
        <ul className="space-y-3 text-gray-300">
          {prerequisites.map((item, index) => (
            <li key={index} className="flex items-start">
              <FileWarning className="w-5 h-5 text-[#c92c41] mt-1 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Deliverables Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-16 px-6"
      >
        <h2 className="text-2xl font-semibold text-[#e99b2b] mb-4">
          Deliverables
        </h2>
        <ul className="space-y-3 text-gray-300">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="w-5 h-5 text-[#4c3df7] mt-1 mr-2" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto mt-20 px-6"
      >
        <h2 className="text-2xl font-semibold text-[#e99b2b] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#1a2340]/60 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start mb-2">
                <HelpCircle className="w-5 h-5 text-[#e99b2b] mt-1 mr-2" />
                <h3 className="font-semibold text-lg">{faq.q}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
