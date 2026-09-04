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

    Écrite sans elle, elle désignait `/legal/mentions` — une URL qui répond 307 vers
    `/fr/legal/mentions`. Une canonique qui pointe vers une redirection n'en est pas
    une : Lighthouse la refuse (SEO 92) et Google doit deviner. Mesuré sur la
    page déployée.
  */
  const url = `${BASE}/${locale}/legal/mentions`;
  return {
    title: "Mentions légales | Aevia",
    description:
      "Éditeur, hébergeur, SIREN et coordonnées d'Aevia WS, éditeur d'Aevia Inbox, Aevia Launch et Aevia Security.",
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LANGUES.map((l) => [l, `${BASE}/${l}/legal/mentions`])),
    },
    openGraph: {
      title: "Mentions légales | Aevia",
      description:
        "Éditeur, hébergeur, SIREN et coordonnées d'Aevia WS, éditeur d'Aevia Inbox, Aevia Launch et Aevia Security.",
      url,
      images: ["/og.png"],
    },
  };
}

import { useTranslations } from "next-intl";

export default function MentionsPage() {
  const t = useTranslations("legal_mentions");

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">{t("last_updated")}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">
        {t("title")}
      </h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">
        {t("intro")}
      </p>

      {/* ── Éditeur ──────────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          {t("editor_heading")}
        </h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
          <p>
            <span className="text-zinc-400">{t("editor_label")} :</span>{" "}
            <span className="text-white font-semibold">Aevia WS</span> — {t("editor_status")}
          </p>
          <p>
            <span className="text-zinc-400">{t("director_label")} :</span> Valentin Milliand
          </p>
          <p>
            <span className="text-zinc-400">{t("siren_label")} :</span> 852 546 225 — {t("rcs_value")}
          </p>
          <p>
            <span className="text-zinc-400">{t("vat_label")} :</span> {t("vat_value")}
          </p>
          <p>
            <span className="text-zinc-400">{t("contact_label")} :</span>{" "}
            <a
              href="mailto:valentinmilliand@aevia.services"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              valentinmilliand@aevia.services
            </a>
          </p>
          <p>
            <span className="text-zinc-400">{t("address_label")} :</span> {t("address_value")}
          </p>
        </div>
      </section>

      {/* ── Hébergement ──────────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          {t("hosting_heading")}
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          {t("hosting_intro")}
        </p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
          <p className="text-white font-semibold">Vercel Inc.</p>
          <p className="text-zinc-400">440 N Barranca Avenue #4133, Covina, CA 91723, USA</p>
          <p>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors"
            >
              https://vercel.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
