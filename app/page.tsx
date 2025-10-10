import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { TrustSection } from "@/components/trust-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { RealLifeQuestionsSection } from "@/components/RealLifeQuestionsSection";
import ServicesSection from "@/components/services-section";
import { EmergencyButton } from "@/components/emergency-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="w-full flex justify-center fixed top-4 z-50">
        <Header />
      </div>
      <HeroSection />
      <StatsSection />
      <TrustSection />
      <RealLifeQuestionsSection />
      <ServicesSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <EmergencyButton />
      <WhatsAppButton />
    </main>
  );
}
