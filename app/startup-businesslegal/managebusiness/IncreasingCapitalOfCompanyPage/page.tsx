"use client";

import React from "react";
import { motion } from "framer-motion";
import { Banknote, ArrowRight } from "lucide-react";

export default function IncreasingCapitalOfCompanyPage() {
  const faqs = [
    {
      q: "What is maximum share capital allowed for a Company?",
      a: "There is no limit for maximum capital.",
    },
    {
      q: "What is the difference between Authorized Capital & Paid up capital?",
      a: "The Authorized Capital of the Company is the maximum limit up to which a Company can issue shares, and Paid Up Capital is that part of the Authorized Capital for which Shareholders have made the investment into the Company.",
    },
    {
      q: "What documents are required for increasing the capital?",
      a: "MOA (Memorandum of Association), AOA (Articles of Association), documents for Board Meeting of the Company and documents for Extra Ordinary General Meeting (EGM) of the Company. Startupwala will guide in the document preparation and filing of Forms.",
    },
    {
      q: "What Forms are to be filed for changing the Company address?",
      a: "Form SH-7.",
    },
    {
      q: "What is time limit to file change of capital documents with ROC?",
      a: "The time limit is 30 days from passing of resolution in the Extra ordinary General Meeting for increase in Authorized Share Capital.",
    },
    {
      q: "Do we have to pay Stamp duty for increase in Authorized Capital and Paid up Capital?",
      a: "Yes, Stamp duty is payable on Increase of Authorized Capital and depends on the amount of increase and the State in which the company is incorporated.",
    },
    {
      q: "Do I need Share Certificates for Increase in Capital assignment of the Company?",
      a: "Yes, Share certificate needs to be updated in case of changes in the capital structure of the company. We can guide and assist you in printing of a new Share Certificate Book.",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-[#fdf6f0] via-[#f4ecff] to-[#f2fbf8]">
      {/* Hero Section */}
      <div className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/increase-capital.jpg"
          alt="Increase Company Capital"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/90"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <div className="flex justify-center mb-4">
            <Banknote className="w-12 h-12 text-[#4c3df7]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4">
            Increasing Capital of Company
          </h1>
          <p className="text-lg text-gray-600">
            Legally expand your company’s capital base to unlock growth, attract
            investors, and stay compliant with ROC regulations.
          </p>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-8 border-l-4 border-[#e99b2b]"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-3">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Increasing capital of a company is the legal process of raising the
            company's Authorized or Paid-up Share Capital. This requires the
            company to approve the increase through a special resolution passed
            by the shareholders. Subsequently, the company must file Form SH-7
            with the Registrar of Companies (ROC) to officially register the
            altered capital structure under the Companies Act, 2013. This is
            essential for business expansion and compliance.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-8 border-l-4 border-[#4c3df7]"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-3">
            Benefits
          </h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Boosts Transparency and Trust among stakeholders</li>
            <li>Protection from Penalty and Legal actions</li>
            <li>Opportunities for raising funds</li>
            <li>Enables scaling and business expansion</li>
          </ul>
        </motion.div>

        {/* Pre-requisites */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-8 border-l-4 border-[#c92c41]"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-3">
            Pre-requisites
          </h2>

          <h3 className="font-semibold text-[#0e172b] mb-2">
            1️⃣ For Increase in Authorised Capital:
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside mb-6">
            <li>
              Form INC-20A for Commencement of Business should have been filed
            </li>
            <li>Details of Increase in Capital of the Company</li>
            <li>DIN of minimum 1 Director should be in 'APPROVED' Status</li>
            <li>One Valid Digital Signature (DSC) of an existing Director</li>
          </ul>

          <h3 className="font-semibold text-[#0e172b] mb-2">
            2️⃣ For Increase in Paid up Capital:
          </h3>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>Bank Statement showing deposit of Paid up Capital amount</li>
            <li>Share certificates of the Company</li>
            <li>DIN of minimum 1 Director should be in 'APPROVED' Status</li>
            <li>One Valid Digital Signature (DSC) of an existing Director</li>
          </ul>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-8 border-l-4 border-[#e99b2b]"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-3">
            Deliverables
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Includes drafting of resolutions, preparation of SH-7 filing, all
            necessary MCA forms, and payment challans — ensuring smooth and
            compliant execution of capital increase.
          </p>
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-8 border-l-4 border-[#4c3df7]"
        >
          <h2 className="text-2xl font-semibold text-[#0e172b] mb-6">FAQs</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-medium text-[#0e172b] flex items-center">
                  <ArrowRight className="w-5 h-5 mr-2 text-[#c92c41]" /> {faq.q}
                </h3>
                <p className="text-gray-700 mt-2">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
