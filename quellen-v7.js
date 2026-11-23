/* SOCIAL ATLAS 7 – transparentes Quellenregister, öffentlich überprüfbare Primärquellen.
 * Links sind Literatur- und Gesetzeseinstiege; kein Ersatz einer Prüfung der konkreten Norm.
 */
(()=>{"use strict";const D=ATLAS_DB;const r=[
{id:"BSV-Statistik-2026",label:"BSV – Sozialversicherungen der Schweiz, Taschenstatistik 2026",url:"https://www.bsv.admin.ch/de/svs",cats:["Altersvorsorge","Invalidität","Erwerbsausfall","Gesundheit","Familie & Dienst","Querschnitt"]},
{id:"BSV-ATSG-2026",label:"BSV – ATSG-Notiz 2026, Stand und Entwicklung der Versicherungen",url:"https://www.bsv.admin.ch/de/atsg-notiz-2026",cats:["Querschnitt","Erwerbsausfall","Invalidität"]},
{id:"SKOS-2026",label:"SKOS – Aktuelle Richtlinien 2026 und fachliche Erläuterungen",url:"https://skos.ch/skos-richtlinien/aktuelle-richtlinien",cats:["Sozialhilfe","Kantone"]},
{id:"SKOS-Gesetze",label:"SKOS – Verweise auf die Sozialhilfegesetze der Kantone",url:"https://skos.ch/skos-richtlinien/rechtliches/rechtsgrundlagen/",cats:["Kantone","Sozialhilfe"]},
{id:"BAG",label:"Bundesamt für Gesundheit – Grundversicherung und Prämien",url:"https://www.bag.admin.ch/",cats:["Gesundheit"]},
{id:"EU-MISSOC",label:"Europäische Kommission – MISSOC-Vergleichssystem, zwölf Sicherungsbereiche",url:"https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/eu-mutual-information-system-social-protection-missoc_en",cats:["Europa"]},
{id:"Fedlex",label:"Fedlex – Systematische Sammlung des geltenden Bundesrechts",url:"https://www.fedlex.admin.ch/",cats:["Querschnitt"]},
{id:"WHO-ICF",label:"WHO – ICF, Funktionsfähigkeit und Behinderung",url:"https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health",cats:["Invalidität"]}
];
D.topics.forEach(t=>{for(const x of r.filter(x=>x.cats.includes(t.category))){if(!t.sources.some(s=>s.url===x.url))t.sources.push({label:x.label,url:x.url})}});
D.v7Sources={catalog:r,verifiedDate:"23.11.2026",policy:"Die App unterscheidet geltendes Recht, amtliche 2026-Tarife, öffentlich recherchierbare Statistiken und fachliche Einordnung. Eine allgemeine Statistik ist keine individuelle Anspruchsnorm."};
})();