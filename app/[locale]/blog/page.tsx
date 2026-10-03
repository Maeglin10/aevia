"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Clock, Tag, BookOpen } from "lucide-react";
import { BLOG_POSTS, formatDate, localizePost, localesForPost } from "@/lib/blog-posts";

/*
  Le titre et le chapeau de cette page étaient en français EN DUR.

  Les articles, eux, étaient bien traduits — d'où un /es/blog qui affichait des
  titres espagnols sous un « Conseils & ressources » français. Un prospect
  hispanophone lit d'abord le haut de la page, et conclut que rien n'est
  traduit. Signalé depuis la Colombie le 02/10.

  `avertissementNonTraduit` sert pour l'allemand et le portugais, où AUCUN
  article n'existe : filtrer donnerait un blog vide, ce qui est pire qu'un blog
  français annoncé comme tel.
*/
const UI: Record<
  string,
  {
    reading: string;
    featured: string;
    read: string;
    titreA: string;
    titreB: string;
    chapeau: string;
    avertissementNonTraduit: string;
  }
> = {
  fr: {
    reading: "de lecture",
    featured: "Article à la une",
    read: "Lire l'article",
    titreA: "Conseils &",
    titreB: "ressources",
    chapeau:
      "Web, sécurité, CRM — des articles pratiques pour aider votre business à grandir sur internet.",
    avertissementNonTraduit: "",
  },
  en: {
    reading: "read",
    featured: "Featured",
    read: "Read article",
    titreA: "Advice &",
    titreB: "resources",
    chapeau:
      "Web, security, CRM — practical articles to help your business grow online.",
    avertissementNonTraduit: "",
  },
  es: {
    reading: "de lectura",
    featured: "Destacado",
    read: "Leer artículo",
    titreA: "Consejos y",
    titreB: "recursos",
    chapeau:
      "Web, seguridad, CRM — artículos prácticos para hacer crecer tu negocio en internet.",
    avertissementNonTraduit: "",
  },
  de: {
    reading: "Lesezeit",
    featured: "Empfohlen",
    read: "Artikel lesen",
    titreA: "Tipps &",
    titreB: "Ressourcen",
    chapeau:
      "Web, Sicherheit, CRM — praktische Artikel, damit Ihr Geschäft online wächst.",
    avertissementNonTraduit:
      "Unser Blog ist noch nicht auf Deutsch verfügbar. Die Artikel erscheinen hier auf Französisch.",
  },
  pt: {
    reading: "de leitura",
    featured: "Em destaque",
    read: "Ler artigo",
    titreA: "Conselhos e",
    titreB: "recursos",
    chapeau:
      "Web, segurança, CRM — artigos práticos para fazer o seu negócio crescer na internet.",
    avertissementNonTraduit:
      "O nosso blogue ainda não está traduzido para português. Os artigos aparecem aqui em francês.",
  },
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
  "Web & Marketing": { bg: "bg-red-500/10", text: "text-red-300", ring: "ring-red-500/20" },
  "Cybersécurité": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
  "CRM & Support": { bg: "bg-cyan-500/10", text: "text-cyan-300", ring: "ring-cyan-500/20" },
};

function getCategoryStyle(category: string) {
  return (
    CATEGORY_COLORS[category] ?? {
      bg: "bg-zinc-500/10",
      text: "text-zinc-300",
      ring: "ring-zinc-500/20",
    }
  );
}

export default function BlogPage() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] ?? "fr";
  /*
    Trois articles sur vingt n'ont pas de version espagnole — ce sont les
    articles de référencement local (Bourg-en-Bresse, Lyon, Marseille), et les
    traduire n'aurait pas de sens. Mais ils apparaissaient dans la liste
    espagnole avec un titre français, et menaient à de la prose française.

    On les retire donc de la liste QUAND la langue a des traductions. Pour
    l'allemand et le portugais, où il n'y en a aucune, on garde tout et on
    l'annonce : un blog vide serait un pire accueil qu'un blog français assumé.
  */
  const traduits = BLOG_POSTS.filter((p) => localesForPost(p).includes(locale));
  const base = traduits.length > 0 ? traduits : BLOG_POSTS;
  const posts = base.map((p) => localizePost(p, locale));
  const ui = UI[locale] ?? UI.fr;

  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-600/8 blur-[120px]" />
          <div className="absolute top-40 -left-32 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px]" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              {ui.titreB}
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">{ui.chapeau}</p>
          {ui.avertissementNonTraduit && (
            <p className="mt-5 inline-block rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm text-amber-200">
              {ui.avertissementNonTraduit}
            </p>
          )}
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
                      const style = getCategoryStyle(posts[0].category);
                      return (
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
                          <Tag size={10} />
                          {posts[0].category}
                        </span>
                      );
                    })()}
                    <span className="text-sm text-zinc-500">{formatDate(posts[0].date, locale)}</span>
                    <span className="flex items-center gap-1 text-xs text-zinc-500">
                      <Clock size={11} />
                      {posts[0].readingTime} {ui.reading}
                    </span>
                    <span className="ml-auto hidden sm:inline-flex items-center gap-1 text-xs font-medium text-red-400 bg-red-500/10 ring-1 ring-red-500/20 px-2.5 py-1 rounded-full">
                      {ui.featured}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors leading-tight">
                    {posts[0].title}
                  </h2>
                  <p className="text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                    {posts[0].excerpt}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 group-hover:text-red-300 transition-colors">
                    {ui.read}
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
                const style = getCategoryStyle(post.category);
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
                        <p className="text-zinc-500 text-sm leading-relaxed mb-5 line-clamp-2">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800/60">
                          <div className="flex items-center gap-3 text-xs text-zinc-500">
                            <span>{formatDate(post.date, locale)}</span>
                            <span className="flex items-center gap-1">
                              <Clock size={10} />
                              {post.readingTime}
                            </span>
                          </div>
                          <ArrowRight size={14} className="text-zinc-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
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
              <h2 className="text-xl font-bold text-white mb-2">
                Besoin d'un coup de main pour votre présence digitale ?
              </h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                Site web, sécurité, gestion client — on peut en parler en 30 minutes.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
              >
                Prendre contact
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
