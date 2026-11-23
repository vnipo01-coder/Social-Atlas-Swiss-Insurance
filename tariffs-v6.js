/* SOCIAL ATLAS 6.0 | Stand 23.11.2026 | 2026 ist das Referenzjahr. Offizielle 2026-Tarife, keine automatischen Updates. */
(()=>{"use strict";const D=ATLAS_DB;
const SOURCES={
bsv26:{label:"BSV – Beträge gültig ab 1. Januar 2026 (amtliche Übersicht)",url:"https://www.bsv.admin.ch/dam/bsv/de/dokumente/ahv/uebersichten/renten-und-beitraege-20260101.pdf.download.pdf/renten-und-beitraege-20260101.pdf"},
bsvB:{label:"BSV – Beiträge an die Sozialversicherungen",url:"https://www.bsv.admin.ch/de/beitraege-im-ueberblick"},
bsvA:{label:"BSV – AHV-Renten und Leistungen",url:"https://www.bsv.admin.ch/de/leistungen-ahv-detail"},
bsv13:{label:"BSV – 13. AHV-Altersrente ab Dezember 2026",url:"https://www.bsv.admin.ch/de/umsetzung-13-ahv-rente"},
bsvBV:{label:"BSV – Berufliche Vorsorge",url:"https://www.bsv.admin.ch/de/altersvorsorge-beruflichen-vorsorge"},
bsvEL:{label:"BSV – Ergänzungsleistungen im Detail",url:"https://www.bsv.admin.ch/de/el-im-detail"},
bsvELM:{label:"BSV – Mietkosten in den EL (2026)",url:"https://www.bsv.admin.ch/de/mietkosten-el"},
bsvFam:{label:"BSV – Familienzulagen",url:"https://www.bsv.admin.ch/de/leistungen-und-voraussetzungen-familienzulagen"},
bsvFam2:{label:"BSV – Familienzulagen: Mindestbeträge",url:"https://www.bsv.admin.ch/de/zulagen-fuer-familien"},
bsvEO:{label:"BSV – Mutterschaft und Elternschaft (EO)",url:"https://www.bsv.admin.ch/de/eo-elternschaft"},
bsvMut:{label:"BSV – Mutterschaftsentschädigung",url:"https://www.bsv.admin.ch/de/eo-bei-mutterschaft"},
bsvF:{label:"BSV – Entschädigung des anderen Elternteils",url:"https://www.bsv.admin.ch/de/eo-bei-vaterschaft"},
bsvMin:{label:"BSV – BVG Mindestzins 2026/2027",url:"https://www.bsv.admin.ch/de/newnsb/8DF8zxcfvu7l"},
bag:{label:"BAG – Kostenbeteiligung KVG",url:"https://www.bag.admin.ch/de/krankenversicherung-kostenbeteiligung-fuer-in-der-schweiz-wohnhafte-versicherte"},
bagFr:{label:"BAG – Wahlfranchisen",url:"https://www.bag.admin.ch/de/krankenversicherung-wahlfranchisen"},
priminfo:{label:"BAG – Priminfo, offizieller Prämienrechner",url:"https://www.priminfo.admin.ch/"},
alv:{label:"SECO / arbeit.swiss – Versicherungsleistungen",url:"https://www.arbeit.swiss/arbeitslos/"},
alvDetail:{label:"SECO / arbeit.swiss – Leistungen und Anspruch",url:"https://www.onlineformulare-ffe.arbeit.swiss/de/stellensuchende/versicherungsleistungen"},
skos:{label:"SKOS – Grundbedarf für den Lebensunterhalt",url:"https://skos.ch/skos-richtlinien/grundbedarf-fuer-den-lebensunterhalt"},
skosLaw:{label:"SKOS – Rechtsgrundlagen der Kantone",url:"https://skos.ch/skos-richtlinien/rechtliches/rechtsgrundlagen/"},
gr:{label:"Kanton Graubünden – Beschluss Grundbedarf (21.11.2024)",url:"https://www.gr.ch/DE/Medien/Mitteilungen/MMStaka/2024/Seiten/2024112101.aspx"},
grHand:{label:"Graubünden – Sozialhilfe-Handbuch",url:"https://www.gr.ch/DE/institutionen/verwaltung/dvs/soa/beratung/sozialhilfe-handbuch/Seiten/default.aspx"},
grS:{label:"Graubünden – Schutzstatus S: vorgesehene Änderungen ab März 2027",url:"https://www.gr.ch/DE/Medien/Mitteilungen/MMStaka/2026/Seiten/2026110601.aspx"}
};
const R=[];
function add(topic,group,label,value,unit,source,detail,when="2026",scope="Schweiz",status="Amtlicher Wert",formula=""){
 const src=SOURCES[source];R.push({id:topic+"-"+(R.length+1),topics:Array.isArray(topic)?topic:[topic],group,label,value,unit,detail,when,scope,status,formula,source:src});
}
add(["ahv","ahvbeitrag"],"AHV-Altersrenten","Minimale AHV-Vollrente",1260,"CHF / Monat","bsv26","Monatlicher Mindestbetrag einer ordentlichen Vollrente bei voller Beitragsdauer; individuelle Teilrenten können tiefer ausfallen.");
add(["ahv","ahvbeitrag"],"AHV-Altersrenten","Maximale AHV-Vollrente",2520,"CHF / Monat","bsv26","Die maximale ordentliche AHV-Vollrente entspricht 2026 CHF 2’520 pro Monat.");
add("ahv","AHV-Altersrenten","Plafond Ehepaar (addierte Einzelrenten)",3780,"CHF / Monat","bsv26","Betrag für die maximale Summe individueller Ehepaar-Renten nach gesetzlichen Regeln.");
add("ahv","AHV-Altersrenten","13. AHV-Altersrente","1/12 der im Jahr bezogenen AHV-Altersrenten","Berechnungsregel","bsv13","Erstmals im Dezember 2026; bezieht sich nur auf Altersrenten und hängt vom im Kalenderjahr tatsächlich ausbezahlten Betrag ab.");
add(["iv","ahv"],"Renten","Minimale IV-Vollrente",1260,"CHF / Monat","bsv26","Bei voller Beitragsdauer und gesetzlicher Anspruchsberechtigung; IV-Renten werden 12-mal pro Jahr ausgerichtet.");
add(["iv","ahv"],"Renten","Maximale IV-Vollrente",2520,"CHF / Monat","bsv26","Die Höhe der persönlichen IV-Rente hängt zusätzlich von Rentenanteil und weiteren Kriterien ab.");
add(["ahv","hilflos"],"Hilflosenentschädigung AHV","AHV-Hilflosenentschädigung leicht (zu Hause)",252,"CHF / Monat","bsv26","Unter gesetzlichen Voraussetzungen; Grad leicht und Wohnsituation beachten.");
add(["ahv","hilflos"],"Hilflosenentschädigung AHV","AHV-Hilflosenentschädigung mittel",630,"CHF / Monat","bsv26","Nur bei erfülltem Anspruch.");
add(["ahv","hilflos"],"Hilflosenentschädigung AHV","AHV-Hilflosenentschädigung schwer",1008,"CHF / Monat","bsv26","Nur bei erfülltem Anspruch.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung leicht, zu Hause",504,"CHF / Monat","bsv26","Unterscheidung nach Hilflosigkeitsgrad und Wohnform.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung mittel, zu Hause",1260,"CHF / Monat","bsv26","Unterscheidung nach Hilflosigkeitsgrad und Wohnform.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung schwer, zu Hause",2016,"CHF / Monat","bsv26","Unterscheidung nach Hilflosigkeitsgrad und Wohnform.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung leicht, Heim",126,"CHF / Monat","bsv26","Andere Beträge als bei Wohnen zu Hause.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung mittel, Heim",315,"CHF / Monat","bsv26","Andere Beträge als bei Wohnen zu Hause.");
add(["iv","hilflos"],"Hilflosenentschädigung IV","IV-Hilflosenentschädigung schwer, Heim",504,"CHF / Monat","bsv26","Andere Beträge als bei Wohnen zu Hause.");
add(["iv","hilflos"],"Hilflosenentschädigung IV Minderjährige","IV-HE leicht, zu Hause",16.80,"CHF / Tag","bsv26","Für Minderjährige mit Anspruch; Tagessatz.");
add(["iv","hilflos"],"Hilflosenentschädigung IV Minderjährige","IV-HE mittel, zu Hause",42,"CHF / Tag","bsv26","Für Minderjährige mit Anspruch; Tagessatz.");
add(["iv","hilflos"],"Hilflosenentschädigung IV Minderjährige","IV-HE schwer, zu Hause",67.20,"CHF / Tag","bsv26","Für Minderjährige mit Anspruch; Tagessatz.");
add(["assistenz","iv"],"Assistenzbeitrag IV","Ordentlicher Stundenansatz",35.30,"CHF / Stunde","bsv26","Nicht frei verfügbare Pauschale; konkrete Anspruchs-/Abrechnungsregeln beachten.");
add(["assistenz","iv"],"Assistenzbeitrag IV","Ansatz besondere Pflege",52.95,"CHF / Stunde","bsv26","Nach den Voraussetzungen für besondere Pflege.");
add(["assistenz","iv"],"Assistenzbeitrag IV","Höchstbetrag Nachtdienst",169.10,"CHF / Nacht","bsv26","Maximale Entschädigung pro Nacht gemäss amtlicher Übersicht.");
add(["iv","hilflos"],"Intensivpflegezuschlag","Ab mindestens 4 Stunden Pflegeaufwand",33.60,"CHF / Tag","bsv26","Minderjährige zu Hause nach Spezialregeln.");
add(["iv","hilflos"],"Intensivpflegezuschlag","Ab mindestens 6 Stunden Pflegeaufwand",58.80,"CHF / Tag","bsv26","Minderjährige zu Hause nach Spezialregeln.");
add(["iv","hilflos"],"Intensivpflegezuschlag","Ab mindestens 8 Stunden Pflegeaufwand",84,"CHF / Tag","bsv26","Minderjährige zu Hause nach Spezialregeln.");
add(["ahvbeitrag","ahv","steuerung"],"Beiträge AHV/IV/EO","AHV Beitrag Arbeitnehmer",4.35,"% Bruttolohn","bsvB","Arbeitnehmeranteil; zusätzlich IV, EO und ggf. ALV.");
add(["ahvbeitrag","iv","steuerung"],"Beiträge AHV/IV/EO","IV Beitrag Arbeitnehmer",0.70,"% Bruttolohn","bsvB","Arbeitnehmeranteil.");
add(["ahvbeitrag","eo","steuerung"],"Beiträge AHV/IV/EO","EO Beitrag Arbeitnehmer",0.25,"% Bruttolohn","bsvB","Arbeitnehmeranteil.");
add(["ahvbeitrag","ahv","iv","eo"],"Beiträge AHV/IV/EO","Gesamt AHV/IV/EO Arbeitnehmer",5.30,"% Bruttolohn","bsvB","Arbeitgeber bezahlt ebenfalls 5,30 %; zusammen 10,60 %.");
add(["ahvbeitrag","ahv","iv","eo"],"Beiträge AHV/IV/EO","Gesamt AHV/IV/EO Arbeitgeber + Arbeitnehmer",10.60,"% AHV-pflichtiger Lohn","bsvB","Paritätischer Gesamtbeitrag (ohne Verwaltungskosten und weitere Abgaben).");
add(["alv","ahvbeitrag"],"Beiträge ALV","ALV Beitrag Arbeitnehmer",1.10,"% bis Lohngrenze","bsvB","Bis zum maximal versicherten Jahresverdienst; Arbeitgeber zusätzlich 1,10 %.");
add(["alv","ahvbeitrag"],"Beiträge ALV","ALV Beitrag total",2.20,"% bis Lohngrenze","bsvB","Gesamtbeitrag Arbeitgeber und Arbeitnehmer auf dem ALV-pflichtigen Lohn.");
add(["alv","ahvbeitrag"],"Beiträge ALV","Maximal versicherter Jahresverdienst",148200,"CHF / Jahr","bsvB","Obergrenze für die ALV-Beitragspflicht; nicht pauschal auf AHV-Beiträge übertragen.");
add(["ahvbeitrag","ahv"],"Beiträge AHV/IV/EO","Mindestbeitrag (entsprechende Personengruppen)",530,"CHF / Jahr","bsv26","Mindestbeitrag AHV/IV/EO gemäss Übersicht; für Arbeitnehmende gilt die Berechnung aus Lohn, nicht pauschal dieser Betrag.");
add(["ahvbeitrag","ahv"],"Beiträge AHV/IV/EO","Untere Grenze sinkende Skala Selbstständigerwerbende",10100,"CHF / Jahr","bsv26","Selbstständige: sinkende Beitragsskala in bestimmtem Einkommensbereich.");
add(["ahvbeitrag","ahv"],"Beiträge AHV/IV/EO","Obere Grenze sinkende Skala Selbstständigerwerbende",60500,"CHF / Jahr","bsv26","Oberer Rand der besonderen Skala; keine lineare Vollberechnung unter diesem Wert.");
add(["el","uel"],"EL – allgemeiner Lebensbedarf","Alleinstehende",20670,"CHF / Jahr","bsv26","Gesetzlich anerkannter Pauschalbetrag für den allgemeinen Lebensbedarf in der jährlichen EL-Berechnung; nicht die gesamte Leistung.");
add(["el","uel"],"EL – allgemeiner Lebensbedarf","Ehepaare",31005,"CHF / Jahr","bsv26","Lebensbedarf als eine von mehreren EL-Berechnungspositionen.");
add(["el","uel"],"EL – allgemeiner Lebensbedarf","Kind vor 11. Geburtstag",7590,"CHF / Jahr","bsv26","Bei der EL-Berechnung können für mehrere Kinder Sonderregeln gelten.");
add(["el","uel"],"EL – allgemeiner Lebensbedarf","Kind nach 11. Geburtstag",10815,"CHF / Jahr","bsv26","Altersabhängiger Pauschalbetrag; Mehrkindregeln gesondert prüfen.");
add(["el","wohnkosten"],"EL – Mietzinsmaxima","Alleinstehende, Mietzinsregion 1",18900,"CHF / Jahr","bsvELM","Rechtslage/Region nach amtlicher Einteilung prüfen; nicht mit Sozialhilfe-Mietzinslimiten verwechseln.");
add(["el","wohnkosten"],"EL – Mietzinsmaxima","Alleinstehende, Mietzinsregion 2",18300,"CHF / Jahr","bsvELM","Rechtslage/Region nach amtlicher Einteilung prüfen.");
add(["el","wohnkosten"],"EL – Mietzinsmaxima","Alleinstehende, Mietzinsregion 3",16680,"CHF / Jahr","bsvELM","Rechtslage/Region nach amtlicher Einteilung prüfen.");
add(["bvg","bvglohn"],"BVG-Obligatorium","Eintrittsschwelle Jahreslohn",22680,"CHF / Jahr","bsv26","Versicherungspflicht abhängig von Alter, Anstellung, Status und weiteren gesetzlichen Voraussetzungen.");
add(["bvg","bvglohn"],"BVG-Obligatorium","Koordinationsabzug",26460,"CHF / Jahr","bsv26","Im BVG-Obligatorium; weitergehende Vorsorgeeinrichtungen können abweichen.");
add(["bvg","bvglohn"],"BVG-Obligatorium","Oberer Grenzlohn",90720,"CHF / Jahr","bsv26","Grenzlohn für den obligatorischen BVG-Bereich.");
add(["bvg","bvglohn"],"BVG-Obligatorium","Minimaler koordinierter Lohn",3780,"CHF / Jahr","bsv26","Mindestansatz, sofern obligatorische Unterstellung besteht.");
add(["bvg","bvglohn"],"BVG-Obligatorium","Maximal koordinierter Lohn",64260,"CHF / Jahr","bsvBV","CHF 90’720 minus CHF 26’460.");
add("bvg","BVG-Obligatorium","Mindestzinssatz 2026",1.25,"% / Jahr","bsvMin","Gesetzlicher Mindestzinssatz für BVG-Obligatorium im Jahr 2026; ab 2027 angekündigt auf 2 % erhöht.", "2026");
add(["dritte","ahv"],"Säule 3a","Maximale Einzahlung mit Pensionskasse",7258,"CHF / Jahr","bsv26","Steuerlich maximal abzugsfähige Einzahlung bei Zugehörigkeit zu einer Vorsorgeeinrichtung und weiteren Bedingungen.");
add(["dritte","ahv"],"Säule 3a","Absolute Obergrenze ohne Pensionskasse",36288,"CHF / Jahr","bsv26","Nur bis zu 20 % des massgebenden Erwerbseinkommens und unter gesetzlichen Voraussetzungen; CHF 36’288 ist keine pauschal zulässige Einzahlung.");
add(["alv","uel"],"Arbeitslosenentschädigung","Regulärer Ersatzsatz",70,"% versicherter Verdienst","alvDetail","Grundsatz in den übrigen Fällen; konkreter Anspruch und Taggeld berechnen sich nach AVIG.");
add(["alv","uel"],"Arbeitslosenentschädigung","Erhöhter Ersatzsatz bei gesetzlichen Bedingungen",80,"% versicherter Verdienst","alvDetail","Zum Beispiel bei bestimmten Unterhalts- und anderen Bedingungen; keine freie Wahl.");
add(["kvg","gesundheitskosten"],"KVG – Kostenbeteiligung","Ordentliche Franchise Erwachsene",300,"CHF / Jahr","bag","Wahlfranchisen möglich; für Kinder beträgt die ordentliche Franchise CHF 0.");
add(["kvg","gesundheitskosten"],"KVG – Kostenbeteiligung","Höchste Wahlfranchise Erwachsene",2500,"CHF / Jahr","bagFr","Eine höhere Franchise reduziert meist die Prämie, erhöht aber die mögliche Selbstbelastung.");
add(["kvg","gesundheitskosten"],"KVG – Kostenbeteiligung","Selbstbehalt, Grundsatz",10,"% der Kosten nach Franchise","bag","Maximale jährliche Höhe und Spezialfälle beachten.");
add(["kvg","gesundheitskosten"],"KVG – Kostenbeteiligung","Selbstbehalt Maximum Erwachsene",700,"CHF / Jahr","bag","Ohne Franchise und weitere mögliche Kosten wie Spitalbeitrag.");
add(["kvg","gesundheitskosten"],"KVG – Kostenbeteiligung","Selbstbehalt Maximum Kinder",350,"CHF / Jahr","bag","Kinder haben grundsätzlich keine ordentliche Franchise.");
add(["famz","haushalt"],"Familienzulagen","Bundesminimum Kinderzulage",215,"CHF / Monat","bsvFam2","Kantonal höhere Ansätze möglich; Anspruchsvoraussetzungen und Prioritätsregeln separat prüfen.");
add(["famz","haushalt"],"Familienzulagen","Bundesminimum Ausbildungszulage",268,"CHF / Monat","bsvFam2","Kantonal höhere Ansätze möglich; kindbezogene Bedingungen prüfen.");
add(["eo","famz"],"EO bei Elternschaft","Ersatzsatz",80,"% früheres durchschnittliches Erwerbseinkommen","bsvMut","Entschädigung auf Taggeldbasis, spezifische EO-Art und Anspruchsbedingungen beachten.");
add(["eo","famz"],"EO bei Elternschaft","Höchsttaggeld",220,"CHF / Tag","bsvMut","Für die in den amtlichen Angaben erfassten Elternschaftsentschädigungen.");
add("eo","Mutterschaftsentschädigung","Höchstdauer",98,"Tage","bsvMut","14 Wochen bei gesetzlichen Voraussetzungen; Nicht-Erwerbstätigkeit vor der Geburt und Ausnahmen beachten.");
add("eo","Entschädigung anderer Elternteil","Höchstdauer Taggelder",14,"Taggelder","bsvF","Zwei Wochen Urlaub unter den gesetzlichen Regeln; maximal CHF 3’080 bei CHF 220 je Taggeld.");
add(["sozialhilfe","grundbedarf","haushalt","mittel","sil","graubuenden"],"Sozialhilfe – SKOS-Empfehlung","Grundbedarf Einpersonenhaushalt",1061,"CHF / Monat","skos","SKOS-Empfehlung für einen Privathaushalt ab 2025, 2026 weiter als Referenz; nicht automatisch für alle Kantone verbindlich.","2026","Schweiz, SKOS-Empfehlung","Fachliche Empfehlung");
add(["graubuenden","sozialhilfe","grundbedarf"],"Sozialhilfe Graubünden","Ordentlicher Grundbedarf Einzelperson",1061,"CHF / Monat","gr","Der Kanton Graubünden beschloss die Erhöhung von CHF 1’031 auf CHF 1’061 mit Wirkung auf 2025. Besondere Haushalts-/Statusregelungen getrennt prüfen.","2026","Graubünden, ordentliche Sozialhilfe","Kantonal beschlossen");
D.v6={rates:R,sources:SOURCES,referenceYear:2026,checkedDate:"23.11.2026",limits:[
"Alle numerischen Werte beziehen sich auf die bezeichnete Gruppe, den Sachbereich und das Jahr 2026, sofern nicht anders vermerkt.",
"Nicht jedes Thema hat einen einheitlichen Franken-Tarif; beispielsweise SIL, IPV, Wohnkosten und IV-Hilfsmittel sind individualisiert oder an andere Tarife gebunden.",
"Individuelle Anspruchsberechnung erfordert geltendes Recht, Versicherungs-/Erwerbsbiografie, Status, Gemeinde, Haushalt und weitere Tatsachen.",
"Werte werden statisch ausgeliefert und aktualisieren sich nicht automatisch. Ab 2027 sind neue gesetzliche Jahresansätze separat zu überprüfen."
]};
})();