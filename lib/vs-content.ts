/**
 * Content for the "Aevia vs [competitor]" comparison pages (/[locale]/vs/<slug>).
 *
 * SOURCES & ACCURACY
 * -------------------
 * Aevia facts are grounded in the actual skybot-inbox codebase:
 * - Pricing: src/billing/config/pricing-plans.config.ts (TIER_PLANS, EU_NA zone) —
 *   Growth $99/mo, Studio $199/mo, Business $399/mo, Enterprise $999/mo.
 *   NOTE: the live inbox.aevia.services pricing widget currently shows different
 *   numbers (€20/€79/€249, 3 tiers) — that appears to be stale marketing copy.
 *   This file intentionally uses the backend billing config as the source of
 *   truth per explicit instruction, not the (possibly outdated) live page.
 * - Channels live today: Webchat, Email, Voice — confirmed both in the codebase
 *   (src/channels/{webchat-ai,email-ai-reply}.service.ts, src/voice/) and on the
 *   live inbox.aevia.services page, which itself marks WhatsApp and Instagram as
 *   "Bientôt" (coming soon). We disclose this honestly rather than claim full
 *   omnichannel parity — WhatsApp/Instagram connectors exist in the codebase
 *   (connectors/whatsapp-cloud, channels/instagram-ai-reply.service.ts) but are
 *   feature-flagged off / not yet customer-facing.
 * - Voice: src/voice/voice-agent-api.service.ts — real-time availability check
 *   against the tenant's calendar, alternative-slot suggestion, order creation
 *   pushed to a POS (HubRise), call health/latency monitoring. This is a live,
 *   production capability (see the restaurant "solutions" pages), not a beta or
 *   sales-gated pilot.
 * - AI agent behavior: src/workflow-engine (Groq-based setter/closer/info agents),
 *   src/channels/firewall service (scope filtering) — autonomous, role-based
 *   reply generation across channels, not a single canned chatbot flow.
 *
 * Competitor facts were verified live in July 2026 via WebFetch/WebSearch against
 * each vendor's own pricing/help pages (intercom.com/pricing, zendesk.com/pricing,
 * hubspot.com/pricing/service, manychat.com/pricing, respond.io/pricing) plus
 * vendor help-center/changelog pages for voice-AI maturity claims. Sources are
 * listed in `sourcesNote` per page. Prices are as published at verification time
 * and are subject to change by the vendor — always confirm on their site before
 * quoting to a prospect.
 *
 * No fabricated statistics, client names, or case studies. Where Aevia genuinely
 * lacks something a competitor has, it is disclosed in `gapBody`.
 */

export type Locale = "fr" | "en";

export interface VsRow {
  label: string;
  aevia: string;
  competitor: string;
}

export interface PricingLine {
  plan: string;
  price: string;
  note?: string;
}

export interface VsCopy {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  h1A: string;
  h1Highlight: string;
  h1B: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;

  positioningTitle: string;
  positioningAeviaLabel: string;
  positioningAevia: string;
  positioningCompetitorLabel: string;
  positioningCompetitor: string;

  tableTitle: string;
  tableSubtitle: string;
  tableRows: VsRow[];

  chooseTitle: string;
  chooseAeviaTitle: string;
  chooseAeviaPoints: string[];
  chooseCompetitorTitle: string;
  chooseCompetitorPoints: string[];

  pricingTitle: string;
  pricingSubtitle: string;
  pricingAeviaLabel: string;
  pricingAevia: PricingLine[];
  pricingCompetitorLabel: string;
  pricingCompetitor: PricingLine[];
  pricingNote: string;

  gapTitle: string;
  gapBody: string;

  sourcesNote: string;
  lastVerified: string;

  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export interface VsEntry {
  slug: string;
  competitorName: string;
  accentFrom: string;
  accentTo: string;
  copy: Partial<Record<Locale, VsCopy>>;
}

export const VS_PAGES: VsEntry[] = [
  // ── 1. Intercom ──────────────────────────────────────────────────────────
  {
    slug: "intercom",
    competitorName: "Intercom",
    accentFrom: "from-inbox",
    accentTo: "to-inbox-dark",
    copy: {
      fr: {
        metaTitle: "Aevia vs Intercom — comparatif honnête (canaux, IA, prix 2026) | Aevia",
        metaDescription:
          "Intercom ou Aevia Inbox pour votre support client ? Comparatif factuel : canaux, agent IA (Fin vs agents Aevia), voix, tarifs vérifiés en juillet 2026.",
        badge: "Comparatif · Aevia vs Intercom",
        h1A: "Aevia Inbox ou",
        h1Highlight: "Intercom",
        h1B: "?",
        subtitle:
          "Deux outils, deux publics différents. Voici une comparaison factuelle — sans dénigrement — pour vous aider à choisir.",
        ctaPrimary: "Voir les tarifs Aevia",
        ctaSecondary: "Discuter de votre besoin",

        positioningTitle: "Qui est fait pour qui",
        positioningAeviaLabel: "Aevia Inbox",
        positioningAevia:
          "Aevia Inbox s'adresse aux TPE/PME qui n'ont pas d'équipe support dédiée : un agent IA unique répond au webchat, à l'email et au téléphone à la place d'un humain, avec des workflows métier prêts à l'emploi (réservation, qualification de lead). Pas de ticketing complexe, pas de gestion de sièges par rôle.",
        positioningCompetitorLabel: "Intercom",
        positioningCompetitor:
          "Intercom est une plateforme de support client mature, pensée pour des équipes de support dédiées (du scale-up à l'entreprise). Son historique de live chat + helpdesk et son agent IA Fin — un des plus aboutis du marché — en font une référence pour les organisations qui gèrent un volume de tickets important avec plusieurs agents humains.",

        tableTitle: "Comparatif fonctionnel",
        tableSubtitle: "Vérifié sur intercom.com/pricing et la documentation produit en juillet 2026.",
        tableRows: [
          { label: "Canaux", aevia: "Webchat, Email, Voix (natifs) — WhatsApp et Instagram DM en cours de déploiement", competitor: "Live chat, email, in-app inclus ; SMS, WhatsApp, téléphone en add-on à l'usage" },
          { label: "Agent IA", aevia: "Agents autonomes par rôle (accueil, qualification, closing) sur tous les canaux, inclus dans l'abonnement", competitor: "Fin AI Agent — agent de résolution autonome mature, facturé séparément 0,99 $ par résolution" },
          { label: "Voix / téléphone IA", aevia: "Agent vocal natif en production : disponibilité en temps réel, prise de réservation avec sync calendrier, commande envoyée au POS (HubRise)", competitor: "Fin Voice existe mais est réservé aux clients accompagnés par l'équipe commerciale Intercom — pas de self-service au moment de la vérification" },
          { label: "Tarif d'entrée", aevia: "À partir de 99 $/mois (formule Growth), IA incluse dans le forfait", competitor: "À partir d'environ 29-39 $/siège/mois (Essential) + 0,99 $ par résolution Fin, en plus" },
          { label: "Complexité de mise en place", aevia: "Compte unique, pas de gestion de sièges par rôle, workflows métiers préconfigurés", competitor: "Système de ticketing complet à paramétrer (routing, inboxes d'équipe, automatisations) — pensé pour un onboarding accompagné" },
        ],

        chooseTitle: "Comment choisir",
        chooseAeviaTitle: "Choisissez Aevia si…",
        chooseAeviaPoints: [
          "Vous êtes une petite structure sans équipe support dédiée et voulez qu'un agent IA gère webchat + email + téléphone dès le premier jour",
          "Vous voulez un agent vocal capable de prendre une réservation ou une commande directement, pas juste répondre à des FAQ",
          "Vous préférez un prix tout compris plutôt qu'un tarif par siège + facturation à la résolution qui grimpe avec le volume",
        ],
        chooseCompetitorTitle: "Choisissez Intercom si…",
        chooseCompetitorPoints: [
          "Vous gérez une équipe support avec plusieurs agents humains et avez besoin d'un vrai système de ticketing (routing, SLA, inboxes partagées)",
          "Vous voulez l'agent de résolution IA le plus éprouvé du marché et acceptez une facturation à la résolution",
          "Vous avez besoin de certifications entreprise (HIPAA, SSO, multibrand) disponibles sur le forfait Expert",
        ],

        pricingTitle: "Tarifs vérifiés",
        pricingSubtitle: "Prix publics constatés en juillet 2026 — à reconfirmer avant devis, les tarifs SaaS évoluent souvent.",
        pricingAeviaLabel: "Aevia Inbox (zone EU/US)",
        pricingAevia: [
          { plan: "Growth", price: "99 $/mois", note: "2 utilisateurs, 3 canaux, 1 000 exécutions IA/mois" },
          { plan: "Studio", price: "199 $/mois", note: "5 utilisateurs, 8 canaux, 5 000 exécutions IA/mois" },
          { plan: "Business", price: "399 $/mois", note: "15 utilisateurs, canaux illimités, 15 000 exécutions IA/mois" },
          { plan: "Enterprise", price: "999 $/mois", note: "Utilisateurs et exécutions IA illimités" },
        ],
        pricingCompetitorLabel: "Intercom",
        pricingCompetitor: [
          { plan: "Essential", price: "≈ 29-39 $/siège/mois", note: "annuel / mensuel, 1 siège minimum" },
          { plan: "Advanced", price: "≈ 85-99 $/siège/mois", note: "+ 20 sièges Lite offerts" },
          { plan: "Expert", price: "≈ 132-139 $/siège/mois", note: "+ 50 sièges Lite offerts, SSO, HIPAA" },
        ],
        pricingNote:
          "Sur toutes les formules Intercom, Fin AI Agent est facturé en plus : 0,99 $ par résolution. Les tarifs Aevia incluent un volume d'exécutions IA dans le forfait, sans facturation à la résolution.",

        gapTitle: "Ce qu'Aevia ne fait pas (encore)",
        gapBody:
          "Intercom propose un véritable système de ticketing multi-agents avec routing, SLA et inboxes d'équipe — Aevia Inbox n'a pas vocation à remplacer un helpdesk d'entreprise. WhatsApp et Instagram DM sont marqués « bientôt disponibles » sur Aevia Inbox : les connecteurs existent dans le produit mais ne sont pas encore ouverts à tous les clients. Si vous avez besoin de ces canaux dès aujourd'hui, Intercom les propose déjà (en add-on à l'usage).",

        sourcesNote:
          "Sources vérifiées : intercom.com/pricing, intercom.com/help (Fin AI Agent, Fin Voice), recherche web juillet 2026.",
        lastVerified: "Vérifié en juillet 2026",

        ctaTitle: "Envie de voir Aevia Inbox en action ?",
        ctaBody: "On configure votre agent avec vos vrais canaux, votre agenda et vos process — pas une démo générique.",
        ctaButton: "Discuter de votre besoin",
      },
    },
  },

  // ── 2. Zendesk ───────────────────────────────────────────────────────────
  {
    slug: "zendesk",
    competitorName: "Zendesk",
    accentFrom: "from-inbox",
    accentTo: "to-inbox-dark",
    copy: {
      fr: {
        metaTitle: "Aevia vs Zendesk — comparatif honnête (canaux, IA, prix 2026) | Aevia",
        metaDescription:
          "Zendesk ou Aevia Inbox ? Comparatif factuel des canaux, de l'agent IA, de la voix et des tarifs vérifiés en juillet 2026 — sans dénigrement.",
        badge: "Comparatif · Aevia vs Zendesk",
        h1A: "Aevia Inbox ou",
        h1Highlight: "Zendesk",
        h1B: "?",
        subtitle:
          "Zendesk est une référence du ticketing d'entreprise. Voici où Aevia se positionne différemment, sans exagérer ni l'un ni l'autre.",
        ctaPrimary: "Voir les tarifs Aevia",
        ctaSecondary: "Discuter de votre besoin",

        positioningTitle: "Qui est fait pour qui",
        positioningAeviaLabel: "Aevia Inbox",
        positioningAevia:
          "Aevia Inbox cible les petites structures qui veulent qu'une IA prenne en charge le contact client de bout en bout — webchat, email, téléphone — sans monter une organisation de ticketing. Le prix est forfaitaire, sans add-on IA séparé à activer.",
        positioningCompetitorLabel: "Zendesk",
        positioningCompetitor:
          "Zendesk est la colonne vertébrale de ticketing de nombreuses équipes support, des PME aux grands comptes. Sa suite ajoute progressivement des agents IA et un copilote, mais l'outil reste avant tout pensé pour des équipes d'agents humains organisées par files, SLA et rôles.",

        tableTitle: "Comparatif fonctionnel",
        tableSubtitle: "Vérifié sur zendesk.com/pricing et le centre d'aide Zendesk en juillet 2026.",
        tableRows: [
          { label: "Canaux", aevia: "Webchat, Email, Voix (natifs) — WhatsApp et Instagram DM en cours de déploiement", competitor: "Email, chat, messaging et voix (Zendesk Talk) inclus dès la formule Suite" },
          { label: "Agent IA", aevia: "Agents autonomes par rôle inclus dans le forfait, sur tous les canaux", competitor: "« AI Agents » inclus à partir de Suite Team ; Copilot en add-on (~50 €/agent/mois)" },
          { label: "Voix / téléphone IA", aevia: "Agent vocal natif en production : disponibilité en temps réel, réservation avec sync calendrier, commande envoyée au POS", competitor: "Agents IA vocaux annoncés pour Zendesk Talk, mais en Early Access Program (EAP) — nécessite Zendesk Voice + l'add-on Advanced AI, pas encore en disponibilité générale au moment de la vérification" },
          { label: "Tarif d'entrée", aevia: "À partir de 99 $/mois (formule Growth), IA incluse", competitor: "À partir de 19 €/agent/mois (Support Team, sans IA) ; IA à partir de 55 €/agent/mois (Suite Team)" },
          { label: "Complexité de mise en place", aevia: "Compte unique, pas de gestion par agent/rôle, workflows métiers préconfigurés", competitor: "Paramétrage de files, routing, SLA — outil conçu pour un déploiement accompagné par un admin" },
        ],

        chooseTitle: "Comment choisir",
        chooseAeviaTitle: "Choisissez Aevia si…",
        chooseAeviaPoints: [
          "Vous n'avez pas d'équipe support organisée en files/SLA et voulez qu'une IA traite directement les échanges",
          "Vous voulez une IA vocale disponible aujourd'hui, pas en accès anticipé réservé aux gros comptes",
          "Vous préférez un tarif par forfait plutôt que par siège + add-on Copilot séparé",
        ],
        chooseCompetitorTitle: "Choisissez Zendesk si…",
        chooseCompetitorPoints: [
          "Vous gérez une équipe support structurée avec plusieurs agents, des SLA et un besoin de reporting fin",
          "Vous voulez un ticketing d'entreprise éprouvé, avec IA ajoutée progressivement dessus",
          "Vous êtes prêt à attendre la disponibilité générale des agents IA vocaux (actuellement en EAP)",
        ],

        pricingTitle: "Tarifs vérifiés",
        pricingSubtitle: "Prix publics constatés en juillet 2026 — à reconfirmer avant devis.",
        pricingAeviaLabel: "Aevia Inbox (zone EU/US)",
        pricingAevia: [
          { plan: "Growth", price: "99 $/mois", note: "2 utilisateurs, 3 canaux, 1 000 exécutions IA/mois" },
          { plan: "Studio", price: "199 $/mois", note: "5 utilisateurs, 8 canaux, 5 000 exécutions IA/mois" },
          { plan: "Business", price: "399 $/mois", note: "15 utilisateurs, canaux illimités, 15 000 exécutions IA/mois" },
          { plan: "Enterprise", price: "999 $/mois", note: "Utilisateurs et exécutions IA illimités" },
        ],
        pricingCompetitorLabel: "Zendesk",
        pricingCompetitor: [
          { plan: "Support Team", price: "19 €/agent/mois", note: "ticketing de base, sans IA" },
          { plan: "Suite Team", price: "55 €/agent/mois", note: "AI Agents inclus" },
          { plan: "Suite Professional", price: "115 €/agent/mois", note: "IVR, routing par compétences" },
          { plan: "Suite Enterprise + Copilot", price: "Sur devis", note: "IA vocale générative pour le téléphone" },
        ],
        pricingNote:
          "Zendesk facture par agent humain ; le coût total dépend donc de la taille de l'équipe. Aevia facture un forfait indépendant du nombre d'agents humains (puisqu'il n'y en a pas à gérer).",

        gapTitle: "Ce qu'Aevia ne fait pas (encore)",
        gapBody:
          "Zendesk propose un système de ticketing d'entreprise complet (SLA, routing par compétences, reporting avancé) qu'Aevia Inbox ne cherche pas à répliquer. WhatsApp et Instagram DM sont marqués « bientôt disponibles » sur Aevia Inbox — les connecteurs existent mais ne sont pas encore ouverts à tous les clients, alors que Zendesk les propose déjà dans sa suite.",

        sourcesNote:
          "Sources vérifiées : zendesk.com/pricing, zendesk.fr/pricing, support.zendesk.com (Announcing voice AI agents — EAP), recherche web juillet 2026.",
        lastVerified: "Vérifié en juillet 2026",

        ctaTitle: "Envie de voir Aevia Inbox en action ?",
        ctaBody: "On configure votre agent avec vos vrais canaux, votre agenda et vos process — pas une démo générique.",
        ctaButton: "Discuter de votre besoin",
      },
    },
  },

  // ── 3. HubSpot ───────────────────────────────────────────────────────────
  {
    slug: "hubspot",
    competitorName: "HubSpot",
    accentFrom: "from-inbox",
    accentTo: "to-inbox-dark",
    copy: {
      fr: {
        metaTitle: "Aevia vs HubSpot Service Hub — comparatif honnête (prix 2026) | Aevia",
        metaDescription:
          "HubSpot Service Hub ou Aevia Inbox ? Comparatif factuel des canaux, de l'IA Breeze, de la voix et des tarifs vérifiés en juillet 2026.",
        badge: "Comparatif · Aevia vs HubSpot",
        h1A: "Aevia Inbox ou",
        h1Highlight: "HubSpot",
        h1B: "?",
        subtitle:
          "HubSpot est un CRM complet, Aevia une inbox IA dédiée. Comparaison factuelle pour choisir selon votre besoin réel.",
        ctaPrimary: "Voir les tarifs Aevia",
        ctaSecondary: "Discuter de votre besoin",

        positioningTitle: "Qui est fait pour qui",
        positioningAeviaLabel: "Aevia Inbox",
        positioningAevia:
          "Aevia Inbox est un produit dédié à un seul usage : centraliser le contact client (webchat, email, téléphone) et le confier à une IA. Pas de modules marketing/vente à côté, pas de frais d'onboarding, pas de minimum de sièges.",
        positioningCompetitorLabel: "HubSpot Service Hub",
        positioningCompetitor:
          "HubSpot Service Hub n'est qu'une brique de l'écosystème HubSpot (marketing, vente, CMS, service). Il est pertinent surtout pour les entreprises déjà investies dans le CRM HubSpot et qui veulent que le support vive dans le même système que leurs contacts et pipelines commerciaux.",

        tableTitle: "Comparatif fonctionnel",
        tableSubtitle: "Vérifié sur hubspot.com/pricing/service en juillet 2026.",
        tableRows: [
          { label: "Canaux", aevia: "Webchat, Email, Voix (natifs) — WhatsApp et Instagram DM en cours de déploiement", competitor: "Live chat, email, WhatsApp (plafonné à 1 000 messages/mois), Messenger, téléphone (minutes plafonnées par palier)" },
          { label: "Agent IA", aevia: "Agents autonomes par rôle inclus dans le forfait, sur tous les canaux", competitor: "Breeze Customer Agent — facturation à la conversation résolue (0,50 $, 50 crédits) en plus du siège Pro/Enterprise" },
          { label: "Voix / téléphone IA", aevia: "Agent vocal natif en production : disponibilité en temps réel, réservation avec sync calendrier, commande envoyée au POS", competitor: "Canal voix pour Breeze Customer Agent annoncé en bêta au moment de la vérification — pas encore généralement disponible" },
          { label: "Tarif d'entrée", aevia: "À partir de 99 $/mois (formule Growth), IA incluse", competitor: "Gratuit (2 utilisateurs, sans IA avancée) ; IA nécessite la formule Professional à partir de 90 $/siège/mois + frais d'onboarding" },
          { label: "Complexité de mise en place", aevia: "Compte unique, pas d'objet CRM à modéliser, workflows métiers préconfigurés", competitor: "Objet CRM complet à paramétrer ; frais d'onboarding 1 500 $ (Pro) à 3 500 $ (Enterprise), 10 sièges minimum en Enterprise" },
        ],

        chooseTitle: "Comment choisir",
        chooseAeviaTitle: "Choisissez Aevia si…",
        chooseAeviaPoints: [
          "Vous voulez une inbox IA autonome sans acheter (ou sans avoir déjà) tout l'écosystème CRM HubSpot",
          "Vous voulez éviter les frais d'onboarding de 1 500 à 3 500 $ et le minimum de 10 sièges en Enterprise",
          "Vous voulez un canal voix disponible aujourd'hui plutôt qu'en bêta",
        ],
        chooseCompetitorTitle: "Choisissez HubSpot si…",
        chooseCompetitorPoints: [
          "Vous utilisez déjà (ou prévoyez d'utiliser) HubSpot Marketing/Sales Hub et voulez tout centraliser dans le même CRM",
          "Vous avez besoin d'une modélisation CRM riche (pipelines, propriétés personnalisées, reporting croisé marketing/vente/service)",
          "Le budget d'onboarding et de sièges par agent n'est pas un frein pour votre organisation",
        ],

        pricingTitle: "Tarifs vérifiés",
        pricingSubtitle: "Prix publics constatés en juillet 2026 — à reconfirmer avant devis.",
        pricingAeviaLabel: "Aevia Inbox (zone EU/US)",
        pricingAevia: [
          { plan: "Growth", price: "99 $/mois", note: "2 utilisateurs, 3 canaux, 1 000 exécutions IA/mois" },
          { plan: "Studio", price: "199 $/mois", note: "5 utilisateurs, 8 canaux, 5 000 exécutions IA/mois" },
          { plan: "Business", price: "399 $/mois", note: "15 utilisateurs, canaux illimités, 15 000 exécutions IA/mois" },
          { plan: "Enterprise", price: "999 $/mois", note: "Utilisateurs et exécutions IA illimités" },
        ],
        pricingCompetitorLabel: "HubSpot Service Hub",
        pricingCompetitor: [
          { plan: "Free", price: "0 $/mois", note: "2 utilisateurs, sans IA avancée" },
          { plan: "Starter", price: "≈ 15 $/siège/mois", note: "promo constatée 7-9 $/siège/mois" },
          { plan: "Professional", price: "≈ 90 $/siège/mois", note: "+ 1 500 $ d'onboarding" },
          { plan: "Enterprise", price: "≈ 150 $/siège/mois", note: "10 sièges minimum + 3 500 $ d'onboarding" },
        ],
        pricingNote:
          "Le prix HubSpot Service Hub affiché exclut les autres Hubs (Marketing, Sales) souvent nécessaires pour exploiter pleinement le CRM. Le tarif Aevia est autonome et complet dès l'entrée.",

        gapTitle: "Ce qu'Aevia ne fait pas (encore)",
        gapBody:
          "Aevia n'est pas un CRM : pas de pipelines commerciaux, pas de modules marketing, pas de reporting croisé multi-hub. Si votre besoin dépasse le contact client (gestion de pipeline de vente complexe, marketing automation), HubSpot reste plus complet. WhatsApp et Instagram DM sont par ailleurs marqués « bientôt disponibles » sur Aevia Inbox, alors que HubSpot les propose déjà (avec un plafond de messages sur les formules payantes).",

        sourcesNote:
          "Sources vérifiées : hubspot.com/pricing/service, knowledge.hubspot.com (Breeze), recherche web juillet 2026.",
        lastVerified: "Vérifié en juillet 2026",

        ctaTitle: "Envie de voir Aevia Inbox en action ?",
        ctaBody: "On configure votre agent avec vos vrais canaux, votre agenda et vos process — pas une démo générique.",
        ctaButton: "Discuter de votre besoin",
      },
    },
  },

  // ── 4. Manychat ──────────────────────────────────────────────────────────
  {
    slug: "manychat",
    competitorName: "Manychat",
    accentFrom: "from-inbox",
    accentTo: "to-inbox-dark",
    copy: {
      fr: {
        metaTitle: "Aevia vs Manychat — comparatif honnête (canaux, IA, prix 2026) | Aevia",
        metaDescription:
          "Manychat ou Aevia Inbox ? Comparatif factuel : automatisation marketing vs agent IA support, canaux, voix, tarifs vérifiés en juillet 2026.",
        badge: "Comparatif · Aevia vs Manychat",
        h1A: "Aevia Inbox ou",
        h1Highlight: "Manychat",
        h1B: "?",
        subtitle:
          "Deux outils qui se croisent sur Instagram/WhatsApp mais répondent à des besoins différents : marketing automation vs support client IA.",
        ctaPrimary: "Voir les tarifs Aevia",
        ctaSecondary: "Discuter de votre besoin",

        positioningTitle: "Qui est fait pour qui",
        positioningAeviaLabel: "Aevia Inbox",
        positioningAevia:
          "Aevia Inbox est pensé pour le contact client entrant — répondre, qualifier, réserver, prendre une commande — avec un agent IA autonome, y compris au téléphone. Le prix est indépendant du nombre de contacts touchés.",
        positioningCompetitorLabel: "Manychat",
        positioningCompetitor:
          "Manychat est un outil d'automatisation marketing bâti autour d'Instagram, WhatsApp et Messenger : diffusion de messages, séquences de nurturing, capture de leads via des flux visuels (builder de scénarios). C'est un outil de croissance/marketing avant d'être un outil de support.",

        tableTitle: "Comparatif fonctionnel",
        tableSubtitle: "Vérifié sur manychat.com/pricing et help.manychat.com en juillet 2026.",
        tableRows: [
          { label: "Canaux", aevia: "Webchat, Email, Voix (natifs) — WhatsApp et Instagram DM en cours de déploiement", competitor: "Instagram, Messenger, WhatsApp, SMS, Telegram, TikTok, email — tous déjà disponibles, sans voix/téléphone" },
          { label: "Agent IA", aevia: "Agents autonomes par rôle inclus dans le forfait, sur tous les canaux", competitor: "Automatisation par flux visuels (scénarios/mots-clés) par défaut ; comportement IA conversationnel via l'add-on « Manychat AI » (+29 $/mois)" },
          { label: "Voix / téléphone IA", aevia: "Agent vocal natif en production : disponibilité en temps réel, réservation avec sync calendrier, commande envoyée au POS", competitor: "Aucune fonctionnalité voix/téléphone au moment de la vérification" },
          { label: "Tarif d'entrée", aevia: "À partir de 99 $/mois (formule Growth), IA incluse, prix indépendant du nombre de contacts", competitor: "Gratuit (25 contacts actifs) ; Essential à partir de 14 $/mois (250 contacts) — le prix grimpe avec le nombre de contacts actifs" },
          { label: "Complexité de mise en place", aevia: "Compte unique, workflows métiers préconfigurés (réservation, qualification)", competitor: "Builder de flux à construire soi-même (glisser-déposer), rapide à démarrer mais demande du temps pour des scénarios avancés" },
        ],

        chooseTitle: "Comment choisir",
        chooseAeviaTitle: "Choisissez Aevia si…",
        chooseAeviaPoints: [
          "Vous avez besoin d'un canal voix/téléphone — Manychat n'en propose pas",
          "Vous voulez un agent IA autonome par défaut plutôt que de construire des scénarios et payer un add-on IA séparé",
          "Vous ne voulez pas que votre facture grimpe avec le nombre de contacts actifs",
        ],
        chooseCompetitorTitle: "Choisissez Manychat si…",
        chooseCompetitorPoints: [
          "Votre priorité est la diffusion marketing et la capture de leads sur Instagram/WhatsApp/Messenger, pas le support",
          "Vous voulez garder un contrôle visuel fin sur chaque scénario de conversation (builder de flux)",
          "Vous avez besoin de TikTok ou Telegram, non couverts par Aevia Inbox",
        ],

        pricingTitle: "Tarifs vérifiés",
        pricingSubtitle: "Prix publics constatés en juillet 2026 — à reconfirmer avant devis.",
        pricingAeviaLabel: "Aevia Inbox (zone EU/US)",
        pricingAevia: [
          { plan: "Growth", price: "99 $/mois", note: "2 utilisateurs, 3 canaux, 1 000 exécutions IA/mois" },
          { plan: "Studio", price: "199 $/mois", note: "5 utilisateurs, 8 canaux, 5 000 exécutions IA/mois" },
          { plan: "Business", price: "399 $/mois", note: "15 utilisateurs, canaux illimités, 15 000 exécutions IA/mois" },
          { plan: "Enterprise", price: "999 $/mois", note: "Utilisateurs et exécutions IA illimités" },
        ],
        pricingCompetitorLabel: "Manychat",
        pricingCompetitor: [
          { plan: "Free", price: "0 $/mois", note: "25 contacts actifs, 2 canaux max" },
          { plan: "Essential", price: "à partir de 14 $/mois", note: "250 contacts actifs" },
          { plan: "Pro", price: "à partir de 29 $/mois", note: "2 500 contacts, WhatsApp inclus, add-on IA +29 $/mois" },
          { plan: "Business", price: "à partir de 69 $/mois", note: "7 500 contacts, tous canaux" },
        ],
        pricingNote:
          "Manychat facture au nombre de « contacts actifs » : la facture augmente mécaniquement avec votre audience. Aevia facture un forfait fixe par palier de fonctionnalités, indépendant du volume de contacts.",

        gapTitle: "Ce qu'Aevia ne fait pas (encore)",
        gapBody:
          "Manychat couvre déjà Instagram, WhatsApp, Messenger, SMS, Telegram et TikTok — Aevia Inbox ne propose aujourd'hui que Webchat, Email et Voix en natif ; WhatsApp et Instagram DM sont annoncés « bientôt disponibles » mais pas encore ouverts à tous les clients, et TikTok/Telegram ne sont pas au programme. Si la diffusion marketing multi-canal est votre priorité n°1, Manychat a une avance réelle sur la couverture des canaux.",

        sourcesNote:
          "Sources vérifiées : manychat.com/pricing, help.manychat.com (choix de formule), recherche web juillet 2026.",
        lastVerified: "Vérifié en juillet 2026",

        ctaTitle: "Envie de voir Aevia Inbox en action ?",
        ctaBody: "On configure votre agent avec vos vrais canaux, votre agenda et vos process — pas une démo générique.",
        ctaButton: "Discuter de votre besoin",
      },
    },
  },

  // ── 5. Respond.io ────────────────────────────────────────────────────────
  {
    slug: "respond-io",
    competitorName: "Respond.io",
    accentFrom: "from-inbox",
    accentTo: "to-inbox-dark",
    copy: {
      fr: {
        metaTitle: "Aevia vs Respond.io — comparatif honnête (canaux, IA, prix 2026) | Aevia",
        metaDescription:
          "Respond.io ou Aevia Inbox ? Comparatif factuel des canaux, des agents IA (voix incluse), et des tarifs vérifiés en juillet 2026.",
        badge: "Comparatif · Aevia vs Respond.io",
        h1A: "Aevia Inbox ou",
        h1Highlight: "Respond.io",
        h1B: "?",
        subtitle:
          "Le concurrent le plus proche d'Aevia sur le papier : messagerie multi-canal + IA. Voici où chacun a une vraie longueur d'avance.",
        ctaPrimary: "Voir les tarifs Aevia",
        ctaSecondary: "Discuter de votre besoin",

        positioningTitle: "Qui est fait pour qui",
        positioningAeviaLabel: "Aevia Inbox",
        positioningAevia:
          "Aevia Inbox cible les petites structures orientées service (réservation, prise de commande, qualification) qui veulent un agent IA capable d'agir — pas seulement répondre — avec un vrai lien vers l'agenda et le point de vente.",
        positioningCompetitorLabel: "Respond.io",
        positioningCompetitor:
          "Respond.io est une plateforme de messagerie multi-canal pensée pour des équipes B2C à fort volume (WhatsApp, Instagram, Messenger, SMS, Telegram, Viber, LINE). Elle a ajouté en 2026 un agent IA vocal — une avancée réelle qui la rapproche d'Aevia sur ce terrain précis.",

        tableTitle: "Comparatif fonctionnel",
        tableSubtitle: "Vérifié sur respond.io/pricing et respond.io/help en juillet 2026.",
        tableRows: [
          { label: "Canaux", aevia: "Webchat, Email, Voix (natifs) — WhatsApp et Instagram DM en cours de déploiement", competitor: "WhatsApp, Instagram, Messenger, SMS, Telegram, email, Viber, LINE — tous déjà disponibles" },
          { label: "Agent IA", aevia: "Agents autonomes par rôle inclus dans le forfait, sur tous les canaux, dès l'entrée de gamme", competitor: "AI Agents avec actions CRM/API à partir de la formule Growth (159 $/mois) ; AI Prompts/Assist sur toutes les formules" },
          { label: "Voix / téléphone IA", aevia: "Agent vocal natif : disponibilité en temps réel, réservation avec sync calendrier, commande envoyée au POS — sans limite de durée d'appel documentée", competitor: "Voice AI Agent réel, disponible dès la formule Advanced (279 $/mois), 32 langues (ElevenLabs) — mais chaque appel est plafonné à 3 minutes et un humain ne peut pas reprendre la main en cours d'appel" },
          { label: "Tarif d'entrée", aevia: "À partir de 99 $/mois (formule Growth), IA incluse dès l'entrée", competitor: "À partir de 79 $/mois (Starter, sans agents IA) ; agents IA à partir de 159 $/mois (Growth), voix à partir de 279 $/mois (Advanced)" },
          { label: "Complexité de mise en place", aevia: "Compte unique, workflows métiers préconfigurés (réservation, qualification)", competitor: "Builder de workflows/actions IA à configurer — plus flexible mais plus de paramétrage nécessaire" },
        ],

        chooseTitle: "Comment choisir",
        chooseAeviaTitle: "Choisissez Aevia si…",
        chooseAeviaPoints: [
          "Vous voulez un agent IA vocal dès l'entrée de gamme, sans devoir monter jusqu'à la formule à 279 $/mois",
          "Vos appels dépassent régulièrement 3 minutes (réservation détaillée, prise de commande complexe) — Respond.io plafonne chaque appel IA à 3 minutes",
          "Vous voulez un lien natif entre la voix et un système métier (agenda, point de vente) plutôt qu'un agent vocal généraliste",
        ],
        chooseCompetitorTitle: "Choisissez Respond.io si…",
        chooseCompetitorPoints: [
          "Vous avez besoin de tous les canaux de messagerie dès aujourd'hui (WhatsApp, Instagram, Telegram, Viber, LINE) — Aevia les a en cours de déploiement, pas encore tous ouverts",
          "Vous gérez un volume de contacts élevé et voulez une tarification à contacts actifs illimités plutôt que par palier de fonctionnalités",
          "Un plafond de 3 minutes par appel IA est acceptable pour votre cas d'usage (support rapide plutôt que réservation détaillée)",
        ],

        pricingTitle: "Tarifs vérifiés",
        pricingSubtitle: "Prix publics constatés en juillet 2026 — à reconfirmer avant devis.",
        pricingAeviaLabel: "Aevia Inbox (zone EU/US)",
        pricingAevia: [
          { plan: "Growth", price: "99 $/mois", note: "2 utilisateurs, 3 canaux, 1 000 exécutions IA/mois — voix incluse" },
          { plan: "Studio", price: "199 $/mois", note: "5 utilisateurs, 8 canaux, 5 000 exécutions IA/mois" },
          { plan: "Business", price: "399 $/mois", note: "15 utilisateurs, canaux illimités, 15 000 exécutions IA/mois" },
          { plan: "Enterprise", price: "999 $/mois", note: "Utilisateurs et exécutions IA illimités" },
        ],
        pricingCompetitorLabel: "Respond.io",
        pricingCompetitor: [
          { plan: "Starter", price: "79 $/mois", note: "contacts actifs illimités, sans agents IA" },
          { plan: "Growth", price: "159 $/mois", note: "AI Agents inclus" },
          { plan: "Advanced", price: "279 $/mois", note: "Voice AI Agent inclus, appels plafonnés à 3 min" },
          { plan: "Enterprise", price: "Sur devis", note: "utilisateurs et API illimités" },
        ],
        pricingNote:
          "Chez Respond.io, la voix IA n'est disponible qu'à partir de 279 $/mois. Chez Aevia, la voix fait partie du canal natif dès la formule d'entrée à 99 $/mois.",

        gapTitle: "Ce qu'Aevia ne fait pas (encore)",
        gapBody:
          "Respond.io couvre aujourd'hui huit canaux de messagerie (dont WhatsApp, Instagram, Telegram, Viber, LINE) avec une tarification à contacts illimités — Aevia Inbox n'a que Webchat, Email et Voix en natif pour l'instant, WhatsApp et Instagram DM étant annoncés « bientôt disponibles ». Sur la largeur de couverture canaux, Respond.io a une avance réelle et vérifiable.",

        sourcesNote:
          "Sources vérifiées : respond.io/pricing, respond.io/help (AI Agent Actions, Handle Calls), respond.io/blog (Voice AI Agents), recherche web juillet 2026.",
        lastVerified: "Vérifié en juillet 2026",

        ctaTitle: "Envie de voir Aevia Inbox en action ?",
        ctaBody: "On configure votre agent avec vos vrais canaux, votre agenda et vos process — pas une démo générique.",
        ctaButton: "Discuter de votre besoin",
      },
    },
  },
];

export function getVsEntry(slug: string): VsEntry | undefined {
  return VS_PAGES.find((e) => e.slug === slug);
}
