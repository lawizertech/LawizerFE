"use client";

import Link from "next/link";
import {
  Home,
  Scale,
  Briefcase,
  Users,
  FileText,
  Landmark,
  LayoutGrid,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// ✅ Memoized card component
const ServiceCard = memo(function ServiceCard({
  service,
  className = "",
}: {
  service: {
    icon: any;
    title: string;
    tagline: string;
    color: string;
    items: any[];
    url?: string;
  };
  className?: string;
}) {
  const Icon = service.icon;
  const [isExpanded, setIsExpanded] = useState(false);
  const route = useRouter();

  const isGrouped =
    Array.isArray(service.items) &&
    typeof service.items[0] === "object" &&
    "section" in service.items[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`flex ${className}`}
    >
      <Card
        className="flex flex-col justify-between w-full border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[420px] sm:min-h-[440px] relative pb-2"
        onClick={() => route.push(service.url || "/")}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 hover:opacity-20 transition-all duration-500`}
        />
        <div className="flex flex-col flex-grow relative z-10">
          {/* Header */}
          <CardHeader className="pb-3">
            <div
              className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}
            >
              <Icon className="w-6 sm:w-7 h-6 sm:h-7" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900">
              {service.title}
            </CardTitle>
            <p className="text-xs sm:text-sm text-gray-500 italic mt-1">
              {service.tagline}
            </p>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex flex-col justify-between flex-grow h-auto">
            <div className="space-y-3 text-xs sm:text-sm text-gray-700 flex-grow overflow-y-auto pr-1 max-h-[220px] sm:max-h-[240px]">
              <AnimatePresence initial={false}>
                {!isGrouped ? (
                  <ul className="space-y-2">
                    {(isExpanded
                      ? service.items
                      : service.items.slice(0, 5)
                    ).map((item: string, i: number) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="flex items-start"
                      >
                        <span className="mr-2 text-gray-400">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  (isExpanded ? service.items : service.items.slice(0, 2)).map(
                    (section: any, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-semibold text-purple-700">
                          {section.section}
                        </h4>
                        <ul className="space-y-1 pl-3 border-l border-gray-200">
                          {(section.items || []).map(
                            (item: string, i: number) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2 text-gray-400">•</span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                      </motion.div>
                    )
                  )
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-3 sm:mt-4">
              {((isGrouped && service.items.length > 2) ||
                (!isGrouped && service.items.length > 5)) && (
                <button
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  {isExpanded ? "Show less" : "Show all"}
                </button>
              )}

              <Link
                href={service.url || "/"}
                className="text-xs sm:text-sm font-semibold text-red-600 hover:text-red-700 transition-all"
              >
                Show in Details →
              </Link>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
});

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Property",
      tagline: "Property disputes keeping you up at night?",
      color: "from-blue-500/10 to-blue-500/30 text-blue-600",
      url: "/property",
      items: [
        "Property report (₹999)",
        "Property registration (₹999)",
        "Sales deed drafting (₹999)",
        "Agreement to sale drafting (₹999)",
        "Property paper review (₹999)",
        "Sale agreement review (₹999)",
        "Will registration (₹999)",
        "Gift deed",
        "Joint development agreement",
        "Relinquishment deed",
        "Commercial lease agreement",
        "Rent agreement",
      ],
    },
    // {
    //   icon: Scale,
    //   title: "Civil & Criminal",
    //   tagline: "Fighting for your rights, one case at a time",
    //   color: "from-red-500/10 to-red-500/30 text-red-600",
    //   url: "/civil-commercial",
    //   items: [
    //     "Family law matters (divorce, custody, alimony)",
    //     "Property disputes",
    //     "Contract disputes",
    //     "Personal injury cases",
    //     "Employment law claims",
    //     "Violent crimes defense",
    //     "Property crimes",
    //     "White-collar crimes",
    //     "Financial frauds",
    //   ],
    // },
    /*{
      icon: Users,
      title: "Family Matters",
      tagline: "Protecting families, preserving relationships",
      color: "from-pink-500/10 to-pink-500/30 text-pink-600",
      url: "/family",
      items: [
        "Divorce and marriage dissolution",
        "Maintenance and alimony",
        "Child custody and guardianship",
        "Property and inheritance disputes",
        "Domestic violence protection",
      ],
    },*/
    /*{
      icon: Landmark,
      title: "Banking Matters",
      tagline: "Your financial disputes, our expertise",
      color: "from-green-500/10 to-green-500/30 text-green-600",
      url: "/banking",
      items: [
        "Loan agreement",
        "Loan and debt recovery disputes",
        "Cheque dishonour cases",
        "Financial frauds and cybercrimes",
        "Customer service disputes",
      ],
    },*/
    {
      icon: LayoutGrid,
      title: "ITR Filing",
      tagline: "Hassle-free filing and maximum tax savings",
      color: "from-teal-500/10 to-teal-500/30 text-teal-600",
      url: "/itr",
      items: [
        {
          section: "Plans",
          items: [
            "Bronze Plan - ₹2,499",
            "Silver Plan - ₹4,499",
            "Gold Plan - ₹6,499",
          ],
        },
        {
          section: "Individuals",
          items: [
            "ITR-1 (Salaried up to ₹50L)",
            "ITR-2 (Capital Gains/Foreign Assets)",
            "ITR-3 (Business/Professional Income)",
            "ITR-4 (Presumptive Scheme)",
          ],
        },
        {
          section: "Entities",
          items: ["ITR-5 (LLP, Firms, AOPs)", "ITR-6 (Companies)"],
        },
        "Tax saving consultations",
        "Form 16/26AS reconciliation",
      ],
    },
    {
      icon: Briefcase,
      title: "Startup & Business Legal",
      tagline: "From idea to empire — built on solid legal ground",
      color:
        "from-purple-500/10 via-indigo-500/20 to-teal-500/30 text-purple-700",
      url: "/startup-businesslegal",
      items: [
        {
          section: "Start",
          items: [
            "Private limited company - ₹1,499",
            "One person company - ₹999",
            "Limited liability partnership - ₹1,499",
            "Startup India registration - ₹999",
            "MSME Udyam registration - ₹999",
            "GST registration - ₹999",
          ],
        },
        {
          section: "Grow",
          items: [
            "ISO certification",
            "Trademark registration",
            "Copyright registration",
          ],
        },
        {
          section: "Protect",
          items: [
            "Intellectual property assignment",
            "Shareholder subscription agreement",
            "Joint venture agreements",
          ],
        },
        {
          section: "Manage",
          items: [
            "Appointment of director",
            "Resignation of director",
            "Change in office address",
            "Increasing capital of company",
            "Closure of Pvt Ltd/OPC/LLP",
            "ROC return filing",
          ],
        },
      ],
    },
    {
      icon: FileText,
      title: "Documentation",
      tagline: "Every word matters in legal documents",
      color: "from-amber-500/10 to-amber-500/30 text-amber-600",
      url: "/documentation",
      items: [
        "Franchise agreement",
        "Co-founder agreement",
        "Non-disclosure agreement",
        "Employment agreement",
        "Consultancy agreement",
        "Business partnership agreement",
        "Power of attorney drafting",
        "Power of attorney registration",
        "Privacy policy",
        "Terms of use",
        "Service agreement",
        "Licensing agreement",
        "Loan agreement",
      ],
    },
    //{
    //  icon: Landmark, // you can replace this with a more traffic-related icon if available
    //  title: "Pay Your Traffic Challan",
    //  tagline:
    //    "Lawizer: Skip the court hassle. Clear your traffic fines securely, instantly, and affordably.",
    //  color: "from-yellow-500/10 to-red-500/30 text-red-600",
    //  url: "/challan",
    //  items: [
    //    {
    //      section: "Pay Your Challan",
    //      items: [
    //        "Instant, secure e-challan payment",
    //        "Avoid legal escalation & license suspension",
    //        "Maintain a clean driving record",
    //        "Get digital proof immediately after payment",
    //        "24/7 support & verified payment channels",
    //      ],
    //    },
    //    {
    //      section: "View Your Challan",
    //      items: [
    //        "Check challan details using vehicle/chassis number",
    //        "View status, fine amount & violation info",
    //      ],
    //    },
    //    {
    //      section: "Dispute Your Challan",
    //      items: [
    //        "Challenge incorrect challans legally",
    //        "Expert lawyer review & legal drafting",
    //        "End-to-end case assistance till resolution",
    //      ],
    //    },
    //    {
    //      section: "Consult an Expert",
    //      items: [
    //        "Free consultation for any vehicle-related queries",
    //        "Connect instantly with motor vehicle law experts",
    //      ],
    //    },
    //  ],
    //},
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-60 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl text-left mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Legal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Need expert consultation on legal matters? You're in the right
            place. Our experienced legal professionals are available{" "}
            <span className="text-red-600 font-semibold">24/7</span> — ready to
            assist you with everything from simple questions to complex cases.
          </p>
        </div>

        {/* Grid for all cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              service={service}
              className="w-full h-auto min-h-[420px] sm:min-h-[440px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
