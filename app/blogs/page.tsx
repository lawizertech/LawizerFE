import Link from "next/link";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 5) {
        nodes {
          title
          content
          uri
        }
      }
    }
  `;

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch posts");

  const json = await res.json();
  return json?.data?.posts?.nodes ?? [];
}

function getExcerpt(html?: string, maxLength = 220) {
  if (!html) return "";

  const text = html.replace(/<[^>]*>?/gm, "").trim();
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default async function PostList() {
  const posts = await getPosts();

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-foreground">
        Latest Legal Guides
      </h1>

      <div className="grid gap-6">
        {posts
          .filter((post: any) => post?.uri && post?.title)
          .map((post: any) => (
            <article
              key={post.uri}
              className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/40"
            >
              <Link href={`/blogs${post.uri}`} className="space-y-3 block">
                <h2 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {getExcerpt(post.content)}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium text-primary">
                    Read full guide →
                  </span>
                </div>
              </Link>
            </article>
          ))}
      </div>
    </section>
  );
}
