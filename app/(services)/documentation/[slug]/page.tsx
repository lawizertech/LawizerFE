import { notFound } from "next/navigation";
import documentationData from "../data/documentation.json";
import HeroWithAddons from "./clientDocumentationHero";
import ServicePageLayout, {
  BenefitItem,
  SectionBlock,
  FAQItem,
  IconName
} from "@/components/client/ServicePageLayout";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocumentationPage({ params }: PageProps) {
  const { slug } = await params;

  const service = documentationData.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const priceNum = Number(service.hero.price?.replace(/[^0-9]/g, '')) || 999;

  return (
    <>
      <HeroWithAddons service={service} />

      <ServicePageLayout
        title={service.title}
        subtitle={service.hero.subtitle}
        badgeText={service.hero.badge}
        icon={service.layout.icon as IconName}
        serviceID={service.layout.serviceID}
        contentTitle={service.layout.contentTitle}
        contentDescription={service.layout.contentDescription}
        section1Title={service.layout.section1Title}
        benefits={service.benefits as BenefitItem[]}
        sections={service.sections as SectionBlock[]}
        faqs={service.faqs as FAQItem[]}
        hideHero
        theme={{
          orb1: service.theme.orb1,
          orb2: service.theme.orb2,
          iconBg: service.theme.iconBg,
          badgeText: service.theme.badgeText,
        }}
        primaryColor={service.theme.primaryColor}
        primaryBg={service.theme.primaryBg}
        primaryHoverBg={service.theme.primaryHoverBg}
        price={priceNum}
      />
    </>
  );
}
