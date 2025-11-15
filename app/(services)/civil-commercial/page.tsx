"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Gavel,
  ArrowRight,
  Briefcase,
  Lock,
  MessageCircle,
} from "lucide-react";

export default function CivilCriminalLegalPage() {
  const primaryColor = "#6d28d9";
  const primaryAccent = "#a78bfa";
  const secondaryColor = "#0e172b";
  const [activeTab, setActiveTab] = useState<"civil" | "criminal">("civil");

  const contactFormRef = useRef<HTMLDivElement | null>(null);

  const scrollToForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // --- CONDENSED CONTENT ---
  const civilContent = {
    heading: "Civil & Commercial Litigation",
    introduction:
      "Civil litigation involves legal disagreements between two or more parties seeking compensation or remedy, without criminal accusations. Commercial litigation involves business entities and follows similar procedures. Disputes include breach of contract, real estate, and antitrust cases.",
    services:
      "Our litigation team is experienced in the CPC and foreign regulations. We handle drafting, filing, court appearances, injunctions, and appeals. Our expertise covers property, employment, and personal injury cases, ensuring practical and efficient dispute resolution before all Judicial & Quasi-Judicial Bodies.",
  };

  const criminalContent = {
    heading: "Criminal Law & Defense",
    introduction:
      "Criminal litigation involves a criminal trial with a prosecutor (representing the state) and a defense attorney. It is governed by the IPC, CrPC, and Indian Evidence Act, covering cases like murder, theft, assault, and financial crimes, alongside specialized acts like POCSO and POSH.",
    services:
      "We provide thorough defense strategies, effective representation at arraignments and hearings, and expert negotiation for pleas and settlements. Our lawyers are skilled in obtaining bail and anticipatory bail. We also specialize in cybercrime cases under the Information Technology Act 2000, offering nuanced legal defense.",
  };

  // --- Common Components ---

  type ServiceSectionProps = {
    content: {
      heading: string;
      introduction: string;
      services: string;
    };
    icon: React.ReactNode;
  };

  const ServiceSection = ({ content, icon }: ServiceSectionProps) => (
    <motion.section
      key={content.heading} // Key ensures remounting/re-animating when tab changes
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="mb-8"
    >
      <div className="flex items-center gap-4 mb-6">
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: `${primaryAccent}20` }}
        >
          {icon}
        </div>
        <h2 className="text-2xl font-bold" style={{ color: secondaryColor }}>
          {content.heading}
        </h2>
      </div>

      <div className="space-y-4 text-gray-700 leading-relaxed text-base">
        {" "}
        {/* Reduced text size */}
        <p>{content.introduction}</p>
        <p className="mt-4 pt-4 border-t border-gray-100">{content.services}</p>
      </div>
    </motion.section>
  );

  const ContactFormSection = () => (
    <section
      ref={contactFormRef}
      className="bg-white py-12 shadow-xl border-t border-b border-gray-100"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-4 text-center"
          style={{ color: primaryColor }}
        >
          Consult Our Litigation Experts
        </h2>
        <p className="text-gray-700 mb-8 text-center">
          Request a consultation with a specialized lawyer to discuss your
          Civil, Commercial, or Criminal case strategy.
        </p>

        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            />
            <select className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400">
              <option value="" disabled>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Practice Area Dropdown */}
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white appearance-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
            aria-label="Practice Area"
            defaultValue={activeTab}
          >
            <option value="civil">Civil & Commercial Litigation</option>
            <option value="criminal">Criminal Law</option>
          </select>

          <textarea
            placeholder="Enter your message/enquiry (briefly describe your dispute)"
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400 resize-none"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full p-3 rounded-lg font-semibold text-white transition-all flex items-center justify-center gap-2"
            style={{ background: primaryColor }}
          >
            Submit Enquiry
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </form>
      </div>
    </section>
  );

  // --- Main Render ---
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[50vh] overflow-hidden" // Reduced Hero height
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6, #6b46c1)`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/legalhero.png')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <Gavel className="w-12 h-12 text-white mx-auto mb-4" />{" "}
          {/* Reduced icon size */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
            Civil, Commercial, & Criminal Law
          </h1>
          <p className="text-base text-gray-200 max-w-lg mx-auto">
            Expert litigation and strategic counsel for all major dispute types.
          </p>
        </motion.div>
      </section>

      <ContactFormSection />

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div
          className="flex border-b border-gray-200 mb-8"
          style={{ color: secondaryColor }}
        >
          <button
            onClick={() => setActiveTab("civil")}
            className={`flex-1 text-center py-3 px-4 text-lg font-semibold transition-all ${
              activeTab === "civil"
                ? "border-b-4 border-purple-600"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            <Briefcase
              className="w-5 h-5 inline mr-2"
              style={{
                color: activeTab === "civil" ? primaryColor : "inherit",
              }}
            />
            Civil & Commercial
          </button>
          <button
            onClick={() => setActiveTab("criminal")}
            className={`flex-1 text-center py-3 px-4 text-lg font-semibold transition-all ${
              activeTab === "criminal"
                ? "border-b-4 border-purple-600"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            <Lock
              className="w-5 h-5 inline mr-2"
              style={{
                color: activeTab === "criminal" ? primaryColor : "inherit",
              }}
            />
            Criminal Defense
          </button>
        </div>

        {/* Tab Content */}
        <motion.div className="relative">
          {activeTab === "civil" && (
            <ServiceSection
              content={civilContent}
              icon={
                <Briefcase
                  className="w-6 h-6"
                  style={{ color: primaryAccent }}
                />
              }
            />
          )}

          {activeTab === "criminal" && (
            <ServiceSection
              content={criminalContent}
              icon={
                <Lock className="w-6 h-6" style={{ color: primaryAccent }} />
              }
            />
          )}
        </motion.div>
      </div>

      {/* Floating Consult Button */}
      <motion.button
        onClick={scrollToForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
        style={{ background: primaryAccent }}
      >
        <MessageCircle className="w-5 h-5" />
        Consult an Expert
      </motion.button>
    </div>
  );
}
