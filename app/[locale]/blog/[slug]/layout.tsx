import type { Metadata } from "next";
import { getBlogPost, localizePost, localesForPost } from "@/lib/blog-posts";
import { etiquetteLangue, habillage } from "@/lib/blog-habillage";

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_US", es: "es_ES", de: "de_DE", pt: "pt_BR" };

const BASE = "https://aevia.services";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const rawPost = getBlogPost(slug);
  if (!rawPost) return { title: "Article introuvable" };
  const post = localizePost(rawPost, locale);
  const translated = localesForPost(rawPost);
  const url = `${BASE}/${locale}/blog/${slug}`;
  const languages = {
    ...Object.fromEntries(translated.map((l) => [l, `${BASE}/${l}/blog/${slug}`])),
    "x-default": `${BASE}/fr/blog/${slug}`,
  };

  // Posts are translated into a subset of the five locales. On the others
  // localizePost falls back to French, so /de/blog/x served French prose under
  // a German URL that pointed its canonical at itself — inviting Google to
  // index the same article several times as different-language duplicates.
  // Point those at the French original instead: signals consolidate on one URL
  // and nothing competes with itself. Once a translation exists the locale
  // enters `translated` and gets its own canonical automatically.
  const hasOwnTranslation = translated.includes(locale);
  const canonical = hasOwnTranslation ? url : `${BASE}/fr/blog/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical, languages },
    robots: hasOwnTranslation ? undefined : { index: false, follow: true },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      // La langue de ce qui est affiché : un article réservé au public
      // français reste `fr_FR` même ouvert sous /es.
      locale: OG_LOCALE[hasOwnTranslation ? locale : "fr"] ?? "fr_FR",
      siteName: "Aevia",
      publishedTime: post.date,
      authors: ["Aevia"],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function ArticleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const rawPost = getBlogPost(slug);
  const post = rawPost ? localizePost(rawPost, locale) : undefined;
  const url = `${BASE}/${locale}/blog/${slug}`;

  const graph: object[] = [];
  if (post) {
    graph.push({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.date,
      articleSection: post.category,
      // La langue du texte rendu, en étiquette BCP 47 (pt-BR). Un article
      // réservé au français, ouvert sous /de, est en français.
      inLanguage: etiquetteLangue(localesForPost(rawPost!).includes(locale) ? locale : "fr"),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "Aevia", url: BASE },
      publisher: {
        "@type": "Organization",
        name: "Aevia",
        url: BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/icon.png` },
      },
      image: `${BASE}/og.png`,
    });

    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: habillage(locale).accueil, item: `${BASE}/${locale}` },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/${locale}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    });

    if (post.faq && post.faq.length > 0) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: post.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    }
  }

  const jsonLd = graph.length > 0 ? { "@context": "https://schema.org", "@graph": graph } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
