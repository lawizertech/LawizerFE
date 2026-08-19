"use client";
import React, { useRef, useState, useEffect } from "react";
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
  Loader2,
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
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/page_startup_businesslegal`);
        const json = await res.json();
        if (json && json.theme) {
          setPageData(json.theme);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const complianceBundles = pageData?.complianceBundles || [];
  const sections = pageData?.sections || [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f7f4]">
        <Loader2 className="w-10 h-10 animate-spin text-red-600" />
      </div>
    );
  }

  const handleViewDetails = (basePath: string, slug: string) => {
    router.push(`${basePath}${slug}`);
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* ══════════════════════════════════════════
 HERO — Cinematic immersive dark
 ══════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen bg-[#050d1a]"
      >
        {/* Parallax background photo */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 bg-[url('/startuplegal.png')] bg-cover bg-center scale-110"
        />

        {/* Multi-layer overlays for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(5,13,26,0.97)_0%,rgba(10,20,45,0.88)_45%,rgba(140,20,35,0.22)_100%)]" />
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_52%,rgba(201,44,65,0.14)_0%,transparent_68%)]" />

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
          className="absolute top-[22%] left-[14%] w-56 h-56 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(201,44,65,0.28)_0%,transparent_70%)] blur-[32px]"
        />
        <motion.div
          animate={{ x: [0, -18, 0], y: [0, 22, 0], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          className="absolute bottom-[28%] right-[10%] w-72 h-72 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(233,155,43,0.22)_0%,transparent_70%)] blur-[44px]"
        />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl px-4 sm:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex justify-center mb-7"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-[#c92c41]/15 border border-[#c92c41]/40 text-[#ff8a9a]">
              <Sparkles className="w-3 h-3" />
              India's Trusted Legal Platform
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-black tracking-tight text-white leading-[1.05] mb-5 text-[clamp(2rem,5vw,4rem)] drop-shadow-[0_2px_48px_rgba(0,0,0,0.55)]"
          >
            Startup & Business
            <br />
            <span className="bg-gradient-to-r from-[#e99b2b] via-[#f5c76a] to-[#e99b2b] bg-[length:200%] text-transparent bg-clip-text">
              Legal Services
            </span>
          </motion.h1>

          {/* Subheadings */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2 text-[#d7deeb]/85 leading-[1.72]"
          >
            From idea to empire — built on solid legal ground.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="text-sm sm:text-base mb-10 text-[#e99b2b] tracking-[0.01em]"
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
              className="group relative flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white overflow-hidden transition-all bg-gradient-to-br from-[#c92c41] to-[#9d1f31] shadow-[0_4px_28px_rgba(201,44,65,0.38),inset_0_1px_0_rgba(255,255,255,0.14)]"
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
              className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base text-white transition-all bg-white/10 border border-white/20 backdrop-blur-md"
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
            {["500+ Businesses Registered", "Expert Verified Lawyers", "Secure & Confidential"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 text-green-400" />
                <span className="text-xs sm:text-sm text-[#c3d0e4]/80">{badge}</span>
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
      <div id="registration-tabs" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 pb-32 sm:pb-40">
        {sections.map((section: any, sIdx: number) => {
          const iconMap: Record<string, any> = {
            Rocket,
            Shield,
            TrendingUp,
            Settings,
          };
          const Icon = iconMap[section.icon] || Rocket;
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
                <div className="p-2.5 rounded-xl bg-brand-red/10">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#c92c41]" />
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e172b] tracking-tight">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-10 max-w-2xl">{section.description}</p>

              {/* Service cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {section.services.map((service: any, cIdx: number) => (
                  <motion.div
                    key={`${service.slug}-${cIdx}`}
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
                          <p className="text-xs text-gray-300 line-through mb-0.5">{service.originalPrice}</p>
                        )}
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-xl font-extrabold text-[#c92c41]">{service.price}</p>
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
                        <p className="text-[10px] font-bold text-gray-500 mt-2">
                          <strong>Government charges excluded</strong>
                        </p>
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


      </div>
    </div>
  );
}
