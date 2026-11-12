"use client";

import { useTranslations } from "next-intl";

type Item = { q: string; a: string };

/**
 * Questions fréquentes de l'accueil — visibles, et balisées avec les MÊMES mots.
 *
 * ## Pourquoi ce bloc existe
 *
 * L'accueil disait ce que fait chaque service, jamais combien il coûte, en
 * combien de temps, ni qui le vend. Ce sont pourtant les sous-questions qu'un
 * moteur génératif déplie à partir d'une requête comme « agent téléphonique IA
 * prix » ou « Aevia c'est quoi » (le « query fan-out » du guide Google sur les
 * fonctions d'IA, mai 2026). Une page qui n'y répond pas n'a rien à citer.
 *
 * ## Les chiffres viennent des pages produits, pas d'ici
 *
 * Relevés le 12/11/2026 sur les pages servies en production :
 *  - Launch : launch.aevia.services/pricing (399 / 599 / 899 / 1 499 €,
 *    20 €/mois, délais de l'article 4 des CGV) ;
 *  - Inbox : grille du dépôt skybot-inbox, `INTERACTIVE_PRICE_CENTS`
 *    (79 → 999), frais de 100 € et garantie 14 jours affichés sur /fr/pricing ;
 *  - Security : security.aevia.services/pricing (99 € → 1 490–2 490 €).
 * Un prix qui change là-bas doit changer ici — dans `messages/*.json`.
 *
 * ## Le JSON-LD est généré depuis le texte affiché
 *
 * Google n'accepte de données structurées que si elles décrivent ce que le
 * visiteur voit. Les deux sortent du même tableau : ils ne peuvent pas
 * diverger.
 */
export function HomeFaq() {
  const t = useTranslations("faq");
  const items = t.raw("items") as Item[];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="questions" className="px-6 py-16" aria-labelledby="faq-titre">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-titre" className="text-2xl font-bold text-white mb-3">
          {t("title")}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-8">{t("intro")}</p>
        {/* Pas de <dl> : un <dt> n'a pas le droit de contenir un titre, et
            les questions doivent rester des <h3> pour structurer la page. */}
        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {items.map((item) => (
            <div key={item.q} className="py-5">
              <h3 className="text-white font-semibold text-base leading-snug">{item.q}</h3>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
