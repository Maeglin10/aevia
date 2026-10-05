"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { GithubIcon } from "@/components/GithubIcon";

/**
 * Shared site footer. Rendered from the locale layout so the legal links
 * (privacy / terms / cookies / mentions) and the cookie-consent reopen control
 * are permanently reachable from EVERY page — the LCEN requires permanent,
 * direct access to the legal notices, which a homepage-only footer did not meet.
 *
 * ## Pourquoi `flex-wrap` partout, et pourquoi c'est le vrai correctif
 *
 * Les trois rangées étaient en `flex` SANS `flex-wrap`. Sept éléments et
 * `gap-6` sur un écran de 390 px débordent du conteneur des deux côtés à la
 * fois : signalé le 05/10, le « T » de Template coupé à gauche et l'icône
 * GitHub coupée à droite. Un `flex` qui ne peut pas revenir à la ligne ne
 * rétrécit pas, il sort du cadre — et comme le parent est centré, il sort
 * symétriquement.
 *
 * Tout ce qui est une liste de liens revient donc à la ligne. C'est ce qui
 * garantit que rien ne sera JAMAIS coupé, quelle que soit la largeur ou la
 * longueur des traductions — l'allemand est systématiquement plus long que le
 * français, et c'est lui qui casse les mises en page calées au pixel.
 *
 * ## Les trois liens produit pointent vers les pages PROFONDES
 *
 * Et pas vers les accueils, même si les libellés sont courts. Mesuré dans
 * Search Console le 02/09 : sur 38 impressions en 90 jours, 36 vont à
 * aevia.services. C'est le seul domaine que Google connaisse, et il ne pointait
 * que vers les accueils des produits — jamais vers les pages publiées, qui
 * n'avaient donc aucun lien entrant depuis l'endroit qui compte. Ces liens sont
 * sur chaque page du Hub : ils servent la découverte, puis font circuler
 * l'autorité vers des pages neuves qui n'en ont aucune.
 *
 * ## « Politique de cookies » et « Gérer les cookies » ne sont pas un doublon
 *
 * Le premier est la PAGE qui dit quels cookies existent et pourquoi ; le second
 * est le CONTRÔLE qui rouvre la bannière pour retirer son consentement. Le RGPD
 * exige les deux, et ils s'appelaient tous les deux « Cookies », ce qui donnait
 * l'impression d'une répétition. Renommés pour que la différence se lise.
 */
export function SiteFooter() {
  const f = useTranslations("footer");

  const produits = [
    { href: "https://launch.aevia.services/themes/modeles", texte: f("templateShort") },
    { href: "https://security.aevia.services/guides", texte: f("securityDns") },
    { href: "https://inbox.aevia.services/fr/solutions", texte: f("inboxSupport") },
  ];

  const juridique = [
    { href: "/legal/privacy", texte: f("privacy") },
    { href: "/legal/terms", texte: f("terms") },
    { href: "/legal/cookies", texte: f("cookiesPolicy") },
    { href: "/legal/mentions", texte: f("mentions") },
  ];

  return (
    <footer className="border-t border-zinc-800 px-5 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-5 sm:gap-6">
        {/* Marque et réseaux — la seule rangée qui tient sur une ligne partout. */}
        <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-zinc-400">
            <span className="font-semibold text-white">Aevia</span>
            <span className="mx-1.5 text-zinc-600">·</span>
            {f("tagline")}
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <Link href="/blog" className="text-sm transition-colors hover:text-white">
              {f("blog")}
            </Link>
            <Link href="/contact" className="text-sm transition-colors hover:text-white">
              {f("contact")}
            </Link>
            <a
              href="https://linkedin.com/in/valentin-milliand"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Maeglin10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/*
          Produits puis juridique, dans un seul bloc qui revient à la ligne.

          Les deux familles sont séparées par un point médian plutôt que par un
          intertitre : un libellé « Ressources » prenait une ligne entière pour
          dire ce que les liens disent déjà, et sur un téléphone chaque ligne
          compte. Le séparateur disparaît sous `sm`, où les liens se répartissent
          déjà sur plusieurs lignes et où il n'aurait plus rien à séparer.
        */}
        <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 border-t border-zinc-800/60 pt-5 text-xs text-zinc-400">
          {produits.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener"
              className="transition-colors hover:text-white"
            >
              {l.texte}
            </a>
          ))}

          <span aria-hidden className="hidden text-zinc-700 sm:inline">
            ·
          </span>

          {juridique.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.texte}
            </Link>
          ))}

          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("aevia-consent-reopen"))}
            className="cursor-pointer transition-colors hover:text-white"
          >
            {f("manageCookies")}
          </button>
        </div>

        <p className="text-center text-xs text-zinc-500">{f("copyright")}</p>
      </div>
    </footer>
  );
}
