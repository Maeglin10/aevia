import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
const BASE = "https://aevia.services";
const LANGUES = ["fr", "en", "es", "de", "pt"] as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  /*
    La canonique doit porter la langue.

    Écrite sans elle, elle désignait `/docs/security` — une URL qui répond 307 vers
    `/fr/docs/security`. Une canonique qui pointe vers une redirection n'en est pas
    une : Lighthouse la refuse (SEO 92) et Google doit deviner. Mesuré sur la
    page déployée.
  */
  const url = `${BASE}/${locale}/docs/security`;
  return {
    title: "Documentation Aevia Security — audit de domaine, remédiation | Aevia",
    description:
      "Ce que scanne Aevia Security (SPF, DMARC, MTA-STS, DNSSEC, en-têtes HTTP, CVE) et comment la remédiation guidée corrige les failles trouvées.",
    alternates: {
      canonical: url,
      languages: Object.fromEntries(LANGUES.map((l) => [l, `${BASE}/${l}/docs/security`])),
    },
    openGraph: {
      title: "Documentation Aevia Security — audit de domaine, remédiation | Aevia",
      description:
        "Ce que scanne Aevia Security (SPF, DMARC, MTA-STS, DNSSEC, en-têtes HTTP, CVE) et comment la remédiation guidée corrige les failles trouvées.",
      url,
      images: ["/og.png"],
    },
  };
}

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
      {/*
        Liens thématiques vers le contenu du produit. Mesuré le 02/09 : le Hub
        concentre 36 des 38 impressions de la suite, mais ne pointait que vers
        les accueils — jamais vers les pages publiées cette semaine. Un lien
        depuis une page qui traite du même sujet vaut plus qu'un lien de pied de
        page.
      */}
      <section className="mb-4 pt-6 border-t border-zinc-800">
        <h2 className="text-xl font-bold text-white mb-4">Les guides</h2>
        <p className="text-sm leading-relaxed mb-4">
          Chaque contrôle du scan est documenté : ce qu&apos;il protège, comment vérifier
          le vôtre en une commande, et l&apos;enregistrement exact à publier.
        </p>
        <ul className="text-sm space-y-2">
          <li><a href="https://security.aevia.services/guides/spf" className="text-red-400 hover:text-red-300">SPF — qui a le droit d&apos;envoyer en votre nom</a></li>
          <li><a href="https://security.aevia.services/guides/dmarc" className="text-red-400 hover:text-red-300">DMARC — passer de p=none à une politique qui protège</a></li>
          <li><a href="https://security.aevia.services/guides/dkim" className="text-red-400 hover:text-red-300">DKIM — signer ses e-mails</a></li>
          <li><a href="https://security.aevia.services/guides/mta-sts" className="text-red-400 hover:text-red-300">MTA-STS — chiffrer le courrier entrant</a></li>
          <li><a href="https://security.aevia.services/guides/en-tetes-http" className="text-red-400 hover:text-red-300">En-têtes HTTP — six lignes qui ferment la plupart des portes</a></li>
          <li><a href="https://security.aevia.services/guides" className="text-zinc-400 hover:text-zinc-300">Tous les guides →</a></li>
        </ul>
      </section>
    </main>
  );
}
