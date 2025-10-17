"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Banknote, // Icon for Banking/Finance
  ArrowRight,
} from "lucide-react";

export default function BankingLegalPage() {
  const router = useRouter();

  const BankingIcon = Banknote;

  const primaryColor = "#0077b6";
  const primaryAccent = "#00b4d8"; 

  const sections = [
    {
      id: "banking-disputes",
      title: "Resolve Banking & Financial Disputes",
      icon: BankingIcon,
      basePath: "/banking/",
      description:
        "Comprehensive legal support for recovering losses from digital fraud, rectifying CIBIL/Credit Score errors, and resolving cheque bounce cases.",
      services: [
        {
          name: "Digital & Electronic Banking Fraud",
          slug: "digital-banking-fraud",
          description:
            "Recovery of losses from unauthorized transactions (scams, phishing, UPI/Card fraud) using RBI's zero-liability rules.",
        },
        {
          name: "Loan & Advance Disputes (CIBIL & Harassment)",
          slug: "loan-advance-disputes",
          description:
            "Cases seeking rectification of incorrect Credit Score/CIBIL reporting and legal action against harassment by recovery agents.",
        },
        {
          name: "Cheque Bounce Cases (Section 138)",
          slug: "cheque-bounce-s138",
          description:
            "Criminal remedy for debt recovery when a cheque is dishonored due to insufficient funds, securing principal amount and fines.",
        },
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => {
    // Standard kebab-case routing
    const path = `${basePath}${slug}`;
    console.log("Navigating to:", path);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6, ${primaryAccent}E6)`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/bankinglegal.png')] bg-cover bg-center opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <BankingIcon className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Banking & Financial Legal Services
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Legal action and recovery support against banks, NBFCs, and
            financial fraud.
          </p>
          <p className="mt-3" style={{ color: "white" }}>
            Enforcing your rights under RBI rules and the Negotiable Instruments
            Act.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="p-3 rounded-full"
                  style={{ backgroundColor: `${primaryAccent}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: primaryAccent }} />
                </div>
                <h2 className="text-3xl font-bold text-[#0e172b]">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-10 max-w-3xl">
                {section.description}
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service) => (
                  <motion.div
                    key={service.slug}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="relative bg-white/90 border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl backdrop-blur-lg transition-all group overflow-hidden"
                  >
                    {/* Hover effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(to right, ${primaryAccent}10, transparent)`,
                      }}
                    />
                    <h3 className="text-lg font-semibold text-[#0e172b] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <button
                      onClick={() =>
                        handleViewDetails(section.basePath, service.slug)
                      }
                      className="flex items-center gap-2 font-medium group cursor-pointer"
                      style={{ color: primaryAccent }}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}
