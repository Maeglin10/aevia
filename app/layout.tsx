import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aevia.services"),
  title: {
    default: "Aevia — Suite digitale pour entreprises ambitieuses",
    template: "%s | Aevia",
  },
  description:
    "Aevia propose une suite d'outils digitaux pour PME et indépendants : création de landing pages, sécurité web, et messagerie omnicanale. Made in France.",
  keywords: [
    "Aevia",
    "landing page",
    "sécurité web",
    "messagerie omnicanale",
    "WhatsApp Business",
    "SaaS France",
    "création site web",
    "PME digitale",
  ],
  authors: [{ name: "Aevia", url: "https://aevia.services" }],
  creator: "Aevia",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aevia.services",
    siteName: "Aevia",
    title: "Aevia — Suite digitale pour entreprises ambitieuses",
    description:
      "Landing pages premium, sécurité web automatisée, et messagerie omnicanale. La suite complète pour développer votre business en ligne.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Aevia — Suite digitale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aevia — Suite digitale pour entreprises ambitieuses",
    description:
      "Landing pages premium, sécurité web automatisée, et messagerie omnicanale. La suite complète pour développer votre business en ligne.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://aevia.services",
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://aevia.services/#organization',
  name: 'Aevia',
  // "Aevia" is also the name of a large Eiffage subsidiary, so a search for the
  // bare word resolves to them. Entity disambiguation is what separates us:
  // the legal name, the SIREN, and — above all — sameAs links to third-party
  // registries that independently confirm this identity. Self-owned subdomains
  // prove nothing to a search engine; the government registries do.
  legalName: 'VALENTIN MILLIAND (AEVIA WS)',
  alternateName: ['Aevia WS', 'Aevia Services'],
  disambiguatingDescription:
    "Aevia (Aevia WS) est un éditeur de logiciels français indépendant fondé en 2019 à Bourg-en-Bresse par Valentin Milliand, spécialisé dans les sites web, l'accueil téléphonique par IA et l'audit de sécurité pour TPE et PME. Sans lien avec la société Aevia du groupe Eiffage, qui exerce dans l'énergie et les infrastructures.",
  url: 'https://aevia.services',
  logo: 'https://aevia.services/brand/aevia-logo.png',
  description:
    "Plateforme tout-en-un pour TPE, PME et indépendants : site web professionnel, service client par IA (téléphone, WhatsApp, Instagram, email) disponible 24h/24, et audit de sécurité web. Basée à Bourg-en-Bresse (Ain), France.",
  email: 'valentinmilliand@aevia.services',
  foundingDate: '2019-07-01',
  founder: {
    '@type': 'Person',
    name: 'Valentin Milliand',
    jobTitle: 'Fondateur, développeur fullstack',
  },
  address: {
    // The official registry (SIREN 852546225) records the seat in
    // Bourg-en-Bresse, 01000. Claiming Lyon here contradicted the public record
    // Google cross-checks, which weakens the local signal instead of widening
    // it. The service area below is what expresses the wider reach.
    '@type': 'PostalAddress',
    addressLocality: 'Bourg-en-Bresse',
    postalCode: '01000',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  // The seat is Bourg-en-Bresse, but nothing about the product is geographic:
  // sites, voice agents and messaging are delivered remotely and the agents
  // answer in five languages. Declaring only France would have capped us at the
  // French market for no reason. Worldwide first, then the countries we have
  // actual telephony and language coverage for, then the local cluster — the
  // order is what a reader (human or model) sees as the primary claim.
  areaServed: [
    { '@type': 'Place', name: 'Worldwide' },
    { '@type': 'Country', name: 'France' },
    { '@type': 'Country', name: 'Belgique' },
    { '@type': 'Country', name: 'Suisse' },
    { '@type': 'Country', name: 'Luxembourg' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'España' },
    { '@type': 'Country', name: 'Portugal' },
    { '@type': 'Country', name: 'Deutschland' },
    { '@type': 'Country', name: 'México' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Costa Rica' },
    { '@type': 'AdministrativeArea', name: 'Auvergne-Rhône-Alpes' },
    { '@type': 'City', name: 'Bourg-en-Bresse' },
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'City', name: 'Marseille' },
    { '@type': 'City', name: 'Genève' },
  ],
  availableLanguage: ['fr', 'en', 'es', 'de', 'pt'],
  naics: '541511',
  isicV4: '6201',
  knowsLanguage: ['fr', 'en', 'es', 'de', 'pt'],
  identifier: { '@type': 'PropertyValue', propertyID: 'SIREN', value: '852546225' },
  slogan: 'Une seule plateforme, trois problèmes réglés.',
  knowsAbout: [
    'Standard téléphonique IA',
    'Agent vocal IA',
    'Prise de réservation automatique par téléphone',
    'Prise de rendez-vous automatique',
    'Service client par IA',
    'Inbox unifiée WhatsApp Instagram email',
    'Création de site web professionnel',
    'Audit de sécurité web',
    'Automatisation de la relation client pour TPE et PME',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'valentinmilliand@aevia.services',
    contactType: 'customer support',
    availableLanguage: ['fr', 'en', 'es', 'de', 'pt'],
  },
  // Third-party corroboration first — these are what let a search engine bind
  // "Aevia" to SIREN 852546225 rather than to the Eiffage subsidiary. All four
  // were checked live and resolve to this company. The own subdomains stay,
  // but they are supporting evidence, not proof of identity.
  sameAs: [
    // La fiche d'établissement Google, validée. C'est la corroboration la plus
    // forte de la liste : Google y a attaché l'identifiant d'entité
    // /g/11zfhkfyr8, distinct de celui de la filiale d'Eiffage. Le site désigne
    // la fiche, la fiche désigne le site — la boucle est ce qui fait tenir
    // l'identité.
    'https://share.google/olhxyISOJZjAame0Q',
    'https://annuaire-entreprises.data.gouv.fr/entreprise/852546225',
    'https://www.pappers.fr/entreprise/852546225',
    'https://www.societe.com/societe/-852546225.html',
    'https://github.com/Maeglin10',
    'https://launch.aevia.services',
    'https://inbox.aevia.services',
    'https://security.aevia.services',
  ],
  makesOffer: [
    { '@type': 'Offer', name: 'Aevia Launch', url: 'https://launch.aevia.services' },
    { '@type': 'Offer', name: 'Aevia Security', url: 'https://security.aevia.services' },
    { '@type': 'Offer', name: 'Aevia Inbox', url: 'https://inbox.aevia.services' },
  ],
}

/*
  L'activité de zone desservie, distincte de l'organisation.

  `Organization` dit qui est l'entreprise ; il ne dit pas qu'elle intervient
  quelque part, à quel numéro on la joint, ni dans quelles langues. C'est
  pourtant ce que Google rapproche quand il décide si une fiche d'établissement
  et un site parlent de la même chose.

  Aucune `address` ici, volontairement : il n'y a pas de local que le public
  visite. Ce nœud ne revendique pas une adresse, il revendique une zone
  d'intervention — c'est la forme que schema.org et Google prévoient pour une
  activité qui se déplace ou travaille à distance. La ville du registre reste
  déclarée dans `Organization`, où elle décrit le siège social et non un magasin.

  Les valeurs doivent rester identiques à celles de la fiche Google : un numéro
  ou une ville qui diffère et le rapprochement ne se fait pas.
*/
const zoneDesservieSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://aevia.services/#activite',
  name: 'Aevia',
  parentOrganization: { '@id': 'https://aevia.services/#organization' },
  url: 'https://aevia.services',
  image: 'https://aevia.services/brand/aevia-logo.png',
  telephone: '+33743751980',
  email: 'valentinmilliand@aevia.services',
  priceRange: '€€',
  areaServed: [
    { '@type': 'City', name: 'Bourg-en-Bresse' },
    { '@type': 'City', name: 'Lyon' },
    { '@type': 'City', name: 'Villefranche-sur-Saône' },
    { '@type': 'City', name: 'Mâcon' },
    { '@type': 'AdministrativeArea', name: 'Ain' },
    { '@type': 'AdministrativeArea', name: 'Rhône' },
    { '@type': 'Country', name: 'France' },
  ],
  availableLanguage: ['fr', 'en', 'es', 'de', 'pt'],
  knowsAbout: [
    'Création de site web professionnel',
    'Standard téléphonique par intelligence artificielle',
    'Inbox unifiée WhatsApp Instagram Messenger email',
    'Audit de sécurité de domaine',
  ],
};

const productsSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://launch.aevia.services/#service',
      name: 'AeviaLaunch',
      serviceType: 'Création de site web professionnel',
      provider: { '@id': 'https://aevia.services/#organization' },
      url: 'https://launch.aevia.services',
      description:
        "Création de sites web professionnels livrés en 2h à 7 jours selon le plan, optimisés SEO et mobile-first. Plus de 100 thèmes par secteur. Hébergement et maintenance 20€/mois après une période offerte.",
      areaServed: ['FR', 'EU'],
      offers: [
        { '@type': 'Offer', name: 'Landing', price: '399', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Essentiel', price: '599', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Pro', price: '899', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Premium', price: '1499', priceCurrency: 'EUR' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://inbox.aevia.services/#app',
      name: 'AeviaInbox',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      provider: { '@id': 'https://aevia.services/#organization' },
      url: 'https://inbox.aevia.services',
      description:
        "Service client par IA 24h/24 : agent vocal sur ligne téléphonique dédiée (réservations, commandes) et messagerie unifiée WhatsApp, Instagram, Facebook, email. Modes messages seuls, voix seule ou les deux.",
      // Canonical Inbox pricing = the interactive 5-tier grid (Starter→Scale)
      // shown everywhere: marketing /pricing AND in-app Settings→Abonnement.
      // COMBO-mode amounts (messages + voice); a one-time 100€ setup applies at
      // signup. A price in structured data is quoted back by search engines and
      // assistants, so it must match what the checkout actually charges.
      offers: [
        { '@type': 'Offer', name: 'Starter', price: '79', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Growth', price: '99', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Pro', price: '199', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Business', price: '399', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Scale', price: '999', priceCurrency: 'EUR' },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://security.aevia.services/#app',
      name: 'AeviaSecurity',
      applicationCategory: 'SecurityApplication',
      operatingSystem: 'Web',
      provider: { '@id': 'https://aevia.services/#organization' },
      url: 'https://security.aevia.services',
      description:
        "Audit de sécurité web instantané : score sur 100 en sécurité, performances (Core Web Vitals) et SEO, avec rapport rédigé par IA. Scan gratuit sans compte.",
      // Productized "fixed-price fix" model (validated 2026-07-25: lead magnet +
      // forfait service, NOT a SaaS subscription). Amounts mirror the canonical
      // pricing page (skysecurity servicesCatalog.ts). The old Solo/Pro/Business
      // 9/29/79 monthly tiers advertised a subscription we no longer sell — a
      // stale price in structured data is a promise search engines quote back.
      offers: [
        { '@type': 'Offer', name: 'Scan gratuit', price: '0', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Correctif SSL/TLS', price: '149', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'En-têtes HTTP', price: '199', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'SPF/DKIM/DMARC (DNS)', price: '349', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'CSP', price: '499', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Core Web Vitals', price: '790', priceCurrency: 'EUR' },
        { '@type': 'Offer', name: 'Durcissement complet', price: '1490', priceCurrency: 'EUR' },
      ],
    },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This was hardcoded to "fr", so every localized page told search engines and
  // screen readers it was French — including /en, which serves English. A wrong
  // lang attribute is one of the few international-SEO mistakes that can get a
  // whole locale ignored, and it applied to all five.
  //
  // The root layout sits above [locale] so it cannot read the route param, but
  // next-intl's middleware resolves the locale into the request, and getLocale()
  // reads it back. Routes outside [locale] (/contact, /sitemap.xml) have no
  // locale resolved, hence the fallback.
  let lang: string = routing.defaultLocale;
  try {
    lang = await getLocale();
  } catch {
    // Not a localized route — keep the default.
  }

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(zoneDesservieSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#09090b] text-white">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-red-600 focus:text-white focus:rounded-lg focus:font-semibold">Skip to main content</a>
        <Nav />
        {children}
        {/* webchat widget moved to [locale]/layout.tsx for i18n locale injection */}
      </body>
    </html>
  );
}
