import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/*
  Un seul hôte sert le Hub : aevia.services. Les deux autres renvoient en 308.

  Relevé en production le 13/11 : `hub.aevia.services/fr` et
  `aevia.vercel.app/fr` répondaient 200 avec le site entier. La balise
  canonique désignait bien aevia.services, mais l'en-tête HTTP `Link` posé par
  next-intl annonçait les cinq langues sur l'hôte servi — donc
  `https://hub.aevia.services/en`, `https://aevia.vercel.app/de`… Deux
  déclarations contradictoires sur la même page. Bing tient en plus une
  propriété `hub.aevia.services` séparée, avec son propre plan de site de 103
  URL : la même page comptée deux fois chez un moteur qui n'en indexe que 3.

  Le portfolio du fondateur lie encore `aevia.vercel.app` : avec la 308, ce
  lien profite enfin au domaine de marque.

  Ici plutôt que dans le middleware : le matcher du middleware exclut les
  chemins à point (robots.txt, sitemap.xml, llms.txt), qui resteraient servis
  en double. Une redirection de configuration s'applique à tout.

  Les URL de prévisualisation (`aevia-<hash>-….vercel.app`,
  `aevia-git-<branche>-….vercel.app`) ne sont PAS touchées : c'est sur elles que
  Valentin valide un lot avant la mise en ligne. Seul l'alias de production
  `aevia.vercel.app` est redirigé. Voir la mémoire
  `gotcha-canonical-vercel-app-tue-le-seo`.
*/
const HOTES_SECONDAIRES = ["hub.aevia.services", "aevia.vercel.app"];

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return HOTES_SECONDAIRES.map((hote) => ({
      source: "/:chemin*",
      has: [{ type: "host" as const, value: hote }],
      destination: "https://aevia.services/:chemin*",
      permanent: true,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // googletagmanager : SANS lui, Google Analytics ne se charge JAMAIS.
              //
              // Mesuré le 01/10 dans un vrai navigateur, cookies acceptés :
              // `GET googletagmanager.com/gtag/js?id=G-9XTKCZLYVF → [FAILED] csp`.
              // Zéro session sur dix jours alors qu'une dizaine de visiteurs
              // étaient réellement passés. Le consentement fonctionnait, le
              // composant fonctionnait, la politique de sécurité bloquait le
              // script. Même famille que le blocage de Turnstile en septembre.
              "script-src 'self' 'unsafe-inline' https://inbox.aevia.services https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              // google-analytics en img-src : GA4 retombe sur une requête d'image
              // quand `fetch` n'est pas disponible — navigateur ancien, ou page en
              // train de se fermer. Sans ça on perdrait ces visites en silence.
              // Plus d'hôte d'images tiers : la photo du héros est servie depuis
              // /public. images.pexels.com, images.unsplash.com et picsum.photos
              // n'étaient plus utilisés par aucune page (vérifié le 12/11).
              "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
              // Les mesures partent en POST vers un domaine régional
              // (`region1.google-analytics.com`), d'où le joker : autoriser le
              // script sans autoriser l'envoi donnerait une balise active qui
              // n'envoie rien, et le symptôme serait identique.
              "connect-src 'self' https://skybot-inbox-production.up.railway.app https://*.google-analytics.com https://*.googletagmanager.com https://*.analytics.google.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000
  },
};

export default withNextIntl(nextConfig);
