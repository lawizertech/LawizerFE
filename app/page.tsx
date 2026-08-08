import { EmergencyButton } from "@/components/client/home/emergency-button";
import { FAQSection } from "@/components/client/home/faq-section";
import { HeroSection } from "@/components/client/home/hero-section";
import { TrustStatsBar } from "@/components/client/home/trust-stats-bar";
import { CommentsSection } from "@/components/client/home/comments-section";
import PopularServicesSection from "@/components/client/home/popular-services-section";
import ServicesSection from "@/components/client/home/services-section";
import { TestimonialsSection } from "@/components/client/home/testimonials-section";
import { WhatsAppButton } from "@/components/client/home/whatsapp-button";
import { WhyLawizerSection } from "@/components/client/home/why-lawizer-section";
import { CTABannerSection } from "@/components/client/home/cta-banner-section";
import { TalkToFounderSection } from "@/components/client/home/talk-to-founder-section";

export default function Home() {
  return (
    <main className="min-h-screen h-auto pt-2 pb-8 lg:pb-24 bg-white">
      <HeroSection />
      <CommentsSection />
      <TrustStatsBar />
      <ServicesSection />
      <TalkToFounderSection />
      <PopularServicesSection />
      <TestimonialsSection />
      <WhyLawizerSection />
      <CTABannerSection />
      <FAQSection />

      {/* Global floating buttons (made smaller on mobile via CSS) */}
      <EmergencyButton />
      <WhatsAppButton />
    </main>
  );
}
