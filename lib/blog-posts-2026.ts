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
  /*
    Prise de commande à emporter par téléphone — la cible décidée le 03/11
    (livraison et vente à emporter), et la seule intention de ce métier qu'aucune
    page de la suite ne traitait.

    Chaque affirmation sur le produit a été relue dans le code le 13/11
    (skybot-inbox) : voice-service/tools.py (`get_menu`, `place_order` « UNIQUEMENT
    après que le client a validé le récapitulatif », `send_sms_confirmation`),
    src/voice/voice-agent-api.service.ts (`createOrder` : plat inconnu de la carte
    = refus, total calculé sur les prix de la carte, numéro de l'appelant
    enregistré, délai de retrait 15 min + 4 par commande des 30 dernières
    minutes, plafonné à 45, envoi à HubRise en `collection` avec paiement « Sur
    place »), contrôleur `POST voice/sms` (« FR numbers only »), page Commandes
    de l'interface. Pas de livraison, pas d'encaissement : l'article le dit.
    Prix : pricing-plans.config.ts. Aucun client cité : il n'y en a pas encore.
  */
  {
    slug: "prise-commande-telephone-ia-restaurant",
    title: "Prise de commande par téléphone avec une IA : comment ça marche pour une pizzeria ou un restaurant à emporter",
    excerpt:
      "Entre 18 h 30 et 20 h 30, le téléphone sonne pendant que vous êtes au four. Ce qu'un agent vocal IA fait réellement quand il prend une commande à emporter, ce qu'il ne fait pas, combien de minutes il vous faut, et les questions à poser avant de choisir.",
    date: "2026-11-13",
    readingTime: "8 min",
    category: "IA Vocale & Téléphonie",
    content: `## À retenir en 30 secondes

- **Un agent vocal IA peut prendre une commande à emporter complète au téléphone** : il lit votre carte, note les plats, les quantités et les précisions, relit le récapitulatif au client et n'enregistre la commande qu'après son accord.
- **Il ne doit proposer que ce qui est sur votre carte** : un plat qui n'y figure pas est refusé plutôt qu'inventé, et le total est calculé à partir de vos prix.
- **Il n'encaisse pas** : le client paie au retrait, comme pour une commande prise par vous.
- **Chez Aevia Inbox, la voix commence à 79 € par mois** (200 minutes d'appel incluses), plus 100 € de mise en service unique.

---

## Le problème : les commandes arrivent quand vous avez les mains prises

Dans une pizzeria, un snack ou un restaurant qui fait de la vente à emporter, les appels se concentrent sur quelques créneaux : le midi, et le soir avant le dîner. C'est exactement le moment où la cuisine tourne à plein. Soit quelqu'un quitte son poste pour décrocher, soit le téléphone sonne dans le vide et le client commande ailleurs — souvent sur une plateforme qui prélève une commission.

Un agent vocal IA répond à ces appels à votre place, y compris quand plusieurs arrivent en même temps.

---

## Comment se déroule un appel, étape par étape

1. **L'agent décroche au nom de votre établissement** et demande ce que le client souhaite.
2. **Il consulte votre carte** — les plats et les prix que vous avez renseignés — pour répondre aux questions (« vous avez une pizza végétarienne ? ») et proposer ce qui existe.
3. **Il prend la commande** : plats, quantités, précisions (« sans oignons »), allergie à signaler en cuisine, et le prénom du client.
4. **Il relit le récapitulatif** — plats, quantités, total — et attend la validation du client.
5. **Il enregistre la commande** seulement après ce « oui » : elle reçoit un numéro, son total est calculé à partir de vos prix, et le numéro de l'appelant est conservé pour pouvoir le rappeler.
6. **Il annonce une heure de retrait** qui tient compte des commandes déjà en cours : au calme, le délai de base ; quand plusieurs commandes viennent d'arriver, un délai plus long.
7. **Il peut envoyer un SMS de confirmation** au client avec le récapitulatif (numéros de mobile français).

Ce qui compte : la commande n'est pas « un message à rappeler ». Elle est prise, validée par le client et enregistrée pendant l'appel. Avec Aevia Inbox, elle apparaît dans l'onglet Commandes, avec le détail des plats et le numéro du client.

---

## Ce qu'un bon agent ne fait pas

- **Il n'invente pas de plats.** Si le client demande quelque chose qui n'est pas sur votre carte, la commande ne peut pas être enregistrée avec ce plat : l'agent propose ce qui existe.
- **Il ne s'improvise pas expert en allergènes.** S'il n'a pas l'information dans ce que vous avez renseigné, il ne répond pas « oui, c'est sans arachide » : il transmet la question à l'équipe.
- **Il n'encaisse pas.** Pas de numéro de carte bancaire dicté au téléphone : le paiement se fait au retrait.
- **Il ne gère pas la livraison.** La commande prise par l'agent est une commande à retirer sur place.
- **Il ne tranche pas les cas particuliers** — grosse commande pour un événement, réclamation : il les note et vous les transmet.

---

## Et votre caisse ?

Une commande prise au téléphone doit arriver là où la cuisine la voit. Avec Aevia Inbox, elle arrive dans l'onglet Commandes. Pour les restaurants dont la caisse est reliée à HubRise, un connecteur permet de l'y transmettre directement, avec l'heure de retrait prévue et le numéro du client ; ce connecteur est en cours de validation par HubRise. Si votre organisation repose sur la caisse, demandez où il en est avant de compter dessus.

---

## Combien de minutes vous faut-il ?

Le prix d'un agent vocal se compte en minutes d'appel. Pour estimer votre besoin, partez de la durée d'un appel de commande chez vous. **À titre d'exemple** — hypothèse à vérifier sur vos propres appels : si un appel de commande dure 2 à 3 minutes,

| Formule Aevia Inbox (voix seule) | Minutes incluses par mois | Appels de commande de 2 à 3 min |
|---|---|---|
| Starter — 79 €/mois | 200 | environ 65 à 100 |
| Growth — 99 €/mois | 400 | environ 130 à 200 |
| Pro — 199 €/mois | 800 | environ 265 à 400 |

S'y ajoutent 100 € de mise en service unique (connexion de la ligne et configuration de l'agent avec votre carte). Sans engagement, 14 jours satisfait ou remboursé. Hors zone euro, le même montant est facturé en dollars.

---

## Les questions à poser à n'importe quel fournisseur

1. **D'où l'agent tire-t-il la carte et les prix ?** Et que se passe-t-il quand vous changez un plat ou un prix ?
2. **Que fait-il d'un plat qui n'existe pas ?** La bonne réponse : il refuse et propose ce qui existe.
3. **Relit-il le récapitulatif avant d'enregistrer ?** Sans cette étape, une erreur de compréhension devient une erreur en cuisine.
4. **Où la commande arrive-t-elle ?** Écran, caisse, e-mail, SMS : là où votre équipe regarde vraiment.
5. **Que répond-il sur les allergènes qu'il ne connaît pas ?** Il doit transmettre, jamais deviner.
6. **Combien coûte une minute au-delà du forfait, et combien dure un appel chez vous ?**

---

## Questions fréquentes

**L'IA peut-elle vraiment prendre une commande complète au téléphone ?**
Oui. L'agent lit votre carte, prend les plats et les quantités, relit le récapitulatif au client et enregistre la commande après sa validation, avec le numéro de l'appelant.

**Que se passe-t-il si le client demande un plat qui n'est pas sur la carte ?**
La commande ne peut pas être enregistrée avec ce plat. L'agent propose ce qui figure sur votre carte.

**L'agent encaisse-t-il le paiement ?**
Non. Le client paie au retrait. Aucun numéro de carte bancaire n'est demandé au téléphone.

**Et pour les livraisons ?**
L'agent vocal d'Aevia Inbox prend des commandes à retirer sur place. Il ne gère pas la livraison.

**Combien ça coûte ?**
La voix commence à 79 € par mois avec 200 minutes d'appel incluses, plus 100 € de mise en service unique, sans engagement.

---

👉 [Voir comment l'accueil client IA d'Aevia Inbox répond au téléphone](https://inbox.aevia.services/fr/solutions/standard-telephonique-ia)
`,
    faq: [
      {
        q: "L'IA peut-elle vraiment prendre une commande complète au téléphone ?",
        a: "Oui. L'agent lit la carte du restaurant, prend les plats et les quantités, relit le récapitulatif au client et enregistre la commande après sa validation, avec le numéro de l'appelant.",
      },
      {
        q: "Que se passe-t-il si le client demande un plat qui n'est pas sur la carte ?",
        a: "La commande ne peut pas être enregistrée avec ce plat. L'agent propose ce qui figure sur la carte.",
      },
      {
        q: "L'agent encaisse-t-il le paiement ?",
        a: "Non. Le client paie au retrait. Aucun numéro de carte bancaire n'est demandé au téléphone.",
      },
      {
        q: "Et pour les livraisons ?",
        a: "L'agent vocal d'Aevia Inbox prend des commandes à retirer sur place. Il ne gère pas la livraison.",
      },
      {
        q: "Combien coûte un agent vocal qui prend les commandes ?",
        a: "Chez Aevia Inbox, la voix commence à 79 € par mois avec 200 minutes d'appel incluses, plus 100 € de mise en service unique, sans engagement.",
      },
    ],
    i18n: {
      en: {
        title: "Taking phone orders with AI: how it works for a pizzeria or a takeaway restaurant",
        excerpt:
          "Between 18:30 and 20:30, the phone rings while you are at the oven. What an AI voice agent actually does when it takes a takeaway order, what it does not do, how many minutes you need, and the questions to ask before you choose.",
        category: "AI Voice & Telephony",
        content: `## Key takeaways in 30 seconds

- **An AI voice agent can take a complete takeaway order over the phone**: it reads your menu, notes dishes, quantities and special requests, reads the summary back to the customer and only records the order once they agree.
- **It should only offer what is on your menu**: a dish that is not there is refused rather than made up, and the total is calculated from your prices.
- **It does not take payment**: the customer pays at pickup, just as when you take the order yourself.
- **At Aevia Inbox, voice starts at €79 a month** (200 call minutes included), plus a one-off €100 setup fee.

---

## The problem: orders come in when your hands are full

In a pizzeria, a snack bar or a restaurant that does takeaway, calls cluster around a few slots: lunchtime, and the evening before dinner. That is exactly when the kitchen is at full speed. Either someone leaves their station to pick up, or the phone rings out and the customer orders elsewhere — often on a platform that takes a commission.

An AI voice agent answers those calls for you, including when several come in at once.

---

## How a call goes, step by step

1. **The agent picks up in your restaurant's name** and asks what the customer would like.
2. **It checks your menu** — the dishes and prices you entered — to answer questions ("do you have a vegetarian pizza?") and offer what exists.
3. **It takes the order**: dishes, quantities, requests ("no onions"), an allergy to flag to the kitchen, and the customer's first name.
4. **It reads the summary back** — dishes, quantities, total — and waits for the customer to confirm.
5. **It records the order** only after that "yes": the order gets a number, its total is calculated from your prices, and the caller's number is kept so you can call back.
6. **It gives a pickup time** that accounts for orders already in progress: the base wait when it is quiet, a longer one when several orders have just come in.
7. **It can send a confirmation text** to the customer with the summary (French mobile numbers).

What matters: the order is not "a message to call back". It is taken, confirmed by the customer and recorded during the call. With Aevia Inbox it shows up in the Orders tab, with the dishes and the customer's number.

---

## What a good agent does not do

- **It does not make up dishes.** If the customer asks for something that is not on your menu, the order cannot be recorded with that dish: the agent offers what exists.
- **It does not play allergen expert.** If the information is not in what you entered, it does not answer "yes, it is peanut-free": it passes the question to your team.
- **It does not take payment.** No card number read out over the phone: payment happens at pickup.
- **It does not handle delivery.** An order taken by the agent is a pickup order.
- **It does not decide special cases** — a large order for an event, a complaint: it notes them and passes them on to you.

---

## What about your till?

An order taken over the phone has to land where the kitchen sees it. With Aevia Inbox it lands in the Orders tab. For restaurants whose till is connected to HubRise, a connector can send it there directly, with the expected pickup time and the customer's number; that connector is being validated by HubRise. If your workflow depends on the till, ask where it stands before counting on it.

---

## How many minutes do you need?

A voice agent is priced in call minutes. To estimate your need, start from how long an order call lasts at your place. **As an example** — an assumption to check against your own calls: if an order call lasts 2 to 3 minutes,

| Aevia Inbox plan (voice only) | Minutes included per month | Order calls of 2 to 3 min |
|---|---|---|
| Starter — €79/month | 200 | about 65 to 100 |
| Growth — €99/month | 400 | about 130 to 200 |
| Pro — €199/month | 800 | about 265 to 400 |

On top of that comes a one-off €100 setup fee (connecting the line and configuring the agent with your menu). No commitment, 14-day money-back guarantee. Outside the eurozone, the same amount is billed in US dollars.

---

## Questions to ask any provider

1. **Where does the agent get the menu and prices from?** And what happens when you change a dish or a price?
2. **What does it do with a dish that does not exist?** The right answer: it refuses and offers what exists.
3. **Does it read the summary back before recording?** Without that step, a misunderstanding becomes a mistake in the kitchen.
4. **Where does the order land?** Screen, till, email, text: where your team actually looks.
5. **What does it say about allergens it does not know?** It must pass the question on, never guess.
6. **What does a minute beyond the plan cost, and how long does a call last at your place?**

---

## Frequently asked questions

**Can AI really take a complete order over the phone?**
Yes. The agent reads your menu, takes dishes and quantities, reads the summary back to the customer and records the order once confirmed, with the caller's number.

**What happens if the customer asks for a dish that is not on the menu?**
The order cannot be recorded with that dish. The agent offers what is on your menu.

**Does the agent take payment?**
No. The customer pays at pickup. No card number is asked for over the phone.

**What about deliveries?**
The Aevia Inbox voice agent takes pickup orders. It does not handle delivery.

**How much does it cost?**
Voice starts at €79 a month with 200 call minutes included, plus a one-off €100 setup fee, no commitment.

---

👉 [See how the Aevia Inbox AI customer desk answers the phone](https://inbox.aevia.services/en/solutions/standard-telephonique-ia)
`,
        faq: [
          { q: "Can AI really take a complete order over the phone?", a: "Yes. The agent reads the restaurant's menu, takes dishes and quantities, reads the summary back to the customer and records the order once confirmed, with the caller's number." },
          { q: "What happens if the customer asks for a dish that is not on the menu?", a: "The order cannot be recorded with that dish. The agent offers what is on the menu." },
          { q: "Does the agent take payment?", a: "No. The customer pays at pickup. No card number is asked for over the phone." },
          { q: "What about deliveries?", a: "The Aevia Inbox voice agent takes pickup orders. It does not handle delivery." },
          { q: "How much does a voice agent that takes orders cost?", a: "At Aevia Inbox, voice starts at €79 a month ($79 outside the eurozone) with 200 call minutes included, plus a one-off €100 setup fee, no commitment." },
        ],
      },
      es: {
        title: "Tomar pedidos por teléfono con IA: cómo funciona en una pizzería o un restaurante de comida para llevar",
        excerpt:
          "Entre las 18:30 y las 20:30, el teléfono suena mientras estás en el horno. Lo que hace de verdad un agente de voz con IA cuando toma un pedido para llevar, lo que no hace, cuántos minutos necesitas y las preguntas que conviene hacer antes de elegir.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **Un agente de voz con IA puede tomar un pedido para llevar completo por teléfono**: consulta tu carta, anota platos, cantidades y peticiones, repite el resumen al cliente y solo registra el pedido cuando este lo confirma.
- **Solo debe ofrecer lo que está en tu carta**: un plato que no figura se rechaza en lugar de inventarse, y el total se calcula con tus precios.
- **No cobra**: el cliente paga al recoger, como cuando tomas tú el pedido.
- **En Aevia Inbox, la voz empieza en 79 € al mes** (200 minutos de llamada incluidos), más 100 € de puesta en marcha única.

---

## El problema: los pedidos llegan cuando tienes las manos ocupadas

En una pizzería, un local de comida rápida o un restaurante con comida para llevar, las llamadas se concentran en pocas franjas: el mediodía y la tarde antes de la cena. Justo cuando la cocina va a tope. O alguien deja su puesto para contestar, o el teléfono suena sin respuesta y el cliente pide en otro sitio — a menudo en una plataforma que cobra comisión.

Un agente de voz con IA contesta esas llamadas por ti, también cuando entran varias a la vez.

---

## Cómo transcurre una llamada, paso a paso

1. **El agente contesta en nombre de tu local** y pregunta qué desea el cliente.
2. **Consulta tu carta** — los platos y precios que has introducido — para responder preguntas («¿tienen pizza vegetariana?») y ofrecer lo que existe.
3. **Toma el pedido**: platos, cantidades, peticiones («sin cebolla»), una alergia que avisar a cocina y el nombre del cliente.
4. **Repite el resumen** — platos, cantidades, total — y espera la confirmación del cliente.
5. **Registra el pedido** solo después de ese «sí»: el pedido recibe un número, el total se calcula con tus precios y se guarda el número de quien llama para poder devolverle la llamada.
6. **Indica una hora de recogida** que tiene en cuenta los pedidos en curso: el plazo base cuando hay calma, uno más largo cuando acaban de entrar varios pedidos.
7. **Puede enviar un SMS de confirmación** al cliente con el resumen (números móviles franceses).

Lo importante: el pedido no es «un mensaje para devolver la llamada». Se toma, el cliente lo confirma y queda registrado durante la llamada. Con Aevia Inbox aparece en la pestaña Pedidos, con los platos y el número del cliente.

---

## Lo que un buen agente no hace

- **No inventa platos.** Si el cliente pide algo que no está en tu carta, el pedido no puede registrarse con ese plato: el agente ofrece lo que existe.
- **No improvisa sobre alérgenos.** Si no tiene la información en lo que has introducido, no responde «sí, no lleva cacahuete»: traslada la pregunta al equipo.
- **No cobra.** Nada de dictar un número de tarjeta por teléfono: el pago se hace al recoger.
- **No gestiona entregas a domicilio.** El pedido que toma el agente es para recoger en el local.
- **No decide los casos especiales** — un pedido grande para un evento, una reclamación: los anota y te los transmite.

---

## ¿Y tu caja?

Un pedido tomado por teléfono tiene que llegar donde la cocina lo ve. Con Aevia Inbox llega a la pestaña Pedidos. Para los restaurantes cuya caja está conectada a HubRise, un conector permite enviarlo directamente, con la hora de recogida prevista y el número del cliente; ese conector está en proceso de validación por HubRise. Si tu organización depende de la caja, pregunta en qué punto está antes de contar con él.

---

## ¿Cuántos minutos necesitas?

Un agente de voz se paga por minutos de llamada. Para estimar tu necesidad, parte de lo que dura una llamada de pedido en tu local. **A modo de ejemplo** — una hipótesis que debes comprobar con tus propias llamadas: si una llamada de pedido dura de 2 a 3 minutos,

| Plan de Aevia Inbox (solo voz) | Minutos incluidos al mes | Llamadas de pedido de 2 a 3 min |
|---|---|---|
| Starter — 79 €/mes | 200 | unas 65 a 100 |
| Growth — 99 €/mes | 400 | unas 130 a 200 |
| Pro — 199 €/mes | 800 | unas 265 a 400 |

A esto se suma una cuota única de puesta en marcha de 100 € (conexión de la línea y configuración del agente con tu carta). Sin permanencia, 14 días de garantía de reembolso. Fuera de la zona euro, se factura el mismo importe en dólares.

---

## Las preguntas que hacer a cualquier proveedor

1. **¿De dónde saca el agente la carta y los precios?** ¿Y qué pasa cuando cambias un plato o un precio?
2. **¿Qué hace con un plato que no existe?** La buena respuesta: lo rechaza y ofrece lo que existe.
3. **¿Repite el resumen antes de registrar?** Sin ese paso, un malentendido se convierte en un error en cocina.
4. **¿Dónde llega el pedido?** Pantalla, caja, email, SMS: donde tu equipo mira de verdad.
5. **¿Qué responde sobre alérgenos que no conoce?** Debe trasladar la pregunta, nunca adivinar.
6. **¿Cuánto cuesta un minuto por encima del plan, y cuánto dura una llamada en tu local?**

---

## Preguntas frecuentes

**¿Puede la IA tomar de verdad un pedido completo por teléfono?**
Sí. El agente consulta tu carta, toma platos y cantidades, repite el resumen al cliente y registra el pedido tras su confirmación, con el número de quien llama.

**¿Qué pasa si el cliente pide un plato que no está en la carta?**
El pedido no puede registrarse con ese plato. El agente ofrece lo que figura en tu carta.

**¿El agente cobra el pago?**
No. El cliente paga al recoger. No se pide ningún número de tarjeta por teléfono.

**¿Y las entregas a domicilio?**
El agente de voz de Aevia Inbox toma pedidos para recoger en el local. No gestiona entregas.

**¿Cuánto cuesta?**
La voz empieza en 79 € al mes con 200 minutos de llamada incluidos, más 100 € de puesta en marcha única, sin permanencia.

---

👉 [Ver cómo responde al teléfono la atención al cliente con IA de Aevia Inbox](https://inbox.aevia.services/es/solutions/standard-telephonique-ia)
`,
        faq: [
          { q: "¿Puede la IA tomar de verdad un pedido completo por teléfono?", a: "Sí. El agente consulta la carta del restaurante, toma platos y cantidades, repite el resumen al cliente y registra el pedido tras su confirmación, con el número de quien llama." },
          { q: "¿Qué pasa si el cliente pide un plato que no está en la carta?", a: "El pedido no puede registrarse con ese plato. El agente ofrece lo que figura en la carta." },
          { q: "¿El agente cobra el pago?", a: "No. El cliente paga al recoger. No se pide ningún número de tarjeta por teléfono." },
          { q: "¿Y las entregas a domicilio?", a: "El agente de voz de Aevia Inbox toma pedidos para recoger en el local. No gestiona entregas." },
          { q: "¿Cuánto cuesta un agente de voz que toma pedidos?", a: "En Aevia Inbox, la voz empieza en 79 € al mes (79 USD fuera de la zona euro) con 200 minutos de llamada incluidos, más 100 € de puesta en marcha única, sin permanencia." },
        ],
      },
    },
  },
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

L'intérêt n'est pas seulement le prix. C'est le délai : un site en ligne en quelques jours plutôt qu'en six semaines de va-et-vient. Le compromis, c'est que vous partez d'un modèle sectoriel plutôt que d'une création graphique originale — ce qui, pour 90 % des commerces et prestataires, n'a aucune conséquence commerciale.

[Aevia Launch](https://launch.aevia.services) fonctionne sur ce principe : site en ligne sous 48 heures (5 à 7 jours pour un site Premium sur mesure), de 399 € à 1 499 € en paiement unique, puis 20 € par mois d'hébergement et de maintenance.`,
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

- **Simple brochure site: €400–1,500**, site with booking or an online shop: €1,500–6,000, complex custom build: €6,000+
- **The headline price is never the total price** — add hosting, the domain name, maintenance and updates
- **A quote with no priced line for content is an incomplete quote**: writing often accounts for 30% of the real work
- **The real risk is not overpaying, it is paying for a site nobody visits** — a site without search visibility is an overpriced brochure

---

## Why the price gaps are so wide

When a quote goes from €500 to €8,000 for what looks like the same site, the difference is almost never in the graphics. It lies in three things you cannot see from the homepage: how much content has to be produced, the features running behind the scenes, and the time spent making the site findable.

A five-page site with copy supplied by the client has nothing in common with a five-page site where every line has to be written, the products photographed and the search structure built. Yet both look identical in a portfolio.

---

## Real ranges by site type

### Landing page — €300–800

One page, one goal: get a form filled in or a call placed. It is the most profitable format when you already have traffic to send somewhere (advertising, social media, a trade show).

What it normally includes: a page structured into persuasive sections, a form connected to your mailbox, a mobile-friendly design, and hosting.

### Brochure site — €600–2,500

Four to eight pages: home, services, about, contact, sometimes one page per service. It is the standard format for a tradesperson, a practice, a shop or a service provider.

The low end of the range is a template adapted to your colours and your copy. The high end is a design specific to your brand, professional copywriting, and serious local search work.

### Site with booking or appointment scheduling — €1,500–5,000

As soon as a visitor has to pick a time slot, the complexity changes nature. Availability, confirmations, cancellations and reminders have to be handled, and often synchronisation with an existing calendar.

### Online shop — €2,000–10,000

The catalogue is the hidden cost. Thirty products with photos, descriptions, variants and stock means several days of data entry that nobody prices upfront. Add payment, shipping, VAT, and the legal notices required for distance selling.

### Custom build — €6,000 and up

Client area, connection to business software, quote calculator, multiple languages with distinct content. At this point it is no longer a site but an application.

---

## The costs nobody announces

| Item | Annual range | Avoidable? |
|---|---|---|
| Domain name | €10–40 | No |
| Hosting | €60–400 | No |
| SSL certificate | €0–100 | Often included |
| Maintenance and updates | €200–1,200 | No, with a CMS |
| Content changes | €50–120/hr | Yes, if you can make them yourself |
| Backups | €0–150 | No |

A €900 site that costs €800 a year to maintain ends up more expensive over three years than an €1,800 all-inclusive site. Few quotes let you make that calculation.

---

## Three questions that reveal an honest quote

**"Who writes the copy?"** If the answer is vague, the budget will balloon or the site will go live with placeholder text. Copywriting is the most underestimated item.

**"What happens if I want to change a price in six months?"** A site you cannot edit yourself will cost you a billed intervention for every comma.

**"Will the site be findable on Google, and for which terms?"** A serious provider will talk to you about specific, local search queries. A provider who answers "it will be SEO-optimised" has told you nothing.

---

## The real trade-off: the cost of building versus the cost of being absent

A business that does not appear when someone searches for its trade in its town loses customers every day without ever seeing it. It is a silent loss, and therefore easy to ignore — unlike an invoice.

If your site brings you even one customer a month, with an average basket of €150, it pays for itself in under a year, whichever range you are in. So the question is not "how much does it cost" but "from when does it start paying off".

---

## What about automated solutions?

For the past two years, a third way has existed between the site builder where you do everything yourself and the agency charging several thousand euros: platforms that generate a professional site from your business information, with search optimisation already structured.

The benefit is not only the price. It is the lead time: a site online in a few days rather than after six weeks of back-and-forth. The compromise is that you start from an industry template rather than an original design — which, for 90% of shops and service providers, has no commercial consequence.

[Aevia Launch](https://launch.aevia.services) works on this principle: site online within 48 hours (5 to 7 days for a custom Premium site), from €399 to €1,499 as a one-off payment, then €20 a month for hosting and maintenance.`,
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

- **Web informativa sencilla: 400–1.500 €**, web con reservas o tienda online: 1.500–6.000 €, desarrollo a medida complejo: más de 6.000 €
- **El precio anunciado nunca es el precio total** — suma el alojamiento, el dominio, el mantenimiento y las actualizaciones
- **Un presupuesto sin una partida de contenidos con su precio está incompleto**: la redacción suele representar el 30 % del trabajo real
- **El verdadero riesgo no es pagar de más, es pagar por una web que nadie visita** — una web sin posicionamiento es un folleto carísimo

---

## Por qué las diferencias de precio son tan grandes

Cuando un presupuesto pasa de 500 € a 8.000 € por lo que parece la misma web, la diferencia casi nunca está en el diseño gráfico. Está en tres cosas invisibles desde la página de inicio: la cantidad de contenido que hay que producir, las funcionalidades que trabajan por detrás y el tiempo dedicado a que la web se pueda encontrar.

Una web de cinco páginas con textos facilitados por el cliente no tiene nada que ver con una web de cinco páginas en la que hay que escribir cada línea, fotografiar los productos y estructurar el posicionamiento. Sin embargo, las dos se ven idénticas en un portafolio.

---

## Los rangos reales por tipo de web

### Landing page — 300–800 €

Una sola página, un solo objetivo: que el visitante rellene un formulario o haga una llamada. Es el formato más rentable cuando ya tienes tráfico que enviar a algún sitio (publicidad, redes sociales, feria profesional).

Lo que incluye normalmente: una página estructurada en secciones con argumentos, un formulario conectado a tu correo, un diseño adaptado a dispositivos móviles y el alojamiento.

### Web informativa — 600–2.500 €

De cuatro a ocho páginas: inicio, servicios, quiénes somos, contacto y, a veces, una página por servicio. Es el formato estándar para un profesional de oficios, una consulta o despacho, un comercio o un proveedor de servicios.

La parte baja del rango corresponde a una plantilla adaptada a tus colores y tus textos. La parte alta corresponde a un diseño propio de tu marca, una redacción profesional y un trabajo serio de posicionamiento local.

### Web con reservas o citas — 1.500–5.000 €

En cuanto un visitante tiene que elegir una franja horaria, la complejidad cambia de naturaleza. Hay que gestionar la disponibilidad, las confirmaciones, las cancelaciones, los recordatorios y, a menudo, la sincronización con una agenda existente.

### Tienda online — 2.000–10.000 €

El catálogo es el coste oculto. Treinta referencias con fotos, descripciones, variantes y stock son varios días de carga de datos que nadie presupuesta al principio. Añade el pago, el envío, el IVA y los avisos legales de la venta a distancia.

### A medida — más de 6.000 €

Área de cliente, conexión con un software de gestión, calculadora de presupuestos, varios idiomas con contenidos distintos. Aquí ya no hablamos de una web, sino de una aplicación.

---

## Los costes que nadie anuncia

| Concepto | Rango anual | ¿Evitable? |
|---|---|---|
| Dominio | 10–40 € | No |
| Alojamiento | 60–400 € | No |
| Certificado SSL | 0–100 € | A menudo incluido |
| Mantenimiento y actualizaciones | 200–1.200 € | No, si usas un CMS |
| Cambios de contenido | 50–120 €/h | Sí, si puedes hacerlos tú mismo |
| Copias de seguridad | 0–150 € | No |

Una web de 900 € que cuesta 800 € al año de mantenimiento sale más cara a tres años que una de 1.800 € todo incluido. Es el cálculo que pocos presupuestos te permiten hacer.

---

## Tres preguntas que revelan un presupuesto honesto

**«¿Quién escribe los textos?»** Si la respuesta es vaga, el presupuesto se disparará o la web saldrá con texto de relleno. La redacción es la partida más subestimada.

**«¿Qué pasa si quiero cambiar un precio dentro de seis meses?»** Una web que no puedes modificar tú mismo te costará una intervención facturada por cada coma.

**«¿Se podrá encontrar la web en Google, y con qué términos?»** Un proveedor serio te hablará de búsquedas concretas y locales. Un proveedor que responde «estará optimizada para SEO» no te ha dicho nada.

---

## El verdadero dilema: coste de creación frente a coste de ausencia

Un comercio que no aparece cuando alguien busca su oficio en su ciudad pierde clientes todos los días, sin verlo nunca. Es una pérdida silenciosa y, por eso, fácil de ignorar — a diferencia de una factura.

Si tu web te trae aunque sea un solo cliente al mes, con un ticket medio de 150 €, se amortiza en menos de un año, sea cual sea el rango en el que estés. La pregunta no es «cuánto cuesta», sino «a partir de cuándo empieza a ser rentable».

---

## ¿Y las soluciones automatizadas?

Desde hace dos años existe una tercera vía entre el creador de webs en el que lo haces todo tú y la agencia de varios miles de euros: plataformas que generan una web profesional a partir de la información de tu negocio, con el posicionamiento ya estructurado.

La ventaja no es solo el precio. Es el plazo: una web en línea en unos días en lugar de seis semanas de idas y venidas. La contrapartida es que partes de una plantilla sectorial y no de un diseño gráfico original — lo que, para el 90 % de los comercios y proveedores de servicios, no tiene ninguna consecuencia comercial.

[Aevia Launch](https://launch.aevia.services) funciona con este principio: web en línea en 48 horas (de 5 a 7 días para una web Premium a medida), de 399 € a 1.499 € en pago único, y después 20 € al mes de alojamiento y mantenimiento.`,
        faq: [
          {
            q: "¿Cuál es el precio medio de una página web profesional?",
            a: "Para una pyme o un autónomo, la mediana está entre 800 y 2.500 € para una web informativa. Por debajo de 400 € suele tratarse de una plantilla sin trabajo de contenidos ni posicionamiento. Por encima de 5.000 €, se entra en el desarrollo a medida o el comercio electrónico.",
          },
          {
            q: "¿Hay que pagar una cuota mensual por una web?",
            a: "No necesariamente. Algunos proveedores cobran un pago único con alojamiento incluido; otros, una cuota mensual. Compara siempre a tres años: una cuota de 39 €/mes son 1.400 € en ese periodo.",
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
- **L'agent vocal IA facture au forfait ou à la minute**, sans supplément quand plusieurs appels arrivent en même temps : chaque minute coûte le même prix
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
| Coût récurrent | 80 à 400 €/mois, ou 1,50–3 €/appel | 79 à 999 €/mois selon le volume |
| Horaires | Plages ouvrées, extensions payantes | 24h/24, 7j/7, sans supplément |
| Appels simultanés | Limités par l'effectif | Plusieurs en parallèle, sans tonalité « occupé » |
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

- **Answering services bill per call or per plan**: count €1.50 to €3 per handled call, or €80 to €400/month depending on volume
- **An AI voice agent bills per plan or per minute**, with no surcharge when several calls come in at the same time: every minute costs the same
- **The real difference is not price, it is what comes out of the call**: a message to call back, or an appointment already in your calendar
- **The answering service keeps the edge on emotional or off-script requests**; AI keeps the edge on volume, nights and peaks

---

## What each solution actually does

An **answering service** is an outsourced human service. Operators answer on your behalf, following a brief you wrote. They take a message, screen calls, and forward everything to you by email or text message. Some providers go as far as booking appointments if you give them access to a calendar.

An **AI voice agent** is software that picks up, understands the request in natural language, and carries out an action in your system: checking availability, creating a booking, logging an order, answering a question about your opening hours or your prices.

The distinction that matters: an answering service mostly produces information to be handled later. A voice agent produces an action that is already done.

---

## A costed comparison

| Criterion | Answering service | AI voice agent |
|---|---|---|
| Upfront cost | €0 to €150 activation fee | €0 to €200 for configuration |
| Recurring cost | €80 to €400/month, or €1.50–3/call | €79 to €999/month depending on volume |
| Hours | Business hours, extensions cost extra | 24/7, no surcharge |
| Simultaneous calls | Limited by headcount | Several in parallel, no busy tone |
| Languages | Depends on the team, often 1 to 2 | 5 languages or more, no extra cost |
| Result of a call | A message to handle | An executed action |
| Emotional nuance | Strength | Weakness |
| Off-script requests | Human improvisation | Transfer or callback |

---

## The calculation few people run

A restaurant that gets 25 calls a day, 18 of them for a booking, will pay roughly €40 to €55 a day for an answering service on per-call pricing — more than €1,200 a month. At that volume, the AI plan comes in far below.

Conversely, a consulting firm that gets three calls a day, all delicate and all different, has no reason to automate. The answering service will cost it €100 a month and do a better job.

**Rule of thumb**: below 5 calls a day with varied requests, a human remains the better fit. Above 15 calls a day with repetitive requests, the balance tips clearly in favor of AI. In between, it depends on how repetitive the calls are, not on volume.

---

## What AI does better, concretely

**Off-peak hours.** 30 to 40% of a business's calls arrive outside opening hours or during the rush. Those are precisely the calls no human takes and no answering service covers without an extra charge.

**Peaks.** On a Friday evening in a restaurant, six people call at the same time. An answering service puts five calls on hold; a voice agent takes all six.

**Complete execution.** The agent does not say "I'll pass the message on." It checks the 20:00 table, books it under the name given, enters it in the floor-management software and sends the confirmation.

---

## What humans do better

An angry customer, a bereavement, a cancellation that hides a dispute, a commercial negotiation: these are moments when a human voice is not a luxury. A good answering service knows how to slow down, apologize sincerely, and sense when to hand over.

That is why the best setup is almost never one or the other. The voice agent takes the standard calls — bookings, opening hours, availability — and switches to a human as soon as the request goes beyond its scope.

---

## How to decide in three questions

1. **What share of your calls look alike?** Log your calls for a week. If more than 60% fall into three reasons, automation pays off.
2. **How many calls are never answered?** Your phone carrier or your phone itself gives you the figure. That is the number that justifies the expense, not the total number of calls.
3. **What do you want to have at the end of the call?** If a message is enough, an answering service will do. If you want an appointment already booked, you need a system connected to your calendar.

---

At Aevia, the voice agent in [Aevia Inbox](https://inbox.aevia.services) is built for the third answer: it does not pass messages on, it executes — creating the booking, syncing the calendar, sending the confirmation — and transfers to a human as soon as the request falls outside its scope.`,
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

- **La secretaría telefónica factura por llamada o con una tarifa plana**: calcula entre 1,50 y 3 € por llamada atendida, o de 80 a 400 €/mes según el volumen
- **El agente de voz IA factura por plan o por minuto**, sin recargo cuando entran varias llamadas a la vez: cada minuto cuesta lo mismo
- **La diferencia real no es el precio, es lo que sale de la llamada**: un mensaje para devolver la llamada, o una cita ya anotada en tu agenda
- **La secretaría conserva la ventaja en las peticiones emocionales o fuera de guion**; la IA conserva la ventaja en volumen, noches y picos

---

## Qué hace realmente cada solución

Una **secretaría telefónica** es un servicio humano externalizado. Unos teleoperadores responden en tu lugar, con una ficha de instrucciones que tú has redactado. Toman un mensaje, filtran y te lo trasladan por correo electrónico o SMS. Algunos proveedores llegan a gestionar citas si les das acceso a una agenda.

Un **agente de voz IA** es un software que descuelga, entiende la petición en lenguaje natural y ejecuta una acción en tu sistema: comprobar disponibilidad, crear una reserva, registrar un pedido, responder a una pregunta sobre tus horarios o tus tarifas.

La distinción que importa: la secretaría produce sobre todo información que habrá que procesar más tarde. El agente de voz produce una acción ya terminada.

---

## Comparativa con cifras

| Criterio | Secretaría telefónica | Agente de voz IA |
|---|---|---|
| Coste inicial | De 0 a 150 € de alta | De 0 a 200 € de configuración |
| Coste recurrente | De 80 a 400 €/mes, o 1,50–3 €/llamada | De 79 a 999 €/mes según el volumen |
| Horario | Horario laboral, ampliaciones de pago | 24/7, sin recargo |
| Llamadas simultáneas | Limitadas por la plantilla | Varias en paralelo, sin tono de ocupado |
| Idiomas | Según el equipo, a menudo 1 o 2 | 5 idiomas o más, sin coste adicional |
| Resultado de una llamada | Un mensaje que gestionar | Una acción ejecutada |
| Matices emocionales | Punto fuerte | Punto débil |
| Peticiones fuera de guion | Improvisación humana | Transferencia o devolución de llamada |

---

## El cálculo que pocos hacen

Un restaurante que recibe 25 llamadas al día, 18 de ellas para reservar, pagará unos 40 a 55 € diarios de secretaría con tarificación por llamada, es decir, más de 1.200 € al mes. Para ese volumen, el plan de IA queda muy por debajo.

A la inversa, una consultoría que recibe tres llamadas al día, todas delicadas y todas distintas, no tiene ningún interés en automatizar. La secretaría le costará 100 € al mes y lo hará mejor.

**La regla práctica**: por debajo de 5 llamadas al día con peticiones variadas, la persona sigue siendo más adecuada. Por encima de 15 llamadas al día con peticiones repetitivas, la balanza se inclina claramente a favor de la IA. Entre ambas cifras, depende de lo repetitivas que sean las llamadas, no del volumen.

---

## Lo que la IA hace mejor, en concreto

**Las horas valle.** Entre el 30 y el 40 % de las llamadas de un comercio llegan fuera del horario de apertura o en plena hora punta. Son justamente las llamadas que ninguna persona atiende y que ninguna secretaría cubre sin recargo.

**Los picos.** Un viernes por la noche en un restaurante, seis personas llaman a la vez. Una secretaría deja cinco llamadas en espera; un agente de voz atiende las seis.

**La ejecución completa.** El agente no dice «se lo paso». Comprueba la mesa de las 20:00, la reserva a nombre de quien llama, la registra en el software de sala y envía la confirmación.

---

## Lo que la persona hace mejor

Un cliente enfadado, un duelo, una cancelación que esconde un conflicto, una negociación comercial: son momentos en los que la voz humana no es un lujo. Una buena secretaría sabe ir más despacio, disculparse con sinceridad y percibir cuándo hay que pasar el relevo.

Por eso la mejor configuración casi nunca es una u otra. El agente de voz atiende las llamadas estándar —reservas, horarios, disponibilidad— y pasa a una persona en cuanto la petición se sale del marco.

---

## Cómo decidir en tres preguntas

1. **¿Qué proporción de tus llamadas se parecen?** Anota tus llamadas durante una semana. Si más del 60 % caben en tres motivos, la automatización es rentable.
2. **¿Cuántas llamadas no se atienden nunca?** Tu operador o tu propio teléfono te da la cifra. Es el número que justifica el gasto, no el total de llamadas.
3. **¿Qué quieres tener al final de la llamada?** Si basta con un mensaje, una secretaría te sirve. Si quieres una cita ya fijada, necesitas un sistema conectado a tu agenda.

---

En Aevia, el agente de voz de [Aevia Inbox](https://inbox.aevia.services) está diseñado para la tercera respuesta: no transmite, ejecuta —crea la reserva, sincroniza el calendario, envía la confirmación— y transfiere a una persona en cuanto la petición sale de su ámbito.`,
        faq: [
          {
            q: "¿Un agente de voz IA es más barato que una secretaría telefónica?",
            a: "A partir de unas quince llamadas diarias, sí, y la diferencia crece con el volumen porque la IA no factura la simultaneidad. Por debajo de cinco llamadas al día, el servicio humano suele salir más barato.",
          },
          {
            q: "¿Sabe quien llama que habla con una IA?",
            a: "El agente es transparente sobre su naturaleza. En la práctica, lo que importa a quien llama es obtener una respuesta inmediata y una reserva confirmada en lugar de caer en un contestador.",
          },
          {
            q: "¿Qué pasa si la IA no entiende la petición?",
            a: "Transfiere a un número atendido por una persona o registra una devolución de llamada con el contexto de la llamada. Un sistema bien configurado define de antemano los motivos que deben pasar siempre a una persona.",
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
- **A conversational AI agent understands free-form phrasing** and can carry out an action: book, look up an order, change an appointment.
- **The difference the customer sees**: the chatbot makes you click "Other request"; the agent answers the request.
- **A chatbot still makes sense** for very short, tightly framed journeys. Beyond that, it creates more frustration than it saves time.

---

## Three generations, often confused

**The button chatbot.** You click "Hours", "Prices", "Contact us". It is a menu dressed up as a conversation. Useful for three fixed pieces of information, infuriating as soon as your question is not on the list.

**The keyword chatbot.** It looks for words in your sentence and fires the matching answer. "I'd like to cancel my Thursday booking" triggers the "cancellation" answer, but it has no idea which booking you mean.

**The conversational AI agent.** It interprets the whole sentence, remembers the context of previous messages, queries your real data and carries out the action. "I'd like to move Thursday to Friday" becomes: identify the customer, find the Thursday slot, check Friday, move it, confirm.

---

## The test that tells them apart in one question

Ask a compound question: **"Are you open on Saturday, and do you deliver to Bourg-en-Bresse?"**

- The button chatbot cannot take it in.
- The keyword chatbot catches one of the two topics and ignores the other.
- The AI agent answers both, in the right order.

This is exactly the kind of question real customers ask, because nobody phrases one request at a time.

---

## What it changes commercially

The cost of a badly placed chatbot never shows up on an invoice: it shows up in the customers who give up. When a visitor clicks three times without getting an answer, they do not write to complain — they close the tab and call your competitor.

Conversely, an agent that answers free-form questions turns a question into an action. The visitor no longer asks "how do I book"; they book within the conversation.

---

## When a simple chatbot is enough

There is no shame in keeping it simple. A button chatbot does the job if:

- you have fewer than five recurring questions, all factual;
- your goal is to filter before a human contact, not to handle the request;
- your volume is low and your budget tight.

In that case, a clear banner with your opening hours and a call button often does better than a chatbot.

---

## When you need an AI agent

- Your customers write compound requests, with dates, names, quantities.
- The answer depends on your data: availability, stock, customer history.
- You receive messages on several channels and want the same quality everywhere.
- You lose requests at night and at weekends.

---

## The deciding criterion: read or act

Ask yourself one question: **do you want the system to inform, or to finish the job?**

Informing means displaying an answer. Finishing the job means writing a line in your database: a booking, an order, a rescheduled appointment. That second category needs an agent connected to your tools, not a chat widget.

That is the logic behind [Aevia Inbox](https://inbox.aevia.services): the same AI brain answers on WhatsApp, Instagram, email and over the phone, with access to real availability — and it creates the booking rather than explaining how to create one.`,
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
          "Se llama «chatbot» a casi todo lo que responde automáticamente, y eso oculta una diferencia de naturaleza. Uno sigue un árbol de decisión escrito de antemano; el otro entiende y actúa. Así se distinguen y así sabrás cuál corresponde a tu necesidad.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Un chatbot clásico sigue un guion**: botones, árbol de decisión, respuestas preescritas. No entiende, deriva.
- **Un agente de IA conversacional entiende el lenguaje libre** y puede ejecutar una acción: reservar, buscar un pedido, cambiar una cita.
- **La diferencia que ve el cliente**: el chatbot te hace pulsar «Otra consulta»; el agente responde a la consulta.
- **El chatbot sigue siendo útil** para recorridos muy cortos y muy acotados. Más allá, genera más frustración de la que compensa el tiempo que ahorra.

---

## Tres generaciones que se suelen confundir

**El chatbot de botones.** Pulsas «Horarios», «Precios», «Contacto». Es un menú disfrazado de conversación. Útil para tres datos fijos, exasperante en cuanto tu pregunta no está en la lista.

**El chatbot de palabras clave.** Busca palabras en tu frase y lanza la respuesta asociada. «Quiero cancelar mi reserva del jueves» activa la respuesta «cancelación», pero no sabe de qué reserva hablas.

**El agente de IA conversacional.** Interpreta la frase completa, recuerda el contexto de los mensajes anteriores, consulta tus datos reales y ejecuta la acción. «Quiero pasar lo del jueves al viernes» se convierte en: identificar al cliente, encontrar la franja del jueves, comprobar el viernes, mover la cita, confirmar.

---

## La prueba que los separa con una sola pregunta

Haz una pregunta compuesta: **«¿Abren el sábado y hacen entregas en Bourg-en-Bresse?»**

- El chatbot de botones no puede recibirla.
- El chatbot de palabras clave capta uno de los dos temas e ignora el otro.
- El agente de IA responde a los dos, en el orden correcto.

Es exactamente el tipo de pregunta que hacen los clientes reales, porque nadie formula una sola petición a la vez.

---

## Lo que cambia a nivel comercial

El coste de un chatbot mal planteado no aparece en ninguna factura: está en los clientes que abandonan. Cuando un visitante hace clic tres veces sin obtener su respuesta, no te escribe para quejarse: cierra la pestaña y llama a la competencia.

En cambio, un agente que responde al lenguaje libre convierte una pregunta en una acción. El visitante ya no pregunta «cómo reservar»: reserva dentro de la conversación.

---

## Cuándo basta un chatbot sencillo

No tiene nada de malo quedarse en lo sencillo. Un chatbot de botones cumple su función si:

- tienes menos de cinco preguntas recurrentes, todas factuales;
- tu objetivo es filtrar antes de un contacto humano, no resolver la petición;
- tu volumen es bajo y tu presupuesto, ajustado.

En ese caso, un aviso claro con tus horarios y un botón de llamada suele funcionar mejor que un chatbot.

---

## Cuándo necesitas un agente de IA

- Tus clientes escriben peticiones compuestas, con fechas, nombres, cantidades.
- La respuesta depende de tus datos: disponibilidad, stock, historial del cliente.
- Recibes mensajes por varios canales y quieres la misma calidad en todos.
- Pierdes peticiones por la noche y los fines de semana.

---

## El criterio decisivo: informar o actuar

Hazte una sola pregunta: **¿quieres que el sistema informe o que termine el trabajo?**

Informar es mostrar una respuesta. Terminar el trabajo es escribir una línea en tu base de datos: una reserva, un pedido, una cita cambiada. Esta segunda categoría requiere un agente conectado a tus herramientas, no un widget de chat.

Es la lógica de [Aevia Inbox](https://inbox.aevia.services): el mismo cerebro de IA responde en WhatsApp, Instagram, correo electrónico y por teléfono, con acceso a la disponibilidad real, y crea la reserva en lugar de explicar cómo crearla.`,
        faq: [
          {
            q: "¿Cuál es la diferencia entre un chatbot y un agente de IA?",
            a: "Un chatbot sigue un guion predefinido y muestra respuestas preescritas. Un agente de IA conversacional interpreta peticiones libres, mantiene el contexto y puede ejecutar una acción en tus sistemas, como crear una reserva.",
          },
          {
            q: "¿Puede equivocarse un agente de IA?",
            a: "Sí, como una persona. La diferencia es que un agente bien configurado conoce sus límites: cuando la petición sale de su alcance, la transfiere a una persona en lugar de inventarse una respuesta.",
          },
          {
            q: "¿Hace falta un programador para poner en marcha un agente de IA?",
            a: "Ya no para los casos estándar. Las plataformas actuales se configuran describiendo tu actividad, tus horarios y tus reglas; el desarrollo sigue siendo necesario para conectar un software de gestión poco habitual.",
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

- **The language barrier is no longer a fixed cost**: an AI agent replies in the customer's language with no extra headcount per market
- **The real obstacle is not translation, it is the time zone** — a customer in Bogotá writes while your office is asleep
- **Translating is not localizing**: currencies, date formats and business conventions change from one country to the next
- **Start with one language and one country**, measure, then repeat — opening five markets at once dilutes everything

---

## The calculation that used to block international sales

Until recently, serving a foreign market forced a binary choice: hire someone who speaks the language, or give up. For a three-person company, that meant a market of 40 million people stayed closed for want of one employee at €35,000 a year.

That calculation has changed. A conversational agent answers in French, English, Spanish, German or Portuguese with the same quality, and the cost does not depend on the number of languages. Language has become a setting, not a budget line.

---

## What it actually unlocks

**You can test a market without committing.** Opening Spain used to require a hire; now it requires a translated page and a configured agent. If the market does not respond, you have lost a few days, not a year of salary.

**You cover time zones without working nights.** This is the most underrated point. A Canadian prospect who writes at 21:00 Montreal time reaches you at 03:00. Without an automatic reply, they have already written to three competitors before you wake up.

**You no longer lose requests written in a language you cannot read.** Many small businesses have a folder of emails they never dealt with because they were in German.

---

## The four traps that remain

### 1. Translation is not enough

Word-for-word translation sounds foreign. Business conventions differ: in Spain, the informal "tú" is normal in situations where French would require the formal "vous"; German expects more factual precision and less emphasis; British and American English do not follow the same politeness conventions.

### 2. Currencies and formats

Showing "€399" to a Colombian customer asks them for mental arithmetic and a conversion they will not do. Date formats (12/06 means June in the United Kingdom and December in the United States) cause real booking errors.

### 3. Payment

Every market has its habits: cards in France, instant bank transfers in Germany, mobile wallets in Latin America. Offering cards only shuts out part of the market without you noticing.

### 4. Local obligations

Legal notices, terms of sale, withdrawal rights and taxes change from one country to another. Automated customer service does not exempt you from terms and conditions adapted to the target market.

---

## The method that works: one market at a time

1. **Choose the market where you already have signals** — visits, an unsolicited enquiry, an existing customer who has talked about you.
2. **Translate what converts first**: the product page, the pricing page, the FAQ. The blog comes later.
3. **Configure the agent in that language** and check its answers against your twenty most frequent questions.
4. **Measure for six weeks**: requests received, response rate, requests converted.
5. **Only duplicate if the numbers follow.**

---

## What this means for a very small business

A company based in France can now serve a Spanish, Canadian or Colombian customer with the same tools as the business next door. The website is delivered multilingual, the agent replies in the visitor's language on WhatsApp, Instagram, email or over the phone, and requests land in a single inbox whatever the channel or the language.

That is what [Aevia Inbox](https://inbox.aevia.services) does: five native languages, no extra cost per language, and the same customer context from one channel to the next. The head office is in France; the customers it serves do not have to be.`,
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
          "Responder en cinco idiomas exigía cinco empleados o una agencia inasumible. Ese candado ha saltado. Esto es lo que cambia una atención multilingüe automatizada para una empresa pequeña que vende fuera de sus fronteras, y las trampas que siguen ahí.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **La barrera del idioma ya no es un coste fijo**: un agente de IA responde en la lengua del cliente sin plantilla adicional por mercado
- **El freno real no es la traducción, es el huso horario**: un cliente en Bogotá escribe cuando tu oficina duerme
- **Traducir no es localizar**: las divisas, los formatos de fecha y los usos comerciales cambian de un país a otro
- **Empieza por un idioma y un país**, mide y luego replica: abrir cinco mercados a la vez lo diluye todo

---

## El cálculo que bloqueaba la venta internacional

Hasta hace poco, atender un mercado extranjero imponía una elección binaria: contratar a alguien que hablara el idioma, o renunciar. Para una empresa de tres personas, eso significaba que un mercado de 40 millones de habitantes seguía cerrado porque faltaba un empleado de 35.000 € al año.

Ese cálculo ha cambiado. Un agente conversacional responde en francés, inglés, español, alemán o portugués con la misma calidad, sin que el coste dependa del número de idiomas. El idioma se ha convertido en un parámetro, no en una partida de gasto.

---

## Lo que desbloquea en la práctica

**Puedes probar un mercado sin comprometerte.** Abrir España exigía una contratación; ahora exige una página traducida y un agente configurado. Si el mercado no responde, has perdido unos días, no un año de sueldo.

**Cubres los husos horarios sin trabajar de noche.** Es el punto más subestimado. Un posible cliente canadiense que escribe a las 21:00, hora de Montreal, te llega a las 03:00. Sin respuesta automática, ya habrá escrito a tres competidores antes de que te despiertes.

**Dejas de perder peticiones en un idioma que no lees.** Muchas pequeñas empresas tienen una carpeta de correos que nunca atendieron porque estaban en alemán.

---

## Las cuatro trampas que quedan

### 1. Traducir no basta

Un texto traducido palabra por palabra suena extranjero. Los usos comerciales difieren: en España el tuteo es normal en contextos en los que el francés exigiría el «vous»; el alemán espera más precisión factual y menos énfasis; el inglés británico y el estadounidense no tienen las mismas convenciones de cortesía.

### 2. Las divisas y los formatos

Mostrar «399 €» a un cliente colombiano le obliga a hacer un cálculo mental y una conversión que no hará. Los formatos de fecha (12/06 significa junio en el Reino Unido y diciembre en Estados Unidos) provocan errores reales de reserva.

### 3. El pago

Cada mercado tiene sus hábitos: tarjeta en Francia, transferencia inmediata en Alemania, billeteras móviles en América Latina. Ofrecer solo pago con tarjeta cierra una parte del mercado sin que te des cuenta.

### 4. Las obligaciones locales

El aviso legal, las condiciones de venta, el derecho de desistimiento y la fiscalidad cambian de un país a otro. Una atención al cliente automatizada no te exime de tener condiciones generales adaptadas al mercado al que te diriges.

---

## El método que funciona: un mercado cada vez

1. **Elige el mercado en el que ya tienes señales**: visitas, una petición espontánea, un cliente actual que ha hablado de ti.
2. **Traduce primero lo que convierte**: la página de producto, la de precios, las preguntas frecuentes. El blog viene después.
3. **Configura el agente en ese idioma** y comprueba sus respuestas a tus veinte preguntas más frecuentes.
4. **Mide durante seis semanas**: peticiones recibidas, tasa de respuesta, peticiones convertidas.
5. **Replica solo si los números acompañan.**

---

## Lo que supone para una microempresa

Una empresa con sede en Francia puede atender hoy a un cliente español, canadiense o colombiano con las mismas herramientas que el negocio de al lado. La web se entrega multilingüe, el agente responde en el idioma del visitante por WhatsApp, Instagram, correo electrónico o teléfono, y las peticiones llegan a una sola bandeja sea cual sea el canal o el idioma.

Es lo que hace [Aevia Inbox](https://inbox.aevia.services): cinco idiomas nativos, ningún coste adicional por idioma y el mismo contexto del cliente de un canal a otro. La sede está en Francia; los clientes atendidos no tienen por qué estarlo.`,
        faq: [
          {
            q: "¿Puede un agente de IA responder bien en varios idiomas?",
            a: "Sí para los intercambios habituales de atención: horarios, precios, disponibilidad, reservas. La calidad es comparable entre idiomas. Para la negociación comercial o los temas delicados, sigue siendo preferible el relevo de una persona.",
          },
          {
            q: "¿Hace falta una web traducida para atender un mercado extranjero?",
            a: "Como mínimo las páginas que convierten: producto, precios, contacto y FAQ. Un agente multilingüe sobre una web solo en francés genera una incoherencia que resta confianza.",
          },
          {
            q: "¿Cuánto cuesta añadir un idioma?",
            a: "En una solución multilingüe nativa, nada más por idioma: el coste sigue al volumen de mensajes, no al número de idiomas. Lo que cuesta es traducir la web y adaptar las condiciones de venta al mercado al que te diriges.",
          },
          {
            q: "¿Se puede atender un huso horario lejano sin trabajar de noche?",
            a: "Es justamente el objetivo: el agente responde de inmediato sea cual sea la hora, toma la cita o el pedido, y tú tratas el resto en tu horario laboral.",
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

- **The WhatsApp Business app is free**, runs on a phone, and works for up to roughly 5 conversations a day
- **The WhatsApp Business API has no interface**: it is a technical connection plugged into a tool, built for volume and for working as a team
- **A number cannot be on both at once** — moving to the API is a one-way trip that is not easy to reverse
- **Sending unsolicited messages from the app is the surest way to get your number blocked**

---

## Two products, one name

WhatsApp offers two very different things under the same brand.

**The WhatsApp Business app** installs like regular WhatsApp. It adds a business profile, a simple catalog, quick replies and labels. It is free and runs on a phone, with an optional extension on a computer.

**The WhatsApp Business API** has no interface at all. It is a technical channel you connect to software: a shared inbox, a CRM, an AI agent. You never "see" the API; you see the tool that uses it.

---

## Comparison

| Criterion | App | API |
|---|---|---|
| Price | Free | Billed per conversation, via a provider |
| Interface | Yes, on a phone | None, goes through a tool |
| Simultaneous users | 1 phone (+ 4 linked devices) | Unlimited |
| Automation | Basic quick replies | Full, AI agent possible |
| Shared history | No | Yes |
| Bulk messages | Heavily limited, risk of being blocked | Allowed via approved templates |
| Statistics | Minimal | Complete |

---

## The switching threshold

There are three signs that the app is no longer enough:

1. **Several people need to reply.** The app is tied to one phone. As soon as two employees have to handle the same conversations, you end up passing a device around, which is unworkable.
2. **You lose track.** Without shared history or assignment, every other request gets handled twice or not at all.
3. **You want to reply automatically.** The app's quick replies do not understand the request: they paste in text you wrote.

---

## The trap that costs the most

Many businesses use the app to send promotions to a list of customers. WhatsApp detects it, and the number is restricted, then blocked. You lose not only the channel but also the history of your customer conversations.

The API exists precisely for this: outbound messages to a customer who has not written to you recently go through **templates approved in advance** by Meta. It is more restrictive, but it is what protects the number.

---

## What to know before you switch

**The number cannot be on both.** Migrating a number to the API removes it from the app. Plan the switch for a quiet moment, and let your team know.

**You do not deal with Meta directly.** You go through a provider that handles the connection and the billing. Your choice of provider determines what you will be able to do afterwards.

**Business verification takes time.** Meta asks you to verify that your company legally exists. Allow several days to a few weeks, and do it before you need it.

---

## How to choose with one question

**How many people need to see the same conversations?**

Just one, with fewer than five exchanges a day: the free app is the right choice, and paying for the API would be a waste.

Two or more, or more than ten conversations a day, or the wish to automate: you need the API and a tool to run it.

That is what [Aevia Inbox](https://inbox.aevia.services) does: the API connection is managed for you, WhatsApp lands in the same inbox as Instagram and email, and the same AI agent can reply on all three.`,
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
          "Dos productos comparten nombre y no hacen el mismo trabajo. Uno es una aplicación en un teléfono, el otro es infraestructura sin pantalla. Elegir mal cuesta dinero innecesario o el bloqueo del número en el peor momento.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **La aplicación WhatsApp Business es gratuita**, funciona en un teléfono y sirve hasta unas 5 conversaciones al día
- **La API de WhatsApp Business no tiene interfaz**: es una conexión técnica enchufada a una herramienta, pensada para el volumen y el trabajo en equipo
- **Un número no puede estar en las dos a la vez**: pasar a la API es un viaje de ida que no se deshace fácilmente
- **Enviar mensajes no solicitados desde la aplicación es la mejor manera de que te bloqueen el número**

---

## Dos productos, un solo nombre

WhatsApp ofrece dos cosas muy distintas bajo la misma marca.

**La aplicación WhatsApp Business** se instala como el WhatsApp de siempre. Añade un perfil de empresa, un catálogo sencillo, respuestas rápidas y etiquetas. Es gratuita y funciona en un teléfono, con la posibilidad de usarla también en versión de escritorio.

**La API de WhatsApp Business** no tiene ninguna interfaz. Es un canal técnico que conectas a un software: una bandeja de entrada compartida, un CRM, un agente de IA. La API no se «ve»: ves la herramienta que la utiliza.

---

## Comparativa

| Criterio | Aplicación | API |
|---|---|---|
| Precio | Gratuita | Facturada por conversación, a través de un proveedor |
| Interfaz | Sí, en el teléfono | Ninguna, pasa por una herramienta |
| Usuarios simultáneos | 1 teléfono (+ 4 dispositivos vinculados) | Ilimitados |
| Automatización | Respuestas rápidas básicas | Completa, con agente de IA posible |
| Historial compartido | No | Sí |
| Envíos masivos | Muy limitados, riesgo de bloqueo | Permitidos mediante plantillas aprobadas |
| Estadísticas | Mínimas | Completas |

---

## El umbral para dar el salto

Hay tres señales que indican que la aplicación ya no basta:

1. **Tienen que responder varias personas.** La aplicación está ligada a un teléfono. En cuanto dos empleados tienen que atender las mismas conversaciones, acabas pasándote el aparato de mano en mano, y eso es insostenible.
2. **Pierdes el hilo.** Sin historial compartido ni asignación, una de cada dos peticiones se atiende dos veces o ninguna.
3. **Quieres responder automáticamente.** Las respuestas rápidas de la aplicación no entienden la petición: pegan un texto que tú has escrito.

---

## La trampa que más cara sale

Muchas empresas usan la aplicación para enviar promociones a una lista de clientes. WhatsApp lo detecta y el número queda restringido y después bloqueado. No solo pierdes el canal, sino también el historial de tus conversaciones con clientes.

La API existe justamente para eso: los mensajes salientes dirigidos a un cliente que no te ha escrito recientemente pasan por **plantillas aprobadas de antemano** por Meta. Es más restrictivo, pero es lo que protege el número.

---

## Lo que debes saber antes de migrar

**El número no puede estar en las dos.** Migrar un número a la API lo retira de la aplicación. Planifica el cambio para un momento tranquilo y avisa a tu equipo.

**No tratas directamente con Meta.** Pasas por un proveedor que gestiona la conexión y la facturación. La elección de ese proveedor determina lo que podrás hacer después.

**La verificación de la empresa lleva tiempo.** Meta pide verificar la existencia legal de la empresa. Calcula de varios días a algunas semanas, y hazlo antes de necesitarlo.

---

## Cómo elegir con una sola pregunta

**¿Cuántas personas tienen que ver las mismas conversaciones?**

Una sola, con menos de cinco intercambios al día: la aplicación gratuita es la opción correcta, y pagar por la API sería un desperdicio.

Dos o más, o más de diez conversaciones al día, o ganas de automatizar: necesitas la API y una herramienta para aprovecharla.

Es lo que hace [Aevia Inbox](https://inbox.aevia.services): la conexión con la API está gestionada, WhatsApp llega a la misma bandeja que Instagram y el correo electrónico, y el mismo agente de IA puede responder en los tres.`,
        faq: [
          {
            q: "¿La API de WhatsApp Business es de pago?",
            a: "Sí. Meta factura por conversación, con tarifas según el país y el tipo de mensaje, a lo que se suma el precio de la herramienta que usa la API. La aplicación WhatsApp Business, en cambio, sigue siendo gratuita.",
          },
          {
            q: "¿Puedo conservar mi número al pasar a la API?",
            a: "Sí en la mayoría de los casos, pero el número sale entonces de la aplicación WhatsApp Business y ya no puede usarse allí. El cambio se prepara: copia de seguridad del historial local y equipo avisado.",
          },
          {
            q: "¿Por qué han bloqueado mi número de WhatsApp?",
            a: "Casi siempre porque se enviaron mensajes masivos a personas que no habían escrito primero, o porque los destinatarios denunciaron los mensajes. La API con plantillas aprobadas existe para evitar ese escenario.",
          },
          {
            q: "¿Hace falta un programador para usar la API de WhatsApp?",
            a: "No si usas una solución que ya la integra. El desarrollo solo es necesario para una integración a medida con un software interno.",
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

- **A garage misses 30 to 50% of its calls** during workshop hours: nobody is at the desk, and you do not answer the phone from under a lift
- **A missed call does not call back** — it calls the next garage, because a breakdown cannot be put off
- **A voice agent takes the appointment**, the reason and the vehicle, and enters it in the calendar without interrupting the job in progress
- **What you must NOT hand over to it**: diagnosis and pricing. A quote given over the phone and then contradicted at the workshop destroys trust

---

## The problem is mechanical, not commercial

A garage of two to five people has a constraint few trades know: hands busy and dirty for most of the day. The phone rings at the very moment you cannot answer.

As a result, most garages knowingly run a degraded service: they call back "when there's a minute", which means at 19:00, when the customer is busy doing something else. In the meantime, the customer has called two other garages and booked with the first one that picked up.

This is not poor service. It is a physical constraint. And it is precisely the kind of problem a system solves better than extra effort.

---

## What a voice agent does well in this trade

**Taking the appointment with the right information.** A useful garage appointment contains four things: the name, the vehicle (make, model, license plate), the reason, and an availability. The agent asks for them in order, checks them, and books the slot.

**Separating the urgent from what can be scheduled.** "My car won't start" and "I need an oil change next month" do not call for the same answer. A well-configured agent offers the first available slot in one case, and a wide time window in the other.

**Answering the questions that come up thirty times a week.** Do you do vehicle inspections? Do you lend a car? Do you work on my make? Are you open on Saturday? These questions require no mechanical skill, just an immediate answer.

**Absorbing nights and weekends.** A breakdown rarely happens on a weekday at 10:00. The Sunday-evening call is the one that decides where the car will go on Monday.

---

## What you must never automate

**Diagnosis.** A customer describing a noise never describes the right noise. No system, human or not, diagnoses over the phone — and an agent that ventures a cause commits you.

**Pricing.** This is the most expensive mistake. If the agent says "expect around €250" and the invoice comes to €480, you lose the customer and collect a one-star review. The rule to write into the configuration: **never give a price without a quote**, and steer the customer toward a visit to the workshop.

**Disputes.** A customer who calls back unhappy with a repair must reach a human. Immediately.

---

## What it changes over a typical week

A garage that receives 15 calls a day, half of which go unanswered, recovers — even with a cautious conversion rate — several appointments a week that were going elsewhere. With the average ticket for routine maintenance, the math adds up fast.

The less visible but more lasting benefit: **the workshop is no longer interrupted**. A mechanic who puts down a tool to answer the phone loses far more than the length of the call — they lose the thread of what they were doing.

---

## How to set it up without breaking what works

The recommended setup is **conditional call forwarding**: the garage keeps its number, and calls switch to the agent only if nobody picks up after five rings or if the line is busy. Nothing changes for customers, nothing changes for the team, and the agent only takes the calls that would have gone unanswered.

Set aside half a day to gather the frequent questions and the workshop's real rules — that is where quality is decided, not in the technology.`,
        faq: [
          {
            q: "Can the agent quote a repair over the phone?",
            a: "It should not, and that rule belongs explicitly in its configuration. A figure given without a diagnosis will be contradicted by the invoice, which costs you the customer and the review. The agent directs the customer to a quote after a visit to the workshop.",
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
          "Un mecánico no puede descolgar con las manos llenas de grasa. Cada llamada perdida es una revisión que se va al taller de enfrente. Cómo un agente de voz toma las citas mientras el taller sigue trabajando, y lo que no hay que confiarle.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **Un taller pierde entre el 30 y el 50 % de sus llamadas** en horario de taller: no hay nadie en la oficina, y no se puede contestar desde debajo de un elevador
- **La llamada perdida no vuelve a llamar**: llama al taller siguiente, porque una avería no se puede aplazar
- **Un agente de voz toma la cita**, el motivo y el vehículo, y la anota en la agenda sin interrumpir el trabajo en curso
- **Lo que NO hay que confiarle**: el diagnóstico y el presupuesto. Un precio anunciado por teléfono y desmentido después en el taller destruye la confianza

---

## El problema es mecánico, no comercial

Un taller de dos a cinco personas tiene una limitación que pocos oficios conocen: las manos ocupadas y sucias durante casi toda la jornada. El teléfono suena justo en el momento en que no se puede contestar.

Resultado: la mayoría de los talleres funcionan, a sabiendas, en modo degradado. Se devuelve la llamada «cuando haya un minuto», es decir, a las 19:00, cuando el cliente está a su vez haciendo otra cosa. Mientras tanto, ha llamado a otros dos talleres y ha pedido cita en el primero que descolgó.

No es un fallo de servicio. Es una limitación física. Y es justamente el tipo de problema que un sistema resuelve mejor que un esfuerzo adicional.

---

## Lo que un agente de voz hace bien en este oficio

**Tomar la cita con la información correcta.** Una cita útil en un taller contiene cuatro cosas: el nombre, el vehículo (marca, modelo, matrícula), el motivo y una disponibilidad. El agente las pide en orden, las comprueba y reserva la franja.

**Separar lo urgente de lo planificable.** «Mi coche ya no arranca» y «necesito un cambio de aceite el mes que viene» no piden la misma respuesta. Un agente bien configurado propone la primera franja disponible en un caso, y un margen amplio en el otro.

**Responder a las preguntas que se repiten treinta veces por semana.** ¿Hacen la inspección técnica? ¿Prestan un vehículo? ¿Trabajan con mi marca? ¿Abren el sábado? Estas preguntas no requieren ninguna competencia mecánica, solo una respuesta inmediata.

**Absorber la noche y el fin de semana.** Una avería rara vez ocurre un día laborable a las 10:00. La llamada del domingo por la noche es la que decide adónde irá el coche el lunes.

---

## Lo que nunca hay que automatizar

**El diagnóstico.** Un cliente que describe un ruido nunca describe el ruido correcto. Ningún sistema, humano o no, diagnostica por teléfono, y un agente que aventura una causa te compromete.

**El presupuesto.** Es el error que más caro sale. Si el agente anuncia «calcula unos 250 €» y la factura sale a 480 €, pierdes al cliente y te llevas una reseña de una estrella. La regla que hay que escribir en la configuración: **no anunciar nunca un precio sin presupuesto**, y orientar hacia una visita al taller.

**Las reclamaciones.** Un cliente que vuelve a llamar descontento con una reparación debe hablar con una persona. De inmediato.

---

## Lo que cambia en una semana típica

Un taller que recibe 15 llamadas al día, la mitad de las cuales quedan sin respuesta, recupera, incluso con una tasa de conversión prudente, varias citas por semana que se iban a otra parte. Con el ticket medio de un mantenimiento habitual, las cuentas salen rápido.

El beneficio menos visible pero más duradero: **el taller ya no se interrumpe**. Un mecánico que deja la herramienta para contestar pierde mucho más que la duración de la llamada: pierde el hilo de lo que estaba haciendo.

---

## Cómo ponerlo en marcha sin romper lo que ya funciona

La configuración recomendada es el **desvío condicional**: el taller conserva su número, y las llamadas pasan al agente solo si nadie descuelga después de cinco tonos o si la línea está ocupada. Nada cambia para los clientes, nada cambia para el equipo, y el agente solo atiende lo que se habría perdido.

Reserva medio día para reunir las preguntas frecuentes y las reglas reales del taller: ahí es donde se juega la calidad, no en la técnica.`,
        faq: [
          {
            q: "¿Puede el agente dar un precio de reparación por teléfono?",
            a: "No debería, y es una regla que hay que escribir explícitamente en su configuración. Una cifra anunciada sin diagnóstico será desmentida por la factura, lo que te cuesta el cliente y la reseña. El agente orienta hacia un presupuesto tras una visita al taller.",
          },
          {
            q: "¿Cómo sabe el agente qué franjas están libres?",
            a: "Lee la agenda conectada en tiempo real y solo propone franjas realmente disponibles; después anota en ella la cita con el vehículo y el motivo.",
          },
          {
            q: "¿Y si el cliente tiene una avería urgente?",
            a: "La urgencia se configura: el agente puede proponer la primera franja del día, transferir de inmediato al teléfono del dueño o indicar los pasos a seguir para una asistencia en carretera, según lo que tú decidas.",
          },
          {
            q: "¿Hay que cambiar de número de teléfono?",
            a: "No. La configuración recomendada es un desvío condicional desde el número actual: el agente solo atiende las llamadas que nadie descuelga.",
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

- **Three reasons account for most calls**: booking, moving or canceling an appointment
- **Automating those three** gives the front desk back the time it spends on the phone instead of welcoming the patients who are there
- **An AI never gives medical advice** — no symptom triage, no "is this serious?". This is a legal limit, not just a cautious one
- **Health data is sensitive data under the GDPR**: hosting, data minimization and informing patients are not optional

---

## What a dental front desk really does

Look at a day on the phones in a practice: the vast majority of calls fit into three sentences. "I'd like an appointment." "I need to move my Thursday one." "I won't be able to come."

These calls require no clinical skill. They require an up-to-date calendar and two minutes. But they come in bursts at 9:00 and 14:00, exactly when patients are arriving at the front desk — and it is the person standing in front of you who waits while you answer the phone.

---

## What automates cleanly

**Booking appointments.** The agent asks for the reason from a list you define (checkup, scaling, emergency, follow-up treatment), offers slots that match the real duration of the procedure, and books the patient in.

**Rescheduling and canceling.** This is the most profitable and most underrated opportunity. An unhandled cancellation becomes an empty chair; a cancellation caught in time can be offered to someone else.

**Appointment reminders.** The no-show rate drops markedly with a reminder the day before — and nobody likes making those calls.

**Administrative questions.** Do you accept the carte Vitale (the French health insurance card)? Are you contracted with the national health insurance system? Where can I park? Do you do implants? These answers are fixed and there is no reason to tie up a human with them.

---

## The line not to cross

This is the part worth reading twice.

**No medical advice, ever.** An agent must not answer "it hurts, can I wait?", suggest a painkiller, or estimate how serious something is. The configuration must include an explicit exit phrase and a transfer.

**No symptom triage.** Deciding whether a patient is urgent on the strength of a phone description is a medical act. The agent can offer an "emergency" slot if the patient asks for one, not decide that the patient needs one.

**No exchange of medical data.** The agent records a reason from your list of appointment types, not a clinical history.

**A human always reachable.** Acute tooth pain does not go on hold. The transfer must be immediate and tested.

---

## GDPR: what it means in practice

A dental appointment, even without clinical detail, reveals something about a person's health. The GDPR classifies this as **sensitive data**, which requires more than a consent form:

- **Data minimization** — collect only the name, contact details, reason and time slot. No "describe your problem".
- **Informing patients** — state clearly that an automated system handles appointment booking and how to reach a human.
- **Hosting** — health data in France is subject to specific hosting requirements; check with your provider based on what is actually stored.
- **Retention period** — defined, written down, applied.
- **Data processing** — a proper data processing agreement with the provider.

This is not an obstacle: it is a framework. A practice that applies it also gains peace of mind with its patients.

---

## What it changes day to day

The benefit is not "replacing the receptionist". It is **giving them their job back**: welcoming patients, preparing, handling third-party billing with insurers, taking care of the patient who is there. The phone stops being a constant interruption and becomes a flow handled in the background.

And the practice stops losing evening and weekend requests, which today reach a voicemail that few patients listen to all the way through.

---

## A realistic setup

Allow half a day to define your list of appointment reasons and their durations, the emergency rules, and the list of situations that trigger a transfer to a human. It is this work — not the technology — that decides whether the system will be a relief or a source of incidents.`,
        faq: [
          {
            q: "Is an AI allowed to book medical appointments?",
            a: "Yes — booking is administrative, not clinical. The agent must not assess symptoms, advise treatment, or decide urgency; those belong to the practitioner.",
          },
          {
            q: "Is patient data protected?",
            a: "An appointment with a practitioner reveals a health status and is therefore sensitive data under GDPR. That requires minimizing the data collected, informing patients, a defined retention period, a data processing agreement, and attention to hosting requirements depending on what is stored.",
          },
          {
            q: "What happens if a patient is in acute pain?",
            a: "Transfer to a human must be immediate and configured in advance. The agent must never assess the degree of urgency itself from the patient's description.",
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
          "Una recepción dental pasa el día con tres peticiones que se repiten. Automatizarlas libera tiempo real, siempre que sepas exactamente lo que una IA no tiene derecho a hacer en un centro sanitario.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **Tres motivos concentran la mayoría de las llamadas**: pedir, cambiar o anular una cita
- **Automatizar esos tres** devuelve a la recepción el tiempo que pasa al teléfono en lugar de atender a los pacientes presentes
- **Una IA nunca da consejo médico**: ni triaje de síntomas, ni «¿es grave?». Es un límite legal, no solo una cuestión de prudencia
- **Los datos de salud son datos sensibles según el RGPD**: el alojamiento, la minimización y la información a los pacientes no son opcionales

---

## Lo que hace realmente una recepción dental

Fíjate en una jornada de teléfono en una clínica: la gran mayoría de las llamadas caben en tres frases. «Quería pedir una cita.» «Tengo que cambiar la del jueves.» «No voy a poder ir.»

Estas llamadas no requieren ninguna competencia clínica. Requieren una agenda al día y dos minutos. Pero llegan en oleadas a las 9:00 y a las 14:00, justo cuando hay pacientes llegando al mostrador, y es la persona que tienes delante la que espera mientras contestas al teléfono.

---

## Lo que se automatiza bien

**Pedir cita.** El agente pregunta el motivo a partir de una lista que tú defines (revisión, limpieza, urgencia, continuación de tratamiento), propone franjas que corresponden a la duración real del acto y registra al paciente.

**Cambiar y anular citas.** Es el filón más rentable y el más subestimado. Una anulación no gestionada se convierte en un sillón vacío; una anulación captada a tiempo puede volver a ofrecerse.

**El recordatorio de la cita.** La tasa de citas a las que el paciente no acude baja claramente con un recordatorio la víspera, y a nadie le gusta hacer esas llamadas.

**Las preguntas administrativas.** ¿Aceptan la carte Vitale (la tarjeta del seguro de salud francés)? ¿Tienen concierto con el seguro de salud público? ¿Dónde se puede aparcar? ¿Hacen implantes? Estas respuestas son fijas y no hay ningún motivo para ocupar a una persona con ellas.

---

## La línea que no hay que cruzar

Esta es la parte que hay que leer dos veces.

**Ningún consejo médico, nunca.** Un agente no debe responder a «me duele, ¿puedo esperar?», ni proponer un analgésico, ni estimar la gravedad. La configuración debe prever una frase de salida explícita y una transferencia.

**Ningún triaje de síntomas.** Decidir si un paciente es urgente o no a partir de una descripción telefónica es un acto médico. El agente puede proponer una franja de «urgencia» si el paciente la pide, no decidir que le corresponde.

**Ningún intercambio de datos médicos.** El agente registra un motivo de tu lista de motivos, no un historial clínico.

**Una persona accesible en todo momento.** Un dolor dental agudo no se pone en espera. La transferencia debe ser inmediata y estar probada.

---

## RGPD: lo que implica en concreto

Una cita dental, incluso sin detalle clínico, revela un estado de salud. El RGPD la clasifica entre los **datos sensibles**, lo que exige más que un formulario de consentimiento:

- **Minimización**: recoger solo el nombre, el contacto, el motivo y la franja. Nada de «describe tu problema».
- **Información a los pacientes**: indicar claramente que un sistema automatizado gestiona las citas y cómo contactar con una persona.
- **Alojamiento**: en Francia, los datos de salud están sujetos a requisitos de alojamiento específicos; hay que comprobarlo con tu proveedor según lo que realmente se almacene.
- **Plazo de conservación**: definido, escrito y aplicado.
- **Encargo del tratamiento**: un contrato de encargado del tratamiento en regla con el proveedor.

No es un obstáculo: es un marco. Una clínica que lo aplica también gana tranquilidad frente a sus pacientes.

---

## Lo que cambia en el día a día

El beneficio no es «sustituir a la recepción». Es **devolverle su oficio**: recibir, preparar, gestionar el pago directo por las aseguradoras, ocuparse del paciente que está allí. El teléfono deja de ser una interrupción permanente y se convierte en un flujo tratado en segundo plano.

Y la clínica deja de perder las peticiones de la noche y del fin de semana, que hoy acaban en un contestador que pocos pacientes escuchan hasta el final.

---

## Una puesta en marcha realista

Calcula medio día para definir la lista de motivos y sus duraciones, las reglas de urgencia y la lista de situaciones que activan una transferencia a una persona. Es ese trabajo, y no la técnica, lo que determina si el sistema será un alivio o una fuente de incidentes.`,
        faq: [
          {
            q: "¿Puede una IA gestionar citas médicas?",
            a: "Sí: pedir cita es un acto administrativo, no un acto médico. En cambio, el agente no debe evaluar síntomas, ni aconsejar un tratamiento, ni decidir si hay urgencia: esos actos corresponden al profesional sanitario.",
          },
          {
            q: "¿Están protegidos los datos de los pacientes?",
            a: "Una cita con un profesional sanitario revela un estado de salud y, por tanto, forma parte de los datos sensibles según el RGPD. Eso impone la minimización de los datos recogidos, la información a los pacientes, un plazo de conservación definido, un contrato de encargado del tratamiento y atención a los requisitos de alojamiento según lo que se almacene.",
          },
          {
            q: "¿Y si un paciente tiene una urgencia con dolor?",
            a: "La transferencia a una persona debe ser inmediata y estar configurada de antemano. El agente nunca debe evaluar por sí mismo el grado de urgencia a partir de la descripción del paciente.",
          },
          {
            q: "¿Puede el agente gestionar anulaciones y recordatorios?",
            a: "Sí, y suele ser la ganancia más rentable: una anulación captada a tiempo permite volver a ofrecer la franja, y un recordatorio la víspera reduce claramente las citas a las que el paciente no acude.",
          },
        ],
      },
    },
  },
];
