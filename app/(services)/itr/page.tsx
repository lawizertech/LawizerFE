"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FileText, // Main icon for ITR/Tax
  ArrowRight,
  User, // Icon for ITR-1/Individual
  TrendingUp, // Icon for ITR-3/Business
  DollarSign, // Icon for ITR-2/Investment
  Briefcase, // Icon for ITR-5/Entity
  Building, // Icon for ITR-6/Corporate
  Users, // Icon for ITR-4/Presumptive
} from "lucide-react";

export default function ITRFilingPage() {
  const router = useRouter();

  // Define the base path for these services
  const basePath = "/itr/";

  // Define a distinct color theme for ITR/Tax (e.g., Green/Teal for finance/money)
  const primaryColor = "#008080"; // Teal
  const primaryAccent = "#00bfa5"; // Cyan

  // Define ITR services based on the document
  const sections = [
    {
      id: "itr-forms",
      title: "Select Your Income Tax Return (ITR) Form",
      icon: FileText,
      description:
        "We offer hassle-free income tax return filing services with Chartered Accountants (CAs) and tax advisors. Select the form applicable to your income structure below.",
      services: [
        {
          name: 'ITR-1 (Sahaj) "The Salaried Simplifier"',
          slug: "itr-1",
          icon: User,
          price: "₹499 – ₹799",
          description:
            "For Resident Individuals with Total Income up to ₹50 Lakh from Salary, One House Property, and Other Sources.",
        },
        {
          name: 'ITR-2 "The Investor\'s Choice"',
          slug: "itr-2",
          icon: DollarSign,
          price: "₹799 – ₹1,299",
          description:
            "For Individuals/HUFs having Total Income > ₹50 Lakh, Capital Gains, Foreign Assets, or Multiple House Properties (No Business Income).",
        },
        {
          name: 'ITR-3 "The Entrepreneur\'s Form"',
          slug: "itr-3",
          icon: TrendingUp,
          price: "₹1,199 – ₹1,999",
          description:
            "For Individuals/HUFs having income from 'Profits and Gains of Business or Profession' (including partners in a firm).",
        },
        {
          name: 'ITR-4 (Sugam) "The Small Business Special"',
          slug: "itr-4",
          icon: Users,
          price: "₹699 – ₹1,399",
          description:
            "For Resident Individuals, HUFs, or Firms (other than LLP) opting for the Presumptive Taxation Scheme (44AD/ADA/AE) with Total Income up to ₹50 Lakh.",
        },
        {
          name: 'ITR-5 "The Entity Form"',
          slug: "itr-5",
          icon: Briefcase,
          price: "₹1,499 – ₹2,499",
          description:
            "For Firms, LLPs, AOPs, BOIs, etc. (Non-individual entities).",
        },
        {
          name: 'ITR-6 "The Corporate Form"',
          slug: "itr-6",
          icon: Building,
          price: "₹4,999 – ₹9,999",
          description:
            "Mandatory Filing for all Companies registered under the Companies Act (excluding Section 11 exempted companies).",
        },
      ],
    },
  ];

  const handleViewDetails = (slug: string) => {
    // Slugs are already hyphenated, so we just append them.
    const path = `${basePath}${slug}`;
    console.log("Navigating to:", path);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <section
        className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${primaryColor}, ${primaryAccent})`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/taxhero.png')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <FileText className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Income Tax Return (ITR) Filing Services
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Hassle-free ITR filing with Chartered Accountants and tax advisors.
            Get your ITR filed quickly, easily, and maximize your tax savings.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
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
                {section.services.map((service, idx) => {
                  const ServiceIcon = service.icon;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="relative bg-white/90 border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl backdrop-blur-lg transition-all group overflow-hidden"
                    >
                      {/* Hover effect */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(to right, ${primaryAccent}10, transparent)`,
                        }}
                      />
                      <ServiceIcon
                        className="w-8 h-8 mb-4"
                        style={{ color: primaryAccent }}
                      />
                      <h3 className="text-xl font-semibold text-[#0e172b] mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <p className="text-gray-900 font-semibold text-sm mb-3">
                        {service.price}
                      </p>
                      <button
                        onClick={() => handleViewDetails(service.slug)}
                        className="flex items-center gap-2 font-medium group cursor-pointer"
                        style={{ color: primaryAccent }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Floating CTA Section (As requested in the notes) */}
      <section className="sticky bottom-0 bg-white shadow-2xl border-t border-gray-200 py-4 z-20">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center flex-wrap">
          <p className="text-gray-700 text-base font-medium">
            Still having queries for what to select? Feel free to talk to our
            tax consultant for free.
          </p>
          <button
            onClick={() => console.log("Directing to contact/consultation")}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg mt-3 md:mt-0"
            style={{ background: primaryAccent }}
          >
            Talk to a Tax Consultant
          </button>
        </div>
      </section>
    </div>
  );
}
