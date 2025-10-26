"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  PhoneCall,
  EyeOff,
  AlertTriangle,
  Users,
} from "lucide-react";

export default function WomenSafetyLegalPage() {
  const router = useRouter();

  const sections = [
    {
      id: "contact",
      title: "Contact Us",
      icon: PhoneCall,
      basePath: "/women-safety/contactus/",
      description:
        "If you’re scared, hurt, or alone — don’t wait. Call us. We're here for you 24/7 with real human support and verified female lawyers.",
      services: [
        {
          name: "Talk to a Legal Expert",
          slug: "ContactSupportPage",
          description:
            "Connect instantly with verified female legal professionals. Confidential, compassionate, and ready to listen.",
        },
      ],
    },
    {
      id: "cyber",
      title: "Blackmailed / Threatened Online?",
      icon: EyeOff,
      basePath: "/women-safety/cybercrime/",
      description:
        "For every woman silenced by threats in her DMs — we’re done staying quiet. This is your weapon against digital abuse.",
      services: [
        {
          name: "Report Cyber Threats",
          slug: "ReportCyberThreatsPage",
          description:
            "Send us screenshots. We'll take care of filing cyber complaints, sending legal notices, and ensuring offenders face justice.",
        },
      ],
    },
    {
      id: "sexual",
      title: "Sexually Harassed?",
      icon: AlertTriangle,
      basePath: "/women-safety/sexualharassment/",
      description:
        "Harassment can happen anywhere — workplace, online, or public. Our verified female lawyers are here to support and guide you to justice.",
      services: [
        {
          name: "Get Legal Support",
          slug: "SexualHarassmentHelpPage",
          description:
            "Confidential legal advice, anonymous reporting, and SOS help. Let’s turn fear into action — step by step.",
        },
      ],
    },
    {
      id: "abuse",
      title: "Abused Verbally / Physically?",
      icon: Shield,
      basePath: "/women-safety/abuse/",
      description:
        "You’ve been silent long enough. We’re here to help you fight back — safely, legally, and without judgment.",
      services: [
        {
          name: "Seek Legal Protection",
          slug: "AbuseSupportPage",
          description:
            "We handle cases of domestic violence, emotional, or verbal abuse with full confidentiality and expert legal support.",
        },
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => {
    router.push(`${basePath}${slug}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-100">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center text-center h-[70vh] overflow-hidden bg-gradient-to-r from-[#3b0a0a] via-[#5b0d0d] to-[#120202] text-white">
        <div className="absolute inset-0 bg-[url('/womensafety-bg.jpg')] bg-cover bg-center opacity-25" />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex justify-center mb-6"
          >
            <Heart className="w-16 h-16 text-[#e63946]" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Women Safety & Legal{" "}
            <span style={{ color: "#f8c8c8" }}>Support</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            If you are <strong>Scared, Hurt or Alone</strong> — Don’t wait. Call
            us. We're here for You <strong>24/7</strong>.
          </p>
          <p className="mt-4 text-[#f8c8c8] font-medium">
            Every woman deserves safety, dignity, and justice. Let justice begin
            with <span className="font-bold">YOU</span>.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#e63946]/10 rounded-full">
                  <Icon className="w-6 h-6 text-[#e63946]" />
                </div>
                <h2 className="text-3xl font-bold text-[#3b0a0a]">
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
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#e63946]/10 to-transparent transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-lg font-semibold text-[#3b0a0a] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                      {service.description}
                    </p>
                    <button
                      onClick={() =>
                        handleViewDetails(section.basePath, service.slug)
                      }
                      className="flex items-center gap-2 text-[#e63946] font-medium group cursor-pointer"
                    >
                      View Details →
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
