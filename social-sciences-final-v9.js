/* SOCIAL ATLAS 9 – final interdisciplinary graph, cases and quality metadata */
(()=>{"use strict";const D=ATLAS_DB,S=D.v9Science;
const keys=new Set(D.edges.map(e=>[e.from,e.to].sort().join("|")));
const add=(from,to,label="fachliche Perspektive")=>{if(!D.topics.some(t=>t.id===from)||!D.topics.some(t=>t.id===to)||from===to)return;const k=[from,to].sort().join("|");if(keys.has(k))return;keys.add(k);D.edges.push({from,to,label})};
for(const id of S.created){const t=D.topics.find(t=>t.id===id);(t.related||[]).forEach(other=>add(id,other))}
const oldLink={
sozialhilfe:["sa-profession","soz-armut","sa-case","soz-ungleichheit"],
iv:["neuro-icf","sa-case","sa-empowerment"],
alv:["soz-ungleichheit","psy-motivation"],
migration:["soz-intersektionalitaet","soz-stigma","psy-trauma"],
"mig-s":["psy-trauma","soz-exklusion"],
grundbedarf:["soz-armut","soz-ungleichheit"],
integration:["sa-empowerment","sa-partizipation","psy-motivation"],
"sil":["sa-empowerment","sa-ethik"],
kvg:["psy-krise","neuro-icf"],
"medizinsh":["neuro-icf","sucht"],
"graubuenden":["sa-case","sa-systemisch"],
"bvg":["soz-ungleichheit","soz-bourdieu"],
"ahv":["soz-sozialisation","soz-ungleichheit"],
famz:["sa-kinderschutz","soz-sozialisation"],
wohnkosten:["soz-sozialraum","soz-armut"],
subsidiaritaet:["sa-case","sa-ethik"],
"verfahren":["sa-ethik","sa-partizipation"],
"opferhilfe":["psy-trauma","sa-ethik"],
"grstatus":["soz-stigma","soz-intersektionalitaet"],
"rueckerstattung":["sa-ethik","soz-armut"]
};for(const [t,links] of Object.entries(oldLink)){const target=D.topics.find(x=>x.id===t);for(const l of links){add(t,l);if(target&&!target.related.includes(l))target.related.push(l)}}
const example=[
{id:"sa-case-krise",title:"Psychosoziale Krise und koordinierte Hilfe",situation:"Eine Person verliert den Arbeitsplatz, schläft schlecht und hat vorübergehend Schwierigkeiten, Rechnungen zu bezahlen. Mehrere Stellen sind beteiligt.",topics:["sa-case","psy-stress","psy-krise","alv","sozialhilfe"],questions:["Welche unmittelbaren Existenzbedürfnisse sind offen?","Welche Beschwerden sind fachärztlich abzuklären?","Welche Sozialversicherungsansprüche bestehen?","Welche Informationen dürfen mit den beteiligten Stellen ausgetauscht werden?"],steps:["Akute materielle und gesundheitliche Bedarfslage feststellen.","Rechtliche Ansprüche und fachliche Zuständigkeiten zuordnen.","Ziele mit der Person definieren.","Hilfen koordiniert und datensparsam organisieren.","Wirkung und Belastung erneut überprüfen."]},
{id:"sa-ungleichheit-wohnen",title:"Teilhabe, Bildung und Wohnungssuche",situation:"Eine alleinerziehende Person mit geringem Einkommen sucht eine bezahlbare Wohnung und einen Weiterbildungsplatz.",topics:["soz-ungleichheit","soz-armut","soz-bourdieu","soz-sozialraum","sa-empowerment","wohnkosten"],questions:["Welche materiellen Ressourcen und Rechte bestehen?","Welche Angebote sind tatsächlich zugänglich?","Welche Betreuungspflichten bestehen?","Welche strukturellen Hindernisse erschweren Wohnen und Bildung?"],steps:["Materielle Lage und Wohnrecht prüfen.","Ressourcen und konkrete Zugangsbarrieren erfassen.","Wohn-, Bildungs- und Betreuungsträger identifizieren.","Mit der Person realistische Schritte vereinbaren.","Ergebnisse und mögliche strukturelle Hindernisse dokumentieren."]},
{id:"sucht-mehrfachbelastung",title:"Sucht, Schulden und Wohnung – integrierte Unterstützung",situation:"Eine erwachsene Person berichtet über problematischen Alkoholkonsum, Schulden und die Sorge, die Wohnung zu verlieren. Sie wünscht Hilfe ohne Vorwürfe.",topics:["sucht","sucht-viersaeulen","sucht-beratung","sucht-schadensminderung","sucht-komorbid","sa-case","sozialhilfe"],questions:["Besteht unmittelbare medizinische Gefahr, die Fachhilfe erfordert?","Welche Wohn- und Finanzierungsprobleme müssen rasch geklärt werden?","Welche Ziele formuliert die betroffene Person selbst?","Welche spezialisierten Suchthilfen und Versicherungen sind beteiligt?"],steps:["Sicherheit und Dringlichkeit ohne Ferndiagnose abklären.","Wohnung und Existenzsicherung prüfen.","Einvernehmlich spezialisierte Beratung vermitteln.","Fachliche Behandlung und soziale Massnahmen koordinieren.","Vereinbarte Ziele und Unterstützungsbedarf überprüfen."]},
{id:"neuro-icf-reha",title:"Schlaganfall, Teilhabe und berufliche Wiedereingliederung",situation:"Nach einem Schlaganfall erlebt eine Person Einschränkungen im Alltag. Über Klinik, IV, Arbeitgeber und Sozialdienst werden Hilfen besprochen.",topics:["neuro-icf","iv","iveingliederung","sa-case","sa-empowerment"],questions:["Welche körperlichen Funktionen und Aktivitäten sind betroffen?","Welche Umweltbarrieren und Ressourcen bestehen?","Welcher Träger entscheidet über Hilfsmittel, Eingliederung oder Rente?","Wie wird die Sicht der Person einbezogen?"],steps:["Medizinische Befunde und alltagsbezogene Einschränkungen getrennt erfassen.","Teilhabewünsche und Umweltfaktoren nach ICF strukturieren.","Zuständigkeiten der Versicherungen prüfen.","Ziele und Massnahmen interprofessionell abstimmen.","Verlauf, Teilhabe und Versorgungslücken evaluieren."]}
];
for(const c of example)if(!D.cases.some(x=>x.id===c.id))D.cases.push(c);
S.quality={
version:"9.0",date:"2026-11-23",exclusiveAssets:{"three-pillars":"ahv","social-assistance":"sozialhilfe","europe-systems":"europa","coordination":"atsg"},
removed:"Alte kategorieweite Bildwiederholungen und das identische Sechs-Felder-Template wurden entfernt.",
diagramPolicy:"Ein zusätzliches Schaubild nur bei expliziter fachlicher Zuordnung und erklärter Modellgrenze; übrige Artikel verwenden Text und Prüftabellen.",
clinicalPolicy:"ICD und medizinische Diagnostik sind Fachstellen vorbehalten. Psychosoziale Modelle dürfen keine Krankheitszuschreibungen oder individuelle Therapieanleitungen simulieren.",
statisticsPolicy:"Schematische Grafiken enthalten keine erfundenen Datenwerte. Empirische Zahlen benötigen Quelle, Population und Datum."
};
delete D.addScienceTopic;delete D.addScienceTerm;
})();
