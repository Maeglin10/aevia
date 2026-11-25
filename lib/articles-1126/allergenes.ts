import type { BlogPost } from "../blog-posts";

/*
  Article du 25/11/2026. Sources ouvertes le 25/11/2026 :
  - règlement (UE) n° 1169/2011, EUR-Lex (CELEX:32011R1169), version française :
    article 9, paragraphe 1, point c) ; article 44, paragraphe 1 (denrées non
    préemballées : indication des mentions de l'article 9(1)(c) obligatoire) ;
    annexe II (14 substances) ;
  - services de l'État en Mayenne, « Allergènes : les allergènes à déclaration
    obligatoire » (mise à jour 18/01/2023) : restaurateurs concernés, référence
    au décret n° 2015-447 du 17 avril 2015 et aux articles R412-12, R412-14 et
    R412-16 du Code de la consommation ;
  - DIRECCTE Aquitaine, « Information du consommateur sur la présence
    d'allergènes… » (avril 2015) : information écrite, en un endroit apparent ;
    consommateur sur place mis en mesure d'y accéder librement et directement ;
    entrée en vigueur le 1er juillet 2015.
  Les pages economie.gouv.fr (DGCCRF), legifrance.gouv.fr et service-public.fr
  ont répondu 403 ou 404 depuis cette session : elles ne sont pas citées.
  Fonctionnement du filtre : src/common/allergenes/garde-fou-allergenes.ts
  (skybot-inbox) ; décision du fondateur d'Aevia du 1er novembre 2026.
*/
export const ALLERGENES: BlogPost = {
  slug: "agent-ia-restaurant-allergenes",
  title: "Agent IA et allergies au restaurant : ce qu'il ne doit jamais faire",
  excerpt:
    "Un agent IA qui répond aux clients d'un restaurant ne doit jamais deviner sur une allergie. Ce que disent les textes officiels, les trois règles qu'applique Aevia, pourquoi une simple consigne ne suffit pas, et cinq questions à poser à tout éditeur.",
  date: "2026-11-25",
  readingTime: "7 min",
  category: "CRM & Support",
  content: `## À retenir en 30 secondes

- **L'erreur dangereuse d'un agent IA de restaurant** est une affirmation fausse sur un allergène, comme « ce plat ne contient pas de gluten ».
- **Une consigne donnée au modèle se contourne** : « tu es sûr ? », « c'est pour un enfant », une reformulation. Il faut un filtre qui vérifie la réponse après le modèle.
- **La règle d'Aevia** : l'agent ne répond sur les allergènes qu'à partir d'une liste écrite par le restaurateur, mot pour mot. Sans liste, il ne devine pas : il transmet à une personne.
- **Ce n'est pas une promesse de risque zéro** : c'est un comportement que vous pouvez tester avant de signer.

---

## Ce que disent les textes officiels

Le règlement européen [(UE) n° 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) (version française sur EUR-Lex, consultée le 25 novembre 2026) rend obligatoire l'indication de toute substance de son annexe II présente dans un plat (article 9, paragraphe 1, point c). Pour les denrées proposées non préemballées, comme les plats d'un restaurant, son article 44 maintient cette obligation.

L'annexe II liste 14 familles de substances : les céréales contenant du gluten, les crustacés, les œufs, les poissons, les arachides, le soja, le lait, les fruits à coque, le céleri, la moutarde, les graines de sésame, l'anhydride sulfureux et les sulfites au-delà de 10 mg/kg ou 10 mg/litre, le lupin et les mollusques.

Pour la France, la page des [services de l'État en Mayenne](https://www.mayenne.gouv.fr/Actions-de-l-Etat/Agriculture-alimentation-sante-et-protection-animales/Securite-sanitaire-de-l-alimentation/Vous-etes-un-particulier-ou-un-professionnel/General/Allergenes-les-allergenes-a-declaration-obligatoire) (mise à jour le 18 janvier 2023) range les restaurateurs parmi les professionnels concernés et renvoie au décret n° 2015-447 du 17 avril 2015.

Un [document de la DIRECCTE Aquitaine](https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/ALLERGENES_270415.pdf), daté d'avril 2015, précise que l'information doit être écrite, à un endroit apparent, et que dans un restaurant le client doit pouvoir y accéder librement et directement. Ce document date de 2015 : vérifiez les textes en vigueur auprès de votre direction départementale de la protection des populations.

L'information sur les allergènes reste donc une obligation du restaurateur, et un agent IA n'en change ni la nature ni la responsabilité.

## Le risque

Un client écrit sur WhatsApp ou appelle : « La pizza quatre fromages contient-elle des noix ? Mon fils est allergique. » Un modèle de langue produit volontiers une réponse fluide et rassurante. Si elle est fausse, la conséquence n'est pas un client mécontent : c'est un risque pour sa santé. Pour un restaurant qui confie ses messages ou ses appels à une IA, c'est la première question à poser, avant le prix.

## Pourquoi une consigne ne suffit pas

On peut écrire dans les instructions du modèle : « ne réponds jamais sur les allergies sans information ». C'est une première couche utile, mais elle se contourne : un client insiste, change de formulation ou colle un texte qui tente de donner de nouvelles instructions à l'agent.

C'est pourquoi, dans Aevia Inbox, la règle n'est pas seulement dans la consigne : un **filtre déterministe est appliqué après le modèle**, dans la couche qui compose la réponse. Il ne demande pas au modèle d'être prudent ; il remplace sa phrase quand elle ne respecte pas la règle. Il agit des deux côtés :

- **Sur la question** : le client parle d'allergie, d'intolérance ou d'un allergène dans un contexte de risque.
- **Sur la réponse** : le modèle affirme une absence ou une innocuité (« ne contient pas de gluten », « sans arachide »). Ce détecteur se déclenche quelle que soit la façon dont la question a été posée.

## Les trois règles d'Aevia

1. **S'il existe une liste d'allergènes écrite par le restaurateur**, l'agent répond uniquement à partir d'elle, mot pour mot.
2. **S'il n'existe pas de liste**, l'agent ne devine pas : il note le plat et l'allergène concernés, puis transmet à une personne ou invite le client à appeler.
3. **Jamais** de « ce plat ne contient pas… » sans information écrite par vous.

Un oubli de configuration produit donc un agent prudent, pas un agent bavard. Cette règle est une décision du fondateur d'Aevia, prise le 1er novembre 2026, et conçue pour les agents écrits comme pour les agents vocaux.

## Ce que le filtre ne fait volontairement pas

Il ne se déclenche pas sur un simple nom d'ingrédient : « une pizza aux noix » est une commande, « un café sans lait » est une préférence. Un agent qui ne pourrait plus décrire la carte ni prendre une commande serait désinstallé le premier jour, et un garde-fou désinstallé ne protège personne. La règle vise les affirmations de sécurité, pas le vocabulaire de la carte.

## Ce que ça ne garantit pas

- **Aucun filtre n'est infaillible.** Le nôtre réduit le risque qu'une IA invente une réponse ; il ne remplace ni votre liste à jour ni la vigilance de votre équipe.
- **La liste est de votre responsabilité.** Si elle est fausse ou périmée, l'agent la répétera mot pour mot : mettez-la à jour à chaque changement de recette ou de fournisseur.
- **Les cas graves doivent aller à un humain.** Un client qui décrit une réaction allergique en cours doit être renvoyé vers les secours, pas vers un agent.

## La liste à préparer

Pour chaque plat, les allergènes présents parmi les 14 de l'annexe II, écrits par la personne qui connaît la recette, avec la date de la dernière vérification. Une page suffit, et c'est elle que l'agent citera.

## Cinq questions à poser à tout éditeur d'agent IA pour restaurant

1. Que répond votre agent si je n'ai pas fourni de liste d'allergènes ?
2. Le garde-fou est-il une consigne, ou un contrôle appliqué sur la réponse ?
3. Puis-je tester en me faisant passer pour un client insistant (« tu es sûr ? », « c'est pour un enfant ») ?
4. Où voit-on ce que l'agent a répondu : historique, transcription ?
5. Quand l'agent transfère, qui est prévenu, et comment ?

Le point 3 est le plus utile : testez-le vous-même avant de signer, avec les formulations qui vous inquiètent.

À lire aussi : [la prise de commande sur WhatsApp et ce que Meta facture](/fr/blog/commande-whatsapp-restaurant-cout-meta) et [les réservations de restaurant sans standardiste](https://inbox.aevia.services/fr/solutions/reservation-restaurant).`,
  faq: [
    {
      q: "Un agent IA peut-il répondre aux questions sur les allergènes ?",
      a: "Il peut restituer la liste que vous avez écrite. Il ne doit pas déduire du nom d'un plat ce qu'il contient.",
    },
    {
      q: "Que fait l'agent si le client dit être allergique mais que je n'ai rien saisi ?",
      a: "Dans Aevia Inbox, il ne devine pas : il prend le message (plat, allergène) et transmet à une personne, ou invite le client à appeler.",
    },
    {
      q: "Quels allergènes un restaurant doit-il indiquer ?",
      a: "Les 14 familles de substances de l'annexe II du règlement (UE) n° 1169/2011, dont le gluten, le lait, les œufs, les arachides et les fruits à coque, lorsqu'elles sont présentes dans un plat.",
    },
    {
      q: "L'agent IA m'exonère-t-il de mes obligations d'information ?",
      a: "Non. L'information sur les allergènes reste une obligation du restaurateur ; l'agent n'en change ni la nature ni la responsabilité.",
    },
    {
      q: "Cela rend-il l'agent inutilisable pour les commandes ?",
      a: "Non : le filtre ne bloque pas les noms d'ingrédients, donc « une pizza aux noix » reste une commande normale.",
    },
  ],
  i18n: {
    en: {
      title: "AI agents and allergies in restaurants: what they must never do",
      excerpt:
        "An AI agent that answers a restaurant's customers must never guess about an allergy. What the official texts say, the three rules Aevia applies, why a simple instruction is not enough, and five questions to ask any vendor.",
      category: "CRM & Support",
      content: `## Key points in 30 seconds

- **The dangerous mistake for a restaurant AI agent** is a false statement about an allergen, such as "this dish contains no gluten".
- **An instruction given to the model can be got around**: "are you sure?", "it's for a child", a rephrasing. You need a filter that checks the reply after the model.
- **Aevia's rule**: the agent answers about allergens only from a list written by the restaurateur, word for word. Without a list, it does not guess: it hands over to a person.
- **This is not a promise of zero risk**: it is a behavior you can test before you sign.

---

## What the official texts say

The European regulation [(EU) No 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) (French version on EUR-Lex, read on November 25, 2026) makes it mandatory to indicate any substance from its Annex II present in a dish (Article 9, paragraph 1, point c). For food offered non-prepacked, such as a restaurant's dishes, its Article 44 keeps this obligation.

Annex II lists 14 families of substances: cereals containing gluten, crustaceans, eggs, fish, peanuts, soybeans, milk, tree nuts, celery, mustard, sesame seeds, sulphur dioxide and sulphites above 10 mg/kg or 10 mg/litre, lupin and molluscs.

For France, the page of the [State services in Mayenne](https://www.mayenne.gouv.fr/Actions-de-l-Etat/Agriculture-alimentation-sante-et-protection-animales/Securite-sanitaire-de-l-alimentation/Vous-etes-un-particulier-ou-un-professionnel/General/Allergenes-les-allergenes-a-declaration-obligatoire) (updated January 18, 2023) lists restaurateurs among the professionals concerned and refers to decree No 2015-447 of April 17, 2015.

A [DIRECCTE Aquitaine document](https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/ALLERGENES_270415.pdf), dated April 2015, specifies that the information must be written, in a visible place, and that in a restaurant the customer must be able to access it freely and directly. That document dates from 2015: check the texts currently in force with your departmental consumer protection office.

Allergen information therefore remains the restaurateur's obligation, and an AI agent changes neither its nature nor the responsibility.

## The risk

A customer writes on WhatsApp or calls: "Does the four-cheese pizza contain nuts? My son is allergic." A language model readily produces a fluent, reassuring answer. If it is wrong, the consequence is not an unhappy customer: it is a risk to their health. For a restaurant that hands its messages or calls to an AI, this is the first question to ask, before the price.

## Why an instruction is not enough

You can write in the model's instructions: "never answer about allergies without information". It is a useful first layer, but it can be got around: a customer insists, rephrases, or pastes a text that tries to give the agent new instructions.

That is why, in Aevia Inbox, the rule is not only in the instruction: a **deterministic filter is applied after the model**, in the layer that composes the reply. It does not ask the model to be careful; it replaces its sentence when it does not follow the rule. It acts on both sides:

- **On the question**: the customer mentions an allergy, an intolerance or an allergen in a context of risk.
- **On the reply**: the model states an absence or harmlessness ("contains no gluten", "peanut-free"). This detector triggers however the question was phrased.

## Aevia's three rules

1. **If a list of allergens written by the restaurateur exists**, the agent answers only from it, word for word.
2. **If there is no list**, the agent does not guess: it notes the dish and the allergen concerned, then hands over to a person or invites the customer to call.
3. **Never** "this dish contains no…" without information written by you.

A configuration oversight therefore produces a cautious agent, not a chatty one. This rule is a decision of Aevia's founder, taken on November 1, 2026, and designed for written agents as well as voice agents.

## What the filter deliberately does not do

It does not trigger on a mere ingredient name: "a pizza with walnuts" is an order, "a coffee without milk" is a preference. An agent that could no longer describe the menu or take an order would be uninstalled on day one, and an uninstalled safeguard protects no one. The rule targets safety statements, not the menu's vocabulary.

## What this does not guarantee

- **No filter is infallible.** Ours reduces the risk of an AI inventing an answer; it replaces neither your up-to-date list nor your team's vigilance.
- **The list is your responsibility.** If it is wrong or out of date, the agent will repeat it word for word: update it with every recipe or supplier change.
- **Serious cases must go to a human.** A customer describing an allergic reaction in progress must be sent to emergency services, not to an agent.

## The list to prepare

For each dish, the allergens present among the 14 of Annex II, written by the person who knows the recipe, with the date of the last check. One page is enough, and it is the one the agent will quote.

## Five questions to ask any restaurant AI agent vendor

1. What does your agent answer if I have not provided an allergen list?
2. Is the safeguard an instruction, or a check applied to the reply?
3. Can I test it by posing as an insistent customer ("are you sure?", "it's for a child")?
4. Where can we see what the agent answered: history, transcript?
5. When the agent hands over, who is notified, and how?

Point 3 is the most useful: test it yourself before you sign, with the phrasings that worry you.

Read also: [taking orders on WhatsApp and what Meta charges](/en/blog/commande-whatsapp-restaurant-cout-meta) and [restaurant bookings without a receptionist](https://inbox.aevia.services/en/solutions/reservation-restaurant).`,
      faq: [
        {
          q: "Can an AI agent answer questions about allergens?",
          a: "It can restate the list you wrote. It must not deduce from a dish's name what it contains.",
        },
        {
          q: "What does the agent do if the customer says they are allergic but I have entered nothing?",
          a: "In Aevia Inbox, it does not guess: it takes the message (dish, allergen) and hands over to a person, or invites the customer to call.",
        },
        {
          q: "Which allergens must a restaurant declare?",
          a: "The 14 families of substances in Annex II of Regulation (EU) No 1169/2011, including gluten, milk, eggs, peanuts and tree nuts, when they are present in a dish.",
        },
        {
          q: "Does the AI agent relieve me of my information obligations?",
          a: "No. Allergen information remains the restaurateur's obligation; the agent changes neither its nature nor the responsibility.",
        },
        {
          q: "Does this make the agent unusable for orders?",
          a: "No: the filter does not block ingredient names, so \"a pizza with walnuts\" remains a normal order.",
        },
      ],
    },
    es: {
      title: "Agentes de IA y alergias en el restaurante: lo que nunca deben hacer",
      excerpt:
        "Un agente de IA que atiende a los clientes de un restaurante nunca debe adivinar sobre una alergia. Lo que dicen los textos oficiales, las tres reglas que aplica Aevia, por qué una simple instrucción no basta y cinco preguntas para cualquier proveedor.",
      category: "CRM y Soporte",
      content: `## Lo esencial en 30 segundos

- **El error peligroso de un agente de IA de restaurante** es una afirmación falsa sobre un alérgeno, como «este plato no contiene gluten».
- **Una instrucción dada al modelo se puede esquivar**: «¿seguro?», «es para un niño», una reformulación. Hace falta un filtro que compruebe la respuesta después del modelo.
- **La regla de Aevia**: el agente solo responde sobre alérgenos a partir de una lista escrita por el restaurador, palabra por palabra. Sin lista, no adivina: pasa el caso a una persona.
- **No es una promesa de riesgo cero**: es un comportamiento que puedes probar antes de firmar.

---

## Lo que dicen los textos oficiales

El reglamento europeo [(UE) n.º 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) (versión francesa en EUR-Lex, leída el 25 de noviembre de 2026) hace obligatoria la indicación de cualquier sustancia de su anexo II presente en un plato (artículo 9, apartado 1, letra c). Para los alimentos ofrecidos sin envasar, como los platos de un restaurante, su artículo 44 mantiene esta obligación.

El anexo II enumera 14 familias de sustancias: los cereales que contienen gluten, los crustáceos, los huevos, los pescados, los cacahuetes, la soja, la leche, los frutos de cáscara, el apio, la mostaza, los granos de sésamo, el dióxido de azufre y los sulfitos en concentraciones superiores a 10 mg/kg o 10 mg/litro, los altramuces y los moluscos.

Para Francia, la página de los [servicios del Estado en Mayenne](https://www.mayenne.gouv.fr/Actions-de-l-Etat/Agriculture-alimentation-sante-et-protection-animales/Securite-sanitaire-de-l-alimentation/Vous-etes-un-particulier-ou-un-professionnel/General/Allergenes-les-allergenes-a-declaration-obligatoire) (actualizada el 18 de enero de 2023) incluye a los restauradores entre los profesionales afectados y remite al decreto n.º 2015-447 de 17 de abril de 2015.

Un [documento de la DIRECCTE Aquitania](https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/ALLERGENES_270415.pdf), fechado en abril de 2015, precisa que la información debe ser escrita, en un lugar visible, y que en un restaurante el cliente debe poder acceder a ella libre y directamente. Ese documento es de 2015: comprueba los textos vigentes con tu dirección departamental de protección de la población.

La información sobre alérgenos sigue siendo, pues, una obligación del restaurador, y un agente de IA no cambia ni su naturaleza ni la responsabilidad.

## El riesgo

Un cliente escribe por WhatsApp o llama: «¿La pizza cuatro quesos lleva nueces? Mi hijo es alérgico.» Un modelo de lenguaje produce con gusto una respuesta fluida y tranquilizadora. Si es falsa, la consecuencia no es un cliente descontento: es un riesgo para su salud. Para un restaurante que confía sus mensajes o sus llamadas a una IA, es la primera pregunta que hacer, antes del precio.

## Por qué una instrucción no basta

Se puede escribir en las instrucciones del modelo: «nunca respondas sobre alergias sin información». Es una primera capa útil, pero se puede esquivar: un cliente insiste, cambia la formulación o pega un texto que intenta dar nuevas instrucciones al agente.

Por eso, en Aevia Inbox, la regla no está solo en la instrucción: se aplica un **filtro determinista después del modelo**, en la capa que compone la respuesta. No le pide al modelo que sea prudente; sustituye su frase cuando no respeta la regla. Actúa en ambos lados:

- **Sobre la pregunta**: el cliente habla de alergia, de intolerancia o de un alérgeno en un contexto de riesgo.
- **Sobre la respuesta**: el modelo afirma una ausencia o una inocuidad («no contiene gluten», «sin cacahuete»). Este detector se activa sea cual sea la forma de la pregunta.

## Las tres reglas de Aevia

1. **Si existe una lista de alérgenos escrita por el restaurador**, el agente responde únicamente a partir de ella, palabra por palabra.
2. **Si no existe lista**, el agente no adivina: anota el plato y el alérgeno en cuestión, y luego pasa el caso a una persona o invita al cliente a llamar.
3. **Nunca** un «este plato no contiene…» sin información escrita por ti.

Un descuido de configuración produce, por tanto, un agente prudente, no un agente charlatán. Esta regla es una decisión del fundador de Aevia, tomada el 1 de noviembre de 2026, y pensada para los agentes escritos igual que para los de voz.

## Lo que el filtro no hace a propósito

No se activa con un simple nombre de ingrediente: «una pizza con nueces» es un pedido, «un café sin leche» es una preferencia. Un agente que ya no pudiera describir la carta ni tomar un pedido se desinstalaría el primer día, y una salvaguarda desinstalada no protege a nadie. La regla apunta a las afirmaciones de seguridad, no al vocabulario de la carta.

## Lo que esto no garantiza

- **Ningún filtro es infalible.** El nuestro reduce el riesgo de que una IA invente una respuesta; no sustituye ni tu lista actualizada ni la vigilancia de tu equipo.
- **La lista es responsabilidad tuya.** Si es falsa o está desfasada, el agente la repetirá palabra por palabra: actualízala con cada cambio de receta o de proveedor.
- **Los casos graves deben ir a una persona.** Un cliente que describe una reacción alérgica en curso debe ser dirigido a los servicios de emergencia, no a un agente.

## La lista que hay que preparar

Para cada plato, los alérgenos presentes entre los 14 del anexo II, escritos por la persona que conoce la receta, con la fecha de la última comprobación. Basta una página, y es la que citará el agente.

## Cinco preguntas para cualquier proveedor de agentes de IA para restaurantes

1. ¿Qué responde su agente si no he facilitado una lista de alérgenos?
2. ¿La salvaguarda es una instrucción o un control aplicado a la respuesta?
3. ¿Puedo probarlo haciéndome pasar por un cliente insistente («¿seguro?», «es para un niño»)?
4. ¿Dónde se ve lo que ha respondido el agente: historial, transcripción?
5. Cuando el agente transfiere, ¿quién recibe el aviso y cómo?

El punto 3 es el más útil: pruébalo tú mismo antes de firmar, con las formulaciones que te preocupen.

Lee también: [los pedidos por WhatsApp y lo que cobra Meta](/es/blog/commande-whatsapp-restaurant-cout-meta) y [las reservas de restaurante sin telefonista](https://inbox.aevia.services/es/solutions/reservation-restaurant).`,
      faq: [
        {
          q: "¿Puede un agente de IA responder a preguntas sobre alérgenos?",
          a: "Puede reproducir la lista que has escrito. No debe deducir del nombre de un plato lo que contiene.",
        },
        {
          q: "¿Qué hace el agente si el cliente dice ser alérgico pero no he introducido nada?",
          a: "En Aevia Inbox, no adivina: toma el mensaje (plato, alérgeno) y lo pasa a una persona, o invita al cliente a llamar.",
        },
        {
          q: "¿Qué alérgenos debe indicar un restaurante?",
          a: "Las 14 familias de sustancias del anexo II del Reglamento (UE) n.º 1169/2011, entre ellas el gluten, la leche, los huevos, los cacahuetes y los frutos de cáscara, cuando están presentes en un plato.",
        },
        {
          q: "¿Me exime el agente de IA de mis obligaciones de información?",
          a: "No. La información sobre alérgenos sigue siendo una obligación del restaurador; el agente no cambia ni su naturaleza ni la responsabilidad.",
        },
        {
          q: "¿Hace esto que el agente sea inútil para los pedidos?",
          a: "No: el filtro no bloquea los nombres de ingredientes, así que «una pizza con nueces» sigue siendo un pedido normal.",
        },
      ],
    },
    de: {
      title: "KI-Agenten und Allergien im Restaurant: was sie nie tun dürfen",
      excerpt:
        "Ein KI-Agent, der die Gäste eines Restaurants betreut, darf bei einer Allergie nie raten. Was die offiziellen Texte sagen, die drei Regeln von Aevia, warum eine einfache Anweisung nicht genügt und fünf Fragen an jeden Anbieter.",
      category: "CRM & Support",
      content: `## Das Wichtigste in 30 Sekunden

- **Der gefährliche Fehler eines KI-Agenten im Restaurant** ist eine falsche Aussage über ein Allergen, etwa „dieses Gericht enthält kein Gluten“.
- **Eine dem Modell gegebene Anweisung lässt sich umgehen**: „sicher?“, „es ist für ein Kind“, eine Umformulierung. Es braucht einen Filter, der die Antwort nach dem Modell prüft.
- **Die Regel von Aevia**: Der Agent antwortet zu Allergenen nur anhand einer vom Gastronomen geschriebenen Liste, Wort für Wort. Ohne Liste rät er nicht: Er übergibt an eine Person.
- **Das ist kein Versprechen von null Risiko**: Es ist ein Verhalten, das Sie vor der Unterschrift testen können.

---

## Was die offiziellen Texte sagen

Die europäische Verordnung [(EU) Nr. 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) (französische Fassung auf EUR-Lex, gelesen am 25. November 2026) macht die Angabe jedes Stoffes aus ihrem Anhang II, der in einem Gericht enthalten ist, verpflichtend (Artikel 9 Absatz 1 Buchstabe c). Für lose angebotene Lebensmittel, wie die Gerichte eines Restaurants, behält ihr Artikel 44 diese Pflicht bei.

Anhang II nennt 14 Stofffamilien: glutenhaltiges Getreide, Krebstiere, Eier, Fisch, Erdnüsse, Soja, Milch, Schalenfrüchte, Sellerie, Senf, Sesamsamen, Schwefeldioxid und Sulphite in Konzentrationen von mehr als 10 mg/kg oder 10 mg/Liter, Lupinen und Weichtiere.

Für Frankreich führt die Seite der [staatlichen Dienststellen in der Mayenne](https://www.mayenne.gouv.fr/Actions-de-l-Etat/Agriculture-alimentation-sante-et-protection-animales/Securite-sanitaire-de-l-alimentation/Vous-etes-un-particulier-ou-un-professionnel/General/Allergenes-les-allergenes-a-declaration-obligatoire) (aktualisiert am 18. Januar 2023) Gastronomen unter den betroffenen Berufsgruppen auf und verweist auf das Dekret Nr. 2015-447 vom 17. April 2015.

Ein [Dokument der DIRECCTE Aquitaine](https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/ALLERGENES_270415.pdf) vom April 2015 stellt klar, dass die Information schriftlich und an gut sichtbarer Stelle erfolgen muss und dass der Gast im Restaurant frei und direkt darauf zugreifen können muss. Dieses Dokument stammt aus dem Jahr 2015: Prüfen Sie die geltenden Texte bei Ihrer örtlichen Verbraucherschutzbehörde.

Die Allergeninformation bleibt also Pflicht des Gastronomen, und ein KI-Agent ändert weder ihre Art noch die Verantwortung.

## Das Risiko

Ein Gast schreibt auf WhatsApp oder ruft an: „Enthält die Pizza Quattro Formaggi Nüsse? Mein Sohn ist allergisch.“ Ein Sprachmodell liefert bereitwillig eine flüssige, beruhigende Antwort. Ist sie falsch, ist die Folge kein verärgerter Gast, sondern ein Risiko für seine Gesundheit. Für ein Restaurant, das seine Nachrichten oder Anrufe einer KI anvertraut, ist das die erste Frage, noch vor dem Preis.

## Warum eine Anweisung nicht genügt

Man kann in die Anweisungen des Modells schreiben: „antworte nie zu Allergien ohne Information“. Das ist eine nützliche erste Schicht, aber sie lässt sich umgehen: Ein Gast hakt nach, formuliert um oder fügt einen Text ein, der dem Agenten neue Anweisungen geben will.

Deshalb steht die Regel in Aevia Inbox nicht nur in der Anweisung: Ein **deterministischer Filter wird nach dem Modell angewendet**, in der Schicht, die die Antwort zusammensetzt. Er bittet das Modell nicht um Vorsicht; er ersetzt seinen Satz, wenn dieser die Regel nicht einhält. Er wirkt auf beiden Seiten:

- **Auf die Frage**: Der Gast spricht von einer Allergie, einer Unverträglichkeit oder einem Allergen in einem Risikokontext.
- **Auf die Antwort**: Das Modell behauptet eine Abwesenheit oder Unbedenklichkeit („enthält kein Gluten“, „ohne Erdnuss“). Dieser Detektor greift, egal wie die Frage gestellt wurde.

## Die drei Regeln von Aevia

1. **Wenn eine vom Gastronomen geschriebene Allergenliste existiert**, antwortet der Agent ausschließlich anhand dieser Liste, Wort für Wort.
2. **Wenn es keine Liste gibt**, rät der Agent nicht: Er notiert das Gericht und das betroffene Allergen und übergibt dann an eine Person oder lädt den Gast zum Anruf ein.
3. **Nie** ein „dieses Gericht enthält kein…“ ohne von Ihnen geschriebene Information.

Ein Konfigurationsversäumnis ergibt also einen vorsichtigen Agenten, keinen geschwätzigen. Diese Regel ist eine Entscheidung des Gründers von Aevia vom 1. November 2026 und gilt der Konzeption nach für schriftliche wie für Sprachagenten.

## Was der Filter bewusst nicht tut

Er greift nicht bei einem bloßen Zutatennamen: „eine Pizza mit Walnüssen“ ist eine Bestellung, „ein Kaffee ohne Milch“ ist ein Wunsch. Ein Agent, der die Karte nicht mehr beschreiben oder keine Bestellung mehr aufnehmen könnte, würde am ersten Tag deinstalliert, und ein deinstalliertes Schutzsystem schützt niemanden. Die Regel zielt auf Sicherheitsaussagen, nicht auf das Vokabular der Karte.

## Was das nicht garantiert

- **Kein Filter ist unfehlbar.** Unserer verringert das Risiko, dass eine KI eine Antwort erfindet; er ersetzt weder Ihre aktuelle Liste noch die Aufmerksamkeit Ihres Teams.
- **Die Liste liegt in Ihrer Verantwortung.** Ist sie falsch oder veraltet, wiederholt der Agent sie Wort für Wort: Aktualisieren Sie sie bei jeder Rezept- oder Lieferantenänderung.
- **Ernste Fälle müssen an einen Menschen gehen.** Ein Gast, der eine laufende allergische Reaktion schildert, muss an den Rettungsdienst verwiesen werden, nicht an einen Agenten.

## Die vorzubereitende Liste

Für jedes Gericht die enthaltenen Allergene unter den 14 des Anhangs II, geschrieben von der Person, die das Rezept kennt, mit dem Datum der letzten Prüfung. Eine Seite genügt, und aus ihr zitiert der Agent.

## Fünf Fragen an jeden Anbieter von KI-Agenten für Restaurants

1. Was antwortet Ihr Agent, wenn ich keine Allergenliste bereitgestellt habe?
2. Ist die Schutzvorkehrung eine Anweisung oder eine auf die Antwort angewendete Kontrolle?
3. Kann ich es testen, indem ich mich als hartnäckiger Gast ausgebe („sicher?“, „es ist für ein Kind“)?
4. Wo sieht man, was der Agent geantwortet hat: Verlauf, Transkript?
5. Wenn der Agent übergibt, wer wird benachrichtigt, und wie?

Punkt 3 ist der nützlichste: Testen Sie ihn selbst vor der Unterschrift, mit den Formulierungen, die Sie beunruhigen.

Lesen Sie auch: [Bestellungen über WhatsApp und was Meta berechnet](/de/blog/commande-whatsapp-restaurant-cout-meta) und [Restaurantreservierungen ohne Telefonzentrale](https://inbox.aevia.services/en/solutions/reservation-restaurant).`,
      faq: [
        {
          q: "Kann ein KI-Agent Fragen zu Allergenen beantworten?",
          a: "Er kann die Liste wiedergeben, die Sie geschrieben haben. Er darf aus dem Namen eines Gerichts nicht ableiten, was darin enthalten ist.",
        },
        {
          q: "Was tut der Agent, wenn der Gast sagt, er sei allergisch, ich aber nichts eingetragen habe?",
          a: "In Aevia Inbox rät er nicht: Er nimmt die Nachricht (Gericht, Allergen) auf und übergibt an eine Person oder lädt den Gast zum Anruf ein.",
        },
        {
          q: "Welche Allergene muss ein Restaurant angeben?",
          a: "Die 14 Stofffamilien aus Anhang II der Verordnung (EU) Nr. 1169/2011, darunter Gluten, Milch, Eier, Erdnüsse und Schalenfrüchte, wenn sie in einem Gericht enthalten sind.",
        },
        {
          q: "Befreit mich der KI-Agent von meinen Informationspflichten?",
          a: "Nein. Die Allergeninformation bleibt Pflicht des Gastronomen; der Agent ändert weder ihre Art noch die Verantwortung.",
        },
        {
          q: "Macht das den Agenten für Bestellungen unbrauchbar?",
          a: "Nein: Der Filter blockiert keine Zutatennamen, „eine Pizza mit Walnüssen“ bleibt also eine normale Bestellung.",
        },
      ],
    },
    pt: {
      title: "Agentes de IA e alergias no restaurante: o que eles nunca devem fazer",
      excerpt:
        "Um agente de IA que atende os clientes de um restaurante nunca deve chutar sobre uma alergia. O que dizem os textos oficiais, as três regras que a Aevia aplica, por que uma simples instrução não basta e cinco perguntas para qualquer fornecedor.",
      category: "CRM e Suporte",
      content: `## O essencial em 30 segundos

- **O erro perigoso de um agente de IA de restaurante** é uma afirmação falsa sobre um alérgeno, como "este prato não contém glúten".
- **Uma instrução dada ao modelo pode ser contornada**: "tem certeza?", "é para uma criança", uma reformulação. É preciso um filtro que verifique a resposta depois do modelo.
- **A regra da Aevia**: o agente só responde sobre alérgenos a partir de uma lista escrita pelo restaurateur, palavra por palavra. Sem lista, ele não chuta: passa para uma pessoa.
- **Isso não é uma promessa de risco zero**: é um comportamento que você pode testar antes de assinar.

---

## O que dizem os textos oficiais

O regulamento europeu [(UE) n.º 1169/2011](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32011R1169) (versão francesa no EUR-Lex, lida em 25 de novembro de 2026) torna obrigatória a indicação de qualquer substância do seu anexo II presente em um prato (artigo 9, parágrafo 1, alínea c). Para os alimentos oferecidos sem embalagem, como os pratos de um restaurante, o artigo 44 mantém essa obrigação.

O anexo II lista 14 famílias de substâncias: os cereais que contêm glúten, os crustáceos, os ovos, os peixes, os amendoins, a soja, o leite, as frutas de casca rija, o aipo, a mostarda, as sementes de gergelim, o dióxido de enxofre e os sulfitos em concentrações superiores a 10 mg/kg ou 10 mg/litro, o tremoço e os moluscos.

Para a França, a página dos [serviços do Estado na Mayenne](https://www.mayenne.gouv.fr/Actions-de-l-Etat/Agriculture-alimentation-sante-et-protection-animales/Securite-sanitaire-de-l-alimentation/Vous-etes-un-particulier-ou-un-professionnel/General/Allergenes-les-allergenes-a-declaration-obligatoire) (atualizada em 18 de janeiro de 2023) inclui os restaurateurs entre os profissionais envolvidos e remete ao decreto n.º 2015-447 de 17 de abril de 2015.

Um [documento da DIRECCTE Aquitânia](https://nouvelle-aquitaine.dreets.gouv.fr/sites/nouvelle-aquitaine.dreets.gouv.fr/IMG/pdf/ALLERGENES_270415.pdf), datado de abril de 2015, esclarece que a informação deve ser escrita, em local visível, e que em um restaurante o cliente deve poder acessá-la livre e diretamente. Esse documento é de 2015: confirme os textos em vigor junto ao órgão departamental de proteção do consumidor.

A informação sobre alérgenos continua, portanto, sendo uma obrigação do restaurateur, e um agente de IA não muda nem a natureza dela nem a responsabilidade.

## O risco

Um cliente escreve pelo WhatsApp ou liga: "A pizza quatro queijos leva nozes? Meu filho é alérgico." Um modelo de linguagem produz de bom grado uma resposta fluida e tranquilizadora. Se ela estiver errada, a consequência não é um cliente insatisfeito: é um risco para a saúde dele. Para um restaurante que confia suas mensagens ou suas ligações a uma IA, essa é a primeira pergunta a fazer, antes do preço.

## Por que uma instrução não basta

Pode-se escrever nas instruções do modelo: "nunca responda sobre alergias sem informação". É uma primeira camada útil, mas pode ser contornada: um cliente insiste, muda a formulação ou cola um texto que tenta dar novas instruções ao agente.

Por isso, no Aevia Inbox, a regra não está só na instrução: um **filtro determinístico é aplicado depois do modelo**, na camada que compõe a resposta. Ele não pede ao modelo que seja prudente; ele substitui a frase dele quando ela não respeita a regra. Ele age dos dois lados:

- **Sobre a pergunta**: o cliente fala de alergia, de intolerância ou de um alérgeno em um contexto de risco.
- **Sobre a resposta**: o modelo afirma uma ausência ou uma inocuidade ("não contém glúten", "sem amendoim"). Esse detector é acionado seja qual for a forma da pergunta.

## As três regras da Aevia

1. **Se existe uma lista de alérgenos escrita pelo restaurateur**, o agente responde somente a partir dela, palavra por palavra.
2. **Se não existe lista**, o agente não chuta: anota o prato e o alérgeno em questão, depois passa para uma pessoa ou convida o cliente a ligar.
3. **Nunca** um "este prato não contém…" sem informação escrita por você.

Um esquecimento de configuração produz, portanto, um agente prudente, não um agente tagarela. Essa regra é uma decisão do fundador da Aevia, tomada em 1º de novembro de 2026, e concebida tanto para os agentes escritos quanto para os de voz.

## O que o filtro de propósito não faz

Ele não é acionado por um simples nome de ingrediente: "uma pizza com nozes" é um pedido, "um café sem leite" é uma preferência. Um agente que não pudesse mais descrever o cardápio nem receber um pedido seria desinstalado no primeiro dia, e uma salvaguarda desinstalada não protege ninguém. A regra visa as afirmações de segurança, não o vocabulário do cardápio.

## O que isso não garante

- **Nenhum filtro é infalível.** O nosso reduz o risco de uma IA inventar uma resposta; ele não substitui nem a sua lista atualizada nem a vigilância da sua equipe.
- **A lista é de sua responsabilidade.** Se estiver errada ou desatualizada, o agente a repetirá palavra por palavra: atualize-a a cada mudança de receita ou de fornecedor.
- **Os casos graves devem ir para um humano.** Um cliente que descreve uma reação alérgica em curso deve ser encaminhado aos serviços de emergência, não a um agente.

## A lista a preparar

Para cada prato, os alérgenos presentes entre os 14 do anexo II, escritos pela pessoa que conhece a receita, com a data da última verificação. Uma página basta, e é dela que o agente vai citar.

## Cinco perguntas para qualquer fornecedor de agentes de IA para restaurantes

1. O que o seu agente responde se eu não forneci uma lista de alérgenos?
2. A salvaguarda é uma instrução ou um controle aplicado à resposta?
3. Posso testar me passando por um cliente insistente ("tem certeza?", "é para uma criança")?
4. Onde se vê o que o agente respondeu: histórico, transcrição?
5. Quando o agente transfere, quem é avisado, e como?

O ponto 3 é o mais útil: teste você mesmo antes de assinar, com as formulações que o preocupam.

Leia também: [os pedidos pelo WhatsApp e o que a Meta cobra](/pt/blog/commande-whatsapp-restaurant-cout-meta) e [as reservas de restaurante sem telefonista](https://inbox.aevia.services/pt-br/solutions/reservation-restaurant).`,
      faq: [
        {
          q: "Um agente de IA pode responder a perguntas sobre alérgenos?",
          a: "Ele pode reproduzir a lista que você escreveu. Ele não deve deduzir pelo nome de um prato o que ele contém.",
        },
        {
          q: "O que o agente faz se o cliente diz ser alérgico mas eu não cadastrei nada?",
          a: "No Aevia Inbox, ele não chuta: pega a mensagem (prato, alérgeno) e passa para uma pessoa, ou convida o cliente a ligar.",
        },
        {
          q: "Quais alérgenos um restaurante deve indicar?",
          a: "As 14 famílias de substâncias do anexo II do Regulamento (UE) n.º 1169/2011, entre elas glúten, leite, ovos, amendoins e frutas de casca rija, quando presentes em um prato.",
        },
        {
          q: "O agente de IA me isenta das minhas obrigações de informação?",
          a: "Não. A informação sobre alérgenos continua sendo uma obrigação do restaurateur; o agente não muda nem a natureza dela nem a responsabilidade.",
        },
        {
          q: "Isso torna o agente inutilizável para pedidos?",
          a: "Não: o filtro não bloqueia nomes de ingredientes, então \"uma pizza com nozes\" continua sendo um pedido normal.",
        },
      ],
    },
  },
};
