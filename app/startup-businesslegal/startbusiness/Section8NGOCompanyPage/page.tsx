"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  FileText,
  Building2,
  ChevronDown,
  Shield,
  TrendingUp,
} from "lucide-react";

export default function Section8NGOCompanyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    {
      icon: Shield,
      text: "Many privileges and exemptions are granted under Company Law",
    },
    {
      icon: FileText,
      text: "Exemption from the requirement of Minimum Paid-up capital",
    },
    { icon: Shield, text: "Exemption from Stamp Duty for registration" },
    {
      icon: FileText,
      text: "Non-application of Companies Auditor's Report Order (CARO) is often available",
    },
    {
      icon: Users,
      text: "A registered partnership firm can be a member in its own capacity",
    },
    {
      icon: TrendingUp,
      text: "Tax deductions for donors to the company under section 80G of the Income Tax Act",
    },
  ];

  const prerequisites = [
    "Members/Shareholders: Minimum 2 for a private limited Section 8 company and 7 for a public limited Section 8 company",
    "Directors: Minimum 2 for a private structure and 3 for a public structure",
    "The directors and members can be the same people",
    "Address proof for the proposed office is required",
    "Other normal documents for directors (PAN, ID, Address proof) are the same as for a private limited company",
  ];

  const deliverables = [
    "Director Identification Number (DIN) for directors",
    "Digital Signature Certificate (DSC) for promoters",
    "Company name approval",
    "MOA (Memorandum of Association) & AOA (Articles of Association)",
    "Incorporation certificate",
    "Company PAN Card",
    "Company TAN/TDS Number",
    "Bank account opening document support",
  ];

  const faqs = [
    {
      q: "What documents are required to set up a Section 8 Company in India?",
      a: "You need to arrange very simple documents for the directors, such as a photograph, PAN card, and an address proof.",
    },
    {
      q: "Do I have to have an office (commercial) space to start a Section 8 Company?",
      a: "No, commercial office space is not required. You can use a residential or rented home address as the registered office address.",
    },
    {
      q: "Who is the Registrar of Companies (ROC)?",
      a: "The ROC is the Government office responsible for registering companies and LLPs in India.",
    },
    {
      q: "Do I have to physically visit the ROC Office while setting up the company?",
      a: "No. The incorporation process is done online.",
    },
    {
      q: "Is Section 8 Company Incorporation to be renewed every year?",
      a: "No. Once the company is formed, the registration is valid until it is officially closed down. However, annual compliance filings are mandatory.",
    },
    {
      q: "What is a DIN?",
      a: "Director Identification Number (DIN) is a unique identification number required for a person to become a director of a company.",
    },
    {
      q: "What is a DSC?",
      a: "A Digital Signature Certificate (DSC) is an electronic signature used for signing the electronic forms filed with the ROC.",
    },
    {
      q: "What is a Company name search?",
      a: "The company name must be unique. For a Section 8 company, the name must include a word like 'Foundation,' 'Federation,' 'Association,' or 'Council,' and it is prohibited from using 'Private Limited' or 'Limited.'",
    },
    {
      q: "What are the MOA & AOA of a company?",
      a: "MOA (Memorandum of Association) and AOA (Articles of Association) are the legal documents that define the company's charitable objectives and its internal rules.",
    },
    {
      q: "Can we change the office address of the company after Incorporation?",
      a: "Yes, the registered office address can be changed anytime after incorporation by following the proper procedure.",
    },
    {
      q: "What is the capital of the Company?",
      a: "Section 8 companies do not have a minimum capital requirement. They are typically formed as companies limited by guarantee, where members contribute funds in the form of subscriptions or donations rather than share capital.",
    },
    {
      q: "Do we have to deposit capital in a Bank at the time of incorporation?",
      a: "No. Any initial funds or subscriptions are deposited after the company is registered and its bank account is opened.",
    },
    {
      q: "Does my organisation have to have some level of turnover to start a Section 8 Company?",
      a: "No. A Section 8 Company is formed to promote non-profit objectives and can be started from scratch without any prior activity or turnover.",
    },
    {
      q: "Are PF and GST automatically applicable to a Section 8 Company?",
      a: "There is no automatic applicability. Laws for Provident Fund (PF) and GST apply based on specific criteria like employee count, turnover from any commercial activities, etc., and not on the type of company.",
    },
    {
      q: "Can a Section 8 company be converted into a private limited company?",
      a: "Yes, after taking approval from the ROC.",
    },
    {
      q: "Can a Section 8 company distribute its profit to anyone?",
      a: "No. The profit or income of a non-profit company can only be used for promoting the charitable work for which it is involved. The declaration of dividends or distribution of profit to its promoters is not allowed.",
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
                <Users className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Section 8 NGO Company
            <span className="block mt-2 text-3xl md:text-4xl bg-gradient-to-r from-[#e99b2b] to-[#c92c41] bg-clip-text text-transparent">
              (Non-Profit)
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Establish a credible non-profit entity to drive social change with
            tax exemptions and limited liability.
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
                A <strong>Section 8 Company</strong> is a Non-Profit
                Organisation (NGO) registered under the Companies Act, 2013. It
                is formed to promote charitable causes like education, arts, or
                social welfare. It must use any profits exclusively for these
                objectives and cannot distribute dividends to its members. It
                requires a minimum of two directors and two members, has limited
                liability, and has no minimum capital requirement. It is highly
                credible and eligible for tax benefits (like registration under
                Sections 12A and 80G of the Income Tax Act).
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
                Ready to Incorporate Your Section 8 Company?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Start your non-profit registration or book a free consultation
                with our experts today.
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
