import { getServiceBySlug } from "@/lib/apis/services";
import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";


export default async function DocumentationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pageData = (await getServiceBySlug(slug));

  return <DynamicServicePageTemplate pageData={pageData} />;
}
