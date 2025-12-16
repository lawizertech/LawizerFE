import Link from "next/link";
import { notFound } from "next/navigation";
import { extractHeadings, injectHeadingIds } from "@/lib/extractHeadings";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

async function getPostBySlug(slug: string) {
  const query = `
    query GetPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
        date
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
  return json.data?.post ?? null;
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  if (!slug) notFound();

  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const contentWithIds = injectHeadingIds(post.content);

  return (
    // Changed background to a soft tint like the UI image
    <article className="bg-[#fcfdfe] min-h-screen pb-20">
      {/* HERO */}
      <header className="max-w-4xl mx-auto px-6 pt-14 pb-8">
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/blogs" className="hover:text-primary transition-colors">
            Blogs
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground/60">{post.title}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
          {post.title}
        </h1>

        <p className="text-slate-500 font-medium">
          Published on{" "}
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </header>

      {/* CENTERED CONTENT - SIDE PANEL REMOVED */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-16">
          <div
            className="
              prose
              prose-lg
              dark:prose-invert
              max-w-none

              /* Paragraph Spacing & Color */
              prose-p:leading-relaxed
              prose-p:text-slate-600

              /* Subheading (H2) Styling - Large, Blue, and Spaced */
              prose-h2:text-3xl
              prose-h2:text-[#2c3e8e]
              prose-h2:font-bold
              prose-h2:mt-16
              prose-h2:mb-8
              prose-h2:scroll-mt-10
              
              /* Added the blue dot indicator from the UI image */
              prose-h2:flex
              prose-h2:items-start
              prose-h2:before:content-['•']
              prose-h2:before:text-blue-600
              prose-h2:before:mr-4
              prose-h2:before:text-4xl
              prose-h2:before:leading-none

              /* Sub-subheadings (H3) */
              prose-h3:text-2xl
              prose-h3:text-slate-800
              prose-h3:font-bold
              prose-h3:mt-12
              prose-h3:mb-6

              /* List Spacing */
              prose-ul:my-8
              prose-ol:my-8
              prose-li:my-4
              prose-li:text-slate-600

              /* Links */
              prose-a:text-blue-600
              prose-a:font-semibold
              prose-a:no-underline
              prose-a:hover:underline
            "
            dangerouslySetInnerHTML={{ __html: contentWithIds }}
          />
        </div>
      </section>
    </article>
  );
}
