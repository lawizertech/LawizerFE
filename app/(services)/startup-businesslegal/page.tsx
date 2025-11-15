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
          description:
            "Ideal for startups planning to scale and raise investment. Offers limited liability and investor credibility.",
        },
        {
          name: "One Person Company (OPC)",
          slug: "OnePersonCompanyPage",
          description:
            "Perfect for solo founders who want corporate structure benefits with simplified compliance.",
        },
        {
          name: "Limited Liability Partnership (LLP)",
          slug: "LLPPage",
          description:
            "Blend of partnership flexibility and limited liability protection. Suited for multi-partner businesses.",
        },
        {
          name: "Startup India Registration (DPIIT Recognition)",
          slug: "StartupIndiaRegistrationPage",
          description:
            "Government recognition offering tax benefits, funding access, and compliance support for innovative startups.",
        },
        {
          name: "GST Registration",
          slug: "GSTRegistrationPage",
          description:
            "Mandatory for businesses exceeding turnover thresholds. Enables tax compliance and seamless trade.",
        },
        {
          name: "Public Limited Company (PLC)",
          slug: "PublicLimitedCompanyPage",
          description:
            "For large-scale enterprises looking to raise capital from the public and expand operations.",
        },
        {
          name: "Section 8 Company (NGO)",
          slug: "Section8NGOCompanyPage",
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
          description:
            "Secure your brand name, logo, and identity with nationwide legal protection.",
        },
        {
          name: "Reply to Trademark Objection",
          slug: "ReplyToTrademarkObjectionPage",
          description:
            "Respond professionally to trademark office objections and ensure smooth registration.",
        },
        {
          name: "Renew Your Trademark",
          slug: "RenewTrademarkPage",
          description:
            "Extend protection of your registered trademark and prevent cancellation due to expiry.",
        },
        {
          name: "Sell Your Trademark",
          slug: "SellYourTrademarkPage",
          description:
            "Legally transfer ownership of your registered trademark with a structured sale agreement.",
        },
        {
          name: "Copyright Registration",
          slug: "CopyrightRegistrationPage",
          description:
            "Protect original creative works such as software, music, or written content.",
        },
        {
          name: "Reply to Copyright Objection",
          slug: "ReplyToCopyrightObjectionPage",
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
          description:
            "Annual compliance filings including financial statements and company returns for Private Limited entities.",
        },
        {
          name: "ROC Return Filing for OPC",
          slug: "ROCReturnFilingForOPCPage",
          description:
            "Annual return filings for One Person Companies in accordance with MCA regulations.",
        },
        {
          name: "ROC Return Filing for LLP",
          slug: "ROCReturnFilingForLLPPage",
          description:
            "Timely filing of LLP Annual Returns and Statement of Accounts to maintain compliance.",
        },
        {
          name: "Appointment of Director",
          slug: "AppointmentOfDirectorPage",
          description:
            "Legally appoint directors with necessary resolutions and ROC forms.",
        },
        {
          name: "Resignation of Director",
          slug: "ResignationOfDirectorPage",
          description:
            "Process director resignation with proper documentation and ROC updates.",
        },
        {
          name: "Change in Office Address",
          slug: "ChangeInOfficeAddressPage",
          description:
            "Update your registered office address legally with ROC and other authorities.",
        },
        {
          name: "Increasing Capital of Company",
          slug: "IncreasingCapitalOfCompanyPage",
          description:
            "Expand authorized or paid-up capital through proper legal procedures.",
        },
        {
          name: "Closure of Pvt Ltd",
          slug: "ClosureOfPvtLtdPage",
          description:
            "Legally close your Private Limited Company via strike-off or liquidation process.",
        },
        {
          name: "Closure of OPC",
          slug: "ClosureOfOPCPage",
          description:
            "End your One Person Company operations legally with compliance handling.",
        },
        {
          name: "Closure of LLP",
          slug: "ClosureOfLLPPage",
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
          description:
            "Show your commitment to quality standards with recognized ISO certification.",
        },
        {
          name: "MSME / Udyam Registration",
          slug: "MSMEUdhyamRegistrationPage",
          description:
            "Get government recognition as an MSME and unlock financial incentives and subsidies.",
        },
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => {
    const path = `${basePath}${slug}`;
    console.log("Navigating to:", path);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center h-[65vh] overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white">
        <div className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center opacity-25" />
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
            <Briefcase className="w-16 h-16 text-[#c92c41]" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Startup & Business Legal{" "}
            <span style={{ color: "#e99b2b" }}>Services</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            From idea to empire — built on solid legal ground.
          </p>
          <p className="mt-3" style={{ color: "#e99b2b" }}>
            End-to-end legal solutions to start, protect, manage, and grow your
            business.
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
                <div className="p-3 bg-[#c92c41]/10 rounded-full">
                  <Icon className="w-6 h-6 text-[#c92c41]" />
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
                    {/* ✅ pointer-events-none added */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#c92c41]/10 to-transparent transition-opacity duration-300 pointer-events-none" />
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
                      className="flex items-center gap-2 text-[#c92c41] font-medium group cursor-pointer"
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
