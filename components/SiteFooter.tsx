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
 */
export function SiteFooter() {
  const f = useTranslations("footer");
  return (
    <footer className="border-t border-zinc-800 px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white">Aevia</span>
            <span>· {f("tagline")}</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://launch.aevia.services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{f("templates")}</a>
            <a href="https://security.aevia.services" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{f("security")}</a>
            <Link href="/blog" className="hover:text-white transition-colors">{f("blog")}</Link>
            <Link href="/docs" className="hover:text-white transition-colors">{f("docs")}</Link>
            <Link href="/contact" className="hover:text-white transition-colors">{f("contact")}</Link>
            <a href="https://linkedin.com/in/valentin-milliand" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4 hover:text-white transition-colors" />
            </a>
            <a href="https://github.com/Maeglin10" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubIcon className="w-4 h-4 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
        {/*
          Les moyeux de contenu des trois produits.

          Mesuré dans Search Console le 02/09 : sur 38 impressions en 90 jours,
          36 vont à aevia.services. C'est le domaine que Google connaît. Or il
          ne pointait que vers les accueils des produits — jamais vers les 356
          pages publiées cette semaine, qui n'avaient donc aucun lien entrant
          depuis le seul endroit qui compte.

          Ces trois liens sont sur chaque page du Hub. Ils servent d'abord à la
          découverte, ensuite à faire circuler l'autorité vers des pages neuves
          qui n'en ont aucune.
        */}
        <div className="border-t border-zinc-800/60 pt-4">
          <p className="text-xs text-zinc-400 mb-2">{f("resourcesLabel")}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-zinc-400">
            <a
              href="https://launch.aevia.services/themes/modeles"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              {f("resourcesTemplates")}
            </a>
            <a
              href="https://security.aevia.services/guides"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              {f("resourcesGuides")}
            </a>
            <a
              href="https://inbox.aevia.services/fr/solutions"
              target="_blank"
              rel="noopener"
              className="hover:text-white transition-colors"
            >
              {f("resourcesSolutions")}
            </a>
          </div>
        </div>
        <div className="border-t border-zinc-800/60 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
          <span>{f("copyright")}</span>
          <div className="flex items-center gap-4">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">{f("privacy")}</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">{f("terms")}</Link>
            <Link href="/legal/cookies" className="hover:text-white transition-colors">{f("cookies")}</Link>
            <Link href="/legal/mentions" className="hover:text-white transition-colors">{f("mentions")}</Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event("aevia-consent-reopen"))}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {f("manageCookies")}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
