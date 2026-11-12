"use client";

import { useLocale, useTranslations } from "next-intl";

const BASE = "https://aevia.services";
const ORG = { "@id": `${BASE}/#organization` };

/**
 * Données structurées des trois services — sur l'accueil SEULEMENT, et
 * décrites avec le texte que l'accueil affiche.
 *
 * ## Ce qu'il y avait avant
 *
 * Le layout racine injectait ce bloc sur les 103 URL du Hub : articles,
 * mentions légales, contact, comparatifs. Il portait seize `Offer` chiffrées
 * (399 €, 79 €, 1 490 €…) alors qu'aucune de ces pages n'affichait un seul
 * prix, et des descriptions qui ne figuraient nulle part (« plus de 100
 * thèmes », « livrés sous 48 heures » pour toutes les formules). Google le dit
 * sans détour : on ne balise pas un contenu que le visiteur ne voit pas, et
 * le guide « fonctions d'IA » (mai 2026) en fait une condition — le balisage
 * doit être conforme au contenu visible. Un prix balisé ailleurs que sur la
 * page qui l'affiche est aussi celui qu'un assistant recopie sans contexte.
 *
 * ## Ce qu'il y a maintenant
 *
 * - les descriptions sortent de `messages/*.json` (clé `products`), donc dans
 *   la langue de la page et identiques aux cartes affichées ;
 * - les prix sont des fourchettes (`AggregateOffer`) qui reprennent celles de
 *   la FAQ affichée juste en dessous (`faq.items` dans `messages/*.json`).
 *   Changer un prix = changer les deux, et la page produit d'abord ;
 * - un nœud `WebSite` déclare le nom du site (« Aevia ») et son nom
 *   alternatif : c'est ce que Google lit pour le nom affiché au-dessus du
 *   résultat, utile face à l'homonyme du groupe Eiffage.
 */
export function HomeProductsSchema() {
  const p = useTranslations("products");
  const langue = useLocale();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        name: "Aevia",
        alternateName: ["Aevia WS", "Aevia Services"],
        url: `${BASE}/`,
        inLanguage: langue,
        publisher: ORG,
      },
      {
        "@type": "Service",
        "@id": "https://launch.aevia.services/#service",
        name: "Aevia Launch",
        serviceType: p("launch_name"),
        description: `${p("launch_tagline")} ${p("launch_desc")}`,
        provider: ORG,
        url: "https://launch.aevia.services",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "399",
          highPrice: "1499",
          priceCurrency: "EUR",
          offerCount: 4,
          url: "https://launch.aevia.services/pricing",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://inbox.aevia.services/#app",
        name: "Aevia Inbox",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: `${p("inbox_tagline")} ${p("inbox_desc")}`,
        featureList: [p("inbox_f1"), p("inbox_f2"), p("inbox_f3"), p("inbox_f4")],
        provider: ORG,
        url: "https://inbox.aevia.services",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "79",
          highPrice: "999",
          priceCurrency: "EUR",
          offerCount: 5,
          url: `https://inbox.aevia.services/${langue === "de" ? "fr" : langue}/pricing`,
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://security.aevia.services/#app",
        name: "Aevia Security",
        applicationCategory: "SecurityApplication",
        operatingSystem: "Web",
        description: `${p("security_tagline")} ${p("security_desc")}`,
        featureList: [p("security_f1"), p("security_f2"), p("security_f3"), p("security_f4")],
        provider: ORG,
        url: "https://security.aevia.services",
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "0",
          highPrice: "2490",
          priceCurrency: "EUR",
          url: "https://security.aevia.services/pricing",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
