/* SOCIAL ATLAS V5 — zusätzliche ausgewählte Normen, Überblick keine Vollständigkeit */
(()=>{"use strict";const D=ATLAS_DB;const u={
 BV:"https://www.fedlex.admin.ch/eli/cc/1999/404/de",
 AHVG:"https://www.fedlex.admin.ch/eli/cc/63/837_843_843/de",
 IVG:"https://www.fedlex.admin.ch/eli/cc/1959/827_857_845/de",
 ELG:"https://www.fedlex.admin.ch/eli/cc/2007/804/de",
 BVG:"https://www.fedlex.admin.ch/eli/cc/1983/797_797_797/de",
 ATSG:"https://www.fedlex.admin.ch/eli/cc/2002/510/de",
 KVG:"https://www.fedlex.admin.ch/eli/cc/1995/1328_1328_1328/de",
 UVG:"https://www.fedlex.admin.ch/eli/cc/1982/1676_1676_1676/de",
 AVIG:"https://www.fedlex.admin.ch/eli/cc/1982/2184_2184_2184/de",
 FamZG:"https://www.fedlex.admin.ch/eli/cc/2008/51/de",
 OR:"https://www.fedlex.admin.ch/eli/cc/27/317_321_377/de",
 EU:"https://eur-lex.europa.eu/eli/reg/2004/883/oj"
};
const entries=[
["bv112","BV","Art. 112 BV","Alters-, Hinterlassenen- und Invalidenversicherung","Verfassung","Verfassungsrechtliche Grundsätze der staatlichen Vorsorge.",["ahv","iv","steuerung"]],
["bv112a","BV","Art. 112a BV","Ergänzungsleistungen","Verfassung","Verfassungsrechtliche Grundlage der Ergänzungsleistungen.",["el","ahv","iv"]],
["bv115","BV","Art. 115 BV","Unterstützung Bedürftiger","Verfassung","Regelt im Grundsatz die kantonale Zuständigkeit zur Unterstützung Bedürftiger; Ausnahmen und Spezialrecht beachten.",["sozialhilfe","steuerung"]],
["ahvg3","AHVG","Art. 3 AHVG","Beitragspflichtige Personen","AHV","Grundsätze von Beginn und Ende der AHV-Beitragspflicht.",["ahv","ahvbeitrag"]],
["ahvg29","AHVG","Art. 29 AHVG","Ordentliche Renten","AHV","Gesetzliche Grundregeln zu ordentlichen Alters- und Hinterlassenenrenten.",["ahv"]],
["ahvg34","AHVG","Art. 34 AHVG","Berechnung der Altersrente","AHV","Gesetzliche Grundsätze zur Höhe der AHV-Altersrente.",["ahv","ahvbeitrag"]],
["ivg28a","IVG","Art. 28a IVG","Bemessung des Invaliditätsgrades","IV","Regelt die Bemessung des Invaliditätsgrades mit Bezug zum ATSG.",["iv","iveingliederung"]],
["ivg29","IVG","Art. 29 IVG","Beginn und Auszahlung des Rentenanspruchs","IV","Bestimmungen zum zeitlichen Beginn des IV-Rentenanspruchs.",["iv"]],
["elg10","ELG","Art. 10 ELG","Anerkannte Ausgaben","EL","Definiert gesetzlich berücksichtigungsfähige Ausgaben in der EL-Berechnung.",["el","gesundheitskosten"]],
["elg11","ELG","Art. 11 ELG","Anrechenbare Einnahmen","EL","Regelt die Anrechnung von Einnahmen und weiteren wirtschaftlichen Grössen für EL.",["el","mittel"]],
["elg14","ELG","Art. 14 ELG","Krankheits- und Behinderungskosten","EL","Rechtsgrundlage für die Vergütung bestimmter zusätzlicher Krankheits- und Behinderungskosten.",["el","medizinsh"]],
["bvg7","BVG","Art. 7 BVG","Mindestlohn und Alter","BVG","Gesetzliche Vorgaben zu Lohn- und Altersbedingungen der obligatorischen Vorsorge.",["bvg","bvglohn"]],
["bvg14","BVG","Art. 14 BVG","Höhe der Altersrente","BVG","Gesetzliche Regelung zum Umwandlungssatz im obligatorischen Vorsorgebereich.",["bvg"]],
["bvg16","BVG","Art. 16 BVG","Altersgutschriften","BVG","Regelt die Altersgutschriften der obligatorischen beruflichen Vorsorge.",["bvg","bvglohn"]],
["atsg6","ATSG","Art. 6 ATSG","Arbeitsunfähigkeit","Verfahren","Definiert Arbeitsunfähigkeit im Sozialversicherungsrecht.",["iv","atsg","krankentaggeld"]],
["atsg7","ATSG","Art. 7 ATSG","Erwerbsunfähigkeit","Verfahren","Definiert Erwerbsunfähigkeit und ihre Beurteilungsgrundlage.",["iv","atsg"]],
["atsg8","ATSG","Art. 8 ATSG","Invalidität","Verfahren","Gesetzliche Begriffsbestimmung der Invalidität.",["iv","atsg"]],
["atsg9","ATSG","Art. 9 ATSG","Hilflosigkeit","Verfahren","Umschreibt den sozialversicherungsrechtlichen Begriff der Hilflosigkeit.",["hilflos","iv","atsg"]],
["atsg27","ATSG","Art. 27 ATSG","Auskunft und Beratung","Verfahren","Regelt Auskunfts- und Beratungspflichten nach den gesetzlichen Voraussetzungen.",["atsg","verfahren"]],
["atsg28","ATSG","Art. 28 ATSG","Mitwirkung beim Vollzug","Verfahren","Regelt Mitwirkungspflichten im sozialversicherungsrechtlichen Vollzug.",["atsg","verfahren","iv"]],
["atsg44","ATSG","Art. 44 ATSG","Gutachten","Verfahren","Bestimmungen zur Begutachtung im sozialversicherungsrechtlichen Verfahren.",["atsg","iv","verfahren"]],
["kvg25","KVG","Art. 25 KVG","Allgemeine Leistungen bei Krankheit","Krankenversicherung","Gesetzliche Grundordnung der durch die obligatorische Krankenpflegeversicherung übernommenen Krankheitsleistungen.",["kvg","medizinsh"]],
["kvg32","KVG","Art. 32 KVG","Wirksamkeit, Zweckmässigkeit, Wirtschaftlichkeit","Krankenversicherung","Pflichtleistungen müssen nach den gesetzlichen Regeln wirksam, zweckmässig und wirtschaftlich sein.",["kvg","medizinsh"]],
["kvg64","KVG","Art. 64 KVG","Kostenbeteiligung","Krankenversicherung","Gesetzliche Regeln zur Kostenbeteiligung der Versicherten.",["kvg","gesundheitskosten"]],
["uvg10","UVG","Art. 10 UVG","Heilbehandlung","Unfallversicherung","Gesetzliche Grundlagen zu Heilbehandlungsleistungen nach versichertem Unfall.",["uvg","medizinsh"]],
["uvg16","UVG","Art. 16 UVG","Taggeld","Unfallversicherung","Gesetzliche Voraussetzungen und Grundlagen des Unfalltaggeldes.",["uvg","krankentaggeld"]],
["uvg18","UVG","Art. 18 UVG","Invalidität","Unfallversicherung","Grundlage des UVG-Invalidenrentenanspruchs.",["uvg","iv"]],
["avig13","AVIG","Art. 13 AVIG","Beitragszeit","Arbeitslosigkeit","Regelt Voraussetzungen zur Beitragszeit in der Arbeitslosenversicherung.",["alv","uel"]],
["avig15","AVIG","Art. 15 AVIG","Vermittlungsfähigkeit","Arbeitslosigkeit","Gesetzliche Voraussetzungen zur Vermittlungsfähigkeit.",["alv"]],
["avig27","AVIG","Art. 27 AVIG","Höchstzahl der Taggelder","Arbeitslosigkeit","Regelt die maximale Zahl von Taggeldern unter verschiedenen Bedingungen.",["alv","uel"]],
["famzg3","FamZG","Art. 3 FamZG","Arten der Familienzulagen","Familie","Gesetzliche Grundregeln zu Kinder- und Ausbildungszulagen.",["famz"]],
["famzg7","FamZG","Art. 7 FamZG","Anspruchskonkurrenz","Familie","Regeln bei konkurrierenden Familienzulagenansprüchen.",["famz","international"]],
["or324a","OR","Art. 324a OR","Lohnfortzahlung bei Verhinderung","Arbeitsrecht","Arbeitsrechtliche Grundregel der Lohnfortzahlung bei unverschuldeter Arbeitsverhinderung unter den gesetzlichen Voraussetzungen.",["krankentaggeld"]],
["eu4","EU","Art. 4 VO 883/2004","Gleichbehandlung","International","Grundprinzip der Gleichbehandlung im Anwendungsbereich der Verordnung.",["international","europa"]],
["eu6","EU","Art. 6 VO 883/2004","Zusammenrechnung von Zeiten","International","Regelt unter Voraussetzungen die Berücksichtigung bestimmter Zeiten aus anderen beteiligten Staaten.",["international","europa"]],
["eu11","EU","Art. 11 VO 883/2004","Allgemeine Regeln zum anwendbaren Recht","International","Grundregeln zur Bestimmung der anzuwendenden Rechtsvorschriften.",["international","europa"]]
];
const existing=new Set(D.laws.map(l=>l.id));entries.forEach(([id,act,code,title,area,meaning,topics])=>{if(existing.has(id))return;D.laws.push({id,code,title,area,meaning,url:u[act],topics});});
D.topics.forEach(t=>{for(const l of D.laws){if(l.topics.includes(t.id)&&!t.lawIds.includes(l.id))t.lawIds.push(l.id)}});
const iv=D.topics.find(t=>t.id==="iv");if(iv&&!iv.sources.some(s=>s.url==="https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health"))iv.sources.push({label:"WHO – ICF: International Classification of Functioning, Disability and Health",url:"https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health"});
D.legalEditorialNotice="Rechtsverweise zeigen ausgewählte Normen im Kontext. Der Link führt auf den amtlichen Gesetzestext, nicht zwingend direkt zum jeweiligen Artikel. Immer die aktuelle Fassung und das Spezialrecht prüfen.";
})();