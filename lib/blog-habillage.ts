/*
  L'habillage du blog — tout ce qui entoure les articles — dans les cinq
  langues, en un seul endroit pour l'index et pour l'article.

  Relevé le 20/11 : sous un article espagnol, « Continuer à lire », « Prêt à
  passer à l'action ? », « Prendre contact » et « Voir tous les articles »
  étaient écrits en dur en français ; l'index affichait « Besoin d'un coup de
  main pour votre présence digitale ? ». Une page qui se déclare `es` et
  termine en français, c'est pour le lecteur une page bâclée, et pour un
  moteur une page à moitié traduite.
*/

export type Habillage = {
  // Index
  lecture: string;
  aLaUne: string;
  lire: string;
  titreA: string;
  titreB: string;
  chapeau: string;
  ctaIndexTitre: string;
  ctaIndexTexte: string;
  // Article
  retour: string;
  suite: string;
  faq: string;
  ctaTitre: string;
  ctaTexte: string;
  contact: string;
  tous: string;
  /** Article réservé au public français, ouvert dans une autre langue. */
  seulementFr: string;
  versionFr: string;
  accueil: string;
};

export const HABILLAGE: Record<string, Habillage> = {
  fr: {
    lecture: "de lecture",
    aLaUne: "Article à la une",
    lire: "Lire l'article",
    titreA: "Conseils &",
    titreB: "ressources",
    chapeau: "Web, sécurité, CRM — des articles pratiques pour aider votre business à grandir sur internet.",
    ctaIndexTitre: "Besoin d'un coup de main pour votre présence digitale ?",
    ctaIndexTexte: "Site web, sécurité, gestion client — on peut en parler en 30 minutes.",
    retour: "Retour au blog",
    suite: "Continuer à lire",
    faq: "Questions fréquentes",
    ctaTitre: "Prêt à passer à l'action ?",
    ctaTexte: "Site web, audit sécurité ou gestion client — parlons de votre projet en 30 minutes.",
    contact: "Prendre contact",
    tous: "Voir tous les articles",
    seulementFr: "",
    versionFr: "",
    accueil: "Accueil",
  },
  en: {
    lecture: "read",
    aLaUne: "Featured",
    lire: "Read article",
    titreA: "Advice &",
    titreB: "resources",
    chapeau: "Web, security, CRM — practical articles to help your business grow online.",
    ctaIndexTitre: "Need a hand with your online presence?",
    ctaIndexTexte: "Website, security, customer management — we can talk it through in 30 minutes.",
    retour: "Back to the blog",
    suite: "Keep reading",
    faq: "Frequently asked questions",
    ctaTitre: "Ready to act?",
    ctaTexte: "Website, security audit or customer management — let's discuss your project in 30 minutes.",
    contact: "Get in touch",
    tous: "See all articles",
    seulementFr:
      "This article is written for businesses in France, so it is only available in French.",
    versionFr: "Back to the English blog",
    accueil: "Home",
  },
  es: {
    lecture: "de lectura",
    aLaUne: "Destacado",
    lire: "Leer artículo",
    titreA: "Consejos y",
    titreB: "recursos",
    chapeau: "Web, seguridad, CRM — artículos prácticos para hacer crecer tu negocio en internet.",
    ctaIndexTitre: "¿Necesitas una mano con tu presencia en internet?",
    ctaIndexTexte: "Web, seguridad, gestión de clientes — lo hablamos en 30 minutos.",
    retour: "Volver al blog",
    suite: "Seguir leyendo",
    faq: "Preguntas frecuentes",
    ctaTitre: "¿Listo para dar el paso?",
    ctaTexte: "Web, auditoría de seguridad o gestión de clientes — hablemos de tu proyecto en 30 minutos.",
    contact: "Contactar",
    tous: "Ver todos los artículos",
    seulementFr:
      "Este artículo está escrito para empresas de Francia, por eso solo está disponible en francés.",
    versionFr: "Volver al blog en español",
    accueil: "Inicio",
  },
  de: {
    lecture: "Lesezeit",
    aLaUne: "Empfohlen",
    lire: "Artikel lesen",
    titreA: "Tipps &",
    titreB: "Ressourcen",
    chapeau: "Web, Sicherheit, CRM — praktische Artikel, damit Ihr Unternehmen online wächst.",
    ctaIndexTitre: "Sie möchten Unterstützung für Ihren Online-Auftritt?",
    ctaIndexTexte: "Website, Sicherheit, Kundenverwaltung — wir besprechen es in 30 Minuten.",
    retour: "Zurück zum Blog",
    suite: "Weiterlesen",
    faq: "Häufige Fragen",
    ctaTitre: "Bereit für den nächsten Schritt?",
    ctaTexte: "Website, Sicherheitsaudit oder Kundenverwaltung — sprechen wir in 30 Minuten über Ihr Projekt.",
    contact: "Kontakt aufnehmen",
    tous: "Alle Artikel ansehen",
    seulementFr:
      "Dieser Artikel richtet sich an Unternehmen in Frankreich und ist deshalb nur auf Französisch verfügbar.",
    versionFr: "Zurück zum deutschen Blog",
    accueil: "Startseite",
  },
  pt: {
    lecture: "de leitura",
    aLaUne: "Em destaque",
    lire: "Ler artigo",
    titreA: "Dicas e",
    titreB: "recursos",
    chapeau: "Web, segurança, CRM — artigos práticos para ajudar o seu negócio a crescer na internet.",
    ctaIndexTitre: "Precisa de uma ajuda com a sua presença on-line?",
    ctaIndexTexte: "Site, segurança, gestão de clientes — dá para conversar sobre isso em 30 minutos.",
    retour: "Voltar ao blog",
    suite: "Continue lendo",
    faq: "Perguntas frequentes",
    ctaTitre: "Pronto para dar o próximo passo?",
    ctaTexte: "Site, auditoria de segurança ou gestão de clientes — vamos conversar sobre o seu projeto em 30 minutos.",
    contact: "Entrar em contato",
    tous: "Ver todos os artigos",
    seulementFr:
      "Este artigo foi escrito para empresas da França, por isso está disponível apenas em francês.",
    versionFr: "Voltar ao blog em português",
    accueil: "Início",
  },
};

export function habillage(langue: string): Habillage {
  return HABILLAGE[langue] ?? HABILLAGE.fr;
}

/** Étiquette BCP 47 : le portugais du site est celui du Brésil. */
export function etiquetteLangue(langue: string): string {
  return langue === "pt" ? "pt-BR" : langue;
}

const COULEURS_RUBRIQUE: Record<string, { bg: string; text: string; ring: string }> = {
  "Web & Marketing": { bg: "bg-red-500/10", text: "text-red-300", ring: "ring-red-500/20" },
  "Cybersécurité": { bg: "bg-emerald-500/10", text: "text-emerald-300", ring: "ring-emerald-500/20" },
  "CRM & Support": { bg: "bg-inbox/10", text: "text-inbox-light", ring: "ring-inbox/30" },
};

/**
 * La couleur suit la rubrique D'ORIGINE (`categoryKey`) : traduite, l'étiquette
 * « Ciberseguridad » ne trouvait plus « Cybersécurité » dans la table et
 * retombait sur le gris.
 */
export function styleRubrique(rubriqueOrigine: string | undefined) {
  return (
    COULEURS_RUBRIQUE[rubriqueOrigine ?? ""] ?? {
      bg: "bg-zinc-500/10",
      text: "text-zinc-300",
      ring: "ring-zinc-500/20",
    }
  );
}
