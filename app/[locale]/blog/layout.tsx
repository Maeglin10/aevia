import type { Metadata } from "next";
import { blogIndexLocales } from "@/lib/blog-posts";

const BASE = "https://aevia.services";

/*
  L'index du blog se déclarait comme un doublon de l'accueil.

  Ce layout exportait des métadonnées statiques sans `alternates` : la page
  héritait donc de celles de `[locale]/layout.tsx`, écrites pour l'accueil.
  Relevé en production le 12/11 : `/fr/blog` servait
  `<link rel="canonical" href="https://aevia.services/fr">` et les hreflang des
  cinq accueils. Pour Google, la page qui porte les liens vers tous les
  articles disait « je suis une copie de l'accueil, ne m'indexe pas ». Le titre
  était « Blog » nu, identique dans les cinq langues, et la description en
  français partout.

  Même règle que les articles (`blog/[slug]/layout.tsx`) : une langue qui a
  au moins un article traduit a son propre index, canonique sur lui-même.
  Depuis le 20/11, les cinq langues en ont (l'allemand et le portugais du
  Brésil n'en avaient aucun et pointaient vers `/fr/blog`, en `noindex`) ; la
  règle reste pour une éventuelle sixième langue.

  Ce layout enveloppe aussi les articles : ils redéfinissent titre,
  description, canonique, hreflang et `robots`.
*/
const COPY: Record<string, { title: string; description: string }> = {
  fr: {
    title: "Blog Aevia — site web, accueil client IA et sécurité pour TPE et PME",
    description:
      "Guides pratiques pour TPE, PME et indépendants : prix d'un site web ou d'un agent téléphonique IA, WhatsApp Business, sécurité de site, relation client.",
  },
  en: {
    title: "Aevia blog — websites, AI customer service and security for small businesses",
    description:
      "Practical guides for small businesses and freelancers: what a website or an AI phone agent costs, WhatsApp Business, website security, customer service.",
  },
  es: {
    title: "Blog de Aevia — web, atención al cliente con IA y seguridad para pymes",
    description:
      "Guías prácticas para pymes y autónomos: cuánto cuesta una web o un agente telefónico con IA, WhatsApp Business, seguridad web y atención al cliente.",
  },
  de: {
    title: "Aevia Blog — Website, KI-Kundenservice und Sicherheit für KMU",
    description:
      "Praxisleitfäden für kleine Unternehmen: Kosten einer Website oder eines KI-Telefonagenten, WhatsApp Business, Website-Sicherheit, Kundenservice.",
  },
  pt: {
    title: "Blog Aevia — site, atendimento com IA e segurança para PMEs",
    description:
      "Guias práticos para PMEs e autônomos: quanto custa um site ou um agente telefônico com IA, WhatsApp Business, segurança do site, atendimento ao cliente.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.fr;
  const langues = blogIndexLocales();
  const aSesArticles = langues.includes(locale);
  const url = `${BASE}/${locale}/blog`;

  return {
    // `absolute` : le layout de langue ne fournit pas de gabarit, et le titre
    // porte déjà la marque.
    title: { absolute: copy.title },
    description: copy.description,
    alternates: {
      canonical: aSesArticles ? url : `${BASE}/fr/blog`,
      languages: {
        ...Object.fromEntries(langues.map((l) => [l, `${BASE}/${l}/blog`])),
        "x-default": `${BASE}/fr/blog`,
      },
    },
    robots: aSesArticles ? undefined : { index: false, follow: true },
    openGraph: {
      type: "website",
      url,
      title: copy.title,
      description: copy.description,
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
