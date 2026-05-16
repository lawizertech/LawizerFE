"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Home,
  FileText,
  Gavel,
  ArrowRight,
  Phone,
  ChevronRight,
  Tag,
  CheckCircle2,
  Sparkles,
  ChevronDown,
} from "lucide-react";

export default function PropertyLegalPage() {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  // Which section was just navigated to — drives the pulse highlight
  const [highlightedSection, setHighlightedSection] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 160]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  // Section refs
  const sectionRefs: Record<string, React.RefObject<HTMLElement>> = {
    "verify-consult":       useRef<HTMLElement>(null),
    "agreements-deeds":     useRef<HTMLElement>(null),
    "registration-support": useRef<HTMLElement>(null),
  };

  const dropdownItems = [
    { label: "Property Paper Review",                     sectionId: "verify-consult" },
    { label: "Property Registration (Sale Deed)",         sectionId: "registration-support" },
    { label: "Gift Deed Drafting & Registration",         sectionId: "registration-support" },
    { label: "Rent Agreement",                            sectionId: "agreements-deeds" },
    { label: "Commercial Lease Agreement",                sectionId: "agreements-deeds" },
    { label: "Joint Development Agreement (JDA)",         sectionId: "agreements-deeds" },
    { label: "Property Report",                          sectionId: "verify-consult" },
    { label: "Agreement to Sale / Sale Agreement Review", sectionId: "verify-consult" },
  ];

  // Recalculate dropdown position from live button rect
  const recalcPos = useCallback(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setDropdownPos({ top: r.bottom + 6, left: r.left, width: r.width });
    }
  }, []);

  // Close dropdown the instant ANY downward scroll happens
  useEffect(() => {
    let lastY = window.scrollY;
    const handler = () => {
      const currentY = window.scrollY;
      if (dropdownOpen && currentY > lastY) {
        // User scrolled down — close immediately
        setDropdownOpen(false);
      } else {
        recalcPos();
      }
      lastY = currentY;
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", recalcPos);
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", recalcPos);
    };
  }, [dropdownOpen, recalcPos]);

  const openDropdown = () => {
    recalcPos();
    setDropdownOpen((v) => !v);
  };

  // Close on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (btnRef.current && !btnRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [dropdownOpen]);

  const handleDropdownSelect = (sectionId: string) => {
    setDropdownOpen(false);
    setTimeout(() => {
      sectionRefs[sectionId]?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    // Trigger highlight pulse on the target section — clear after animation completes
    setHighlightedSection(sectionId);
    setTimeout(() => setHighlightedSection(null), 1800);
  };

  const handleRequestCallback = () => router.push("/contact?ref=property-callback");

  const sections = [
    {
      id: "verify-consult",
      title: "Verification & Consultation",
      icon: Home,
      basePath: "/property/verify/",
      description: "Ensure a safe investment and gain complete legal clarity before any property transaction. Know your property before you buy it.",
      services: [
        { name: "Property Report", slug: "property-report", price: "₹999", originalPrice: "₹2,999", description: "Detailed report verifying ownership, title clarity, encumbrances, government approvals, and pending disputes." },
        { name: "Property Paper Review", slug: "property-paper-review", price: "₹999", originalPrice: "₹1,999", description: "Expert legal review of documents like title deeds and mutation papers, followed by an oral consultation on the property's legal status." },
        { name: "Agreement to Sale / Sale Agreement Review", slug: "agreement-review", price: "₹999", originalPrice: "₹2,499", description: "Legal review of your Sale Agreement or Agreement to Sale to ensure it's legally sound, enforceable, and protects your interests." },
      ],
    },
    {
      id: "agreements-deeds",
      title: "Agreements & Deeds Drafting",
      icon: FileText,
      basePath: "/property/drafting/",
      description: "Drafting legally compliant and customized documents to secure your rights, responsibilities, and entire investment.",
      services: [
        { name: "Sale Deed Drafting", slug: "sale-deed", price: "₹999", originalPrice: "₹5,999", description: "Drafting the final legal document that officially transfers property ownership, defining rights, terms, and responsibilities." },
        { name: "Agreement to Sale Drafting", slug: "agreement-to-sale", price: "₹999", originalPrice: "₹4,499", description: "Drafting the first legal step that defines mutual terms between buyer and seller, safeguarding both parties before the final sale." },
        { name: "Rent Agreement", slug: "rent-agreement", price: "₹999", originalPrice: "₹1,499", description: "Professionally drafted and legally compliant agreement defining terms between landlord and tenant." },
        { name: "Commercial Lease Agreement", slug: "commercial-lease", price: "₹999", originalPrice: "₹5,499", description: "Drafting a legal contract for commercial properties (offices, shops, warehouses), covering rent, duration, and specific business clauses." },
        { name: "Joint Development Agreement (JDA)", slug: "joint-development-agreement", price: "₹999", originalPrice: "₹8,999", description: "A legal contract between a landowner and a developer, outlining terms for property development, profit-sharing, and timelines." },
        // ❌ REMOVED — Power of Attorney Drafting → moved to /documentation
        { name: "Will Drafting & Registration", slug: "will-drafting", price: "₹999", originalPrice: "₹2,999", description: "Drafting a clear, legally valid Will to ensure your assets are distributed according to your wishes and prevent family disputes." },
        { name: "Relinquishment Deed", slug: "relinquishment-deed", price: "₹999", originalPrice: "₹4,499", description: "Drafting a deed for a co-owner to voluntarily give up their share to another co-owner or family member." },
      ],
    },
    {
      id: "registration-support",
      title: "Property Registration",
      icon: Gavel,
      basePath: "/property/registration/",
      description: "Hassle-free legal support for the complex process of registering your property and legal documents with government authorities.",
      services: [
        { name: "Property Registration (Sale Deed)", slug: "property-registration", price: "₹999", originalPrice: "₹8,999", description: "Expert legal support to prepare and verify the Sale Deed and guide you through the entire registration process at the sub-registrar office." },
        { name: "Gift Deed Drafting & Registration", slug: "gift-deed", price: "₹999", originalPrice: "₹6,499", description: "Transfer ownership of property voluntarily without consideration, ensuring the deed is legally valid and registered." },
        // ❌ REMOVED — Registration of POA → moved to /documentation
      ],
    },
  ];

  const handleViewDetails = (basePath: string, slug: string) => router.push(`${basePath}${slug}`);

  return (
    <div className="min-h-screen" style={{ background: "#f8f7f4" }}>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center"
        style={{ minHeight: "100vh", background: "#06101e", overflow: "hidden" }}
      >
        {/* Parallax photo */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
          aria-hidden
        >
          <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center" />
        </motion.div>

        {/* Rich atmospheric overlays */}
        {/* Base darkening layer */}
        <div className="absolute inset-0" style={{ background: "rgba(6,16,30,0.78)" }} />

        {/* Directional cinematic vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, rgba(6,16,30,0.55) 0%, rgba(6,16,30,0.1) 40%, rgba(120,70,10,0.22) 70%, rgba(6,16,30,0.85) 100%)",
          }}
        />

        {/* Strong bottom fade so content reads clearly */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{
            background: "linear-gradient(to top, rgba(6,16,30,0.9) 0%, transparent 100%)",
          }}
        />

        {/* Warm amber radial glow — centered, feels like golden sunlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 50% at 52% 48%, rgba(233,155,43,0.18) 0%, rgba(180,100,10,0.08) 40%, transparent 70%)",
          }}
        />

        {/* Top-left dark vignette for depth */}
        <div
          className="absolute top-0 left-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(6,16,30,0.55) 0%, transparent 100%)",
          }}
        />

        {/* Subtle noise/grain layer via repeating gradient */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.035]"
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
          animate={{ x: [0, 30, 0], y: [0, -20, 0], opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute pointer-events-none"
          style={{
            top: "18%", left: "10%", width: "340px", height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(233,155,43,0.22) 0%, transparent 68%)",
            filter: "blur(48px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -22, 0], y: [0, 26, 0], opacity: [0.15, 0.38, 0.15] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute pointer-events-none"
          style={{
            bottom: "20%", right: "8%", width: "280px", height: "280px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,44,65,0.2) 0%, transparent 68%)",
            filter: "blur(50px)",
          }}
        />
        {/* Small tight accent glow top-right */}
        <motion.div
          animate={{ opacity: [0.18, 0.42, 0.18] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute pointer-events-none"
          style={{
            top: "12%", right: "18%", width: "180px", height: "180px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,200,80,0.28) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-4xl px-4 sm:px-8 pt-28 pb-20"
        >
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
                background: "rgba(233,155,43,0.14)",
                border: "1px solid rgba(233,155,43,0.36)",
                color: "#f5c76a",
              }}
            >
              <Sparkles className="w-3 h-3" />
              Trusted Property Legal Services
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
            Property Legal Services
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #e99b2b 0%, #f5c76a 50%, #d4821c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              with Lawizer
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-sm sm:text-base italic mb-3"
            style={{ color: "rgba(220,228,240,0.78)", lineHeight: 1.7 }}
          >
            "Before You Buy, Let Lawizer Verify"
          </motion.p>

          {/* Sale line */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mb-9 flex-wrap"
          >
            <span className="text-sm sm:text-base" style={{ color: "rgba(215,222,235,0.82)" }}>
              Get all types of Property Report/Review starting at just{" "}
              <span className="font-bold text-white">₹999</span>
            </span>
            <span
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
              style={{
                background: "rgba(201,44,65,0.2)",
                border: "1px solid rgba(201,44,65,0.4)",
                color: "#ff8a9a",
              }}
            >
              <Tag className="w-2.5 h-2.5" />
              Limited Time Offer
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 44px rgba(233,155,43,0.55)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleRequestCallback}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white"
              style={{
                background: "linear-gradient(135deg, #e99b2b 0%, #c97d10 100%)",
                boxShadow: "0 4px 24px rgba(233,155,43,0.4), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Request a Callback
            </motion.button>

            <motion.button
              ref={btnRef}
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={openDropdown}
              className="flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white transition-colors"
              style={{
                background: "rgba(255,255,255,0.09)",
                border: "1px solid rgba(255,255,255,0.22)",
                backdropFilter: "blur(10px)",
              }}
            >
              🏠 Types of Property Agreements
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </motion.button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {["Safe & Verified Transactions", "Expert Property Lawyers", "End-to-End Support"].map((b) => (
              <div key={b} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "#4ade80" }} />
                <span className="text-xs sm:text-sm" style={{ color: "rgba(195,208,228,0.78)" }}>{b}</span>
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
          DROPDOWN — fixed to viewport, repositions on scroll
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {dropdownOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0"
              style={{ zIndex: 9998 }}
              onClick={() => setDropdownOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 4, scale: 0.97 }}
              transition={{ duration: 0.16 }}
              style={{
                position: "fixed",
                top: dropdownPos.top,
                left: dropdownPos.left,
                width: Math.max(dropdownPos.width, 280),
                zIndex: 9999,
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(6,16,30,0.28), 0 4px 16px rgba(6,16,30,0.14), 0 0 0 1px rgba(233,155,43,0.15)",
              }}
            >
              {/* Header bar */}
              <div
                className="px-4 py-2.5 flex items-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #06101e 0%, #1a2f55 100%)",
                  borderBottom: "1px solid rgba(233,155,43,0.2)",
                }}
              >
                <span className="text-[10px] font-black tracking-[0.18em] uppercase" style={{ color: "#e99b2b" }}>
                  Browse Services
                </span>
                <div className="flex-1 h-px" style={{ background: "rgba(233,155,43,0.2)" }} />
              </div>

              {/* Scrollable items — compact window, ~3.5 items visible */}
              <div
                style={{
                  background: "white",
                  maxHeight: "135px",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(233,155,43,0.3) transparent",
                }}
              >
                {dropdownItems.map((item, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.12, delay: i * 0.03 }}
                    onClick={() => handleDropdownSelect(item.sectionId)}
                    className="w-full text-left px-4 py-3 text-sm font-medium flex items-center gap-2.5 group transition-colors duration-120"
                    style={{
                      color: "#0e172b",
                      borderBottom: i < dropdownItems.length - 1 ? "1px solid rgba(14,23,43,0.05)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(233,155,43,0.07)";
                      (e.currentTarget as HTMLElement).style.color = "#b86e0a";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#0e172b";
                    }}
                  >
                    <ChevronRight
                      className="w-3 h-3 flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                      style={{ color: "#e99b2b", opacity: 0.6 }}
                    />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════════════
          SERVICE SECTIONS
      ══════════════════════════════════════════════ */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pb-32 sm:pb-40 space-y-20 sm:space-y-28">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.section
              key={section.id}
              ref={sectionRefs[section.id] as React.RefObject<HTMLElement>}
              initial={{ opacity: 0, y: 56 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.05 }}
              className="scroll-mt-24"
            >
              {/* Section header — pulses amber when navigated to from dropdown */}
              <motion.div
                animate={
                  highlightedSection === section.id
                    ? { backgroundColor: ["rgba(233,155,43,0)", "rgba(233,155,43,0.10)", "rgba(233,155,43,0.06)", "rgba(233,155,43,0)"] }
                    : { backgroundColor: "rgba(233,155,43,0)" }
                }
                transition={{ duration: 1.4, ease: "easeOut" }}
                className="flex items-center gap-3 mb-3 -mx-3 px-3 py-2 rounded-xl"
              >
                <motion.div
                  animate={
                    highlightedSection === section.id
                      ? { scale: [1, 1.15, 1], boxShadow: ["0 0 0px rgba(233,155,43,0)", "0 0 18px rgba(233,155,43,0.5)", "0 0 0px rgba(233,155,43,0)"] }
                      : {}
                  }
                  transition={{ duration: 1.0 }}
                  className="p-2.5 rounded-xl"
                  style={{ background: "rgba(233,155,43,0.1)" }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#e99b2b]" />
                </motion.div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight">
                  {section.title}
                </h2>
              </motion.div>
              <p className="text-gray-400 text-sm sm:text-base mb-9 max-w-2xl">
                {section.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {section.services.map((service, cIdx) => (
                  <motion.div
                    key={service.slug}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: cIdx * 0.06 }}
                    // Pulse highlight when this section was just navigated to
                    animate={
                      highlightedSection === section.id
                        ? {
                            boxShadow: [
                              "0 2px 10px rgba(14,23,43,0.05)",
                              `0 0 0 2px rgba(233,155,43,0.45), 0 8px 32px rgba(233,155,43,0.18)`,
                              "0 2px 10px rgba(14,23,43,0.05)",
                            ],
                            y: [0, -3, 0],
                          }
                        : {
                            boxShadow: "0 2px 10px rgba(14,23,43,0.05)",
                            y: 0,
                          }
                    }
                    transition={
                      highlightedSection === section.id
                        ? { duration: 1.2, delay: cIdx * 0.07, ease: "easeOut" }
                        : { duration: 0.3 }
                    }
                    whileHover="hovered"
                    onClick={() => handleViewDetails(section.basePath, service.slug)}
                    className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      border: "1px solid rgba(14,23,43,0.07)",
                    }}
                  >
                    {/* Top accent bar */}
                    <motion.div
                      variants={{ hovered: { scaleX: 1, opacity: 1 } }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="absolute top-0 left-0 right-0 h-[3px] origin-left"
                      style={{ background: "linear-gradient(90deg, #e99b2b, #c92c41)" }}
                    />
                    {/* Ambient glow */}
                    <motion.div
                      variants={{ hovered: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "radial-gradient(ellipse 85% 55% at 25% 0%, rgba(233,155,43,0.07) 0%, transparent 70%)",
                      }}
                    />
                    <div className="relative z-10 p-5 sm:p-6 flex flex-col h-full">
                      <h3 className="text-base sm:text-[17px] font-bold text-[#0e172b] mb-2 group-hover:text-[#c97d10] transition-colors duration-300 leading-snug">
                        {service.name}
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
                      <div className="flex items-center gap-1.5 text-sm font-semibold text-[#e99b2b] group-hover:gap-2.5 transition-all duration-300">
                        View Details
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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