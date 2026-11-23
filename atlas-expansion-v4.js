/* Erweiterungsband: Spezialthemen und vertiefte Länderprofile */
(function(){
"use strict";
const D=ATLAS_DB,S=D.S;
Object.assign(S,{
 hilf:{label:"BSV – Hilflosenentschädigung",url:"https://www.bsv.admin.ch/de/hilflosenentschaedigung"},
 hilfsmittel:{label:"BSV – Hilfsmittel der IV",url:"https://www.bsv.admin.ch/de/iv-hilfsmittel"},
 eglm:{label:"BSV – Eingliederungsmassnahmen",url:"https://www.bsv.admin.ch/de/eingliederungsmassnahmen"},
 assist:{label:"BSV – Assistenzbeitrag",url:"https://www.bsv.admin.ch/de/assistenzbeitrag"},
 ktg:{label:"BAG – Freiwillige Taggeldversicherung",url:"https://www.bag.admin.ch/de/krankenversicherung-die-freiwillige-taggeldversicherung"},
 ahvluecke:{label:"BSV – Beitragslücken AHV",url:"https://www.bsv.admin.ch/de/versicherungs-und-beitragsluecken-in-der-ahv"},
 sozmonitor:{label:"SKOS – Monitoring Sozialhilfe",url:"https://skos.ch/publikationen/monitoring-sozialhilfe"},
 grSozial:{label:"Graubünden – Sozialhilfe einfach erklärt",url:"https://www.gr.ch/DE/institutionen/verwaltung/dvs/soa/beratung/finanzielle-unterstuetzung/sozialhilfe-einfach-erkl%C3%A4rt/Seiten/default.aspx"},
 drente:{label:"Deutsche Rentenversicherung – Rentenlexikon",url:"https://www.deutsche-rentenversicherung.de/SharedDocs/Glossareintraege/DE/R/rentenversicherung.html"},
 inps:{label:"INPS – Leistungen für Familien",url:"https://www.inps.it/it/it/dettaglio-scheda.it.schede-servizio-strumento.schede-servizi.assegno-unico-e-universale-per-i-figli-a-carico-55984.assegno-unico-e-universale-per-i-figli-a-carico.html"},
 liSozial:{label:"Liechtenstein – wirtschaftliche Sozialhilfe",url:"https://www.llv.li/de/landesverwaltung/amt-fuer-soziale-dienste/erwachsene/wirtschaftliche-sozialhilfe"},
 liGesund:{label:"Liechtenstein – Kranken-/Unfallversicherung",url:"https://www.llv.li/de/landesverwaltung/amt-fuer-gesundheit/unsere-aufgaben"}
});
const extra=[
["ahvbeitrag","AHV-Beiträge, individuelles Konto und Beitragslücken","Altersvorsorge","IK","Fehlende Versicherungs- oder Beitragszeiten können die spätere AHV-Rente beeinflussen.",[
["Individuelles Konto","Das individuelle Konto (IK) dokumentiert beitragsrelevante Informationen. Ein IK-Auszug hilft, Versicherungsverlauf und mögliche Lücken frühzeitig zu erkennen.","Ein Auslandaufenthalt oder eine längere Phase ohne Beitragserfassung kann Abklärungen notwendig machen."],
["Korrekturen und Nachzahlungen","Ob eine Lücke durch Nachzahlung oder andere gesetzliche Mechanismen geschlossen werden kann, ist vom Zeitraum und den jeweiligen Bedingungen abhängig.","Es genügt nicht, einen fehlenden Beitrag durch eine beliebige spätere Überweisung auszugleichen."],
["Rentenwirkung","Bei unvollständiger Beitragsdauer resultiert grundsätzlich eine Teilrente. Auch weitere Berechnungsgrössen sind relevant.","Eine individuelle Prognose kann die zuständige Ausgleichskasse liefern."]
],["IK-Auszug bestellen","Versicherungszeiten chronologisch vergleichen","Lücken mit zuständiger Ausgleichskasse abklären","Rentenvorausschau gesondert prüfen"],["ahv","bvg"],["ahvluecke","ahv"],"Beitragslücke und niedriger Verdienst sind nicht dieselbe Ursache einer tiefen Rente."],
["hilflos","Hilflosenentschädigung AHV und IV","Invalidität","HE","Hilflosenentschädigung unterstützt bei gesetzlich definiertem Bedarf an Hilfe bei alltäglichen Lebensverrichtungen.",[
["Selbstständigkeit im Alltag","Massgebend können regelmässige Hilfe in alltäglichen Verrichtungen, lebenspraktische Begleitung und weitere gesetzliche Kriterien sein.","Die Beurteilung richtet sich nach konkret anwendbaren AHV- oder IV-Regeln."],
["Versicherungszweig","AHV und IV kennen Hilflosenentschädigungen, aber nicht identische Anspruchsbedingungen und Leistungshöhen.","Leistungen der Unfall- oder Militärversicherung können koordinationsrechtlich vorrangig sein."],
["Abgrenzung","Eine Hilflosenentschädigung ist nicht gleichbedeutend mit einer IV-Rente oder der Vergütung einzelner Pflegekosten.","EL, Assistenzbeitrag und weitere Hilfen sind getrennt zu prüfen."]
],["Versicherungszweig bestimmen","Alltäglichen Hilfebedarf dokumentieren","Grad und zusätzliche Anspruchsbedingungen prüfen","Koordination mit anderen Leistungsträgern klären"],["ahv","iv","assistenz","el"],["hilf"],"Nicht die Diagnose, sondern die rechtlich bewertete Hilfsbedürftigkeit ist zentral."],
["ivhilfsmittel","Hilfsmittel der Invalidenversicherung","Invalidität","IV-HM","Die IV kann bestimmte notwendige Hilfsmittel nach geltender Liste und gesetzlichen Regeln übernehmen.",[
["Leistungszweck","Hilfsmittel können Selbstsorge, Fortbewegung, Umweltkontakt oder berufliche Eingliederung ermöglichen.","Die konkrete Leistungsart hängt vom Zweck und der Liste der Hilfsmittel ab."],
["Anspruchsprüfung","Zu prüfen sind medizinische/berufliche Notwendigkeit, Eignung, Anspruchskreis und besondere Regelungen zu Beiträgen oder Pauschalen.","Nicht jedes im Alltag nützliche Gerät ist automatisch ein IV-Hilfsmittel."],
["Verfahren","Ein Gesuch und die Abklärung durch die zuständige IV-Stelle sind im Einzelfall bedeutsam.","Kostengutsprache, Vertragslieferanten und Reparaturen folgen teils gesonderten Vorgaben."]
],["Zweck und Hilfsmittelart definieren","Hilfsmittelverzeichnis und Voraussetzungen prüfen","IV-Stelle/andere Versicherungen koordinieren","Kostengutsprache und Versorgung dokumentieren"],["iv","medizinsh","uvg"],["hilfsmittel","eglm"],"Ein Hilfsmittel kann medizinisch sinnvoll sein, ohne von der IV bezahlt werden zu müssen."],
["iveingliederung","IV-Eingliederungsmassnahmen","Invalidität","Eingl.","Die IV bietet unter Voraussetzungen Massnahmen zum Erhalt oder zur Wiederherstellung von Erwerbsfähigkeit und Selbstständigkeit.",[
["Eingliederung vor Rente","Berufliche Massnahmen und Frühintervention können wesentlich sein, bevor ein Rentenanspruch abschliessend geprüft wird.","Geeignetheit, Notwendigkeit und Versicherungsstatus sind zu beurteilen."],
["Beispiele","Integrationsmassnahmen, berufliche Massnahmen und Hilfsmittel dienen unterschiedlichen Zielen.","Nicht jede Massnahme steht allen Versichertengruppen zur Verfügung."],
["Interprofessionelle Arbeit","Arbeitgebende, Gesundheitsfachpersonen, Beratungsstellen und Sozialarbeit wirken bei geeigneten Eingliederungsprozessen mit.","Datenaustausch und Datenschutz sind zu beachten."]
],["Massnahmenbedarf beschreiben","Potenzial und Zumutbarkeit klären","Gesetzliche Massnahmeart festlegen","Finanzierung und Verlauf evaluieren"],["iv","ivhilfsmittel","integration"],["eglm"],"Eingliederung ist ein Prozess und keine Garantie für eine bestimmte Stelle."],
["assistenz","Assistenzbeitrag der IV","Invalidität","Assistenz","Ein Assistenzbeitrag kann unter bestimmten Voraussetzungen ein selbstbestimmtes Leben mit selbstorganisierter Unterstützung fördern.",[
["Persönliche Voraussetzungen","Zu den wichtigen Kriterien gehören nach dem anwendbaren IV-Recht unter anderem Bezug einer IV-Hilflosenentschädigung und das Leben zu Hause.","Weitere Anforderungen und Ausnahmen sind gesondert zu prüfen."],
["Unterstützung organisieren","Der Assistenzbeitrag betrifft die Beschäftigung von Assistenzpersonen unter spezifischen gesetzlichen Bedingungen.","Er ist nicht einfach ein allgemeiner Pflege- oder Angehörigenersatzbetrag."],
["Koordination","Hilflosenentschädigung, EL, Krankenversicherung und andere Finanzierungen können Schnittstellen haben.","Der konkrete Bedarf und die Anrechnung anderer Leistungen müssen geklärt werden."]
],["HE-Anspruch und Wohnsituation prüfen","Assistenzbedarf strukturiert dokumentieren","Arbeits- und Abrechnungsfragen klären"],["iv","hilflos","el"],["assist"],"Die Kombination aus Hilflosenentschädigung und Assistenzbeitrag folgt speziellen Regeln."],
["krankentaggeld","Krankentaggeld und Lohnfortzahlung","Erwerbsausfall","KTG","Bei längerer Krankheit sind Lohnfortzahlung und eine mögliche Krankentaggeldversicherung zu unterscheiden.",[
["Arbeitsrechtliche Ebene","Ob und wie lange der Arbeitgeber bei Krankheit Lohn bezahlt, hängt von gesetzlichen und vertraglichen Grundlagen ab.","Gesamtarbeitsverträge und Arbeitsvertrag können besondere Regeln enthalten."],
["Versicherungslösung","Krankentaggeld kann nach KVG oder VVG versichert sein; die Systeme haben unterschiedliche Regeln.","Es gibt keine pauschale bundesrechtliche Pflicht zu einer für alle Arbeitnehmer identischen Krankentaggeldversicherung."],
["Schnittstelle zur IV","Bei länger dauernder Einschränkung können Früherfassung, IV-Eingliederung und Sozialhilfe bei akuter Notlage relevant werden.","Bei Taggeldansprüchen Vertragsbedingungen, Karenzfrist und Versicherungsdauer prüfen."]
],["Arbeitsvertrag und Lohnfortzahlung klären","KTG-Police und Versicherungsrecht bestimmen","Krankheitsdauer und Taggeldanspruch erfassen","IV und Existenzsicherung koordinieren"],["iv","alv","sozialhilfe"],["ktg","bsv"],"Krankentaggeld und UVG-Unfalltaggeld sind rechtlich unterschiedliche Leistungen."],
["bvglohn","Versicherter Lohn und Koordinationsabzug (BVG)","Altersvorsorge","BVG-Lohn","Der nach BVG versicherte Lohn ist nicht zwingend identisch mit dem gesamten Bruttolohn.",[
["Grundidee","Im BVG-Obligatorium bestimmen gesetzliche Schwellen und Koordinationsregeln den versicherten Lohn.","Pensionskassen können darüber hinausgehende reglementarische Lösungen anbieten."],
["Berechnung","Ein Koordinationsabzug dient im gesetzlichen Modell dazu, die Abstimmung mit der ersten Säule zu berücksichtigen.","Abzüge, Mindest- und Höchstwerte sowie Kassenreglement müssen zum betreffenden Jahr passen."],
["Praxis","Bei Teilzeit oder mehreren Anstellungen sind Unterstellung und effektive Vorsorgelösung besonders wichtig.","Für eine korrekte Abrechnung braucht es den gültigen Vorsorgeplan."]
],["Jahr und Pensionskasse festhalten","Unterstellung und Bruttolohn prüfen","Versicherten Lohn gemäss gültigem Plan bestimmen"],["bvg","ahv"],["bsv"],"Nicht pauschal jeden Lohn mit einem fixen Koordinationsabzug berechnen."],
["freizuegigkeit","Freizügigkeit bei Stellenwechsel","Altersvorsorge","FZG","Bei einem Austritt aus einer Vorsorgeeinrichtung muss das angesparte Vorsorgeguthaben nach den geltenden Regeln erhalten bleiben.",[
["Übertritt","Beim Wechsel zu einer neuen versicherten Stelle wird die Austrittsleistung grundsätzlich an die neue Vorsorgeeinrichtung übertragen.","Weitere Konstellationen können über Freizügigkeitseinrichtungen abgewickelt werden."],
["Barauszahlung","Eine direkte Barauszahlung ist nur unter bestimmten gesetzlichen Voraussetzungen möglich.","Auslandsbezug kann besondere Beschränkungen und Koordinationsregeln auslösen."],
["Praktisches Vorgehen","Austrittsabrechnung, bisherige Pensionskasse und neue Einrichtung frühzeitig abgleichen.","Eine vergessene Freizügigkeitsleistung kann später gesucht werden."]
],["Austrittsleistung und Pensionskasse identifizieren","Übertragungsziel bestimmen","Gesetzliche Auszahlungsvoraussetzungen prüfen"],["bvg","international"],["bsv"],"Die Freizügigkeitsleistung ist nicht mit frei verfügbarem Lohn gleichzusetzen."],
["mittel","Einkommen und Vermögen in der Sozialhilfe","Sozialhilfe","Mittel","Für die wirtschaftliche Sozialhilfe müssen Einkommen, Vermögen und vorrangige Ansprüche sachgerecht erfasst werden.",[
["Bedürftigkeitsprüfung","Wirtschaftlich verfügbare Mittel können in der Anspruchsprüfung berücksichtigt werden. Welche Posten und Freibeträge gelten, richtet sich nach dem konkreten Recht.","Einkommen und Vermögen sind begrifflich zu trennen."],
["Schenkungen und Einmalzahlungen","Geschenke, Rückzahlungen, Erbschaften und zweckgebundene Beiträge können schwierige Einordnungsfragen auslösen.","Entscheidend sind Zweck, rechtliche Verfügbarkeit, Zeitpunkt und anwendbare Regel."],
["Dokumentation","Kontoauszüge, Einkommensbelege, Vermögenswerte und Ausgaben müssen soweit erforderlich nachvollziehbar erfasst werden.","Datenschutz und Verhältnismässigkeit sind auch bei der Abklärung wichtig."]
],["Mittelarten kategorisieren","Verfügbarkeit und Zweck dokumentieren","Kantonale Anrechnungs- und Freibetragsregeln prüfen"],["sozialhilfe","subsidiaritaet","grundbedarf"],["skos","sozmonitor"],"Nicht jede Geldbewegung ist im Sozialhilfebudget automatisch gleich zu behandeln."],
["rueckerstattung","Rückerstattung und Bevorschussung","Sozialhilfe","Rückerst.","Sozialhilfeleistungen können in bestimmten Situationen rückerstattungspflichtig sein; das gilt nicht pauschal für jede Unterstützung.",[
["Rechtsgrundlagen","Rückerstattung setzt eine konkrete gesetzliche Grundlage voraus. Kantonale Unterschiede, Härtefallregelungen und Verjährung können bedeutsam sein.","Unrechtmässiger Bezug und rechtmässig bezogene Leistungen sind voneinander zu trennen."],
["Vermögensanfälle","Ein späterer Vermögensanfall kann nach den geltenden Regeln eine Rückerstattungsfrage auslösen.","Liegenschaften und andere nicht direkt verfügbare Vermögenswerte brauchen eine gesonderte Prüfung."],
["Bevorschussung","Bei erwarteten vorrangigen Leistungen können gesonderte Sicherungs-, Abtretungs- oder Erstattungsregeln relevant sein.","Nicht jede spätere Zahlung darf automatisch zurückbehalten werden."]
],["Art des Leistungsbezugs und Zeitraum bestimmen","Gesetzliche Rückerstattungsvoraussetzung prüfen","Härtefall, Zumutbarkeit und Verfahren beachten"],["sozialhilfe","mittel","subsidiaritaet"],["skos","sozmonitor"],"Rückerstattungspflichten variieren kantonal; keine allgemeine Pauschalregel unterstellen."],
["haushalt","Haushaltsformen und Unterstützungsbudget","Sozialhilfe","Haushalt","Die Zusammensetzung und tatsächliche Organisation eines Haushalts beeinflusst die sozialhilferechtliche Budgetierung.",[
["Wohn- und Lebensgemeinschaften","Alleinleben, Familienhaushalt, Wohngemeinschaft oder Konkubinat können unterschiedlich zu prüfen sein.","Eine gemeinsame Adresse allein beweist nicht jede rechtlich relevante finanzielle Beziehung."],
["Grundbedarf und Wohnen","Haushaltsgrösse kann Grundbedarf und Wohnkosten beeinflussen.","Es sind die kantonal massgebenden Definitionen und Fakten abzuklären."],
["Unterhalt","Gesetzliche Unterhaltsansprüche sind von freiwilliger Unterstützung und blossen Wohngemeinschaften zu unterscheiden.","Besondere Regeln bestehen bei Paaren und Kindern."]
],["Haushaltsmitglieder und Zusammenleben erfassen","Rechtliche Beziehungen unterscheiden","Anrechenbare Wohn- und Haushaltskosten prüfen"],["grundbedarf","wohnkosten","mittel"],["skos","skosG"],"Die Zurechnung fremder Einkünfte setzt eine entsprechende rechtliche Grundlage voraus."],
["kostengutsprache","Kostengutsprache und Ermessensentscheid","Sozialhilfe","KGS","Eine Kostengutsprache ist die vorgängige oder fallbezogene Entscheidung über die Übernahme bestimmter Ausgaben.",[
["Prüffragen","Wofür wird Geld benötigt? Ist die Ausgabe notwendig, zweckmässig und angemessen? Können andere Stellen zahlen?","Je nach Leistung können Kostenvoranschläge und fachliche Stellungnahmen notwendig sein."],
["Verfahrensrahmen","Entscheidkompetenz und Rechtsgrundlage müssen anhand kantonaler Weisungen bestimmt werden.","Eilbedürftigkeit und geplante Behandlung können unterschiedliche Vorgehensweisen verlangen."],
["Ermessensausübung","Bei bestehendem Entscheidungsspielraum sind sachgerechte Kriterien, Rechtsgleichheit und Verhältnismässigkeit wichtig.","Die Begründung soll konkrete Fakten und Rechtsgrundlagen verbinden."]
],["Kostenart und Dringlichkeit bestimmen","Nachweise und Kostenträger erfassen","Rechtsgrundlage und Zuständigkeit festhalten","Entscheid sachlich begründen"],["sil","medizinsh","graubuenden","verfahren"],["grC","grP","skos"],"Eine interne Kompetenzlimite ist nicht automatisch die rechtliche Anspruchsgrenze."],
["opferhilfe","Opferhilfe und Schnittstellen zur Sozialhilfe","Sozialhilfe","OHG","Opferhilfe unterstützt unter gesetzlichen Voraussetzungen Personen, die durch Straftaten unmittelbar beeinträchtigt wurden.",[
["Leistungen","Beratung, Soforthilfe, längerfristige Hilfe und finanzielle Leistungen können je nach Voraussetzungen relevant werden.","Opferhilfe ist ein eigener Rechtsbereich mit Schnittstellen zur Sozialhilfe."],
["Subsidiarität und Zuständigkeit","Versicherungsschutz und weitere vorrangige Leistungen können abgestimmt werden müssen.","Für konkrete Ansprüche ist die zuständige Opferhilfestelle zu kontaktieren."],
["Schutz und Datenschutz","Betroffenenorientierte Beratung, Vertraulichkeit und geeignete Verfahren sind besonders wichtig.","Nicht jede sozialhilfebedürftige Person ist automatisch Opferhilfe-berechtigt."]
],["Tatbestand und Hilfeart einordnen","Opferhilfestelle kontaktieren","Andere Finanzierung abklären"],["sozialhilfe","subsidiaritaet"],["grP"],"Die Voraussetzungen der Opferhilfe unterscheiden sich von allgemeiner Bedürftigkeit."],
["grstatus","Aufenthaltsstatus und Sozialhilfe Graubünden","Kantone","Status","Bei Aufenthalts- und Schutzstatusfragen muss vor der Budgetprüfung das einschlägige Unterstützungsrecht bestimmt werden.",[
["Warum der Status wichtig ist","Je nach Aufenthaltsstatus können unterschiedliche zuständige Behörden, Finanzierungssysteme und Leistungsregelungen gelten.","Sozialhilfe, Asylsozialhilfe und besondere kantonale Verfahren dürfen nicht vermischt werden."],
["Aktuelle Rechtslage","Rechtsänderungen können beschlossen, aber noch nicht in Kraft sein. Für den Entscheid ist der massgebende Zeitpunkt entscheidend.","Gerade beim Schutzstatus S sind Änderungen im Laufe der Jahre möglich; offizielle kantonale Informationen sind unerlässlich."],
["Verwaltungspraxis","Zuständigkeit, Dokumente, Identität, Wohnort, Notlage und allfällige Kostengutsprachen sind gesondert zu prüfen.","Interne Weisungen ergänzen, ersetzen aber die Rechtsgrundlagen nicht."]
],["Status und Zeitpunkt dokumentieren","Zuständigen Leistungsträger bestimmen","Aktuelle Spezialnormen prüfen","Existenz und medizinische Grundversorgung beachten"],["graubuenden","sozialhilfe","medizinsh"],["gr","grP"],"Keine zukünftige Rechtsänderung als bereits geltendes Recht behandeln."],
["gesundheitskosten","Selbstbehalt, Franchise und Prämien","Gesundheit","Kosten","Prämie, Franchise und Selbstbehalt sind unterschiedliche Arten der finanziellen Beteiligung an der Krankenversicherung.",[
["Prämie","Eine wiederkehrende Zahlung für den Versicherungsschutz; IPV kann diese Belastung bei kantonalem Anspruch reduzieren.","Prämien sind nicht identisch mit Rechnungen für ärztliche Behandlungen."],
["Franchise","Die gewählte Franchise bestimmt die jährliche Kostenbeteiligung im Grundversicherungssystem unter den gesetzlichen Regeln.","Franchisehöhe, Versicherungsmodell und Versicherungsjahr sind relevant."],
["Selbstbehalt","Bei zahlreichen gedeckten Leistungen ist nach Ausschöpfen der Franchise ein Selbstbehalt zu leisten, mit gesetzlichen Grenzen und Ausnahmen.","Für Sozialhilfe und EL kann die Übernahme von Kostenbeteiligungen gesondert relevant sein."]
],["Versicherung und Kostenart bestimmen","Leistungspflicht prüfen","IPV, EL oder Sozialhilfe als Kostenträger abklären"],["kvg","ipv","medizinsh","el"],["bag"],"Prämie, Franchise und Selbstbehalt nicht doppelt oder als denselben Budgetposten erfassen."],
["steuerung","Föderalismus und Zuständigkeiten","Querschnitt","Bund/Kanton","In der Schweiz unterscheiden sich die Aufgaben von Bund, Kantonen, Gemeinden und Sozialversicherungsträgern.",[
["Bundesrecht","Viele Sozialversicherungen beruhen auf Bundesgesetzen, werden aber teilweise dezentral vollzogen.","ATSG, AHVG, IVG, ELG, KVG und andere Erlasse bilden wichtige Ebenen."],
["Kantone und Gemeinden","Sozialhilfe und einzelne Vollzugsbereiche wie IPV enthalten starke kantonale Elemente.","In Graubünden liegt die materielle Sozialhilfe grundsätzlich bei den Gemeinden."],
["Drei Blickrichtungen","Makro: Gesetze und Systeme; Meso: Behörden und Träger; Mikro: konkreter Anspruch und aktuelle Lebenssituation.","Diese Ebenen helfen, Fallbearbeitung mit Systemverständnis zu verbinden."]
],["Bundesrecht und Spezialrecht unterscheiden","Kanton und Gemeinde bestimmen","Zuständige Behörde finden","Fall auf Mikro-/Meso-/Makroebene ordnen"],["atsg","graubuenden","sozialhilfe","ipv"],["bsv","grGes"],"Eine zuständige Bundesgesetzgebung bedeutet nicht zwingend eine einzige nationale Auszahlungsstelle."]
];
extra.forEach(([id,title,category,short,summary,sections,steps,related,sourceIds,caution])=>{
 if(D.topics.some(t=>t.id===id))return;
 D.topics.push({id,title,category,short,summary,sections:sections.map(([heading,...paragraphs])=>({heading,paragraphs})),steps,related,sources:sourceIds.map(k=>S[k]).filter(Boolean),lawIds:D.laws.filter(l=>l.topics.includes(id)).map(l=>l.id),caution});
});
const edges=[["ahv","ahvbeitrag","Beitrag"],["ahv","hilflos","Bedarf"],["iv","hilflos","Anspruch"],["iv","ivhilfsmittel","Hilfsmittel"],["iv","iveingliederung","Eingliederung"],["iv","assistenz","Assistenz"],["hilflos","assistenz","Voraussetzung"],["iv","krankentaggeld","Abklärung"],["bvg","bvglohn","Versicherter Lohn"],["bvg","freizuegigkeit","Stellenwechsel"],["sozialhilfe","mittel","Anrechnung"],["sozialhilfe","haushalt","Budget"],["sozialhilfe","rueckerstattung","Rückforderung"],["sozialhilfe","kostengutsprache","Entscheid"],["sozialhilfe","opferhilfe","Koordination"],["graubuenden","grstatus","Status"],["graubuenden","kostengutsprache","KGS"],["kvg","gesundheitskosten","Kosten"],["medizinsh","gesundheitskosten","Kostenträger"],["atsg","steuerung","Föderalismus"]];
edges.forEach(([from,to,label])=>D.edges.push({from,to,label}));
const countryData={
CH:{chapters:[
{title:"Organisation",text:"Der Bund regelt zentrale Versicherungen, die Durchführung erfolgt über unterschiedliche Versicherer, Ausgleichskassen, IV-Stellen und andere Träger. Kantone und Gemeinden erfüllen insbesondere bei Sozialhilfe und IPV wichtige Aufgaben."},
{title:"Finanzierung",text:"AHV arbeitet überwiegend im Umlageverfahren. Die berufliche Vorsorge baut Kapital auf. Die obligatorische Krankenversicherung verwendet ein eigenständiges Prämiensystem mit gesetzlich geregelter Kostenbeteiligung."},
{title:"Bedarfsabhängige Leistungen",text:"EL ergänzen AHV und IV, während Sozialhilfe nach kantonalem Recht aktuelle Bedürftigkeit berücksichtigt. Beide Systeme unterscheiden sich in Rechtsgrundlagen und Berechnungslogik."}
],sources:[S.bsv,S.skos,S.int]},
DE:{chapters:[
{title:"Sozialgesetzbuch und Versicherungen",text:"Die deutsche soziale Sicherung ist in verschiedenen Sozialgesetzbüchern geregelt. Die gesetzliche Renten-, Kranken-, Pflege-, Unfall- und Arbeitslosenversicherung haben unterschiedliche Träger und Finanzierung."},
{title:"Renten- und Rehabilitationssystem",text:"Die Deutsche Rentenversicherung ist ein wichtiger Träger für Alters-, Erwerbsminderungs- und Hinterbliebenenrenten sowie Rehabilitation. Versicherungsverlauf, Beitragszeiten und Rentenart müssen gesondert geprüft werden."},
{title:"Existenzsicherung",text:"Neben Versicherungsleistungen gibt es steuerfinanzierte bedarfsorientierte Sicherung. Bürgergeld/Grundsicherung für Arbeitsuchende und Sozialhilfe sind rechtlich voneinander zu unterscheiden; die Bezeichnungen und Regelungen können sich durch Reformen ändern."},
{title:"Grenzgänger",text:"Bei Wohnsitz Deutschland und Arbeit in der Schweiz gelten im Koordinationsbereich besondere Zuständigkeitsregeln. Arbeitslosigkeit, Krankenversicherung und Altersvorsorge getrennt prüfen."}
],sources:[{label:"Bundesministerium für Arbeit und Soziales",url:"https://www.bmas.de/"},S.drente,S.europa]},
FR:{chapters:[
{title:"Sécurité sociale",text:"Die soziale Sicherung in Frankreich umfasst mehrere Sicherungszweige und Institutionen. Krankenversicherung, Alter und Familie sind wichtige Teile, werden jedoch nicht alle von derselben Stelle administriert."},
{title:"Gesundheit und Krankheit",text:"Assurance maladie und ergänzende Versicherungen sind von den schweizerischen KVG-Regeln zu unterscheiden. Versorgung und Erstattung folgen französischem Recht."},
{title:"Altersvorsorge",text:"Die Alterssicherung kennt verschiedene régime und ergänzende Systeme. Beitrags- und Beschäftigungsstatus beeinflussen die Ansprüche."},
{title:"Arbeitslosigkeit und Mindestsicherung",text:"Arbeitslosigkeitsleistungen und bedarfsbezogene Unterstützungen besitzen unterschiedliche Voraussetzungen und Behördenwege."}
],sources:[{label:"Service-Public – französische Verwaltung",url:"https://www.service-public.fr/"},S.europa]},
IT:{chapters:[
{title:"INPS und Alter",text:"INPS ist eine zentrale Institution für Renten, Einkommensersatz und diverse Unterstützungsleistungen. Die konkrete Leistung hängt von Beitrags- und Erwerbsgeschichte ab."},
{title:"Gesundheitsversorgung",text:"Der Servizio Sanitario Nazionale organisiert die öffentliche Gesundheitsversorgung. Zuständigkeiten und Umsetzung sind auch regional geprägt."},
{title:"Arbeitslosigkeit",text:"Für bestimmte Konstellationen kennt Italien beispielsweise NASpI. Anspruchsbedingungen und Antragstellung müssen bei INPS verifiziert werden."},
{title:"Familienleistungen",text:"Der Assegno unico e universale ist eine wichtige Leistung für Familien mit Kindern. Die konkrete Berechnung bezieht besondere familiäre und wirtschaftliche Angaben ein."},
{title:"Grenzgänger zur Schweiz",text:"Bei Wohnsitz Italien und Arbeit Schweiz muss pro Versicherungszweig das anwendbare Koordinationsrecht geprüft werden. Steuerrecht und Sozialversicherungsrecht nicht vermischen."}
],sources:[{label:"INPS – Istituto Nazionale della Previdenza Sociale",url:"https://www.inps.it/"},S.inps,S.europa]},
AT:{chapters:[
{title:"Versicherungszweige",text:"Österreich kennt Kranken-, Unfall- und Pensionsversicherung sowie Arbeitslosenversicherung. Die Durchführung erfolgt über zuständige Träger und öffentliche Institutionen."},
{title:"Pension",text:"Pensionsansprüche richten sich nach dem jeweils einschlägigen Pensionsrecht, Versicherungszeiten und weiteren Voraussetzungen."},
{title:"Gesundheit und Pflege",text:"Krankenversicherung und weitere pflegebezogene Leistungen müssen rechtlich voneinander unterschieden werden."},
{title:"Sozialhilfe",text:"Für Sozialhilfe beziehungsweise Mindestsicherung ist auch das Recht der Bundesländer entscheidend. Nicht jede Leistung und Zuständigkeit ist österreichweit gleich."}
],sources:[{label:"Sozialministerium Österreich",url:"https://www.sozialministerium.at/"},S.europa]},
LI:{chapters:[
{title:"Eigenständige AHV/IV",text:"Liechtenstein verfügt über ein eigenes AHV- und IV-System sowie Familien- und weitere Leistungen. Ähnliche Begriffe sind nicht mit identischen schweizerischen Leistungsregeln gleichzusetzen."},
{title:"Gesundheit",text:"Kranken- und Unfallversicherung besitzen eigene Pflicht- und Aufsichtsregeln. Für internationale Sachverhalte kommen Koordinationsabkommen hinzu."},
{title:"Wirtschaftliche Sozialhilfe",text:"Das Amt für Soziale Dienste erläutert die wirtschaftliche Sozialhilfe zur Sicherung des sozialen Existenzminimums sowie Beratungsangebote."},
{title:"Beziehungen zur Schweiz",text:"Für grenzüberschreitende Situationen mit der Schweiz und EU/EWR ist die jeweils anwendbare Koordinationsgrundlage und Versicherungsart zu bestimmen."}
],sources:[{label:"Liechtensteinische Landesverwaltung",url:"https://www.llv.li/"},S.liSozial,S.liGesund]}
};
D.countries.forEach(c=>Object.assign(c,countryData[c.id]||{}));
})();