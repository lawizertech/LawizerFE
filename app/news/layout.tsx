import type { Metadata } from 'next';

export const metadata: Metadata = {
 title: 'Latest Legal News India 2025 | Lawizer',
 description:
 'Live Indian legal news — Supreme Court cases, legal education updates, startup compliance alerts. Updated daily. Powered by Bar & Bench, LiveLaw, and Google News.',
 alternates: {
 canonical: 'https://lawizer.com/news',
 },
 openGraph: {
 title: 'Latest Legal News India 2025 | Lawizer',
 description:
 'Live Indian legal news — Supreme Court cases, legal education, startup compliance alerts. Updated daily.',
 url: 'https://lawizer.com/news',
 siteName: 'Lawizer',
 type: 'website',
 },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
 return <>{children}</>;
}
