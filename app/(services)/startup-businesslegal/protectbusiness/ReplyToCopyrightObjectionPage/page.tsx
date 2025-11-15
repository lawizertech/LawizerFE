"use client";

import React from "react";
import { motion } from "framer-motion";
import { PenTool, ArrowRight } from "lucide-react";

export default function ReplyToCopyrightObjectionPage() {
  const benefits = [
    "Protection against Copycats: Secures your original work from unauthorized copying or use.",
    "Registered brand is Most valuable asset of the Company: Protects your creative work, which can be a valuable asset.",
    "Helps in expansion of business and growth: Provides legal backing for commercial exploitation and growth.",
    "Copyright helps in building credibility in Market: Enhances your reputation and trust in the marketplace.",
    "Helps in image building and earnings: Supports brand image and potential revenue generation from your work.",
  ];

  const prerequisites = [
    "Copyright Diary number",
    "Copyright objection notice",
  ];

  const deliverables = [
    "Reply Drafting support and facilitation",
    "Reply filing receipt",
  ];

  const faqs = [
    {
      q: "What is Copyright Objection?",
      a: "Copyright Objection means the copyright department has examined your copyright application and found reasons to object, seeking clarification. The registry sends a letter asking for a reply.",
    },
    {
      q: "Why to File Reply to Copyright Objection - Advantages & Benefits",
      a: "It is crucial to submit a proper reply within 15–30 days of the issue. If a legal reply is not filed, the copyright registry may cancel the application and mark it as rejected.",
    },
    {
      q: "How to Respond to Copyright Objection",
      a: "The procedure requires legal knowledge and drafting skills. Our experts can help prepare and file the reply based on your case. There is no fixed format—it depends on the grounds of objection.",
    },
    {
      q: "What happens after filing of Reply to Examination Report?",
      a: "The reply is sent to the copyright department. Once received, they review your response and proceed toward registration after examination.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fff8ef] via-[#f4f0ff] to-[#edf7ff] text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <img
          src="/copyright-objection-hero.png"
          alt="Copyright Protection"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 px-6 max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <PenTool className="w-16 h-16 text-[#c92c41]" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-[#0e172b]">
            Reply to <span className="text-[#4c3df7]">Copyright Objection</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            File a precise and professional response to overcome copyright
            examination objections and secure your registration smoothly.
          </p>
        </motion.div>
      </section>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-16">
        {/* Description */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-10 shadow-md border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-[#c92c41] mb-4">
            What is a Reply to Copyright Objection?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            A <strong>Reply to Copyright Objection</strong> is a formal response
            submitted to the Registrar of Copyrights against objections raised
            during the examination process. It clarifies discrepancies, proves
            originality and ownership, and addresses any issues of similarity or
            prohibited content. Filing this response accurately is crucial to
            secure the final copyright registration.
          </p>
        </motion.section>

        {/* Info Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          <GradientCard title="Benefits" color="#e99b2b" items={benefits} />
          <GradientCard
            title="Pre-Requisites"
            color="#4c3df7"
            items={prerequisites}
          />
          <GradientCard
            title="Deliverables"
            color="#c92c41"
            items={deliverables}
          />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-gradient-to-r from-[#e99b2b] via-[#c92c41] to-[#4c3df7] p-[1px] rounded-3xl shadow-lg"
        >
          <div className="bg-white rounded-3xl p-10">
            <h3 className="text-2xl font-semibold mb-4 text-[#0e172b]">
              File Your Reply to Copyright Objection Now
            </h3>
            <p className="text-gray-600 mb-6">
              Get professional assistance from legal experts to draft and file
              your reply on time and protect your creative work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#c92c41] to-[#4c3df7] hover:opacity-90 transition flex items-center gap-2">
                File Reply Now <ArrowRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3 rounded-xl font-medium border border-[#0e172b]/10 text-[#0e172b] hover:bg-[#0e172b] hover:text-white transition">
                Get Legal Consultation
              </button>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#4c3df7] mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group border border-gray-200 hover:border-[#c92c41]/50 rounded-xl p-4 cursor-pointer transition bg-white"
              >
                <summary className="font-medium text-[#0e172b] group-open:text-[#c92c41]">
                  {faq.q}
                </summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* Reusable Gradient Card */
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
      className="bg-white rounded-3xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition"
    >
      <h3
        className="text-xl font-semibold mb-4 flex items-center gap-2"
        style={{ color }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: color }}
        ></span>
        {title}
      </h3>
      <ul className="text-gray-700 space-y-2 list-disc list-inside">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
