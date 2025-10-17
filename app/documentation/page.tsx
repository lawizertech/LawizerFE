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
        "Draft legally sound contracts, policies, and agreements (NDAs, Employment, Partnership, SaaS) to secure your operations, team, and intellectual property[cite: 1, 2].",
      services: [
        {
          name: "Co-founder Agreement",
          slug: "co-founder-agreement",
          description:
            "Defines roles, equity, responsibilities, decision-making, and exit mechanisms among founders, preventing conflicts[cite: 18, 19, 20].",
        },
        {
          name: "Business Partnership Agreement",
          slug: "business-partnership-agreement",
          description:
            "Legal contract defining investment, profit-sharing, responsibilities, and exit mechanisms among partners[cite: 60, 61].",
        },
        {
          name: "Employment Agreement",
          slug: "employment-agreement",
          description:
            "Outlines terms, salary, benefits, and termination policies, ensuring compliance with labor laws[cite: 39, 42].",
        },
        {
          name: "Consultancy Agreement",
          slug: "consultancy-agreement",
          description:
            "Defines the scope, deliverables, fees, and confidentiality between a consultant and company[cite: 50, 52].",
        },
        {
          name: "Non-Disclosure Agreement (NDA)",
          slug: "non-disclosure-agreement",
          description:
            "Protects sensitive business information and trade secrets, allowing safe collaboration or funding discussions[cite: 29, 30, 32].",
        },
        {
          name: "Privacy Policy & Terms of Use",
          slug: "privacy-terms-of-use",
          description:
            "Defines user data handling and website/app rules, ensuring compliance under IT Act and GDPR[cite: 79, 82].",
        },
        {
          name: "Software as a Service (SaaS) Agreement",
          slug: "saas-agreement",
          description:
            "Governs subscription, licensing, support, and intellectual property rights for software services[cite: 91, 92].",
        },
        {
          name: "Franchise Agreement",
          slug: "franchise-agreement",
          description:
            "Outlines rights, obligations, royalties, and operational standards between a franchisor and franchisee[cite: 6].",
        },
        {
          name: "Joint Venture Agreement",
          slug: "joint-venture-agreement",
          description:
            "Defines partnership, investment, profit-sharing, and management of a Joint Venture[cite: 107, 108].",
        },
        {
          name: "Shareholder Subscription Agreement",
          slug: "shareholder-subscription-agreement",
          description:
            "Governs the issuance of shares to investors and defines their rights and obligations in the company[cite: 70, 71].",
        },
        {
          name: "Service Agreement & Term Sheet",
          slug: "service-agreement-term-sheet",
          description:
            "Defines scope, fees, deliverables, and timelines for a business service, ensuring legal enforceability[cite: 99, 101].",
        },
        {
          name: "Licensing Agreement",
          slug: "licensing-agreement",
          description:
            "Governs licensing of intellectual property, technology, or products, protecting IP rights and revenue[cite: 114, 115].",
        },
        {
          name: "IP Assignment Agreement",
          slug: "ip-assignment-agreement",
          description:
            "Transfers Intellectual Property (IP) ownership from one party to another, ensuring legal transfer of rights[cite: 122, 123].",
        },
        {
          name: "Letter of Intent (LOI)",
          slug: "letter-of-intent",
          description:
            "Declares preliminary intention to enter a business transaction or agreement, establishing mutual understanding[cite: 129, 130].",
        },
      ],
    },
  ];

  const handleViewDetails = (slug: string) => {
    // Convert the slug to kebab-case for clean URL routing
    const kebabCaseSlug = slug
      .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2")
      .toLowerCase();

    const path = `${basePath}${kebabCaseSlug}`;
    console.log("Navigating to:", path);
    router.push(path);
  };

  // Define a distinct color theme for documents/agreements (e.g., using a distinct blue/teal)
  const primaryColor = "#007bff";
  const primaryAccent = "#00bfa5";

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
        <div className="absolute inset-0 bg-[url('/documenthero.png')] bg-cover bg-center opacity-20" />
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
            <FileText className="w-16 h-16 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Startup & Operational Agreements
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Legal documents essential for defining relationships, protecting IP,
            and securing business transactions[cite: 1, 2].
          </p>
          <p className="mt-3" style={{ color: "white" }}>
            The legal foundation for every successful partnership, hiring, and
            collaboration.
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
                      onClick={() => handleViewDetails(service.slug)}
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
