import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getGuideBySlug, getGuides, computeReadingTime, formatGuideDate, stripHtml } from "@/lib/guides";
import { extractHeadings, injectHeadingIds } from "@/lib/extractHeadings";
import BlogTableOfContents from "@/components/blogs/BlogTableOfContents";
import GuideProgressBar from "@/components/guides/GuideProgressBar";
import GuideHelpful from "@/components/guides/GuideHelpful";
import GuidePrintButton from "@/components/guides/GuidePrintButton";

// ─── Static params (pre-render known slugs at build time) ─────────────────────

export async function generateStaticParams() {
  const guides = await getGuides(100);
  return guides.map((g) => ({ slug: g.slug }));
}

// ─── Per-page SEO metadata ────────────────────────────────────────────────────

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const guide = await getGuideBySlug(slug);
  if (!guide) return {};

  const description = stripHtml(guide.excerpt, 155);
  const category = guide.categories?.nodes?.find((c) => c.slug !== "guides")?.name ?? "Legal Guide";

  return {
    title: `${guide.title} | Lawizer`,
    description,
    alternates: {
      canonical: `https://lawizer.com/guides/${slug}`,
    },
    openGraph: {
      title: `${guide.title} | Lawizer`,
      description,
      url: `https://lawizer.com/guides/${slug}`,
      siteName: "Lawizer",
      type: "article",
      publishedTime: guide.date ?? undefined,
      images: guide.featuredImage?.node.sourceUrl
        ? [{ url: guide.featuredImage.node.sourceUrl, alt: guide.title }]
        : [],
    },
    other: {
      // HowTo / Article JSON-LD is injected inline in the page below
      "article:section": category,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function GuideDetailPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const guide = await getGuideBySlug(slug);
  if (!guide) notFound();

  // Verify it's actually in the "Guides" category
  const isGuide = guide.categories?.nodes?.some((c) => c.slug === "guides" || c.name.toLowerCase() === "guides");
  if (!isGuide) notFound();

  const category = guide.categories?.nodes?.find((c) => c.slug !== "guides")?.name ?? "General";

  const content = guide.content ?? "";
  const contentWithIds = injectHeadingIds(content);
  const headings = extractHeadings(content);
  const hasTableOfContents = headings.length > 0;

  const readTime = guide.content ? computeReadingTime(guide.content) : null;

  const publishedDate = formatGuideDate(guide.date);

  const serviceLink = guide.guideFields?.serviceLink ?? null;
  const serviceLabel = guide.guideFields?.serviceLabel ?? "Need help with this? Lawizer handles it end-to-end.";

  // JSON-LD: Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    datePublished: guide.date ?? undefined,
    author: { "@type": "Organization", name: "Lawizer" },
    publisher: {
      "@type": "Organization",
      name: "Lawizer",
      url: "https://lawizer.com",
    },
    description: stripHtml(guide.excerpt, 200),
    ...(guide.featuredImage?.node.sourceUrl ? { image: guide.featuredImage.node.sourceUrl } : {}),
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Scroll progress bar */}
      <GuideProgressBar />

      <article className="bg-[#f4f5f7] min-h-screen pb-24">
        {/* ── HERO HEADER ──────────────────────────────────────────── */}
        <header className="max-w-5xl mx-auto px-5 pt-12 pb-6">
          {/* Breadcrumb */}
          <nav className="text-sm text-slate-500 mb-5 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <Link href="/guides" className="hover:text-[#e94560] transition-colors font-medium">
              Guides
            </Link>
            {category && (
              <>
                <span className="text-slate-300">›</span>
                <span className="text-slate-500">{category}</span>
              </>
            )}
            <span className="text-slate-300">›</span>
            <span className="text-slate-400 line-clamp-1 max-w-[280px]">{guide.title}</span>
          </nav>

          {/* Category + reading time row */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {category && (
              <span className="text-[#e94560] uppercase text-xs font-bold tracking-widest px-3 py-1 rounded-full bg-[#e94560]/10 border border-[#e94560]/20">
                {category}
              </span>
            )}
            {readTime && (
              <span className="text-slate-400 text-xs flex items-center gap-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {readTime} min read
              </span>
            )}
            {publishedDate && <span className="text-slate-400 text-xs">· {publishedDate}</span>}

            {/* Print button — lives in header row */}
            <span className="ml-auto">
              <GuidePrintButton />
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#1a2f6e] leading-tight tracking-tight mb-6">
            {guide.title}
          </h1>

          {/* Featured image */}
          {guide.featuredImage?.node?.sourceUrl && (
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-2">
              <Image
                src={guide.featuredImage.node.sourceUrl}
                alt={guide.featuredImage.node.altText || guide.title}
                width={1200}
                height={600}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          )}
        </header>

        {/* ── CONTENT + TOC ───────────────────────────────────────── */}
        <section className="max-w-5xl mx-auto px-5">
          <div className={`lg:grid ${hasTableOfContents ? "lg:grid-cols-[260px_1fr]" : "lg:grid-cols-1"} lg:gap-8 lg:items-start`}>
            {/* TOC sidebar — reuses the existing blog component */}
            {hasTableOfContents && (
              <BlogTableOfContents headings={headings} />
            )}

            {/* Main content */}
            <div>
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-6 md:px-10 py-8">
                {content ? (
                  <div
                    className="
 prose max-w-none

 prose-p:text-slate-600
 prose-p:leading-relaxed
 prose-p:text-[1rem]
 prose-p:my-5

 prose-h2:flex
 prose-h2:items-center
 prose-h2:gap-3
 prose-h2:text-2xl
 prose-h2:font-extrabold
 prose-h2:text-[#1a2f6e]
 prose-h2:mt-12
 prose-h2:mb-4
 prose-h2:scroll-mt-28
 prose-h2:before:content-['•']
 prose-h2:before:text-[#e94560]
 prose-h2:before:text-3xl
 prose-h2:before:leading-none
 prose-h2:before:shrink-0

 prose-h3:text-lg
 prose-h3:font-bold
 prose-h3:text-[#1a2f6e]
 prose-h3:mt-8
 prose-h3:mb-3
 prose-h3:scroll-mt-28

 prose-h4:text-base
 prose-h4:font-semibold
 prose-h4:text-slate-700
 prose-h4:mt-6
 prose-h4:mb-2

 prose-ul:my-5
 prose-ol:my-5
 prose-li:text-slate-600
 prose-li:text-[0.97rem]
 prose-li:my-1.5

 prose-a:text-[#e94560]
 prose-a:font-medium
 prose-a:no-underline
 hover:prose-a:underline

 prose-strong:text-slate-800
 prose-strong:font-bold

 prose-code:text-[#e94560]
 prose-code:bg-red-50
 prose-code:px-1
 prose-code:rounded

 prose-img:rounded-xl
 prose-img:shadow-sm
 prose-img:border
 prose-img:border-slate-100
 prose-img:my-8

 prose-blockquote:border-l-4
 prose-blockquote:border-[#e94560]
 prose-blockquote:bg-red-50/40
 prose-blockquote:rounded-r-lg
 prose-blockquote:px-5
 prose-blockquote:py-3
 prose-blockquote:text-slate-600
 prose-blockquote:not-italic

 prose-hr:border-slate-100
 prose-hr:my-10
 "
                    dangerouslySetInnerHTML={{ __html: contentWithIds }}
                  />
                ) : (
                  <p className="text-slate-500 text-center py-12">Guide content coming soon.</p>
                )}
              </div>

              {/* Was this helpful? */}
              <GuideHelpful slug={slug} />
            </div>
          </div>
        </section>

        {/* ── SERVICE CTA BANNER ───────────────────────────────────── */}
        {serviceLink && (
          <section className="max-w-5xl mx-auto px-5 mt-10">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] p-8 md:p-10">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#e94560]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                <div>
                  <p className="text-[#e94560] text-sm font-bold uppercase tracking-widest mb-1">
                    Ready to take action?
                  </p>
                  <h2 className="text-white text-xl md:text-2xl font-extrabold leading-snug">{serviceLabel}</h2>
                  <p className="text-white/60 text-sm mt-1">Expert legal team · Fixed fees · 100% online</p>
                </div>
                <Link
                  href={serviceLink}
                  className="shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-[#e94560] to-[#ff6b8a] text-white rounded-full px-7 py-3 font-bold text-sm shadow-lg hover:shadow-2xl hover:shadow-[#e94560]/40 hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Get started
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── BACK TO GUIDES ────────────────────────────────────────── */}
        <div className="max-w-5xl mx-auto px-5 mt-8">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-[#e94560] transition-colors font-medium"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all guides
          </Link>
        </div>
      </article>

      {/* Print-only styles */}
    </>
  );
}
