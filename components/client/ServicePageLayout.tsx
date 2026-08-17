"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Shield,
  Gavel,
  Users,
  Scale,
  FileText,
  Home,
  Heart,
  Clock,
  TrendingUp,
  Calendar,
  MapPin,
  FileWarning,
  Building2,
  UserMinus,
  Banknote,
  User,
  Copyright,
  RefreshCw,
  PenTool,
  BadgeIndianRupee,
  Briefcase,
  Rocket,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { useRazorpay } from "@/hooks/useRazorpay";
import { getAccessToken } from "@/lib/auth/tokenStore";
import { toast } from "sonner";
import { Loader2, Zap } from "lucide-react";

/* ---------- ICON MAP ---------- */

const ICON_MAP = {
  gavel: Gavel,
  shield: Shield,
  users: Users,
  scale: Scale,
  fileText: FileText,
  home: Home,
  heart: Heart,
  checkCircle: CheckCircle2,
  clock: Clock,
  building: Home,
  factory: Home,
  trendingUp: TrendingUp,
  calendar: Calendar,
  mapPin: MapPin,
  fileWarning: FileWarning,
  building2: Building2,
  userMinus: UserMinus,
  banknote: Banknote,
  user: User,
  copyright: Copyright,
  refresh: RefreshCw,
  penTool: PenTool,
  badgeIndianRupee: BadgeIndianRupee,
  briefcase: Briefcase,
  rocket: Rocket,
} as const;

export type IconName = keyof typeof ICON_MAP;

/* ---------- TYPES ---------- */

export interface BenefitItem {
  icon: IconName;
  text?: string;
  description?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

type AlertType = "info" | "warning" | "success" | "danger";

interface AlertSectionData {
  type: AlertType;
  title: string;
  description?: string;
}

export interface SectionBlock {
  title?: string;
  icon?: IconName;
  type: "list" | "grid" | "alert";
  data: string[] | AlertSectionData;
}

interface ThemeConfig {
  orb1: string;
  orb2: string;
  iconBg: string;
  badgeText: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  badgeText: string;
  icon: IconName;
  contentTitle: string;
  contentDescription?: string;
  section1Title: string;
  benefits: BenefitItem[];
  sections?: SectionBlock[];
  faqs: FAQItem[];
  theme: ThemeConfig;
  primaryColor: string;
  primaryBg: string;
  primaryHoverBg: string;
  serviceID: string;
  hideHero?: boolean; // ← NEW
  price?: number; // ← NEW
}

/* ---------- ALERT ICON ---------- */

function AlertIcon({ type }: { type: AlertType }) {
  const cls = "w-5 h-5 mt-0.5 shrink-0";
  if (type === "info") return <FileText className={`${cls} text-blue-600`} />;
  if (type === "warning") return <Clock className={`${cls} text-yellow-600`} />;
  if (type === "success") return <CheckCircle2 className={`${cls} text-green-600`} />;
  return <FileWarning className={`${cls} text-red-600`} />;
}

/* ---------- COMPONENT ---------- */

export default function ServicePageLayout({
  theme,
  icon,
  title,
  subtitle,
  badgeText,
  contentTitle,
  contentDescription,
  section1Title,
  benefits,
  sections,
  faqs,
  primaryColor,
  primaryBg,
  serviceID,
  hideHero = false,
  price,
}: ServicePageLayoutProps) {
  const [openFaq, setOpenFaq] = useState(0);

  const router = useRouter();
  const { user } = useAuth();
  const { isLoaded: razorpayReady, initializePayment } = useRazorpay();

  const [paymentState, setPaymentState] = useState<"idle" | "creating" | "paying" | "verifying" | "success">("idle");
  const [paymentError, setPaymentError] = useState<string | null>(null);
  
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past the hero (approx 300px)
      setShowStickyCta(window.scrollY > 300);
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-initiate payment after login if pendingAutoBuy matches
  useEffect(() => {
    if (user && typeof window !== "undefined") {
      const pending = sessionStorage.getItem("pendingAutoBuy");
      if (pending === serviceID) {
        sessionStorage.removeItem("pendingAutoBuy");
        handleStartProcess();
      }
    }
  }, [user, serviceID]);

  const handleStartProcess = async () => {
    if (!user) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("pendingAutoBuy", serviceID);
        // Dispatch an event to open the sign in modal (since it's in the layout header usually)
        window.dispatchEvent(new CustomEvent("openSignInModal"));
      }
      return;
    }

    try {
      setPaymentState("creating");
      setPaymentError(null);

      const token = getAccessToken();

      // 1. Initiate process and get Razorpay order
      const orderRes = await fetch("/api/user/start-process", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          serviceCode: serviceID,
          clientDetails: {
            fullName: user.name || "Client",
            email: user.email || "client@lawizer.com",
            phone: (user as any)?.phone || "9999999999",
          },
          urgency: "NORMAL",
        }),
      });

      if (!orderRes.ok) {
        const errData = await orderRes.json().catch(() => ({}));
        throw new Error(errData.message || "Failed to create order");
      }

      const orderData = await orderRes.json();
      if (!orderData.success) {
        throw new Error(orderData.message || "Failed to create order");
      }

      const orderObj = orderData.razorpayOrder || orderData.order;
      const razorpayKey = orderData.keyId || orderObj?.keyId || process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

      if (!orderObj || !orderObj.amount || !orderObj.id) {
        throw new Error("Invalid order data received from payment server");
      }

      // 2. Open Razorpay checkout
      setPaymentState("paying");
      
      await new Promise<void>((resolve, reject) => {
        const options = {
          key: razorpayKey,
          amount: orderObj.amount,
          currency: orderObj.currency || "INR",
          name: "Lawizer",
          description: title,
          order_id: orderObj.id,
          prefill: {
            name: user.name || "",
            email: user.email || "",
            contact: (user as any)?.phone || "",
          },
          theme: { color: "#c92c41" },
          modal: {
            ondismiss: function () {
              setPaymentState("idle");
              reject(new Error("Payment cancelled by user"));
            }
          },
          handler: async function (response: any) {
            try {
              setPaymentState("verifying");
              const verifyRes = await fetch("/api/payments/verify", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                }),
              });

              const verifyData = await verifyRes.json();
              if (!verifyData.success) {
                throw new Error(verifyData.message || "Payment verification failed");
              }

              setPaymentState("success");
              toast.success("Payment successful! Our team will contact you shortly.");
              
              window.dispatchEvent(
                new CustomEvent("triggerConfetti", {
                  detail: { amount: price || 0 },
                })
              );
              
              router.push("/user/dashboard?tab=services");
              resolve();
            } catch (verifyErr: any) {
              setPaymentError(verifyErr.message || "Verification failed");
              setPaymentState("idle");
              reject(verifyErr);
            }
          },
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.on("payment.failed", (response: any) => {
          setPaymentError(response.error.description || "Payment failed");
          setPaymentState("idle");
          reject(new Error(response.error.description));
        });
        rzp.open();
      });

    } catch (err: any) {
      console.error("[ServicePageLayout] Payment error:", err);
      const errorMsg = err.message || "Failed to process payment";
      setPaymentError(errorMsg);
      setPaymentState("idle");
      if (errorMsg !== "Payment cancelled by user") {
        toast.error(errorMsg);
      }
    }
  };

  const HeroIcon = ICON_MAP[icon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50/30 to-slate-100">
      {/* ================= HERO — hidden when hideHero=true ================= */}
      {!hideHero && (
        <section className="relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] flex items-center justify-center bg-slate-900 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[url('/propertylegal.png')] bg-cover bg-center opacity-10" />
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${theme.orb1} blur-3xl rounded-full`} />
          <div className={`absolute bottom-1/4 right-1/4 w-72 h-72 ${theme.orb2} blur-3xl rounded-full`} />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-4xl px-4 py-8 sm:px-6 sm:py-12"
          >
            <div className="flex justify-center mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${theme.iconBg}`}>
                <HeroIcon className="w-14 h-14 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">{title}</h1>
            <p className="text-slate-300 mb-3">{subtitle}</p>
            <p className={`text-sm ${theme.badgeText}`}>{badgeText}</p>
          </motion.div>
        </section>
      )}

      {/* MOBILE STICKY CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] z-50 lg:hidden"
          >
            <button
              onClick={handleStartProcess}
              disabled={paymentState !== "idle" || !razorpayReady}
              className={`w-full ${primaryBg} py-3.5 rounded-xl font-bold text-white shadow-lg hover:opacity-90 disabled:opacity-70 transition-all flex items-center justify-center gap-2`}
            >
              {paymentState === "creating" && <><Loader2 className="w-5 h-5 animate-spin" /> Preparing...</>}
              {paymentState === "paying" && <><Loader2 className="w-5 h-5 animate-spin" /> Awaiting Payment...</>}
              {paymentState === "verifying" && <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>}
              {paymentState === "success" && <><CheckCircle2 className="w-5 h-5" /> Success!</>}
              {paymentState === "idle" && (
                <>Start Process <ArrowRight className="inline w-5 h-5" /></>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN ================= */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 lg:py-16 pb-28 lg:pb-16">
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* CONTENT */}
          <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow border">
            <h2 className="text-2xl font-bold mb-6 flex gap-3">
              <span className="w-1 bg-gradient-to-b from-red-500 to-orange-500 rounded-full" />
              {contentTitle}
            </h2>

            {contentDescription && <p className="text-slate-700 text-sm mb-8 max-w-2xl">{contentDescription}</p>}

            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Shield className={primaryColor} />
              {section1Title}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {benefits.map((b, i) => {
                const Icon = ICON_MAP[b.icon] || ICON_MAP["checkCircle"];
                return (
                  <div
                    key={i}
                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-200"
                  >
                    <Icon className={`${primaryColor} w-10 h-10`} />
                    <p className="text-sm text-slate-800 leading-relaxed">
                      {/* @ts-ignore */}
                      {b.description || b.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {sections?.map((section, idx) => {
              if (section.type === "alert") {
                const alert = section.data as AlertSectionData;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`mb-10 flex gap-4 p-5 rounded-2xl border ${
                      alert.type === "info"
                        ? "bg-blue-50 border-blue-200 text-blue-800"
                        : alert.type === "warning"
                          ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                          : alert.type === "success"
                            ? "bg-green-50 border-green-200 text-green-800"
                            : "bg-red-50 border-red-200 text-red-800"
                    }`}
                  >
                    <AlertIcon type={alert.type} />
                    <div>
                      <p className="font-semibold text-sm">{alert.title}</p>
                      {alert.description && <p className="text-sm mt-1 opacity-90">{alert.description}</p>}
                    </div>
                  </motion.div>
                );
              }

              const SectionIcon = section.icon ? ICON_MAP[section.icon] : null;

              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mb-12"
                >
                  {section.title && (
                    <h3 className="text-xl font-bold mb-5 flex gap-3">
                      {SectionIcon && <SectionIcon className="w-5 h-5 text-green-600" />}
                      {section.title}
                    </h3>
                  )}

                  {section.type === "list" && (
                    <div className="space-y-3">
                      {(section.data as string[]).map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 transition-all duration-300 hover:shadow-lg hover:bg-white"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                          <p className="text-sm text-slate-800 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.type === "grid" && (
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {(section.data as string[]).map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-4 px-4 py-2 bg-blue-50/70 border border-blue-100 rounded-2xl transition-all duration-300 hover:shadow-xl hover:bg-blue-100/70 hover:-translate-y-0.5"
                        >
                          <span className="w-2 h-2 bg-blue-600 rounded-full shrink-0" />
                          <span className="text-sm font-medium text-slate-800">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow">
              <h3 className="text-xl font-bold mb-1">Start Your Legal Process</h3>
              <p className="text-slate-400 text-xs mb-1">Service</p>
              <p className="text-sm font-semibold text-orange-400 mb-6">{title}</p>
              <p className="text-slate-300 text-sm mb-6">
                Expert legal guidance, end-to-end support. Share your details and we&apos;ll get back to you within 24 hours.
              </p>

              <button
                id="start-process-btn"
                onClick={handleStartProcess}
                disabled={paymentState !== "idle" || !razorpayReady}
                className={`w-full ${primaryBg} py-4 rounded-xl font-semibold hover:opacity-90 disabled:opacity-70 transition-opacity flex items-center justify-center gap-2`}
              >
                {paymentState === "creating" && <><Loader2 className="w-5 h-5 animate-spin" /> Preparing...</>}
                {paymentState === "paying" && <><Loader2 className="w-5 h-5 animate-spin" /> Awaiting Payment...</>}
                {paymentState === "verifying" && <><Loader2 className="w-5 h-5 animate-spin" /> Verifying...</>}
                {paymentState === "success" && <><CheckCircle2 className="w-5 h-5" /> Success!</>}
                {paymentState === "idle" && (
                  <>Start Process <ArrowRight className="inline w-5 h-5" /></>
                )}
              </button>

              <p className="text-xs text-slate-400 mt-4 text-center">We&apos;ll get back to you within 24 hours</p>
            </div>
          </aside>
        </div>

        {/* FAQs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/50 border border-slate-100"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6 flex items-center gap-3">
            <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Frequently Asked Questions
          </h3>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border border-slate-200 rounded-lg sm:rounded-xl overflow-hidden hover:border-red-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-gradient-to-r from-slate-50 to-transparent hover:from-red-50"
                >
                  <span className="font-semibold text-sm sm:text-base text-slate-900 pr-4">
                    {/* @ts-ignore */}
                    {f.question || f.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === i ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm text-slate-700">
                    {/* @ts-ignore */}
                    {f.answer || f.a}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

    </div>
  );
}
