"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { memo, useState } from "react";
import { Landmark, Briefcase, FileSignature, Banknote } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ✅ Reuse memoized card component
const PopularServiceCard = memo(function PopularServiceCard({
  service,
}: {
  service: {
    icon: any;
    title: string;
    tagline: string;
    color: string;
    items: string[];
    url?: string;
  };
}) {
  const Icon = service.icon;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="flex w-full"
    >
      <Card className="flex flex-col justify-between w-full border border-gray-100 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[400px] sm:min-h-[420px] relative pb-2">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 hover:opacity-20 transition-all duration-500`}
        />
        <div className="flex flex-col flex-grow relative z-10">
          {/* Header */}
          <CardHeader className="pb-3">
            <div
              className={`w-12 sm:w-14 h-12 sm:h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 sm:mb-4 shadow-sm`}
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
            <div className="space-y-2 text-xs sm:text-sm text-gray-700 flex-grow overflow-y-auto pr-1 max-h-[200px] sm:max-h-[240px]">
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
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 sm:mt-4 gap-2 sm:gap-0">
              {service.items.length > 5 && (
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

export default function PopularServicesSection() {
  const popularServices = [
    {
      icon: Landmark,
      title: "ITR Filing",
      tagline: "File your Income Tax Returns easily and securely",
      color: "from-blue-500/10 to-blue-500/30 text-blue-600",
      url: "/itr",
      items: [
        "Online ITR filing for individuals and businesses",
        "Expert tax consultant assistance",
        "Fast & secure document submission",
        "Automatic deduction tracking",
        "24/7 support for tax queries",
        "Maximize your refund legally",
      ],
    },
    {
      icon: FileSignature,
      title: "Trademark Registration",
      tagline: "Protect your brand with quick trademark registration",
      color: "from-purple-500/10 to-purple-500/30 text-purple-600",
      url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
      items: [
        "Trademark name search & verification",
        "Filing of TM-A application",
        "Status tracking & TM monitoring",
        "Objection & opposition handling",
        "Trademark renewal support",
        "Legal expert guidance through process",
      ],
    },
    {
      icon: Briefcase,
      title: "Company Incorporation",
      tagline: "Register your business in just a few clicks",
      color: "from-emerald-500/10 to-emerald-500/30 text-emerald-600",
      url: "/startup-businesslegal",
      items: [
        "Private Limited, LLP & OPC registration",
        "DIN & DSC generation",
        "Name approval and verification",
        "MOA & AOA drafting",
        "ROC filing & compliance setup",
        "Business bank account setup support",
      ],
    },
    {
      icon: Banknote,
      title: "Cheque Bounce",
      tagline: "Resolve cheque bounce cases legally and effectively",
      color: "from-red-500/10 to-red-500/30 text-red-600",
      url: "/banking/cheque-bounce-s138",
      items: [
        "Draft & send legal notice under Sec 138",
        "File cheque bounce complaint in court",
        "Expert lawyer consultation",
        "Negotiation & settlement support",
        "Track case progress online",
        "Legal representation in court",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 opacity-60 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl text-left mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl">
            Explore our most in-demand services trusted by clients across India.
            Quick, reliable, and handled by experienced professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {popularServices.map((service, i) => (
            <PopularServiceCard key={i} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
