/* SOCIAL ATLAS V6 — kantonale Familienzulagen 2026, BSV-Amtstabelle mit Fussnoten */
(()=>{"use strict";const D=ATLAS_DB;
const SOURCE={label:"BSV – Arten und Ansätze der Familienzulagen nach FamZG, FLG und kantonalem Recht 2026 (Tabelle, Stand 12.12.2025)",url:"https://www.bsv.admin.ch/dam/de/sd-web/acU7RgJgeisY/Arten%20und%20Ans%C3%A4tze%20der%20Familienzulagen_2026.pdf"};
const rows=[
["ZH","215/268","268",null,null,1.025,"Kinderzulage CHF 215 bis 12 Jahre, CHF 268 über 12 Jahre."],
["BE",250,310,null,null,1.5,""],
["LU","215/260",268,1075,1075,1.35,"Kinderzulage CHF 215 bis 12 Jahre, CHF 260 über 12 Jahre."],
["UR",240,290,1200,1200,1.7,""],
["SZ",230,280,1000,null,1.3,""],
["OW",220,270,null,null,1.4,""],
["NW",258,311,null,null,1.5,""],
["GL",215,268,null,null,1.4,""],
["ZG",330,"330/385",null,null,1.35,"Ausbildungszulage CHF 330 bis 18 Jahre und CHF 385 über 18 Jahre."],
["FR","265/285","325/345",1500,1500,2.27,"Erster Betrag für erstes/zweites Kind, zweiter Betrag ab drittem Kind."],
["SO",215,268,null,null,1.25,""],
["BS",275,325,null,null,1.65,""],
["BL",215,268,null,null,1.3,""],
["SH",230,290,null,null,1.3,""],
["AR",230,280,null,null,1.6,""],
["AI",245,298,null,null,1.6,""],
["SG",245,298,null,null,1.8,""],
["GR",240,290,null,null,1.5,""],
["AG",225,278,null,null,1.45,""],
["TG",215,280,null,null,1.4,""],
["TI",215,268,null,null,1.6,""],
["VD","322/365","425/468","1617/3234","1617/3234",2.37,"Erster Betrag bis zwei Kinder, zweiter ab drittem Kind. Bei Geburts-/Adoptionszulage zweiter Betrag bei Mehrlingen bzw. Mehradoptionen. Weitere Sonderregeln für Kinder in Ausbildung unter 16 Jahren."],
["VS","327/435","477/585","2142/3213","2142/3213",2.5,"Erster Betrag bis zwei Kinder, zweiter ab drittem Kind. Geburt/Adoption zweiter Betrag bei Mehrlingen/Mehradoptionen. Weitere Sonderregeln."],
["NE","240/270","320/350",1200,1200,1.8,"Erster Betrag für erstes/zweites Kind, zweiter Betrag ab drittem Kind."],
["GE","311/411","415/515","2073/3073","2073/3073",2.22,"Erster Betrag für erstes/zweites Kind, zweiter ab drittem Kind. Geburt/Adoption zweiter Betrag bei Mehrlingen/Mehradoptionen; weitere Sonderregeln."],
["JU",275,325,1500,1500,2.75,""]
];
const indexed={};rows.forEach(([c,k,e,g,a,fak,note])=>indexed[c]={child:k,education:e,birth:g,adoption:a,employerFAK:fak,note};
const push=(c,title,value,unit,scope,detail,status)=>D.v6.rates.push({id:"famzkanton-"+D.v6.rates.length,topics:["famz"],group:"Familienzulagen nach Kanton 2026",label:c+" – "+title,value,unit,detail,when:"2026",scope:"Kanton "+c+" / "+scope,status,source:SOURCE});
rows.forEach(([c,k,e,g,a,fak,note])=>{
let childExplain=note||"Kantonaler FamZG-Ansatz für anspruchsberechtigte Kinder. Bedingungen und Konkurrenzregeln gelten.";
push(c,"Kinderzulage",k,"CHF / Monat je Kind","Kinderzulage",childExplain,"BSV-Kantonstabelle");
push(c,"Ausbildungszulage",e,"CHF / Monat je Kind","Ausbildungszulage",note||"Kantonaler FamZG-Ansatz, nach gesetzlichen Voraussetzungen und Ausbildungsstatus.","BSV-Kantonstabelle");
if(g!==null)push(c,"Geburtszulage",g,"CHF / einmalig","Geburt",note||"Einmalige kantonale Zulage unter gesetzlichen Voraussetzungen.","BSV-Kantonstabelle");
if(a!==null)push(c,"Adoptionszulage",a,"CHF / einmalig","Adoption",note||"Einmalige kantonale Zulage unter gesetzlichen Voraussetzungen.","BSV-Kantonstabelle");
push(c,"Beitragssatz der kantonalen FAK (Arbeitgeber)",fak,"% Lohnsumme","Nur die kantonale Familienausgleichskasse","Nicht als schweizweit einheitlicher Arbeitgeberbeitrag oder als allgemeiner Arbeitnehmendenabzug verwenden; zusätzliche Fonds und weitere FAK können abweichen.","BSV-Kantonstabelle");
});
D.v6.familyCantons=indexed;D.v6.familySource=SOURCE;
D.v6.familyNotice="Die Daten gelten für das Jahr 2026 und stammen aus der BSV-Tabelle. Bei Einträgen wie 265/285 sind gesetzlich bezeichnete Gruppen gemeint (meist Kinderzahl oder Alter). Werte sind keine garantierten persönlichen Ansprüche. Die ausgewiesenen FAK-Prozentsätze gelten nur für die kantonale Familienausgleichskasse; weitere Kassen, Fonds und kantonale Arbeitnehmerbeiträge können abweichen.";
})();