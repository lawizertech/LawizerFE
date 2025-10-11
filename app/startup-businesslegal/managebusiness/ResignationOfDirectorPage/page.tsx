"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserMinus,
  FileText,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function ResignationOfDirectorPage() {
  const benefits = [
    "Boosts transparency and trust among stakeholders",
    "Protection from penalty and legal liabilities (for both the company and the director, when handled correctly)",
    "Safety from disputes and liabilities",
    "Opportunity to take up new job or directorship",
  ];

  const prerequisites = [
    "All the forms relating to the appointment of Director of the Company should have been filed",
    "DIN of minimum 1 Director should be in 'approved' status",
    "One valid Digital Signature (DSC) of an existing Director",
  ];

  const deliverables = [
    "All filed e-forms with MCA (DIR-12 and DIR-11)",
    "MCA payment challan",
  ];

  const faqs = [
    {
      q: "What documents are required for director resignation?",
      a: `A) Documents required from Director:
Resignation Letter.

B) Documents required from Company:
Board Meeting Resolution for Resignation, Minutes and Resignation Acceptance Letter. Startupwala helps in preparing and filing these with ROC.`,
    },
    {
      q: "What is a Resignation Letter from Director?",
      a: "When a Director wishes to step down, they officially submit a written letter to the company informing of their resignation — this is the Resignation Letter.",
    },
    {
      q: "What is Resignation Acceptance Letter from Company?",
      a: "When the company formally accepts a director's resignation, it issues an acceptance letter confirming the same.",
    },
    {
      q: "What is Board Resolution for Resignation of Director?",
      a: "A Board Resolution is passed in a meeting to record the acceptance of the director’s resignation and authorize officers to complete filing formalities.",
    },
    {
      q: "Which forms are to be filed for resignation of director?",
      a: "Form DIR-12 is filed by the company and Form DIR-11 is filed by the resigning director with the ROC.",
    },
    {
      q: "What are the ROC fees and charges for resignation filing?",
      a: "Filing fees for Form DIR-12 is generally ₹300 as per MCA schedule.",
    },
    {
      q: "Difference between Resignation and Removal of Director?",
      a: "Resignation is voluntary — initiated by the director. Removal is initiated by the company against the director’s will.",
    },
    {
      q: "If there are only two directors, can one resign?",
      a: "No. A new additional director must be appointed first, after which resignation can proceed.",
    },
    {
      q: "Is there any liability after resignation?",
      a: "The resigning director remains liable only for non-compliance during their tenure, not for actions after resignation.",
    },
    {
      q: "Situations under which a director may leave the company?",
      a: "Retirement, Death, Disqualification, Resignation, or Removal of Director.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg, #fff8ef 0%, #f4f0ff 50%, #edf7ff 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="relative h-[75vh] w-full">
        <img
          src="/images/resignation-director.jpg"
          alt="Resignation of Director"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white/40 flex items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <UserMinus className="w-16 h-16 text-[#c92c41]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4">
              Resignation of <span className="text-[#4c3df7]">Director</span>
            </h1>
            <p className="text-[#0e172b]/80 text-lg">
              Step down from the Board legally and smoothly. We handle all
              filings, resolutions and compliance for a seamless resignation
              process under the Companies Act, 2013.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-[#c92c41] mb-4 flex items-center gap-2">
            <FileText className="text-[#c92c41]" /> Description
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Resignation of Director is a formal legal act where a Director
            voluntarily relinquishes their position from the Board. The company
            must record the resignation in a Board Meeting and file DIR-12 with
            ROC, while the Director must file DIR-11. This keeps the company's
            records compliant under the Companies Act, 2013.
          </p>
        </motion.section>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Benefits"
            color="#e99b2b"
            icon={<ShieldCheck className="text-[#e99b2b]" />}
          >
            {benefits}
          </Card>

          <Card
            title="Pre-requisites"
            color="#4c3df7"
            icon={<FileText className="text-[#4c3df7]" />}
          >
            {prerequisites}
          </Card>

          <Card
            title="Deliverables"
            color="#c92c41"
            icon={<CheckCircle className="text-[#c92c41]" />}
          >
            {deliverables}
          </Card>
        </div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#4c3df7] mb-6 flex items-center gap-2">
            <HelpCircle className="text-[#4c3df7]" /> Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
              >
                <summary className="font-semibold text-[#0e172b] cursor-pointer">
                  {f.q}
                </summary>
                <div className="mt-2 text-gray-700 whitespace-pre-line">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* Reusable Card */
function Card({
  title,
  icon,
  color,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  color: string;
  children: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
    >
      <h4
        className="text-xl font-semibold mb-3 flex items-center gap-3"
        style={{ color }}
      >
        <span className="inline-flex items-center justify-center w-9 h-9 bg-white rounded-lg shadow-xs">
          {icon}
        </span>
        {title}
      </h4>
      <ul className="text-gray-700 space-y-2 list-disc list-inside">
        {children.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </motion.div>
  );
}
