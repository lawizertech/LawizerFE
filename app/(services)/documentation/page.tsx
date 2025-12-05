"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  FileText, // Main icon for Agreements/Documents
  ArrowRight,
} from "lucide-react";

export default function StartupDocumentsPage() {
  const router = useRouter();

  // Define the base path for these dedicated documents
  const basePath = "/documentation/";

  // The single section containing all the new document services
  const sections = [
    {
      id: "agreements-drafting",
      title: "Essential Startup & Business Agreements",
      icon: FileText,
      description:
        "Draft legally sound contracts, policies, and agreements (NDAs, Employment, Partnership, SaaS) to secure your operations, team, and intellectual property.",
      services: [
        {
          name: "Co-founder Agreement",
          slug: "co-founder-agreement",
          price: "₹2499",
          description:
            "Defines roles, equity, responsibilities, decision-making, and exit mechanisms among founders, preventing conflicts.",
        },
        {
          name: "Business Partnership Agreement",
          slug: "business-partnership-agreement",
          price: "₹2999",
          description:
            "Legal contract defining investment, profit-sharing, responsibilities, and exit mechanisms among partners.",
        },
        {
          name: "Employment Agreement",
          slug: "employment-agreement",
          price: "₹1999",
          description:
            "Outlines terms, salary, benefits, and termination policies, ensuring compliance with labor laws.",
        },
        {
          name: "Consultancy Agreement",
          slug: "consultancy-agreement",
          price: "₹1999",
          description:
            "Defines the scope, deliverables, fees, and confidentiality between a consultant and company.",
        },
        {
          name: "Non-Disclosure Agreement (NDA)",
          slug: "non-disclosure-agreement",
          price: "₹999",
          description:
            "Protects sensitive business information and trade secrets, allowing safe collaboration or funding discussions.",
        },
        {
          name: "Privacy Policy & Terms of Use",
          slug: "privacy-terms-of-use",
          price: "₹1499",
          description:
            "Defines user data handling and website/app rules, ensuring compliance under IT Act and GDPR.",
        },
        {
          name: "Software as a Service (SaaS) Agreement",
          slug: "saas-agreement",
          price: "₹3499",
          description:
            "Governs subscription, licensing, support, and intellectual property rights for software services.",
        },
        {
          name: "Franchise Agreement",
          slug: "franchise-agreement",
          price: "₹3999",
          description:
            "Outlines rights, obligations, royalties, and operational standards between a franchisor and franchisee.",
        },
        {
          name: "Joint Venture Agreement",
          slug: "joint-venture-agreement",
          price: "₹4499",
          description:
            "Defines partnership, investment, profit-sharing, and management of a Joint Venture.",
        },
        {
          name: "Shareholder Subscription Agreement",
          slug: "shareholder-subscription-agreement",
          price: "₹4999",
          description:
            "Governs the issuance of shares to investors and defines their rights and obligations in the company.",
        },
        {
          name: "Service Agreement & Term Sheet",
          slug: "service-agreement-term-sheet",
          price: "₹2499",
          description:
            "Defines scope, fees, deliverables, and timelines for a business service, ensuring legal enforceability.",
        },
        {
          name: "Licensing Agreement",
          slug: "licensing-agreement",
          price: "₹2999",
          description:
            "Governs licensing of intellectual property, technology, or products, protecting IP rights and revenue.",
        },
        {
          name: "IP Assignment Agreement",
          slug: "ip-assignment-agreement",
          price: "₹2499",
          description:
            "Transfers Intellectual Property (IP) ownership from one party to another, ensuring legal transfer of rights.",
        },
        {
          name: "Letter of Intent (LOI)",
          slug: "letter-of-intent",
          price: "₹1499",
          description:
            "Declares preliminary intention to enter a business transaction or agreement, establishing mutual understanding.",
        },
      ],
    },
  ];

  const handleViewDetails = (slug: string) => {
    const path = `${basePath}${slug}`;
    router.push(path);
  };

  const primaryColor = "#007bff";
  const primaryAccent = "#00bfa5";

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center h-[55vh] sm:h-[60vh] md:h-[65vh] px-4 sm:px-6 overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${primaryColor}E6, ${primaryAccent}E6)`,
          color: "white",
        }}
      >
        <div className="absolute inset-0 bg-[url('/documenthero.png')] bg-cover bg-center opacity-20" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6 pt-16"
          >
            <FileText className="w-12 sm:w-16 h-12 sm:h-16 text-white" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
            Startup & Operational Agreements
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
            Legal documents essential for defining relationships, protecting IP,
            and securing business transactions.
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-white">
            The legal foundation for every successful partnership, hiring, and
            collaboration.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 sm:mb-16"
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div
                  className="p-2 sm:p-3 rounded-full"
                  style={{ backgroundColor: `${primaryAccent}20` }}
                >
                  <Icon
                    className="w-5 sm:w-6 h-5 sm:h-6"
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
                {section.services.map((service) => (
                  <motion.div
                    key={service.slug}
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="relative bg-white/90 border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl backdrop-blur-lg transition-all group overflow-hidden"
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(to right, ${primaryAccent}10, transparent)`,
                      }}
                    />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0e172b] mb-1 sm:mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-[#c92c41] mb-2 sm:mb-3">
                      {service.price}
                    </p>
                    <button
                      onClick={() => handleViewDetails(service.slug)}
                      className="flex items-center gap-1 sm:gap-2 font-medium group cursor-pointer text-sm sm:text-base"
                      style={{ color: primaryAccent }}
                    >
                      View Details
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
