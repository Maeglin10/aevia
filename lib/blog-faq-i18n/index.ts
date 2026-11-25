import type { BlogFaqItem } from "../blog-posts";
import { FAQ_EN } from "./en";
import { FAQ_ES } from "./es";
import { FAQ_DE } from "./de";
import { FAQ_PT } from "./pt";

/** Questions-réponses ajoutées le 2026-11-25, par langue puis par article. */
export const FAQ_TRADUITES: Record<string, Record<string, BlogFaqItem[]>> = {
  en: FAQ_EN,
  es: FAQ_ES,
  de: FAQ_DE,
  pt: FAQ_PT,
};
