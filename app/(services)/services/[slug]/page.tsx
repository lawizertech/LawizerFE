import { getServiceBySlug } from "@/lib/apis/services";
import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import { notFound } from "next/navigation";

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = await getServiceBySlug(slug);

  if (!pageData) {
    return notFound();
  }

  return <DynamicServicePageTemplate pageData={pageData} />;
}
