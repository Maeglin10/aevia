import type { Metadata } from "next";

// Titre et description propres à cette page : sans ce bloc elle héritait
// du titre du layout racine, et sept pages du Hub partageaient le même
// <title> — un doublon que Google traite comme une seule page.
export const metadata: Metadata = {
  title: "Conditions générales",
  description:
    "Conditions générales d'utilisation et de vente des produits Aevia : abonnements, livraison, résiliation, responsabilité.",
  alternates: { canonical: "https://aevia.services/legal/terms" },
  openGraph: {
    title: "Conditions générales",
    description:
      "Conditions générales d'utilisation et de vente des produits Aevia : abonnements, livraison, résiliation, responsabilité.",
    url: "https://aevia.services/legal/terms",
    images: ["/og.png"],
  },
};

import { useLocale } from "next-intl";
import { TERMS_CONTENT, type Row3 } from "./content";

function PriceTable({ cols, rows }: { cols: Row3; rows: Row3[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-zinc-700">
            <th className="text-left py-2 pr-4 text-zinc-300 font-medium">{cols.a}</th>
            <th className="text-left py-2 pr-4 text-zinc-300 font-medium">{cols.b}</th>
            <th className="text-left py-2 text-zinc-300 font-medium">{cols.c}</th>
          </tr>
        </thead>
        <tbody className="text-zinc-400">
          {rows.map((r, i) => (
            <tr key={r.a} className={i < rows.length - 1 ? "border-b border-zinc-800/60" : ""}>
              <td className="py-2 pr-4">{r.a}</td>
              <td className="py-2 pr-4">{r.b}</td>
              <td className="py-2">{r.c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const H2 = "text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800";
const H3 = "text-base font-semibold text-white mb-2 mt-5";
const P = "text-sm leading-relaxed text-zinc-400 mb-3";
const UL = "list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-3";
const NOTE = "text-sm text-zinc-400 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4";

export default function TermsPage() {
  const locale = useLocale();
  const c = TERMS_CONTENT[locale] ?? TERMS_CONTENT.fr;
  const mail = (a: string) => (
    <a href={`mailto:${a}`} className="text-red-400 hover:text-red-300 transition-colors">{a}</a>
  );

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">{c.lastUpdated}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">{c.title}</h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">{c.intro}</p>

      {/* 1. Éditeur */}
      <section className="mb-10">
        <h2 className={H2}>{c.s1.heading}</h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1.5">
          <p><span className="text-white font-semibold">Aevia WS</span> — {c.s1.entity}</p>
          <p><span className="text-zinc-400">{c.s1.directorLabel} :</span> Valentin Milliand</p>
          <p><span className="text-zinc-400">{c.s1.sirenLabel} :</span> {c.s1.sirenValue}</p>
          <p><span className="text-zinc-400">{c.s1.vatLabel} :</span> {c.s1.vatValue}</p>
          <p><span className="text-zinc-400">{c.s1.countryLabel} :</span> {c.s1.country}</p>
          <p><span className="text-zinc-400">{c.s1.addressLabel} :</span> {c.s1.address}</p>
          <p><span className="text-zinc-400">{c.s1.contactLabel} :</span> {mail("valentinmilliand@aevia.services")}</p>
          <p><span className="text-zinc-400">{c.s1.siteLabel} :</span> <a href="https://aevia.services" className="text-red-400 hover:text-red-300 transition-colors">aevia.services</a></p>
        </div>
        <p className="text-sm text-zinc-400 mt-4 leading-relaxed">{c.s1.b2b}</p>
      </section>

      {/* 2. Description des services */}
      <section className="mb-10">
        <h2 className={H2}>{c.s2.heading}</h2>
        <h3 className={H3}>{c.s2.h21}</h3>
        <p className={P}>{c.s2.p21}</p>
        <ul className={UL}>{c.s2.items21.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="text-sm text-zinc-400 leading-relaxed mb-2">{c.s2.note21}</p>

        <h3 className={H3}>{c.s2.h22}</h3>
        <p className={P}>{c.s2.p22}</p>
        <ul className={UL}>{c.s2.items22.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className={NOTE}><strong className="text-zinc-300">{c.s2.note22Strong}</strong>{c.s2.note22}</p>

        <h3 className={H3}>{c.s2.h23}</h3>
        <p className={P}>{c.s2.p23}</p>
        <ul className={UL}>{c.s2.items23.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className={NOTE}><strong className="text-zinc-300">{c.s2.note23Strong}</strong>{c.s2.note23}</p>
      </section>

      {/* 3. Compte */}
      <section className="mb-10">
        <h2 className={H2}>{c.s3.heading}</h2>
        <p className={P}>{c.s3.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">{c.s3.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s3.tail}</p>
      </section>

      {/* 4. Tarifs */}
      <section className="mb-10">
        <h2 className={H2}>{c.s4.heading}</h2>
        <h3 className={H3}>{c.s4.h41}</h3>
        <div className="space-y-4 text-sm mb-6">
          <div>
            <p className="text-white font-semibold mb-2">{c.s4.inboxTitle}</p>
            <PriceTable cols={c.s4.inboxCols} rows={c.s4.inboxRows} />
            <p className="text-xs text-zinc-500 mt-2">{c.s4.inboxNote}</p>
          </div>
          <div>
            <p className="text-white font-semibold mb-2">{c.s4.launchTitle}</p>
            <PriceTable cols={c.s4.launchCols} rows={c.s4.launchRows} />
          </div>
          <div>
            <p className="text-white font-semibold mb-2">{c.s4.secTitle}</p>
            <p className="text-sm text-zinc-400 mb-2">{c.s4.secLead}</p>
            <PriceTable cols={c.s4.secCols} rows={c.s4.secRows} />
          </div>
        </div>
        <h3 className={H3}>{c.s4.h42}</h3>
        <p className={P}>{c.s4.p42}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">{c.s4.items42.map((i) => <li key={i}>{i}</li>)}</ul>
        <h3 className={H3}>{c.s4.h43}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s4.p43}</p>
      </section>

      {/* 5. Rétractation / remboursement */}
      <section className="mb-10">
        <h2 className={H2}>{c.s5.heading}</h2>
        <h3 className={H3}>{c.s5.h51}</h3>
        <p className={P}>{c.s5.p51a}<strong className="text-zinc-300">{c.s5.p51strong}</strong>{c.s5.p51b}</p>
        <p className={P}>{c.s5.p51contactA}{c.s5.p51contactB}</p>
        <p className="text-sm text-zinc-400 bg-amber-900/20 border border-amber-800/40 rounded-lg p-4">
          <strong className="text-amber-300">{c.s5.waiverStrong}</strong>{c.s5.waiver}
        </p>
        <h3 className={H3}>{c.s5.h52}</h3>
        <p className={P}>{c.s5.p52}</p>
        <ul className={UL}>{c.s5.items52.map((i) => <li key={i}>{i}</li>)}</ul>
        <h3 className={H3}>{c.s5.h53}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">{c.s5.p53}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">{c.s5.items53.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      {/* 6. Obligations */}
      <section className="mb-10">
        <h2 className={H2}>{c.s6.heading}</h2>
        <p className={P}>{c.s6.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2 mb-4">{c.s6.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      {/* 7. Utilisations interdites */}
      <section className="mb-10">
        <h2 className={H2}>{c.s7.heading}</h2>
        <p className={P}>{c.s7.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">{c.s7.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className={`${NOTE} mt-4`}>{c.s7.note}</p>
      </section>

      {/* 8. Propriété intellectuelle */}
      <section className="mb-10">
        <h2 className={H2}>{c.s8.heading}</h2>
        <h3 className={H3}>{c.s8.h81}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s8.p81}</p>
        <h3 className={H3}>{c.s8.h82}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s8.p82}</p>
        <h3 className={H3}>{c.s8.h83}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">{c.s8.p83}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1.5 ml-2">{c.s8.items83.map((i) => <li key={i}>{i}</li>)}</ul>
      </section>

      {/* 9. Disponibilité */}
      <section className="mb-10">
        <h2 className={H2}>{c.s9.heading}</h2>
        <p className={P}>{c.s9.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2 mb-4">{c.s9.items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s9.tail}</p>
      </section>

      {/* 10. Responsabilité */}
      <section className="mb-10">
        <h2 className={H2}>{c.s10.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s10.lead}</p>
        <div className="space-y-3 text-sm">
          {c.s10.cards.map((card) => (
            <div key={card.title} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <p className="font-semibold text-white mb-1">{card.title}</p>
              <p className="text-zinc-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 11. Résiliation */}
      <section className="mb-10">
        <h2 className={H2}>{c.s11.heading}</h2>
        <h3 className={H3}>{c.s11.h111}</h3>
        <p className={P}>{c.s11.p111a}</p>
        <p className="text-sm leading-relaxed text-zinc-400 mb-4">{c.s11.p111b}</p>
        <h3 className={H3}>{c.s11.h112}</h3>
        <p className="text-sm leading-relaxed text-zinc-400 mb-2">{c.s11.p112}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2 mb-3">{c.s11.items112.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s11.tail112}</p>
      </section>

      {/* 12. Modifications */}
      <section className="mb-10">
        <h2 className={H2}>{c.s12.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s12.text}</p>
      </section>

      {/* 13. Force majeure */}
      <section className="mb-10">
        <h2 className={H2}>{c.s13.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s13.text}</p>
      </section>

      {/* 14. Droit applicable */}
      <section className="mb-10">
        <h2 className={H2}>{c.s14.heading}</h2>
        <p className={P}>{c.s14.p1a}<strong className="text-zinc-300">{c.s14.p1law}</strong>.</p>
        <p className={P}>{c.s14.p2}</p>
        <p className={P}>{c.s14.p3a}<strong className="text-zinc-300">{c.s14.p3courts}</strong>{c.s14.p3b}</p>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s14.p4}</p>
      </section>

      {/* 15. Contact */}
      <section className="mb-10">
        <h2 className={H2}>{c.s15.heading}</h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">{c.s15.title}</p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s15.emailLabel} :</span> {mail("valentinmilliand@aevia.services")}</p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s15.editorLabel} :</span> {c.s15.editorValue}</p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s15.privacyLabel} :</span> <a href={`/${locale}/legal/privacy`} className="text-red-400 hover:text-red-300 transition-colors">aevia.services/legal/privacy</a></p>
          <p className="text-zinc-400"><span className="text-zinc-300">{c.s15.cookiesLabel} :</span> <a href={`/${locale}/legal/cookies`} className="text-red-400 hover:text-red-300 transition-colors">aevia.services/legal/cookies</a></p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">{c.disclaimer}</p>
      </div>
    </main>
  );
}
