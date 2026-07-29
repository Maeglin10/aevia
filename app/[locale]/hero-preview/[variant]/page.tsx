"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { HERO_VARIANTS, type HeroVariantKey } from "../heroes";

const KEYS = ["a", "b", "c"] as const;

export default function HeroVariantPage() {
  const params = useParams<{ locale: string; variant: string }>();
  const locale = params.locale ?? "fr";
  const variant = (params.variant ?? "") as HeroVariantKey;

  if (!KEYS.includes(variant)) notFound();

  const { component: Hero, name } = HERO_VARIANTS[variant];

  return (
    <main id="main-content" className="min-h-screen">
      <Hero />

      {/* Comparison switcher — sits below the fold on purpose so it never
          competes with the hero being evaluated. */}
      <div
        id="produits"
        className="border-t border-zinc-800/60 px-6 py-10"
      >
        <div className="mx-auto max-w-6xl flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-[0.18em] text-zinc-600 mr-2">
            {name}
          </span>
          {KEYS.map((k) => (
            <Link
              key={k}
              href={`/${locale}/hero-preview/${k}`}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-colors ${
                k === variant
                  ? "bg-red-600 border-red-600 text-white"
                  : "border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-500"
              }`}
            >
              {HERO_VARIANTS[k].name}
            </Link>
          ))}
          <Link
            href={`/${locale}/hero-preview`}
            className="px-4 py-2 rounded-full text-xs font-semibold border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-colors"
          >
            Index
          </Link>
        </div>
      </div>
    </main>
  );
}
