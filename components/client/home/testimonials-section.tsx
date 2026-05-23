"use client";

export function TestimonialsSection() {
  return (
    <section className="testimonials-section w-full px-4 md:px-12 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto" id="testimonials">
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-900" style={{ 
          fontFamily: "var(--font-head)",
          lineHeight: 1.1,
          textTransform: "lowercase" 
        }}>
          what <span style={{ color: "var(--brand)" }}>clients</span> say
        </h2>

        {/* Aggregate Google Rating Display */}
        <div className="flex justify-center mt-4 mb-8">
          <div className="google-rating flex flex-wrap items-center justify-center p-4 sm:p-5 gap-4">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="font-bold text-base text-gray-900">Google Reviews</span>
            </div>
            <div className="divider-v hidden sm:block"></div>
            <div className="flex gap-1">
              <span className="star text-xl">★</span>
              <span className="star text-xl">★</span>
              <span className="star text-xl">★</span>
              <span className="star text-xl">★</span>
              <span className="star text-xl">★</span>
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold text-gray-900" style={{ fontFamily: "'Syne',sans-serif" }}>4.9</span>
              <span className="text-xs sm:text-sm text-gray-500 ml-2">based on 120+ reviews</span>
            </div>
          </div>
        </div>

        <div className="testi-grid grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="testi-card p-6 sm:p-8">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text text-sm sm:text-base">"Lawizer made incorporating our company incredibly smooth. From DSC to COI in under 10 days. The WhatsApp support was excellent — always available."</p>
            <div className="testi-author">
              <div className="testi-avatar av-blue">RA</div>
              <div>
                <div className="testi-name text-sm sm:text-base font-semibold">Rohan Agarwal</div>
                <div className="testi-role text-xs sm:text-sm">Founder, TechNova Solutions, Kolkata</div>
              </div>
            </div>
            <div className="google-badge">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span>Posted on Google</span>
            </div>
          </div>

          <div className="testi-card p-6 sm:p-8">
            <div className="testi-stars">★★★★★</div>
            <p className="testi-text text-sm sm:text-base">"Got our GST and MSME done simultaneously. Price was exactly what was quoted — no hidden charges. Very professional team. Highly recommended for new founders!"</p>
            <div className="testi-author">
              <div className="testi-avatar av-green">PD</div>
              <div>
                <div className="testi-name text-sm sm:text-base font-semibold">Priya Dey</div>
                <div className="testi-role text-xs sm:text-sm">Co-founder, GreenRoot Organics, WB</div>
              </div>
            </div>
            <div className="google-badge">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              <span>Posted on Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
