/* SOCIAL ATLAS 9 – Wissensmodule Soziale Arbeit und Humanwissenschaften.
   Editorische Inhalte sind Lernmaterial, keine klinische Diagnostik.
*/
(()=>{"use strict";const D=ATLAS_DB;
D.v9Science={
sources:{
ifsw:{label:"IFSW/IASSW – Globale Definition der Sozialen Arbeit",url:"https://www.ifsw.org/what-is-social-work/global-definition-of-social-work/"},
ethics:{label:"IFSW – Global Statement of Ethical Principles",url:"https://www.ifsw.org/global-social-work-statement-of-ethical-principles/"},
standards:{label:"IFSW – Standards und Wissen der Sozialen Arbeit",url:"https://www.ifsw.org/global-standards/"},
icf:{label:"WHO – ICF: International Classification of Functioning",url:"https://www.who.int/classifications/international-classification-of-functioning-disability-and-health"},
icd:{label:"WHO – ICD-11 und klinische Diagnostik",url:"https://www.who.int/news-room/fact-sheets/detail/icd-11"},
clinical:{label:"WHO – Klinische Beschreibungen und diagnostische Anforderungen ICD-11",url:"https://www.who.int/publications-detail-redirect/9789240077263"},
whoadd:{label:"WHO – Substance use and addictive behaviours",url:"https://www.who.int/teams/mental-health-and-substance-use/alcohol-drugs-and-addictive-behaviours/terminology"},
bag:{label:"BAG – Vier-Säulen-Suchtpolitik",url:"https://www.bag.admin.ch/de/vier-saeulen-politik"},
bags:{label:"BAG – Nationale Strategie Sucht",url:"https://www.bag.admin.ch/de/nationale-strategie-sucht"},
infodrog:{label:"Infodrog – Wissen, Sucht und Prävention",url:"https://www.infodrog.ch/de/wissen.html"},
harm:{label:"Infodrog – Schadensminderung",url:"https://www.infodrog.ch/de/wissen/praeventionslexikon/schadensminderung.html"},
oat:{label:"Infodrog – Heroin und Opioide, OAT",url:"https://www.infodrog.ch/de/wissen/suchtformen/heroin-opioide.html"},
index:{label:"Infodrog – Suchtindex: Beratungsangebote",url:"https://suchtindex.infodrog.ch/"},
nida:{label:"NIDA – Drugs, brains and behavior: science of addiction",url:"https://nida.nih.gov/research-topics/addiction-science"},
unicef:{label:"UNICEF – Kinderrechte",url:"https://www.unicef.org/child-rights-convention"},
who:{label:"WHO – Mental health",url:"https://www.who.int/health-topics/mental-health"}
},
categories:["Soziale Arbeit","Soziologie","Psychologie","Neurowissenschaften","Sucht & Gesundheit"],
created:[],
terms:[],
concepts:{},
editorial:"Die Theorieerklärungen sind didaktisch. Empirische Befunde, Arbeitsmodelle, ethische Grundsätze und klinische Diagnosen werden nicht gleichgesetzt. Diagnose und Behandlung gehören in qualifizierte Fachstellen."
};
D.addScienceTopic=(o)=>{
if(D.topics.some(t=>t.id===o.id))throw Error("Duplicate science topic "+o.id);
const srcs=o.sources.map(k=>D.v9Science.sources[k]).filter(Boolean);
if(!o.chapters||o.chapters.length<3)throw Error("Insufficient chapters "+o.id);
const questions=o.questions||[];
const matrix=o.matrix||[];
D.topics.push({id:o.id,title:o.title,short:o.short||o.title.slice(0,7),category:o.category,summary:o.summary,
sections:o.chapters.map(ch=>({heading:ch[0],paragraphs:ch.slice(1)})),steps:o.steps||["Ausgangssituation und Perspektiven der Beteiligten beschreiben","Persönliche, soziale und strukturelle Faktoren systematisch unterscheiden","Theorie und empirische Evidenz zur Erklärung abgleichen","Handlungsmöglichkeiten, Risiken und Beteiligung prüfen","Vereinbarte Schritte dokumentieren und gemeinsam evaluieren"],related:o.related||[],sources:srcs,lawIds:o.lawIds||[],caution:o.caution||"Fachliche Modelle vereinfachen Wirklichkeit. Sie ersetzen keine individuelle Rechtsprüfung und keine klinische Diagnose.",dossier:{chapters:o.chapters.map(ch=>[...ch]),examples:o.examples||[],focus:o.focus||"Theorie und Praxis",research:o.research||"Begriffe, Entstehungsgeschichte, Geltungsbereich, Grenzen und Anwendbarkeit im Feld der Sozialen Arbeit sind getrennt zu beurteilen."}});
D.v7Deep[o.id]={chapters:o.chapters,faq:questions,matrix:matrix.length?matrix:[
["Begriff und Theorie","Was wird beschrieben, was nicht?","Fachquelle und Kontext"],["Einzelfall","Welche Ressourcen und Belastungen sind tatsächlich erkennbar?","Fallaufnahme und Gespräch"],["System","Welche institutionellen und gesellschaftlichen Faktoren wirken?","Sozialraum und Netzwerke"],["Handlung","Welche Intervention ist angemessen und freiwillig möglich?","Zielvereinbarung"],["Evaluation","Wie wird Wirkung erkennbar, welche Grenzen bestehen?","Fachliche Reflexion"]]};
D.v9Science.created.push(o.id);
(o.related||[]).filter(id=>D.topics.some(t=>t.id===id)).forEach(id=>D.edges.push({from:o.id,to:id,label:"fachlicher Bezug"}));
};
D.addScienceTerm=(word,definition,area,topic,extra="")=>{
if(!D.v9Science.categories.includes(area))throw Error("Unknown category "+area);
D.v9Science.terms.push({word,definition,area,topic,extra});
};
})();
