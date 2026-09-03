"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { ArrowRight, ExternalLink, Layout } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";

/* The hero backdrop: a slow rotation of photographs behind the existing
   composition. Nothing about the headline or the CTAs moves — the imagery is
   what changes, the way the template heroes do it: a cross-fade with a very
   slow scale drift underneath, on a 7s beat. */
const HERO_SHOTS = [
  { src: "https://images.pexels.com/photos/8190827/pexels-photo-8190827.jpeg?auto=compress&cs=tinysrgb&w=2400", alt: "Réunion en entreprise" },
  { src: "https://images.pexels.com/photos/7792748/pexels-photo-7792748.jpeg?auto=compress&cs=tinysrgb&w=2400", alt: "Équipe au travail" },
  { src: "https://images.pexels.com/photos/8112160/pexels-photo-8112160.jpeg?auto=compress&cs=tinysrgb&w=2400", alt: "Rendez-vous professionnel" },
  { src: "https://images.pexels.com/photos/36713414/pexels-photo-36713414.jpeg?auto=compress&cs=tinysrgb&w=2400", alt: "Dirigeante au travail" },
];

function HeroBackdrop() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setI((n) => (n + 1) % HERO_SHOTS.length), 7000);
    return () => clearTimeout(t);
  }, [i, reduce]);

  const shot = HERO_SHOTS[i];

  return (
    // The header is fixed, 57px tall and only 80% opaque, so a backdrop starting
    // at y=0 put the top of the photograph *behind* the navigation. Start it at
    // the header's bottom edge instead: the strip behind the header stays the
    // page's own ink, and the photograph begins on a clean line.
    <div aria-hidden className="absolute inset-x-0 bottom-0 top-[57px] -z-10 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={shot.src}
          // The drift used to start at 1.12 and sit at 1.08, i.e. the photo was
          // permanently zoomed 8% past `cover` — on top of the crop `cover`
          // already applies, that is what cut the tops of people's heads off.
          // Settle at 1.0 so the visible frame is exactly what `cover` gives.
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: reduce ? 1 : [1.04, 1] }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
            scale: { duration: reduce ? 0 : 15, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          {/* Anchor the crop near the top. These are photographs of people, and
              `cover` on a container wider than the source (16:9-ish vs 3:2)
              trims top and bottom equally when centred — which lands squarely
              on faces. Biasing to 25% spends the whole trim on the floor. */}
          <img src={shot.src} alt="" className="w-full h-full object-cover object-[50%_25%]" />
        </motion.div>
      </AnimatePresence>

      {/* Neutral scrims only, so the headline stays readable without repainting
          the photograph. A red wash used to cover the top 75% at /35 opacity and
          it tinted everything — skin, walls, the whole office read maroon rather
          than like a room someone actually works in. The crimson signature stays
          as ambient light in the corners, at roughly half its former strength:
          enough to feel like the brand, not enough to colour the subject. */}
      <div className="absolute inset-0 bg-[#09090b]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/35 via-[#09090b]/45 to-[#09090b]" />
      <div className="absolute -top-60 -right-60 w-[1000px] h-[1000px] rounded-full bg-red-700/9 blur-[180px]" />
      <div className="absolute top-20 -left-40 w-[700px] h-[700px] rounded-full bg-rose-800/7 blur-[140px]" />
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
  const st = useTranslations("stats");
  const p = useTranslations("products");
  const ts = useTranslations("templates_section");
  const w = useTranslations("why");
  const c = useTranslations("cta");
  const b = useTranslations("blog_section");
  const langue = useLocale();

  const products = [
    {
      name: "AeviaLaunch",
      tagline: p("launch_tagline"),
      description: p("launch_desc"),
      href: "https://launch.aevia.services",
      status: "live" as const,
      accentFrom: "from-red-500",
      accentTo: "to-red-700",
      glow: "group-hover:shadow-red-500/25",
      features: [p("launch_f1"), p("launch_f2"), p("launch_f3"), p("launch_f4")],
      cta: p("launch_cta"),
      ctaSecondary: null,
      ctaSecondaryHref: null,
    },
    {
      name: "AeviaSecurity",
      tagline: p("security_tagline"),
      description: p("security_desc"),
      href: "https://security.aevia.services",
      status: "live" as const,
      accentFrom: "from-emerald-500",
      accentTo: "to-teal-500",
      glow: "group-hover:shadow-emerald-500/25",
      features: [p("security_f1"), p("security_f2"), p("security_f3"), p("security_f4")],
      cta: p("security_cta"),
      ctaSecondary: null,
      ctaSecondaryHref: null,
    },
    {
      name: "AeviaInbox",
      tagline: p("inbox_tagline"),
      description: p("inbox_desc"),
      href: "https://inbox.aevia.services",
      status: "live" as const,
      accentFrom: "from-cyan-500",
      accentTo: "to-blue-500",
      glow: "group-hover:shadow-cyan-500/25",
      features: [p("inbox_f1"), p("inbox_f2"), p("inbox_f3"), p("inbox_f4")],
      cta: p("inbox_cta"),
      ctaSecondary: null,
      ctaSecondaryHref: null,
    },
  ];

  const templates = [
    { label: "Landing Page", href: "https://launch.aevia.services/templates/impact-05", color: "from-red-500/20 to-red-700/10", dot: "bg-red-400", desc: ts("landing_desc") },
    { label: "E-Commerce", href: "https://launch.aevia.services/templates/impact-47", color: "from-amber-500/20 to-orange-500/10", dot: "bg-amber-400", desc: ts("ecom_desc") },
    { label: "Site Vitrine", href: "https://launch.aevia.services/templates/impact-33", color: "from-emerald-500/20 to-teal-500/10", dot: "bg-emerald-400", desc: ts("vitrine_desc") },
  ];

  const whyItems = [
    { title: w("fast_title"), desc: w("fast_desc"), color: "from-amber-500/20 to-orange-500/10" },
    { title: w("reliable_title"), desc: w("reliable_desc"), color: "from-red-500/20 to-red-700/10" },
    { title: w("simple_title"), desc: w("simple_desc"), color: "from-emerald-500/20 to-teal-500/10" },
  ];

  return (
    <div className="min-h-screen" id="main-content">

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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-[1.875rem] sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-5 sm:mb-6">
              {h("title1")}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-400 to-red-500">
                {h("title2")}
              </span>
            </h1>

            <p className="text-zinc-300 text-[0.9375rem] sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-7 sm:mb-9">
              {h("description")}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors"
              >
                {h("cta_primary")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#produits"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors"
              >
                {h("cta_secondary")}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {[
              { value: st("delivery_value"), label: st("delivery_label") },
              { value: st("audit_value"), label: st("audit_label") },
              { value: st("channels_value"), label: st("channels_label") },
              { value: st("ai_value"), label: st("ai_label") },
            ].map(({ value, label }) => (
              <div key={label} className="text-center p-4 rounded-xl border border-zinc-800/60 bg-zinc-900/30">
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-zinc-500 font-medium">{label}</div>
              </div>
            ))}
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
              {p("section_title")}
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              {p("section_sub")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {products.map((product, i) => {
              const isLive = product.status === "live";
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`group relative flex flex-col h-full p-7 rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm overflow-hidden transition-all duration-300
                    ${isLive ? `hover:border-zinc-600 hover:-translate-y-1.5 hover:shadow-2xl ${product.glow}` : "opacity-80"}`}
                >
                  <div className={`absolute inset-0 opacity-0 ${isLive ? "group-hover:opacity-100" : ""} transition-opacity duration-300 bg-gradient-to-br ${product.accentFrom}/5 ${product.accentTo}/5 pointer-events-none`} />
                  <div className="mb-4 relative z-10">
                    <h3 className="text-white font-bold text-xl mb-1">{product.name}</h3>
                    <p className={`text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r ${product.accentFrom} ${product.accentTo}`}>
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
                        <a href={product.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${product.accentFrom} ${product.accentTo} text-white text-sm font-semibold hover:opacity-90 transition-opacity`}>
                          {product.cta} <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                        {product.ctaSecondary && product.ctaSecondaryHref && (
                          <a href={product.ctaSecondaryHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors">
                            <ExternalLink className="w-3.5 h-3.5" /> {product.ctaSecondary}
                          </a>
                        )}
                      </>
                    ) : (
                      <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-sm font-medium hover:border-zinc-500 hover:text-white transition-colors">
                        {p("notify")}
                      </Link>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Templates aperçu ─────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 ring-1 ring-red-500/20 text-red-300 text-xs font-medium mb-5 w-fit">
                  <Layout className="w-3 h-3" />
                  {ts("badge")}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                  {ts("title")}
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {ts("desc")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="https://launch.aevia.services" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 hover:opacity-90 text-white text-sm font-semibold transition-opacity">
                    {ts("cta1")} <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm font-semibold hover:border-zinc-500 hover:text-white transition-colors">
                    {ts("cta2")}
                  </Link>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3 bg-zinc-950/40 border-l border-zinc-800">
                {templates.map((t) => (
                  <a key={t.label} href={t.href} target="_blank" rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 rounded-xl border border-zinc-800 bg-gradient-to-r ${t.color} hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${t.dot} shrink-0`} />
                      <div>
                        <p className="text-white text-sm font-semibold">{t.label}</p>
                        <p className="text-zinc-500 text-xs">{t.desc}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors text-xs">
                      {ts("demo")} <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
                <div className="mt-1 p-4 rounded-xl border border-dashed border-zinc-700 text-center">
                  <p className="text-zinc-500 text-xs mb-1.5">{ts("custom_q")}</p>
                  <a href="https://launch.aevia.services/themes" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition-colors">
                    {ts("custom_link")} <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi Aevia ────────────────────────────────────────────────── */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              {w("title")}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {whyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br ${item.color}`}
              >
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
        page, `text-zinc-600` sur ce fond donne 2,48:1 et `text-zinc-500` 3,96:1,
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

      <section className="px-6 py-16 pb-24">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-900/50 p-10 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-red-800/5 rounded-2xl" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-white mb-3">{c("title")}</h2>
                <p className="text-zinc-400 max-w-md mx-auto mb-8">{c("desc")}</p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-semibold transition-colors">
                    {c("contact")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer moved to the locale layout (components/SiteFooter) so its legal
          links are permanent on every page (LCEN), not just the homepage. */}
    </div>
  );
}
