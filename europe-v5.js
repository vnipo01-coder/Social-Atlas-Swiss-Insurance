/* SOCIAL ATLAS V5 – MISSOC-orientierte Ländervertiefung, qualitativ und ohne erfundene Zahlen */
(()=>{"use strict";const D=ATLAS_DB;
const dims=["Finanzierung","Gesundheitsversorgung","Geldleistungen bei Krankheit","Mutterschaft / Elternschaft","Invalidität","Altersvorsorge","Hinterlassenenleistungen","Arbeitsunfälle / Berufskrankheit","Familienleistungen","Arbeitslosigkeit","Garantierte Mindestsicherung","Langzeitpflege"];
const matrix={
CH:[
"AHV/IV/EO über Beiträge und öffentliche Mittel; berufliche Vorsorge kapitalgedeckt; KVG mit eigenen Prämien.",
"Obligatorische Krankenpflegeversicherung nach KVG; kantonale Prämienverbilligung möglich.",
"Lohnfortzahlung und mögliche Krankentaggeldlösungen; abhängig von Arbeits- und Versicherungsrecht.",
"Mutterschaftsentschädigung und weitere Leistungen der EO; gesetzlich unterschiedliche Anspruchsgruppen.",
"IV mit Eingliederung und gegebenenfalls Renten; BVG und EL als mögliche Schnittstellen.",
"AHV als erste, BVG als zweite, private Vorsorge als dritte Säule; EL nach Spezialrecht.",
"AHV-Hinterlassenenrenten und Leistungen der beruflichen Vorsorge nach Voraussetzungen.",
"UVG für versicherte Unfälle und Berufskrankheiten; KVG für Fälle ohne entsprechende UVG-Deckung.",
"Familienzulagen nach FamZG und kantonalem Recht; Prioritätsregeln können greifen.",
"ALV mit Anspruchsvoraussetzungen nach AVIG und arbeitsmarktlichen Massnahmen.",
"Bedürftigkeitsabhängige wirtschaftliche Sozialhilfe, geregelt durch die Kantone.",
"Pflegebezogene Leistungen über unterschiedliche Versicherungs- und Unterstützungsinstrumente."
],
DE:[
"Sozialversicherung mit Beiträgen von Arbeitgebenden und Versicherten; weitere Leistungen steuerfinanziert.",
"Gesetzliche und private Krankenversicherung mit unterschiedlicher rechtlicher Grundlage.",
"Entgeltfortzahlung und gegebenenfalls Krankengeld der Krankenversicherung.",
"Mutterschutz und familienpolitische Leistungen wie Elterngeld unter eigenen Voraussetzungen.",
"Erwerbsminderungsrente und medizinische bzw. berufliche Rehabilitation nach gesetzlichem Rentenrecht.",
"Gesetzliche Rentenversicherung, ergänzt durch betriebliche und private Altersvorsorge.",
"Witwen-, Witwer- und Waisenrenten nach den Regeln der gesetzlichen Rentenversicherung.",
"Gesetzliche Unfallversicherung mit berufsbezogenem Schutz und Rehabilitation.",
"Kindergeld und weitere Leistungen für Familien unter jeweils eigenen Rechtsgrundlagen.",
"Arbeitslosenversicherung mit Arbeitslosengeld und Leistungen zur Arbeitsförderung.",
"Steuerfinanzierte bedarfsbezogene Grundsicherung und Sozialhilfe nach geltendem SGB-Recht.",
"Soziale Pflegeversicherung und ergänzende Unterstützung mit eigener Anspruchsprüfung."
],
FR:[
"Beiträge, Steuern und andere öffentliche Finanzierungsquellen für verschiedene Sicherungszweige.",
"Assurance maladie als Kern der gesetzlichen Gesundheitsabsicherung; ergänzende Absicherungen möglich.",
"Indemnités journalières bei Krankheit nach Bedingungen der französischen Sozialversicherung.",
"Leistungen für Mutterschaft und Elternschaft unter gesetzlichen Versicherungs- und Erwerbsregeln.",
"Pension d'invalidité und weitere Hilfen; Gesundheits- und Erwerbskriterien sind zu unterscheiden.",
"Mehrgliedrige Alterssicherung mit gesetzlichen régime und ergänzenden Systemen.",
"Leistungen für Hinterlassene nach Art der Rentenversicherung und persönlichen Voraussetzungen.",
"Protection gegen accidents du travail und maladies professionnelles.",
"Familienleistungen und unterstützende Leistungen, insbesondere über zuständige CAF-Strukturen.",
"Arbeitslosigkeitsabsicherung mit besonderen Voraussetzungen und zuständigen Institutionen.",
"Bedarfsorientierte Mindestsicherung, darunter je nach Situation RSA und andere Instrumente.",
"Pflege- und Unterstützungsleistungen bei Abhängigkeit und Alter nach nationalen Vorgaben."
],
IT:[
"Sozialbeiträge und staatliche Finanzierung für verschiedene Leistungen; starke Rolle von INPS.",
"Servizio Sanitario Nazionale mit nationalem Rahmen und regionalem Vollzug.",
"Indennità di malattia und weitere Absicherungen, abhängig von Erwerbssituation und Leistung.",
"Indennità di maternità, congedi und andere Familienleistungen nach spezifischen Voraussetzungen.",
"Invaliditätsleistungen unterschiedlicher rechtlicher Kategorien, unter anderem über INPS.",
"Staatliche Rentenversicherung mit verschiedenen Anspruchs- und Beitragsvoraussetzungen.",
"Pensioni ai superstiti unter gesetzlichen Voraussetzungen.",
"INAIL als zentraler Träger für versicherte Arbeitsunfälle und Berufskrankheiten.",
"Assegno unico e universale und weitere Familienunterstützung.",
"NASpI und andere Leistungen bei unfreiwilligem Arbeitsplatzverlust unter Voraussetzungen.",
"Verschiedene bedarfsabhängige Unterstützungsinstrumente, deren Namen und Kriterien sich ändern können.",
"Unterstützung bei Pflege- und Hilfebedarf über mehrere institutionelle und finanzielle Wege."
],
AT:[
"Beiträge zur Sozialversicherung und ergänzende steuerfinanzierte Leistungen.",
"Gesetzliche Krankenversicherung mit zuständigen Trägern und geregeltem Leistungsumfang.",
"Entgeltfortzahlung und Krankengeld nach Arbeits- und Sozialversicherungsrecht.",
"Wochengeld, Karenzregelungen und weitere Familienleistungen unter eigenständigen Bedingungen.",
"Invaliditäts- bzw. Berufsunfähigkeitspension und Rehabilitationsleistungen nach einschlägigem Recht.",
"Gesetzliche Pensionsversicherung, mögliche zusätzliche betriebliche und private Vorsorge.",
"Witwen-, Witwer- und Waisenpensionen nach Pensionsrecht.",
"Unfallversicherung insbesondere bei Arbeitsunfällen und Berufskrankheiten.",
"Familienbeihilfe und weitere kind- bzw. familienbezogene Leistungen.",
"Arbeitslosenversicherung und Vermittlungsleistungen über die zuständigen Stellen.",
"Sozialhilfe beziehungsweise landesspezifische Mindestsicherungsregeln.",
"Pflegegeld und ergänzende Pflege- und Betreuungsangebote."
],
LI:[
"Eigenständige Sozialversicherungsbeiträge sowie öffentliche und weitere Finanzierungen.",
"Krankenversicherung unter liechtensteinischem Recht; Zuständigkeiten gesondert prüfen.",
"Absicherung bei Krankheit mit arbeits- und versicherungsrechtlichen Komponenten.",
"Mutterschafts- und familienbezogene Leistungen nach nationalem Recht.",
"Liechtensteinische Invalidenversicherung und mögliche ergänzende Leistungen.",
"AHV und berufliche Vorsorge mit eigenständigen liechtensteinischen Regeln.",
"Hinterlassenenrenten nach AHV und gegebenenfalls beruflicher Vorsorge.",
"Gesetzlich geregelte Unfallversicherung mit separatem Leistungsbereich.",
"Familienzulagen über zuständige Familienausgleichsstrukturen.",
"Arbeitslosenversicherung und arbeitsmarktliche Massnahmen nach liechtensteinischem Recht.",
"Wirtschaftliche Sozialhilfe über die zuständigen staatlichen Stellen.",
"Pflegeunterstützung und weitere Leistungen nach nationalen Zuständigkeiten."
]
};
D.missocDimensions=dims;
D.countries.forEach(c=>{c.missoc=dims.map((dim,i)=>({dimension:dim,detail:matrix[c.id][i]}));c.missocSource={label:"EU-Kommission – MISSOC: europäischer Sozialschutzvergleich",url:"https://employment-social-affairs.ec.europa.eu/policies-and-activities/moving-working-europe/eu-social-security-coordination/eu-mutual-information-system-social-protection-missoc_en"};});
D.missocDisclaimer="Diese eigenen, vereinfachten Länderzusammenfassungen sind entlang der MISSOC-Gliederung strukturiert. Sie sind keine wörtliche Übernahme und keine vollständige, von der Kommission validierte Wiedergabe des nationalen Rechtsstands.";
})();