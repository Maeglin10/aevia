import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
const BASE = "https://aevia.services";
const LANGUES = ["fr", "en", "es", "de", "pt"] as const;

/*
  Le contenu de cette page est traduit (next-intl), mais son <title> et sa
  description étaient en français dans les cinq langues : relevé en
  production le 12/11, « Mentions légales | Aevia » sur /en, /es, /de et /pt.
  Cinq pages au même titre, et un résultat Google en français sous une page
  anglaise. C'est la page qui porte le SIREN — celle qui permet de séparer
  Aevia WS de l'homonyme du groupe Eiffage — elle mérite d'être lisible dans
  la langue où on la cherche.
*/
const META: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Mentions légales | Aevia",
    description:
      "Éditeur, hébergeur, SIREN et coordonnées d'Aevia WS, éditeur d'Aevia Inbox, Aevia Launch et Aevia Security.",
  },
  en: {
    title: "Legal notice | Aevia",
    description:
      "Publisher, host, SIREN number and contact details of Aevia WS, the company behind Aevia Inbox, Aevia Launch and Aevia Security.",
  },
  es: {
    title: "Aviso legal | Aevia",
    description:
      "Editor, alojamiento, número SIREN y datos de contacto de Aevia WS, empresa editora de Aevia Inbox, Aevia Launch y Aevia Security.",
  },
  de: {
    title: "Impressum | Aevia",
    description:
      "Herausgeber, Hosting, SIREN-Nummer und Kontaktdaten von Aevia WS, dem Unternehmen hinter Aevia Inbox, Aevia Launch und Aevia Security.",
  },
  pt: {
    title: "Aviso legal | Aevia",
    description:
      "Editor, alojamento, número SIREN e contactos da Aevia WS, empresa editora do Aevia Inbox, Aevia Launch e Aevia Security.",
  },
};

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
  const meta = META[locale] ?? META.fr;
  return {
    // `absolute` : le layout de langue ne fournit pas de gabarit, et le titre
    // porte déjà la marque.
    title: { absolute: meta.title },
    description: meta.description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LANGUES.map((l) => [l, `${BASE}/${l}/legal/mentions`])),
        "x-default": `${BASE}/fr/legal/mentions`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
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
