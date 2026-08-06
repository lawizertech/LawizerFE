"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import documentationData from "../data/documentation.json";

import {
  Users,
  Shield,
  FileText,
  Gavel,
  Building2,
  Scale,
  Home,
  Clock3,
  BadgeIndianRupee,
  CheckCircle2,
} from "lucide-react";

type Service = (typeof documentationData)[number];

interface HeroProps {
  service: Service;
}

export default function HeroWithAddons({ service }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const addonIcons = {
    users: Users,
    shield: Shield,
    fileText: FileText,
    gavel: Gavel,
    building2: Building2,
    scale: Scale,
    home: Home,
    clock: Clock3,
    badgeIndianRupee: BadgeIndianRupee,
    checkCircle: CheckCircle2,
  };

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-r from-[#0e172b] to-[#1a2a4f] text-white px-4 sm:px-6"
      style={{ paddingTop: "100px", paddingBottom: "56px" }}
    >
      <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div
        className={`absolute top-1/4 left-1/4 w-72 h-72 ${service.theme.orb1} blur-3xl rounded-full`}
      />

      <div
        className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${service.theme.orb2} blur-3xl rounded-full`}
      />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div
            className={`p-4 rounded-2xl bg-gradient-to-br ${service.theme.iconBg} shadow-lg inline-flex`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth={2}
              className="w-12 h-12 sm:w-14 sm:h-14"
            >
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 tracking-tight">
            {service.hero.title}{" "}
            <span className={service.theme.badgeText}>
              {service.hero.highlight}
            </span>
            
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            {service.hero.subtitle}
          </p>
          <p className={`text-sm mb-8 ${service.theme.badgeText}`}>{service.hero.badge}</p>

          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              {service.hero.price}{" "}
              <sup className="text-lg font-semibold">*</sup>
            </p>
            <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
              {service.hero.originalPrice}
            </p>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            {service.hero.timeline}
            {" · "}
            {service.hero.features.join(" · ")}
          </p>

          <div className="w-full border border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
              <p className="text-white font-semibold text-sm sm:text-base">
                Also Get Absolutely Free
              </p>
            </div>
            <div className="bg-white/5 py-8 px-4 sm:px-8">
              <div className="flex flex-wrap justify-center gap-6 items-start">
                {service.hero.addons.map((addon, i) => {
                  const Icon =
                    addonIcons[addon.icon as keyof typeof addonIcons];

                  return (
                    <div
                      key={i}
                      className="relative flex flex-col items-center gap-3 w-24 sm:w-28"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md">
                        {Icon ? (
                          <Icon className="w-6 h-6" />
                        ) : (
                          <FileText className="w-6 h-6" />
                        )}
                      </div>

                      <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                        {addon.label}
                      </p>

                      {i < service.hero.addons.length - 1 && (
                        <span className="hidden sm:block absolute -right-3 top-4 text-white/40 text-xl font-light">
                          +
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-4 text-slate-500 text-xs italic">
            *Facilitation Fees. Government Charges Extra.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
