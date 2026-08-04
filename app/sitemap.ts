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
function newestContentDate(): Date {
  const newest = BLOG_POSTS.reduce(
    (latest, post) => (post.date > latest ? post.date : latest),
    '1970-01-01'
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
