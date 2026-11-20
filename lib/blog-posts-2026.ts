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
    Lot du 20/11 — les trois segments pilotes (immobilier, beauté, e-commerce)
    et la restauration par message, choisis sur relevé des pages de résultats
    (recherches françaises, 20/11) : sur ces requêtes, le haut de page est
    tenu par des annonces de freelances, des pages traduites à la machine, des
    articles anglais de 2018 ou des forums — des places qu'une réponse utile
    peut prendre. Aucun volume de recherche n'est connu ; aucun n'est inventé.

    Chaque affirmation sur le produit a été relue le 20/11 :
    - prix, quotas, sièges et avantages par formule : réponse EN DIRECT de
      `GET /api/v1/billing/plans/interactive` (79/99/199/399/999 ; messages
      2 000/4 000/8 000/16 000 ; voix 200/400/800 ; combo 1 000+100,
      2 000+200, 4 000+400 ; Shopify en Business ; 5 automatisations en Pro,
      illimitées en Business) ;
    - essai de 14 jours, 14 jours satisfait ou remboursé, 100 € de mise en
      service, sans engagement, information des clients sur l'agent IA,
      remboursement toujours humain : CGV en ligne (inbox…/fr/legal/terms) ;
    - suivi de commande Shopify (numéro + e-mail ou téléphone comparés par le
      code, même réponse qu'une commande introuvable, essais limités, remise
      à l'équipe pour remboursement/annulation/retour/adresse) :
      skybot-inbox src/shopify/support/* ;
    - règles des métiers (salon : pas de diagnostic, pas de résultat garanti,
      test préalable ; immobilier : pas d'estimation, pas de jugement de
      dossier, aucun critère personnel, mentions obligatoires ; restaurant :
      allergènes, capacité, horaires) : src/onboarding/archetype-presets.ts ;
    - voix (créneaux, annulation, SMS France, message) : voice-service/tools.py
      et `checkAvailability` (horaires, rendez-vous pris, agenda Google) ;
    - réponse automatique par e-mail muette par défaut : règle du produit,
      test `email-ai-reply.service.spec`.
    Aucun client cité : il n'y en a pas encore.
  */
  {
    slug: "agence-immobiliere-demandes-de-visite",
    title: "Agence immobilière : ne plus rater une demande de visite, même le soir et le week-end",
    excerpt:
      "Les demandes de visite arrivent pendant une visite, une signature ou un dimanche soir, par téléphone, par e-mail des portails ou sur WhatsApp. Le parcours d'une demande bien traitée, les questions à poser et celles à ne jamais poser, ce qu'un agent IA ne doit jamais dire, et ce que ça coûte.",
    date: "2026-11-20",
    readingTime: "8 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Une demande de visite se perd rarement par manque d'intérêt** : elle se perd parce qu'elle arrive pendant une visite, un rendez-vous de signature ou un week-end.
- **Une demande bien traitée suit toujours le même parcours** : réponse rapide, identification du bien, qualification du projet, proposition de créneau, reprise par le conseiller.
- **Un agent IA peut prendre ce parcours en charge** au téléphone et par message, à condition de ne jamais estimer un bien, juger un dossier ni trier un candidat sur un critère personnel.
- **Chez Aevia Inbox, les messages et la voix ensemble commencent à 79 € par mois** (1 000 messages IA et 100 minutes d'appel), sans engagement.

---

## D'où viennent les demandes, et pourquoi elles se perdent

- **Les portails d'annonces**, qui transmettent le contact par e-mail, souvent noyé parmi d'autres notifications.
- **Le téléphone de l'agence**, qui sonne pendant que le conseiller fait visiter.
- **WhatsApp**, que beaucoup d'acquéreurs et de locataires utilisent pour un premier contact.
- **Instagram et Messenger**, quand l'agence y publie ses biens.
- **Le formulaire du site**, consulté quand on a le temps.

Le soir et le week-end, quand les particuliers cherchent un logement, l'agence est fermée. La demande attend le lundi, et l'acquéreur pressé a déjà contacté d'autres agences.

---

## Le parcours d'une demande bien traitée

1. **Répondre vite**, même pour dire que la demande est bien reçue et qu'un conseiller va revenir vers la personne.
2. **Identifier le bien** dont il est question : référence, adresse, lien de l'annonce.
3. **Qualifier le projet** : achat, vente ou location, budget ou loyer maximum, secteur, surface, état du financement.
4. **Proposer une visite** sur les créneaux du conseiller qui fait visiter, une fois faites les vérifications que vous demandez — une visite posée sans financement vérifié coûte un déplacement à tout le monde.
5. **Laisser la main au conseiller**, qui retrouve tout dans la conversation : qui, quel bien, quel projet, quel créneau, quel numéro.

Un agent IA prend en charge les quatre premières étapes à toute heure. Le conseiller n'a rien à reconstituer : il reprend là où la conversation s'est arrêtée.

---

## Les questions à poser, et celles à ne jamais poser

**À poser** : le type de projet, le budget ou le loyer maximum, le secteur, la surface ou le nombre de pièces, l'état du financement (simulation, accord de principe), et un numéro pour caler la visite.

**À ne jamais poser pour trier un candidat** : l'origine, la situation de famille, l'état de santé, l'âge, les convictions. La loi interdit de refuser un logement sur ces critères. Un agent IA ne doit ni retenir ni écarter qui que ce soit : il recueille le projet, et c'est une personne de l'agence qui étudie le dossier.

---

## Ce qu'un agent IA ne doit jamais faire

- **Estimer un bien** sans visite : il propose une estimation par un conseiller.
- **Se prononcer sur un dossier** de financement ou de location — « avec un CDD, j'ai une chance ? » : il répond d'abord qu'un conseiller étudie chaque dossier, puis recueille le projet.
- **Négocier un prix**, sauf si vous l'y avez explicitement autorisé.
- **Citer un bien sans ses mentions obligatoires** — classe énergie, honoraires, surface, charges — si vous ne les lui avez pas données.

Chez Aevia Inbox, ces limites font partie du réglage d'un agent d'agence immobilière.

---

## Une demande de portail arrive par e-mail : que faire ?

Réunies dans la même boîte que le téléphone et WhatsApp, les demandes des portails ne se perdent plus entre deux notifications. Avant d'activer une réponse automatique sur cette boîte mail, vérifiez à quelle adresse partirait la réponse : selon le portail, l'e-mail vient d'une adresse technique et non de la personne. Dans ce cas, le bon réflexe est d'écrire ou de rappeler au numéro et à l'adresse indiqués dans la demande.

Chez Aevia Inbox, la réponse automatique par e-mail est désactivée par défaut et s'active boîte par boîte : rien ne part sans votre accord.

---

## Dire que c'est une IA

Les personnes qui écrivent ou appellent doivent savoir qu'elles échangent avec un agent IA. Une phrase dans le message d'accueil suffit, et la conversation doit pouvoir passer à un conseiller à tout moment. C'est aussi plus simple pour la suite : personne ne se sent trompé quand le conseiller rappelle.

---

## Combien ça coûte

Pour une agence, la formule qui a le plus de sens réunit les messages et la voix : la même IA répond au téléphone, sur WhatsApp, sur Instagram et par e-mail.

| Formule Aevia Inbox (messages et voix) | Prix par mois | Messages IA | Minutes d'appel | Utilisateurs |
|---|---|---|---|---|
| Starter | 79 € | 1 000 | 100 | 1 |
| Growth | 99 € | 2 000 | 200 | 3 |
| Pro | 199 € | 4 000 | 400 | 5 |

S'y ajoutent 100 € de mise en service unique. Sans engagement, 14 jours d'essai gratuit à l'inscription, puis 14 jours satisfait ou remboursé sur le premier abonnement. Pour les appels seuls, voir aussi [notre comparatif entre standard IA et secrétariat téléphonique](/fr/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## Questions fréquentes

**Comment ne plus rater les demandes de visite le week-end ?**
En faisant répondre un agent IA au téléphone et aux messages en dehors des horaires de l'agence : il accuse réception, qualifie le projet et propose un créneau de visite, puis le conseiller reprend la main.

**Un agent IA peut-il fixer une visite immobilière ?**
Oui, sur les créneaux que vous lui donnez, et une fois faites les vérifications que vous demandez, par exemple l'état du financement.

**L'agent peut-il estimer un bien ou juger un dossier de location ?**
Non. Il propose une estimation par un conseiller et répond qu'un conseiller étudie chaque dossier.

**Faut-il informer les clients qu'ils parlent à une IA ?**
Oui. Une phrase dans le message d'accueil suffit, et la conversation doit pouvoir passer à un conseiller à tout moment.

**Combien coûte un agent IA pour une agence immobilière ?**
Chez Aevia Inbox, les messages et la voix ensemble commencent à 79 € par mois, avec 1 000 messages IA et 100 minutes d'appel, plus 100 € de mise en service unique, sans engagement.

---

👉 [Voir les formules d'Aevia Inbox](https://inbox.aevia.services/fr/pricing)
`,
    faq: [
      {
        q: "Comment ne plus rater les demandes de visite le week-end ?",
        a: "En faisant répondre un agent IA au téléphone et aux messages en dehors des horaires de l'agence : il accuse réception, qualifie le projet et propose un créneau de visite, puis le conseiller reprend la main.",
      },
      {
        q: "Un agent IA peut-il fixer une visite immobilière ?",
        a: "Oui, sur les créneaux que l'agence lui donne, et une fois faites les vérifications qu'elle demande, par exemple l'état du financement.",
      },
      {
        q: "L'agent peut-il estimer un bien ou juger un dossier de location ?",
        a: "Non. Il propose une estimation par un conseiller et répond qu'un conseiller étudie chaque dossier.",
      },
      {
        q: "Faut-il informer les clients qu'ils parlent à une IA ?",
        a: "Oui. Une phrase dans le message d'accueil suffit, et la conversation doit pouvoir passer à un conseiller à tout moment.",
      },
      {
        q: "Combien coûte un agent IA pour une agence immobilière ?",
        a: "Chez Aevia Inbox, les messages et la voix ensemble commencent à 79 € par mois, avec 1 000 messages IA et 100 minutes d'appel, plus 100 € de mise en service unique, sans engagement.",
      },
    ],
    i18n: {
      en: {
        title: "Estate agencies: stop missing viewing requests, even in the evening and at weekends",
        excerpt:
          "Viewing requests come in during a viewing, a signing or on a Sunday evening, by phone, by email from property portals or on WhatsApp. The path of a well-handled request, the questions to ask and the ones never to ask, what an AI agent must never say, and what it costs.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **A viewing request is rarely lost for lack of interest**: it is lost because it arrives during a viewing, a signing appointment or a weekend.
- **A well-handled request always follows the same path**: a quick reply, identifying the property, qualifying the project, offering a slot, then the agent takes over.
- **An AI agent can handle that path** by phone and by message, provided it never values a property, judges an application or screens a candidate on a personal criterion.
- **At Aevia Inbox, messages and voice together start at €79 a month** (1,000 AI messages and 100 call minutes), no commitment.

---

## Where requests come from, and why they get lost

- **Property portals**, which pass the contact on by email, often buried among other notifications.
- **The agency phone**, which rings while the agent is showing a property.
- **WhatsApp**, which many buyers and tenants use for a first contact.
- **Instagram and Messenger**, when the agency posts its listings there.
- **The website form**, checked when someone has time.

In the evening and at weekends, when people are house-hunting, the agency is closed. The request waits until Monday, and the buyer in a hurry has already contacted other agencies.

---

## The path of a well-handled request

1. **Reply quickly**, even just to say the request has been received and an agent will get back to the person.
2. **Identify the property** in question: reference, address, link to the listing.
3. **Qualify the project**: buying, selling or renting, budget or maximum rent, area, size, where the financing stands.
4. **Offer a viewing** in the slots of the agent who shows the property, once the checks you require are done — a viewing booked without checked financing costs everyone a trip.
5. **Hand over to the agent**, who finds everything in the conversation: who, which property, which project, which slot, which number.

An AI agent handles the first four steps at any hour. The agent has nothing to piece together: they pick up where the conversation stopped.

---

## The questions to ask, and the ones never to ask

**To ask**: the type of project, the budget or maximum rent, the area, the size or number of rooms, where the financing stands (simulation, agreement in principle), and a number to arrange the viewing.

**Never to ask in order to screen a candidate**: origin, family situation, health, age, beliefs. The law forbids refusing housing on these grounds. An AI agent must neither keep nor rule out anyone: it records the project, and a person at the agency reviews the application.

---

## What an AI agent must never do

- **Value a property** without a viewing: it offers a valuation by an agent.
- **Give an opinion on a mortgage or rental application** — "on a fixed-term contract, do I stand a chance?": it first says that an agent reviews every application, then records the project.
- **Negotiate a price**, unless you have explicitly allowed it.
- **Mention a property without its mandatory information** — energy rating, fees, floor area, service charges — if you have not provided them.

At Aevia Inbox, these limits are part of how an estate agency's agent is set up.

---

## A portal request arrives by email: what then?

Gathered in the same inbox as the phone and WhatsApp, portal requests no longer get lost between two notifications. Before turning on automatic replies for that mailbox, check which address a reply would go to: depending on the portal, the email comes from a technical address, not from the person. In that case, the right move is to write to or call the number and address given in the request.

At Aevia Inbox, automatic email replies are off by default and are turned on mailbox by mailbox: nothing is sent without your consent.

---

## Say that it is an AI

People who write or call must know they are talking to an AI agent. One sentence in the welcome message is enough, and the conversation must be able to pass to an agent at any time. It also makes what follows easier: nobody feels misled when the agent calls back.

---

## What it costs

For an agency, the plan that makes the most sense combines messages and voice: the same AI answers the phone, WhatsApp, Instagram and email.

| Aevia Inbox plan (messages and voice) | Price per month | AI messages | Call minutes | Users |
|---|---|---|---|---|
| Starter | €79 | 1,000 | 100 | 1 |
| Growth | €99 | 2,000 | 200 | 3 |
| Pro | €199 | 4,000 | 400 | 5 |

On top of that comes a one-off €100 setup fee. No commitment, a 14-day free trial at sign-up, then a 14-day money-back guarantee on the first subscription. For calls only, see also [our comparison of an AI phone desk and a phone answering service](/en/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## Frequently asked questions

**How do I stop missing viewing requests at the weekend?**
Have an AI agent answer the phone and messages outside agency hours: it acknowledges the request, qualifies the project and offers a viewing slot, then the agent takes over.

**Can an AI agent book a property viewing?**
Yes, in the slots you give it, and once the checks you require are done, for example where the financing stands.

**Can the agent value a property or judge a rental application?**
No. It offers a valuation by an agent and says that an agent reviews every application.

**Do clients need to be told they are talking to an AI?**
Yes. One sentence in the welcome message is enough, and the conversation must be able to pass to an agent at any time.

**How much does an AI agent for an estate agency cost?**
At Aevia Inbox, messages and voice together start at €79 a month, with 1,000 AI messages and 100 call minutes, plus a one-off €100 setup fee, no commitment.

---

👉 [See the Aevia Inbox plans](https://inbox.aevia.services/en/pricing)
`,
        faq: [
          { q: "How do I stop missing viewing requests at the weekend?", a: "Have an AI agent answer the phone and messages outside agency hours: it acknowledges the request, qualifies the project and offers a viewing slot, then the agent takes over." },
          { q: "Can an AI agent book a property viewing?", a: "Yes, in the slots the agency gives it, and once the checks it requires are done, for example where the financing stands." },
          { q: "Can the agent value a property or judge a rental application?", a: "No. It offers a valuation by an agent and says that an agent reviews every application." },
          { q: "Do clients need to be told they are talking to an AI?", a: "Yes. One sentence in the welcome message is enough, and the conversation must be able to pass to an agent at any time." },
          { q: "How much does an AI agent for an estate agency cost?", a: "At Aevia Inbox, messages and voice together start at €79 a month, with 1,000 AI messages and 100 call minutes, plus a one-off €100 setup fee, no commitment." },
        ],
      },
      es: {
        title: "Inmobiliarias: no vuelvas a perder una solicitud de visita, ni por la noche ni el fin de semana",
        excerpt:
          "Las solicitudes de visita llegan durante una visita, una firma o un domingo por la noche, por teléfono, por email desde los portales o por WhatsApp. El recorrido de una solicitud bien atendida, las preguntas que conviene hacer y las que nunca hay que hacer, lo que un agente de IA nunca debe decir y lo que cuesta.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Una solicitud de visita rara vez se pierde por falta de interés**: se pierde porque llega durante una visita, una cita de firma o un fin de semana.
- **Una solicitud bien atendida sigue siempre el mismo recorrido**: respuesta rápida, identificación del inmueble, calificación del proyecto, propuesta de horario y relevo del asesor.
- **Un agente de IA puede encargarse de ese recorrido** por teléfono y por mensaje, siempre que nunca tase un inmueble, juzgue un expediente ni descarte a un candidato por un criterio personal.
- **En Aevia Inbox, los mensajes y la voz juntos empiezan en 79 € al mes** (1 000 mensajes de IA y 100 minutos de llamada), sin permanencia.

---

## De dónde vienen las solicitudes y por qué se pierden

- **Los portales inmobiliarios**, que envían el contacto por email, a menudo perdido entre otras notificaciones.
- **El teléfono de la agencia**, que suena mientras el asesor está enseñando un inmueble.
- **WhatsApp**, que muchos compradores e inquilinos usan para un primer contacto.
- **Instagram y Messenger**, cuando la agencia publica allí sus inmuebles.
- **El formulario de la web**, que se revisa cuando hay tiempo.

Por la noche y el fin de semana, cuando los particulares buscan vivienda, la agencia está cerrada. La solicitud espera al lunes, y el comprador con prisa ya ha contactado con otras agencias.

---

## El recorrido de una solicitud bien atendida

1. **Responder rápido**, aunque solo sea para decir que la solicitud se ha recibido y que un asesor se pondrá en contacto con la persona.
2. **Identificar el inmueble** del que se trata: referencia, dirección, enlace del anuncio.
3. **Calificar el proyecto**: compra, venta o alquiler, presupuesto o alquiler máximo, zona, superficie, situación de la financiación.
4. **Proponer una visita** en los horarios del asesor que enseña el inmueble, una vez hechas las comprobaciones que pidas — una visita agendada sin financiación comprobada le cuesta un desplazamiento a todo el mundo.
5. **Pasar el relevo al asesor**, que encuentra todo en la conversación: quién, qué inmueble, qué proyecto, qué horario, qué número.

Un agente de IA se encarga de los cuatro primeros pasos a cualquier hora. El asesor no tiene nada que reconstruir: retoma la conversación donde se quedó.

---

## Las preguntas que conviene hacer, y las que nunca hay que hacer

**Conviene preguntar**: el tipo de proyecto, el presupuesto o el alquiler máximo, la zona, la superficie o el número de habitaciones, la situación de la financiación (simulación, preaprobación del banco) y un número para concretar la visita.

**Nunca hay que preguntar para filtrar a un candidato**: el origen, la situación familiar, el estado de salud, la edad, las creencias. La ley prohíbe negar una vivienda por estos criterios. Un agente de IA no debe seleccionar ni descartar a nadie: recoge el proyecto, y es una persona de la agencia quien estudia el expediente.

---

## Lo que un agente de IA nunca debe hacer

- **Tasar un inmueble** sin visitarlo: propone una tasación con un asesor.
- **Pronunciarse sobre un expediente** de financiación o de alquiler — «con un contrato temporal, ¿tengo alguna posibilidad?»: primero responde que un asesor estudia cada expediente y después recoge el proyecto.
- **Negociar un precio**, salvo que se lo hayas autorizado expresamente.
- **Mencionar un inmueble sin sus datos obligatorios** — clase energética, honorarios, superficie, gastos — si no se los has proporcionado.

En Aevia Inbox, estos límites forman parte de la configuración de un agente para inmobiliarias.

---

## Llega por email una solicitud de un portal: ¿qué hacer?

Reunidas en la misma bandeja de entrada que el teléfono y WhatsApp, las solicitudes de los portales ya no se pierden entre dos notificaciones. Antes de activar una respuesta automática en ese buzón, comprueba a qué dirección se enviaría la respuesta: según el portal, el email llega desde una dirección técnica y no desde la persona. En ese caso, lo correcto es escribir o llamar al número y a la dirección que figuran en la solicitud.

En Aevia Inbox, la respuesta automática por email está desactivada por defecto y se activa buzón por buzón: no se envía nada sin tu consentimiento.

---

## Decir que es una IA

Las personas que escriben o llaman deben saber que están hablando con un agente de IA. Basta con una frase en el mensaje de bienvenida, y la conversación debe poder pasar a un asesor en cualquier momento. También facilita lo que viene después: nadie se siente engañado cuando el asesor devuelve la llamada.

---

## Cuánto cuesta

Para una agencia, el plan que más sentido tiene reúne los mensajes y la voz: la misma IA responde al teléfono, en WhatsApp, en Instagram y por email.

| Plan de Aevia Inbox (mensajes y voz) | Precio al mes | Mensajes de IA | Minutos de llamada | Usuarios |
|---|---|---|---|---|
| Starter | 79 € | 1 000 | 100 | 1 |
| Growth | 99 € | 2 000 | 200 | 3 |
| Pro | 199 € | 4 000 | 400 | 5 |

A esto se suma una cuota única de puesta en marcha de 100 €. Sin permanencia, 14 días de prueba gratuita al registrarte y, después, 14 días de garantía de reembolso en la primera suscripción. Si solo te interesan las llamadas, consulta también [nuestra comparativa entre centralita con IA y servicio de secretaría telefónica](/es/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## Preguntas frecuentes

**¿Cómo dejar de perder solicitudes de visita el fin de semana?**
Haciendo que un agente de IA responda al teléfono y a los mensajes fuera del horario de la agencia: acusa recibo, califica el proyecto y propone un horario de visita; después, el asesor toma el relevo.

**¿Puede un agente de IA agendar una visita inmobiliaria?**
Sí, en los horarios que le indiques y una vez hechas las comprobaciones que pidas, por ejemplo la situación de la financiación.

**¿Puede el agente tasar un inmueble o juzgar un expediente de alquiler?**
No. Propone una tasación con un asesor y responde que un asesor estudia cada expediente.

**¿Hay que informar a los clientes de que hablan con una IA?**
Sí. Basta con una frase en el mensaje de bienvenida, y la conversación debe poder pasar a un asesor en cualquier momento.

**¿Cuánto cuesta un agente de IA para una inmobiliaria?**
En Aevia Inbox, los mensajes y la voz juntos empiezan en 79 € al mes, con 1 000 mensajes de IA y 100 minutos de llamada, más 100 € de puesta en marcha única, sin permanencia.

---

👉 [Ver los planes de Aevia Inbox](https://inbox.aevia.services/es/pricing)
`,
        faq: [
          { q: "¿Cómo dejar de perder solicitudes de visita el fin de semana?", a: "Haciendo que un agente de IA responda al teléfono y a los mensajes fuera del horario de la agencia: acusa recibo, califica el proyecto y propone un horario de visita; después, el asesor toma el relevo." },
          { q: "¿Puede un agente de IA agendar una visita inmobiliaria?", a: "Sí, en los horarios que le indica la agencia y una vez hechas las comprobaciones que esta pide, por ejemplo la situación de la financiación." },
          { q: "¿Puede el agente tasar un inmueble o juzgar un expediente de alquiler?", a: "No. Propone una tasación con un asesor y responde que un asesor estudia cada expediente." },
          { q: "¿Hay que informar a los clientes de que hablan con una IA?", a: "Sí. Basta con una frase en el mensaje de bienvenida, y la conversación debe poder pasar a un asesor en cualquier momento." },
          { q: "¿Cuánto cuesta un agente de IA para una inmobiliaria?", a: "En Aevia Inbox, los mensajes y la voz juntos empiezan en 79 € al mes, con 1 000 mensajes de IA y 100 minutos de llamada, más 100 € de puesta en marcha única, sin permanencia." },
        ],
      },
    },
  },
  {
    slug: "repondre-messages-instagram-salon-coiffure",
    title: "Salon de coiffure : répondre automatiquement aux messages Instagram et transformer les DM en rendez-vous",
    excerpt:
      "Une cliente demande un prix en message privé pendant que vous posez une couleur ; quand vous répondez, le soir, elle a réservé ailleurs. Les trois niveaux d'automatisation sur Instagram, ce qu'il faut donner à un agent IA pour qu'il réponde juste, comment passer du message au rendez-vous, et ce qu'il ne doit jamais dire.",
    date: "2026-11-20",
    readingTime: "8 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Les messages Instagram d'un salon tiennent en quelques questions** : le prix d'une prestation, une disponibilité, l'adresse, les horaires. Ce sont elles qu'on peut automatiser.
- **Les outils intégrés d'Instagram envoient le même texte à tout le monde** ; un agent IA lit la question et répond avec vos vrais tarifs.
- **Du message au rendez-vous** : l'agent demande la prestation, le créneau, la coiffeuse habituelle, le nom et un numéro, puis pose le rendez-vous si votre agenda est connecté, ou vous transmet la demande.
- **Chez Aevia Inbox, les messages commencent à 79 € par mois** (2 000 messages IA inclus), sans engagement.

---

## Pourquoi les messages d'un salon restent sans réponse

Dans un salon, les mains sont prises : une couleur à poser, un brushing, une cliente au bac. Le téléphone vibre, on lit le message entre deux clientes, on se dit qu'on répondra plus tard. Le soir, la personne qui demandait « c'est combien un balayage ? » a souvent trouvé un créneau ailleurs.

Le problème n'est pas la bonne volonté : une question simple attend une réponse immédiate, et vous êtes la seule personne capable de la donner.

---

## Trois niveaux d'automatisation sur Instagram

### 1. Les outils intégrés d'Instagram

Un compte professionnel peut enregistrer des réponses toutes faites, afficher des questions fréquentes au début d'une conversation et envoyer un message automatique de bienvenue ou d'absence depuis la messagerie de Meta. C'est gratuit, et utile pour dire « bien reçu, je vous réponds dès que j'ai les mains libres ». Mais le texte est le même pour tout le monde : il ne répond pas à la question posée.

### 2. Les robots à mots-clés

Certains outils envoient une réponse quand le message contient un mot précis, par exemple « TARIFS ». Ça marche pour une campagne, beaucoup moins pour une cliente qui écrit « bonjour, vous faites les mèches sur cheveux courts et c'est dans quels prix ? ».

### 3. Un agent IA

L'agent lit la question telle qu'elle est écrite, répond à partir de vos prestations, de vos tarifs et de vos horaires, et pose les questions utiles pour arriver à un rendez-vous. C'est le seul des trois qui transforme un message en réservation sans vous.

---

## Ce qu'il faut donner à l'agent pour qu'il réponde juste

- **Vos prestations, leur durée et leur prix** — un prix fixe, ou « à partir de » selon la longueur des cheveux.
- **Vos horaires et vos jours de fermeture.**
- **Votre règle de retard et d'annulation.**
- **Le test préalable**, si vous en exigez un avant une coloration : l'agent doit l'annoncer avant de poser le rendez-vous, pas le jour même.
- **Les soins déconseillés, et à qui** (grossesse, allergie, cuir chevelu irrité) : sans cette liste, l'agent ne rassure pas une cliente sur un soin.
- **L'adresse, l'accès, le stationnement**, et votre lien de réservation en ligne si vous en avez un.

---

## Du message au rendez-vous

1. **La cliente pose sa question** — un prix, une disponibilité.
2. **L'agent répond** avec votre tarif et propose de prendre rendez-vous.
3. **Il demande ce qui manque** : la prestation, le jour et le créneau, la coiffeuse habituelle si elle en a une, le nom et un numéro de rappel.
4. **Il pose le rendez-vous** si votre agenda Google est connecté, en ne proposant que des créneaux libres. Sans agenda connecté, il prend la demande et vous la confirmez.
5. **La conversation reste dans votre boîte**, avec tout ce qui a été dit, si vous devez reprendre la main.

Si vos rendez-vous sont gérés dans un logiciel de réservation comme Planity, l'agent n'écrit pas dans ce logiciel : il prend la demande pour que vous la confirmiez, ou envoie votre lien de réservation si vous le lui avez donné.

---

## Ce que l'agent ne doit jamais faire

- **Poser un diagnostic** capillaire ou dermatologique, ou recommander un traitement : il propose un rendez-vous de diagnostic au salon.
- **Garantir un résultat** — la couleur obtenue, la tenue : c'est vous qui l'évaluez sur place.
- **Rembourser ou promettre un geste commercial** : il transmet la demande.
- **Inventer une règle** que vous ne lui avez pas donnée, par exemple sur les retards.

Chez Aevia Inbox, ces limites font partie du réglage d'un agent de salon, et chaque réponse automatique reste visible dans l'historique : vous voyez ce qui a été dit en votre nom.

---

## La règle des 24 heures

Les outils qui répondent sur Instagram par l'interface officielle de Meta doivent le faire dans les 24 heures qui suivent le dernier message de la cliente. C'est une raison de plus de répondre vite : un agent qui répond en quelques secondes n'est jamais concerné. Il faut aussi un compte Instagram professionnel ; la connexion vous guide pas à pas.

---

## Combien ça coûte

| Formule Aevia Inbox | Prix par mois | Ce qui est inclus |
|---|---|---|
| Starter, messages seuls | 79 € | 2 000 messages IA (WhatsApp, Instagram, e-mail) |
| Starter, messages et voix | 79 € | 1 000 messages IA et 100 minutes d'appel |
| Growth, messages seuls | 99 € | 4 000 messages IA, 3 utilisateurs |

S'y ajoutent 100 € de mise en service unique. Sans engagement, 14 jours d'essai gratuit à l'inscription, puis 14 jours satisfait ou remboursé sur le premier abonnement. Un message, c'est un envoi ou une réception : chaque réponse de l'IA compte comme un message envoyé. Si le téléphone sonne autant que les messages arrivent, lisez aussi [notre guide sur les appels manqués au salon](/fr/blog/appels-manques-salon-coiffure).

---

## Questions fréquentes

**Peut-on répondre automatiquement aux messages Instagram d'un salon ?**
Oui. Instagram propose des réponses enregistrées et des messages d'accueil identiques pour tout le monde ; un agent IA va plus loin en répondant à la question posée avec vos tarifs et vos horaires.

**L'agent peut-il prendre un rendez-vous depuis un message Instagram ?**
Oui. Il demande la prestation, le créneau, le nom et un numéro, puis pose le rendez-vous si votre agenda Google est connecté. Sans agenda connecté, il prend la demande et vous la confirmez.

**Fonctionne-t-il avec Planity ?**
L'agent n'écrit pas dans Planity. Il prend la demande pour que vous la confirmiez, ou envoie votre lien de réservation si vous le lui avez donné.

**Les clientes savent-elles qu'elles parlent à une IA ?**
Vous devez les en informer : une phrase dans le message d'accueil suffit. Vous pouvez reprendre la conversation à tout moment.

**Combien coûte un agent IA pour un salon de coiffure ?**
Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement.

---

👉 [Voir comment Aevia Inbox traite les messages Instagram et Messenger](https://inbox.aevia.services/fr/solutions/instagram-messenger)
`,
    faq: [
      {
        q: "Peut-on répondre automatiquement aux messages Instagram d'un salon ?",
        a: "Oui. Instagram propose des réponses enregistrées et des messages d'accueil identiques pour tout le monde ; un agent IA va plus loin en répondant à la question posée avec les tarifs et les horaires du salon.",
      },
      {
        q: "L'agent peut-il prendre un rendez-vous depuis un message Instagram ?",
        a: "Oui. Il demande la prestation, le créneau, le nom et un numéro, puis pose le rendez-vous si l'agenda Google du salon est connecté. Sans agenda connecté, il prend la demande et le salon la confirme.",
      },
      {
        q: "Fonctionne-t-il avec Planity ?",
        a: "L'agent n'écrit pas dans Planity. Il prend la demande pour que le salon la confirme, ou envoie le lien de réservation du salon s'il lui a été donné.",
      },
      {
        q: "Les clientes savent-elles qu'elles parlent à une IA ?",
        a: "Le salon doit les en informer : une phrase dans le message d'accueil suffit. La conversation peut être reprise par une personne à tout moment.",
      },
      {
        q: "Combien coûte un agent IA pour un salon de coiffure ?",
        a: "Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement.",
      },
    ],
    i18n: {
      en: {
        title: "Hair salons: replying automatically to Instagram messages and turning DMs into appointments",
        excerpt:
          "A client asks for a price by direct message while you are applying a colour; by the time you reply, in the evening, she has booked elsewhere. The three levels of automation on Instagram, what to give an AI agent so it answers correctly, how to go from message to appointment, and what it must never say.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **A salon's Instagram messages come down to a few questions**: the price of a service, availability, the address, opening hours. Those are the ones you can automate.
- **Instagram's built-in tools send everyone the same text**; an AI agent reads the question and answers with your real prices.
- **From message to appointment**: the agent asks for the service, the slot, the usual stylist, the name and a number, then books the appointment if your calendar is connected, or passes the request to you.
- **At Aevia Inbox, messages start at €79 a month** (2,000 AI messages included), no commitment.

---

## Why a salon's messages go unanswered

In a salon, your hands are busy: a colour to apply, a blow-dry, a client at the basin. The phone buzzes, you read the message between two clients, you tell yourself you will reply later. By the evening, the person who asked "how much is a balayage?" has often found a slot elsewhere.

The problem is not goodwill: a simple question expects an immediate answer, and you are the only person who can give it.

---

## Three levels of automation on Instagram

### 1. Instagram's built-in tools

A professional account can save ready-made replies, show frequently asked questions at the start of a conversation and send an automatic welcome or away message from Meta's messaging tools. It is free, and useful for saying "got it, I will reply as soon as my hands are free". But the text is the same for everyone: it does not answer the question asked.

### 2. Keyword bots

Some tools send a reply when the message contains a specific word, for example "PRICES". That works for a campaign, much less for a client who writes "hi, do you do highlights on short hair and roughly how much?".

### 3. An AI agent

The agent reads the question as it is written, answers from your services, prices and opening hours, and asks the questions needed to get to an appointment. It is the only one of the three that turns a message into a booking without you.

---

## What to give the agent so it answers correctly

- **Your services, how long they take and their price** — a fixed price, or "from" depending on hair length.
- **Your opening hours and closing days.**
- **Your lateness and cancellation policy.**
- **The patch test**, if you require one before a colour: the agent must mention it before booking the appointment, not on the day.
- **Treatments that are not recommended, and for whom** (pregnancy, allergy, irritated scalp): without that list, the agent does not reassure a client about a treatment.
- **The address, access, parking**, and your online booking link if you have one.

---

## From message to appointment

1. **The client asks her question** — a price, availability.
2. **The agent answers** with your price and offers to book an appointment.
3. **It asks for what is missing**: the service, the day and slot, the usual stylist if she has one, the name and a callback number.
4. **It books the appointment** if your Google calendar is connected, offering only free slots. Without a connected calendar, it takes the request and you confirm it.
5. **The conversation stays in your inbox**, with everything that was said, in case you need to take over.

If your appointments are managed in booking software such as Planity, the agent does not write into that software: it takes the request for you to confirm, or sends your booking link if you have given it.

---

## What the agent must never do

- **Diagnose** a hair or skin condition, or recommend a treatment: it offers a consultation appointment at the salon.
- **Guarantee a result** — the colour achieved, how long it lasts: you assess that in person.
- **Refund or promise a goodwill gesture**: it passes the request on.
- **Make up a rule** you have not given it, for example about lateness.

At Aevia Inbox, these limits are part of how a salon's agent is set up, and every automatic reply stays visible in the history: you see what was said in your name.

---

## The 24-hour rule

Tools that reply on Instagram through Meta's official interface must do so within the 24 hours following the client's last message. One more reason to reply quickly: an agent that replies within seconds is never affected. You also need a professional Instagram account; the connection guides you step by step.

---

## What it costs

| Aevia Inbox plan | Price per month | What is included |
|---|---|---|
| Starter, messages only | €79 | 2,000 AI messages (WhatsApp, Instagram, email) |
| Starter, messages and voice | €79 | 1,000 AI messages and 100 call minutes |
| Growth, messages only | €99 | 4,000 AI messages, 3 users |

On top of that comes a one-off €100 setup fee. No commitment, a 14-day free trial at sign-up, then a 14-day money-back guarantee on the first subscription. A message is one sent or one received: each AI reply counts as one message sent. If the phone rings as often as messages come in, also read [our guide to missed calls at the salon](/en/blog/appels-manques-salon-coiffure).

---

## Frequently asked questions

**Can a salon reply automatically to Instagram messages?**
Yes. Instagram offers saved replies and welcome messages that are the same for everyone; an AI agent goes further by answering the actual question with your prices and opening hours.

**Can the agent book an appointment from an Instagram message?**
Yes. It asks for the service, the slot, the name and a number, then books the appointment if your Google calendar is connected. Without a connected calendar, it takes the request and you confirm it.

**Does it work with Planity?**
The agent does not write into Planity. It takes the request for you to confirm, or sends your booking link if you have given it.

**Do clients know they are talking to an AI?**
You must tell them: one sentence in the welcome message is enough. You can take over the conversation at any time.

**How much does an AI agent for a hair salon cost?**
At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment.

---

👉 [See how Aevia Inbox handles Instagram and Messenger messages](https://inbox.aevia.services/en/solutions/instagram-messenger)
`,
        faq: [
          { q: "Can a salon reply automatically to Instagram messages?", a: "Yes. Instagram offers saved replies and welcome messages that are the same for everyone; an AI agent goes further by answering the actual question with the salon's prices and opening hours." },
          { q: "Can the agent book an appointment from an Instagram message?", a: "Yes. It asks for the service, the slot, the name and a number, then books the appointment if the salon's Google calendar is connected. Without a connected calendar, it takes the request and the salon confirms it." },
          { q: "Does it work with Planity?", a: "The agent does not write into Planity. It takes the request for the salon to confirm, or sends the salon's booking link if it has been given." },
          { q: "Do clients know they are talking to an AI?", a: "The salon must tell them: one sentence in the welcome message is enough. A person can take over the conversation at any time." },
          { q: "How much does an AI agent for a hair salon cost?", a: "At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment." },
        ],
      },
      es: {
        title: "Peluquerías: responder automáticamente a los mensajes de Instagram y convertir los DM en citas",
        excerpt:
          "Una clienta pregunta un precio por mensaje directo mientras aplicas un tinte; cuando le respondes, por la noche, ya ha reservado en otro sitio. Los tres niveles de automatización en Instagram, lo que hay que darle a un agente de IA para que responda bien, cómo pasar del mensaje a la cita y lo que nunca debe decir.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Los mensajes de Instagram de una peluquería se reducen a unas pocas preguntas**: el precio de un servicio, una disponibilidad, la dirección, el horario. Son esas las que se pueden automatizar.
- **Las herramientas integradas de Instagram envían el mismo texto a todo el mundo**; un agente de IA lee la pregunta y responde con tus precios reales.
- **Del mensaje a la cita**: el agente pregunta el servicio, el horario, la estilista habitual, el nombre y un número, y luego agenda la cita si tu calendario está conectado, o te pasa la solicitud.
- **En Aevia Inbox, los mensajes empiezan en 79 € al mes** (2 000 mensajes de IA incluidos), sin permanencia.

---

## Por qué los mensajes de una peluquería se quedan sin respuesta

En una peluquería, las manos están ocupadas: un tinte que aplicar, un secado con cepillo, una clienta en el lavacabezas. El teléfono vibra, lees el mensaje entre dos clientas y te dices que responderás más tarde. Por la noche, la persona que preguntaba «¿cuánto cuesta un balayage?» a menudo ya ha encontrado hora en otro sitio.

El problema no es la buena voluntad: una pregunta sencilla espera una respuesta inmediata, y eres la única persona capaz de darla.

---

## Tres niveles de automatización en Instagram

### 1. Las herramientas integradas de Instagram

Una cuenta profesional puede guardar respuestas predefinidas, mostrar preguntas frecuentes al inicio de una conversación y enviar un mensaje automático de bienvenida o de ausencia desde la mensajería de Meta. Es gratis, y útil para decir «recibido, te respondo en cuanto tenga las manos libres». Pero el texto es el mismo para todo el mundo: no responde a la pregunta que se hizo.

### 2. Los bots de palabras clave

Algunas herramientas envían una respuesta cuando el mensaje contiene una palabra concreta, por ejemplo «PRECIOS». Funciona para una campaña, mucho menos para una clienta que escribe «hola, ¿hacen mechas en pelo corto y más o menos cuánto cuestan?».

### 3. Un agente de IA

El agente lee la pregunta tal como está escrita, responde a partir de tus servicios, tus precios y tu horario, y hace las preguntas necesarias para llegar a una cita. Es el único de los tres que convierte un mensaje en una reserva sin ti.

---

## Lo que hay que darle al agente para que responda bien

- **Tus servicios, su duración y su precio** — un precio fijo, o «desde» según el largo del cabello.
- **Tu horario y tus días de cierre.**
- **Tu política de retrasos y cancelaciones.**
- **La prueba previa**, si exiges una antes de una coloración: el agente debe anunciarla antes de agendar la cita, no el mismo día.
- **Los tratamientos desaconsejados, y para quién** (embarazo, alergia, cuero cabelludo irritado): sin esa lista, el agente no tranquiliza a una clienta sobre un tratamiento.
- **La dirección, el acceso, el aparcamiento**, y tu enlace de reserva online si tienes uno.

---

## Del mensaje a la cita

1. **La clienta hace su pregunta** — un precio, una disponibilidad.
2. **El agente responde** con tu precio y le propone pedir cita.
3. **Pregunta lo que falta**: el servicio, el día y la hora, la estilista habitual si tiene una, el nombre y un número para devolver la llamada.
4. **Agenda la cita** si tu Google Calendar está conectado, proponiendo solo horarios libres. Sin calendario conectado, toma la solicitud y tú la confirmas.
5. **La conversación se queda en tu bandeja de entrada**, con todo lo que se ha dicho, por si tienes que tomar el relevo.

Si tus citas se gestionan en un programa de reservas como Planity, el agente no escribe en ese programa: toma la solicitud para que la confirmes, o envía tu enlace de reserva si se lo has dado.

---

## Lo que el agente nunca debe hacer

- **Hacer un diagnóstico** capilar o dermatológico, o recomendar un tratamiento: propone una cita de diagnóstico en la peluquería.
- **Garantizar un resultado** — el color obtenido, cuánto dura: eso lo evalúas tú en persona.
- **Reembolsar o prometer un gesto comercial**: transmite la solicitud.
- **Inventarse una norma** que no le has dado, por ejemplo sobre los retrasos.

En Aevia Inbox, estos límites forman parte de la configuración de un agente para peluquerías, y cada respuesta automática queda visible en el historial: ves lo que se ha dicho en tu nombre.

---

## La regla de las 24 horas

Las herramientas que responden en Instagram a través de la interfaz oficial de Meta deben hacerlo dentro de las 24 horas siguientes al último mensaje de la clienta. Es un motivo más para responder rápido: un agente que responde en pocos segundos nunca se ve afectado. También necesitas una cuenta profesional de Instagram; la conexión te guía paso a paso.

---

## Cuánto cuesta

| Plan de Aevia Inbox | Precio al mes | Qué incluye |
|---|---|---|
| Starter, solo mensajes | 79 € | 2 000 mensajes de IA (WhatsApp, Instagram, email) |
| Starter, mensajes y voz | 79 € | 1 000 mensajes de IA y 100 minutos de llamada |
| Growth, solo mensajes | 99 € | 4 000 mensajes de IA, 3 usuarios |

A esto se suma una cuota única de puesta en marcha de 100 €. Sin permanencia, 14 días de prueba gratuita al registrarte y, después, 14 días de garantía de reembolso en la primera suscripción. Un mensaje es un envío o una recepción: cada respuesta de la IA cuenta como un mensaje enviado. Si el teléfono suena tanto como llegan los mensajes, lee también [nuestra guía sobre las llamadas perdidas en la peluquería](/es/blog/appels-manques-salon-coiffure).

---

## Preguntas frecuentes

**¿Se puede responder automáticamente a los mensajes de Instagram de una peluquería?**
Sí. Instagram ofrece respuestas guardadas y mensajes de bienvenida idénticos para todo el mundo; un agente de IA va más allá y responde a la pregunta concreta con tus precios y tu horario.

**¿Puede el agente agendar una cita desde un mensaje de Instagram?**
Sí. Pregunta el servicio, el horario, el nombre y un número, y luego agenda la cita si tu Google Calendar está conectado. Sin calendario conectado, toma la solicitud y tú la confirmas.

**¿Funciona con Planity?**
El agente no escribe en Planity. Toma la solicitud para que la confirmes, o envía tu enlace de reserva si se lo has dado.

**¿Saben las clientas que hablan con una IA?**
Debes informarles: basta con una frase en el mensaje de bienvenida. Puedes retomar la conversación en cualquier momento.

**¿Cuánto cuesta un agente de IA para una peluquería?**
En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia.

---

👉 [Ver cómo gestiona Aevia Inbox los mensajes de Instagram y Messenger](https://inbox.aevia.services/es/solutions/instagram-messenger)
`,
        faq: [
          { q: "¿Se puede responder automáticamente a los mensajes de Instagram de una peluquería?", a: "Sí. Instagram ofrece respuestas guardadas y mensajes de bienvenida idénticos para todo el mundo; un agente de IA va más allá y responde a la pregunta concreta con los precios y el horario de la peluquería." },
          { q: "¿Puede el agente agendar una cita desde un mensaje de Instagram?", a: "Sí. Pregunta el servicio, el horario, el nombre y un número, y luego agenda la cita si el Google Calendar de la peluquería está conectado. Sin calendario conectado, toma la solicitud y la peluquería la confirma." },
          { q: "¿Funciona con Planity?", a: "El agente no escribe en Planity. Toma la solicitud para que la peluquería la confirme, o envía el enlace de reserva de la peluquería si se lo han dado." },
          { q: "¿Saben las clientas que hablan con una IA?", a: "La peluquería debe informarles: basta con una frase en el mensaje de bienvenida. Una persona puede retomar la conversación en cualquier momento." },
          { q: "¿Cuánto cuesta un agente de IA para una peluquería?", a: "En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia." },
        ],
      },
    },
  },
  {
    slug: "sav-boutique-en-ligne-seul",
    title: "Gérer seul le SAV de sa boutique en ligne : l'organisation qui tient, et ce qu'on peut automatiser",
    excerpt:
      "Quand on vend seul ou à deux, le service client se fait le soir, entre WhatsApp, Instagram et la boîte mail. Les règles à écrire une fois pour toutes, le délai de réponse à tenir, la façon de trier ce qui peut partir seul, et le calcul pour choisir entre le faire soi-même, l'externaliser ou le confier à une IA.",
    date: "2026-11-20",
    readingTime: "8 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Le SAV d'une petite boutique déborde moins par le volume que par l'éparpillement** : les mêmes questions arrivent sur trois ou quatre canaux, et personne ne sait ce qui a déjà été répondu.
- **Écrivez une fois vos règles** — délais, frais, retours, garanties — et répondez toujours à partir de ce texte.
- **Triez les messages en deux** : ceux qui ont une réponse exacte, qu'on peut automatiser, et ceux qui engagent votre argent ou votre jugement, qui restent pour vous.
- **Avant d'externaliser ou d'automatiser, mesurez** : nombre de messages par jour × minutes par message. C'est ce chiffre qui décide, pas l'intuition.

---

## Le vrai problème : l'éparpillement

Une petite boutique en ligne ne reçoit pas forcément beaucoup de messages. Mais ils arrivent partout : le WhatsApp du téléphone personnel, les messages Instagram, la boîte mail de contact, parfois les commentaires sous une publication. On répond depuis le canapé, sur trois applications, sans historique commun. Un client qui a écrit sur Instagram puis relance par e-mail tombe sur quelqu'un qui ne se souvient pas de la première conversation.

L'organisation qui tient repose sur quatre décisions simples.

---

## 1. Écrire une fois ce que vous répétez tous les jours

Avant tout outil, rédigez une page de règles, la même pour vos conditions générales, votre FAQ et vos réponses :

- **Délais de préparation et de livraison**, par zone et par mode (point relais, domicile).
- **Frais de port**, et le seuil éventuel de livraison offerte.
- **Retours et échanges** : en combien de jours, dans quel état, qui paie le renvoi, comment obtenir l'étiquette.
- **Remboursement** : sous quel délai après réception du retour, sur quel moyen de paiement.
- **Garanties** : ce que vous accordez au-delà des obligations légales.

Deux repères pour une vente à distance à un particulier en France : le client dispose d'un délai de rétractation de 14 jours, sauf exceptions prévues par la loi (un article personnalisé, par exemple), et la garantie légale de conformité court deux ans pour un bien neuf. Vos règles peuvent être plus généreuses, jamais moins. En cas de doute, faites relire vos conditions générales.

---

## 2. Un seul endroit pour tous les messages

Le deuxième chantier consiste à réunir les canaux — WhatsApp, Instagram, Messenger, e-mail et le chat de votre site — dans une seule boîte, avec un historique par client. Vous ne cherchez plus « où était ce message », et si quelqu'un vous aide, il voit ce qui a déjà été dit. Nous avons détaillé la méthode dans [notre guide pour centraliser les messages clients](/fr/blog/gestion-messages-clients-multicanal).

---

## 3. Un délai de réponse annoncé, et tenu

Un client attend mieux quand il sait combien de temps il va attendre. Choisissez un délai que vous pouvez tenir les jours chargés — par exemple « réponse sous 24 heures, du lundi au samedi » — et affichez-le sur votre page de contact et dans votre message d'accueil. Un message automatique qui dit « bien reçu, nous répondons sous 24 heures » vaut mieux qu'un silence, mais il ne répond à rien : il achète du temps.

---

## 4. Trier : ce qui peut partir seul, ce qui doit passer par vous

| Type de message | Peut partir sans vous ? | À quelle condition |
|---|---|---|
| Délais et frais de livraison | Oui | Vos règles sont écrites |
| Conditions de retour | Oui | Vos règles sont écrites |
| Disponibilité, taille, prix | Oui | Le catalogue est à jour, idéalement lu en direct |
| Suivi d'un colis | Oui | L'identité du client est vérifiée |
| Remboursement, annulation, geste commercial | Non | C'est votre décision |
| Colis perdu ou abîmé, litige | Non | Cela dépend du transporteur et de votre appréciation |

La règle est simple : tout ce qui a une réponse exacte, écrite quelque part, peut être automatisé. Tout ce qui engage votre argent ou votre jugement reste pour vous.

---

## Le faire soi-même, l'externaliser ou le confier à une IA : le calcul

Commencez par mesurer une semaine normale : combien de messages par jour, et combien de minutes vous prend chacun en moyenne, recherche de la commande comprise.

**À titre d'exemple**, avec des chiffres à remplacer par les vôtres : 20 messages par jour à trois minutes chacun, c'est une heure par jour, soit environ 30 heures par mois.

Comparez ensuite trois options :

- **Le garder pour vous.** Ça ne coûte rien en argent, mais ces heures sont prises sur la production, les photos, la prospection ou vos soirées.
- **L'externaliser à un freelance ou à un prestataire de service client.** Demandez un devis sur la base de vos chiffres réels, et vérifiez les horaires couverts, le délai de réponse garanti et les accès qu'il faudra donner à votre boutique.
- **Confier les questions répétitives à un agent IA.** Le prix est fixe et la réponse part à toute heure, y compris le soir et le week-end ; vous ne gardez que les exceptions. Chez Aevia Inbox, la formule de départ coûte 79 € par mois pour 2 000 messages IA, plus 100 € de mise en service unique, sans engagement.

Les deux dernières options se combinent : l'agent répond aux questions qui ont une réponse exacte, et une personne — vous ou un prestataire — traite le reste. Pour le détail de ce qu'un agent peut faire sur WhatsApp, lisez [notre guide de l'agent IA WhatsApp pour boutique en ligne](/fr/blog/agent-ia-whatsapp-boutique-en-ligne).

---

## Ce qu'il faut préparer avant d'automatiser

1. **Votre page de règles**, à jour.
2. **Votre catalogue**, avec tailles, couleurs et prix — ou une boutique connectée, pour qu'ils soient lus en direct.
3. **La liste de ce que l'agent ne fait jamais** : rembourser, annuler, promettre une date de livraison que le transporteur n'a pas donnée.
4. **La personne qui reçoit les demandes transmises**, et la façon dont elle est prévenue.

---

## Questions fréquentes

**En combien de temps faut-il répondre à un client e-commerce ?**
L'important est d'annoncer un délai que vous pouvez tenir, par exemple sous 24 heures, et de le respecter même les jours chargés. Sur WhatsApp, répondre dans les 24 heures garde aussi la conversation ouverte sans frais.

**Quels messages peut-on automatiser sans risque ?**
Ceux qui ont une réponse exacte écrite quelque part : délais et frais de livraison, conditions de retour, disponibilité d'un article, suivi d'un colis une fois l'identité du client vérifiée.

**Un agent IA peut-il gérer les retours ?**
Il peut expliquer votre procédure de retour à partir de vos règles. La décision d'accepter un retour ou de rembourser reste la vôtre : l'agent recueille les informations et vous transmet la demande.

**Faut-il externaliser le SAV ou passer à l'IA ?**
Mesurez d'abord le volume et le temps passé. Une IA prend en charge les questions répétitives à prix fixe ; un prestataire humain reste utile pour les cas qui demandent du jugement. Les deux se combinent.

**Combien coûte un agent IA pour le SAV d'une petite boutique ?**
Chez Aevia Inbox, la formule de départ coûte 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement, avec 14 jours satisfait ou remboursé sur le premier abonnement.

---

👉 [Voir les formules d'Aevia Inbox](https://inbox.aevia.services/fr/pricing)
`,
    faq: [
      {
        q: "En combien de temps faut-il répondre à un client e-commerce ?",
        a: "L'important est d'annoncer un délai que la boutique peut tenir, par exemple sous 24 heures, et de le respecter même les jours chargés. Sur WhatsApp, répondre dans les 24 heures garde aussi la conversation ouverte sans frais.",
      },
      {
        q: "Quels messages peut-on automatiser sans risque ?",
        a: "Ceux qui ont une réponse exacte écrite quelque part : délais et frais de livraison, conditions de retour, disponibilité d'un article, suivi d'un colis une fois l'identité du client vérifiée.",
      },
      {
        q: "Un agent IA peut-il gérer les retours ?",
        a: "Il peut expliquer la procédure de retour à partir des règles de la boutique. La décision d'accepter un retour ou de rembourser reste humaine : l'agent recueille les informations et transmet la demande.",
      },
      {
        q: "Faut-il externaliser le SAV ou passer à l'IA ?",
        a: "Il faut d'abord mesurer le volume et le temps passé. Une IA prend en charge les questions répétitives à prix fixe ; un prestataire humain reste utile pour les cas qui demandent du jugement. Les deux se combinent.",
      },
      {
        q: "Combien coûte un agent IA pour le SAV d'une petite boutique ?",
        a: "Chez Aevia Inbox, la formule de départ coûte 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement, avec 14 jours satisfait ou remboursé sur le premier abonnement.",
      },
    ],
    i18n: {
      en: {
        title: "Running your online shop's customer service alone: a setup that holds, and what you can automate",
        excerpt:
          "When you sell alone or as a pair, customer service happens in the evening, between WhatsApp, Instagram and the mailbox. The rules to write down once and for all, the response time to keep, how to sort what can go out on its own, and the calculation for choosing between doing it yourself, outsourcing it or handing it to an AI.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **A small shop's customer service overflows less from volume than from scattering**: the same questions arrive on three or four channels, and nobody knows what has already been answered.
- **Write your rules down once** — delivery times, shipping costs, returns, guarantees — and always answer from that text.
- **Sort messages in two**: those with an exact answer, which can be automated, and those that commit your money or your judgement, which stay with you.
- **Before outsourcing or automating, measure**: messages per day × minutes per message. That number decides, not gut feeling.

---

## The real problem: scattering

A small online shop does not necessarily receive many messages. But they arrive everywhere: WhatsApp on a personal phone, Instagram messages, the contact mailbox, sometimes comments under a post. You reply from the sofa, across three apps, with no shared history. A customer who wrote on Instagram and then follows up by email reaches someone who does not remember the first conversation.

A setup that holds rests on four simple decisions.

---

## 1. Write down once what you repeat every day

Before any tool, write a rules page, the same one for your terms and conditions, your FAQ and your replies:

- **Preparation and delivery times**, by zone and by method (pickup point, home delivery).
- **Shipping costs**, and any free-delivery threshold.
- **Returns and exchanges**: within how many days, in what condition, who pays for the return, how to get the label.
- **Refunds**: how long after the return is received, to which payment method.
- **Guarantees**: what you grant beyond your legal obligations.

Two reference points for a distance sale to a consumer in France: the customer has a 14-day withdrawal period, except for exceptions set by law (a personalised item, for example), and the legal guarantee of conformity runs for two years on a new item. Your rules can be more generous, never less. If in doubt, have your terms reviewed.

---

## 2. One place for all messages

The second step is to bring the channels together — WhatsApp, Instagram, Messenger, email and your website chat — in a single inbox, with one history per customer. You no longer hunt for "where was that message", and if someone helps you, they see what has already been said. We describe the method in [our guide to centralising customer messages](/en/blog/gestion-messages-clients-multicanal).

---

## 3. A response time you announce, and keep

A customer waits more patiently when they know how long they will wait. Choose a response time you can keep on busy days — for example "reply within 24 hours, Monday to Saturday" — and show it on your contact page and in your welcome message. An automatic message saying "received, we reply within 24 hours" beats silence, but it answers nothing: it buys time.

---

## 4. Sort: what can go out on its own, what must go through you

| Type of message | Can it go out without you? | On what condition |
|---|---|---|
| Delivery times and costs | Yes | Your rules are written down |
| Return conditions | Yes | Your rules are written down |
| Availability, size, price | Yes | The catalogue is up to date, ideally read live |
| Parcel tracking | Yes | The customer's identity is verified |
| Refund, cancellation, goodwill gesture | No | It is your decision |
| Lost or damaged parcel, dispute | No | It depends on the carrier and on your judgement |

The rule is simple: anything with an exact answer, written down somewhere, can be automated. Anything that commits your money or your judgement stays with you.

---

## Doing it yourself, outsourcing it or handing it to an AI: the calculation

Start by measuring a normal week: how many messages per day, and how many minutes each one takes you on average, including looking up the order.

**As an example**, with figures to replace with your own: 20 messages a day at three minutes each is an hour a day, or about 30 hours a month.

Then compare three options:

- **Keeping it yourself.** It costs nothing in money, but those hours come out of production, photos, prospecting or your evenings.
- **Outsourcing it to a freelancer or a customer service provider.** Ask for a quote based on your real figures, and check the hours covered, the guaranteed response time and the access you will have to give to your shop.
- **Handing the repetitive questions to an AI agent.** The price is fixed and the reply goes out at any hour, including evenings and weekends; you keep only the exceptions. At Aevia Inbox, the entry plan costs €79 a month for 2,000 AI messages, plus a one-off €100 setup fee, no commitment.

The last two options combine: the agent answers the questions that have an exact answer, and a person — you or a provider — handles the rest. For the details of what an agent can do on WhatsApp, read [our guide to an AI WhatsApp agent for online shops](/en/blog/agent-ia-whatsapp-boutique-en-ligne).

---

## What to prepare before automating

1. **Your rules page**, up to date.
2. **Your catalogue**, with sizes, colours and prices — or a connected shop, so they are read live.
3. **The list of what the agent never does**: refund, cancel, promise a delivery date the carrier has not given.
4. **The person who receives the requests passed on**, and how they are notified.

---

## Frequently asked questions

**How quickly should you reply to an e-commerce customer?**
What matters is announcing a response time you can keep, for example within 24 hours, and sticking to it even on busy days. On WhatsApp, replying within 24 hours also keeps the conversation open at no cost.

**Which messages can you safely automate?**
Those with an exact answer written down somewhere: delivery times and costs, return conditions, item availability, parcel tracking once the customer's identity is verified.

**Can an AI agent handle returns?**
It can explain your return procedure from your rules. The decision to accept a return or refund stays yours: the agent collects the information and passes the request to you.

**Should you outsource customer service or switch to AI?**
First measure the volume and the time spent. An AI handles repetitive questions at a fixed price; a human provider remains useful for cases that need judgement. The two combine.

**How much does an AI agent for a small shop's customer service cost?**
At Aevia Inbox, the entry plan costs €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment, with a 14-day money-back guarantee on the first subscription.

---

👉 [See the Aevia Inbox plans](https://inbox.aevia.services/en/pricing)
`,
        faq: [
          { q: "How quickly should you reply to an e-commerce customer?", a: "What matters is announcing a response time the shop can keep, for example within 24 hours, and sticking to it even on busy days. On WhatsApp, replying within 24 hours also keeps the conversation open at no cost." },
          { q: "Which messages can you safely automate?", a: "Those with an exact answer written down somewhere: delivery times and costs, return conditions, item availability, parcel tracking once the customer's identity is verified." },
          { q: "Can an AI agent handle returns?", a: "It can explain the return procedure from the shop's rules. The decision to accept a return or refund stays human: the agent collects the information and passes the request on." },
          { q: "Should you outsource customer service or switch to AI?", a: "First measure the volume and the time spent. An AI handles repetitive questions at a fixed price; a human provider remains useful for cases that need judgement. The two combine." },
          { q: "How much does an AI agent for a small shop's customer service cost?", a: "At Aevia Inbox, the entry plan costs €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment, with a 14-day money-back guarantee on the first subscription." },
        ],
      },
      es: {
        title: "Gestionar sin ayuda la atención al cliente de tu tienda online: la organización que se sostiene y lo que se puede automatizar",
        excerpt:
          "Cuando vendes sin ayuda o entre dos personas, la atención al cliente se hace por la noche, entre WhatsApp, Instagram y el correo. Las normas que hay que escribir de una vez por todas, el plazo de respuesta que hay que cumplir, cómo separar lo que puede salir solo y el cálculo para elegir entre hacerlo tú, externalizarlo o confiarlo a una IA.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **La atención al cliente de una tienda pequeña se desborda menos por el volumen que por la dispersión**: las mismas preguntas llegan por tres o cuatro canales, y nadie sabe qué se ha respondido ya.
- **Escribe tus normas una sola vez** — plazos, gastos de envío, devoluciones, garantías — y responde siempre a partir de ese texto.
- **Separa los mensajes en dos grupos**: los que tienen una respuesta exacta, que se pueden automatizar, y los que comprometen tu dinero o tu criterio, que se quedan para ti.
- **Antes de externalizar o automatizar, mide**: número de mensajes al día × minutos por mensaje. Esa cifra es la que decide, no la intuición.

---

## El verdadero problema: la dispersión

Una tienda online pequeña no recibe necesariamente muchos mensajes. Pero llegan por todas partes: el WhatsApp del teléfono personal, los mensajes de Instagram, el buzón de contacto, a veces los comentarios bajo una publicación. Respondes desde el sofá, en tres aplicaciones, sin un historial común. Un cliente que escribió por Instagram y luego insiste por email se encuentra con alguien que no recuerda la primera conversación.

La organización que se sostiene descansa en cuatro decisiones sencillas.

---

## 1. Escribir una sola vez lo que repites todos los días

Antes de cualquier herramienta, redacta una página de normas, la misma para tus condiciones generales, tus preguntas frecuentes y tus respuestas:

- **Plazos de preparación y de entrega**, por zona y por modalidad (punto de recogida, domicilio).
- **Gastos de envío**, y el posible umbral de envío gratuito.
- **Devoluciones y cambios**: en cuántos días, en qué estado, quién paga el reenvío, cómo conseguir la etiqueta.
- **Reembolso**: en qué plazo tras recibir la devolución, a qué medio de pago.
- **Garantías**: lo que concedes más allá de las obligaciones legales.

Dos referencias para una venta a distancia a un particular en Francia: el cliente dispone de un plazo de desistimiento de 14 días, salvo las excepciones previstas por la ley (un artículo personalizado, por ejemplo), y la garantía legal de conformidad dura dos años para un bien nuevo. Tus normas pueden ser más generosas, nunca menos. En caso de duda, haz revisar tus condiciones generales.

---

## 2. Un solo lugar para todos los mensajes

La segunda tarea consiste en reunir los canales — WhatsApp, Instagram, Messenger, email y el chat de tu web — en una sola bandeja de entrada, con un historial por cliente. Ya no buscas «dónde estaba ese mensaje», y si alguien te ayuda, ve lo que ya se ha dicho. Explicamos el método en detalle en [nuestra guía para centralizar los mensajes de clientes](/es/blog/gestion-messages-clients-multicanal).

---

## 3. Un plazo de respuesta anunciado, y cumplido

Un cliente espera mejor cuando sabe cuánto va a esperar. Elige un plazo que puedas cumplir los días de más trabajo — por ejemplo «respuesta en 24 horas, de lunes a sábado» — y muéstralo en tu página de contacto y en tu mensaje de bienvenida. Un mensaje automático que dice «recibido, respondemos en 24 horas» es mejor que el silencio, pero no responde a nada: compra tiempo.

---

## 4. Clasificar: lo que puede salir solo y lo que debe pasar por ti

| Tipo de mensaje | ¿Puede salir sin ti? | Con qué condición |
|---|---|---|
| Plazos y gastos de envío | Sí | Tus normas están escritas |
| Condiciones de devolución | Sí | Tus normas están escritas |
| Disponibilidad, talla, precio | Sí | El catálogo está al día, idealmente leído en directo |
| Seguimiento de un paquete | Sí | La identidad del cliente está verificada |
| Reembolso, cancelación, gesto comercial | No | Es tu decisión |
| Paquete perdido o dañado, litigio | No | Depende del transportista y de tu criterio |

La regla es sencilla: todo lo que tiene una respuesta exacta, escrita en alguna parte, se puede automatizar. Todo lo que compromete tu dinero o tu criterio se queda para ti.

---

## Hacerlo tú, externalizarlo o confiarlo a una IA: el cálculo

Empieza por medir una semana normal: cuántos mensajes al día y cuántos minutos te lleva cada uno de media, incluida la búsqueda del pedido.

**A modo de ejemplo**, con cifras que debes sustituir por las tuyas: 20 mensajes al día a tres minutos cada uno son una hora al día, es decir, unas 30 horas al mes.

Después compara tres opciones:

- **Quedártelo tú.** No cuesta dinero, pero esas horas se le restan a la producción, las fotos, la prospección o tus noches.
- **Externalizarlo a un freelance o a un proveedor de atención al cliente.** Pide un presupuesto basado en tus cifras reales y comprueba el horario cubierto, el plazo de respuesta garantizado y los accesos a tu tienda que habrá que darle.
- **Confiar las preguntas repetitivas a un agente de IA.** El precio es fijo y la respuesta sale a cualquier hora, también por la noche y el fin de semana; tú solo te quedas con las excepciones. En Aevia Inbox, el plan de entrada cuesta 79 € al mes por 2 000 mensajes de IA, más 100 € de puesta en marcha única, sin permanencia.

Las dos últimas opciones se combinan: el agente responde a las preguntas que tienen una respuesta exacta, y una persona — tú o un proveedor — se ocupa del resto. Para ver en detalle lo que puede hacer un agente en WhatsApp, lee [nuestra guía del agente de IA de WhatsApp para tiendas online](/es/blog/agent-ia-whatsapp-boutique-en-ligne).

---

## Lo que hay que preparar antes de automatizar

1. **Tu página de normas**, al día.
2. **Tu catálogo**, con tallas, colores y precios — o una tienda conectada, para que se lean en directo.
3. **La lista de lo que el agente no hace nunca**: reembolsar, cancelar, prometer una fecha de entrega que el transportista no ha dado.
4. **La persona que recibe las solicitudes transmitidas**, y cómo se le avisa.

---

## Preguntas frecuentes

**¿En cuánto tiempo hay que responder a un cliente de una tienda online?**
Lo importante es anunciar un plazo que puedas cumplir, por ejemplo en 24 horas, y respetarlo incluso los días de más trabajo. En WhatsApp, responder dentro de las 24 horas también mantiene la conversación abierta sin coste.

**¿Qué mensajes se pueden automatizar sin riesgo?**
Los que tienen una respuesta exacta escrita en alguna parte: plazos y gastos de envío, condiciones de devolución, disponibilidad de un artículo, seguimiento de un paquete una vez verificada la identidad del cliente.

**¿Puede un agente de IA gestionar las devoluciones?**
Puede explicar tu procedimiento de devolución a partir de tus normas. La decisión de aceptar una devolución o de reembolsar sigue siendo tuya: el agente recoge la información y te transmite la solicitud.

**¿Conviene externalizar la atención al cliente o pasarse a la IA?**
Mide primero el volumen y el tiempo dedicado. Una IA se encarga de las preguntas repetitivas a precio fijo; un proveedor humano sigue siendo útil para los casos que requieren criterio. Las dos opciones se combinan.

**¿Cuánto cuesta un agente de IA para la atención al cliente de una tienda pequeña?**
En Aevia Inbox, el plan de entrada cuesta 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia, con 14 días de garantía de reembolso en la primera suscripción.

---

👉 [Ver los planes de Aevia Inbox](https://inbox.aevia.services/es/pricing)
`,
        faq: [
          { q: "¿En cuánto tiempo hay que responder a un cliente de una tienda online?", a: "Lo importante es anunciar un plazo que la tienda pueda cumplir, por ejemplo en 24 horas, y respetarlo incluso los días de más trabajo. En WhatsApp, responder dentro de las 24 horas también mantiene la conversación abierta sin coste." },
          { q: "¿Qué mensajes se pueden automatizar sin riesgo?", a: "Los que tienen una respuesta exacta escrita en alguna parte: plazos y gastos de envío, condiciones de devolución, disponibilidad de un artículo, seguimiento de un paquete una vez verificada la identidad del cliente." },
          { q: "¿Puede un agente de IA gestionar las devoluciones?", a: "Puede explicar el procedimiento de devolución a partir de las normas de la tienda. La decisión de aceptar una devolución o de reembolsar sigue siendo humana: el agente recoge la información y transmite la solicitud." },
          { q: "¿Conviene externalizar la atención al cliente o pasarse a la IA?", a: "Primero hay que medir el volumen y el tiempo dedicado. Una IA se encarga de las preguntas repetitivas a precio fijo; un proveedor humano sigue siendo útil para los casos que requieren criterio. Las dos opciones se combinan." },
          { q: "¿Cuánto cuesta un agente de IA para la atención al cliente de una tienda pequeña?", a: "En Aevia Inbox, el plan de entrada cuesta 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia, con 14 días de garantía de reembolso en la primera suscripción." },
        ],
      },
    },
  },
  {
    slug: "agent-ia-whatsapp-boutique-en-ligne",
    title: "Agent IA WhatsApp pour boutique en ligne : ce qu'il peut répondre seul, et ce qu'il doit vous laisser",
    excerpt:
      "« Où est ma commande ? », « Vous l'avez en 38 ? », « Je peux le renvoyer ? » : les messages d'une boutique en ligne se ressemblent tous. Ce qu'un agent IA branché sur WhatsApp et sur votre boutique peut traiter seul, la vérification qui protège vos clients, ce qu'il doit toujours vous transmettre, et ce que ça coûte.",
    date: "2026-11-20",
    readingTime: "8 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Un agent IA peut répondre seul à la plupart des messages répétitifs d'une boutique** : disponibilité d'un article, délais et frais de livraison, conditions de retour, suivi d'un colis.
- **Pour le suivi de commande, il doit vérifier l'identité du client** : numéro de commande ET e-mail ou téléphone de la commande, comparés par le logiciel, pas « jugés » par l'IA.
- **Remboursements, annulations, retours et changements d'adresse passent toujours par vous** : l'agent recueille les informations et vous transmet la demande.
- **Chez Aevia Inbox, les messages commencent à 79 € par mois** (2 000 messages IA inclus) ; la connexion à une boutique Shopify fait partie de la formule Business, à 399 € par mois.

---

## Les messages qu'une boutique reçoit vraiment

Ouvrez votre WhatsApp professionnel ou vos messages Instagram un lundi matin : on y retrouve presque toujours les mêmes familles de questions.

- **Le suivi** : « Ma commande est partie ? », « Le colis n'est toujours pas arrivé. »
- **Le produit** : « Vous l'avez en 38 ? », « Il reste du bleu ? », « C'est quelle matière ? »
- **La livraison** : délais, frais, pays livrés, point relais ou domicile.
- **Les retours et échanges** : combien de jours, qui paie le renvoi, comment faire.
- **Les problèmes** : colis abîmé, article qui ne correspond pas, colis perdu.

Les trois premières familles ont une réponse exacte, qui existe déjà quelque part : dans votre catalogue, dans vos conditions, chez le transporteur. Ce sont elles qu'un agent IA peut prendre en charge. Les deux dernières engagent votre argent ou votre relation avec le client : elles doivent vous revenir.

---

## Ce que l'agent peut traiter seul

- **Les questions de politique** — délais, frais de port, conditions de retour, garantie — à partir de ce que vous avez écrit, pas de ce que font « en général » les autres boutiques. Un agent qui répond « vous avez 30 jours pour retourner » alors que vous en accordez 14 crée une promesse que vous devrez tenir.
- **La disponibilité et le prix d'un article** : avec une boutique connectée, ils sont lus dans votre catalogue au moment de la question. Si la taille demandée est épuisée, l'agent le dit et propose ce qui existe.
- **Le suivi d'un colis**, une fois l'identité du client vérifiée : statut de la commande, transporteur, numéro et lien de suivi.
- **Les questions sur un produit** — matière, dimensions, entretien — tant que l'information figure dans votre fiche produit ou votre base de connaissances.

---

## « Où est ma commande ? » : la vérification qui protège vos clients

C'est la question la plus fréquente, et la plus sensible : une commande contient un nom, une adresse, parfois un numéro de téléphone. Un agent qui donnerait le détail d'une commande à quiconque tape un numéro au hasard livrerait les adresses de vos clients.

La bonne méthode est celle de la page de suivi de Shopify :

1. **Le client donne son numéro de commande.**
2. **L'agent lui demande l'e-mail ou le téléphone utilisé pour la commande.**
3. **Le logiciel compare les deux** avec la commande, de façon exacte. Ce n'est pas l'IA qui décide si « ça ressemble ».
4. **Si tout correspond**, l'agent donne le statut, le transporteur, le numéro et le lien de suivi.
5. **Si rien ne correspond**, la réponse est exactement la même que pour une commande qui n'existe pas : la personne n'apprend jamais si le numéro est réel. Après quelques essais ratés, la conversation est transmise à votre équipe.

Une dernière règle : l'agent ne promet jamais une date de livraison qui ne vient pas du suivi réel du transporteur.

---

## Ce qu'il doit toujours vous laisser

- **Un remboursement**, partiel ou total, et tout geste commercial : l'agent recueille le numéro de commande, le motif et le montant, puis vous passe la main.
- **Une annulation, un retour ou un changement d'adresse** sur une commande payée.
- **Un colis perdu ou abîmé, une commande contestée** : la réponse dépend de votre transporteur et de votre appréciation.
- **Un client mécontent** qui demande à parler à quelqu'un.

Chez Aevia Inbox, ce passage de main n'est pas laissé au bon vouloir du modèle : une demande de remboursement, d'annulation, de retour ou de changement d'adresse déclenche la transmission à votre équipe, et la conversation vous est signalée. Vous reprenez la main dans le même fil.

---

## Les règles de WhatsApp à connaître

- **La fenêtre de 24 heures.** Quand un client vous écrit, vous pouvez lui répondre librement pendant les 24 heures qui suivent son dernier message. Au-delà, ou pour écrire en premier, il faut un modèle de message validé par Meta, facturé à l'unité selon sa grille. Un agent qui répond en quelques secondes reste dans la fenêtre.
- **L'application ou l'API.** Pour brancher un agent IA, il faut passer par l'API officielle de WhatsApp Business, pas par l'application du téléphone. Nous détaillons la différence dans [notre guide sur l'application et l'API](/fr/blog/whatsapp-business-api-ou-application-difference).
- **Le numéro.** Vous pouvez connecter votre compte WhatsApp Business existant ; si vous n'en avez pas, un numéro est provisionné pendant la mise en service.

---

## Combien ça coûte chez Aevia Inbox

Le prix est mensuel et ne dépend que du volume de messages. Un message, c'est un envoi ou une réception ; chaque réponse de l'IA compte comme un message envoyé.

| Formule (messages seuls) | Prix par mois | Messages IA inclus | Connexion à votre boutique Shopify |
|---|---|---|---|
| Starter | 79 € | 2 000 | Non |
| Growth | 99 € | 4 000 | Non |
| Pro | 199 € | 8 000 | Non |
| Business | 399 € | 16 000 | Oui |

S'y ajoutent 100 € de mise en service unique (connexion des canaux et configuration de l'agent). Sans engagement, 14 jours d'essai gratuit à l'inscription, puis 14 jours satisfait ou remboursé sur le premier abonnement. Hors zone euro, le même montant est facturé en dollars.

**Pour estimer votre besoin** — hypothèse à vérifier sur vos propres conversations : si une question de suivi prend trois allers-retours, soit six messages, 2 000 messages couvrent environ 330 conversations par mois.

Sans connexion Shopify, l'agent répond à partir de vos conditions écrites et du catalogue que vous lui avez donné, et vous transmet les questions sur une commande précise avec le numéro et l'e-mail déjà recueillis. Aujourd'hui, la connexion directe à une boutique en ligne se fait avec Shopify.

---

## Les questions à poser à n'importe quel fournisseur

1. **Comment le suivi de commande est-il protégé ?** Si la réponse est « l'IA demande le numéro », c'est insuffisant : il faut un second élément, comparé par le logiciel.
2. **D'où viennent le stock et les prix ?** Lus en direct dans la boutique, ou recopiés une fois et vite périmés ?
3. **Que se passe-t-il pour un remboursement ?** L'agent doit le transmettre, jamais l'accorder ni le promettre.
4. **Peut-on couper les réponses automatiques canal par canal ?** Pour garder la main pendant les soldes ou un incident de livraison.
5. **Qui voit ce que l'IA a répondu ?** Chaque réponse doit rester visible dans l'historique de la conversation.

Pour l'organisation du SAV autour de l'agent, voir aussi [notre guide pour gérer seul le SAV de sa boutique](/fr/blog/sav-boutique-en-ligne-seul).

---

## Questions fréquentes

**Un agent IA peut-il donner le suivi d'une commande sur WhatsApp ?**
Oui, si la boutique est connectée et que le client prouve que la commande est la sienne : numéro de commande plus l'e-mail ou le téléphone de la commande. L'agent donne alors le statut, le transporteur et le lien de suivi.

**L'agent peut-il rembourser ou annuler une commande ?**
Non. Il recueille le numéro, le motif et le montant, puis transmet la demande à une personne de votre équipe, qui décide.

**Fonctionne-t-il aussi sur Instagram et par e-mail ?**
Oui. Les messages WhatsApp, Instagram et e-mail arrivent dans la même boîte, et l'agent y répond avec les mêmes règles.

**Faut-il une boutique Shopify ?**
Pour lire les commandes et le stock en direct, oui : c'est la connexion disponible aujourd'hui, incluse dans la formule Business. Sans elle, l'agent répond à partir de vos conditions et de votre catalogue, et vous transmet les questions de commande.

**Combien ça coûte ?**
Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement. La connexion Shopify fait partie de la formule Business, à 399 € par mois.

---

👉 [Voir comment Aevia Inbox répond sur WhatsApp Business](https://inbox.aevia.services/fr/solutions/whatsapp-business)
`,
    faq: [
      {
        q: "Un agent IA peut-il donner le suivi d'une commande sur WhatsApp ?",
        a: "Oui, si la boutique est connectée et que le client prouve que la commande est la sienne : numéro de commande plus l'e-mail ou le téléphone de la commande. L'agent donne alors le statut, le transporteur et le lien de suivi.",
      },
      {
        q: "L'agent peut-il rembourser ou annuler une commande ?",
        a: "Non. Il recueille le numéro, le motif et le montant, puis transmet la demande à une personne de l'équipe, qui décide.",
      },
      {
        q: "Fonctionne-t-il aussi sur Instagram et par e-mail ?",
        a: "Oui. Les messages WhatsApp, Instagram et e-mail arrivent dans la même boîte, et l'agent y répond avec les mêmes règles.",
      },
      {
        q: "Faut-il une boutique Shopify ?",
        a: "Pour lire les commandes et le stock en direct, oui : c'est la connexion disponible aujourd'hui chez Aevia Inbox, incluse dans la formule Business. Sans elle, l'agent répond à partir des conditions et du catalogue de la boutique, et transmet les questions de commande.",
      },
      {
        q: "Combien coûte un agent IA WhatsApp pour une boutique en ligne ?",
        a: "Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement. La connexion Shopify fait partie de la formule Business, à 399 € par mois.",
      },
    ],
    i18n: {
      en: {
        title: "AI WhatsApp agent for online shops: what it can answer on its own, and what it must leave to you",
        excerpt:
          "\"Where is my order?\", \"Do you have it in a 38?\", \"Can I send it back?\": an online shop's messages all look alike. What an AI agent connected to WhatsApp and to your shop can handle on its own, the check that protects your customers, what it must always pass on to you, and what it costs.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **An AI agent can answer most of a shop's repetitive messages on its own**: item availability, delivery times and costs, return conditions, parcel tracking.
- **For order tracking, it must verify the customer's identity**: order number AND the order's email or phone, compared by the software, not "judged" by the AI.
- **Refunds, cancellations, returns and address changes always go through you**: the agent collects the information and passes the request to you.
- **At Aevia Inbox, messages start at €79 a month** (2,000 AI messages included); the connection to a Shopify store is part of the Business plan, at €399 a month.

---

## The messages a shop actually receives

Open your business WhatsApp or your Instagram messages on a Monday morning: you almost always find the same families of questions.

- **Tracking**: "Has my order shipped?", "The parcel still hasn't arrived."
- **The product**: "Do you have it in a 38?", "Is there any blue left?", "What is it made of?"
- **Delivery**: times, costs, countries served, pickup point or home delivery.
- **Returns and exchanges**: how many days, who pays for the return, how to do it.
- **Problems**: damaged parcel, item not as described, lost parcel.

The first three families have an exact answer that already exists somewhere: in your catalogue, in your terms, with the carrier. Those are the ones an AI agent can handle. The last two commit your money or your relationship with the customer: they must come back to you.

---

## What the agent can handle on its own

- **Policy questions** — delivery times, shipping costs, return conditions, guarantee — from what you have written, not from what other shops do "in general". An agent that replies "you have 30 days to return it" when you allow 14 creates a promise you will have to keep.
- **Item availability and price**: with a connected shop, they are read from your catalogue at the moment of the question. If the requested size is sold out, the agent says so and offers what exists.
- **Parcel tracking**, once the customer's identity is verified: order status, carrier, tracking number and link.
- **Product questions** — material, dimensions, care — as long as the information is in your product page or your knowledge base.

---

## "Where is my order?": the check that protects your customers

It is the most frequent question, and the most sensitive: an order contains a name, an address, sometimes a phone number. An agent that gave an order's details to anyone typing a random number would hand out your customers' addresses.

The right method is the one used by Shopify's order status page:

1. **The customer gives their order number.**
2. **The agent asks for the email or phone used for the order.**
3. **The software compares both** with the order, exactly. It is not the AI deciding whether "it looks close enough".
4. **If everything matches**, the agent gives the status, the carrier, the tracking number and link.
5. **If nothing matches**, the reply is exactly the same as for an order that does not exist: the person never learns whether the number is real. After a few failed attempts, the conversation is passed to your team.

One last rule: the agent never promises a delivery date that does not come from the carrier's actual tracking.

---

## What it must always leave to you

- **A refund**, partial or full, and any goodwill gesture: the agent collects the order number, the reason and the amount, then hands over to you.
- **A cancellation, a return or an address change** on a paid order.
- **A lost or damaged parcel, a disputed order**: the answer depends on your carrier and on your judgement.
- **An unhappy customer** who asks to speak to someone.

At Aevia Inbox, this handover is not left to the model's goodwill: a request for a refund, cancellation, return or address change triggers the handover to your team, and the conversation is flagged to you. You take over in the same thread.

---

## The WhatsApp rules to know

- **The 24-hour window.** When a customer writes to you, you can reply freely during the 24 hours following their last message. Beyond that, or to write first, you need a message template approved by Meta, billed per message according to its rate card. An agent that replies within seconds stays inside the window.
- **The app or the API.** To connect an AI agent, you need the official WhatsApp Business API, not the phone app. We explain the difference in [our guide to the app and the API](/en/blog/whatsapp-business-api-ou-application-difference).
- **The number.** You can connect your existing WhatsApp Business account; if you do not have one, a number is provisioned during setup.

---

## What it costs at Aevia Inbox

The price is monthly and depends only on message volume. A message is one sent or one received; each AI reply counts as one message sent.

| Plan (messages only) | Price per month | AI messages included | Connection to your Shopify store |
|---|---|---|---|
| Starter | €79 | 2,000 | No |
| Growth | €99 | 4,000 | No |
| Pro | €199 | 8,000 | No |
| Business | €399 | 16,000 | Yes |

On top of that comes a one-off €100 setup fee (connecting the channels and configuring the agent). No commitment, a 14-day free trial at sign-up, then a 14-day money-back guarantee on the first subscription. Outside the eurozone, the same amount is billed in US dollars.

**To estimate your need** — an assumption to check against your own conversations: if a tracking question takes three back-and-forths, or six messages, 2,000 messages cover about 330 conversations a month.

Without the Shopify connection, the agent answers from your written terms and the catalogue you have given it, and passes questions about a specific order to you with the number and email already collected. Today, the direct connection to an online shop is with Shopify.

---

## Questions to ask any provider

1. **How is order tracking protected?** If the answer is "the AI asks for the number", that is not enough: you need a second piece of information, compared by the software.
2. **Where do stock and prices come from?** Read live from the shop, or copied once and soon out of date?
3. **What happens with a refund?** The agent must pass it on, never grant or promise it.
4. **Can automatic replies be switched off channel by channel?** To stay in control during sales or a delivery incident.
5. **Who sees what the AI replied?** Every reply must stay visible in the conversation history.

For organising customer service around the agent, see also [our guide to running your shop's customer service alone](/en/blog/sav-boutique-en-ligne-seul).

---

## Frequently asked questions

**Can an AI agent give order tracking on WhatsApp?**
Yes, if the shop is connected and the customer proves the order is theirs: order number plus the order's email or phone. The agent then gives the status, the carrier and the tracking link.

**Can the agent refund or cancel an order?**
No. It collects the number, the reason and the amount, then passes the request to a person on your team, who decides.

**Does it also work on Instagram and by email?**
Yes. WhatsApp, Instagram and email messages land in the same inbox, and the agent answers them with the same rules.

**Do you need a Shopify store?**
To read orders and stock live, yes: it is the connection available today, included in the Business plan. Without it, the agent answers from your terms and your catalogue, and passes order questions to you.

**How much does it cost?**
At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment. The Shopify connection is part of the Business plan, at €399 a month.

---

👉 [See how Aevia Inbox replies on WhatsApp Business](https://inbox.aevia.services/en/solutions/whatsapp-business)
`,
        faq: [
          { q: "Can an AI agent give order tracking on WhatsApp?", a: "Yes, if the shop is connected and the customer proves the order is theirs: order number plus the order's email or phone. The agent then gives the status, the carrier and the tracking link." },
          { q: "Can the agent refund or cancel an order?", a: "No. It collects the number, the reason and the amount, then passes the request to a person on the team, who decides." },
          { q: "Does it also work on Instagram and by email?", a: "Yes. WhatsApp, Instagram and email messages land in the same inbox, and the agent answers them with the same rules." },
          { q: "Do you need a Shopify store?", a: "To read orders and stock live, yes: it is the connection available today at Aevia Inbox, included in the Business plan. Without it, the agent answers from the shop's terms and catalogue, and passes order questions on." },
          { q: "How much does an AI WhatsApp agent for an online shop cost?", a: "At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment. The Shopify connection is part of the Business plan, at €399 a month." },
        ],
      },
      es: {
        title: "Agente de IA de WhatsApp para tiendas online: lo que puede responder solo y lo que debe dejarte a ti",
        excerpt:
          "«¿Dónde está mi pedido?», «¿Lo tienen en la 38?», «¿Puedo devolverlo?»: los mensajes de una tienda online se parecen todos. Lo que un agente de IA conectado a WhatsApp y a tu tienda puede gestionar solo, la verificación que protege a tus clientes, lo que siempre debe transmitirte y lo que cuesta.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Un agente de IA puede responder solo a la mayoría de los mensajes repetitivos de una tienda**: disponibilidad de un artículo, plazos y gastos de envío, condiciones de devolución, seguimiento de un paquete.
- **Para el seguimiento de pedidos, debe verificar la identidad del cliente**: número de pedido Y email o teléfono del pedido, comparados por el software, no «juzgados» por la IA.
- **Los reembolsos, las cancelaciones, las devoluciones y los cambios de dirección siempre pasan por ti**: el agente recoge la información y te transmite la solicitud.
- **En Aevia Inbox, los mensajes empiezan en 79 € al mes** (2 000 mensajes de IA incluidos); la conexión con una tienda Shopify forma parte del plan Business, a 399 € al mes.

---

## Los mensajes que una tienda recibe de verdad

Abre tu WhatsApp de empresa o tus mensajes de Instagram un lunes por la mañana: casi siempre encontrarás las mismas familias de preguntas.

- **El seguimiento**: «¿Ya ha salido mi pedido?», «El paquete todavía no ha llegado».
- **El producto**: «¿Lo tienen en la 38?», «¿Queda en azul?», «¿De qué material es?»
- **La entrega**: plazos, gastos, países a los que se envía, punto de recogida o domicilio.
- **Las devoluciones y los cambios**: cuántos días, quién paga el reenvío, cómo se hace.
- **Los problemas**: paquete dañado, artículo que no corresponde, paquete perdido.

Las tres primeras familias tienen una respuesta exacta que ya existe en alguna parte: en tu catálogo, en tus condiciones, en el transportista. Son esas las que puede asumir un agente de IA. Las dos últimas comprometen tu dinero o tu relación con el cliente: deben volver a ti.

---

## Lo que el agente puede gestionar solo

- **Las preguntas de política** — plazos, gastos de envío, condiciones de devolución, garantía — a partir de lo que has escrito, no de lo que hacen «en general» otras tiendas. Un agente que responde «tienes 30 días para devolverlo» cuando tú concedes 14 crea una promesa que tendrás que cumplir.
- **La disponibilidad y el precio de un artículo**: con una tienda conectada, se leen en tu catálogo en el momento de la pregunta. Si la talla pedida está agotada, el agente lo dice y ofrece lo que hay.
- **El seguimiento de un paquete**, una vez verificada la identidad del cliente: estado del pedido, transportista, número y enlace de seguimiento.
- **Las preguntas sobre un producto** — material, dimensiones, cuidados — siempre que la información figure en tu ficha de producto o en tu base de conocimiento.

---

## «¿Dónde está mi pedido?»: la verificación que protege a tus clientes

Es la pregunta más frecuente, y la más delicada: un pedido contiene un nombre, una dirección, a veces un número de teléfono. Un agente que diera el detalle de un pedido a cualquiera que escriba un número al azar estaría entregando las direcciones de tus clientes.

El método correcto es el de la página de estado del pedido de Shopify:

1. **El cliente da su número de pedido.**
2. **El agente le pide el email o el teléfono usado en el pedido.**
3. **El software compara ambos** con el pedido, de forma exacta. No es la IA la que decide si «se parece».
4. **Si todo coincide**, el agente da el estado, el transportista, el número y el enlace de seguimiento.
5. **Si nada coincide**, la respuesta es exactamente la misma que para un pedido que no existe: la persona nunca sabe si el número es real. Tras unos cuantos intentos fallidos, la conversación se transmite a tu equipo.

Una última regla: el agente nunca promete una fecha de entrega que no venga del seguimiento real del transportista.

---

## Lo que siempre debe dejarte a ti

- **Un reembolso**, parcial o total, y cualquier gesto comercial: el agente recoge el número de pedido, el motivo y el importe, y luego te pasa el relevo.
- **Una cancelación, una devolución o un cambio de dirección** en un pedido pagado.
- **Un paquete perdido o dañado, un pedido en disputa**: la respuesta depende de tu transportista y de tu criterio.
- **Un cliente descontento** que pide hablar con alguien.

En Aevia Inbox, este traspaso no queda a merced del modelo: una solicitud de reembolso, cancelación, devolución o cambio de dirección activa la transmisión a tu equipo, y se te señala la conversación. Retomas el control en el mismo hilo.

---

## Las reglas de WhatsApp que debes conocer

- **La ventana de 24 horas.** Cuando un cliente te escribe, puedes responderle libremente durante las 24 horas siguientes a su último mensaje. Pasado ese plazo, o para escribir tú primero, necesitas una plantilla de mensaje aprobada por Meta, que se factura por unidad según su tarifa. Un agente que responde en pocos segundos se mantiene dentro de la ventana.
- **La aplicación o la API.** Para conectar un agente de IA, hay que pasar por la API oficial de WhatsApp Business, no por la aplicación del teléfono. Explicamos la diferencia en [nuestra guía sobre la aplicación y la API](/es/blog/whatsapp-business-api-ou-application-difference).
- **El número.** Puedes conectar tu cuenta de WhatsApp Business existente; si no tienes una, se asigna un número durante la puesta en marcha.

---

## Cuánto cuesta en Aevia Inbox

El precio es mensual y solo depende del volumen de mensajes. Un mensaje es un envío o una recepción; cada respuesta de la IA cuenta como un mensaje enviado.

| Plan (solo mensajes) | Precio al mes | Mensajes de IA incluidos | Conexión con tu tienda Shopify |
|---|---|---|---|
| Starter | 79 € | 2 000 | No |
| Growth | 99 € | 4 000 | No |
| Pro | 199 € | 8 000 | No |
| Business | 399 € | 16 000 | Sí |

A esto se suma una cuota única de puesta en marcha de 100 € (conexión de los canales y configuración del agente). Sin permanencia, 14 días de prueba gratuita al registrarte y, después, 14 días de garantía de reembolso en la primera suscripción. Fuera de la zona euro, se factura el mismo importe en dólares.

**Para estimar lo que necesitas** — una hipótesis que debes comprobar con tus propias conversaciones: si una pregunta de seguimiento requiere tres idas y vueltas, es decir, seis mensajes, 2 000 mensajes cubren unas 330 conversaciones al mes.

Sin la conexión con Shopify, el agente responde a partir de tus condiciones escritas y del catálogo que le has dado, y te transmite las preguntas sobre un pedido concreto con el número y el email ya recogidos. Hoy, la conexión directa con una tienda online se hace con Shopify.

---

## Las preguntas que hacer a cualquier proveedor

1. **¿Cómo se protege el seguimiento de pedidos?** Si la respuesta es «la IA pide el número», no basta: hace falta un segundo dato, comparado por el software.
2. **¿De dónde salen el stock y los precios?** ¿Se leen en directo en la tienda, o se copiaron una vez y quedan desactualizados enseguida?
3. **¿Qué pasa con un reembolso?** El agente debe transmitirlo, nunca concederlo ni prometerlo.
4. **¿Se pueden desactivar las respuestas automáticas canal por canal?** Para mantener el control durante las rebajas o una incidencia en las entregas.
5. **¿Quién ve lo que ha respondido la IA?** Cada respuesta debe quedar visible en el historial de la conversación.

Para organizar la atención al cliente en torno al agente, consulta también [nuestra guía para gestionar sin ayuda la atención al cliente de tu tienda](/es/blog/sav-boutique-en-ligne-seul).

---

## Preguntas frecuentes

**¿Puede un agente de IA dar el seguimiento de un pedido por WhatsApp?**
Sí, si la tienda está conectada y el cliente demuestra que el pedido es suyo: número de pedido más el email o el teléfono del pedido. El agente da entonces el estado, el transportista y el enlace de seguimiento.

**¿Puede el agente reembolsar o cancelar un pedido?**
No. Recoge el número, el motivo y el importe, y luego transmite la solicitud a una persona de tu equipo, que decide.

**¿Funciona también en Instagram y por email?**
Sí. Los mensajes de WhatsApp, Instagram y email llegan a la misma bandeja de entrada, y el agente los responde con las mismas reglas.

**¿Hace falta una tienda Shopify?**
Para leer los pedidos y el stock en directo, sí: es la conexión disponible hoy, incluida en el plan Business. Sin ella, el agente responde a partir de tus condiciones y tu catálogo, y te transmite las preguntas sobre pedidos.

**¿Cuánto cuesta?**
En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia. La conexión con Shopify forma parte del plan Business, a 399 € al mes.

---

👉 [Ver cómo responde Aevia Inbox en WhatsApp Business](https://inbox.aevia.services/es/solutions/whatsapp-business)
`,
        faq: [
          { q: "¿Puede un agente de IA dar el seguimiento de un pedido por WhatsApp?", a: "Sí, si la tienda está conectada y el cliente demuestra que el pedido es suyo: número de pedido más el email o el teléfono del pedido. El agente da entonces el estado, el transportista y el enlace de seguimiento." },
          { q: "¿Puede el agente reembolsar o cancelar un pedido?", a: "No. Recoge el número, el motivo y el importe, y luego transmite la solicitud a una persona del equipo, que decide." },
          { q: "¿Funciona también en Instagram y por email?", a: "Sí. Los mensajes de WhatsApp, Instagram y email llegan a la misma bandeja de entrada, y el agente los responde con las mismas reglas." },
          { q: "¿Hace falta una tienda Shopify?", a: "Para leer los pedidos y el stock en directo, sí: es la conexión disponible hoy en Aevia Inbox, incluida en el plan Business. Sin ella, el agente responde a partir de las condiciones y del catálogo de la tienda, y transmite las preguntas sobre pedidos." },
          { q: "¿Cuánto cuesta un agente de IA de WhatsApp para una tienda online?", a: "En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia. La conexión con Shopify forma parte del plan Business, a 399 € al mes." },
        ],
      },
    },
  },
  {
    slug: "reservations-restaurant-instagram-whatsapp",
    title: "Réservations par Instagram et WhatsApp : comment un restaurant peut les prendre sans quitter le service",
    excerpt:
      "Un client qui découvre votre restaurant sur Instagram vous écrit pour réserver, souvent pendant le coup de feu. Les trois façons de gérer ces demandes, ce qu'un agent IA doit demander et noter, comment ne jamais confirmer une table que vous n'avez pas, et les règles de WhatsApp à connaître.",
    date: "2026-11-20",
    readingTime: "7 min",
    category: "CRM & Support",
    content: `## À retenir en 30 secondes

- **Une demande de réservation en message attend une réponse rapide** : sans réponse avant le soir, le client réserve ailleurs.
- **Trois options** : renvoyer vers votre module de réservation, envoyer un message automatique d'attente, ou laisser un agent IA prendre la réservation dans la conversation.
- **Un bon agent note le créneau, le nombre de couverts, le nom, un numéro et les allergies**, sans jamais dire lui-même qu'un plat est « sans » un allergène.
- **Chez Aevia Inbox, les messages commencent à 79 € par mois** (2 000 messages IA inclus), sans engagement.

---

## Pourquoi les réservations arrivent en message

Un client qui découvre votre restaurant sur Instagram vous écrit là où il se trouve : en message privé. Un habitué vous envoie un WhatsApp plutôt que d'appeler. Ces demandes arrivent à toute heure, et surtout pendant le service, quand personne ne regarde le téléphone. Une réponse le lendemain matin arrive trop tard pour la table de la veille.

---

## Trois façons de gérer ces demandes

### 1. Renvoyer vers votre module de réservation

Un lien de réservation dans la bio Instagram et dans une réponse enregistrée envoie le client vers votre outil de réservation en ligne. C'est simple et gratuit, mais une partie des clients préfère poser une question avant de réserver, et un lien ne répond pas à « vous avez une terrasse ? ».

### 2. Un message automatique d'attente

Un message de bienvenue ou d'absence dit au client que sa demande est bien reçue et qu'on lui répond après le service. C'est mieux que le silence, mais la réservation n'est pas prise.

### 3. Un agent IA qui prend la réservation

L'agent répond à la question posée, propose de réserver, demande ce qui manque et enregistre la demande. La réservation arrive écrite, pas à reconstituer de mémoire après le service.

---

## Ce que l'agent demande, et ce qu'il note

- **Le jour et le créneau** souhaités.
- **Le nombre de couverts.**
- **Le nom de la réservation** et un numéro pour rappeler si besoin.
- **Une allergie ou un régime à signaler** : il la note pour la cuisine, il n'y répond pas lui-même.
- **L'occasion**, s'il y en a une : un anniversaire, un repas d'affaires.

Il répond aussi aux questions du quotidien à partir de ce que vous avez saisi une fois : horaires, carte, accès, stationnement, terrasse.

---

## Ce qu'il ne doit jamais faire

- **Dire qu'un plat est « sans » un allergène**, ou le déduire du nom du plat : seule la liste écrite par le restaurant fait foi.
- **Confirmer une table en dehors des horaires d'ouverture**, ou au-delà de la capacité que vous lui avez donnée.
- **Inventer une règle d'annulation** ou une pénalité : si vous n'en avez pas donné, il transmet la question.

---

## Complet ou pas : connecter vos disponibilités

Si vos créneaux sont dans un agenda Google connecté, l'agent ne propose que ce qui est libre et peut refuser une table quand c'est complet. Sans agenda connecté, il prend la demande et vous la confirmez : c'est déjà plus rapide que de rappeler quelqu'un qui n'a pas laissé de message.

---

## WhatsApp : ce qu'il faut savoir

- **Répondre dans les 24 heures est libre.** Quand un client vous écrit, vous pouvez lui répondre pendant les 24 heures qui suivent son dernier message. Au-delà, ou pour écrire en premier — un rappel la veille, par exemple —, il faut un modèle de message validé par Meta, facturé à l'unité selon sa grille.
- **Il faut passer par l'API officielle** pour brancher un agent : voir [notre guide sur l'application et l'API WhatsApp Business](/fr/blog/whatsapp-business-api-ou-application-difference).
- **Les rappels automatiques** font partie des automatisations d'Aevia Inbox : 5 sont incluses à partir de la formule Pro, sans limite en formule Business.

---

## Et le téléphone ?

Les réservations n'arrivent pas toutes en message. Si le téléphone sonne pendant le service, la même boîte peut aussi recevoir les appels : voir [notre article sur le standard téléphonique IA pour restaurant](/fr/blog/standard-telephonique-ia-restaurant) et, pour la vente à emporter, [la prise de commande par téléphone](/fr/blog/prise-commande-telephone-ia-restaurant).

---

## Combien ça coûte

| Formule Aevia Inbox | Prix par mois | Ce qui est inclus |
|---|---|---|
| Starter, messages seuls | 79 € | 2 000 messages IA (WhatsApp, Instagram, e-mail) |
| Starter, messages et voix | 79 € | 1 000 messages IA et 100 minutes d'appel |
| Pro, messages seuls | 199 € | 8 000 messages IA et 5 automatisations (relances, rappels) |

S'y ajoutent 100 € de mise en service unique. Sans engagement, 14 jours d'essai gratuit à l'inscription, puis 14 jours satisfait ou remboursé sur le premier abonnement.

---

## Questions fréquentes

**Peut-on prendre les réservations d'un restaurant par Instagram automatiquement ?**
Oui. Un agent IA connecté aux messages Instagram répond à la question posée, demande le créneau, le nombre de couverts, le nom et un numéro, et enregistre la réservation.

**Et sur WhatsApp ?**
De la même façon, à condition de connecter WhatsApp par l'API officielle de WhatsApp Business. Les messages Instagram et WhatsApp arrivent dans la même boîte.

**L'agent peut-il refuser une réservation quand c'est complet ?**
Oui si vos disponibilités sont dans un agenda Google connecté. Sans connexion, il prend la demande et vous la confirmez.

**Que répond-il sur les allergies ?**
Il note l'allergie pour la cuisine. Il ne dit jamais lui-même qu'un plat est sans un allergène : seule votre liste écrite fait foi.

**Combien ça coûte ?**
Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement.

---

👉 [Voir comment Aevia Inbox prend les réservations de restaurant](https://inbox.aevia.services/fr/solutions/reservation-restaurant)
`,
    faq: [
      {
        q: "Peut-on prendre les réservations d'un restaurant par Instagram automatiquement ?",
        a: "Oui. Un agent IA connecté aux messages Instagram répond à la question posée, demande le créneau, le nombre de couverts, le nom et un numéro, et enregistre la réservation.",
      },
      {
        q: "Peut-on aussi prendre les réservations sur WhatsApp ?",
        a: "Oui, à condition de connecter WhatsApp par l'API officielle de WhatsApp Business. Les messages Instagram et WhatsApp arrivent dans la même boîte.",
      },
      {
        q: "L'agent peut-il refuser une réservation quand c'est complet ?",
        a: "Oui si les disponibilités du restaurant sont dans un agenda Google connecté. Sans connexion, il prend la demande et le restaurant la confirme.",
      },
      {
        q: "Que répond l'agent sur les allergies ?",
        a: "Il note l'allergie pour la cuisine. Il ne dit jamais lui-même qu'un plat est sans un allergène : seule la liste écrite du restaurant fait foi.",
      },
      {
        q: "Combien coûte un agent IA qui prend les réservations par message ?",
        a: "Chez Aevia Inbox, les messages commencent à 79 € par mois avec 2 000 messages IA inclus, plus 100 € de mise en service unique, sans engagement.",
      },
    ],
    i18n: {
      en: {
        title: "Bookings via Instagram and WhatsApp: how a restaurant can take them without leaving service",
        excerpt:
          "A customer who discovers your restaurant on Instagram messages you to book, often in the middle of the rush. The three ways to handle these requests, what an AI agent should ask and note, how to never confirm a table you do not have, and the WhatsApp rules to know.",
        category: "CRM & Support",
        content: `## Key takeaways in 30 seconds

- **A booking request by message needs a quick reply**: with no answer before the evening, the customer books elsewhere.
- **Three options**: send people to your booking tool, send an automatic holding message, or let an AI agent take the booking in the conversation.
- **A good agent notes the slot, the number of guests, the name, a number and allergies**, without ever saying itself that a dish is "free from" an allergen.
- **At Aevia Inbox, messages start at €79 a month** (2,000 AI messages included), no commitment.

---

## Why bookings arrive by message

A customer who discovers your restaurant on Instagram writes to you where they are: in a direct message. A regular sends you a WhatsApp rather than calling. These requests arrive at any hour, and above all during service, when nobody is looking at the phone. A reply the next morning is too late for the previous evening's table.

---

## Three ways to handle these requests

### 1. Send people to your booking tool

A booking link in your Instagram bio and in a saved reply sends the customer to your online booking tool. It is simple and free, but some customers prefer to ask a question before booking, and a link does not answer "do you have a terrace?".

### 2. An automatic holding message

A welcome or away message tells the customer their request has been received and that you will reply after service. It beats silence, but the booking is not taken.

### 3. An AI agent that takes the booking

The agent answers the question asked, offers to book, asks for what is missing and records the request. The booking arrives in writing, not to be pieced together from memory after service.

---

## What the agent asks, and what it notes

- **The day and time slot** wanted.
- **The number of guests.**
- **The name for the booking** and a number to call back if needed.
- **An allergy or diet to flag**: it notes it for the kitchen, it does not answer it itself.
- **The occasion**, if there is one: a birthday, a business meal.

It also answers everyday questions from what you entered once: opening hours, menu, access, parking, terrace.

---

## What it must never do

- **Say that a dish is "free from" an allergen**, or infer it from the dish's name: only the restaurant's written list counts.
- **Confirm a table outside opening hours**, or beyond the capacity you have given it.
- **Make up a cancellation rule** or a penalty: if you have not given one, it passes the question on.

---

## Full or not: connecting your availability

If your slots are in a connected Google calendar, the agent only offers what is free and can turn down a table when you are full. Without a connected calendar, it takes the request and you confirm it: that is already faster than calling back someone who left no message.

---

## WhatsApp: what you need to know

- **Replying within 24 hours is free of restrictions.** When a customer writes to you, you can reply during the 24 hours following their last message. Beyond that, or to write first — a reminder the day before, for example —, you need a message template approved by Meta, billed per message according to its rate card.
- **You need the official API** to connect an agent: see [our guide to the WhatsApp Business app and API](/en/blog/whatsapp-business-api-ou-application-difference).
- **Automatic reminders** are part of Aevia Inbox's automations: 5 are included from the Pro plan, unlimited on the Business plan.

---

## And the phone?

Not all bookings arrive by message. If the phone rings during service, the same inbox can also take the calls: see [our article on the AI phone desk for restaurants](/en/blog/standard-telephonique-ia-restaurant) and, for takeaway, [taking orders by phone](/en/blog/prise-commande-telephone-ia-restaurant).

---

## What it costs

| Aevia Inbox plan | Price per month | What is included |
|---|---|---|
| Starter, messages only | €79 | 2,000 AI messages (WhatsApp, Instagram, email) |
| Starter, messages and voice | €79 | 1,000 AI messages and 100 call minutes |
| Pro, messages only | €199 | 8,000 AI messages and 5 automations (follow-ups, reminders) |

On top of that comes a one-off €100 setup fee. No commitment, a 14-day free trial at sign-up, then a 14-day money-back guarantee on the first subscription.

---

## Frequently asked questions

**Can a restaurant take bookings via Instagram automatically?**
Yes. An AI agent connected to Instagram messages answers the question asked, asks for the slot, the number of guests, the name and a number, and records the booking.

**And on WhatsApp?**
In the same way, provided WhatsApp is connected through the official WhatsApp Business API. Instagram and WhatsApp messages land in the same inbox.

**Can the agent turn down a booking when you are full?**
Yes if your availability is in a connected Google calendar. Without a connection, it takes the request and you confirm it.

**What does it say about allergies?**
It notes the allergy for the kitchen. It never says itself that a dish is free from an allergen: only your written list counts.

**How much does it cost?**
At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment.

---

👉 [See how Aevia Inbox takes restaurant bookings](https://inbox.aevia.services/en/solutions/reservation-restaurant)
`,
        faq: [
          { q: "Can a restaurant take bookings via Instagram automatically?", a: "Yes. An AI agent connected to Instagram messages answers the question asked, asks for the slot, the number of guests, the name and a number, and records the booking." },
          { q: "Can bookings also be taken on WhatsApp?", a: "Yes, provided WhatsApp is connected through the official WhatsApp Business API. Instagram and WhatsApp messages land in the same inbox." },
          { q: "Can the agent turn down a booking when the restaurant is full?", a: "Yes if the restaurant's availability is in a connected Google calendar. Without a connection, it takes the request and the restaurant confirms it." },
          { q: "What does the agent say about allergies?", a: "It notes the allergy for the kitchen. It never says itself that a dish is free from an allergen: only the restaurant's written list counts." },
          { q: "How much does an AI agent that takes bookings by message cost?", a: "At Aevia Inbox, messages start at €79 a month with 2,000 AI messages included, plus a one-off €100 setup fee, no commitment." },
        ],
      },
      es: {
        title: "Reservas por Instagram y WhatsApp: cómo puede tomarlas un restaurante sin dejar el servicio",
        excerpt:
          "Un cliente que descubre tu restaurante en Instagram te escribe para reservar, a menudo en plena hora punta. Las tres formas de gestionar estas solicitudes, lo que un agente de IA debe preguntar y anotar, cómo no confirmar nunca una mesa que no tienes y las reglas de WhatsApp que debes conocer.",
        category: "CRM y Soporte",
        content: `## Lo esencial en 30 segundos

- **Una solicitud de reserva por mensaje espera una respuesta rápida**: si no recibe respuesta antes de la noche, el cliente reserva en otro sitio.
- **Tres opciones**: redirigir a tu módulo de reservas, enviar un mensaje automático de espera o dejar que un agente de IA tome la reserva en la conversación.
- **Un buen agente anota el horario, el número de comensales, el nombre, un número y las alergias**, sin decir nunca por su cuenta que un plato está «libre de» un alérgeno.
- **En Aevia Inbox, los mensajes empiezan en 79 € al mes** (2 000 mensajes de IA incluidos), sin permanencia.

---

## Por qué las reservas llegan por mensaje

Un cliente que descubre tu restaurante en Instagram te escribe donde está: por mensaje directo. Un cliente habitual te manda un WhatsApp en lugar de llamar. Estas solicitudes llegan a cualquier hora, y sobre todo durante el servicio, cuando nadie mira el teléfono. Una respuesta a la mañana siguiente llega demasiado tarde para la mesa de la noche anterior.

---

## Tres formas de gestionar estas solicitudes

### 1. Redirigir a tu módulo de reservas

Un enlace de reserva en la bio de Instagram y en una respuesta guardada envía al cliente a tu herramienta de reservas online. Es sencillo y gratuito, pero parte de los clientes prefiere hacer una pregunta antes de reservar, y un enlace no responde a «¿tienen terraza?».

### 2. Un mensaje automático de espera

Un mensaje de bienvenida o de ausencia le dice al cliente que su solicitud se ha recibido y que se le responderá después del servicio. Es mejor que el silencio, pero la reserva no queda tomada.

### 3. Un agente de IA que toma la reserva

El agente responde a la pregunta que se le hace, propone reservar, pregunta lo que falta y registra la solicitud. La reserva llega por escrito, sin tener que reconstruirla de memoria después del servicio.

---

## Lo que el agente pregunta y lo que anota

- **El día y el horario** deseados.
- **El número de comensales.**
- **El nombre de la reserva** y un número para devolver la llamada si hace falta.
- **Una alergia o una dieta que avisar**: la anota para la cocina, no la responde por su cuenta.
- **La ocasión**, si la hay: un cumpleaños, una comida de negocios.

También responde a las preguntas del día a día a partir de lo que has introducido una vez: horario, carta, acceso, aparcamiento, terraza.

---

## Lo que nunca debe hacer

- **Decir que un plato está «libre de» un alérgeno**, o deducirlo del nombre del plato: solo cuenta la lista escrita por el restaurante.
- **Confirmar una mesa fuera del horario de apertura**, o por encima de la capacidad que le has indicado.
- **Inventarse una política de cancelación** o una penalización: si no le has dado ninguna, transmite la pregunta.

---

## Completo o no: conectar tu disponibilidad

Si tus horarios están en un Google Calendar conectado, el agente solo propone lo que está libre y puede rechazar una mesa cuando está completo. Sin calendario conectado, toma la solicitud y tú la confirmas: ya es más rápido que devolver la llamada a alguien que no dejó mensaje.

---

## WhatsApp: lo que hay que saber

- **Responder dentro de las 24 horas es libre.** Cuando un cliente te escribe, puedes responderle durante las 24 horas siguientes a su último mensaje. Pasado ese plazo, o para escribir tú primero — un recordatorio la víspera, por ejemplo —, necesitas una plantilla de mensaje aprobada por Meta, que se factura por unidad según su tarifa.
- **Hay que pasar por la API oficial** para conectar un agente: consulta [nuestra guía sobre la aplicación y la API de WhatsApp Business](/es/blog/whatsapp-business-api-ou-application-difference).
- **Los recordatorios automáticos** forman parte de las automatizaciones de Aevia Inbox: se incluyen 5 a partir del plan Pro, sin límite en el plan Business.

---

## ¿Y el teléfono?

No todas las reservas llegan por mensaje. Si el teléfono suena durante el servicio, la misma bandeja de entrada también puede recibir las llamadas: consulta [nuestro artículo sobre la centralita con IA para restaurantes](/es/blog/standard-telephonique-ia-restaurant) y, para la comida para llevar, [la toma de pedidos por teléfono](/es/blog/prise-commande-telephone-ia-restaurant).

---

## Cuánto cuesta

| Plan de Aevia Inbox | Precio al mes | Qué incluye |
|---|---|---|
| Starter, solo mensajes | 79 € | 2 000 mensajes de IA (WhatsApp, Instagram, email) |
| Starter, mensajes y voz | 79 € | 1 000 mensajes de IA y 100 minutos de llamada |
| Pro, solo mensajes | 199 € | 8 000 mensajes de IA y 5 automatizaciones (seguimientos, recordatorios) |

A esto se suma una cuota única de puesta en marcha de 100 €. Sin permanencia, 14 días de prueba gratuita al registrarte y, después, 14 días de garantía de reembolso en la primera suscripción.

---

## Preguntas frecuentes

**¿Se pueden tomar automáticamente las reservas de un restaurante por Instagram?**
Sí. Un agente de IA conectado a los mensajes de Instagram responde a la pregunta que se le hace, pide el horario, el número de comensales, el nombre y un número, y registra la reserva.

**¿Y por WhatsApp?**
De la misma manera, siempre que conectes WhatsApp a través de la API oficial de WhatsApp Business. Los mensajes de Instagram y WhatsApp llegan a la misma bandeja de entrada.

**¿Puede el agente rechazar una reserva cuando está completo?**
Sí, si tu disponibilidad está en un Google Calendar conectado. Sin conexión, toma la solicitud y tú la confirmas.

**¿Qué responde sobre las alergias?**
Anota la alergia para la cocina. Nunca dice por su cuenta que un plato está libre de un alérgeno: solo cuenta tu lista escrita.

**¿Cuánto cuesta?**
En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia.

---

👉 [Ver cómo toma Aevia Inbox las reservas de restaurante](https://inbox.aevia.services/es/solutions/reservation-restaurant)
`,
        faq: [
          { q: "¿Se pueden tomar automáticamente las reservas de un restaurante por Instagram?", a: "Sí. Un agente de IA conectado a los mensajes de Instagram responde a la pregunta que se le hace, pide el horario, el número de comensales, el nombre y un número, y registra la reserva." },
          { q: "¿También se pueden tomar las reservas por WhatsApp?", a: "Sí, siempre que se conecte WhatsApp a través de la API oficial de WhatsApp Business. Los mensajes de Instagram y WhatsApp llegan a la misma bandeja de entrada." },
          { q: "¿Puede el agente rechazar una reserva cuando está completo?", a: "Sí, si la disponibilidad del restaurante está en un Google Calendar conectado. Sin conexión, toma la solicitud y el restaurante la confirma." },
          { q: "¿Qué responde el agente sobre las alergias?", a: "Anota la alergia para la cocina. Nunca dice por su cuenta que un plato está libre de un alérgeno: solo cuenta la lista escrita del restaurante." },
          { q: "¿Cuánto cuesta un agente de IA que toma reservas por mensaje?", a: "En Aevia Inbox, los mensajes empiezan en 79 € al mes con 2 000 mensajes de IA incluidos, más 100 € de puesta en marcha única, sin permanencia." },
        ],
      },
    },
  },
  {
    slug: "appels-manques-salon-coiffure",
    title: "Appels manqués au salon de coiffure ou à l'institut : ne plus perdre de rendez-vous pendant une coupe ou un soin",
    excerpt:
      "Le téléphone sonne pendant une couleur, un soin en cabine ou un samedi complet. Les solutions habituelles et leurs limites, ce qu'un agent vocal IA fait réellement pendant l'appel, les règles à lui donner, et combien de minutes il vous faut.",
    date: "2026-11-20",
    readingTime: "7 min",
    category: "IA Vocale & Téléphonie",
    content: `## À retenir en 30 secondes

- **Dans un salon ou un institut, le téléphone sonne quand vous avez les mains prises** : couleur, soin en cabine, samedi complet. Un appel sans réponse est souvent un rendez-vous pris ailleurs.
- **Un agent vocal IA décroche au nom du salon**, renseigne sur les prestations et les tarifs, propose un créneau et pose le rendez-vous.
- **Il peut envoyer un SMS de confirmation** (numéros de mobile français) et prendre un message pour ce qu'il ne traite pas.
- **Chez Aevia Inbox, la voix commence à 79 € par mois** (200 minutes d'appel incluses), plus 100 € de mise en service unique.

---

## Le téléphone sonne toujours au mauvais moment

Une coiffeuse ne lâche pas un pinceau de couleur pour décrocher, une esthéticienne n'interrompt pas un soin. Les appels arrivent pourtant à ces moments-là, et aux heures où le salon est fermé : le soir, le dimanche, et le lundi pour beaucoup de salons. La personne qui tombe sur une sonnerie dans le vide ne laisse pas toujours de message ; elle appelle le salon suivant.

---

## Les solutions habituelles et leurs limites

| Solution | Ce qu'elle fait | Sa limite |
|---|---|---|
| Répondeur | Enregistre un message | Il faut rappeler, et beaucoup ne laissent rien |
| Renvoi sur un portable | Quelqu'un peut décrocher | Le portable sonne aussi pendant les prestations |
| Réservation en ligne seule | La cliente réserve sans appeler | Ne répond pas à « vous faites les extensions ? » |
| Secrétariat téléphonique | Une personne prend l'appel | Coût par appel ou par mois, horaires limités |
| Agent vocal IA | Répond, renseigne et pose le rendez-vous | Doit être bien réglé, et transmettre ce qu'il ne sait pas |

Nous comparons en détail l'agent IA et le secrétariat dans [notre article sur le standard téléphonique IA](/fr/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## Ce que fait l'agent pendant l'appel

1. **Il décroche au nom du salon** et demande ce que la personne souhaite.
2. **Il renseigne** sur vos prestations, vos tarifs, vos horaires et l'accès, à partir de ce que vous avez saisi.
3. **Il propose un créneau** : il vérifie vos horaires, les rendez-vous déjà pris et, si votre agenda Google est connecté, les créneaux que vous y avez bloqués. Puis il pose le rendez-vous avec le nom et le numéro de la cliente.
4. **Il peut envoyer un SMS de confirmation** avec le jour et l'heure (numéros de mobile français).
5. **Il annule un rendez-vous** quand une cliente appelle pour se décommander.
6. **Il prend un message** ou une demande de rappel pour tout ce qu'il ne traite pas lui-même.

La langue de l'appelant est détectée : l'agent répond en français, anglais, espagnol, allemand ou portugais, sans réglage.

---

## Les règles à lui donner

- **La durée de chaque prestation**, pour ne pas poser une couleur complète sur un créneau de 30 minutes.
- **Le test préalable** avant une coloration, si vous en exigez un : l'agent l'annonce avant de fixer le rendez-vous.
- **Les soins déconseillés, et à qui** : sans cette liste, il ne rassure pas une cliente sur un soin.
- **Votre règle de retard et d'annulation**, pour qu'il l'annonce au lieu d'en inventer une.
- **Ce qu'il ne fait jamais** : poser un diagnostic, garantir un résultat, promettre un remboursement.

Pour les messages Instagram, qui arrivent aux mêmes moments, voir [notre guide pour répondre aux messages Instagram d'un salon](/fr/blog/repondre-messages-instagram-salon-coiffure).

---

## Combien de minutes vous faut-il ?

Le prix d'un agent vocal se compte en minutes d'appel. **À titre d'exemple** — hypothèse à vérifier sur vos propres appels : si un appel de prise de rendez-vous dure 2 à 3 minutes,

| Formule Aevia Inbox (voix seule) | Minutes incluses par mois | Appels de 2 à 3 min |
|---|---|---|
| Starter — 79 €/mois | 200 | environ 65 à 100 |
| Growth — 99 €/mois | 400 | environ 130 à 200 |
| Pro — 199 €/mois | 800 | environ 265 à 400 |

S'y ajoutent 100 € de mise en service unique (connexion de la ligne et configuration de l'agent avec vos prestations). Sans engagement, 14 jours d'essai gratuit à l'inscription, puis 14 jours satisfait ou remboursé sur le premier abonnement. Si vous recevez aussi beaucoup de messages, la formule messages et voix inclut, au même prix de départ, 1 000 messages IA et 100 minutes.

---

## Les questions à poser à n'importe quel fournisseur

1. **Où le rendez-vous est-il enregistré ?** Dans votre agenda, ou seulement dans un e-mail à recopier ?
2. **Comment l'agent sait-il qu'un créneau est libre ?**
3. **Que fait-il d'une question qu'il ne sait pas traiter ?** Il doit prendre un message, jamais improviser.
4. **Que coûte une minute au-delà du forfait, et combien dure un appel chez vous ?**
5. **Peut-on relire les appels ?** Pour vérifier ce qui a été dit en votre nom.

---

## Questions fréquentes

**Un agent vocal IA peut-il prendre les rendez-vous d'un salon de coiffure ?**
Oui. Il renseigne sur les prestations et les tarifs, propose un créneau, pose le rendez-vous avec le nom et le numéro de la cliente, et peut envoyer un SMS de confirmation.

**Que se passe-t-il si la cliente pose une question technique ?**
L'agent ne pose pas de diagnostic et ne garantit pas de résultat. Il propose un rendez-vous de diagnostic au salon, ou prend un message pour que vous rappeliez.

**Peut-il annuler un rendez-vous ?**
Oui, quand la cliente appelle pour se décommander. Il annonce votre règle d'annulation si vous la lui avez donnée.

**Les appels sont-ils pris en dehors des horaires du salon ?**
Oui. L'agent répond à toute heure, y compris le soir, le dimanche et les jours de fermeture.

**Combien ça coûte ?**
Chez Aevia Inbox, la voix commence à 79 € par mois avec 200 minutes d'appel incluses, plus 100 € de mise en service unique, sans engagement.

---

👉 [Voir comment l'accueil téléphonique IA d'Aevia Inbox répond au téléphone](https://inbox.aevia.services/fr/solutions/standard-telephonique-ia)
`,
    faq: [
      {
        q: "Un agent vocal IA peut-il prendre les rendez-vous d'un salon de coiffure ?",
        a: "Oui. Il renseigne sur les prestations et les tarifs, propose un créneau, pose le rendez-vous avec le nom et le numéro de la cliente, et peut envoyer un SMS de confirmation.",
      },
      {
        q: "Que se passe-t-il si la cliente pose une question technique ?",
        a: "L'agent ne pose pas de diagnostic et ne garantit pas de résultat. Il propose un rendez-vous de diagnostic au salon, ou prend un message pour que le salon rappelle.",
      },
      {
        q: "L'agent peut-il annuler un rendez-vous ?",
        a: "Oui, quand la cliente appelle pour se décommander. Il annonce la règle d'annulation du salon si elle lui a été donnée.",
      },
      {
        q: "Les appels sont-ils pris en dehors des horaires du salon ?",
        a: "Oui. L'agent répond à toute heure, y compris le soir, le dimanche et les jours de fermeture.",
      },
      {
        q: "Combien coûte un agent vocal IA pour un salon ?",
        a: "Chez Aevia Inbox, la voix commence à 79 € par mois avec 200 minutes d'appel incluses, plus 100 € de mise en service unique, sans engagement.",
      },
    ],
    i18n: {
      en: {
        title: "Missed calls at the hair or beauty salon: stop losing appointments during a cut or a treatment",
        excerpt:
          "The phone rings during a colour, a treatment in the cabin or a fully booked Saturday. The usual solutions and their limits, what an AI voice agent actually does during the call, the rules to give it, and how many minutes you need.",
        category: "AI Voice & Telephony",
        content: `## Key takeaways in 30 seconds

- **In a hair or beauty salon, the phone rings when your hands are busy**: a colour, a treatment in the cabin, a fully booked Saturday. An unanswered call is often an appointment booked elsewhere.
- **An AI voice agent picks up in the salon's name**, gives information on services and prices, offers a slot and books the appointment.
- **It can send a confirmation text** (French mobile numbers) and take a message for anything it does not handle.
- **At Aevia Inbox, voice starts at €79 a month** (200 call minutes included), plus a one-off €100 setup fee.

---

## The phone always rings at the wrong moment

A hairdresser does not put down a colour brush to pick up, a beautician does not interrupt a treatment. Yet calls come in at exactly those moments, and at times when the salon is closed: in the evening, on Sunday, and on Monday for many salons. The person who hears it ring out does not always leave a message; they call the next salon.

---

## The usual solutions and their limits

| Solution | What it does | Its limit |
|---|---|---|
| Answering machine | Records a message | You have to call back, and many leave nothing |
| Forwarding to a mobile | Someone can pick up | The mobile also rings during appointments |
| Online booking only | The client books without calling | Does not answer "do you do extensions?" |
| Phone answering service | A person takes the call | Cost per call or per month, limited hours |
| AI voice agent | Answers, informs and books the appointment | Must be set up properly, and pass on what it does not know |

We compare the AI agent and the answering service in detail in [our article on the AI phone desk](/en/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## What the agent does during the call

1. **It picks up in the salon's name** and asks what the person would like.
2. **It gives information** on your services, prices, opening hours and access, from what you have entered.
3. **It offers a slot**: it checks your opening hours, the appointments already booked and, if your Google calendar is connected, the slots you have blocked there. Then it books the appointment with the client's name and number.
4. **It can send a confirmation text** with the day and time (French mobile numbers).
5. **It cancels an appointment** when a client calls to cancel.
6. **It takes a message** or a callback request for anything it does not handle itself.

The caller's language is detected: the agent replies in French, English, Spanish, German or Portuguese, with no setting needed.

---

## The rules to give it

- **How long each service takes**, so it never books a full colour into a 30-minute slot.
- **The patch test** before a colour, if you require one: the agent mentions it before setting the appointment.
- **Treatments that are not recommended, and for whom**: without that list, it does not reassure a client about a treatment.
- **Your lateness and cancellation policy**, so it states yours instead of making one up.
- **What it never does**: diagnose, guarantee a result, promise a refund.

For Instagram messages, which arrive at the same moments, see [our guide to answering a salon's Instagram messages](/en/blog/repondre-messages-instagram-salon-coiffure).

---

## How many minutes do you need?

A voice agent is priced in call minutes. **As an example** — an assumption to check against your own calls: if a booking call lasts 2 to 3 minutes,

| Aevia Inbox plan (voice only) | Minutes included per month | Calls of 2 to 3 min |
|---|---|---|
| Starter — €79/month | 200 | about 65 to 100 |
| Growth — €99/month | 400 | about 130 to 200 |
| Pro — €199/month | 800 | about 265 to 400 |

On top of that comes a one-off €100 setup fee (connecting the line and configuring the agent with your services). No commitment, a 14-day free trial at sign-up, then a 14-day money-back guarantee on the first subscription. If you also receive a lot of messages, the messages and voice plan includes, at the same starting price, 1,000 AI messages and 100 minutes.

---

## Questions to ask any provider

1. **Where is the appointment recorded?** In your calendar, or only in an email you have to copy over?
2. **How does the agent know a slot is free?**
3. **What does it do with a question it cannot handle?** It must take a message, never improvise.
4. **What does a minute beyond the plan cost, and how long does a call last at your salon?**
5. **Can you read the calls back?** To check what was said in your name.

---

## Frequently asked questions

**Can an AI voice agent book appointments for a hair salon?**
Yes. It gives information on services and prices, offers a slot, books the appointment with the client's name and number, and can send a confirmation text.

**What happens if the client asks a technical question?**
The agent does not diagnose and does not guarantee a result. It offers a consultation appointment at the salon, or takes a message so you can call back.

**Can it cancel an appointment?**
Yes, when the client calls to cancel. It states your cancellation policy if you have given it.

**Are calls answered outside salon hours?**
Yes. The agent answers at any hour, including evenings, Sundays and closing days.

**How much does it cost?**
At Aevia Inbox, voice starts at €79 a month with 200 call minutes included, plus a one-off €100 setup fee, no commitment.

---

👉 [See how the Aevia Inbox AI customer desk answers the phone](https://inbox.aevia.services/en/solutions/standard-telephonique-ia)
`,
        faq: [
          { q: "Can an AI voice agent book appointments for a hair salon?", a: "Yes. It gives information on services and prices, offers a slot, books the appointment with the client's name and number, and can send a confirmation text." },
          { q: "What happens if the client asks a technical question?", a: "The agent does not diagnose and does not guarantee a result. It offers a consultation appointment at the salon, or takes a message so the salon can call back." },
          { q: "Can the agent cancel an appointment?", a: "Yes, when the client calls to cancel. It states the salon's cancellation policy if it has been given." },
          { q: "Are calls answered outside salon hours?", a: "Yes. The agent answers at any hour, including evenings, Sundays and closing days." },
          { q: "How much does an AI voice agent for a salon cost?", a: "At Aevia Inbox, voice starts at €79 a month with 200 call minutes included, plus a one-off €100 setup fee, no commitment." },
        ],
      },
      es: {
        title: "Llamadas perdidas en la peluquería o el centro de estética: no vuelvas a perder citas durante un corte o un tratamiento",
        excerpt:
          "El teléfono suena durante un tinte, un tratamiento en cabina o un sábado completo. Las soluciones habituales y sus límites, lo que hace realmente un agente de voz con IA durante la llamada, las reglas que hay que darle y cuántos minutos necesitas.",
        category: "Voz IA y Telefonía",
        content: `## Lo esencial en 30 segundos

- **En una peluquería o un centro de estética, el teléfono suena cuando tienes las manos ocupadas**: un tinte, un tratamiento en cabina, un sábado completo. Una llamada sin respuesta suele ser una cita reservada en otro sitio.
- **Un agente de voz con IA contesta en nombre del salón**, informa sobre los servicios y los precios, propone un horario y agenda la cita.
- **Puede enviar un SMS de confirmación** (números móviles franceses) y tomar un mensaje para lo que no gestiona.
- **En Aevia Inbox, la voz empieza en 79 € al mes** (200 minutos de llamada incluidos), más 100 € de puesta en marcha única.

---

## El teléfono siempre suena en mal momento

Una peluquera no suelta la brocha del tinte para contestar, una esteticista no interrumpe un tratamiento. Sin embargo, las llamadas llegan justo en esos momentos, y en las horas en que el salón está cerrado: por la noche, el domingo y, en muchos salones, el lunes. La persona que oye sonar el teléfono sin respuesta no siempre deja un mensaje; llama al siguiente salón.

---

## Las soluciones habituales y sus límites

| Solución | Lo que hace | Su límite |
|---|---|---|
| Contestador | Graba un mensaje | Hay que devolver la llamada, y muchos no dejan nada |
| Desvío a un móvil | Alguien puede contestar | El móvil también suena durante los servicios |
| Solo reserva online | La clienta reserva sin llamar | No responde a «¿hacen extensiones?» |
| Servicio de secretaría telefónica | Una persona atiende la llamada | Coste por llamada o por mes, horario limitado |
| Agente de voz con IA | Responde, informa y agenda la cita | Debe estar bien configurado y transmitir lo que no sabe |

Comparamos en detalle el agente de IA y el servicio de secretaría en [nuestro artículo sobre la centralita con IA](/es/blog/standard-telephonique-ia-vs-secretariat-telephonique).

---

## Lo que hace el agente durante la llamada

1. **Contesta en nombre del salón** y pregunta qué desea la persona.
2. **Informa** sobre tus servicios, tus precios, tu horario y el acceso, a partir de lo que has introducido.
3. **Propone un horario**: comprueba tu horario de apertura, las citas ya reservadas y, si tu Google Calendar está conectado, las franjas que has bloqueado en él. Después agenda la cita con el nombre y el número de la clienta.
4. **Puede enviar un SMS de confirmación** con el día y la hora (números móviles franceses).
5. **Cancela una cita** cuando una clienta llama para anularla.
6. **Toma un mensaje** o una solicitud de devolución de llamada para todo lo que no gestiona por sí mismo.

Se detecta el idioma de quien llama: el agente responde en francés, inglés, español, alemán o portugués, sin ninguna configuración.

---

## Las reglas que hay que darle

- **La duración de cada servicio**, para no agendar un tinte completo en una franja de 30 minutos.
- **La prueba previa** antes de una coloración, si exiges una: el agente la anuncia antes de fijar la cita.
- **Los tratamientos desaconsejados, y para quién**: sin esa lista, no tranquiliza a una clienta sobre un tratamiento.
- **Tu política de retrasos y cancelaciones**, para que la anuncie en lugar de inventarse una.
- **Lo que no hace nunca**: hacer un diagnóstico, garantizar un resultado, prometer un reembolso.

Para los mensajes de Instagram, que llegan en los mismos momentos, consulta [nuestra guía para responder a los mensajes de Instagram de una peluquería](/es/blog/repondre-messages-instagram-salon-coiffure).

---

## ¿Cuántos minutos necesitas?

El precio de un agente de voz se calcula en minutos de llamada. **A modo de ejemplo** — una hipótesis que debes comprobar con tus propias llamadas: si una llamada para pedir cita dura de 2 a 3 minutos,

| Plan de Aevia Inbox (solo voz) | Minutos incluidos al mes | Llamadas de 2 a 3 min |
|---|---|---|
| Starter — 79 €/mes | 200 | unas 65 a 100 |
| Growth — 99 €/mes | 400 | unas 130 a 200 |
| Pro — 199 €/mes | 800 | unas 265 a 400 |

A esto se suma una cuota única de puesta en marcha de 100 € (conexión de la línea y configuración del agente con tus servicios). Sin permanencia, 14 días de prueba gratuita al registrarte y, después, 14 días de garantía de reembolso en la primera suscripción. Si también recibes muchos mensajes, el plan de mensajes y voz incluye, al mismo precio de entrada, 1 000 mensajes de IA y 100 minutos.

---

## Las preguntas que hacer a cualquier proveedor

1. **¿Dónde se registra la cita?** ¿En tu calendario, o solo en un email que hay que copiar a mano?
2. **¿Cómo sabe el agente que una franja está libre?**
3. **¿Qué hace con una pregunta que no sabe gestionar?** Debe tomar un mensaje, nunca improvisar.
4. **¿Cuánto cuesta un minuto por encima del plan, y cuánto dura una llamada en tu salón?**
5. **¿Se pueden revisar las llamadas?** Para comprobar lo que se ha dicho en tu nombre.

---

## Preguntas frecuentes

**¿Puede un agente de voz con IA agendar las citas de una peluquería?**
Sí. Informa sobre los servicios y los precios, propone un horario, agenda la cita con el nombre y el número de la clienta y puede enviar un SMS de confirmación.

**¿Qué pasa si la clienta hace una pregunta técnica?**
El agente no hace diagnósticos ni garantiza resultados. Propone una cita de diagnóstico en el salón, o toma un mensaje para que le devuelvas la llamada.

**¿Puede cancelar una cita?**
Sí, cuando la clienta llama para anularla. Anuncia tu política de cancelación si se la has dado.

**¿Se atienden las llamadas fuera del horario del salón?**
Sí. El agente responde a cualquier hora, también por la noche, el domingo y los días de cierre.

**¿Cuánto cuesta?**
En Aevia Inbox, la voz empieza en 79 € al mes con 200 minutos de llamada incluidos, más 100 € de puesta en marcha única, sin permanencia.

---

👉 [Ver cómo responde al teléfono la atención al cliente con IA de Aevia Inbox](https://inbox.aevia.services/es/solutions/standard-telephonique-ia)
`,
        faq: [
          { q: "¿Puede un agente de voz con IA agendar las citas de una peluquería?", a: "Sí. Informa sobre los servicios y los precios, propone un horario, agenda la cita con el nombre y el número de la clienta y puede enviar un SMS de confirmación." },
          { q: "¿Qué pasa si la clienta hace una pregunta técnica?", a: "El agente no hace diagnósticos ni garantiza resultados. Propone una cita de diagnóstico en el salón, o toma un mensaje para que el salón devuelva la llamada." },
          { q: "¿Puede el agente cancelar una cita?", a: "Sí, cuando la clienta llama para anularla. Anuncia la política de cancelación del salón si se la han dado." },
          { q: "¿Se atienden las llamadas fuera del horario del salón?", a: "Sí. El agente responde a cualquier hora, también por la noche, el domingo y los días de cierre." },
          { q: "¿Cuánto cuesta un agente de voz con IA para un salón?", a: "En Aevia Inbox, la voz empieza en 79 € al mes con 200 minutos de llamada incluidos, más 100 € de puesta en marcha única, sin permanencia." },
        ],
      },
    },
  },
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
