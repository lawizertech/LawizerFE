"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinHouse, ArrowRight } from "lucide-react";

export default function ChangeInOfficeAddressPage() {
  const faqs = [
    {
      q: "What documents are required for Office Address Change?",
      a: "New Address Proof, Board Resolution, NOC for Shifting of Registered Office and Declaration for Shifting of Registered Office. Startupwala will guide in the document preparation and filing of Forms.",
    },
    {
      q: "What are the fees and charges for Shifting of Office Address?",
      a: "Rs. 300 is for Form INC-22 if filed within the prescribed time limit.",
    },
    {
      q: "What Forms are to be filed for changing the Company Address?",
      a: "Form INC-22.",
    },
    {
      q: "What is time limit to file change of office address documents with ROC?",
      a: "The time limit is 30 days from passing of the Board Resolution for shifting of Registered Office.",
    },
    {
      q: "What actions need to be taken after shifting of registered office address of Company?",
      a: "The Name Plate mentioning the address has to be modified, the Letterhead of the Company has to be changed, the Statutory Register has to be shifted to the new registered office, Shop Act License & PAN card need to be updated.",
    },
    {
      q: "Can registered office be situated in foreign country?",
      a: "No.",
    },
    {
      q: "What are different types of Registered Office Shifting?",
      a: "a) Within the Local Limits of the City b) Within the limits of the same ROC c) Within the same state but different ROC (Only in case of Maharashtra and Tamil Nadu) d) From one state to another",
    },
  ];

  return (
    <div className="min-h-screen text-gray-800 bg-gradient-to-br from-[#fdf6f0] via-[#f4ecff] to-[#f2fbf8]">
      {/* Hero Section */}
      <div className="relative h-[75vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="/office-shift.jpg"
          alt="Office relocation"
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
            <MapPinHouse className="w-12 h-12 text-[#c92c41]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4">
            Change in Office Address
          </h1>
          <p className="text-lg text-gray-600">
            Seamlessly update your company’s registered office with full ROC
            compliance and peace of mind.
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
            Change in Office Address is a mandatory, multi-step compliance
            process required when a company shifts its Registered Office. The
            company must first pass a Board Resolution, and then file Form
            INC-22 with the Registrar of Companies (ROC) to formally notify the
            government. If the change is between two states, the process is far
            more complex, requiring Central Government approval. Timely filing
            is essential to ensure regulatory compliance under the Companies
            Act, 2013.
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
            <li>Ensures smooth government communication and compliance</li>
            <li>Avoids legal complications due to outdated information</li>
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
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li>
              Form INC-20A for Commencement of Business should have been filed
            </li>
            <li>
              Copy of Latest Electricity Bill of New office (Not Older than 45
              Days)
            </li>
            <li>Copy of Rental Agreement/Sale Deed of the new office</li>
            <li>DIN of minimum 1 Director should be in 'APPROVED' Status</li>
            <li>One Valid Digital Signature (DSC) of an existing Director.</li>
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
            Includes preparation and filing of all relevant ROC e-forms,
            acknowledgment receipts, and filing challans — ensuring seamless
            compliance and documentation.
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
