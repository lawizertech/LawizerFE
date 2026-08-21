"use client";

import { useRef, useState, useEffect } from "react";
import { notFound, useRouter } from "next/navigation";
import ServicePageLayout, { BenefitItem, SectionBlock, FAQItem } from "@/components/client/ServicePageLayout";
import { Shield, FileText, CheckCircle, Scale, Users, Gavel, FileSignature, Home, Clock, Star, Phone, Loader2, Check, ShieldCheck, BadgeCheck, Zap, ArrowLeft } from "lucide-react";
import { useAuth } from "@/context/authContext";
import { useCallback } from "@/context/callbackContext";
import { useRazorpay } from "@/hooks/useRazorpay";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { toast } from "sonner";

// For addons, we use a fixed set of SVGs or map them dynamically
const AddonIconMapper = ({ index }: { index: number }) => {
  const svgs = [
    <svg key={0} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M7 8h10M7 12h6M7 16h8" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>,
    <svg key={1} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>,
    <svg key={2} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M9 12h6M9 16h6M9 8h6" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>,
    <svg key={3} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M8 10h.01M12 10h.01M16 10h.01M9 16h6" />
      <rect x="3" y="4" width="18" height="16" rx="2" />
    </svg>,
  ];
  return svgs[index % svgs.length];
};

import { ServiceData } from "@/types/service";

function DynamicHeroWithAddons({ data }: { data: ServiceData }) {
  const heroRef = useRef<HTMLElement>(null);
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { openCallback } = useCallback();
  const { isLoaded: razorpayReady } = useRazorpay();
  const [paymentState, setPaymentState] = useState<"idle" | "creating" | "paying" | "verifying" | "success">("idle");
  const [paymentError, setPaymentError] = useState("");

  const { title, subtitle, price, originalPrice, addons, theme, icon, serviceID } = data;

  const iconMap: Record<string, any> = { Shield, FileText, CheckCircle, Scale, Users, Gavel, FileSignature, Home, Clock };
  const FloatingIcon = iconMap[icon] || Shield;

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      const pending = sessionStorage.getItem("pendingAutoBuy");
      if (pending === serviceID) {
        sessionStorage.removeItem("pendingAutoBuy");
        handleStartProcess();
      }
    }
  }, [user, serviceID]);

  const handleStartProcess = () => {
    const btn = document.getElementById("start-process-btn");
    if (btn) {
      btn.click();
    } else {
      toast.error("Process handler not found on page.");
    }
  };

  return (
    <>
      <header
        ref={heroRef}
        className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-0 text-white"
        style={{
          background: "linear-gradient(135deg, #090c1a 0%, #121829 25%, #1e1b4b 55%, #2e1065 80%, #3b0764 100%)",
        }}
      >
        {/* Subtle geometric dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Ambient Glowing Orbs */}
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full blur-[140px] opacity-60 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(147, 51, 234, 0.5) 0%, rgba(99, 102, 241, 0.3) 45%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-[600px] h-[600px] rounded-full blur-[130px] opacity-55 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(201, 44, 65, 0.45) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 75%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[450px] h-[450px] rounded-full blur-[160px] opacity-35 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_310px] gap-8 lg:gap-12 pt-8 pb-4">
            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-start">
              <div className="mt-8 inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/20 shadow-sm w-fit">
                <FloatingIcon className="w-4 h-4 text-rose-300" />
                <span className="text-white text-[11px] font-bold tracking-widest uppercase">{data.badgeText || "GOVT-RECOGNIZED · FAST · RELIABLE"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white mb-3.5 leading-[1.12] tracking-tight drop-shadow-sm">
                {title}
              </h1>
              <p className="text-slate-200 text-base sm:text-lg font-normal max-w-xl leading-relaxed mb-8">
                {subtitle}
              </p>

              {/* Addons Grid */}
              {addons && addons.length > 0 && (
                <div className="mt-2">
                  <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-5">What You Will Get</p>
                  <div className="grid grid-cols-2 gap-y-5 gap-x-4 sm:gap-x-6">
                    {addons?.map((label: string, i: number) => (
                      <div key={i} className="flex items-start gap-3.5">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center flex-shrink-0 shadow-md text-white mt-0.5 [&>svg]:w-4.5 [&>svg]:h-4.5 sm:[&>svg]:w-5 sm:[&>svg]:h-5">
                          <AddonIconMapper index={i} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white/95 text-[12px] sm:text-sm font-medium leading-[1.35] sm:leading-tight whitespace-pre-line pr-1">
                            {label.replace("\\n", "\n")}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile-only price + CTA */}
              <div className="flex flex-row items-center justify-between mt-10 lg:hidden bg-white/10 p-6 rounded-2xl border border-white/15 backdrop-blur-md shadow-lg">
                <div className="flex flex-col">
                  {originalPrice && originalPrice > 0 ? (
                    <div className="text-white/55 text-xs line-through mb-0.5">₹{originalPrice.toLocaleString("en-IN")}</div>
                  ) : null}
                  <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none">₹{price?.toLocaleString("en-IN")}</div>
                  <div className="text-white/60 text-[10px] mt-1.5 uppercase tracking-wider font-semibold">All Inclusive</div>
                </div>
                <button
                  onClick={handleStartProcess}
                  disabled={paymentState !== "idle" || !razorpayReady}
                  className="shimmer bg-white text-indigo-950 flex items-center gap-2 justify-center text-sm font-bold px-6 py-3.5 rounded-xl transition-all hover:shadow-xl hover:scale-[1.02] disabled:opacity-70 shadow-lg"
                >
                  {paymentState !== "idle" ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
                  {paymentState === "idle" ? "Buy Now" : null}
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="hidden lg:flex flex-col justify-start pt-6">
              <div
                className="rounded-3xl w-full"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 100%)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(255, 255, 255, 0.24)",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div className="px-6 py-5">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold text-white bg-white/20 border border-white/25 px-2.5 py-1 rounded-lg tracking-wide shadow-sm">
                      {discount > 0 ? `${discount}% OFF` : "PREMIUM"}
                    </span>
                  </div>

                  {originalPrice && originalPrice > 0 ? (
                    <div className="text-white/55 text-sm line-through leading-none mb-1">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </div>
                  ) : null}
                  <div className="text-[2.85rem] font-extrabold text-white leading-none mb-1 tracking-tight drop-shadow-sm">
                    ₹{price.toLocaleString("en-IN")}
                  </div>
                  <div className="text-white/60 text-xs mb-2">All inclusive · No hidden charges</div>

                  <div className="flex items-center gap-1.5 mb-5 mt-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />)}
                    </div>
                    <span className="text-white/85 text-[11px] font-semibold">4.9 / 5</span>
                  </div>

                  <button
                    onClick={handleStartProcess}
                    disabled={paymentState !== "idle" || !razorpayReady}
                    className="shimmer w-full py-3.5 rounded-2xl text-sm font-bold mb-2.5 transition-all hover:shadow-2xl hover:scale-[1.01] bg-white text-indigo-950 flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg"
                  >
                    {paymentState === "creating" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {paymentState === "paying" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {paymentState === "verifying" && <Loader2 className="w-4 h-4 animate-spin" />}
                    {paymentState === "success" && <Check className="w-4 h-4" />}
                    {paymentState === "idle" && "Buy Now"}
                  </button>

                  <button
                    onClick={() => openCallback(title)}
                    className="w-full py-3 rounded-2xl text-sm font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" /> Request a Callback
                  </button>
                  
                  <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-around">
                    {[
                      { icon: ShieldCheck, text: "Secure" },
                      { icon: BadgeCheck, text: "Lawyer-Backed" },
                      { icon: Zap, text: "Fast" },
                    ].map(({ icon: Icon, text }) => (
                      <div key={text} className="flex flex-col items-center gap-1">
                        <Icon className="w-4 h-4 text-white/70" />
                        <span className="text-white/60 text-[10px] font-medium">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Wave Divider */}
        <div className="relative h-16 sm:h-24 overflow-hidden -mb-1 w-full pointer-events-none">
          <svg 
            viewBox="0 0 2880 64" 
            className="animate-wave-1 absolute bottom-0 h-[80%] w-[200%] origin-left"
            preserveAspectRatio="none"
          >
            <path d="M0,32 C360,64 360,0 720,32 C1080,64 1080,0 1440,32 C1800,64 1800,0 2160,32 C2520,64 2520,0 2880,32 L2880,64 L0,64 Z" fill="#f8f9fa" opacity="0.6" />
          </svg>
          <svg 
            viewBox="0 0 2880 64" 
            className="animate-wave-2 absolute bottom-0 h-full w-[200%] origin-left"
            preserveAspectRatio="none"
          >
            <path d="M0,32 C360,64 360,0 720,32 C1080,64 1080,0 1440,32 C1800,64 1800,0 2160,32 C2520,64 2520,0 2880,32 L2880,64 L0,64 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </header>

      {/* Testimonials */}
      <section className="bg-[#f8f9fa] pt-2 pb-12 overflow-hidden relative">
        {/* Subtle polygon/blob shapes for depth */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <svg className="absolute left-0 top-0 h-[150%] w-[600px] text-blue-600/[0.03] transform -translate-x-1/3 -translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,74.2,42.9C64.9,55.2,50.8,64.4,36.2,71.2C21.6,77.9,6.5,82.3,-8.4,81.1C-23.2,79.9,-37.8,73.1,-51.2,63.9C-64.6,54.7,-76.7,43.2,-83.4,29.1C-90.1,15,-91.3,-1.7,-87.3,-16.9C-83.2,-32.1,-73.9,-45.8,-61.6,-54.6C-49.3,-63.4,-34,-67.3,-20.3,-71.4C-6.5,-75.6,5.7,-80,18.4,-81.8C31.1,-83.5,42.5,-82.7,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute right-0 bottom-0 h-[150%] w-[600px] text-indigo-600/[0.03] transform translate-x-1/3 translate-y-1/4" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M47.7,-67.3C62.1,-58.5,74.2,-44.6,81.2,-28.5C88.2,-12.3,90.2,6.1,84.7,21.8C79.2,37.5,66.1,50.6,51.3,60.1C36.5,69.5,20.1,75.3,3.1,70.9C-13.8,66.6,-30.2,52,-43.5,40.1C-56.7,28.2,-66.8,19,-71.4,7.4C-76,-4.2,-75,-18.2,-68.8,-29.9C-62.5,-41.6,-51.1,-50.9,-38.7,-59.5C-26.3,-68,-13.2,-75.8,1.3,-77.6C15.8,-79.4,33.3,-76.1,47.7,-67.3Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="w-full relative z-10">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
          <div className="animate-marquee-slow flex w-max">
            {[
              { text: "Super smooth experience! Uploaded my documents and everything was handled within 2 days.", name: "Rohit Sharma", initials: "RS", role: "IT Professional", rating: 5 },
              { text: "This service made it effortless. Got everything filed quickly and accurately.", name: "Priya Mehta", initials: "PM", role: "Marketing Manager", rating: 5 },
              { text: "Highly professional team. They answered all my queries patiently.", name: "Amit Patel", initials: "AP", role: "Business Owner", rating: 5 },
              { text: "Super smooth experience! Uploaded my documents and everything was handled within 2 days.", name: "Rohit Sharma", initials: "RS", role: "IT Professional", rating: 5 },
              { text: "This service made it effortless. Got everything filed quickly and accurately.", name: "Priya Mehta", initials: "PM", role: "Marketing Manager", rating: 5 },
              { text: "Highly professional team. They answered all my queries patiently.", name: "Amit Patel", initials: "AP", role: "Business Owner", rating: 5 },
            ].map((r, i) => (
              <div key={i} className="w-[300px] sm:w-[350px] mx-3 bg-white border border-gray-100 rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <p className="text-sm text-gray-650 leading-relaxed mb-6 font-medium">&ldquo;{r.text}&rdquo;</p>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white bg-indigo-600">
                    {r.initials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 leading-tight">{r.name}</div>
                    <div className="text-xs text-gray-400 leading-tight">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden -mb-1 pointer-events-none z-0">
          <svg viewBox="0 0 1440 64" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,64 L0,32 Q180,0 360,20 Q540,40 720,16 Q900,0 1080,24 Q1260,44 1440,12 L1440,64 Z" fill="white" />
          </svg>
        </div>
      </section>
    </>
  );
}

export default function DynamicServicePageTemplate({ pageData }: { pageData: ServiceData | null | undefined }) {
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
        icon={pageData.icon as any}
        serviceID={pageData.serviceID}
        contentTitle={pageData.contentTitle}
        contentDescription={pageData.contentDescription}
        section1Title={pageData.section1Title}
        benefits={pageData.benefits as any}
        sections={pageData.sections as any}
        faqs={pageData.faqs as any}
        theme={pageData.theme as any}
        primaryColor={pageData.primaryColor}
        primaryBg={pageData.primaryBg}
        primaryHoverBg={pageData.primaryHoverBg}
        price={pageData.price}
      />
    </>
  );
}
