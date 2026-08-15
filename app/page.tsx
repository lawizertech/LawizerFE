import { EmergencyButton } from "@/components/client/home/emergency-button";
import { FAQSection } from "@/components/client/home/faq-section";
import { HeroSection } from "@/components/client/home/hero-section";
import { CommentsSection } from "@/components/client/home/comments-section";
import PopularServicesSection from "@/components/client/home/popular-services-section";
import ServicesSection from "@/components/client/home/services-section";
import { TrustSection } from "@/components/client/home/trust-section";
import { WhatsAppButton } from "@/components/client/home/whatsapp-button";
import { WhyLawizerSection } from "@/components/client/home/why-lawizer-section";
import { CTABannerSection } from "@/components/client/home/cta-banner-section";
import { TalkToFounderSection } from "@/components/client/home/talk-to-founder-section";
import { LandingBackground } from "@/components/client/home/landing-background";

export default function Home() {
  return (
    <main className="min-h-screen h-auto pt-2 pb-8 lg:pb-24 bg-slate-50 relative overflow-hidden">
      <LandingBackground />

      <div className="relative z-10">
      <HeroSection />
      <CommentsSection />
      <TrustSection />
      <ServicesSection />
      <TalkToFounderSection />
      <PopularServicesSection />
      <WhyLawizerSection />
      <CTABannerSection />
      <FAQSection />

      {/* Global floating buttons (made smaller on mobile via CSS) */}
      <EmergencyButton />
      <WhatsAppButton />
      </div>
    </main>
  );
}
