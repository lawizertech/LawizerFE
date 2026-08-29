import { MetadataRoute } from "next";

const BASE_URL = "https://lawizer.com";
const API_URL = "https://api.lawizer.com/api";
const WP_GRAPHQL =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ||
  "https://olive-dog-534584.hostingersite.com/graphql";

// ── Known static routes ────────────────────────────────────────────────────
const STATIC_ROUTES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { url: "/",                                               priority: 1.0,  changeFrequency: "daily" },
  { url: "/startup-businesslegal",                          priority: 0.9,  changeFrequency: "weekly" },
  { url: "/compliance/annual",                              priority: 0.9,  changeFrequency: "weekly" },
  { url: "/itr",                                            priority: 0.9,  changeFrequency: "weekly" },
  { url: "/itr/itr-plans/bronze",                           priority: 0.8,  changeFrequency: "weekly" },
  { url: "/itr/itr-plans/silver",                           priority: 0.8,  changeFrequency: "weekly" },
  { url: "/itr/itr-plans/gold",                             priority: 0.8,  changeFrequency: "weekly" },
  { url: "/itr/itr-plans/diamond",                          priority: 0.8,  changeFrequency: "weekly" },
  { url: "/documentation",                                  priority: 0.8,  changeFrequency: "weekly" },
  { url: "/banking",                                        priority: 0.7,  changeFrequency: "monthly" },
  { url: "/family",                                         priority: 0.7,  changeFrequency: "monthly" },
  { url: "/property",                                       priority: 0.7,  changeFrequency: "monthly" },
  { url: "/civil-commercial",                               priority: 0.7,  changeFrequency: "monthly" },
  { url: "/challan",                                        priority: 0.6,  changeFrequency: "monthly" },
  { url: "/startup-businesslegal/kolkata-west-bengal-business-registration", priority: 0.8, changeFrequency: "monthly" },
  { url: "/blogs",                                          priority: 0.8,  changeFrequency: "daily" },
  { url: "/about",                                          priority: 0.6,  changeFrequency: "monthly" },
  { url: "/contact",                                        priority: 0.6,  changeFrequency: "monthly" },
  { url: "/faqs",                                           priority: 0.6,  changeFrequency: "monthly" },
  { url: "/legal-glossary",                                 priority: 0.6,  changeFrequency: "monthly" },
  { url: "/careers",                                        priority: 0.5,  changeFrequency: "monthly" },
  { url: "/privacy-policy",                                 priority: 0.3,  changeFrequency: "yearly" },
  { url: "/terms",                                          priority: 0.3,  changeFrequency: "yearly" },
  { url: "/attorney-terms",                                 priority: 0.3,  changeFrequency: "yearly" },
  { url: "/startup-businesslegal/compare-business-structures", priority: 0.7, changeFrequency: "monthly" },
];

// ── Dynamic: fetch service slugs from backend API ──────────────────────────
async function getServiceUrls(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(`${API_URL}/services`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const services: { id: string; service_id?: string }[] = await res.json();

    const slugMap: Record<string, string> = {
      "PrivateLimitedCompanyPage": "private-limited-company",
      "OnePersonCompanyPage": "one-person-company",
      "LLPPage": "llp-registration",
      "Section8NGOCompanyPage": "section-8-ngo-company",
      "PublicLimitedCompanyPage": "public-limited-company",
      "StartupIndiaRegistrationPage": "startup-india-registration",
      "GSTRegistrationPage": "gst-registration",
      "MSMEUdhyamRegistrationPage": "msme-udhyam-registration",
      "TrademarkRegistrationPage": "trademark-registration",
      "CopyrightRegistrationPage": "copyright-registration",
      "RenewTrademarkPage": "renew-trademark",
      "ReplyToTrademarkObjectionPage": "reply-to-trademark-objection",
      "ReplyToCopyrightObjectionPage": "reply-to-copyright-objection",
      "SellYourTrademarkPage": "sell-your-trademark",
      "AppointmentOfDirectorPage": "appointment-of-director",
      "ResignationOfDirectorPage": "resignation-of-director",
      "ChangeInOfficeAddressPage": "change-in-office-address",
      "IncreasingCapitalOfCompanyPage": "increasing-capital-of-company",
      "ClosureOfPvtLtdPage": "closure-of-pvt-ltd",
      "ClosureOfOPCPage": "closure-of-opc",
      "ClosureOfLLPPage": "closure-of-llp",
    };

    const entries: MetadataRoute.Sitemap = [];
    for (const s of services) {
      const rawSlug = s.id || s.service_id;
      if (!rawSlug) continue;
      
      const slug = slugMap[rawSlug] || rawSlug;
      
      // Services live under multiple sub-paths; add all known patterns
      const paths = [
        `/startup-businesslegal/startbusiness/${slug}`,
        `/startup-businesslegal/protectbusiness/${slug}`,
        `/startup-businesslegal/growbusiness/${slug}`,
        `/startup-businesslegal/managebusiness/${slug}`,
        `/documentation/${slug}`,
        `/service/${slug}`,
      ];
      for (const path of paths) {
        entries.push({
          url: `${BASE_URL}${path}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.75,
        });
      }
    }
    return entries;
  } catch {
    return [];
  }
}

// ── Dynamic: fetch blog slugs from WPGraphQL ──────────────────────────────
async function getBlogUrls(): Promise<MetadataRoute.Sitemap> {
  const query = `query SitemapPosts { posts(first: 500, where: { status: PUBLISH }) { nodes { slug date } } }`;
  try {
    const res = await fetch(WP_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const posts: { slug: string; date: string }[] =
      json?.data?.posts?.nodes ?? [];
    return posts.map((p) => ({
      url: `${BASE_URL}/blogs/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));
  } catch {
    return [];
  }
}

// ── Main export ───────────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [serviceUrls, blogUrls] = await Promise.all([
    getServiceUrls(),
    getBlogUrls(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE_URL}${r.url}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...staticEntries, ...serviceUrls, ...blogUrls];
}
