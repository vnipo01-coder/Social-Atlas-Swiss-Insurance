# Wissenschaftliche Vertiefung – SOCIAL ATLAS 15.1 (25. November 2026)

**Status:** Feature-Branch und [Pull Request #1](https://github.com/vnipo01-coder/Social-Atlas-Swiss-Insurance/pull/1). Nicht automatisch in der öffentlichen GitHub-Pages-Version veröffentlicht.

## Was sich inhaltlich verändert hat

- **18 Forschungsdossiers mit 94 umfangreichen Kapiteln:** Zu den bisherigen 72 Kapiteln kamen **22 eigenständig verfasste, wissenschaftlich argumentierende Vertiefungskapitel** hinzu.
- **Neun gezielt vertiefte Themen:**
  1. Replikation und Kausalinferenz (jetzt 7 Kapitel)
  2. Qualitative Sozialforschung (7 Kapitel)
  3. Wirkungsevaluation Sozialer Arbeit (7 Kapitel)
  4. Urteilspsychologie und professionelle Entscheidungen (7 Kapitel)
  5. Psychologischer Stress und Allostase (6 Kapitel)
  6. Exekutive Funktionen und ökologische Gültigkeit (6 Kapitel)
  7. Bourdieu, Habitus und Kapital (6 Kapitel)
  8. Soziale Ungleichheit und Mobilität (6 Kapitel)
  9. Professionelle Gesprächsführung (6 Kapitel).
- **36 strukturierte Forschungsquellen-Profile** statt 28: Acht zusätzliche konkrete Primär-, Review- und Methodentexte von Wasserstein/Lazar, Hernán/Robins, Deaton/Cartwright, Malterud et al., Braun/Clarke, Diamond, Miyake et al. und McEwen.
- **38 kapitelbezogene Forschungszuordnungen** in neun Forschungsdossiers. Quellen stehen in separaten, responsiven Abschnitten direkt unter den jeweiligen Fachkapiteln und öffnen die vorhandenen Quellenprofile mit Methoden, Befunden und Grenzen.
- **Interdisziplinäre Argumentationsweise:** Die neuen Texte unterscheiden ausdrücklich Forschungsergebnisse, theoretische Erklärungen, Kausalitätsannahmen, methodische Einschränkungen, fachliches Ermessen und Rechtsentscheide. Amerikanische und klinische Befunde werden nicht ungeprüft in Schweizer Verwaltungsentscheidungen übertragen.
- **Keine fremden Textübernahmen:** Stangl-Taller bleibt Vorbild für die systematische inhaltliche Gliederung, nicht Quelle für kopierte Formulierungen.

## Quellenprüfung und didaktische Grenzen

Die acht ergänzten Arbeiten wurden bibliografisch über wissenschaftliche Publikations- und Autorenadressen abgeglichen. Eine Quellenangabe unter einem Kapitel zeigt die Forschungsgrundlage, **nicht** einen experimentellen Beleg für jede Einzelbehauptung oder eine vollständig systematische Forschungssynthese. Narrativer Review, Methodenbuch, Einzelstudie und fachliches Leitlinienpapier sind unterscheidbar. Die Literaturauswahl ist kuratiert, nicht abschliessend. Für wissenschaftliche Zitate sind Volltext, Seitenbezug und tatsächlich untersuchte Stichprobe im Original zu prüfen.

Quellenbeispiele:
- [Open Science Collaboration (2015)](https://doi.org/10.1126/science.aac4716): Replikation psychologischer Forschung
- [Wasserstein & Lazar (2016)](https://doi.org/10.1080/00031305.2016.1154108): Interpretation statistischer Signifikanz
- [Hernán & Robins (2020)](https://miguelhernan.org/whatifbook): Kausalinferenz und Zielversuche
- [Deaton & Cartwright (2018)](https://doi.org/10.1016/j.socscimed.2017.12.005): Reichweite randomisierter Studien
- [Malterud et al. (2016)](https://doi.org/10.1177/1049732315617444): Information Power in qualitativen Stichproben
- [Braun & Clarke (2021)](https://doi.org/10.1080/2159676X.2019.1704846): Grenzen des Sättigungskonzepts
- [Diamond (2013)](https://doi.org/10.1146/annurev-psych-113011-143750): Exekutive Funktionen
- [Miyake et al. (2000)](https://doi.org/10.1006/cogp.1999.0734): Empirisches Modell exekutiver Prozesse
- [McEwen (1998)](https://doi.org/10.1056/NEJM199801153380307): adaptive und belastende Wirkungen von Stressmediatoren

## Technische Integration und Prüfpunkte

Neue Dateien: `atlas-v15-research-depth.js`, `atlas-v15-depth-methodology.js`, `atlas-v15-depth-interdisciplinary.js`. Aktualisiert: `index.html`, `atlas-reader-v14.js`, `atlas-v15.css`, `tests/v15-smoke.cjs` sowie GitHub-Workflow. Die reinen Daten- und Readerfunktionen wurden mit dem GitHub-JavaScript-Inhalt isoliert ausgeführt: 18 Forschungsdossiers, 94 Kapitel, 36 Quellenprofile und 38 kapitelbezogene Zuordnungen wurden dabei ohne Laufzeitfehler verarbeitet. Zusätzlich prüft der automatisierte PR-Workflow Skript-Syntax, Datenstruktur, Quellenschlüssel, Kapitelanzahl und Links.

**Ausstehend:** vollständiger End-to-End-Test der veröffentlichten GitHub-Pages-Ansicht inklusive Navigation, Tastatur, Mobilansicht, Browser-Layout und externer Linkverfügbarkeit. Die Hauptversion wird erst nach Review/Merge verändert.

---

# SOCIAL ATLAS – Version 15: Studienatlas, Methodenkritik und Langtexte

**Entwicklungsstand: 25. November 2026.** Die Weiterentwicklung erfolgt auf dem Branch `feature/social-atlas-v15-studienatlas` und wird als Pull Request geprüft, bevor sie die öffentliche GitHub-Pages-Version verändert.

## Inhalt und neue Navigation

- **108 Fachthemen insgesamt** (V14: 104). Vier neue, selbstständig verfasste Wissenschaftsartikel zu Replikation und Kausalität, qualitativer Sozialforschung, Wirkungsevaluation der Sozialen Arbeit sowie Urteilspsychologie.
- **18 eigenständige Forschungsdossiers** (V14: 14) mit **72 Langtext-Kapiteln** (V14: 56) und expliziter Literatur- und Grenzenrubrik.
- Eigenständiger **Studienatlas** `#/studienatlas`, mit Suchfunktion, Quellentypfilter, maximal acht Quellenprofilen pro Seite und separater Detailansicht `#/studie/<quellen-id>`.
- Sechs neu erfasste und konkret verlinkte Publikationen: Open Science Collaboration (2015), Braun & Clarke (2006), Shadish/Cook/Campbell (2002), Durlak et al. (2011), Tversky/Kahneman (1974), Kahneman/Klein (2009). Die bestehende V14-Forschungssammlung bleibt erhalten.
- Forschungsart, Studiendesign beziehungsweise methodische Anlage, spezifischer Erkenntnisbeitrag und Übertragbarkeitsgrenzen werden in den einzelnen Profilen unterschieden. Fachartikel verlinken passend zugeordnetes Quellenmaterial.
- Die Hierarchien in Psychologie und Soziologie/Sozialer Arbeit sind um die neuen Unterthemen ergänzt, ohne sämtliche Artikel auf der Startseite zu sammeln.
- **Design:** Rot für Atlas-Identität und rechtliche Einordnung, Blau für Studien und Recherche, Violett für wissenschaftliche Theorie, Weiss für lesefreundliche Artikelräume. Mobile Ansichten und Tastaturfokus sind berücksichtigt.

## Qualität, Tests und Grenzen

- Neue Dateien: `atlas-v15-data.js`, `atlas-v15-studies.js`, `atlas-v15.css`, `tests/v15-smoke.cjs`, `.github/workflows/social-atlas-v15.yml`.
- Angepasste Dateien: `index.html`, `atlas-v4.js`, `atlas-reader-v14.js`, `README.md`.
- Automatisierte Prüfung (sobald der PR-Workflow läuft): JavaScript-Syntax, Skriptladefolge, vier neue Forschungsartikel, sechs Quellenprofile, Literaturansichten und Quellen-Detailseiten.
- **Wissenschaftliche Grenze:** Die Texte sind eigenständige didaktische Synthesen, keine peer-reviewten systematischen Reviews. Originalpublikationen sowie ihre Populationen, Methoden und Grenzen sind für wissenschaftliche Verwendung selbst zu kontrollieren.
- **Technische Grenze:** Der CI-Test ersetzt keine vollständige visuelle Prüfung in einem echten veröffentlichten Browser. Die Hauptseite bleibt bis zur Freigabe des Pull Requests auf der bisher veröffentlichten Version.

---

# SOCIAL ATLAS – Wissenschaftliche Arbeitsblätter & Lesebibliothek (Version 14)

**Stand: 24. November 2026.** Die bestehende klassisch strukturierte GitHub-Pages-App ist erweitert, nicht durch eine neue Oberfläche ersetzt worden. Das neue Farbkonzept kombiniert **Rot, Blau, Weiss und Violett**: Rot für Hauptidentität und Sozialrecht, Blau für Forschung und Quellen, Violett für theoretische Vertiefung, Weiss für ruhige Leseflächen.

## Inhaltliche Orientierung

Die [Arbeitsblätter zur wissenschaftlichen Psychologie von Werner Stangl](https://arbeitsblaetter.stangl-taller.at/) dienten **als strukturelle Inspiration**: grosse Themengebiete, präzise Unterthemen, lange verständlich gegliederte Fachtexte und weiterführende Literatur. **Die Texte und Abbildungen der Referenzseite wurden nicht kopiert.** SOCIAL ATLAS besitzt eine eigenständige redaktionelle und visuelle Umsetzung; einzelne Forschungsergebnisse und Begriffe werden auf ihre Originalquellen zurückgeführt.

## Neue Inhalte und Umfang

- **104 Fachthemen insgesamt** (vorher 92), darunter 12 neue selbstständige, mehrkapitelige Wissenschaftsartikel:
  - Psychologie: Forschungsmethoden, Lernen, Gedächtnis, Kognition, Entwicklungspsychologie, Emotionen und Sozialpsychologie.
  - Soziologie: empirische Methoden, gesellschaftliche Mobilität und Gesellschaftstheorien.
  - Soziale Arbeit: professionelle Gesprächsführung.
  - Neurowissenschaften: exekutive Funktionen.
- **14 ausführliche, neu redaktionell verfasste Forschungsdossiers** mit **56 zusammenhängenden, ausklappbaren Langtext-Kapiteln**: Forschungsmethoden, Lernen, Gedächtnis, Kognition, Stress, Emotionen, exekutive Funktionen, soziologische Forschungsmethoden, soziale Mobilität, Bourdieu, soziale Ungleichheit, soziologische Grundlagen, Gesprächsführung und Profession Sozialer Arbeit.
- **118 alphabetisch geordnete Fachlexikonbegriffe**, erweitert um Konzepte wie Operationalisierung, Arbeitsgedächtnis, Emotionsregulation und soziale Mobilität.
- **22 konkret beschriebene Quellen- und Forschungsprofile** aus den bisherigen V13-Profilen und sechs neuen Originalpublikationen, darunter:
  - Baddeley & Hitch (1974), [Working Memory](https://doi.org/10.1016/S0079-7421(08)60452-1)
  - Sweller (1988), [Cognitive Load During Problem Solving](https://doi.org/10.1207/s15516709cog1202_4)
  - Cohen, Kamarck & Mermelstein (1983), [A Global Measure of Perceived Stress](https://pubmed.ncbi.nlm.nih.gov/6668417/)
  - Roediger & Karpicke (2006), [Test-Enhanced Learning](https://pubmed.ncbi.nlm.nih.gov/16507066/)
  - Lazarus & Folkman (1984), [Stress, Appraisal, and Coping](https://www.ncbi.nlm.nih.gov/nlmcatalog/8501102)
  - Chetty et al. (2014), [The Geography of Intergenerational Mobility in the United States](https://doi.org/10.1093/qje/qju022)
- Die **276 wissenschaftlichen V12-Zusatzkapitel** zu den ursprünglichen 92 Artikeln sowie bisherige Studien-, Gesetzes- und Infografikfunktionen bleiben erhalten. **Nicht alle 104 Artikel sind bereits gleich umfangreich**; die 14 Langtexte markieren den neuen redaktionellen Qualitätsstandard für den sukzessiven weiteren Ausbau.

## Navigieren und lesen

1. **Hauptnavigation → Forschungsdossiers:** `#/forschungsdossiers` zeigt nur die eigenständigen Langtext-Artikel.
2. **Wissenschaftliches Fachgebiet → Psychologie oder Soziologie:** `#/gebiet/psychologie` oder `#/gebiet/soziologie` enthalten eine neue **mehrstufige, ausklappbare Themenordnung**. Die bestehende paginierte Artikelliste bleibt darunter zugänglich.
3. **Einzelartikel öffnen:** `#/artikel/psy-lernen` oder `#/artikel/soz-bourdieu`. Ein eigenständiger Langtext steht nach der fachlichen Einordnung. Das ältere Handbuch bleibt in einem separaten ausklappbaren Bereich verfügbar; nichts wurde gelöscht.
4. **Kapitelübersicht:** Jedes Dossier bietet vier Kapitel, deren Inhalt nacheinander oder mit «Alle Kapitel öffnen» gelesen werden kann. Die Kapitel werden nicht auf überfüllten Übersichtsseiten gleichzeitig angezeigt.
5. **Fachliteratur:** Im Literaturteil werden Autorenschaft, Erscheinungsjahr, konkrete Originalquelle, Forschungsart und Erkenntnisgrenzen ausgewiesen. Studien, theoretische Bücher, Fachrichtlinien und klinische Klassifikationen werden nicht als gleichartige Evidenz ausgegeben.
6. **Globale Suche:** Wissenschaftliche Langtextüberschriften und ihre Inhalte sind auffindbar; Treffer können per `?go=v14-ch-N` das entsprechende Kapitel öffnen.
7. **Anleitung:** `#/hilfe` hat jetzt einen zehnten Schritt für die Langtexte.

## Designgrundsätze

- **Weiss** als ruhiger Leseraum mit gut lesbarer, begrenzter Zeilenbreite.
- **Rot** als etabliertes Atlas-Markenzeichen und Hauptakzent.
- **Blau** für Forschung, Studienzugang und methodisch begründete Quellen.
- **Violett** für wissenschaftliche Begriffe, theoretische Verknüpfungen und Fachgliederung.
- Farbkontrast, Tastaturfokus, mobile Lesbarkeit und einheitliche Seitennavigation sind berücksichtigt.
- Keine zusätzliche überfüllte Dashboard-Startseite; die 104 Themen bleiben in sieben Fachgebiete mit paginierten Unterlisten verteilt.

## Technische Dateien

**Neu:** `atlas-science-v14.js`, `atlas-longreads-v14-psych.js`, `atlas-longreads-v14-society.js`, `atlas-research-sources-v14.js`, `atlas-reader-v14.js` und `atlas-v14.css`.

**Aktualisiert:** `index.html`, `atlas-v4.js`, `atlas-structure-v13.js`, `atlas-editorial-v10.js`. Ein beim Test entdeckter Integrationsfehler wurde behoben: Die V9-Datenmodule entfernen am Ende ihre temporären Anlagefunktionen; V14 registriert die 12 neuen Themen daher mit einem eigenen, lokalen Mechanismus.

## Quellen- und Qualitätsgrenzen

Die wissenschaftlichen Texte sind didaktische Originaldarstellungen, **keine selbst peer-reviewten Forschungsartikel** und keine umfassenden systematischen Literaturreviews. Bei den verlinkten Originalwerken sind konkrete Methoden, Populationen und Übertragbarkeitsgrenzen vor einer wissenschaftlichen Zitierung im Original zu prüfen. Die externen Artikel von Stangl sind Referenz und mögliche ergänzende Lektüre, nicht automatisch als aktuelle klinische Evidenz zu behandeln. Tarif- und Rechtswerte im Atlas sind weiterhin **statische 2026er Angaben** und müssen für verbindliche Fälle auf ihren Rechtsstand überprüft werden.

**Verifiziert:** JavaScript-Syntax und Lade-Reihenfolge, 104 fachliche Topics ohne Zuordnungsverlust, 14 vollständige Langtexte mit je vier Kapiteln, akademische Quellenzuordnung und simulierte Routen für Startseite, Fachbibliothek, Forschungsübersicht sowie ausgewählte Wissenschaftsartikel. **Eine vollständige Sichtprüfung im realen veröffentlichten Browser ist nicht durchgeführt worden.**

---

# SOCIAL ATLAS – Umfassende Struktur- und Quellenoptimierung (Version 13)

**Redaktioneller Stand: 24. November 2026.** Das klassische rot-weisse Design ist weiterhin die Grundlage. Neue Funktionen sind modular eingebaut; die Sidebar und die bisherigen Artikel bleiben erhalten.

## 1. Klarer navigieren statt hunderte Themen auf einer Seite

Die 92 Fachartikel verteilen sich eindeutig auf sieben eigene Wissensgebiete:

| Fachgebiet | Themen |
| --- | ---: |
| Sozialversicherungen und Vorsorge | 21 |
| Sozialhilfe und Kantone | 13 |
| Migration und Asyl | 18 |
| Recht, Verfahren und Europa | 6 |
| Soziale Arbeit und Soziologie | 18 |
| Psychologie und Neurowissenschaften | 9 |
| Sucht, Gesundheit und Recovery | 7 |
| **Total** | **92** |

Die Startseite zeigt ausschliesslich wenige klar unterscheidbare Einstiegskarten und sechs wichtige Artikel. Fachgebiete besitzen eigene Unterseiten (`#/gebiet/soziologie`, `#/gebiet/versicherungen` etc.) mit Stichwortsuche und Teilgebietfilter. Je Seite erscheinen höchstens **12 Fachartikel**. Das alphabetische Fachlexikon zeigt **18 Einträge** pro Seite. Auch die Rechtsbibliothek zeigt maximal **12 Fundstellen** pro Seite.

Rechner, Lernfall-Generator, Falllabor, Systemnetz, Fallvergleich und Quiz sind unter `#/werkzeuge` zusammengefasst. Die Hauptnavigation ist von 18 auf 12 Punkte gekürzt, der Schnellzugriff in der Sidebar von 16 auf 7 Artikel.

## 2. Wissenschaftlich tiefer und präziser

Die bisherigen **276 spezifischen wissenschaftlichen Zusatzkapitel für 92 Artikel** aus V12 bleiben erhalten und sind weiterhin ausklappbar; zusätzlich werden ältere doppelte Vertiefungsabschnitte und Rechtsquellenlisten standardmässig eingeklappt.

Die fachliche Evidenz wird durch **16 sorgfältig zugeordnete Werke und Datengrundlagen** ergänzt. Zu jeder Quelle werden Autorenschaft, Jahr, vollständiger Titel, möglichst DOI oder konkrete Originalveröffentlichung, Typ der Quelle, Erkenntnis, Forschungsansatz und Grenzen der Aussagekraft angezeigt. Beispiele:

- **Pierre Bourdieu (1986):** *The Forms of Capital* – theoretischer Ausgangspunkt der Kapitalsoziologie
- **Kimberlé Crenshaw (1989):** *Demarginalizing the Intersection of Race and Sex* – intersektionale Rechts-/Sozialtheorie, [Originalpublikation](https://chicagounbound.uchicago.edu/uclf/vol1989/iss1/8/)
- **Mark Granovetter (1973):** *The Strength of Weak Ties*, [DOI 10.1086/225469](https://doi.org/10.1086/225469)
- **James Coleman (1988):** *Social Capital in the Creation of Human Capital*, [DOI 10.1086/228943](https://doi.org/10.1086/228943)
- **Ryan & Deci (2000):** Selbstbestimmungstheorie, [Originalindex](https://pubmed.ncbi.nlm.nih.gov/11392867/)
- **Albert Bandura (1977):** Selbstwirksamkeit, [Originalindex](https://pubmed.ncbi.nlm.nih.gov/847061/)
- **Phillippa Lally et al. (2010):** Gewohnheitsbildung, [DOI 10.1002/ejsp.674](https://doi.org/10.1002/ejsp.674) – 96 Teilnehmende, nicht eine universelle Regel zur Anzahl benötigter Tage
- **George Koob & Nora Volkow (2016):** Neurobiologischer Sucht-Review, [Volltext](https://pmc.ncbi.nlm.nih.gov/articles/PMC6135092/)
- **D’Amour et al. (2005):** interprofessionelle Zusammenarbeit, [Originalindex](https://pubmed.ncbi.nlm.nih.gov/16096150/)
- **WHO ICF (2001):** [Originalklassifikation als PDF](https://iris.who.int/bitstream/handle/10665/42407/9241545429-eng.pdf), ausdrücklich **keine** empirische Interventionsstudie
- **BSV 2026:** [Amtliche Sozialversicherungsstatistik](https://www.bsv.admin.ch/de/svs)
- **SKOS:** [Aktuelle Richtlinien](https://skos.ch/skos-richtlinien/aktuelle-richtlinien)

Für jeden der **34 Wissenschaftsartikel** in Sozialer Arbeit, Soziologie, Psychologie, Neurowissenschaften und Sucht ist mindestens eine passende wissenschaftliche Originalarbeit oder fachliche Primärquelle zugeordnet. **Wichtig:** Nicht alle 16 Dokumente sind empirische Studien: Darunter befinden sich Originaltheorien, Reviews, Richtlinien, Klassifikationen und amtliche Datensätze. Sie sind im Artikel entsprechend gekennzeichnet. Das ersetzt keine vollständige einzelabsatzgenaue Literaturbegutachtung aller Inhalte.

## 3. Gesetzesartikel direkt öffnen statt scrollen

Die **63 konkret referenzierten Schweizer Bundesartikel** sind mit Fedlex-`#art_XX`-Ankern versehen. Beispielsweise:
- [Art. 12 BV – Hilfe in Notlagen](https://www.fedlex.admin.ch/eli/cc/1999/404/de#art_12)
- [Art. 43 ATSG – Abklärung des Sachverhalts](https://www.fedlex.admin.ch/eli/cc/2002/510/de#art_43)
- [Art. 28 IVG – Rentenanspruch](https://www.fedlex.admin.ch/eli/cc/1959/827_857_845/de#art_28)
- [Art. 66 AsylG – Beginn der Bestimmungen über vorübergehenden Schutz](https://www.fedlex.admin.ch/eli/cc/1999/358/de#art_66)

Bei kantonalen Quellen ohne gesicherte Einzelbestimmungs-URL und bei bestimmten UNO-/EU-Rechtsquellen werden bewusst **keine schweizerischen Fedlex-Anker erfunden**. Das Ziel der verlinkten externen Website kann durch deren eigenes Lade-/Scrollverhalten variieren; die konkrete Artikeladresse ist nun im Link kodiert.

## 4. Infografiken ohne verzerrte Inhalte

Die vier ursprünglichen SVG-Grafiken liegen im Originalformat vor (jeweils 1200px breit). Sie werden nicht mehr auf unlesbare kleine Miniaturen zusammengedrückt; bei schmaler Ansicht können sie horizontal gescrollt werden.

Unter `#/infografiken` befindet sich jetzt ein thematisch gruppierter Katalog statt einer Wand aus 20 vollständigen Grafiken. Jede Original- und Fachgrafik besitzt eine **eigene Vollansicht** `#/grafik/{id}` mit Zoomtasten, Scrollfunktion, fachlichem Hinweis und Link zum passenden Artikel. Auch das Systemnetz startet nun mit einem gut lesbaren Fachbereich statt einer winzigen gleichzeitigen Übersicht aller 92 Knoten.

## 5. Technische Integration und Grenzen

Neue Dateien: `atlas-structure-v13.js`, `atlas-evidence-v13.js`, `atlas-evidence-ui-v13.js`, `atlas-law-v13.js`, `atlas-visuals-v13.js`, `atlas-v13.css`. Weiterentwickelt wurden `atlas-v4.js`, `atlas-visuals-v5.js`, `atlas-editorial-v10.js`, `academic-v12-ui.js`, `interdisciplinary-ui-v9.js` und `index.html`.

Geprüft: JavaScript-Syntax, Lade-Reihenfolge, Gruppenzuordnung aller 92 Themen, Studie-zu-Thema-Matching, Gesetzesanker und ein repräsentativer Rendering-Smoke-Test mit Startseite, Fachgebieten, Rechtsbibliothek, Infografik-Vollansichten, Netzwerk und Beispielartikeln. **Eine vollständige visuelle Prüfung im echten veröffentlichten Browser, insbesondere aller 20 Grafiken auf allen Gerätegrössen, liegt nicht vor.**

Alle Tarifbeträge sind weiter **statische Referenzwerte von 2026**, keine automatisch aktualisierte Echtzeitrechtsberatung. Die Plattform ist eine Lern- und Recherchehilfe und ersetzt keine Rechtsprüfung, medizinische Diagnostik oder wissenschaftliche Originalrecherche.

---

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
