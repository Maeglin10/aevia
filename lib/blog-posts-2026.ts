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
  {
    slug: "service-client-multilingue-ia-international",
    title: "Vendre à l'international sans embaucher : le service client multilingue par IA",
    excerpt:
      "Répondre en cinq langues demandait cinq salariés, ou un prestataire hors de prix. Ce verrou a sauté. Voici ce que change un service client multilingue automatisé pour une petite structure qui vend au-delà de ses frontières, et les pièges qui restent.",
    date: "2026-08-01",
    readingTime: "7 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **La barrière de la langue n'est plus un coût fixe** : un agent IA répond dans la langue du client sans effectif supplémentaire par marché
- **Le vrai frein n'est pas la traduction, c'est le fuseau horaire** — un client à Bogotá écrit quand votre bureau dort
- **Traduire n'est pas localiser** : les devises, les formats de date et les usages commerciaux changent d'un pays à l'autre
- **Commencez par une langue et un pays**, mesurez, puis dupliquez — l'ouverture simultanée de cinq marchés dilue tout

---

## Le calcul qui bloquait l'international

Jusqu'à récemment, servir un marché étranger imposait un choix binaire : embaucher quelqu'un qui parle la langue, ou renoncer. Pour une entreprise de trois personnes, cela signifiait qu'un marché de 40 millions d'habitants restait fermé parce qu'il manquait un salarié à 35 000 € par an.

Ce calcul a changé. Un agent conversationnel répond en français, anglais, espagnol, allemand ou portugais avec la même qualité, sans que le coût dépende du nombre de langues. La langue est devenue un paramètre, pas un poste de dépense.

---

## Ce que ça débloque concrètement

**Vous pouvez tester un marché sans vous engager.** Ouvrir l'Espagne demandait un recrutement ; cela demande maintenant une page traduite et un agent configuré. Si le marché ne répond pas, vous avez perdu quelques jours, pas une année de salaire.

**Vous couvrez les fuseaux horaires sans travail de nuit.** C'est le point le plus sous-estimé. Un prospect canadien qui écrit à 21h heure de Montréal vous joint à 3h du matin. Sans réponse automatique, il a déjà écrit à trois concurrents avant votre réveil.

**Vous ne perdez plus les demandes dans une langue que vous ne lisez pas.** Beaucoup de petites structures ont un dossier d'e-mails qu'elles n'ont jamais traités parce qu'ils étaient en allemand.

---

## Les quatre pièges qui restent

### 1. Traduire ne suffit pas

Un texte traduit mot à mot sonne étranger. Les usages commerciaux diffèrent : le tutoiement est normal en Espagne dans un contexte où le français exigerait du vous ; l'allemand attend plus de précision factuelle et moins d'emphase ; l'anglais britannique et américain n'ont pas les mêmes conventions de politesse.

### 2. Les devises et les formats

Afficher « 399 € » à un client colombien lui demande un calcul mental et une conversion qu'il ne fera pas. Les formats de date (12/06 signifie juin au Royaume-Uni et décembre aux États-Unis) provoquent de vraies erreurs de réservation.

### 3. Le paiement

Chaque marché a ses habitudes : carte en France, virement instantané en Allemagne, portefeuilles mobiles en Amérique latine. Proposer uniquement la carte ferme une partie du marché sans que vous le voyiez.

### 4. Les obligations locales

Mentions légales, conditions de vente, droit de rétractation et fiscalité changent d'un pays à l'autre. Un service client automatisé ne vous dispense pas de conditions générales adaptées au marché visé.

---

## La méthode qui marche : un marché à la fois

1. **Choisissez le marché où vous avez déjà des signaux** — des visites, une demande spontanée, un client existant qui a parlé de vous.
2. **Traduisez d'abord ce qui convertit** : la page produit, la page tarifs, la FAQ. Le blog vient après.
3. **Configurez l'agent dans cette langue** et vérifiez ses réponses sur vos vingt questions les plus fréquentes.
4. **Mesurez pendant six semaines** : demandes reçues, taux de réponse, demandes converties.
5. **Ne dupliquez que si les chiffres suivent.**

---

## Ce que ça donne pour une TPE

Une entreprise basée en France peut aujourd'hui servir un client espagnol, canadien ou colombien avec le même outillage que son voisin de palier. Le site est livré multilingue, l'agent répond dans la langue du visiteur sur WhatsApp, Instagram, e-mail ou au téléphone, et les demandes arrivent dans une seule boîte quel que soit le canal ou la langue.

C'est ce que fait [Aevia Inbox](https://inbox.aevia.services) : cinq langues natives, aucun surcoût par langue, et le même contexte client d'un canal à l'autre. Le siège est en France ; les clients servis ne le sont pas nécessairement.`,
    faq: [
      {
        q: "Un agent IA peut-il vraiment répondre correctement dans plusieurs langues ?",
        a: "Oui pour les échanges de service client courants : questions sur les horaires, les prix, la disponibilité, prise de rendez-vous. La qualité est comparable d'une langue à l'autre. Pour la négociation commerciale ou les sujets sensibles, un relais humain reste préférable.",
      },
      {
        q: "Faut-il un site traduit pour servir un marché étranger ?",
        a: "Au minimum les pages qui convertissent : produit, tarifs, contact et FAQ. Un agent multilingue sur un site entièrement en français crée une incohérence qui réduit la confiance.",
      },
      {
        q: "Combien coûte l'ajout d'une langue ?",
        a: "Sur une solution multilingue native, rien de plus par langue — le coût suit le volume de messages, pas le nombre de langues. Ce qui coûte, c'est la traduction du site et l'adaptation des conditions de vente au marché visé.",
      },
      {
        q: "Peut-on servir un fuseau horaire éloigné sans travailler la nuit ?",
        a: "C'est précisément l'intérêt : l'agent répond immédiatement quelle que soit l'heure, prend le rendez-vous ou la commande, et vous traitez le reste pendant vos heures ouvrées.",
      },
    ],
    i18n: {
      en: {
        title: "Selling internationally without hiring: multilingual AI customer service",
        excerpt:
          "Answering in five languages used to mean five employees, or an agency you could not afford. That constraint is gone. Here is what automated multilingual support changes for a small company selling across borders — and the traps that remain.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **Language is no longer a fixed cost**: an AI agent replies in the customer's language with no extra headcount per market
- **The real obstacle is not translation, it is the time zone** — a customer in Bogotá writes while your office sleeps
- **Translating is not localising**: currencies, date formats and commercial conventions differ by country
- **Start with one language and one country**, measure, then repeat — opening five markets at once dilutes everything

---

## The calculation that used to block expansion

Until recently, serving a foreign market forced a binary choice: hire someone who speaks the language, or give up. For a three-person company that meant a market of 40 million people stayed closed for want of one salary.

That calculation changed. A conversational agent answers in French, English, Spanish, German or Portuguese at equal quality, and the cost does not scale with the number of languages. Language became a setting, not a budget line.

---

## What it actually unlocks

**You can test a market without committing.** Opening Spain used to require a hire. Now it requires a translated page and a configured agent. If the market does not respond, you lost a few days rather than a year of salary.

**You cover time zones without night shifts.** The most underrated point. A Canadian prospect writing at 9pm Montreal time reaches you at 3am. Without an automatic reply they have written to three competitors before you wake.

**You stop losing enquiries in languages you cannot read.** Many small companies have a folder of emails they never handled because they were in German.

---

## The four traps that remain

### 1. Translation is not enough
Word-for-word text reads foreign. Commercial conventions differ: German expects factual precision over emphasis; British and American English do not share politeness conventions.

### 2. Currencies and formats
Showing "€399" to a Colombian customer demands a mental conversion they will not perform. Date formats cause genuine booking errors — 12/06 is June in the UK and December in the US.

### 3. Payment
Every market has habits: cards in France, instant transfer in Germany, mobile wallets across Latin America. Offering cards only closes part of the market invisibly.

### 4. Local obligations
Legal notices, terms of sale, withdrawal rights and tax differ by country. Automated support does not exempt you from terms adapted to the market.

---

## The method that works: one market at a time

1. **Pick the market where you already have signals** — visits, an unsolicited enquiry, an existing customer who referred you.
2. **Translate what converts first**: product page, pricing, FAQ. The blog comes later.
3. **Configure the agent in that language** and check its answers against your twenty most common questions.
4. **Measure for six weeks**: enquiries received, response rate, conversions.
5. **Only duplicate if the numbers follow.**`,
        faq: [
          {
            q: "Can an AI agent really answer well in several languages?",
            a: "Yes for common support exchanges: hours, prices, availability, booking. Quality is comparable across languages. For commercial negotiation or sensitive topics a human handover is still preferable.",
          },
          {
            q: "Do I need a translated website to serve a foreign market?",
            a: "At minimum the pages that convert: product, pricing, contact and FAQ. A multilingual agent on an all-French site creates an inconsistency that costs trust.",
          },
          {
            q: "What does adding a language cost?",
            a: "On a natively multilingual solution, nothing extra per language — cost follows message volume, not language count. What costs is translating the site and adapting your terms to the market.",
          },
          {
            q: "Can I serve a distant time zone without working nights?",
            a: "That is precisely the point: the agent replies immediately whatever the hour, takes the booking or order, and you handle the rest during your own working hours.",
          },
        ],
      },
      es: {
        title: "Vender en el extranjero sin contratar: atención al cliente multilingüe con IA",
        excerpt:
          "Responder en cinco idiomas exigía cinco empleados o una agencia inasumible. Ese candado ha saltado. Esto es lo que cambia una atención multilingüe automatizada para una empresa pequeña que vende fuera de sus fronteras.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **El idioma ya no es un coste fijo**: un agente de IA responde en la lengua del cliente sin plantilla adicional por mercado
- **El freno real no es la traducción, es el huso horario** — un cliente en Bogotá escribe cuando tu oficina duerme
- **Traducir no es localizar**: divisas, formatos de fecha y usos comerciales cambian por país
- **Empieza por un idioma y un país**, mide y luego replica

---

## El cálculo que bloqueaba la internacionalización

Hasta hace poco, atender un mercado extranjero imponía una elección binaria: contratar a alguien que hablara el idioma, o renunciar. Para una empresa de tres personas, un mercado de 40 millones de habitantes quedaba cerrado por falta de un sueldo.

Ese cálculo ha cambiado. El idioma es ahora un parámetro, no una partida de gasto.

---

## Qué desbloquea en la práctica

**Puedes probar un mercado sin comprometerte.** Abrir España exigía una contratación; ahora exige una página traducida y un agente configurado.

**Cubres husos horarios sin trabajar de noche.** Un cliente canadiense que escribe a las 21h de Montreal te llega a las 3 de la madrugada. Sin respuesta automática, ya ha escrito a tres competidores.

**Dejas de perder consultas en idiomas que no lees.**

---

## Las cuatro trampas que quedan

### 1. Traducir no basta
Un texto traducido palabra por palabra suena extranjero. Los usos comerciales difieren.

### 2. Divisas y formatos
Mostrar «399 €» a un cliente colombiano exige una conversión mental que no hará. Los formatos de fecha provocan errores reales de reserva.

### 3. El pago
Cada mercado tiene sus hábitos: tarjeta en Francia, transferencia inmediata en Alemania, monederos móviles en Latinoamérica.

### 4. Las obligaciones locales
Avisos legales, condiciones de venta, derecho de desistimiento y fiscalidad cambian por país.

---

## El método que funciona: un mercado cada vez

1. Elige el mercado donde ya tengas señales.
2. Traduce primero lo que convierte: producto, precios, FAQ.
3. Configura el agente en ese idioma y revisa sus respuestas.
4. Mide durante seis semanas.
5. Replica solo si los números acompañan.`,
        faq: [
          {
            q: "¿Puede un agente de IA responder bien en varios idiomas?",
            a: "Sí para los intercambios habituales de atención: horarios, precios, disponibilidad, reservas. La calidad es comparable entre idiomas. Para negociación comercial conviene el relevo humano.",
          },
          {
            q: "¿Hace falta una web traducida para atender un mercado extranjero?",
            a: "Como mínimo las páginas que convierten: producto, precios, contacto y FAQ. Un agente multilingüe sobre una web solo en francés genera una incoherencia que resta confianza.",
          },
          {
            q: "¿Cuánto cuesta añadir un idioma?",
            a: "En una solución multilingüe nativa, nada más por idioma: el coste sigue al volumen de mensajes. Lo que cuesta es traducir la web y adaptar las condiciones al mercado.",
          },
          {
            q: "¿Se puede atender un huso horario lejano sin trabajar de noche?",
            a: "Es justamente el objetivo: el agente responde de inmediato a cualquier hora y tú tratas el resto en tu horario.",
          },
        ],
      },
    },
  },

  {
    slug: "whatsapp-business-api-ou-application-difference",
    title: "WhatsApp Business : application gratuite ou API, laquelle vous faut-il ?",
    excerpt:
      "Deux produits portent le même nom et ne font pas le même métier. L'un est une application sur un téléphone, l'autre une infrastructure sans écran. Choisir le mauvais coûte soit de l'argent inutile, soit un blocage de compte au pire moment.",
    date: "2026-08-01",
    readingTime: "6 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **L'application WhatsApp Business est gratuite**, tourne sur un téléphone, et convient jusqu'à environ 5 conversations par jour
- **L'API WhatsApp Business n'a pas d'interface** : c'est une connexion technique branchée sur un outil, faite pour le volume et le travail à plusieurs
- **Un numéro ne peut pas être sur les deux à la fois** — le passage à l'API est un aller sans retour simple
- **Envoyer des messages non sollicités depuis l'application est le meilleur moyen de faire bloquer son numéro**

---

## Deux produits, un seul nom

WhatsApp propose deux choses très différentes sous la même marque.

**L'application WhatsApp Business** s'installe comme WhatsApp classique. Elle ajoute un profil d'entreprise, un catalogue simple, des réponses rapides et des étiquettes. Elle est gratuite et fonctionne sur un téléphone, avec une extension possible sur ordinateur.

**L'API WhatsApp Business** n'a aucune interface. C'est un canal technique que vous connectez à un logiciel : une boîte de réception partagée, un CRM, un agent IA. Vous ne « voyez » pas l'API, vous voyez l'outil qui l'utilise.

---

## Comparatif

| Critère | Application | API |
|---|---|---|
| Prix | Gratuit | Facturé à la conversation, via un fournisseur |
| Interface | Oui, sur téléphone | Aucune, passe par un outil |
| Utilisateurs simultanés | 1 téléphone (+ 4 appareils liés) | Illimité |
| Automatisation | Réponses rapides basiques | Complète, agent IA possible |
| Historique partagé | Non | Oui |
| Messages en masse | Fortement limité, risque de blocage | Autorisé via modèles validés |
| Statistiques | Minimales | Complètes |

---

## Le seuil de bascule

Il y a trois signaux qui indiquent que l'application ne suffit plus :

1. **Plusieurs personnes doivent répondre.** L'application est liée à un téléphone. Dès que deux salariés doivent traiter les mêmes conversations, vous vous retrouvez à faire tourner un appareil, ce qui est intenable.
2. **Vous perdez le fil.** Sans historique partagé ni attribution, une demande sur deux se traite deux fois ou pas du tout.
3. **Vous voulez répondre automatiquement.** Les réponses rapides de l'application ne comprennent pas la demande : elles collent un texte que vous avez écrit.

---

## Le piège qui coûte le plus cher

Beaucoup d'entreprises utilisent l'application pour envoyer des promotions à une liste de clients. WhatsApp le détecte, et le numéro est restreint puis bloqué. Vous perdez non seulement le canal, mais l'historique de vos conversations clients.

L'API existe précisément pour ça : les messages sortants vers un client qui ne vous a pas écrit récemment passent par des **modèles validés à l'avance** par Meta. C'est plus contraignant, mais c'est ce qui protège le numéro.

---

## Ce qu'il faut savoir avant de basculer

**Le numéro ne peut pas être sur les deux.** Migrer un numéro vers l'API le retire de l'application. Prévoyez la bascule à un moment calme, et prévenez l'équipe.

**Vous ne discutez pas directement avec Meta.** Vous passez par un fournisseur qui gère la connexion et la facturation. Le choix de ce fournisseur détermine ce que vous pourrez faire ensuite.

**La vérification d'entreprise prend du temps.** Meta demande de vérifier l'existence légale de l'entreprise. Comptez plusieurs jours à quelques semaines, et faites-le avant d'en avoir besoin.

---

## Comment choisir en une question

**Combien de personnes doivent voir les mêmes conversations ?**

Une seule, avec moins de cinq échanges par jour : l'application gratuite est le bon choix, et payer pour l'API serait du gaspillage.

Deux ou plus, ou plus de dix conversations par jour, ou l'envie d'automatiser : il vous faut l'API et un outil pour l'exploiter.

C'est ce que fait [Aevia Inbox](https://inbox.aevia.services) : la connexion API est gérée, WhatsApp arrive dans la même boîte qu'Instagram et l'e-mail, et le même agent IA peut répondre sur les trois.`,
    faq: [
      {
        q: "L'API WhatsApp Business est-elle payante ?",
        a: "Oui. Meta facture à la conversation, avec un tarif qui varie selon le pays et le type de message. Il faut y ajouter le prix de l'outil qui exploite l'API. L'application WhatsApp Business, elle, reste gratuite.",
      },
      {
        q: "Peut-on garder son numéro actuel en passant à l'API ?",
        a: "Oui dans la plupart des cas, mais le numéro quitte alors l'application WhatsApp Business et ne peut plus y être utilisé. La bascule se prépare : historique local sauvegardé, équipe prévenue.",
      },
      {
        q: "Pourquoi mon numéro WhatsApp a-t-il été bloqué ?",
        a: "Le plus souvent parce que des messages ont été envoyés en masse à des personnes qui n'avaient pas écrit en premier, ou parce que des destinataires ont signalé les messages. L'API avec modèles validés existe pour éviter ce scénario.",
      },
      {
        q: "Faut-il un développeur pour utiliser l'API WhatsApp ?",
        a: "Non si vous passez par une solution qui l'intègre déjà. Le développement n'est nécessaire que pour une intégration sur mesure avec un logiciel interne.",
      },
    ],
    i18n: {
      en: {
        title: "WhatsApp Business: free app or API — which one do you need?",
        excerpt:
          "Two products share one name and do different jobs. One is an app on a phone, the other is infrastructure with no screen. Picking wrong costs you either money you did not need to spend, or a blocked number at the worst moment.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **The WhatsApp Business app is free**, runs on a phone, and works up to roughly 5 conversations a day
- **The WhatsApp Business API has no interface**: it is a technical connection plugged into a tool, built for volume and teamwork
- **A number cannot be on both** — moving to the API is not simply reversible
- **Sending unsolicited messages from the app is the fastest way to get your number blocked**

---

## Two products, one name

**The WhatsApp Business app** installs like regular WhatsApp and adds a business profile, a simple catalogue, quick replies and labels. Free, phone-based.

**The WhatsApp Business API** has no interface at all. It is a channel you connect to software: a shared inbox, a CRM, an AI agent. You never "see" the API, you see the tool using it.

---

## Comparison

| Criterion | App | API |
|---|---|---|
| Price | Free | Billed per conversation, via a provider |
| Interface | Yes, on phone | None, through a tool |
| Simultaneous users | 1 phone (+4 linked devices) | Unlimited |
| Automation | Basic quick replies | Full, AI agent possible |
| Shared history | No | Yes |
| Bulk messages | Heavily limited, block risk | Allowed via approved templates |

---

## The switching threshold

1. **More than one person must reply.** The app is tied to a phone. Two employees sharing conversations means passing a device around.
2. **You lose track.** Without shared history or assignment, every other enquiry gets handled twice or not at all.
3. **You want automatic replies.** The app's quick replies do not understand the request; they paste text you wrote.

---

## The trap that costs most

Many businesses use the app to send promotions to a customer list. WhatsApp detects it, restricts the number, then blocks it — and you lose the conversation history along with the channel.

The API exists for this: outbound messages to someone who has not written recently go through **templates approved in advance** by Meta. More constraining, but it protects the number.

---

## Before you switch

**A number cannot be on both.** Migrating removes it from the app. Plan the switch for a quiet period.

**You do not deal with Meta directly.** You go through a provider who handles connection and billing. That choice determines what you can do afterwards.

**Business verification takes time.** Meta verifies your company's legal existence — several days to a few weeks. Do it before you need it.`,
        faq: [
          {
            q: "Is the WhatsApp Business API paid?",
            a: "Yes. Meta bills per conversation, at rates varying by country and message type, plus the cost of the tool using the API. The WhatsApp Business app itself stays free.",
          },
          {
            q: "Can I keep my current number when moving to the API?",
            a: "Usually yes, but the number then leaves the WhatsApp Business app and cannot be used there. Prepare the switch: back up local history, brief the team.",
          },
          {
            q: "Why was my WhatsApp number blocked?",
            a: "Most often because messages were sent in bulk to people who had not written first, or recipients reported them. The API with approved templates exists to avoid that.",
          },
          {
            q: "Do I need a developer to use the WhatsApp API?",
            a: "Not if you use a solution that already integrates it. Development is only needed for a custom integration with in-house software.",
          },
        ],
      },
      es: {
        title: "WhatsApp Business: ¿aplicación gratuita o API? Cuál necesitas",
        excerpt:
          "Dos productos comparten nombre y no hacen el mismo trabajo. Uno es una app en un móvil, el otro es infraestructura sin pantalla. Elegir mal cuesta dinero innecesario o el bloqueo del número en el peor momento.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **La app WhatsApp Business es gratuita**, funciona en un móvil y sirve hasta unas 5 conversaciones al día
- **La API de WhatsApp Business no tiene interfaz**: es una conexión técnica conectada a una herramienta, pensada para volumen y trabajo en equipo
- **Un número no puede estar en ambas a la vez**
- **Enviar mensajes no solicitados desde la app es la forma más rápida de que bloqueen tu número**

---

## Dos productos, un solo nombre

**La app WhatsApp Business** se instala como WhatsApp normal y añade perfil de empresa, catálogo simple, respuestas rápidas y etiquetas.

**La API de WhatsApp Business** no tiene interfaz. Es un canal que conectas a un software: bandeja compartida, CRM, agente de IA.

---

## Comparativa

| Criterio | App | API |
|---|---|---|
| Precio | Gratis | Por conversación, vía proveedor |
| Usuarios simultáneos | 1 móvil (+4 dispositivos) | Ilimitados |
| Automatización | Respuestas rápidas básicas | Completa, agente IA |
| Historial compartido | No | Sí |
| Envíos masivos | Muy limitados, riesgo de bloqueo | Permitidos con plantillas aprobadas |

---

## El umbral de cambio

1. **Más de una persona debe responder.**
2. **Pierdes el hilo**: sin historial compartido, una de cada dos consultas se atiende dos veces o ninguna.
3. **Quieres responder automáticamente.**

---

## La trampa más cara

Muchas empresas usan la app para enviar promociones a una lista. WhatsApp lo detecta, restringe el número y lo bloquea. Pierdes el canal y el historial.

La API existe para eso: los mensajes salientes hacia quien no te ha escrito recientemente pasan por **plantillas aprobadas** por Meta.

---

## Antes de migrar

**Un número no puede estar en ambas.** Migrar lo saca de la app.

**No tratas directamente con Meta**: pasas por un proveedor.

**La verificación de empresa lleva tiempo**: de varios días a semanas.`,
        faq: [
          {
            q: "¿La API de WhatsApp Business es de pago?",
            a: "Sí. Meta factura por conversación, con tarifas según el país y el tipo de mensaje, más el coste de la herramienta que usa la API. La app sigue siendo gratuita.",
          },
          {
            q: "¿Puedo conservar mi número al pasar a la API?",
            a: "Normalmente sí, pero el número deja la app WhatsApp Business y ya no puede usarse allí.",
          },
          {
            q: "¿Por qué han bloqueado mi número de WhatsApp?",
            a: "Casi siempre por enviar mensajes masivos a personas que no habían escrito primero, o porque los destinatarios los denunciaron.",
          },
          {
            q: "¿Hace falta un programador para usar la API de WhatsApp?",
            a: "No si usas una solución que ya la integra. Solo para integraciones a medida con software interno.",
          },
        ],
      },
    },
  },
  {
    slug: "agent-vocal-ia-garage-automobile",
    title: "Garage automobile : arrêter de perdre des clients pendant qu'on est sous une voiture",
    excerpt:
      "Un garagiste ne peut pas décrocher les mains dans le cambouis. Chaque appel manqué est une révision qui part chez le concurrent d'en face. Comment un agent vocal prend les rendez-vous pendant que l'atelier tourne, et ce qu'il ne faut pas lui confier.",
    date: "2026-08-04",
    readingTime: "6 min",
    category: "IA Vocale & Téléphonie",
    content: `## À retenir en 30 secondes

- **Un garage manque 30 à 50 % de ses appels** aux heures d'atelier : personne n'est au bureau, et on ne décroche pas sous un pont
- **L'appel manqué ne rappelle pas** — il appelle le garage suivant, parce qu'une panne ne s'ajourne pas
- **Un agent vocal prend le rendez-vous**, le motif et le véhicule, et l'inscrit dans l'agenda sans interrompre le travail en cours
- **Ce qu'il ne faut PAS lui confier** : le diagnostic et le chiffrage. Un devis annoncé au téléphone puis démenti à l'atelier détruit la confiance

---

## Le problème est mécanique, pas commercial

Un garage de deux à cinq personnes a une contrainte que peu de métiers connaissent : les mains occupées et sales pendant l'essentiel de la journée. Le téléphone sonne au moment précis où l'on ne peut pas répondre.

Résultat, la plupart des garages fonctionnent sur un mode dégradé assumé : on rappelle « quand on a une minute », c'est-à-dire à 19h, quand le client est lui-même en train de faire autre chose. Entre-temps, il a appelé deux autres garages et pris rendez-vous chez le premier qui a décroché.

Ce n'est pas un défaut de service. C'est une contrainte physique. Et c'est précisément le type de problème qu'un système résout mieux qu'un effort supplémentaire.

---

## Ce qu'un agent vocal fait bien dans ce métier

**Prendre le rendez-vous avec les bonnes informations.** Un rendez-vous garage utile contient quatre choses : le nom, le véhicule (marque, modèle, immatriculation), le motif, et une disponibilité. L'agent les demande dans l'ordre, les vérifie, et pose le créneau.

**Trier l'urgent du planifiable.** « Ma voiture ne démarre plus » et « il me faut une vidange le mois prochain » n'appellent pas la même réponse. Un agent bien configuré propose le premier créneau disponible dans un cas, et une plage large dans l'autre.

**Répondre aux questions qui reviennent trente fois par semaine.** Faites-vous le contrôle technique ? Prêtez-vous un véhicule ? Prenez-vous ma marque ? Ouvrez-vous le samedi ? Ces questions ne demandent aucune compétence mécanique, seulement une réponse immédiate.

**Absorber la nuit et le week-end.** Une panne survient rarement en semaine à 10h. L'appel du dimanche soir est celui qui décide où la voiture ira le lundi.

---

## Ce qu'il ne faut surtout pas automatiser

**Le diagnostic.** Un client qui décrit un bruit ne décrit jamais le bon bruit. Aucun système, humain ou non, ne diagnostique par téléphone — et un agent qui hasarde une cause vous engage.

**Le chiffrage.** C'est l'erreur qui coûte le plus cher. Si l'agent annonce « comptez environ 250 € » et que la facture sort à 480 €, vous perdez le client et vous récoltez un avis à une étoile. La règle à écrire dans la configuration : **ne jamais annoncer de prix sans devis**, orienter vers un passage à l'atelier.

**Les litiges.** Un client qui rappelle mécontent d'une réparation doit tomber sur un humain. Immédiatement.

---

## Ce que ça change sur une semaine type

Un garage qui reçoit 15 appels par jour dont la moitié restent sans réponse récupère, avec un taux de conversion prudent, plusieurs rendez-vous par semaine qui partaient ailleurs. Sur un panier moyen d'entretien courant, l'arithmétique se fait vite.

Le bénéfice moins visible mais plus durable : **l'atelier n'est plus interrompu**. Un mécanicien qui pose son outil pour décrocher perd bien plus que la durée de l'appel — il perd le fil de ce qu'il faisait.

---

## Comment le mettre en place sans casser l'existant

La configuration recommandée est le **renvoi conditionnel** : le garage garde son numéro, et les appels basculent vers l'agent seulement si personne ne décroche après cinq sonneries ou si la ligne est occupée. Rien ne change pour les clients, rien ne change pour l'équipe, et l'agent ne prend que ce qui serait tombé dans le vide.

Prévois une demi-journée pour rassembler les questions fréquentes et les vraies règles de l'atelier — c'est là que se joue la qualité, pas dans la technique.`,
    faq: [
      {
        q: "L'agent peut-il donner un prix de réparation au téléphone ?",
        a: "Il ne devrait pas, et c'est une règle à inscrire explicitement dans sa configuration. Un montant annoncé sans diagnostic sera démenti par la facture, ce qui coûte le client et l'avis. L'agent oriente vers un devis après passage à l'atelier.",
      },
      {
        q: "Comment l'agent sait-il quels créneaux sont libres ?",
        a: "Il lit l'agenda connecté en temps réel et ne propose que des créneaux réellement disponibles, puis y inscrit le rendez-vous avec le véhicule et le motif.",
      },
      {
        q: "Que se passe-t-il si le client a une panne urgente ?",
        a: "L'urgence se configure : l'agent peut proposer le premier créneau du jour, transférer immédiatement vers le portable du patron, ou donner la marche à suivre pour un dépannage selon ce que vous décidez.",
      },
      {
        q: "Faut-il changer de numéro de téléphone ?",
        a: "Non. La configuration recommandée est un renvoi conditionnel depuis le numéro actuel : l'agent ne prend que les appels qui ne sont pas décrochés.",
      },
    ],
    i18n: {
      en: {
        title: "Auto repair shops: stop losing customers while you are under a car",
        excerpt:
          "A mechanic cannot answer the phone with greasy hands. Every missed call is a service booked at the garage across the road. How a voice agent takes appointments while the workshop keeps running — and what you must never let it handle.",
        category: "AI Voice & Telephony",
        content: `## Key takeaways in 30 seconds

- **A garage misses 30–50% of its calls** during workshop hours: nobody is at the desk, and you do not answer from under a lift
- **A missed call does not call back** — it calls the next garage, because a breakdown does not wait
- **A voice agent books the appointment**, the reason and the vehicle, straight into the calendar without interrupting the job in hand
- **What it must NOT do**: diagnose and quote. A price given on the phone and contradicted at the workshop destroys trust

---

## The problem is physical, not commercial

A two-to-five person garage has a constraint few trades share: hands busy and dirty for most of the day. The phone rings precisely when you cannot answer.

So most garages run a knowingly degraded service: call back "when there's a minute", meaning 7pm, when the customer is busy too. By then they have called two other garages and booked with whoever picked up.

That is not poor service. It is a physical constraint — exactly the kind of problem a system solves better than more effort.

---

## What a voice agent does well here

**Books with the right information.** A useful garage appointment holds four things: name, vehicle, reason, availability. The agent asks in order and places the slot.

**Separates urgent from schedulable.** "My car won't start" and "I need a service next month" deserve different answers.

**Answers the questions asked thirty times a week.** Do you do MOTs? Do you lend a car? Do you take my make? Open Saturdays?

**Covers nights and weekends.** Breakdowns rarely happen at 10am on a Tuesday. The Sunday-evening call decides where the car goes on Monday.

---

## What you must not automate

**Diagnosis.** A customer describing a noise never describes the right noise.

**Quoting.** The costliest mistake. "Around €250" against a €480 invoice loses the customer and earns a one-star review. Write the rule into the configuration: **never quote without an inspection**.

**Disputes.** An unhappy customer must reach a human immediately.

---

## Setting it up without breaking anything

Use **conditional forwarding**: the garage keeps its number, and calls only reach the agent after five rings or when the line is busy. Nothing changes for customers or staff, and the agent only takes what would have gone unanswered.`,
        faq: [
          {
            q: "Can the agent quote a repair over the phone?",
            a: "It should not, and that rule belongs explicitly in its configuration. A figure given without inspection will be contradicted by the invoice. The agent directs to a quote after the car is seen.",
          },
          {
            q: "How does the agent know which slots are free?",
            a: "It reads the connected calendar in real time, offers only genuinely available slots, and writes the booking in with the vehicle and the reason.",
          },
          {
            q: "What if the customer has an urgent breakdown?",
            a: "Urgency is configurable: first slot of the day, immediate transfer to the owner's mobile, or breakdown instructions — whichever you decide.",
          },
          {
            q: "Do I need to change my phone number?",
            a: "No. Conditional forwarding from your current number means the agent only takes unanswered calls.",
          },
        ],
      },
      es: {
        title: "Taller mecánico: dejar de perder clientes mientras estás bajo un coche",
        excerpt:
          "Un mecánico no puede descolgar con las manos llenas de grasa. Cada llamada perdida es una revisión que se va al taller de enfrente. Cómo un agente de voz coge las citas mientras el taller sigue trabajando.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **Un taller pierde entre el 30 y el 50 % de sus llamadas** en horario de trabajo
- **La llamada perdida no vuelve a llamar** — llama al siguiente taller, porque una avería no espera
- **Un agente de voz coge la cita**, el motivo y el vehículo, sin interrumpir el trabajo
- **Lo que NO hay que delegarle**: el diagnóstico y el presupuesto

---

## El problema es físico, no comercial

Un taller de dos a cinco personas tiene una limitación que pocos oficios comparten: las manos ocupadas y sucias casi todo el día. El teléfono suena justo cuando no se puede responder.

El cliente, mientras tanto, ha llamado a otros dos talleres y ha reservado con el primero que descolgó.

---

## Lo que el agente hace bien

**Coger la cita con los datos correctos**: nombre, vehículo, motivo y disponibilidad.

**Separar lo urgente de lo planificable.**

**Responder las preguntas de siempre**: ¿hacéis la ITV? ¿dejáis coche de sustitución? ¿abrís los sábados?

**Cubrir noches y fines de semana.** Una avería rara vez ocurre un martes a las 10h.

---

## Lo que no hay que automatizar

**El diagnóstico.** Quien describe un ruido nunca describe el ruido correcto.

**El presupuesto.** Es el error más caro: «unos 250 €» frente a una factura de 480 € pierde al cliente y gana una reseña de una estrella.

**Las reclamaciones.** Deben llegar a una persona de inmediato.

---

## Cómo implantarlo sin romper nada

Desvío condicional: el taller conserva su número y las llamadas solo llegan al agente tras cinco tonos o si la línea está ocupada.`,
        faq: [
          {
            q: "¿Puede el agente dar un precio de reparación por teléfono?",
            a: "No debería, y esa regla debe escribirse en su configuración. Una cifra dada sin revisión será desmentida por la factura.",
          },
          {
            q: "¿Cómo sabe el agente qué huecos hay libres?",
            a: "Lee la agenda conectada en tiempo real y solo ofrece huecos realmente disponibles.",
          },
          {
            q: "¿Y si el cliente tiene una avería urgente?",
            a: "La urgencia se configura: primer hueco del día, transferencia al móvil del responsable, o instrucciones de asistencia.",
          },
          {
            q: "¿Hay que cambiar de número?",
            a: "No. Con desvío condicional el agente solo atiende las llamadas no contestadas.",
          },
        ],
      },
    },
  },

  {
    slug: "prise-rendez-vous-ia-cabinet-dentaire",
    title: "Cabinet dentaire : la prise de rendez-vous par IA, et la ligne à ne pas franchir",
    excerpt:
      "Un secrétariat dentaire passe ses journées sur trois demandes qui se répètent. Les automatiser libère du temps réel — à condition de savoir exactement ce qu'une IA n'a pas le droit de faire dans un cabinet de santé.",
    date: "2026-08-04",
    readingTime: "7 min",
    category: "IA Vocale & Téléphonie",
    content: `## À retenir en 30 secondes

- **Trois motifs représentent l'essentiel des appels** : prendre, déplacer ou annuler un rendez-vous
- **L'automatisation de ces trois-là** rend au secrétariat le temps qu'il passe au téléphone au lieu d'accueillir les patients présents
- **Une IA ne donne jamais de conseil médical** — ni tri de symptômes, ni « est-ce grave ». C'est une limite juridique, pas seulement prudentielle
- **Les données de santé sont sensibles au sens du RGPD** : hébergement, minimisation et information des patients ne sont pas optionnels

---

## Ce que fait vraiment un secrétariat dentaire

Regardez une journée de standard dans un cabinet : la grande majorité des appels tiennent en trois phrases. « Je voudrais un rendez-vous. » « Je dois décaler celui de jeudi. » « Je ne pourrai pas venir. »

Ces appels ne demandent aucune compétence clinique. Ils demandent une agenda à jour et deux minutes. Mais ils arrivent en rafale à 9h et à 14h, exactement quand des patients se présentent à l'accueil — et c'est la personne devant vous qui attend pendant que vous répondez au téléphone.

---

## Ce qui s'automatise proprement

**La prise de rendez-vous.** L'agent demande le motif dans une liste que vous définissez (contrôle, détartrage, urgence, suite de traitement), propose les créneaux correspondant à la durée réelle de l'acte, et inscrit le patient.

**Le déplacement et l'annulation.** C'est le gisement le plus rentable et le plus sous-estimé. Une annulation non traitée devient un fauteuil vide ; une annulation captée à temps peut être reproposée.

**Le rappel de rendez-vous.** Le taux de rendez-vous non honorés baisse nettement avec un rappel la veille — et personne n'aime passer ces appels.

**Les questions administratives.** Prenez-vous la carte Vitale ? Êtes-vous conventionné ? Où se garer ? Faites-vous l'implantologie ? Ces réponses sont fixes et n'ont aucune raison de mobiliser un humain.

---

## La ligne à ne pas franchir

C'est la partie qu'il faut lire deux fois.

**Aucun conseil médical, jamais.** Un agent ne doit pas répondre à « j'ai mal, est-ce que je peux attendre ? », ni proposer d'antalgique, ni estimer une gravité. La configuration doit prévoir une phrase de sortie explicite et un transfert.

**Aucun tri de symptômes.** Décider qu'un patient est urgent ou non sur la foi d'une description téléphonique est un acte médical. L'agent peut proposer un créneau « urgence » si le patient le demande, pas décider qu'il en relève.

**Aucun échange de données médicales.** L'agent enregistre un motif dans votre nomenclature, pas un historique clinique.

**Un humain accessible en permanence.** Une douleur dentaire aiguë ne se met pas en attente. Le transfert doit être immédiat et testé.

---

## RGPD : ce que ça implique concrètement

Un rendez-vous dentaire, même sans détail clinique, révèle un état de santé. Le RGPD le range dans les **données sensibles**, ce qui impose plus qu'un formulaire de consentement :

- **Minimisation** — ne collecter que le nom, le contact, le motif et le créneau. Pas de « décrivez votre problème ».
- **Information des patients** — dire clairement qu'un système automatisé traite la prise de rendez-vous et comment joindre un humain.
- **Hébergement** — les données de santé en France relèvent d'exigences d'hébergement spécifiques ; à vérifier avec votre prestataire selon ce qui est réellement stocké.
- **Durée de conservation** — définie, écrite, appliquée.
- **Sous-traitance** — un contrat de sous-traitance en bonne et due forme avec le prestataire.

Ce n'est pas un obstacle : c'est un cadre. Un cabinet qui l'applique gagne aussi en sérénité vis-à-vis de ses patients.

---

## Ce que ça change au quotidien

Le bénéfice n'est pas « remplacer le secrétariat ». C'est **lui rendre son métier** : accueillir, préparer, gérer les tiers payants, s'occuper du patient qui est là. Le téléphone cesse d'être une interruption permanente et devient un flux traité en arrière-plan.

Et le cabinet cesse de perdre les demandes du soir et du week-end, qui aujourd'hui tombent sur un répondeur que peu de patients écoutent jusqu'au bout.

---

## Mise en place réaliste

Comptez une demi-journée pour définir la nomenclature des motifs et les durées associées, les règles d'urgence, et la liste des situations qui déclenchent un transfert humain. C'est ce travail-là — pas la technique — qui détermine si le système sera un soulagement ou une source d'incidents.`,
    faq: [
      {
        q: "Une IA a-t-elle le droit de prendre des rendez-vous médicaux ?",
        a: "Oui, la prise de rendez-vous est un acte administratif, pas un acte médical. En revanche l'agent ne doit ni évaluer des symptômes, ni conseiller un traitement, ni décider d'une urgence : ces actes relèvent du professionnel de santé.",
      },
      {
        q: "Les données des patients sont-elles protégées ?",
        a: "Un rendez-vous chez un praticien révèle un état de santé et relève donc des données sensibles au sens du RGPD. Cela impose la minimisation des données collectées, l'information des patients, une durée de conservation définie, un contrat de sous-traitance, et une vigilance sur les exigences d'hébergement selon ce qui est stocké.",
      },
      {
        q: "Que se passe-t-il si un patient a une urgence douloureuse ?",
        a: "Le transfert vers un humain doit être immédiat et configuré à l'avance. L'agent ne doit jamais évaluer lui-même le degré d'urgence à partir de la description du patient.",
      },
      {
        q: "L'agent peut-il gérer les annulations et les rappels ?",
        a: "Oui, et c'est souvent le gain le plus rentable : une annulation captée à temps permet de reproposer le créneau, et un rappel la veille réduit nettement les rendez-vous non honorés.",
      },
    ],
    i18n: {
      en: {
        title: "Dental practices: AI appointment booking, and the line not to cross",
        excerpt:
          "A dental receptionist spends the day on three repeating requests. Automating those three returns real time to the practice — provided you know exactly what an AI is not allowed to do in a healthcare setting.",
        category: "AI Voice & Telephony",
        content: `## Key takeaways in 30 seconds

- **Three reasons account for most calls**: book, move, or cancel an appointment
- **Automating those three** gives the front desk back the time it spends on the phone instead of with the patient standing there
- **An AI never gives medical advice** — no symptom triage, no "is this serious". That is a legal limit, not merely a cautious one
- **Health data is sensitive under GDPR**: minimisation, patient information and hosting requirements are not optional

---

## What a dental front desk actually does

Watch a day on the phones: the vast majority of calls fit in three sentences. "I'd like an appointment." "I need to move Thursday." "I can't make it."

None require clinical skill. They require an up-to-date diary and two minutes. But they arrive in bursts at 9am and 2pm — exactly when patients are standing at the desk, waiting while you answer the phone.

---

## What automates cleanly

**Booking.** The agent asks the reason from a list you define, offers slots matching the real duration of the procedure, and books the patient in.

**Moving and cancelling.** The most underrated gain. An unhandled cancellation is an empty chair; one captured in time can be re-offered.

**Reminders.** No-show rates drop markedly with a reminder the day before — and nobody enjoys making those calls.

**Administrative questions.** Do you take this insurance? Where do I park? Do you do implants?

---

## The line not to cross

**No medical advice, ever.** The agent must not answer "it hurts, can it wait?", suggest painkillers, or estimate severity.

**No symptom triage.** Deciding a patient is urgent from a phone description is a clinical act. The agent may offer an "urgent" slot on request; it may not decide the patient needs one.

**No clinical data.** It records a reason from your list, not a history.

**A human always reachable.** Acute dental pain does not go on hold. The transfer must be immediate and tested.

---

## GDPR in practice

A dental appointment, even without clinical detail, reveals a health status — sensitive data under GDPR. That means minimisation, clear patient information that an automated system handles booking, a defined retention period, a proper processor agreement, and attention to hosting requirements depending on what is actually stored.

---

## What changes day to day

The benefit is not replacing the receptionist. It is **giving them their job back**: welcoming, preparing, handling the patient who is present. And the practice stops losing evening and weekend requests that currently reach a voicemail few patients finish listening to.`,
        faq: [
          {
            q: "Is an AI allowed to book medical appointments?",
            a: "Yes — booking is administrative, not clinical. The agent must not assess symptoms, advise treatment, or decide urgency; those belong to the practitioner.",
          },
          {
            q: "Is patient data protected?",
            a: "An appointment with a practitioner reveals a health status and is therefore sensitive data under GDPR. That requires minimisation, patient information, a defined retention period, a processor agreement, and care over hosting requirements.",
          },
          {
            q: "What happens if a patient is in acute pain?",
            a: "Transfer to a human must be immediate and configured in advance. The agent must never assess the degree of urgency itself.",
          },
          {
            q: "Can the agent handle cancellations and reminders?",
            a: "Yes, and it is often the most profitable gain: a cancellation captured in time frees a slot to re-offer, and a day-before reminder markedly reduces no-shows.",
          },
        ],
      },
      es: {
        title: "Clínica dental: la cita por IA y la línea que no hay que cruzar",
        excerpt:
          "Una recepción dental pasa el día con tres peticiones que se repiten. Automatizarlas devuelve tiempo real a la clínica, siempre que sepas qué no puede hacer una IA en un entorno sanitario.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **Tres motivos concentran la mayoría de llamadas**: pedir, cambiar o anular una cita
- **Automatizar esos tres** devuelve a recepción el tiempo que pasa al teléfono en lugar de atender al paciente presente
- **Una IA nunca da consejo médico** — ni triaje de síntomas, ni «¿es grave?». Es un límite legal
- **Los datos de salud son sensibles según el RGPD**

---

## Lo que hace realmente una recepción dental

La gran mayoría de las llamadas caben en tres frases. No requieren competencia clínica, solo una agenda al día y dos minutos. Pero llegan en oleadas a las 9h y a las 14h, justo cuando hay pacientes esperando en el mostrador.

---

## Lo que se automatiza bien

**Pedir cita**, con el motivo elegido de una lista que tú defines y huecos acordes a la duración real del acto.

**Cambiar y anular.** Es el mayor beneficio y el más subestimado: una anulación no gestionada es un sillón vacío.

**Los recordatorios**, que reducen mucho las citas no acudidas.

**Las preguntas administrativas.**

---

## La línea que no hay que cruzar

**Ningún consejo médico, nunca.**

**Ningún triaje de síntomas.** Decidir que un paciente es urgente a partir de una descripción telefónica es un acto clínico.

**Ningún dato clínico.**

**Un humano siempre accesible.** Un dolor dental agudo no se pone en espera.

---

## RGPD en la práctica

Una cita con un profesional sanitario revela un estado de salud: dato sensible. Exige minimización, información al paciente, plazo de conservación definido, contrato de encargado de tratamiento y atención a los requisitos de alojamiento.`,
        faq: [
          {
            q: "¿Puede una IA gestionar citas médicas?",
            a: "Sí: pedir cita es un acto administrativo, no clínico. El agente no debe evaluar síntomas, aconsejar tratamiento ni decidir urgencias.",
          },
          {
            q: "¿Están protegidos los datos de los pacientes?",
            a: "Una cita revela un estado de salud, por lo que son datos sensibles según el RGPD: minimización, información, plazo de conservación y contrato de encargado.",
          },
          {
            q: "¿Y si un paciente tiene un dolor urgente?",
            a: "La transferencia a una persona debe ser inmediata y estar configurada de antemano.",
          },
          {
            q: "¿Puede el agente gestionar anulaciones y recordatorios?",
            a: "Sí, y suele ser lo más rentable: una anulación captada a tiempo libera el hueco para reofrecerlo.",
          },
        ],
      },
    },
  },
];
