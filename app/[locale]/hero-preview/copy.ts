/**
 * Preview-only labels.
 *
 * The headline, subtitle and CTA labels come from `messages/<locale>.json`
 * (the real production copy). Only the few extra strings each composition
 * needs live here — they are not shipped on the live page, so they stay out
 * of the message catalogue.
 */

export type PreviewLocale = 'fr' | 'en' | 'es' | 'de' | 'pt';

type PreviewCopy = {
  /** The modules named in the subtitle, as a list. */
  modules: string[];
  /** Column / panel heading. */
  platform: string;
  /** Right-hand status label in proposal A. */
  included: string;
  /** Reassurance line on the rule under the CTAs in proposal C. */
  reassurance: string;
};

export const PREVIEW_COPY: Record<PreviewLocale, PreviewCopy> = {
  fr: {
    modules: ['Site web', 'CRM', 'IA', 'Automatisations', 'Téléphonie', 'Paiements'],
    platform: 'La plateforme',
    included: 'Inclus',
    reassurance: 'Une seule facture. Un seul interlocuteur.',
  },
  en: {
    modules: ['Website', 'CRM', 'AI', 'Automation', 'Telephony', 'Payments'],
    platform: 'The platform',
    included: 'Included',
    reassurance: 'One invoice. One point of contact.',
  },
  es: {
    modules: ['Web', 'CRM', 'IA', 'Automatizaciones', 'Telefonía', 'Pagos'],
    platform: 'La plataforma',
    included: 'Incluido',
    reassurance: 'Una sola factura. Un solo interlocutor.',
  },
  de: {
    modules: ['Website', 'CRM', 'KI', 'Automatisierungen', 'Telefonie', 'Zahlungen'],
    platform: 'Die Plattform',
    included: 'Enthalten',
    reassurance: 'Eine Rechnung. Ein Ansprechpartner.',
  },
  pt: {
    modules: ['Site', 'CRM', 'IA', 'Automações', 'Telefonia', 'Pagamentos'],
    platform: 'A plataforma',
    included: 'Incluído',
    reassurance: 'Uma única fatura. Um único interlocutor.',
  },
};

export function previewCopy(locale: string): PreviewCopy {
  return PREVIEW_COPY[(locale as PreviewLocale)] ?? PREVIEW_COPY.fr;
}
