import type { BlogPost } from "../blog-posts";

/*
  Article du 25/11/2026. Sources ouvertes le 25/11/2026 :
  - aide Google Business Profile « Répondre aux avis des clients »
    (support.google.com/business/answer/3474050) : validation de la fiche,
    délai 10 minutes / 30 jours, nom de l'établissement, notification du client ;
  - aide Google Business Profile « Conseils pour obtenir plus d'avis »
    (support.google.com/business/answer/3474122) : consignes de réponse,
    avantages interdits, lien ou QR code, compte Google ;
  - état d'Aevia : src/integrations/providers/google-business/ (skybot-inbox) —
    chaque appel échoue en 403 tant que Google n'a pas approuvé l'accès à
    l'API Google Business Profile.
  Les six réponses types sont des textes d'Aevia, pas des citations de Google.
  Aucun client cité : il n'y en a pas encore.
*/
export const AVIS_GOOGLE: BlogPost = {
  slug: "repondre-avis-google-restaurant",
  title: "Répondre aux avis Google d'un restaurant : méthode et six réponses types",
  excerpt:
    "Comment répondre aux avis Google de son restaurant selon l'aide officielle de Google : ce qu'il faut avoir validé, le délai de publication, les conseils de rédaction, six situations avec une réponse type, ce qui est interdit, et ce qu'Aevia fait ou non aujourd'hui.",
  date: "2026-11-25",
  readingTime: "7 min",
  category: "CRM & Support",
  content: `## À retenir en 30 secondes

- **Il faut avoir validé la fiche** de l'établissement chez Google pour répondre. La réponse paraît au nom du restaurant, sans votre nom personnel.
- **Google examine chaque réponse** avant de la publier : généralement 10 minutes, parfois jusqu'à 30 jours.
- **Offrir un avantage** (plat, remise, boisson) contre un avis, sa modification ou la suppression d'un avis négatif est strictement interdit par Google.
- **Une bonne réponse est courte, aimable et sans argument commercial**, et ne révèle rien de la vie privée du client.

---

## Ce que Google exige avant de répondre

Google indique qu'il faut valider son établissement avant de pouvoir répondre aux avis (voir l'[aide officielle de Google](https://support.google.com/business/answer/3474050?hl=fr), consultée le 25 novembre 2026).

- **La réponse est examinée** : Google vérifie qu'elle respecte son règlement relatif au contenu. L'examen prend généralement 10 minutes, mais peut durer jusqu'à 30 jours.
- **Elle apparaît au nom de l'établissement** : votre nom personnel n'est pas visible.
- **Le client est averti** de votre réponse et peut modifier son avis, dont la date est alors mise à jour.

## Les conseils de Google pour les réponses

Dans sa page de [conseils pour obtenir plus d'avis](https://support.google.com/business/answer/3474122?hl=fr), Google recommande :

- **d'être aimable et professionnel** : des réponses claires, utiles et polies ;
- **d'être bref** : les réponses trop longues peuvent lasser ;
- **de ne répondre que lorsque vous avez une information utile** : inutile de remercier publiquement chaque auteur ;
- **d'éviter les arguments vendeurs** : pas besoin d'offres ni de promotions ;
- **face à un avis négatif** : ne jamais partager les informations privées de l'auteur, ne pas l'attaquer, reconnaître les erreurs réelles sans endosser ce dont vous n'êtes pas responsable, signer de votre nom ou de vos initiales, et répondre rapidement.

## Six situations, une réponse type pour chacune

Les textes ci-dessous sont nos modèles d'écriture, pas des citations de Google. Adaptez-les aux faits réels de votre restaurant, et ne citez jamais le nom d'un client ni les détails de sa réservation.

### 1. L'avis positif sans commentaire

Rien n'oblige à répondre. Si vous le faites, restez bref. **Réponse type :** « Merci pour la note. Au plaisir de vous accueillir à nouveau. L'équipe du restaurant »

### 2. L'avis positif qui cite un plat ou une personne

Ici la réponse apporte quelque chose, à condition que ce soit vrai. **Réponse type :** « Merci pour ce retour. Nous transmettons votre message à la personne concernée, en cuisine ou en salle. À bientôt. »

### 3. L'attente trop longue

Reconnaissez le fait uniquement s'il est réel, sans inventer d'excuse. **Réponse type :** « Merci d'avoir pris le temps d'écrire. L'attente a été plus longue qu'elle ne devrait l'être et nous en sommes désolés. Si vous voulez nous en dire davantage, écrivez-nous à l'adresse indiquée sur notre fiche. »

### 4. Le plat décevant

**Réponse type :** « Nous sommes désolés que ce plat n'ait pas été à la hauteur. Nous en parlons avec la cuisine. Si vous nous indiquez le jour de votre visite par message, nous pourrons vérifier ce qui s'est passé. »

### 5. L'avis qui semble faux

Ne polémiquez pas en public. Google indique que vous pouvez signaler un avis qui ne respecte pas son règlement relatif au contenu (voir la [page d'aide sur les réponses aux avis](https://support.google.com/business/answer/3474050?hl=fr)). **Réponse type :** « Nous ne retrouvons pas la trace de cette visite et nous aimerions comprendre. Pouvez-vous nous contacter directement ? »

### 6. L'avis qui parle d'allergie ou de santé

Ne discutez pas du détail en public et ne minimisez pas. **Réponse type :** « Merci de nous avoir prévenus. Le sujet est sérieux pour nous. Merci de nous contacter directement par téléphone afin que nous comprenions ce qui s'est passé. »

Si un client décrit un vrai problème de santé, parlez-en à votre assureur : une réponse en ligne n'est pas le lieu pour qualifier les faits. Sur le rôle d'un agent IA face aux allergies, lisez [notre article sur les allergènes](/fr/blog/agent-ia-restaurant-allergenes).

## Ce qu'il ne faut pas faire

- **Offrir un avantage contre un avis.** Google le qualifie d'engagement artificiel et le déclare [strictement interdit](https://support.google.com/business/answer/3474122?hl=fr) : produits ou services gratuits ou à prix réduit contre un avis, sa modification ou la suppression d'un avis négatif. Cela inclut le dessert offert si le client retire son avis.
- **Prendre le ton de la promotion.** Google juge les offres inutiles dans une réponse.
- **Attaquer ou identifier le client**, sur Google comme ailleurs.
- **Répondre à chaud.** Ce conseil est le nôtre, pas celui de Google : attendez la fin du service avant de répondre à un avis qui vous met en colère.

## Demander des avis : ce que Google autorise

Google indique que vous pouvez inviter vos clients à cliquer sur un lien Google ou à scanner un QR code, et que les clients doivent être connectés à un compte Google pour laisser un avis (voir la [même page d'aide](https://support.google.com/business/answer/3474122?hl=fr)). Vous pouvez demander ; vous ne pouvez pas récompenser.

## Ce qu'Aevia fait et ne fait pas aujourd'hui

Aevia Inbox répond aux clients par [téléphone, WhatsApp, Instagram et e-mail](https://inbox.aevia.services/fr/solutions/reservation-restaurant). En revanche, **nous ne rédigeons ni ne publions de réponses aux avis Google à votre place aujourd'hui** : cela suppose l'accès à l'API Google Business Profile, qui doit être approuvé par Google, et cet accès n'est pas accordé à notre application à la date de cet article (25 novembre 2026). Les modèles ci-dessus se copient donc à la main, avec n'importe quel outil.

Si vous choisissez un outil qui publie des réponses à votre place, vérifiez qu'il dispose bien de cet accès et relisez chaque réponse avant publication : une réponse automatique non relue peut contredire les règles ci-dessus.`,
  faq: [
    {
      q: "Faut-il répondre à tous les avis Google ?",
      a: "Non. Google précise qu'il n'est pas nécessaire de remercier publiquement chaque auteur : répondez lorsque vous avez une information utile à apporter.",
    },
    {
      q: "Combien de temps avant que ma réponse apparaisse ?",
      a: "Selon Google, l'examen prend généralement 10 minutes, mais peut durer jusqu'à 30 jours.",
    },
    {
      q: "Puis-je offrir un dessert à un client mécontent ?",
      a: "Pas en échange d'un avis, de sa modification ou de la suppression d'un avis négatif : Google l'interdit strictement. Régler un litige réel en privé reste une affaire entre vous et votre client.",
    },
    {
      q: "Que faire d'un avis qui semble faux ?",
      a: "Ne polémiquez pas en public. Google indique que vous pouvez signaler un avis qui ne respecte pas son règlement relatif au contenu ; c'est Google qui décide.",
    },
    {
      q: "Aevia répond-il aux avis Google à ma place ?",
      a: "Non, pas aujourd'hui : l'accès à l'API Google Business Profile doit être approuvé par Google et ne l'est pas pour notre application à la date de cet article.",
    },
  ],
  i18n: {
    en: {
      title: "Replying to a restaurant's Google reviews: a method and six sample replies",
      excerpt:
        "How to reply to your restaurant's Google reviews according to Google's official help: what must be verified first, the publication delay, writing advice, six situations with a sample reply, what is prohibited, and what Aevia does and does not do today.",
      category: "CRM & Support",
      content: `## Key points in 30 seconds

- **You must have verified the business listing** with Google to reply. The reply appears under the restaurant's name, not your personal name.
- **Google reviews every reply** before publishing it: usually 10 minutes, sometimes up to 30 days.
- **Offering a benefit** (a dish, a discount, a drink) in exchange for a review, for changing it or for removing a negative one is strictly prohibited by Google.
- **A good reply is short, friendly and free of sales pitch**, and reveals nothing about the customer's private life.

---

## What Google requires before you reply

Google states that you must verify your business before you can reply to reviews (see [Google's official help](https://support.google.com/business/answer/3474050?hl=fr), read on November 25, 2026).

- **The reply is reviewed**: Google checks that it follows its content policy. The review usually takes 10 minutes, but can take up to 30 days.
- **It appears under the business's name**: your personal name is not visible.
- **The customer is notified** of your reply and can edit their review, whose date is then updated.

## Google's advice for replies

On its page of [tips for getting more reviews](https://support.google.com/business/answer/3474122?hl=fr), Google recommends:

- **being friendly and professional**: clear, helpful and polite replies;
- **being brief**: overly long replies can tire readers;
- **replying only when you have useful information**: there is no need to publicly thank every author;
- **avoiding sales pitches**: no need for offers or promotions;
- **for a negative review**: never share the author's private information, do not attack them, acknowledge real mistakes without taking the blame for what you are not responsible for, sign with your name or initials, and reply quickly.

## Six situations, one sample reply for each

The texts below are our own writing models, not quotations from Google. Adapt them to your restaurant's real facts, and never name a customer or give details of their booking.

### 1. The positive review with no comment

Nothing obliges you to reply. If you do, keep it short. **Sample reply:** "Thank you for the rating. We look forward to welcoming you again. The restaurant team"

### 2. The positive review that mentions a dish or a person

Here the reply adds something, provided it is true. **Sample reply:** "Thank you for the feedback. We are passing your message on to the person concerned, in the kitchen or on the floor. See you soon."

### 3. The wait was too long

Acknowledge the fact only if it is real, without inventing an excuse. **Sample reply:** "Thank you for taking the time to write. The wait was longer than it should have been and we are sorry. If you would like to tell us more, please write to us at the address shown on our listing."

### 4. The disappointing dish

**Sample reply:** "We are sorry that this dish did not live up to expectations. We are discussing it with the kitchen. If you tell us the day of your visit by message, we can check what happened."

### 5. The review that seems fake

Do not argue in public. Google states that you can report a review that does not follow its content policy (see the [help page on replying to reviews](https://support.google.com/business/answer/3474050?hl=fr)). **Sample reply:** "We cannot find any trace of this visit and we would like to understand. Could you contact us directly?"

### 6. The review that mentions an allergy or health

Do not discuss the details in public and do not play it down. **Sample reply:** "Thank you for letting us know. This is a serious matter for us. Please contact us directly by phone so that we can understand what happened."

If a customer describes a real health problem, talk to your insurer: an online reply is not the place to characterize the facts. On the role of an AI agent when allergies come up, read [our article on allergens](/en/blog/agent-ia-restaurant-allergenes).

## What not to do

- **Offer a benefit in exchange for a review.** Google calls it fake engagement and declares it [strictly prohibited](https://support.google.com/business/answer/3474122?hl=fr): free or discounted products or services in exchange for a review, for changing it or for removing a negative one. That includes a free dessert if the customer withdraws their review.
- **Adopt a promotional tone.** Google considers offers unnecessary in a reply.
- **Attack or identify the customer**, on Google or anywhere else.
- **Reply in the heat of the moment.** This advice is ours, not Google's: wait until the end of service before replying to a review that makes you angry.

## Asking for reviews: what Google allows

Google states that you can invite your customers to click a Google link or scan a QR code, and that customers must be signed in to a Google account to leave a review (see the [same help page](https://support.google.com/business/answer/3474122?hl=fr)). You may ask; you may not reward.

## What Aevia does and does not do today

Aevia Inbox answers customers by [phone, WhatsApp, Instagram and email](https://inbox.aevia.services/en/solutions/reservation-restaurant). However, **we do not write or publish replies to Google reviews on your behalf today**: that requires access to the Google Business Profile API, which Google must approve, and this access has not been granted to our application as of the date of this article (November 25, 2026). The models above can therefore be copied by hand, with any tool.

If you choose a tool that publishes replies for you, check that it really has this access and read every reply before it goes out: an unreviewed automatic reply can contradict the rules above.`,
      faq: [
        {
          q: "Do I have to reply to every Google review?",
          a: "No. Google states that there is no need to publicly thank every author: reply when you have useful information to add.",
        },
        {
          q: "How long before my reply appears?",
          a: "According to Google, the review usually takes 10 minutes, but can take up to 30 days.",
        },
        {
          q: "Can I offer a dessert to an unhappy customer?",
          a: "Not in exchange for a review, for changing it or for removing a negative one: Google strictly prohibits it. Settling a real dispute in private remains a matter between you and your customer.",
        },
        {
          q: "What should I do about a review that seems fake?",
          a: "Do not argue in public. Google states that you can report a review that does not follow its content policy; Google decides.",
        },
        {
          q: "Does Aevia reply to Google reviews for me?",
          a: "No, not today: access to the Google Business Profile API must be approved by Google and has not been granted to our application as of the date of this article.",
        },
      ],
    },
    es: {
      title: "Responder a las reseñas de Google de un restaurante: método y seis respuestas tipo",
      excerpt:
        "Cómo responder a las reseñas de Google de tu restaurante según la ayuda oficial de Google: qué hay que haber verificado, el plazo de publicación, consejos de redacción, seis situaciones con una respuesta tipo, qué está prohibido y qué hace o no hace Aevia hoy.",
      category: "CRM y Soporte",
      content: `## Lo esencial en 30 segundos

- **Hay que haber verificado la ficha** del establecimiento en Google para responder. La respuesta aparece con el nombre del restaurante, no con tu nombre personal.
- **Google revisa cada respuesta** antes de publicarla: normalmente 10 minutos, a veces hasta 30 días.
- **Ofrecer una ventaja** (un plato, un descuento, una bebida) a cambio de una reseña, de su modificación o de la eliminación de una reseña negativa está estrictamente prohibido por Google.
- **Una buena respuesta es breve, amable y sin argumentos comerciales**, y no revela nada de la vida privada del cliente.

---

## Lo que Google exige antes de responder

Google indica que hay que verificar el establecimiento antes de poder responder a las reseñas (consulta la [ayuda oficial de Google](https://support.google.com/business/answer/3474050?hl=fr), leída el 25 de noviembre de 2026).

- **La respuesta se revisa**: Google comprueba que cumple su política de contenido. La revisión suele tardar 10 minutos, pero puede durar hasta 30 días.
- **Aparece con el nombre del establecimiento**: tu nombre personal no es visible.
- **Se avisa al cliente** de tu respuesta y puede modificar su reseña, cuya fecha se actualiza entonces.

## Los consejos de Google para las respuestas

En su página de [consejos para conseguir más reseñas](https://support.google.com/business/answer/3474122?hl=fr), Google recomienda:

- **ser amable y profesional**: respuestas claras, útiles y educadas;
- **ser breve**: las respuestas demasiado largas pueden cansar;
- **responder solo cuando tengas información útil**: no hace falta dar las gracias públicamente a cada autor;
- **evitar los argumentos de venta**: no hacen falta ofertas ni promociones;
- **ante una reseña negativa**: no compartir nunca la información privada del autor, no atacarlo, reconocer los errores reales sin asumir lo que no es responsabilidad tuya, firmar con tu nombre o tus iniciales y responder rápido.

## Seis situaciones, una respuesta tipo para cada una

Los textos siguientes son nuestros modelos de redacción, no citas de Google. Adáptalos a los hechos reales de tu restaurante y no menciones nunca el nombre de un cliente ni los detalles de su reserva.

### 1. La reseña positiva sin comentario

Nada obliga a responder. Si lo haces, sé breve. **Respuesta tipo:** «Gracias por la valoración. Esperamos recibirle de nuevo. El equipo del restaurante»

### 2. La reseña positiva que cita un plato o a una persona

Aquí la respuesta aporta algo, siempre que sea cierto. **Respuesta tipo:** «Gracias por su comentario. Transmitimos su mensaje a la persona en cuestión, en cocina o en sala. Hasta pronto.»

### 3. La espera demasiado larga

Reconoce el hecho solo si es real, sin inventar una excusa. **Respuesta tipo:** «Gracias por tomarse el tiempo de escribir. La espera fue más larga de lo que debería y lo sentimos. Si desea contarnos más, escríbanos a la dirección indicada en nuestra ficha.»

### 4. El plato decepcionante

**Respuesta tipo:** «Sentimos que este plato no estuviera a la altura. Lo hablamos con la cocina. Si nos indica por mensaje el día de su visita, podremos comprobar qué ocurrió.»

### 5. La reseña que parece falsa

No polemices en público. Google indica que puedes denunciar una reseña que incumpla su política de contenido (consulta la [página de ayuda sobre cómo responder a las reseñas](https://support.google.com/business/answer/3474050?hl=fr)). **Respuesta tipo:** «No encontramos rastro de esta visita y nos gustaría entenderlo. ¿Puede contactarnos directamente?»

### 6. La reseña que habla de alergia o de salud

No discutas los detalles en público y no le quites importancia. **Respuesta tipo:** «Gracias por avisarnos. Para nosotros el asunto es serio. Le rogamos que nos contacte directamente por teléfono para que podamos entender lo ocurrido.»

Si un cliente describe un problema de salud real, habla con tu aseguradora: una respuesta en línea no es el lugar para calificar los hechos. Sobre el papel de un agente de IA ante las alergias, lee [nuestro artículo sobre alérgenos](/es/blog/agent-ia-restaurant-allergenes).

## Lo que no hay que hacer

- **Ofrecer una ventaja a cambio de una reseña.** Google lo califica de interacción artificial y lo declara [estrictamente prohibido](https://support.google.com/business/answer/3474122?hl=fr): productos o servicios gratuitos o con descuento a cambio de una reseña, de su modificación o de la eliminación de una reseña negativa. Incluye el postre gratis si el cliente retira su reseña.
- **Adoptar un tono promocional.** Google considera innecesarias las ofertas en una respuesta.
- **Atacar o identificar al cliente**, en Google o en cualquier otro sitio.
- **Responder en caliente.** Este consejo es nuestro, no de Google: espera al final del servicio antes de responder a una reseña que te enfade.

## Pedir reseñas: lo que Google permite

Google indica que puedes invitar a tus clientes a hacer clic en un enlace de Google o a escanear un código QR, y que los clientes deben haber iniciado sesión en una cuenta de Google para dejar una reseña (consulta la [misma página de ayuda](https://support.google.com/business/answer/3474122?hl=fr)). Puedes pedir; no puedes recompensar.

## Lo que Aevia hace y no hace hoy

Aevia Inbox atiende a los clientes por [teléfono, WhatsApp, Instagram y correo electrónico](https://inbox.aevia.services/es/solutions/reservation-restaurant). En cambio, **hoy no redactamos ni publicamos respuestas a las reseñas de Google en tu nombre**: eso requiere acceso a la API de Google Business Profile, que Google debe aprobar, y ese acceso no está concedido a nuestra aplicación en la fecha de este artículo (25 de noviembre de 2026). Por tanto, los modelos anteriores se copian a mano, con cualquier herramienta.

Si eliges una herramienta que publique respuestas por ti, comprueba que dispone realmente de ese acceso y revisa cada respuesta antes de publicarla: una respuesta automática sin revisar puede contradecir las reglas anteriores.`,
      faq: [
        {
          q: "¿Hay que responder a todas las reseñas de Google?",
          a: "No. Google precisa que no hace falta dar las gracias públicamente a cada autor: responde cuando tengas información útil que aportar.",
        },
        {
          q: "¿Cuánto tarda en aparecer mi respuesta?",
          a: "Según Google, la revisión suele tardar 10 minutos, pero puede durar hasta 30 días.",
        },
        {
          q: "¿Puedo ofrecer un postre a un cliente descontento?",
          a: "No a cambio de una reseña, de su modificación o de la eliminación de una reseña negativa: Google lo prohíbe estrictamente. Resolver un conflicto real en privado sigue siendo asunto entre tú y tu cliente.",
        },
        {
          q: "¿Qué hacer con una reseña que parece falsa?",
          a: "No polemices en público. Google indica que puedes denunciar una reseña que incumpla su política de contenido; la decisión es de Google.",
        },
        {
          q: "¿Responde Aevia a las reseñas de Google por mí?",
          a: "No, hoy no: el acceso a la API de Google Business Profile debe aprobarlo Google y no está concedido a nuestra aplicación en la fecha de este artículo.",
        },
      ],
    },
    de: {
      title: "Auf Google-Bewertungen eines Restaurants antworten: Methode und sechs Musterantworten",
      excerpt:
        "Wie Sie auf die Google-Bewertungen Ihres Restaurants antworten, nach der offiziellen Google-Hilfe: was zuvor bestätigt sein muss, die Veröffentlichungsdauer, Schreibtipps, sechs Situationen mit Musterantwort, was verboten ist und was Aevia heute tut und nicht tut.",
      category: "CRM & Support",
      content: `## Das Wichtigste in 30 Sekunden

- **Sie müssen den Eintrag Ihres Betriebs bei Google bestätigt haben**, um zu antworten. Die Antwort erscheint im Namen des Restaurants, nicht unter Ihrem persönlichen Namen.
- **Google prüft jede Antwort** vor der Veröffentlichung: in der Regel 10 Minuten, manchmal bis zu 30 Tage.
- **Einen Vorteil anzubieten** (ein Gericht, einen Rabatt, ein Getränk) im Austausch für eine Bewertung, ihre Änderung oder das Entfernen einer negativen Bewertung ist von Google streng verboten.
- **Eine gute Antwort ist kurz, freundlich und ohne Verkaufsargumente** und verrät nichts über das Privatleben des Gastes.

---

## Was Google vor einer Antwort verlangt

Google gibt an, dass Sie Ihren Betrieb bestätigen müssen, bevor Sie auf Bewertungen antworten können (siehe die [offizielle Google-Hilfe](https://support.google.com/business/answer/3474050?hl=fr), abgerufen am 25. November 2026).

- **Die Antwort wird geprüft**: Google kontrolliert, ob sie die Inhaltsrichtlinien einhält. Die Prüfung dauert in der Regel 10 Minuten, kann aber bis zu 30 Tage dauern.
- **Sie erscheint im Namen des Betriebs**: Ihr persönlicher Name ist nicht sichtbar.
- **Der Gast wird benachrichtigt** und kann seine Bewertung ändern; ihr Datum wird dann aktualisiert.

## Googles Hinweise für Antworten

Auf seiner Seite mit [Tipps für mehr Bewertungen](https://support.google.com/business/answer/3474122?hl=fr) empfiehlt Google:

- **freundlich und professionell zu sein**: klare, hilfreiche und höfliche Antworten;
- **sich kurz zu fassen**: zu lange Antworten können ermüden;
- **nur zu antworten, wenn Sie eine nützliche Information haben**: Sie müssen nicht jedem Verfasser öffentlich danken;
- **Verkaufsargumente zu vermeiden**: Angebote und Aktionen sind nicht nötig;
- **bei einer negativen Bewertung**: private Informationen des Verfassers nie weitergeben, ihn nicht angreifen, echte Fehler eingestehen, ohne die Verantwortung für Dinge zu übernehmen, für die Sie nichts können, mit Ihrem Namen oder Ihren Initialen unterschreiben und schnell antworten.

## Sechs Situationen, je eine Musterantwort

Die folgenden Texte sind unsere eigenen Schreibvorlagen, keine Zitate von Google. Passen Sie sie an die tatsächlichen Fakten Ihres Restaurants an und nennen Sie nie den Namen eines Gastes oder Einzelheiten seiner Reservierung.

### 1. Die positive Bewertung ohne Kommentar

Nichts zwingt Sie zu antworten. Wenn Sie es tun, fassen Sie sich kurz. **Musterantwort:** „Danke für die Bewertung. Wir freuen uns, Sie wieder bei uns zu begrüßen. Das Restaurantteam“

### 2. Die positive Bewertung, die ein Gericht oder eine Person nennt

Hier bringt die Antwort etwas, vorausgesetzt, es stimmt. **Musterantwort:** „Danke für Ihre Rückmeldung. Wir geben Ihre Nachricht an die betreffende Person in der Küche oder im Service weiter. Bis bald.“

### 3. Die zu lange Wartezeit

Räumen Sie den Sachverhalt nur ein, wenn er wirklich stimmt, und erfinden Sie keine Ausrede. **Musterantwort:** „Danke, dass Sie sich die Zeit genommen haben zu schreiben. Die Wartezeit war länger, als sie sein sollte, und das tut uns leid. Wenn Sie uns mehr erzählen möchten, schreiben Sie uns an die in unserem Eintrag angegebene Adresse.“

### 4. Das enttäuschende Gericht

**Musterantwort:** „Es tut uns leid, dass dieses Gericht Ihren Erwartungen nicht entsprochen hat. Wir besprechen es mit der Küche. Wenn Sie uns per Nachricht den Tag Ihres Besuchs nennen, können wir prüfen, was passiert ist.“

### 5. Die Bewertung, die falsch zu sein scheint

Streiten Sie nicht öffentlich. Google gibt an, dass Sie eine Bewertung melden können, die gegen seine Inhaltsrichtlinien verstößt (siehe die [Hilfeseite zum Antworten auf Bewertungen](https://support.google.com/business/answer/3474050?hl=fr)). **Musterantwort:** „Wir finden keine Spur dieses Besuchs und möchten es gern verstehen. Könnten Sie uns direkt kontaktieren?“

### 6. Die Bewertung, die eine Allergie oder Gesundheit erwähnt

Besprechen Sie die Einzelheiten nicht öffentlich und spielen Sie nichts herunter. **Musterantwort:** „Danke, dass Sie uns Bescheid gegeben haben. Das Thema ist für uns ernst. Bitte kontaktieren Sie uns direkt telefonisch, damit wir verstehen, was passiert ist.“

Wenn ein Gast ein echtes Gesundheitsproblem schildert, sprechen Sie mit Ihrer Versicherung: Eine Antwort im Netz ist nicht der Ort, um den Sachverhalt zu bewerten. Zur Rolle eines KI-Agenten bei Allergien lesen Sie [unseren Artikel über Allergene](/de/blog/agent-ia-restaurant-allergenes).

## Was Sie nicht tun sollten

- **Einen Vorteil gegen eine Bewertung anbieten.** Google nennt das künstliche Interaktion und erklärt es für [streng verboten](https://support.google.com/business/answer/3474122?hl=fr): kostenlose oder vergünstigte Produkte oder Leistungen im Austausch für eine Bewertung, ihre Änderung oder das Entfernen einer negativen Bewertung. Dazu gehört das Gratisdessert, wenn der Gast seine Bewertung zurückzieht.
- **Einen Werbeton anschlagen.** Google hält Angebote in einer Antwort für unnötig.
- **Den Gast angreifen oder identifizieren**, auf Google wie anderswo.
- **Im Zorn antworten.** Dieser Rat stammt von uns, nicht von Google: Warten Sie das Ende des Services ab, bevor Sie auf eine Bewertung antworten, die Sie ärgert.

## Bewertungen erbitten: was Google erlaubt

Google gibt an, dass Sie Ihre Gäste einladen können, auf einen Google-Link zu klicken oder einen QR-Code zu scannen, und dass Gäste in einem Google-Konto angemeldet sein müssen, um eine Bewertung zu schreiben (siehe die [gleiche Hilfeseite](https://support.google.com/business/answer/3474122?hl=fr)). Sie dürfen bitten; Sie dürfen nicht belohnen.

## Was Aevia heute tut und nicht tut

Aevia Inbox beantwortet Kundenanfragen per [Telefon, WhatsApp, Instagram und E-Mail](https://inbox.aevia.services/en/solutions/reservation-restaurant). Dagegen **verfassen oder veröffentlichen wir heute keine Antworten auf Google-Bewertungen in Ihrem Namen**: Dafür ist der Zugriff auf die Google-Business-Profile-API nötig, den Google genehmigen muss, und dieser Zugriff ist unserer Anwendung zum Datum dieses Artikels (25. November 2026) nicht erteilt. Die Vorlagen oben lassen sich daher von Hand kopieren, mit jedem beliebigen Werkzeug.

Wenn Sie ein Werkzeug wählen, das Antworten für Sie veröffentlicht, prüfen Sie, ob es diesen Zugriff wirklich hat, und lesen Sie jede Antwort vor der Veröffentlichung: Eine ungeprüfte automatische Antwort kann den obigen Regeln widersprechen.`,
      faq: [
        {
          q: "Muss ich auf jede Google-Bewertung antworten?",
          a: "Nein. Google stellt klar, dass Sie nicht jedem Verfasser öffentlich danken müssen: Antworten Sie, wenn Sie eine nützliche Information beizutragen haben.",
        },
        {
          q: "Wie lange dauert es, bis meine Antwort erscheint?",
          a: "Laut Google dauert die Prüfung in der Regel 10 Minuten, kann aber bis zu 30 Tage dauern.",
        },
        {
          q: "Darf ich einem verärgerten Gast ein Dessert anbieten?",
          a: "Nicht im Austausch für eine Bewertung, ihre Änderung oder das Entfernen einer negativen Bewertung: Google verbietet das streng. Einen echten Streitfall privat zu klären, bleibt Sache zwischen Ihnen und Ihrem Gast.",
        },
        {
          q: "Was tun bei einer Bewertung, die falsch zu sein scheint?",
          a: "Streiten Sie nicht öffentlich. Google gibt an, dass Sie eine Bewertung melden können, die gegen seine Inhaltsrichtlinien verstößt; Google entscheidet.",
        },
        {
          q: "Antwortet Aevia für mich auf Google-Bewertungen?",
          a: "Nein, heute nicht: Der Zugriff auf die Google-Business-Profile-API muss von Google genehmigt werden und ist unserer Anwendung zum Datum dieses Artikels nicht erteilt.",
        },
      ],
    },
    pt: {
      title: "Responder às avaliações do Google de um restaurante: método e seis respostas-modelo",
      excerpt:
        "Como responder às avaliações do Google do seu restaurante segundo a ajuda oficial do Google: o que precisa estar verificado, o prazo de publicação, dicas de redação, seis situações com uma resposta-modelo, o que é proibido e o que a Aevia faz ou não faz hoje.",
      category: "CRM e Suporte",
      content: `## O essencial em 30 segundos

- **É preciso ter verificado a ficha** do estabelecimento no Google para responder. A resposta aparece em nome do restaurante, não com o seu nome pessoal.
- **O Google analisa cada resposta** antes de publicá-la: normalmente 10 minutos, às vezes até 30 dias.
- **Oferecer uma vantagem** (um prato, um desconto, uma bebida) em troca de uma avaliação, da sua alteração ou da remoção de uma avaliação negativa é estritamente proibido pelo Google.
- **Uma boa resposta é curta, simpática e sem argumento de venda**, e não revela nada da vida privada do cliente.

---

## O que o Google exige antes de responder

O Google informa que é preciso verificar o estabelecimento antes de poder responder às avaliações (veja a [ajuda oficial do Google](https://support.google.com/business/answer/3474050?hl=fr), lida em 25 de novembro de 2026).

- **A resposta é analisada**: o Google verifica se ela respeita a política de conteúdo. A análise costuma levar 10 minutos, mas pode durar até 30 dias.
- **Ela aparece em nome do estabelecimento**: o seu nome pessoal não fica visível.
- **O cliente é avisado** da sua resposta e pode alterar a avaliação, cuja data é então atualizada.

## As dicas do Google para as respostas

Na sua página de [dicas para conseguir mais avaliações](https://support.google.com/business/answer/3474122?hl=fr), o Google recomenda:

- **ser simpático e profissional**: respostas claras, úteis e educadas;
- **ser breve**: respostas longas demais podem cansar;
- **responder só quando houver uma informação útil**: não é preciso agradecer publicamente a cada autor;
- **evitar argumentos de venda**: não há necessidade de ofertas nem de promoções;
- **diante de uma avaliação negativa**: nunca compartilhar as informações privadas do autor, não o atacar, reconhecer os erros reais sem assumir o que não é sua responsabilidade, assinar com o seu nome ou as suas iniciais e responder rápido.

## Seis situações, uma resposta-modelo para cada

Os textos abaixo são nossos modelos de redação, não citações do Google. Adapte-os aos fatos reais do seu restaurante e nunca cite o nome de um cliente nem os detalhes da reserva dele.

### 1. A avaliação positiva sem comentário

Nada obriga a responder. Se responder, seja breve. **Resposta-modelo:** "Obrigado pela nota. Esperamos recebê-lo novamente. A equipe do restaurante"

### 2. A avaliação positiva que cita um prato ou uma pessoa

Aqui a resposta acrescenta algo, desde que seja verdade. **Resposta-modelo:** "Obrigado pelo retorno. Estamos repassando a sua mensagem à pessoa em questão, na cozinha ou no salão. Até breve."

### 3. A espera longa demais

Reconheça o fato somente se ele for real, sem inventar desculpa. **Resposta-modelo:** "Obrigado por reservar um tempo para escrever. A espera foi mais longa do que deveria e sentimos muito. Se quiser nos contar mais, escreva para o endereço indicado na nossa ficha."

### 4. O prato decepcionante

**Resposta-modelo:** "Sentimos muito que este prato não tenha estado à altura. Vamos conversar sobre isso com a cozinha. Se você nos informar por mensagem o dia da sua visita, poderemos verificar o que aconteceu."

### 5. A avaliação que parece falsa

Não polemize em público. O Google informa que você pode denunciar uma avaliação que não respeite a política de conteúdo dele (veja a [página de ajuda sobre como responder às avaliações](https://support.google.com/business/answer/3474050?hl=fr)). **Resposta-modelo:** "Não encontramos registro dessa visita e gostaríamos de entender. Você poderia entrar em contato diretamente conosco?"

### 6. A avaliação que fala de alergia ou de saúde

Não discuta os detalhes em público e não minimize. **Resposta-modelo:** "Obrigado por nos avisar. O assunto é sério para nós. Entre em contato diretamente conosco por telefone para entendermos o que aconteceu."

Se um cliente descrever um problema de saúde real, converse com a sua seguradora: uma resposta on-line não é o lugar para qualificar os fatos. Sobre o papel de um agente de IA diante de alergias, leia [nosso artigo sobre alérgenos](/pt/blog/agent-ia-restaurant-allergenes).

## O que não fazer

- **Oferecer uma vantagem em troca de uma avaliação.** O Google chama isso de engajamento artificial e o declara [estritamente proibido](https://support.google.com/business/answer/3474122?hl=fr): produtos ou serviços grátis ou com desconto em troca de uma avaliação, da sua alteração ou da remoção de uma avaliação negativa. Isso inclui a sobremesa grátis se o cliente retirar a avaliação.
- **Adotar um tom promocional.** O Google considera as ofertas desnecessárias em uma resposta.
- **Atacar ou identificar o cliente**, no Google ou em qualquer outro lugar.
- **Responder no calor do momento.** Este conselho é nosso, não do Google: espere o fim do serviço antes de responder a uma avaliação que deixa você irritado.

## Pedir avaliações: o que o Google permite

O Google informa que você pode convidar seus clientes a clicar em um link do Google ou a ler um QR code, e que os clientes precisam estar conectados a uma conta Google para deixar uma avaliação (veja a [mesma página de ajuda](https://support.google.com/business/answer/3474122?hl=fr)). Você pode pedir; não pode recompensar.

## O que a Aevia faz e não faz hoje

O Aevia Inbox atende os clientes por [telefone, WhatsApp, Instagram e e-mail](https://inbox.aevia.services/pt-br/solutions/reservation-restaurant). Em contrapartida, **hoje não redigimos nem publicamos respostas às avaliações do Google em seu nome**: isso exige acesso à API do Google Business Profile, que o Google precisa aprovar, e esse acesso não foi concedido ao nosso aplicativo na data deste artigo (25 de novembro de 2026). Os modelos acima, portanto, são copiados à mão, com qualquer ferramenta.

Se você escolher uma ferramenta que publique respostas por você, verifique se ela realmente tem esse acesso e leia cada resposta antes da publicação: uma resposta automática sem revisão pode contradizer as regras acima.`,
      faq: [
        {
          q: "É preciso responder a todas as avaliações do Google?",
          a: "Não. O Google esclarece que não é necessário agradecer publicamente a cada autor: responda quando tiver uma informação útil a acrescentar.",
        },
        {
          q: "Quanto tempo leva para a minha resposta aparecer?",
          a: "Segundo o Google, a análise costuma levar 10 minutos, mas pode durar até 30 dias.",
        },
        {
          q: "Posso oferecer uma sobremesa a um cliente insatisfeito?",
          a: "Não em troca de uma avaliação, da sua alteração ou da remoção de uma avaliação negativa: o Google proíbe estritamente. Resolver uma disputa real em particular continua sendo assunto entre você e o seu cliente.",
        },
        {
          q: "O que fazer com uma avaliação que parece falsa?",
          a: "Não polemize em público. O Google informa que você pode denunciar uma avaliação que não respeite a política de conteúdo dele; quem decide é o Google.",
        },
        {
          q: "A Aevia responde às avaliações do Google por mim?",
          a: "Não, hoje não: o acesso à API do Google Business Profile precisa ser aprovado pelo Google e não foi concedido ao nosso aplicativo na data deste artigo.",
        },
      ],
    },
  },
};
