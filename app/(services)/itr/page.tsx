"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  User,
  TrendingUp,
  DollarSign,
  Briefcase,
  Building,
  Users,
} from "lucide-react";

export default function ITRFilingPage() {
  const router = useRouter();
  const basePath = "/itr/";
  const primaryColor = "#008080";
  const primaryAccent = "#00bfa5";

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
          originalPrice: "₹999 – ₹1,499",
          description:
            "For Resident Individuals with Total Income up to ₹50 Lakh from Salary, One House Property, and Other Sources.",
        },
        {
          name: 'ITR-2 "The Investor\'s Choice"',
          slug: "itr-2",
          icon: DollarSign,
          price: "₹799 – ₹1,299",
          originalPrice: "₹1,499 – ₹2,499",
          description:
            "For Individuals/HUFs having Total Income > ₹50 Lakh, Capital Gains, Foreign Assets, or Multiple House Properties (No Business Income).",
        },
        {
          name: 'ITR-3 "The Entrepreneur\'s Form"',
          slug: "itr-3",
          icon: TrendingUp,
          price: "₹1,199 – ₹1,999",
          originalPrice: "₹2,499 – ₹3,999",
          description:
            "For Individuals/HUFs having income from 'Profits and Gains of Business or Profession' (including partners in a firm).",
        },
        {
          name: 'ITR-4 (Sugam) "The Small Business Special"',
          slug: "itr-4",
          icon: Users,
          price: "₹699 – ₹1,399",
          originalPrice: "₹1,499 – ₹2,999",
          description:
            "For Resident Individuals, HUFs, or Firms (other than LLP) opting for the Presumptive Taxation Scheme.",
        },
        {
          name: 'ITR-5 "The Entity Form"',
          slug: "itr-5",
          icon: Briefcase,
          price: "₹1,499 – ₹2,499",
          originalPrice: "₹2,999 – ₹4,999",
          description:
            "For Firms, LLPs, AOPs, BOIs, etc. (Non-individual entities).",
        },
        {
          name: 'ITR-6 "The Corporate Form"',
          slug: "itr-6",
          icon: Building,
          price: "₹4,999 – ₹9,999",
          originalPrice: "₹9,999 – ₹14,999",
          description:
            "Mandatory Filing for all Companies registered under the Companies Act.",
        },
      ],
    },
  ];

  const handleViewDetails = (slug: string) => {
    router.push(`${basePath}${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center h-[55vh] sm:h-[50vh] overflow-hidden"
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
          className="relative z-10 max-w-4xl px-4 sm:px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6 pt-12"
          >
            <FileText className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
            Income Tax Return (ITR) Filing Services
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto">
            Hassle-free ITR filing with Chartered Accountants and tax advisors.
            Get your ITR filed quickly, easily, and maximize your tax savings.
          </p>
        </motion.div>
      </section>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-16 sm:mb-20"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div
                  className="p-2 sm:p-3 rounded-full"
                  style={{ backgroundColor: `${primaryAccent}20` }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6"
                    style={{ color: primaryAccent }}
                  />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0e172b]">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-6 sm:mb-10 max-w-3xl">
                {section.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {section.services.map((service, idx) => {
                  const ServiceIcon = service.icon;
                  return (
                    <motion.div
                      key={service.slug}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="relative bg-white/90 border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl backdrop-blur-lg transition-all group overflow-hidden"
                    >
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `linear-gradient(to right, ${primaryAccent}10, transparent)`,
                        }}
                      />
                      <ServiceIcon
                        className="w-6 h-6 sm:w-8 sm:h-8 mb-3 sm:mb-4"
                        style={{ color: primaryAccent }}
                      />
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0e172b] mb-1 sm:mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-2 sm:mb-3">
                        {service.originalPrice && (
                          <p className="text-[10px] sm:text-xs text-gray-400 line-through">
                            {service.originalPrice}
                          </p>
                        )}
                        <p className="text-gray-900 font-semibold text-xs sm:text-sm">
                          {service.price}
                        </p>
                      </div>

                      <button
                        onClick={() => handleViewDetails(service.slug)}
                        className="flex items-center gap-1 sm:gap-2 font-medium group cursor-pointer text-xs sm:text-sm"
                        style={{ color: primaryAccent }}
                      >
                        View Details
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Floating CTA Section */}
      <section className="sticky bottom-0 bg-white shadow-2xl border-t border-gray-200 py-3 sm:py-4 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
          <p className="text-gray-700 text-sm sm:text-base font-medium text-center sm:text-left">
            Still having queries for what to select? Feel free to talk to our
            tax consultant for free.
          </p>
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white font-semibold transition-all hover:shadow-lg"
            style={{ background: primaryAccent }}
          >
            Talk to a Tax Consultant
          </button>
        </div>
      </section>
    </div>
  );
}
