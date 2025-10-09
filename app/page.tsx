import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { TrustSection } from "@/components/trust-section";
import { ServicesSection } from "@/components/services-section";
import { PracticeAreasSection } from "@/components/practice-areas-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { RealLifeQuestionsSection } from "@/components/RealLifeQuestionsSection";

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
      <PracticeAreasSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
