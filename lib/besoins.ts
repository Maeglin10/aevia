/*
  Les pages profondes des trois produits, depuis la page que Google visite.

  Mesuré le 13/11 par l'inspection d'URL : `aevia.services/fr` et `/en` sont
  indexées et explorées ; les pages solutions d'Inbox, le guide des prix de
  Launch et les guides de Security sont « inconnues de Google » ou
  « détectées, non indexées ». Un lien depuis une page qu'il explore est le
  signal qui leur manque.

  Relevé le 20/11 : ces pages n'existaient qu'en français, et l'accueil
  espagnol les annonçait « (en francés) ». Elles existent désormais dans la
  langue du lecteur, et chaque lien mène à SA version :
  - Inbox : /fr, /en, /es, /pt-br (le portugais du hub est brésilien) ;
    l'Inbox n'a pas d'allemand, le lecteur germanophone va vers l'anglais, et
    le lien le dit ;
  - Launch : /<langue>/prix-site-internet, et la démo du thème restaurant
    s'ouvre dans la langue passée par `?lang=` ;
  - Security : /<langue>/guides.
  Le français garde partout son URL historique. Le test
  tests/langues-articles.test.mjs vérifie qu'aucun lien d'une page non
  française ne mène vers du français.
*/
export const LANGUE_INBOX: Record<string, string> = { fr: "fr", en: "en", es: "es", pt: "pt-br", de: "en" };
/** La langue (code du hub) de la page Inbox vers laquelle on envoie. */
const langueAtteinteInbox = (l: string) => (l === "de" ? "en" : l);
const prefixe = (l: string) => (l === "fr" ? "" : `/${l}`);

export type CibleBesoin = { href: string; langue: string };
export const BESOINS: ((langue: string) => CibleBesoin)[] = [
  (l) => ({ href: `https://inbox.aevia.services/${LANGUE_INBOX[l] ?? "en"}/solutions/standard-telephonique-ia`, langue: langueAtteinteInbox(l) }),
  (l) => ({ href: `https://inbox.aevia.services/${LANGUE_INBOX[l] ?? "en"}/solutions/reservation-restaurant`, langue: langueAtteinteInbox(l) }),
  (l) => ({ href: `https://inbox.aevia.services/${LANGUE_INBOX[l] ?? "en"}/solutions/whatsapp-business`, langue: langueAtteinteInbox(l) }),
  (l) => ({ href: `https://inbox.aevia.services/${LANGUE_INBOX[l] ?? "en"}/pricing`, langue: langueAtteinteInbox(l) }),
  (l) => ({ href: `https://launch.aevia.services${prefixe(l)}/prix-site-internet`, langue: l }),
  (l) => ({ href: `https://launch.aevia.services/themes/restaurant${l === "fr" ? "" : `?lang=${l}`}`, langue: l }),
  (l) => ({ href: `https://security.aevia.services${prefixe(l)}/guides/dmarc`, langue: l }),
  (l) => ({ href: `https://security.aevia.services${prefixe(l)}/guides`, langue: l }),
];
