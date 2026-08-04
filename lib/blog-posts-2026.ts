import type { BlogPost } from "./blog-posts";

/**
 * Articles added from August 2026 onward.
 *
 * blog-posts.ts had grown past 5 000 lines, which makes every edit a merge
 * hazard for no benefit — the array is append-only in practice. New posts land
 * here instead and are concatenated into BLOG_POSTS.
 *
 * The import above is type-only, so it is erased at compile time and no runtime
 * import cycle exists between the two modules.
 *
 * Editorial rules these follow, because they are what actually earn rankings
 * and citations rather than just filling the index:
 * - every post answers one question a buyer types, not a topic we like;
 * - the "À retenir" block is written so a model can lift it verbatim;
 * - the FAQ mirrors real objections, and is emitted as FAQPage JSON-LD;
 * - figures are either sourced or given as ranges we can defend.
 */
export const BLOG_POSTS_2026: BlogPost[] = [
  {
    slug: "combien-coute-site-internet-professionnel-2026",
    title: "Combien coûte un site internet professionnel en 2026 ? Les prix réels",
    excerpt:
      "Entre le cousin qui le fait pour 200 € et l'agence qui annonce 12 000 €, l'écart n'est pas du hasard : il correspond à ce qui est réellement livré. Voici les fourchettes de prix par type de site, ce qui les justifie, et les coûts que personne ne vous annonce au départ.",
    date: "2026-08-01",
    readingTime: "8 min",
    category: "Web & Marketing",
    content: `## À retenir en 30 secondes

- **Site vitrine simple : 400 à 1 500 €**, site avec réservation ou boutique : 1 500 à 6 000 €, sur-mesure complexe : 6 000 € et plus
- **Le prix d'affichage n'est jamais le prix total** — comptez l'hébergement, le nom de domaine, la maintenance et les mises à jour
- **Un devis sans page de contenu chiffrée est un devis incomplet** : la rédaction représente souvent 30 % du travail réel
- **Le vrai risque n'est pas de payer trop cher, c'est de payer pour un site que personne ne visite** — un site sans référencement est une plaquette hors de prix

---

## Pourquoi les écarts de prix sont aussi grands

Quand un devis passe de 500 € à 8 000 € pour ce qui ressemble au même site, la différence n'est presque jamais dans le graphisme. Elle est dans trois choses invisibles depuis la page d'accueil : la quantité de contenu à produire, les fonctionnalités qui tournent derrière, et le temps passé à rendre le site trouvable.

Un site de cinq pages avec des textes fournis par le client n'a rien à voir avec un site de cinq pages dont il faut écrire chaque ligne, photographier les produits et structurer le référencement. Pourtant les deux se présentent identiquement dans un portfolio.

---

## Les fourchettes réelles par type de site

### Landing page — 300 à 800 €

Une seule page, un seul objectif : faire remplir un formulaire ou déclencher un appel. C'est le format le plus rentable quand vous avez déjà du trafic à envoyer quelque part (publicité, réseaux sociaux, salon professionnel).

Ce que ça inclut normalement : une page structurée en sections argumentaires, un formulaire relié à votre boîte mail, un design adapté au mobile, un hébergement.

### Site vitrine — 600 à 2 500 €

Quatre à huit pages : accueil, services, à propos, contact, parfois des pages par prestation. C'est le format standard pour un artisan, un cabinet, un commerce, un prestataire de services.

Le bas de la fourchette correspond à un modèle adapté à vos couleurs et vos textes. Le haut correspond à un design propre à votre marque, une rédaction professionnelle, et un travail de référencement local sérieux.

### Site avec réservation ou prise de rendez-vous — 1 500 à 5 000 €

Dès qu'un visiteur doit choisir un créneau, la complexité change de nature. Il faut gérer les disponibilités, les confirmations, les annulations, les rappels, et souvent la synchronisation avec un agenda existant.

### Boutique en ligne — 2 000 à 10 000 €

Le catalogue est le poste caché. Trente références avec photos, descriptions, variantes et stocks, c'est plusieurs jours de saisie que personne ne chiffre au départ. Ajoutez le paiement, la livraison, la TVA, les mentions légales de vente à distance.

### Sur-mesure — 6 000 € et au-delà

Espace client, connexion à un logiciel métier, calculateur de devis, multi-langues avec contenus distincts. Ici on ne parle plus de site mais d'application.

---

## Les coûts que personne n'annonce

| Poste | Fourchette annuelle | Évitable ? |
|---|---|---|
| Nom de domaine | 10 à 40 € | Non |
| Hébergement | 60 à 400 € | Non |
| Certificat SSL | 0 à 100 € | Souvent inclus |
| Maintenance et mises à jour | 200 à 1 200 € | Non si CMS |
| Modifications de contenu | 50 à 120 €/h | Oui, si vous êtes autonome |
| Sauvegardes | 0 à 150 € | Non |

Un site à 900 € qui coûte 800 € par an à entretenir revient plus cher sur trois ans qu'un site à 1 800 € tout compris. C'est le calcul que peu de devis vous permettent de faire.

---

## Les trois questions qui révèlent un devis honnête

**« Qui écrit les textes ? »** Si la réponse est floue, le budget explosera ou le site sortira avec du faux texte. La rédaction est le poste le plus sous-estimé.

**« Que se passe-t-il si je veux changer un tarif dans six mois ? »** Un site que vous ne pouvez pas modifier vous-même vous coûtera une intervention facturée à chaque virgule.

**« Le site sera-t-il trouvable sur Google, et sur quels mots ? »** Un prestataire sérieux vous parlera de requêtes précises et locales. Un prestataire qui répond « il sera optimisé SEO » ne vous a rien dit.

---

## Le vrai arbitrage : coût de création contre coût d'absence

Un commerce qui n'apparaît pas quand on cherche son métier dans sa ville perd des clients tous les jours, sans jamais le voir. C'est une perte silencieuse, donc facile à ignorer — contrairement à une facture.

Si vous recevez ne serait-ce qu'un client par mois grâce à votre site, avec un panier moyen de 150 €, le site est amorti en moins d'un an quelle que soit la fourchette dans laquelle vous êtes. La question n'est donc pas « combien ça coûte » mais « à partir de quand ça rapporte ».

---

## Et les solutions automatisées ?

Depuis deux ans, une troisième voie existe entre le constructeur de site où vous faites tout vous-même et l'agence à plusieurs milliers d'euros : des plateformes qui génèrent un site professionnel à partir de vos informations métier, avec le référencement déjà structuré.

L'intérêt n'est pas seulement le prix. C'est le délai : un site en ligne en quelques heures plutôt qu'en six semaines de va-et-vient. Le compromis, c'est que vous partez d'un modèle sectoriel plutôt que d'une création graphique originale — ce qui, pour 90 % des commerces et prestataires, n'a aucune conséquence commerciale.

[Aevia Launch](https://launch.aevia.services) fonctionne sur ce principe, avec des tarifs en paiement unique de 399 € à 1 499 € hébergement inclus.`,
    faq: [
      {
        q: "Quel est le prix moyen d'un site internet professionnel en France ?",
        a: "Pour une TPE ou un indépendant, le prix médian se situe entre 800 et 2 500 € pour un site vitrine. En dessous de 400 €, il s'agit généralement d'un modèle sans travail de contenu ni référencement. Au-dessus de 5 000 €, on entre dans le sur-mesure ou l'e-commerce.",
      },
      {
        q: "Faut-il payer un abonnement mensuel pour un site internet ?",
        a: "Pas nécessairement. Certains prestataires facturent un paiement unique avec hébergement inclus, d'autres un abonnement mensuel. Comparez toujours sur trois ans : un abonnement à 39 €/mois représente 1 400 € sur cette durée.",
      },
      {
        q: "Combien coûte la maintenance d'un site web par an ?",
        a: "Entre 200 et 1 200 € par an selon la technologie. Un site sur CMS demande des mises à jour régulières de sécurité ; une solution hébergée les inclut généralement dans son prix.",
      },
      {
        q: "Un site à moins de 500 € peut-il être sérieux ?",
        a: "Oui, à condition que le périmètre soit clair : une ou deux pages, vos textes, un modèle adapté. Le problème n'est pas le prix bas mais le prix bas annoncé pour un périmètre qui ne l'est pas.",
      },
    ],
    i18n: {
      en: {
        title: "How much does a professional website cost in 2026? The real numbers",
        excerpt:
          "Between the cousin who does it for €200 and the agency quoting €12,000, the gap is not random — it maps to what is actually delivered. Here are the real price ranges by site type, what justifies them, and the costs nobody mentions upfront.",
        category: "Web & Marketing",
        content: `## Key takeaways in 30 seconds

- **Simple brochure site: €400–1,500**, site with booking or a shop: €1,500–6,000, complex custom build: €6,000+
- **The headline price is never the total** — add domain, hosting, maintenance and updates
- **A quote with no line for content is an incomplete quote**: writing is often 30% of the real work
- **The real risk is not overpaying, it is paying for a site nobody visits** — a site without search visibility is an expensive brochure

---

## Why the spread is so wide

When quotes range from €500 to €8,000 for what looks like the same site, the difference is almost never the graphics. It is three things invisible from the homepage: how much content has to be produced, what runs behind the scenes, and how much time goes into making the site findable.

A five-page site with client-supplied copy has nothing in common with a five-page site where every line must be written and the search structure built. Both look identical in a portfolio.

---

## Real ranges by site type

### Landing page — €300–800

One page, one goal: get a form filled or a call placed. The most profitable format when you already have traffic to send somewhere.

### Brochure site — €600–2,500

Four to eight pages. The standard format for a tradesperson, a practice, a shop, a service provider. The low end is a template fitted to your colours and copy; the high end is a design specific to your brand plus serious local search work.

### Site with booking — €1,500–5,000

The moment a visitor picks a time slot, complexity changes nature: availability, confirmations, cancellations, reminders, calendar sync.

### Online shop — €2,000–10,000

The catalogue is the hidden cost. Thirty products with photos, descriptions, variants and stock is several days of data entry nobody quotes for.

### Custom build — €6,000 and up

Client area, connection to a business system, quote calculator. At this point it is an application, not a site.

---

## The costs nobody announces

| Item | Annual range | Avoidable? |
|---|---|---|
| Domain name | €10–40 | No |
| Hosting | €60–400 | No |
| SSL certificate | €0–100 | Usually included |
| Maintenance and updates | €200–1,200 | No, with a CMS |
| Content changes | €50–120/hr | Yes, if self-service |

A €900 site costing €800 a year to maintain is more expensive over three years than an €1,800 all-inclusive site. Most quotes make that comparison impossible.

---

## Three questions that expose an honest quote

**"Who writes the copy?"** A vague answer means the budget will grow or the site ships with placeholder text.

**"What happens if I want to change a price in six months?"** A site you cannot edit yourself costs a billed intervention per comma.

**"Will the site be findable on Google, and for which terms?"** A serious provider names specific local queries. "It will be SEO-optimised" tells you nothing.

---

## The real trade-off

A business that does not appear when someone searches its trade in its town loses customers daily without ever seeing it. That loss is silent, so it is easy to ignore — unlike an invoice.

One extra customer a month at a €150 average basket pays for the site within a year at any point in these ranges. The question is not what it costs, but when it starts paying.`,
        faq: [
          {
            q: "What is the average cost of a professional website?",
            a: "For a small business or freelancer, the median sits between €800 and €2,500 for a brochure site. Below €400 you are usually getting a template with no content or search work. Above €5,000 you are into custom builds or e-commerce.",
          },
          {
            q: "Do I have to pay a monthly subscription for a website?",
            a: "Not necessarily. Some providers charge once with hosting included, others monthly. Always compare over three years: €39/month is €1,400 over that period.",
          },
          {
            q: "How much does website maintenance cost per year?",
            a: "Between €200 and €1,200 depending on the technology. A CMS needs regular security updates; a hosted solution usually includes them.",
          },
          {
            q: "Can a site under €500 be any good?",
            a: "Yes, provided the scope is explicit: one or two pages, your copy, a template. The problem is never a low price — it is a low price announced for a scope that is not low.",
          },
        ],
      },
      es: {
        title: "¿Cuánto cuesta una página web profesional en 2026? Los precios reales",
        excerpt:
          "Entre el primo que la hace por 200 € y la agencia que pide 12.000 €, la diferencia no es casual: corresponde a lo que realmente se entrega. Aquí tienes los rangos reales por tipo de web, qué los justifica y los costes que nadie menciona al principio.",
        category: "Web y Marketing",
        content: `## Lo esencial en 30 segundos

- **Web informativa sencilla: 400–1.500 €**, con reservas o tienda: 1.500–6.000 €, a medida compleja: más de 6.000 €
- **El precio anunciado nunca es el total** — suma dominio, alojamiento, mantenimiento y actualizaciones
- **Un presupuesto sin partida de contenidos está incompleto**: la redacción suele ser el 30 % del trabajo real
- **El riesgo no es pagar de más, es pagar por una web que nadie visita**

---

## Por qué la horquilla es tan amplia

Cuando los presupuestos van de 500 € a 8.000 € por lo que parece la misma web, la diferencia casi nunca está en el diseño gráfico. Está en tres cosas invisibles desde la portada: cuánto contenido hay que producir, qué funciona por detrás, y cuánto tiempo se dedica a que la web se encuentre.

---

## Rangos reales por tipo

### Landing page — 300–800 €
Una página, un objetivo: rellenar un formulario o generar una llamada.

### Web informativa — 600–2.500 €
De cuatro a ocho páginas. El formato estándar para un autónomo, una consulta o un comercio.

### Web con reservas — 1.500–5.000 €
En cuanto el visitante elige una franja horaria, la complejidad cambia: disponibilidad, confirmaciones, cancelaciones, recordatorios.

### Tienda online — 2.000–10.000 €
El catálogo es el coste oculto. Treinta referencias con fotos, descripciones, variantes y stock son varios días de trabajo que nadie presupuesta.

### A medida — más de 6.000 €
Área de cliente, conexión con un software de gestión, calculadora de presupuestos. Aquí ya no es una web, es una aplicación.

---

## Los costes que nadie anuncia

| Concepto | Rango anual |
|---|---|
| Dominio | 10–40 € |
| Alojamiento | 60–400 € |
| Mantenimiento y actualizaciones | 200–1.200 € |
| Cambios de contenido | 50–120 €/h |

Una web de 900 € que cuesta 800 € al año de mantenimiento sale más cara a tres años que una de 1.800 € todo incluido.

---

## Tres preguntas que revelan un presupuesto honesto

**«¿Quién escribe los textos?»** Si la respuesta es vaga, el presupuesto crecerá o la web saldrá con texto de relleno.

**«¿Qué pasa si quiero cambiar un precio dentro de seis meses?»** Una web que no puedes editar te cuesta una intervención facturada por cada coma.

**«¿Se encontrará en Google, y con qué términos?»** Un proveedor serio nombra búsquedas concretas y locales.`,
        faq: [
          {
            q: "¿Cuál es el precio medio de una página web profesional?",
            a: "Para una pyme o un autónomo, la mediana está entre 800 y 2.500 € para una web informativa. Por debajo de 400 € suele tratarse de una plantilla sin trabajo de contenidos ni posicionamiento.",
          },
          {
            q: "¿Hay que pagar una cuota mensual por una web?",
            a: "No necesariamente. Algunos proveedores cobran un pago único con alojamiento incluido. Compara siempre a tres años: 39 €/mes son 1.400 € en ese periodo.",
          },
          {
            q: "¿Cuánto cuesta el mantenimiento anual de una web?",
            a: "Entre 200 y 1.200 € según la tecnología. Un CMS exige actualizaciones de seguridad periódicas; una solución alojada suele incluirlas.",
          },
          {
            q: "¿Puede ser seria una web de menos de 500 €?",
            a: "Sí, siempre que el alcance sea claro: una o dos páginas, tus textos, una plantilla. El problema no es el precio bajo, sino un precio bajo anunciado para un alcance que no lo es.",
          },
        ],
      },
    },
  },

  {
    slug: "standard-telephonique-ia-vs-secretariat-telephonique",
    title: "Standard téléphonique IA ou secrétariat téléphonique : lequel choisir ?",
    excerpt:
      "Les deux promettent la même chose — que personne ne tombe dans le vide au bout du fil. Mais le coût, la disponibilité et ce qui se passe réellement pendant l'appel n'ont rien à voir. Comparatif chiffré et critères de décision selon votre volume d'appels.",
    date: "2026-08-01",
    readingTime: "7 min",
    category: "IA Vocale & Téléphonie",
    content: `## À retenir en 30 secondes

- **Le secrétariat téléphonique facture à l'appel ou au forfait** : comptez 1,50 à 3 € par appel traité, ou 80 à 400 €/mois selon le volume
- **L'agent vocal IA facture au forfait ou à la minute**, sans plafond de simultanéité : dix appels en même temps coûtent le même prix unitaire qu'un seul
- **La vraie différence n'est pas le prix, c'est ce qui sort de l'appel** : un message à rappeler, ou un rendez-vous déjà inscrit dans votre agenda
- **Le secrétariat garde l'avantage sur les demandes émotionnelles ou hors script** ; l'IA garde l'avantage sur le volume, la nuit et les pics

---

## Ce que fait réellement chaque solution

Un **secrétariat téléphonique** est un service humain externalisé. Des téléopérateurs répondent à votre place, avec une fiche de consignes que vous avez rédigée. Ils prennent un message, filtrent, et vous transmettent par mail ou SMS. Certains prestataires vont jusqu'à la prise de rendez-vous si vous leur donnez accès à un agenda.

Un **agent vocal IA** est un logiciel qui décroche, comprend la demande en langage naturel, et exécute une action dans votre système : vérifier des disponibilités, créer une réservation, enregistrer une commande, répondre à une question sur vos horaires ou vos tarifs.

La distinction qui compte : le secrétariat produit majoritairement de l'information à traiter plus tard. L'agent vocal produit une action déjà terminée.

---

## Comparatif chiffré

| Critère | Secrétariat téléphonique | Agent vocal IA |
|---|---|---|
| Coût de départ | 0 à 150 € de mise en service | 0 à 200 € de configuration |
| Coût récurrent | 80 à 400 €/mois, ou 1,50–3 €/appel | 49 à 999 €/mois selon le volume |
| Horaires | Plages ouvrées, extensions payantes | 24h/24, 7j/7, sans supplément |
| Appels simultanés | Limités par l'effectif | Illimités en pratique |
| Langues | Selon l'équipe, souvent 1 à 2 | 5 langues et plus, sans surcoût |
| Résultat d'un appel | Un message à traiter | Une action exécutée |
| Nuances émotionnelles | Point fort | Point faible |
| Demandes hors script | Improvisation humaine | Transfert ou rappel |

---

## Le calcul que peu de gens font

Un restaurant qui reçoit 25 appels par jour, dont 18 pour une réservation, paiera environ 40 à 55 € par jour de secrétariat au tarif à l'appel — soit plus de 1 200 € par mois. Pour ce volume, le forfait IA est très nettement en dessous.

À l'inverse, un cabinet de conseil qui reçoit trois appels par jour, tous délicats et tous différents, n'a aucun intérêt à automatiser. Le secrétariat lui coûtera 100 € par mois et fera mieux.

**La règle empirique** : en dessous de 5 appels par jour avec des demandes variées, l'humain reste plus pertinent. Au-dessus de 15 appels par jour avec des demandes répétitives, l'écart bascule nettement en faveur de l'IA. Entre les deux, ça dépend de la répétitivité, pas du volume.

---

## Ce que l'IA fait mieux, concrètement

**Les heures creuses.** 30 à 40 % des appels d'un commerce arrivent en dehors des heures d'ouverture ou pendant le coup de feu. Ce sont précisément les appels qu'aucun humain ne prend et qu'aucun secrétariat ne couvre sans surcoût.

**Les pics.** Le vendredi soir dans un restaurant, six personnes appellent en même temps. Un secrétariat met cinq appels en attente ; un agent vocal les prend tous les six.

**L'exécution complète.** L'agent ne dit pas « je transmets ». Il vérifie la table de 20h, la réserve au nom donné, l'inscrit dans le logiciel de salle et envoie la confirmation.

---

## Ce que l'humain fait mieux

Un client en colère, un deuil, une annulation qui cache un litige, une négociation commerciale : ce sont des moments où la voix humaine n'est pas un luxe. Un bon secrétariat sait ralentir, s'excuser sincèrement, sentir qu'il faut passer la main.

C'est pourquoi la meilleure configuration n'est presque jamais l'un ou l'autre. L'agent vocal prend les appels standards — réservations, horaires, disponibilités — et bascule vers un humain dès que la demande sort du cadre.

---

## Comment décider en trois questions

1. **Quelle proportion de vos appels se ressemble ?** Notez vos appels pendant une semaine. Si plus de 60 % tiennent en trois motifs, l'automatisation est rentable.
2. **Combien d'appels ne sont jamais décrochés ?** Votre opérateur ou votre téléphone le donne. C'est le chiffre qui justifie la dépense, pas le nombre d'appels total.
3. **Que voulez-vous récupérer à la fin de l'appel ?** Si un message suffit, un secrétariat convient. Si vous voulez un rendez-vous déjà posé, il faut un système connecté à votre agenda.

---

Chez Aevia, l'agent vocal d'[Aevia Inbox](https://inbox.aevia.services) est conçu pour la troisième réponse : il ne transmet pas, il exécute — création de la réservation, synchronisation du calendrier, envoi de la confirmation — et transfère à un humain dès que la demande sort de son périmètre.`,
    faq: [
      {
        q: "Un agent vocal IA coûte-t-il moins cher qu'un secrétariat téléphonique ?",
        a: "Au-delà d'une quinzaine d'appels par jour, oui, et l'écart se creuse avec le volume puisque l'IA ne facture pas la simultanéité. En dessous de cinq appels par jour, un secrétariat humain reste souvent moins cher et plus adapté.",
      },
      {
        q: "L'appelant sait-il qu'il parle à une intelligence artificielle ?",
        a: "L'agent est transparent sur sa nature. En pratique, ce qui compte pour l'appelant est d'obtenir une réponse immédiate et une réservation confirmée plutôt que de tomber sur un répondeur.",
      },
      {
        q: "Que se passe-t-il si l'IA ne comprend pas la demande ?",
        a: "Elle transfère vers un numéro humain ou enregistre un rappel avec le contexte de l'appel. Un système bien configuré définit à l'avance les motifs qui doivent systématiquement basculer vers une personne.",
      },
      {
        q: "Peut-on combiner les deux ?",
        a: "C'est la configuration la plus efficace : l'IA absorbe les appels répétitifs et les heures non couvertes, un humain reprend la main sur les situations sensibles ou les demandes complexes.",
      },
    ],
    i18n: {
      en: {
        title: "AI phone agent or answering service: which one should you pick?",
        excerpt:
          "Both promise the same thing — that nobody reaches a void on the other end. But the cost, the availability and what actually happens during the call have nothing in common. A costed comparison and decision criteria based on your call volume.",
        category: "AI Voice & Telephony",
        content: `## Key takeaways in 30 seconds

- **Answering services bill per call or per plan**: roughly €1.50–3 per handled call, or €80–400/month by volume
- **An AI voice agent bills per plan or per minute**, with no concurrency ceiling: ten simultaneous calls cost the same per unit as one
- **The real difference is not price, it is what comes out of the call**: a message to call back, or an appointment already in your calendar
- **Humans keep the edge on emotional or off-script requests**; AI keeps it on volume, nights and peaks

---

## What each actually does

An **answering service** is outsourced humans. Operators answer for you using a brief you wrote, take a message, filter, and forward it by email or SMS.

An **AI voice agent** is software that picks up, understands the request in natural language, and performs an action in your system: check availability, create a booking, log an order, answer a question about hours or prices.

The distinction that matters: an answering service mostly produces information to process later. A voice agent produces a finished action.

---

## Costed comparison

| Criterion | Answering service | AI voice agent |
|---|---|---|
| Recurring cost | €80–400/mo, or €1.50–3/call | €49–999/mo by volume |
| Hours | Business hours, extensions cost extra | 24/7 at no premium |
| Simultaneous calls | Limited by headcount | Effectively unlimited |
| Languages | Usually 1–2 | 5+, no surcharge |
| Result of a call | A message to handle | An executed action |
| Emotional nuance | Strength | Weakness |

---

## The calculation few people run

A restaurant taking 25 calls a day, 18 of them bookings, pays roughly €40–55 a day on per-call pricing — over €1,200 a month. At that volume the AI plan is far below.

Conversely, a consultancy taking three delicate, all-different calls a day has no reason to automate.

**Rule of thumb**: below 5 calls a day with varied requests, humans win. Above 15 calls a day with repetitive requests, the gap swings clearly to AI. In between it depends on repetitiveness, not volume.

---

## Where AI is genuinely better

**Off-hours.** 30–40% of a shop's calls arrive outside opening hours or during the rush — exactly the calls no human takes.

**Peaks.** Friday evening, six people call at once. An answering service queues five; a voice agent takes all six.

**Full execution.** The agent does not say "I'll pass it on." It checks the 8pm table, books it, writes it to the floor system and sends the confirmation.

---

## Where humans are better

An angry customer, a bereavement, a cancellation hiding a dispute, a commercial negotiation. A good operator knows to slow down, apologise sincerely, and hand over.

Which is why the best setup is almost never one or the other: the voice agent takes standard calls and escalates the moment a request leaves the script.`,
        faq: [
          {
            q: "Is an AI voice agent cheaper than an answering service?",
            a: "Beyond roughly fifteen calls a day, yes, and the gap widens with volume because AI does not bill for concurrency. Below five calls a day a human service is often cheaper and better suited.",
          },
          {
            q: "Does the caller know they are talking to an AI?",
            a: "The agent is transparent about what it is. In practice what matters to the caller is an immediate answer and a confirmed booking rather than voicemail.",
          },
          {
            q: "What happens if the AI does not understand?",
            a: "It transfers to a human number or logs a callback with the call context. A well-configured system defines upfront which topics always escalate.",
          },
          {
            q: "Can the two be combined?",
            a: "That is the most effective setup: AI absorbs repetitive calls and uncovered hours, a human takes over sensitive or complex situations.",
          },
        ],
      },
      es: {
        title: "Centralita con IA o servicio de secretaría telefónica: ¿cuál elegir?",
        excerpt:
          "Ambos prometen lo mismo: que nadie se encuentre con el vacío al otro lado. Pero el coste, la disponibilidad y lo que ocurre durante la llamada no tienen nada que ver. Comparativa con cifras y criterios de decisión según tu volumen.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **La secretaría telefónica factura por llamada o por cuota**: entre 1,50 y 3 € por llamada atendida, o de 80 a 400 €/mes
- **El agente de voz IA factura por plan o por minuto**, sin límite de simultaneidad
- **La diferencia real no es el precio, es lo que sale de la llamada**: un mensaje que devolver, o una cita ya en tu agenda
- **El humano gana en situaciones emocionales o fuera de guion**; la IA gana en volumen, noches y picos

---

## Qué hace realmente cada solución

Una **secretaría telefónica** son personas externalizadas que responden por ti con unas instrucciones que has redactado, toman un mensaje y te lo trasladan.

Un **agente de voz IA** es software que descuelga, entiende la petición en lenguaje natural y ejecuta una acción en tu sistema: comprobar disponibilidad, crear una reserva, registrar un pedido.

La distinción que importa: la secretaría produce información que procesarás después. El agente produce una acción ya terminada.

---

## Comparativa

| Criterio | Secretaría | Agente IA |
|---|---|---|
| Coste recurrente | 80–400 €/mes o 1,50–3 €/llamada | 49–999 €/mes |
| Horario | Horario laboral | 24/7 sin recargo |
| Llamadas simultáneas | Limitadas por plantilla | Prácticamente ilimitadas |
| Idiomas | 1 o 2 | 5 o más |
| Resultado | Un mensaje | Una acción ejecutada |

---

## El cálculo que pocos hacen

Un restaurante con 25 llamadas al día, 18 de ellas reservas, paga unos 40–55 € diarios con tarificación por llamada: más de 1.200 € al mes. A ese volumen, el plan de IA queda muy por debajo.

**Regla práctica**: por debajo de 5 llamadas al día con peticiones variadas, gana el humano. Por encima de 15 con peticiones repetitivas, gana claramente la IA.

---

## Dónde la IA es mejor

**Fuera de horario.** Entre el 30 y el 40 % de las llamadas llegan fuera del horario o en plena hora punta.

**Picos.** Un viernes por la noche llaman seis personas a la vez. La IA las atiende a todas.

**Ejecución completa.** El agente no dice «se lo paso»: comprueba la mesa, la reserva y envía la confirmación.

---

## Dónde el humano es mejor

Un cliente enfadado, un duelo, una negociación. Por eso la mejor configuración casi nunca es una u otra: la IA atiende lo estándar y deriva a una persona en cuanto la petición se sale del guion.`,
        faq: [
          {
            q: "¿Un agente de voz IA es más barato que una secretaría telefónica?",
            a: "A partir de unas quince llamadas diarias, sí, y la diferencia crece con el volumen porque la IA no factura la simultaneidad. Por debajo de cinco llamadas al día, el servicio humano suele salir más barato.",
          },
          {
            q: "¿Sabe quien llama que habla con una IA?",
            a: "El agente es transparente sobre su naturaleza. En la práctica, lo que importa es obtener respuesta inmediata en lugar de un contestador.",
          },
          {
            q: "¿Qué pasa si la IA no entiende la petición?",
            a: "Transfiere a un número humano o registra una devolución de llamada con el contexto.",
          },
          {
            q: "¿Se pueden combinar ambas?",
            a: "Es la configuración más eficaz: la IA absorbe lo repetitivo y las horas no cubiertas, y una persona retoma las situaciones sensibles.",
          },
        ],
      },
    },
  },

  {
    slug: "chatbot-vs-agent-ia-conversationnel-difference",
    title: "Chatbot ou agent IA : quelle différence, et lequel vous faut-il ?",
    excerpt:
      "On appelle « chatbot » à peu près tout ce qui répond automatiquement, ce qui masque une différence de nature. L'un suit un arbre de décision écrit à l'avance, l'autre comprend et agit. Voici comment les distinguer et lequel correspond à votre besoin.",
    date: "2026-08-01",
    readingTime: "6 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Un chatbot classique suit un script** : boutons, arbre de décision, réponses pré-écrites. Il ne comprend pas, il aiguille.
- **Un agent IA conversationnel comprend la formulation libre** et peut exécuter une action : réserver, chercher une commande, modifier un rendez-vous.
- **La différence visible pour le client** : le chatbot vous fait cliquer sur « Autre demande », l'agent répond à la demande.
- **Le chatbot reste pertinent** pour des parcours très courts et très cadrés. Au-delà, il génère plus de frustration qu'il n'économise de temps.

---

## Trois générations, souvent confondues

**Le chatbot à boutons.** Vous cliquez sur « Horaires », « Tarifs », « Nous joindre ». C'est un menu déguisé en conversation. Utile pour trois informations fixes, exaspérant dès que votre question n'est pas dans la liste.

**Le chatbot à mots-clés.** Il cherche des mots dans votre phrase et déclenche la réponse associée. « Je voudrais annuler ma réservation de jeudi » déclenche la réponse « annulation », mais il ne sait pas de quelle réservation vous parlez.

**L'agent IA conversationnel.** Il interprète la phrase entière, retient le contexte des messages précédents, interroge vos données réelles et exécute l'action. « Je voudrais décaler jeudi à vendredi » devient : identifier le client, retrouver le créneau de jeudi, vérifier vendredi, déplacer, confirmer.

---

## Le test qui les sépare en une question

Posez une question composée : **« Vous êtes ouverts samedi et est-ce que vous livrez à Bourg-en-Bresse ? »**

- Le chatbot à boutons ne peut pas la recevoir.
- Le chatbot à mots-clés attrape un des deux sujets et ignore l'autre.
- L'agent IA répond aux deux, dans le bon ordre.

C'est exactement le type de question que posent les vrais clients, parce que personne ne formule une demande à la fois.

---

## Ce que ça change commercialement

Le coût d'un chatbot mal placé n'est pas visible dans une facture : il est dans les clients qui abandonnent. Quand un visiteur clique trois fois sans obtenir sa réponse, il ne vous écrit pas pour se plaindre — il ferme l'onglet et appelle le concurrent.

À l'inverse, un agent qui répond en formulation libre transforme une question en action. Le visiteur ne demande plus « comment réserver », il réserve dans la conversation.

---

## Quand un simple chatbot suffit

Il n'y a pas de honte à rester simple. Un chatbot à boutons fait le travail si :

- vous avez moins de cinq questions récurrentes, toutes factuelles ;
- votre objectif est de filtrer avant un contact humain, pas de traiter la demande ;
- votre volume est faible et le budget serré.

Dans ce cas, un bandeau clair avec vos horaires et un bouton d'appel fait souvent mieux qu'un chatbot.

---

## Quand il vous faut un agent IA

- Vos clients écrivent des demandes composées, avec des dates, des noms, des quantités.
- La réponse dépend de vos données : disponibilités, stocks, historique client.
- Vous recevez des messages sur plusieurs canaux et vous voulez la même qualité partout.
- Vous perdez des demandes la nuit et le week-end.

---

## Le critère décisif : lire ou agir

Posez-vous une seule question : **voulez-vous que le système informe, ou qu'il termine le travail ?**

Informer, c'est afficher une réponse. Terminer le travail, c'est écrire une ligne dans votre base : une réservation, une commande, un rendez-vous déplacé. Cette seconde catégorie demande un agent connecté à vos outils, pas un widget de conversation.

C'est la logique d'[Aevia Inbox](https://inbox.aevia.services) : le même cerveau IA répond sur WhatsApp, Instagram, e-mail et au téléphone, avec accès aux disponibilités réelles — et il crée la réservation plutôt que d'expliquer comment en créer une.`,
    faq: [
      {
        q: "Quelle est la différence entre un chatbot et un agent IA ?",
        a: "Un chatbot suit un scénario prédéfini (boutons ou mots-clés) et affiche des réponses écrites à l'avance. Un agent IA conversationnel interprète une demande formulée librement, garde le contexte de l'échange et peut exécuter une action dans vos systèmes, comme créer une réservation.",
      },
      {
        q: "Un agent IA peut-il se tromper ?",
        a: "Oui, comme un humain. La différence est qu'un agent bien configuré connaît ses limites : quand la demande sort de son périmètre, il transfère à une personne au lieu d'inventer une réponse.",
      },
      {
        q: "Faut-il un développeur pour mettre en place un agent IA ?",
        a: "Plus aujourd'hui pour les cas standards. Les plateformes actuelles se configurent en décrivant votre activité, vos horaires et vos règles ; le développement reste nécessaire pour connecter un logiciel métier peu courant.",
      },
      {
        q: "Un agent IA remplace-t-il le service client humain ?",
        a: "Non. Il absorbe les demandes répétitives et les heures non couvertes, ce qui libère l'équipe pour les situations où la présence humaine change réellement quelque chose.",
      },
    ],
    i18n: {
      en: {
        title: "Chatbot or AI agent: what is the difference, and which do you need?",
        excerpt:
          "Almost anything that replies automatically gets called a chatbot, which hides a difference in kind. One follows a decision tree written in advance; the other understands and acts. Here is how to tell them apart and which fits your need.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **A classic chatbot follows a script**: buttons, decision tree, pre-written answers. It does not understand, it routes.
- **A conversational AI agent understands free-form phrasing** and can execute an action: book, look up an order, move an appointment.
- **What the customer sees**: the chatbot makes you click "Other request"; the agent answers the request.
- **Chatbots remain valid** for very short, tightly framed journeys. Beyond that they create more frustration than they save time.

---

## Three generations, routinely confused

**The button chatbot.** You click "Hours", "Prices", "Contact us". It is a menu dressed as a conversation.

**The keyword chatbot.** It scans your sentence for words and fires the matching answer. "I'd like to cancel Thursday's booking" triggers the cancellation reply, but it does not know which booking.

**The conversational AI agent.** It interprets the whole sentence, keeps context across messages, queries your real data and performs the action.

---

## The one question that separates them

Ask a compound question: **"Are you open Saturday and do you deliver to Lyon?"**

- The button chatbot cannot receive it.
- The keyword chatbot catches one topic and ignores the other.
- The AI agent answers both, in order.

That is exactly how real customers write, because nobody asks one thing at a time.

---

## What it changes commercially

The cost of a badly placed chatbot never shows on an invoice — it shows in customers who give up. After three clicks without an answer, a visitor does not complain. They close the tab and call your competitor.

---

## When a simple chatbot is enough

- fewer than five recurring, purely factual questions;
- your goal is to filter before a human contact, not to resolve;
- low volume and a tight budget.

---

## When you need an AI agent

- customers write compound requests with dates, names, quantities;
- the answer depends on your data: availability, stock, history;
- you receive messages on several channels and want equal quality on all;
- you lose enquiries at night and at weekends.

---

## The deciding criterion: inform or finish

Ask one question: **do you want the system to inform, or to finish the job?**

Informing displays an answer. Finishing writes a row in your database. The second needs an agent connected to your tools, not a chat widget.`,
        faq: [
          {
            q: "What is the difference between a chatbot and an AI agent?",
            a: "A chatbot follows a predefined script and shows pre-written answers. A conversational AI agent interprets free-form requests, keeps context, and can execute an action in your systems, such as creating a booking.",
          },
          {
            q: "Can an AI agent get things wrong?",
            a: "Yes, like a human. The difference is that a well-configured agent knows its limits: outside its scope it hands over to a person instead of inventing an answer.",
          },
          {
            q: "Do I need a developer to set up an AI agent?",
            a: "Not for standard cases anymore. Current platforms are configured by describing your business, hours and rules; development is still needed to connect an unusual back-office system.",
          },
          {
            q: "Does an AI agent replace human support?",
            a: "No. It absorbs repetitive requests and uncovered hours, which frees the team for the situations where a human presence genuinely changes the outcome.",
          },
        ],
      },
      es: {
        title: "Chatbot o agente de IA: qué diferencia hay y cuál necesitas",
        excerpt:
          "Se llama «chatbot» a casi todo lo que responde automáticamente, y eso oculta una diferencia de naturaleza. Uno sigue un árbol de decisión escrito de antemano; el otro entiende y actúa. Así se distinguen.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Un chatbot clásico sigue un guion**: botones, árbol de decisión, respuestas preescritas. No entiende, deriva.
- **Un agente de IA conversacional entiende el lenguaje libre** y puede ejecutar una acción: reservar, buscar un pedido, cambiar una cita.
- **Lo que ve el cliente**: el chatbot te hace pulsar «Otra consulta»; el agente responde a la consulta.

---

## Tres generaciones que se confunden

**El chatbot de botones.** Pulsas «Horarios», «Precios», «Contacto». Es un menú disfrazado de conversación.

**El chatbot de palabras clave.** Busca palabras en tu frase y lanza la respuesta asociada, pero no sabe de qué reserva hablas.

**El agente de IA conversacional.** Interpreta la frase completa, mantiene el contexto, consulta tus datos reales y ejecuta la acción.

---

## La pregunta que los separa

Haz una pregunta compuesta: **«¿Abrís el sábado y hacéis envíos a Lyon?»**

- El chatbot de botones no puede recibirla.
- El de palabras clave capta un tema e ignora el otro.
- El agente de IA responde a ambos.

Así escriben los clientes reales: nadie pregunta una cosa cada vez.

---

## Cuándo basta un chatbot sencillo

- menos de cinco preguntas recurrentes, todas factuales;
- tu objetivo es filtrar antes del contacto humano;
- volumen bajo y presupuesto ajustado.

---

## Cuándo necesitas un agente de IA

- tus clientes escriben peticiones compuestas con fechas, nombres y cantidades;
- la respuesta depende de tus datos: disponibilidad, stock, historial;
- pierdes consultas por la noche y los fines de semana.

---

## El criterio decisivo: informar o resolver

¿Quieres que el sistema informe o que termine el trabajo? Informar es mostrar una respuesta. Terminar es escribir una línea en tu base de datos.`,
        faq: [
          {
            q: "¿Cuál es la diferencia entre un chatbot y un agente de IA?",
            a: "Un chatbot sigue un guion predefinido y muestra respuestas preescritas. Un agente de IA conversacional interpreta peticiones libres, mantiene el contexto y puede ejecutar una acción en tus sistemas, como crear una reserva.",
          },
          {
            q: "¿Puede equivocarse un agente de IA?",
            a: "Sí, como una persona. La diferencia es que un agente bien configurado conoce sus límites: fuera de su alcance deriva a un humano en lugar de inventar.",
          },
          {
            q: "¿Hace falta un programador para poner en marcha un agente de IA?",
            a: "Ya no para los casos estándar. Las plataformas actuales se configuran describiendo tu actividad, horarios y reglas.",
          },
          {
            q: "¿Sustituye un agente de IA al servicio de atención humano?",
            a: "No. Absorbe lo repetitivo y las horas sin cobertura, lo que libera al equipo para las situaciones donde la presencia humana marca la diferencia.",
          },
        ],
      },
    },
  },
];
