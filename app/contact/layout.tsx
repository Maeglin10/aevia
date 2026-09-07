import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Aevia",
  description: "Discutons de votre projet digital. Réponse sous 24h.",
  openGraph: {
    title: "Contact — Aevia",
    description: "Un site web, un audit sécurité, ou une démo Inbox — discutons-en.",
    url: "https://aevia.services/contact",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  alternates: { canonical: "https://aevia.services/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
