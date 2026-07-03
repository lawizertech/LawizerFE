"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
} from "@/components/client/ServicePageLayout";
import servicesDataRaw from "@/lib/data/services-data.json";

// Map lucide icons to SVG blocks (we just use standard lucide icons or fallback SVGs for addons)
import { Shield, FileText, CheckCircle, Scale, Users, Gavel, FileSignature, Home, Clock } from "lucide-react";

// For addons, we use a fixed set of SVGs or map them dynamically
const AddonIconMapper = ({ index }: { index: number }) => {
  const svgs = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path d="M7 8h10M7 12h6M7 16h8" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path d="M9 12h6M9 16h6M9 8h6" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6"><path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" /><rect x="3" y="4" width="18" height="16" rx="2" /></svg>
  ];
  return svgs[index % svgs.length];
};

function DynamicHeroWithAddons({ data }: { data: any }) {
  const heroRef = useRef<HTMLElement>(null);

  const { title, subtitle, price, originalPrice, addons, theme } = data;

  return (
    <section
      ref={heroRef}
      className={`relative flex flex-col items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#6d28d9] to-[#2e1065] text-white px-4 sm:px-6 pt-[100px] pb-[56px]`}
    >
      {/* Glow Orbs */}
      <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${theme?.orb1 || "bg-purple-500/20"} blur-3xl rounded-full pointer-events-none`} />
      <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${theme?.orb2 || "bg-violet-500/20"} blur-3xl rounded-full pointer-events-none`} />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
        {/* Floating Icon */}
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <div className={`p-4 rounded-2xl bg-gradient-to-br ${theme?.iconBg || "from-purple-500 to-violet-500"} shadow-lg inline-flex`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} className="w-12 h-12 sm:w-14 sm:h-14">
              <path d="M5 3h14l3 6-10 12L2 9l3-6z" />
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
            {title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mb-2">
            {subtitle}
          </p>

          <p className={`text-sm mb-8 ${theme?.badgeText || "text-violet-300"}`}>
            {data.badgeText}
          </p>

          {/* PRICE */}
          <div className="flex items-center justify-center gap-3 mb-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">
              @ Rs. {price?.toLocaleString("en-IN")} <sup className="text-lg font-semibold">*</sup>
            </p>
            {originalPrice > 0 && (
              <p className="text-lg sm:text-xl font-semibold text-slate-400 line-through">
                ₹{originalPrice?.toLocaleString("en-IN")}
              </p>
            )}
          </div>

          <p className="text-slate-400 text-xs sm:text-sm mb-8 tracking-wide">
            *Facilitation Fees. Government Charges Extra.
          </p>

          {/* ADDONS BOX */}
          {addons && addons.length > 0 && (
            <div className="w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_60px_rgba(139,92,246,0.15)]">
              <div className="bg-white/10 py-2.5 px-4 border-b border-white/20">
                <p className="text-white font-semibold text-sm sm:text-base">
                  Also Get Absolutely Free
                </p>
              </div>

              <div className="py-8 px-4 sm:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-start justify-items-center">
                  {addons.map((label: string, i: number) => (
                    <div key={i} className="flex flex-col items-center gap-3 w-full">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 text-slate-800 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl">
                        <AddonIconMapper index={i} />
                      </div>
                      <p className="text-white text-xs sm:text-sm whitespace-pre-line leading-snug text-center">
                        {label.replace("\\n", "\n")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <p className="mt-4 text-slate-500 text-xs italic">
            *Final pricing depends on transaction complexity and property value.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default async function DynamicServicePage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const fullSlug = slug.join("/");
  
  // Cast JSON data
  const servicesDB: Record<string, any> = servicesDataRaw;
  const pageData = servicesDB[fullSlug];

  if (!pageData) {
    return notFound();
  }

  return (
    <>
      <DynamicHeroWithAddons data={pageData} />
      <ServicePageLayout
        hideHero={true}
        title={pageData.title}
        subtitle={pageData.subtitle}
        badgeText={pageData.badgeText}
        icon={pageData.icon}
        serviceID={pageData.serviceID}
        contentTitle={pageData.contentTitle}
        contentDescription={pageData.contentDescription}
        section1Title={pageData.section1Title}
        benefits={pageData.benefits as BenefitItem[]}
        sections={pageData.sections as SectionBlock[]}
        faqs={pageData.faqs as FAQItem[]}
        theme={pageData.theme}
        primaryColor={pageData.primaryColor}
        primaryBg={pageData.primaryBg}
        primaryHoverBg={pageData.primaryHoverBg}
      />
    </>
  );
}
