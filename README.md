# SOCIAL ATLAS 6.0 – Tarife, Berechnungen und umfassende Fachdossiers

**Website:** https://vnipo01-coder.github.io/Social-Atlas-Swiss-Insurance/

Die Version 6 führt die illustrierte, vernetzte Enzyklopädie aus Version 5 weiter und ergänzt sie um eine **strukturierte Tarifdatenbank für das Referenzjahr 2026** sowie interaktive Rechenmodelle.

## Funktionen Version 6

- **40 Fachdossiers** mit einfachen Grundlagen, vertieften Kapiteln, Verknüpfungen, Grafiken, wissenschaftlichen Einordnungen und Rechtsquellen.
- **160 einzelne Tarif- und Leistungsansätze** mit Zeitbezug, Geltungsbereich, Erläuterungen und offiziellen Quellen. Enthält u. a. AHV-/IV-Renten, Hilflosenentschädigungen, Assistenzbeitrag, AHV-/ALV-Beiträge, EL-Pauschalen, BVG-Grenzbeträge, Säule 3a, KVG-Kostenbeteiligung, FamZ und Sozialhilfe.
- **2026er Familienzulagen für alle 26 Kantone**, darunter Kinder-, Ausbildungs-, teilweise Geburts- und Adoptionszulagen sowie Arbeitgeberbeiträge an die *kantonalen* Familienausgleichskassen. Mehrfachwerte (z. B. 215/268) sind mit Alters- oder Kinderzahlregeln versehen und dürfen nicht pauschal verallgemeinert werden.
- **11 interaktive Lernrechner**, etwa für Arbeitnehmerbeiträge AHV/IV/EO/ALV, BVG-Lohn, KVG-Franchise/Selbstbehalt, EL-Differenz, Sozialhilfe-Budgetmodell Graubünden, ALV 70/80 %, die 13. AHV-Altersrente, EO-Mutterschaft, 3a-Einzahlung, bundesrechtliche Familienzulagen und kantonale Familienzulagen.
- Jeder Artikel erhält eine neue Rubrik **„Aktuelle Beträge und Bemessungsgrundlagen“** sowie **„Wie werden Leistungen und Beiträge ermittelt?“** mit einer individuellen fachlichen Erklärung und einem didaktischen Rechenbeispiel. Wo keine allgemeine Pauschale existiert, wird das ausdrücklich erklärt.
- Bestehende Infografiken, vernetztes SVG-Systemdiagramm, Falllabor, Wissensassistent, Suchfunktion, 58 ausgewählte Normen, sechs Länder mit zwölf Vergleichsbereichen und kantonale Gesetzeseinstiege bleiben verfügbar.
- Der Kantonsvergleich zeigt nun tatsächliche kantonale Familienzulagen 2026, nicht mehr nur allgemeine Strukturen.

## Bedienung

- `#/tarife` – die gesamte Tarifsammlung nach Stichwort und Bereich durchsuchen
- `#/rechner` – einen von elf Rechnern auswählen und Werte interaktiv ändern
- `#/artikel/ahv`, `#/artikel/bvg`, `#/artikel/el` usw. – Tarifinformationen direkt im Artikel
- `#/kanton/GR` und andere Kantonsprofile – kantonale Familienzulagen sowie die Sozialhilfe-Rechtsquellen
- `#/vergleich` – zwei Kantone gegenüberstellen, einschliesslich Familienzulagen 2026

## Gültigkeit und fachliche Warnungen

**Referenzjahr 2026, redaktionell überprüft am 23.11.2026.** Die App lädt statische Daten und aktualisiert die Tarife nicht automatisch. Für 2027 werden die offiziellen Jahresansätze neu zu prüfen sein.

**Die Beispielrechner sind keine rechtsverbindlichen Anspruchsrechner.** Sie veranschaulichen Formeln mit angenommenen Eingabedaten. Sie prüfen nicht vollständig Versicherungsstatus, Wartezeiten, Unterstellungsregeln, Rentenskalen, Haushaltsdefinitionen, Vermögensrecht, kommunale Mietzinsrichtlinien, allfällige Ausnahmen und individuelle Verfügungen. Keine persönlichen Klientendaten eingeben.

**160 Datensätze bedeuten nicht, dass jedes mögliche Detail aller 40 Systeme und sechs Länder vollständig erfasst wäre.** Tarifwerte sind bewusst auf gut überprüfbare 2026er Schweizer Ansätze fokussiert. Europäische Leistungsbeträge und viele kantonale Sozialhilfekennzahlen sind noch nicht als vollständige und validierte Zeitreihen hinterlegt. Alle 26 Kantone besitzen einen Gesetzeseinstieg und Familienzulagenwerte; nur Graubünden besitzt zusätzliche vertiefte Sozialhilfe-Primärquellen und einen illustrierten vereinfachten Sozialhilferechner.

**Statische Wissenssuche, keine echte KI:** Der Assistent stellt aus lokalen redaktionellen Texten passende Erklärungen zusammen. Er generiert keine auf Basis aktuell abgerufener Quellen verifizierte KI-Rechtsauskunft. Für eine echte KI-Integration wäre eine sichere Backend-Anbindung mit Quellenprüfungen erforderlich. Keine API-Schlüssel in GitHub Pages speichern.

## Neue V6-Dateien

- `tariffs-v6.js` – 65 bundesrechtliche und einzelne kantonale Referenzbeträge sowie Quellen
- `familienzulagen-kantone-v6.js` – zusätzliche 95 2026er Daten der 26 kantonalen Familienzulagensysteme
- `calculator-v6.js` – Tarifansicht, Quellenhinweise, elf interaktive Lernrechner und Integration in Fach-/Kantons-/Länderartikel
- `atlas-v6.css` – responsive Tabellen, Erklärungen und Rechner-Oberfläche
- `atlas-v4.js` – weiterhin zentrale SPA-App-Logik, erweitert für V6
- `index.html` – lädt die V6-Dateien in der richtigen Reihenfolge nach den grundlegenden Wissensdaten

## Amtliche Grundlagen (Auswahl)

- [BSV: Renten, Beiträge, EL und BVG – gültig ab 01.01.2026](https://www.bsv.admin.ch/dam/bsv/de/dokumente/ahv/uebersichten/renten-und-beitraege-20260101.pdf.download.pdf/renten-und-beitraege-20260101.pdf)
- [BSV: Beiträge an Sozialversicherungen](https://www.bsv.admin.ch/de/beitraege-im-ueberblick)
- [BSV: Familienzulagen 2026 nach Kantonen](https://www.bsv.admin.ch/dam/de/sd-web/acU7RgJgeisY/Arten%20und%20Ans%C3%A4tze%20der%20Familienzulagen_2026.pdf)
- [BSV: Berufliche Vorsorge](https://www.bsv.admin.ch/de/altersvorsorge-beruflichen-vorsorge)
- [BSV: 13. AHV-Altersrente](https://www.bsv.admin.ch/de/umsetzung-13-ahv-rente)
- [BAG: KVG Kostenbeteiligung](https://www.bag.admin.ch/de/krankenversicherung-kostenbeteiligung-fuer-in-der-schweiz-wohnhafte-versicherte)
- [SECO: Arbeitslosenversicherung und Leistungen](https://www.onlineformulare-ffe.arbeit.swiss/de/stellensuchende/versicherungsleistungen)
- [SKOS: Grundbedarf](https://skos.ch/skos-richtlinien/grundbedarf-fuer-den-lebensunterhalt)
- [Graubünden: Grundbedarfsentscheid](https://www.gr.ch/DE/Medien/Mitteilungen/MMStaka/2024/Seiten/2024112101.aspx)
- [Graubünden: Familienzulagen-Ausführungsbestimmungen BR 548.120](https://www.gr-lex.gr.ch/data/548.120/de)
- [SKOS: Kantonale Rechtsgrundlagen](https://skos.ch/skos-richtlinien/rechtliches/rechtsgrundlagen/)

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Statische Seite ohne Build-Tool.

Bearbeitungsstand: **23. November 2026**.
