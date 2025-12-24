"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Briefcase,
  Rocket,
  TrendingUp,
  Shield,
  Settings,
  ArrowRight,
} from "lucide-react";

export default function StartupAndBusinessLegalPage() {
  const router = useRouter();

  // ✅ All routes now use hyphens (Next.js safe)
  const sections = [
    {
      id: "start",
      title: "Start Your Business",
      icon: Rocket,
      basePath: "/startup-businesslegal/startbusiness/",
      description:
        "Launch your venture with the right legal structure and registrations. Build a strong foundation for long-term success.",
      services: [
        {
          name: "Private Limited Company",
          slug: "PrivateLimitedCompanyPage",
          price: "₹4,999 – ₹8,999",
          originalPrice: "₹9,999 – ₹14,999",
          description:
            "Ideal for startups planning to scale and raise investment. Offers limited liability and investor credibility.",
        },
        {
          name: "One Person Company (OPC)",
          slug: "OnePersonCompanyPage",
          price: "₹3,499 – ₹6,999",
          originalPrice: "₹6,999 – ₹11,999",
          description:
            "Perfect for solo founders who want corporate structure benefits with simplified compliance.",
        },
        {
          name: "Limited Liability Partnership (LLP)",
          slug: "LLPPage",
          price: "₹3,999 – ₹7,999",
          originalPrice: "₹7,999 – ₹12,999",
          description:
            "Blend of partnership flexibility and limited liability protection. Suited for multi-partner businesses.",
        },
        {
          name: "Startup India Registration (DPIIT Recognition)",
          slug: "StartupIndiaRegistrationPage",
          price: "₹1,499 – ₹2,499",
          originalPrice: "₹3,999 – ₹5,999",
          description:
            "Government recognition offering tax benefits, funding access, and compliance support for innovative startups.",
        },
        {
          name: "GST Registration",
          slug: "GSTRegistrationPage",
          price: "₹999 – ₹1,999",
          originalPrice: "₹2,999 – ₹4,999",
          description:
            "Mandatory for businesses exceeding turnover thresholds. Enables tax compliance and seamless trade.",
        },
        {
          name: "Public Limited Company (PLC)",
          slug: "PublicLimitedCompanyPage",
          price: "₹19,999 – ₹29,999",
          originalPrice: "₹39,999 – ₹59,999",
          description:
            "For large-scale enterprises looking to raise capital from the public and expand operations.",
        },
        {
          name: "Section 8 Company (NGO)",
          slug: "Section8NGOCompanyPage",
          price: "₹8,999 – ₹14,999",
          originalPrice: "₹17,999 – ₹24,999",
          description:
            "Non-profit structure for charitable or social initiatives. Eligible for tax exemptions and grants.",
        },
      ],
    },
    {
      id: "protect",
      title: "Protect Your Business",
      icon: Shield,
      basePath: "/startup-businesslegal/protectbusiness/",
      description:
        "Safeguard your intellectual property and legal rights. Protect your brand, creations, and business identity.",
      services: [
        {
          name: "Trademark Registration",
          slug: "TrademarkRegistrationPage",
          price: "₹1,499 – ₹3,499",
          originalPrice: "₹4,999 – ₹7,999",
          description:
            "Secure your brand name, logo, and identity with nationwide legal protection.",
        },
        {
          name: "Reply to Trademark Objection",
          slug: "ReplyToTrademarkObjectionPage",
          price: "₹1,999 – ₹3,999",
          originalPrice: "₹5,999 – ₹8,999",
          description:
            "Respond professionally to trademark office objections and ensure smooth registration.",
        },
        {
          name: "Renew Your Trademark",
          slug: "RenewTrademarkPage",
          price: "₹4,999 – ₹8,999",
          originalPrice: "₹9,999 – ₹14,999",
          description:
            "Extend protection of your registered trademark and prevent cancellation due to expiry.",
        },
        {
          name: "Sell Your Trademark",
          slug: "SellYourTrademarkPage",
          price: "₹5,999 – ₹14,999",
          originalPrice: "₹14,999 – ₹24,999",
          description:
            "Legally transfer ownership of your registered trademark with a structured sale agreement.",
        },
        {
          name: "Copyright Registration",
          slug: "CopyrightRegistrationPage",
          price: "₹2,499 – ₹4,999",
          originalPrice: "₹5,999 – ₹9,999",
          description:
            "Protect original creative works such as software, music, or written content.",
        },
        {
          name: "Reply to Copyright Objection",
          slug: "ReplyToCopyrightObjectionPage",
          price: "₹1,999 – ₹3,999",
          originalPrice: "₹4,999 – ₹7,999",
          description:
            "Respond to copyright office objections effectively to secure your IP rights.",
        },
      ],
    },
    {
      id: "manage",
      title: "Manage Your Business",
      icon: Settings,
      basePath: "/startup-businesslegal/managebusiness/",
      description:
        "Stay compliant and handle corporate changes smoothly with professional legal support.",
      services: [
        {
          name: "ROC Return Filing for Pvt Ltd",
          slug: "RocReturnFilingPvtLtdPage",
          price: "₹4,999 – ₹9,999",
          originalPrice: "₹9,999 – ₹14,999",
          description:
            "Annual compliance filings including financial statements and company returns for Private Limited entities.",
        },
        {
          name: "ROC Return Filing for OPC",
          slug: "ROCReturnFilingForOPCPage",
          price: "₹3,499 – ₹7,999",
          originalPrice: "₹7,999 – ₹12,999",
          description:
            "Annual return filings for One Person Companies in accordance with MCA regulations.",
        },
        {
          name: "ROC Return Filing for LLP",
          slug: "ROCReturnFilingForLLPPage",
          price: "₹3,999 – ₹7,999",
          originalPrice: "₹7,999 – ₹12,999",
          description:
            "Timely filing of LLP Annual Returns and Statement of Accounts to maintain compliance.",
        },
        {
          name: "Appointment of Director",
          slug: "AppointmentOfDirectorPage",
          price: "₹1,999 – ₹3,499",
          originalPrice: "₹4,999 – ₹7,999",
          description:
            "Legally appoint directors with necessary resolutions and ROC forms.",
        },
        {
          name: "Resignation of Director",
          slug: "ResignationOfDirectorPage",
          price: "₹1,999 – ₹3,499",
          originalPrice: "₹4,999 – ₹7,999",
          description:
            "Process director resignation with proper documentation and ROC updates.",
        },
        {
          name: "Change in Office Address",
          slug: "ChangeInOfficeAddressPage",
          price: "₹2,499 – ₹4,999",
          originalPrice: "₹5,999 – ₹9,999",
          description:
            "Update your registered office address legally with ROC and other authorities.",
        },
        {
          name: "Increasing Capital of Company",
          slug: "IncreasingCapitalOfCompanyPage",
          price: "₹4,999 – ₹9,999",
          originalPrice: "₹9,999 – ₹14,999",
          description:
            "Expand authorized or paid-up capital through proper legal procedures.",
        },
        {
          name: "Closure of Pvt Ltd",
          slug: "ClosureOfPvtLtdPage",
          price: "₹8,999 – ₹14,999",
          originalPrice: "₹17,999 – ₹24,999",
          description:
            "Legally close your Private Limited Company via strike-off or liquidation process.",
        },
        {
          name: "Closure of OPC",
          slug: "ClosureOfOPCPage",
          price: "₹5,999 – ₹9,999",
          originalPrice: "₹11,999 – ₹17,999",
          description:
            "End your One Person Company operations legally with compliance handling.",
        },
        {
          name: "Closure of LLP",
          slug: "ClosureOfLLPPage",
          price: "₹5,999 – ₹9,999",
          originalPrice: "₹11,999 – ₹17,999",
          description:
            "Wind up an LLP smoothly while ensuring compliance and regulatory clearance.",
        },
      ],
    },
    {
      id: "grow",
      title: "Grow Your Business",
      icon: TrendingUp,
      basePath: "/startup-businesslegal/growbusiness/",
      description:
        "Enhance your business credibility and access new opportunities with essential certifications.",
      services: [
        {
          name: "ISO Certification",
          slug: "ISOCertificationPage",
          price: "₹7,999 – ₹19,999",
          originalPrice: "₹14,999 – ₹29,999",
          description:
            "Show your commitment to quality standards with recognized ISO certification.",
        },
        {
          name: "MSME / Udyam Registration",
          slug: "MSMEUdhyamRegistrationPage",
          price: "₹499 – ₹999",
          originalPrice: "₹1,999 – ₹2,999",
          description:
            "Get government recognition as an MSME and unlock financial incentives and subsidies.",
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
      <section className="relative flex flex-col items-center justify-center text-center h-[55vh] sm:h-[60vh] md:h-[65vh] overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6">
        <div className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center opacity-25" />
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
            <Briefcase className="w-12 h-12 sm:w-16 sm:h-16 text-[#c92c41]" />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 tracking-tight">
            Startup & Business Legal{" "}
            <span style={{ color: "#e99b2b" }}>Services</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-xl mx-auto">
            From idea to empire — built on solid legal ground.
          </p>
          <p
            className="mt-2 sm:mt-3 text-sm sm:text-base"
            style={{ color: "#e99b2b" }}
          >
            End-to-end legal solutions to start, protect, manage, and grow your
            business.
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
                <div className="p-2 sm:p-3 bg-[#c92c41]/10 rounded-full">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c92c41]" />
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#c92c41]/10 to-transparent transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0e172b] mb-1 sm:mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-5 leading-relaxed">
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
                      className="flex items-center gap-1 sm:gap-2 text-[#c92c41] font-medium group cursor-pointer text-xs sm:text-sm"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
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
