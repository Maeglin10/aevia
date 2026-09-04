import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { VS_PAGES } from '@/lib/vs-content'
import { BLOG_POSTS, localesForPost } from '@/lib/blog-posts'

const BASE = 'https://aevia.services'

/**
 * `lastmod` has to mean something or it means nothing.
 *
 * Every non-article URL used to report `new Date()`, so each deploy told Google
 * the homepage, every comparison page and the blog index had all changed that
 * day — even when the deploy only touched a stylesheet. A sitemap that claims
 * everything changed every day trains a crawler to stop reading the field, and
 * we lose the one lever we have for saying "this page is genuinely new".
 *
 * Dates now come from content. The newest article stands in for pages whose
 * content has no date of its own: publishing is what actually changes the site,
 * and it moves the date exactly when something real happened.
 */
/*
  Les changements de structure comptent aussi.

  La règle ci-dessus fait dériver `lastmod` de la date du dernier article, ce
  qui est juste pour un site de contenu — et volontairement immunisé contre le
  « tout a changé aujourd'hui » que produit `new Date()`.

  Il lui manquait une entrée : une page peut changer pour de bon sans qu'aucun
  article ne paraisse. Les 1er et 3 septembre, l'accueil a reçu une section
  d'articles en avant, le pied de page trois nouveaux liens, et sept pages ont
  vu leur canonique corrigée — pendant que le plan de site continuait
  d'annoncer à Google que rien n'avait bougé depuis le 4 août.

  Cette date se met à jour **à la main**, et c'est le but : elle ne doit avancer
  que lorsqu'un changement mérite qu'un robot revienne. La bouger à chaque
  déploiement nous ramènerait au défaut que le commentaire ci-dessus décrit.
*/
const DERNIERE_REFONTE = '2026-09-03'

function newestContentDate(): Date {
  const newest = BLOG_POSTS.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    DERNIERE_REFONTE
  )
  return new Date(newest)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const contentDate = newestContentDate()
  const localeHomes: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${BASE}/${locale}`,
    lastModified: contentDate,
    changeFrequency: 'weekly',
    priority: locale === routing.defaultLocale ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE}/${l}`])),
    },
  }))

  // /[locale]/vs/[competitor] comparison pages — only generated for locales
  // that actually have copy in lib/vs-content.ts (falls back to fr elsewhere,
  // but we only want indexable URLs for locales with real translated content).
  const vsPages: MetadataRoute.Sitemap = VS_PAGES.flatMap((entry) => {
    const availableLocales = Object.keys(entry.copy) as Array<keyof typeof entry.copy>
    return availableLocales.map((locale) => ({
      url: `${BASE}/${locale}/vs/${entry.slug}`,
      // Comparison copy lives in vs-content.ts and changes rarely; tie it to the
      // content date rather than the build clock.
      lastModified: contentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
      alternates: {
        languages: Object.fromEntries(
          availableLocales.map((l) => [l, `${BASE}/${l}/vs/${entry.slug}`])
        ),
      },
    }))
  })

  // Blog index per locale
  const blogIndex: MetadataRoute.Sitemap = routing.locales.map((locale) => ({
    url: `${BASE}/${locale}/blog`,
    // The index genuinely changes when a post ships — that is exactly contentDate.
    lastModified: contentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Blog posts — one URL per available locale, with hreflang alternates
  // between the translated versions (French is always available).
  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.flatMap((post) => {
    const locales = localesForPost(post)
    const languages = Object.fromEntries(
      locales.map((l) => [l, `${BASE}/${l}/blog/${post.slug}`])
    )
    return locales.map((locale) => ({
      url: `${BASE}/${locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: locale === 'fr' ? 0.7 : 0.65,
      alternates: { languages },
    }))
  })

  return [
    ...localeHomes,
    ...blogIndex,
    ...blogPosts,
    ...vsPages,
    {
      url: `${BASE}/contact`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
