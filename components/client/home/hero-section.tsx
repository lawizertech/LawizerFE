"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, motion } from "framer-motion";
import Link from "next/link";
import { Building2, ShieldCheck, ClipboardList, FileText, Briefcase, BadgeCheck, PhoneCall } from "lucide-react";

export function HeroSection() {
  function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
      let start = 0;
      if (isInView) {
        const duration = 1500;
        const increment = numericValue / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= numericValue) {
            start = numericValue;
            clearInterval(timer);
          }
          setCount(Math.floor(start));
        }, 16);
        return () => clearInterval(timer);
      } else {
        setCount(0);
      }
    }, [numericValue, isInView]);

    return (
      <span ref={ref}>
        {value.includes("₹") ? "₹" : ""}
        {count.toLocaleString()}
        {suffix}
      </span>
    );
  }

  return (
    <div className="hero-wrap" id="home">
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 gap-6 lg:gap-16 lg:items-stretch">

        {/* ── LEFT: Hero Copy ── */}
        <div className="hero-left w-full lg:w-3/5">

          {/* Trust badge */}
          <div className="hero-badge">
            <span className="dot" />
            <span>Trusted by 10,000+ Businesses Across India</span>
          </div>

          {/* Headline */}
          <h1 className="hero-title">
            Get Your Business{" "}
            <span className="highlight">Registered</span>
            <br />with Lawizer
          </h1>

          {/* Subtext */}
          <p className="hero-sub">
            From Private Limited Company to GST and Trademark — Lawizer handles everything so you can focus on building your startup. Fast, affordable, fully online.
          </p>

          {/* CTAs */}
          <div className="hero-actions">
            <a href="#services" className="btn-hero">
              Register Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <motion.a
              href="https://wa.me/919062815535"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-hero"
              whileHover={{ scale: 1.04, boxShadow: "0 6px 20px rgba(37,211,102,0.45)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.017 2.003C6.484 2.003 2 6.487 2 12.02c0 1.897.522 3.68 1.428 5.203L2.05 22l4.906-1.35a9.958 9.958 0 0 0 5.061 1.373c5.533 0 10.017-4.484 10.017-10.017 0-2.675-1.041-5.19-2.933-7.081A9.968 9.968 0 0 0 12.017 2.003zm0 18.033a8.005 8.005 0 0 1-4.079-1.117l-.293-.174-3.011.828.803-2.936-.19-.303a7.99 7.99 0 0 1-1.245-4.316c0-4.418 3.596-8.014 8.017-8.014 2.14 0 4.152.834 5.665 2.349a7.958 7.958 0 0 1 2.35 5.667c0 4.418-3.598 8.014-8.017 8.014z" />
              </svg>
              WhatsApp Us
            </motion.a>
          </div>

          {/* ── Trust strip: single scrollable row on mobile, blocks on desktop ── */}
          <div className="hero-trust-strip">
            {/* Mobile pill row */}
            <div className="trust-pills">
              <span className="trust-pill"><span className="trust-pill-star">★</span> 4.5 · 20k+ reviews</span>
              <span className="trust-pill-sep">·</span>
              <span className="trust-pill">1,000+ Registered</span>
              <span className="trust-pill-sep">·</span>
              <span className="trust-pill">99% Approval</span>
            </div>

            {/* Desktop: full Google rating + stat blocks */}
            <div className="trust-row-full">
              <div className="google-rating">
                <div className="google-logo">
                  <svg className="google-g" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="g-text">Google</span>
                </div>
                <div className="divider-v" />
                <div className="rating-stars">
                  {[1,2,3,4,5].map(i => <span key={i} className="star">★</span>)}
                </div>
                <div>
                  <div className="rating-score">4.5</div>
                  <div className="rating-count">20k+ reviews</div>
                </div>
              </div>

              <div className="trust-stat-row">
                <div className="trust-stat">
                  <div className="num"><AnimatedNumber value="1000" suffix="+" /></div>
                  <div className="lbl">Businesses<br/>Registered</div>
                </div>
                <div className="trust-stat">
                  <div className="num"><AnimatedNumber value="2000" suffix="+" /></div>
                  <div className="lbl">Happy<br/>Reviews</div>
                </div>
                <div className="trust-stat">
                  <div className="num"><AnimatedNumber value="99" suffix="%" /></div>
                  <div className="lbl">Approval<br/>Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Services panel — HIDDEN on mobile ── */}
        <div className="services-panel hidden lg:flex w-full lg:w-2/5 lg:max-w-[420px] mx-auto lg:flex-col lg:h-full" id="services-panel">
          <div className="panel-title">Popular Services</div>
          <div className="panel-sub">Click any service to get started instantly</div>

          <div className="flex flex-col gap-3 lg:flex-1 lg:overflow-y-auto lg:pr-1 lg:min-h-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {[
              { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", icon: <Building2 strokeWidth={1.5} />, cls: "icon-blue",    name: "Company Registration",   desc: "Most preferred structure for startups",             price: "₹999"   },
              { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", icon: <ShieldCheck strokeWidth={1.5} />, cls: "icon-purple", name: "Trademark",              desc: "Protect your brand name & logo",                    price: "₹999"   },
              { href: "/startup-businesslegal/startbusiness/GSTRegistrationPage",         icon: <ClipboardList strokeWidth={1.5} />, cls: "icon-green",  name: "GST Registration",       desc: "GSTIN in 7–10 working days",                        price: "₹999"   },
              { href: "/itr",                                                              icon: <FileText strokeWidth={1.5} />, cls: "icon-teal",   name: "ITR Filing",             desc: "ITR filing & year-round tax advisory",              price: "₹2,499" },
              { href: "/compliance/annual",                                                icon: <Briefcase strokeWidth={1.5} />, cls: "icon-orange", name: "Business Compliance",    desc: "Annual filing calendar for Pvt Ltd, OPC & LLP",     price: "₹999"   },
              { href: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",   icon: <BadgeCheck strokeWidth={1.5} />, cls: "icon-green",  name: "MSME Registration",      desc: "MSME, trade registration & business licences",      price: "₹1,499" },
            ].map(s => (
              <Link key={s.href} href={s.href} className="service-card">
                <div className={`service-icon ${s.cls}`}>{s.icon}</div>
                <div className="service-info">
                  <div className="service-name">{s.name}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
                <div className="service-price">{s.price}</div>
              </Link>
            ))}
          </div>

          <div className="flex mt-3">
            <Link href="/free-consultation" className="panel-cta flex-1 text-center flex items-center justify-center gap-2">
              <PhoneCall size={18} /> Talk to an Expert — Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* ── Mobile-only: horizontal swipeable service chips ── */}
      <div className="mobile-svc-strip lg:hidden overflow-hidden w-full max-w-full">
        <motion.div 
          className="flex gap-[10px] w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Duplicate the array twice for seamless infinite scroll */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-[10px]">
              {[
                { href: "/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage", icon: <Building2 size={24} strokeWidth={1.5} />, name: "Company Reg.", price: "₹999"   },
                { href: "/startup-businesslegal/protectbusiness/TrademarkRegistrationPage", icon: <ShieldCheck size={24} strokeWidth={1.5} />, name: "Trademark",   price: "₹999"   },
                { href: "/startup-businesslegal/startbusiness/GSTRegistrationPage",         icon: <ClipboardList size={24} strokeWidth={1.5} />, name: "GST",         price: "₹999"   },
                { href: "/itr",                                                              icon: <FileText size={24} strokeWidth={1.5} />, name: "ITR Filing",  price: "₹2,499" },
                { href: "/compliance/annual",                                                icon: <Briefcase size={24} strokeWidth={1.5} />, name: "Compliance",  price: "₹999"   },
                { href: "/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage",   icon: <BadgeCheck size={24} strokeWidth={1.5} />, name: "MSME",        price: "₹1,499" },
              ].map(s => (
                <Link key={s.href} href={s.href} className="mobile-svc-chip w-[92px]">
                  <span className="mobile-svc-icon">{s.icon}</span>
                  <span className="mobile-svc-name">{s.name}</span>
                  <span className="mobile-svc-price">{s.price}</span>
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-2 w-full">
          <Link href="/free-consultation" className="mobile-expert-cta w-1/2 !min-h-[48px] !text-[13px] !py-[12px] !px-[8px] text-center justify-center flex items-center gap-1.5">
            <PhoneCall size={16} /> Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}