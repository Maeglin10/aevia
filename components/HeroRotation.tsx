"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { preload } from "react-dom";
import { PHOTOS_HEROS, type PhotoHeros } from "@/lib/photos-heros";

/**
 * Le fond du héros : des commerçants au travail, en fondu enchaîné.
 *
 * ## Pourquoi plusieurs photos
 *
 * `main` faisait tourner quatre photos Pexels ; le 12/11 elles ont été
 * remplacées par une seule (une boulangère, puis un menuisier). Retour de
 * Valentin le 14/11 : « on n'a plus qu'une photo ? il y avait une animation de
 * changement ». La rotation revient, avec cinq métiers : menuisier, café,
 * pharmacie, atelier vélo, cordonnerie. Liste et crédits : lib/photos-heros.ts.
 *
 * ## Le mouvement (règles d'animation de Valentin, 12/11)
 *
 * - Fondu enchaîné en ease-in-out, 1,2 s, une photo toutes les 6 s.
 * - « Ancien et nouvel état mêlés » : la nouvelle photo se pose PAR-DESSUS
 *   l'ancienne, qui reste opaque dessous jusqu'à la fin du fondu. Faire
 *   disparaître l'ancienne en même temps creuserait un trou sombre au milieu de
 *   la transition.
 * - Entrée en ease-out : la photo qui arrive se pose de 104 % à 100 % sur 8 s,
 *   sans ressort.
 * - `prefers-reduced-motion: reduce` : une photo fixe, ni fondu ni zoom.
 * - Onglet caché : la minuterie s'arrête, et repart au retour.
 *
 * ## Le chargement
 *
 * Seule la première photo est dans le HTML serveur, préchargée en priorité
 * haute (une balise par recadrage, chacune limitée à sa largeur d'écran). Les
 * quatre autres ne sont montées qu'après l'événement `load` de la page, en
 * priorité basse, et une photo n'entre dans la rotation qu'une fois chargée :
 * la rotation ne peut ni retarder le premier affichage, ni montrer une photo à
 * moitié téléchargée.
 */
const MEDIA_PAYSAGE = "(min-width: 640px)";
const MEDIA_PORTRAIT = "(max-width: 639.98px)";
const AFFICHAGE_MS = 6000;
const FONDU_MS = 1200;
const ZOOM_MS = 8000;
const EASE_IN_OUT = "cubic-bezier(0.65, 0, 0.35, 1)";
const EASE_OUT = "cubic-bezier(0.22, 1, 0.36, 1)";

const jeu = (nom: string, forme: "paysage" | "portrait", ext: "avif" | "webp") =>
  forme === "paysage"
    ? `/hero/${nom}-paysage-1280.${ext} 1280w, /hero/${nom}-paysage-1920.${ext} 1920w, /hero/${nom}-paysage-2560.${ext} 2560w`
    : `/hero/${nom}-portrait-750.${ext} 750w, /hero/${nom}-portrait-1200.${ext} 1200w`;

const REDUIT = "(prefers-reduced-motion: reduce)";
function abonner(rappel: () => void) {
  const m = window.matchMedia(REDUIT);
  m.addEventListener("change", rappel);
  return () => m.removeEventListener("change", rappel);
}
function useMouvementReduit() {
  return useSyncExternalStore(abonner, () => window.matchMedia(REDUIT).matches, () => false);
}

function Photo({ photo, prioritaire, onCharge }: { photo: PhotoHeros; prioritaire: boolean; onCharge: () => void }) {
  return (
    <picture>
      <source type="image/avif" media={MEDIA_PAYSAGE} srcSet={jeu(photo.nom, "paysage", "avif")} sizes="100vw" />
      <source type="image/webp" media={MEDIA_PAYSAGE} srcSet={jeu(photo.nom, "paysage", "webp")} sizes="100vw" />
      <source type="image/avif" srcSet={jeu(photo.nom, "portrait", "avif")} sizes="100vw" />
      {/* Fichiers pré-encodés en AVIF et WebP, deux recadrages : <picture> fait déjà le travail de next/image. */}
      <img
        src={`/hero/${photo.nom}-portrait-1200.webp`}
        srcSet={jeu(photo.nom, "portrait", "webp")}
        sizes="100vw"
        alt=""
        width={1200}
        height={2000}
        loading="eager"
        fetchPriority={prioritaire ? "high" : "low"}
        decoding="async"
        onLoad={onCharge}
        // Une image déjà en cache peut finir avant que React n'attache onLoad.
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) onCharge();
        }}
        className="h-full w-full object-cover"
        style={{ objectPosition: photo.focale }}
      />
    </picture>
  );
}

export function HeroRotation() {
  const premiere = PHOTOS_HEROS[0];
  // Précharger la première photo, en AVIF, recadrage par recadrage.
  preload(`/hero/${premiere.nom}-paysage-2560.avif`, {
    as: "image",
    type: "image/avif",
    imageSrcSet: jeu(premiere.nom, "paysage", "avif"),
    imageSizes: "100vw",
    fetchPriority: "high",
    media: MEDIA_PAYSAGE,
  });
  preload(`/hero/${premiere.nom}-portrait-1200.avif`, {
    as: "image",
    type: "image/avif",
    imageSrcSet: jeu(premiere.nom, "portrait", "avif"),
    imageSizes: "100vw",
    fetchPriority: "high",
    media: MEDIA_PORTRAIT,
  });

  const reduit = useMouvementReduit();
  const [actif, setActif] = useState(0);
  const [precedent, setPrecedent] = useState<number | null>(null);
  const [suite, setSuite] = useState(false);
  const [aTourne, setATourne] = useState(false);
  const charges = useRef(new Set<number>());

  // Les autres photos, seulement une fois la page chargée.
  useEffect(() => {
    if (reduit) return;
    const monter = () => setSuite(true);
    if (document.readyState === "complete") {
      const t = window.setTimeout(monter, 0);
      return () => window.clearTimeout(t);
    }
    window.addEventListener("load", monter, { once: true });
    return () => window.removeEventListener("load", monter);
  }, [reduit]);

  // La rotation : arrêtée si l'onglet est caché, jamais vers une photo non chargée.
  useEffect(() => {
    if (reduit || !suite) return;
    let minuteur: number | undefined;
    const planifier = (delai: number) => {
      window.clearTimeout(minuteur);
      if (document.hidden) return;
      minuteur = window.setTimeout(() => {
        const suivant = (actif + 1) % PHOTOS_HEROS.length;
        if (!charges.current.has(suivant)) {
          planifier(1000);
          return;
        }
        setPrecedent(actif);
        setActif(suivant);
        setATourne(true);
      }, delai);
    };
    planifier(AFFICHAGE_MS);
    const visibilite = () => (document.hidden ? window.clearTimeout(minuteur) : planifier(AFFICHAGE_MS));
    document.addEventListener("visibilitychange", visibilite);
    return () => {
      window.clearTimeout(minuteur);
      document.removeEventListener("visibilitychange", visibilite);
    };
  }, [reduit, suite, actif]);

  // Fin du fondu : l'ancienne photo peut quitter la scène.
  useEffect(() => {
    if (precedent === null) return;
    const t = window.setTimeout(() => setPrecedent(null), FONDU_MS + 50);
    return () => window.clearTimeout(t);
  }, [precedent]);

  return (
    <div aria-hidden className="absolute inset-x-0 bottom-0 top-[57px] -z-10 overflow-hidden">
      {PHOTOS_HEROS.map((photo, i) => {
        if (i > 0 && (!suite || reduit)) return null;
        const estActif = i === actif;
        const visible = estActif || i === precedent;
        // La première photo est déjà posée au premier rendu : pas de zoom sur
        // l'image qui fait le LCP. Elle zoome comme les autres aux tours suivants.
        const fixe = reduit || (i === 0 && !aTourne);
        return (
          <div
            key={photo.nom}
            data-photo={photo.nom}
            data-active={estActif ? "" : undefined}
            className="absolute inset-0"
            style={{
              opacity: visible ? 1 : 0,
              zIndex: estActif ? 2 : visible ? 1 : 0,
              transition: estActif && !reduit ? `opacity ${FONDU_MS}ms ${EASE_IN_OUT}` : "none",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                transform: visible || fixe ? "scale(1)" : "scale(1.04)",
                transition: estActif && !fixe ? `transform ${ZOOM_MS}ms ${EASE_OUT}` : "none",
              }}
            >
              <Photo photo={photo} prioritaire={i === 0} onCharge={() => charges.current.add(i)} />
            </div>
          </div>
        );
      })}

      {/*
        Le voile est LÉGER (30 %) : la photo doit se voir. La lisibilité du
        texte vient d'une zone sombre posée derrière le bloc de texte lui-même
        (voir app/[locale]/page.tsx), pas d'un voile uniforme sur toute l'image.
      */}
      <div className="absolute inset-0 z-10 bg-[#09090b]/30" />
      <div className="absolute -top-60 -right-60 z-10 w-[1000px] h-[1000px] rounded-full bg-red-700/10 blur-[180px]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-b from-transparent to-[#09090b]" />
    </div>
  );
}
