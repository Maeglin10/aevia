import type { Metadata } from 'next';

// Internal comparison surface — must never be indexed.
export const metadata: Metadata = {
  title: 'Hero proposals',
  robots: { index: false, follow: false },
};

export default function HeroPreviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
