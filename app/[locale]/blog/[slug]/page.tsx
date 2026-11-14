"use client";

import { use } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Clock, Tag, Calendar, ArrowRight } from "lucide-react";
import {
  BLOG_POSTS,
  getBlogPost,
  formatDate,
  localizePost,
  localesForPost,
} from "@/lib/blog-posts";
import { notFound } from "next/navigation";

const CATEGORY_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
  "Web & Marketing": { bg: "bg-red-500/10", text: "text-red-300", ring: "ring-red-500/20" },
  "Cybersécurité": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
  "CRM & Support": { bg: "bg-inbox/10", text: "text-inbox-light", ring: "ring-inbox/30" },
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

/**
 * Render a Markdown-like content string into React elements.
 * Supports: ## h2, ### h3, **bold**, `code`, [liens](url), --- (hr),
 * - list items, 1. numbered items, | tableaux |, and paragraphs.
 *
 * ## Liens, listes numérotées et tableaux : ajoutés le 13/11
 *
 * Relevé en production : le moteur ne connaissait ni `[texte](url)`, ni
 * `1. `, ni les tableaux. Les 23 liens écrits dans les articles — dont TOUS
 * les « 👉 Découvrir Aevia Inbox » de fin d'article — s'affichaient en texte
 * brut, crochets et URL compris : aucun article ne liait réellement un
 * produit. Les 85 lignes de tableaux comparatifs (« | Critère | Secrétariat
 * | Agent vocal IA | ») sortaient en paragraphes de barres verticales, et les
 * étapes numérotées en paragraphes. Le contenu était juste ; c'est son rendu
 * qui le rendait illisible pour un lecteur et invisible comme lien pour un
 * robot.
 */
const LIEN = /\[([^\]]+)\]\(((?:https?:\/\/|\/)[^)\s"]+)\)/g;

function cellules(ligne: string): string[] {
  return ligne.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let listBuffer: string[] = [];
  let olBuffer: string[] = [];
  let tableBuffer: string[] = [];
  let key = 0;

  function flushList() {
    if (listBuffer.length > 0) {
      elements.push(
        <ul key={key++} className="my-5 space-y-2 pl-0 list-none">
          {listBuffer.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-zinc-300 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      );
      listBuffer = [];
    }
    if (olBuffer.length > 0) {
      elements.push(
        <ol key={key++} className="my-5 space-y-2 pl-6 list-decimal marker:text-red-300 marker:font-semibold">
          {olBuffer.map((item, i) => (
            <li key={i} className="pl-1 text-zinc-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </ol>
      );
      olBuffer = [];
    }
    if (tableBuffer.length > 0) {
      const lignes = tableBuffer.map(cellules);
      tableBuffer = [];
      // La ligne de séparation `|---|---|` ne contient que des tirets.
      const separation = lignes.findIndex((l) => l.every((c) => /^:?-{3,}:?$/.test(c)));
      const entete = separation === 1 ? lignes[0] : null;
      const corps = separation >= 0 ? lignes.filter((_, i) => i !== separation && !(entete && i === 0)) : lignes;
      elements.push(
        <div key={key++} className="my-6 overflow-x-auto rounded-xl border border-zinc-800">
          <table className="w-full text-left text-sm">
            {entete && (
              <thead className="bg-zinc-900/80 text-white">
                <tr>
                  {entete.map((c, i) => (
                    <th key={i} scope="col" className="px-4 py-3 font-semibold" dangerouslySetInnerHTML={{ __html: inlineFormat(c) }} />
                  ))}
                </tr>
              </thead>
            )}
            <tbody className="divide-y divide-zinc-800">
              {corps.map((ligne, r) => (
                <tr key={r}>
                  {ligne.map((c, i) => (
                    <td key={i} className="px-4 py-3 align-top text-zinc-300" dangerouslySetInnerHTML={{ __html: inlineFormat(c) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }

  function inlineFormat(text: string): string {
    return text
      .replace(LIEN, '<a href="$2" class="text-red-300 underline underline-offset-2 hover:text-red-200">$1</a>')
      .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
      .replace(/`(.+?)`/g, '<code class="px-1.5 py-0.5 rounded bg-zinc-800 text-red-300 text-[0.875em] font-mono">$1</code>');
  }

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Un seul tampon est rempli à la fois : changer de type de bloc vide les
    // autres d'abord, dans l'ordre du texte.
    if (line.startsWith("|")) {
      if (listBuffer.length || olBuffer.length) flushList();
      tableBuffer.push(line);
      continue;
    }
    if (tableBuffer.length) flushList();

    const numero = /^\d+\.\s+(.*)$/.exec(line);
    if (numero) {
      if (listBuffer.length) flushList();
      olBuffer.push(numero[1]);
      continue;
    }
    if (line.startsWith("- ") && olBuffer.length) flushList();

    if (line.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-white mt-8 mb-3 leading-snug">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="text-2xl font-bold text-white mt-12 mb-4 leading-snug">
          {line.slice(3)}
        </h2>
      );
    } else if (line === "---") {
      flushList();
      elements.push(<hr key={key++} className="my-10 border-zinc-800" />);
    } else if (line.startsWith("- ")) {
      listBuffer.push(line.slice(2));
    } else if (line.trim() === "") {
      flushList();
      // blank line — no element
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="text-zinc-400 leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
        />
      );
    }
  }

  flushList();
  return elements;
}

/*
  L'habillage de l'article, traduit.

  Le titre et le corps sont bien traduits par `localizePost`, mais deux
  chaînes étaient écrites en dur en français : une page anglaise affichait
  « Retour au blog » et « 6 min de lecture » autour d'un texte anglais. Pour un
  lecteur c'est bâclé ; pour un moteur, c'est un signal de page à moitié
  traduite sur une URL qui se déclare `en`.

  Mêmes libellés que la table `UI` de la page d'index du blog.
*/
const HABILLAGE: Record<
  string,
  { retour: string; lecture: string; pasTraduit: string; versionFr: string }
> = {
  fr: { retour: "Retour au blog", lecture: "de lecture", pasTraduit: "", versionFr: "" },
  en: {
    retour: "Back to the blog",
    lecture: "read",
    pasTraduit: "This article is not translated yet — it is shown here in French.",
    versionFr: "Read the French original",
  },
  es: {
    retour: "Volver al blog",
    lecture: "de lectura",
    pasTraduit: "Este artículo aún no está traducido — aquí se muestra en francés.",
    versionFr: "Leer el original en francés",
  },
  de: {
    retour: "Zurück zum Blog",
    lecture: "Lesezeit",
    pasTraduit: "Dieser Artikel ist noch nicht übersetzt — er erscheint hier auf Französisch.",
    versionFr: "Das französische Original lesen",
  },
  pt: {
    retour: "Voltar ao blog",
    lecture: "de leitura",
    pasTraduit: "Este artigo ainda não está traduzido — aparece aqui em francês.",
    versionFr: "Ler o original em francês",
  },
};

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const resolvedParams = use(params);
  const pathname = usePathname();
  const locale = resolvedParams.locale ?? pathname.split("/")[1] ?? "fr";
  const rawPost = getBlogPost(resolvedParams.slug);

  if (!rawPost) notFound();

  const post = localizePost(rawPost, locale);
  /*
    `localizePost` retombe en SILENCE sur le français quand la traduction
    manque. Côté référencement c'est déjà traité — le layout met `noindex` et
    une canonique vers l'original. Côté lecteur, non : un visiteur
    hispanophone arrivait sur de la prose française sans un mot d'explication.
    Signalé depuis la Colombie le 02/10.

    On le dit, et on offre le lien vers l'original. Dès qu'une traduction
    existe, l'avertissement disparaît tout seul.
  */
  const estTraduit = localesForPost(rawPost).includes(locale);
  const style = getCategoryStyle(post.category);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .slice(0, 2)
    .map((p) => localizePost(p, locale));

  return (
    <div className="min-h-screen">
      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="relative pt-28 pb-12 px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-red-600/8 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-3xl">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-300 transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            {(HABILLAGE[locale] ?? HABILLAGE.fr).retour}
          </Link>

          {!estTraduit && (HABILLAGE[locale] ?? HABILLAGE.fr).pasTraduit && (
            <div className="mb-8 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
              {(HABILLAGE[locale] ?? HABILLAGE.fr).pasTraduit}{" "}
              <Link href={`/fr/blog/${post.slug}`} className="underline hover:text-amber-100">
                {(HABILLAGE[locale] ?? HABILLAGE.fr).versionFr}
              </Link>
            </div>
          )}

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ring-1 ${style.bg} ${style.text} ${style.ring}`}>
              <Tag size={10} />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Calendar size={11} />
              {formatDate(post.date, locale)}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-zinc-400">
              <Clock size={11} />
              {post.readingTime} {(HABILLAGE[locale] ?? HABILLAGE.fr).lecture}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-red-500/40 pl-4">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="px-6">
        <div className="mx-auto max-w-3xl border-t border-zinc-800/60" />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <article className="px-6 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="prose-custom max-w-[62ch]">
            {renderContent(post.content)}
          </div>
        </div>
      </article>

      {/* ── Related posts ─────────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <div className="border-t border-zinc-800/60 pt-12">
              <h2 className="text-lg font-bold text-white mb-6">Continuer à lire</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((related) => {
                  const rs = getCategoryStyle(related.category);
                  return (
                    <Link
                      key={related.slug}
                      href={`/${locale}/blog/${related.slug}`}
                      className="group block"
                    >
                      <div className="h-full p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-900/60 transition-all duration-200 flex flex-col gap-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium ring-1 w-fit ${rs.bg} ${rs.text} ${rs.ring}`}>
                          {related.category}
                        </span>
                        <h3 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors leading-snug">
                          {related.title}
                        </h3>
                        <div className="flex items-center justify-between mt-auto pt-2">
                          <span className="flex items-center gap-1 text-xs text-zinc-400">
                            <Clock size={10} />
                            {related.readingTime}
                          </span>
                          <ArrowRight size={13} className="text-zinc-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-2xl" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-2">
                Prêt à passer à l&apos;action ?
              </h2>
              <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                Site web, audit sécurité ou gestion client — parlons de votre projet en 30 minutes.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
                >
                  Prendre contact
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors"
                >
                  Voir tous les articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
