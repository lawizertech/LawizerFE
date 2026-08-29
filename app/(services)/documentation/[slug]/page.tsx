import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/apis/services";
import DynamicServicePageTemplate from "@/components/client/DynamicServicePageTemplate";
import { buildFAQSchema, buildLegalServiceSchema } from "@/lib/seo/jsonld";

const BASE_URL = "https://lawizer.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pageData = await getServiceBySlug(slug);
  if (!pageData) return {};

  const title = pageData.title;
  const description =
    pageData.subtitle ||
    `${pageData.title} — expert legal document drafting and review by verified lawyers at Lawizer.`;
  const url = `${BASE_URL}/documentation/${slug}`;

  return {
    title,
    description,
    // Self-referencing canonical prevents duplicate-content signals
    // across any other route that may serve the same slug.
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${title} | Lawizer`,
      description,
      url,
      images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Lawizer`,
      description,
      images: ["/og-default.jpg"],
    },
  };
}

export default async function DocumentationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = await getServiceBySlug(slug);
  if (!pageData) notFound();

  const faqSchema = buildFAQSchema(pageData!.faqs ?? []);
  const serviceSchema = buildLegalServiceSchema({
    name: pageData!.title,
    description: pageData!.subtitle,
    url: `${BASE_URL}/documentation/${slug}`,
    price: pageData!.price,
  });

  return (
    <>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <DynamicServicePageTemplate pageData={pageData} />
    </>
  );
}
