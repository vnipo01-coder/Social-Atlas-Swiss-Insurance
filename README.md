# SOCIAL ATLAS – Wissenschaftliche Fachvertiefung (Ausbau 12)

**Stand: 23. November 2026.** Die vertraute klassische rot-weisse Oberfläche bleibt erhalten. Jede der **92 bestehenden Artikelseiten** enthält jetzt eine ergänzende **wissenschaftliche Vertiefungsbibliothek**.

## Was genau wurde erweitert?

- **276 neu redaktionell verfasste, themenspezifische Fachkapitel**, jeweils drei für jeden der 92 Artikel, mit insgesamt ca. **11’100 zusätzlichen Wörtern**.
- Die drei zusätzlichen Perspektiven unterscheiden den **wissenschaftlichen Bezugsrahmen**, **empirisch-methodische Fragen und Grenzen** sowie den **Transfer in die professionelle Praxis**. Die Inhalte sind für jeden Artikel individuell ausgearbeitet, nicht automatisch austauschbare Fülltexte.
- Die älteren, bereits bestehenden **V7-Handbuchkapitel** sind ebenfalls über native, zugängliche `<details>`-Elemente ausklappbar. Das erste Kapitel ist zur Orientierung geöffnet; die weiteren bleiben geschlossen, bis sie angewählt werden.
- Ein Artikel kann seine neuen Forschungskapitel **einzeln**, mit **«Alle drei Kapitel öffnen»** oder **«Alle schliessen»** anzeigen. Die beiden wissenschaftlichen Reflexionsfragen liegen in einem gesonderten ausklappbaren Bereich.
- Jede Vertiefung bietet **anklickbare fachliche Weiterführungen** und ein Literatur- und Quellenregister mit Kennzeichnung von **Fachliteratur**, **amtlicher Statistik**, **Rechtsquelle**, **klinischer Klassifikation** und **professionsethischem Bezugsrahmen**.
- Die **globale Suche** indexiert die 276 Vertiefungen zusätzlich zu den bisherigen Artikeln und Wissenskapiteln. Treffer führen über `?go=v12-ch-0` etc. direkt zum jeweiligen aufgeklappten Kapitel.
- Die bestehende Seitenleiste, der rot-weisse Seitenaufbau, die themenspezifischen Infografiken, Versicherungsrechner, das Fachlexikon und das Falllabor bleiben erhalten.

## Wie verwende ich die akademischen Kapitel?

1. In der Wissensbibliothek einen Fachartikel öffnen, beispielsweise `#/artikel/soz-bourdieu` oder `#/artikel/sozialhilfe`.
2. Bereits vorhandene Handbuchkapitel mit einem Klick auf die jeweilige Überschrift aufklappen.
3. Im Artikel auf **«Wissenschaftlich vertiefen»** klicken oder im rechten Inhaltsverzeichnis **«Vertiefung · 3 Kapitel»** wählen.
4. Je nach Interesse einen, zwei oder alle drei Vertiefungsabschnitte öffnen.
5. **«Forschungsfragen zur eigenständigen Vertiefung»** ausklappen.
6. Unter **«Fachliteratur, Studienzugänge und Primärquellen»** zur passenden wissenschaftlichen Fachseite navigieren.

## Redaktionelle Quellenbeispiele

- Sozialversicherungen und Daten: [BSV – Taschenstatistik 2026](https://www.bsv.admin.ch/de/svs)
- Schweizerische Sozialhilfe: [SKOS – Aktuelle Richtlinien](https://skos.ch/skos-richtlinien/aktuelle-richtlinien)
- Soziale Arbeit: [IFSW – Globale Definition](https://www.ifsw.org/what-is-social-work/global-definition-of-social-work/)
- Soziologie: [OpenStax – Introduction to Sociology 3e](https://openstax.org/books/introduction-sociology-3e/pages/index)
- Psychologie: [OpenStax – Psychology 2e](https://openstax.org/books/psychology-2e/pages/index)
- Internationale Gesundheitsklassifikationen: [WHO – ICF](https://www.who.int/classifications/international-classification-of-functioning-disability-and-health) und [WHO – ICD](https://www.who.int/standards/classifications/classification-of-diseases)
- Migration/Flüchtlingsschutz: [UNHCR – Genfer Flüchtlingskonvention](https://www.unhcr.org/about-unhcr/overview/1951-refugee-convention)
- Europäischer Systemvergleich: [Europäische Kommission – MISSOC](https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/eu-mutual-information-system-social-protection-missoc_en)
- Suchtpolitik: [BAG – Vier-Säulen-Suchtpolitik](https://www.bag.admin.ch/de/vier-saeulen-politik)
- Suchtberatung: [SAMHSA – Motivational Interviewing, TIP 35](https://www.ncbi.nlm.nih.gov/books/NBK571068/)

**Wichtige redaktionelle Grenze:** Die neu geschriebenen Texte sind **didaktische wissenschaftliche Einordnungen**, keine peer-reviewten Originalstudien. Die extern verlinkten Quellen dienen als passende Ausgangspunkte zur Überprüfung und Vertiefung; sie werden nicht als Einzelnachweis für jeden Satz ausgegeben. Für akademische Arbeiten sind Originalautorinnen und -autoren, Jahr, Werk, Seite und geeignete wissenschaftliche Fachliteratur separat zu zitieren. Rechtsstand, leistungsrechtliche Tarife und klinische Diagnosen dürfen nicht aus diesen Zusammenfassungen allein abgeleitet werden.

## Neue Dateien

`academic-v12-insurance.js`, `academic-v12-socialpolicy.js`, `academic-v12-migration.js`, `academic-v12-society.js`, `academic-v12-health.js`, `academic-v12-ui.js`, `atlas-academic-v12.css`. In `atlas-v4.js`, `atlas-handbuch-v7.js` und `index.html` wurden die neuen Lernfunktionen integriert.

---

# SOCIAL ATLAS – Klassische Oberfläche wiederhergestellt

**Gestaltungsstand: 23. November 2026.** Auf ausdrücklichen Wunsch wurde das vertraute rot-weisse Layout von Version 9 wiederhergestellt. Die zwischenzeitlich in Version 10 und 11 eingeführte neue Startseite, die aufklappbaren Navigationsgruppen und das geänderte Artikellayout wurden zurückgenommen.

**Erhalten bleiben die fachlichen Weiterentwicklungen:** 92 Themen der Wissensbibliothek, 107 Lexikonbegriffe, interaktive Infografiken, das Migrationsdossier und die neu ergänzten wissenschaftlichen Fachvertiefungen für acht zentrale Themen. Der Lernfall-Generator aus Version 10 bleibt erhalten; seine Lösungsskizze ist zunächst eingeklappt und kann nach eigener Bearbeitung geöffnet werden. Die ausführliche Bedienungsanleitung ist weiterhin unter `#/hilfe` erreichbar.

Die Dateien `atlas-v10.css` und `atlas-v11.css` werden **nicht mehr geladen**, weil sie globale Gestaltungselemente verändert hatten. Stattdessen enthält `atlas-classic.css` nur die notwendigen lokalen Styles für Anleitung, Lernfall-Generator und die neuen Facherklärungen. `atlas-v4.js` baut wieder die klassische V9-Oberfläche auf. `atlas-editorial-v10.js`, `atlas-learning-v10.js` und `atlas-depth-v11.js` bleiben als Inhalts- und Funktionsmodule eingebunden.

## Frühere Projektdokumentation (Version 9)

**Interaktive rot-weisse Wissensplattform über Schweizer Sozialversicherungen, Sozialhilfe, Migration, Soziale Arbeit, Soziologie, Psychologie, Neurowissenschaften und Sucht.**

**Live-URL (GitHub Pages, nach Veröffentlichung durch GitHub):** https://vnipo01-coder.github.io/Social-Atlas-Swiss-Insurance/

## Was ist enthalten?

- **92 ausführlich erschlossene Themen**, davon **34 neue interdisziplinäre Fachdossiers** zu Sozialer Arbeit, Soziologie, Psychologie, Neurowissenschaften und Sucht; die ursprünglichen 40 Sozialversicherungs-/Sozialhilfethemen und 18 Migrationsartikel bleiben bestehen.
- **107 redaktionell formulierte, alphabetisch suchbare Fachbegriffe** mit Direktverweisen in vertiefte Artikel.
- **139 neue wissenschaftliche Fachkapitel und 104 dazugehörige FAQ-Fragen** in V9, ergänzend zu den bereits bestehenden Handbuchkapiteln aus V7 und Migrationserweiterungen aus V8.
- **16 eigens zugewiesene wissenschaftliche Schaubilder** und **4 ursprüngliche themenspezifische SVGs**. Keine identische obligatorische Sechs-Karten-Grafik mehr auf sämtlichen Artikeln.
- **4 zusätzliche interdisziplinäre Falllaborsituationen** zu Krise, Wohnen/Armut, Sucht mit Schulden und Rehabilitation nach Schlaganfall; das bestehende Falllabor bleibt erhalten.
- Interaktives Systemnetz mit Sozialversicherung, Migration und den neuen Wissenschaftsbereichen.
- Tariftabellen und Lernrechner für Schweizer Leistungen (Referenzjahr 2026), Kantonsfamilienzulagen 2026, kantonale Gesetzeseinstiege und sechs europäische Länderprofile.

## Warum wurde die Infografik-Logik geändert?

### Problem der Vorversionen

Bis V8 wurden zum Teil dieselben SVGs kategorieweise in fachfremde Artikel kopiert. Zusätzlich zeigte das lange Handbuch praktisch überall **dasselbe Sechs-Felder-Layout**, nur mit ausgetauschten Begriffen. Das konnte eine thematische Spezifität vortäuschen, die das Diagramm selbst nicht besass.

### Bereinigte Regel in V9

1. Die SVG **Drei Säulen** ist nur im Hauptartikel zur AHV eingebettet.
2. Die SVG **Fünf Bereiche der Sozialhilfe** ist als **eigenes Praxis- und Denkmodell** gekennzeichnet und nur im Sozialhilfe-Grundlagenartikel eingebettet. Sie ist **keine gesetzlich verankerte Fünf-Säulen-Norm**.
3. Die SVG **Europäisches Vergleichsraster** gehört nur in den Europa-Grundlagenartikel, nicht identisch auf die sechs einzelnen Länderseiten.
4. Die SVG **Leistungsabklärung** ist als didaktische Querschnittsgrafik nur dem ATSG-Grundlagenartikel zugeordnet. Sie legt **keine verbindliche Reihenfolge** fest.
5. Die früheren visuellen generischen Prüfschrittbänder und sechs identischen Handbuchboxen wurden aus den Artikeln entfernt; die eigentlichen schriftlichen Prüftabellen bleiben.
6. **16 neue didaktische Fachgrafiken** sind nur genau den fachlich passenden Artikel-IDs zugeordnet, zum Beispiel:
   - Drei analytische Ebenen der Sozialen Arbeit
   - Case-Management-Vorgehensweise
   - Vier Kapitalarten nach Bourdieu
   - Soziale Netzwerkkarte
   - Wechselspiel von Stress und Ressourcen
   - ICF und Teilhabe
   - Belohnungs-/Lernzusammenhänge
   - Die **vier Säulen der Schweizer Suchtpolitik**
   - Biopsychosoziales Suchtverständnis
   - Motivierendes Gespräch mit vier überlappenden Prozessen
7. Im **separaten Infografikbereich** lassen sich die ursprünglichen SVGs und alle 16 neuen Modelle ansehen. Die Modelle sind zusätzlich ausschliesslich in ihren jeweiligen fachlich zutreffenden Artikeln eingebettet.
8. Wenn keine spezifische Grafik vorhanden ist, wird keine schematische Ersatzgrafik erfunden: Der Artikel bleibt mit Kapiteln, Fakten und Prüftabelle vollständig lesbar.

**Wichtig:** Die fachlichen Grafiken enthalten keine ausgedachten Zahlen, nicht überprüfte kausale Hirnmodelle oder medizinische Diagnosen. Jede Grafik erläutert ihren Modellcharakter und verweist auf eine Fachquelle.

## Neue Inhalte Version 9

| Wissensgebiet | Schwerpunkte |
| --- | --- |
| Soziale Arbeit | Profession und Mandate, Lebenswelt, systemische Perspektive, Case Management, Empowerment, Partizipation, Ethik, Kindesschutz |
| Soziologie | Soziale Ungleichheit, Armut, Bourdieus Kapitaltheorie, Intersektionalität, Stigma, Sozialraum, soziale Netzwerke, Sozialisation, Inklusion/Exklusion |
| Psychologie | Grundlagen, Stress und Coping, Trauma, Motivation, Krise und psychosoziale Unterstützung |
| Neurowissenschaften | Gehirnfunktionen, Neuroplastizität, Motivation/Belohnungslernen, WHO-ICF und biopsychosoziales Modell |
| Sucht & Gesundheit | Abhängigkeit und ICD-11, Schweizer Vier-Säulen-Politik, Schadensminderung, Suchtberatung, Komorbidität, Recovery |

Die vorhandenen Versicherungs-, Sozialhilfe- und Migrationsartikel erhalten **ausgewählte themenspezifische Querverweise** zur wissenschaftlichen Perspektive, ohne dass die Rechts- oder Leistungsinformation durch eine psychologische oder soziologische Deutung ersetzt wird.

### Wichtige Quellen

- [IFSW – Globale Definition Sozialer Arbeit](https://www.ifsw.org/what-is-social-work/global-definition-of-social-work/)
- [IFSW – Berufsethische Grundsätze](https://www.ifsw.org/global-social-work-statement-of-ethical-principles/)
- [OpenStax – Sozialstratifikation](https://openstax.org/books/introduction-sociology-3e/pages/9-1-what-is-social-stratification)
- [Oxford Academic – Bourdieu und die Kapitalarten](https://academic.oup.com/edited-volume/28103/chapter/212224008)
- [Harvard University Library – Intersektionalität](https://guides.library.harvard.edu/hks/belonging-community-connection/intersectionality)
- [WHO – ICF](https://www.who.int/classifications/international-classification-of-functioning-disability-and-health)
- [WHO – ICD-11 und diagnostische Anforderungen](https://www.who.int/publications-detail-redirect/9789240077263)
- [BAG – Vier-Säulen-Suchtpolitik](https://www.bag.admin.ch/de/vier-saeulen-politik)
- [Infodrog – Schadensminderung](https://www.infodrog.ch/de/wissen/praeventionslexikon/schadensminderung.html)
- [SAMHSA – Motivierende Gesprächsführung, TIP 35](https://www.ncbi.nlm.nih.gov/books/NBK571068/)

Diese Quellen sind fachliche Grundlagen und Rechercheeinstiege. Sie ersetzen **keine Einzelaussagenprüfung der gesamten redaktionellen Artikel**. Aussagen, die spezifische Theorien oder klinische Kriterien betreffen, erfordern die jeweilige konkrete Fachliteratur und den entsprechenden Geltungskontext.

## Navigation

- `#/start` – Startseite
- `#/wissen` – umfassende Fachbibliothek
- `#/sozialwissenschaften` – fünf Wissensgebiete mit 34 neuen Fachartikeln
- `#/fachlexikon` – alphabetisches 107-Begriffe-Fachlexikon
- `#/glossar` – bestehender Alias zum neuen Fachlexikon
- `#/artikel/soz-bourdieu` – Beispiel Soziologie
- `#/artikel/neuro-icf` – Beispiel Neurowissenschaft/ICF
- `#/artikel/sucht-viersaeulen` – Beispiel Suchtpolitik mit eigener Infografik
- `#/infografiken` – kuratierte Galerie mit vier SVGs und 16 fachbezogenen Visualisierungen
- `#/migration` – Schweizer Aufenthaltsstatus und internationale Schutzgrundlagen
- `#/netzwerk` – übergreifender Wissensgraph
- `#/tarife` und `#/rechner` – 2026er Tarifübersicht und didaktische Rechenmodelle

## Redaktions- und Sicherheitsgrenzen

- **Rechtsinformationen**: redaktioneller Wissensstand vom 23.11.2026. Vor rechtsverbindlichen Entscheidungen immer geltende Bundes- und Kantonsnormen, Zuständigkeiten und Fallfakten prüfen.
- **Tarife und Geldbeträge**: statisch gespeichert, Bezugsjahr 2026; nicht automatisch aktuelle Ansätze für 2027. Bundespauschalen an Kantone sind keine persönlichen Auszahlungsansprüche.
- **Psychologie und Neurobiologie**: wissenschaftliche Modelle vereinfachen komplexe Prozesse. Begriffe wie Neuroplastizität oder Dopamin begründen keine garantierten Effekte, ferndiagnostischen Aussagen oder einheitlichen Behandlungswege.
- **Sucht**: ICD-11-Diagnosen und medizinische Behandlung gehören zu qualifizierten Fachpersonen. Die App bietet keine Anleitungen zur Eigenmedikation, zu riskanten Entzügen oder zum Konsum.
- **Beratung**: Hilfsmittel für Lernen und Orientierung, **keine klinische Diagnostik**, kein rechtliches Gutachten und keine medizinische Beratung.
- **KI-Assistent**: bestehender regelbasierter lokaler Wissensassistent; kein angeschlossenes Echtzeit-Sprachmodell. Öffentliche GitHub-Pages-Skripts enthalten keine vertraulichen API-Schlüssel.
- **Datenschutz**: Keine echten Klientendaten oder vertraulichen Gesundheitsinformationen in Lernbeispiel-Felder eintragen.

## V9-Technik

Neue Dateien im GitHub-Root:

- `social-sciences-core-v9.js` – Datenmodell, Quellensystem und Handbuchintegration
- `social-work-v9.js` – acht tiefere Dossiers
- `sociology-v9.js` – zehn tiefere Dossiers
- `psychology-neuroscience-v9.js` – neun Dossiers
- `addiction-v9.js` – sieben Dossiers
- `interdisciplinary-lexicon-v9.js` – 107 Fachbegriffe
- `social-sciences-final-v9.js` – Quellenprüfung, Netzwerk und neue Fallbeispiele
- `infographics-quality-v9.js` – genau definierte Themenvisualisierungen und Galerie
- `interdisciplinary-ui-v9.js` – Lexikon, Wissenschaftsübersicht und interdisziplinäre Querverweise
- `atlas-v9.css` – neue responsiv gestaltete Wiki-, Infografik- und Lexikonoberflächen
- `atlas-v4.js`, `atlas-visuals-v5.js`, `atlas-handbuch-v7.js` und `index.html` – integrierte Änderungen der bestehenden App.

**Tests**: JavaScript-Module statisch geprüft; 34 wissenschaftliche Artikel und 107 Begriffe in der Datenstruktur gezählt; 20 typische Seitenrouten als simuliertes Rendering erfolgreich geprüft. Dies ist **kein vollständiger Test im echten GitHub-Pages-Browser**.

**Veröffentlichung**: GitHub Pages → Deploy from branch → `main` → `/ (root)`. Keine Build-Tools erforderlich.

**Redaktioneller Stand:** 23. November 2026.
