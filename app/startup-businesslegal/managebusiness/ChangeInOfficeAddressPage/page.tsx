"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, // Updated from MapPinHouse for a more modern look
  ArrowRight,
  ChevronDown,
  FileText,
  Home,
  Shield,
  CheckCircle2,
  Calendar, // New icon for time limit
} from "lucide-react";

export default function ChangeInOfficeAddressPage() {
  const [openFaq, setOpenFaq] = useState(0); // State for FAQ Accordion

  // Structured content to match the new card design
  const benefits = [
    {
      icon: Shield,
      text: "Protection from Penalty and Legal actions",
    },
    {
      icon: CheckCircle2,
      text: "Ensures smooth government communication and compliance",
    },
    {
      icon: Home,
      text: "Boosts Transparency and Trust among stakeholders",
    },
    {
      icon: FileText,
      text: "Avoids legal complications due to outdated records",
    },
  ];

  const prerequisites = [
    "Form INC-20A for Commencement of Business should have been filed",
    "Copy of Latest Utility Bill of New office (Not Older than 45 Days)",
    "Copy of Rental Agreement/Sale Deed of the new office",
    "DIN of minimum 1 Director should be in 'APPROVED' Status",
    "One Valid Digital Signature (DSC) of an existing Director.",
  ];

  const deliverables = [
    "Board Resolution draft for shifting of office",
    "Filed e-form INC-22 with MCA",
    "MCA payment challan and acknowledgment",
    "Guidance on post-filing statutory updates (Name Plate, Letterhead)",
    "Declaration for Shifting of Registered Office",
  ];

  const faqs = [
    {
      q: "What documents are required for Office Address Change?",
      a: "New Address Proof, Board Resolution, NOC for Shifting of Registered Office and Declaration for Shifting of Registered Office. Lawizer will guide in the document preparation and filing of Forms.",
    },
    {
      q: "What are the fees and charges for Shifting of Office Address?",
      a: "Rs. 300 is for Form INC-22 if filed within the prescribed time limit. Note that Stamp Duty on the Rent/Lease Agreement is a separate, variable cost.",
    },
    {
      q: "What Forms are to be filed for changing the Company Address?",
      a: "Form INC-22 is the primary form filed with the ROC to notify the change. Other forms (like MGT-14 or INC-28) may be required depending on the type of shift (e.g., state change).",
    },
    {
      q: "What is time limit to file change of office address documents with ROC?",
      a: "The time limit is **30 days** from passing of the Board Resolution for shifting of Registered Office.",
    },
    {
      q: "What actions need to be taken after shifting of registered office address of Company?",
      a: "The Name Plate mentioning the address has to be modified, the Letterhead of the Company has to be changed, the Statutory Register has to be shifted to the new registered office, Shop Act License & PAN card need to be updated.",
    },
    {
      q: "What are different types of Registered Office Shifting?",
      a: "a) Within the Local Limits of the City\nb) Within the limits of the same ROC\nc) Within the same state but different ROC (Only in case of Maharashtra and Tamil Nadu)\nd) From one state to another (Complex process requiring Central Government approval).",
    },
  ];

  // Set primary color palette (using Gold/Orange/Yellow theme for the hero, and Blue/Purple for main content)
  const heroColor = "text-yellow-500";
  const primaryColor = "text-blue-600";
  const primaryBg = "bg-gradient-to-r from-blue-600 to-purple-600";
  const primaryHoverBg = "bg-gradient-to-r from-blue-700 to-purple-700";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      {/* Hero Section - Updated for new style */}
      <section className="relative flex items-center justify-center text-center min-h-[65vh] overflow-hidden bg-gradient-to-br from-yellow-700 via-orange-600 to-amber-700">
        <div className="absolute inset-0 bg-[url('/office-shift.jpg')] bg-cover bg-center opacity-20" />

        {/* Animated gradient orbs (adjusted for orange/yellow theme) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-6 py-12"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-4 rounded-2xl">
                <MapPin className="w-16 h-16 text-white" strokeWidth={1.5} />
              </div>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Change in Registered Office Address
          </h1>
          <p className="text-base md:text-lg text-yellow-100 max-w-2xl mx-auto leading-relaxed">
            Update your company’s statutory address legally and compliantly,
            ensuring all ROC filings (INC-22) are completed on time.
          </p>
          <p className="mt-3 text-sm text-yellow-300">
            Lawizer handles the Board Resolution drafting and timely filing of
            Forms to maintain your company's good standing.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
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
                <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                The Importance of Timely Filing
              </h2>
              <p className="text-slate-700 leading-relaxed mb-8">
                Changing your registered office address is a mandatory,
                multi-step compliance process. It requires passing a Board
                Resolution and filing Form **INC-22** with the Registrar of
                Companies (ROC) within **30 days** of the resolution. Timely
                compliance prevents penalties and maintains your company's legal
                status.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
                <Shield className={`w-5 h-5 ${primaryColor}`} />
                Key Benefits of Proper Address Filing
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
                      <b.icon
                        className={`w-5 h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-snug pt-1">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Prerequisites Section - New Style */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-600" />
                Documentation and Pre-Requisites
              </h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                To initiate the address change process, please ensure you have
                the following:
              </p>
              <div className="space-y-2 mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              {/* Deliverables Section - New Style */}
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Lawizer Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600" />
                    <p className="text-sm text-slate-700 font-medium">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sticky Sidebar CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700">
              <h3 className="text-xl font-bold text-white mb-3">
                Change Your Address Compliantly
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                Ensure your move is legally documented with the ROC, avoiding
                non-compliance penalties and communication issues.
              </p>

              <button
                className={`w-full group relative overflow-hidden px-6 py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Address Change Filing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-6 py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Book Consultation
              </button>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Timely INC-22 Filing (30 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Post-Filing Statutory Updates</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Applicable Board Resolution Drafting</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section - New Style with useState Accordion */}
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
                  // Dynamic height based on state for smooth accordion transition
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 pb-5 text-slate-700 leading-relaxed whitespace-pre-line">
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
