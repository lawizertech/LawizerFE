"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowRight, CheckCircle2, FileText, Users, Shield, TrendingUp, Building2, ChevronDown } from "lucide-react";

export default function PrivateLimitedCompanyPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const benefits = [
    { icon: Shield, text: "Limited Liability Protection to Directors" },
    { icon: TrendingUp, text: "Better image and credibility in the Market" },
    { icon: Building2, text: "Easy to raise funds and loans" },
    { icon: Users, text: "Favorite Business structure for Investors" },
    { icon: Users, text: "Easy to attract Employees" },
    { icon: FileText, text: "Easy to Sell Company" },
  ];

  const prerequisites = [
    "Min 2 shareholders",
    "Min 2 directors",
    "The directors and shareholders can be the same person.",
    "One of the directors must be an Indian Resident (stayed in India for 182 days in the previous financial year).",
    "PAN Card copy (mandatory for Indian nationals)",
    "Identity Proof (Passport, Voter ID, Driving License, Aadhaar Card)",
    "Address Proof (Latest Bank Statement, Electricity/Mobile Bill, must not be older than two months/30 days)",
  ];

  const deliverables = [
    "DIN (Director Identification Number) for 2 directors",
    "Digital Signature Token (DSC) for all promoters",
    "Company Name Approval (RUN/SPICe as applicable)",
    "MOA + AOA",
    "Incorporation Certificate",
    "Company PAN card",
    "Company TAN/TDS Number",
    "Bank Account Opening Document Support",
  ];

  const faqs = [
    {
      q: "What documents are required to set up a Pvt. Ltd. Company in India?",
      a: "You need to arrange very simple documents of directors like a photograph, PAN card, and one address proof.",
    },
    {
      q: "Do I have to have office (commercial) space to start a Company?",
      a: "No, commercial office space is not required. You can show your own residential or rented home address as the registered office address of the Company. This office address can be changed at any time after the incorporation of the company.",
    },
    {
      q: "Who is the Registrar of Companies (ROC)?",
      a: "ROC is a Government office with whom companies get registered. Every State has one ROC office except Maharashtra and Tamilnadu where there are two ROC offices (Mumbai & Pune in Maharashtra; Chennai & Coimbatore in Tamilnadu).",
    },
    {
      q: "Do I have to physically visit the ROC Office while setting up the company?",
      a: "No. The service provider offers a complete online Company Incorporation process. All legal documentation and interaction with the ROC are handled by them.",
    },
    {
      q: "Is Private Limited Incorporation to be renewed every year?",
      a: "No. Once the company is formed, it will be valid until it is officially closed down. No renewal or fees are required. However, every year companies have to file very basic returns with the ROC office.",
    },
    {
      q: "What is a DIN?",
      a: "Director Identification Number (DIN) is a unique identification number required for a person to become a director of a company. It is issued by the ROC office and is similar to a PAN Card number.",
    },
    {
      q: "What is a DSC?",
      a: "A digital signature (DSC) is an electronic signature in the form of codes. It is used for signing the electronic forms filed with the ROC for the incorporation of a Company and cannot be used in physical documents.",
    },
    {
      q: "What is a Company name search? Why is it important for new company registration?",
      a: "A company name is a very important part of the registration. It is divided into 3 parts: Keyword (brand name), Activity word (nature of business), and Business Type word (Pvt. Ltd. or LLP). The suggested name should not match existing companies or trademarks.",
    },
    {
      q: "What is MOA & AOA of a company?",
      a: "MOA means Memorandum of Association and AOA means Articles of Association. These are the bylaws or rules based on which important matters like the main business of the company or meetings are decided.",
    },
    {
      q: "Can we change the office address of the company after Incorporation?",
      a: "Yes, the company office address can be changed anytime after incorporation.",
    },
    {
      q: "What is the capital of the Company?",
      a: "Capital is the investment made by shareholders. Authorised capital is the maximum amount for which a company can issue shares and is used to calculate ROC fees and stamp duty. Paid-up capital is the actual investment from shareholders that goes into the company's bank account, against which share certificates are issued.",
    },
    {
      q: "Do we have to deposit Share Capital in a Bank at the time of incorporation?",
      a: "No. After the company is registered, it needs to open a bank account, and then the capital can be deposited anytime within two months of incorporation.",
    },
    {
      q: "Does my business have to have some level of turnover to start a Private Limited company?",
      a: "No. A Private limited company can be started from scratch. There is no obligation for the company to have sales or turnover after incorporation.",
    },
    {
      q: "Are PF and GST automatically applicable to a Private Limited company?",
      a: "There is no automatic applicability. Provident Fund (PF) and GST laws are applicable in the same way for all types of businesses and apply only after crossing certain threshold limits.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center opacity-10" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{ 
              y: [0, -12, 0],
              rotateY: [0, 10, 0]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-red-500 to-orange-500 p-4 rounded-2xl">
                <Briefcase className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Private Limited Company
            <span className="block mt-2 text-3xl md:text-4xl bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              (Pvt. Ltd.)
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            A Private Limited Company is a separate legal entity that offers
            limited liability and credibility — ideal for founders planning to
            scale and attract investors.
          </p>
        </motion.div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
                Overview
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                A Private Limited Company (Pvt. Ltd.) is a popular corporate
                structure in India. It requires a minimum of 2 directors and 2
                shareholders, with at least one director being an Indian resident.
                It is a separate legal entity from its owners, offering{" "}
                <span className="font-semibold text-slate-900">limited liability</span> where shareholder risk is
                restricted to their shareholding. Shares are not freely
                transferable, and there is a maximum of 200 shareholders.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-2 rounded-lg bg-white shadow-sm">
                      <b.icon className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">{b.text}</p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Prerequisites
              </h3>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-purple-600" />
                What You'll Receive
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-purple-50/50 border border-purple-100">
                    <div className="w-2 h-2 rounded-full bg-purple-600" />
                    <p className="text-sm text-slate-700 font-medium">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Start your incorporation process or book a consultation with our
                legal experts today.
              </p>
              
              <button className="w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 mb-3">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Incorporation 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              
              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>100% Online Process</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Expert Legal Support</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>7-14 Days Completion</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-blue-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{f.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-slate-700 leading-relaxed">{f.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}