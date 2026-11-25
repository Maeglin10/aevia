/*
  Une FAQ balisée FAQPage doit être visible sur la page (consigne Google).
  Les 16 articles d'avant août 2026 sont sans FAQ avant le 2026-11-25 ; ils ont
  désormais `lib/blog-faq-ajouts.ts`, affichée sous l'article par la page.
  Ce test garantit : chaque article français a une FAQ de 3 questions ou plus,
  et aucune traduction n'hérite de la FAQ française.
*/
import "./charger-ts.mjs";
import { test } from "node:test";
import assert from "node:assert/strict";
const { BLOG_POSTS, localizePost } = await import("../lib/blog-posts.ts");

test("chaque article français a au moins 3 questions-réponses non vides", () => {
  for (const p of BLOG_POSTS) {
    assert.ok(p.faq && p.faq.length >= 3, `${p.slug} : FAQ absente ou trop courte`);
    for (const f of p.faq) {
      assert.ok(f.q.trim().endsWith("?"), `${p.slug} : question sans « ? » : ${f.q}`);
      assert.ok(f.a.trim().length > 20, `${p.slug} : réponse vide`);
    }
  }
});

test("une traduction sans FAQ propre n'affiche pas la FAQ française", () => {
  for (const p of BLOG_POSTS) {
    for (const [lang, t] of Object.entries(p.i18n ?? {})) {
      const l = localizePost(p, lang);
      assert.deepEqual(l.faq, t.faq, `${p.slug}/${lang} hérite de la FAQ française`);
    }
  }
});
