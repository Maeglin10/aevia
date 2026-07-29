"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Layout } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { GithubIcon } from "@/components/GithubIcon";

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
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 1, scale: reduce ? 1.02 : [1.08, 1.01] }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.4, ease: [0.65, 0, 0.35, 1] },
            scale: { duration: reduce ? 0 : 15, ease: "linear" },
          }}
          className="absolute inset-0"
        >
          <img src={shot.src} alt="" className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* Scrims first, so the headline never has to fight the photograph,
          then the existing crimson signature on top of them. */}
      <div className="absolute inset-0 bg-[#09090b]/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/35 via-[#09090b]/45 to-[#09090b]" />
      <div className="absolute inset-x-0 top-0 h-[75%] bg-gradient-to-b from-red-900/35 via-red-900/12 to-transparent" />
      <div className="absolute -top-60 -right-60 w-[1000px] h-[1000px] rounded-full bg-red-700/18 blur-[180px]" />
      <div className="absolute top-20 -left-40 w-[700px] h-[700px] rounded-full bg-rose-800/14 blur-[140px]" />
    </div>
  );
}


export default function Home() {
  const h = useTranslations("hero");
  const st = useTranslations("stats");
  const p = useTranslations("products");
  const ts = useTranslations("templates_section");
  const w = useTranslations("why");
  const c = useTranslations("cta");
  const f = useTranslations("footer");

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
      <section className="relative pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 px-6 overflow-hidden">
        <HeroBackdrop />
        <div className="mx-auto max-w-5xl text-center">
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

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Aevia</span>
              <span>· {f("tagline")}</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://launch.aevia.services" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">{f("templates")}</a>
              <a href="https://security.aevia.services" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">{f("security")}</a>
              <Link href="/docs" className="hover:text-zinc-300 transition-colors">{f("docs")}</Link>
              <Link href="/contact" className="hover:text-zinc-300 transition-colors">{f("contact")}</Link>
              <a href="https://linkedin.com/in/valentin-milliand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4 hover:text-zinc-300 transition-colors" />
              </a>
              <a href="https://github.com/Maeglin10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <GithubIcon className="w-4 h-4 hover:text-zinc-300 transition-colors" />
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <span>{f("copyright")}</span>
            <div className="flex items-center gap-4">
              <Link href="/legal/privacy" className="hover:text-zinc-400 transition-colors">{f("privacy")}</Link>
              <Link href="/legal/terms" className="hover:text-zinc-400 transition-colors">{f("terms")}</Link>
              <Link href="/legal/cookies" className="hover:text-zinc-400 transition-colors">{f("cookies")}</Link>
              <Link href="/legal/mentions" className="hover:text-zinc-400 transition-colors">{f("mentions")}</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
