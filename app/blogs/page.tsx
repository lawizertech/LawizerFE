import BlogLayout from "@/components/blogs/BlogLayout";

const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

async function getPosts() {
  const query = `
    query GetPosts {
      posts(first: 20) {
        nodes {
          title
          slug
          excerpt
          uri
          categories {
            nodes {
              name
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

  const json = await res.json();
  return json?.data?.posts?.nodes ?? [];
}

function groupPostsByCategory(posts: any[]) {
  const grouped: Record<string, any[]> = {};

  posts.forEach((post) => {
    const categories = post.categories?.nodes;

    if (!categories?.length) {
      grouped["Uncategorized"] ??= [];
      grouped["Uncategorized"].push(post);
      return;
    }

    categories.forEach((cat: any) => {
      grouped[cat.name] ??= [];
      grouped[cat.name].push(post);
    });
  });

  return grouped;
}

export default async function PostList() {
  const posts = await getPosts();
  const postsByCategory = groupPostsByCategory(posts);

  return <BlogLayout postsByCategory={postsByCategory} />;
}
