import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { CookieBanner } from '@/components/CookieBanner';
import { ConsentAwareAnalytics } from '@/components/ConsentAwareAnalytics';
import { SiteFooter } from '@/components/SiteFooter';
const BASE = 'https://aevia.services';

const LOCALES = routing.locales as readonly string[];

/*
  Titre et description de l'accueil : ce que la page vend, avec les mots
  qu'on tape.

  « SaaS pour entrepreneurs ambitieux » ne nommait aucun des trois services
  et aucune requête réelle ne contient ces mots ; la page, elle, parle de
  site web, d'accueil client par IA et d'audit de sécurité. La description
  annonçait « en ligne sous 48 heures » pour tous les sites — faux pour la
  formule Premium (5 à 7 jours, CGV Launch art. 4) — et « inbox unifiée »,
  un terme que l'accueil n'emploie plus. Les prix cités (399 €, audit
  gratuit) sont affichés dans la FAQ de la page.
*/
const HUB_TITLES: Record<string, string> = {
  fr: 'Aevia — Site web, accueil client IA et audit sécurité pour PME',
  en: 'Aevia — Websites, AI customer service and security audits for SMBs',
  es: 'Aevia — Web, atención al cliente con IA y auditoría de seguridad',
  de: 'Aevia — Website, KI-Kundenservice und Sicherheitsaudit für KMU',
  pt: 'Aevia — Site, atendimento com IA e auditoria de segurança para PME',
};

const HUB_DESCS: Record<string, string> = {
  fr: 'Aevia aide les TPE, PME et indépendants à trouver des clients en ligne et à ne plus les rater : site web professionnel dès 399 €, accueil client IA au téléphone et sur WhatsApp, audit de sécurité gratuit.',
  en: 'Aevia helps small businesses and freelancers find customers online and never miss one: a professional website from €399, AI customer service on the phone and WhatsApp, and a free security audit.',
  es: 'Aevia ayuda a pymes y autónomos a conseguir clientes en internet y a no perder ninguno: web profesional desde 399 €, atención al cliente con IA por teléfono y WhatsApp, y auditoría de seguridad gratuita.',
  de: 'Aevia hilft kleinen Unternehmen und Selbstständigen, online Kunden zu finden und keinen mehr zu verpassen: Website ab 399 €, KI-Kundenservice am Telefon und auf WhatsApp, kostenloses Sicherheitsaudit.',
  pt: 'A Aevia ajuda PME e independentes a encontrar clientes online e a não perder nenhum: site profissional a partir de 399 €, atendimento com IA por telefone e WhatsApp, e auditoria de segurança gratuita.',
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const lang = LOCALES.includes(locale) ? locale : 'fr';
  const title = HUB_TITLES[lang] ?? HUB_TITLES.fr;
  const description = HUB_DESCS[lang] ?? HUB_DESCS.fr;
  const url = `${BASE}/${lang}`;

  return {
    metadataBase: new URL(BASE),
    /*
      `absolute` : le titre de l'accueil est déjà complet, et le gabarit de la
      racine (`%s | Aevia`) lui ajouterait un second « | Aevia ». Vérifié en
      production. Les pages filles portent donc la marque dans leur propre
      titre, écrite en toutes lettres — voir app/[locale]/legal/* et docs/*.
      C'est plus verbeux qu'un gabarit, mais sur un nom que sept entités se
      disputent (dont une filiale d'Eiffage), un titre qui ne dit pas « Aevia »
      est une occasion perdue de rattacher la page à la bonne.
    */
    title: { absolute: title },
    description,
    keywords: ['Aevia', 'SaaS France', 'outils entrepreneur', 'site web 48 heures', 'inbox unifiée', 'audit sécurité', 'AeviaLaunch', 'AeviaSecurity', 'AeviaInbox'],
    authors: [{ name: 'Valentin Milliand', url: BASE }],
    creator: 'Aevia',
    openGraph: {
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : lang === 'en' ? 'en_US' : lang === 'es' ? 'es_ES' : lang === 'de' ? 'de_DE' : 'pt_BR',
      url,
      siteName: 'Aevia',
      title,
      description,
    },
    twitter: { card: 'summary_large_image', title, description, creator: '@aeviaio' },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(LOCALES.map(l => [l, `${BASE}/${l}`])),
        'x-default': `${BASE}/${routing.defaultLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) notFound();
  const messages = (await import(`../../messages/${locale}.json`)).default;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ConsentAwareAnalytics />
      {children}
      <SiteFooter />
      <CookieBanner />
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        async
        src="https://inbox.aevia.services/webchat/widget.js"
        data-widget-id="wid_2a6ea934ea6a6404d285e9fc93cb0707"
        data-api-url="https://skybot-inbox-production.up.railway.app/api/v1"
        data-lang={locale}
      />
    </NextIntlClientProvider>
  );
}
