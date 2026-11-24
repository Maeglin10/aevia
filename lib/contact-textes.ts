/*
  Textes de la page contact, dans les cinq langues du site (2026-11-24).
  La page était à la racine (/contact), en français seulement, et les
  adresses /en/contact, /es/contact… renvoyaient 404.
  Coordonnées : celles des mentions légales (décision de Valentin, 2026-11-24 :
  téléphone affiché, ville du registre public, Bourg-en-Bresse).
*/
export const LANGUES_CONTACT = ["fr", "en", "es", "de", "pt"] as const;
export type LangueContact = (typeof LANGUES_CONTACT)[number];

export const TELEPHONE_AFFICHE = "+33 7 43 75 19 80";
export const TELEPHONE_LIEN = "+33743751980";
export const EMAIL_CONTACT = "valentinmilliand@aevia.services";

export interface TextesContact {
  titreMeta: string;
  descriptionMeta: string;
  titre: string;
  intro: string;
  nom: string;
  nomExemple: string;
  email: string;
  emailExemple: string;
  sujet: string;
  sujetExemple: string;
  message: string;
  messageExemple: string;
  envoyer: string;
  envoi: string;
  erreurNom: string;
  erreurEmail: string;
  erreurEmailInvalide: string;
  erreurMessage: string;
  erreurEnvoi: string;
  envoyeTitre: string;
  envoyeTexte: string;
  coordonnees: string;
  lieu: string;
  github: string;
  sujetsTitre: string;
  sujets: string[];
}

export const TEXTES_CONTACT: Record<LangueContact, TextesContact> = {
  fr: {
    titreMeta: "Contact | Aevia",
    descriptionMeta: "Contactez Aevia : accueil client IA, site web ou audit de sécurité. Réponse sous 24 heures, par e-mail ou par téléphone.",
    titre: "Prendre contact",
    intro: "Un accueil client IA, un site web, un audit ou une simple question : réponse sous 24 heures.",
    nom: "Nom",
    nomExemple: "Votre nom",
    email: "E-mail",
    emailExemple: "vous@exemple.fr",
    sujet: "Sujet",
    sujetExemple: "Accueil client IA, site web, audit…",
    message: "Message",
    messageExemple: "Votre activité, ce que vous voulez améliorer…",
    envoyer: "Envoyer",
    envoi: "Envoi…",
    erreurNom: "Indiquez votre nom.",
    erreurEmail: "Indiquez votre adresse e-mail.",
    erreurEmailInvalide: "Cette adresse e-mail ne semble pas valide.",
    erreurMessage: "Écrivez votre message.",
    erreurEnvoi: `L’envoi a échoué. Écrivez-nous directement à ${EMAIL_CONTACT}.`,
    envoyeTitre: "Message envoyé !",
    envoyeTexte: "Merci, nous vous répondons sous 24 heures.",
    coordonnees: "Coordonnées",
    lieu: "Bourg-en-Bresse (Ain), France — à distance partout en France",
    github: "Profil GitHub du fondateur",
    sujetsTitre: "On peut parler de…",
    sujets: [
      "Site web et modèles (Aevia Launch)",
      "Audit de sécurité (Aevia Security)",
      "Accueil client IA : téléphone, WhatsApp, Instagram (Aevia Inbox)",
      "Tarifs, démonstration ou essai",
    ],
  },
  en: {
    titreMeta: "Contact | Aevia",
    descriptionMeta: "Contact Aevia: AI customer reception, websites or security audits. We reply within 24 hours, by email or by phone.",
    titre: "Get in touch",
    intro: "AI customer reception, a website, an audit or a simple question: we reply within 24 hours.",
    nom: "Name",
    nomExemple: "Your name",
    email: "Email",
    emailExemple: "you@example.com",
    sujet: "Subject",
    sujetExemple: "AI reception, website, audit…",
    message: "Message",
    messageExemple: "Your business, what you want to improve…",
    envoyer: "Send",
    envoi: "Sending…",
    erreurNom: "Please enter your name.",
    erreurEmail: "Please enter your email address.",
    erreurEmailInvalide: "This email address does not look valid.",
    erreurMessage: "Please write your message.",
    erreurEnvoi: `Sending failed. Email us directly at ${EMAIL_CONTACT}.`,
    envoyeTitre: "Message sent!",
    envoyeTexte: "Thank you, we will reply within 24 hours.",
    coordonnees: "Contact details",
    lieu: "Bourg-en-Bresse (Ain), France — remote everywhere",
    github: "Founder's GitHub profile",
    sujetsTitre: "We can talk about…",
    sujets: [
      "Websites and templates (Aevia Launch)",
      "Security audit (Aevia Security)",
      "AI customer reception: phone, WhatsApp, Instagram (Aevia Inbox)",
      "Pricing, demo or trial",
    ],
  },
  es: {
    titreMeta: "Contacto | Aevia",
    descriptionMeta: "Contacta con Aevia: atención al cliente con IA, sitio web o auditoría de seguridad. Respuesta en 24 horas, por correo o por teléfono.",
    titre: "Contacto",
    intro: "Atención al cliente con IA, un sitio web, una auditoría o una simple pregunta: respuesta en 24 horas.",
    nom: "Nombre",
    nomExemple: "Tu nombre",
    email: "Correo electrónico",
    emailExemple: "tu@ejemplo.com",
    sujet: "Asunto",
    sujetExemple: "Atención con IA, sitio web, auditoría…",
    message: "Mensaje",
    messageExemple: "Tu negocio, lo que quieres mejorar…",
    envoyer: "Enviar",
    envoi: "Enviando…",
    erreurNom: "Indica tu nombre.",
    erreurEmail: "Indica tu correo electrónico.",
    erreurEmailInvalide: "Este correo electrónico no parece válido.",
    erreurMessage: "Escribe tu mensaje.",
    erreurEnvoi: `No se pudo enviar. Escríbenos directamente a ${EMAIL_CONTACT}.`,
    envoyeTitre: "¡Mensaje enviado!",
    envoyeTexte: "Gracias, te respondemos en 24 horas.",
    coordonnees: "Datos de contacto",
    lieu: "Bourg-en-Bresse (Ain), Francia — en remoto en todas partes",
    github: "Perfil de GitHub del fundador",
    sujetsTitre: "Podemos hablar de…",
    sujets: [
      "Sitios web y plantillas (Aevia Launch)",
      "Auditoría de seguridad (Aevia Security)",
      "Atención al cliente con IA: teléfono, WhatsApp, Instagram (Aevia Inbox)",
      "Precios, demostración o prueba",
    ],
  },
  de: {
    titreMeta: "Kontakt | Aevia",
    descriptionMeta: "Kontaktieren Sie Aevia: KI-Kundenempfang, Website oder Sicherheitsaudit. Antwort innerhalb von 24 Stunden, per E-Mail oder Telefon.",
    titre: "Kontakt aufnehmen",
    intro: "KI-Kundenempfang, eine Website, ein Audit oder eine einfache Frage: Antwort innerhalb von 24 Stunden.",
    nom: "Name",
    nomExemple: "Ihr Name",
    email: "E-Mail",
    emailExemple: "sie@beispiel.de",
    sujet: "Betreff",
    sujetExemple: "KI-Empfang, Website, Audit…",
    message: "Nachricht",
    messageExemple: "Ihr Unternehmen, was Sie verbessern möchten…",
    envoyer: "Senden",
    envoi: "Wird gesendet…",
    erreurNom: "Bitte geben Sie Ihren Namen ein.",
    erreurEmail: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
    erreurEmailInvalide: "Diese E-Mail-Adresse scheint ungültig zu sein.",
    erreurMessage: "Bitte schreiben Sie Ihre Nachricht.",
    erreurEnvoi: `Senden fehlgeschlagen. Schreiben Sie uns direkt an ${EMAIL_CONTACT}.`,
    envoyeTitre: "Nachricht gesendet!",
    envoyeTexte: "Danke, wir antworten innerhalb von 24 Stunden.",
    coordonnees: "Kontaktdaten",
    lieu: "Bourg-en-Bresse (Ain), Frankreich — überall per Fernzugriff",
    github: "GitHub-Profil des Gründers",
    sujetsTitre: "Wir können sprechen über…",
    sujets: [
      "Websites und Vorlagen (Aevia Launch)",
      "Sicherheitsaudit (Aevia Security)",
      "KI-Kundenempfang: Telefon, WhatsApp, Instagram (Aevia Inbox)",
      "Preise, Demo oder Test",
    ],
  },
  pt: {
    titreMeta: "Contacto | Aevia",
    descriptionMeta: "Contacte a Aevia: atendimento ao cliente com IA, site ou auditoria de segurança. Resposta em 24 horas, por e-mail ou por telefone.",
    titre: "Entrar em contacto",
    intro: "Atendimento ao cliente com IA, um site, uma auditoria ou uma simples pergunta: resposta em 24 horas.",
    nom: "Nome",
    nomExemple: "O seu nome",
    email: "E-mail",
    emailExemple: "voce@exemplo.com",
    sujet: "Assunto",
    sujetExemple: "Atendimento com IA, site, auditoria…",
    message: "Mensagem",
    messageExemple: "O seu negócio, o que quer melhorar…",
    envoyer: "Enviar",
    envoi: "A enviar…",
    erreurNom: "Indique o seu nome.",
    erreurEmail: "Indique o seu e-mail.",
    erreurEmailInvalide: "Este e-mail não parece válido.",
    erreurMessage: "Escreva a sua mensagem.",
    erreurEnvoi: `O envio falhou. Escreva-nos diretamente para ${EMAIL_CONTACT}.`,
    envoyeTitre: "Mensagem enviada!",
    envoyeTexte: "Obrigado, respondemos em 24 horas.",
    coordonnees: "Contactos",
    lieu: "Bourg-en-Bresse (Ain), França — à distância em todo o lado",
    github: "Perfil GitHub do fundador",
    sujetsTitre: "Podemos falar de…",
    sujets: [
      "Sites e modelos (Aevia Launch)",
      "Auditoria de segurança (Aevia Security)",
      "Atendimento ao cliente com IA: telefone, WhatsApp, Instagram (Aevia Inbox)",
      "Preços, demonstração ou teste",
    ],
  },
};
