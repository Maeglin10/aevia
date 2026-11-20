import type { BlogPostTranslation } from "../blog-posts";

/* Traductions de — lot 3. Voir lib/blog-i18n/index.ts. */
export const DE_3: Record<string, BlogPostTranslation> = {
  "prise-commande-telephone-ia-restaurant": {
    title: "Telefonische Bestellannahme mit KI: So funktioniert sie für eine Pizzeria oder ein Restaurant mit Abholservice",
    excerpt:
      "Zwischen 18:30 und 20:30 Uhr klingelt das Telefon, während Sie am Ofen stehen. Was ein KI-Sprachagent tatsächlich tut, wenn er eine Bestellung zum Abholen annimmt, was er nicht tut, wie viele Minuten Sie brauchen und welche Fragen Sie vor der Wahl stellen sollten.",
    content: `## Das Wichtigste in 30 Sekunden

- **Ein KI-Sprachagent kann eine vollständige Bestellung zum Abholen am Telefon annehmen**: Er liest Ihre Speisekarte, notiert Gerichte, Mengen und Sonderwünsche, liest dem Kunden die Zusammenfassung vor und speichert die Bestellung erst nach dessen Zustimmung.
- **Er darf nur anbieten, was auf Ihrer Karte steht**: Ein Gericht, das dort nicht aufgeführt ist, wird abgelehnt statt erfunden, und der Gesamtbetrag wird anhand Ihrer Preise berechnet.
- **Er kassiert nicht**: Der Kunde bezahlt bei der Abholung, genau wie bei einer Bestellung, die Sie selbst annehmen.
- **Bei Aevia Inbox beginnt die Sprachfunktion bei 79 € pro Monat** (200 Gesprächsminuten inklusive), zuzüglich einer einmaligen Einrichtungsgebühr von 100 €.

---

## Das Problem: Die Bestellungen kommen, wenn Sie alle Hände voll zu tun haben

In einer Pizzeria, einem Imbiss oder einem Restaurant mit Abholservice ballen sich die Anrufe auf wenige Zeitfenster: mittags und abends vor dem Abendessen. Genau dann läuft die Küche auf Hochtouren. Entweder verlässt jemand seinen Posten, um abzunehmen, oder das Telefon klingelt ins Leere und der Kunde bestellt woanders — oft auf einer Plattform, die eine Provision einbehält.

Ein KI-Sprachagent nimmt diese Anrufe an Ihrer Stelle entgegen, auch wenn mehrere gleichzeitig eingehen.

---

## So läuft ein Anruf ab, Schritt für Schritt

1. **Der Agent meldet sich im Namen Ihres Betriebs** und fragt, was der Kunde wünscht.
2. **Er sieht in Ihrer Speisekarte nach** — den Gerichten und Preisen, die Sie hinterlegt haben —, um Fragen zu beantworten („Haben Sie eine vegetarische Pizza?“) und anzubieten, was es gibt.
3. **Er nimmt die Bestellung auf**: Gerichte, Mengen, Sonderwünsche („ohne Zwiebeln“), eine Allergie, die der Küche gemeldet werden muss, und den Vornamen des Kunden.
4. **Er liest die Zusammenfassung vor** — Gerichte, Mengen, Gesamtbetrag — und wartet auf die Bestätigung des Kunden.
5. **Er speichert die Bestellung** erst nach diesem „Ja“: Sie erhält eine Nummer, ihr Gesamtbetrag wird anhand Ihrer Preise berechnet, und die Nummer des Anrufers wird gespeichert, damit er zurückgerufen werden kann.
6. **Er nennt eine Abholzeit**, die die bereits laufenden Bestellungen berücksichtigt: bei ruhigem Betrieb die Grundwartezeit, wenn gerade mehrere Bestellungen eingegangen sind, eine längere.
7. **Er kann dem Kunden eine Bestätigungs-SMS** mit der Zusammenfassung senden (französische Mobilnummern).

Worauf es ankommt: Die Bestellung ist keine „Nachricht für einen Rückruf“. Sie wird während des Anrufs aufgenommen, vom Kunden bestätigt und gespeichert. Mit Aevia Inbox erscheint sie im Tab „Orders“ (Bestellungen), mit allen Gerichten und der Nummer des Kunden.

---

## Was ein guter Agent nicht tut

- **Er erfindet keine Gerichte.** Fragt der Kunde nach etwas, das nicht auf Ihrer Karte steht, kann die Bestellung mit diesem Gericht nicht gespeichert werden: Der Agent schlägt vor, was es gibt.
- **Er spielt sich nicht als Allergen-Experte auf.** Hat er die Information nicht in dem, was Sie hinterlegt haben, antwortet er nicht „Ja, das ist erdnussfrei“: Er gibt die Frage an das Team weiter.
- **Er kassiert nicht.** Keine Kartennummer, die am Telefon diktiert wird: Bezahlt wird bei der Abholung.
- **Er übernimmt keine Lieferungen.** Die Bestellung, die der Agent aufnimmt, ist eine Bestellung zur Abholung vor Ort.
- **Er entscheidet keine Sonderfälle** — eine Großbestellung für eine Veranstaltung, eine Reklamation: Er notiert sie und leitet sie an Sie weiter.

---

## Und Ihre Kasse?

Eine telefonisch aufgenommene Bestellung muss dort ankommen, wo die Küche sie sieht. Mit Aevia Inbox landet sie im Tab „Orders“. Für Restaurants, deren Kasse mit HubRise verbunden ist, kann ein Connector sie direkt dorthin übertragen, mit der geplanten Abholzeit und der Nummer des Kunden; dieser Connector wird derzeit von HubRise geprüft. Wenn Ihre Abläufe auf der Kasse beruhen, fragen Sie nach dem aktuellen Stand, bevor Sie sich darauf verlassen.

---

## Wie viele Minuten brauchen Sie?

Der Preis eines Sprachagenten bemisst sich in Gesprächsminuten. Um Ihren Bedarf abzuschätzen, gehen Sie von der Dauer eines Bestellanrufs in Ihrem Betrieb aus. **Als Beispiel** — eine Annahme, die Sie an Ihren eigenen Anrufen überprüfen sollten: Wenn ein Bestellanruf 2 bis 3 Minuten dauert,

| Aevia-Inbox-Tarif (nur Sprache) | Inklusivminuten pro Monat | Bestellanrufe von 2 bis 3 Min. |
|---|---|---|
| Starter — 79 €/Monat | 200 | etwa 65 bis 100 |
| Growth — 99 €/Monat | 400 | etwa 130 bis 200 |
| Pro — 199 €/Monat | 800 | etwa 265 bis 400 |

Hinzu kommen 100 € einmalige Einrichtungsgebühr (Anbindung der Leitung und Konfiguration des Agenten mit Ihrer Speisekarte). Ohne Vertragsbindung, 14 Tage Geld-zurück-Garantie. Außerhalb der Eurozone wird derselbe Betrag in Dollar berechnet.

---

## Die Fragen, die Sie jedem Anbieter stellen sollten

1. **Woher bezieht der Agent die Speisekarte und die Preise?** Und was passiert, wenn Sie ein Gericht oder einen Preis ändern?
2. **Was macht er mit einem Gericht, das es nicht gibt?** Die richtige Antwort: Er lehnt ab und schlägt vor, was es gibt.
3. **Liest er die Zusammenfassung vor dem Speichern vor?** Ohne diesen Schritt wird aus einem Verständnisfehler ein Fehler in der Küche.
4. **Wo kommt die Bestellung an?** Bildschirm, Kasse, E-Mail, SMS: dort, wo Ihr Team wirklich hinschaut.
5. **Was antwortet er bei Allergenen, die er nicht kennt?** Er muss weiterleiten, niemals raten.
6. **Was kostet eine Minute über das Kontingent hinaus, und wie lange dauert ein Anruf bei Ihnen?**

---

## Häufige Fragen

**Kann die KI wirklich eine vollständige Bestellung am Telefon annehmen?**
Ja. Der Agent liest Ihre Speisekarte, nimmt Gerichte und Mengen auf, liest dem Kunden die Zusammenfassung vor und speichert die Bestellung nach dessen Bestätigung, zusammen mit der Nummer des Anrufers.

**Was passiert, wenn der Kunde ein Gericht verlangt, das nicht auf der Karte steht?**
Die Bestellung kann mit diesem Gericht nicht gespeichert werden. Der Agent schlägt vor, was auf Ihrer Karte steht.

**Kassiert der Agent die Zahlung?**
Nein. Der Kunde bezahlt bei der Abholung. Am Telefon wird keine Kartennummer abgefragt.

**Und Lieferungen?**
Der Sprachagent von Aevia Inbox nimmt Bestellungen zur Abholung vor Ort an. Lieferungen übernimmt er nicht.

**Was kostet das?**
Die Sprachfunktion beginnt bei 79 € pro Monat mit 200 inklusiven Gesprächsminuten, zuzüglich 100 € einmaliger Einrichtungsgebühr, ohne Vertragsbindung.

---

👉 [Sehen Sie, wie der KI-Kundenempfang von Aevia Inbox Anrufe entgegennimmt](https://inbox.aevia.services/en/solutions/standard-telephonique-ia)
`,
    faq: [
      {
        q: "Kann die KI wirklich eine vollständige Bestellung am Telefon annehmen?",
        a: "Ja. Der Agent liest die Speisekarte des Restaurants, nimmt Gerichte und Mengen auf, liest dem Kunden die Zusammenfassung vor und speichert die Bestellung nach dessen Bestätigung, zusammen mit der Nummer des Anrufers.",
      },
      {
        q: "Was passiert, wenn der Kunde ein Gericht verlangt, das nicht auf der Karte steht?",
        a: "Die Bestellung kann mit diesem Gericht nicht gespeichert werden. Der Agent schlägt vor, was auf der Karte steht.",
      },
      {
        q: "Kassiert der Agent die Zahlung?",
        a: "Nein. Der Kunde bezahlt bei der Abholung. Am Telefon wird keine Kartennummer abgefragt.",
      },
      {
        q: "Und Lieferungen?",
        a: "Der Sprachagent von Aevia Inbox nimmt Bestellungen zur Abholung vor Ort an. Lieferungen übernimmt er nicht.",
      },
      {
        q: "Was kostet ein Sprachagent, der Bestellungen annimmt?",
        a: "Bei Aevia Inbox beginnt die Sprachfunktion bei 79 € pro Monat mit 200 inklusiven Gesprächsminuten, zuzüglich 100 € einmaliger Einrichtungsgebühr, ohne Vertragsbindung.",
      },
    ],
  },
  "combien-coute-site-internet-professionnel-2026": {
    title: "Was kostet eine professionelle Website im Jahr 2026? Die echten Preise",
    excerpt:
      "Zwischen dem Cousin, der sie für 200 € baut, und der Agentur, die 12.000 € verlangt, ist der Unterschied kein Zufall: Er entspricht dem, was tatsächlich geliefert wird. Hier sind die Preisspannen nach Website-Typ, was sie rechtfertigt und die Kosten, die Ihnen anfangs niemand nennt.",
    content: `## Das Wichtigste in 30 Sekunden

- **Einfache Präsentations-Website: 400 bis 1.500 €**, Website mit Reservierung oder Onlineshop: 1.500 bis 6.000 €, komplexe Individualentwicklung: ab 6.000 €
- **Der angezeigte Preis ist nie der Gesamtpreis** — rechnen Sie Hosting, Domain, Wartung und Updates hinzu
- **Ein Angebot, in dem die Inhaltsseiten nicht beziffert sind, ist unvollständig**: Das Texten macht oft 30 % der tatsächlichen Arbeit aus
- **Das eigentliche Risiko ist nicht, zu viel zu bezahlen, sondern für eine Website zu bezahlen, die niemand besucht** — eine Website ohne Suchmaschinenoptimierung ist eine überteuerte Broschüre

---

## Warum die Preisunterschiede so groß sind

Wenn ein Angebot für scheinbar dieselbe Website von 500 € auf 8.000 € springt, liegt der Unterschied fast nie im Design. Er liegt in drei Dingen, die man auf der Startseite nicht sieht: der Menge an Inhalten, die erstellt werden müssen, den Funktionen, die im Hintergrund laufen, und der Zeit, die investiert wird, damit die Website gefunden wird.

Eine Website mit fünf Seiten, deren Texte der Kunde liefert, hat nichts gemein mit einer fünfseitigen Website, bei der jede Zeile geschrieben, die Produkte fotografiert und die Suchmaschinenoptimierung strukturiert werden muss. Trotzdem sehen beide in einem Portfolio gleich aus.

---

## Die realen Preisspannen nach Website-Typ

### Landingpage — 300 bis 800 €

Eine einzige Seite, ein einziges Ziel: ein Formular ausfüllen lassen oder einen Anruf auslösen. Es ist das rentabelste Format, wenn Sie bereits Besucher haben, die Sie irgendwohin schicken möchten (Werbung, soziale Netzwerke, Fachmesse).

Was normalerweise enthalten ist: eine Seite mit argumentativ gegliederten Abschnitten, ein Formular, das mit Ihrem E-Mail-Postfach verbunden ist, ein für Mobilgeräte optimiertes Design, Hosting.

### Präsentations-Website — 600 bis 2.500 €

Vier bis acht Seiten: Startseite, Leistungen, Über uns, Kontakt, manchmal eigene Seiten pro Leistung. Das ist das Standardformat für einen Handwerksbetrieb, eine Praxis oder Kanzlei, ein Geschäft, einen Dienstleister.

Das untere Ende der Spanne entspricht einer Vorlage, die an Ihre Farben und Texte angepasst wird. Das obere Ende entspricht einem eigenen Design für Ihre Marke, professionellen Texten und ernsthafter Arbeit an der lokalen Suchmaschinenoptimierung.

### Website mit Reservierung oder Terminbuchung — 1.500 bis 5.000 €

Sobald ein Besucher ein Zeitfenster wählen muss, ändert sich die Komplexität grundlegend. Verfügbarkeiten, Bestätigungen, Stornierungen und Erinnerungen müssen verwaltet werden, oft auch die Synchronisierung mit einem bestehenden Kalender.

### Onlineshop — 2.000 bis 10.000 €

Der Katalog ist der versteckte Posten. Dreißig Artikel mit Fotos, Beschreibungen, Varianten und Lagerbeständen bedeuten mehrere Tage Dateneingabe, die anfangs niemand beziffert. Hinzu kommen Zahlung, Versand, Mehrwertsteuer und die rechtlichen Pflichtangaben für den Fernabsatz.

### Individualentwicklung — 6.000 € und mehr

Kundenbereich, Anbindung an eine Branchensoftware, Angebotsrechner, Mehrsprachigkeit mit eigenständigen Inhalten. Hier spricht man nicht mehr von einer Website, sondern von einer Anwendung.

---

## Die Kosten, die niemand ankündigt

| Posten | Jährliche Spanne | Vermeidbar? |
|---|---|---|
| Domain | 10 bis 40 € | Nein |
| Hosting | 60 bis 400 € | Nein |
| SSL-Zertifikat | 0 bis 100 € | Oft inklusive |
| Wartung und Updates | 200 bis 1.200 € | Nein, bei einem CMS |
| Inhaltliche Änderungen | 50 bis 120 €/Std. | Ja, wenn Sie selbst pflegen können |
| Backups | 0 bis 150 € | Nein |

Eine Website für 900 €, deren Pflege 800 € pro Jahr kostet, ist über drei Jahre teurer als eine Website für 1.800 € mit allem Drum und Dran. Genau diese Rechnung ermöglichen Ihnen nur wenige Angebote.

---

## Die drei Fragen, an denen Sie ein ehrliches Angebot erkennen

**„Wer schreibt die Texte?“** Ist die Antwort vage, explodiert das Budget oder die Website geht mit Platzhaltertext online. Das Texten ist der am meisten unterschätzte Posten.

**„Was passiert, wenn ich in sechs Monaten einen Preis ändern möchte?“** Eine Website, die Sie nicht selbst bearbeiten können, kostet Sie für jedes Komma einen bezahlten Einsatz.

**„Wird die Website bei Google gefunden, und mit welchen Suchbegriffen?“** Ein seriöser Anbieter spricht mit Ihnen über konkrete, lokale Suchanfragen. Ein Anbieter, der antwortet „Sie wird SEO-optimiert“, hat Ihnen nichts gesagt.

---

## Die eigentliche Abwägung: Kosten der Erstellung gegen Kosten des Fehlens

Ein Geschäft, das nicht erscheint, wenn jemand nach seiner Branche in seiner Stadt sucht, verliert jeden Tag Kunden, ohne es je zu bemerken. Das ist ein stiller Verlust und deshalb leicht zu ignorieren — anders als eine Rechnung.

Wenn Sie über Ihre Website auch nur einen Kunden pro Monat gewinnen, bei einem durchschnittlichen Warenkorb von 150 €, hat sich die Website in weniger als einem Jahr amortisiert, egal in welcher Preisspanne Sie liegen. Die Frage lautet also nicht „Was kostet das?“, sondern „Ab wann bringt es etwas ein?“.

---

## Und automatisierte Lösungen?

Seit zwei Jahren gibt es einen dritten Weg zwischen dem Website-Baukasten, bei dem Sie alles selbst machen, und der Agentur für mehrere Tausend Euro: Plattformen, die aus Ihren Branchenangaben eine professionelle Website erzeugen, mit bereits strukturierter Suchmaschinenoptimierung.

Der Vorteil ist nicht nur der Preis, sondern die Zeit: eine Website, die in wenigen Tagen online ist statt nach sechs Wochen Hin und Her. Der Kompromiss: Sie starten mit einer Branchenvorlage statt mit einem originellen Grafikdesign — was für 90 % der Geschäfte und Dienstleister keinerlei geschäftliche Folgen hat.

[Aevia Launch](https://launch.aevia.services) funktioniert nach diesem Prinzip: Website online innerhalb von 48 Stunden (5 bis 7 Tage für eine individuelle Premium-Website), von 399 € bis 1.499 € als Einmalzahlung, danach 20 € pro Monat für Hosting und Wartung.`,
    faq: [
      {
        q: "Was kostet eine professionelle Website in Frankreich durchschnittlich?",
        a: "Für ein Kleinstunternehmen oder Selbstständige liegt der Medianpreis einer Präsentations-Website zwischen 800 und 2.500 €. Unter 400 € handelt es sich meist um eine Vorlage ohne Arbeit an Inhalten und Suchmaschinenoptimierung. Über 5.000 € beginnt die Individualentwicklung oder der E-Commerce.",
      },
      {
        q: "Muss man für eine Website ein monatliches Abo bezahlen?",
        a: "Nicht unbedingt. Manche Anbieter berechnen eine Einmalzahlung mit inklusive Hosting, andere ein monatliches Abo. Vergleichen Sie immer über drei Jahre: Ein Abo für 39 €/Monat macht über diesen Zeitraum 1.400 € aus.",
      },
      {
        q: "Was kostet die Wartung einer Website pro Jahr?",
        a: "Zwischen 200 und 1.200 € pro Jahr, je nach Technologie. Eine Website auf CMS-Basis braucht regelmäßige Sicherheitsupdates; eine gehostete Lösung enthält sie in der Regel im Preis.",
      },
      {
        q: "Kann eine Website für weniger als 500 € seriös sein?",
        a: "Ja, sofern der Umfang klar ist: eine oder zwei Seiten, Ihre Texte, eine angepasste Vorlage. Das Problem ist nicht der niedrige Preis, sondern ein niedriger Preis für einen Umfang, der nicht dazu passt.",
      },
    ],
  },
  "standard-telephonique-ia-vs-secretariat-telephonique": {
    title: "KI-Telefonzentrale oder Telefonsekretariat: Welche Lösung passt zu Ihnen?",
    excerpt:
      "Beide versprechen dasselbe — dass niemand am anderen Ende der Leitung ins Leere läuft. Doch Kosten, Erreichbarkeit und das, was während des Anrufs tatsächlich passiert, haben nichts miteinander gemein. Ein Vergleich mit Zahlen und Entscheidungskriterien nach Ihrem Anrufvolumen.",
    content: `## Das Wichtigste in 30 Sekunden

- **Ein Telefonsekretariat rechnet pro Anruf oder pauschal ab**: Rechnen Sie mit 1,50 bis 3 € pro bearbeitetem Anruf oder 80 bis 400 €/Monat je nach Volumen
- **Ein KI-Sprachagent rechnet pauschal oder pro Minute ab**, ohne Aufpreis, wenn mehrere Anrufe gleichzeitig eingehen: Jede Minute kostet gleich viel
- **Der eigentliche Unterschied ist nicht der Preis, sondern das Ergebnis des Anrufs**: eine Nachricht mit Rückrufbitte oder ein Termin, der bereits in Ihrem Kalender steht
- **Das Sekretariat behält die Oberhand bei emotionalen Anliegen oder Anfragen außerhalb des Skripts**; die KI bei Volumen, nachts und in Spitzenzeiten

---

## Was jede Lösung tatsächlich tut

Ein **Telefonsekretariat** ist ein ausgelagerter menschlicher Service. Telefonistinnen und Telefonisten nehmen an Ihrer Stelle ab, nach einer Anweisungsliste, die Sie verfasst haben. Sie nehmen eine Nachricht auf, filtern und leiten sie per E-Mail oder SMS an Sie weiter. Manche Anbieter übernehmen sogar die Terminvergabe, wenn Sie ihnen Zugriff auf einen Kalender geben.

Ein **KI-Sprachagent** ist eine Software, die abnimmt, das Anliegen in natürlicher Sprache versteht und eine Aktion in Ihrem System ausführt: Verfügbarkeiten prüfen, eine Reservierung anlegen, eine Bestellung speichern, eine Frage zu Ihren Öffnungszeiten oder Preisen beantworten.

Der entscheidende Unterschied: Das Sekretariat liefert überwiegend Informationen, die später bearbeitet werden müssen. Der Sprachagent liefert eine bereits abgeschlossene Aktion.

---

## Vergleich in Zahlen

| Kriterium | Telefonsekretariat | KI-Sprachagent |
|---|---|---|
| Startkosten | 0 bis 150 € Einrichtung | 0 bis 200 € Konfiguration |
| Laufende Kosten | 80 bis 400 €/Monat oder 1,50–3 €/Anruf | 79 bis 999 €/Monat je nach Volumen |
| Erreichbarkeit | Geschäftszeiten, Erweiterungen kostenpflichtig | 24 Stunden am Tag, 7 Tage die Woche, ohne Aufpreis |
| Gleichzeitige Anrufe | Begrenzt durch das Personal | Mehrere parallel, ohne Besetztzeichen |
| Sprachen | Je nach Team, oft 1 bis 2 | 5 Sprachen und mehr, ohne Aufpreis |
| Ergebnis eines Anrufs | Eine zu bearbeitende Nachricht | Eine ausgeführte Aktion |
| Emotionale Nuancen | Stärke | Schwäche |
| Anfragen außerhalb des Skripts | Menschliche Improvisation | Weiterleitung oder Rückruf |

---

## Die Rechnung, die kaum jemand aufmacht

Ein Restaurant mit 25 Anrufen pro Tag, davon 18 für eine Reservierung, zahlt beim Tarif pro Anruf etwa 40 bis 55 € pro Tag für das Sekretariat — also mehr als 1.200 € pro Monat. Bei diesem Volumen liegt die KI-Pauschale sehr deutlich darunter.

Umgekehrt hat ein Beratungsbüro mit drei Anrufen pro Tag, alle heikel und alle verschieden, keinerlei Interesse an einer Automatisierung. Das Sekretariat kostet es 100 € pro Monat und macht es besser.

**Die Faustregel**: Unter 5 Anrufen pro Tag mit unterschiedlichen Anliegen bleibt der Mensch die bessere Wahl. Über 15 Anrufen pro Tag mit sich wiederholenden Anliegen kippt der Vergleich deutlich zugunsten der KI. Dazwischen kommt es darauf an, wie repetitiv die Anfragen sind, nicht auf das Volumen.

---

## Was die KI konkret besser macht

**Die Randzeiten.** 30 bis 40 % der Anrufe bei einem Geschäft gehen außerhalb der Öffnungszeiten oder mitten im größten Andrang ein. Genau diese Anrufe nimmt kein Mensch an, und kein Sekretariat deckt sie ohne Aufpreis ab.

**Die Spitzen.** Am Freitagabend rufen in einem Restaurant sechs Personen gleichzeitig an. Ein Sekretariat setzt fünf Anrufe in die Warteschleife; ein Sprachagent nimmt alle sechs an.

**Die vollständige Ausführung.** Der Agent sagt nicht „Ich gebe das weiter“. Er prüft den Tisch für 20 Uhr, reserviert ihn auf den genannten Namen, trägt ihn in die Reservierungssoftware ein und verschickt die Bestätigung.

---

## Was der Mensch besser macht

Ein verärgerter Kunde, ein Trauerfall, eine Stornierung, hinter der ein Streitfall steckt, eine geschäftliche Verhandlung: In solchen Momenten ist die menschliche Stimme kein Luxus. Ein gutes Sekretariat kann das Tempo herausnehmen, sich aufrichtig entschuldigen und spüren, wann es Zeit ist, abzugeben.

Deshalb ist die beste Konfiguration fast nie das eine oder das andere. Der Sprachagent übernimmt die Standardanrufe — Reservierungen, Öffnungszeiten, Verfügbarkeiten — und übergibt an einen Menschen, sobald das Anliegen den Rahmen verlässt.

---

## In drei Fragen zur Entscheidung

1. **Welcher Anteil Ihrer Anrufe ähnelt sich?** Notieren Sie Ihre Anrufe eine Woche lang. Wenn mehr als 60 % auf drei Anliegen entfallen, lohnt sich die Automatisierung.
2. **Wie viele Anrufe werden nie angenommen?** Ihr Telefonanbieter oder Ihr Telefon zeigt es Ihnen an. Diese Zahl rechtfertigt die Ausgabe, nicht die Gesamtzahl der Anrufe.
3. **Was möchten Sie am Ende des Anrufs in der Hand haben?** Wenn eine Nachricht genügt, passt ein Sekretariat. Wenn Sie einen bereits eingetragenen Termin möchten, brauchen Sie ein System, das mit Ihrem Kalender verbunden ist.

---

Bei Aevia ist der Sprachagent von [Aevia Inbox](https://inbox.aevia.services) für die dritte Antwort gebaut: Er gibt nicht bloß weiter, er führt aus — Anlegen der Reservierung, Synchronisierung des Kalenders, Versand der Bestätigung — und übergibt an einen Menschen, sobald das Anliegen seinen Zuständigkeitsbereich verlässt.`,
    faq: [
      {
        q: "Ist ein KI-Sprachagent günstiger als ein Telefonsekretariat?",
        a: "Ab etwa fünfzehn Anrufen pro Tag ja, und der Abstand wächst mit dem Volumen, weil die KI gleichzeitige Anrufe nicht extra berechnet. Unter fünf Anrufen pro Tag ist ein menschliches Sekretariat oft günstiger und besser geeignet.",
      },
      {
        q: "Weiß der Anrufer, dass er mit einer künstlichen Intelligenz spricht?",
        a: "Der Agent macht kein Geheimnis daraus, was er ist. In der Praxis zählt für den Anrufer, sofort eine Antwort und eine bestätigte Reservierung zu bekommen, statt auf einem Anrufbeantworter zu landen.",
      },
      {
        q: "Was passiert, wenn die KI das Anliegen nicht versteht?",
        a: "Sie leitet an eine Nummer weiter, bei der ein Mensch abnimmt, oder speichert eine Rückrufbitte mit dem Kontext des Anrufs. Ein gut konfiguriertes System legt im Voraus fest, welche Anliegen immer an eine Person gehen müssen.",
      },
      {
        q: "Kann man beides kombinieren?",
        a: "Das ist die wirksamste Konfiguration: Die KI fängt die repetitiven Anrufe und die nicht abgedeckten Zeiten ab, ein Mensch übernimmt bei sensiblen Situationen oder komplexen Anliegen.",
      },
    ],
  },
  "chatbot-vs-agent-ia-conversationnel-difference": {
    title: "Chatbot oder KI-Agent: Was ist der Unterschied, und welchen brauchen Sie?",
    excerpt:
      "„Chatbot“ nennt man so ziemlich alles, was automatisch antwortet — und das verdeckt einen grundlegenden Unterschied. Der eine folgt einem im Voraus geschriebenen Entscheidungsbaum, der andere versteht und handelt. So unterscheiden Sie die beiden und finden heraus, welcher zu Ihrem Bedarf passt.",
    content: `## Das Wichtigste in 30 Sekunden

- **Ein klassischer Chatbot folgt einem Skript**: Buttons, Entscheidungsbaum, vorformulierte Antworten. Er versteht nicht, er leitet weiter.
- **Ein konversationeller KI-Agent versteht frei formulierte Anfragen** und kann eine Aktion ausführen: reservieren, eine Bestellung suchen, einen Termin ändern.
- **Der Unterschied, den der Kunde sieht**: Der Chatbot lässt Sie auf „Sonstiges Anliegen“ klicken, der Agent beantwortet das Anliegen.
- **Der Chatbot bleibt sinnvoll** für sehr kurze, klar abgegrenzte Abläufe. Darüber hinaus erzeugt er mehr Frust, als er Zeit spart.

---

## Drei Generationen, die oft verwechselt werden

**Der Button-Chatbot.** Sie klicken auf „Öffnungszeiten“, „Preise“, „Kontakt“. Das ist ein Menü, das sich als Gespräch verkleidet. Nützlich für drei feste Informationen, nervtötend, sobald Ihre Frage nicht in der Liste steht.

**Der Schlüsselwort-Chatbot.** Er sucht nach Wörtern in Ihrem Satz und löst die zugehörige Antwort aus. „Ich möchte meine Reservierung für Donnerstag stornieren“ löst die Antwort „Stornierung“ aus, aber er weiß nicht, von welcher Reservierung Sie sprechen.

**Der konversationelle KI-Agent.** Er interpretiert den ganzen Satz, behält den Kontext der vorherigen Nachrichten, fragt Ihre echten Daten ab und führt die Aktion aus. „Ich möchte Donnerstag auf Freitag verschieben“ wird zu: den Kunden identifizieren, den Termin am Donnerstag finden, Freitag prüfen, verschieben, bestätigen.

---

## Der Test, der sie mit einer einzigen Frage trennt

Stellen Sie eine zusammengesetzte Frage: **„Haben Sie am Samstag geöffnet, und liefern Sie nach Bourg-en-Bresse?“**

- Der Button-Chatbot kann sie gar nicht entgegennehmen.
- Der Schlüsselwort-Chatbot greift eines der beiden Themen auf und ignoriert das andere.
- Der KI-Agent beantwortet beide, in der richtigen Reihenfolge.

Genau diese Art von Frage stellen echte Kunden, denn niemand formuliert seine Anliegen schön eines nach dem anderen.

---

## Was das geschäftlich ändert

Die Kosten eines falsch eingesetzten Chatbots stehen auf keiner Rechnung: Sie stecken in den Kunden, die aufgeben. Wenn ein Besucher dreimal klickt, ohne seine Antwort zu bekommen, schreibt er Ihnen nicht, um sich zu beschweren — er schließt den Tab und ruft die Konkurrenz an.

Umgekehrt verwandelt ein Agent, der auf frei formulierte Fragen antwortet, eine Frage in eine Aktion. Der Besucher fragt nicht mehr „Wie kann ich reservieren?“, er reserviert direkt im Gespräch.

---

## Wann ein einfacher Chatbot genügt

Es ist keine Schande, einfach zu bleiben. Ein Button-Chatbot erfüllt seinen Zweck, wenn:

- Sie weniger als fünf wiederkehrende Fragen haben, alle rein sachlich;
- Ihr Ziel ist, vor einem menschlichen Kontakt zu filtern, nicht das Anliegen zu bearbeiten;
- Ihr Volumen gering und das Budget knapp ist.

In diesem Fall leistet ein gut sichtbarer Hinweisbalken mit Ihren Öffnungszeiten und einem Anruf-Button oft mehr als ein Chatbot.

---

## Wann Sie einen KI-Agenten brauchen

- Ihre Kunden schreiben zusammengesetzte Anfragen, mit Datumsangaben, Namen, Mengen.
- Die Antwort hängt von Ihren Daten ab: Verfügbarkeiten, Lagerbestände, Kundenhistorie.
- Sie erhalten Nachrichten über mehrere Kanäle und möchten überall dieselbe Qualität.
- Ihnen gehen nachts und am Wochenende Anfragen verloren.

---

## Das entscheidende Kriterium: lesen oder handeln

Stellen Sie sich eine einzige Frage: **Soll das System informieren, oder soll es die Arbeit zu Ende bringen?**

Informieren heißt, eine Antwort anzeigen. Die Arbeit zu Ende bringen heißt, eine Zeile in Ihre Datenbank schreiben: eine Reservierung, eine Bestellung, ein verschobener Termin. Diese zweite Kategorie erfordert einen Agenten, der mit Ihren Tools verbunden ist, kein Chat-Widget.

Das ist die Logik von [Aevia Inbox](https://inbox.aevia.services): Dasselbe KI-Gehirn antwortet auf WhatsApp, Instagram, per E-Mail und am Telefon, mit Zugriff auf die tatsächlichen Verfügbarkeiten — und es legt die Reservierung an, statt zu erklären, wie man eine anlegt.`,
    faq: [
      {
        q: "Was ist der Unterschied zwischen einem Chatbot und einem KI-Agenten?",
        a: "Ein Chatbot folgt einem vordefinierten Ablauf (Buttons oder Schlüsselwörter) und zeigt im Voraus geschriebene Antworten an. Ein konversationeller KI-Agent interpretiert eine frei formulierte Anfrage, behält den Kontext des Gesprächs und kann eine Aktion in Ihren Systemen ausführen, etwa eine Reservierung anlegen.",
      },
      {
        q: "Kann sich ein KI-Agent irren?",
        a: "Ja, wie ein Mensch. Der Unterschied: Ein gut konfigurierter Agent kennt seine Grenzen. Wenn die Anfrage seinen Zuständigkeitsbereich verlässt, übergibt er an eine Person, statt eine Antwort zu erfinden.",
      },
      {
        q: "Braucht man einen Entwickler, um einen KI-Agenten einzurichten?",
        a: "Für Standardfälle heute nicht mehr. Aktuelle Plattformen werden konfiguriert, indem Sie Ihr Geschäft, Ihre Öffnungszeiten und Ihre Regeln beschreiben; Entwicklungsarbeit bleibt nötig, um eine wenig verbreitete Branchensoftware anzubinden.",
      },
      {
        q: "Ersetzt ein KI-Agent den menschlichen Kundenservice?",
        a: "Nein. Er fängt die wiederkehrenden Anfragen und die nicht abgedeckten Zeiten ab und entlastet so das Team für die Situationen, in denen menschliche Präsenz wirklich etwas verändert.",
      },
    ],
  },
  "service-client-multilingue-ia-international": {
    title: "International verkaufen, ohne einzustellen: mehrsprachiger Kundenservice mit KI",
    excerpt:
      "In fünf Sprachen zu antworten, erforderte früher fünf Angestellte oder einen unbezahlbaren Dienstleister. Diese Hürde ist gefallen. Was ein automatisierter mehrsprachiger Kundenservice für einen kleinen Betrieb ändert, der über die eigenen Landesgrenzen hinaus verkauft — und welche Fallstricke bleiben.",
    content: `## Das Wichtigste in 30 Sekunden

- **Die Sprachbarriere ist kein Fixkostenblock mehr**: Ein KI-Agent antwortet in der Sprache des Kunden, ohne zusätzliches Personal pro Markt
- **Die eigentliche Bremse ist nicht die Übersetzung, sondern die Zeitzone** — ein Kunde in Bogotá schreibt, wenn Ihr Büro schläft
- **Übersetzen ist nicht Lokalisieren**: Währungen, Datumsformate und Geschäftsgepflogenheiten ändern sich von Land zu Land
- **Beginnen Sie mit einer Sprache und einem Land**, messen Sie, dann übertragen Sie das Modell — fünf Märkte gleichzeitig zu öffnen verwässert alles

---

## Die Rechnung, die das Auslandsgeschäft blockierte

Bis vor Kurzem zwang ein ausländischer Markt zu einer Entweder-oder-Entscheidung: jemanden einstellen, der die Sprache spricht, oder verzichten. Für ein Unternehmen mit drei Personen hieß das: Ein Markt mit 40 Millionen Einwohnern blieb verschlossen, weil ein Angestellter für 35.000 € im Jahr fehlte.

Diese Rechnung hat sich geändert. Ein Konversationsagent antwortet auf Französisch, Englisch, Spanisch, Deutsch oder Portugiesisch in gleicher Qualität, ohne dass die Kosten von der Zahl der Sprachen abhängen. Die Sprache ist zu einer Einstellung geworden, nicht zu einem Ausgabenposten.

---

## Was das konkret ermöglicht

**Sie können einen Markt testen, ohne sich festzulegen.** Spanien zu erschließen erforderte früher eine Neueinstellung; heute braucht es eine übersetzte Seite und einen konfigurierten Agenten. Wenn der Markt nicht reagiert, haben Sie ein paar Tage verloren, nicht ein Jahresgehalt.

**Sie decken Zeitzonen ab, ohne nachts zu arbeiten.** Das ist der am meisten unterschätzte Punkt. Ein kanadischer Interessent, der um 21 Uhr Ortszeit Montreal schreibt, erreicht Sie um 3 Uhr morgens. Ohne automatische Antwort hat er bereits drei Wettbewerbern geschrieben, bevor Sie aufwachen.

**Sie verlieren keine Anfragen mehr in einer Sprache, die Sie nicht lesen.** Viele kleine Betriebe haben einen E-Mail-Ordner, den sie nie bearbeitet haben, weil die Nachrichten auf Deutsch waren.

---

## Die vier Fallstricke, die bleiben

### 1. Übersetzen reicht nicht

Ein Wort für Wort übersetzter Text klingt fremd. Die Geschäftsgepflogenheiten unterscheiden sich: Das Duzen ist in Spanien in Situationen normal, in denen das Französische das Siezen verlangen würde; das Deutsche erwartet mehr sachliche Präzision und weniger Emphase; britisches und amerikanisches Englisch haben nicht dieselben Höflichkeitskonventionen.

### 2. Währungen und Formate

Einem kolumbianischen Kunden „399 €“ anzuzeigen, verlangt von ihm eine Kopfrechnung und eine Umrechnung, die er nicht machen wird. Datumsformate (12/06 bedeutet im Vereinigten Königreich Juni und in den Vereinigten Staaten Dezember) verursachen echte Fehler bei Reservierungen.

### 3. Die Zahlung

Jeder Markt hat seine Gewohnheiten: Karte in Frankreich, Echtzeitüberweisung in Deutschland, mobile Wallets in Lateinamerika. Wer nur Kartenzahlung anbietet, verschließt sich einem Teil des Marktes, ohne es zu merken.

### 4. Lokale Pflichten

Rechtliche Pflichtangaben, Verkaufsbedingungen, Widerrufsrecht und Steuern ändern sich von Land zu Land. Ein automatisierter Kundenservice entbindet Sie nicht von AGB, die an den Zielmarkt angepasst sind.

---

## Die Methode, die funktioniert: ein Markt nach dem anderen

1. **Wählen Sie den Markt, aus dem Sie bereits Signale haben** — Besuche, eine spontane Anfrage, ein bestehender Kunde, der Sie weiterempfohlen hat.
2. **Übersetzen Sie zuerst, was konvertiert**: die Produktseite, die Preisseite, die FAQ. Der Blog kommt danach.
3. **Konfigurieren Sie den Agenten in dieser Sprache** und prüfen Sie seine Antworten auf Ihre zwanzig häufigsten Fragen.
4. **Messen Sie sechs Wochen lang**: eingegangene Anfragen, Antwortquote, abgeschlossene Anfragen.
5. **Übertragen Sie das Modell nur, wenn die Zahlen mitziehen.**

---

## Was das für einen Kleinbetrieb bedeutet

Ein Unternehmen mit Sitz in Frankreich kann heute einen Kunden aus Spanien, Kanada oder Kolumbien mit denselben Werkzeugen bedienen wie den Nachbarn von nebenan. Die Website wird mehrsprachig ausgeliefert, der Agent antwortet in der Sprache des Besuchers auf WhatsApp, Instagram, per E-Mail oder am Telefon, und die Anfragen landen in einem einzigen Posteingang, unabhängig von Kanal oder Sprache.

Genau das macht [Aevia Inbox](https://inbox.aevia.services): fünf Sprachen nativ, kein Aufpreis pro Sprache und derselbe Kundenkontext von einem Kanal zum anderen. Der Firmensitz ist in Frankreich; die bedienten Kunden sind es nicht unbedingt.`,
    faq: [
      {
        q: "Kann ein KI-Agent wirklich in mehreren Sprachen korrekt antworten?",
        a: "Ja, bei den üblichen Kundenservice-Anliegen: Fragen zu Öffnungszeiten, Preisen, Verfügbarkeit, Terminvereinbarung. Die Qualität ist von Sprache zu Sprache vergleichbar. Für geschäftliche Verhandlungen oder heikle Themen ist die Übergabe an einen Menschen weiterhin vorzuziehen.",
      },
      {
        q: "Braucht man eine übersetzte Website, um einen ausländischen Markt zu bedienen?",
        a: "Zumindest die Seiten, die konvertieren: Produkt, Preise, Kontakt und FAQ. Ein mehrsprachiger Agent auf einer vollständig französischsprachigen Website erzeugt einen Bruch, der das Vertrauen schwächt.",
      },
      {
        q: "Was kostet eine zusätzliche Sprache?",
        a: "Bei einer nativ mehrsprachigen Lösung nichts extra pro Sprache — die Kosten richten sich nach dem Nachrichtenvolumen, nicht nach der Zahl der Sprachen. Was Geld kostet, ist die Übersetzung der Website und die Anpassung der Verkaufsbedingungen an den Zielmarkt.",
      },
      {
        q: "Kann man eine weit entfernte Zeitzone bedienen, ohne nachts zu arbeiten?",
        a: "Genau darin liegt der Nutzen: Der Agent antwortet sofort, egal zu welcher Uhrzeit, nimmt den Termin oder die Bestellung auf, und Sie bearbeiten den Rest während Ihrer Geschäftszeiten.",
      },
    ],
  },
  "whatsapp-business-api-ou-application-difference": {
    title: "WhatsApp Business: kostenlose App oder API — welche brauchen Sie?",
    excerpt:
      "Zwei Produkte tragen denselben Namen und erfüllen nicht dieselbe Aufgabe. Das eine ist eine App auf einem Smartphone, das andere eine Infrastruktur ohne Bildschirm. Wer das falsche wählt, zahlt entweder unnötig Geld oder riskiert eine Kontosperre im ungünstigsten Moment.",
    content: `## Das Wichtigste in 30 Sekunden

- **Die WhatsApp Business App ist kostenlos**, läuft auf einem Smartphone und reicht bis etwa 5 Unterhaltungen pro Tag
- **Die WhatsApp Business API hat keine Oberfläche**: Sie ist eine technische Verbindung, die an ein Tool angeschlossen wird, gemacht für Volumen und Teamarbeit
- **Eine Nummer kann nicht auf beiden gleichzeitig laufen** — der Wechsel zur API lässt sich nicht einfach rückgängig machen
- **Unaufgeforderte Nachrichten aus der App zu verschicken, ist der sicherste Weg, die eigene Nummer sperren zu lassen**

---

## Zwei Produkte, ein Name

WhatsApp bietet unter derselben Marke zwei sehr unterschiedliche Dinge an.

**Die WhatsApp Business App** wird wie das klassische WhatsApp installiert. Sie ergänzt ein Unternehmensprofil, einen einfachen Katalog, Schnellantworten und Labels. Sie ist kostenlos und läuft auf einem Smartphone, mit einer möglichen Erweiterung auf den Computer.

**Die WhatsApp Business API** hat überhaupt keine Oberfläche. Sie ist ein technischer Kanal, den Sie mit einer Software verbinden: einem geteilten Posteingang, einem CRM, einem KI-Agenten. Sie „sehen“ die API nicht, Sie sehen das Tool, das sie nutzt.

---

## Vergleich

| Kriterium | App | API |
|---|---|---|
| Preis | Kostenlos | Abrechnung pro Unterhaltung, über einen Anbieter |
| Oberfläche | Ja, auf dem Smartphone | Keine, läuft über ein Tool |
| Gleichzeitige Nutzer | 1 Smartphone (+ 4 verknüpfte Geräte) | Unbegrenzt |
| Automatisierung | Einfache Schnellantworten | Vollständig, KI-Agent möglich |
| Geteilter Verlauf | Nein | Ja |
| Massennachrichten | Stark eingeschränkt, Sperrrisiko | Erlaubt über freigegebene Vorlagen |
| Statistiken | Minimal | Vollständig |

---

## Die Umstiegsschwelle

Drei Signale zeigen, dass die App nicht mehr ausreicht:

1. **Mehrere Personen müssen antworten.** Die App ist an ein Smartphone gebunden. Sobald zwei Angestellte dieselben Unterhaltungen bearbeiten müssen, reichen Sie ein Gerät hin und her, und das ist auf Dauer nicht haltbar.
2. **Sie verlieren den Überblick.** Ohne geteilten Verlauf und ohne Zuweisung wird jede zweite Anfrage doppelt oder gar nicht bearbeitet.
3. **Sie möchten automatisch antworten.** Die Schnellantworten der App verstehen die Anfrage nicht: Sie fügen einen Text ein, den Sie geschrieben haben.

---

## Die Falle, die am teuersten ist

Viele Unternehmen nutzen die App, um Werbeaktionen an eine Kundenliste zu schicken. WhatsApp erkennt das, und die Nummer wird erst eingeschränkt, dann gesperrt. Sie verlieren nicht nur den Kanal, sondern auch den Verlauf Ihrer Kundenunterhaltungen.

Genau dafür gibt es die API: Ausgehende Nachrichten an einen Kunden, der Ihnen in letzter Zeit nicht geschrieben hat, laufen über **im Voraus von Meta freigegebene Vorlagen**. Das ist aufwendiger, aber genau das schützt die Nummer.

---

## Was Sie vor dem Umstieg wissen sollten

**Die Nummer kann nicht auf beiden laufen.** Wenn Sie eine Nummer zur API migrieren, wird sie aus der App entfernt. Planen Sie den Umstieg für einen ruhigen Moment und informieren Sie das Team.

**Sie haben es nicht direkt mit Meta zu tun.** Sie gehen über einen Anbieter, der die Verbindung und die Abrechnung verwaltet. Die Wahl dieses Anbieters bestimmt, was Sie später machen können.

**Die Unternehmensverifizierung braucht Zeit.** Meta verlangt den Nachweis, dass das Unternehmen rechtlich existiert. Rechnen Sie mit mehreren Tagen bis einigen Wochen, und erledigen Sie das, bevor Sie es brauchen.

---

## Mit einer einzigen Frage entscheiden

**Wie viele Personen müssen dieselben Unterhaltungen sehen?**

Eine einzige, mit weniger als fünf Unterhaltungen pro Tag: Die kostenlose App ist die richtige Wahl, und für die API zu zahlen wäre Verschwendung.

Zwei oder mehr, oder mehr als zehn Unterhaltungen pro Tag, oder der Wunsch zu automatisieren: Sie brauchen die API und ein Tool, um sie zu nutzen.

Genau das macht [Aevia Inbox](https://inbox.aevia.services): Die API-Anbindung wird für Sie verwaltet, WhatsApp landet im selben Posteingang wie Instagram und E-Mail, und derselbe KI-Agent kann auf allen drei Kanälen antworten.`,
    faq: [
      {
        q: "Ist die WhatsApp Business API kostenpflichtig?",
        a: "Ja. Meta rechnet pro Unterhaltung ab, mit einem Tarif, der je nach Land und Nachrichtentyp variiert. Hinzu kommt der Preis des Tools, das die API nutzt. Die WhatsApp Business App bleibt dagegen kostenlos.",
      },
      {
        q: "Kann man beim Wechsel zur API die bisherige Nummer behalten?",
        a: "In den meisten Fällen ja, aber die Nummer verlässt dann die WhatsApp Business App und kann dort nicht mehr verwendet werden. Der Umstieg will vorbereitet sein: lokalen Verlauf sichern, Team informieren.",
      },
      {
        q: "Warum wurde meine WhatsApp-Nummer gesperrt?",
        a: "Meistens, weil Nachrichten massenhaft an Personen verschickt wurden, die nicht zuerst geschrieben hatten, oder weil Empfänger die Nachrichten gemeldet haben. Die API mit freigegebenen Vorlagen gibt es, um genau dieses Szenario zu vermeiden.",
      },
      {
        q: "Braucht man einen Entwickler, um die WhatsApp API zu nutzen?",
        a: "Nein, wenn Sie eine Lösung nutzen, die sie bereits integriert. Entwicklungsarbeit ist nur für eine maßgeschneiderte Integration mit einer internen Software nötig.",
      },
    ],
  },
  "agent-vocal-ia-garage-automobile": {
    title: "Kfz-Werkstatt: keine Kunden mehr verlieren, während Sie unter einem Auto liegen",
    excerpt:
      "Ein Kfz-Mechaniker kann nicht ans Telefon gehen, wenn er mit den Händen im Öl steckt. Jeder verpasste Anruf ist eine Inspektion, die zur Konkurrenz gegenüber wandert. Wie ein Sprachagent Termine annimmt, während die Werkstatt weiterläuft — und was Sie ihm nicht überlassen sollten.",
    content: `## Das Wichtigste in 30 Sekunden

- **Eine Werkstatt verpasst 30 bis 50 % ihrer Anrufe** während der Werkstattzeiten: Niemand sitzt im Büro, und unter der Hebebühne geht keiner ans Telefon
- **Wer nicht durchkommt, ruft nicht zurück** — er ruft die nächste Werkstatt an, denn eine Panne lässt sich nicht vertagen
- **Ein Sprachagent nimmt den Termin auf**, mit Anlass und Fahrzeug, und trägt ihn in den Kalender ein, ohne die laufende Arbeit zu unterbrechen
- **Was Sie ihm NICHT überlassen sollten**: die Diagnose und die Kostenschätzung. Ein Preis, der am Telefon genannt und dann in der Werkstatt widerlegt wird, zerstört das Vertrauen

---

## Das Problem ist mechanisch, nicht kaufmännisch

Eine Werkstatt mit zwei bis fünf Personen hat eine Einschränkung, die nur wenige Berufe kennen: Die Hände sind den größten Teil des Tages beschäftigt und schmutzig. Das Telefon klingelt genau in dem Moment, in dem man nicht abnehmen kann.

Die Folge: Die meisten Werkstätten arbeiten ganz bewusst im Notbetrieb. Man ruft zurück, „wenn man mal eine Minute hat“, also um 19 Uhr, wenn der Kunde selbst gerade mit etwas anderem beschäftigt ist. In der Zwischenzeit hat er zwei andere Werkstätten angerufen und bei der ersten, die abgenommen hat, einen Termin gemacht.

Das ist kein Servicemangel. Es ist eine körperliche Einschränkung. Und genau diese Art von Problem löst ein System besser als zusätzliche Anstrengung.

---

## Was ein Sprachagent in diesem Beruf gut macht

**Den Termin mit den richtigen Informationen aufnehmen.** Ein brauchbarer Werkstatttermin enthält vier Dinge: den Namen, das Fahrzeug (Marke, Modell, Kennzeichen), den Anlass und eine Verfügbarkeit. Der Agent fragt sie der Reihe nach ab, prüft sie und trägt den Termin ein.

**Dringendes von Planbarem trennen.** „Mein Auto springt nicht mehr an“ und „Ich brauche nächsten Monat einen Ölwechsel“ verlangen nicht dieselbe Antwort. Ein gut konfigurierter Agent bietet im einen Fall den nächsten freien Termin an und im anderen ein breites Zeitfenster.

**Die Fragen beantworten, die dreißigmal pro Woche kommen.** Machen Sie die Hauptuntersuchung? Stellen Sie einen Ersatzwagen? Nehmen Sie meine Marke an? Haben Sie samstags geöffnet? Diese Fragen erfordern keinerlei mechanisches Können, nur eine sofortige Antwort.

**Nacht und Wochenende abfangen.** Eine Panne passiert selten unter der Woche um 10 Uhr. Der Anruf am Sonntagabend entscheidet, wohin das Auto am Montag kommt.

---

## Was Sie auf keinen Fall automatisieren sollten

**Die Diagnose.** Ein Kunde, der ein Geräusch beschreibt, beschreibt nie das richtige Geräusch. Kein System, ob Mensch oder nicht, stellt am Telefon eine Diagnose — und ein Agent, der eine Ursache mutmaßt, legt Sie damit fest.

**Die Kostenschätzung.** Das ist der teuerste Fehler. Wenn der Agent sagt „Rechnen Sie mit etwa 250 €“ und die Rechnung bei 480 € landet, verlieren Sie den Kunden und kassieren eine Ein-Stern-Bewertung. Die Regel, die in die Konfiguration gehört: **nie einen Preis ohne Kostenvoranschlag nennen**, sondern auf einen Besuch in der Werkstatt verweisen.

**Reklamationen.** Ein Kunde, der unzufrieden mit einer Reparatur anruft, muss bei einem Menschen landen. Sofort.

---

## Was das in einer typischen Woche ändert

Eine Werkstatt mit 15 Anrufen pro Tag, von denen die Hälfte unbeantwortet bleibt, gewinnt bei vorsichtig angesetzter Abschlussquote jede Woche mehrere Termine zurück, die sonst woanders gelandet wären. Bei einem durchschnittlichen Auftragswert für die übliche Wartung ist die Rechnung schnell gemacht.

Der weniger sichtbare, aber nachhaltigere Vorteil: **Die Werkstatt wird nicht mehr unterbrochen.** Ein Mechaniker, der sein Werkzeug ablegt, um abzunehmen, verliert viel mehr als die Dauer des Anrufs — er verliert den Faden bei dem, was er gerade tat.

---

## Wie Sie es einrichten, ohne Bestehendes zu stören

Die empfohlene Konfiguration ist die **bedingte Rufumleitung**: Die Werkstatt behält ihre Nummer, und die Anrufe gehen nur dann an den Agenten, wenn nach fünfmal Klingeln niemand abnimmt oder die Leitung besetzt ist. Für die Kunden ändert sich nichts, für das Team ändert sich nichts, und der Agent nimmt nur das an, was sonst ins Leere gelaufen wäre.

Planen Sie einen halben Tag ein, um die häufigen Fragen und die tatsächlichen Regeln der Werkstatt zusammenzutragen — dort entscheidet sich die Qualität, nicht in der Technik.`,
    faq: [
      {
        q: "Kann der Agent am Telefon einen Reparaturpreis nennen?",
        a: "Er sollte es nicht, und das ist eine Regel, die ausdrücklich in seiner Konfiguration stehen muss. Ein Betrag, der ohne Diagnose genannt wird, wird von der Rechnung widerlegt, und das kostet Sie den Kunden und die Bewertung. Der Agent verweist auf einen Kostenvoranschlag nach einem Besuch in der Werkstatt.",
      },
      {
        q: "Woher weiß der Agent, welche Termine frei sind?",
        a: "Er liest den verbundenen Kalender in Echtzeit, schlägt nur tatsächlich verfügbare Termine vor und trägt dann den Termin mit Fahrzeug und Anlass ein.",
      },
      {
        q: "Was passiert, wenn der Kunde eine dringende Panne hat?",
        a: "Die Dringlichkeit lässt sich konfigurieren: Der Agent kann den ersten freien Termin des Tages anbieten, sofort auf das Handy des Chefs weiterleiten oder das Vorgehen für eine Pannenhilfe erklären — je nachdem, was Sie festlegen.",
      },
      {
        q: "Muss man die Telefonnummer wechseln?",
        a: "Nein. Die empfohlene Konfiguration ist eine bedingte Rufumleitung von der bestehenden Nummer aus: Der Agent nimmt nur die Anrufe an, bei denen niemand abnimmt.",
      },
    ],
  },
  "prise-rendez-vous-ia-cabinet-dentaire": {
    title: "Zahnarztpraxis: Terminvergabe per KI — und die Grenze, die nicht überschritten werden darf",
    excerpt:
      "Die Anmeldung einer Zahnarztpraxis verbringt ihre Tage mit drei Anliegen, die sich ständig wiederholen. Sie zu automatisieren, spart echte Zeit — vorausgesetzt, man weiß genau, was eine KI in einer Gesundheitseinrichtung nicht tun darf.",
    content: `## Das Wichtigste in 30 Sekunden

- **Drei Anliegen machen den Großteil der Anrufe aus**: einen Termin vereinbaren, verschieben oder absagen
- **Die Automatisierung dieser drei** gibt der Anmeldung die Zeit zurück, die sie am Telefon verbringt, statt die anwesenden Patienten zu empfangen
- **Eine KI gibt niemals medizinischen Rat** — weder eine Einschätzung von Symptomen noch ein „Ist das schlimm?“. Das ist eine rechtliche Grenze, nicht nur eine Vorsichtsmaßnahme
- **Gesundheitsdaten sind sensible Daten im Sinne der DSGVO**: Hosting, Datenminimierung und Information der Patienten sind nicht optional

---

## Was die Anmeldung einer Zahnarztpraxis wirklich tut

Schauen Sie sich einen Tag am Praxistelefon an: Die große Mehrheit der Anrufe lässt sich in drei Sätzen zusammenfassen. „Ich hätte gern einen Termin.“ „Ich muss den am Donnerstag verschieben.“ „Ich kann nicht kommen.“

Diese Anrufe erfordern keinerlei klinische Kompetenz. Sie erfordern einen aktuellen Kalender und zwei Minuten. Aber sie kommen gehäuft um 9 Uhr und um 14 Uhr, genau dann, wenn Patienten an der Anmeldung stehen — und es ist die Person vor Ihnen, die wartet, während Sie telefonieren.

---

## Was sich sauber automatisieren lässt

**Die Terminvergabe.** Der Agent fragt den Anlass aus einer Liste ab, die Sie festlegen (Kontrolle, Zahnsteinentfernung, Notfall, Folgebehandlung), schlägt Termine vor, die der tatsächlichen Dauer der Behandlung entsprechen, und trägt den Patienten ein.

**Verschiebung und Absage.** Das ist das rentabelste und am meisten unterschätzte Potenzial. Eine nicht bearbeitete Absage wird zum leeren Behandlungsstuhl; eine rechtzeitig erfasste Absage lässt sich neu vergeben.

**Die Terminerinnerung.** Die Quote nicht wahrgenommener Termine sinkt mit einer Erinnerung am Vortag deutlich — und niemand führt diese Anrufe gern.

**Verwaltungsfragen.** Nehmen Sie die Carte Vitale (die französische Versichertenkarte) an? Sind Sie bei der Assurance Maladie (der französischen gesetzlichen Krankenversicherung) zugelassen? Wo kann man parken? Machen Sie Implantologie? Diese Antworten stehen fest, und es gibt keinen Grund, dafür einen Menschen zu binden.

---

## Die Grenze, die nicht überschritten werden darf

Das ist der Teil, den man zweimal lesen sollte.

**Kein medizinischer Rat, niemals.** Ein Agent darf nicht auf „Ich habe Schmerzen, kann ich warten?“ antworten, kein Schmerzmittel vorschlagen und keinen Schweregrad einschätzen. Die Konfiguration muss einen ausdrücklichen Ausstiegssatz und eine Weiterleitung vorsehen.

**Keine Einschätzung von Symptomen.** Anhand einer telefonischen Beschreibung zu entscheiden, ob ein Patient ein Notfall ist oder nicht, ist eine medizinische Handlung. Der Agent kann einen „Notfall“-Termin anbieten, wenn der Patient danach fragt, aber nicht entscheiden, dass er einer ist.

**Kein Austausch medizinischer Daten.** Der Agent erfasst einen Anlass in Ihrer Nomenklatur, keine klinische Vorgeschichte.

**Ein Mensch, der jederzeit erreichbar ist.** Akute Zahnschmerzen lassen sich nicht in die Warteschleife stellen. Die Weiterleitung muss sofort erfolgen und getestet sein.

---

## DSGVO: was das konkret bedeutet

Ein Zahnarzttermin verrät, auch ohne klinische Details, etwas über den Gesundheitszustand. Die DSGVO ordnet ihn den **sensiblen Daten** zu, was mehr verlangt als ein Einwilligungsformular:

- **Datenminimierung** — nur Name, Kontaktdaten, Anlass und Termin erfassen. Kein „Beschreiben Sie Ihr Problem“.
- **Information der Patienten** — klar sagen, dass ein automatisiertes System die Terminvergabe übernimmt und wie man einen Menschen erreicht.
- **Hosting** — Gesundheitsdaten unterliegen in Frankreich besonderen Hosting-Anforderungen; das ist mit Ihrem Dienstleister zu prüfen, je nachdem, was tatsächlich gespeichert wird.
- **Speicherdauer** — festgelegt, schriftlich fixiert, angewendet.
- **Auftragsverarbeitung** — ein ordnungsgemäßer Auftragsverarbeitungsvertrag mit dem Dienstleister.

Das ist kein Hindernis, sondern ein Rahmen. Eine Praxis, die ihn umsetzt, gewinnt auch an Gelassenheit gegenüber ihren Patienten.

---

## Was das im Alltag ändert

Der Nutzen besteht nicht darin, „die Anmeldung zu ersetzen“. Er besteht darin, **ihr ihre eigentliche Arbeit zurückzugeben**: empfangen, vorbereiten, die Direktabrechnung mit den Kassen (tiers payant) erledigen, sich um den Patienten kümmern, der gerade da ist. Das Telefon ist keine ständige Unterbrechung mehr, sondern ein Strom, der im Hintergrund bearbeitet wird.

Und die Praxis verliert nicht mehr die Anfragen vom Abend und vom Wochenende, die heute auf einem Anrufbeantworter landen, den nur wenige Patienten bis zum Ende abhören.

---

## Realistische Einführung

Rechnen Sie mit einem halben Tag, um die Nomenklatur der Anlässe und die zugehörigen Dauern, die Notfallregeln und die Liste der Situationen festzulegen, die eine Weiterleitung an einen Menschen auslösen. Diese Arbeit — nicht die Technik — entscheidet, ob das System eine Entlastung oder eine Quelle von Zwischenfällen wird.`,
    faq: [
      {
        q: "Darf eine KI medizinische Termine vereinbaren?",
        a: "Ja, die Terminvergabe ist ein Verwaltungsvorgang, keine medizinische Handlung. Der Agent darf jedoch weder Symptome bewerten noch eine Behandlung empfehlen noch über einen Notfall entscheiden: Diese Handlungen sind Sache der medizinischen Fachkraft.",
      },
      {
        q: "Sind die Patientendaten geschützt?",
        a: "Ein Termin bei einer Behandlerin oder einem Behandler verrät etwas über den Gesundheitszustand und fällt daher unter die sensiblen Daten im Sinne der DSGVO. Das erfordert die Minimierung der erhobenen Daten, die Information der Patienten, eine festgelegte Speicherdauer, einen Auftragsverarbeitungsvertrag und Sorgfalt bei den Hosting-Anforderungen, je nachdem, was gespeichert wird.",
      },
      {
        q: "Was passiert, wenn ein Patient einen schmerzhaften Notfall hat?",
        a: "Die Weiterleitung an einen Menschen muss sofort erfolgen und im Voraus konfiguriert sein. Der Agent darf den Dringlichkeitsgrad niemals selbst anhand der Beschreibung des Patienten einschätzen.",
      },
      {
        q: "Kann der Agent Absagen und Erinnerungen übernehmen?",
        a: "Ja, und das ist oft der rentabelste Gewinn: Eine rechtzeitig erfasste Absage ermöglicht es, den Termin neu zu vergeben, und eine Erinnerung am Vortag senkt die Zahl nicht wahrgenommener Termine deutlich.",
      },
    ],
  },
};
