/*
  Permet à `node --test` d'importer directement les modules TypeScript du site
  (lib/*.ts), sans dépendance de test à installer.

  Node 22 sait retirer les types (`--experimental-strip-types`), mais il ne
  résout pas `./blog-posts-2026` sans extension ni l'alias `@/` : ce sont des
  conventions du compilateur Next. Ce crochet de résolution les traduit, et
  rien d'autre — aucun code n'est transformé.
*/
import { registerHooks } from "node:module";
import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const RACINE = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const EXTENSIONS = [".ts", ".tsx", "/index.ts"];

registerHooks({
  resolve(specifier, context, nextResolve) {
    let base = null;
    if (specifier.startsWith("@/")) {
      base = path.join(RACINE, specifier.slice(2));
    } else if ((specifier.startsWith("./") || specifier.startsWith("../")) && context.parentURL?.startsWith("file:")) {
      base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier);
    }
    if (base && !path.extname(base)) {
      for (const ext of EXTENSIONS) {
        if (existsSync(base + ext)) return nextResolve(pathToFileURL(base + ext).href, context);
      }
    }
    if (base && existsSync(base)) return nextResolve(pathToFileURL(base).href, context);
    return nextResolve(specifier, context);
  },
});
