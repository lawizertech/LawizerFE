import Link from "next/link";
import { notFound } from "next/navigation";
import { extractHeadings, injectHeadingIds } from "@/lib/extractHeadings";
import Image from "next/image";
import BlogTableOfContents from "@/components/blogs/BlogTableOfContents";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

async function getPostBySlug(slug: string) {
  const query = `
 query GetPostBySlugWithImage($slug: ID!) {
 post(id: $slug, idType: SLUG) {
 title
 content
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
 }
 }
 `;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { slug } }),
    cache: "no-store",
  });

  const json = await res.json();
  if (json.errors || !json?.data?.post) return null;
  return json.data.post;
}

export default async function BlogPostPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const publishedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const contentWithIds = post.content ? injectHeadingIds(post.content) : "";
  const headings = post.content ? extractHeadings(post.content) : [];

  const categoryName = post.categories?.nodes?.[0]?.name ?? null;
  const categorySlug = post.categories?.nodes?.[0]?.slug ?? null;

  return (
    <article className="bg-[#f4f5f7] min-h-screen pb-24">
      {/* ── HERO HEADER ─────────────────────────────────────────── */}
      <header className="max-w-5xl mx-auto px-5 pt-12 pb-6">
        {/* Breadcrumb — matches image 1: "Home > Category > Title" */}
        <nav className="text-sm text-slate-500 mb-5 flex items-center gap-2 flex-wrap">
          <Link href="/blogs" className="hover:text-[#1a2f6e] transition-colors font-medium">
            Blogs
          </Link>
          {categoryName && (
            <>
              <span className="text-slate-400">&gt;</span>
              <Link
                href={`/blogs?category=${categorySlug}`}
                className="hover:text-[#1a2f6e] transition-colors font-medium"
              >
                {categoryName}
              </Link>
            </>
          )}
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-400 line-clamp-1">{post.title}</span>
        </nav>

        {/* H1 — large, dark navy, NOT uppercase (matches image 1) */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a2f6e] leading-tight tracking-tight mb-4">
          {post.title}
        </h1>

        {/* Published date */}
        {publishedDate && (
          <p className="text-sm text-slate-500 mb-6">
            Published on <span className="font-medium text-slate-600">{publishedDate}</span>
          </p>
        )}

        {/* Featured Image */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-2">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
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
        <div className="lg:grid lg:grid-cols-[260px_1fr] lg:gap-8 lg:items-start">
          {/* TOC Sidebar */}
          <BlogTableOfContents headings={headings} />

          {/* Main content card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm px-8">
            <div
              className="
 prose max-w-none

 /* ── Paragraphs ── */
 prose-p:text-slate-600
 prose-p:leading-relaxed
 prose-p:text-[1rem]
 prose-p:my-5

 /* ── H2: blue dot + bold dark navy — matches image 1 & 2 ── */
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
 prose-h2:before:text-blue-500
 prose-h2:before:text-3xl
 prose-h2:before:leading-none
 prose-h2:before:shrink-0

 /* ── H3: plain bold slate ── */
 prose-h3:text-lg
 prose-h3:font-bold
 prose-h3:text-[#1a2f6e]
 prose-h3:mt-8
 prose-h3:mb-3
 prose-h3:scroll-mt-28

 /* ── H4 ── */
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

 /* ── Links ── */
 prose-a:text-blue-600
 prose-a:font-medium
 prose-a:no-underline
 hover:prose-a:underline

 /* ── Strong ── */
 prose-strong:text-slate-800
 prose-strong:font-bold

 /* ── Inline code ── */
 prose-code:text-blue-700
 prose-code:bg-blue-50
 prose-code:px-1
 prose-code:rounded

 /* ── Images inside content ── */
 prose-img:rounded-xl
 prose-img:shadow-sm
 prose-img:border
 prose-img:border-slate-100
 prose-img:my-8

 /* ── Blockquote ── */
 prose-blockquote:border-l-4
 prose-blockquote:border-blue-400
 prose-blockquote:bg-blue-50
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
      </section>
    </article>
  );
}
