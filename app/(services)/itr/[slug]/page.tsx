import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import { getServiceBySlug } from "@/lib/apis/services";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const pageData = await getServiceBySlug(slug);

  if (!pageData) {
    notFound();
  }

  return <DynamicServicePageTemplate pageData={pageData} />;
}

