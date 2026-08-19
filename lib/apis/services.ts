import { ServiceData } from "@/lib/types/service";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"
).replace(/\/$/, "");

/**
 * Fetch all services directly from backend database
 */
export async function getAllServices(): Promise<ServiceData[]> {
  try {
    const res = await fetch(`${API_URL}/services`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`Failed to fetch live prices from backend (${res.status}).`);
      return [];
    }

    const data = await res.json();
    const backendServices = Array.isArray(data) ? data : data.services ?? [];

    return backendServices.map((bs: any) => ({
      slug: bs.service_id || bs.id,
      id: bs.id || bs.service_id,
      serviceID: bs.service_id || bs.id,
      title: bs.title,
      name: bs.title,
      price: bs.price || 0,
      originalPrice: bs.original_price || bs.originalPrice || Math.round(bs.price * 1.5),
      description: bs.content_description || "",
      category: bs.category || "",
      is_active: bs.is_active,
      subtitle: bs.subtitle || "",
      badgeText: bs.badge_text || "",
      icon: bs.icon || "shield",
      contentTitle: bs.content_title || "",
      contentDescription: bs.content_description || "",
      section1Title: bs.section1_title || "",
      primaryColor: bs.primary_color || "text-indigo-600",
      primaryBg: bs.primary_bg || "bg-gradient-to-r from-indigo-600 to-blue-600",
      primaryHoverBg: bs.primary_hover_bg || "bg-gradient-to-r from-indigo-700 to-blue-700",
      faqs: bs.faqs || [],
      benefits: bs.benefits || [],
      sections: bs.sections || [],
      addons: bs.addons || [],
      theme: bs.theme || {},
    })) as ServiceData[];

  } catch (error) {
    console.error("Error fetching live prices from backend:", error);
    return []; 
  }
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
