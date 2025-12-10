import { EmergencyButton } from "@/components/client/home/emergency-button";
import { FAQSection } from "@/components/client/home/faq-section";
import { HeroSection } from "@/components/client/home/hero-section";
import PopularServicesSection from "@/components/client/home/popular-services-section";
import { RealLifeQuestionsSection } from "@/components/client/home/RealLifeQuestionsSection";
import ServicesSection from "@/components/client/home/services-section";
import { StatsSection } from "@/components/client/home/stats-section";
import { TestimonialsSection } from "@/components/client/home/testimonials-section";
import { WhatsAppButton } from "@/components/client/home/whatsapp-button";

export default function Home() {
  return (
<main className="min-h-screen lg:min-h-screen h-auto">
      <HeroSection />
      <StatsSection />
      {/* <TrustSection /> */}
      <RealLifeQuestionsSection />
      <ServicesSection />
      <PopularServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <EmergencyButton />
      <WhatsAppButton />
    </main>
  );
}
