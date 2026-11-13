import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'en', 'es', 'de', 'pt'],
  defaultLocale: 'fr',
  /*
    Pas d'en-tête HTTP `Link` hreflang : les pages déclarent les leurs dans le
    HTML, page par page, et elles seules savent ce qui existe vraiment.

    next-intl pose par défaut, sur CHAQUE réponse, un `Link` qui annonce les
    cinq langues et un `x-default` sans préfixe. Relevé en production le 13/11 :
    - un article traduit en en/es seulement annonçait aussi /de et /pt, deux
      pages en `noindex` dont la canonique vise le français ;
    - les comparatifs `/fr/vs/*`, en français seul, annonçaient quatre
      traductions qui n'existent pas, pendant que leur HTML n'en déclarait
      aucune ;
    - `x-default` visait `https://aevia.services/blog/...`, une URL qui répond
      307.
    Google lit l'en-tête ET le HTML ; deux jeux d'annotations qui se
    contredisent, c'est le cas où il les ignore tous les deux.
  */
  alternateLinks: false
});
