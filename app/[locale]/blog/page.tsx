import Link from "next/link";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS, formatDate, localizePost, localesForPost } from "@/lib/blog-posts";
import { habillage, styleRubrique } from "@/lib/blog-habillage";

/*
  L'index du blog, dans la langue de la page.

  Le titre et le chapeau étaient en français EN DUR jusqu'au 02/10 (signalé
  depuis la Colombie) ; le bandeau d'appel en bas l'est resté jusqu'au 20/11.
  Tout l'habillage vient désormais de lib/blog-habillage.ts, partagé avec
  l'article.

  Composant serveur : il était client pour lire la langue dans l'URL, et
  embarquait pour cela tous les articles de toutes les langues dans le
  JavaScript de la page.
*/

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  /*
    Les articles qui existent dans la langue de la page. Depuis le 20/11, ce
    sont tous les articles sauf les trois de référencement local
    (Bourg-en-Bresse, Lyon, Marseille), écrits pour le public français et
    réservés au français par choix.
  */
  const posts = BLOG_POSTS.filter((p) => localesForPost(p).includes(locale)).map((p) =>
    localizePost(p, locale),
  );
  const ui = habillage(locale);

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600/8 blur-[120px]" />
          <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-inbox/5 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 ring-1 ring-red-500/20 text-red-300 text-xs font-medium">
              <BookOpen size={12} />
              Blog Aevia
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-4">
            {ui.titreA}{" "}
            <span className="text-red-400">
              {ui.titreB}
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">{ui.chapeau}</p>
        </div>
      </section>

      {/* ── Articles ───────────────────────────────────────────────────────── */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          {/* Featured — first post */}
          {posts.length > 0 && (
            <Link
              href={`/${locale}/blog/${posts[0].slug}`}
              className="group block mb-6"
            >
              <article className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 sm:p-10 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-300">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-600/5 to-red-800/3 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    {(() => {
                      const style = styleRubrique(posts[0].categoryKey);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
                          <Tag size={10} />
                          {posts[0].category}
                        </span>
                      );
                    })()}
                    <span className="text-sm text-zinc-400">{formatDate(posts[0].date, locale)}</span>
                    <span className="flex items-center gap-1 text-xs text-zinc-400">
                      <Clock size={11} />
                      {posts[0].readingTime} {ui.lecture}
                    </span>
                    <span className="ml-auto hidden sm:inline-flex items-center gap-1 text-xs font-medium text-red-400 bg-red-500/10 ring-1 ring-red-500/20 px-2.5 py-1 rounded-full">
                      {ui.aLaUne}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors leading-tight">
                    {posts[0].title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-6 max-w-[62ch]">
                    {posts[0].excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 group-hover:text-red-300 transition-colors">
                    {ui.lire}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts */}
          {posts.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {posts.slice(1).map((post) => {
                const style = styleRubrique(post.categoryKey);
                return (
                  <Link
                    key={post.slug}
                    href={`/${locale}/blog/${post.slug}`}
                    className="group block"
                  >
                    <article className="relative h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-600 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 flex flex-col">
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-zinc-800/30 to-transparent pointer-events-none" />

                      <div className="relative z-10 flex flex-col flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
                            <Tag size={10} />
                            {post.category}
                          </span>
                        </div>

                        <h2 className="text-lg font-bold text-white mb-2 group-hover:text-red-100 transition-colors leading-snug flex-1">
                          {post.title}
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-5 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/60">
                          <div className="flex items-center gap-3 text-xs text-zinc-400">
                            <span>{formatDate(post.date, locale)}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readingTime}
                            </span>
                          </div>
                          <ArrowRight size={14} className="text-zinc-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">{ui.ctaIndexTitre}</h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">{ui.ctaIndexTexte}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
              >
                {ui.contact}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
