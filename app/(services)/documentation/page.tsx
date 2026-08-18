"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { useCallback } from "@/context/callbackContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, ArrowRight, Phone, Tag, CheckCircle2, Sparkles, ChevronRight, ScrollText } from "lucide-react";

export default function StartupDocumentsPage() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  const basePath = "/documentation/";

  const { openCallback } = useCallback();

  const handleRequestCallback = () => {
    openCallback("Documentation Services");
  };

  const handleViewDetails = (slug: string) => {
    router.push(`${basePath}${slug}`);
  };

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
          price: "₹999",
          originalPrice: "₹3,999",
          description:
            "Defines roles, equity, responsibilities, decision-making, and exit mechanisms among founders, preventing conflicts.",
        },
        {
          name: "Business Partnership Agreement",
          slug: "business-partnership-agreement",
          price: "₹999",
          originalPrice: "₹4,499",
          description:
            "Legal contract defining investment, profit-sharing, responsibilities, and exit mechanisms among partners.",
        },
        {
          name: "Employment Agreement",
          slug: "employment-agreement",
          price: "₹999",
          originalPrice: "₹3,499",
          description:
            "Outlines terms, salary, benefits, and termination policies, ensuring compliance with labor laws.",
        },
        {
          name: "Consultancy Agreement",
          slug: "consultancy-agreement",
          price: "₹999",
          originalPrice: "₹3,199",
          description: "Defines the scope, deliverables, fees, and confidentiality between a consultant and company.",
        },
        {
          name: "Non-Disclosure Agreement (NDA)",
          slug: "non-disclosure-agreement",
          price: "₹999",
          originalPrice: "₹1,999",
          description:
            "Protects sensitive business information and trade secrets, allowing safe collaboration or funding discussions.",
        },
        {
          name: "Privacy Policy & Terms of Use",
          slug: "privacy-terms-of-use",
          price: "₹999",
          originalPrice: "₹2,999",
          description: "Defines user data handling and website/app rules, ensuring compliance under IT Act and GDPR.",
        },
        {
          name: "Software as a Service (SaaS) Agreement",
          slug: "saas-agreement",
          price: "₹999",
          originalPrice: "₹5,999",
          description:
            "Governs subscription, licensing, support, and intellectual property rights for software services.",
        },
        {
          name: "Franchise Agreement",
          slug: "franchise-agreement",
          price: "₹999",
          originalPrice: "₹6,999",
          description:
            "Outlines rights, obligations, royalties, and operational standards between a franchisor and franchisee.",
        },
        {
          name: "Joint Venture Agreement",
          slug: "joint-venture-agreement",
          price: "₹999",
          originalPrice: "₹7,999",
          description: "Defines partnership, investment, profit-sharing, and management of a Joint Venture.",
        },
        {
          name: "Shareholder Subscription Agreement",
          slug: "shareholder-subscription-agreement",
          price: "₹999",
          originalPrice: "₹8,999",
          description:
            "Governs the issuance of shares to investors and defines their rights and obligations in the company.",
        },
        {
          name: "Service Agreement & Term Sheet",
          slug: "service-agreement-term-sheet",
          price: "₹999",
          originalPrice: "₹4,499",
          description:
            "Defines scope, fees, deliverables, and timelines for a business service, ensuring legal enforceability.",
        },
        {
          name: "Licensing Agreement",
          slug: "licensing-agreement",
          price: "₹999",
          originalPrice: "₹5,499",
          description:
            "Governs licensing of intellectual property, technology, or products, protecting IP rights and revenue.",
        },
        {
          name: "IP Assignment Agreement",
          slug: "ip-assignment-agreement",
          price: "₹999",
          originalPrice: "₹4,999",
          description:
            "Transfers Intellectual Property (IP) ownership from one party to another, ensuring legal transfer of rights.",
        },
        {
          name: "Letter of Intent (LOI)",
          slug: "letter-of-intent",
          price: "₹999",
          originalPrice: "₹2,999",
          description:
            "Declares preliminary intention to enter a business transaction or agreement, establishing mutual understanding.",
        },
      ],
    },
    {
      // ✅ MOVED FROM /property — Power of Attorney services
      id: "power-of-attorney",
      title: "Power of Attorney Services",
      icon: ScrollText,
      description:
        "Legally authorise a trusted person to act on your behalf in financial, property, or legal matters — drafted and registered with full compliance.",
      services: [
        {
          name: "Power of Attorney (POA) Drafting",
          slug: "power-of-attorney-drafting",
          price: "₹999",
          originalPrice: "₹2,499",
          description:
            "Drafting a legal document to authorize a trusted person to act on your behalf in financial, property, or legal matters.",
        },
        {
          name: "Registration of Power of Attorney",
          slug: "power-of-attorney-registration",
          price: "₹999",
          originalPrice: "₹4,999",
          description:
            "Guidance and support to register your Power of Attorney to make it legally enforceable and accepted by government and financial institutions.",
        },
      ],
    },
  ];

  // Accent colors — teal/blue scheme matching original page
  const accent = "#00bfa5";
  const accentDark = "#007bff";

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* ══════════════════════════════════════════════
 HERO — Cinematic dark, matches Startup/Property pages
 ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center min-h-screen bg-[#06101e] overflow-hidden"
      >
        {/* Parallax background */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110" aria-hidden>
          <div className="absolute inset-0 bg-[url('/documenthero.png')] bg-cover bg-center" />
        </motion.div>

        {/* Layered atmospheric overlays */}
        <div className="absolute inset-0 bg-[#06101e]/80" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(6,16,30,0.60) 0%, rgba(6,16,30,0.08) 45%, rgba(0,100,120,0.2) 80%, rgba(6,16,30,0.88) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#06101e]/90 to-transparent" />
        {/* Teal radial glow — matches page accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 50% 48%, rgba(0,191,165,0.14) 0%, rgba(0,123,255,0.07) 40%, transparent 70%)",
          }}
        />
        {/* Left vignette */}
        <div className="absolute top-0 left-0 w-1/2 h-full pointer-events-none bg-gradient-to-r from-[#06101e]/50 to-transparent" />
        {/* Scanline texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)",
            backgroundSize: "100% 3px",
          }}
        />
        {/* Fine grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Animated orbs */}
        <motion.div
          animate={{ x: [0, 28, 0], y: [0, -18, 0], opacity: [0.22, 0.5, 0.22] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            left: "10%",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,191,165,0.22) 0%, transparent 68%)",
            filter: "blur(48px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 24, 0], opacity: [0.14, 0.34, 0.14] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute pointer-events-none"
          style={{
            bottom: "22%",
            right: "9%",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,123,255,0.22) 0%, transparent 68%)",
            filter: "blur(50px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.15, 0.38, 0.15] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute pointer-events-none"
          style={{
            top: "14%",
            right: "17%",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(80,220,200,0.28) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* Content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl px-4 sm:px-8 pt-28 pb-20">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center mb-6"
          >
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{
                background: "rgba(0,191,165,0.14)",
                border: "1px solid rgba(0,191,165,0.36)",
                color: "#5eead4",
              }}
            >
              <Sparkles className="w-3 h-3" />
              Legal Documents & Agreements
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black tracking-tight text-white leading-[1.06] mb-4"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              textShadow: "0 2px 40px rgba(0,0,0,0.7)",
            }}
          >
            Startup & Operational
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #00bfa5 0%, #5eead4 50%, #00a896 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Agreements
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-sm sm:text-base max-w-xl mx-auto mb-3 text-[#d7deeb]/80 leading-relaxed"
          >
            Legal documents essential for defining relationships, protecting IP, and securing business transactions.
          </motion.p>

          {/* ── Sale Banner ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-9 flex-wrap"
          >
            <span className="text-sm sm:text-base text-[#d7deeb]/80">
              Get all your Agreements done at just <span className="font-bold text-white">₹999</span>
            </span>
            <span
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
              style={{
                background: "rgba(0,191,165,0.18)",
                border: "1px solid rgba(0,191,165,0.38)",
                color: "#5eead4",
              }}
            >
              <Tag className="w-2.5 h-2.5" />
              Limited Time Offer
            </span>
          </motion.div>

          {/* ── CTA Button ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 44px rgba(0,191,165,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRequestCallback}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white"
              style={{
                background: "linear-gradient(135deg, #00bfa5 0%, #007bff 100%)",
                boxShadow: "0 4px 24px rgba(0,191,165,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Request a Callback
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {["Legally Vetted Templates", "Expert Lawyer Drafted", "Tailored to Your Business"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-green-400" />
                <span className="text-xs sm:text-sm text-[#c3d0e4]/80">{b}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/60" />
          <span className="text-white text-[9px] tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
 SERVICE SECTIONS
 ══════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pb-32 sm:pb-40 space-y-20 sm:space-y-28">
        {sections.map((section, sIdx) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: sIdx * 0.05 }}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#00bfa5]/10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: accent }} />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-9 max-w-2xl">{section.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {section.services.map((service, cIdx) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: cIdx * 0.05 }}
                    whileHover="hovered"
                    onClick={() => handleViewDetails(service.slug)}
                    className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      border: "1px solid rgba(14,23,43,0.07)",
                      boxShadow: "0 2px 10px rgba(14,23,43,0.05)",
                    }}
                  >
                    {/* Hover top accent bar */}
                    <motion.div
                      variants={{ hovered: { scaleX: 1, opacity: 1 } }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                      style={{ background: `linear-gradient(90deg, ${accent}, ${accentDark})` }}
                    />
                    {/* Hover ambient glow */}
                    <motion.div
                      variants={{ hovered: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(ellipse 85% 55% at 25% 0%, rgba(0,191,165,0.07) 0%, transparent 70%)",
                      }}
                    />

                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                      <h3 className="text-base sm:text-[17px] font-bold text-[#0e172b] mb-2 transition-colors duration-300 leading-snug">
                        <span className="group-hover:text-[#00a896] transition-colors duration-300">
                          {service.name}
                        </span>
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                        {service.description}
                      </p>
                      <div className="mb-4">
                        {service.originalPrice && (
                          <p className="text-xs text-gray-300 line-through mb-0.5">{service.originalPrice}</p>
                        )}
                        <p className="text-xl font-extrabold text-[#c92c41]">{service.price}</p>
                      </div>
                      <div
                        className="flex items-center gap-1.5 text-sm font-semibold group-hover:gap-2.5 transition-all duration-300"
                        style={{ color: accent }}
                      >
                        View Details
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
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
