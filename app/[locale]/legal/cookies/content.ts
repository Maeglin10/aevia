// Full translations of the Cookie Policy. Rendered by page.tsx via useLocale().
// FR is the authoritative source; en/es/de/pt are faithful translations.

export interface CookieRow {
  name: string;
  service: string;
  purpose: string;
  duration: string;
}

export interface CookiesContent {
  lastUpdated: string;
  title: string;
  intro: string;
  s1: { heading: string; p1: string; p2: string; p3: string };
  s2: { heading: string; lead: string; services: { tag: string; name: string; desc: string }[] };
  s3: {
    heading: string;
    colName: string; colService: string; colPurpose: string; colDuration: string;
    badgeNoConsent: string; badgeConsent: string; badgeFunctional: string;
    h31: string; p31: string; rows31: CookieRow[];
    h32: string; p32: string; items32: string[]; dataTitle: string; dataItems: string[]; dataNote: string; link32: string;
    h33: string; p33: string; colPublisher: string; rows33: CookieRow[]; link33: string;
    h34: string; p34a: string; p34b: string; link34: string;
    h35: string; colKey: string; p35: string; rows35: CookieRow[];
  };
  s4: { heading: string; exemptTitle: string; exempt: string; consentTitle: string; consent: string };
  s5: { heading: string; p1a: string; p1strong: string; p1b: string; p2: string };
  s6: {
    heading: string;
    h61: string; p61: string;
    h62: string; p62: string; browserGuide: string;
    h63: string; p63: string;
    h64: string; p64a: string; p64optout: string; p64b: string;
  };
  s7: { heading: string; lead: string; items: string[]; auditTitle: string; auditA: string; auditB: string };
  s8: { heading: string; lead: string; items: string[] };
  s9: { heading: string; text: string };
  s10: { heading: string; title: string; emailLabel: string; controllerLabel: string; controllerValue: string; relatedLabel: string; privacyLink: string; termsLink: string; mentionsLink: string };
  disclaimer: string;
}

const fr: CookiesContent = {
  lastUpdated: 'Dernière mise à jour : 19 avril 2026',
  title: 'Politique de Cookies',
  intro:
    "La présente Politique de Cookies explique comment Aevia utilise les cookies et traceurs sur l'ensemble de ses services numériques, conformément à la directive ePrivacy (2002/58/CE révisée), au Règlement Général sur la Protection des Données (RGPD) et aux recommandations de la Commission Nationale de l'Informatique et des Libertés (CNIL).",
  s1: {
    heading: "1. Qu'est-ce qu'un cookie ?",
    p1: "Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite et de personnaliser votre expérience.",
    p2: 'Les cookies peuvent être de session (supprimés à la fermeture du navigateur) ou persistants (conservés sur votre terminal pour une durée déterminée). Ils peuvent être déposés directement par le site visité (cookies propriétaires) ou par des services tiers intégrés (cookies tiers).',
    p3: 'Au sens large, le terme « cookie » dans la présente politique désigne également les autres technologies de traçage similaires : balises web (web beacons), pixels de suivi, stockage local (localStorage) et empreinte navigateur (fingerprinting).',
  },
  s2: {
    heading: '2. Services concernés',
    lead: "La présente politique s'applique à tous les services en ligne édités par Aevia :",
    services: [
      { tag: 'INBOX', name: 'inbox.aevia.services', desc: 'Plateforme CRM multi-canal' },
      { tag: 'LAUNCH', name: 'launch.aevia.services', desc: 'Générateur de sites web IA' },
      { tag: 'SECURITY', name: 'security.aevia.services', desc: "Plateforme d'audit de sécurité" },
      { tag: 'SITE', name: 'aevia.services', desc: 'Site institutionnel Aevia' },
    ],
  },
  s3: {
    heading: '3. Catégories de cookies utilisés',
    colName: 'Nom du cookie', colService: 'Service', colPurpose: 'Finalité', colDuration: 'Durée',
    badgeNoConsent: 'Aucun consentement requis', badgeConsent: 'Consentement requis', badgeFunctional: 'Fonctionnel — nécessaire',
    h31: '3.1 Cookies strictement nécessaires',
    p31: "Ces cookies sont indispensables au fonctionnement de nos services. Ils ne peuvent pas être désactivés sans compromettre l'accès aux fonctionnalités essentielles. Conformément à la réglementation CNIL et ePrivacy, leur dépôt ne nécessite pas votre consentement.",
    rows31: [
      { name: 'accessToken', service: 'Tous', purpose: "Authentification — stocke le jeton JWT de session de l'utilisateur connecté", duration: 'Session (fermeture navigateur)' },
      { name: '__Secure-session', service: 'Tous', purpose: 'Maintien de la session serveur (HttpOnly, Secure, SameSite=Strict)', duration: 'Session' },
      { name: 'csrf-token', service: 'Tous', purpose: 'Protection contre les attaques CSRF (Cross-Site Request Forgery)', duration: 'Session' },
      { name: 'locale', service: 'Tous', purpose: "Mémorisation de la langue sélectionnée par l'utilisateur", duration: '1 an' },
      { name: 'cookie-consent', service: 'Tous', purpose: 'Mémorisation des préférences de consentement aux cookies', duration: '13 mois' },
    ],
    h32: "3.2 Cookies analytiques et de mesure d'audience",
    p32: "Aevia utilise Google Analytics 4 (Google Ireland Ltd) pour mesurer l'audience de ses services. Ces cookies ne sont déposés qu'après votre acceptation explicite du bandeau :",
    items32: ['Cookies déposés : _ga et _ga_*, durée 13 mois', "Anonymisation d'IP activée", 'Responsable : Google Ireland Ltd ; traitement possible hors UE par Google LLC, sur la base du Data Privacy Framework', "Si vous refusez, le tag n'est pas chargé du tout — aucun cookie, aucune donnée transmise à Google", "Refuser n'enlève rien au service", 'Vous pouvez revenir sur votre choix en effaçant les données du site dans votre navigateur'],
    dataTitle: 'Données collectées par Google Analytics 4 :',
    dataItems: ['URL de la page visitée', 'Page de provenance (referrer — domaine uniquement)', "Type de navigateur et système d'exploitation (agrégé)", 'Pays de provenance (IP anonymisée)', "Type d'appareil (desktop, mobile, tablette)"],
    dataNote: 'Un identifiant de mesure est associé à votre navigateur via les cookies ci-dessus tant que vous avez accepté.',
    link32: 'Comment Google utilise les données de ses partenaires',
    h33: '3.3 Cookies tiers — Stripe (Paiements)',
    p33: "Lors du processus de paiement, Stripe dépose des cookies nécessaires au traitement sécurisé des transactions et à la prévention de la fraude. Ces cookies sont uniquement actifs lors de l'utilisation des fonctionnalités de paiement.",
    colPublisher: 'Éditeur',
    rows33: [
      { name: '__stripe_mid', service: 'Stripe, Inc.', purpose: 'Identifiant de navigateur pour la détection de fraude', duration: '1 an' },
      { name: '__stripe_sid', service: 'Stripe, Inc.', purpose: 'Identifiant de session pour la sécurité des transactions', duration: '30 minutes' },
      { name: 'm', service: 'Stripe, Inc.', purpose: 'Prévention de la fraude (empreinte navigateur)', duration: '2 ans' },
    ],
    link33: 'Politique de confidentialité Stripe',
    h34: '3.4 Cookies tiers — Meta / APIs de messagerie (Aevia Inbox uniquement)',
    p34a: "Dans le cadre d'Aevia Inbox, l'intégration des canaux WhatsApp, Instagram et Facebook Messenger nécessite une connexion aux APIs Meta. Cette connexion peut impliquer le dépôt de cookies Meta lors de l'authentification OAuth ou de l'utilisation des interfaces Meta Business.",
    p34b: "Aevia n'utilise pas le Pixel Meta pour des fins de remarketing ou de publicité ciblée. Les interactions avec les APIs Meta sont limitées à la transmission des messages dans le cadre de l'utilisation opérationnelle d'Aevia Inbox.",
    link34: 'Politique de cookies Meta',
    h35: '3.5 Stockage local (localStorage / sessionStorage)',
    colKey: 'Clé',
    p35: 'Nos applications utilisent le stockage local du navigateur (distinct des cookies) pour améliorer les performances et l\'expérience utilisateur :',
    rows35: [
      { name: 'aevia-theme', service: 'Tous', purpose: 'Préférence de thème (clair/sombre)', duration: 'Persistant' },
      { name: 'aevia-inbox-draft', service: 'Inbox', purpose: 'Sauvegarde automatique des brouillons de messages', duration: 'Session' },
      { name: 'aevia-sidebar-state', service: 'Inbox', purpose: 'État du panneau latéral (ouvert/fermé)', duration: 'Persistant' },
      { name: 'aevia-audit-history', service: 'Security', purpose: 'Historique local des URLs auditées récemment', duration: '30 jours' },
    ],
  },
  s4: {
    heading: '4. Base légale et consentement',
    exemptTitle: 'Cookies exemptés de consentement (Article 82 de la loi Informatique et Libertés)',
    exempt: "Conformément aux lignes directrices de la CNIL du 17 septembre 2020, seuls les cookies strictement nécessaires au fonctionnement du service sont exemptés de consentement préalable. Google Analytics 4 ne bénéficie pas de cette exemption : il n'est chargé qu'après votre acceptation explicite.",
    consentTitle: 'Cookies soumis à consentement (RGPD Art. 6.1.a)',
    consent: "Les cookies tiers (Stripe hors transaction, Meta) nécessitent votre consentement préalable, libre, éclairé et spécifique. Ce consentement est recueilli via notre bandeau d'information cookies lors de votre première visite. Vous pouvez retirer votre consentement à tout moment.",
  },
  s5: {
    heading: '5. Durée de conservation des cookies',
    p1a: "Conformément à la recommandation de la CNIL, aucun cookie déposé par Aevia n'a une durée de vie supérieure à ",
    p1strong: '13 mois',
    p1b: '. Passé ce délai, votre consentement est à nouveau sollicité.',
    p2: 'Les cookies de session (sans durée explicite) sont automatiquement supprimés à la fermeture de votre navigateur. Les durées de conservation spécifiques à chaque cookie sont détaillées dans les tableaux de la section 3.',
  },
  s6: {
    heading: '6. Comment gérer vos préférences de cookies',
    h61: '6.1 Via notre gestionnaire de consentement',
    p61: "Vous pouvez à tout moment modifier vos préférences en matière de cookies en cliquant sur le lien « Gérer mes cookies » disponible dans le pied de page de chacun de nos services. Vos préférences sont mémorisées pendant 13 mois.",
    h62: '6.2 Via les paramètres de votre navigateur',
    p62: "Vous pouvez configurer votre navigateur pour accepter, refuser ou supprimer les cookies à tout moment. Notez que la désactivation des cookies nécessaires au fonctionnement peut altérer votre accès aux services Aevia (notamment l'authentification).",
    browserGuide: 'Guide officiel',
    h63: '6.3 Opposition au suivi publicitaire',
    p63: "Aevia n'utilise pas de cookies publicitaires ou de remarketing à ce jour. Si vous souhaitez vous opposer au suivi comportemental par des tiers en général, vous pouvez utiliser les outils suivants :",
    h64: '6.4 Refuser Google Analytics 4',
    p64a: 'Le moyen le plus simple est de cliquer Tout refuser sur le bandeau : le tag n\'est alors jamais chargé, aucun cookie n\'est déposé et rien n\'est transmis à Google. Pour revenir sur un consentement déjà donné, effacez les données de ce site dans votre navigateur — le bandeau réapparaîtra. Google propose également un ',
    p64optout: 'module de désactivation',
    p64b: ' valable sur tous les sites utilisant Google Analytics.',
  },
  s7: {
    heading: '7. Conformité CNIL et ePrivacy',
    lead: 'La présente politique de cookies a été rédigée en conformité avec :',
    items: ['Les Lignes directrices de la CNIL du 17 septembre 2020 sur les cookies et autres traceurs', 'La Recommandation CNIL du 17 septembre 2020 relative aux modalités de recueil du consentement', "L'article 82 de la loi Informatique et Libertés (modifiée par l'ordonnance 2018-1125 transposant le RGPD)", 'La Directive ePrivacy 2002/58/CE (révisée par la Directive 2009/136/CE)', 'Le RGPD — Règlement (UE) 2016/679'],
    auditTitle: 'Audit de conformité cookies',
    auditA: "Aevia s'engage à auditer régulièrement les cookies déposés sur ses services (au minimum annuellement) et à mettre à jour la présente politique en conséquence. En cas de détection d'un cookie non référencé, vous pouvez nous le signaler à ",
    auditB: '.',
  },
  s8: {
    heading: '8. Vos droits et voies de recours',
    lead: "Vous disposez d'un droit d'accès, de rectification et de suppression concernant les données collectées via les cookies. Pour exercer ces droits :",
    items: ['Contactez-nous à privacy@aevia.services', 'Consultez notre Politique de Confidentialité pour vos droits RGPD complets', 'En cas de désaccord, saisissez la CNIL : cnil.fr'],
  },
  s9: {
    heading: '9. Modifications de la politique de cookies',
    text: "La présente politique peut être modifiée à tout moment pour refléter l'ajout de nouveaux cookies, des changements réglementaires ou des mises à jour de nos pratiques. En cas de modification substantielle affectant les cookies soumis à consentement, votre accord sera à nouveau sollicité. La date de dernière mise à jour est indiquée en tête de ce document.",
  },
  s10: {
    heading: '10. Contact',
    title: 'Pour toute question concernant les cookies Aevia :',
    emailLabel: 'Email',
    controllerLabel: 'Responsable',
    controllerValue: 'Aevia WS — Valentin Milliand, SIREN 852 546 225 (RCS Bourg-en-Bresse), France',
    relatedLabel: 'Documents liés :',
    privacyLink: 'Politique de Confidentialité',
    termsLink: "Conditions Générales d'Utilisation et de Vente",
    mentionsLink: 'Mentions légales',
  },
  disclaimer: "Ce document est publié à titre informatif et constitue la politique de cookies effective d'Aevia. Cette politique a été rédigée en conformité avec les exigences de la CNIL et du RGPD à la date indiquée en en-tête. Pour tout conseil juridique spécifique à votre situation, consultez un avocat qualifié en droit du numérique.",
};

const en: CookiesContent = {
  lastUpdated: 'Last updated: 19 April 2026',
  title: 'Cookie Policy',
  intro:
    'This Cookie Policy explains how Aevia uses cookies and trackers across all its digital services, in accordance with the ePrivacy Directive (2002/58/EC as amended), the General Data Protection Regulation (GDPR) and the recommendations of the French Data Protection Authority (CNIL).',
  s1: {
    heading: '1. What is a cookie?',
    p1: 'A cookie is a small text file placed on your device (computer, smartphone, tablet) when you visit a website. It lets the site remember information about your visit and personalise your experience.',
    p2: 'Cookies may be session cookies (deleted when the browser closes) or persistent (kept on your device for a set period). They may be placed directly by the visited site (first-party cookies) or by integrated third-party services (third-party cookies).',
    p3: 'Broadly, the term "cookie" in this policy also covers other similar tracking technologies: web beacons, tracking pixels, local storage (localStorage) and browser fingerprinting.',
  },
  s2: {
    heading: '2. Services concerned',
    lead: 'This policy applies to all online services published by Aevia:',
    services: [
      { tag: 'INBOX', name: 'inbox.aevia.services', desc: 'Multi-channel CRM platform' },
      { tag: 'LAUNCH', name: 'launch.aevia.services', desc: 'AI website generator' },
      { tag: 'SECURITY', name: 'security.aevia.services', desc: 'Security-audit platform' },
      { tag: 'SITE', name: 'aevia.services', desc: 'Aevia corporate site' },
    ],
  },
  s3: {
    heading: '3. Categories of cookies used',
    colName: 'Cookie name', colService: 'Service', colPurpose: 'Purpose', colDuration: 'Duration',
    badgeNoConsent: 'No consent required', badgeConsent: 'Consent required', badgeFunctional: 'Functional — necessary',
    h31: '3.1 Strictly necessary cookies',
    p31: 'These cookies are essential for our services to work. They cannot be disabled without compromising access to core features. Under CNIL and ePrivacy rules, placing them does not require your consent.',
    rows31: [
      { name: 'accessToken', service: 'All', purpose: 'Authentication — stores the logged-in user\'s session JWT', duration: 'Session (browser close)' },
      { name: '__Secure-session', service: 'All', purpose: 'Server-session maintenance (HttpOnly, Secure, SameSite=Strict)', duration: 'Session' },
      { name: 'csrf-token', service: 'All', purpose: 'Protection against CSRF (Cross-Site Request Forgery) attacks', duration: 'Session' },
      { name: 'locale', service: 'All', purpose: "Stores the language selected by the user", duration: '1 year' },
      { name: 'cookie-consent', service: 'All', purpose: 'Stores your cookie-consent preferences', duration: '13 months' },
    ],
    h32: '3.2 Analytics and audience-measurement cookies',
    p32: 'Aevia uses Google Analytics 4 (Google Ireland Ltd) to measure the audience of its services. These cookies are only placed after your explicit acceptance of the banner:',
    items32: ['Cookies placed: _ga and _ga_*, duration 13 months', 'IP anonymisation enabled', 'Controller: Google Ireland Ltd; processing possible outside the EU by Google LLC, on the basis of the Data Privacy Framework', 'If you refuse, the tag is not loaded at all — no cookie, no data sent to Google', 'Refusing takes nothing away from the service', 'You can change your choice by clearing the site data in your browser'],
    dataTitle: 'Data collected by Google Analytics 4:',
    dataItems: ['URL of the visited page', 'Referring page (referrer — domain only)', 'Browser type and operating system (aggregated)', 'Country of origin (anonymised IP)', 'Device type (desktop, mobile, tablet)'],
    dataNote: 'A measurement identifier is associated with your browser via the cookies above for as long as you have accepted.',
    link32: 'How Google uses data from its partners',
    h33: '3.3 Third-party cookies — Stripe (Payments)',
    p33: 'During the payment process, Stripe places cookies needed for secure transaction processing and fraud prevention. These cookies are only active when you use the payment features.',
    colPublisher: 'Publisher',
    rows33: [
      { name: '__stripe_mid', service: 'Stripe, Inc.', purpose: 'Browser identifier for fraud detection', duration: '1 year' },
      { name: '__stripe_sid', service: 'Stripe, Inc.', purpose: 'Session identifier for transaction security', duration: '30 minutes' },
      { name: 'm', service: 'Stripe, Inc.', purpose: 'Fraud prevention (browser fingerprint)', duration: '2 years' },
    ],
    link33: 'Stripe Privacy Policy',
    h34: '3.4 Third-party cookies — Meta / messaging APIs (Aevia Inbox only)',
    p34a: 'Within Aevia Inbox, integrating the WhatsApp, Instagram and Facebook Messenger channels requires a connection to the Meta APIs. This connection may involve placing Meta cookies during OAuth authentication or use of the Meta Business interfaces.',
    p34b: 'Aevia does not use the Meta Pixel for remarketing or targeted advertising. Interactions with the Meta APIs are limited to transmitting messages as part of the operational use of Aevia Inbox.',
    link34: 'Meta Cookie Policy',
    h35: '3.5 Local storage (localStorage / sessionStorage)',
    colKey: 'Key',
    p35: 'Our applications use the browser\'s local storage (distinct from cookies) to improve performance and user experience:',
    rows35: [
      { name: 'aevia-theme', service: 'All', purpose: 'Theme preference (light/dark)', duration: 'Persistent' },
      { name: 'aevia-inbox-draft', service: 'Inbox', purpose: 'Automatic saving of message drafts', duration: 'Session' },
      { name: 'aevia-sidebar-state', service: 'Inbox', purpose: 'Side-panel state (open/closed)', duration: 'Persistent' },
      { name: 'aevia-audit-history', service: 'Security', purpose: 'Local history of recently audited URLs', duration: '30 days' },
    ],
  },
  s4: {
    heading: '4. Legal basis and consent',
    exemptTitle: 'Cookies exempt from consent (Article 82 of the French Data Protection Act)',
    exempt: 'In accordance with the CNIL guidelines of 17 September 2020, only cookies strictly necessary for the operation of the service are exempt from prior consent. Google Analytics 4 does not benefit from this exemption: it is loaded only after your explicit acceptance.',
    consentTitle: 'Cookies subject to consent (GDPR Art. 6.1.a)',
    consent: 'Third-party cookies (Stripe outside a transaction, Meta) require your prior, free, informed and specific consent. This consent is collected via our cookie banner on your first visit. You can withdraw your consent at any time.',
  },
  s5: {
    heading: '5. Cookie retention period',
    p1a: 'In accordance with the CNIL recommendation, no cookie placed by Aevia has a lifespan longer than ',
    p1strong: '13 months',
    p1b: '. After this period, your consent is requested again.',
    p2: 'Session cookies (with no explicit duration) are automatically deleted when you close your browser. The specific retention periods for each cookie are detailed in the tables in section 3.',
  },
  s6: {
    heading: '6. How to manage your cookie preferences',
    h61: '6.1 Via our consent manager',
    p61: 'You can change your cookie preferences at any time by clicking the "Manage my cookies" link available in the footer of each of our services. Your preferences are stored for 13 months.',
    h62: '6.2 Via your browser settings',
    p62: 'You can configure your browser to accept, refuse or delete cookies at any time. Note that disabling cookies necessary for operation may impair your access to Aevia services (notably authentication).',
    browserGuide: 'Official guide',
    h63: '6.3 Opting out of advertising tracking',
    p63: 'Aevia does not currently use advertising or remarketing cookies. If you wish to object to behavioural tracking by third parties in general, you can use the following tools:',
    h64: '6.4 Refusing Google Analytics 4',
    p64a: 'The simplest way is to click Refuse all on the banner: the tag is then never loaded, no cookie is placed and nothing is sent to Google. To reverse a consent already given, clear this site\'s data in your browser — the banner will reappear. Google also offers an ',
    p64optout: 'opt-out add-on',
    p64b: ' valid on all sites using Google Analytics.',
  },
  s7: {
    heading: '7. CNIL and ePrivacy compliance',
    lead: 'This cookie policy was drafted in compliance with:',
    items: ['The CNIL Guidelines of 17 September 2020 on cookies and other trackers', 'The CNIL Recommendation of 17 September 2020 on the methods for collecting consent', 'Article 82 of the French Data Protection Act (amended by Ordinance 2018-1125 transposing the GDPR)', 'The ePrivacy Directive 2002/58/EC (amended by Directive 2009/136/EC)', 'The GDPR — Regulation (EU) 2016/679'],
    auditTitle: 'Cookie compliance audit',
    auditA: 'Aevia undertakes to audit the cookies placed on its services regularly (at least annually) and to update this policy accordingly. If you spot an unreferenced cookie, you can report it to us at ',
    auditB: '.',
  },
  s8: {
    heading: '8. Your rights and remedies',
    lead: 'You have a right of access, rectification and deletion regarding data collected via cookies. To exercise these rights:',
    items: ['Contact us at privacy@aevia.services', 'See our Privacy Policy for your full GDPR rights', 'In case of disagreement, refer the matter to the CNIL: cnil.fr'],
  },
  s9: {
    heading: '9. Changes to the cookie policy',
    text: 'This policy may be changed at any time to reflect the addition of new cookies, regulatory changes or updates to our practices. In the event of a substantial change affecting cookies subject to consent, your agreement will be requested again. The last-updated date is shown at the top of this document.',
  },
  s10: {
    heading: '10. Contact',
    title: 'For any question about Aevia cookies:',
    emailLabel: 'Email',
    controllerLabel: 'Controller',
    controllerValue: 'Aevia WS — Valentin Milliand, SIREN 852 546 225 (Bourg-en-Bresse Trade Register), France',
    relatedLabel: 'Related documents:',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Use and Sale',
    mentionsLink: 'Legal notice',
  },
  disclaimer: "This document is published for information purposes and constitutes Aevia's effective cookie policy. It was drafted in compliance with CNIL and GDPR requirements as at the date shown in the header. For any legal advice specific to your situation, consult a lawyer qualified in digital law.",
};

const es: CookiesContent = {
  lastUpdated: 'Última actualización: 19 de abril de 2026',
  title: 'Política de Cookies',
  intro:
    'La presente Política de Cookies explica cómo Aevia utiliza las cookies y rastreadores en todos sus servicios digitales, de conformidad con la Directiva ePrivacy (2002/58/CE revisada), el Reglamento General de Protección de Datos (RGPD) y las recomendaciones de la Autoridad Francesa de Protección de Datos (CNIL).',
  s1: {
    heading: '1. ¿Qué es una cookie?',
    p1: 'Una cookie es un pequeño archivo de texto que se deposita en su dispositivo (ordenador, smartphone, tableta) al visitar un sitio web. Permite al sitio recordar información sobre su visita y personalizar su experiencia.',
    p2: 'Las cookies pueden ser de sesión (se eliminan al cerrar el navegador) o persistentes (se conservan en su dispositivo durante un periodo determinado). Pueden ser depositadas directamente por el sitio visitado (cookies propias) o por servicios de terceros integrados (cookies de terceros).',
    p3: 'En sentido amplio, el término «cookie» en la presente política designa también otras tecnologías de rastreo similares: balizas web (web beacons), píxeles de seguimiento, almacenamiento local (localStorage) y huella del navegador (fingerprinting).',
  },
  s2: {
    heading: '2. Servicios afectados',
    lead: 'La presente política se aplica a todos los servicios en línea editados por Aevia:',
    services: [
      { tag: 'INBOX', name: 'inbox.aevia.services', desc: 'Plataforma CRM multicanal' },
      { tag: 'LAUNCH', name: 'launch.aevia.services', desc: 'Generador de sitios web con IA' },
      { tag: 'SECURITY', name: 'security.aevia.services', desc: 'Plataforma de auditoría de seguridad' },
      { tag: 'SITE', name: 'aevia.services', desc: 'Sitio institucional de Aevia' },
    ],
  },
  s3: {
    heading: '3. Categorías de cookies utilizadas',
    colName: 'Nombre de la cookie', colService: 'Servicio', colPurpose: 'Finalidad', colDuration: 'Duración',
    badgeNoConsent: 'No se requiere consentimiento', badgeConsent: 'Consentimiento requerido', badgeFunctional: 'Funcional — necesaria',
    h31: '3.1 Cookies estrictamente necesarias',
    p31: 'Estas cookies son indispensables para el funcionamiento de nuestros servicios. No pueden desactivarse sin comprometer el acceso a las funcionalidades esenciales. Conforme a la normativa CNIL y ePrivacy, su depósito no requiere su consentimiento.',
    rows31: [
      { name: 'accessToken', service: 'Todos', purpose: 'Autenticación — almacena el token JWT de sesión del usuario conectado', duration: 'Sesión (cierre del navegador)' },
      { name: '__Secure-session', service: 'Todos', purpose: 'Mantenimiento de la sesión del servidor (HttpOnly, Secure, SameSite=Strict)', duration: 'Sesión' },
      { name: 'csrf-token', service: 'Todos', purpose: 'Protección contra ataques CSRF (Cross-Site Request Forgery)', duration: 'Sesión' },
      { name: 'locale', service: 'Todos', purpose: 'Memorización del idioma seleccionado por el usuario', duration: '1 año' },
      { name: 'cookie-consent', service: 'Todos', purpose: 'Memorización de las preferencias de consentimiento de cookies', duration: '13 meses' },
    ],
    h32: '3.2 Cookies analíticas y de medición de audiencia',
    p32: 'Aevia utiliza Google Analytics 4 (Google Ireland Ltd) para medir la audiencia de sus servicios. Estas cookies solo se depositan tras su aceptación explícita del banner:',
    items32: ['Cookies depositadas: _ga y _ga_*, duración 13 meses', 'Anonimización de IP activada', 'Responsable: Google Ireland Ltd; posible tratamiento fuera de la UE por Google LLC, sobre la base del Data Privacy Framework', 'Si la rechaza, la etiqueta no se carga en absoluto: ninguna cookie, ningún dato transmitido a Google', 'Rechazar no resta nada al servicio', 'Puede cambiar su elección borrando los datos del sitio en su navegador'],
    dataTitle: 'Datos recopilados por Google Analytics 4:',
    dataItems: ['URL de la página visitada', 'Página de procedencia (referrer — solo el dominio)', 'Tipo de navegador y sistema operativo (agregado)', 'País de procedencia (IP anonimizada)', 'Tipo de dispositivo (escritorio, móvil, tableta)'],
    dataNote: 'Un identificador de medición se asocia a su navegador mediante las cookies anteriores mientras haya dado su aceptación.',
    link32: 'Cómo utiliza Google los datos de sus socios',
    h33: '3.3 Cookies de terceros — Stripe (Pagos)',
    p33: 'Durante el proceso de pago, Stripe deposita cookies necesarias para el tratamiento seguro de las transacciones y la prevención del fraude. Estas cookies solo están activas al utilizar las funcionalidades de pago.',
    colPublisher: 'Editor',
    rows33: [
      { name: '__stripe_mid', service: 'Stripe, Inc.', purpose: 'Identificador de navegador para la detección de fraude', duration: '1 año' },
      { name: '__stripe_sid', service: 'Stripe, Inc.', purpose: 'Identificador de sesión para la seguridad de las transacciones', duration: '30 minutos' },
      { name: 'm', service: 'Stripe, Inc.', purpose: 'Prevención del fraude (huella del navegador)', duration: '2 años' },
    ],
    link33: 'Política de privacidad de Stripe',
    h34: '3.4 Cookies de terceros — Meta / API de mensajería (solo Aevia Inbox)',
    p34a: 'En el marco de Aevia Inbox, la integración de los canales de WhatsApp, Instagram y Facebook Messenger requiere una conexión a las API de Meta. Esta conexión puede implicar el depósito de cookies de Meta durante la autenticación OAuth o el uso de las interfaces de Meta Business.',
    p34b: 'Aevia no utiliza el Píxel de Meta con fines de remarketing o publicidad dirigida. Las interacciones con las API de Meta se limitan a la transmisión de los mensajes en el marco del uso operativo de Aevia Inbox.',
    link34: 'Política de cookies de Meta',
    h35: '3.5 Almacenamiento local (localStorage / sessionStorage)',
    colKey: 'Clave',
    p35: 'Nuestras aplicaciones utilizan el almacenamiento local del navegador (distinto de las cookies) para mejorar el rendimiento y la experiencia de usuario:',
    rows35: [
      { name: 'aevia-theme', service: 'Todos', purpose: 'Preferencia de tema (claro/oscuro)', duration: 'Persistente' },
      { name: 'aevia-inbox-draft', service: 'Inbox', purpose: 'Guardado automático de los borradores de mensajes', duration: 'Sesión' },
      { name: 'aevia-sidebar-state', service: 'Inbox', purpose: 'Estado del panel lateral (abierto/cerrado)', duration: 'Persistente' },
      { name: 'aevia-audit-history', service: 'Security', purpose: 'Historial local de las URL auditadas recientemente', duration: '30 días' },
    ],
  },
  s4: {
    heading: '4. Base jurídica y consentimiento',
    exemptTitle: 'Cookies exentas de consentimiento (Artículo 82 de la Ley francesa de Protección de Datos)',
    exempt: 'De conformidad con las directrices de la CNIL de 17 de septiembre de 2020, solo las cookies estrictamente necesarias para el funcionamiento del servicio están exentas de consentimiento previo. Google Analytics 4 no goza de esta exención: solo se carga tras su aceptación explícita.',
    consentTitle: 'Cookies sujetas a consentimiento (RGPD Art. 6.1.a)',
    consent: 'Las cookies de terceros (Stripe fuera de transacción, Meta) requieren su consentimiento previo, libre, informado y específico. Este consentimiento se recoge a través de nuestro banner de cookies en su primera visita. Puede retirar su consentimiento en cualquier momento.',
  },
  s5: {
    heading: '5. Plazo de conservación de las cookies',
    p1a: 'De conformidad con la recomendación de la CNIL, ninguna cookie depositada por Aevia tiene una vida útil superior a ',
    p1strong: '13 meses',
    p1b: '. Transcurrido este plazo, se solicita de nuevo su consentimiento.',
    p2: 'Las cookies de sesión (sin duración explícita) se eliminan automáticamente al cerrar el navegador. Los plazos de conservación específicos de cada cookie se detallan en las tablas de la sección 3.',
  },
  s6: {
    heading: '6. Cómo gestionar sus preferencias de cookies',
    h61: '6.1 A través de nuestro gestor de consentimiento',
    p61: 'Puede modificar sus preferencias de cookies en cualquier momento haciendo clic en el enlace «Gestionar mis cookies» disponible en el pie de página de cada uno de nuestros servicios. Sus preferencias se conservan durante 13 meses.',
    h62: '6.2 A través de la configuración de su navegador',
    p62: 'Puede configurar su navegador para aceptar, rechazar o eliminar las cookies en cualquier momento. Tenga en cuenta que la desactivación de las cookies necesarias para el funcionamiento puede alterar su acceso a los servicios de Aevia (en particular la autenticación).',
    browserGuide: 'Guía oficial',
    h63: '6.3 Oposición al seguimiento publicitario',
    p63: 'Aevia no utiliza actualmente cookies publicitarias ni de remarketing. Si desea oponerse al seguimiento del comportamiento por parte de terceros en general, puede utilizar las siguientes herramientas:',
    h64: '6.4 Rechazar Google Analytics 4',
    p64a: 'La forma más sencilla es hacer clic en Rechazar todo en el banner: la etiqueta no se carga nunca, no se deposita ninguna cookie y no se transmite nada a Google. Para revocar un consentimiento ya otorgado, borre los datos de este sitio en su navegador: el banner reaparecerá. Google también ofrece un ',
    p64optout: 'complemento de inhabilitación',
    p64b: ' válido en todos los sitios que utilizan Google Analytics.',
  },
  s7: {
    heading: '7. Cumplimiento CNIL y ePrivacy',
    lead: 'La presente política de cookies se ha redactado de conformidad con:',
    items: ['Las Directrices de la CNIL de 17 de septiembre de 2020 sobre cookies y otros rastreadores', 'La Recomendación de la CNIL de 17 de septiembre de 2020 relativa a las modalidades de recogida del consentimiento', 'El artículo 82 de la Ley francesa de Protección de Datos (modificada por la Ordenanza 2018-1125 que transpone el RGPD)', 'La Directiva ePrivacy 2002/58/CE (revisada por la Directiva 2009/136/CE)', 'El RGPD — Reglamento (UE) 2016/679'],
    auditTitle: 'Auditoría de cumplimiento de cookies',
    auditA: 'Aevia se compromete a auditar regularmente las cookies depositadas en sus servicios (como mínimo anualmente) y a actualizar la presente política en consecuencia. Si detecta una cookie no referenciada, puede comunicárnoslo en ',
    auditB: '.',
  },
  s8: {
    heading: '8. Sus derechos y vías de recurso',
    lead: 'Dispone de un derecho de acceso, rectificación y supresión respecto a los datos recopilados mediante cookies. Para ejercer estos derechos:',
    items: ['Contáctenos en privacy@aevia.services', 'Consulte nuestra Política de Privacidad para sus derechos RGPD completos', 'En caso de desacuerdo, diríjase a la CNIL: cnil.fr'],
  },
  s9: {
    heading: '9. Modificaciones de la política de cookies',
    text: 'La presente política puede modificarse en cualquier momento para reflejar la incorporación de nuevas cookies, cambios normativos o actualizaciones de nuestras prácticas. En caso de modificación sustancial que afecte a las cookies sujetas a consentimiento, se solicitará de nuevo su conformidad. La fecha de última actualización se indica al principio de este documento.',
  },
  s10: {
    heading: '10. Contacto',
    title: 'Para cualquier pregunta relativa a las cookies de Aevia:',
    emailLabel: 'Correo',
    controllerLabel: 'Responsable',
    controllerValue: 'Aevia WS — Valentin Milliand, SIREN 852 546 225 (Registro Mercantil de Bourg-en-Bresse), Francia',
    relatedLabel: 'Documentos relacionados:',
    privacyLink: 'Política de Privacidad',
    termsLink: 'Condiciones Generales de Uso y de Venta',
    mentionsLink: 'Aviso legal',
  },
  disclaimer: 'Este documento se publica con carácter informativo y constituye la política de cookies efectiva de Aevia. Se ha redactado de conformidad con los requisitos de la CNIL y del RGPD en la fecha indicada en el encabezado. Para cualquier asesoramiento jurídico específico sobre su situación, consulte a un abogado cualificado en derecho digital.',
};

const de: CookiesContent = {
  lastUpdated: 'Zuletzt aktualisiert: 19. April 2026',
  title: 'Cookie-Richtlinie',
  intro:
    'Diese Cookie-Richtlinie erläutert, wie Aevia Cookies und Tracker in allen seinen digitalen Diensten verwendet, im Einklang mit der ePrivacy-Richtlinie (2002/58/EG in der geänderten Fassung), der Datenschutz-Grundverordnung (DSGVO) und den Empfehlungen der französischen Datenschutzbehörde (CNIL).',
  s1: {
    heading: '1. Was ist ein Cookie?',
    p1: 'Ein Cookie ist eine kleine Textdatei, die beim Besuch einer Website auf Ihrem Endgerät (Computer, Smartphone, Tablet) abgelegt wird. Sie ermöglicht es der Website, Informationen über Ihren Besuch zu speichern und Ihr Erlebnis zu personalisieren.',
    p2: 'Cookies können Sitzungscookies (werden beim Schließen des Browsers gelöscht) oder dauerhafte Cookies (werden für einen bestimmten Zeitraum auf Ihrem Gerät gespeichert) sein. Sie können direkt von der besuchten Website (Erstanbieter-Cookies) oder von integrierten Drittanbieterdiensten (Drittanbieter-Cookies) gesetzt werden.',
    p3: 'Im weiteren Sinne umfasst der Begriff „Cookie" in dieser Richtlinie auch andere ähnliche Tracking-Technologien: Web-Beacons, Tracking-Pixel, lokalen Speicher (localStorage) und Browser-Fingerprinting.',
  },
  s2: {
    heading: '2. Betroffene Dienste',
    lead: 'Diese Richtlinie gilt für alle von Aevia veröffentlichten Online-Dienste:',
    services: [
      { tag: 'INBOX', name: 'inbox.aevia.services', desc: 'Multichannel-CRM-Plattform' },
      { tag: 'LAUNCH', name: 'launch.aevia.services', desc: 'KI-Website-Generator' },
      { tag: 'SECURITY', name: 'security.aevia.services', desc: 'Plattform für Sicherheitsaudits' },
      { tag: 'SITE', name: 'aevia.services', desc: 'Aevia-Unternehmenswebsite' },
    ],
  },
  s3: {
    heading: '3. Kategorien der verwendeten Cookies',
    colName: 'Cookie-Name', colService: 'Dienst', colPurpose: 'Zweck', colDuration: 'Dauer',
    badgeNoConsent: 'Keine Einwilligung erforderlich', badgeConsent: 'Einwilligung erforderlich', badgeFunctional: 'Funktional — notwendig',
    h31: '3.1 Unbedingt erforderliche Cookies',
    p31: 'Diese Cookies sind für den Betrieb unserer Dienste unerlässlich. Sie können nicht deaktiviert werden, ohne den Zugang zu den Kernfunktionen zu beeinträchtigen. Gemäß den CNIL- und ePrivacy-Vorschriften erfordert ihr Setzen nicht Ihre Einwilligung.',
    rows31: [
      { name: 'accessToken', service: 'Alle', purpose: 'Authentifizierung — speichert das Sitzungs-JWT des angemeldeten Benutzers', duration: 'Sitzung (Browser schließen)' },
      { name: '__Secure-session', service: 'Alle', purpose: 'Aufrechterhaltung der Serversitzung (HttpOnly, Secure, SameSite=Strict)', duration: 'Sitzung' },
      { name: 'csrf-token', service: 'Alle', purpose: 'Schutz vor CSRF-Angriffen (Cross-Site Request Forgery)', duration: 'Sitzung' },
      { name: 'locale', service: 'Alle', purpose: 'Speicherung der vom Benutzer gewählten Sprache', duration: '1 Jahr' },
      { name: 'cookie-consent', service: 'Alle', purpose: 'Speicherung Ihrer Cookie-Einwilligungspräferenzen', duration: '13 Monate' },
    ],
    h32: '3.2 Analyse- und Reichweitenmessungs-Cookies',
    p32: 'Aevia verwendet Google Analytics 4 (Google Ireland Ltd) zur Messung der Reichweite seiner Dienste. Diese Cookies werden erst nach Ihrer ausdrücklichen Annahme des Banners gesetzt:',
    items32: ['Gesetzte Cookies: _ga und _ga_*, Dauer 13 Monate', 'IP-Anonymisierung aktiviert', 'Verantwortlicher: Google Ireland Ltd; Verarbeitung außerhalb der EU durch Google LLC auf Grundlage des Data Privacy Framework möglich', 'Wenn Sie ablehnen, wird das Tag überhaupt nicht geladen — kein Cookie, keine an Google übermittelten Daten', 'Eine Ablehnung nimmt dem Dienst nichts', 'Sie können Ihre Wahl ändern, indem Sie die Website-Daten in Ihrem Browser löschen'],
    dataTitle: 'Von Google Analytics 4 erhobene Daten:',
    dataItems: ['URL der besuchten Seite', 'Herkunftsseite (Referrer — nur Domain)', 'Browsertyp und Betriebssystem (aggregiert)', 'Herkunftsland (anonymisierte IP)', 'Gerätetyp (Desktop, Mobil, Tablet)'],
    dataNote: 'Solange Sie zugestimmt haben, wird Ihrem Browser über die obigen Cookies eine Mess-Kennung zugeordnet.',
    link32: 'Wie Google Daten von Partnern verwendet',
    h33: '3.3 Drittanbieter-Cookies — Stripe (Zahlungen)',
    p33: 'Während des Zahlungsvorgangs setzt Stripe Cookies, die für die sichere Transaktionsabwicklung und die Betrugsprävention erforderlich sind. Diese Cookies sind nur aktiv, wenn Sie die Zahlungsfunktionen nutzen.',
    colPublisher: 'Anbieter',
    rows33: [
      { name: '__stripe_mid', service: 'Stripe, Inc.', purpose: 'Browser-Kennung zur Betrugserkennung', duration: '1 Jahr' },
      { name: '__stripe_sid', service: 'Stripe, Inc.', purpose: 'Sitzungskennung für die Transaktionssicherheit', duration: '30 Minuten' },
      { name: 'm', service: 'Stripe, Inc.', purpose: 'Betrugsprävention (Browser-Fingerprint)', duration: '2 Jahre' },
    ],
    link33: 'Datenschutzerklärung von Stripe',
    h34: '3.4 Drittanbieter-Cookies — Meta / Messaging-APIs (nur Aevia Inbox)',
    p34a: 'Im Rahmen von Aevia Inbox erfordert die Integration der Kanäle WhatsApp, Instagram und Facebook Messenger eine Verbindung zu den Meta-APIs. Diese Verbindung kann das Setzen von Meta-Cookies während der OAuth-Authentifizierung oder der Nutzung der Meta-Business-Oberflächen mit sich bringen.',
    p34b: 'Aevia verwendet das Meta-Pixel nicht für Remarketing oder gezielte Werbung. Die Interaktionen mit den Meta-APIs beschränken sich auf die Übermittlung der Nachrichten im Rahmen des operativen Betriebs von Aevia Inbox.',
    link34: 'Cookie-Richtlinie von Meta',
    h35: '3.5 Lokaler Speicher (localStorage / sessionStorage)',
    colKey: 'Schlüssel',
    p35: 'Unsere Anwendungen nutzen den lokalen Speicher des Browsers (getrennt von den Cookies), um Leistung und Benutzererlebnis zu verbessern:',
    rows35: [
      { name: 'aevia-theme', service: 'Alle', purpose: 'Design-Präferenz (hell/dunkel)', duration: 'Dauerhaft' },
      { name: 'aevia-inbox-draft', service: 'Inbox', purpose: 'Automatisches Speichern von Nachrichtenentwürfen', duration: 'Sitzung' },
      { name: 'aevia-sidebar-state', service: 'Inbox', purpose: 'Zustand des Seitenbereichs (offen/geschlossen)', duration: 'Dauerhaft' },
      { name: 'aevia-audit-history', service: 'Security', purpose: 'Lokaler Verlauf der kürzlich geprüften URLs', duration: '30 Tage' },
    ],
  },
  s4: {
    heading: '4. Rechtsgrundlage und Einwilligung',
    exemptTitle: 'Von der Einwilligung ausgenommene Cookies (Artikel 82 des französischen Datenschutzgesetzes)',
    exempt: 'Gemäß den CNIL-Leitlinien vom 17. September 2020 sind nur die für den Betrieb des Dienstes unbedingt erforderlichen Cookies von der vorherigen Einwilligung ausgenommen. Google Analytics 4 fällt nicht unter diese Ausnahme: Es wird erst nach Ihrer ausdrücklichen Annahme geladen.',
    consentTitle: 'Einwilligungspflichtige Cookies (DSGVO Art. 6.1.a)',
    consent: 'Drittanbieter-Cookies (Stripe außerhalb einer Transaktion, Meta) erfordern Ihre vorherige, freiwillige, informierte und spezifische Einwilligung. Diese Einwilligung wird bei Ihrem ersten Besuch über unser Cookie-Banner eingeholt. Sie können Ihre Einwilligung jederzeit widerrufen.',
  },
  s5: {
    heading: '5. Speicherdauer der Cookies',
    p1a: 'Gemäß der Empfehlung der CNIL hat kein von Aevia gesetztes Cookie eine Lebensdauer von mehr als ',
    p1strong: '13 Monaten',
    p1b: '. Nach Ablauf dieser Frist wird Ihre Einwilligung erneut eingeholt.',
    p2: 'Sitzungscookies (ohne ausdrückliche Dauer) werden beim Schließen Ihres Browsers automatisch gelöscht. Die spezifischen Speicherfristen für jedes Cookie sind in den Tabellen in Abschnitt 3 aufgeführt.',
  },
  s6: {
    heading: '6. So verwalten Sie Ihre Cookie-Einstellungen',
    h61: '6.1 Über unseren Einwilligungsmanager',
    p61: 'Sie können Ihre Cookie-Einstellungen jederzeit ändern, indem Sie im Fußbereich jedes unserer Dienste auf den Link „Meine Cookies verwalten" klicken. Ihre Einstellungen werden 13 Monate lang gespeichert.',
    h62: '6.2 Über die Einstellungen Ihres Browsers',
    p62: 'Sie können Ihren Browser so konfigurieren, dass Cookies jederzeit akzeptiert, abgelehnt oder gelöscht werden. Beachten Sie, dass die Deaktivierung der für den Betrieb notwendigen Cookies Ihren Zugang zu den Aevia-Diensten beeinträchtigen kann (insbesondere die Authentifizierung).',
    browserGuide: 'Offizielle Anleitung',
    h63: '6.3 Widerspruch gegen Werbe-Tracking',
    p63: 'Aevia verwendet derzeit keine Werbe- oder Remarketing-Cookies. Wenn Sie dem verhaltensbezogenen Tracking durch Dritte allgemein widersprechen möchten, können Sie die folgenden Tools nutzen:',
    h64: '6.4 Google Analytics 4 ablehnen',
    p64a: 'Am einfachsten klicken Sie im Banner auf Alle ablehnen: Das Tag wird dann nie geladen, kein Cookie gesetzt und nichts an Google übermittelt. Um eine bereits erteilte Einwilligung zu widerrufen, löschen Sie die Daten dieser Website in Ihrem Browser — das Banner erscheint erneut. Google bietet außerdem ein ',
    p64optout: 'Deaktivierungs-Add-on',
    p64b: ', das auf allen Websites gilt, die Google Analytics verwenden.',
  },
  s7: {
    heading: '7. CNIL- und ePrivacy-Konformität',
    lead: 'Diese Cookie-Richtlinie wurde in Übereinstimmung mit Folgendem erstellt:',
    items: ['Den CNIL-Leitlinien vom 17. September 2020 zu Cookies und anderen Trackern', 'Der CNIL-Empfehlung vom 17. September 2020 zu den Modalitäten der Einholung der Einwilligung', 'Artikel 82 des französischen Datenschutzgesetzes (geändert durch die Verordnung 2018-1125 zur Umsetzung der DSGVO)', 'Der ePrivacy-Richtlinie 2002/58/EG (geändert durch die Richtlinie 2009/136/EG)', 'Der DSGVO — Verordnung (EU) 2016/679'],
    auditTitle: 'Cookie-Konformitätsaudit',
    auditA: 'Aevia verpflichtet sich, die auf seinen Diensten gesetzten Cookies regelmäßig (mindestens jährlich) zu prüfen und diese Richtlinie entsprechend zu aktualisieren. Wenn Sie ein nicht aufgeführtes Cookie entdecken, können Sie es uns melden unter ',
    auditB: '.',
  },
  s8: {
    heading: '8. Ihre Rechte und Rechtsbehelfe',
    lead: 'Sie haben ein Recht auf Auskunft, Berichtigung und Löschung hinsichtlich der über Cookies erhobenen Daten. Um diese Rechte auszuüben:',
    items: ['Kontaktieren Sie uns unter privacy@aevia.services', 'Sehen Sie in unserer Datenschutzerklärung Ihre vollständigen DSGVO-Rechte ein', 'Im Streitfall wenden Sie sich an die CNIL: cnil.fr'],
  },
  s9: {
    heading: '9. Änderungen der Cookie-Richtlinie',
    text: 'Diese Richtlinie kann jederzeit geändert werden, um das Hinzufügen neuer Cookies, regulatorische Änderungen oder Aktualisierungen unserer Praktiken abzubilden. Im Falle einer wesentlichen Änderung, die einwilligungspflichtige Cookies betrifft, wird Ihre Zustimmung erneut eingeholt. Das Datum der letzten Aktualisierung ist am Anfang dieses Dokuments angegeben.',
  },
  s10: {
    heading: '10. Kontakt',
    title: 'Bei allen Fragen zu den Aevia-Cookies:',
    emailLabel: 'E-Mail',
    controllerLabel: 'Verantwortlicher',
    controllerValue: 'Aevia WS — Valentin Milliand, SIREN 852 546 225 (Handelsregister Bourg-en-Bresse), Frankreich',
    relatedLabel: 'Zugehörige Dokumente:',
    privacyLink: 'Datenschutzerklärung',
    termsLink: 'Nutzungs- und Verkaufsbedingungen',
    mentionsLink: 'Impressum',
  },
  disclaimer: 'Dieses Dokument wird zu Informationszwecken veröffentlicht und stellt die geltende Cookie-Richtlinie von Aevia dar. Es wurde zum im Kopf angegebenen Datum in Übereinstimmung mit den Anforderungen der CNIL und der DSGVO erstellt. Für eine auf Ihre Situation zugeschnittene Rechtsberatung wenden Sie sich an einen im Digitalrecht qualifizierten Anwalt.',
};

const pt: CookiesContent = {
  lastUpdated: 'Última atualização: 19 de abril de 2026',
  title: 'Política de Cookies',
  intro:
    'A presente Política de Cookies explica como a Aevia utiliza os cookies e rastreadores em todos os seus serviços digitais, em conformidade com a Diretiva ePrivacy (2002/58/CE revista), o Regulamento Geral sobre a Proteção de Dados (RGPD) e as recomendações da Autoridade Francesa de Proteção de Dados (CNIL).',
  s1: {
    heading: '1. O que é um cookie?',
    p1: 'Um cookie é um pequeno ficheiro de texto colocado no seu dispositivo (computador, smartphone, tablet) ao visitar um site. Permite ao site memorizar informações sobre a sua visita e personalizar a sua experiência.',
    p2: 'Os cookies podem ser de sessão (eliminados ao fechar o navegador) ou persistentes (conservados no seu dispositivo durante um período determinado). Podem ser colocados diretamente pelo site visitado (cookies próprios) ou por serviços de terceiros integrados (cookies de terceiros).',
    p3: 'Em sentido amplo, o termo «cookie» na presente política designa também outras tecnologias de rastreio semelhantes: web beacons, píxeis de seguimento, armazenamento local (localStorage) e impressão digital do navegador (fingerprinting).',
  },
  s2: {
    heading: '2. Serviços abrangidos',
    lead: 'A presente política aplica-se a todos os serviços em linha editados pela Aevia:',
    services: [
      { tag: 'INBOX', name: 'inbox.aevia.services', desc: 'Plataforma CRM multicanal' },
      { tag: 'LAUNCH', name: 'launch.aevia.services', desc: 'Gerador de sites com IA' },
      { tag: 'SECURITY', name: 'security.aevia.services', desc: 'Plataforma de auditoria de segurança' },
      { tag: 'SITE', name: 'aevia.services', desc: 'Site institucional da Aevia' },
    ],
  },
  s3: {
    heading: '3. Categorias de cookies utilizados',
    colName: 'Nome do cookie', colService: 'Serviço', colPurpose: 'Finalidade', colDuration: 'Duração',
    badgeNoConsent: 'Nenhum consentimento necessário', badgeConsent: 'Consentimento necessário', badgeFunctional: 'Funcional — necessário',
    h31: '3.1 Cookies estritamente necessários',
    p31: 'Estes cookies são indispensáveis ao funcionamento dos nossos serviços. Não podem ser desativados sem comprometer o acesso às funcionalidades essenciais. Em conformidade com a regulamentação da CNIL e ePrivacy, a sua colocação não requer o seu consentimento.',
    rows31: [
      { name: 'accessToken', service: 'Todos', purpose: 'Autenticação — armazena o token JWT de sessão do utilizador autenticado', duration: 'Sessão (fecho do navegador)' },
      { name: '__Secure-session', service: 'Todos', purpose: 'Manutenção da sessão do servidor (HttpOnly, Secure, SameSite=Strict)', duration: 'Sessão' },
      { name: 'csrf-token', service: 'Todos', purpose: 'Proteção contra ataques CSRF (Cross-Site Request Forgery)', duration: 'Sessão' },
      { name: 'locale', service: 'Todos', purpose: 'Memorização do idioma selecionado pelo utilizador', duration: '1 ano' },
      { name: 'cookie-consent', service: 'Todos', purpose: 'Memorização das preferências de consentimento de cookies', duration: '13 meses' },
    ],
    h32: '3.2 Cookies analíticos e de medição de audiência',
    p32: 'A Aevia utiliza o Google Analytics 4 (Google Ireland Ltd) para medir a audiência dos seus serviços. Estes cookies só são colocados após a sua aceitação explícita do banner:',
    items32: ['Cookies colocados: _ga e _ga_*, duração 13 meses', 'Anonimização de IP ativada', 'Responsável: Google Ireland Ltd; possível tratamento fora da UE pela Google LLC, com base no Data Privacy Framework', 'Se recusar, a tag não é carregada de todo — nenhum cookie, nenhum dado transmitido ao Google', 'Recusar não retira nada ao serviço', 'Pode alterar a sua escolha apagando os dados do site no seu navegador'],
    dataTitle: 'Dados recolhidos pelo Google Analytics 4:',
    dataItems: ['URL da página visitada', 'Página de proveniência (referrer — apenas o domínio)', 'Tipo de navegador e sistema operativo (agregado)', 'País de proveniência (IP anonimizado)', 'Tipo de dispositivo (computador, telemóvel, tablet)'],
    dataNote: 'Um identificador de medição é associado ao seu navegador através dos cookies acima enquanto tiver dado a sua aceitação.',
    link32: 'Como o Google utiliza os dados dos seus parceiros',
    h33: '3.3 Cookies de terceiros — Stripe (Pagamentos)',
    p33: 'Durante o processo de pagamento, a Stripe coloca cookies necessários ao tratamento seguro das transações e à prevenção da fraude. Estes cookies só estão ativos durante a utilização das funcionalidades de pagamento.',
    colPublisher: 'Editor',
    rows33: [
      { name: '__stripe_mid', service: 'Stripe, Inc.', purpose: 'Identificador de navegador para a deteção de fraude', duration: '1 ano' },
      { name: '__stripe_sid', service: 'Stripe, Inc.', purpose: 'Identificador de sessão para a segurança das transações', duration: '30 minutos' },
      { name: 'm', service: 'Stripe, Inc.', purpose: 'Prevenção da fraude (impressão digital do navegador)', duration: '2 anos' },
    ],
    link33: 'Política de privacidade da Stripe',
    h34: '3.4 Cookies de terceiros — Meta / API de mensagens (apenas Aevia Inbox)',
    p34a: 'No âmbito da Aevia Inbox, a integração dos canais WhatsApp, Instagram e Facebook Messenger requer uma ligação às API da Meta. Esta ligação pode implicar a colocação de cookies da Meta durante a autenticação OAuth ou a utilização das interfaces Meta Business.',
    p34b: 'A Aevia não utiliza o Píxel da Meta para fins de remarketing ou publicidade direcionada. As interações com as API da Meta limitam-se à transmissão das mensagens no âmbito da utilização operacional da Aevia Inbox.',
    link34: 'Política de cookies da Meta',
    h35: '3.5 Armazenamento local (localStorage / sessionStorage)',
    colKey: 'Chave',
    p35: 'As nossas aplicações utilizam o armazenamento local do navegador (distinto dos cookies) para melhorar o desempenho e a experiência do utilizador:',
    rows35: [
      { name: 'aevia-theme', service: 'Todos', purpose: 'Preferência de tema (claro/escuro)', duration: 'Persistente' },
      { name: 'aevia-inbox-draft', service: 'Inbox', purpose: 'Guardar automaticamente os rascunhos de mensagens', duration: 'Sessão' },
      { name: 'aevia-sidebar-state', service: 'Inbox', purpose: 'Estado do painel lateral (aberto/fechado)', duration: 'Persistente' },
      { name: 'aevia-audit-history', service: 'Security', purpose: 'Histórico local dos URL auditados recentemente', duration: '30 dias' },
    ],
  },
  s4: {
    heading: '4. Base jurídica e consentimento',
    exemptTitle: 'Cookies isentos de consentimento (Artigo 82.º da Lei francesa de Proteção de Dados)',
    exempt: 'Em conformidade com as diretrizes da CNIL de 17 de setembro de 2020, apenas os cookies estritamente necessários ao funcionamento do serviço estão isentos de consentimento prévio. O Google Analytics 4 não beneficia desta isenção: só é carregado após a sua aceitação explícita.',
    consentTitle: 'Cookies sujeitos a consentimento (RGPD Art. 6.1.a)',
    consent: 'Os cookies de terceiros (Stripe fora de transação, Meta) requerem o seu consentimento prévio, livre, informado e específico. Este consentimento é recolhido através do nosso banner de cookies na sua primeira visita. Pode retirar o seu consentimento a qualquer momento.',
  },
  s5: {
    heading: '5. Prazo de conservação dos cookies',
    p1a: 'Em conformidade com a recomendação da CNIL, nenhum cookie colocado pela Aevia tem uma vida útil superior a ',
    p1strong: '13 meses',
    p1b: '. Findo este prazo, o seu consentimento é novamente solicitado.',
    p2: 'Os cookies de sessão (sem duração explícita) são automaticamente eliminados ao fechar o navegador. Os prazos de conservação específicos de cada cookie são detalhados nas tabelas da secção 3.',
  },
  s6: {
    heading: '6. Como gerir as suas preferências de cookies',
    h61: '6.1 Através do nosso gestor de consentimento',
    p61: 'Pode alterar as suas preferências de cookies a qualquer momento clicando na ligação «Gerir os meus cookies» disponível no rodapé de cada um dos nossos serviços. As suas preferências são conservadas durante 13 meses.',
    h62: '6.2 Através das definições do seu navegador',
    p62: 'Pode configurar o seu navegador para aceitar, recusar ou eliminar os cookies a qualquer momento. Tenha em conta que a desativação dos cookies necessários ao funcionamento pode alterar o seu acesso aos serviços da Aevia (nomeadamente a autenticação).',
    browserGuide: 'Guia oficial',
    h63: '6.3 Oposição ao seguimento publicitário',
    p63: 'A Aevia não utiliza atualmente cookies publicitários ou de remarketing. Se pretender opor-se ao seguimento comportamental por terceiros em geral, pode utilizar as seguintes ferramentas:',
    h64: '6.4 Recusar o Google Analytics 4',
    p64a: 'A forma mais simples é clicar em Recusar tudo no banner: a tag nunca é carregada, nenhum cookie é colocado e nada é transmitido ao Google. Para reverter um consentimento já dado, apague os dados deste site no seu navegador — o banner reaparecerá. O Google oferece também um ',
    p64optout: 'módulo de desativação',
    p64b: ' válido em todos os sites que utilizam o Google Analytics.',
  },
  s7: {
    heading: '7. Conformidade CNIL e ePrivacy',
    lead: 'A presente política de cookies foi redigida em conformidade com:',
    items: ['As Diretrizes da CNIL de 17 de setembro de 2020 sobre cookies e outros rastreadores', 'A Recomendação da CNIL de 17 de setembro de 2020 relativa às modalidades de recolha do consentimento', 'O artigo 82.º da Lei francesa de Proteção de Dados (alterada pela Portaria 2018-1125 que transpõe o RGPD)', 'A Diretiva ePrivacy 2002/58/CE (revista pela Diretiva 2009/136/CE)', 'O RGPD — Regulamento (UE) 2016/679'],
    auditTitle: 'Auditoria de conformidade de cookies',
    auditA: 'A Aevia compromete-se a auditar regularmente os cookies colocados nos seus serviços (no mínimo anualmente) e a atualizar a presente política em conformidade. Se detetar um cookie não referenciado, pode comunicá-lo em ',
    auditB: '.',
  },
  s8: {
    heading: '8. Os seus direitos e vias de recurso',
    lead: 'Dispõe de um direito de acesso, retificação e eliminação relativamente aos dados recolhidos através de cookies. Para exercer estes direitos:',
    items: ['Contacte-nos em privacy@aevia.services', 'Consulte a nossa Política de Privacidade para os seus direitos RGPD completos', 'Em caso de desacordo, dirija-se à CNIL: cnil.fr'],
  },
  s9: {
    heading: '9. Alterações à política de cookies',
    text: 'A presente política pode ser alterada a qualquer momento para refletir a adição de novos cookies, alterações regulamentares ou atualizações das nossas práticas. Em caso de alteração substancial que afete os cookies sujeitos a consentimento, o seu acordo será novamente solicitado. A data da última atualização é indicada no início deste documento.',
  },
  s10: {
    heading: '10. Contacto',
    title: 'Para qualquer questão relativa aos cookies da Aevia:',
    emailLabel: 'E-mail',
    controllerLabel: 'Responsável',
    controllerValue: 'Aevia WS — Valentin Milliand, SIREN 852 546 225 (Registo Comercial de Bourg-en-Bresse), França',
    relatedLabel: 'Documentos relacionados:',
    privacyLink: 'Política de Privacidade',
    termsLink: 'Condições Gerais de Utilização e de Venda',
    mentionsLink: 'Menções legais',
  },
  disclaimer: 'Este documento é publicado a título informativo e constitui a política de cookies efetiva da Aevia. Foi redigido em conformidade com os requisitos da CNIL e do RGPD à data indicada no cabeçalho. Para qualquer aconselhamento jurídico específico da sua situação, consulte um advogado qualificado em direito digital.',
};

export const COOKIES_CONTENT: Record<string, CookiesContent> = { fr, en, es, de, pt };
