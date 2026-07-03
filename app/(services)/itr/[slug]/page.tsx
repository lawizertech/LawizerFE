import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import { servicesData } from "@/lib/data/services/itr";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  
  const servicesDB = servicesData;
  const pageData = servicesDB[slug];
  
  return <DynamicServicePageTemplate pageData={pageData} />;
}
