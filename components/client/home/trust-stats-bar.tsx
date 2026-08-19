"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import { Users, Star, ShieldCheck, Award } from "lucide-react";

function AnimatedNumber({ value, suffix = "", isDecimal = false }: { value: number, suffix?: string, isDecimal?: boolean }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    let start = 0;
    if (isInView) {
      const duration = 1500;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          start = value;
          clearInterval(timer);
        }
        setCount(isDecimal ? Math.round(start * 10) / 10 : Math.floor(start));
      }, 16);
      return () => clearInterval(timer);
    } else {
      setCount(0);
    }
  }, [value, isInView, isDecimal]);

  return <span ref={ref}>{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}</span>;
}

/* ── Stats Data with Lucide Icons ── */
const stats = [
  {
    icon: Users,
    iconBg: "bg-emerald-50 text-emerald-600",
    iconBorder: "border-emerald-100/50",
    value: 1000,
    suffix: "+",
    label: "Happy Customers",
    isDecimal: false,
  },
  {
    icon: Star,
    iconBg: "bg-amber-50 text-amber-500",
    iconBorder: "border-amber-100/50",
    value: 4.7,
    suffix: "",
    label: "Rating",
    sublabel: "From Google",
    isDecimal: true,
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-blue-50 text-blue-600",
    iconBorder: "border-blue-100/50",
    value: 0,
    suffix: "",
    label: "ISO Certified",
    isDecimal: false,
    isText: true,
  },
  {
    icon: Award,
    iconBg: "bg-violet-50 text-violet-600",
    iconBorder: "border-violet-100/50",
    value: 7,
    suffix: "+",
    label: "Years",
    sublabel: "of Trust & Excellence",
    isDecimal: false,
  },
];

/* ── Associated partner/certifications ── */
const partners = [
  {
    name: "Startup India",
    render: () => (
      <div className="flex items-center gap-1 bg-gradient-to-r from-emerald-50 to-orange-50/50 border border-emerald-100/45 rounded-full px-3.5 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-emerald-200 transition-colors">
        <span className="font-extrabold text-[11px] uppercase tracking-wider text-emerald-600">Startup</span>
        <span className="font-extrabold text-[11px] uppercase tracking-wider text-orange-500">India</span>
      </div>
    )
  },
  {
    name: "DPIIT",
    render: () => (
      <div className="bg-slate-50 border border-slate-200/55 rounded-full px-3.5 py-1.5 text-slate-700 font-extrabold text-[10px] uppercase tracking-wider shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-slate-350 transition-colors">
        DPIIT Recognized
      </div>
    )
  },
  {
    name: "MSME",
    render: () => (
      <div className="bg-amber-50/80 border border-amber-200/45 rounded-full px-3.5 py-1.5 text-amber-700 font-extrabold text-[10px] uppercase tracking-wider shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-amber-350 transition-colors">
        MSME Registered
      </div>
    )
  },
  {
    name: "ISO",
    render: () => (
      <div className="bg-blue-50/80 border border-blue-200/45 rounded-full px-3.5 py-1.5 text-blue-700 font-extrabold text-[10px] uppercase tracking-wider shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-blue-350 transition-colors">
        ISO 9001:2015
      </div>
    )
  },
  {
    name: "Make in India",
    render: () => (
      <div className="bg-slate-900 border border-slate-800 text-white font-extrabold text-[9px] uppercase tracking-[0.08em] rounded-full px-4 py-1.5 shadow-sm hover:bg-black transition-colors shrink-0">
        🇮🇳 Make In India
      </div>
    )
  }
];

export function TrustStatsBar() {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="max-w-[1180px] mx-auto w-full px-4 sm:px-6 space-y-5">

        {/* ── Stats Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.02)] py-5 px-5 flex items-center gap-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.iconBg} border ${stat.iconBorder} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <span className={`font-black text-slate-900 leading-none tracking-tight transition-colors group-hover:text-black ${stat.isText ? "text-[16px] sm:text-[18px] lg:text-[20px]" : "text-[22px] lg:text-[25px]"}`}>
                    {stat.isText ? (
                      stat.label
                    ) : (
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} />
                    )}
                  </span>
                  {!stat.isText && (
                    <span className="text-[11px] text-slate-400 font-semibold leading-tight mt-1.5">
                      {stat.sublabel || stat.label}
                    </span>
                  )}
                  {stat.isText && (
                    <span className="text-[11px] text-slate-400 font-semibold leading-tight mt-1.5">Certified Platform</span>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* ── Associated With / Partner Logos ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-slate-100 rounded-2xl shadow-[0_2px_16px_rgba(0,0,0,0.015)] py-4 px-5 lg:px-6 bg-slate-50/30"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] shrink-0">
              We Are Associated With
            </span>
            <div className="hidden md:block h-6 w-px bg-slate-200 shrink-0" />
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center md:justify-between flex-1 w-full">
              {partners.map((p) => (
                <div key={p.name} className="shrink-0">
                  {p.render()}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
