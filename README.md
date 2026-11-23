# SOCIAL ATLAS 4.0 – Vernetzte Enzyklopädie der sozialen Sicherheit

**Live-Website:** https://vnipo01-coder.github.io/Social-Atlas-Swiss-Insurance/

SOCIAL ATLAS ist eine eigenständige, statische Web-App für GitHub Pages. Sie erklärt das schweizerische Sozialversicherungssystem, kantonale Sozialhilfe und soziale Sicherheit im europäischen Kontext. Die Version 4.0 setzt auf ein **rot-weisses Wiki-Design**, nachvollziehbare Rechtsquellen und eine interaktive Wissensstruktur.

## Funktionsumfang der aktuellen Version

- **40 strukturierte Fachartikel** mit Vertiefungsabschnitten, Prüfschritten, Querverweisen und amtlichen Quellen.
- **54 Beziehungen** zwischen den Themen in einem interaktiven SVG-Systemnetz. Knoten auswählen, unmittelbare Beziehungen anzeigen, zoomen, verschieben und direkt zum Fachartikel wechseln.
- **22 ausgewählte Rechtsreferenzen** zur schweizerischen Bundesverfassung und zentralen Sozialversicherungsgesetzen sowie zum Koordinationsrecht (EU). Verweise sind thematisch verknüpft und führen zu amtlichen Texten.
- **26 Kantonsprofile** als Navigations- und Vergleichsgrundlage; **Graubünden** besitzt vertiefte kantonsspezifische Quellen zu Sozialhilfe, Organisation und Praxis.
- **6 Länderprofile** mit mehrteiligen Themenkapiteln zu Schweiz, Deutschland, Frankreich, Italien, Österreich und Liechtenstein.
- **Volltextsuche**, Glossar, Vergleich von Kantonen und Ländern, Merkliste im Browser, Quiz.
- **Falllabor** mit sechs Fallarten, Kantonwahl, offenen Sachverhaltsfragen, Prüfschritten und zugehörigen Rechtsreferenzen.
- **Fallgenerator** mit fiktiver Person, Alter, Haushalt, Erwerbssituation, Kanton und einer zusätzlichen Herausforderung. Arbeitsblätter lassen sich kopieren und drucken.
- **Wissensassistent (lokal)** beantwortet Fragen durch Zusammenstellung passender vorhandener Fachtexte, Prüfschritte und Rechtsquellen. **Kein KI-Sprachmodell**.

## Code / technischer Aufbau

- `index.html` – Einstiegspunkt
- `knowledge-v4.js` – Kern-Wissensdatenbank
- `atlas-expansion-v4.js` – vertiefende Spezialthemen und Länderprofile
- `atlas-v4.js` – Navigation, Suche, Wissensgraph, Fälle, Generator, Quiz und Vergleich
- `atlas-v4.css` – rot-weisses responsive Design

Ältere Dateien (`app.js`, `style.css`, `studio.js`) bleiben vorerst für die Versionshistorie im Repository, werden aber von der aktuellen Startseite nicht geladen.

## Einschränkungen und redaktioneller Stand

Die 40 Artikel sind **keine vollständige Darstellung jedes einzelnen Sozialversicherungstatbestands**. Auch die 22 Rechtsverweise sind eine kuratierte Auswahl, keine erschöpfende Normendatenbank. Die Länderprofile fassen Grundstrukturen zusammen und ersetzen keine Recherche in nationalen Spezialgesetzen.

**Wichtig zu den Kantonen:** Alle 26 Kantone sind auswählbar, aber die Daten sind ungleich tief erschlossen. Nur für Graubünden sind derzeit konkrete kantonale Primärquellen vertieft eingebunden. Die App weist bewusst keine unbestätigten Grundbedarfsbeträge, Mietzinslimiten oder kantonalen Fristen aus.

**Der Wissensassistent verwendet keine echte generative KI.** Die Antworten werden aus einer lokal hinterlegten Wissensdatenbank und regelbasierten Ähnlichkeitssuchen zusammengestellt. Ein echtes Sprachmodell würde einen sicheren Backend-Dienst und eine zuverlässige Quellenabfrage benötigen. Niemals API-Schlüssel in die öffentlich zugänglichen GitHub-Pages-Dateien eintragen.

**Keine Rechtsberatung.** Rechtsgrundlagen, Rechtsprechung, Spezialfälle, Übergangsrecht, kantonale Weisungen und die aktuell gültigen Leistungsansätze sind vor einem verbindlichen Entscheid bei der zuständigen Behörde zu prüfen.

## Amtliche Quellen (Auswahl)

- [BSV – Schweizer Sozialversicherungssystem](https://www.bsv.admin.ch/de/uebersicht-sozialversicherungssystem)
- [BSV – 13. AHV-Altersrente ab Dezember 2026](https://www.bsv.admin.ch/de/umsetzung-13-ahv-rente)
- [BAG – Bundesamt für Gesundheit](https://www.bag.admin.ch/)
- [SKOS – Richtlinien](https://skos.ch/skos-richtlinien/aktuelle-richtlinien)
- [Sozialamt Graubünden – Sozialhilfe-Handbuch](https://www.gr.ch/DE/institutionen/verwaltung/dvs/soa/beratung/sozialhilfe-handbuch/Seiten/default.aspx)
- [Graubünden – Erlasssammlung BR 546.100](https://www.gr-lex.gr.ch/app/de/texts_of_law/546.100)
- [Fedlex – Bundesrecht](https://www.fedlex.admin.ch/)
- [Europäische Kommission – Koordinationsrecht](https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/specialised-information/eu-legislation_en)

Redaktionelle Aktualisierung: **23. November 2026**.

## GitHub Pages

Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/ (root)` → Save. Die Plattform benötigt weder einen Build-Prozess noch eine Datenbank oder Benutzeranmeldung.
