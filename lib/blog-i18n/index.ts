import type { BlogPostTranslation } from "../blog-posts";
import { DE_1 } from "./de-1";
import { DE_2 } from "./de-2";
import { DE_3 } from "./de-3";
import { DE_4 } from "./de-4";
import { PT_1 } from "./pt-1";
import { PT_2 } from "./pt-2";
import { PT_3 } from "./pt-3";
import { PT_4 } from "./pt-4";

/*
  Les traductions allemandes et portugaises (Brésil) des articles.

  Pourquoi à part : `blog-posts.ts` pèse déjà 280 Ko avec le français,
  l'anglais et l'espagnol écrits dans chaque article. Y insérer deux langues de
  plus l'aurait porté vers 450 Ko, et chaque modification serait devenue un
  conflit de fusion. Ici, une langue et un lot d'articles par fichier ; elles
  sont fusionnées dans `i18n` de chaque article par `blog-posts.ts`, et le
  reste du site n'en sait rien.

  Relevé du 20/11 : sur `/de` et `/pt`, la section « Ce que nous écrivons » de
  l'accueil et tout le blog affichaient des titres FRANÇAIS — aucun article
  n'existait dans ces deux langues.
*/
export const TRADUCTIONS_AJOUTEES: Record<string, Record<string, BlogPostTranslation>> = {
  de: { ...DE_1, ...DE_2, ...DE_3, ...DE_4 },
  pt: { ...PT_1, ...PT_2, ...PT_3, ...PT_4 },
};
