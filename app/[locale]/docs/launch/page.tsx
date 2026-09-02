import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
export const metadata: Metadata = {
  title: "Documentation Aevia Launch — génération de site en 2 h | Aevia",
  description:
    "Comment Aevia Launch construit un site professionnel à partir d'un formulaire : thèmes, contenu généré, domaine, Search Console et Analytics branchés.",
  alternates: { canonical: "https://aevia.services/docs/launch" },
  openGraph: {
    title: "Documentation Aevia Launch — génération de site en 2 h | Aevia",
    description:
      "Comment Aevia Launch construit un site professionnel à partir d'un formulaire : thèmes, contenu généré, domaine, Search Console et Analytics branchés.",
    url: "https://aevia.services/docs/launch",
    images: ["/og.png"],
  },
};

export default function DocsLaunchPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">Documentation · AeviaLaunch</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        AeviaLaunch
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        AeviaLaunch génère un site web professionnel à partir d&apos;un template et des informations
        de l&apos;entreprise (secteur, description, charte graphique, textes). Le client choisit un
        template, remplit un formulaire, et l&apos;IA rédige le contenu du site (accroche, à propos,
        services, témoignages) sur cette base.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Comment ça marche
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Le client avance dans un wizard multi-étapes : choix du template, informations sur
          l&apos;activité, couleurs de marque, upload d&apos;un logo et d&apos;une image de header.
          Claude (Anthropic) génère l&apos;ensemble des textes du site à partir de ces informations.
          Le résultat est un site avec animations (parallax, apparitions au scroll, boutons
          magnétiques) livré avec un aperçu instantané et un lien partageable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Templates sectoriels
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Plus de 15 templates premium, chacun pensé pour un type de site plutôt que générique.
          Les principaux profils :
        </p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-red-400 font-bold shrink-0 w-32">Restaurant / Food</span>
            <span className="text-zinc-400">Vitrine avec menu, ambiance, réservation.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold shrink-0 w-32">Consultant / Coach</span>
            <span className="text-zinc-400">Mise en avant de l&apos;offre, prise de contact.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold shrink-0 w-32">E-commerce</span>
            <span className="text-zinc-400">Catalogue produit et mise en valeur boutique.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-red-400 font-bold shrink-0 w-32">Site vitrine</span>
            <span className="text-zinc-400">Présentation d&apos;entreprise multi-sections.</span>
          </li>
        </ul>
        <p className="text-sm leading-relaxed text-zinc-500 mt-4">
          D&apos;autres profils existent : hôtellerie, santé, immobilier, fitness, agence créative,
          non-profit, portfolio, événementiel, luxe, 3D/tech, entre autres.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Formules et délais de livraison
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Le délai de livraison dépend du niveau de personnalisation de la formule choisie, pas du
          template en lui-même :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-semibold text-white text-sm">Landing</span>
              <span className="text-xs text-red-400 font-medium">2 h</span>
            </div>
            <p className="text-xs text-zinc-500">1 page de conversion sur thème existant.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-semibold text-white text-sm">Essentiel</span>
              <span className="text-xs text-red-400 font-medium">2 h</span>
            </div>
            <p className="text-xs text-zinc-500">Site one-page complet sur thème existant.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-semibold text-white text-sm">Pro</span>
              <span className="text-xs text-red-400 font-medium">24-48 h</span>
            </div>
            <p className="text-xs text-zinc-500">3 à 5 pages semi sur-mesure sur thème existant.</p>
          </div>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex items-baseline justify-between mb-1">
              <span className="font-semibold text-white text-sm">Premium</span>
              <span className="text-xs text-red-400 font-medium">5-7 j</span>
            </div>
            <p className="text-xs text-zinc-500">100 % sur-mesure, hors template.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-zinc-400 mt-4">
          Un service de branding (logo, charte couleurs, retouche photo) et une maintenance mensuelle
          (mises à jour, hébergement, support) sont disponibles en option, en plus du prix de base
          de la formule.
        </p>
      </section>
      {/* Voir la note du même bloc dans docs/security. */}
      <section className="mb-4 pt-6 border-t border-zinc-800">
        <h2 className="text-xl font-bold text-white mb-4">Les modèles</h2>
        <p className="text-sm leading-relaxed mb-4">
          Le catalogue est parcourable métier par métier : chaque fiche donne le format,
          le nombre de sections, la gamme et une démonstration en ligne.
        </p>
        <ul className="text-sm space-y-2">
          <li><a href="https://launch.aevia.services/themes/modeles" className="text-red-400 hover:text-red-300">Tous les modèles, classés par métier</a></li>
          <li><a href="https://launch.aevia.services/themes" className="text-red-400 hover:text-red-300">La galerie filtrable</a></li>
          <li><a href="https://launch.aevia.services/showcase" className="text-red-400 hover:text-red-300">Réalisations</a></li>
          <li><a href="https://launch.aevia.services/pricing" className="text-zinc-400 hover:text-zinc-300">Tarifs →</a></li>
        </ul>
      </section>
    </main>
  );
}
