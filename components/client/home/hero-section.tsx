"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, ShieldCheck, Clock } from "lucide-react";

/* ── Service category list (2-column, like OnlineLegalIndia) ── */
const serviceCategories = [
  { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", initials: "CR", title: "Company Registration" },
  { href: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage", initials: "BC", title: "Business Compliance" },
  { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", initials: "TM", title: "Trademark" },
  { href: "/womensafety", initials: "CD", title: "Consumer Disputes" },
  { href: "/startup-businesslegal/growbusiness/ISOCertificationPage", initials: "IC", title: "ISO Certification" },
  { href: "/documentation", initials: "AC", title: "Agreements & Contracts" },
  { href: "/startup-businesslegal/startbusiness/GSTRegistrationPage", initials: "GR", title: "GST Registration" },
  { href: "/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage", initials: "SI", title: "Startup India" },
  { href: "/itr", initials: "TA", title: "Tax & Accounting" },
  { href: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage", initials: "MS", title: "MSME" },
];

/* ── Mobile chips (same as before for marquee) ── */
const mobileServices = [
  { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", icon: "🏢", title: "Private Limited Company" },
  { href: "/startup-businesslegal/startbusiness/LLPRegistrationPage", icon: "📝", title: "LLP Registration" },
  { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", icon: "🛡️", title: "Trademark Registration" },
  { href: "/itr", icon: "🧾", title: "ITR Filing" },
  { href: "/startup-businesslegal/startbusiness/GSTRegistrationPage", icon: "📋", title: "GST Registration" },
  { href: "/startup-businesslegal/startbusiness/StartupIndiaRegistrationPage", icon: "🚀", title: "Startup India" },
  { href: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage", icon: "💼", title: "MSME Registration" },
  { href: "/compliance/annual", icon: "📑", title: "Annual Compliance" },
];

/* ── Floating Card ── */
function FloatingCard({
  children,
  className = "",
  delay = 0,
  y = [0, -8, 0],
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number[];
}) {
  return (
    <motion.div
      className={`bg-white/95 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-2xl px-5 py-4 cursor-pointer select-none transition-shadow ${className}`}
      animate={{ y }}
      whileHover={{
        scale: 1.05,
        rotateX: 12,
        rotateY: -12,
        z: 30,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.02)",
      }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
        default: {
          type: "spring",
          stiffness: 300,
          damping: 20,
        }
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
    >
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <div className="hero-wrap bg-gray-50/30" id="home">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 gap-8 lg:gap-12 lg:items-start pt-8 pb-10">

        {/* ── LEFT: Hero Copy + Service Category List ── */}
        <div className="w-full lg:w-[52%] lg:-ml-6 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-max bg-brand-red text-white px-4 py-1.5 rounded-full text-xs font-bold mb-5 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            Fastest growing legaltech startup in India
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-900 leading-[1.15] mb-2"
          >
            <span className="text-brand-red">All-in-One Platform</span> for{" "}
            <br />
            Business Registration,
            <br />
            Compliance & Taxation 
          </motion.h1>

          {/* ── 2-Column Service Category Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="hidden lg:grid grid-cols-2 gap-x-3 gap-y-2.5 mt-6 mb-6 max-w-[460px]"
          >
            {serviceCategories.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-2 px-3 py-2 bg-white/45 hover:bg-white border border-slate-100/80 hover:border-slate-200/80 rounded-xl hover:shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="text-[13px] font-bold text-slate-700 group-hover:text-slate-900 flex-1 leading-snug transition-colors pl-1">
                  {s.title}
                </span>
                <svg
                  className="w-4 h-4 text-slate-300 group-hover:text-brand-red group-hover:translate-x-0.5 transition-transform duration-300 shrink-0 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-6 mt-4 lg:mt-0"
          >
            <a
              href="tel:+919062815535"
              className="bg-brand-red text-white w-[170px] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-md hover:shadow-lg"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us
            </a>
            <motion.a
              href="https://wa.me/919062815535"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 text-green-500 w-[170px] py-[10px] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-500 transition-all hover:text-white ease-in-out bg-white duration-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
              </svg>
              WhatsApp Us
            </motion.a>
          </motion.div>

        </div>

        {/* ── RIGHT: Abstract Illustration + Floating Cards (desktop) ── */}
        <div className="hidden lg:flex w-full lg:w-[48%] relative min-h-[480px] items-center justify-center">

          {/* Central illustration — Scale of Justice SVG + Branded 3D Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10 flex items-center justify-center w-[220px] h-[220px]"
          >
            {/* Glowing accent background */}
            <div className="absolute w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(201,44,65,0.12)_0%,transparent_70%)] blur-lg animate-pulse" />


            {/* Orbiting Ring Decoration */}
            <div className="absolute w-[240px] h-[240px] rounded-full border border-slate-200/30 pointer-events-none animate-[spin_50s_linear_infinite]" />
            <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-slate-200/20 pointer-events-none animate-[spin_80s_linear_infinite_reverse]" />

            {/* Central Branded 3D Logo Badge */}
            <motion.div
              className="absolute w-24 h-24 bg-white rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-slate-100/80 flex items-center justify-center p-4 cursor-pointer z-20"
              whileHover={{ 
                scale: 1.1,
                rotateY: 15,
                rotateX: -15,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.08)"
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              <img 
                src="/Lawizer_final.png" 
                alt="Lawizer Logo" 
                className="w-full h-full object-contain drop-shadow-[0_4px_6px_rgba(201,44,65,0.08)]"
                style={{ transform: "translateZ(20px)" }}
              />
            </motion.div>
          </motion.div>

          {/* ── Floating Cards ── */}

          {/* Card 1: Google Rating */}
          <FloatingCard className="absolute top-8 right-4 z-20" delay={0} y={[0, -10, 0]}>
            <div className="flex items-center gap-3">
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
                  <span className="text-lg font-black text-gray-900">4.7</span>
                  <span className="text-[11px] text-gray-400 font-bold">On Google</span>
                </div>
                <div className="text-[11px] text-gray-500 font-medium mt-0.5"></div>
              </div>
            </div>
          </FloatingCard>

          {/* Card 2: Award Badge */}
          <FloatingCard className="absolute bottom-16 right-0 z-20 max-w-[220px]" delay={1.5} y={[0, -6, 0]}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <span className="text-xl">🏆</span>
              </div>
              <div>
                <div className="text-[12px] font-bold text-gray-900 leading-snug">Recognised as India&apos;s Leading Legal Tech Platform</div>
              </div>
            </div>
          </FloatingCard>

          {/* Card 3: Stats Card */}
          <FloatingCard className="absolute top-20 left-0 z-20" delay={0.8} y={[0, -7, 0]}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </div>
              <div>
                <div className="text-[18px] font-black text-gray-900 leading-none">1,000+</div>
                <div className="text-[11px] text-gray-500 font-medium mt-1">Businesses Registered</div>
              </div>
            </div>
          </FloatingCard>

          {/* Card 4: Fast Delivery */}
          <FloatingCard className="absolute bottom-4 left-8 z-20" delay={2} y={[0, -5, 0]}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center">
                <span className="text-lg">⚡</span>
              </div>
              <div>
                <div className="text-[13px] font-bold text-gray-900">7 Day Delivery</div>
                <div className="text-[10px] text-gray-500 font-medium">Guaranteed fast processing</div>
              </div>
            </div>
          </FloatingCard>

        </div>
      </div>

      {/* ── FULL-WIDTH TRUST PILLARS ── */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 pb-4">
        <div className="bg-white rounded-xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] py-5 px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 md:divide-x divide-gray-100">
           {/* Item 1 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <div className="w-12 h-12 rounded-xl bg-blue-50/80 flex items-center justify-center text-blue-600 shrink-0 shadow-[0_4px_12px_rgba(59,130,246,0.1)]">
               <Headphones size={22} strokeWidth={2.2} />
             </div>
             <div>
               <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight">24/7 Support</h4>
               <p className="text-slate-400 text-[11px] mt-0.5 font-semibold">100% Online & Secure</p>
             </div>
           </div>
           {/* Item 2 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <div className="w-12 h-12 rounded-xl bg-emerald-50/80 flex items-center justify-center text-emerald-600 shrink-0 shadow-[0_4px_12px_rgba(16,185,129,0.1)]">
               <ShieldCheck size={22} strokeWidth={2.2} />
             </div>
             <div>
               <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight">Transparent Process</h4>
               <p className="text-slate-400 text-[11px] mt-0.5 font-semibold">100% Online & Secure</p>
             </div>
           </div>
           {/* Item 3 */}
           <div className="flex items-center gap-4 px-6 flex-1 justify-center md:justify-start w-full">
             <div className="w-12 h-12 rounded-xl bg-purple-50/80 flex items-center justify-center text-purple-600 shrink-0 shadow-[0_4px_12px_rgba(139,92,246,0.1)]">
               <Clock size={22} strokeWidth={2.2} />
             </div>
             <div>
               <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight">Timely Compliance</h4>
               <p className="text-slate-400 text-[11px] mt-0.5 font-semibold">On-time Filing & Support</p>
             </div>
           </div>
        </div>
      </div>

      {/* ── Mobile-only: horizontal swipeable service chips ── */}
      <div className="lg:hidden overflow-hidden w-full max-w-full pb-6">
        <motion.div
          className="flex gap-[10px] w-max px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-[10px]">
              {mobileServices.map(s => (
                <Link key={s.href} href={s.href} className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 flex flex-col items-center justify-center text-center min-w-[120px] w-[120px] h-[100px] gap-2">
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-[11px] font-bold text-gray-800 leading-tight">{s.title}</span>
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}