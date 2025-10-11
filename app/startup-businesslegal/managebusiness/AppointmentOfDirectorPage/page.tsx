"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileText,
  CheckCircle,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

export default function AppointmentOfDirectorPage() {
  const benefits = [
    "Boosts transparency and trust among stakeholders",
    "Protection from penalty and legal actions",
    "Eligibility to raise unsecured loans from the Director (as applicable)",
  ];

  const prerequisites = [
    "ROC Return filing must be up to date",
    "DIN of minimum 1 director should be in 'Approved' status",
    "One valid DSC (Digital Signature Certificate) of an existing director",
    "Appointee must be an Indian Resident",
  ];

  const deliverables = [
    "All filed e-forms with MCA (DIR-12)",
    "MCA payment challan",
  ];

  const faqs = [
    {
      q: "What documents are required for director appointment?",
      a: `A) Documents required from Director:
PAN Card, Residence Proof, DIN declarations, Consent letter for appointment etc.

B) Documents required from Company:
Board Meeting Resolution for Appointment and Letter of Appointment.
Startupwala will assist in preparing and filing these documents with the ROC.`,
    },
    {
      q: "What is Consent Letter from Director?",
      a: "A Consent Letter is the written approval by the proposed director confirming acceptance of appointment. It must be submitted to the company before filing DIR-12.",
    },
    {
      q: "What form is filed for adding a director?",
      a: "Form DIR-12 is filed with the MCA portal to notify the appointment of a director.",
    },
    {
      q: "What are the fees and charges for appointing a director?",
      a: "Filing DIR-12 within the time limit generally attracts a nominal fee. Standard filing fee example: ₹300 (subject to MCA fee schedule).",
    },
    {
      q: "Minimum number of directors required in a company?",
      a: "Private Limited Company: 2 Directors. One Person Company: 1 Director. Public Limited Company: 3 Directors.",
    },
    {
      q: "Maximum number of directors allowed?",
      a: "Default maximum is 15 directors. To exceed 15, the company must follow the procedural steps under the Companies Act.",
    },
    {
      q: "Types of directors?",
      a: `Executive Director — full-time executive involved in day-to-day operations.
Non-Executive Director — part-time/non-executive, attends board meetings and gives strategic guidance.
Additional Director — appointed between AGMs, requires confirmation at the next AGM.`,
    },
    {
      q: "Who can / cannot be appointed as a director?",
      a: "Can be appointed: persons 18+ years, of sound mind and solvent, not disqualified by law. Cannot be appointed: minors, insolvents, persons convicted of certain offences (imprisonment >6 months).",
    },
    {
      q: "Minimum age to become a director?",
      a: "Minimum age is 18 years. For a Managing Director, minimum age is typically 21 years where applicable.",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(135deg,#fff8ef 0%,#f4f0ff 50%,#edf7ff 100%)",
      }}
    >
      {/* Hero */}
      <section className="relative h-[75vh] w-full">
        <img
          src="/images/appointment-director.jpg"
          alt="Appointment of Director"
          className="absolute inset-0 w-full h-full object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 to-white/40 flex items-center justify-center text-center px-6">
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
              <Users className="w-16 h-16 text-[#c92c41]" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#0e172b] mb-4">
              Appointment of <span className="text-[#4c3df7]">Director</span>
            </h1>
            <p className="text-[#0e172b]/80 text-lg">
              Add a director to your Board legally and compliantly. We handle
              board resolutions, DIR-12 filing and MCA formalities so you stay
              compliant under the Companies Act, 2013.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main */}
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
            Appointment of Director is the formal process of adding an
            individual to the Board. For a Private Limited Company this includes
            a Board Meeting, passing a resolution, and filing Form DIR-12 with
            the Registrar of Companies within the prescribed timeline.
          </p>
        </motion.section>

        {/* Benefits / Pre-reqs / Deliverables grid */}
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
