"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, CheckCircle, HelpCircle } from "lucide-react";

export default function ROCReturnFilingForLLPPage() {
  const benefits = [
    "Helps in maintaining 'Active' status in the MCA Portal",
    "Boosts Confidence and Trust among stakeholders",
    "Protection from Penalty and Legal actions",
    "Avoiding mandatory 'Strike Off' of the LLP",
  ];

  const prerequisites = [
    "For Form 11 Filing:",
    "• DIN of all Designated Partners should be in APPROVED Status",
    "• Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
    "",
    "For Form 8 Filing:",
    "• Turnover less than 40 Lac: Signed Balance Sheet & P&L",
    "• Turnover more than 40 Lac: Audited Balance Sheet",
    "• DIN of all Designated Partners should be in APPROVED Status",
    "• Minimum 2 Valid Digital Signatures (DSC) of Designated Partners",
  ];

  const deliverables = ["All filed e-forms with MCA", "MCA payment challan"];

  const faqs = [
    {
      q: "What Forms are to be filed for ROC Return (for LLP)?",
      a: "LLP needs to file two eForms every year: Form 11 for Annual Return of the LLP and Form 8 for the Statement of Accounts.",
    },
    {
      q: "What is the LLP Annual Filing due date?",
      a: "Due date for filing Form 11 is 30th May of each year and due date for filing Form 8 is 30th October of every year.",
    },
    {
      q: "Who is responsible to file LLP ROC Return?",
      a: "The Designated Partners of the LLP are responsible to file LLP ROC Return.",
    },
    {
      q: "What is LLP Return Filing fees and charges?",
      a: "Filing Fees for Form 11 is ₹50. Filing Fees for Form 8 is ₹50.",
    },
    {
      q: "What is Penalty for late filing of LLP return?",
      a: "Late fees of ₹10 per day is charged on each Form 11 and Form 8 from the date of delay till the default continues.",
    },
    {
      q: "How to calculate Penalty for late filing of LLP Annual filing?",
      a: "Form 11 Penalty: ₹100 × No. of days after 30th May till the date of filing. Form 8 Penalty: ₹100 × No. of days after 30th October till the date of filing.",
    },
    {
      q: "Is there any chance of waiver of penalty for non-filing of Form 11 & Form 8?",
      a: "No, there is no provision for waiver of penalty. In the last several years, the MCA has not announced any waiver or amnesty scheme.",
    },
    {
      q: "What happens if an LLP does not file annual returns?",
      a: "A) LLP & its Partners become liable for late fees and penalty. B) ROC may issue notice to close the LLP for non-filing. C) ROC can disqualify and block DIN of Designated Partners.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative h-[75vh] bg-gradient-to-br from-[#fff6e9] via-[#f6f3ff] to-[#e9f8ff] flex items-center justify-center overflow-hidden">
        <img
          src="/images/roc-llp.jpg"
          alt="ROC Return Filing for LLP"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative text-center max-w-3xl px-6">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4"
          >
            ROC Return Filing for LLP
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#0e172b]/80 text-lg leading-relaxed"
          >
            ROC Return Filing is the mandatory annual compliance submission to
            the Registrar of Companies (ROC) for a Limited Liability Partnership
            (LLP). It involves filing Form 8 and Form 11 each financial year to
            maintain active status and avoid penalties under the LLP Act, 2008.
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
            <span className="text-gray-700 whitespace-pre-line">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
