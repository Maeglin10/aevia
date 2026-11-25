import type { BlogPost } from "../blog-posts";

/*
  Article du 25/11/2026. Sources ouvertes le 25/11/2026 :
  - Meta for Developers, « Pricing on the WhatsApp Business Platform »
    (developers.facebook.com/docs/whatsapp/pricing) : facturation au message
    depuis le 1er juillet 2025, messages livrés seulement, messages des
    utilisateurs jamais facturés, 1 000 messages de service gratuits par mois et
    par numéro sans report, reprise de la facturation des messages de service
    dès le 1 001e et des messages « utility » en fenêtre ouverte à compter du
    1er octobre 2026, moyen de paiement à ajouter avant le 30 septembre 2026,
    tarif selon la catégorie et l'indicatif pays du destinataire, fenêtre de
    service client de 24 heures ;
  - Aevia Inbox, pages Tarifs et WhatsApp Business (inbox.aevia.services),
    lues le 25/11/2026 : prix, quotas, connexion, historique antérieur.
  Les frais Meta par message ne sont PAS décrits comme inclus dans les quotas
  Aevia (la page Tarifs ne le dit pas) : l'article n'affirme rien d'autre que
  « facturés par Meta selon sa grille ». Aucun prix en euros par message.
*/
export const COMMANDE_WHATSAPP: BlogPost = {
  slug: "commande-whatsapp-restaurant-cout-meta",
  title: "Prise de commande sur WhatsApp pour un restaurant : ce que Meta facture",
  excerpt:
    "Prendre les commandes d'un restaurant sur WhatsApp : ce qu'un agent doit faire, ce que Meta facture selon sa page officielle de tarification (relue le 25 novembre 2026), ce qu'Aevia affirme et n'affirme pas, et les questions à poser avant de choisir un outil.",
  date: "2026-11-25",
  readingTime: "7 min",
  category: "CRM & Support",
  content: `## À retenir en 30 secondes

- **Meta facture WhatsApp au message** depuis le 1er juillet 2025, et seulement quand le message est livré. Les messages que vos clients vous envoient ne sont jamais facturés.
- **Chaque numéro professionnel dispose de 1 000 messages de service gratuits par mois**, sans report d'un mois sur l'autre.
- **À compter du 1er octobre 2026**, Meta facture de nouveau les messages de service à partir du 1 001e du mois.
- **Un agent qui prend une commande** ne propose que ce qui est sur la carte, relit le récapitulatif, et ne devine jamais sur une allergie.

---

## Ce qu'un agent doit faire pour une commande

Que l'agent soit le nôtre ou celui d'un autre éditeur, voici ce qu'il faut exiger avant de lui confier des commandes :

1. **Ne proposer que ce qui est sur votre carte**, avec vos prix : un plat absent est refusé, pas inventé.
2. **Relire le récapitulatif** (plats, quantités, précisions, total) et attendre le « oui » du client avant de considérer la commande comme prise.
3. **Demander l'heure de retrait et un prénom**, et signaler à une personne ce qui sort du cadre.
4. **Ne jamais deviner sur une allergie** : sans liste écrite par le restaurateur, l'agent transmet à une personne (voir [notre article sur les allergènes](/fr/blog/agent-ia-restaurant-allergenes)).
5. **Laisser une trace** : chaque réponse automatique reste visible dans l'historique, pour vérifier ce qui a été dit en votre nom.

## Ce que Meta facture

Les faits ci-dessous viennent de la page [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/pricing) de Meta, relue le 25 novembre 2026. Cette page reflète les changements de tarification entrés en vigueur au 1er octobre 2026.

- **Unité de facturation** : le message, depuis le 1er juillet 2025. Seuls les messages livrés sont facturés. Meta ne facture pas les messages des utilisateurs vers les entreprises.
- **Le tarif dépend de deux critères** : la catégorie du message et le marché, c'est-à-dire l'indicatif pays du destinataire.
- **Catégories** : les messages modèles (marketing, utility, authentication) et les messages hors modèle (service, ou Meta Business Agent).
- **Fenêtre de service client** : elle s'ouvre quand le client vous écrit, dure 24 heures et repart à chaque nouveau message du client. Hors de cette fenêtre, seuls des messages modèles peuvent être envoyés.
- **Gratuité** : 1 000 messages de service gratuits par mois et par numéro professionnel, sans report.
- **Depuis le 1er octobre 2026** : les messages de service sont facturés à partir du 1 001e du mois, et les messages utility envoyés dans une fenêtre ouverte redeviennent facturables. Meta conseille d'ajouter un moyen de paiement avant le 30 septembre 2026, faute de quoi les messages de service peuvent cesser d'être livrés une fois le forfait gratuit épuisé.

Nous ne reproduisons volontairement aucun prix par message : Meta publie une grille par pays et par catégorie, en plusieurs devises, et elle évolue. Consultez-la sur la page de Meta avant de chiffrer.

## Application WhatsApp Business ou API ?

L'application WhatsApp Business gratuite convient à un restaurant qui répond lui-même. Dès qu'une IA répond, que plusieurs personnes lisent la même boîte ou que l'on veut garder l'historique avec les appels et Instagram, il faut passer par l'API officielle. La différence est détaillée dans [WhatsApp Business : API ou application](/fr/blog/whatsapp-business-api-ou-application-difference).

## Ce que dit Aevia Inbox sur WhatsApp

D'après notre page [WhatsApp Business](https://inbox.aevia.services/fr/solutions/whatsapp-business) :

- **La connexion passe par l'inscription intégrée de Meta** : vous autorisez, votre compte WhatsApp Business est relié. Sans compte existant, nous provisionnons un numéro pendant la mise en service.
- **L'agent traite les questions courantes** (horaires, disponibilité, tarifs, adresse, suivi de commande) à partir de ce que vous lui avez fourni ; quand la conversation sort du cadre, elle vous est signalée.
- **Les réponses automatiques se désactivent canal par canal**, à tout moment.
- **Seules les conversations postérieures à la connexion** sont conservées dans la boîte : l'historique antérieur reste dans l'application WhatsApp.

Côté prix, la [page Tarifs](https://inbox.aevia.services/fr/pricing) indique : Starter 79 €, Growth 99 €, Pro 199 €, Business 399 € et Scale 999 € par mois, une mise en service unique de 100 €, aucun engagement et 14 jours satisfait ou remboursé. Un message compte pour un envoi ou une réception, et une réponse automatique de l'IA compte comme un message envoyé.

**Ce que nous n'affirmons pas :** que les frais de Meta par message soient compris dans ces formules. Meta les facture selon sa propre grille ; demandez une réponse écrite avant de souscrire, à nous comme à tout fournisseur. Nous n'affirmons pas non plus que chaque commande WhatsApp soit envoyée automatiquement en caisse.

## Cinq questions à poser à tout fournisseur d'agent WhatsApp

1. Mes messages passent-ils par l'API officielle de Meta ?
2. Les frais Meta par message sont-ils inclus dans votre prix, ou facturés en plus ?
3. Que fait l'agent quand je n'ai pas écrit la liste des allergènes ?
4. Puis-je voir et corriger chaque réponse envoyée en mon nom ?
5. Que devient mon historique si je résilie ?`,
  faq: [
    {
      q: "Meta facture-t-elle les messages que mes clients m'envoient ?",
      a: "Non. D'après la page de tarification de Meta, les messages des utilisateurs vers les entreprises ne sont pas facturés.",
    },
    {
      q: "Combien de messages WhatsApp sont gratuits ?",
      a: "Meta fournit à chaque numéro professionnel 1 000 messages de service gratuits par mois, sans report. Au-delà, ils sont facturés à partir du 1er octobre 2026.",
    },
    {
      q: "Quel est le prix d'un message WhatsApp ?",
      a: "Il dépend de la catégorie du message et du pays du destinataire. Meta publie sa grille par pays et par catégorie sur sa page de tarification ; nous ne reproduisons aucun prix.",
    },
    {
      q: "Les frais Meta sont-ils compris dans les formules Aevia ?",
      a: "Nous ne l'affirmons pas. Meta facture ses frais selon sa grille, et notre page Tarifs ne précise pas ce point : demandez une réponse écrite avant de souscrire.",
    },
    {
      q: "Mes anciens messages WhatsApp sont-ils repris par Aevia ?",
      a: "Non : seules les conversations postérieures à la connexion sont conservées dans la boîte. L'historique antérieur reste dans l'application WhatsApp.",
    },
  ],
  i18n: {
    en: {
      title: "Taking restaurant orders on WhatsApp: what Meta charges",
      excerpt:
        "Taking a restaurant's orders on WhatsApp: what an agent must do, what Meta charges according to its official pricing page (read on November 25, 2026), what Aevia does and does not claim, and the questions to ask before choosing a tool.",
      category: "CRM & Support",
      content: `## Key points in 30 seconds

- **Meta charges WhatsApp per message** since July 1, 2025, and only when the message is delivered. The messages your customers send you are never charged.
- **Each business phone number gets 1,000 free service messages per month**, with no rollover from one month to the next.
- **From October 1, 2026**, Meta charges for service messages again from the 1,001st of the month.
- **An agent that takes an order** only offers what is on the menu, reads the summary back, and never guesses about an allergy.

---

## What an agent must do for an order

Whether the agent is ours or another vendor's, here is what to demand before trusting it with orders:

1. **Offer only what is on your menu**, at your prices: a dish that is not there is refused, not invented.
2. **Read back the summary** (dishes, quantities, details, total) and wait for the customer's "yes" before treating the order as taken.
3. **Ask for the pickup time and a first name**, and flag anything out of the ordinary to a person.
4. **Never guess about an allergy**: without a list written by the restaurateur, the agent hands over to a person (see [our article on allergens](/en/blog/agent-ia-restaurant-allergenes)).
5. **Leave a trace**: every automatic reply stays visible in the history, so you can check what was said on your behalf.

## What Meta charges

The facts below come from Meta's [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/pricing) page, read on November 25, 2026. That page reflects the pricing changes that took effect on October 1, 2026.

- **Billing unit**: the message, since July 1, 2025. Only delivered messages are charged. Meta does not charge for messages from users to businesses.
- **The rate depends on two criteria**: the message category and the market, meaning the recipient's country calling code.
- **Categories**: template messages (marketing, utility, authentication) and non-template messages (service, or Meta Business Agent).
- **Customer service window**: it opens when the customer writes to you, lasts 24 hours and restarts with each new customer message. Outside that window, only template messages can be sent.
- **Free tier**: 1,000 free service messages per month per business phone number, with no rollover.
- **Since October 1, 2026**: service messages are charged from the 1,001st of the month, and utility messages sent in an open window become billable again. Meta advises adding a payment method before September 30, 2026, otherwise service messages may stop being delivered once the free tier is used up.

We deliberately do not reproduce any per-message price: Meta publishes a rate card by country and by category, in several currencies, and it changes. Check it on Meta's page before budgeting.

## WhatsApp Business app or API?

The free WhatsApp Business app suits a restaurant that answers by itself. As soon as an AI replies, several people read the same inbox or you want to keep the history alongside calls and Instagram, you need the official API. The difference is detailed in [WhatsApp Business: API or app](/en/blog/whatsapp-business-api-ou-application-difference).

## What Aevia Inbox says about WhatsApp

According to our [WhatsApp Business](https://inbox.aevia.services/en/solutions/whatsapp-business) page:

- **The connection goes through Meta's embedded signup**: you authorize, and your WhatsApp Business account is linked. Without an existing account, we provision a number during setup.
- **The agent handles the usual questions** (opening hours, availability, prices, address, order tracking) from what you gave it; when the conversation goes beyond that, it is flagged to you.
- **Automatic replies can be turned off channel by channel**, at any time.
- **Only conversations after the connection** are kept in the inbox: earlier history stays in the WhatsApp app.

On price, the [Pricing page](https://inbox.aevia.services/en/pricing) states: Starter 79 €, Growth 99 €, Pro 199 €, Business 399 € and Scale 999 € per month, a one-time setup fee of 100 €, no commitment and a 14-day money-back guarantee. A message counts as one send or one receipt, and an automatic AI reply counts as a sent message.

**What we do not claim:** that Meta's per-message fees are included in these plans. Meta charges them according to its own rate card; ask for a written answer before subscribing, from us as from any vendor. Nor do we claim that every WhatsApp order is sent automatically to the till.

## Five questions to ask any WhatsApp agent vendor

1. Do my messages go through Meta's official API?
2. Are Meta's per-message fees included in your price, or billed on top?
3. What does the agent do when I have not written the allergen list?
4. Can I see and correct every reply sent on my behalf?
5. What happens to my history if I cancel?`,
      faq: [
        {
          q: "Does Meta charge for the messages my customers send me?",
          a: "No. According to Meta's pricing page, messages from users to businesses are not charged.",
        },
        {
          q: "How many WhatsApp messages are free?",
          a: "Meta gives each business phone number 1,000 free service messages per month, with no rollover. Beyond that, they are charged from October 1, 2026.",
        },
        {
          q: "What is the price of a WhatsApp message?",
          a: "It depends on the message category and the recipient's country. Meta publishes its rate card by country and category on its pricing page; we do not reproduce any price.",
        },
        {
          q: "Are Meta's fees included in Aevia's plans?",
          a: "We do not claim so. Meta charges its fees according to its rate card, and our Pricing page does not specify this point: ask for a written answer before subscribing.",
        },
        {
          q: "Does Aevia import my old WhatsApp messages?",
          a: "No: only conversations after the connection are kept in the inbox. Earlier history stays in the WhatsApp app.",
        },
      ],
    },
    es: {
      title: "Tomar pedidos de un restaurante por WhatsApp: lo que cobra Meta",
      excerpt:
        "Tomar los pedidos de un restaurante por WhatsApp: qué debe hacer un agente, lo que cobra Meta según su página oficial de precios (leída el 25 de noviembre de 2026), lo que Aevia afirma y no afirma, y las preguntas que hacer antes de elegir una herramienta.",
      category: "CRM y Soporte",
      content: `## Lo esencial en 30 segundos

- **Meta cobra WhatsApp por mensaje** desde el 1 de julio de 2025, y solo cuando el mensaje se entrega. Los mensajes que te envían tus clientes nunca se cobran.
- **Cada número profesional dispone de 1.000 mensajes de servicio gratuitos al mes**, sin acumulación de un mes al siguiente.
- **A partir del 1 de octubre de 2026**, Meta vuelve a cobrar los mensajes de servicio desde el 1.001.º del mes.
- **Un agente que toma un pedido** solo ofrece lo que está en la carta, repite el resumen y nunca adivina sobre una alergia.

---

## Lo que debe hacer un agente con un pedido

Sea el agente nuestro o de otro proveedor, esto es lo que hay que exigir antes de confiarle pedidos:

1. **Ofrecer solo lo que está en tu carta**, con tus precios: un plato que no está se rechaza, no se inventa.
2. **Repetir el resumen** (platos, cantidades, detalles, total) y esperar el «sí» del cliente antes de dar el pedido por tomado.
3. **Pedir la hora de recogida y un nombre**, y avisar a una persona de lo que se salga de lo normal.
4. **No adivinar nunca sobre una alergia**: sin una lista escrita por el restaurador, el agente pasa el caso a una persona (consulta [nuestro artículo sobre alérgenos](/es/blog/agent-ia-restaurant-allergenes)).
5. **Dejar constancia**: cada respuesta automática queda visible en el historial, para comprobar lo que se dijo en tu nombre.

## Lo que cobra Meta

Los datos siguientes proceden de la página [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/pricing) de Meta, leída el 25 de noviembre de 2026. Esa página refleja los cambios de precios en vigor desde el 1 de octubre de 2026.

- **Unidad de facturación**: el mensaje, desde el 1 de julio de 2025. Solo se cobran los mensajes entregados. Meta no cobra los mensajes de los usuarios a las empresas.
- **La tarifa depende de dos criterios**: la categoría del mensaje y el mercado, es decir, el prefijo del país del destinatario.
- **Categorías**: los mensajes de plantilla (marketing, utility, authentication) y los mensajes sin plantilla (service o Meta Business Agent).
- **Ventana de atención al cliente**: se abre cuando el cliente te escribe, dura 24 horas y se reinicia con cada nuevo mensaje del cliente. Fuera de esa ventana, solo se pueden enviar mensajes de plantilla.
- **Gratuidad**: 1.000 mensajes de servicio gratuitos al mes por número profesional, sin acumulación.
- **Desde el 1 de octubre de 2026**: los mensajes de servicio se cobran desde el 1.001.º del mes, y los mensajes utility enviados en una ventana abierta vuelven a ser facturables. Meta aconseja añadir un método de pago antes del 30 de septiembre de 2026; de lo contrario, los mensajes de servicio pueden dejar de entregarse una vez agotado el cupo gratuito.

No reproducimos a propósito ningún precio por mensaje: Meta publica una tarifa por país y por categoría, en varias monedas, y cambia. Consúltala en la página de Meta antes de calcular.

## ¿Aplicación WhatsApp Business o API?

La aplicación gratuita WhatsApp Business sirve para un restaurante que responde por sí mismo. En cuanto responde una IA, varias personas leen la misma bandeja o se quiere conservar el historial junto con las llamadas e Instagram, hace falta la API oficial. La diferencia se detalla en [WhatsApp Business: API o aplicación](/es/blog/whatsapp-business-api-ou-application-difference).

## Lo que dice Aevia Inbox sobre WhatsApp

Según nuestra página [WhatsApp Business](https://inbox.aevia.services/es/solutions/whatsapp-business):

- **La conexión pasa por el registro integrado de Meta**: autorizas y tu cuenta de WhatsApp Business queda vinculada. Sin cuenta previa, aprovisionamos un número durante la puesta en marcha.
- **El agente atiende las preguntas habituales** (horarios, disponibilidad, precios, dirección, seguimiento de pedido) a partir de lo que le hayas facilitado; cuando la conversación se sale de ese marco, se te avisa.
- **Las respuestas automáticas se desactivan canal por canal**, en cualquier momento.
- **Solo se conservan las conversaciones posteriores a la conexión** en la bandeja: el historial anterior se queda en la aplicación de WhatsApp.

En cuanto a precios, la [página de Tarifas](https://inbox.aevia.services/es/pricing) indica: Starter 79 €, Growth 99 €, Pro 199 €, Business 399 € y Scale 999 € al mes, una puesta en marcha única de 100 €, sin permanencia y 14 días de satisfacción garantizada o reembolso. Un mensaje cuenta como un envío o una recepción, y una respuesta automática de la IA cuenta como un mensaje enviado.

**Lo que no afirmamos:** que las tarifas de Meta por mensaje estén incluidas en estas fórmulas. Meta las cobra según su propia tarifa; pide una respuesta por escrito antes de contratar, a nosotros como a cualquier proveedor. Tampoco afirmamos que cada pedido de WhatsApp llegue automáticamente a la caja.

## Cinco preguntas para cualquier proveedor de agentes de WhatsApp

1. ¿Pasan mis mensajes por la API oficial de Meta?
2. ¿Las tarifas de Meta por mensaje están incluidas en su precio o se facturan aparte?
3. ¿Qué hace el agente cuando no he escrito la lista de alérgenos?
4. ¿Puedo ver y corregir cada respuesta enviada en mi nombre?
5. ¿Qué pasa con mi historial si doy de baja el servicio?`,
      faq: [
        {
          q: "¿Cobra Meta los mensajes que me envían mis clientes?",
          a: "No. Según la página de precios de Meta, los mensajes de los usuarios a las empresas no se cobran.",
        },
        {
          q: "¿Cuántos mensajes de WhatsApp son gratuitos?",
          a: "Meta ofrece a cada número profesional 1.000 mensajes de servicio gratuitos al mes, sin acumulación. Más allá, se cobran desde el 1 de octubre de 2026.",
        },
        {
          q: "¿Cuál es el precio de un mensaje de WhatsApp?",
          a: "Depende de la categoría del mensaje y del país del destinatario. Meta publica su tarifa por país y categoría en su página de precios; nosotros no reproducimos ningún precio.",
        },
        {
          q: "¿Están incluidas las tarifas de Meta en las fórmulas de Aevia?",
          a: "No lo afirmamos. Meta cobra sus tarifas según su propia tabla, y nuestra página de Tarifas no precisa este punto: pide una respuesta por escrito antes de contratar.",
        },
        {
          q: "¿Aevia recupera mis antiguos mensajes de WhatsApp?",
          a: "No: solo se conservan en la bandeja las conversaciones posteriores a la conexión. El historial anterior se queda en la aplicación de WhatsApp.",
        },
      ],
    },
    de: {
      title: "Bestellungen im Restaurant über WhatsApp annehmen: was Meta berechnet",
      excerpt:
        "Bestellungen eines Restaurants über WhatsApp annehmen: was ein Agent tun muss, was Meta laut seiner offiziellen Preisseite berechnet (gelesen am 25. November 2026), was Aevia behauptet und was nicht, und die Fragen vor der Wahl eines Werkzeugs.",
      category: "CRM & Support",
      content: `## Das Wichtigste in 30 Sekunden

- **Meta berechnet WhatsApp pro Nachricht** seit dem 1. Juli 2025, und nur, wenn die Nachricht zugestellt wird. Nachrichten, die Ihre Gäste Ihnen schicken, werden nie berechnet.
- **Jede Geschäftsnummer hat 1.000 kostenlose Servicenachrichten pro Monat**, ohne Übertrag von einem Monat auf den nächsten.
- **Ab dem 1. Oktober 2026** berechnet Meta Servicenachrichten wieder ab der 1.001. des Monats.
- **Ein Agent, der eine Bestellung aufnimmt**, bietet nur an, was auf der Karte steht, liest die Zusammenfassung vor und rät bei einer Allergie nie.

---

## Was ein Agent bei einer Bestellung tun muss

Ob der Agent unserer oder der eines anderen Anbieters ist: Das sollten Sie verlangen, bevor Sie ihm Bestellungen anvertrauen:

1. **Nur anbieten, was auf Ihrer Karte steht**, zu Ihren Preisen: Ein Gericht, das nicht dort steht, wird abgelehnt, nicht erfunden.
2. **Die Zusammenfassung vorlesen** (Gerichte, Mengen, Hinweise, Summe) und das „Ja“ des Gastes abwarten, bevor die Bestellung als aufgenommen gilt.
3. **Nach Abholzeit und Vornamen fragen** und alles Ungewöhnliche an eine Person weitergeben.
4. **Bei einer Allergie nie raten**: Ohne eine vom Gastronomen geschriebene Liste übergibt der Agent an eine Person (siehe [unseren Artikel über Allergene](/de/blog/agent-ia-restaurant-allergenes)).
5. **Eine Spur hinterlassen**: Jede automatische Antwort bleibt im Verlauf sichtbar, damit Sie prüfen können, was in Ihrem Namen gesagt wurde.

## Was Meta berechnet

Die folgenden Angaben stammen von der Seite [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/pricing) von Meta, gelesen am 25. November 2026. Diese Seite spiegelt die Preisänderungen wider, die am 1. Oktober 2026 in Kraft getreten sind.

- **Abrechnungseinheit**: die Nachricht, seit dem 1. Juli 2025. Nur zugestellte Nachrichten werden berechnet. Meta berechnet keine Nachrichten von Nutzern an Unternehmen.
- **Der Preis hängt von zwei Kriterien ab**: der Nachrichtenkategorie und dem Markt, also der Landesvorwahl des Empfängers.
- **Kategorien**: Vorlagennachrichten (Marketing, Utility, Authentication) und Nachrichten ohne Vorlage (Service oder Meta Business Agent).
- **Kundenservice-Fenster**: Es öffnet sich, wenn der Gast Ihnen schreibt, dauert 24 Stunden und beginnt mit jeder neuen Nachricht des Gastes von vorn. Außerhalb dieses Fensters können nur Vorlagennachrichten gesendet werden.
- **Kostenloses Kontingent**: 1.000 kostenlose Servicenachrichten pro Monat und Geschäftsnummer, ohne Übertrag.
- **Seit dem 1. Oktober 2026**: Servicenachrichten werden ab der 1.001. des Monats berechnet, und Utility-Nachrichten in einem offenen Fenster sind wieder kostenpflichtig. Meta rät, vor dem 30. September 2026 eine Zahlungsmethode hinzuzufügen, andernfalls werden Servicenachrichten nach Verbrauch des kostenlosen Kontingents möglicherweise nicht mehr zugestellt.

Wir geben bewusst keinen Preis pro Nachricht an: Meta veröffentlicht eine Preisliste nach Land und Kategorie, in mehreren Währungen, und sie ändert sich. Prüfen Sie sie auf der Seite von Meta, bevor Sie kalkulieren.

## WhatsApp-Business-App oder API?

Die kostenlose WhatsApp-Business-App passt zu einem Restaurant, das selbst antwortet. Sobald eine KI antwortet, mehrere Personen dasselbe Postfach lesen oder der Verlauf zusammen mit Anrufen und Instagram aufbewahrt werden soll, braucht es die offizielle API. Der Unterschied ist erklärt in [WhatsApp Business: API oder App](/de/blog/whatsapp-business-api-ou-application-difference).

## Was Aevia Inbox zu WhatsApp sagt

Laut unserer Seite [WhatsApp Business](https://inbox.aevia.services/en/solutions/whatsapp-business):

- **Die Verbindung läuft über die integrierte Registrierung von Meta**: Sie erteilen die Freigabe, und Ihr WhatsApp-Business-Konto wird verknüpft. Ohne bestehendes Konto richten wir bei der Einrichtung eine Nummer ein.
- **Der Agent bearbeitet die üblichen Fragen** (Öffnungszeiten, Verfügbarkeit, Preise, Adresse, Bestellverfolgung) anhand dessen, was Sie ihm bereitgestellt haben; geht das Gespräch darüber hinaus, wird es Ihnen gemeldet.
- **Automatische Antworten lassen sich Kanal für Kanal abschalten**, jederzeit.
- **Nur Gespräche nach der Verbindung** werden im Postfach gespeichert: Der frühere Verlauf bleibt in der WhatsApp-App.

Zum Preis nennt die [Preisseite](https://inbox.aevia.services/en/pricing): Starter 79 €, Growth 99 €, Pro 199 €, Business 399 € und Scale 999 € pro Monat, eine einmalige Einrichtungsgebühr von 100 €, keine Vertragsbindung und 14 Tage Geld-zurück-Garantie. Eine Nachricht zählt als ein Versand oder ein Empfang, und eine automatische KI-Antwort zählt als gesendete Nachricht.

**Was wir nicht behaupten:** dass die Meta-Gebühren pro Nachricht in diesen Tarifen enthalten sind. Meta berechnet sie nach seiner eigenen Preisliste; verlangen Sie vor dem Abschluss eine schriftliche Antwort, von uns wie von jedem Anbieter. Wir behaupten auch nicht, dass jede WhatsApp-Bestellung automatisch an die Kasse übertragen wird.

## Fünf Fragen an jeden Anbieter eines WhatsApp-Agenten

1. Laufen meine Nachrichten über die offizielle API von Meta?
2. Sind die Meta-Gebühren pro Nachricht in Ihrem Preis enthalten oder werden sie zusätzlich berechnet?
3. Was tut der Agent, wenn ich die Allergenliste nicht geschrieben habe?
4. Kann ich jede in meinem Namen gesendete Antwort sehen und korrigieren?
5. Was geschieht mit meinem Verlauf, wenn ich kündige?`,
      faq: [
        {
          q: "Berechnet Meta die Nachrichten, die meine Gäste mir schicken?",
          a: "Nein. Laut der Preisseite von Meta werden Nachrichten von Nutzern an Unternehmen nicht berechnet.",
        },
        {
          q: "Wie viele WhatsApp-Nachrichten sind kostenlos?",
          a: "Meta gewährt jeder Geschäftsnummer 1.000 kostenlose Servicenachrichten pro Monat, ohne Übertrag. Darüber hinaus werden sie ab dem 1. Oktober 2026 berechnet.",
        },
        {
          q: "Was kostet eine WhatsApp-Nachricht?",
          a: "Das hängt von der Nachrichtenkategorie und dem Land des Empfängers ab. Meta veröffentlicht seine Preisliste nach Land und Kategorie auf seiner Preisseite; wir geben keinen Preis an.",
        },
        {
          q: "Sind die Meta-Gebühren in den Aevia-Tarifen enthalten?",
          a: "Das behaupten wir nicht. Meta berechnet seine Gebühren nach seiner Preisliste, und unsere Preisseite nennt diesen Punkt nicht: Verlangen Sie vor dem Abschluss eine schriftliche Antwort.",
        },
        {
          q: "Übernimmt Aevia meine alten WhatsApp-Nachrichten?",
          a: "Nein: Im Postfach werden nur Gespräche nach der Verbindung gespeichert. Der frühere Verlauf bleibt in der WhatsApp-App.",
        },
      ],
    },
    pt: {
      title: "Receber pedidos de um restaurante pelo WhatsApp: o que a Meta cobra",
      excerpt:
        "Receber os pedidos de um restaurante pelo WhatsApp: o que um agente deve fazer, o que a Meta cobra segundo a página oficial de preços (lida em 25 de novembro de 2026), o que a Aevia afirma e não afirma, e as perguntas a fazer antes de escolher uma ferramenta.",
      category: "CRM e Suporte",
      content: `## O essencial em 30 segundos

- **A Meta cobra o WhatsApp por mensagem** desde 1º de julho de 2025, e somente quando a mensagem é entregue. As mensagens que seus clientes enviam para você nunca são cobradas.
- **Cada número comercial tem 1.000 mensagens de serviço gratuitas por mês**, sem acúmulo de um mês para o outro.
- **A partir de 1º de outubro de 2026**, a Meta volta a cobrar as mensagens de serviço a partir da 1.001ª do mês.
- **Um agente que recebe um pedido** só oferece o que está no cardápio, relê o resumo e nunca chuta sobre uma alergia.

---

## O que um agente deve fazer com um pedido

Seja o agente nosso ou de outro fornecedor, é isto que se deve exigir antes de confiar pedidos a ele:

1. **Oferecer somente o que está no seu cardápio**, com os seus preços: um prato que não está lá é recusado, não inventado.
2. **Reler o resumo** (pratos, quantidades, observações, total) e esperar o "sim" do cliente antes de considerar o pedido recebido.
3. **Perguntar o horário de retirada e um primeiro nome**, e avisar uma pessoa sobre o que sair do comum.
4. **Nunca chutar sobre uma alergia**: sem uma lista escrita pelo restaurateur, o agente passa para uma pessoa (veja [nosso artigo sobre alérgenos](/pt/blog/agent-ia-restaurant-allergenes)).
5. **Deixar registro**: cada resposta automática permanece visível no histórico, para você verificar o que foi dito em seu nome.

## O que a Meta cobra

Os fatos abaixo vêm da página [Pricing on the WhatsApp Business Platform](https://developers.facebook.com/docs/whatsapp/pricing) da Meta, lida em 25 de novembro de 2026. Essa página reflete as mudanças de preços em vigor desde 1º de outubro de 2026.

- **Unidade de cobrança**: a mensagem, desde 1º de julho de 2025. Somente as mensagens entregues são cobradas. A Meta não cobra as mensagens dos usuários para as empresas.
- **A tarifa depende de dois critérios**: a categoria da mensagem e o mercado, isto é, o código do país do destinatário.
- **Categorias**: as mensagens de modelo (marketing, utility, authentication) e as mensagens sem modelo (service ou Meta Business Agent).
- **Janela de atendimento ao cliente**: ela se abre quando o cliente escreve para você, dura 24 horas e recomeça a cada nova mensagem do cliente. Fora dessa janela, só é possível enviar mensagens de modelo.
- **Gratuidade**: 1.000 mensagens de serviço gratuitas por mês por número comercial, sem acúmulo.
- **Desde 1º de outubro de 2026**: as mensagens de serviço são cobradas a partir da 1.001ª do mês, e as mensagens utility enviadas em uma janela aberta voltam a ser cobradas. A Meta aconselha adicionar uma forma de pagamento antes de 30 de setembro de 2026; caso contrário, as mensagens de serviço podem deixar de ser entregues depois que a cota gratuita acabar.

Não reproduzimos de propósito nenhum preço por mensagem: a Meta publica uma tabela por país e por categoria, em várias moedas, e ela muda. Consulte-a na página da Meta antes de calcular.

## Aplicativo WhatsApp Business ou API?

O aplicativo gratuito WhatsApp Business serve para um restaurante que responde sozinho. Assim que uma IA responde, várias pessoas leem a mesma caixa de entrada ou você quer guardar o histórico junto com as ligações e o Instagram, é preciso usar a API oficial. A diferença está detalhada em [WhatsApp Business: API ou aplicativo](/pt/blog/whatsapp-business-api-ou-application-difference).

## O que o Aevia Inbox diz sobre o WhatsApp

Segundo a nossa página [WhatsApp Business](https://inbox.aevia.services/pt-br/solutions/whatsapp-business):

- **A conexão passa pelo cadastro integrado da Meta**: você autoriza e a sua conta do WhatsApp Business é vinculada. Sem conta existente, providenciamos um número durante a implantação.
- **O agente cuida das perguntas do dia a dia** (horários, disponibilidade, preços, endereço, acompanhamento de pedido) a partir do que você forneceu; quando a conversa sai desse quadro, você é avisado.
- **As respostas automáticas podem ser desativadas canal por canal**, a qualquer momento.
- **Somente as conversas posteriores à conexão** ficam guardadas na caixa de entrada: o histórico anterior permanece no aplicativo do WhatsApp.

Quanto ao preço, a [página de Preços](https://inbox.aevia.services/pt-br/pricing) informa: Starter 79 €, Growth 99 €, Pro 199 €, Business 399 € e Scale 999 € por mês, uma taxa única de implantação de 100 €, sem fidelidade e 14 dias de garantia de satisfação ou reembolso. Uma mensagem conta como um envio ou um recebimento, e uma resposta automática da IA conta como mensagem enviada.

**O que não afirmamos:** que as tarifas da Meta por mensagem estejam incluídas nesses planos. A Meta as cobra segundo a própria tabela; peça uma resposta por escrito antes de contratar, a nós como a qualquer fornecedor. Também não afirmamos que cada pedido do WhatsApp seja enviado automaticamente ao caixa.

## Cinco perguntas para qualquer fornecedor de agente de WhatsApp

1. As minhas mensagens passam pela API oficial da Meta?
2. As tarifas da Meta por mensagem estão incluídas no seu preço ou são cobradas à parte?
3. O que o agente faz quando eu não escrevi a lista de alérgenos?
4. Posso ver e corrigir cada resposta enviada em meu nome?
5. O que acontece com o meu histórico se eu cancelar?`,
      faq: [
        {
          q: "A Meta cobra as mensagens que os meus clientes me enviam?",
          a: "Não. Segundo a página de preços da Meta, as mensagens dos usuários para as empresas não são cobradas.",
        },
        {
          q: "Quantas mensagens de WhatsApp são gratuitas?",
          a: "A Meta oferece a cada número comercial 1.000 mensagens de serviço gratuitas por mês, sem acúmulo. Acima disso, elas são cobradas a partir de 1º de outubro de 2026.",
        },
        {
          q: "Qual é o preço de uma mensagem de WhatsApp?",
          a: "Depende da categoria da mensagem e do país do destinatário. A Meta publica a tabela por país e categoria na sua página de preços; nós não reproduzimos nenhum preço.",
        },
        {
          q: "As tarifas da Meta fazem parte dos planos da Aevia?",
          a: "Não afirmamos isso. A Meta cobra suas tarifas segundo a própria tabela, e a nossa página de Preços não esclarece esse ponto: peça uma resposta por escrito antes de contratar.",
        },
        {
          q: "A Aevia importa as minhas mensagens antigas do WhatsApp?",
          a: "Não: somente as conversas posteriores à conexão ficam guardadas na caixa de entrada. O histórico anterior permanece no aplicativo do WhatsApp.",
        },
      ],
    },
  },
};
