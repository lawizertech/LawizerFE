"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Home, FileText, Gavel, ArrowRight } from "lucide-react";

export default function PropertyLegalPage() {
  const router = useRouter();

  const PropertyIcon = Home;
  const AgreementIcon = FileText;
  const RegistrationIcon = Gavel;

  const sections = [
    {
      id: "verify-consult",
      title: "Verification & Consultation",
      icon: PropertyIcon,
      basePath: "/property/verify/",
      description:
        "Ensure a safe investment and gain complete legal clarity before any property transaction. Know your property before you buy it.",
      services: [
        {
          name: "Property Report",
          slug: "property-report",
          price: "₹1,499",
          originalPrice: "₹2,999",
          description:
            "Detailed report verifying ownership, title clarity, encumbrances, government approvals, and pending disputes.",
        },
        {
          name: "Property Paper Review",
          slug: "property-paper-review",
          price: "₹999",
          originalPrice: "₹1,999",
          description:
            "Expert legal review of documents like title deeds and mutation papers, followed by an oral consultation on the property’s legal status.",
        },
        {
          name: "Agreement to Sale / Sale Agreement Review",
          slug: "agreement-review",
          price: "₹1,199",
          originalPrice: "₹2,499",
          description:
            "Legal review of your Sale Agreement or Agreement to Sale to ensure it's legally sound, enforceable, and protects your interests.",
        },
      ],
    },
    {
      id: "agreements-deeds",
      title: "Agreements & Deeds Drafting",
      icon: AgreementIcon,
      basePath: "/property/drafting/",
      description:
        "Drafting legally compliant and customized documents to secure your rights, responsibilities, and entire investment.",
      services: [
        {
          name: "Sale Deed Drafting",
          slug: "sale-deed",
          price: "₹3,499",
          originalPrice: "₹5,999",
          description:
            "Drafting the final legal document that officially transfers property ownership, defining rights, terms, and responsibilities.",
        },
        {
          name: "Agreement to Sale Drafting",
          slug: "agreement-to-sale",
          price: "₹2,499",
          originalPrice: "₹4,499",
          description:
            "Drafting the first legal step that defines mutual terms between buyer and seller, safeguarding both parties before the final sale.",
        },
        {
          name: "Rent Agreement",
          slug: "rent-agreement",
          price: "₹699",
          originalPrice: "₹1,499",
          description:
            "Professionally drafted and legally compliant agreement defining terms between landlord and tenant, customized to protect both parties.",
        },
        {
          name: "Commercial Lease Agreement",
          slug: "commercial-lease",
          price: "₹2,999",
          originalPrice: "₹5,499",
          description:
            "Drafting a legal contract for commercial properties (offices, shops, warehouses), covering rent, duration, and specific business clauses.",
        },
        {
          name: "Joint Development Agreement (JDA)",
          slug: "joint-development-agreement",
          price: "₹4,999",
          originalPrice: "₹8,999",
          description:
            "A legal contract between a landowner and a developer, outlining terms for property development, profit-sharing, and timelines.",
        },
        {
          name: "Power of Attorney (POA) Drafting",
          slug: "power-of-attorney-drafting",
          price: "₹1,299",
          originalPrice: "₹2,499",
          description:
            "Drafting a legal document to authorize a trusted person to act on your behalf in financial, property, or legal matters.",
        },
        {
          name: "Will Drafting & Registration",
          slug: "will-drafting",
          price: "₹1,499",
          originalPrice: "₹2,999",
          description:
            "Drafting a clear, legally valid Will to ensure your assets are distributed according to your wishes and prevent family disputes.",
        },
        {
          name: "Relinquishment Deed",
          slug: "relinquishment-deed",
          price: "₹2,199",
          originalPrice: "₹4,499",
          description:
            "Drafting a deed for a co-owner to voluntarily give up their share to another co-owner or family member, ensuring smooth rights transfer.",
        },
      ],
    },
    {
      id: "registration-support",
      title: "Property Registration",
      icon: RegistrationIcon,
      basePath: "/property/registration/",
      description:
        "Hassle-free legal support for the complex process of registering your property and legal documents with government authorities.",
      services: [
        {
          name: "Property Registration (Sale Deed)",
          slug: "property-registration",
          price: "₹4,999",
          originalPrice: "₹8,999",
          description:
            "Expert legal support to prepare and verify the Sale Deed and guide you through the entire registration process at the sub-registrar office.",
        },
        {
          name: "Gift Deed Drafting & Registration",
          slug: "gift-deed",
          price: "₹3,499",
          originalPrice: "₹6,499",
          description:
            "Transfer ownership of property voluntarily without consideration, ensuring the deed is legally valid and registered.",
        },
        {
          name: "Registration of Power of Attorney (POA)",
          slug: "power-of-attorney-reg",
          price: "₹2,499",
          originalPrice: "₹4,999",
          description:
            "Guidance and support to register your Power of Attorney to make it legally enforceable and accepted by government and financial institutions.",
        },
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => {
    router.push(`${basePath}${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center h-[55vh] sm:h-[65vh] px-4 sm:px-6 overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white">
        <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-4 sm:mb-6 pt-10"
          >
            <PropertyIcon className="w-12 sm:w-16 h-12 sm:h-16 text-[#e99b2b]" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
            Property Legal Services{" "}
            <span className="text-[#c92c41]">with Lawizer</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
            "Before You Buy, Let Lawizer Verify"
          </p>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#c92c41]">
            Legal clarity for every property—safe, stress-free, and legally
            secure transactions.
          </p>
        </motion.div>
      </section>

      {/* Sections */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-16 sm:space-y-20">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12 sm:mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#e99b2b]/10 rounded-full">
                  <Icon className="w-6 h-6 text-[#e99b2b]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#0e172b]">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-700 mb-10 max-w-3xl text-sm sm:text-base md:text-lg">
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#e99b2b]/10 to-transparent transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-lg sm:text-base md:text-lg font-semibold text-[#0e172b] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      {service.originalPrice && (
                        <p className="text-xs sm:text-sm text-gray-400 line-through">
                          {service.originalPrice}
                        </p>
                      )}
                      <p className="text-lg sm:text-base md:text-lg font-semibold text-[#c92c41]">
                        {service.price}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        handleViewDetails(section.basePath, service.slug)
                      }
                      className="flex items-center gap-2 text-[#e99b2b] font-medium group cursor-pointer text-sm sm:text-base"
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
