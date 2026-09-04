import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
const BASE = "https://aevia.services";
const LANGUES = ["fr", "en", "es", "de", "pt"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  /*
    La canonique doit porter la langue.

    Écrite sans elle, elle désignait `/legal/cookies` — une URL qui répond 307 vers
    `/fr/legal/cookies`. Une canonique qui pointe vers une redirection n'en est pas
    une : Lighthouse la refuse (SEO 92) et Google doit deviner. Mesuré sur la
    page déployée.
  */
  const url = `${BASE}/${locale}/legal/cookies`;
  return {
    title: "Politique de cookies | Aevia",
    description:
      "Les cookies déposés par Aevia, leur finalité, leur durée, et comment retirer votre consentement à tout moment.",
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LANGUES.map((l) => [l, `${BASE}/${l}/legal/cookies`])),
    },
    openGraph: {
      title: "Politique de cookies | Aevia",
      description:
        "Les cookies déposés par Aevia, leur finalité, leur durée, et comment retirer votre consentement à tout moment.",
      url,
      images: ["/og.png"],
    },
  };
}

import { useLocale } from "next-intl";
import { COOKIES_CONTENT, type CookieRow } from "./content";

const H2 = "text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800";
const H3 = "text-base font-semibold text-white";
const P = "text-sm leading-relaxed text-zinc-400 mb-3";
const EXT = "text-red-400 hover:text-red-300 transition-colors";

const SERVICE_COLORS = ["text-red-400", "text-red-300", "text-emerald-400", "text-cyan-400"];

const BROWSERS = [
  { name: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
  { name: "Mozilla Firefox", url: "https://support.mozilla.org/fr/kb/activer-desactiver-cookies" },
  { name: "Safari (Apple)", url: "https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" },
  { name: "Microsoft Edge", url: "https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
  { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" },
];

function Badge({ tone, children }: { tone: "green" | "sky" | "amber"; children: string }) {
  const cls =
    tone === "green"
      ? "text-emerald-400 bg-emerald-500/10 ring-emerald-500/20"
      : tone === "sky"
      ? "text-sky-400 bg-sky-500/10 ring-sky-500/20"
      : "text-amber-400 bg-amber-500/10 ring-amber-500/20";
  return <span className={`text-xs ${cls} ring-1 px-2 py-0.5 rounded-full shrink-0`}>{children}</span>;
}

function CookieTable({ col2, rows, cols }: { col2: string; rows: CookieRow[]; cols: { name: string; purpose: string; duration: string } }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="border-b border-zinc-700">
            <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">{cols.name}</th>
            <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">{col2}</th>
            <th className="text-left py-2.5 pr-4 text-zinc-300 font-semibold">{cols.purpose}</th>
            <th className="text-left py-2.5 text-zinc-300 font-semibold">{cols.duration}</th>
          </tr>
        </thead>
        <tbody className="text-zinc-400">
          {rows.map((r, i) => (
            <tr key={r.name} className={i < rows.length - 1 ? "border-b border-zinc-800/60" : ""}>
              <td className="py-2.5 pr-4 font-mono">{r.name}</td>
              <td className="py-2.5 pr-4">{r.service}</td>
              <td className="py-2.5 pr-4">{r.purpose}</td>
              <td className="py-2.5">{r.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CookiesPage() {
  const locale = useLocale();
  const c = COOKIES_CONTENT[locale] ?? COOKIES_CONTENT.fr;
  const cols = { name: c.s3.colName, purpose: c.s3.colPurpose, duration: c.s3.colDuration };

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">{c.lastUpdated}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">{c.title}</h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">{c.intro}</p>

      {/* 1 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s1.heading}</h2>
        <p className={P}>{c.s1.p1}</p>
        <p className={P}>{c.s1.p2}</p>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s1.p3}</p>
      </section>

      {/* 2 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s2.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s2.lead}</p>
        <div className="space-y-3 text-sm">
          {c.s2.services.map((s, i) => (
            <div key={s.tag} className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <span className={`${SERVICE_COLORS[i] ?? "text-red-400"} font-bold shrink-0 text-xs`}>{s.tag}</span>
              <span className="text-zinc-400"><strong className="text-zinc-300">{s.name}</strong> — {s.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s3.heading}</h2>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3"><h3 className={H3}>{c.s3.h31}</h3><Badge tone="green">{c.s3.badgeNoConsent}</Badge></div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s3.p31}</p>
          <CookieTable col2={c.s3.colService} rows={c.s3.rows31} cols={cols} />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3"><h3 className={H3}>{c.s3.h32}</h3><Badge tone="sky">{c.s3.badgeConsent}</Badge></div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s3.p32}</p>
          <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">{c.s3.items32.map((i) => <li key={i}>{i}</li>)}</ul>
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4 text-sm mb-3">
            <p className="text-zinc-300 font-semibold mb-2">{c.s3.dataTitle}</p>
            <ul className="list-disc list-inside text-zinc-400 space-y-1 ml-2 text-xs">{c.s3.dataItems.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="text-zinc-500 text-xs mt-3">{c.s3.dataNote}</p>
          </div>
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className={`text-xs ${EXT} inline-block`}>{c.s3.link32} &rarr;</a>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3"><h3 className={H3}>{c.s3.h33}</h3><Badge tone="amber">{c.s3.badgeConsent}</Badge></div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s3.p33}</p>
          <CookieTable col2={c.s3.colPublisher} rows={c.s3.rows33} cols={cols} />
          <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" className={`text-xs ${EXT} mt-3 inline-block`}>{c.s3.link33} &rarr;</a>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3"><h3 className={H3}>{c.s3.h34}</h3><Badge tone="amber">{c.s3.badgeConsent}</Badge></div>
          <p className={P}>{c.s3.p34a}</p>
          <p className={P}>{c.s3.p34b}</p>
          <a href="https://www.facebook.com/policy/cookies/" target="_blank" rel="noopener noreferrer" className={`text-xs ${EXT} inline-block`}>{c.s3.link34} &rarr;</a>
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3"><h3 className={H3}>{c.s3.h35}</h3><Badge tone="green">{c.s3.badgeFunctional}</Badge></div>
          <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s3.p35}</p>
          <CookieTable col2={c.s3.colKey} rows={c.s3.rows35} cols={cols} />
        </div>
      </section>

      {/* 4 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s4.heading}</h2>
        <div className="space-y-4 text-sm">
          <div className="bg-zinc-900/40 border border-emerald-800/40 rounded-xl p-5">
            <p className="font-semibold text-emerald-400 mb-2">{c.s4.exemptTitle}</p>
            <p className="text-zinc-400 leading-relaxed">{c.s4.exempt}</p>
          </div>
          <div className="bg-zinc-900/40 border border-amber-800/40 rounded-xl p-5">
            <p className="font-semibold text-amber-400 mb-2">{c.s4.consentTitle}</p>
            <p className="text-zinc-400 leading-relaxed">{c.s4.consent}</p>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s5.heading}</h2>
        <p className={P}>{c.s5.p1a}<strong className="text-zinc-300">{c.s5.p1strong}</strong>{c.s5.p1b}</p>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s5.p2}</p>
      </section>

      {/* 6 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s6.heading}</h2>
        <h3 className={`${H3} mb-2 mt-4`}>{c.s6.h61}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s6.p61}</p>
        <h3 className={`${H3} mb-2 mt-5`}>{c.s6.h62}</h3>
        <p className={P}>{c.s6.p62}</p>
        <div className="space-y-2 text-sm">
          {BROWSERS.map((b) => (
            <div key={b.name} className="flex items-center gap-3 py-2 border-b border-zinc-800/60 last:border-0">
              <span className="text-zinc-300 text-sm w-40 shrink-0">{b.name}</span>
              <a href={b.url} target="_blank" rel="noopener noreferrer" className={`${EXT} text-xs`}>{c.s6.browserGuide} &rarr;</a>
            </div>
          ))}
        </div>
        <h3 className={`${H3} mb-2 mt-6`}>{c.s6.h63}</h3>
        <p className={P}>{c.s6.p63}</p>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-3"><span className="text-zinc-400 w-56 shrink-0">Your Online Choices (UE)</span><a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className={`${EXT} text-xs`}>youronlinechoices.eu &rarr;</a></div>
          <div className="flex items-center gap-3"><span className="text-zinc-400 w-56 shrink-0">NAI Opt-Out (USA)</span><a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className={`${EXT} text-xs`}>networkadvertising.org &rarr;</a></div>
        </div>
        <h3 className={`${H3} mb-2 mt-6`}>{c.s6.h64}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">
          {c.s6.p64a}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className={EXT}>{c.s6.p64optout}</a>
          {c.s6.p64b}
        </p>
      </section>

      {/* 7 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s7.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s7.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">{c.s7.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 text-sm">
          <p className="text-zinc-300 font-semibold mb-2">{c.s7.auditTitle}</p>
          <p className="text-zinc-400 leading-relaxed">
            {c.s7.auditA}
            <a href="mailto:privacy@aevia.services" className={EXT}>privacy@aevia.services</a>
            {c.s7.auditB}
          </p>
        </div>
      </section>

      {/* 8 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s8.heading}</h2>
        <p className={P}>{c.s8.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">{c.s8.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      {/* 9 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s9.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s9.text}</p>
      </section>

      {/* 10 */}
      <section className="mb-10">
        <h2 className={H2}>{c.s10.heading}</h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">{c.s10.title}</p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s10.emailLabel} :</span> <a href="mailto:privacy@aevia.services" className={EXT}>privacy@aevia.services</a></p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s10.controllerLabel} :</span> {c.s10.controllerValue}</p>
          <div className="pt-2 border-t border-zinc-800 mt-2 space-y-1">
            <p className="text-zinc-500 text-xs">{c.s10.relatedLabel}</p>
            <a href={`/${locale}/legal/privacy`} className={`${EXT} text-xs block`}>{c.s10.privacyLink} &rarr;</a>
            <a href={`/${locale}/legal/terms`} className={`${EXT} text-xs block`}>{c.s10.termsLink} &rarr;</a>
            <a href={`/${locale}/legal/mentions`} className={`${EXT} text-xs block`}>{c.s10.mentionsLink} &rarr;</a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">{c.disclaimer}</p>
      </div>
    </main>
  );
}
