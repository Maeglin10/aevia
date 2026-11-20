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

/**
 * Les nombres d'un texte, dans l'ordre et avec leurs répétitions. `tous` garde
 * aussi ceux sous 10 : dans un tableau, « 1 utilisateur » ne s'écrit jamais en
 * toutes lettres, et un « 1 » devenu « 3 » est un vrai écart.
 */
export function listeNombres(texte, { tous = false } = {}) {
  const brut = texte.match(/\d{1,3}(?:[\u0020\u00a0\u202f.,]\d{3})+(?:[.,]\d+)?|\d+(?:[.,]\d+)?/g) ?? [];
  return brut.map((n) => n.replace(/\D/g, "")).filter((n) => tous || Number(n) >= 10);
}

/**
 * Les blocs d'un corps Markdown, dans l'ordre : titre, élément de liste,
 * ligne de tableau, ou paragraphe (lignes contiguës). Les filets et la ligne
 * de séparation d'un tableau ne portent rien.
 */
export function blocs(contenu) {
  const sortie = [];
  let paragraphe = [];
  const fermer = () => {
    if (paragraphe.length) sortie.push({ type: "paragraphe", texte: paragraphe.join(" ") });
    paragraphe = [];
  };
  for (const brute of contenu.split("\n")) {
    const l = brute.trim();
    if (!l || l === "---") {
      fermer();
    } else if (/^#{1,6}\s/.test(l)) {
      fermer();
      sortie.push({ type: "titre", texte: l });
    } else if (/^(?:[-*]|\d+\.)\s/.test(l)) {
      fermer();
      sortie.push({ type: "liste", texte: l });
    } else if (l.startsWith("|")) {
      fermer();
      if (!/^\|[\s:|-]+\|?$/.test(l)) sortie.push({ type: "tableau", texte: l });
    } else {
      paragraphe.push(l);
    }
  }
  fermer();
  return sortie;
}

/**
 * Écarts de nombres BLOC PAR BLOC entre l'original et la traduction.
 *
 * Revue du 2026-11-20 : comparer un seul ensemble de nombres par article ne
 * voyait ni un prix déplacé d'une ligne de tableau à l'autre (Growth à 79 € et
 * Starter à 99 €), ni « 1 utilisateur » devenu « 3 », ni un nombre répété en
 * moins. Ici chaque bloc est comparé à son homologue :
 *  - ligne de tableau : mêmes nombres, MÊME ORDRE (les colonnes sont fixes),
 *    petits nombres compris ;
 *  - autre bloc : mêmes nombres (dès 10), dans l'ordre que veut la langue.
 * Renvoie [] quand tout concorde.
 */
// « 24h/24, 7j/7 » en français, « 24/7 » ou « 24 Stunden, 7 Tage » ailleurs :
// une répétition n'est pas un écart. Dans un tableau, seules les répétitions
// VOISINES sont fusionnées, pour garder l'ordre des colonnes.
const ensemble = (liste) => [...new Set(liste)].sort().join(" ");
const sansDoublonsVoisins = (liste) => liste.filter((n, i) => n !== liste[i - 1]).join(" ");

export function ecartsParBloc(original, traduction) {
  const a = blocs(original);
  const b = blocs(traduction);
  if (a.length !== b.length) {
    return [{ bloc: 0, raison: `${a.length} blocs dans l'original, ${b.length} dans la traduction` }];
  }
  const ecarts = [];
  a.forEach((x, i) => {
    const y = b[i];
    const tableau = x.type === "tableau";
    const na = listeNombres(x.texte, { tous: tableau });
    const nb = listeNombres(y.texte, { tous: tableau });
    const egal = tableau ? sansDoublonsVoisins(na) === sansDoublonsVoisins(nb) : ensemble(na) === ensemble(nb);
    if (x.type !== y.type || !egal) {
      ecarts.push({ bloc: i + 1, type: `${x.type}/${y.type}`, original: na, traduction: nb, extrait: y.texte.slice(0, 90) });
    }
  });
  return ecarts;
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
 * Sources externes publiées en français ET en anglais : une page non française
 * cite la version anglaise (la CNIL et l'ANSSI ne publient qu'en français et
 * en anglais).
 */
export const PAGES_TRADUITES = {
  "https://www.cnil.fr/fr/sanctions-et-mesures-correctrices-bilan-2024-de-laction-de-la-cnil":
    "https://www.cnil.fr/en/sanctions-and-corrective-measures-cnils-actions-2024",
  // ANSSI, Panorama de la cybermenace 2025 → Cyber Threat Overview 2025.
  "https://cert.cyber.gouv.fr/cti/CERTFR-2026-CTI-002/": "https://cert.cyber.gouv.fr/cti/CERTFR-2026-CTI-003/",
};

/**
 * L'URL qu'un lien de l'original doit devenir dans la langue `l` : les pages
 * du hub et de l'Inbox existent dans la langue du lecteur.
 */
export function lienAttendu(url, l) {
  const inbox = LANGUE_INBOX[l] ?? "en";
  if (l !== "fr" && PAGES_TRADUITES[url]) return PAGES_TRADUITES[url];
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
