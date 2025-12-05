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
  // Use a sensible default, e.g., the first FAQ open on initial load
  const [openFaq, setOpenFaq] = useState(0);

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
      {/* HERO SECTION - Adjusted for mobile
       * min-h-[50vh] instead of [65vh] for mobile screens
       * px-4 for tighter padding on small screens
       */}
      <section className="relative flex items-center justify-center text-center min-h-[50vh] md:min-h-[65vh] overflow-hidden bg-gradient-to-br from-yellow-700 via-orange-600 to-amber-700">
        <div className="absolute inset-0 bg-[url('/office-shift.jpg')] bg-cover bg-center opacity-20" />

        {/* Animated gradient orbs - Reduced size and opacity for mobile */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl px-4 py-10 sm:px-6 sm:py-12"
        >
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotateY: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-md opacity-50" />
              <div className="relative bg-gradient-to-br from-yellow-500 to-orange-500 p-3 rounded-xl sm:p-4">
                <MapPin
                  className="w-10 h-10 text-white sm:w-16 sm:h-16"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 tracking-tight text-white">
            Change in Registered Office Address
          </h1>
          <p className="text-sm md:text-lg text-yellow-100 max-w-2xl mx-auto leading-relaxed px-2">
            Update your company’s statutory address legally and compliantly,
            ensuring all ROC filings (**INC-22**) are completed on time.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-yellow-300 px-2">
            Lawizer handles the Board Resolution drafting and timely filing of
            Forms to maintain your company's good standing.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT AREA - Adjusted for mobile
       * px-4 instead of px-6
       * py-10 instead of py-16
       */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:px-6 sm:py-16">
        {/* Grid Layout - Stacked on small screens */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            {/* PRIMARY CONTENT CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                The Importance of Timely Filing
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 sm:mb-8">
                Changing your registered office address is a mandatory,
                multi-step compliance process. It requires passing a Board
                Resolution and filing **Form INC-22** with the Registrar of
                Companies (ROC) within **30 days** of the resolution. Timely
                compliance prevents penalties and maintains your company's legal
                status.
              </p>

              {/* Benefits Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`} />
                Key Benefits of Proper Address Filing
              </h3>
              {/* Benefits Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {benefits.map((b, i) => (
                  <motion.div
                    key={b.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-lg sm:rounded-xl bg-gradient-to-br from-slate-50 to-blue-50/50 border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="p-1 sm:p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                      <b.icon
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${primaryColor}`}
                        strokeWidth={2}
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-snug pt-0.5">
                      {b.text}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Prerequisites Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                Documentation and Pre-Requisites
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                To initiate the address change process, please ensure you have
                the following:
              </p>
              {/* Prerequisites List - Adjusted padding and text size */}
              <div className="space-y-2 mb-6 sm:mb-8">
                {prerequisites.map((p, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <CheckCircle2
                      className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <p className="text-slate-700 text-sm">{p}</p>
                  </div>
                ))}
              </div>

              {/* Deliverables Section - New Style */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                Lawizer Deliverables
              </h3>
              {/* Deliverables Grid - Single column on very small screens, two columns on sm and up */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-blue-50/50 border border-blue-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-slate-700 font-medium">
                      {d}
                    </p>
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
            // No sticky on mobile, better for scrolling
            className="lg:sticky lg:top-24 h-fit"
          >
            {/* ASIDE CARD
             * p-6 instead of p-8 for mobile
             */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Change Your Address Compliantly
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mb-5 sm:mb-6 leading-relaxed">
                Ensure your move is legally documented with the ROC, avoiding
                non-compliance penalties and communication issues.
              </p>

              {/* Buttons - slightly smaller padding and text size */}
              <button
                className={`w-full group relative overflow-hidden px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold ${primaryBg} text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 mb-3`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                  Start Address Change Filing
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div
                  className={`absolute inset-0 ${primaryHoverBg} opacity-0 group-hover:opacity-100 transition-opacity`}
                />
              </button>

              <button className="w-full px-5 py-3 sm:px-6 sm:py-4 rounded-xl font-semibold bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 text-sm sm:text-base">
                Book Consultation
              </button>

              {/* Checklists - smaller text and icons */}
              <div className="mt-5 pt-5 border-t border-slate-700">
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Timely INC-22 Filing (30 Days)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm mb-2">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Post-Filing Statutory Updates</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                  <span>Applicable Board Resolution Drafting</span>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* FAQs Section - Adjusted for mobile
         * p-6 instead of p-8
         */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-blue-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-blue-50 transition-colors"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  // Dynamic height based on state for smooth accordion transition
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700 leading-relaxed whitespace-pre-line">
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
