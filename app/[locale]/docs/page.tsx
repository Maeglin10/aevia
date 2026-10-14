import type { Metadata } from "next";
import Link from "next/link";
import { MessageSquare, Sparkles, Shield, ArrowRight } from "lucide-react";

const BASE = "https://aevia.services";

/*
  Cette page était marquée `"use client"` pour une seule raison : lire la langue
  dans `usePathname()`. Or la langue est déjà dans les paramètres de route, et
  un composant client ne peut pas exporter `generateMetadata` — l'index de la
  documentation partait donc en ligne SANS titre ni description propres,
  héritant de ceux du layout. C'est le doublon de <title> corrigé ailleurs sur
  le Hub, resté ici parce que la directive client masquait le problème.
*/
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  /*
    Contenu en français en dur, dans les cinq langues servies.

    Déclarer des alternates hreflang vers cinq langues ferait promettre à Google
    cinq traductions qui n'existent pas : les cinq URL renvoient le même texte
    français. On désigne donc la version française comme canonique unique, et on
    retire les autres de l'index — le même choix que sur les pages /solutions de
    l'Inbox. `follow: true` : les liens sortants restent suivis.
  */
  const canonique = `${BASE}/fr/docs`;
  return {
    title: "Documentation Aevia — les trois produits de la suite | Aevia",
    description:
      "Ce qu'est Aevia : AeviaInbox pour les messages et les appels, AeviaLaunch pour le site web, AeviaSecurity pour l'audit. Trois produits indépendants pour TPE et PME.",
    alternates: { canonical: canonique },
    ...(locale === "fr" ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title: "Documentation Aevia — les trois produits de la suite | Aevia",
      description:
        "Ce qu'est Aevia : AeviaInbox pour les messages et les appels, AeviaLaunch pour le site web, AeviaSecurity pour l'audit.",
      url: canonique,
      images: ["/og.png"],
    },
  };
}

export default async function DocsOverviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const base = `/${locale}/docs`;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">Documentation</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
        Qu&apos;est-ce qu&apos;Aevia ?
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        Aevia est une suite de trois produits SaaS indépendants, pensés pour les TPE et PME qui
        n&apos;ont pas d&apos;équipe technique dédiée : <strong className="text-white">AeviaLaunch</strong> pour
        obtenir un site web, <strong className="text-white">AeviaInbox</strong> pour ne plus perdre de
        clients dans les messages, et <strong className="text-white">AeviaSecurity</strong> pour savoir où
        en est la sécurité et la performance de son site. Les trois se pilotent séparément — vous pouvez
        utiliser un seul produit sans les deux autres.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          La promesse : ne plus perdre de clients
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Le fil conducteur de la suite est simple : un client qui contacte une entreprise —
          par téléphone, WhatsApp, Instagram, email ou sur le site — doit obtenir une réponse
          rapide, cohérente et disponible même en dehors des heures d&apos;ouverture. Concrètement,
          Aevia met de l&apos;IA à l&apos;endroit où les entreprises perdent le plus de clients par
          manque de temps : la première réponse.
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          C&apos;est le rôle d&apos;AeviaInbox, le produit le plus mature de la suite : router,
          qualifier et répondre aux messages entrants et aux appels téléphoniques via des agents IA
          spécialisés, avec une prise de rendez-vous ou de commande qui va jusqu&apos;au bout
          (agenda, POS) plutôt que de s&apos;arrêter à une réponse générique.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Pour qui ?
        </h2>
        <p className="text-sm leading-relaxed">
          La cible initiale d&apos;Aevia est la <strong className="text-white">restauration</strong> :
          c&apos;est un secteur où le volume d&apos;appels et de messages est élevé, où chaque appel
          manqué est une réservation ou une commande perdue, et où le personnel n&apos;a
          objectivement pas le temps de répondre à tout. Les mêmes besoins (prise de rendez-vous,
          réponses répétitives, disponibilité en dehors des horaires) existent chez les coiffeurs,
          cabinets de soin, artisans et autres entreprises de service — la suite est conçue pour
          s&apos;étendre à ces secteurs au fur et à mesure.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Les trois produits
        </h2>
        <div className="space-y-4">
          <Link
            href={`${base}/inbox`}
            className="group flex gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 transition-colors"
          >
            <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-white">AeviaInbox</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Live</span>
              </div>
              <p className="text-sm text-zinc-500">
                Boîte de réception unifiée (WhatsApp, Instagram, email, webchat) + agent vocal IA au
                téléphone, avec agents spécialisés pour qualifier, vendre, informer et réserver.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </Link>

          <Link
            href={`${base}/launch`}
            className="group flex gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 transition-colors"
          >
            <Sparkles className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-white">AeviaLaunch</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Live</span>
              </div>
              <p className="text-sm text-zinc-500">
                Génération de site web par IA à partir d&apos;un template sectoriel, livré
                sous 48 heures.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </Link>

          <Link
            href={`${base}/security`}
            className="group flex gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/40 hover:border-zinc-600 hover:bg-zinc-900/70 transition-colors"
          >
            <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-white">AeviaSecurity</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-1.5 py-0.5 rounded-full font-medium">Live</span>
              </div>
              <p className="text-sm text-zinc-500">
                Audit instantané de sécurité et de performance d&apos;un site (SSL, DNS, en-têtes,
                Core Web Vitals, SEO, accessibilité) avec rapport généré par IA.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
