"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  function AnimatedNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
    const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    useEffect(() => {
      let start = 0;
      if (isInView) {
        const stats = [
          {
            number: 500,
            suffix: "+",
            label: "Businesses Registered",
          },
          {
            number: 20,
            suffix: "",
            label: "Happy Reviews",
          },
          {
            number: 4.5,
            suffix: "/5",
            label: "Google Rating",
          },
        ];
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

    const formatDisplay = (val: number) => {
      if (suffix.includes("K")) {
        return (val / 1000).toFixed(0);
      }
      return val.toLocaleString();
    };

    return (
      <span ref={ref}>
        {value.includes("₹") ? "₹" : ""}
        {formatDisplay(count)}
        {suffix || (value.includes("+") ? "+" : value.includes("★") ? "★" : "")}
      </span>
    );
  }

  return (
    <div className="hero-wrap flex flex-col lg:flex-row max-w-7xl mx-auto px-4 md:px-12 gap-8 lg:gap-16 py-8 md:py-16" id="home">
      {/* LEFT: Hero Copy */}
      <div className="hero-left w-full lg:w-3/5">
        <div className="hero-badge">
          <span className="dot"></span>
          Trusted by 10,000+ Businesses Across India
        </div>

        <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6 break-words">
          Get Your Business<br />
          <span className="highlight">Registered</span> with<br />
          Lawizer
        </h1>

        <p className="hero-sub text-base sm:text-lg text-gray-600 mb-8 max-w-xl">
          From Private Limited Company to GST and Trademark — Lawizer handles everything so you can focus on building your startup. Fast, affordable, fully online.
        </p>

        <div className="hero-actions flex flex-col gap-3 w-full px-4 md:flex-row md:w-auto md:gap-3">
          <a href="#services" className="btn-hero">
            Register Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="https://wa.me/919999999999" className="btn-outline-hero">💬 WhatsApp Us</a>
        </div>

        {/* Google Rating + Trust Stats */}
        <div className="trust-row flex flex-col gap-3 w-full px-4 md:flex-row md:w-auto md:gap-3">
          <div className="google-rating flex items-center gap-3">
            <div className="google-logo">
              {/* Google G SVG */}
              <svg className="google-g" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="g-text">Google</span>
            </div>
            <div className="divider-v"></div>
            <div className="rating-stars">
              <span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span><span className="star">★</span>
            </div>
            <div>
              <div className="rating-score">4.5</div>
              <div className="rating-count">20k+ reviews</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <div className="trust-stat">
              <div className="num"><AnimatedNumber value="10000" suffix="+" /></div>
              <div className="lbl">Businesses<br/>Registered</div>
            </div>
            <div className="trust-stat">
              <div className="num"><AnimatedNumber value="20000" suffix="+" /></div>
              <div className="lbl">Happy<br/>Reviews</div>
            </div>
            <div className="trust-stat">
              <div className="num"><AnimatedNumber value="99" suffix="%" /></div>
              <div className="lbl">Approval<br/>Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Services Quick Panel */}
      <div className="services-panel w-full lg:w-2/5 max-w-md lg:max-w-[420px] max-w-full mx-auto" id="services-panel">
        <div className="panel-title">Popular Services</div>
        <div className="panel-sub">Click any service to get started instantly</div>

        <Link href="https://lawizer.com/startup-businesslegal/startbusiness/PrivateLimitedCompanyPage" className="service-card">
          <div className="service-icon icon-blue">🏢</div>
          <div className="service-info">
            <div className="service-name">Private Limited Company</div>
            <div className="service-desc">Most preferred structure for startups</div>
          </div>
          <div className="service-price">₹1,499</div>
        </Link>

        <Link href="https://lawizer.com/startup-businesslegal/startbusiness/LLPPage" className="service-card">
          <div className="service-icon icon-purple">⚖️</div>
          <div className="service-info">
            <div className="service-name">LLP Registration</div>
            <div className="service-desc">Flexible & tax-friendly structure</div>
          </div>
          <div className="service-price">₹1,499</div>
        </Link>

        <Link href="https://lawizer.com/startup-businesslegal/startbusiness/GSTRegistrationPage" className="service-card">
          <div className="service-icon icon-green">📋</div>
          <div className="service-info">
            <div className="service-name">GST Registration</div>
            <div className="service-desc">GSTIN in 7–10 working days</div>
          </div>
          <div className="service-price">₹999</div>
        </Link>

        <Link href="https://lawizer.com/startup-businesslegal/protectbusiness/TrademarkRegistrationPage" className="service-card">
          <div className="service-icon icon-orange">™️</div>
          <div className="service-info">
            <div className="service-name">Trademark Registration</div>
            <div className="service-desc">Protect your brand identity</div>
          </div>
          <div className="service-price">₹999</div>
        </Link>

        <Link href="https://lawizer.com/startup-businesslegal/growbusiness/MSMEUdhyamRegistrationPage" className="service-card">
          <div className="service-icon icon-green">🏭</div>
          <div className="service-info">
            <div className="service-name">MSME / Udyam Registration</div>
            <div className="service-desc">Registered in ~24 hours</div>
          </div>
          <div className="service-price">₹999</div>
        </Link>

        <div className="flex">
          <Link href="/free-consultation" className="panel-cta flex-1 text-center">
            📞 Talk to an Expert — Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}