"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  ArrowRight,
  CheckCircle2,
  FileText,
  Users,
  ChevronDown,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function PublicLimitedCompanyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Limited Liability Protection for Directors",
    },
    { icon: TrendingUp, text: "Better image and credibility in the Market" },
    { icon: Users, text: "Easy to raise funds and loans" },
    { icon: TrendingUp, text: "Favorite Business structure for investment" },
    { icon: FileText, text: "Easy Transfer of shares" },
    { icon: Building2, text: "Most Suitable for Heavy investment" },
  ];

  const prerequisites = [
    "Minimum 7 shareholders",
    "Minimum 3 Directors",
    "The directors and shareholders can be the same person",
    "One of the directors must be an Indian Resident",
    "Minimum authorised share capital as per law",
    "Documents required are the same as for a private limited company (PAN, Identity Proof, Address Proof for directors/shareholders)",
  ];

  const deliverables = [
    "DIN for 3 directors",
    "DSC Token for all shareholders",
    "Company name approval",
    "MOA+AOA",
    "Incorporation certificate",
    "Company PAN Card",
    "Company TAN/TDS Number",
    "Bank a/c opening document support",
  ];

  const faqs = [
    {
      q: "What documents are required to set up a Public Ltd. Company in India?",
      a: "You need to arrange very simple documents of directors like a photograph, PAN card, and one address proof.",
    },
    {
      q: "Do I have to have an office (commercial) space to start a Company?",
      a: "No, commercial office space is not required. You can show your own residential or rented home address as the registered office address of the Company.",
    },
    {
      q: "Who is the Registrar of Companies (ROC)?",
      a: "The ROC is a Government office with whom companies get registered.",
    },
    {
      q: "Do I have to physically visit the ROC Office while setting up the company?",
      a: "No. The incorporation process is typically done online, with a service provider handling all documentation and interaction with the ROC.",
    },
    {
      q: "Is Public Limited Incorporation to be renewed every year?",
      a: "No. Once the company is formed, it is valid until it is officially closed down. However, annual compliance filings with the ROC are required.",
    },
    {
      q: "What is a DIN?",
      a: "Director Identification Number (DIN) is a unique identification number required for a person to become a director of a company.",
    },
    {
      q: "What is a DSC?",
      a: "A Digital Signature Certificate (DSC) is an electronic signature used for signing electronic forms filed with the ROC.",
    },
    {
      q: "What is a Company name search? Why is it important for new company registration?",
      a: "The company name is crucial for registration. It consists of 3 parts: Keyword (brand name), Activity word (nature of business), and Business Type word (which must be 'Limited'). The name should not match existing companies or trademarks.",
    },
    {
      q: "What are the MOA & AOA of a company?",
      a: "MOA (Memorandum of Association) and AOA (Articles of Association) are the legal documents that define the company's objectives and internal rules.",
    },
    {
      q: "Can we change the office address of the company after Incorporation?",
      a: "Yes, the company's registered office address can be changed anytime after incorporation by following the prescribed procedure.",
    },
    {
      q: "What is the capital of the Company?",
      a: "Capital is the investment made by shareholders. Authorised capital is the maximum amount of shares a company can issue. Paid-up capital is the actual amount of money received from shareholders for the shares issued.",
    },
    {
      q: "Do we have to deposit Share Capital in a Bank at the time of incorporation?",
      a: "No. After the company is registered and a bank account is opened, the share capital can be deposited within the prescribed time (usually within two months).",
    },
    {
      q: "Does my business have to have some level of turnover to start a Public Limited company?",
      a: "No, this is not true. A Public Limited Company can be started from scratch without any obligation to have prior sales or turnover.",
    },
    {
      q: "Are PF and GST automatically applicable to a Public Limited company?",
      a: "There is no automatic applicability. Laws for Provident Fund (PF) and GST apply to all types of businesses only after they cross certain threshold limits.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-[#0e172b] via-[#121f3c] to-[#0e172b]">
        <div className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center opacity-10" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c92c41]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4c3df7]/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#c92c41] to-[#e99b2b] rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-[#c92c41] to-[#e99b2b] p-4 rounded-2xl">
                <Building2 className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Public Limited Company
            <span className="block mt-2 text-3xl md:text-4xl bg-gradient-to-r from-[#e99b2b] to-[#c92c41] bg-clip-text text-transparent">
              (PLC)
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A large-scale corporate structure designed for raising public
            capital with limited liability and enhanced credibility.
          </p>
        </motion.div>
      </section>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[#c92c41] to-[#e99b2b] rounded-full" />
                Overview
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A <strong>Public Limited Company (PLC)</strong> is a large-scale
                corporate entity governed by the Companies Act, 2013. It
                requires a minimum of 7 shareholders and 3 directors. A PLC can
                freely offer shares to the general public to raise vast capital,
                and its shareholders enjoy limited liability. It must include
                the word "Limited" in its name.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#c92c41]" />
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-orange-50/40 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon
                        className="w-5 h-5 text-[#c92c41]"
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#4c3df7]" />
                Prerequisites
              </h3>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#e99b2b]"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#4c3df7]" />
                What You'll Receive
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#4c3df7]" />
                    <p className="text-sm text-slate-700 font-medium">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-[#0e172b] to-[#121f3c] rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Incorporate Your PLC?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Start your Public Limited Company registration or book a free
                consultation with our experts today.
              </p>

              <button className="w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-[#c92c41] to-[#e99b2b] text-white shadow-lg shadow-[#c92c41]/30 hover:shadow-xl hover:shadow-[#e99b2b]/40 transition-all duration-300 mb-3">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Incorporation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e99b2b]" />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e99b2b]" />
                  <span>Expert Legal Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#e99b2b]" />
                  <span>7–14 Days Completion</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-[#4c3df7] to-[#c92c41] rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-[#e99b2b]/60 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-[#e99b2b]/10 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-slate-700 leading-relaxed">
                    {f.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
