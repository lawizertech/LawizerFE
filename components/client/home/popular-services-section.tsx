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
        className="group block h-full"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1.5px solid rgba(228,232,240,0.7)",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            boxShadow: "var(--shadow-sm)",
            transition: "all 0.3s cubic-bezier(0.23,1,0.32,1)",
            height: "100%",
            display: "flex",
            flexDirection: "column" as const,
            gap: "16px",
          }}
          className="pop-card"
        >
          {/* Icon row + badge */}
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
            <div
              className={`service-icon ${service.iconClass}`}
              style={{ width: 44, height: 44, borderRadius: 12, fontSize: 20 }}
            >
              <Icon size={20} strokeWidth={1.8} />
            </div>
            {service.badge && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase" as const,
                  background: "var(--brand-light)",
                  color: "var(--brand)",
                  border: "1px solid rgba(202,45,66,0.15)",
                  borderRadius: 100,
                  padding: "3px 10px",
                }}
              >
                {service.badge}
              </span>
            )}
          </div>

          {/* Title + tagline */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-head)",
                fontSize: 15,
                fontWeight: 700,
                color: "var(--text-primary)",
                marginBottom: 4,
              }}
            >
              {service.title}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500, lineHeight: 1.5 }}>
              {service.tagline}
            </div>
          </div>

          {/* Feature list */}
          <ul style={{ listStyle: "none", margin: 0, padding: 0, flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
            {service.items.map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--text-secondary)" }}>
                <span
                  style={{
                    marginTop: 4,
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--brand)",
                    flexShrink: 0,
                    opacity: 0.7,
                  }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              fontSize: 13,
              fontWeight: 600,
              color: "var(--brand)",
              marginTop: 4,
            }}
          >
            View Details
            <ArrowRight size={13} style={{ transition: "transform 0.2s" }} className="pop-card-arrow" />
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
      style={{
        padding: "80px 5%",
        background: "var(--bg-soft)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle brand radial behind heading */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(202,45,66,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          style={{ marginBottom: 48 }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--brand-light)",
              border: "1.5px solid rgba(202,45,66,0.2)",
              color: "var(--brand)",
              padding: "6px 14px",
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--brand)",
                display: "inline-block",
                animation: "pulse-premium 3s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            Most In-Demand
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <h2
              style={{
                fontFamily: "var(--font-head)",
                fontSize: "clamp(28px, 3vw, 40px)",
                fontWeight: 800,
                color: "var(--text-primary)",
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Popular{" "}
              <span style={{ color: "var(--brand)" }}>Services</span>
            </h2>
            <p style={{ fontSize: 14, color: "var(--text-muted)", maxWidth: 300, lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
              Trusted by clients across India — fast, reliable, handled by experts.
            </p>
          </div>
        </motion.div>

        {/* Cards: horizontal scroll on mobile → 4-col grid on desktop */}
        <div
          className="pop-cards-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
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
          style={{ marginTop: 48, textAlign: "center" }}
        >
          <Link
            href="/startup-businesslegal"
            className="btn-hero"
            style={{ display: "inline-flex" }}
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Responsive override */}
      <style>{`
        .pop-cards-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }
        @media (max-width: 1024px) {
          .pop-cards-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .pop-cards-row {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            gap: 14px;
            padding-bottom: 12px;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
          }
          .pop-cards-row > * {
            scroll-snap-align: start;
          }
        }
        .pop-card:hover {
          border-color: var(--brand) !important;
          box-shadow: 0 12px 36px rgba(202,45,66,0.12), inset 1px 1px 0 rgba(255,255,255,0.9) !important;
          transform: translateY(-3px);
        }
        .pop-card:hover .pop-card-arrow {
          transform: translateX(3px);
        }
      `}</style>
    </section>
  );
}
