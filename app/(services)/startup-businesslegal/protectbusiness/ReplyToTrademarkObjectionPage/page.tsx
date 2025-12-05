"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileWarning, ArrowRight, ChevronDown } from "lucide-react";

export default function ReplyToTrademarkObjectionPage() {
  const benefits = [
    "Protection against Copycats: Successfully overcoming an objection strengthens your claim over the brand.",
    "Secures a Valuable Asset: A registered brand is one of the most valuable assets of a company.",
    "Aids in Business Growth: A registered trademark helps in the expansion of a business.",
    "Builds Credibility: It helps in image building and establishing credibility in the market.",
  ];

  const prerequisites = ["Trademark Application Number"];

  const deliverables = [
    "Reply Drafting support and facilitation.",
    "Trademark Registry filing receipt.",
    "Screenshot of the reply filing.",
  ];

  const faqs = [
    {
      q: "What is a Trademark Objection?",
      a: "A Trademark Objection means the trademark registry has examined your application and has found reasons to object to it, seeking clarification on certain points. The registry uploads an Examination Report on its website and sends a notice to the applicant. An objection is raised by the Trademark department itself, not by a third party. (An objection raised by a third party is called a Trademark Opposition).",
    },
    {
      q: "What is the difference between a Trademark Examination and a Trademark Objection?",
      a: "There is no difference; they are one and the same. The objection arises from the examination process.",
    },
    {
      q: "Why is it important to file a Reply to a Trademark Objection?",
      a: "It is crucial to submit a proper reply to the objection report within 30 days of its issue. If a legal reply is not filed in time, the trademark registry may cancel the application and update its status to 'Abandoned.'",
    },
    {
      q: "How do you respond to a Trademark Objection?",
      a: "The procedure requires legal knowledge and drafting skills as there is no fixed format; the reply depends on the specific grounds of the objection in each case. Professional assistance is generally recommended.",
    },
    {
      q: "What happens after filing the Reply to the Examination Report?",
      a: "The reply is submitted online, and an acknowledgment is received. A PDF copy of the reply is uploaded to the Trademark Registry's website under your application details. The application status will remain 'Objected' until the Registry reviews the reply and either accepts or rejects the trademark. This review process normally takes around six months to a year.",
    },
  ];

  // Define color palette using original hex codes
  const primaryRed = "#c92c41";
  const primaryBlue = "#4c3df7";
  const primaryOrange = "#e99b2b";
  const primaryDark = "#0e172b";
  const accentLight = "#f4f0ff"; // A light background color

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ef] via-[#f4f0ff] to-[#edf7ff] text-gray-900">
      {/* HERO SECTION - Adjusted for mobile
       * h-[50vh] instead of h-[75vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative h-[50vh] sm:h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="/protect.png"
          alt="Trademark Protection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-4 sm:px-6 max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6"
          >
            <FileWarning
              className="w-12 h-12 sm:w-16 sm:h-16"
              style={{ color: primaryRed }}
            />
          </motion.div>

          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3"
            style={{ color: primaryDark }}
          >
            Reply to{" "}
            <span style={{ color: primaryBlue }}>Trademark Objection</span>
          </h1>
          <p className="text-sm sm:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Defend your brand and ensure successful trademark registration by
            responding professionally to objections raised by the Trademark
            Registry.
          </p>
        </motion.div>
      </section>

      {/* Main Content - Adjusted padding and spacing */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-20 space-y-10 sm:space-y-16">
        {/* Description - Adjusted padding and text size */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100"
        >
          <h2
            className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
            style={{ color: primaryRed }}
          >
            What is a Reply to Trademark Objection?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            A **Reply to a Trademark Objection** is a legal document filed with
            the Trademark Registry, typically within **one month** of receiving
            an examination report. It formally addresses the challenges raised
            by the examiner, providing clarification and evidence to support the
            mark’s registrability. This reply is **essential** to defend your
            trademark application and prevent it from being marked as
            “Abandoned.”
          </p>
        </motion.section>

        {/* Info Grid - Changed to single column on mobile, remains 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          <GradientCard
            title="Benefits"
            color={primaryOrange}
            items={benefits}
          />
          <GradientCard
            title="Pre-Requisites"
            color={primaryBlue}
            items={prerequisites}
          />
          <GradientCard
            title="Deliverables"
            color={primaryRed}
            items={deliverables}
          />
        </div>

        {/* CTA - Adjusted padding and text size */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#e99b2b] via-[#c92c41] to-[#4c3df7] p-[1px] rounded-xl sm:rounded-3xl shadow-lg"
        >
          <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10">
            <h3
              className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4"
              style={{ color: primaryDark }}
            >
              File Your Reply to Trademark Objection Now
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
              Get professional assistance from legal experts to draft and file
              your reply on time and protect your brand identity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-white bg-gradient-to-r from-[#c92c41] to-[#4c3df7] hover:opacity-90 transition flex items-center justify-center gap-2">
                File Reply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium text-sm sm:text-base border border-[#0e172b]/10 text-[#0e172b] hover:bg-[#0e172b] hover:text-white transition">
                Get Legal Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQs - Adjusted padding and text size */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-10 shadow-md border border-gray-100"
        >
          <h3
            className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6"
            style={{ color: primaryBlue }}
          >
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group border border-gray-200 hover:border-[#c92c41]/50 rounded-lg sm:rounded-xl p-4 cursor-pointer transition bg-white"
              >
                <summary
                  className="font-medium text-sm sm:text-base"
                  style={{ color: primaryDark }}
                >
                  {faq.q}
                </summary>
                <p className="mt-2 text-xs sm:text-sm text-gray-600">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* Reusable Gradient Card - Adjusted for mobile responsiveness */
function GradientCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100 hover:shadow-lg transition"
    >
      <h3
        className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2"
        style={{ color }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: color }}
        ></span>
        {title}
      </h3>
      <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
