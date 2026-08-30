import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
export const metadata: Metadata = {
  title: "Documentation Aevia Security — audit de domaine, remédiation",
  description:
    "Ce que scanne Aevia Security (SPF, DMARC, MTA-STS, DNSSEC, en-têtes HTTP, CVE) et comment la remédiation guidée corrige les failles trouvées.",
  alternates: { canonical: "https://aevia.services/docs/security" },
  openGraph: {
    title: "Documentation Aevia Security — audit de domaine, remédiation",
    description:
      "Ce que scanne Aevia Security (SPF, DMARC, MTA-STS, DNSSEC, en-têtes HTTP, CVE) et comment la remédiation guidée corrige les failles trouvées.",
    url: "https://aevia.services/docs/security",
    images: ["/og.png"],
  },
};

export default function DocsSecurityPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium">Documentation · AeviaSecurity</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
        AeviaSecurity
      </h1>
      <p className="text-zinc-400 leading-relaxed mb-10">
        AeviaSecurity audite un site web en quelques dizaines de secondes et restitue un score de
        0 à 100 avec un rapport détaillé et des recommandations de correction générées par IA. Une
        URL suffit pour lancer un audit.
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Ce que couvre l&apos;audit
        </h2>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">SSL / TLS</span>
            <span className="text-zinc-400">Validité et configuration du certificat du domaine analysé.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">DNS</span>
            <span className="text-zinc-400">
              Résolution des enregistrements MX, TXT et SPF/DMARC pour repérer les
              mauvaises configurations d&apos;emailing et de domaine.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">En-têtes HTTP</span>
            <span className="text-zinc-400">
              Présence des en-têtes de sécurité courants : HSTS (Strict-Transport-Security), CSP
              (Content-Security-Policy), X-Frame-Options, X-Content-Type-Options.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">Core Web Vitals</span>
            <span className="text-zinc-400">
              Métriques de performance (dont le CLS) mesurées via un audit type Lighthouse.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">SEO</span>
            <span className="text-zinc-400">
              Score SEO Lighthouse et vérification des métadonnées de la page (title, description,
              balises).
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-400 font-bold shrink-0 w-28">Accessibilité</span>
            <span className="text-zinc-400">Score d&apos;accessibilité Lighthouse.</span>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Rapport généré par IA
        </h2>
        <p className="text-sm leading-relaxed">
          Une fois l&apos;audit terminé, un service IA dédié synthétise les résultats bruts en un
          rapport lisible : ce qui pose problème, pourquoi, et comment le corriger — sans jargon
          technique inutile. Le rapport est consultable via une URL partageable, et peut être
          exporté en PDF.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">
          Formules
        </h2>
        <p className="text-sm leading-relaxed">
          Un audit ponctuel est accessible gratuitement. Des abonnements mensuels donnent accès au
          suivi dans le temps (historique des audits, surveillance récurrente) et à des
          fonctionnalités avancées de reporting.
        </p>
      </section>
    </main>
  );
}
