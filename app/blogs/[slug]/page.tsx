import Link from "next/link";
import { notFound } from "next/navigation";
import { extractHeadings, injectHeadingIds } from "@/lib/extractHeadings";
import Image from "next/image";
import BlogTableOfContents from "@/components/blogs/BlogTableOfContents";
import ArticleShareSidebar from "@/components/blogs/ArticleShareSidebar";
import BlogRecentPosts from "@/components/blogs/BlogRecentPosts";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlugWithImage($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
        excerpt
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
      }
    }
  `;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { slug } }),
      cache: "no-store",
    });

    const json = await res.json();
    if (json.errors || !json?.data?.post) return null;
    return json.data.post;
  } catch (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }
}

async function getRecentPosts(currentSlug: string) {
  const query = `
    query GetRecentPosts {
      posts(first: 5, where: { status: PUBLISH }) {
        nodes {
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    if (json.errors || !json?.data?.posts?.nodes) return [];

    return (json.data.posts.nodes as any[])
      .filter((p) => p.slug !== currentSlug)
      .slice(0, 3);
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
}

function calculateReadingTime(htmlContent?: string) {
  if (!htmlContent) return 1;
  const cleanText = htmlContent.replace(/<[^>]*>?/gm, "").trim();
  const words = cleanText.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = await getRecentPosts(slug);
  const readingTime = calculateReadingTime(post.content);

  const publishedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const contentWithIds = post.content ? injectHeadingIds(post.content) : "";
  const headings = post.content ? extractHeadings(post.content) : [];
  const hasTableOfContents = headings.length > 0;

  const categoryName = post.categories?.nodes?.[0]?.name ?? null;
  const categorySlug = post.categories?.nodes?.[0]?.slug ?? null;

  return (
    <article className="bg-[#f8f9fc] min-h-screen pb-24">
      {/* ─── FULL-WIDTH HERO SECTION ─── */}
      <section className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden bg-slate-900 flex items-center justify-center">
        {post.featuredImage?.node?.sourceUrl ? (
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.featuredImage.node.altText || post.title}
            fill
            priority
            className="object-cover object-center animate-fade-in"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        )}
        {/* Dark gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />

        {/* Hero Content Overlay */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          {/* Category & Date Row */}
          <div className="flex items-center gap-2.5 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4 flex-wrap justify-center text-white/95">
            {categoryName && (
              <span className="text-brand font-extrabold">
                {categoryName}
              </span>
            )}
            {categoryName && <span className="text-white/40">•</span>}
            {publishedDate && <span className="text-white/80">{publishedDate}</span>}
          </div>

          {/* Title - constrained width, visually dominant */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-3xl drop-shadow-sm select-text">
            {post.title}
          </h1>
        </div>
      </section>

      {/* ─── THREE-COLUMN CONTENT WRAPPER ─── */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 mt-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-slate-500 mb-8 flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
          <Link href="/blogs" className="hover:text-brand transition-colors font-medium">
            Blogs
          </Link>
          {categoryName && (
            <>
              <span className="text-slate-400">&gt;</span>
              <Link
                href={`/blogs?category=${categorySlug}`}
                className="hover:text-brand transition-colors font-medium"
              >
                {categoryName}
              </Link>
            </>
          )}
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-400 line-clamp-1">{post.title}</span>
        </nav>

        {/* Editorial Layout Wrapper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* LEFT & CENTER WRAPPER */}
          <div className="flex-1 min-w-0">
            {/* Excerpt - rendered above content on desktop if present */}
            {post.excerpt && (
              <div
                className="text-lg text-slate-500 font-medium leading-relaxed mb-6 prose-p:my-0"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            )}

            {/* ─── MOBILE ONLY SHARE ROW ─── */}
            <div className="lg:hidden mb-8">
              <ArticleShareSidebar readingTime={readingTime} title={post.title} />
            </div>

            {/* ─── MOBILE ONLY COLLAPSIBLE TOC ─── */}
            <div className="lg:hidden mb-8">
              {hasTableOfContents && (
                <BlogTableOfContents headings={headings} variant="blog" isMobileOnly />
              )}
            </div>

            {/* ─── EDITORIAL CONTENT GRID ─── */}
            <div className="lg:grid lg:grid-cols-[160px_minmax(0,1fr)] lg:gap-10 items-start w-full">
              {/* Desktop Sticky Share Sidebar (160px) */}
              <aside className="hidden lg:block sticky top-28 self-start w-[160px]">
                <ArticleShareSidebar readingTime={readingTime} title={post.title} />
              </aside>

              {/* Center Column: Main content (~760px max width container, flat) */}
              <div className="max-w-[760px] mx-auto lg:mx-0 w-full">
                <div
                  className="
                    prose max-w-none

                    /* ── Paragraphs: 17px/18px, dark slate, comfortable line-height ── */
                    prose-p:text-[17px] md:prose-p:text-[18px]
                    prose-p:text-slate-600
                    prose-p:leading-relaxed
                    prose-p:my-6

                    /* ── Headings: strong, dark charcoal, generous spacing ── */
                    prose-h2:flex
                    prose-h2:items-center
                    prose-h2:gap-3
                    prose-h2:text-2xl
                    prose-h2:font-extrabold
                    prose-h2:text-[#0d0f14]
                    prose-h2:mt-12
                    prose-h2:mb-4
                    prose-h2:scroll-mt-28
                    prose-h2:before:content-['•']
                    prose-h2:before:text-brand
                    prose-h2:before:text-3xl
                    prose-h2:before:leading-none
                    prose-h2:before:shrink-0

                    prose-h3:text-lg
                    prose-h3:font-bold
                    prose-h3:text-[#0d0f14]
                    prose-h3:mt-8
                    prose-h3:mb-3
                    prose-h3:scroll-mt-28

                    prose-h4:text-base
                    prose-h4:font-semibold
                    prose-h4:text-slate-700
                    prose-h4:mt-6
                    prose-h4:mb-2

                    /* ── Lists ── */
                    prose-ul:my-5
                    prose-ol:my-5
                    prose-li:text-slate-600
                    prose-li:text-[0.97rem]
                    prose-li:my-1.5

                    /* ── Links: brand red, hover brand-dark, transitions ── */
                    prose-a:text-brand
                    prose-a:font-medium
                    prose-a:no-underline
                    hover:prose-a:underline
                    hover:prose-a:text-brand-dark
                    prose-a:transition-colors
                    prose-a:duration-200

                    /* ── Strong ── */
                    prose-strong:text-slate-800
                    prose-strong:font-bold

                    /* ── Inline code ── */
                    prose-code:text-brand
                    prose-code:bg-brand-light/40
                    prose-code:px-1
                    prose-code:rounded

                    /* ── Images ── */
                    prose-img:rounded-xl
                    prose-img:shadow-sm
                    prose-img:border
                    prose-img:border-slate-100
                    prose-img:my-8

                    /* ── Blockquote ── */
                    prose-blockquote:border-l-4
                    prose-blockquote:border-brand
                    prose-blockquote:bg-brand-light/30
                    prose-blockquote:rounded-r-lg
                    prose-blockquote:px-5
                    prose-blockquote:py-3
                    prose-blockquote:text-slate-600
                    prose-blockquote:not-italic

                    /* ── HR ── */
                    prose-hr:border-slate-100
                    prose-hr:my-10
                  "
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (280px on desktop) */}
          <aside className="hidden lg:block sticky top-28 self-start space-y-6 w-[280px] shrink-0">
            {hasTableOfContents && (
              <BlogTableOfContents headings={headings} variant="blog" />
            )}
            <BlogRecentPosts recentPosts={recentPosts} />
          </aside>

          {/* Mobile Recent Posts */}
          <div className="lg:hidden mt-8">
            <BlogRecentPosts recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </article>
  );
}

// Wrap with dummy element to prevent formatting issues if any layout tag gets misplaced
function SwitchLayoutFixes({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
