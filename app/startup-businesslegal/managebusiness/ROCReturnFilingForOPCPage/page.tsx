"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
} from "lucide-react";

export default function ROCReturnFilingForOPCPage() {
  const benefits = [
    "Helps in maintaining 'Active' status in the MCA Portal",
    "Boosts Confidence and Trust",
    "Protection from Penalty and Legal actions",
    "Avoiding mandatory 'Strike Off' of the Company",
  ];

  const prerequisites = [
    "Auditor Report, Balance Sheet & Profit and Loss Account",
    "Attendance of a minimum of 1 director for the AGM (Note: While OPCs don't hold AGMs, general compliance practices for director details are referenced from Pvt Ltd)",
    "Signature of a minimum of 1 director on the financials",
    "DIN of all Directors should be in APPROVED Status",
    "One valid digital signature (DSC) of a director",
  ];

  const deliverables = ["All filed e-forms with MCA", "MCA payment challan"];

  const faqs = [
    {
      q: "Since Incorporation, the Company has not done any business, do we need to file an ROC Return (for OPC)?",
      a: "Yes. An ROC return gives details of changes that have taken place in the OPC during the year and needs to be filed even though the OPC has not done any business during the year.",
    },
    {
      q: "What Forms are to be filed for ROC Return (for OPC)?",
      a: "MGT-7 - Annual Return, AOC-4 - Financial Statements, Balance Sheet & P&L Account, ADT-1 - For Appointment of Auditors.",
    },
    {
      q: "What is the Annual Filing due date (for OPC)?",
      a: "First Annual Filing is due on 30th December of the next year from the date of Incorporation. Subsequent Annual Filings are due on 30th September every year.",
    },
    {
      q: "Who is responsible for filing the OPC ROC Return?",
      a: "It is the duty of the OPC and its Director to file the ROC Return, as both are liable for non-filing.",
    },
    {
      q: "What are the ROC Return Filing fees and charges (for OPC)?",
      a: "Authorized Capital up to ₹1 lakh: ₹300 per form (AOC-4 & MGT-7). Authorized Capital ₹5 lakh or more: ₹400 per form.",
    },
    {
      q: "What is the Penalty for late filing of an OPC ROC return?",
      a: "Late fees of ₹100 per day on form MGT-7 and AOC-4 continue until rectified. Delay on Form ADT-1 ranges from 2x to 12x normal fees depending on delay duration.",
    },
    {
      q: "There is only 1 member and 1 director in the OPC. How do we conduct the meeting? Is AGM applicable to us?",
      a: "AGM cannot be held for OPC, however, return filing is mandatory for OPC within prescribed timelines.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[75vh] bg-gradient-to-br from-[#fff6e9] via-[#f6f3ff] to-[#e9f8ff] flex items-center justify-center overflow-hidden">
        <img
          src="/images/roc-opc.jpg"
          alt="ROC Return Filing for OPC"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center max-w-3xl px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4"
          >
            ROC Return Filing for OPC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#0e172b]/80 text-lg leading-relaxed"
          >
            ROC Return Filing is the mandatory annual submission of financial
            statements and compliance documents to the Registrar of Companies
            (ROC) for a One Person Company. Timely filing ensures compliance
            with the Companies Act, 2013, and helps avoid penalties.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-gradient-to-b from-white via-[#fffdf9] to-[#f9f9ff] py-16 px-6 md:px-20">
        {/* Benefits */}
        <Section
          title="Benefits"
          icon={<ShieldCheck className="text-[#4c3df7]" />}
        >
          {benefits}
        </Section>

        {/* Pre-requisites */}
        <Section
          title="Pre-requisites"
          icon={<FileText className="text-[#e99b2b]" />}
        >
          {prerequisites}
        </Section>

        {/* Deliverables */}
        <Section
          title="Deliverables"
          icon={<CheckCircle className="text-[#c92c41]" />}
        >
          {deliverables}
        </Section>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-[#0e172b] flex items-center gap-2">
            <HelpCircle className="text-[#4c3df7]" /> FAQs
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-md p-6 border border-gray-100"
              >
                <p className="font-semibold text-[#0e172b] mb-2">{faq.q}</p>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: any;
  children: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto mb-16"
    >
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2 text-[#0e172b]">
        {icon} {title}
      </h2>
      <ul className="space-y-3">
        {children.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-[#e99b2b] mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
