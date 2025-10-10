"use client";

import {
  Home,
  Scale,
  Briefcase,
  Users,
  FileText,
  Building,
  Landmark,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ✅ Memoized card to prevent unnecessary re-renders
const ServiceCard = memo(function ServiceCard({
  service,
}: {
  service: {
    icon: any;
    title: string;
    tagline: string;
    color: string;
    items: string[];
  };
}) {
  const Icon = service.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex"
    >
      <Card className="flex flex-col justify-between w-full border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-[420px] relative pb-2">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 hover:opacity-20 transition-all duration-500`}
        />
        <div className="flex flex-col flex-grow relative z-10">
          <CardHeader className="pb-3">
            <div
              className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-sm`}
            >
              <Icon className="w-7 h-7" />
            </div>
            <CardTitle className="text-xl font-semibold text-gray-900">
              {service.title}
            </CardTitle>
            <p className="text-sm text-gray-500 italic mt-1">
              {service.tagline}
            </p>
          </CardHeader>

          <CardContent className="flex flex-col justify-between flex-grow">
            <ul className="space-y-2 text-sm text-gray-700 flex-grow h-24 overflow-y-scroll pr-1">
              <AnimatePresence initial={false}>
                {(isExpanded ? service.items : service.items.slice(0, 5)).map(
                  (item, i) => (
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
                  )
                )}
              </AnimatePresence>
            </ul>

            {service.items.length > 5 && (
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors self-start"
              >
                {isExpanded
                  ? "Show less"
                  : `Show more (${service.items.length - 5}+)`}
              </button>
            )}
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
      items: [
        "Property report",
        "Property registration (sales deed registration)",
        "Sales deed drafting",
        "Agreement to sale drafting",
        "Property paper review",
        "Sale agreement review",
        "Power of attorney",
        "Will registration",
        "Gift deed",
        "Joint development agreement",
        "Relinquishment deed",
        "Commercial lease agreement",
        "Rent agreement",
      ],
    },
    {
      icon: Scale,
      title: "Civil & Criminal",
      tagline: "Fighting for your rights, one case at a time",
      color: "from-red-500/10 to-red-500/30 text-red-600",
      items: [
        "Family law matters (divorce, custody, alimony)",
        "Property disputes",
        "Contract disputes",
        "Personal injury cases",
        "Employment law claims",
        "Violent crimes defense",
        "Property crimes",
        "White-collar crimes",
        "Financial frauds",
      ],
    },
    {
      icon: Users,
      title: "Family Matters",
      tagline: "Protecting families, preserving relationships",
      color: "from-pink-500/10 to-pink-500/30 text-pink-600",
      items: [
        "Divorce and marriage dissolution",
        "Maintenance and alimony",
        "Child custody and guardianship",
        "Property and inheritance disputes",
        "Domestic violence protection",
      ],
    },
    {
      icon: Landmark,
      title: "Banking Matters",
      tagline: "Your financial disputes, our expertise",
      color: "from-green-500/10 to-green-500/30 text-green-600",
      items: [
        "Loan agreement",
        "Loan and debt recovery disputes",
        "Cheque dishonour cases",
        "Financial frauds and cybercrimes",
        "Customer service disputes",
      ],
    },
    {
      icon: Briefcase,
      title: "Startup",
      tagline: "From idea to empire - legally protected",
      color: "from-purple-500/10 to-purple-500/30 text-purple-600",
      items: [
        "Private limited company",
        "One person company",
        "Limited liability partnership",
        "Startup India registration",
        "GST registration",
        "Trademark registration",
        "Copyright registration",
        "ROC return filing",
        "ISO certification",
        "MSME Udyam registration",
      ],
    },
    {
      icon: FileText,
      title: "Documentation",
      tagline: "Every word matters in legal documents",
      color: "from-amber-500/10 to-amber-500/30 text-amber-600",
      items: [
        "Franchise agreement",
        "Co-founder agreement",
        "Non-disclosure agreement",
        "Employment agreement",
        "Consultancy agreement",
        "Business partnership agreement",
        "Privacy policy",
        "Terms of use",
        "Service agreement",
        "Licensing agreement",
        "Loan agreement",
        "Power of attorney",
      ],
    },
    {
      icon: Building,
      title: "Business Legal",
      tagline: "Building businesses on solid legal ground",
      color: "from-teal-500/10 to-teal-500/30 text-teal-600",
      items: [
        "Appointment of director",
        "Resignation of director",
        "Change in office address",
        "Increasing capital of company",
        "Closure of Pvt Ltd/OPC/LLP",
        "Shareholder subscription agreement",
        "Joint venture agreements",
        "Intellectual property assignment",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-60 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl text-left mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Our Legal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Services
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Need expert consultation on legal matters? You're in the right
            place. Our experienced legal professionals are available{" "}
            <span className="text-red-600 font-semibold">24/7</span> — ready to
            assist you with everything from simple questions to complex cases.
          </p>
        </div>

        {/* First row - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {services.slice(0, 4).map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        {/* Second row - 3 cards centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
            {services.slice(4, 7).map((service, i) => (
              <ServiceCard key={i + 4} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
