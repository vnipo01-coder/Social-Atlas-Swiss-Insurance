/* Social Atlas 16 — Volltextbasierte Studienbibliothek. Alle Aufsätze sind eigenständig auf Deutsch geschrieben.
 * Die Links führen zu tatsächlich zugänglichen HTML-Volltexten, nicht zu Buchumschlägen.
 */
(()=>{"use strict";const D=ATLAS_DB;
if(!D.v13Papers||!D.v14Longreads)throw Error("V16 braucht V15 Studienbestand");
const originals={
 diamond2013:{fulltextUrl:"https://pmc.ncbi.nlm.nih.gov/articles/PMC4084861/",verification:"Volltext: PubMed Central (Autorenmanuskript)",note:"Narrativer wissenschaftlicher Review. Keine einzelne randomisierte Studie; Aussagen zu Training differenziert lesen."},
 mcewen2009full:{authors:"Bruce S. McEwen",year:2009,title:"The Brain is the Central Organ of Stress and Adaptation",reference:"NeuroImage / publiziert 2009 · PMID 19501171",type:"Frei zugänglicher neurowissenschaftlicher Review",method:"Narrative Integration human- und tierexperimenteller Forschung zu neuronalen, hormonellen und psychosozialen Stressreaktionen.",finding:"Stressanpassung entsteht aus Rückkopplungen zwischen Gehirn, Körper und Umwelt; Belastung ist nicht auf einzelne Botenstoffe oder Regionen reduzierbar.",limit:"Mechanismen aus Tierstudien und Gruppenbefunden dürfen nicht als individuelle Diagnosen oder einfache Kausalformeln gelesen werden.",url:"https://pubmed.ncbi.nlm.nih.gov/19501171/",fulltextUrl:"https://pmc.ncbi.nlm.nih.gov/articles/PMC2731652/",verification:"Volltext: PubMed Central (Autorenmanuskript)",topics:["psy-stress","neuro-exekutiv"]},
 kirkbride2024full:{authors:"James B. Kirkbride und Kolleginnen und Kollegen",year:2024,title:"The social determinants of mental health and disorder: evidence, prevention and recommendations",reference:"World Psychiatry 23(1), 58–90 · DOI 10.1002/wps.21160",type:"Breiter evidenzbasierter narrativer Forschungsreview",method:"Mehrdimensionaler Überblick über Längsschnitt- und Interventionsbefunde, soziale Lebensbedingungen, Ungleichheiten und Präventionsansätze.",finding:"Wohnen, finanzielle Ressourcen, soziale Beziehungen und Diskriminierung sind mit psychischer Gesundheit über den Lebenslauf verknüpft; strukturelle Prävention ist neben klinischer Versorgung relevant.",limit:"Review, keine neue randomisierte Interventionsstudie; Evidenz schwerpunktmässig aus Ländern mit hohem Einkommen, Qualität und Kausalidentifikation heterogen.",url:"https://doi.org/10.1002/wps.21160",fulltextUrl:"https://onlinelibrary.wiley.com/doi/full/10.1002/wps.21160",verification:"Frei zugänglicher Volltext: Wiley / World Psychiatry",topics:["soz-ungleichheit","psy-stress","sa-profession","sa-evaluation"]},
 nicolaou2025full:{authors:"Mary Nicolaou, Laura S. Shields-Zeeman, Junus M. van der Wal und Karien Stronks",year:2025,title:"Preventing depression in high-income countries—A systematic review of studies evaluating change in social determinants",reference:"PLOS ONE 20(5), e0323378 · DOI 10.1371/journal.pone.0323378",type:"Systematische Forschungsübersicht",method:"Präregistrierte systematische Literatursuche, 135 eingeschlossene Untersuchungen zu Veränderungen sozialer Determinanten und psychischer Gesundheit.",finding:"Die Synthese stützt die Relevanz von Erwerbsbedingungen, Einkommenssicherheit, Wohnen und wohlfahrtsstaatlichen Veränderungen für depressive Outcomes; methodische Qualität schwankt.",limit:"Heterogene Designs und Outcome-Masse, viele Studien aus USA und UK. Kausale Mechanismen selten direkt getestet; keine Prognose für Schweizer Einzelfälle.",url:"https://doi.org/10.1371/journal.pone.0323378",fulltextUrl:"https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0323378",verification:"Open-Access-Volltext: PLOS ONE",topics:["soz-ungleichheit","sa-profession","sa-evaluation"]},
 bellamy2006full:{authors:"Jennifer L. Bellamy, Sarah E. Bledsoe und Dorian E. Traube",year:2006,title:"The Current State of Evidence-Based Practice in Social Work: A Review of the Literature and Qualitative Analysis of Expert Interviews",reference:"Journal of Evidence-Based Social Work 3(1) · DOI 10.1300/J394v03n01_02",type:"Narrative Literaturübersicht mit qualitativen Interviews",method:"Literaturrecherche und acht gezielt ausgewählte Experteninterviews zu Barrieren bei der Umsetzung wissenschaftlicher Erkenntnisse.",finding:"Forschungszugang, Ressourcen, Ausbildung, institutionelle Kultur und Passung zur Praxis beeinflussen die Umsetzung evidenzinformierter Interventionen.",limit:"Acht Expertengespräche sind keine repräsentative Befragung; älterer US-bezogener Forschungskontext; kein Wirksamkeitsnachweis spezifischer Sozialhilfemassnahmen.",url:"https://doi.org/10.1300/J394v03n01_02",fulltextUrl:"https://pmc.ncbi.nlm.nih.gov/articles/PMC2943634/",verification:"Volltext: PubMed Central (Autorenmanuskript)",topics:["sa-profession","sa-evaluation","sa-gespraechsfuehrung"]}
};
for(const [id,source] of Object.entries(originals)){
 if(id==="diamond2013"){if(!D.v13Papers[id])throw Error("V16 Diamond fehlt");Object.assign(D.v13Papers[id],source);}
 else{if(D.v13Papers[id])throw Error("V16 Quelle doppelt: "+id);D.v13Papers[id]=source}
}
const D16={essays:{},sources:originals,version:"16",verifiedFullText:"2026-11-25"};
D.v16Essays=D16.essays;
D.v16FulltextSources=originals;
D.v16ReadingEdition="2026-11-25";
window.ATLAS_V16_EDITORIAL={
 data:D16,
 add(id,essay){
  if(!D.topics.some(t=>t.id===id))throw Error("V16 unbekannter Artikel "+id);
  if(D16.essays[id])throw Error("V16 Artikel doppelt "+id);
  if(!essay.chapters||essay.chapters.length<4)throw Error("V16 zu wenig Kapitel "+id);
  for(const [i,c] of essay.chapters.entries()){
   if(!c.title||!Array.isArray(c.paragraphs)||c.paragraphs.length<3)throw Error("V16 Kapitel muss Fliesstexte enthalten "+id+" "+i);
   if(!Array.isArray(c.sources)||!c.sources.length||c.sources.some(k=>!D.v13Papers[k]?.fulltextUrl))throw Error("V16 echte Volltextquelle fehlt "+id+" "+i);
  }
  D16.essays[id]=essay;
 },
 source:id=>D.v13Papers[id],
 essays:()=>Object.keys(D16.essays),
 count:()=>Object.keys(D16.essays).length
};
})();