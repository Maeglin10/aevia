"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HERO_VARIANTS } from "./heroes";

const ENTRIES = [
  {
    key: "a" as const,
    summary:
      "Asymmetric 7/5 split. The statement holds the left, the platform is read as a typographic ledger on the right — module name, status, hairline rules, no icons.",
  },
  {
    key: "b" as const,
    summary:
      "Centred statement over a low crimson horizon, closed by a full-bleed hairline rail that names the six modules in one line.",
  },
  {
    key: "c" as const,
    summary:
      "Editorial index. Left-weighted headline, mono-numbered contents column on the right, CTAs sitting on a full-width rule opposite a reassurance line.",
  },
];

export default function HeroPreviewIndex() {
  const params = useParams<{ locale: string }>();
  const locale = params.locale ?? "fr";

  return (
    <main id="main-content" className="min-h-screen px-6 pt-32 pb-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          Hero proposals
        </h1>
        <p className="text-zinc-400 mb-10">
          Three distinct compositions on the Hub&rsquo;s existing palette and font stack, using the
          production copy. Open each and compare.
        </p>

        <ul className="divide-y divide-zinc-800">
          {ENTRIES.map(({ key, summary }) => (
            <li key={key} className="py-6">
              <Link
                href={`/${locale}/hero-preview/${key}`}
                className="group block"
              >
                <span className="text-lg font-semibold text-white group-hover:text-red-300 transition-colors">
                  {HERO_VARIANTS[key].name}
                </span>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">{summary}</p>
                <span className="mt-3 inline-block text-xs font-mono text-zinc-600">
                  /{locale}/hero-preview/{key}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
