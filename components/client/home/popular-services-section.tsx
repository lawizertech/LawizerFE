"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { memo } from "react";
import { FileText, Briefcase, FileSignature, Factory, ArrowRight } from "lucide-react";

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
}: {
  service: (typeof popularServices)[number];
  index: number;
}) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className="flex-shrink-0 w-[280px] sm:w-auto"
    >
      <Link
        href={service.url || "/"}
        className="group block h-full no-underline"
      >
        <div className="pop-card bg-white/75 backdrop-blur-md border-[1.5px] border-[#e4e8f0]/70 rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] h-full flex flex-col gap-4">
          {/* Icon row + badge */}
          <div className="flex items-start justify-between">
            <div className={`service-icon ${service.iconClass} w-11 h-11 rounded-xl text-xl flex items-center justify-center`}>
              <Icon size={20} strokeWidth={1.8} />
            </div>
            {service.badge && (
              <span className="text-[10px] font-semibold tracking-wider uppercase bg-[var(--brand-light)] text-[var(--brand)] border border-[rgba(202,45,66,0.15)] rounded-full px-2.5 py-[3px]">
                {service.badge}
              </span>
            )}
          </div>

          {/* Title + tagline */}
          <div>
            <div className="font-[family-name:var(--font-head)] text-[15px] font-bold text-[var(--text-primary)] mb-1">
              {service.title}
            </div>
            <div className="text-xs text-[var(--text-muted)] font-medium leading-relaxed">
              {service.tagline}
            </div>
          </div>

          {/* Feature list */}
          <ul className="list-none m-0 p-0 flex-1 flex flex-col gap-2">
            {service.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[13px] text-[var(--text-secondary)]">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[var(--brand)] shrink-0 opacity-70" />
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
  return (
    <section
      id="popular-services"
      className="py-20 px-[5%] bg-[var(--bg-soft)] relative overflow-hidden"
    >
      {/* Subtle brand radial behind heading */}
      <div className="absolute -top-[120px] -right-[120px] w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,rgba(202,45,66,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[var(--brand-light)] border-[1.5px] border-[rgba(202,45,66,0.2)] text-[var(--brand)] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)] inline-block animate-[pulse-premium_3s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
            Most In-Demand
          </div>

          <div className="flex items-end justify-between flex-wrap gap-3">
            <h2 className="font-[family-name:var(--font-head)] text-[clamp(28px,3vw,40px)] font-extrabold text-[var(--text-primary)] leading-tight tracking-tight m-0">
              Popular <span className="text-[var(--brand)]">Services</span>
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-[300px] leading-relaxed font-medium m-0">
              Trusted by clients across India — fast, reliable, handled by experts.
            </p>
          </div>
        </motion.div>

        {/* Cards: horizontal scroll on mobile → 4-col grid on desktop */}
        <div className="pop-cards-row">
          {popularServices.map((service, i) => (
            <PopularServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.45 }}
          className="mt-12 text-center"
        >
          <Link
            href="/startup-businesslegal"
            className="btn-hero inline-flex items-center"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Responsive override */}
      
    </section>
  );
}
