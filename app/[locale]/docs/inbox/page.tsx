import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
export const metadata: Metadata = {
  title: "Documentation Aevia Inbox — agents IA, canaux, voix",
  description:
    "Comment Aevia Inbox centralise WhatsApp, Instagram, email et appels dans une seule boîte, et y répond avec des agents IA spécialisés. Architecture, canaux, limites.",
  alternates: { canonical: "https://aevia.services/docs/inbox" },
  openGraph: {
    title: "Documentation Aevia Inbox — agents IA, canaux, voix",
    description:
      "Comment Aevia Inbox centralise WhatsApp, Instagram, email et appels dans une seule boîte, et y répond avec des agents IA spécialisés. Architecture, canaux, limites.",
    url: "https://aevia.services/docs/inbox",
    images: ["/og.png"],
  },
};

export default function DocsInboxPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">Documentation · AeviaInbox</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        AeviaInbox
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        AeviaInbox centralise les communications entrantes d&apos;une entreprise — messages et appels
        — et y répond avec des agents IA spécialisés plutôt qu&apos;avec un seul prompt générique.
        L&apos;objectif : qu&apos;aucune demande client ne reste sans réponse, même en dehors des
        horaires d&apos;ouverture.
      </p>

      {/* ── Boîte de réception unifiée ──────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Boîte de réception unifiée
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Tous les canaux de messagerie d&apos;une entreprise arrivent dans une seule interface,
          avec l&apos;historique de conversation conservé par contact :
        </p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2">
          <li>WhatsApp Business</li>
          <li>Instagram et Facebook Messenger (Meta)</li>
          <li>Email entrant</li>
          <li>Webchat (widget à intégrer sur le site du client)</li>
          <li>Telegram</li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400 mt-3">
          Chaque conversation est routée automatiquement vers l&apos;agent IA adapté, avec une
          identité de contact unifiée : un même client qui écrit d&apos;abord sur Instagram puis par
          email est reconnu comme un seul et même contact.
        </p>
      </section>

      {/* ── Agent vocal ──────────────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Agent vocal IA (téléphone)
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          AeviaInbox répond aussi aux appels téléphoniques avec un agent vocal temps réel — le
          service tourne sur Twilio pour la téléphonie et sur un pipeline vocal Pipecat + Gemini
          Live pour la conversation, avec un fallback multi-fournisseur pour la synthèse vocale
          (Gemini, ElevenLabs, OpenAI).
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          L&apos;agent vocal ne se contente pas de discuter : il vérifie les disponibilités, propose
          des créneaux alternatifs si le créneau demandé est complet, et va jusqu&apos;à la prise de
          rendez-vous ou de commande. Pour la restauration, il peut pousser une commande vocale
          directement vers le système de caisse (POS) du restaurant via l&apos;intégration HubRise ;
          si le POS n&apos;est pas joignable, la commande est enregistrée localement pour ne rien
          perdre.
        </p>
      </section>

      {/* ── Agents spécialisés ──────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Des agents spécialisés, pas un prompt unique
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Plutôt qu&apos;un seul agent IA généraliste, AeviaInbox route chaque conversation vers un
          agent dédié à une étape précise du parcours client :
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-cyan-400 font-bold shrink-0 w-20">Setter</span>
            <span className="text-zinc-400">
              Qualifie un nouveau contact — besoin, budget, échéance — et attribue un score de lead.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400 font-bold shrink-0 w-20">Closer</span>
            <span className="text-zinc-400">
              Reprend un lead qualifié pour le faire avancer vers la conversion, avec le contexte du
              profil déjà récolté par le setter.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400 font-bold shrink-0 w-20">Info</span>
            <span className="text-zinc-400">
              Répond aux questions courantes (horaires, tarifs, catalogue) et sait passer la main à
              un humain quand la demande sort de son périmètre.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400 font-bold shrink-0 w-20">Booking</span>
            <span className="text-zinc-400">
              Gère la prise de rendez-vous de bout en bout : vérifie l&apos;agenda et crée
              l&apos;événement.
            </span>
          </li>
        </ul>
      </section>

      {/* ── Intégrations ──────────────────────────────────────────────────── */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Intégrations clés
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-white font-semibold shrink-0">Google Calendar</span>
            <span className="text-zinc-400">
              Synchronisation bidirectionnelle : les créneaux réservés via l&apos;agent (vocal ou
              messagerie) apparaissent dans l&apos;agenda Google du client, et les événements créés
              côté agenda sont pris en compte pour le calcul des disponibilités.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white font-semibold shrink-0">Google Business Profile</span>
            <span className="text-zinc-400">
              Connexion à la fiche établissement Google du client.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-white font-semibold shrink-0">Stripe</span>
            <span className="text-zinc-400">
              Facturation de l&apos;abonnement AeviaInbox (checkout, portail client, gestion des
              renouvellements).
            </span>
          </li>
        </ul>
        <p className="text-xs text-zinc-600 mt-6">
          Cette page décrit les fonctionnalités déployées à date. Certains canaux et intégrations
          peuvent être en cours de déploiement progressif selon les comptes.
        </p>
      </section>
    </main>
  );
}
