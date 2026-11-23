# SOCIAL ATLAS 5.0 – illustrierte Enzyklopädie der sozialen Sicherheit

**GitHub Pages:** https://vnipo01-coder.github.io/Social-Atlas-Swiss-Insurance/

Eigenständige, mobil nutzbare rot-weisse Wissensplattform mit recherchierten Erläuterungen zur Schweizer sozialen Sicherheit und den Nachbarländern.

## Version 5 – neue Funktionen

- **40 ausführlichere Fachartikel**. Jeder Artikel enthält mindestens drei zusätzliche themenspezifische Fachdossier-Kapitel, die bisherigen Grundlagenabschnitte, einen individuellen visuellen Prüfpfad, ein grosses Schaubild, wissenschaftliche Einordnung, Praxisbeispiele, Gesetzesreferenzen und Querverweise.
- **58 ausgewählte Rechtsreferenzen**, verlinkt mit amtlichen Erlassen (BV, ATSG, AHVG, IVG, ELG, BVG, KVG, UVG, AVIG, FamZG, OR, EU-Verordnung 883/2004 sowie kantonale Grundlagen). Ein Link kann zur Gesetzessammlung statt direkt zu einem einzelnen Absatz führen.
- **54 thematische Beziehungen** im interaktiven Systemgraphen mit Zoom, Verschieben und Verknüpfung zur Wissensbibliothek.
- **4 originale SVG-Infografiken** zu Drei-Säulen-Vorsorge, Sozialhilfe-Fünf-Säulen-Modell, europäischen Sicherungssystemen und Leistungskoordination. Zusätzlich hat jedes Dossier einen spezifischen visuellen Prüffluss.
- **6 Länderprofile**, jetzt je zwölf aufklappbare sozialpolitische Vergleichsdimensionen (72 Felder insgesamt). Die Gliederung orientiert sich an MISSOC der Europäischen Kommission; die Texte sind eigene vereinfachte Einordnungen und keine Übernahme der EU-Datenbank.
- **26 Kantone** mit Sozialhilfeprofilen; vertiefte belegte kantonale Quellen bislang vor allem für Graubünden.
- **Quellenboxen und weiterführende Recherche**: amtliche Links, eigene wissenschaftliche Einordnungen, Wikipedia-Suchlinks und Literaturrecherche. Die App kopiert keine Wikipedia-Texte und behandelt Wikipedia nicht als massgebende Rechtsquelle.
- **Durchsuchbarkeit**: Die Suche berücksichtigt auch die zusätzlichen Dossierkapitel; Merkliste speichert gewählte Artikel lokal im Browser.
- **Falllabor und lokaler Fallgenerator**: sechs Grundszenarien, Kantonwahl, individuell variierbare fiktive Fallkonstellationen, Checklisten, Quellen und Druckfunktion.
- **Wissensassistent**: längere, regelbasierte Antworten mit passenden Dossierpassagen und Rechtsquellen. **Dies ist kein generatives KI-Sprachmodell.**

## Struktur

Die aktuell eingebundenen Dateien werden in dieser Reihenfolge geladen:

1. `knowledge-v4.js` – Kern-Wissensdatenbank
2. `atlas-expansion-v4.js` – weitere Themen und Länder-Kapitel
3. `dossiers-v5.js` – ausführliche Leitdossiers
4. `dossiers-v5-extra.js` – Fachdossierkapitel für die weiteren Themen
5. `europe-v5.js` – europäische Vergleichsmatrix
6. `law-expansion-v5.js` – zusätzliche ausgewählte Normen
7. `atlas-visuals-v5.js` – Visualisierung und redaktionelle Seitenbausteine
8. `atlas-v4.js` – App-Logik, Suche, Navigation, Graph und Falllabor

Design in `atlas-v4.css` und `atlas-v5.css`, Bilddateien unter `assets/`. Die älteren nicht eingebundenen Dateien bleiben für die Versionshistorie im Repository.

## Wissenschaftliche und amtliche Quellen

- [Bundesamt für Sozialversicherungen – Drei Säulen](https://www.bsv.admin.ch/de/dreisaeulensystem)
- [Bundesamt für Sozialversicherungen – 2026 Sozialversicherungsstatistik](https://www.bsv.admin.ch/de/svs)
- [BSV – 13. AHV-Altersrente](https://www.bsv.admin.ch/de/umsetzung-13-ahv-rente)
- [SKOS – Grundbedarf](https://skos.ch/skos-richtlinien/grundbedarf-fuer-den-lebensunterhalt)
- [SKOS – rechtliche Umsetzung](https://skos.ch/skos-richtlinien/entstehung-und-bedeutung)
- [Graubünden – Sozialhilfe-Handbuch](https://www.gr.ch/DE/institutionen/verwaltung/dvs/soa/beratung/sozialhilfe-handbuch/Seiten/default.aspx)
- [Fedlex – amtliches Bundesrecht](https://www.fedlex.admin.ch/)
- [WHO – ICF](https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health)
- [EU-Kommission – MISSOC](https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/eu-mutual-information-system-social-protection-missoc_en)
- [EUR-Lex – Verordnung 883/2004](https://eur-lex.europa.eu/eli/reg/2004/883/oj)

## Grenzen der Version 5

Die in der App enthaltenen 40 Fachartikel sind **noch keine vollständige Reproduktion des geltenden Rechts**, und die 58 Referenzen stellen eine **kuratierte Auswahl** dar. Einzelne Quellenlinks und der genaue rechtliche Stand sind vor professionellen Entscheidungen zu überprüfen.

**Alle 26 Kantone sind als Profile zugänglich**, aber bei 25 Kantonen sind Mietzinslimiten, Grundbedarfsansätze, kommunale Vollzugspraxis, Fristen und einzelne Rechtsartikel noch nicht systematisch verifiziert. Nur Graubünden ist mit mehreren offiziellen kantonalen Primärquellen vertieft erschlossen. Diese Lücken sind transparent gekennzeichnet; keine erfundenen Zahlen.

Auch die sechs Länderprofile enthalten eine fachliche Einführung und zwölf qualitative Vergleichsbereiche, **noch keinen vollständigen nationalen Normenkatalog mit sämtlichen Leistungssätzen**. Die aktuelle MISSOC-Datenbank und nationalen Behörden bleiben bei echten grenzüberschreitenden Fällen massgebend.

**Die wissenschaftlichen Erklärungen sind redaktionelle Einordnungen**, nicht mit einer Peer-Review-Studie gleichzusetzen. Wikipedia und Literatur-Suchlinks dienen der Vertiefung. 

**Der lokale Wissensassistent ist keine KI mit eigenständiger Quellenrecherche.** Für verlässliche frei formulierte KI-Antworten mit aktuell geprüften Belegen wird eine geschützte Backend-Anbindung gebraucht. API-Schlüssel dürfen niemals in einem öffentlichen GitHub-Pages-Repository gespeichert werden.

## Veröffentlichen

GitHub → Settings → Pages → Deploy from a branch → `main` → `/ (root)`. Die Web-App funktioniert ohne Build-Prozess.

Redaktioneller Bearbeitungsstand: **23. November 2026**.
