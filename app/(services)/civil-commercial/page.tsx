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
  const router = useRouter();
  const primaryColor = "#6d28d9";
  const primaryAccent = "#a78bfa";
  const secondaryColor = "#0e172b";
  const [activeTab, setActiveTab] = useState<"civil" | "criminal">("civil");

  const contactFormRef = useRef<HTMLDivElement | null>(null);
  const scrollToForm = () =>
    contactFormRef.current?.scrollIntoView({ behavior: "smooth" });

  const civilContent = {
    heading: "Civil & Commercial Litigation",
    introduction:
      "Civil litigation involves legal disagreements between two or more parties seeking compensation or remedy, without criminal accusations. Commercial litigation involves business entities and follows similar procedures. Disputes include breach of contract, real estate, and antitrust cases.",
    services:
      "Our litigation team is experienced in the CPC and foreign regulations. We handle drafting, filing, court appearances, injunctions, and appeals. Our expertise covers property, employment, and personal injury cases, ensuring practical and efficient dispute resolution before all Judicial & Quasi-Judicial Bodies.",
    query: "civil_commercial",
  };

  const criminalContent = {
    heading: "Criminal Law & Defense",
    introduction:
      "Criminal litigation involves a criminal trial with a prosecutor (representing the state) and a defense attorney. It is governed by the IPC, CrPC, and Indian Evidence Act, covering cases like murder, theft, assault, and financial crimes, alongside specialized acts like POCSO and POSH.",
    services:
      "We provide thorough defense strategies, effective representation at arraignments and hearings, and expert negotiation for pleas and settlements. Our lawyers are skilled in obtaining bail and anticipatory bail. We also specialize in cybercrime cases under the Information Technology Act 2000, offering nuanced legal defense.",
    query: "criminal",
  };

  type ContentType = {
    heading: string;
    introduction: string;
    services: string;
    query: string;
  };

  type ServiceSectionProps = {
    content: ContentType;
    icon: React.ReactNode;
    router: ReturnType<typeof useRouter>;
  };

  const ServiceSection = ({ content, icon, router }: ServiceSectionProps) => {
    const handleSeeAdvocates = () =>
      router.push(`/start-consultation?type=${content.query}`);
    return (
      <motion.section
        key={content.heading}
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
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color: secondaryColor }}
          >
            {content.heading}
          </h2>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>{content.introduction}</p>
          <p className="mt-4 pt-4 border-t border-gray-100">
            {content.services}
          </p>
        </div>

        <motion.button
          onClick={handleSeeAdvocates}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 px-6 py-3 text-white rounded-lg shadow-md flex items-center gap-2 transition-all duration-300"
          style={{ backgroundColor: primaryColor }}
        >
          See Advocates
          <ArrowRight className="w-5 h-5 ml-1" />
        </motion.button>
      </motion.section>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 relative">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] overflow-hidden pt-10 sm:pt-20 md:pt-24"
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
          className="relative z-10 max-w-4xl px-4 sm:px-6"
        >
          <Gavel className="w-12 h-12 md:w-16 md:h-16 text-white mx-auto mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
            Civil, Commercial, & Criminal Law
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-lg mx-auto">
            Expert litigation and strategic counsel for all major dispute types.
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Tabs */}
        <div className="flex flex-col sm:flex-row border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("civil")}
            className={`flex-1 text-center py-3 px-4 text-lg font-semibold transition-all ${
              activeTab === "civil"
                ? "border-b-4 border-purple-600 text-purple-700"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            <Briefcase className="w-5 h-5 inline mr-2" />
            Civil & Commercial
          </button>
          <button
            onClick={() => setActiveTab("criminal")}
            className={`flex-1 text-center py-3 px-4 text-lg font-semibold transition-all ${
              activeTab === "criminal"
                ? "border-b-4 border-purple-600 text-purple-700"
                : "text-gray-500 hover:text-purple-600"
            }`}
          >
            <Lock className="w-5 h-5 inline mr-2" />
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
              router={router}
            />
          )}

          {activeTab === "criminal" && (
            <ServiceSection
              content={criminalContent}
              icon={
                <Lock className="w-6 h-6" style={{ color: primaryAccent }} />
              }
              router={router}
            />
          )}
        </motion.div>
      </div>

      {/* Floating Consult Button */}
      <motion.button
        onClick={scrollToForm}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-5 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
        style={{ background: primaryAccent }}
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">Consult an Expert</span>
      </motion.button>
    </div>
  );
}
