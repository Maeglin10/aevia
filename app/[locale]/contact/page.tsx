import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FormulaireContact } from "@/components/FormulaireContact";
import { LANGUES_CONTACT, TEXTES_CONTACT, type LangueContact } from "@/lib/contact-textes";

/*
  La page contact, dans chacune des cinq langues du site (2026-11-24).
  Elle vivait à la racine (/contact), en français seulement : /en/contact,
  /es/contact… renvoyaient 404, et un audit IA en concluait « pas de page de
  contact ». Les anciennes adresses mènent ici (middleware de next-intl).
*/
const BASE = "https://aevia.services";

const estLangue = (l: string): l is LangueContact =>
  (LANGUES_CONTACT as readonly string[]).includes(l);

export function generateStaticParams() {
  return LANGUES_CONTACT.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!estLangue(locale)) return {};
  const t = TEXTES_CONTACT[locale];
  return {
    title: t.titreMeta,
    description: t.descriptionMeta,
    alternates: {
      canonical: `${BASE}/${locale}/contact`,
      languages: {
        ...Object.fromEntries(LANGUES_CONTACT.map((l) => [l, `${BASE}/${l}/contact`])),
        "x-default": `${BASE}/fr/contact`,
      },
    },
    openGraph: {
      title: t.titreMeta,
      description: t.descriptionMeta,
      url: `${BASE}/${locale}/contact`,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
  };
}

export default async function PageContact({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!estLangue(locale)) notFound();
  return <FormulaireContact t={TEXTES_CONTACT[locale]} />;
}
