"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { memo, useEffect } from "react";
import { FileText, Briefcase, FileSignature, Factory, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const popularServices = [
  {
    icon: FileText,
    title: "GST Registration",
    tagline: "Get your GSTIN quickly and stay compliant",
    iconClass: "icon-blue",
    url: "/startup-businesslegal/startbusiness/GSTRegistrationPage",
    badge: "Popular",
    items: [
      "GSTIN for businesses & freelancers",
      "Composition scheme registration",
      "Document preparation & submission",
      "GST certificate delivery",
      "Expert support throughout",
    ],
  },
  {
    icon: FileSignature,
    title: "Trademark Registration",
    tagline: "Protect your brand identity across India",
    iconClass: "icon-purple",
    url: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage",
    badge: "Trending",
    items: [
      "Trademark name search & check",
      "Filing of TM-A application",
      "Status tracking & monitoring",
      "Objection & opposition handling",
      "Trademark renewal support",
    ],
  },
  {
    icon: Briefcase,
    title: "Company Incorporation",
    tagline: "Register your business in just a few clicks",
    iconClass: "icon-green",
    url: "/startup-businesslegal",
    badge: "Top Rated",
    items: [
      "Pvt Ltd, LLP & OPC registration",
      "DIN & DSC generation",
      "Name approval & verification",
      "MOA & AOA drafting",
      "Bank account opening support",
    ],
  },
  {
    icon: Factory,
    title: "MSME / Udyam",
    tagline: "Unlock government benefits for your business",
    iconClass: "icon-orange",
    url: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",
    items: [
      "Udyam registration certificate",
      "Priority sector lending access",
      "Govt subsidy & scheme eligibility",
      "Protection against late payments",
      "Collateral-free loan benefits",
    ],
  },
];

const PopularServiceCard = memo(function PopularServiceCard({
  service,
  index,
  className,
}: {
  service: (typeof popularServices)[number];
  index: number;
  className?: string;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className={`flex-shrink-0 w-full sm:w-auto h-full ${className || ""}`}
    >
      <Link href={service.url || "/"} className="group block h-full no-underline">
        <div className="pop-card bg-white/90 backdrop-blur-xl border border-white/40 rounded-[24px] p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(202,45,66,0.08)] transition-all duration-400 ease-[cubic-bezier(0.23,1,0.32,1)] h-full flex flex-col gap-5 relative overflow-hidden">
          
          {/* Subtle gradient glow in background */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[rgba(202,45,66,0.03)] to-transparent rounded-bl-full pointer-events-none" />

          {/* Icon row + badge */}
          <div className="flex items-start justify-between relative z-10">
            <div
              className={`service-icon ${service.iconClass} w-12 h-12 rounded-[16px] text-xl flex items-center justify-center bg-gradient-to-br shadow-inner border border-white/50`}
            >
              <Icon size={22} strokeWidth={1.5} />
            </div>
            {service.badge && (
              <span className="text-[10px] font-bold tracking-[0.1em] uppercase bg-gradient-to-r from-[rgba(202,45,66,0.08)] to-[rgba(202,45,66,0.03)] text-[var(--brand)] border border-[rgba(202,45,66,0.12)] rounded-full px-3 py-1 backdrop-blur-sm shadow-sm">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title + tagline */}
          <div className="relative z-10 mt-1">
            <div className="font-[family-name:var(--font-display,'Syne',sans-serif)] text-[18px] font-extrabold text-[#0D0F14] mb-1.5 leading-[1.2] tracking-[-0.01em]">
              {service.title}
            </div>
            <div className="text-[13px] text-[#6B7280] font-medium leading-[1.5]">{service.tagline}</div>
          </div>

          {/* Feature list */}
          <ul className="list-none m-0 p-0 flex-1 flex flex-col gap-3 mt-2 relative z-10">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[13.5px] text-[#374151] font-medium leading-[1.4]">
                <div className="mt-[2px] w-4 h-4 rounded-full bg-[rgba(5,150,105,0.1)] flex items-center justify-center shrink-0">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <div className="flex items-center gap-1 text-[13px] font-semibold text-[var(--brand)] mt-1">
            View Details
            <ArrowRight size={13} className="transition-transform duration-200 pop-card-arrow" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
});

export default function PopularServicesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: true }, [
    AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  // Standard continuous scroll without the zoom effect.

  return (
    <section id="popular-services" className="py-6 md:py-8 bg-[var(--bg-soft)] relative overflow-hidden">
      {/* Subtle brand radial behind heading */}
      <div className="absolute -top-[120px] -right-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(202,45,66,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 px-6 lg:px-8"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--brand-light)] border-[1.5px] border-[rgba(202,45,66,0.2)] text-[var(--brand)] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] inline-block animate-[pulse-premium_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            Most In-Demand
          </div>

          <div className="flex items-end justify-between flex-wrap gap-3">
            <h2 className="font-[family-name:var(--)] text-[clamp(28px,3vw,40px)] font-extrabold text-[var(--text-primary)] leading-tight tracking-tight m-0">
              Popular <span className="text-[var(--brand)]">Services</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-[300px] leading-relaxed font-medium m-0">
              Trusted by clients across India — fast, reliable, handled by experts.
            </p>
          </div>
        </motion.div>

        {/* Desktop View (Cards) */}
        <div className="hidden lg:block">
          <div className="pop-cards-row">
            {popularServices.map((service, i) => (
              <PopularServiceCard key={i} service={service} index={i} className="!w-[280px]" />
            ))}
          </div>
        </div>

        {/* Mobile/iPad View (Continuous Carousel) */}
        <div className="block lg:hidden -mx-6 lg:-mx-8 relative">
          
          {/* Vignette effect on edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-[var(--bg-soft)] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-[var(--bg-soft)] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden py-6" ref={emblaRef}>
            <div className="flex">
              {popularServices.map((service, i) => {
                return (
                  <div key={i} className="flex-[0_0_82%] sm:flex-[0_0_320px] min-w-0 px-2.5">
                    {/* The inner wrapper that gets scaled dynamically by the scroll listener */}
                    <div className="h-full origin-center transform-gpu will-change-transform">
                      <PopularServiceCard service={service} index={i} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mt-12 text-center"
        >
          <Link href="/startup-businesslegal" className="btn-hero inline-flex items-center">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Responsive override */}
    </section>
  );
}
