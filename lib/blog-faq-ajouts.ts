import type { BlogFaqItem } from "./blog-posts";

/*
  Questions-réponses des articles d'avant août 2026, qui n'avaient pas de FAQ
  structurée (audit de crawl du 2026-11-25 : 16 articles sur 34).

  Règle : chaque réponse ne reprend QUE ce que l'article dit déjà (synthèse de
  son bloc « À retenir » et de ses sections). Aucun chiffre, aucun client,
  aucune statistique nouvelle. La page affiche ces questions en clair sous
  l'article (voir `app/[locale]/blog/[slug]/page.tsx`) : un FAQPage dont les
  questions ne sont pas visibles est contraire aux consignes de Google.

  Français seulement : une traduction doit apporter sa propre `faq` dans
  `i18n` ; sans elle, la page traduite n'affiche ni n'annonce de FAQ.
*/
export const FAQ_AJOUTEES: Record<string, BlogFaqItem[]> = {
  "choisir-template-site-web": [
    {
      q: "Comment choisir un modèle de site web adapté à mon activité ?",
      a: "Partez de votre secteur et de votre cible : le design doit leur correspondre. Un joli modèle qui ne parle pas à vos clients coûte en crédibilité. Vérifiez ensuite qu'il est pensé pour le mobile d'abord et qu'il reste rapide.",
    },
    {
      q: "Pourquoi le mobile compte-t-il autant dans le choix d'un modèle ?",
      a: "Parce que la majorité du trafic web mondial vient des mobiles (la source est citée dans l'article). Un modèle conçu d'abord pour le mobile évite de perdre une grande partie des visiteurs.",
    },
    {
      q: "Jusqu'où peut-on personnaliser un modèle ?",
      a: "Assez pour accueillir votre identité (logo, couleurs, textes, photos) sans refaire tout le site. Si l'adaptation demande un chantier complet, le modèle n'est pas le bon.",
    },
    {
      q: "La vitesse est-elle aussi importante que le design ?",
      a: "Oui. Un beau site lent fait fuir les visiteurs : la performance fait partie des critères de choix, au même titre que l'esthétique.",
    },
  ],
  "rgpd-site-web-obligations-2026": [
    {
      q: "Quels documents un site web doit-il avoir pour le RGPD ?",
      a: "Trois : les mentions légales, la politique de confidentialité, et un bandeau de consentement aux cookies si vous suivez les visiteurs.",
    },
    {
      q: "Une case pré-cochée vaut-elle consentement ?",
      a: "Non. Le consentement doit être explicite : une case pré-cochée ne suffit pas.",
    },
    {
      q: "Les sanctions de la CNIL sont-elles réelles pour une PME ?",
      a: "Oui, elles sont réelles. L'article renvoie au bilan 2024 de la CNIL, qui chiffre les sanctions prononcées et le total des amendes.",
    },
    {
      q: "Combien de temps faut-il pour mettre un site vitrine en conformité ?",
      a: "L'article l'estime à un à deux jours pour un site vitrine classique.",
    },
  ],
  "erreurs-site-web-font-fuir-clients": [
    {
      q: "Quelles erreurs de site web font fuir les clients ?",
      a: "Cinq erreurs reviennent : un temps de chargement trop long, un message principal flou, un site mal adapté au mobile, l'absence d'appel à l'action visible, et des photos de mauvaise qualité.",
    },
    {
      q: "En combien de temps un visiteur doit-il comprendre mon offre ?",
      a: "Le message principal doit être compris en moins de 5 secondes, sinon le visiteur repart.",
    },
    {
      q: "Pourquoi un appel à l'action clair est-il nécessaire ?",
      a: "Si le visiteur ne sait pas quoi faire, il ne fait rien. Un bouton visible indique l'étape suivante.",
    },
    {
      q: "Comment faire le diagnostic de mon site rapidement ?",
      a: "L'article propose un diagnostic en 5 minutes : relire les cinq erreurs ci-dessus sur votre propre site, notamment sur un téléphone.",
    },
  ],
  "whatsapp-business-guide-pme": [
    {
      q: "Quelle différence entre WhatsApp Business et l'API WhatsApp Business ?",
      a: "WhatsApp Business est une application mobile gratuite pour les petites structures. La plateforme WhatsApp Business (API) est payante mais permet l'automatisation avancée.",
    },
    {
      q: "Mes clients doivent-ils installer quelque chose pour m'écrire ?",
      a: "Non. S'ils utilisent déjà WhatsApp, ils vous écrivent là où ils parlent à leurs proches.",
    },
    {
      q: "Que configurer en premier sur WhatsApp Business ?",
      a: "Le profil d'entreprise, un message de bienvenue, un message d'absence, des réponses rapides et des labels. Les messages de bienvenue et d'absence évitent de laisser un client sans réponse.",
    },
    {
      q: "Comment éviter de jongler entre plusieurs applications de messagerie ?",
      a: "En centralisant WhatsApp avec vos autres canaux dans une boîte de réception unifiée.",
    },
  ],
  "vitesse-site-web-optimisations": [
    {
      q: "Quelles optimisations accélèrent le plus un site web ?",
      a: "Cinq leviers : compresser et convertir les images, charger les éléments en différé (lazy loading), réduire les scripts tiers, mettre en cache efficacement, et passer à un hébergement performant.",
    },
    {
      q: "Pourquoi commencer par les images ?",
      a: "Les images sont souvent la partie la plus lourde d'une page : c'est là que le gain est le plus fort.",
    },
    {
      q: "À quoi sert un CDN ?",
      a: "Il rapproche vos fichiers des visiteurs éloignés de votre serveur.",
    },
    {
      q: "La vitesse influence-t-elle le référencement ?",
      a: "Oui : depuis 2021, les Core Web Vitals de Google influencent la position dans les résultats de recherche. Mesurez avant et après chaque changement.",
    },
  ],
  "repondre-avis-negatifs-reputation": [
    {
      q: "Comment répondre à un avis négatif ?",
      a: "En quatre temps : reconnaître l'expérience du client, s'expliquer brièvement sans se défendre, proposer une solution concrète, puis inviter à continuer en privé.",
    },
    {
      q: "Faut-il répondre tout de suite ?",
      a: "Non. Ne répondez jamais à chaud : attendez au moins 30 minutes avant de répondre à un avis négatif.",
    },
    {
      q: "Pourquoi répondre est-il important ?",
      a: "Parce que vos futurs clients lisent vos avis, et votre réponse compte autant que l'avis lui-même. Un mauvais avis bien géré rassure davantage qu'une page où tous les avis ont 5 étoiles, qui paraît fausse.",
    },
    {
      q: "Que faut-il éviter de faire ?",
      a: "L'article détaille les erreurs à ne jamais faire, à commencer par répondre sous le coup de l'émotion.",
    },
  ],
  "ia-support-client-pme": [
    {
      q: "Que peut faire l'IA dans le support client d'une PME ?",
      a: "Répondre en temps réel aux questions fréquentes, qualifier et trier les demandes, assurer des relances et des suivis automatiques, et rester disponible 24h/24.",
    },
    {
      q: "L'IA remplace-t-elle la relation humaine ?",
      a: "Non. Elle libère l'équipe des tâches répétitives sans valeur ajoutée. L'article précise aussi ce que l'IA ne doit pas faire et doit transmettre à une personne.",
    },
    {
      q: "Quelle part des demandes l'IA peut-elle traiter ?",
      a: "Une bonne part des demandes répétitives (horaires, tarifs, disponibilités, statut d'une commande). La part exacte dépend de ce que contient sa base de connaissances.",
    },
    {
      q: "Faut-il des compétences techniques pour la mettre en place ?",
      a: "Non, pas avec les outils modernes. L'article décrit la mise en place avec Aevia Inbox et ce qu'il faut mesurer avant et après.",
    },
  ],
  "securite-mots-de-passe-comptes-pros": [
    {
      q: "Pourquoi ne faut-il pas réutiliser un mot de passe ?",
      a: "Si un service est piraté, tous les comptes qui partagent ce mot de passe le sont aussi.",
    },
    {
      q: "À quoi sert un gestionnaire de mots de passe ?",
      a: "À donner à chaque compte un mot de passe long et unique, sans effort de mémoire (par exemple Bitwarden ou 1Password, cités dans l'article).",
    },
    {
      q: "L'authentification à deux facteurs est-elle nécessaire ?",
      a: "Oui : c'est le deuxième verrou le plus important. Activez-la partout où c'est possible.",
    },
    {
      q: "Quels comptes le phishing vise-t-il en premier ?",
      a: "Vos comptes professionnels : e-mail, CRM, banque, fournisseurs.",
    },
  ],
  "tunnel-conversion-landing-page": [
    {
      q: "Qu'est-ce qu'un tunnel de conversion ?",
      a: "La séquence d'étapes entre un visiteur inconnu et un client payant.",
    },
    {
      q: "Quelles sont les 4 étapes d'un tunnel efficace ?",
      a: "Capturer l'attention (la promesse), construire la confiance (la preuve), lever les objections (les frictions) et conclure par un appel à l'action sans friction.",
    },
    {
      q: "Que se passe-t-il sans tunnel structuré ?",
      a: "Les visiteurs repartent sans laisser de trace.",
    },
    {
      q: "Pourquoi mesurer chaque étape ?",
      a: "Sans analytics, on travaille à l'aveugle. Mesurer chaque étape montre où les visiteurs sont perdus ; l'A/B testing permet ensuite de tester avant de décider.",
    },
  ],
  "segmentation-clients-fidelisation": [
    {
      q: "Qu'est-ce que la segmentation client ?",
      a: "Diviser vos clients en groupes homogènes pour leur parler différemment.",
    },
    {
      q: "Quelles segmentations utiliser pour commencer ?",
      a: "Quatre bases : la segmentation RFM (récence, fréquence, montant), par canal de préférence, par type de besoin et par satisfaction.",
    },
    {
      q: "Pourquoi fidéliser plutôt qu'acquérir ?",
      a: "Selon les études et les secteurs, acquérir un client coûte nettement plus cher que d'en garder un (étude de la Harvard Business Review citée dans l'article) : fidéliser demande surtout de bien connaître ses clients.",
    },
    {
      q: "De quel outil a-t-on besoin ?",
      a: "Un CRM ou une boîte de réception unifiée, pour regrouper l'historique de chaque client.",
    },
  ],
  "optimiser-presence-en-ligne": [
    {
      q: "Comment optimiser sa présence en ligne en 2026 ?",
      a: "Cinq leviers : un site web professionnel, le SEO local, une fiche Google bien tenue, un choix de réseaux sociaux plutôt que tous à la fois, et un site rapide à charger.",
    },
    {
      q: "Pourquoi le SEO local compte-t-il ?",
      a: "Il aide à être trouvé par les gens qui cherchent près de chez vous.",
    },
    {
      q: "Faut-il être présent sur tous les réseaux sociaux ?",
      a: "Non : l'article conseille de choisir ceux où se trouvent vos clients plutôt que de tout faire.",
    },
    {
      q: "Par quoi commencer ?",
      a: "L'article se termine par une section « Par où commencer ? » qui ordonne ces cinq actions.",
    },
  ],
  "audit-securite-site-web": [
    {
      q: "Pourquoi auditer la sécurité d'un petit site ?",
      a: "Parce que la sécurité web ne concerne pas que les grandes entreprises : une faille peut apparaître à tout moment, sur n'importe quel site.",
    },
    {
      q: "Que contrôle un audit de sécurité web ?",
      a: "Le certificat SSL/HTTPS, les failles courantes du classement OWASP Top 10, les en-têtes HTTP de sécurité et la configuration DNS.",
    },
    {
      q: "Faut-il être développeur pour auditer son site ?",
      a: "Non : l'article explique comment le faire sans être développeur, avec un outil d'analyse.",
    },
    {
      q: "Un seul audit suffit-il ?",
      a: "Non. Le suivi continu est recommandé, parce qu'une faille peut apparaître après l'audit.",
    },
  ],
  "gestion-messages-clients-multicanal": [
    {
      q: "Pourquoi centraliser les messages clients ?",
      a: "Une boîte de réception dispersée allonge les temps de réponse, fait perdre ou oublier des messages et abîme l'image professionnelle.",
    },
    {
      q: "Qu'est-ce qu'une inbox unifiée ?",
      a: "Un outil qui rassemble au même endroit les messages de tous vos canaux de contact.",
    },
    {
      q: "Comment organiser la transition ?",
      a: "En quatre étapes : cartographier vos canaux actuels, choisir l'outil de centralisation, documenter vos réponses types et communiquer sur vos délais de réponse.",
    },
    {
      q: "Quel rôle pour l'IA ?",
      a: "Celui d'assistant dans la gestion des messages : l'article la présente comme une aide, pas comme un remplaçant de l'équipe.",
    },
  ],
  "creer-site-internet-bourg-en-bresse-ia": [
    {
      q: "Combien de temps faut-il réellement pour que mon site soit en ligne ?",
      a: "Sous 48 heures avec les formules Landing, Essentiel et Pro, et sous 5 à 7 jours pour un site Premium sur mesure. Le délai court à partir du paiement et de la réception de vos textes, photos et informations.",
    },
    {
      q: "Que faut-il préparer avant de se lancer ?",
      a: "Très peu : votre logo si vous en avez un, quelques photos de vos produits, locaux ou réalisations, et la liste de vos prestations principales.",
    },
    {
      q: "Combien coûte la création d'un site avec Aevia Launch ?",
      a: "Les tarifs sont publiés sur la page Tarifs d'Aevia Launch : paiement unique selon la formule, plus un hébergement mensuel. Consultez-la pour les montants à jour.",
    },
  ],
  "service-client-ia-lyon-automatisation-pme": [
    {
      q: "Quels canaux un service client IA doit-il couvrir ?",
      a: "Le chat du site, la boîte e-mail et la voix (téléphone) : ce sont les trois points de contact que l'article passe en revue.",
    },
    {
      q: "Que fait Aevia Inbox pour une PME ?",
      a: "Il centralise les messages dans un seul flux et répond à partir des informations que vous avez renseignées (documents, catalogue, FAQ), 24h/24.",
    },
    {
      q: "Que se passe-t-il quand une demande mérite une personne ?",
      a: "Elle vous est transmise avec le contexte de l'échange : privatisation, réclamation ou cas particulier ne sont pas laissés à l'IA.",
    },
    {
      q: "L'exemple du restaurant est-il un témoignage client ?",
      a: "Non. L'article le précise : c'est un exemple de calcul à refaire avec vos propres chiffres.",
    },
  ],
  "audit-securite-site-web-marseille-ia": [
    {
      q: "Que vérifie un audit de sécurité de site web ?",
      a: "Quatre points : la configuration DNS (SPF, DKIM, DMARC), le certificat SSL/TLS, les en-têtes de sécurité HTTP, et la présence d'adresses e-mail dans des fuites de données connues.",
    },
    {
      q: "Faut-il installer quelque chose pour utiliser Aevia Security ?",
      a: "Non : aucun plugin, aucun agent, aucune ligne de code. Il suffit de saisir l'adresse du site.",
    },
    {
      q: "Que contient le rapport ?",
      a: "Une note globale (de A+ à F) et, pour chaque faille repérée, une explication de son impact.",
    },
    {
      q: "Pourquoi le DMARC est-il souvent en cause ?",
      a: "Sans DMARC correctement configuré, il est plus facile d'envoyer des e-mails qui semblent venir de votre domaine. La correction consiste à ajouter des enregistrements DNS recommandés par l'outil.",
    },
  ],
};
