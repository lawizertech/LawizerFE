"use client";

import Link from "next/link";

export function CTABannerSection() {
  return (
    <div className="cta-banner flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10 md:px-12 md:py-12 text-center md:text-left w-full max-w-7xl mx-auto rounded-3xl mx-auto mb-12 md:mb-16 w-[calc(100%-32px)]">
      <div className="cta-text">
        <div className="t text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
          Ready to Register Your Business?
        </div>
        <div className="s text-sm sm:text-base text-white/80">
          Join 2,000+ founders who started their journey with Lawizer.
        </div>
      </div>
      <Link href="/#home" className="btn-cta-white w-full md:w-auto text-center inline-block relative z-10">
        Get Started Now
      </Link>
    </div>
  );
}
