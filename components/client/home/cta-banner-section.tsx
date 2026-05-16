"use client";

import Link from "next/link";

export function CTABannerSection() {
  return (
    <div className="cta-banner">
      <div className="cta-text">
        <div className="t">Ready to Register Your Business?</div>
        <div className="s">Join 2,000+ founders who started their journey with Lawizer.</div>
      </div>
      <Link href="/#popular-services" className="btn-cta-white">Get Started Now</Link>
    </div>
  );
}
