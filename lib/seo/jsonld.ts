/**
 * lib/seo/jsonld.ts
 * Shared JSON-LD structured-data builders for Lawizer.com
 */

export interface FAQEntry {
  question?: string;
  answer?: string;
  q?: string;
  a?: string;
}

/** Build a FAQPage JSON-LD object from an array of FAQ items */
export function buildFAQSchema(faqs: FAQEntry[]) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question || f.q || "",
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer || f.a || "",
      },
    })),
  };
}

/** Build a LegalService JSON-LD object for a specific service page */
export function buildLegalServiceSchema({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description?: string;
  url: string;
  price?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name,
    description: description || `${name} service provided by Lawizer`,
    url,
    provider: {
      "@type": "Organization",
      name: "Lawizer",
      url: "https://lawizer.com",
      logo: "https://lawizer.com/Lawizer_final.png",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: price.toString(),
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };
}

/**
 * Build Organization + LegalService JSON-LD for the site root.
 * TODO: Confirm aggregateRating values (ratingValue + reviewCount) against
 * your live source (Google My Business / Trustpilot) before going to production.
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LegalService"],
    name: "Lawizer",
    url: "https://lawizer.com",
    logo: "https://lawizer.com/Lawizer_final.png",
    description:
      "Lawizer is a next-generation digital legal platform connecting you to verified lawyers and legal experts across India.",
    foundingDate: "2023",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: "https://lawizer.com/contact",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://www.linkedin.com/company/lawizer",
      "https://twitter.com/lawizer",
    ],
    // TODO: Verify these numbers against your live review source before deploy.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "2543",
      bestRating: "5",
    },
  };
}

/** Build a LocalBusiness JSON-LD for the Kolkata landing page */
export function buildLocalBusinessSchema({
  city,
  state,
  url,
}: {
  city: string;
  state: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: `Lawizer — Business Registration in ${city}`,
    url,
    description: `Expert business registration and legal compliance services in ${city}, ${state}. Start your Private Limited Company, LLP, or OPC online.`,
    areaServed: [
      { "@type": "City", name: city },
      { "@type": "State", name: state },
    ],
    provider: {
      "@type": "Organization",
      name: "Lawizer",
      url: "https://lawizer.com",
    },
    // TODO: Verify rating values against your live source.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "2543",
      bestRating: "5",
    },
  };
}
