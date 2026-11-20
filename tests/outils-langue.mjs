/*
  Outils partagés par le test des langues et par le vérificateur de
  traductions (tests/verifier-traductions.mjs).

  `ressembleAuFrancais` n'est pas un détecteur de langue général : c'est une
  liste de mots qui n'existent QU'EN FRANÇAIS parmi les cinq langues du site.
  Les faux amis ont été retirés un par un (« des » et « du » sont allemands,
  « mais » et « ou » portugais, « entre » et « le » espagnols, « plus »
  anglais). Un titre allemand, espagnol, anglais ou portugais n'en contient
  aucun ; un titre français en contient presque toujours un ou deux.
*/

const MARQUEURS_FRANCAIS = new Set([
  "votre", "vos", "notre", "nos", "pour", "les", "avec", "dans", "sont", "vous",
  "nous", "une", "est", "aux", "qui", "pas", "cette", "ces", "être", "comme",
  "fait", "sans", "leur", "leurs", "chez", "très", "aussi", "où", "et", "il",
  "ils", "elle", "elles", "combien", "coûte", "coûtent", "comment", "pourquoi",
  "quand", "faire", "professionnel", "professionnelle", "professionnels",
  "entreprise", "entreprises", "téléphonique", "téléphoniques", "rendez-vous",
  "aujourd", "voix", "appel", "appels", "réponse", "réponses", "sécurité",
  "gérer", "boîte", "données", "selon", "chaque", "lorsque", "toujours",
  "jamais", "beaucoup", "moins", "afin", "ainsi", "déjà", "peut", "faut",
  "lequel", "laquelle", "mieux", "vraiment", "clientèle", "artisans",
  "commerçants", "besoin", "devis", "doit", "doivent", "avoir",
]);

const ELISIONS = /(?:^|[^\p{L}])(?:l|d|qu|n|c|j|s)['’](?=[a-zàâéèêëîïôûùüÿœ])/giu;

export function mots(texte) {
  return (texte.toLowerCase().match(/[\p{L}][\p{L}-]*/gu) ?? []).filter(Boolean);
}

/** Nombre de marqueurs français et part qu'ils représentent. */
export function scoreFrancais(texte) {
  const liste = mots(texte.replace(/\]\([^)]*\)/g, "]"));
  const elisions = (texte.match(ELISIONS) ?? []).length;
  const marqueurs = liste.filter((m) => MARQUEURS_FRANCAIS.has(m)).length + elisions;
  return { marqueurs, total: liste.length, part: liste.length ? marqueurs / liste.length : 0 };
}

/**
 * Vrai si le texte se lit comme du français. Seuils calés sur le corpus :
 * aucun titre traduit existant ne les franchit, tous les titres français oui.
 */
export function ressembleAuFrancais(texte, { court = false } = {}) {
  const { marqueurs, part } = scoreFrancais(texte);
  return court ? marqueurs >= 2 || (marqueurs >= 1 && part >= 0.1) : part >= 0.06 && marqueurs >= 3;
}

/**
 * Les nombres d'un texte, normalisés en chiffres seuls : « 1 499 », « 1.499 »
 * et « 1,499 » donnent tous « 1499 » ; « 2,5 » et « 2.5 » donnent « 25 ».
 * Seuls ceux qui valent au moins 10 sont gardés : un petit nombre peut
 * légitimement s'écrire en toutes lettres dans une langue et pas dans l'autre.
 */
export function nombres(texte) {
  const brut = texte.match(/\d{1,3}(?:[   .,]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g) ?? [];
  return new Set(brut.map((n) => n.replace(/\D/g, "")).filter((n) => Number(n) >= 10));
}

/** Différences de nombres entre l'original et la traduction. */
export function ecartsDeNombres(original, traduction) {
  const a = nombres(original);
  const b = nombres(traduction);
  return {
    manquants: [...a].filter((n) => !b.has(n)),
    ajoutes: [...b].filter((n) => !a.has(n)),
  };
}

/** La charpente Markdown d'un article : titres, listes, tableaux, filets. */
export function charpente(contenu) {
  const lignes = contenu.split("\n").map((l) => l.trimEnd());
  return {
    h2: lignes.filter((l) => l.startsWith("## ")).length,
    h3: lignes.filter((l) => l.startsWith("### ")).length,
    puces: lignes.filter((l) => l.startsWith("- ")).length,
    numeros: lignes.filter((l) => /^\d+\.\s/.test(l)).length,
    tableau: lignes.filter((l) => l.startsWith("|")).length,
    filets: lignes.filter((l) => l === "---").length,
  };
}

/** Les URL des liens Markdown `[texte](url)`. */
export function liens(contenu) {
  return [...contenu.matchAll(/\[[^\]]+\]\(([^)\s]+)\)/g)].map((m) => m[1]);
}

/*
  La langue de l'Inbox qui correspond à chaque langue du hub. Le portugais du
  hub est BRÉSILIEN : il mène à /pt-br (l'Inbox garde /pt pour le portugais
  d'Europe). L'Inbox n'a pas d'allemand : l'anglais le remplace.
*/
export const LANGUE_INBOX = { fr: "fr", en: "en", es: "es", pt: "pt-br", de: "en" };

/**
 * L'URL qu'un lien de l'original doit devenir dans la langue `l` : les pages
 * du hub et de l'Inbox existent dans la langue du lecteur.
 */
export function lienAttendu(url, l) {
  const inbox = LANGUE_INBOX[l] ?? "en";
  return url
    .replace(/^(https:\/\/aevia\.services)?\/fr\//, (_, hote = "") => `${hote}/${l}/`)
    .replace(/^https:\/\/inbox\.aevia\.services\/(fr|en|es|pt-br|pt)(?=\/|$)/, `https://inbox.aevia.services/${inbox}`);
}

/** Mots qui trahissent le portugais d'Europe dans un texte censé être brésilien. */
export const PORTUGAIS_EUROPEEN = [
  "telemóvel", "telemóveis", "equipa", "equipas", "registo", "registos", "ecrã",
  "ecrãs", "ficheiro", "ficheiros", "utilizador", "utilizadores", "facto", "factos",
  "contacto", "contactos", "contactar", "telefónico", "telefónica", "telefónicos",
  "económico", "económica", "electrónico", "electrónica", "óptimo", "projecto",
  "objectivo", "efectivo", "selecção", "actual", "actualmente", "receção",
  "blogue", "sítio", "autocarro", "pequeno-almoço",
];

export function motsPortugaisEuropeen(texte) {
  const liste = new Set(mots(texte));
  return PORTUGAIS_EUROPEEN.filter((m) => (m.includes(" ") ? texte.toLowerCase().includes(m) : liste.has(m)));
}

/** Tutoiement en allemand : le site vouvoie (Sie). */
export function tutoiementAllemand(texte) {
  return [...new Set(texte.match(/\b(du|dein|deine|deinen|deinem|deiner|dich|dir|Du|Dein|Deine|Dich|Dir)\b/g) ?? [])];
}

/** Vosotros en espagnol : le site écrit un espagnol neutre (tú). */
export function vosotros(texte) {
  return [...new Set(texte.match(/\b(vosotros|vosotras|vuestro|vuestra|vuestros|vuestras|habéis|tenéis|podéis|queréis|sabéis)\b/gi) ?? [])];
}
