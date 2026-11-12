"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeProductsSchema } from "@/components/HomeProductsSchema";

/*
  Le fond du héros : une vraie photo de commerçante au travail.

  Historique : quatre photos Pexels de réunions de bureau défilaient ici ;
  retirées le 12/11 (ni commerçants, ni nos clients). Retour de Valentin le
  même jour : sans image, le héros est « moins cool ». La photo revient, mais
  pertinente — une boulangère derrière son comptoir, le client type d'Aevia.

  Photo : Ekaterina Tyapkina, « woman on counter near breads »
  https://unsplash.com/photos/woman-on-counter-near-breads-b5kN9ClBRNU
  Licence Unsplash (gratuite, usage commercial autorisé, sans attribution
  obligatoire), vérifiée sur la page de la photo le 12/11/2026 — pas une
  photo Unsplash+.

  Servie depuis /public (WebP 2560 et 1280 px, 266 et 84 Ko) : aucun domaine
  d'images tiers dans la CSP. Pas de fondu d'entrée : l'image est là dès le
  premier rendu.

  Le voile : #09090b à 75 % sur toute la photo. Mesuré sur le pixel le PLUS
  clair de la zone de texte, une fois voilé : blanc 9,5:1, zinc-200 7,4:1,
  zinc-300 6,5:1 (≥ 4,5), red-300 4,9:1 (titre, ≥ 3). D'où les couleurs de
  texte du héros, un cran plus claires que sur fond uni.
*/
function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 top-[57px] -z-10 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element -- deux tailles WebP préparées à la main ; next/image les réencoderait */}
      <img
        src="/hero/commercante-boulangerie-2560.webp"
        srcSet="/hero/commercante-boulangerie-1280.webp 1280w, /hero/commercante-boulangerie-2560.webp 2560w"
        sizes="100vw"
        alt=""
        width={2560}
        height={1707}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
      />
      <div className="absolute inset-0 bg-[#09090b]/75" />
      <div className="absolute -top-60 -right-60 w-[1000px] h-[1000px] rounded-full bg-red-700/10 blur-[180px]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#09090b]" />
    </div>
  );
}

/*
  Choisis sur l'intention commerciale, pas sur la date : prix, métier, ville.
  Ce sont les requêtes où une réponse fait venir quelqu'un qui achète.
*/
const SLUGS_EN_AVANT = [
  "creer-site-internet-bourg-en-bresse-ia",
  "combien-coute-agent-telephonique-ia",
  "standard-telephonique-ia-restaurant",
  "combien-coute-site-internet-professionnel-2026",
  "prise-rendez-vous-ia-cabinet-dentaire",
  "audit-securite-site-web",
];
const ARTICLES_EN_AVANT = SLUGS_EN_AVANT
  .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
  .filter((p): p is (typeof BLOG_POSTS)[number] => Boolean(p));

export default function Home() {
  const h = useTranslations("hero");
  const p = useTranslations("products");
  const hw = useTranslations("how");
  const c = useTranslations("cta");
  const b = useTranslations("blog_section");
  const langue = useLocale();

  /*
    Couleurs des boutons : chaque produit garde SA couleur, mais assez sombre
    pour porter du texte blanc. Les dégradés cyan→bleu et vert→sarcelle
    donnaient 2,4:1, le rouge 3,9:1 ; il faut 4,5:1. Les classes sont écrites
    en entier : Tailwind ne voit pas une classe fabriquée par concaténation
    (`${from}/5` ne produisait rien).

    Inbox est en violet #9E398D, la couleur du produit lui-même (variable
    --primary de l'interface Inbox) ; le hub l'habillait en cyan, et le
    visiteur passait d'une couleur à l'autre en cliquant.
  */
  const products = [
    {
      id: "site-web",
      name: p("launch_name"),
      brand: "Aevia Launch",
      tagline: p("launch_tagline"),
      description: p("launch_desc"),
      href: "https://launch.aevia.services",
      status: "live" as const,
      bouton: "bg-red-700 hover:bg-red-800",
      filet: "bg-red-500",
      lavis: "from-red-500/5 to-red-700/5",
      features: [p("launch_f1"), p("launch_f2"), p("launch_f3"), p("launch_f4")],
      preuve: p("launch_f3"),
      cta: p("launch_cta"),
    },
    {
      id: "accueil-client-ia",
      name: p("inbox_name"),
      brand: "Aevia Inbox",
      tagline: p("inbox_tagline"),
      description: p("inbox_desc"),
      href: "https://inbox.aevia.services",
      status: "live" as const,
      bouton: "bg-inbox hover:bg-inbox-dark",
      filet: "bg-inbox",
      lavis: "from-inbox/5 to-inbox/5",
      features: [p("inbox_f1"), p("inbox_f2"), p("inbox_f3"), p("inbox_f4")],
      preuve: p("inbox_f2"),
      cta: p("inbox_cta"),
    },
    {
      id: "audit-securite",
      name: p("security_name"),
      brand: "Aevia Security",
      tagline: p("security_tagline"),
      description: p("security_desc"),
      href: "https://security.aevia.services",
      status: "live" as const,
      bouton: "bg-emerald-700 hover:bg-emerald-800",
      filet: "bg-emerald-500",
      lavis: "from-emerald-500/5 to-teal-500/5",
      features: [p("security_f1"), p("security_f2"), p("security_f3"), p("security_f4")],
      preuve: p("security_f1"),
      cta: p("security_cta"),
    },
  ];

  const steps = [
    { n: "1", title: hw("step1_title"), desc: hw("step1_desc") },
    { n: "2", title: hw("step2_title"), desc: hw("step2_desc") },
    { n: "3", title: hw("step3_title"), desc: hw("step3_desc") },
  ];

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      {/* Desktop gets a full-viewport hero. The height used to come from the
          padding alone, so the section stopped at whatever the copy needed
          (~840px) and the next section showed through on any tall screen.
          `svh` rather than `vh` so collapsing mobile browser chrome cannot make
          it jump; 57px is the fixed header the hero sits under. Mobile keeps
          the padding-driven height — a full-screen hero on a phone pushes every
          proof point below the fold. */}
      <section className="relative px-6 overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-[57px] lg:pb-0 lg:min-h-screen lg:min-h-[100svh] lg:flex lg:items-center">
        <HeroBackdrop />
        <div className="mx-auto max-w-5xl text-center w-full">
          {/* Visible dès le HTML serveur : plus de fondu depuis opacity: 0
              (texte caché pour un robot, rien à lire avant l'hydratation). */}
          <div className="rise-in">
            {/*
              Le credo, avant tout le reste.

              Ce que vend Aevia n'est pas un outil : c'est le temps que le
              client ne passe PAS dessus. Quatre mots le disent mieux qu'un
              paragraphe de bénéfices, et c'est la première chose qu'on lit.

              Le libellé en petit, la phrase en grand — le même ordre que sur
              Launch, pour que les deux sites disent la même chose de la même
              façon.
            */}
            <div className="mb-6 sm:mb-8">
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300 mb-2">
                {h("credoLabel")}
              </span>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white/90">
                {h("credo")}
              </p>
            </div>

            <h1 className="font-display text-[1.875rem] sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-5 sm:mb-6 text-balance">
              {h("title1")}
              <br />
              <span className="text-red-300">{h("title2")}</span>
            </h1>

            <p className="text-zinc-200 text-base sm:text-lg lg:text-xl max-w-[60ch] mx-auto leading-relaxed mb-7 sm:mb-9 text-pretty">
              {h("description")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Un premier pas évident : voir les trois services. Le contact
                  reste là, mais en second — on ne demande pas à quelqu'un de
                  « démarrer un projet » avant qu'il sache ce qu'on fait. */}
              <a
                href="#produits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors"
              >
                {h("cta_primary")}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-500 bg-[#09090b]/60 text-zinc-100 text-sm font-semibold hover:border-zinc-300 hover:text-white transition-colors"
              >
                {h("cta_secondary")}
              </Link>
            </div>

            {/*
              L'index des trois produits — la représentation honnête qui
              remplace les photos : leur nom, leur marque, une preuve tirée de
              leur carte, et leur couleur. Chaque ligne mène à sa carte.
            */}
            <ul className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-px bg-zinc-800/80 border border-zinc-800/80 rounded-2xl overflow-hidden text-left">
              {products.map((product) => (
                <li key={product.id} className="bg-[#0c0c0f]">
                  <a href={`#${product.id}`} className="group relative block h-full p-5 sm:p-6 hover:bg-zinc-900 transition-colors">
                    <span aria-hidden className={`absolute left-0 top-0 h-0.5 w-full ${product.filet}`} />
                    <span className="block font-display text-lg font-bold text-white">{product.name}</span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-0.5">{product.brand}</span>
                    <span className="block text-sm text-zinc-300 mt-3 text-pretty">{product.preuve}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Produits ─────────────────────────────────────────────────────── */}
      <section id="produits" className="relative px-6 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-zinc-950/70" />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle, #f87171 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] rounded-full bg-red-600/6 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight text-balance">
              {p("section_title")}
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto text-pretty">
              {p("section_sub")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {products.map((product) => {
              const isLive = product.status === "live";
              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`group relative flex flex-col h-full p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden scroll-mt-24 transition-[transform,border-color,box-shadow] duration-300
                    ${isLive ? "hover:border-zinc-600 hover:-translate-y-1 hover:shadow-[0_18px_40px_-12px_rgb(0_0_0/0.6)]" : "opacity-80"}`}
                >
                  <span aria-hidden className={`absolute left-0 top-0 h-0.5 w-full ${product.filet}`} />
                  <div className={`absolute inset-0 opacity-0 ${isLive ? "group-hover:opacity-100" : ""} transition-opacity duration-300 bg-gradient-to-br ${product.lavis} pointer-events-none`} />
                  {/*
                    Ce que c'est, en gros ; la marque, en petit ; le problème
                    réglé, juste dessous.

                    Le 05/10 un visiteur demandait le problème en titre plutôt
                    que « AeviaLaunch ». Le 13/10 le retour s'est généralisé —
                    « beaucoup ne comprennent pas » — et la décision a été prise
                    avec Valentin : un nom qui DIT ce que c'est (« Site web »,
                    « Accueil client IA », « Audit sécurité »), la marque en
                    étiquette pour qui revient, et la situation du visiteur
                    comme première phrase lue.
                  */}
                  <div className="mb-4 relative z-10">
                    <h3 className="font-display text-white font-bold text-2xl leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 mt-1 mb-3">
                      {product.brand}
                    </p>
                    <p className="text-zinc-100 font-semibold text-base leading-snug text-balance">
                      {product.tagline}
                    </p>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1 relative z-10">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-7 relative z-10">
                    {product.features.map((feat) => (
                      <li key={feat} className="text-zinc-300 text-sm leading-snug">
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {isLive ? (
                      <>
                        <a href={product.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${product.bouton} text-white text-sm font-semibold transition-colors`}>
                          {product.cta} <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors">
                        {p("notify")}
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comment ça se passe ─────────────────────────────────────────── */}
      {/* Remplace trois blocs retirés le 13/10 : le bandeau de chiffres sans
          contexte (« 3 », « 60s »), le second bloc sur les sites, et « Pourquoi
          Aevia », qui défendait la pile technique (Next.js, PostgreSQL) devant
          des patrons de PME. Après « qu'est-ce que vous faites », la question
          suivante d'un visiteur est « et concrètement, ça se passe comment ». */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight text-balance">
              {hw("title")}
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-pretty">{hw("sub")}</p>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {steps.map((step) => (
              <li key={step.n} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/40">
                <span aria-hidden className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-600/15 text-red-300 text-sm font-bold mb-4">
                  {step.n}
                </span>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      {/*
        Des liens directs vers les articles, depuis la seule page que Google
        visite.

        Mesuré le 02/09 avec l'outil d'inspection : `/fr` est la seule URL du
        Hub réellement indexée — et son dernier passage remonte au 21 juillet.
        Les 29 articles, eux, n'ont **jamais** été explorés. Le chemin existait
        pourtant : accueil → /blog → 27 liens. Mais un lien unique vers un index,
        et des articles à deux sauts de la seule page connue, c'est trop peu
        pour attirer un robot qui ne repasse pas.

        Six liens directs, choisis sur l'intention commerciale — prix, métier,
        ville. Ils ramènent les articles à un seul saut.

        Couleurs : zinc-400 et non zinc-500/600. Mesuré par Lighthouse sur cette
        page, `text-zinc-400` sur ce fond donne 2,48:1 et `text-zinc-400` 3,96:1,
        quand la norme en demande 4,5. Le réflexe zinc-500 est partout dans ce
        dépôt — 33 éléments en échec sur cette seule page — mais ce n'est pas une
        raison d'en ajouter.
      */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">{b("title")}</h2>
            <Link href={`/${langue}/blog`} className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors">
              {b("all")} →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES_EN_AVANT.map((post) => (
              <Link
                key={post.slug}
                href={`/${langue}/blog/${post.slug}`}
                className="block rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition-colors"
              >
                <p className="text-xs uppercase tracking-wider text-zinc-400 mb-2">{post.category}</p>
                <h3 className="text-sm font-semibold text-white leading-snug mb-2">{post.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeFaq />
      <HomeProductsSchema />

      <section className="px-6 py-16 pb-24">
        <div className="mx-auto max-w-5xl">
          <div>
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-3">{c("title")}</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">{c("desc")}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-colors">
                    {c("contact")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer moved to the locale layout (components/SiteFooter) so its legal
          links are permanent on every page (LCEN), not just the homepage. */}
    </div>
  );
}
