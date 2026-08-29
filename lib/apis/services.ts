import { ServiceData } from "@/types/service";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api"
).replace(/\/$/, "");

function mapBackendServiceToData(bs: any): ServiceData {
  return {
    slug: bs.service_id || bs.id,
    id: bs.id || bs.service_id,
    serviceID: bs.service_id || bs.id,
    title: bs.title || "Untitled Service",
    price: bs.price || 0,
    originalPrice:
      bs.original_price || bs.originalPrice || Math.round((bs.price || 0) * 1.5),
    rating: bs.rating ? Number(bs.rating) : 4.9,
    category: bs.category || "General",
    is_active: bs.is_active ?? true,
    subtitle: bs.subtitle || "",
    badgeText: bs.badge_text || "",
    icon: bs.icon || "Shield",
    contentTitle: bs.content_title || "",
    contentDescription: bs.content_description || "",
    section1Title: bs.section1_title || "",
    primaryColor: bs.primary_color || "text-indigo-600",
    primaryBg:
      bs.primary_bg || "bg-gradient-to-r from-indigo-600 to-blue-600",
    primaryHoverBg:
      bs.primary_hover_bg || "bg-gradient-to-r from-indigo-700 to-blue-700",
    faqs: (bs.faqs || []).map((f: any) => ({
      question: f.question || f.q || "",
      answer: f.answer || f.a || "",
      q: f.q || f.question || "",
      a: f.a || f.answer || "",
    })),
    benefits: (bs.benefits || []).map((b: any) => ({
      icon: b.icon || "CheckCircle",
      description: b.description || b.text || "",
      text: b.text || b.description || "",
    })),
    sections: bs.sections || [],
    addons: bs.addons || [],
    theme: bs.theme || {},
  };
}

/**
 * Fetch all services directly from backend database
 */
export async function getAllServices(): Promise<ServiceData[]> {
  try {
    const res = await fetch(`${API_URL}/services`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn(`Failed to fetch live services from backend (${res.status}).`);
      return [];
    }

    const data = await res.json();
    const backendServices = Array.isArray(data) ? data : data.services ?? [];

    return backendServices.map(mapBackendServiceToData);
  } catch (error) {
    console.error("Error fetching live prices from backend:", error);
    return [];
  }
}

/**
 * Fetch one service by slug/id (with in-memory search and direct endpoint fallback)
 */
export async function getServiceBySlug(
  slug: string
): Promise<ServiceData | null> {
  if (!slug) return null;

  // Map new SEO-friendly kebab-case URLs back to the legacy PascalCase API IDs
  const slugMap: Record<string, string> = {
    "private-limited-company": "PrivateLimitedCompanyPage",
    "one-person-company": "OnePersonCompanyPage",
    "llp-registration": "LLPPage",
    "section-8-ngo-company": "Section8NGOCompanyPage",
    "public-limited-company": "PublicLimitedCompanyPage",
    "startup-india-registration": "StartupIndiaRegistrationPage",
    "gst-registration": "GSTRegistrationPage",
    "msme-udhyam-registration": "MSMEUdhyamRegistrationPage",
    "trademark-registration": "TrademarkRegistrationPage",
    "copyright-registration": "CopyrightRegistrationPage",
    "renew-trademark": "RenewTrademarkPage",
    "reply-to-trademark-objection": "ReplyToTrademarkObjectionPage",
    "reply-to-copyright-objection": "ReplyToCopyrightObjectionPage",
    "sell-your-trademark": "SellYourTrademarkPage",
    "appointment-of-director": "AppointmentOfDirectorPage",
    "resignation-of-director": "ResignationOfDirectorPage",
    "change-in-office-address": "ChangeInOfficeAddressPage",
    "increasing-capital-of-company": "IncreasingCapitalOfCompanyPage",
    "closure-of-pvt-ltd": "ClosureOfPvtLtdPage",
    "closure-of-opc": "ClosureOfOPCPage",
    "closure-of-llp": "ClosureOfLLPPage",
  };

  const mappedSlug = slugMap[slug] || slug;
  const cleanSlug = decodeURIComponent(mappedSlug).toLowerCase().trim();
  const services = await getAllServices();

  const found = services.find(
    (service) =>
      service.slug?.toLowerCase() === cleanSlug ||
      service.id?.toLowerCase() === cleanSlug ||
      service.serviceID?.toLowerCase() === cleanSlug
  );

  if (found) return found;

  // Fallback: direct fetch from backend API
  try {
    const res = await fetch(`${API_URL}/services/${encodeURIComponent(slug)}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const bs = await res.json();
      if (bs && (bs.id || bs.service_id)) {
        return mapBackendServiceToData(bs);
      }
    }
  } catch (err) {
    console.error("Direct fetch service by slug error:", err);
  }

  return null;
}
