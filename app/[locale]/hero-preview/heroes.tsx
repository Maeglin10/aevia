"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { previewCopy } from "./copy";
import { BEAT, STAGE, ambient, layer, subLayer } from "./motion-kit";

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function PrimaryCta({ label }: { label: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
    >
      {label}
      <ArrowRight className="w-4 h-4" />
    </Link>
  );
}

function SecondaryCta({ label }: { label: string }) {
  return (
    <a
      href="#produits"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
    >
      {label}
    </a>
  );
}

/** Hairline column rules — the only "texture" any of the proposals uses. */
function ColumnRules({ count = 6 }: { count?: number }) {
  return (
    <div className="absolute inset-0 hidden lg:flex justify-between max-w-6xl mx-auto px-6" aria-hidden>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-px h-full bg-gradient-to-b from-transparent via-zinc-700/20 to-transparent" />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* A — Split ledger                                                    */
/*    Asymmetric 7/5 split: statement on the left, the platform read   */
/*    as a typographic ledger on the right. No icons, only rules.      */
/* ------------------------------------------------------------------ */

export function HeroA() {
  const h = useTranslations("hero");
  const locale = useLocale();
  const c = previewCopy(locale);
  const reduced = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 px-6">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[#09090b]" />
        {/* crimson pulled to the right edge only — a wash, not a glow ball */}
        <motion.div
          className="absolute -right-[30%] -top-[22%] w-[420px] h-[420px] sm:w-[900px] sm:h-[900px] sm:-right-[18%] sm:-top-[28%] rounded-full bg-red-700/22 sm:bg-red-700/35 blur-[130px] sm:blur-[160px]"
          {...ambient(reduced)}
        />
        <div className="absolute inset-x-0 top-0 h-40 sm:h-56 bg-gradient-to-b from-red-950/45 sm:from-red-950/70 to-transparent" />
      </div>
      <ColumnRules count={5} />

      <div className="relative mx-auto max-w-6xl" style={STAGE}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Statement */}
          <div className="lg:col-span-7">
            <motion.h1
              {...layer(BEAT.one, reduced)}
              className="text-[1.875rem] sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06]"
            >
              {h("title1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-red-500">
                {h("title2")}
              </span>
            </motion.h1>

            <motion.p
              {...layer(BEAT.two, reduced)}
              className="mt-5 sm:mt-6 text-zinc-400 text-[0.9375rem] sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              {h("description")}
            </motion.p>

            <motion.div
              {...layer(BEAT.three, reduced)}
              className="mt-7 sm:mt-8 flex flex-wrap items-center gap-4"
            >
              <PrimaryCta label={h("cta_primary")} />
              <SecondaryCta label={h("cta_secondary")} />
            </motion.div>
          </div>

          {/* Ledger */}
          <motion.div
            {...layer(BEAT.three, reduced)}
            className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl shadow-black/40 overflow-hidden"
          >
            <div className="flex items-baseline justify-between px-5 py-3.5 border-b border-zinc-800">
              <span className="text-[0.6875rem] uppercase tracking-[0.18em] text-zinc-500 font-medium">
                {c.platform}
              </span>
              <span className="font-mono text-[0.6875rem] text-zinc-600">
                {String(c.modules.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="divide-y divide-zinc-800/70">
              {c.modules.map((m, i) => (
                <motion.li
                  key={m}
                  {...subLayer(i < 2 ? BEAT.one : i < 4 ? BEAT.two : BEAT.three, reduced)}
                  className="flex items-baseline justify-between px-5 py-3"
                >
                  <span className="text-sm text-zinc-200">{m}</span>
                  <span className="text-[0.6875rem] text-zinc-500">{c.included}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* B — Statement over a horizon                                        */
/*    Centred statement, then a full-bleed hairline rail naming the    */
/*    modules. The crimson is a low horizon arc, not a nebula.         */
/* ------------------------------------------------------------------ */

export function HeroB() {
  const h = useTranslations("hero");
  const locale = useLocale();
  const c = previewCopy(locale);
  const reduced = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-0">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[#09090b]" />
        {/* horizon: the glow crests just below the bottom edge, like a printed
            duotone sunrise rather than a nebula */}
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(135% 80% at 50% 99%, rgba(225,29,72,0.50) 0%, rgba(136,19,55,0.30) 38%, rgba(9,9,11,0) 72%)",
          }}
          {...ambient(reduced)}
        />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#09090b] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center" style={STAGE}>
        <motion.h1
          {...layer(BEAT.one, reduced)}
          className="text-[1.875rem] sm:text-5xl lg:text-[4.25rem] font-bold tracking-tight text-white leading-[1.06] max-w-4xl mx-auto"
        >
          {h("title1")}{" "}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-red-500">
            {h("title2")}
          </span>
        </motion.h1>

        <motion.p
          {...layer(BEAT.two, reduced)}
          className="mt-5 sm:mt-6 text-zinc-400 text-[0.9375rem] sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {h("description")}
        </motion.p>

        <motion.div
          {...layer(BEAT.three, reduced)}
          className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <PrimaryCta label={h("cta_primary")} />
          <SecondaryCta label={h("cta_secondary")} />
        </motion.div>
      </div>

      {/* capability rail — full bleed, hairline cells, plain type */}
      <motion.div
        {...layer(BEAT.three, reduced)}
        className="relative mt-10 sm:mt-12 border-y border-zinc-800/80 bg-[#09090b]/60 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-6xl grid grid-cols-3 sm:grid-cols-6 divide-x divide-zinc-800/70">
          {c.modules.map((m) => (
            <div key={m} className="px-2 sm:px-3 py-4 text-center">
              <span className="block text-[0.625rem] sm:text-xs uppercase tracking-[0.08em] sm:tracking-[0.14em] leading-tight text-zinc-400">
                {m}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* C — Editorial index                                                 */
/*    Reads like the contents page of an annual report: left-weighted  */
/*    headline, mono-numbered index on the right, CTAs sitting on a    */
/*    full-width rule with a reassurance line opposite.                */
/* ------------------------------------------------------------------ */

export function HeroC() {
  const h = useTranslations("hero");
  const locale = useLocale();
  const c = previewCopy(locale);
  const reduced = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 px-6">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[#09090b]" />
        {/* one wide, very low band of crimson behind the headline */}
        <motion.div
          className="absolute left-0 right-0 top-[12%] h-[38%] bg-gradient-to-r from-red-900/30 via-red-800/12 to-transparent blur-[120px]"
          {...ambient(reduced)}
        />
      </div>

      <div className="relative mx-auto max-w-6xl" style={STAGE}>
        {/* On narrow screens the index drops below the action rule so the
            primary CTA stays above the fold; on lg it returns to the right. */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-y-9 lg:gap-y-10 lg:gap-x-16 items-start">
          <div className="order-1 lg:col-span-8">
            <motion.h1
              {...layer(BEAT.one, reduced)}
              className="text-[1.875rem] sm:text-5xl lg:text-[3.75rem] font-bold tracking-tight text-white leading-[1.05]"
            >
              {h("title1")}
              <br />
              <span className="text-zinc-400">{h("title2")}</span>
            </motion.h1>

            <motion.p
              {...layer(BEAT.two, reduced)}
              className="mt-6 text-zinc-400 text-[0.9375rem] sm:text-base leading-relaxed max-w-xl"
            >
              {h("description")}
            </motion.p>
          </div>

          {/* index */}
          <motion.div {...layer(BEAT.two, reduced)} className="order-3 w-full lg:order-2 lg:col-span-4">
            <div className="text-[0.6875rem] uppercase tracking-[0.18em] text-zinc-600 font-medium pb-3 border-b border-zinc-800">
              {c.platform}
            </div>
            <ul>
              {c.modules.map((m, i) => (
                <motion.li
                  key={m}
                  {...subLayer(i < 2 ? BEAT.one : i < 4 ? BEAT.two : BEAT.three, reduced)}
                  className="flex items-baseline gap-4 py-2.5 border-b border-zinc-800/60"
                >
                  <span className="font-mono text-[0.6875rem] text-red-400/80 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-zinc-300">{m}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* action rule */}
          <motion.div
            {...layer(BEAT.three, reduced)}
            className="order-2 w-full lg:order-3 lg:col-span-12 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5"
          >
            <div className="flex flex-wrap items-center gap-4">
              <PrimaryCta label={h("cta_primary")} />
              <SecondaryCta label={h("cta_secondary")} />
            </div>
            <p className="text-xs text-zinc-500">{c.reassurance}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const HERO_VARIANTS = {
  a: { component: HeroA, name: "A — Split ledger" },
  b: { component: HeroB, name: "B — Statement over a horizon" },
  c: { component: HeroC, name: "C — Editorial index" },
} as const;

export type HeroVariantKey = keyof typeof HERO_VARIANTS;
