import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import { servicesData } from "@/lib/data/services/documentation";

export default async function DocumentationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pageData = servicesData[slug];

  return <DynamicServicePageTemplate pageData={pageData} />;
}
