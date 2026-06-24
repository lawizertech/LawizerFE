import BlogLayout from "@/components/blogs/BlogLayout";

async function getPosts() {
  const ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  
  if (!ENDPOINT) {
    console.error("NEXT_PUBLIC_GRAPHQL_ENDPOINT is not configured");
    return [];
  }

  const query = `
    query GetPosts {
      posts(first: 20) {
        nodes {
          title
          slug
          excerpt
          uri
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
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`GraphQL endpoint error: ${res.status} ${res.statusText}`);
      return [];
    }

    const json = await res.json();

    // Check for GraphQL errors
    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return [];
    }

    const posts = json?.data?.posts?.nodes ?? [];
    console.log(`Fetched ${posts.length} posts from GraphQL endpoint`);
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
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
