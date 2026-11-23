# SOCIAL ATLAS 7.0 – die illustrierte Wissensenzyklopädie

**Website:** https://vnipo01-coder.github.io/Social-Atlas-Swiss-Insurance/

SOCIAL ATLAS ist eine redaktionell kuratierte, interaktive Lern- und Wissensplattform über die Schweizer Sozialversicherungen, die kantonale Sozialhilfe, sozialversicherungsrechtliche Verfahren und die europäischen Systeme. Sie wurde als statische GitHub-Pages-Web-App umgesetzt.

## Version 7: die inhaltliche Erweiterung

Die bisherige App bot bereits Artikel, Werte und Rechner, aber nicht genügend inhaltliche Tiefe. V7 ergänzt deshalb **alle 40 Fachartikel** mit einem vollständigen zusätzlichen Handbuchband. Die Ergänzungen bestehen aus:

- **182 neu geschriebene, fachbezogene Vertiefungskapitel** über Versicherungsstatus, Anspruchsvoraussetzungen, Verfahren, Berechnung und Koordination.
- **160 individuelle Fachfragen mit Antworten**. Sie erläutern häufige Missverständnisse, besondere Regeln und die Grenzen einfacher Faustformeln.
- **241 Prüftabellenzeilen**. Jede Zeile ordnet einem konkreten Prüfbereich die erforderliche Tatsachenabklärung und passende Rechtsgrundlagen oder Dokumente zu.
- **40 individuelle interaktive Systemgrafiken** auf Basis der jeweilig eigenen Prüftabelle. Einzelne Knoten lassen sich aufklappen; es handelt sich nicht nur um dieselbe Illustration auf jeder Seite.
- Ein **direkt anwählbares Kapitelverzeichnis** zu Beginn jedes Fachartikels, ein scrollbareres rechtes Wiki-Inhaltsverzeichnis, strukturierte Praxisbeispiele, eine Quellenbox und Fachartikelverknüpfungen.
- **Kapitelgenaue Volltextsuche:** Neue Treffer führen direkt in eines der 182 zusätzlichen Handbuchkapitel.
- **36 neue, eigenständige Länder-Handbuchkapitel** über CH, DE, FR, IT, AT und LI. Dazu bleiben die zwölf MISSOC-orientierten Felder pro Land erhalten.
- Für jeden der 26 Kantone eine **erweiterte Systematik der wichtigen sozialhilferechtlichen Prüffelder** und ein amtlicher Gesetzeseinstieg.

Alle Inhalte bestehen aus echten, unterscheidbaren themenspezifischen Abschnitten. Die bisher vorhandenen 2026-Tarifansätze, Vergleiche, Infografiken, Fachartikel, Falllabor und elf Lernrechner wurden bewusst nicht entfernt.

## Navigation

- `#/wissen` – Hauptverzeichnis der 40 Fachartikel
- `#/artikel/ahv`, `#/artikel/iv`, `#/artikel/el`, `#/artikel/sozialhilfe` – umfassende Handbuchseiten
- `#/tarife` – 160 für 2026 erfasste Tarif- und Leistungsansätze
- `#/rechner` – elf vereinfachte Rechenmodelle mit Quell- und Gültigkeitshinweisen
- `#/kantone` – alle 26 Kantone, Familienzulagen und kantonale Gesetze
- `#/laender` – sechs nationale Systeme mit je zwölf Vergleichsbereichen und zusätzlichen ausführlichen Handbuchkapiteln
- `#/netzwerk` – interaktiver Graph der Versicherungs- und Unterstützungszweige
- `#/infografiken` – vier skalierbare Original-SVG-Infografiken
- `#/falllabor` – interaktive Fälle und gesetzesbezogene Prüfwege

## Quellensystem und methodische Grenzen

Die Plattform verlinkt u. a. direkt zu:

- [BSV – Taschenstatistik der Sozialversicherungen 2026](https://www.bsv.admin.ch/de/svs)
- [BSV – ATSG-Notiz 2026](https://www.bsv.admin.ch/de/atsg-notiz-2026)
- [BSV – Werte für 2026](https://www.bsv.admin.ch/dam/bsv/de/dokumente/ahv/uebersichten/renten-und-beitraege-20260101.pdf.download.pdf/renten-und-beitraege-20260101.pdf)
- [SKOS – aktuelle Richtlinien](https://skos.ch/skos-richtlinien/aktuelle-richtlinien)
- [SKOS – kantonale Rechtsgrundlagen](https://skos.ch/skos-richtlinien/rechtliches/rechtsgrundlagen/)
- [BAG – Krankenversicherung](https://www.bag.admin.ch/)
- [Fedlex – Bundesgesetzgebung](https://www.fedlex.admin.ch/)
- [Europäische Kommission – MISSOC](https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/eu-mutual-information-system-social-protection-missoc_en)
- [WHO – ICF-Klassifikation](https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health)

**Fachliche Vorsicht:** Die Angaben sind didaktische, redaktionelle Zusammenfassungen. Eine Verlinkung zu einem allgemeinen amtlichen Portal ist **keine individuelle Satz-für-Satz-Validierung sämtlicher Aussagen**. Amtliche Erlasse, Spezialrichtlinien, Rechtsprechung und gültige Tarifblätter müssen vor einer rechtsverbindlichen Entscheidung gesondert konsultiert werden.

**Tarife:** Die Tariftabelle stammt aus dem vorherigen V6-Ausbau und bezieht sich auf das **Referenzjahr 2026**. Sie aktualisiert sich nicht automatisch. Nicht alle möglichen Tarifverträge, Versicherungsprodukte und Zahlbeträge für sämtliche Personengruppen sind erfasst. In Ländern ausserhalb der Schweiz sind spezifische nationale Leistungsbeträge noch nicht als vollständige rechtlich überprüfte Datensätze gespeichert.

**Kantone:** Für alle 26 Kantone bestehen Gesetzeslinks und Familienzulagenansätze 2026. Die Sozialhilfevorschriften werden als Themen und Prüffelder erschlossen. Eine vollständige verifizierte Datenbank aller kommunalen Mietzinslimiten, sozialen Sonderregeln, Sanktionen, Fristen und Unterstützungsansätze besteht **noch nicht**. Graubünden ist mit seinen kantonalen Primärquellen vertiefter als andere Kantone hinterlegt.

**KI:** Der Wissensassistent funktioniert als lokale, regelbasierte Suche und Textzusammenstellung. Er ist kein an eine aktuelle Online-Recherche angeschlossenes KI-Sprachmodell. Ein echtes Sprachmodell benötigt einen geschützten Backend-Dienst. **Niemals geheime API-Schlüssel in einem öffentlichen GitHub-Pages-Repository speichern.**

## V7-Dateien

- `handbuch-v7-versicherung.js` – 14 vertiefte Versicherungsdossiers
- `handbuch-v7-sozialhilfe.js` – 14 vertiefte Sozialhilfe-, Mittel- und Graubünden-Dossiers
- `handbuch-v7-spezial.js` – 12 weitere Versicherungs-, Verfahrens- und Europa-Dossiers
- `handbuch-v7-laender.js` – 36 neue Länderkapitel
- `quellen-v7.js` – zentrale amtliche Quellen nach Themenbereichen
- `atlas-handbuch-v7.js` – redaktionelles Wiki-Rendering, interaktive Systemgrafiken, Inhaltsnavigation, Tabellen, FAQs und Praxisbeispiele
- `atlas-v7.css` – Langformlayout und responsive Infografiken
- `atlas-v4.js` – existierende App-Logik, erweitert um alle neuen Wissensmodule und Kapitel-Suche
- `index.html` – GitHub-Pages-Einstieg, lädt alle Version-7-Dateien nach den früheren Datenebenen

## GitHub Pages

GitHub → Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save. Die App benötigt keinen zusätzlichen Build-Server.

Redaktioneller Arbeitsstand: **23. November 2026**.
