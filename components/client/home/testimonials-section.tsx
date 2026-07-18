"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const GOOGLE_ICON = (
  <svg viewBox="0 0 24 24" width="15" height="15" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const AVATAR_COLORS = [
  "av-blue",
  "av-green",
  "av-orange",
  "av-blue",
  "av-green",
  "av-orange",
  "av-blue",
  "av-green",
  "av-orange",
  "av-blue",
  "av-green",
  "av-orange",
];

const testimonials = [
  {
    text: "Lawizer made incorporating our company incredibly smooth. From DSC to COI in under 10 days. The WhatsApp support was excellent — always available.",
    name: "Rohan Agarwal",
    role: "Founder, TechNova Solutions, Kolkata",
    initials: "RA",
  },
  {
    text: "Got our GST and MSME done simultaneously. Price was exactly what was quoted — no hidden charges. Very professional team. Highly recommended for new founders!",
    name: "Priya Dey",
    role: "Co-founder, GreenRoot Organics, WB",
    initials: "PD",
  },
  {
    text: "I received a hefty traffic challan for a violation I didn't commit. Lawizer's team handled the dispute process entirely online. Stress-free, and I didn't have to leave my office. I really appreciate how transparent and quick their communication is.",
    name: "Sarah John",
    role: "Kochi",
    initials: "SJ",
  },
  {
    text: "As a new founder, I was overwhelmed by vendor contracts and compliance. Lawizer was a game-changer. Their corporate team reviewed my documents within 24 hours and saved me from a risky clause. Highly recommended for startups looking for affordable legal safety.",
    name: "Vikram Sethi",
    role: "Founder, VS Logistics, Chennai",
    initials: "VS",
  },
  {
    text: "Going through a divorce is mentally draining. Lawizer's First Free Consultation was actually helpful, not just a sales pitch. The lawyer was empathetic and gave me a clear roadmap. Thank you for making legal help accessible to common people.",
    name: "Meera Patel",
    role: "Ahmedabad",
    initials: "MP",
  },
  {
    text: "An e-commerce giant refused to refund my money for a defective laptop. Lawizer helped me draft and send a strong legal notice. The very next week, the company processed my refund! The process was seamless and the team kept me updated at every step.",
    name: "David D'Souza",
    role: "Goa",
    initials: "DD",
  },
  {
    text: "I was travelling late at night and the cab driver started acting weird. I pressed the Emergency SOS button on Lawizer. Immediately, a legal expert came on the line and spoke to the driver sternly. Instant relief mil gaya. Their Women Help feature is a genuine lifesaver for working women like me.",
    name: "Priya Desai",
    role: "Mumbai",
    initials: "PD",
  },
  {
    text: "My tenant refused to pay rent for months. Lawizer se legal notice bheja, and honestly, magic ho gaya — the tenant vacated within a week! The team is very professional and kept me updated on WhatsApp throughout. Ghar baithe kaam ho gaya without any court hassle.",
    name: "Rajesh Kumar",
    role: "Noida",
    initials: "RK",
  },
  {
    text: "A client gave me a cheque that bounced and stopped picking calls. Paise phans gaye the. Lawizer helped me file a case quickly, and the client settled the amount out of court. Their dashboard is great — everything is transparent. A must for small business owners.",
    name: "Amit Bansal",
    role: "Proprietor, AB Textiles, Surat",
    initials: "AB",
  },
  {
    text: "My company fired me without notice pay. I tried the First Free Consultation on Lawizer. The lawyer told me exactly which laws protect me. Bahut confidence mila. I sent a mail based on their advice, and HR cleared my dues immediately. Really grateful.",
    name: "Karthik Nair",
    role: "Bangalore",
    initials: "KN",
  },
  {
    text: "I was on a road trip when cops stopped me and asked for a bribe. I pressed the Emergency SOS on Lawizer. A lawyer spoke to them on speaker and clarified the rules. The police let me go immediately. Bilkul filmy scene tha, but it worked! Best feature ever.",
    name: "Rohan Mehra",
    role: "Indore",
    initials: "RM",
  },
  {
    text: "I lost money in a UPI scam and didn't know how to approach cyber cell. Lawizer guided me step-by-step on how to file a complaint. Their response time is amazing, bilkul time waste nahi karte. They helped me draft the complaint properly. Super reliable!",
    name: "Ananya Roy",
    role: "Kolkata",
    initials: "AR",
  },
];

function TestiCard({ t, colorClass }: { t: (typeof testimonials)[0]; colorClass: string }) {
  return (
    <div className="testi-card p-6 min-w-[280px] max-w-[340px] flex-[0_0_300px] flex flex-col gap-0">
      <div className="testi-stars mb-3">★★★★★</div>
      <p className="testi-text text-[13px] leading-7 mb-4 flex-1">"{t.text}"</p>
      <div className="testi-author mb-3">
        <div className={`testi-avatar ${colorClass} text-xs w-9 h-9`}>{t.initials}</div>
        <div>
          <div className="testi-name text-[13px]">{t.name}</div>
          <div className="testi-role text-[11px]">{t.role}</div>
        </div>
      </div>
      <div className="google-badge">
        {GOOGLE_ICON}
        <span>Posted on Google</span>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Infinite marquee animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 0.5; // px per frame

    const animate = () => {
      if (!isPaused && track) {
        posRef.current += speed;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused]);

  // Duplicate cards for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="testimonials-section py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2
            style={{
              fontFamily: "var(--)",
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 800,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              textTransform: "lowercase",
              marginBottom: 20,
            }}
          >
            what <span className="text-brand-red">clients</span> say
          </h2>

          {/* Aggregate rating */}
          <div className="flex justify-center">
            <div className="google-rating inline-flex flex-wrap items-center justify-center gap-4 py-3.5 px-6">
              <div className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-bold text-[15px] text-gray-900">Google Reviews</span>
              </div>
              <div className="divider-v" />
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star text-lg">
                    ★
                  </span>
                ))}
              </div>
              <div>
                <span className="font-[family-name:var(--)] text-[22px] font-extrabold text-gray-900">4.5</span>
                <span className="text-xs text-gray-500 ml-2">based on 2,000+ reviews</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee strip — full bleed */}
      <div
        className="relative overflow-hidden cursor-grab"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] bg-gradient-to-r from-[var(--bg)] to-transparent z-[2] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] bg-gradient-to-l from-[var(--bg)] to-transparent z-[2] pointer-events-none" />

        <div ref={trackRef} className="flex gap-4 px-6 will-change-transform">
          {doubled.map((t, i) => (
            <TestiCard key={i} t={t} colorClass={AVATAR_COLORS[i % AVATAR_COLORS.length]} />
          ))}
        </div>
      </div>
    </section>
  );
}
