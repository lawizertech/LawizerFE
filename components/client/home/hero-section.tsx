"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Headphones, ShieldCheck, Clock } from "lucide-react";

/* ── Service category list (2-column, like OnlineLegalIndia) ── */
const serviceCategories = [
  { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", initials: "CR", title: "Company Registration" },
  { href: "/startup-businesslegal/managebusiness/RocReturnFilingPvtLtdPage", initials: "BC", title: "Business Compliance" },
  { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", initials: "TM", title: "Trademark" },
  { href: "/contact", initials: "CD", title: "Consumer Disputes" },
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
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 gap-8 lg:gap-12 lg:items-start pt-4 pb-2">


        {/* ── LEFT: Hero Copy + Social Proof ── */}
        <div className="w-full lg:w-[45%] lg:-ml-6 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-max bg-brand-red text-white px-4 py-1.5 rounded-full text-md font-bold mb-5 flex items-center gap-2"
          >
            <span className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
            India’s Most Trusted
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-gray-900 leading-[1.15] mb-6"
          >
            <span className="text-brand-red font-black lg:text-4xl inline-block mb-1">All-in-One-Platform</span><br/>
            for
Business Registration,
Compliance & Taxation 
          </motion.h1>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8"
          >
            <a
              href="tel:+919062815535"
              className="bg-brand-red text-white w-full sm:w-[170px] py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-700 transition shadow-md hover:shadow-lg"
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
              className="border-2 border-green-500 text-green-500 w-full sm:w-[170px] py-[10px] rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-green-500 transition-all hover:text-white ease-in-out bg-white duration-500"
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

          {/* Social Proof & Metrics - Sharp, Professional Grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 mt-4 max-w-[500px]"
          >
            {/* Metric 1 */}
            <div className="bg-gradient-to-br from-white via-red-50/30 to-rose-50/20 border border-slate-200 rounded-md p-4 flex flex-col gap-1 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 group-hover:bg-brand-red transition-colors" />
              <div className="text-2xl font-black text-gray-900 tracking-tight ml-2">500+</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-2">Businesses Served</div>
            </div>

            {/* Metric 2 */}
            <div className="bg-gradient-to-br from-white via-red-50/30 to-rose-50/20 border border-slate-200 rounded-md p-4 flex flex-col justify-center gap-1 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 group-hover:bg-brand-red transition-colors" />
              <div className="flex items-center gap-2 ml-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-xl font-black text-gray-900 tracking-tight">4.7</span>
                <span className="text-yellow-400 text-sm tracking-wider">★★★★★</span>
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-2 mt-1">Google Reviews Rating</div>
            </div>

            {/* Metric 3 */}
            <div className="bg-gradient-to-br from-white via-red-50/30 to-rose-50/20 border border-slate-200 rounded-md p-4 flex flex-col justify-center gap-1 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 group-hover:bg-brand-red transition-colors" />
              <div className="text-[14px] font-black text-gray-900 leading-snug ml-2">Recognised as India's Leading Legal Tech Platform</div>
            </div>

            {/* Metric 4 */}
            <div className="bg-gradient-to-br from-white via-red-50/30 to-rose-50/20 border border-slate-200 rounded-md p-4 flex flex-col justify-center gap-1 shadow-sm relative overflow-hidden group hover:border-slate-300 transition-colors">
              <div className="absolute left-0 top-0 w-1 h-full bg-slate-100 group-hover:bg-brand-red transition-colors" />
              <div className="text-[16px] font-black text-gray-900 leading-tight ml-2">7 Day Delivery</div>
              <div className="text-[12px] font-semibold text-slate-500 ml-2">Guaranteed fast processing</div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Featured Services Focus ── */}
        <div className="hidden lg:flex w-full lg:w-[55%] mt-12 lg:mt-0 lg:pl-10 relative flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full h-full bg-gradient-to-br from-white/95 via-red-50/40 to-rose-50/20 backdrop-blur-2xl border border-white/60 rounded-3xl p-6 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center"
          >
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 relative z-10">
              {serviceCategories.slice(0, 8).map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group relative flex items-center justify-between gap-4 px-5 lg:px-6 py-5 lg:py-6 bg-white/90 border border-slate-200 hover:border-red-100 rounded-2xl hover:shadow-[0_12px_40px_rgba(220,38,38,0.06)] hover:-translate-y-1 transition-all duration-400 h-full overflow-hidden"
                >
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50/10 to-red-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="text-base font-bold text-slate-700 group-hover:text-brand-red flex-1 leading-snug transition-colors relative z-10">
                    {s.title}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-red transition-colors relative z-10 shrink-0 shadow-sm border border-slate-100 group-hover:border-brand-red">
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── FULL-WIDTH TRUST PILLARS ── */}
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-gradient-to-r from-white via-red-50/30 to-rose-50/20 rounded-xl py-1 border border-red-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] px-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-1 md:divide-x divide-red-50/50">
           {/* Item 1 */}
           <div className="flex flex-col px-4 sm:px-8 py-3 sm:py-4 justify-center items-center text-center group cursor-default transition-all duration-300 hover:bg-cyan-100/80 rounded-xl">
             <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight transition-colors group-hover:text-black">24/7 Support</h4>
             <p className="text-slate-400 text-[11px] mt-1 font-semibold transition-colors group-hover:text-slate-500">100% Online & Secure</p>
           </div>
           {/* Item 2 */}
           <div className="flex flex-col px-4 sm:px-8 py-3 sm:py-4 justify-center items-center text-center group cursor-default transition-all duration-300 hover:bg-emerald-100/80 rounded-xl">
             <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight transition-colors group-hover:text-black">Transparent Process</h4>
             <p className="text-slate-400 text-[11px] mt-1 font-semibold transition-colors group-hover:text-slate-500">100% Online & Secure</p>
           </div>
           {/* Item 3 */}
           <div className="flex flex-col px-4 sm:px-8 py-3 sm:py-4 justify-center items-center text-center group cursor-default transition-all duration-300 hover:bg-purple-100/80 rounded-xl">
             <h4 className="font-extrabold text-slate-800 text-[14px] leading-tight transition-colors group-hover:text-black">Timely Compliance</h4>
             <p className="text-slate-400 text-[11px] mt-1 font-semibold transition-colors group-hover:text-slate-500">On-time Filing & Support</p>
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