import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { CookieBanner } from '@/components/CookieBanner';
import { ConsentAwareAnalytics } from '@/components/ConsentAwareAnalytics';
import { SiteFooter } from '@/components/SiteFooter';
const BASE = 'https://aevia.services';

const LOCALES = routing.locales as readonly string[];

const HUB_TITLES: Record<string, string> = {
  fr: 'Aevia — SaaS pour entrepreneurs ambitieux',
  en: 'Aevia — SaaS for ambitious entrepreneurs',
  es: 'Aevia — SaaS para emprendedores ambiciosos',
  de: 'Aevia — SaaS für ambitionierte Unternehmer',
  pt: 'Aevia — SaaS para empreendedores ambiciosos',
};

const HUB_DESCS: Record<string, string> = {
  fr: 'Aevia conçoit des outils SaaS pour entrepreneurs : sites web en 7 jours, inbox unifiée multi-canal, audits de sécurité instantanés. Pensés pour TPE et PME.',
  en: 'Aevia builds SaaS tools for entrepreneurs: websites in 7 days, unified multi-channel inbox, instant security audits. Built for SMBs.',
  es: 'Aevia crea herramientas SaaS para emprendedores: sitios web en 7 días, bandeja de entrada multicanal, auditorías de seguridad instantáneas.',
  de: 'Aevia entwickelt SaaS-Tools für Unternehmer: Websites in 7 Tagen, einheitlicher Multi-Kanal-Posteingang, sofortige Sicherheitsaudits.',
  pt: 'Aevia cria ferramentas SaaS para empreendedores: sites em 7 dias, caixa de entrada multicanal, auditorias de segurança instantâneas.',
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
      `absolute` supprime le gabarit hérité de la racine — et pas seulement pour
      cette page : pour toutes celles qui vivent dessous. Mesuré en production :
      « Mentions légales », « Politique de confidentialité »… sans aucune
      mention de la marque. Or le mot « Aevia » désigne au moins sept entités
      (dont une filiale d'Eiffage) : chaque titre est une occasion de rattacher
      la page à la bonne. On garde le titre exact de l'accueil en `default`, et
      on rend le gabarit aux pages filles.
    */
    title: { default: title, template: '%s | Aevia' },
    description,
    keywords: ['Aevia', 'SaaS France', 'outils entrepreneur', 'site web 7 jours', 'inbox unifiée', 'audit sécurité', 'AeviaLaunch', 'AeviaSecurity', 'AeviaInbox'],
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
