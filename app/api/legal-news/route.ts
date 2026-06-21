import { NextResponse } from 'next/server';

export const revalidate = 1800; // cache for 30 minutes at the edge

const RSS_FEEDS = [
  {
    url: 'https://news.google.com/rss/search?q=India+legal+case+Supreme+Court&hl=en-IN&gl=IN&ceid=IN:en',
    label: 'Google News · Supreme Court',
    tag: 'Supreme Court',
  },
  {
    url: 'https://news.google.com/rss/search?q=India+law+education+bar+council&hl=en-IN&gl=IN&ceid=IN:en',
    label: 'Google News · Legal Education',
    tag: 'Legal Education',
  },
  {
    url: 'https://news.google.com/rss/search?q=India+startup+compliance+GST+trademark&hl=en-IN&gl=IN&ceid=IN:en',
    label: 'Google News · Startup Compliance',
    tag: 'Startup Compliance',
  },
  {
    url: 'https://barandbench.com/feed',
    label: 'Bar & Bench',
    tag: 'Bar & Bench',
  },
  {
    url: 'https://www.livelaw.in/rss',
    label: 'LiveLaw',
    tag: 'LiveLaw',
  },
];

/** Minimal XML tag extractor — avoids any npm dependency */
function extractTag(xml: string, tag: string): string {
  const open = `<${tag}`;
  const close = `</${tag}>`;
  const start = xml.indexOf(open);
  if (start === -1) return '';
  const contentStart = xml.indexOf('>', start) + 1;
  const end = xml.indexOf(close, contentStart);
  if (end === -1) return '';
  // Strip CDATA if present
  let content = xml.slice(contentStart, end).trim();
  content = content.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
  return content;
}


export type LiveNewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  tag: string;
};

async function fetchFeed(
  feedUrl: string,
  label: string,
  tag: string,
  maxItems = 2
): Promise<LiveNewsItem[]> {
  try {
    const res = await fetch(feedUrl, {
      next: { revalidate: 1800 },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (compatible; LawizerBot/1.0; +https://lawizer.com)',
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const items: LiveNewsItem[] = [];

    // Split into <item> blocks
    const itemBlocks: string[] = [];
    let cursor = 0;
    while (cursor < xml.length) {
      const start = xml.indexOf('<item>', cursor);
      if (start === -1) break;
      const end = xml.indexOf('</item>', start);
      if (end === -1) break;
      itemBlocks.push(xml.slice(start, end + 7));
      cursor = end + 7;
    }

    for (const block of itemBlocks.slice(0, maxItems)) {
      const title = extractTag(block, 'title');
      // Google News wraps the real link in <link> but it's self-closing; try <link> then <guid>
      let link = extractTag(block, 'link');
      if (!link) link = extractTag(block, 'guid');
      const pubDate = extractTag(block, 'pubDate');

      if (!title || !link) continue;

      items.push({
        title: title.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'"),
        link,
        pubDate,
        source: label,
        tag,
      });
    }

    return items;
  } catch {
    return [];
  }
}

export async function GET() {
  // Fetch all feeds in parallel, cap each to 2 items = max 10 total
  const results = await Promise.allSettled(
    RSS_FEEDS.map((f) => fetchFeed(f.url, f.label, f.tag, 2))
  );

  const items: LiveNewsItem[] = results
    .filter((r): r is PromiseFulfilledResult<LiveNewsItem[]> => r.status === 'fulfilled')
    .flatMap((r) => r.value)
    // Sort newest first
    .sort((a, b) => {
      const da = a.pubDate ? new Date(a.pubDate).getTime() : 0;
      const db = b.pubDate ? new Date(b.pubDate).getTime() : 0;
      return db - da;
    })
    .slice(0, 6); // Show only the freshest 6

  return NextResponse.json({ items, fetchedAt: new Date().toISOString() });
}
