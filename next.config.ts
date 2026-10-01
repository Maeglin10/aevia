import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  reactCompiler: true,
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
              "img-src 'self' data: blob: https://images.unsplash.com https://images.pexels.com https://picsum.photos https://*.google-analytics.com https://*.googletagmanager.com",
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
