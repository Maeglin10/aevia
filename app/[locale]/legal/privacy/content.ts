// Full translations of the Privacy Policy. Rendered by page.tsx via useLocale().
// FR is the authoritative source; en/es/de/pt are faithful legal translations
// (RGPD art. 12 — information in a language accessible to the visitor).

export interface Processor {
  name: string;
  tag: string;
  desc: string;
  transfer: string;
  href: string;
  linkLabel: string;
}

export interface PrivacyContent {
  lastUpdated: string;
  title: string;
  intro: string;
  s1: {
    heading: string;
    lead: string;
    entity: string;
    directorLabel: string;
    sirenLabel: string;
    sirenValue: string;
    countryLabel: string;
    country: string;
    addressLabel: string;
    address: string;
    contactLabel: string;
    dpoLabel: string;
  };
  s2: { heading: string; lead: string; products: { name: string; desc: string }[] };
  s3: {
    heading: string;
    h31: string; lead31: string; items31: string[];
    h32: string; lead32: string; items32: string[]; note32Pre: string; note32Strong: string; note32Post: string;
    h33: string; items33: string[];
    h34: string; items34: string[];
    h35: string; text35: string;
    h36: string; items36: string[];
    h37: string; p37a: string; items37: string[]; p37b: string; note37Strong: string; note37Post: string;
  };
  s4: { heading: string; bases: { title: string; desc: string }[] };
  s5: { heading: string; colCat: string; colDur: string; rows: [string, string][] };
  s6: { heading: string; lead: string; processors: Processor[] };
  s7: { heading: string; p1a: string; p1cct: string; p1b: string; p2a: string };
  s8: {
    heading: string; lead: string; rights: { title: string; desc: string }[];
    exerciseTitle: string; exerciseP1a: string; exerciseP1b: string; exerciseP1c: string;
    complaintA: string; complaintCnil: string; complaintB: string;
  };
  s9: { heading: string; p1a: string; p1strong: string; p1b: string; p2a: string; p2subject: string };
  s10: { heading: string; p1: string; p2a: string; p2link: string };
  s11: { heading: string; lead: string; items: string[] };
  s12: { heading: string; text: string };
  s13: { heading: string; title: string; emailLabel: string; generalLabel: string; controllerLabel: string; controllerValue: string };
  disclaimer: string;
}

const fr: PrivacyContent = {
  lastUpdated: 'Dernière mise à jour : 14 juin 2026',
  title: 'Politique de Confidentialité',
  intro:
    'La présente Politique de Confidentialité décrit la manière dont Aevia collecte, utilise, conserve et protège vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi française Informatique et Libertés.',
  s1: {
    heading: '1. Responsable du traitement',
    lead: 'Le responsable du traitement de vos données personnelles est :',
    entity: 'entrepreneur individuel (auto-entrepreneur)',
    directorLabel: 'Directeur de la publication',
    sirenLabel: 'SIREN',
    sirenValue: '852 546 225 — RCS Bourg-en-Bresse',
    countryLabel: "Pays d'établissement",
    country: 'France',
    addressLabel: 'Adresse',
    address: 'Adresse du siège social communiquée sur demande à valentinmilliand@aevia.services',
    contactLabel: 'Contact',
    dpoLabel: 'Contact DPO / Vie privée',
  },
  s2: {
    heading: '2. Produits concernés par cette politique',
    lead: "La présente politique s'applique à l'ensemble des produits et services commercialisés sous la marque Aevia :",
    products: [
      { name: 'Aevia Inbox', desc: '(inbox.aevia.services) — CRM multi-canal B2B. Centralise les conversations webchat, email et voix (WhatsApp et Instagram à venir) pour les entreprises. Abonnement mensuel (79, 99, 199, 399 ou 999 €/mois HT selon le palier ; devise adaptée à la région).' },
      { name: 'AeviaLaunch', desc: "(launch.aevia.services) — Générateur de sites web assisté par IA. Crée des sites web professionnels à partir de données de formulaire. Paiement unique (599 €, 899 € ou 1 499 €) + maintenance optionnelle 20 €/mois." },
      { name: 'AeviaSecurity', desc: "(security.aevia.services) — Plateforme d'audit de sécurité automatisé. Analyse SSL, DNS, performances et failles de sécurité de sites web. Scan gratuit + prestations correctives à la carte (forfait unique, de 149 € à 2 490 € HT selon le périmètre)." },
    ],
  },
  s3: {
    heading: '3. Données personnelles collectées',
    h31: "3.1 Données de compte et d'identification",
    lead31: "Lors de la création d'un compte sur l'un de nos services, nous collectons :",
    items31: ['Nom et prénom', 'Adresse email professionnelle', "Nom de l'entreprise", 'Numéro de téléphone (optionnel)', 'Mot de passe (stocké sous forme de hash bcrypt, jamais en clair)', 'Adresse IP de connexion et informations de navigateur (User-Agent)'],
    h32: '3.2 Données de conversations et de clients finaux (Aevia Inbox)',
    lead32: "Dans le cadre d'Aevia Inbox, nos clients (les entreprises abonnées) nous transmettent des données relatives à leurs propres clients finaux. Ces données incluent notamment :",
    items32: ['Noms et identifiants des contacts (WhatsApp, Instagram, email)', 'Contenu des conversations (textes, médias, pièces jointes)', 'Historique des échanges et horodatages', 'Métadonnées de livraison et de lecture des messages', 'Données analytiques (volumes de messages, taux de réponse)'],
    note32Pre: 'Note importante : Pour ces données, Aevia agit en qualité de ',
    note32Strong: 'sous-traitant',
    note32Post: " au sens du RGPD. Le client abonné demeure responsable du traitement vis-à-vis de ses propres clients finaux. Un accord de traitement des données (DPA) est disponible sur demande à privacy@aevia.services.",
    h33: '3.3 Données d\'audit (AeviaSecurity)',
    items33: ['URL et noms de domaine soumis à l\'analyse', 'Résultats des audits SSL, DNS, sécurité et performances', 'Historique des audits effectués'],
    h34: '3.4 Données de génération de site (AeviaLaunch)',
    items34: ["Informations saisies dans le formulaire de création (secteur d'activité, description, charte graphique, textes)", 'Contenu généré par l\'IA à partir de ces informations', 'Fichiers uploadés (logos, images)'],
    h35: '3.5 Données de paiement',
    text35: 'Les paiements sont traités exclusivement par Stripe. Aevia ne collecte ni ne stocke jamais vos coordonnées bancaires. Nous ne conservons que les références de transaction Stripe, l\'historique des abonnements et les montants facturés.',
    h36: '3.6 Données de navigation et logs',
    items36: ['Adresse IP (pseudonymisée)', 'Pages visitées, durée de session', 'Logs techniques (erreurs, performances)', 'Statistiques d\'usage agrégées via Google Analytics 4, uniquement si vous acceptez les cookies de mesure'],
    h37: '3.7 Connexion via Google (Google Sign-In)',
    p37a: "Vous pouvez créer votre compte Aevia et vous connecter à l'ensemble des produits Aevia (Inbox, Launch, Security) à l'aide de votre compte Google. Lorsque vous choisissez « Se connecter avec Google », nous accédons uniquement aux données suivantes, avec votre autorisation explicite via l'écran de consentement Google :",
    items37: ['Votre adresse email Google', 'Votre nom et prénom', 'Votre photo de profil Google (le cas échéant)'],
    p37b: "Ces données sont utilisées exclusivement pour : créer et identifier votre compte Aevia unique, vous authentifier de façon sécurisée, et pré-remplir votre profil. Nous n'accédons à aucune autre donnée de votre compte Google (Gmail, Drive, Contacts, Agenda, etc.) et ne demandons aucun périmètre (scope) sensible ou restreint.",
    note37Strong: 'Conformité Google API Services User Data Policy : ',
    note37Post: "L'utilisation et le transfert par Aevia des informations reçues des API Google respectent la Google API Services User Data Policy, y compris ses exigences d'utilisation limitée (Limited Use). Les données Google ne sont jamais vendues, ni utilisées à des fins publicitaires, ni transférées à des tiers sauf pour fournir ou améliorer le service, se conformer à la loi, ou avec votre consentement explicite. Aucune donnée Google n'est utilisée pour entraîner des modèles d'IA.",
  },
  s4: {
    heading: '4. Bases légales des traitements (RGPD Art. 6)',
    bases: [
      { title: 'Art. 6.1.b — Exécution du contrat', desc: 'Traitement des données de compte, des abonnements, de la facturation et de la fourniture des services (Inbox, Launch, Security). Sans ces données, nous ne pouvons pas vous fournir les services souscrits.' },
      { title: 'Art. 6.1.c — Obligation légale', desc: 'Conservation des données de facturation (10 ans conformément au Code de commerce français), lutte contre la fraude, obligations fiscales.' },
      { title: 'Art. 6.1.f — Intérêt légitime', desc: 'Amélioration de nos services, sécurité technique de nos infrastructures, détection de comportements abusifs, statistiques d\'usage agrégées.' },
      { title: 'Art. 6.1.a — Consentement', desc: 'Envoi de communications marketing et newsletters. Vous pouvez retirer votre consentement à tout moment via le lien de désinscription présent dans chaque email.' },
    ],
  },
  s5: {
    heading: '5. Durées de conservation des données',
    colCat: 'Catégorie de données',
    colDur: 'Durée de conservation',
    rows: [
      ['Données de compte (actif)', 'Durée de la relation contractuelle'],
      ['Données de compte (après résiliation)', '3 ans (prescription commerciale)'],
      ['Données de facturation et contrats', '10 ans (obligation légale)'],
      ['Conversations Inbox', "Durée de l'abonnement + 6 mois"],
      ['Résultats d\'audits AeviaSecurity', '12 mois à compter de l\'audit'],
      ['Données de site généré (AeviaLaunch)', 'Livraison + 6 mois (support)'],
      ['Logs techniques', '90 jours'],
      ['Données de prospection (consentement)', '3 ans à compter du dernier contact'],
    ],
  },
  s6: {
    heading: '6. Destinataires des données et sous-traitants',
    lead: 'Aevia ne vend jamais vos données personnelles à des tiers. Nous faisons appel aux prestataires suivants, chacun lié par des garanties contractuelles conformes au RGPD :',
    processors: [
      { name: 'Stripe, Inc.', tag: 'Paiements', desc: 'Traitement de l\'ensemble des paiements par carte bancaire et gestion des abonnements récurrents. Stripe est certifié PCI DSS niveau 1.', transfer: 'Transfert international : États-Unis — Stripe adhère aux Clauses Contractuelles Types (CCT) de la Commission européenne.', href: 'https://stripe.com/fr/privacy', linkLabel: 'Politique de confidentialité Stripe' },
      { name: 'Anthropic, PBC', tag: 'IA — Launch & Inbox', desc: "Traitement des données du formulaire de création pour la génération de contenu web via l'API Claude (Aevia Launch). Dans Aevia Inbox, l'API Claude analyse également certains messages entrants (filtrage de sécurité et assistance aux réponses). Les données soumises à l'API Anthropic ne sont pas utilisées pour entraîner les modèles (conformément à notre accord API commercial).", transfer: 'Transfert international : États-Unis — Anthropic est soumis aux CCT et garanties équivalentes.', href: 'https://www.anthropic.com/privacy', linkLabel: 'Politique de confidentialité Anthropic' },
      { name: 'Railway Corp.', tag: 'Hébergement back-end', desc: "Hébergement des serveurs back-end (API NestJS) et exécution des traitements applicatifs. L'infrastructure de calcul est située aux États-Unis.", transfer: 'Transfert international : États-Unis — encadré par les Clauses Contractuelles Types (CCT) de la Commission européenne.', href: 'https://railway.app/legal/privacy', linkLabel: 'Politique de confidentialité Railway' },
      { name: 'Neon, Inc.', tag: 'Base de données', desc: 'Base de données PostgreSQL gérée où sont stockées les données applicatives (comptes, conversations, contacts, historique des messages). Les données sont hébergées dans l\'Union européenne (région de Francfort, Allemagne).', transfer: 'Localisation : Union européenne — aucun transfert hors UE pour la base de données principale.', href: 'https://neon.tech/privacy-policy', linkLabel: 'Politique de confidentialité Neon' },
      { name: 'Upstash, Inc.', tag: "Cache / file d'attente", desc: 'Cache et file d\'attente de messages éphémère (Redis) accélérant le traitement des conversations. Les données n\'y sont conservées que de façon transitoire, le temps du traitement.', transfer: 'Transfert international : hors Union européenne — encadré par les Clauses Contractuelles Types (CCT).', href: 'https://upstash.com/trust/privacy.pdf', linkLabel: 'Politique de confidentialité Upstash' },
      { name: 'Groq, Inc.', tag: 'IA — Aevia Inbox', desc: "Inférence de modèles de langage pour les réponses automatiques des agents d'Aevia Inbox (traitement du texte des messages reçus). Les données envoyées à l'API Groq ne sont pas utilisées pour entraîner des modèles.", transfer: 'Transfert international : États-Unis — encadré par les Clauses Contractuelles Types (CCT).', href: 'https://groq.com/privacy-policy/', linkLabel: 'Politique de confidentialité Groq' },
      { name: 'Vercel, Inc.', tag: 'CDN / Front-end', desc: 'Hébergement et distribution des interfaces front-end (Next.js). Vercel agit comme réseau de diffusion de contenu (CDN) avec des nœuds de cache à travers le monde.', transfer: 'Transfert international : États-Unis — Vercel est conforme aux CCT.', href: 'https://vercel.com/legal/privacy-policy', linkLabel: 'Politique de confidentialité Vercel' },
      { name: 'Meta Platforms, Inc.', tag: 'API — Aevia Inbox', desc: "Accès aux API WhatsApp Business, Instagram Messaging et Facebook Messenger pour la réception et l'envoi de messages dans Aevia Inbox. Les messages transitent par l'infrastructure Meta avant d'être reçus par nos serveurs.", transfer: 'Transfert international : États-Unis — Meta opère sous les CCT européennes.', href: 'https://www.facebook.com/privacy/policy', linkLabel: 'Politique de confidentialité Meta' },
      { name: 'Google LLC', tag: 'Authentification (Google Sign-In)', desc: "Service d'authentification « Se connecter avec Google » (Google OAuth 2.0). Lorsque vous l'utilisez, nous recevons votre email, votre nom et votre photo de profil pour créer et sécuriser votre compte Aevia unique. Aucun périmètre sensible n'est demandé. L'usage des données respecte la Google API Services User Data Policy (Limited Use).", transfer: 'Transfert international : États-Unis — Google opère sous les Clauses Contractuelles Types (CCT).', href: 'https://policies.google.com/privacy', linkLabel: 'Politique de confidentialité Google' },
      { name: 'Google Analytics 4 — Google Ireland Ltd', tag: 'Statistiques', desc: "Mesure d'audience. Le tag n'est chargé qu'après votre acceptation explicite du bandeau : si vous refusez, aucun cookie de mesure n'est déposé et rien n'est transmis à Google. Si vous acceptez, les cookies _ga et _ga_* sont posés pour 13 mois et les données peuvent être traitées hors de l'Union européenne par Google LLC, sur la base du Data Privacy Framework. L'anonymisation d'IP est activée.", transfer: '', href: 'https://policies.google.com/privacy', linkLabel: 'Politique de confidentialité Google' },
    ],
  },
  s7: {
    heading: '7. Transferts de données hors Union européenne',
    p1a: 'Certains de nos sous-traitants (Stripe, Anthropic, Groq, Railway, Upstash, Vercel, Meta) sont établis aux États-Unis. Ces transferts sont encadrés par des ',
    p1cct: 'Clauses Contractuelles Types (CCT)',
    p1b: " adoptées par la Commission européenne conformément à l'article 46 du RGPD, garantissant un niveau de protection équivalent à celui offert au sein de l'Espace économique européen. Notre base de données principale (Neon) est en revanche hébergée dans l'Union européenne (Francfort), sans transfert hors UE.",
    p2a: 'Pour obtenir une copie des garanties mises en place ou plus d\'informations sur ces transferts, vous pouvez nous contacter à privacy@aevia.services.',
  },
  s8: {
    heading: '8. Vos droits sur vos données personnelles',
    lead: 'Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants concernant vos données personnelles :',
    rights: [
      { title: "Droit d'accès (Art. 15)", desc: 'Obtenir une copie de toutes les données personnelles que nous détenons sur vous.' },
      { title: 'Droit de rectification (Art. 16)', desc: 'Faire corriger des données inexactes ou compléter des données incomplètes.' },
      { title: "Droit à l'effacement (Art. 17)", desc: 'Demander la suppression de vos données, sous réserve de nos obligations légales de conservation.' },
      { title: 'Droit à la portabilité (Art. 20)', desc: 'Recevoir vos données dans un format structuré et lisible par machine pour les transférer.' },
      { title: "Droit d'opposition (Art. 21)", desc: 'Vous opposer au traitement fondé sur l\'intérêt légitime ou à des fins de prospection.' },
      { title: 'Droit à la limitation (Art. 18)', desc: 'Demander la suspension temporaire du traitement de vos données dans certains cas.' },
    ],
    exerciseTitle: 'Comment exercer vos droits',
    exerciseP1a: 'Envoyez votre demande par email à privacy@aevia.services en précisant votre nom, l\'adresse email associée à votre compte et la nature de votre demande. Nous répondrons dans un délai d\'',
    exerciseP1b: 'un mois',
    exerciseP1c: ' à compter de la réception (délai extensible à 3 mois pour les demandes complexes, avec notification).',
    complaintA: 'Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d\'introduire une réclamation auprès de la ',
    complaintCnil: "Commission Nationale de l'Informatique et des Libertés (CNIL)",
    complaintB: ' — 3 Place de Fontenoy, 75007 Paris — www.cnil.fr.',
  },
  s9: {
    heading: '9. Accord de traitement des données (DPA)',
    p1a: 'Si vous utilisez Aevia Inbox dans le cadre professionnel et que vous transmettez des données de vos propres clients, vous pouvez nous demander la signature d\'un ',
    p1strong: 'Accord de Traitement des Données (Data Processing Agreement — DPA)',
    p1b: ' conforme à l\'article 28 du RGPD, formalisant nos obligations réciproques en tant que responsable du traitement (vous) et sous-traitant (Aevia).',
    p2a: 'Pour obtenir un DPA, contactez-nous à privacy@aevia.services avec l\'objet ',
    p2subject: '« Demande DPA »',
  },
  s10: {
    heading: '10. Cookies et traceurs',
    p1: "Nos sites utilisent un nombre limité de cookies. Les cookies strictement nécessaires au fonctionnement du service (authentification, session) ne nécessitent pas votre consentement. Les cookies de mesure d'audience (Google Analytics 4) ne bénéficient d'aucune exemption : ils ne sont déposés qu'après votre acceptation explicite, et refuser n'enlève rien au service.",
    p2a: 'Pour en savoir plus, consultez notre ',
    p2link: 'Politique de Cookies',
  },
  s11: {
    heading: '11. Sécurité des données',
    lead: 'Aevia met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation, notamment :',
    items: ['Chiffrement des communications par TLS 1.2+ (HTTPS)', 'Hachage des mots de passe (bcrypt)', 'Authentification par JWT avec expiration de session', 'Isolation des données par compte (multi-tenant strict)', 'Sauvegardes chiffrées de la base de données', 'Accès aux données de production restreint aux administrateurs', 'Journalisation des accès aux données sensibles'],
  },
  s12: {
    heading: '12. Modifications de la présente politique',
    text: 'Nous pouvons mettre à jour cette Politique de Confidentialité à tout moment pour refléter des changements dans nos pratiques ou dans la réglementation applicable. En cas de modification substantielle, nous vous notifierons par email à l\'adresse associée à votre compte au moins 30 jours avant l\'entrée en vigueur des changements. La date de dernière mise à jour est indiquée en tête de ce document. La poursuite de l\'utilisation de nos services après notification vaut acceptation des modifications.',
  },
  s13: {
    heading: '13. Contact',
    title: 'Pour toute question relative à cette politique :',
    emailLabel: 'Email',
    generalLabel: 'Email général',
    controllerLabel: 'Responsable du traitement',
    controllerValue: 'Valentin Milliand — Aevia, France',
  },
  disclaimer: "Ce document est publié à titre informatif et constitue la politique de confidentialité effective d'Aevia. Pour toute question spécifique à votre situation, consultez un avocat ou expert juridique qualifié en droit des données personnelles.",
};

const en: PrivacyContent = {
  lastUpdated: 'Last updated: 14 June 2026',
  title: 'Privacy Policy',
  intro:
    'This Privacy Policy describes how Aevia collects, uses, stores and protects your personal data in accordance with the General Data Protection Regulation (GDPR — EU Regulation 2016/679) and the French Data Protection Act.',
  s1: {
    heading: '1. Data controller',
    lead: 'The controller of your personal data is:',
    entity: 'sole trader (auto-entrepreneur)',
    directorLabel: 'Publication director',
    sirenLabel: 'SIREN',
    sirenValue: '852 546 225 — Bourg-en-Bresse Trade Register',
    countryLabel: 'Country of establishment',
    country: 'France',
    addressLabel: 'Address',
    address: 'Registered-office address provided on request to valentinmilliand@aevia.services',
    contactLabel: 'Contact',
    dpoLabel: 'DPO / Privacy contact',
  },
  s2: {
    heading: '2. Products covered by this policy',
    lead: 'This policy applies to all products and services marketed under the Aevia brand:',
    products: [
      { name: 'Aevia Inbox', desc: '(inbox.aevia.services) — Multi-channel B2B CRM. Centralises webchat, email and voice conversations (WhatsApp and Instagram coming soon) for businesses. Monthly subscription (€79, 99, 199, 399 or 999/month excl. VAT depending on the tier; currency adapted to the region).' },
      { name: 'AeviaLaunch', desc: '(launch.aevia.services) — AI-assisted website generator. Creates professional websites from form data. One-off payment (€599, €899 or €1,499) + optional maintenance €20/month.' },
      { name: 'AeviaSecurity', desc: '(security.aevia.services) — Automated security-audit platform. Analyses the SSL, DNS, performance and security flaws of websites. Free scan + à-la-carte remediation services (one-off package, from €149 to €2,490 excl. VAT depending on scope).' },
    ],
  },
  s3: {
    heading: '3. Personal data collected',
    h31: '3.1 Account and identification data',
    lead31: 'When you create an account on one of our services, we collect:',
    items31: ['First and last name', 'Business email address', 'Company name', 'Phone number (optional)', 'Password (stored as a bcrypt hash, never in clear text)', 'Login IP address and browser information (User-Agent)'],
    h32: '3.2 Conversation and end-customer data (Aevia Inbox)',
    lead32: 'Within Aevia Inbox, our clients (the subscribing businesses) transmit to us data about their own end customers. This data notably includes:',
    items32: ['Contact names and identifiers (WhatsApp, Instagram, email)', 'Conversation content (text, media, attachments)', 'Exchange history and timestamps', 'Message delivery and read metadata', 'Analytics data (message volumes, response rates)'],
    note32Pre: 'Important note: For this data, Aevia acts as a ',
    note32Strong: 'processor',
    note32Post: ' within the meaning of the GDPR. The subscribing client remains the controller with respect to its own end customers. A data processing agreement (DPA) is available on request at privacy@aevia.services.',
    h33: '3.3 Audit data (AeviaSecurity)',
    items33: ['URLs and domain names submitted for analysis', 'Results of SSL, DNS, security and performance audits', 'History of audits performed'],
    h34: '3.4 Site-generation data (AeviaLaunch)',
    items34: ['Information entered in the creation form (industry, description, brand guidelines, texts)', 'Content generated by AI from this information', 'Uploaded files (logos, images)'],
    h35: '3.5 Payment data',
    text35: 'Payments are processed exclusively by Stripe. Aevia never collects or stores your bank details. We only keep Stripe transaction references, subscription history and billed amounts.',
    h36: '3.6 Browsing data and logs',
    items36: ['IP address (pseudonymised)', 'Pages visited, session duration', 'Technical logs (errors, performance)', 'Aggregated usage statistics via Google Analytics 4, only if you accept measurement cookies'],
    h37: '3.7 Sign in with Google (Google Sign-In)',
    p37a: 'You can create your Aevia account and sign in to all Aevia products (Inbox, Launch, Security) using your Google account. When you choose “Sign in with Google”, we access only the following data, with your explicit authorisation via the Google consent screen:',
    items37: ['Your Google email address', 'Your first and last name', 'Your Google profile picture (if any)'],
    p37b: 'This data is used exclusively to: create and identify your single Aevia account, authenticate you securely, and pre-fill your profile. We do not access any other data in your Google account (Gmail, Drive, Contacts, Calendar, etc.) and request no sensitive or restricted scope.',
    note37Strong: 'Google API Services User Data Policy compliance: ',
    note37Post: "Aevia's use and transfer of information received from Google APIs adhere to the Google API Services User Data Policy, including its Limited Use requirements. Google data is never sold, used for advertising, or transferred to third parties except to provide or improve the service, comply with the law, or with your explicit consent. No Google data is used to train AI models.",
  },
  s4: {
    heading: '4. Legal bases for processing (GDPR Art. 6)',
    bases: [
      { title: 'Art. 6.1.b — Performance of a contract', desc: 'Processing of account, subscription, billing and service-delivery data (Inbox, Launch, Security). Without this data, we cannot provide the services you subscribed to.' },
      { title: 'Art. 6.1.c — Legal obligation', desc: 'Retention of billing data (10 years under the French Commercial Code), fraud prevention, tax obligations.' },
      { title: 'Art. 6.1.f — Legitimate interest', desc: 'Improving our services, technical security of our infrastructure, detecting abusive behaviour, aggregated usage statistics.' },
      { title: 'Art. 6.1.a — Consent', desc: 'Sending marketing communications and newsletters. You may withdraw your consent at any time via the unsubscribe link in every email.' },
    ],
  },
  s5: {
    heading: '5. Data retention periods',
    colCat: 'Data category',
    colDur: 'Retention period',
    rows: [
      ['Account data (active)', 'Duration of the contractual relationship'],
      ['Account data (after termination)', '3 years (commercial limitation period)'],
      ['Billing data and contracts', '10 years (legal obligation)'],
      ['Inbox conversations', 'Subscription duration + 6 months'],
      ['AeviaSecurity audit results', '12 months from the audit'],
      ['Generated-site data (AeviaLaunch)', 'Delivery + 6 months (support)'],
      ['Technical logs', '90 days'],
      ['Prospecting data (consent)', '3 years from the last contact'],
    ],
  },
  s6: {
    heading: '6. Data recipients and processors',
    lead: 'Aevia never sells your personal data to third parties. We use the following providers, each bound by contractual safeguards compliant with the GDPR:',
    processors: [
      { name: 'Stripe, Inc.', tag: 'Payments', desc: 'Processing of all card payments and management of recurring subscriptions. Stripe is PCI DSS Level 1 certified.', transfer: 'International transfer: United States — Stripe adheres to the European Commission\'s Standard Contractual Clauses (SCCs).', href: 'https://stripe.com/privacy', linkLabel: 'Stripe Privacy Policy' },
      { name: 'Anthropic, PBC', tag: 'AI — Launch & Inbox', desc: 'Processing of creation-form data to generate web content via the Claude API (Aevia Launch). In Aevia Inbox, the Claude API also analyses certain incoming messages (safety filtering and reply assistance). Data submitted to the Anthropic API is not used to train models (in accordance with our commercial API agreement).', transfer: 'International transfer: United States — Anthropic is subject to SCCs and equivalent safeguards.', href: 'https://www.anthropic.com/privacy', linkLabel: 'Anthropic Privacy Policy' },
      { name: 'Railway Corp.', tag: 'Back-end hosting', desc: 'Hosting of the back-end servers (NestJS API) and execution of application processing. The compute infrastructure is located in the United States.', transfer: 'International transfer: United States — framed by the European Commission\'s Standard Contractual Clauses (SCCs).', href: 'https://railway.app/legal/privacy', linkLabel: 'Railway Privacy Policy' },
      { name: 'Neon, Inc.', tag: 'Database', desc: 'Managed PostgreSQL database storing application data (accounts, conversations, contacts, message history). The data is hosted in the European Union (Frankfurt region, Germany).', transfer: 'Location: European Union — no transfer outside the EU for the main database.', href: 'https://neon.tech/privacy-policy', linkLabel: 'Neon Privacy Policy' },
      { name: 'Upstash, Inc.', tag: 'Cache / queue', desc: 'Ephemeral cache and message queue (Redis) speeding up conversation processing. Data is kept there only transiently, for the duration of processing.', transfer: 'International transfer: outside the European Union — framed by Standard Contractual Clauses (SCCs).', href: 'https://upstash.com/trust/privacy.pdf', linkLabel: 'Upstash Privacy Policy' },
      { name: 'Groq, Inc.', tag: 'AI — Aevia Inbox', desc: 'Language-model inference for the automatic replies of Aevia Inbox agents (processing of incoming message text). Data sent to the Groq API is not used to train models.', transfer: 'International transfer: United States — framed by Standard Contractual Clauses (SCCs).', href: 'https://groq.com/privacy-policy/', linkLabel: 'Groq Privacy Policy' },
      { name: 'Vercel, Inc.', tag: 'CDN / Front-end', desc: 'Hosting and distribution of the front-end interfaces (Next.js). Vercel acts as a content delivery network (CDN) with cache nodes worldwide.', transfer: 'International transfer: United States — Vercel complies with SCCs.', href: 'https://vercel.com/legal/privacy-policy', linkLabel: 'Vercel Privacy Policy' },
      { name: 'Meta Platforms, Inc.', tag: 'API — Aevia Inbox', desc: 'Access to the WhatsApp Business, Instagram Messaging and Facebook Messenger APIs to receive and send messages in Aevia Inbox. Messages transit through Meta\'s infrastructure before reaching our servers.', transfer: 'International transfer: United States — Meta operates under the European SCCs.', href: 'https://www.facebook.com/privacy/policy', linkLabel: 'Meta Privacy Policy' },
      { name: 'Google LLC', tag: 'Authentication (Google Sign-In)', desc: '“Sign in with Google” authentication service (Google OAuth 2.0). When you use it, we receive your email, name and profile picture to create and secure your single Aevia account. No sensitive scope is requested. Data use complies with the Google API Services User Data Policy (Limited Use).', transfer: 'International transfer: United States — Google operates under Standard Contractual Clauses (SCCs).', href: 'https://policies.google.com/privacy', linkLabel: 'Google Privacy Policy' },
      { name: 'Google Analytics 4 — Google Ireland Ltd', tag: 'Statistics', desc: 'Audience measurement. The tag is loaded only after your explicit acceptance of the banner: if you refuse, no measurement cookie is placed and nothing is sent to Google. If you accept, the _ga and _ga_* cookies are placed for 13 months and data may be processed outside the European Union by Google LLC, on the basis of the Data Privacy Framework. IP anonymisation is enabled.', transfer: '', href: 'https://policies.google.com/privacy', linkLabel: 'Google Privacy Policy' },
    ],
  },
  s7: {
    heading: '7. Data transfers outside the European Union',
    p1a: 'Some of our processors (Stripe, Anthropic, Groq, Railway, Upstash, Vercel, Meta) are established in the United States. These transfers are framed by ',
    p1cct: 'Standard Contractual Clauses (SCCs)',
    p1b: ' adopted by the European Commission in accordance with Article 46 of the GDPR, guaranteeing a level of protection equivalent to that offered within the European Economic Area. Our main database (Neon), by contrast, is hosted in the European Union (Frankfurt), with no transfer outside the EU.',
    p2a: 'To obtain a copy of the safeguards in place or more information about these transfers, you can contact us at privacy@aevia.services.',
  },
  s8: {
    heading: '8. Your rights over your personal data',
    lead: 'In accordance with the GDPR (Articles 15 to 22), you have the following rights over your personal data:',
    rights: [
      { title: 'Right of access (Art. 15)', desc: 'Obtain a copy of all the personal data we hold about you.' },
      { title: 'Right to rectification (Art. 16)', desc: 'Have inaccurate data corrected or incomplete data completed.' },
      { title: 'Right to erasure (Art. 17)', desc: 'Request the deletion of your data, subject to our legal retention obligations.' },
      { title: 'Right to portability (Art. 20)', desc: 'Receive your data in a structured, machine-readable format in order to transfer it.' },
      { title: 'Right to object (Art. 21)', desc: 'Object to processing based on legitimate interest or for prospecting purposes.' },
      { title: 'Right to restriction (Art. 18)', desc: 'Request the temporary suspension of the processing of your data in certain cases.' },
    ],
    exerciseTitle: 'How to exercise your rights',
    exerciseP1a: 'Send your request by email to privacy@aevia.services, stating your name, the email address associated with your account and the nature of your request. We will respond within ',
    exerciseP1b: 'one month',
    exerciseP1c: ' of receipt (extendable to 3 months for complex requests, with notice).',
    complaintA: 'If you consider that your rights are not respected, you have the right to lodge a complaint with the ',
    complaintCnil: 'French Data Protection Authority (CNIL)',
    complaintB: ' — 3 Place de Fontenoy, 75007 Paris — www.cnil.fr.',
  },
  s9: {
    heading: '9. Data Processing Agreement (DPA)',
    p1a: 'If you use Aevia Inbox in a professional context and transmit data about your own customers, you can ask us to sign a ',
    p1strong: 'Data Processing Agreement (DPA)',
    p1b: ' compliant with Article 28 of the GDPR, formalising our mutual obligations as controller (you) and processor (Aevia).',
    p2a: 'To obtain a DPA, contact us at privacy@aevia.services with the subject ',
    p2subject: '“DPA request”',
  },
  s10: {
    heading: '10. Cookies and trackers',
    p1: 'Our sites use a limited number of cookies. Cookies strictly necessary for the operation of the service (authentication, session) do not require your consent. Audience-measurement cookies (Google Analytics 4) benefit from no exemption: they are placed only after your explicit acceptance, and refusing takes nothing away from the service.',
    p2a: 'To find out more, see our ',
    p2link: 'Cookie Policy',
  },
  s11: {
    heading: '11. Data security',
    lead: 'Aevia implements appropriate technical and organisational measures to protect your data against any unauthorised access, loss, destruction or disclosure, notably:',
    items: ['Encryption of communications via TLS 1.2+ (HTTPS)', 'Password hashing (bcrypt)', 'JWT authentication with session expiry', 'Per-account data isolation (strict multi-tenant)', 'Encrypted database backups', 'Production data access restricted to administrators', 'Logging of access to sensitive data'],
  },
  s12: {
    heading: '12. Changes to this policy',
    text: 'We may update this Privacy Policy at any time to reflect changes in our practices or in applicable regulations. In the event of a substantial change, we will notify you by email at the address associated with your account at least 30 days before the changes take effect. The last-updated date is shown at the top of this document. Continued use of our services after notification constitutes acceptance of the changes.',
  },
  s13: {
    heading: '13. Contact',
    title: 'For any question regarding this policy:',
    emailLabel: 'Email',
    generalLabel: 'General email',
    controllerLabel: 'Data controller',
    controllerValue: 'Valentin Milliand — Aevia, France',
  },
  disclaimer: "This document is published for information purposes and constitutes Aevia's effective privacy policy. For any question specific to your situation, consult a lawyer or legal expert qualified in personal-data law.",
};

const es: PrivacyContent = {
  lastUpdated: 'Última actualización: 14 de junio de 2026',
  title: 'Política de Privacidad',
  intro:
    'La presente Política de Privacidad describe cómo Aevia recopila, utiliza, conserva y protege sus datos personales de conformidad con el Reglamento General de Protección de Datos (RGPD — Reglamento UE 2016/679) y la ley francesa de Protección de Datos.',
  s1: {
    heading: '1. Responsable del tratamiento',
    lead: 'El responsable del tratamiento de sus datos personales es:',
    entity: 'empresario individual (autónomo)',
    directorLabel: 'Director de la publicación',
    sirenLabel: 'SIREN',
    sirenValue: '852 546 225 — Registro Mercantil de Bourg-en-Bresse',
    countryLabel: 'País de establecimiento',
    country: 'Francia',
    addressLabel: 'Dirección',
    address: 'Dirección del domicilio social facilitada previa solicitud a valentinmilliand@aevia.services',
    contactLabel: 'Contacto',
    dpoLabel: 'Contacto DPO / Privacidad',
  },
  s2: {
    heading: '2. Productos cubiertos por esta política',
    lead: 'Esta política se aplica a todos los productos y servicios comercializados bajo la marca Aevia:',
    products: [
      { name: 'Aevia Inbox', desc: '(inbox.aevia.services) — CRM multicanal B2B. Centraliza las conversaciones de webchat, correo y voz (WhatsApp e Instagram próximamente) para empresas. Suscripción mensual (79, 99, 199, 399 o 999 €/mes sin IVA según el nivel; moneda adaptada a la región).' },
      { name: 'AeviaLaunch', desc: '(launch.aevia.services) — Generador de sitios web asistido por IA. Crea sitios web profesionales a partir de datos de un formulario. Pago único (599 €, 899 € o 1499 €) + mantenimiento opcional 20 €/mes.' },
      { name: 'AeviaSecurity', desc: '(security.aevia.services) — Plataforma de auditoría de seguridad automatizada. Analiza SSL, DNS, rendimiento y fallos de seguridad de sitios web. Escaneo gratuito + servicios correctivos a la carta (paquete único, de 149 € a 2490 € sin IVA según el alcance).' },
    ],
  },
  s3: {
    heading: '3. Datos personales recopilados',
    h31: '3.1 Datos de cuenta e identificación',
    lead31: 'Al crear una cuenta en uno de nuestros servicios, recopilamos:',
    items31: ['Nombre y apellidos', 'Dirección de correo profesional', 'Nombre de la empresa', 'Número de teléfono (opcional)', 'Contraseña (almacenada como hash bcrypt, nunca en texto claro)', 'Dirección IP de conexión e información del navegador (User-Agent)'],
    h32: '3.2 Datos de conversaciones y de clientes finales (Aevia Inbox)',
    lead32: 'En el marco de Aevia Inbox, nuestros clientes (las empresas suscriptoras) nos transmiten datos relativos a sus propios clientes finales. Estos datos incluyen en particular:',
    items32: ['Nombres e identificadores de contactos (WhatsApp, Instagram, correo)', 'Contenido de las conversaciones (textos, medios, archivos adjuntos)', 'Historial de intercambios y marcas de tiempo', 'Metadatos de entrega y lectura de los mensajes', 'Datos analíticos (volúmenes de mensajes, tasas de respuesta)'],
    note32Pre: 'Nota importante: Para estos datos, Aevia actúa como ',
    note32Strong: 'encargado del tratamiento',
    note32Post: ' en el sentido del RGPD. El cliente suscriptor sigue siendo el responsable del tratamiento respecto a sus propios clientes finales. Un acuerdo de tratamiento de datos (DPA) está disponible previa solicitud en privacy@aevia.services.',
    h33: '3.3 Datos de auditoría (AeviaSecurity)',
    items33: ['URL y nombres de dominio enviados para el análisis', 'Resultados de las auditorías SSL, DNS, seguridad y rendimiento', 'Historial de las auditorías realizadas'],
    h34: '3.4 Datos de generación de sitios (AeviaLaunch)',
    items34: ['Información introducida en el formulario de creación (sector de actividad, descripción, identidad gráfica, textos)', 'Contenido generado por la IA a partir de esta información', 'Archivos subidos (logotipos, imágenes)'],
    h35: '3.5 Datos de pago',
    text35: 'Los pagos son procesados exclusivamente por Stripe. Aevia nunca recopila ni almacena sus datos bancarios. Solo conservamos las referencias de transacción de Stripe, el historial de suscripciones y los importes facturados.',
    h36: '3.6 Datos de navegación y registros',
    items36: ['Dirección IP (seudonimizada)', 'Páginas visitadas, duración de la sesión', 'Registros técnicos (errores, rendimiento)', 'Estadísticas de uso agregadas mediante Google Analytics 4, únicamente si acepta las cookies de medición'],
    h37: '3.7 Inicio de sesión con Google (Google Sign-In)',
    p37a: 'Puede crear su cuenta Aevia e iniciar sesión en todos los productos Aevia (Inbox, Launch, Security) con su cuenta de Google. Cuando elige «Iniciar sesión con Google», accedemos únicamente a los siguientes datos, con su autorización explícita a través de la pantalla de consentimiento de Google:',
    items37: ['Su dirección de correo de Google', 'Su nombre y apellidos', 'Su foto de perfil de Google (si la hubiera)'],
    p37b: 'Estos datos se utilizan exclusivamente para: crear e identificar su cuenta Aevia única, autenticarle de forma segura y precompletar su perfil. No accedemos a ningún otro dato de su cuenta de Google (Gmail, Drive, Contactos, Calendario, etc.) ni solicitamos ningún ámbito (scope) sensible o restringido.',
    note37Strong: 'Cumplimiento de la Google API Services User Data Policy: ',
    note37Post: 'El uso y la transferencia por parte de Aevia de la información recibida de las API de Google respetan la Google API Services User Data Policy, incluidos sus requisitos de uso limitado (Limited Use). Los datos de Google nunca se venden, ni se utilizan con fines publicitarios, ni se transfieren a terceros salvo para prestar o mejorar el servicio, cumplir con la ley o con su consentimiento explícito. Ningún dato de Google se utiliza para entrenar modelos de IA.',
  },
  s4: {
    heading: '4. Bases jurídicas del tratamiento (RGPD Art. 6)',
    bases: [
      { title: 'Art. 6.1.b — Ejecución del contrato', desc: 'Tratamiento de los datos de cuenta, suscripciones, facturación y prestación de los servicios (Inbox, Launch, Security). Sin estos datos, no podemos prestarle los servicios contratados.' },
      { title: 'Art. 6.1.c — Obligación legal', desc: 'Conservación de los datos de facturación (10 años conforme al Código de Comercio francés), lucha contra el fraude, obligaciones fiscales.' },
      { title: 'Art. 6.1.f — Interés legítimo', desc: 'Mejora de nuestros servicios, seguridad técnica de nuestras infraestructuras, detección de comportamientos abusivos, estadísticas de uso agregadas.' },
      { title: 'Art. 6.1.a — Consentimiento', desc: 'Envío de comunicaciones de marketing y boletines. Puede retirar su consentimiento en cualquier momento a través del enlace de baja presente en cada correo.' },
    ],
  },
  s5: {
    heading: '5. Plazos de conservación de los datos',
    colCat: 'Categoría de datos',
    colDur: 'Plazo de conservación',
    rows: [
      ['Datos de cuenta (activa)', 'Duración de la relación contractual'],
      ['Datos de cuenta (tras la baja)', '3 años (prescripción mercantil)'],
      ['Datos de facturación y contratos', '10 años (obligación legal)'],
      ['Conversaciones de Inbox', 'Duración de la suscripción + 6 meses'],
      ['Resultados de auditorías AeviaSecurity', '12 meses desde la auditoría'],
      ['Datos de sitio generado (AeviaLaunch)', 'Entrega + 6 meses (soporte)'],
      ['Registros técnicos', '90 días'],
      ['Datos de prospección (consentimiento)', '3 años desde el último contacto'],
    ],
  },
  s6: {
    heading: '6. Destinatarios de los datos y encargados del tratamiento',
    lead: 'Aevia nunca vende sus datos personales a terceros. Recurrimos a los siguientes proveedores, cada uno vinculado por garantías contractuales conformes al RGPD:',
    processors: [
      { name: 'Stripe, Inc.', tag: 'Pagos', desc: 'Tratamiento de todos los pagos con tarjeta y gestión de las suscripciones recurrentes. Stripe cuenta con la certificación PCI DSS de nivel 1.', transfer: 'Transferencia internacional: Estados Unidos — Stripe se adhiere a las Cláusulas Contractuales Tipo (CCT) de la Comisión Europea.', href: 'https://stripe.com/privacy', linkLabel: 'Política de privacidad de Stripe' },
      { name: 'Anthropic, PBC', tag: 'IA — Launch e Inbox', desc: 'Tratamiento de los datos del formulario de creación para la generación de contenido web mediante la API Claude (Aevia Launch). En Aevia Inbox, la API Claude también analiza determinados mensajes entrantes (filtrado de seguridad y asistencia a las respuestas). Los datos enviados a la API de Anthropic no se utilizan para entrenar los modelos (conforme a nuestro acuerdo de API comercial).', transfer: 'Transferencia internacional: Estados Unidos — Anthropic está sujeto a las CCT y garantías equivalentes.', href: 'https://www.anthropic.com/privacy', linkLabel: 'Política de privacidad de Anthropic' },
      { name: 'Railway Corp.', tag: 'Alojamiento back-end', desc: 'Alojamiento de los servidores back-end (API NestJS) y ejecución de los tratamientos de la aplicación. La infraestructura de cálculo se encuentra en Estados Unidos.', transfer: 'Transferencia internacional: Estados Unidos — enmarcada por las Cláusulas Contractuales Tipo (CCT) de la Comisión Europea.', href: 'https://railway.app/legal/privacy', linkLabel: 'Política de privacidad de Railway' },
      { name: 'Neon, Inc.', tag: 'Base de datos', desc: 'Base de datos PostgreSQL gestionada donde se almacenan los datos de la aplicación (cuentas, conversaciones, contactos, historial de mensajes). Los datos se alojan en la Unión Europea (región de Fráncfort, Alemania).', transfer: 'Ubicación: Unión Europea — sin transferencia fuera de la UE para la base de datos principal.', href: 'https://neon.tech/privacy-policy', linkLabel: 'Política de privacidad de Neon' },
      { name: 'Upstash, Inc.', tag: 'Caché / cola', desc: 'Caché y cola de mensajes efímera (Redis) que acelera el tratamiento de las conversaciones. Los datos solo se conservan de forma transitoria, durante el tratamiento.', transfer: 'Transferencia internacional: fuera de la Unión Europea — enmarcada por las Cláusulas Contractuales Tipo (CCT).', href: 'https://upstash.com/trust/privacy.pdf', linkLabel: 'Política de privacidad de Upstash' },
      { name: 'Groq, Inc.', tag: 'IA — Aevia Inbox', desc: 'Inferencia de modelos de lenguaje para las respuestas automáticas de los agentes de Aevia Inbox (tratamiento del texto de los mensajes recibidos). Los datos enviados a la API de Groq no se utilizan para entrenar modelos.', transfer: 'Transferencia internacional: Estados Unidos — enmarcada por las Cláusulas Contractuales Tipo (CCT).', href: 'https://groq.com/privacy-policy/', linkLabel: 'Política de privacidad de Groq' },
      { name: 'Vercel, Inc.', tag: 'CDN / Front-end', desc: 'Alojamiento y distribución de las interfaces front-end (Next.js). Vercel actúa como red de distribución de contenidos (CDN) con nodos de caché en todo el mundo.', transfer: 'Transferencia internacional: Estados Unidos — Vercel cumple con las CCT.', href: 'https://vercel.com/legal/privacy-policy', linkLabel: 'Política de privacidad de Vercel' },
      { name: 'Meta Platforms, Inc.', tag: 'API — Aevia Inbox', desc: 'Acceso a las API de WhatsApp Business, Instagram Messaging y Facebook Messenger para recibir y enviar mensajes en Aevia Inbox. Los mensajes transitan por la infraestructura de Meta antes de llegar a nuestros servidores.', transfer: 'Transferencia internacional: Estados Unidos — Meta opera bajo las CCT europeas.', href: 'https://www.facebook.com/privacy/policy', linkLabel: 'Política de privacidad de Meta' },
      { name: 'Google LLC', tag: 'Autenticación (Google Sign-In)', desc: 'Servicio de autenticación «Iniciar sesión con Google» (Google OAuth 2.0). Cuando lo utiliza, recibimos su correo, su nombre y su foto de perfil para crear y proteger su cuenta Aevia única. No se solicita ningún ámbito sensible. El uso de los datos respeta la Google API Services User Data Policy (Limited Use).', transfer: 'Transferencia internacional: Estados Unidos — Google opera bajo las Cláusulas Contractuales Tipo (CCT).', href: 'https://policies.google.com/privacy', linkLabel: 'Política de privacidad de Google' },
      { name: 'Google Analytics 4 — Google Ireland Ltd', tag: 'Estadísticas', desc: 'Medición de audiencia. La etiqueta solo se carga tras su aceptación explícita del banner: si la rechaza, no se deposita ninguna cookie de medición y no se transmite nada a Google. Si la acepta, las cookies _ga y _ga_* se colocan durante 13 meses y los datos pueden tratarse fuera de la Unión Europea por Google LLC, sobre la base del Data Privacy Framework. La anonimización de IP está activada.', transfer: '', href: 'https://policies.google.com/privacy', linkLabel: 'Política de privacidad de Google' },
    ],
  },
  s7: {
    heading: '7. Transferencias de datos fuera de la Unión Europea',
    p1a: 'Algunos de nuestros encargados del tratamiento (Stripe, Anthropic, Groq, Railway, Upstash, Vercel, Meta) están establecidos en Estados Unidos. Estas transferencias se enmarcan en las ',
    p1cct: 'Cláusulas Contractuales Tipo (CCT)',
    p1b: ' adoptadas por la Comisión Europea de conformidad con el artículo 46 del RGPD, que garantizan un nivel de protección equivalente al ofrecido dentro del Espacio Económico Europeo. Nuestra base de datos principal (Neon), en cambio, está alojada en la Unión Europea (Fráncfort), sin transferencia fuera de la UE.',
    p2a: 'Para obtener una copia de las garantías establecidas o más información sobre estas transferencias, puede contactarnos en privacy@aevia.services.',
  },
  s8: {
    heading: '8. Sus derechos sobre sus datos personales',
    lead: 'De conformidad con el RGPD (artículos 15 a 22), dispone de los siguientes derechos sobre sus datos personales:',
    rights: [
      { title: 'Derecho de acceso (Art. 15)', desc: 'Obtener una copia de todos los datos personales que tenemos sobre usted.' },
      { title: 'Derecho de rectificación (Art. 16)', desc: 'Hacer corregir datos inexactos o completar datos incompletos.' },
      { title: 'Derecho de supresión (Art. 17)', desc: 'Solicitar la eliminación de sus datos, sin perjuicio de nuestras obligaciones legales de conservación.' },
      { title: 'Derecho a la portabilidad (Art. 20)', desc: 'Recibir sus datos en un formato estructurado y legible por máquina para transferirlos.' },
      { title: 'Derecho de oposición (Art. 21)', desc: 'Oponerse al tratamiento basado en el interés legítimo o con fines de prospección.' },
      { title: 'Derecho a la limitación (Art. 18)', desc: 'Solicitar la suspensión temporal del tratamiento de sus datos en determinados casos.' },
    ],
    exerciseTitle: 'Cómo ejercer sus derechos',
    exerciseP1a: 'Envíe su solicitud por correo a privacy@aevia.services indicando su nombre, la dirección de correo asociada a su cuenta y la naturaleza de su solicitud. Responderemos en un plazo de ',
    exerciseP1b: 'un mes',
    exerciseP1c: ' desde la recepción (ampliable a 3 meses para solicitudes complejas, con notificación).',
    complaintA: 'Si considera que sus derechos no se respetan, tiene derecho a presentar una reclamación ante la ',
    complaintCnil: 'Autoridad Francesa de Protección de Datos (CNIL)',
    complaintB: ' — 3 Place de Fontenoy, 75007 París — www.cnil.fr.',
  },
  s9: {
    heading: '9. Acuerdo de tratamiento de datos (DPA)',
    p1a: 'Si utiliza Aevia Inbox en un contexto profesional y transmite datos de sus propios clientes, puede solicitarnos la firma de un ',
    p1strong: 'Acuerdo de Tratamiento de Datos (Data Processing Agreement — DPA)',
    p1b: ' conforme al artículo 28 del RGPD, que formaliza nuestras obligaciones recíprocas como responsable del tratamiento (usted) y encargado del tratamiento (Aevia).',
    p2a: 'Para obtener un DPA, contáctenos en privacy@aevia.services con el asunto ',
    p2subject: '«Solicitud de DPA»',
  },
  s10: {
    heading: '10. Cookies y rastreadores',
    p1: 'Nuestros sitios utilizan un número limitado de cookies. Las cookies estrictamente necesarias para el funcionamiento del servicio (autenticación, sesión) no requieren su consentimiento. Las cookies de medición de audiencia (Google Analytics 4) no gozan de ninguna exención: solo se depositan tras su aceptación explícita, y rechazarlas no resta nada al servicio.',
    p2a: 'Para saber más, consulte nuestra ',
    p2link: 'Política de Cookies',
  },
  s11: {
    heading: '11. Seguridad de los datos',
    lead: 'Aevia aplica medidas técnicas y organizativas adecuadas para proteger sus datos contra todo acceso no autorizado, pérdida, destrucción o divulgación, en particular:',
    items: ['Cifrado de las comunicaciones mediante TLS 1.2+ (HTTPS)', 'Hash de las contraseñas (bcrypt)', 'Autenticación mediante JWT con expiración de sesión', 'Aislamiento de datos por cuenta (multi-tenant estricto)', 'Copias de seguridad cifradas de la base de datos', 'Acceso a los datos de producción restringido a los administradores', 'Registro de los accesos a datos sensibles'],
  },
  s12: {
    heading: '12. Modificaciones de la presente política',
    text: 'Podemos actualizar esta Política de Privacidad en cualquier momento para reflejar cambios en nuestras prácticas o en la normativa aplicable. En caso de modificación sustancial, se lo notificaremos por correo a la dirección asociada a su cuenta al menos 30 días antes de la entrada en vigor de los cambios. La fecha de última actualización se indica al principio de este documento. El uso continuado de nuestros servicios tras la notificación constituye la aceptación de las modificaciones.',
  },
  s13: {
    heading: '13. Contacto',
    title: 'Para cualquier pregunta relativa a esta política:',
    emailLabel: 'Correo',
    generalLabel: 'Correo general',
    controllerLabel: 'Responsable del tratamiento',
    controllerValue: 'Valentin Milliand — Aevia, Francia',
  },
  disclaimer: 'Este documento se publica con carácter informativo y constituye la política de privacidad efectiva de Aevia. Para cualquier pregunta específica sobre su situación, consulte a un abogado o experto jurídico cualificado en derecho de protección de datos personales.',
};

const de: PrivacyContent = {
  lastUpdated: 'Zuletzt aktualisiert: 14. Juni 2026',
  title: 'Datenschutzerklärung',
  intro:
    'Diese Datenschutzerklärung beschreibt, wie Aevia Ihre personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO — Verordnung EU 2016/679) und dem französischen Datenschutzgesetz erhebt, verwendet, speichert und schützt.',
  s1: {
    heading: '1. Verantwortlicher',
    lead: 'Verantwortlicher für die Verarbeitung Ihrer personenbezogenen Daten ist:',
    entity: 'Einzelunternehmer (Kleinunternehmer)',
    directorLabel: 'Verantwortlich für die Veröffentlichung',
    sirenLabel: 'SIREN',
    sirenValue: '852 546 225 — Handelsregister Bourg-en-Bresse',
    countryLabel: 'Land der Niederlassung',
    country: 'Frankreich',
    addressLabel: 'Adresse',
    address: 'Anschrift des Firmensitzes auf Anfrage unter valentinmilliand@aevia.services',
    contactLabel: 'Kontakt',
    dpoLabel: 'DSB / Datenschutz-Kontakt',
  },
  s2: {
    heading: '2. Von dieser Richtlinie erfasste Produkte',
    lead: 'Diese Richtlinie gilt für alle unter der Marke Aevia vermarkteten Produkte und Dienstleistungen:',
    products: [
      { name: 'Aevia Inbox', desc: '(inbox.aevia.services) — Multichannel-B2B-CRM. Bündelt Webchat-, E-Mail- und Sprachkonversationen (WhatsApp und Instagram in Kürze) für Unternehmen. Monatliches Abonnement (79, 99, 199, 399 oder 999 €/Monat zzgl. MwSt. je nach Stufe; Währung an die Region angepasst).' },
      { name: 'AeviaLaunch', desc: '(launch.aevia.services) — KI-gestützter Website-Generator. Erstellt professionelle Websites aus Formulardaten. Einmalzahlung (599 €, 899 € oder 1.499 €) + optionale Wartung 20 €/Monat.' },
      { name: 'AeviaSecurity', desc: '(security.aevia.services) — Plattform für automatisierte Sicherheitsaudits. Analysiert SSL, DNS, Leistung und Sicherheitslücken von Websites. Kostenloser Scan + Behebungsleistungen à la carte (Einmalpaket, von 149 € bis 2.490 € zzgl. MwSt. je nach Umfang).' },
    ],
  },
  s3: {
    heading: '3. Erhobene personenbezogene Daten',
    h31: '3.1 Konto- und Identifikationsdaten',
    lead31: 'Bei der Erstellung eines Kontos in einem unserer Dienste erheben wir:',
    items31: ['Vor- und Nachname', 'Geschäftliche E-Mail-Adresse', 'Firmenname', 'Telefonnummer (optional)', 'Passwort (als bcrypt-Hash gespeichert, niemals im Klartext)', 'Verbindungs-IP-Adresse und Browser-Informationen (User-Agent)'],
    h32: '3.2 Konversations- und Endkundendaten (Aevia Inbox)',
    lead32: 'Im Rahmen von Aevia Inbox übermitteln uns unsere Kunden (die abonnierenden Unternehmen) Daten zu ihren eigenen Endkunden. Diese Daten umfassen insbesondere:',
    items32: ['Namen und Kennungen von Kontakten (WhatsApp, Instagram, E-Mail)', 'Inhalt der Konversationen (Texte, Medien, Anhänge)', 'Verlauf der Kommunikation und Zeitstempel', 'Zustell- und Lesemetadaten der Nachrichten', 'Analysedaten (Nachrichtenvolumen, Antwortquoten)'],
    note32Pre: 'Wichtiger Hinweis: Für diese Daten handelt Aevia als ',
    note32Strong: 'Auftragsverarbeiter',
    note32Post: ' im Sinne der DSGVO. Der abonnierende Kunde bleibt gegenüber seinen eigenen Endkunden Verantwortlicher. Ein Auftragsverarbeitungsvertrag (AVV) ist auf Anfrage unter privacy@aevia.services erhältlich.',
    h33: '3.3 Auditdaten (AeviaSecurity)',
    items33: ['Zur Analyse übermittelte URLs und Domainnamen', 'Ergebnisse der SSL-, DNS-, Sicherheits- und Leistungsaudits', 'Verlauf der durchgeführten Audits'],
    h34: '3.4 Daten zur Website-Erstellung (AeviaLaunch)',
    items34: ['Im Erstellungsformular eingegebene Informationen (Branche, Beschreibung, Corporate Design, Texte)', 'Von der KI aus diesen Informationen generierte Inhalte', 'Hochgeladene Dateien (Logos, Bilder)'],
    h35: '3.5 Zahlungsdaten',
    text35: 'Zahlungen werden ausschließlich von Stripe verarbeitet. Aevia erhebt oder speichert niemals Ihre Bankdaten. Wir bewahren nur die Stripe-Transaktionsreferenzen, den Abonnementverlauf und die in Rechnung gestellten Beträge auf.',
    h36: '3.6 Navigations- und Protokolldaten',
    items36: ['IP-Adresse (pseudonymisiert)', 'Besuchte Seiten, Sitzungsdauer', 'Technische Protokolle (Fehler, Leistung)', 'Aggregierte Nutzungsstatistiken über Google Analytics 4, nur wenn Sie die Mess-Cookies akzeptieren'],
    h37: '3.7 Anmeldung mit Google (Google Sign-In)',
    p37a: 'Sie können Ihr Aevia-Konto erstellen und sich bei allen Aevia-Produkten (Inbox, Launch, Security) mit Ihrem Google-Konto anmelden. Wenn Sie „Mit Google anmelden“ wählen, greifen wir mit Ihrer ausdrücklichen Zustimmung über den Google-Einwilligungsbildschirm nur auf folgende Daten zu:',
    items37: ['Ihre Google-E-Mail-Adresse', 'Ihren Vor- und Nachnamen', 'Ihr Google-Profilbild (falls vorhanden)'],
    p37b: 'Diese Daten werden ausschließlich verwendet, um: Ihr eindeutiges Aevia-Konto zu erstellen und zu identifizieren, Sie sicher zu authentifizieren und Ihr Profil vorauszufüllen. Wir greifen auf keine anderen Daten Ihres Google-Kontos zu (Gmail, Drive, Kontakte, Kalender usw.) und fordern keinen sensiblen oder eingeschränkten Bereich (Scope) an.',
    note37Strong: 'Einhaltung der Google API Services User Data Policy: ',
    note37Post: 'Die Verwendung und Weitergabe der von den Google-APIs erhaltenen Informationen durch Aevia entspricht der Google API Services User Data Policy, einschließlich ihrer Limited-Use-Anforderungen. Google-Daten werden niemals verkauft, zu Werbezwecken verwendet oder an Dritte weitergegeben, außer zur Bereitstellung oder Verbesserung des Dienstes, zur Einhaltung des Gesetzes oder mit Ihrer ausdrücklichen Zustimmung. Es werden keine Google-Daten zum Training von KI-Modellen verwendet.',
  },
  s4: {
    heading: '4. Rechtsgrundlagen der Verarbeitung (DSGVO Art. 6)',
    bases: [
      { title: 'Art. 6.1.b — Vertragserfüllung', desc: 'Verarbeitung von Konto-, Abonnement-, Abrechnungs- und Leistungserbringungsdaten (Inbox, Launch, Security). Ohne diese Daten können wir die abonnierten Dienste nicht bereitstellen.' },
      { title: 'Art. 6.1.c — Rechtliche Verpflichtung', desc: 'Aufbewahrung der Abrechnungsdaten (10 Jahre gemäß dem französischen Handelsgesetzbuch), Betrugsbekämpfung, steuerliche Pflichten.' },
      { title: 'Art. 6.1.f — Berechtigtes Interesse', desc: 'Verbesserung unserer Dienste, technische Sicherheit unserer Infrastruktur, Erkennung missbräuchlichen Verhaltens, aggregierte Nutzungsstatistiken.' },
      { title: 'Art. 6.1.a — Einwilligung', desc: 'Versand von Marketingmitteilungen und Newslettern. Sie können Ihre Einwilligung jederzeit über den Abmeldelink in jeder E-Mail widerrufen.' },
    ],
  },
  s5: {
    heading: '5. Speicherfristen der Daten',
    colCat: 'Datenkategorie',
    colDur: 'Speicherfrist',
    rows: [
      ['Kontodaten (aktiv)', 'Dauer der Vertragsbeziehung'],
      ['Kontodaten (nach Kündigung)', '3 Jahre (handelsrechtliche Verjährung)'],
      ['Abrechnungsdaten und Verträge', '10 Jahre (gesetzliche Pflicht)'],
      ['Inbox-Konversationen', 'Abonnementdauer + 6 Monate'],
      ['AeviaSecurity-Auditergebnisse', '12 Monate ab dem Audit'],
      ['Daten der generierten Website (AeviaLaunch)', 'Lieferung + 6 Monate (Support)'],
      ['Technische Protokolle', '90 Tage'],
      ['Akquisedaten (Einwilligung)', '3 Jahre ab dem letzten Kontakt'],
    ],
  },
  s6: {
    heading: '6. Datenempfänger und Auftragsverarbeiter',
    lead: 'Aevia verkauft Ihre personenbezogenen Daten niemals an Dritte. Wir setzen die folgenden Dienstleister ein, die jeweils durch DSGVO-konforme vertragliche Garantien gebunden sind:',
    processors: [
      { name: 'Stripe, Inc.', tag: 'Zahlungen', desc: 'Verarbeitung aller Kartenzahlungen und Verwaltung der wiederkehrenden Abonnements. Stripe ist nach PCI DSS Level 1 zertifiziert.', transfer: 'Internationale Übermittlung: USA — Stripe hält sich an die Standardvertragsklauseln (SVK) der Europäischen Kommission.', href: 'https://stripe.com/privacy', linkLabel: 'Datenschutzerklärung von Stripe' },
      { name: 'Anthropic, PBC', tag: 'KI — Launch & Inbox', desc: 'Verarbeitung der Daten des Erstellungsformulars zur Generierung von Webinhalten über die Claude-API (Aevia Launch). In Aevia Inbox analysiert die Claude-API zudem bestimmte eingehende Nachrichten (Sicherheitsfilterung und Antwortunterstützung). An die Anthropic-API übermittelte Daten werden nicht zum Training der Modelle verwendet (gemäß unserem kommerziellen API-Vertrag).', transfer: 'Internationale Übermittlung: USA — Anthropic unterliegt den SVK und gleichwertigen Garantien.', href: 'https://www.anthropic.com/privacy', linkLabel: 'Datenschutzerklärung von Anthropic' },
      { name: 'Railway Corp.', tag: 'Back-end-Hosting', desc: 'Hosting der Back-end-Server (NestJS-API) und Ausführung der Anwendungsverarbeitung. Die Recheninfrastruktur befindet sich in den USA.', transfer: 'Internationale Übermittlung: USA — abgesichert durch die Standardvertragsklauseln (SVK) der Europäischen Kommission.', href: 'https://railway.app/legal/privacy', linkLabel: 'Datenschutzerklärung von Railway' },
      { name: 'Neon, Inc.', tag: 'Datenbank', desc: 'Verwaltete PostgreSQL-Datenbank, in der die Anwendungsdaten (Konten, Konversationen, Kontakte, Nachrichtenverlauf) gespeichert werden. Die Daten werden in der Europäischen Union (Region Frankfurt, Deutschland) gehostet.', transfer: 'Standort: Europäische Union — keine Übermittlung außerhalb der EU für die Hauptdatenbank.', href: 'https://neon.tech/privacy-policy', linkLabel: 'Datenschutzerklärung von Neon' },
      { name: 'Upstash, Inc.', tag: 'Cache / Warteschlange', desc: 'Flüchtiger Cache und Nachrichtenwarteschlange (Redis) zur Beschleunigung der Konversationsverarbeitung. Die Daten werden dort nur vorübergehend, für die Dauer der Verarbeitung, gespeichert.', transfer: 'Internationale Übermittlung: außerhalb der Europäischen Union — abgesichert durch Standardvertragsklauseln (SVK).', href: 'https://upstash.com/trust/privacy.pdf', linkLabel: 'Datenschutzerklärung von Upstash' },
      { name: 'Groq, Inc.', tag: 'KI — Aevia Inbox', desc: 'Sprachmodell-Inferenz für die automatischen Antworten der Aevia-Inbox-Agenten (Verarbeitung des Textes eingehender Nachrichten). An die Groq-API gesendete Daten werden nicht zum Training von Modellen verwendet.', transfer: 'Internationale Übermittlung: USA — abgesichert durch Standardvertragsklauseln (SVK).', href: 'https://groq.com/privacy-policy/', linkLabel: 'Datenschutzerklärung von Groq' },
      { name: 'Vercel, Inc.', tag: 'CDN / Front-end', desc: 'Hosting und Auslieferung der Front-end-Oberflächen (Next.js). Vercel fungiert als Content-Delivery-Network (CDN) mit Cache-Knoten weltweit.', transfer: 'Internationale Übermittlung: USA — Vercel entspricht den SVK.', href: 'https://vercel.com/legal/privacy-policy', linkLabel: 'Datenschutzerklärung von Vercel' },
      { name: 'Meta Platforms, Inc.', tag: 'API — Aevia Inbox', desc: 'Zugriff auf die APIs von WhatsApp Business, Instagram Messaging und Facebook Messenger zum Empfangen und Senden von Nachrichten in Aevia Inbox. Die Nachrichten laufen über die Meta-Infrastruktur, bevor sie unsere Server erreichen.', transfer: 'Internationale Übermittlung: USA — Meta arbeitet unter den europäischen SVK.', href: 'https://www.facebook.com/privacy/policy', linkLabel: 'Datenschutzerklärung von Meta' },
      { name: 'Google LLC', tag: 'Authentifizierung (Google Sign-In)', desc: 'Authentifizierungsdienst „Mit Google anmelden“ (Google OAuth 2.0). Bei der Nutzung erhalten wir Ihre E-Mail, Ihren Namen und Ihr Profilbild, um Ihr eindeutiges Aevia-Konto zu erstellen und zu sichern. Es wird kein sensibler Bereich angefordert. Die Datennutzung entspricht der Google API Services User Data Policy (Limited Use).', transfer: 'Internationale Übermittlung: USA — Google arbeitet unter Standardvertragsklauseln (SVK).', href: 'https://policies.google.com/privacy', linkLabel: 'Datenschutzerklärung von Google' },
      { name: 'Google Analytics 4 — Google Ireland Ltd', tag: 'Statistiken', desc: 'Reichweitenmessung. Das Tag wird erst nach Ihrer ausdrücklichen Annahme des Banners geladen: Wenn Sie ablehnen, wird kein Mess-Cookie gesetzt und nichts an Google übermittelt. Wenn Sie zustimmen, werden die Cookies _ga und _ga_* für 13 Monate gesetzt und die Daten können von Google LLC außerhalb der Europäischen Union auf Grundlage des Data Privacy Framework verarbeitet werden. Die IP-Anonymisierung ist aktiviert.', transfer: '', href: 'https://policies.google.com/privacy', linkLabel: 'Datenschutzerklärung von Google' },
    ],
  },
  s7: {
    heading: '7. Datenübermittlungen außerhalb der Europäischen Union',
    p1a: 'Einige unserer Auftragsverarbeiter (Stripe, Anthropic, Groq, Railway, Upstash, Vercel, Meta) sind in den USA ansässig. Diese Übermittlungen sind durch ',
    p1cct: 'Standardvertragsklauseln (SVK)',
    p1b: ' abgesichert, die von der Europäischen Kommission gemäß Artikel 46 DSGVO angenommen wurden und ein Schutzniveau gewährleisten, das dem im Europäischen Wirtschaftsraum gebotenen entspricht. Unsere Hauptdatenbank (Neon) wird hingegen in der Europäischen Union (Frankfurt) gehostet, ohne Übermittlung außerhalb der EU.',
    p2a: 'Um eine Kopie der getroffenen Garantien oder weitere Informationen zu diesen Übermittlungen zu erhalten, können Sie uns unter privacy@aevia.services kontaktieren.',
  },
  s8: {
    heading: '8. Ihre Rechte bezüglich Ihrer personenbezogenen Daten',
    lead: 'Gemäß der DSGVO (Artikel 15 bis 22) stehen Ihnen die folgenden Rechte bezüglich Ihrer personenbezogenen Daten zu:',
    rights: [
      { title: 'Auskunftsrecht (Art. 15)', desc: 'Eine Kopie aller personenbezogenen Daten erhalten, die wir über Sie speichern.' },
      { title: 'Recht auf Berichtigung (Art. 16)', desc: 'Unrichtige Daten korrigieren oder unvollständige Daten vervollständigen lassen.' },
      { title: 'Recht auf Löschung (Art. 17)', desc: 'Die Löschung Ihrer Daten verlangen, vorbehaltlich unserer gesetzlichen Aufbewahrungspflichten.' },
      { title: 'Recht auf Datenübertragbarkeit (Art. 20)', desc: 'Ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten, um sie zu übertragen.' },
      { title: 'Widerspruchsrecht (Art. 21)', desc: 'Der auf berechtigtem Interesse beruhenden Verarbeitung oder zu Akquisezwecken widersprechen.' },
      { title: 'Recht auf Einschränkung (Art. 18)', desc: 'In bestimmten Fällen die vorübergehende Aussetzung der Verarbeitung Ihrer Daten verlangen.' },
    ],
    exerciseTitle: 'So üben Sie Ihre Rechte aus',
    exerciseP1a: 'Senden Sie Ihre Anfrage per E-Mail an privacy@aevia.services unter Angabe Ihres Namens, der mit Ihrem Konto verknüpften E-Mail-Adresse und der Art Ihrer Anfrage. Wir antworten innerhalb von ',
    exerciseP1b: 'einem Monat',
    exerciseP1c: ' nach Eingang (bei komplexen Anfragen mit Benachrichtigung auf 3 Monate verlängerbar).',
    complaintA: 'Wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt werden, haben Sie das Recht, eine Beschwerde bei der ',
    complaintCnil: 'französischen Datenschutzbehörde (CNIL)',
    complaintB: ' einzureichen — 3 Place de Fontenoy, 75007 Paris — www.cnil.fr.',
  },
  s9: {
    heading: '9. Auftragsverarbeitungsvertrag (AVV)',
    p1a: 'Wenn Sie Aevia Inbox im beruflichen Kontext nutzen und Daten Ihrer eigenen Kunden übermitteln, können Sie uns um den Abschluss eines ',
    p1strong: 'Auftragsverarbeitungsvertrags (Data Processing Agreement — DPA)',
    p1b: ' gemäß Artikel 28 DSGVO bitten, der unsere gegenseitigen Pflichten als Verantwortlicher (Sie) und Auftragsverarbeiter (Aevia) formalisiert.',
    p2a: 'Um einen AVV zu erhalten, kontaktieren Sie uns unter privacy@aevia.services mit dem Betreff ',
    p2subject: '„AVV-Anfrage“',
  },
  s10: {
    heading: '10. Cookies und Tracker',
    p1: 'Unsere Websites verwenden eine begrenzte Anzahl von Cookies. Cookies, die für den Betrieb des Dienstes unbedingt erforderlich sind (Authentifizierung, Sitzung), bedürfen nicht Ihrer Einwilligung. Cookies zur Reichweitenmessung (Google Analytics 4) genießen keine Ausnahme: Sie werden erst nach Ihrer ausdrücklichen Zustimmung gesetzt, und eine Ablehnung nimmt dem Dienst nichts.',
    p2a: 'Weitere Informationen finden Sie in unserer ',
    p2link: 'Cookie-Richtlinie',
  },
  s11: {
    heading: '11. Datensicherheit',
    lead: 'Aevia trifft geeignete technische und organisatorische Maßnahmen, um Ihre Daten vor unbefugtem Zugriff, Verlust, Zerstörung oder Offenlegung zu schützen, insbesondere:',
    items: ['Verschlüsselung der Kommunikation über TLS 1.2+ (HTTPS)', 'Hashing der Passwörter (bcrypt)', 'Authentifizierung per JWT mit Sitzungsablauf', 'Datenisolierung pro Konto (strikte Mandantentrennung)', 'Verschlüsselte Datenbank-Backups', 'Zugriff auf Produktionsdaten auf Administratoren beschränkt', 'Protokollierung der Zugriffe auf sensible Daten'],
  },
  s12: {
    heading: '12. Änderungen dieser Richtlinie',
    text: 'Wir können diese Datenschutzerklärung jederzeit aktualisieren, um Änderungen unserer Praktiken oder der geltenden Vorschriften Rechnung zu tragen. Im Falle einer wesentlichen Änderung benachrichtigen wir Sie mindestens 30 Tage vor Inkrafttreten der Änderungen per E-Mail an die mit Ihrem Konto verknüpfte Adresse. Das Datum der letzten Aktualisierung ist am Anfang dieses Dokuments angegeben. Die weitere Nutzung unserer Dienste nach der Benachrichtigung gilt als Annahme der Änderungen.',
  },
  s13: {
    heading: '13. Kontakt',
    title: 'Bei allen Fragen zu dieser Richtlinie:',
    emailLabel: 'E-Mail',
    generalLabel: 'Allgemeine E-Mail',
    controllerLabel: 'Verantwortlicher',
    controllerValue: 'Valentin Milliand — Aevia, Frankreich',
  },
  disclaimer: 'Dieses Dokument wird zu Informationszwecken veröffentlicht und stellt die geltende Datenschutzerklärung von Aevia dar. Bei Fragen, die Ihre konkrete Situation betreffen, wenden Sie sich an einen im Datenschutzrecht qualifizierten Anwalt oder Rechtsexperten.',
};

const pt: PrivacyContent = {
  lastUpdated: 'Última atualização: 14 de junho de 2026',
  title: 'Política de Privacidade',
  intro:
    'A presente Política de Privacidade descreve como a Aevia recolhe, utiliza, conserva e protege os seus dados pessoais em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento UE 2016/679) e a lei francesa de Proteção de Dados.',
  s1: {
    heading: '1. Responsável pelo tratamento',
    lead: 'O responsável pelo tratamento dos seus dados pessoais é:',
    entity: 'empresário em nome individual (autónomo)',
    directorLabel: 'Diretor de publicação',
    sirenLabel: 'SIREN',
    sirenValue: '852 546 225 — Registo Comercial de Bourg-en-Bresse',
    countryLabel: 'País de estabelecimento',
    country: 'França',
    addressLabel: 'Endereço',
    address: 'Endereço da sede social fornecido mediante pedido para valentinmilliand@aevia.services',
    contactLabel: 'Contacto',
    dpoLabel: 'Contacto DPO / Privacidade',
  },
  s2: {
    heading: '2. Produtos abrangidos por esta política',
    lead: 'Esta política aplica-se a todos os produtos e serviços comercializados sob a marca Aevia:',
    products: [
      { name: 'Aevia Inbox', desc: '(inbox.aevia.services) — CRM multicanal B2B. Centraliza as conversas de webchat, e-mail e voz (WhatsApp e Instagram em breve) para empresas. Assinatura mensal (79, 99, 199, 399 ou 999 €/mês sem IVA consoante o nível; moeda adaptada à região).' },
      { name: 'AeviaLaunch', desc: '(launch.aevia.services) — Gerador de sites assistido por IA. Cria sites profissionais a partir dos dados de um formulário. Pagamento único (599 €, 899 € ou 1499 €) + manutenção opcional 20 €/mês.' },
      { name: 'AeviaSecurity', desc: '(security.aevia.services) — Plataforma de auditoria de segurança automatizada. Analisa SSL, DNS, desempenho e falhas de segurança de sites. Verificação gratuita + serviços corretivos à la carte (pacote único, de 149 € a 2490 € sem IVA consoante o âmbito).' },
    ],
  },
  s3: {
    heading: '3. Dados pessoais recolhidos',
    h31: '3.1 Dados de conta e de identificação',
    lead31: 'Ao criar uma conta num dos nossos serviços, recolhemos:',
    items31: ['Nome e apelido', 'Endereço de e-mail profissional', 'Nome da empresa', 'Número de telefone (opcional)', 'Palavra-passe (armazenada como hash bcrypt, nunca em texto simples)', 'Endereço IP de ligação e informações do navegador (User-Agent)'],
    h32: '3.2 Dados de conversas e de clientes finais (Aevia Inbox)',
    lead32: 'No âmbito do Aevia Inbox, os nossos clientes (as empresas assinantes) transmitem-nos dados relativos aos seus próprios clientes finais. Estes dados incluem, nomeadamente:',
    items32: ['Nomes e identificadores de contactos (WhatsApp, Instagram, e-mail)', 'Conteúdo das conversas (textos, multimédia, anexos)', 'Histórico de trocas e marcações temporais', 'Metadados de entrega e leitura das mensagens', 'Dados analíticos (volumes de mensagens, taxas de resposta)'],
    note32Pre: 'Nota importante: Para estes dados, a Aevia atua na qualidade de ',
    note32Strong: 'subcontratante',
    note32Post: ' na aceção do RGPD. O cliente assinante permanece responsável pelo tratamento perante os seus próprios clientes finais. Um acordo de tratamento de dados (DPA) está disponível mediante pedido em privacy@aevia.services.',
    h33: '3.3 Dados de auditoria (AeviaSecurity)',
    items33: ['URL e nomes de domínio submetidos à análise', 'Resultados das auditorias SSL, DNS, segurança e desempenho', 'Histórico das auditorias efetuadas'],
    h34: '3.4 Dados de geração de sites (AeviaLaunch)',
    items34: ['Informações introduzidas no formulário de criação (setor de atividade, descrição, identidade gráfica, textos)', 'Conteúdo gerado pela IA a partir destas informações', 'Ficheiros carregados (logótipos, imagens)'],
    h35: '3.5 Dados de pagamento',
    text35: 'Os pagamentos são processados exclusivamente pela Stripe. A Aevia nunca recolhe nem armazena os seus dados bancários. Conservamos apenas as referências de transação da Stripe, o histórico de assinaturas e os montantes faturados.',
    h36: '3.6 Dados de navegação e registos',
    items36: ['Endereço IP (pseudonimizado)', 'Páginas visitadas, duração da sessão', 'Registos técnicos (erros, desempenho)', 'Estatísticas de utilização agregadas via Google Analytics 4, apenas se aceitar os cookies de medição'],
    h37: '3.7 Início de sessão com o Google (Google Sign-In)',
    p37a: 'Pode criar a sua conta Aevia e iniciar sessão em todos os produtos Aevia (Inbox, Launch, Security) com a sua conta Google. Quando escolhe «Iniciar sessão com o Google», acedemos apenas aos seguintes dados, com a sua autorização explícita através do ecrã de consentimento do Google:',
    items37: ['O seu endereço de e-mail do Google', 'O seu nome e apelido', 'A sua foto de perfil do Google (se aplicável)'],
    p37b: 'Estes dados são utilizados exclusivamente para: criar e identificar a sua conta Aevia única, autenticá-lo de forma segura e pré-preencher o seu perfil. Não acedemos a nenhum outro dado da sua conta Google (Gmail, Drive, Contactos, Calendário, etc.) nem solicitamos qualquer âmbito (scope) sensível ou restrito.',
    note37Strong: 'Conformidade com a Google API Services User Data Policy: ',
    note37Post: 'A utilização e a transferência pela Aevia das informações recebidas das APIs do Google respeitam a Google API Services User Data Policy, incluindo os seus requisitos de utilização limitada (Limited Use). Os dados do Google nunca são vendidos, nem utilizados para fins publicitários, nem transferidos para terceiros, exceto para fornecer ou melhorar o serviço, cumprir a lei, ou com o seu consentimento explícito. Nenhum dado do Google é utilizado para treinar modelos de IA.',
  },
  s4: {
    heading: '4. Bases jurídicas dos tratamentos (RGPD Art. 6)',
    bases: [
      { title: 'Art. 6.1.b — Execução do contrato', desc: 'Tratamento dos dados de conta, assinaturas, faturação e prestação dos serviços (Inbox, Launch, Security). Sem estes dados, não podemos prestar-lhe os serviços contratados.' },
      { title: 'Art. 6.1.c — Obrigação legal', desc: 'Conservação dos dados de faturação (10 anos em conformidade com o Código Comercial francês), luta contra a fraude, obrigações fiscais.' },
      { title: 'Art. 6.1.f — Interesse legítimo', desc: 'Melhoria dos nossos serviços, segurança técnica das nossas infraestruturas, deteção de comportamentos abusivos, estatísticas de utilização agregadas.' },
      { title: 'Art. 6.1.a — Consentimento', desc: 'Envio de comunicações de marketing e newsletters. Pode retirar o seu consentimento a qualquer momento através do link de cancelamento presente em cada e-mail.' },
    ],
  },
  s5: {
    heading: '5. Prazos de conservação dos dados',
    colCat: 'Categoria de dados',
    colDur: 'Prazo de conservação',
    rows: [
      ['Dados de conta (ativa)', 'Duração da relação contratual'],
      ['Dados de conta (após rescisão)', '3 anos (prescrição comercial)'],
      ['Dados de faturação e contratos', '10 anos (obrigação legal)'],
      ['Conversas do Inbox', 'Duração da assinatura + 6 meses'],
      ['Resultados de auditorias AeviaSecurity', '12 meses a contar da auditoria'],
      ['Dados de site gerado (AeviaLaunch)', 'Entrega + 6 meses (suporte)'],
      ['Registos técnicos', '90 dias'],
      ['Dados de prospeção (consentimento)', '3 anos a contar do último contacto'],
    ],
  },
  s6: {
    heading: '6. Destinatários dos dados e subcontratantes',
    lead: 'A Aevia nunca vende os seus dados pessoais a terceiros. Recorremos aos seguintes fornecedores, cada um vinculado por garantias contratuais conformes com o RGPD:',
    processors: [
      { name: 'Stripe, Inc.', tag: 'Pagamentos', desc: 'Tratamento de todos os pagamentos com cartão e gestão das assinaturas recorrentes. A Stripe possui a certificação PCI DSS de nível 1.', transfer: 'Transferência internacional: Estados Unidos — a Stripe adere às Cláusulas Contratuais-Tipo (CCT) da Comissão Europeia.', href: 'https://stripe.com/privacy', linkLabel: 'Política de privacidade da Stripe' },
      { name: 'Anthropic, PBC', tag: 'IA — Launch e Inbox', desc: 'Tratamento dos dados do formulário de criação para a geração de conteúdo web através da API Claude (Aevia Launch). No Aevia Inbox, a API Claude também analisa determinadas mensagens recebidas (filtragem de segurança e assistência às respostas). Os dados enviados para a API da Anthropic não são utilizados para treinar os modelos (em conformidade com o nosso acordo de API comercial).', transfer: 'Transferência internacional: Estados Unidos — a Anthropic está sujeita às CCT e a garantias equivalentes.', href: 'https://www.anthropic.com/privacy', linkLabel: 'Política de privacidade da Anthropic' },
      { name: 'Railway Corp.', tag: 'Alojamento back-end', desc: 'Alojamento dos servidores back-end (API NestJS) e execução dos tratamentos da aplicação. A infraestrutura de cálculo está localizada nos Estados Unidos.', transfer: 'Transferência internacional: Estados Unidos — enquadrada pelas Cláusulas Contratuais-Tipo (CCT) da Comissão Europeia.', href: 'https://railway.app/legal/privacy', linkLabel: 'Política de privacidade da Railway' },
      { name: 'Neon, Inc.', tag: 'Base de dados', desc: 'Base de dados PostgreSQL gerida onde são armazenados os dados da aplicação (contas, conversas, contactos, histórico de mensagens). Os dados são alojados na União Europeia (região de Frankfurt, Alemanha).', transfer: 'Localização: União Europeia — sem transferência para fora da UE para a base de dados principal.', href: 'https://neon.tech/privacy-policy', linkLabel: 'Política de privacidade da Neon' },
      { name: 'Upstash, Inc.', tag: 'Cache / fila', desc: 'Cache e fila de mensagens efémera (Redis) que acelera o tratamento das conversas. Os dados são conservados apenas de forma transitória, durante o tratamento.', transfer: 'Transferência internacional: fora da União Europeia — enquadrada pelas Cláusulas Contratuais-Tipo (CCT).', href: 'https://upstash.com/trust/privacy.pdf', linkLabel: 'Política de privacidade da Upstash' },
      { name: 'Groq, Inc.', tag: 'IA — Aevia Inbox', desc: 'Inferência de modelos de linguagem para as respostas automáticas dos agentes do Aevia Inbox (tratamento do texto das mensagens recebidas). Os dados enviados para a API da Groq não são utilizados para treinar modelos.', transfer: 'Transferência internacional: Estados Unidos — enquadrada pelas Cláusulas Contratuais-Tipo (CCT).', href: 'https://groq.com/privacy-policy/', linkLabel: 'Política de privacidade da Groq' },
      { name: 'Vercel, Inc.', tag: 'CDN / Front-end', desc: 'Alojamento e distribuição das interfaces front-end (Next.js). A Vercel atua como rede de distribuição de conteúdos (CDN) com nós de cache em todo o mundo.', transfer: 'Transferência internacional: Estados Unidos — a Vercel cumpre as CCT.', href: 'https://vercel.com/legal/privacy-policy', linkLabel: 'Política de privacidade da Vercel' },
      { name: 'Meta Platforms, Inc.', tag: 'API — Aevia Inbox', desc: 'Acesso às APIs do WhatsApp Business, Instagram Messaging e Facebook Messenger para receber e enviar mensagens no Aevia Inbox. As mensagens transitam pela infraestrutura da Meta antes de chegarem aos nossos servidores.', transfer: 'Transferência internacional: Estados Unidos — a Meta opera sob as CCT europeias.', href: 'https://www.facebook.com/privacy/policy', linkLabel: 'Política de privacidade da Meta' },
      { name: 'Google LLC', tag: 'Autenticação (Google Sign-In)', desc: 'Serviço de autenticação «Iniciar sessão com o Google» (Google OAuth 2.0). Quando o utiliza, recebemos o seu e-mail, o seu nome e a sua foto de perfil para criar e proteger a sua conta Aevia única. Não é solicitado nenhum âmbito sensível. A utilização dos dados respeita a Google API Services User Data Policy (Limited Use).', transfer: 'Transferência internacional: Estados Unidos — o Google opera sob Cláusulas Contratuais-Tipo (CCT).', href: 'https://policies.google.com/privacy', linkLabel: 'Política de privacidade da Google' },
      { name: 'Google Analytics 4 — Google Ireland Ltd', tag: 'Estatísticas', desc: 'Medição de audiência. A tag só é carregada após a sua aceitação explícita do banner: se recusar, nenhum cookie de medição é colocado e nada é transmitido ao Google. Se aceitar, os cookies _ga e _ga_* são colocados durante 13 meses e os dados podem ser tratados fora da União Europeia pela Google LLC, com base no Data Privacy Framework. A anonimização de IP está ativada.', transfer: '', href: 'https://policies.google.com/privacy', linkLabel: 'Política de privacidade da Google' },
    ],
  },
  s7: {
    heading: '7. Transferências de dados para fora da União Europeia',
    p1a: 'Alguns dos nossos subcontratantes (Stripe, Anthropic, Groq, Railway, Upstash, Vercel, Meta) estão estabelecidos nos Estados Unidos. Estas transferências são enquadradas por ',
    p1cct: 'Cláusulas Contratuais-Tipo (CCT)',
    p1b: ' adotadas pela Comissão Europeia em conformidade com o artigo 46.º do RGPD, garantindo um nível de proteção equivalente ao oferecido no Espaço Económico Europeu. A nossa base de dados principal (Neon), por outro lado, está alojada na União Europeia (Frankfurt), sem transferência para fora da UE.',
    p2a: 'Para obter uma cópia das garantias implementadas ou mais informações sobre estas transferências, pode contactar-nos em privacy@aevia.services.',
  },
  s8: {
    heading: '8. Os seus direitos sobre os seus dados pessoais',
    lead: 'Em conformidade com o RGPD (artigos 15.º a 22.º), dispõe dos seguintes direitos sobre os seus dados pessoais:',
    rights: [
      { title: 'Direito de acesso (Art. 15.º)', desc: 'Obter uma cópia de todos os dados pessoais que detemos sobre si.' },
      { title: 'Direito de retificação (Art. 16.º)', desc: 'Fazer corrigir dados inexatos ou completar dados incompletos.' },
      { title: 'Direito ao apagamento (Art. 17.º)', desc: 'Solicitar a eliminação dos seus dados, sob reserva das nossas obrigações legais de conservação.' },
      { title: 'Direito à portabilidade (Art. 20.º)', desc: 'Receber os seus dados num formato estruturado e legível por máquina para os transferir.' },
      { title: 'Direito de oposição (Art. 21.º)', desc: 'Opor-se ao tratamento baseado no interesse legítimo ou para fins de prospeção.' },
      { title: 'Direito à limitação (Art. 18.º)', desc: 'Solicitar a suspensão temporária do tratamento dos seus dados em determinados casos.' },
    ],
    exerciseTitle: 'Como exercer os seus direitos',
    exerciseP1a: 'Envie o seu pedido por e-mail para privacy@aevia.services, indicando o seu nome, o endereço de e-mail associado à sua conta e a natureza do seu pedido. Responderemos no prazo de ',
    exerciseP1b: 'um mês',
    exerciseP1c: ' a contar da receção (prorrogável para 3 meses no caso de pedidos complexos, com notificação).',
    complaintA: 'Se considerar que os seus direitos não são respeitados, tem o direito de apresentar uma reclamação junto da ',
    complaintCnil: 'Autoridade Francesa de Proteção de Dados (CNIL)',
    complaintB: ' — 3 Place de Fontenoy, 75007 Paris — www.cnil.fr.',
  },
  s9: {
    heading: '9. Acordo de tratamento de dados (DPA)',
    p1a: 'Se utilizar o Aevia Inbox num contexto profissional e transmitir dados dos seus próprios clientes, pode solicitar-nos a assinatura de um ',
    p1strong: 'Acordo de Tratamento de Dados (Data Processing Agreement — DPA)',
    p1b: ' conforme ao artigo 28.º do RGPD, que formaliza as nossas obrigações recíprocas enquanto responsável pelo tratamento (o cliente) e subcontratante (Aevia).',
    p2a: 'Para obter um DPA, contacte-nos em privacy@aevia.services com o assunto ',
    p2subject: '«Pedido de DPA»',
  },
  s10: {
    heading: '10. Cookies e rastreadores',
    p1: 'Os nossos sites utilizam um número limitado de cookies. Os cookies estritamente necessários ao funcionamento do serviço (autenticação, sessão) não requerem o seu consentimento. Os cookies de medição de audiência (Google Analytics 4) não beneficiam de qualquer isenção: só são colocados após a sua aceitação explícita, e recusar não retira nada ao serviço.',
    p2a: 'Para saber mais, consulte a nossa ',
    p2link: 'Política de Cookies',
  },
  s11: {
    heading: '11. Segurança dos dados',
    lead: 'A Aevia aplica medidas técnicas e organizativas adequadas para proteger os seus dados contra qualquer acesso não autorizado, perda, destruição ou divulgação, nomeadamente:',
    items: ['Cifragem das comunicações via TLS 1.2+ (HTTPS)', 'Hash das palavras-passe (bcrypt)', 'Autenticação por JWT com expiração de sessão', 'Isolamento dos dados por conta (multi-tenant estrito)', 'Cópias de segurança cifradas da base de dados', 'Acesso aos dados de produção restrito aos administradores', 'Registo dos acessos aos dados sensíveis'],
  },
  s12: {
    heading: '12. Alterações à presente política',
    text: 'Podemos atualizar esta Política de Privacidade a qualquer momento para refletir alterações nas nossas práticas ou na regulamentação aplicável. Em caso de alteração substancial, notificá-lo-emos por e-mail para o endereço associado à sua conta pelo menos 30 dias antes da entrada em vigor das alterações. A data da última atualização é indicada no início deste documento. A continuação da utilização dos nossos serviços após a notificação constitui a aceitação das alterações.',
  },
  s13: {
    heading: '13. Contacto',
    title: 'Para qualquer questão relativa a esta política:',
    emailLabel: 'E-mail',
    generalLabel: 'E-mail geral',
    controllerLabel: 'Responsável pelo tratamento',
    controllerValue: 'Valentin Milliand — Aevia, França',
  },
  disclaimer: 'Este documento é publicado a título informativo e constitui a política de privacidade efetiva da Aevia. Para qualquer questão específica da sua situação, consulte um advogado ou perito jurídico qualificado em direito de proteção de dados pessoais.',
};

export const PRIVACY_CONTENT: Record<string, PrivacyContent> = { fr, en, es, de, pt };
