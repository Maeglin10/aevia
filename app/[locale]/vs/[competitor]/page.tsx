"use client";

import { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Info } from "lucide-react";
import { getVsEntry, type Locale } from "@/lib/vs-content";

export default function VsPage({
  params,
}: {
  params: Promise<{ competitor: string; locale: string }>;
}) {
  const resolvedParams = use(params);
  const pathname = usePathname();
  const locale = resolvedParams.locale ?? pathname.split("/")[1] ?? "fr";
  const entry = getVsEntry(resolvedParams.competitor);
  const lang: Locale = locale === "en" ? "en" : "fr";
  const copy = entry?.copy[lang] ?? entry?.copy.fr;

  if (!entry || !copy) notFound();

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-inbox/10 blur-[120px]" />
          <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-inbox/10 ring-1 ring-inbox/30 text-inbox-light text-xs font-medium">
              {copy.badge}
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            {copy.h1A}{" "}
            <span className="text-inbox-light">
              {copy.h1Highlight}
            </span>
            {" "}{copy.h1B}
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed mb-8">
            {copy.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-inbox hover:bg-inbox-dark text-white text-sm font-semibold transition-colors"
            >
              {copy.ctaPrimary}
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Positioning ───────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">{copy.positioningTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-inbox/30 bg-inbox/[0.04] p-6">
              <div className="text-sm font-semibold text-inbox-light mb-2">{copy.positioningAeviaLabel}</div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[60ch]">{copy.positioningAevia}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="text-sm font-semibold text-zinc-300 mb-2">{copy.positioningCompetitorLabel}</div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[60ch]">{copy.positioningCompetitor}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison table ─────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-2">{copy.tableTitle}</h2>
          <p className="text-zinc-400 text-sm mb-6">{copy.tableSubtitle}</p>
          <div className="overflow-x-auto rounded-2xl border border-zinc-800">
            <table className="w-full text-sm border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-zinc-900/60">
                  <th className="text-left font-semibold text-zinc-400 px-5 py-4 w-1/5">—</th>
                  <th className="text-left font-semibold text-inbox-light px-5 py-4 w-2/5">Aevia Inbox</th>
                  <th className="text-left font-semibold text-zinc-300 px-5 py-4 w-2/5">{entry.competitorName}</th>
                </tr>
              </thead>
              <tbody>
                {copy.tableRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-zinc-900/20" : ""}>
                    <td className="align-top px-5 py-4 font-medium text-zinc-300 border-t border-zinc-800/60">
                      {row.label}
                    </td>
                    <td className="align-top px-5 py-4 text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                      {row.aevia}
                    </td>
                    <td className="align-top px-5 py-4 text-zinc-400 leading-relaxed border-t border-zinc-800/60">
                      {row.competitor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Choose if ─────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-6">{copy.chooseTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-inbox/30 bg-inbox/[0.04] p-6">
              <h3 className="text-base font-semibold text-white mb-4">{copy.chooseAeviaTitle}</h3>
              <ul className="space-y-3">
                {copy.chooseAeviaPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-sm leading-relaxed">
                    <Check size={15} className="mt-0.5 text-inbox-light shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-base font-semibold text-zinc-300 mb-4">{copy.chooseCompetitorTitle}</h3>
              <ul className="space-y-3">
                {copy.chooseCompetitorPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-zinc-400 text-sm leading-relaxed">
                    <Check size={15} className="mt-0.5 text-zinc-400 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-2">{copy.pricingTitle}</h2>
          <p className="text-zinc-400 text-sm mb-6">{copy.pricingSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-4">
            <div className="rounded-2xl border border-inbox/30 bg-inbox/[0.04] p-6">
              <div className="text-sm font-semibold text-inbox-light mb-4">{copy.pricingAeviaLabel}</div>
              <div className="space-y-3">
                {copy.pricingAevia.map((line, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-3 pb-3 border-b border-zinc-800/60 last:border-0 last:pb-0">
                    <div>
                      <div className="text-sm text-zinc-200 font-medium">{line.plan}</div>
                      {line.note && <div className="text-xs text-zinc-400 mt-0.5">{line.note}</div>}
                    </div>
                    <div className="text-sm font-semibold text-inbox-light shrink-0">{line.price}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="text-sm font-semibold text-zinc-300 mb-4">{copy.pricingCompetitorLabel}</div>
              <div className="space-y-3">
                {copy.pricingCompetitor.map((line, i) => (
                  <div key={i} className="flex items-baseline justify-between gap-3 pb-3 border-b border-zinc-800/60 last:border-0 last:pb-0">
                    <div>
                      <div className="text-sm text-zinc-200 font-medium">{line.plan}</div>
                      {line.note && <div className="text-xs text-zinc-400 mt-0.5">{line.note}</div>}
                    </div>
                    <div className="text-sm font-semibold text-zinc-400 shrink-0">{line.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-[62ch] flex items-start gap-2">
            <Info size={13} className="mt-0.5 shrink-0" />
            {copy.pricingNote}
          </p>
        </div>
      </section>

      {/* ── Gap disclosure ───────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-6">
            <h2 className="text-base font-semibold text-amber-300 mb-3">{copy.gapTitle}</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[60ch]">{copy.gapBody}</p>
          </div>
        </div>
      </section>

      {/* ── Sources ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs text-zinc-400 leading-relaxed max-w-[62ch] border-t border-zinc-800/60 pt-6">
            {copy.sourcesNote} — {copy.lastVerified}. Les tarifs et fonctionnalités de tiers évoluent
            régulièrement ; vérifiez toujours l&apos;offre actuelle du fournisseur avant de prendre une décision.
          </p>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-inbox/5 to-inbox/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">{copy.ctaTitle}</h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">{copy.ctaBody}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-inbox hover:bg-inbox-dark text-white text-sm font-semibold transition-colors"
              >
                {copy.ctaButton}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
