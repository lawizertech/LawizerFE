import BlogLayout from "@/components/blogs/BlogLayout";

const WP_GRAPHQL = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "https://olive-dog-534584.hostingersite.com/graphql";

interface GQLPost {
  title: string;
  slug: string;
  excerpt: string;
  uri: string;
  date: string;
  featuredImage: { node: { sourceUrl: string; altText: string } } | null;
  categories: { nodes: { name: string }[] };
}

async function getAllPosts(): Promise<GQLPost[]> {
  const query = `
 query GetAllPosts {
 posts(first: 100, where: { status: PUBLISH }) {
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
    const res = await fetch(WP_GRAPHQL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`GraphQL error: ${res.status} ${res.statusText}`);
      return [];
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GraphQL errors:", json.errors);
      return [];
    }

    const posts: GQLPost[] = json?.data?.posts?.nodes ?? [];
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

function groupPostsByCategory(posts: GQLPost[]) {
  const grouped: Record<string, GQLPost[]> = {};

  posts.forEach((post) => {
    const categories = post.categories?.nodes;

    if (!categories?.length) {
      grouped["Uncategorized"] ??= [];
      grouped["Uncategorized"].push(post);
      return;
    }

    categories.forEach((cat) => {
      grouped[cat.name] ??= [];
      grouped[cat.name].push(post);
    });
  });

  return grouped;
}

export default async function BlogsPage() {
  const posts = await getAllPosts();
  const postsByCategory = groupPostsByCategory(posts);

  return <BlogLayout postsByCategory={postsByCategory} />;
}
