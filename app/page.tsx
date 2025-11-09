import { Header } from "@/components/header";
import { HeroSection } from "@/components/home/hero-section";
import { StatsSection } from "@/components/home/stats-section";
import { TrustSection } from "@/components/home/trust-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { FAQSection } from "@/components/home/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/home/whatsapp-button";
import { RealLifeQuestionsSection } from "@/components/home/RealLifeQuestionsSection";
import ServicesSection from "@/components/home/services-section";
import { EmergencyButton } from "@/components/home/emergency-button";
import PopularServicesSection from "@/components/home/popular-services-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StatsSection />
      <TrustSection />
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
