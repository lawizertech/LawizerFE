// ─── Lawizer Guides — WordPress GraphQL helpers ───────────────────────────────
//
// WordPress setup required (one-time):
// 1. Create a WP Category called "Guides" (slug: guides)
// 2. Tag every guide post with that category
// 3. (Optional) Install Advanced Custom Fields (ACF) and add:
// - serviceLink (URL field) — e.g. /company-registration
// - serviceLabel (Text field) — e.g. "Register your company today"
// These surface the bottom CTA on each guide page.
//
// Env var required (add to .env.local):
// NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://your-wp-site.com/graphql

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

// ─── Types ────────────────────────────────────────────────────────────────────

export type GuidePost = {
 title: string;
 slug: string;
 excerpt: string | null;
 date: string | null;
 content: string | null;
 readingTime: number | null; // minutes — stored as ACF field or computed
 featuredImage: {
 node: {
 sourceUrl: string;
 altText: string;
 };
 } | null;
 categories: {
 nodes: { name: string; slug: string }[];
 };
 // ACF custom fields (optional — gracefully absent if not set up yet)
 guideFields: {
 serviceLink: string | null;
 serviceLabel: string | null;
 } | null;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Count words in an HTML string and convert to reading minutes */
export function computeReadingTime(html: string): number {
 const text = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
 const words = text.split(' ').length;
 return Math.max(1, Math.round(words / 200));
}

/** Strip HTML tags from an excerpt for plain-text display */
export function stripHtml(html: string | null, max = 160): string {
 if (!html) return '';
 const text = html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
 return text.length > max ? text.slice(0, max) + '…' : text;
}

/** Format a WP date string to Indian locale */
export function formatGuideDate(dateStr: string | null): string {
 if (!dateStr) return '';
 return new Date(dateStr).toLocaleDateString('en-IN', {
 day: 'numeric',
 month: 'long',
 year: 'numeric',
 });
}

// ─── Shared fragment ──────────────────────────────────────────────────────────

const GUIDE_FIELDS = `
 title
 slug
 excerpt
 date
 featuredImage {
 node {
 sourceUrl
 altText
 }
 }
 categories {
 nodes {
 name
 slug
 }
 }
 guideFields {
 serviceLink
 serviceLabel
 }
`;

// ─── Fetch all guides (index page) ───────────────────────────────────────────

/**
 * Fetches posts in the "guides" category from WordPress.
 * Falls back to [] on any error so the page still renders.
 *
 * @param first Max posts to fetch (default 50)
 */
export async function getGuides(first = 50): Promise<GuidePost[]> {
 if (!ENDPOINT) {
 console.warn('[guides] NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set.');
 return [];
 }

 const query = `
 query GetGuides($first: Int!) {
 posts(
 first: $first
 where: { categoryName: "Guides", orderby: { field: DATE, order: DESC } }
 ) {
 nodes {
 ${GUIDE_FIELDS}
 }
 }
 }
 `;

 try {
 const res = await fetch(ENDPOINT, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ query, variables: { first } }),
 next: { revalidate: 3600 }, // ISR — refresh every 60 minutes
 });

 if (!res.ok) {
 console.error(`[guides] GraphQL error: ${res.status} ${res.statusText}`);
 return [];
 }

 const json = await res.json();
 if (json.errors) {
 console.error('[guides] GraphQL errors:', json.errors);
 return [];
 }

 return (json?.data?.posts?.nodes ?? []) as GuidePost[];
 } catch (err) {
 console.error('[guides] Fetch failed:', err);
 return [];
 }
}

// ─── Fetch single guide (detail page) ────────────────────────────────────────

/**
 * Fetches a single guide post by its slug.
 * Returns null if not found.
 */
export async function getGuideBySlug(slug: string): Promise<GuidePost | null> {
 if (!ENDPOINT) {
 console.warn('[guides] NEXT_PUBLIC_GRAPHQL_ENDPOINT is not set.');
 return null;
 }

 const query = `
 query GetGuideBySlug($slug: ID!) {
 post(id: $slug, idType: SLUG) {
 ${GUIDE_FIELDS}
 content
 }
 }
 `;

 try {
 const res = await fetch(ENDPOINT, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ query, variables: { slug } }),
 cache: 'no-store', // always fresh for guide detail
 });

 if (!res.ok) return null;

 const json = await res.json();
 if (json.errors || !json?.data?.post) return null;

 return json.data.post as GuidePost;
 } catch (err) {
 console.error(`[guides] Failed to fetch guide "${slug}":`, err);
 return null;
 }
}

// ─── Group guides by their WP sub-category ───────────────────────────────────

/**
 * Groups guides by their first non-"Guides" category.
 * If a guide only has "Guides" as its category, it lands in "General".
 */
export function groupGuidesByCategory(
 guides: GuidePost[]
): Record<string, GuidePost[]> {
 const grouped: Record<string, GuidePost[]> = {};

 guides.forEach((guide) => {
 // Skip the parent "Guides" category itself; use the sub-category
 const cats = guide.categories?.nodes ?? [];
 const subCat =
 cats.find((c) => c.slug !== 'guides')?.name ?? 'General';

 grouped[subCat] ??= [];
 grouped[subCat].push(guide);
 });

 return grouped;
}
