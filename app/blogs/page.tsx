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
          categories {
            nodes {
              id
              name
              slug
            }
          }
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

function groupPostsByCategory(posts: any[]) {
  const grouped: Record<string, any[]> = {};

  posts.forEach((post) => {
    const categories = post.categories?.nodes;

    if (!categories || categories.length === 0) {
      const uncategorized = "Uncategorized";
      grouped[uncategorized] = grouped[uncategorized] || [];
      grouped[uncategorized].push(post);
      return;
    }

    categories.forEach((cat: any) => {
      if (!grouped[cat.name]) {
        grouped[cat.name] = [];
      }
      grouped[cat.name].push(post);
    });
  });

  return grouped;
}

export default async function PostList() {
  const posts = await getPosts();
  const postsByCategory = groupPostsByCategory(posts);

  return (
    <section className="max-w-5xl mx-auto px-4 py-10 space-y-12">
      <h1 className="text-3xl font-bold text-foreground">
        Latest Legal Guides
      </h1>

      {Object.entries(postsByCategory).map(
        ([categoryName, categoryPosts]: any) => (
          <div key={categoryName} className="space-y-6">
            {/* Category Heading */}
            <h2 className="text-2xl font-semibold text-primary border-b pb-2">
              {categoryName}
            </h2>

            {/* Posts under category */}
            <div className="grid gap-6">
              {categoryPosts.map((post: any) => (
                <article
                  key={post.uri}
                  className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/40"
                >
                  <Link href={`/blogs${post.uri}`} className="space-y-3 block">
                    <h3 className="text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

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
          </div>
        )
      )}
    </section>
  );
}
