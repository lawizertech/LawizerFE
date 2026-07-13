import { ServiceData } from "@/lib/types/service";

/**
 * Fetches services from the remote Supabase API on the server,
 * and maps the returned database model keys (snake_case) to
 * the frontend's expected properties (camelCase).
 * 
 * Next.js automatically caches this fetch call on the server.
 */
export async function getServiceBySlug(slug: string): Promise<ServiceData | null> {
  try {
    const res = await fetch(`https://supabase-host-personal.onrender.com/api/services/${slug}`, {
      next: { revalidate: 3600 }, // Cache the result on server for 1 hour (ISR)
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch service: ${res.statusText}`);
    }

    const dbService = await res.json();
    if (!dbService) {
      return null;
    }

    // Map snake_case database fields to camelCase expected by DynamicServicePageTemplate
    const mappedService: ServiceData = {
      title: dbService.title,
      subtitle: dbService.subtitle,
      badgeText: dbService.badge_text || dbService.badgeText || "",
      icon: dbService.icon,
      serviceID: dbService.service_id || dbService.serviceID || "",
      contentTitle: dbService.content_title || dbService.contentTitle || "",
      contentDescription: dbService.content_description || dbService.contentDescription || "",
      section1Title: dbService.section1_title || dbService.section1Title || "",
      price: dbService.price,
      originalPrice: dbService.original_price ?? dbService.originalPrice ?? 0,
      theme: dbService.theme,
      primaryColor: dbService.primary_color || dbService.primaryColor || "",
      primaryBg: dbService.primary_bg || dbService.primaryBg || "",
      primaryHoverBg: dbService.primary_hover_bg || dbService.primaryHoverBg || "",
      benefits: dbService.benefits || [],
      faqs: dbService.faqs || [],
      sections: dbService.sections || [],
      addons: dbService.addons || [],
    };

    return mappedService;
  } catch (error) {
    console.error(`[getServiceBySlug] Error fetching service "${slug}":`, error);
    return null;
  }
}
