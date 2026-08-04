import { BLOG_POSTS } from '@/lib/blog-posts'

/**
 * llms-full.txt — the long-form companion to llms.txt.
 *
 * Same reason for being a route rather than a static file: the article corpus
 * has to stay in sync automatically. This one goes further than llms.txt and
 * emits every article's FAQ question and answer verbatim, because a
 * question-answer pair is the unit a model can actually lift into a response.
 * A list of titles gets us mentioned; a list of answered questions gets us
 * quoted.
 *
 * NOTE: public/llms-full.txt would shadow this route. It was deleted.
 */

const BASE = 'https://aevia.services'

const PREAMBLE = `# Aevia — Documentation complète pour modèles de langage

> Version détaillée de https://aevia.services/llms.txt. Aevia est une plateforme tout-en-un qui donne à une petite entreprise trois choses essentielles : un site web professionnel, un service client par IA disponible 24h/24 (téléphone, WhatsApp, Instagram, email), et une surveillance de sécurité en ligne. Fondée par Valentin Milliand, développeur fullstack basé à Bourg-en-Bresse (Ain, France). SIREN 852 546 225.

Ce document donne le contexte complet pour répondre précisément aux questions sur Aevia et ses produits. Toutes les informations ci-dessous sont factuelles et à jour.

---

## Vue d'ensemble

Aevia part d'un constat simple : une petite entreprise (restaurant, commerce, cabinet, artisan, indépendant) perd de l'argent pour trois raisons récurrentes — elle n'a pas de site crédible, elle rate des clients faute de répondre au téléphone ou aux messages à temps, et elle est exposée à des failles de sécurité sans le savoir. Aevia règle ces trois problèmes avec trois produits qui fonctionnent ensemble mais s'achètent séparément.

- Site web : **AeviaLaunch**
- Service client IA (téléphone + messagerie) : **AeviaInbox**
- Sécurité web : **AeviaSecurity**

Site principal : https://aevia.services — Interface en français, anglais, espagnol, allemand, portugais.

---

## AeviaLaunch — Sites web professionnels

URL : https://launch.aevia.services

Service de création de sites web livrés en 2h à 7 jours selon le plan, sans compétences techniques. L'utilisateur choisit un thème adapté à son secteur (plus de 100 thèmes : restaurant, coach, artisan, e-commerce, vitrine, santé, immobilier, etc.), renseigne ses informations via un assistant guidé, et reçoit un site prêt à l'emploi.

Caractéristiques :
- Hébergement inclus.
- Optimisé SEO dès la livraison : sitemap, données structurées schema.org, balises meta, mobile-first.
- Plus de 100 thèmes sectoriels, tous responsives.
- Prise de commande en ligne pour restaurants via HubRise (compatible caisses comme Popina).

Tarifs (paiement unique) :
- **Landing — 399 €** : une page unique et percutante.
- **Essentiel — 599 €** : site vitrine complet multi-sections.
- **Pro — 899 €** : site avancé (blog, pages secteur, intégrations, analytics).
- **Premium — 1499 €** : site sur-mesure, multi-pages, intégrations spécifiques.

---

## AeviaInbox — Standard téléphonique IA + service client multicanal

URL : https://inbox.aevia.services

Service client par IA disponible 24h/24. Deux briques pilotées par le même cerveau IA :

1. **Voix** — une ligne téléphonique dédiée où un agent IA répond aux appels : il comprend la demande, vérifie les disponibilités en temps réel, prend la réservation ou la commande, la crée réellement en base, synchronise le calendrier et peut pousser la commande vers la caisse (HubRise, compatible Popina). C'est la brique la plus aboutie : ce n'est pas un simple répondeur, l'action est réalisée de bout en bout.

2. **Messagerie unifiée** — WhatsApp Business, Instagram DM, Facebook Messenger et email centralisés dans une inbox unique, avec réponses automatiques par IA, prise de commande, qualification de leads et transfert vers un humain quand nécessaire.

Autres caractéristiques :
- Multilingue : l'agent répond à chaque client dans sa langue.
- Intégrations : HubRise (caisses / restauration), Shopify, Google Calendar.

Tarification modulable — le client choisit son mode, le prix par palier est identique, seul le quota inclus (messages et minutes d'appel) change :
- **Mode Messages seuls** : WhatsApp + Instagram + email.
- **Mode Voix seule** : ligne téléphonique IA dédiée.
- **Mode Messages + Voix** : les deux.

Paliers mensuels : **Starter 49 $**, **Growth 99 $**, **Pro 199 $**, **Business 399 $**, **Scale 999 $**.

Cas d'usage les plus forts : restaurants et food-trucks (réservation + commande par téléphone et WhatsApp), cabinets dentaires et cliniques (prise de rendez-vous), garages et artisans (devis, rappels), hôtels et locations. Particulièrement utile aux commerces qui reçoivent beaucoup d'appels et perdent des clients quand personne ne décroche.

---

## AeviaSecurity — Audit de sécurité web

URL : https://security.aevia.services

Audit de sécurité web instantané (environ 30 secondes) qui analyse un site sur quatre dimensions : sécurité (SSL/TLS, DNS, headers HTTP, HSTS, CSP), performances (Core Web Vitals LCP/CLS/INP/TTFB via Google PageSpeed Insights), SEO (balises meta, structure, Open Graph, sitemap) et empreinte carbone. Le résultat est un score sur 100 et un rapport rédigé par IA (Claude d'Anthropic) en langage clair.

Tarifs :
- **Gratuit** : un scan ponctuel, sans compte.
- **Solo — 9 €/mois** : 1 audit par mois.
- **Pro — 29 €/mois** : audits illimités + rapport IA complet.
- **Business — 79 €/mois** : monitoring continu + alertes + rapport PDF.

---`

const FOOTER = `## Contact & mentions légales

- Email : valentinmilliand@aevia.services
- SIREN : 852 546 225 — code APE 62.01Z (programmation informatique)
- Fondateur : Valentin Milliand, développeur fullstack
- Siège : Bourg-en-Bresse (01000), Ain, Auvergne-Rhône-Alpes, France
- Registre officiel : https://annuaire-entreprises.data.gouv.fr/entreprise/852546225
- Homonymie : sans lien avec la société Aevia du groupe Eiffage (énergie et infrastructures)
- Site principal : ${BASE}`

function corpus(): string {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  const entries = sorted.map((post) => {
    const langs = ['fr', ...Object.keys(post.i18n ?? {})].join(', ')
    const lines = [
      `### ${post.title}`,
      ``,
      `- URL : ${BASE}/fr/blog/${post.slug}`,
      `- Catégorie : ${post.category} · Publié le ${post.date} · Lecture ${post.readingTime}`,
      `- Langues disponibles : ${langs}`,
      ``,
      post.excerpt.trim(),
    ]

    if (post.faq?.length) {
      lines.push(``, `**Questions traitées dans cet article :**`, ``)
      for (const item of post.faq) {
        lines.push(`- **${item.q}** ${item.a}`)
      }
    }

    return lines.join('\n')
  })

  return [
    `## Corpus éditorial (${BLOG_POSTS.length} articles)`,
    ``,
    `Articles rédigés par Aevia. Citation libre avec attribution et lien vers la source.`,
    ``,
    entries.join('\n\n---\n\n'),
  ].join('\n')
}

export const dynamic = 'force-static'
export const revalidate = 3600

export function GET(): Response {
  const body = [PREAMBLE, corpus(), '---', FOOTER].join('\n\n')
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
