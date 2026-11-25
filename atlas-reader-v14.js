/* SOCIAL ATLAS 14 – Wissenschaftliche Lese- und Dossieransicht.
 * Originalartikel mit nachvollziehbarer Kapitelarchitektur und konkretem Literaturapparat.
 * Die langen Texte und die bestehenden klassischen Layout-Elemente bleiben getrennt.
 */
window.ATLAS_READER_V14=(()=>{
"use strict";const D=ATLAS_DB;
const E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const get=id=>D.v14Longreads?.[id]||null;
const seconds=s=>Math.max(3,Math.round(String(s).split(/\s+/).length/190));
const researchId=r=>Object.keys(D.v13Papers||{}).find(k=>D.v13Papers[k]?.url===r.url);
function article(t){
const m=get(t.id);if(!m)return"";
const words=m.chapters.flat().join(" ");
const count=m.chapters.length;
return '<section class="v14-longread" id="v14-reader" aria-labelledby="v14-mainTitle"><div class="v14-editorialHead"><span class="v14-topicTag">WISSENSCHAFTLICHES ARBEITSBLATT · ORIGINALTEXT</span><h2 id="v14-mainTitle">'+E(m.subtitle)+'</h2><p>Diese vertiefende Ausarbeitung führt durch zusammenhängende Theorien, Forschungsfragen, empirische Befunde und fachliche Grenzen. Sie ist kein Ersatz für die zitierten Originalpublikationen.</p><div class="v14-readMeta"><span>'+count+' Hauptkapitel</span><span>ca. '+seconds(words)+' Min. Lesezeit</span><span>'+m.references.length+' konkrete Literaturhinweise</span></div></div>'+
'<div class="v14-chapterIndex"><div class="v14-indexTop"><strong>Kapitelübersicht</strong><div><button type="button" data-v14-expand="all">Alle Kapitel öffnen</button><button type="button" data-v14-expand="none">Alle schliessen</button></div></div><ol>'+m.chapters.map((ch,i)=>'<li><button type="button" data-v14-jump="v14-ch-'+i+'"><span>'+String(i+1).padStart(2,"0")+'</span>'+E(ch[0])+'</button></li>').join("")+'</ol></div>'+
'<div class="v14-chapterCollection">'+m.chapters.map((ch,i)=>'<details id="v14-ch-'+i+'" class="v14-chapter" '+(i===0?'open':'')+'><summary><span class="v14-chapterNumber">KAPITEL '+String(i+1).padStart(2,"0")+'</span><strong>'+E(ch[0])+'</strong><span class="v14-angle" aria-hidden="true">⌄</span></summary><div class="v14-chapterText">'+ch.slice(1).map(p=>'<p>'+E(p)+'</p>').join("")+'<div class="v14-chapterNext">'+(i<count-1?'<button type="button" data-v14-jump="v14-ch-'+(i+1)+'">Nächstes Kapitel lesen →</button>':'<button type="button" data-v14-jump="v14-references">Fachliteratur aufrufen →</button>')+'</div></div></details>').join("")+'</div>'+
'<section class="v14-bibliography" id="v14-references"><span class="v14-topicTag">LITERATUR UND QUELLENKRITIK</span><h3>Konkrete Veröffentlichungen</h3><p>Jede Quelle führt zur angegebenen Originalpublikation, Verlagsseite oder bibliografischen Fundstelle. Forschungsart und Grenzen werden kenntlich gemacht. Für wissenschaftliche Arbeiten sind bibliografische Details und gegebenenfalls Seitenzahlen im Original zu kontrollieren.</p><ol>'+m.references.map(r=>'<li><div><strong>'+E(r.authors)+' ('+E(r.year)+'). '+E(r.title)+'</strong><span>'+E(r.kind)+'</span><p><b>Einordnung:</b> '+E(r.limit)+'</p></div><div class="v15-refActions"><a href="'+E(r.url)+'" target="_blank" rel="noopener noreferrer">Originalquelle ↗</a>'+(researchId(r)?'<a href="#/studie/'+encodeURIComponent(researchId(r))+'">Quellenprofil →</a>':'')+'</div></li>').join("")+'</ol></section>'+
'<div class="v14-endMatter"><p><b>Wissenschaftliche Transparenz:</b> Die Kapitel sind eigenständig formulierte didaktische Forschungsübersichten. Sie verweisen auf konkrete Primärliteratur, sind aber keine Peer-Review-Veröffentlichung und enthalten keine systematische Prüfung sämtlicher Forschungsliteratur.</p><a href="#/gebiet/'+E(window.ATLAS_STRUCTURE_V13?.mark(t)||"psychologie")+'">Weitere Themen dieses Fachgebiets →</a></div></section>';
}
function toc(t){if(!get(t.id))return"";return '<div class="v14-tocLinks"><span>WISSENSCHAFTLICHES ARBEITSBLATT</span><a href="#v14-reader" data-scroll="v14-reader">Vertiefender Langtext</a><a href="#v14-references" data-scroll="v14-references">Originalquellen und Literatur</a></div>'}
function topicTree(slug){
const groups={
psychologie:[
["Grundlagen und wissenschaftliche Methoden",["psy-grundlagen","psy-methoden","psy-replikation","psy-heuristiken","psy-kognition","psy-sozialpsychologie"]],
["Lernen, Denken und Gedächtnis",["psy-lernen","psy-gedaechtnis","neuro-exekutiv","neuro-plastizitaet"]],
["Emotion, Motivation und Lebensspanne",["psy-emotion","psy-stress","psy-motivation","psy-entwicklung","psy-trauma","psy-krise"]],
["Gehirn und Funktionen",["neuro-grundlagen","neuro-belohnung","neuro-icf"]]
],
soziologie:[
["Gesellschaftstheorien und empirische Forschung",["soz-grundlagen","soz-theorien","soz-methoden","soz-qualitative-forschung","soz-bourdieu"]],
["Soziale Ungleichheit und institutionelle Chancen",["soz-ungleichheit","soz-mobilitaet","soz-armut","soz-intersektionalitaet","soz-exklusion"]],
["Soziale Beziehungen und Räume",["soz-netzwerke","soz-sozialraum","soz-sozialisation","soz-stigma"]],
["Profession und Methoden der Sozialen Arbeit",["sa-profession","sa-gespraechsfuehrung","sa-evaluation","sa-lebenswelt","sa-systemisch","sa-case","sa-empowerment","sa-partizipation","sa-ethik","sa-kinderschutz"]]
]};
const groupsHere=groups[slug];if(!groupsHere)return"";
return '<section class="v14-thematic" id="v14-topicTree"><span class="eyebrow">WISSENSCHAFTLICHE THEMENGLIEDERUNG</span><h2>Vom Grundbegriff zur spezialisierten Forschung</h2><p>Diese mehrstufige Kapitelübersicht orientiert sich an der Gliederung wissenschaftlicher Arbeitsblätter: Beginne mit Grundlagen oder öffne gezielt ein vertiefendes Unterthema. Jede Unterseite besitzt einen eigenen Fachartikel.</p><div class="v14-thematicList">'+groupsHere.map(([name,ids],i)=>'<details '+(i===0?'open':'')+'><summary><span class="v14-treeMarker">'+String(i+1).padStart(2,"0")+'</span><strong>'+E(name)+'</strong><small>'+ids.filter(id=>D.topics.some(t=>t.id===id)).length+' Fachartikel</small></summary><div class="v14-topicLinks">'+ids.map(id=>{const t=D.topics.find(t=>t.id===id);if(!t)return"";const isDeep=Boolean(get(id));return '<a href="#/artikel/'+encodeURIComponent(id)+'"><b>'+E(t.title)+'</b><span>'+(isDeep?'Langtext mit Originalliteratur':'Vertiefter Fachartikel')+' ↗</span></a>'}).join("")+'</div></details>').join("")+'</div></section>';
}
function hub(){
const ids=Object.keys(D.v14Longreads||{});
const by=id=>D.topics.find(t=>t.id===id);
return '<div class="v14-hub"><span class="eyebrow">WISSENSCHAFTLICHE ARBEITSBLÄTTER</span><h1>Theorien lesen. Forschung verstehen.</h1><p class="lead">Ausführliche Originaltexte zu Psychologie, Neurowissenschaften, Soziologie und Sozialer Arbeit. Jeder Langtext gliedert die wissenschaftliche Argumentation in Kapitel und verweist auf konkrete Forschungsveröffentlichungen.</p><div class="v14-hubOverview"><span><b>'+ids.length+'</b> ausführliche Langtexte</span><span><b>'+ids.reduce((n,id)=>n+D.v14Longreads[id].chapters.length,0)+'</b> wissenschaftliche Kapitel</span><span><b>4</b> Fachperspektiven</span></div>'+
'<div class="v14-hubNav"><a href="#/gebiet/psychologie">Psychologie & Neurowissenschaften →</a><a href="#/gebiet/soziologie">Soziologie & Soziale Arbeit →</a><a href="#/studienatlas">Originalstudien und Quellenprofile →</a></div>'+
'<div class="v14-longreadCards">'+ids.map(id=>{const t=by(id),m=get(id);if(!t)return"";return '<a href="#/artikel/'+encodeURIComponent(id)+'" class="v14-longreadCard"><span>'+E(t.category)+'</span><strong>'+E(t.title)+'</strong><p>'+E(m.subtitle)+'</p><small>'+m.chapters.length+' Kapitel · '+m.references.length+' konkrete Originalquellen <b>→</b></small></a>'}).join("")+'</div><div class="v14-externalContext"><b>Inhaltliche Orientierung</b><p>Die thematische Breite und lange Kapitelstruktur sind von wissenschaftlichen Nachschlagewerken und den Arbeitsblättern von Werner Stangl angeregt. Der Inhalt dieser Plattform ist eigenständig formuliert; fremde Texte oder Grafiken werden nicht übernommen.</p><a href="https://arbeitsblaetter.stangl-taller.at/" target="_blank" rel="noopener noreferrer">Stangls Arbeitsblätter als externe Referenz öffnen ↗</a></div></div>';
}
function bind(){
const root=document.getElementById("v14-reader");if(!root)return;
root.querySelectorAll("[data-v14-expand]").forEach(btn=>btn.addEventListener("click",()=>{const open=btn.dataset.v14Expand==="all";root.querySelectorAll(".v14-chapter").forEach(x=>x.open=open)}));
root.querySelectorAll("[data-v14-jump]").forEach(btn=>btn.addEventListener("click",()=>{const target=document.getElementById(btn.dataset.v14Jump);if(!target)return;if(target.tagName==="DETAILS")target.open=true;target.scrollIntoView({behavior:"smooth",block:"start"})}));
}
const stats=()=>({longreads:Object.keys(D.v14Longreads||{}).length,chapters:Object.values(D.v14Longreads||{}).reduce((n,x)=>n+x.chapters.length,0)});
return{article,toc,topicTree,hub,bind,stats,has:id=>!!get(id)};
})();
