import { useLocale } from "next-intl";
import { PRIVACY_CONTENT } from "./content";

const PRODUCT_COLORS = ["text-red-400", "text-red-300", "text-emerald-400"];

export default function PrivacyPage() {
  const locale = useLocale();
  const c = PRIVACY_CONTENT[locale] ?? PRIVACY_CONTENT.fr;

  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-zinc-300">
      <p className="text-xs text-zinc-500 mb-2">{c.lastUpdated}</p>
      <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">{c.title}</h1>
      <p className="text-zinc-400 text-sm mb-10 leading-relaxed">{c.intro}</p>

      {/* 1. Responsable du traitement */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s1.heading}</h2>
        <p className="mb-3 text-sm leading-relaxed">{c.s1.lead}</p>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-1">
          <p><span className="text-white font-semibold">Aevia WS</span> — {c.s1.entity}</p>
          <p><span className="text-zinc-400">{c.s1.directorLabel} :</span> Valentin Milliand</p>
          <p><span className="text-zinc-400">{c.s1.sirenLabel} :</span> {c.s1.sirenValue}</p>
          <p><span className="text-zinc-400">{c.s1.countryLabel} :</span> {c.s1.country}</p>
          <p><span className="text-zinc-400">{c.s1.addressLabel} :</span> {c.s1.address}</p>
          <p>
            <span className="text-zinc-400">{c.s1.contactLabel} :</span>{" "}
            <a href="mailto:valentinmilliand@aevia.services" className="text-red-400 hover:text-red-300 transition-colors">valentinmilliand@aevia.services</a>
          </p>
          <p>
            <span className="text-zinc-400">{c.s1.dpoLabel} :</span>{" "}
            <a href="mailto:privacy@aevia.services" className="text-red-400 hover:text-red-300 transition-colors">privacy@aevia.services</a>
          </p>
        </div>
      </section>

      {/* 2. Produits concernés */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s2.heading}</h2>
        <p className="text-sm leading-relaxed mb-4">{c.s2.lead}</p>
        <ul className="space-y-3 text-sm">
          {c.s2.products.map((prod, i) => (
            <li key={prod.name} className="flex gap-3">
              <span className={`${PRODUCT_COLORS[i] ?? "text-red-400"} font-bold shrink-0`}>{prod.name}</span>
              <span className="text-zinc-400">{prod.desc}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Données collectées */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s3.heading}</h2>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h31}</h3>
        <p className="text-sm leading-relaxed mb-3">{c.s3.lead31}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          {c.s3.items31.map((it) => <li key={it}>{it}</li>)}
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h32}</h3>
        <p className="text-sm leading-relaxed mb-3">{c.s3.lead32}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-3 ml-2">
          {c.s3.items32.map((it) => <li key={it}>{it}</li>)}
        </ul>
        <p className="text-sm leading-relaxed text-zinc-400 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <strong className="text-zinc-300">{c.s3.note32Pre}</strong>
          <strong className="text-zinc-300">{c.s3.note32Strong}</strong>
          {c.s3.note32Post}
        </p>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h33}</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          {c.s3.items33.map((it) => <li key={it}>{it}</li>)}
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h34}</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          {c.s3.items34.map((it) => <li key={it}>{it}</li>)}
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h35}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s3.text35}</p>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h36}</h3>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-4 ml-2">
          {c.s3.items36.map((it) => <li key={it}>{it}</li>)}
        </ul>

        <h3 className="text-base font-semibold text-white mb-2 mt-5">{c.s3.h37}</h3>
        <p className="text-sm leading-relaxed mb-3">{c.s3.p37a}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 mb-3 ml-2">
          {c.s3.items37.map((it) => <li key={it}>{it}</li>)}
        </ul>
        <p className="text-sm leading-relaxed mb-3">{c.s3.p37b}</p>
        <p className="text-sm leading-relaxed text-zinc-400 bg-zinc-900/40 border border-zinc-800 rounded-lg p-4">
          <strong className="text-zinc-300">{c.s3.note37Strong}</strong>
          {c.s3.note37Post}
        </p>
      </section>

      {/* 4. Bases légales */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s4.heading}</h2>
        <div className="space-y-4 text-sm">
          {c.s4.bases.map((b) => (
            <div key={b.title} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-5">
              <p className="font-semibold text-white mb-1">{b.title}</p>
              <p className="text-zinc-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Durées de conservation */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s5.heading}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-3 pr-4 text-white font-semibold">{c.s5.colCat}</th>
                <th className="text-left py-3 text-white font-semibold">{c.s5.colDur}</th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              {c.s5.rows.map(([cat, dur], i) => (
                <tr key={cat} className={i < c.s5.rows.length - 1 ? "border-b border-zinc-800/60" : ""}>
                  <td className="py-3 pr-4">{cat}</td>
                  <td className="py-3">{dur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Sous-traitants */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s6.heading}</h2>
        <p className="text-sm leading-relaxed mb-5 text-zinc-400">{c.s6.lead}</p>
        <div className="space-y-4 text-sm">
          {c.s6.processors.map((p) => (
            <div key={p.name} className="border border-zinc-800 rounded-xl p-5 bg-zinc-900/30">
              <div className="flex items-start justify-between mb-2">
                <p className="font-semibold text-white">{p.name}</p>
                <span className="text-xs text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">{p.tag}</span>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-2">{p.desc}</p>
              {p.transfer ? <p className="text-zinc-500 text-xs">{p.transfer}</p> : null}
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 hover:text-red-300 transition-colors mt-1 inline-block">
                {p.linkLabel} &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Transferts internationaux */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s7.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          {c.s7.p1a}
          <strong className="text-zinc-300">{c.s7.p1cct}</strong>
          {c.s7.p1b}
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s7.p2a}</p>
      </section>

      {/* 8. Droits des personnes */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s8.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-5">{c.s8.lead}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-5">
          {c.s8.rights.map((right) => (
            <div key={right.title} className="bg-zinc-900/40 border border-zinc-800 rounded-xl p-4">
              <p className="font-semibold text-white mb-1 text-xs">{right.title}</p>
              <p className="text-zinc-400 text-xs leading-relaxed">{right.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm">
          <p className="text-zinc-300 font-semibold mb-2">{c.s8.exerciseTitle}</p>
          <p className="text-zinc-400 leading-relaxed mb-3">
            {c.s8.exerciseP1a}
            <strong className="text-white">{c.s8.exerciseP1b}</strong>
            {c.s8.exerciseP1c}
          </p>
          <p className="text-zinc-400 leading-relaxed">
            {c.s8.complaintA}
            <strong className="text-white">{c.s8.complaintCnil}</strong>
            {c.s8.complaintB}
          </p>
        </div>
      </section>

      {/* 9. DPA */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s9.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">
          {c.s9.p1a}
          <strong className="text-zinc-300">{c.s9.p1strong}</strong>
          {c.s9.p1b}
        </p>
        <p className="text-sm leading-relaxed text-zinc-400">
          {c.s9.p2a}
          <strong className="text-zinc-300">{c.s9.p2subject}</strong>.
        </p>
      </section>

      {/* 10. Cookies */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s10.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">{c.s10.p1}</p>
        <p className="text-sm leading-relaxed text-zinc-400">
          {c.s10.p2a}
          <a href={`/${locale}/legal/cookies`} className="text-red-400 hover:text-red-300 transition-colors">{c.s10.p2link}</a>.
        </p>
      </section>

      {/* 11. Sécurité */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s11.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400 mb-3">{c.s11.lead}</p>
        <ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 ml-2">
          {c.s11.items.map((it) => <li key={it}>{it}</li>)}
        </ul>
      </section>

      {/* 12. Modifications */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s12.heading}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">{c.s12.text}</p>
      </section>

      {/* 13. Contact */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-zinc-800">{c.s13.heading}</h2>
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-sm space-y-2">
          <p className="text-zinc-300 font-semibold mb-2">{c.s13.title}</p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">{c.s13.emailLabel} :</span>{" "}
            <a href="mailto:privacy@aevia.services" className="text-red-400 hover:text-red-300 transition-colors">privacy@aevia.services</a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">{c.s13.generalLabel} :</span>{" "}
            <a href="mailto:valentinmilliand@aevia.services" className="text-red-400 hover:text-red-300 transition-colors">valentinmilliand@aevia.services</a>
          </p>
          <p className="text-zinc-400">
            <span className="text-zinc-300">{c.s13.controllerLabel} :</span> {c.s13.controllerValue}
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 pt-6 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 leading-relaxed italic">{c.disclaimer}</p>
      </div>
    </main>
  );
}
