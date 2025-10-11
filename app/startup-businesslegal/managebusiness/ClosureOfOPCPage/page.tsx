"use client";

import React from "react";
import { motion } from "framer-motion";
import { Building2, FileWarning, ShieldCheck, ArrowRight } from "lucide-react";

export default function ClosureOfOPCPage() {
  const benefits = [
    "Removes legal hassles and reduces continuing non-compliance",
    "Reduces financial losses and removes the tag of defaulter",
    "Ensures smooth and lawful business closure",
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Annual ROC Return Filings should be up to date",
    "OPC should be inoperative for more than 2 consecutive financial years",
    "Bank Account of the OPC should be closed",
    "Latest filed Income Tax Returns",
    "DIN of all Directors should be in ‘APPROVED’ status",
    "One valid Digital Signature (DSC) of an existing Director",
  ];

  const faqs = [
    {
      q: "What is Closure of OPC?",
      a: "When the existence of the OPC as a legal entity ends, it is known as the closure of the OPC.",
    },
    {
      q: "What is the difference between Closure, Winding up, and Dissolution?",
      a: "Closure is voluntary under Fast Track Exit (FTE). Winding up may be voluntary or court-ordered. Dissolution is the final legal termination of the OPC by a court.",
    },
    {
      q: "Why ROC filing is required for Closing an OPC?",
      a: "ROC filing officially removes the OPC from government records. Without it, even a non-operational OPC must continue legal filings.",
    },
    {
      q: "What is Fast Track Exit (FTE) Scheme?",
      a: "A simplified MCA process for easy and faster voluntary closure of inoperative OPCs.",
    },
    {
      q: "Which OPC is eligible for Closure?",
      a: "Any OPC not being a Section 8 Company and inactive for over 1 year since incorporation can apply for closure.",
    },
    {
      q: "What are the costs involved?",
      a: "Filing fee for Form STK-2: ₹10,000. Notary and Stamp Paper: ₹1,200–₹1,500 approx.",
    },
    {
      q: "What documents are required?",
      a: "Application for striking off, Board Resolution, Director’s Consent, Affidavit, Indemnity Bond, Statement of Assets and Liabilities.",
    },
    {
      q: "What is the time limit to file?",
      a: "Form STK-2 must be filed within 30 days from signing the Statement of Assets and Liabilities.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f9f6ff] via-[#fffaf6] to-[#f7faff] text-[#0e172b]">
      {/* Hero */}
      <div className="relative h-[75vh] w-full flex items-center justify-center overflow-hidden">
        <img
          src="/images/opc-closure.jpg"
          alt="Closure of OPC"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f9f6ff] via-transparent to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-3xl px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Closure of OPC</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Officially terminate your One Person Company and stay compliant under the Companies Act, 2013.
          </p>
        </motion.div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Description */}
        <Section title="Description">
          Closure of a One Person Company (OPC) is the mandatory legal process to officially terminate
          the business and strike its name from the Registrar of Companies (ROC). The most common
          method is <strong>Striking Off (Fast Track Exit)</strong>, requiring shareholder approval and
          filing of <strong>Form STK-2</strong> with the ROC to conclude all statutory and legal obligations.
        </Section>

        <ListSection
          title="Benefits"
          icon={<ShieldCheck className="text-[#4c3df7]" />}
          items={benefits}
        />

        <ListSection
          title="Pre-requisites"
          icon={<FileWarning className="text-[#e99b2b]" />}
          items={prerequisites}
        />

        <ListSection
          title="Deliverables"
          icon={<Building2 className="text-[#4c3df7]" />}
          items={[
            "All filed e-forms with MCA",
            "MCA payment challan",
            "Company Closure Certificate from ROC",
          ]}
        />

        <FAQSection faqs={faqs} />
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-4 text-[#c92c41]">{title}</h2>
      <p className="text-gray-700 leading-relaxed">{children}</p>
    </motion.section>
  );
}

function ListSection({
  title,
  icon,
  items,
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-2xl font-semibold text-[#c92c41]">{title}</h2>
      </div>
      <ul className="list-disc list-inside space-y-2 text-gray-700">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.section>
  );
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
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
  );
}
