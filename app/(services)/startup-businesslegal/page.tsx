"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useCallback } from "@/context/callbackContext";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Briefcase,
  Rocket,
  TrendingUp,
  Shield,
  Settings,
  ArrowRight,
  Phone,
  CheckCircle2,
  Star,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function StartupAndBusinessLegalPage() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const { openCallback } = useCallback();

  const handleRequestCallback = () => {
    openCallback("Startup & Business Legal");
  };

  const handleScrollToRegistration = () => {
    const el = document.getElementById("registration-tabs");

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  // Bundles: ascending order (OPC → LLP → Pvt Ltd), LLP = Most Popular
  const complianceBundles = [
    {
      id: "opc-bundle",
      name: "OPC Bundle",
      tagline: "Incorporation + Annual Compliance",
      price: "₹9,999",
      originalPrice: "₹19,999",
      discount: "50% OFF",
      popular: false,
      includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
    },
    {
      id: "llp-bundle",
      name: "LLP Bundle",
      tagline: "Incorporation + Annual Compliance",
      price: "₹12,999",
      originalPrice: "₹24,999",
      discount: "48% OFF",
      popular: true,
      includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
    },
    {
      id: "pvt-ltd-bundle",
      name: "Pvt Ltd Bundle",
      tagline: "Incorporation + Annual Compliance",
      price: "₹14,999",
      originalPrice: "₹29,999",
      discount: "50% OFF",
      popular: false,
      includes: ["Incorporation", "Annual Compliance", "ROC Filing"],
    },
  ];

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
          price: "₹1,499",
          originalPrice: "₹4,999",
          discount: "70% OFF",
          description: "Ideal for startups planning to scale and raise investment. Offers limited liability and investor credibility.",
        },
        {
          name: "One Person Company (OPC)",
          slug: "OnePersonCompanyPage",
          price: "₹999",
          originalPrice: "₹2,999",
          discount: "67% OFF",
          description: "Perfect for solo founders who want corporate structure benefits with simplified compliance.",
        },
        {
          name: "Limited Liability Partnership (LLP)",
          slug: "LLPPage",
          price: "₹1,499",
          originalPrice: "₹3,999",
          discount: "Save ₹2,500",
          description: "Blend of partnership flexibility and limited liability protection. Suited for multi-partner businesses.",
        },
        {
          name: "Startup India Registration (DPIIT Recognition)",
          slug: "StartupIndiaRegistrationPage",
          price: "₹999",
          originalPrice: "₹2,499",
          discount: "60% OFF",
          description: "Government recognition offering tax benefits, funding access, and compliance support for innovative startups.",
        },
        {
          name: "GST Registration",
          slug: "GSTRegistrationPage",
          price: "₹999",
          originalPrice: "₹1,999",
          discount: "50% OFF",
          description: "Mandatory for businesses exceeding turnover thresholds. Enables tax compliance and seamless trade.",
        },
        {
          name: "Public Limited Company (PLC)",
          slug: "PublicLimitedCompanyPage",
          price: "₹19,999 – ₹29,999",
          originalPrice: "₹39,999 – ₹59,999",
          discount: null,
          description: "For large-scale enterprises looking to raise capital from the public and expand operations.",
        },
        {
          name: "Section 8 Company (NGO)",
          slug: "Section8NGOCompanyPage",
          price: "₹8,999 – ₹14,999",
          originalPrice: "₹17,999 – ₹24,999",
          discount: null,
          description: "Non-profit structure for charitable or social initiatives. Eligible for tax exemptions and grants.",
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
          price: "₹1,199",
          originalPrice: "₹3,499",
          discount: "Save ₹2,300",
          description: "Secure your brand name, logo, and identity with nationwide legal protection.",
        },
        {
          name: "Reply to Trademark Objection",
          slug: "ReplyToTrademarkObjectionPage",
          price: "₹1,999 – ₹3,999",
          originalPrice: "₹5,999 – ₹8,999",
          discount: null,
          description: "Respond professionally to trademark office objections and ensure smooth registration.",
        },
        {
          name: "Renew Your Trademark",
          slug: "RenewTrademarkPage",
          price: "₹999",
          originalPrice: "₹2,499",
          discount: "60% OFF",
          description: "Extend protection of your registered trademark and prevent cancellation due to expiry.",
        },
        {
          name: "Sell Your Trademark",
          slug: "SellYourTrademarkPage",
          price: "₹999",
          originalPrice: "₹2,499",
          discount: "60% OFF",
          description: "Legally transfer ownership of your registered trademark with a structured sale agreement.",
        },
        {
          name: "Copyright Registration",
          slug: "CopyrightRegistrationPage",
          price: "₹1,500",
          originalPrice: "₹3,999",
          discount: "63% OFF",
          description: "Protect original creative works such as software, music, or written content.",
        },
        {
          name: "Reply to Copyright Objection",
          slug: "ReplyToCopyrightObjectionPage",
          price: "₹999",
          originalPrice: "₹2,499",
          discount: "60% OFF",
          description: "Respond to copyright office objections effectively to secure your IP rights.",
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
          price: "₹1,499",
          originalPrice: "₹2,999",
          discount: "50% OFF",
          description: "Show your commitment to quality standards with recognized ISO certification.",
        },
        {
          name: "MSME / Udyam Registration",
          slug: "MSMEUdhyamRegistrationPage",
          price: "₹1,499",
          originalPrice: "₹2,999",
          discount: "50% OFF",
          description: "Get government recognition as an MSME and unlock financial incentives and subsidies.",
        },
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => {
    router.push(`${basePath}${slug}`);
  };

  return (
    <div className="min-h-screen" style={{ background: "#f8f7f4" }}>

      {/* ══════════════════════════════════════════
          HERO — Cinematic immersive dark
      ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: "100vh", background: "#050d1a" }}
      >
        {/* Parallax background photo */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center scale-110"
        />

        {/* Multi-layer overlays for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(5,13,26,0.97) 0%, rgba(10,20,45,0.88) 45%, rgba(140,20,35,0.22) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 52%, rgba(201,44,65,0.14) 0%, transparent 68%)",
          }}
        />

        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.05,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Floating ambient orbs */}
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[22%] left-[14%] w-56 h-56 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201,44,65,0.28) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 22, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          className="absolute bottom-[28%] right-[10%] w-72 h-72 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(233,155,43,0.22) 0%, transparent 70%)",
            filter: "blur(44px)",
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-4xl px-4 sm:px-8 pt-28 pb-20"
        >
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center mb-7"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(201,44,65,0.14)",
                border: "1px solid rgba(201,44,65,0.38)",
                color: "#ff8a9a",
              }}
            >
              <Sparkles className="w-3 h-3" />
              India's Trusted Legal Platform
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black tracking-tight text-white leading-[1.05] mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textShadow: "0 2px 48px rgba(0,0,0,0.55)",
            }}
          >
            Startup & Business
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #e99b2b 0%, #f5c76a 50%, #e99b2b 100%)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Legal Services
            </span>
          </motion.h1>

          {/* Subheadings */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2"
            style={{ color: "rgba(215,222,235,0.85)", lineHeight: 1.72 }}
          >
            From idea to empire — built on solid legal ground.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="text-sm sm:text-base mb-10"
            style={{ color: "#e99b2b", letterSpacing: "0.01em" }}
          >
            End-to-end legal solutions to start, protect, manage, and grow your business.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 45px rgba(201,44,65,0.55)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRequestCallback}
              className="group relative flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white overflow-hidden transition-all"
              style={{
                background: "linear-gradient(135deg, #c92c41 0%, #9d1f31 100%)",
                boxShadow: "0 4px 28px rgba(201,44,65,0.38), inset 0 1px 0 rgba(255,255,255,0.14)",
              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Request a Callback
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                background: "rgba(255,255,255,0.14)",
                boxShadow: "0 0 32px rgba(255,255,255,0.09)",
              }}
              whileTap={{ scale: 0.97 }}
              onClick={handleScrollToRegistration}
              className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white transition-all"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span>🏢</span>
              Register Your Business
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-14"
          >
            {["10,000+ Businesses Registered", "Expert Verified Lawyers", "Secure & Confidential"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#4ade80" }} />
                <span className="text-xs sm:text-sm" style={{ color: "rgba(195,208,228,0.78)" }}>
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
          <span className="text-white text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICE SECTIONS
      ══════════════════════════════════════════ */}
      <div
        id="registration-tabs"
        className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pb-32 sm:pb-40"
      >
        {sections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: sIdx * 0.04 }}
              className="mb-20 sm:mb-28"
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ background: "rgba(201,44,65,0.1)" }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c92c41]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight">
                  {section.title}
                </h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-10 max-w-2xl">
                {section.description}
              </p>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {section.services.map((service, cIdx) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: cIdx * 0.06 }}
                    whileHover="hovered"
                    onClick={() => handleViewDetails(section.basePath, service.slug)}
                    className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                    style={{
                      border: "1px solid rgba(14,23,43,0.07)",
                      boxShadow: "0 2px 10px rgba(14,23,43,0.05)",
                    }}
                  >
                    {/* Top accent bar — slides in on hover */}
                    <motion.div
                      variants={{ hovered: { scaleX: 1, opacity: 1 } }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                      style={{
                        background: "linear-gradient(90deg, #c92c41, #e99b2b)",
                      }}
                    />

                    {/* Ambient glow on hover */}
                    <motion.div
                      variants={{ hovered: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 90% 60% at 20% 0%, rgba(201,44,65,0.055) 0%, transparent 72%)",
                      }}
                    />

                    {/* Lift shadow on hover */}
                    <motion.div
                      variants={{
                        hovered: {
                          boxShadow: "0 20px 48px rgba(14,23,43,0.13)",
                          y: -4,
                        },
                      }}
                      className="relative z-10 p-5 sm:p-6 flex flex-col h-full"
                    >
                      <h3 className="text-base sm:text-[17px] font-bold text-[#0e172b] mb-2 group-hover:text-[#c92c41] transition-colors duration-300 leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                        {service.description}
                      </p>

                      {/* Price block */}
                      <div className="mb-4">
                        {service.originalPrice && (
                          <p className="text-xs text-gray-300 line-through mb-0.5">
                            {service.originalPrice}
                          </p>
                        )}
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-xl font-extrabold text-[#c92c41]">
                            {service.price}
                          </p>
                          {service.discount && (
                            <span
                              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(34,197,94,0.09)",
                                color: "#16a34a",
                                border: "1px solid rgba(34,197,94,0.18)",
                              }}
                            >
                              {service.discount}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CTA row */}
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#c92c41] group-hover:gap-3 transition-all duration-300">
                        View Details
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          );
        })}

        {/* ══════════════════════════════════════════════════════
            MANAGE — Bundle Packages (ascending: OPC → LLP → Pvt Ltd)
        ══════════════════════════════════════════════════════ */}
        <motion.section
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-20 relative z-10 isolate"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl" style={{ background: "rgba(201,44,65,0.1)" }}>
              <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#c92c41]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight">
              Manage Your Business
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base mb-14 max-w-2xl">
            Stay compliant effortlessly. Our all-in-one bundles cover incorporation,
            annual filings, and ROC returns — so you can focus on what matters.
          </p>

          {/* Bundle cards — OPC (cheapest) → LLP (popular) → Pvt Ltd (premium) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 items-end">
            {complianceBundles.map((bundle, bIdx) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: bIdx * 0.1 }}
                whileHover={
                  bundle.popular
                    ? {}
                    : { y: -6, boxShadow: "0 24px 56px rgba(14,23,43,0.13)" }
                }
                className="relative rounded-2xl flex flex-col overflow-visible"
                style={
                  bundle.popular
                    ? {
                        background: "linear-gradient(155deg, #0e172b 0%, #1b2e55 100%)",
                        boxShadow:
                          "0 28px 64px rgba(14,23,43,0.38), 0 0 0 1.5px rgba(233,155,43,0.45)",
                        transform: "translateY(-14px)",
                        zIndex: 10,
                      }
                    : {
                        background: "white",
                        border: "1px solid rgba(14,23,43,0.07)",
                        boxShadow: "0 4px 18px rgba(14,23,43,0.06)",
                      }
                }
              >
                {/* Most Popular badge */}
                {bundle.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-lg"
                      style={{
                        background: "linear-gradient(90deg, #e99b2b, #f5c76a)",
                        color: "#0e172b",
                      }}
                    >
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div
                  className={`p-6 sm:p-8 flex flex-col flex-grow ${
                    bundle.popular ? "pt-11" : ""
                  }`}
                >
                  <h3
                    className="text-base sm:text-lg font-extrabold mb-1 text-center"
                    style={{ color: bundle.popular ? "white" : "#0e172b" }}
                  >
                    {bundle.name}
                  </h3>
                  <p
                    className="text-xs text-center mb-7"
                    style={{
                      color: bundle.popular ? "rgba(195,215,245,0.65)" : "#9ca3af",
                    }}
                  >
                    {bundle.tagline}
                  </p>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <p
                      className="font-black"
                      style={{
                        fontSize: "clamp(1.7rem, 3.5vw, 2.2rem)",
                        color: bundle.popular ? "#e99b2b" : "#c92c41",
                      }}
                    >
                      {bundle.price}
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-1.5">
                      <p
                        className="text-sm line-through"
                        style={{
                          color: bundle.popular
                            ? "rgba(190,210,245,0.4)"
                            : "#d1d5db",
                        }}
                      >
                        {bundle.originalPrice}
                      </p>
                      <span
                        className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                        style={{
                          background: bundle.popular
                            ? "rgba(233,155,43,0.18)"
                            : "rgba(34,197,94,0.09)",
                          color: bundle.popular ? "#e99b2b" : "#16a34a",
                          border: bundle.popular
                            ? "1px solid rgba(233,155,43,0.32)"
                            : "1px solid rgba(34,197,94,0.18)",
                        }}
                      >
                        {bundle.discount}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full h-px mb-6"
                    style={{
                      background: bundle.popular
                        ? "rgba(255,255,255,0.09)"
                        : "rgba(14,23,43,0.06)",
                    }}
                  />

                  {/* Feature list */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {bundle.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: bundle.popular ? "#4ade80" : "#22c55e" }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{
                            color: bundle.popular
                              ? "rgba(218,228,245,0.9)"
                              : "#374151",
                          }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() =>
                      router.push(
                        `/startup-businesslegal/managebusiness/${bundle.id}`
                      )
                    }
                    className="w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all"
                    style={
                      bundle.popular
                        ? {
                            background: "linear-gradient(90deg, #e99b2b, #f5c76a)",
                            color: "#0e172b",
                            boxShadow: "0 6px 24px rgba(233,155,43,0.42)",
                          }
                        : {
                            background: "#c92c41",
                            color: "white",
                            boxShadow: "0 4px 18px rgba(201,44,65,0.26)",
                          }
                    }
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}