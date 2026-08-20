import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Revalidation webhook — called by WordPress on publish/update.
 *
 * WordPress trigger (WP Webhooks plugin or functions.php):
 *   POST https://lawizer.com/api/revalidate?secret=<REVALIDATE_SECRET>
 *
 * Env var required (set in Vercel dashboard + .env.local):
 *   REVALIDATE_SECRET=some-long-random-string
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    // Revalidate the blog listing page
    revalidatePath("/blogs");

    // Optionally revalidate individual post pages
    // If WordPress sends the slug in the body, you can target it:
    let slug: string | null = null;
    try {
      const body = await req.json();
      slug = body?.post?.slug ?? body?.slug ?? null;
    } catch {
      // body is optional — ignore parse errors
    }

    if (slug) {
      revalidatePath(`/blogs/${slug}`);
    }

    return NextResponse.json({
      revalidated: true,
      paths: slug ? ["/blogs", `/blogs/${slug}`] : ["/blogs"],
      now: new Date().toISOString(),
    });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", error: String(err) },
      { status: 500 },
    );
  }
}

// Also support GET for easy manual testing from the browser:
// GET https://lawizer.com/api/revalidate?secret=xxx
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  revalidatePath("/blogs");

  return NextResponse.json({
    revalidated: true,
    paths: ["/blogs"],
    now: new Date().toISOString(),
  });
}
