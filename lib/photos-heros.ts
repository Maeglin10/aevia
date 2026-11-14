/**
 * Les photos du héros de l'accueil, et leurs crédits.
 *
 * Une seule liste pour le héros (components/HeroRotation.tsx) et pour le pied
 * de page (components/SiteFooter.tsx) : une photo ajoutée ici est créditée
 * d'office, une photo retirée cesse de l'être.
 *
 * Chaque photo a été choisie le 14/11/2026 sous « Utilisation gratuite sous la
 * Licence Unsplash », lu sur la page de la photo — aucune n'est Unsplash+.
 * Exclues volontairement : les photos de l'accueil d'Inbox (cuisiniers,
 * fleuriste, coiffeur, commerçant au téléphone, salle de restaurant, atelier de
 * mode) et la boulangère de Launch (Ekaterina Tyapkina, b5kN9ClBRNU).
 *
 * Fichiers : public/hero/<nom>-{paysage-1280,paysage-1920,paysage-2560,
 * portrait-750,portrait-1200}.{avif,webp}, pré-encodés depuis l'original
 * (paysage 16:10, portrait 3:5 centré sur la personne ; AVIF q50 en paysage,
 * q42 en portrait, WebP q72). Script : scratchpad `encoder-heros.mjs` de la
 * session du 14/11.
 */
export interface PhotoHeros {
  /** Préfixe des fichiers dans public/hero. */
  nom: string;
  /** Identifiant de la photo sur Unsplash. */
  id: string;
  auteur: string;
  profil: string;
  /** `object-position` : où garder le sujet quand l'écran recadre. */
  focale: string;
}

export const PHOTOS_HEROS: PhotoHeros[] = [
  // Menuisier, rabot en main — Dar es Salaam.
  { nom: "menuisier", id: "PxlKOcj0a3Q", auteur: "Ali Mkumbwa", profil: "https://unsplash.com/@mkumbwajr", focale: "50% 30%" },
  // Patron de café qui tient la pancarte « Yes, we're open ».
  { nom: "cafe-ouvert", id: "rmrTOC59HVo", auteur: "Vitaly Gariev", profil: "https://unsplash.com/@silverkblack", focale: "50% 30%" },
  // Pharmacienne devant ses rayonnages.
  { nom: "pharmacienne", id: "byGTytEGjBo", auteur: "National Cancer Institute", profil: "https://unsplash.com/@nci", focale: "35% 30%" },
  // Réparateur de vélos à l'établi.
  { nom: "atelier-velo", id: "yymfmaDXm3I", auteur: "pony", profil: "https://unsplash.com/@getapony", focale: "65% 30%" },
  // Cordonnier à son comptoir.
  { nom: "cordonnier", id: "01Je5DllMw8", auteur: "hongguang xu", profil: "https://unsplash.com/@hgxu", focale: "55% 55%" },
];

export const pagePhoto = (id: string) => `https://unsplash.com/photos/${id}`;
