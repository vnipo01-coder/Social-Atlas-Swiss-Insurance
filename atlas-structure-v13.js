/* SOCIAL ATLAS 13 – ruhige Wissensnavigation mit klaren Fachgebieten.
 * Pro Ansicht höchstens zwölf Ergebnisse; kein Inhaltsverlust.
 */
window.ATLAS_STRUCTURE_V13=(()=>{
"use strict";const D=ATLAS_DB;
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const groups=[
{id:"versicherungen",icon:"₣",name:"Sozialversicherungen & Vorsorge",desc:"AHV, IV, EL, BVG, ALV, Krankenkasse, Familienzulagen und Erwerbsausfall.",intro:"Die einzelnen Sozialversicherungszweige folgen unterschiedlichen gesetzlichen Anspruchs-, Finanzierungs- und Verfahrensregeln.",keys:["Altersvorsorge","Invalidität","Erwerbsausfall","Gesundheit","Familie & Dienst"]},
{id:"sozialhilfe",icon:"◇",name:"Sozialhilfe & Kantone",desc:"Existenzsicherung, Grundbedarf, Wohnkosten, SIL, Teilhabe und Graubünden.",intro:"Sozialhilferecht, kantonale Unterschiede und sozialarbeiterische Fallführung sind getrennt zu betrachten.",keys:["Sozialhilfe","Kantone"]},
{id:"migration",icon:"◎",name:"Migration & Asyl",desc:"Aufenthaltsausweise, Schutzstatus S, Flüchtlingsrecht, Familiennachzug und UNO.",intro:"Aufenthaltsstatus, Anerkennung als Flüchtling, Nothilfe und individuelle Sozialleistungen sind eigenständige Prüfungskategorien.",keys:["Migration","Asyl & Migration","Migration & Asyl","Aufenthalt"]},
{id:"systeme",icon:"§",name:"Recht, Verfahren & Europa",desc:"ATSG, Rechtsmittel, Subsidiarität, Föderalismus und europäische Koordination.",intro:"Normstufe, Rechtsstand, Zuständigkeit und internationale Geltung bilden die Grundlage einer nachvollziehbaren Rechtsprüfung.",keys:["Querschnitt","Europa"]},
{id:"soziologie",icon:"◉",name:"Soziale Arbeit & Soziologie",desc:"Profession, Methoden, Lebenswelt, Bourdieu, Ungleichheit und Sozialraum.",intro:"Theorien sozialer Ordnung und professionellen Handelns werden mit ihren empirischen Grundlagen, methodischen Grenzen und Anwendungskontexten erläutert.",keys:["Soziale Arbeit","Soziologie"]},
{id:"psychologie",icon:"✦",name:"Psychologie & Neurowissenschaften",desc:"Kognition, Motivation, Trauma, Stress, Gehirn, Neuroplastizität und ICF.",intro:"Psychologische Modelle, Hirnforschung und klinische Klassifikationen beantworten unterschiedliche wissenschaftliche Fragen.",keys:["Psychologie","Neurowissenschaften"]},
{id:"sucht",icon:"✚",name:"Sucht, Gesundheit & Recovery",desc:"Abhängigkeit, Diagnostik, Neurobiologie, Vier-Säulen-Suchtpolitik und Beratung.",intro:"Suchtwissenschaftliche Erklärungen verbinden Gesundheit, Umwelt und Verhalten, ohne Diagnosen aus einzelnen Verhaltensmerkmalen abzuleiten.",keys:["Sucht & Gesundheit"]}
];
const mark=t=>t.id==="migration"||t.id.startsWith("mig-")?"migration":groups.find(g=>g.keys.includes(t.category))?.id||"systeme";
const topics=slug=>D.topics.filter(t=>!slug||mark(t)===slug);
const link=t=>"#/artikel/"+encodeURIComponent(t.id);
const grp=id=>groups.find(g=>g.id===id);
const areaCard=g=>'<a class="v13-area" href="#/gebiet/'+g.id+'"><div class="v13-areaTop"><span class="v13-areaIcon">'+g.icon+'</span><span class="v13-areaCount">'+topics(g.id).length+' Artikel</span></div><strong>'+E(g.name)+'</strong><p>'+E(g.desc)+'</p><span class="v13-areaArrow">Themen erkunden →</span></a>';
function home(){
const head='<section class="hero v13-homeHero"><span class="eyebrow">SOCIAL ATLAS · WISSENSCHAFTLICHE FACHENZYKLOPÄDIE</span><h1>Wissen verstehen.<br>Zusammenhänge erschliessen.</h1><p>Recht, Sozialwissenschaften und psychische Gesundheit – fachlich vertieft, klar geordnet und über konkrete Originalquellen erschlossen.</p><div class="heroActions"><a class="btn primary" href="#/wissen">Fachgebiete öffnen</a><a class="btn outline" href="#/falllabor">Mit einem Fall lernen</a><a class="btn outline" href="#/hilfe">Anleitung</a></div></section>';
return head+'<div class="v13-sectionIntro"><div><span class="eyebrow">SIEBEN WISSENSBEREICHE</span><h2>Wähle zuerst ein Fachgebiet</h2></div><p>Du musst nicht 92 Artikel auf einer einzigen Seite durchsehen. Jedes Fachgebiet hat eine eigene Unterseite und eine Suche.</p></div><div class="v13-areaGrid">'+groups.map(areaCard).join("")+'</div>'+
'<div class="v13-sectionIntro"><div><span class="eyebrow">DIREKT EINSTEIGEN</span><h2>Häufig verwendete Fachartikel</h2></div></div><div class="v13-shortcuts">'+["sozialhilfe","iv","mig-s","soz-ungleichheit","psy-stress","sucht"].filter(id=>D.topics.some(t=>t.id===id)).map(id=>{const t=D.topics.find(x=>x.id===id);return '<a href="'+link(t)+'">'+E(t.title)+' <span aria-hidden="true">↗</span></a>'}).join("")+'</div>'+
'<div class="v13-toolsTeaser"><b>Praxis & Lernwerkzeuge</b><p>Rechner, Fälle, Wissensassistent, Systemnetz und Lernquiz befinden sich in einem eigenen Werkzeugbereich.</p><a class="btn" href="#/werkzeuge">Werkzeuge öffnen →</a></div>';
}
function browse(slug){
const g=grp(slug),active=slug||"";
if(slug&&!g)return '<h1>Fachgebiet nicht gefunden</h1><a href="#/wissen">Zur Bibliothek</a>';
const total=topics(slug).length;
return '<div class="v13-browse"><span class="eyebrow">'+(g?'FACHGEBIET · SOCIAL ATLAS':'WISSENSBIBLIOTHEK')+'</span><h1>'+E(g?.name||"Wissensbibliothek")+'</h1><p class="lead">'+E(g?.intro||"Wähle ein Fachgebiet oder suche gezielt nach einem Begriff. Höchstens zwölf Artikel werden gleichzeitig angezeigt.")+'</p><div class="v13-breadcrumbLinks"><a href="#/wissen">Alle Fachgebiete</a><a href="#/fachlexikon">Fachlexikon</a><a href="#/werkzeuge">Praxiswerkzeuge</a></div>'+
(!slug?'<h2>Fachgebiete</h2><div class="v13-areaGrid v13-areaGridCompact">'+groups.map(areaCard).join("")+'</div><details class="v13-searchDisclosure"><summary>Alle 92 Fachartikel gezielt durchsuchen <span>⌄</span></summary><p>Die Suchergebnisse erscheinen in übersichtlichen Seiten mit maximal zwölf Treffern.</p></details>':'')+
'<section class="v13-catalogue" id="v13-catalogue" data-area="'+E(active)+'"><div class="v13-catalogueHead"><div><h2>'+ (slug?"Artikel in diesem Fachgebiet":"Artikel gezielt finden")+'</h2><p>'+total+' zugeordnete Fachartikel · wissenschaftliche Vertiefungen und Quellen im einzelnen Artikel</p></div></div><div class="v13-filter"><label for="v13Query">Suchbegriff</label><input id="v13Query" class="input" type="search" placeholder="Theorie, Gesetz, Stichwort oder Titel …"><label for="v13Category">Teilgebiet</label><select id="v13Category" class="select"><option value="">Alle Teilgebiete</option>'+[...new Set(topics(slug).map(t=>t.category))].sort((a,b)=>a.localeCompare(b,"de")).map(v=>'<option value="'+E(v)+'">'+E(v)+'</option>').join("")+'</select></div><p class="v13-total" id="v13Total">'+total+' Treffer</p><div id="v13Results" class="v13-results">'+renderCards(topics(slug).slice(0,12))+'</div><div class="v13-pages" id="v13Pages"></div></section></div>';
}
const renderCards=items=>items.map(t=>'<a class="v13-result" href="'+link(t)+'"><span>'+E(t.category)+'</span><strong>'+E(t.title)+'</strong><p>'+E(t.summary)+'</p><small>Fachkapitel · Forschung · Originalquellen <b>→</b></small></a>').join("");
function bindBrowse(){
const root=document.getElementById("v13-catalogue");if(!root)return;let page=1;
const q=document.getElementById("v13Query"),c=document.getElementById("v13Category"),list=document.getElementById("v13Results"),pages=document.getElementById("v13Pages"),total=document.getElementById("v13Total"),slug=root.dataset.area||null;
const filter=()=>{const query=q.value.trim().toLocaleLowerCase("de-CH"),cat=c.value;return topics(slug).filter(t=>(!cat||t.category===cat)&&(!query||[t.title,t.short,t.summary,t.category,...(D.v12Research?.[t.id]||[]).slice(0,3).map(x=>x[0])].join(" ").toLocaleLowerCase("de-CH").includes(query)))};
const draw=()=>{const all=filter(),n=Math.max(1,Math.ceil(all.length/12));page=Math.min(page,n);const current=all.slice((page-1)*12,page*12);list.innerHTML=current.length?renderCards(current):'<p class="v13-none">Keine Treffer. Versuche einen anderen Suchbegriff.</p>';total.textContent=all.length+' passende Fachartikel · Seite '+page+' von '+n;pages.innerHTML=all.length>12?'<button type="button" data-v13-action="back" '+(page<=1?"disabled":"")+'>← Zurück</button><span>'+page+' / '+n+'</span><button type="button" data-v13-action="next" '+(page>=n?"disabled":"")+'>Weitere Artikel →</button>':""};
q.oninput=()=>{page=1;draw()};c.onchange=()=>{page=1;draw()};pages.onclick=e=>{const b=e.target.closest("[data-v13-action]");if(!b||b.disabled)return;page+=b.dataset.v13Action==="next"?1:-1;draw();root.scrollIntoView({behavior:"smooth",block:"start"})};draw();
if(!slug) {const detail=document.querySelector(".v13-searchDisclosure");if(detail){detail.addEventListener("toggle",()=>{const sect=document.getElementById("v13-catalogue");sect.hidden=!detail.open});root.hidden=!detail.open}}
}
function science(){
return '<span class="eyebrow">WISSENSCHAFTLICHES FORSCHUNGSWISSEN</span><h1>Sozialwissenschaften und Gesundheit</h1><p class="lead">Wähle einen Wissenschaftsbereich, statt alle Fachartikel auf einer Seite zu durchsuchen. Jeder Artikel enthält vertiefte Fachkapitel, konkrete Studien und kritische Einordnungen.</p><div class="v13-areaGrid">'+groups.filter(g=>["soziologie","psychologie","sucht"].includes(g.id)).map(areaCard).join("")+'</div><div class="v13-toolsTeaser"><b>Wissenschaftliche Begriffe nachschlagen</b><p>Im separaten alphabetischen Lexikon findest du die Definition und den Link zum Fachartikel.</p><a class="btn" href="#/fachlexikon">Fachlexikon öffnen</a></div>'
}
function tools(){
const items=[
["#/falllabor","◇","Falllabor","Bestehende Fälle mit Rechtsfragen und Querverweisen"],
["#/generator","✎","Lernfall-Generator","Variiere Fallangaben und vergleiche eigene Lösungswege"],
["#/rechner","∑","Lernrechner","Didaktische Schweizer Sozialversicherungsberechnungen"],
["#/tarife","₣","Tarife 2026","Tarifübersichten mit statischem Bezugsjahr"],
["#/netzwerk","✧","Systemnetz","Verbindungen zwischen Fachgebieten erkunden"],
["#/infografiken","▧","Infografiken","Schaubilder einzeln und vergrössert ansehen"],
["#/vergleich","⇄","Systemvergleich","Zwei Kantone oder Länder vergleichen"],
["#/assistent","⌕","Wissenssuche","Lokale quellenbasierte Fachsuche, keine Live-KI"],
["#/quiz","✓","Lernquiz","Grundlagen gezielt überprüfen"]];
return '<span class="eyebrow">PRAXIS UND LERNEN</span><h1>Werkzeuge</h1><p class="lead">Hier findest du Lernfunktionen, Rechner und Visualisierungen. Sie sind bewusst von der wissenschaftlichen Artikelsammlung getrennt.</p><div class="v13-toolGrid">'+items.map(x=>'<a class="v13-toolCard" href="'+x[0]+'"><span>'+x[1]+'</span><strong>'+x[2]+'</strong><small>'+x[3]+'</small></a>').join("")+'</div>';
}
return{groups,mark,topics,home,browse,bindBrowse,science,tools};
})();
