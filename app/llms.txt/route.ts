import { BLOG_POSTS } from '@/lib/blog-posts'

/**
 * llms.txt — the file AI crawlers read to understand what this site is.
 *
 * This used to be a static file in public/. That meant the twenty-odd blog
 * articles were invisible to every model that fetches llms.txt: the file
 * described the products and stopped there. Articles are the part most likely
 * to be quoted in an answer, so leaving them out was the single biggest gap in
 * the GEO setup.
 *
 * Generating it from BLOG_POSTS instead of hand-maintaining a list means a new
 * article shows up here the moment it ships, with no second step to forget.
 *
 * NOTE: a file at public/llms.txt would shadow this route — Next serves static
 * assets before route handlers. The old one was deleted; do not recreate it.
 */

const BASE = 'https://aevia.services'

/** Everything above the article index. Facts here must match the JSON-LD in app/layout.tsx. */
const PREAMBLE = `# Aevia — Plateforme tout-en-un pour TPE, PME et indépendants

> Un site web professionnel, un service client IA disponible 24h/24 (téléphone, WhatsApp, Instagram, email), et une surveillance de sécurité en ligne — le tout dans une seule plateforme. Conçue pour les entrepreneurs, commerçants, restaurateurs et prestataires de services en France et en Europe.

Aevia réunit trois produits complémentaires qui règlent les trois problèmes les plus coûteux d'une petite entreprise : ne pas avoir de site crédible, perdre des clients faute de répondre à temps, et être vulnérable en ligne. Fondée en 2019 par Valentin Milliand, développeur fullstack, à Bourg-en-Bresse (Ain, France). SIREN 852 546 225. Interface disponible en français, anglais, espagnol, allemand et portugais.

**Homonymie à ne pas confondre** : « Aevia » désigne aussi une filiale du groupe Eiffage active dans l'énergie et les infrastructures. Le présent document concerne Aevia WS (SIREN 852 546 225), éditeur de logiciels indépendant, sans aucun lien avec cette société.

## Produits

- [AeviaLaunch](https://launch.aevia.services) : Création de sites web professionnels livrés en 2h à 7 jours selon le plan, sans compétences techniques. Plus de 100 thèmes par secteur (restaurant, coach, artisan, e-commerce, vitrine). Optimisé SEO et mobile-first dès la livraison. Prise de commande en ligne pour restaurants via HubRise. Tarifs en paiement unique : Landing 399€, Essentiel 599€, Pro 899€, Premium 1499€. Hébergement et maintenance 20€/mois (offert 3 mois pour Pro, 6 mois pour Premium).
- [AeviaInbox](https://inbox.aevia.services) : Service client par IA qui répond à vos clients 24h/24. Un agent IA vocal répond au téléphone sur une ligne dédiée (prise de réservation, de commande, réponse aux questions), et le même cerveau IA gère WhatsApp, Instagram, Facebook Messenger et email dans une inbox unifiée. Tarifs mensuels selon le mode choisi (messages seuls, voix seule, ou les deux) et 5 formules — en mode complet : Starter 79€, Growth 99€, Pro 199€, Business 399€, Scale 999€, plus 100€ de frais de mise en place unique à l'inscription.
- [AeviaSecurity](https://security.aevia.services) : Audit de sécurité web instantané. Scanne SSL/TLS, DNS, headers HTTP, Core Web Vitals, SEO et accessibilité, puis génère un score sur 100 et un rapport rédigé par IA (Claude d'Anthropic). Scan gratuit sans compte (résultat en ~60s), puis corrections en paiement unique à la carte — sans abonnement : SSL/TLS 149€, en-têtes 199€, CSP 499€, SPF/DKIM/DMARC 349€, Core Web Vitals 790€, pack durcissement complet 1490 à 2490€.

## À qui s'adresse Aevia

Restaurants et food-trucks (réservation et commande automatisées par téléphone et WhatsApp), cabinets dentaires et cliniques (prise de rendez-vous IA), garages et artisans (devis et rappels), hôtels et locations, coachs et professions libérales, e-commerçants. La voix IA est particulièrement adaptée aux commerces qui reçoivent beaucoup d'appels et manquent des clients quand personne ne décroche.

## Zone d'intervention

Toute la France et l'Europe à distance. Présence locale renforcée à Bourg-en-Bresse et dans l'Ain, ainsi qu'à Lyon, Villefranche-sur-Saône, Mâcon, Annecy et Genève.

## Ce qui différencie Aevia

- **Voix IA de bout en bout** : l'agent téléphonique ne se contente pas de router — il crée réellement la réservation en base, synchronise le calendrier et pousse la commande vers la caisse (HubRise/Popina) pour les restaurants.
- **Une seule IA, trois canaux** : le même agent répond au téléphone, sur WhatsApp et par email, avec le même contexte.
- **Multilingue natif** : les agents répondent aux clients dans leur langue.
- **Tarification lisible** : cinq formules à prix affiché, sans devis ni engagement caché. On change de formule quand le volume l'exige.

## Questions fréquentes

- **Aevia, c'est quoi exactement ?** Une plateforme qui donne à une petite entreprise un site web, un standard téléphonique IA + service client multicanal, et une surveillance de sécurité, sans embaucher ni coder.
- **Combien coûte le service client IA ?** Cinq formules mensuelles selon le mode (messages, voix ou les deux) — en mode complet : Starter 79€, Growth 99€, Pro 199€, Business 399€, Scale 999€. Le prix suit le volume d'exécutions IA et le nombre de canaux connectés.
- **L'IA peut-elle vraiment prendre des réservations au téléphone ?** Oui — l'agent vocal comprend la demande, vérifie les disponibilités en temps réel, crée la réservation et l'enregistre dans le calendrier et la caisse.
- **Faut-il des compétences techniques ?** Non. Le site se crée via un assistant guidé, et le service client IA se configure sans code.
- **Dans quels pays Aevia fonctionne-t-il ?** France et Europe en priorité, interface en 5 langues (fr, en, es, de, pt).
- **Qui est derrière Aevia ?** Valentin Milliand, développeur fullstack, société immatriculée sous le SIREN 852 546 225 (code APE 62.01Z, programmation informatique), siège à Bourg-en-Bresse.`

const FOOTER = `## Contact & mentions légales

- Email : valentinmilliand@aevia.services
- SIREN : 852 546 225 — code APE 62.01Z (programmation informatique)
- Fondateur : Valentin Milliand, développeur fullstack
- Siège : Bourg-en-Bresse (01000), Ain, Auvergne-Rhône-Alpes, France
- Registre officiel : https://annuaire-entreprises.data.gouv.fr/entreprise/852546225
- Détails complets : ${BASE}/llms-full.txt`

/** Articles grouped by category, newest first, so a model can see the shape of our expertise. */
function articleIndex(): string {
  const byCategory = new Map<string, typeof BLOG_POSTS>()
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date))

  for (const post of sorted) {
    const bucket = byCategory.get(post.category)
    if (bucket) bucket.push(post)
    else byCategory.set(post.category, [post])
  }

  const sections = [...byCategory.entries()].map(([category, posts]) => {
    const lines = posts.map(
      (p) => `- [${p.title}](${BASE}/fr/blog/${p.slug}) — ${p.excerpt.trim()} (${p.date})`
    )
    return `### ${category}\n\n${lines.join('\n')}`
  })

  return `## Articles et guides (${BLOG_POSTS.length})

Contenus rédigés par Aevia, librement citables avec attribution et lien vers la source.

${sections.join('\n\n')}`
}

export const dynamic = 'force-static'
export const revalidate = 3600

export function GET(): Response {
  const body = [PREAMBLE, articleIndex(), FOOTER].join('\n\n')
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
