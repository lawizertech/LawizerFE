import { ServiceData } from "@/lib/types/service";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"
).replace(/\/$/, "");

function mapService(service: any): ServiceData {
  return {
    id: service.id,
    slug: service.id,
    serviceID: service.service_id,

    title: service.title,
    subtitle: service.subtitle,
    badgeText: service.badge_text,

    icon: service.icon,
    category: service.category,

    contentTitle: service.content_title,
    contentDescription: service.content_description,
    section1Title: service.section1_title,

    price: service.price,
    originalPrice: service.original_price,

    theme: service.theme,

    primaryColor: service.primary_color,
    primaryBg: service.primary_bg,
    primaryHoverBg: service.primary_hover_bg,

    benefits: (service.benefits ?? []).map((b: any) => ({
      icon: b.icon ?? "checkCircle",
      description: b.description ?? b.text ?? "",
    })),

    faqs: (service.faqs ?? []).map((f: any) => ({
      question: f.question ?? f.q ?? "",
      answer: f.answer ?? f.a ?? "",
    })),

    sections: service.sections ?? [],
    addons: service.addons ?? [],
  };
}

/**
 * Fetch all services
 */
export async function getAllServices(): Promise<ServiceData[]> {
  const res = await fetch(`${API_URL}/services`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch services (${res.status})`);
  }

  const data = await res.json();

  const services = Array.isArray(data)
    ? data
    : data.services ?? [];

  return services.map(mapService);
}

/**
 * Fetch one service by slug/id
 */
export async function getServiceBySlug(
  slug: string
): Promise<ServiceData | null> {
  const services = await getAllServices();

  return (
    services.find(
      (service) =>
        service.slug === slug ||
        service.id === slug ||
        service.serviceID === slug
    ) ?? null
  );
}