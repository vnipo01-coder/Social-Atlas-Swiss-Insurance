/* Social Atlas 16: frei lesbare Wissensbibliothek, kontextuelle Recherche, Kapitelprogression. */
window.ATLAS_EXPERIENCE_V16=(()=>{"use strict";
const D=ATLAS_DB,E=x=>String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const get=id=>D.v16Essays?.[id],url=id=>"#/artikel/"+encodeURIComponent(id);
const totalWords=s=>String(s).trim().split(/\s+/).filter(Boolean).length;
const readingTime=x=>Math.max(1,Math.round(x/210));
let observer=null,scrollFn=null;
const featured=["neuro-exekutiv","psy-stress","soz-ungleichheit","sa-profession"];
const accent={Neurowissenschaften:"violet",Psychologie:"blue",Soziologie:"red","Soziale Arbeit":"violet"};
const feature=(id,index)=>{
 const t=D.topics.find(t=>t.id===id),e=get(id);
 if(!t||!e)return"";
 const words=e.chapters.reduce((s,c)=>s+c.paragraphs.reduce((n,p)=>n+totalWords(p),0),totalWords(e.intro));
 return '<a class="v16-feature v16-feature-'+index+'" data-v16-area="'+E(e.area)+'" href="'+url(id)+'"><span class="v16-featureNum">'+String(index+1).padStart(2,"0")+' / WISSENSCHAFTLICHER ESSAY</span><span class="v16-featureCategory">'+E(e.area)+'</span><strong>'+E(e.title)+'</strong><span class="v16-featureSummary">'+E(e.subtitle)+'</span><span class="v16-featureFoot">'+e.chapters.length+' Kapitel <i>·</i> '+readingTime(words)+' Minuten <em>Artikel lesen ↗</em></span></a>';
};
const groupItems=[["psychologie","Psychologie","Verhalten, Lernen, Kognition und emotionale Prozesse"],["soziologie","Soziologie und Soziale Arbeit","Gesellschaft, professionelles Handeln und soziale Lebenswelten"],["sucht","Gesundheit und Recovery","Abhängigkeit, psychosoziale Unterstützung und Prävention"],["sozialhilfe","Sozialhilfe","Materielle Sicherung und soziale Rechte der Kantone"],["versicherungen","Sozialversicherungen","Schweizer Vorsorge, Leistungen und Verfahren"],["migration","Migration und Asyl","Aufenthalt, Schutz und interdisziplinäre Fallkontexte"],["systeme","Recht und Europa","Verfahrensrecht, Gesetzesquellen und Systemvergleiche"]];
function home(){
const n=featured.filter(id=>get(id)).length;
return '<div class="v16-home"><section class="v16-homeHero" aria-label="Social Atlas Wissensraum"><div class="v16-homeHeroText"><div class="v16-overline"><span class="v16-liveDot" aria-hidden="true"></span> SOCIAL ATLAS · DIE OFFENE FACHBIBLIOTHEK</div><h1>Wissen ist kein <i>Stapel Karten.</i><br>Es ist ein Zusammenhang.</h1><p>Psychologie, Soziologie, Soziale Arbeit und Schweizer Sozialrecht – fundiert, vernetzt und endlich als zusammenhängende wissenschaftliche Texte lesbar. Mit überprüfbaren Forschungsgrundlagen statt blossen Literaturtiteln.</p><div class="v16-homeHeroActions"><a class="v16-mainCta" href="#/artikel/neuro-exekutiv">Ersten Essay lesen <span>↗</span></a><a class="v16-subCta" href="#/wissen">Fachgebiete erkunden →</a></div><div class="v16-heroLedger"><span>'+D.topics.length+' Fachthemen</span><span>'+n+' neue Volltext-Essays</span><span>Schweizer Fachperspektive</span></div></div><div class="v16-orbit" aria-label="Thematische Verbindung zwischen Forschungsgebieten"><div class="v16-orbitRing a" aria-hidden="true"></div><div class="v16-orbitRing b" aria-hidden="true"></div><div class="v16-orbitRing c" aria-hidden="true"></div><div class="v16-orbitCore" aria-hidden="true">S<span>A</span></div><a class="v16-orbitNode neuro" href="#/artikel/neuro-exekutiv"><b>01</b> Gehirn</a><a class="v16-orbitNode stress" href="#/artikel/psy-stress"><b>02</b> Stress</a><a class="v16-orbitNode society" href="#/artikel/soz-ungleichheit"><b>03</b> Gesellschaft</a><a class="v16-orbitNode social" href="#/artikel/sa-profession"><b>04</b> Soziale Arbeit</a><span class="v16-orbitHint">Tippe auf ein Thema</span></div></section>'+
'<section class="v16-homeStudies" id="v16-featured"><div class="v16-sectionHeading"><div><span class="v16-sectionKicker">AUS DER WISSENSCHAFTLICHEN BIBLIOTHEK</span><h2>Eine Idee. Viele Seiten.<br><i>Ein echtes Argument.</i></h2></div><p>Vier ausführliche Originalaufsätze, entwickelt anhand tatsächlich zugänglicher Forschungsarbeiten. Die Quellen lassen sich im Volltext öffnen.</p></div><div class="v16-filterStrip" role="group" aria-label="Forschungsartikel nach Fachgebiet filtern"><button type="button" data-v16-filter="all" aria-pressed="true" class="is-active">Alle Themen</button><button type="button" data-v16-filter="Neurowissenschaften" aria-pressed="false">Neurowissenschaften</button><button type="button" data-v16-filter="Psychologie" aria-pressed="false">Psychologie</button><button type="button" data-v16-filter="Soziologie" aria-pressed="false">Soziologie</button><button type="button" data-v16-filter="Soziale Arbeit" aria-pressed="false">Soziale Arbeit</button><span class="v16-filterResult" id="v16FilterCount" aria-live="polite">'+n+' Texte</span></div><div class="v16-featureGrid">'+featured.map(feature).join("")+'</div></section>'+
'<section class="v16-paths" aria-labelledby="v16-pathsTitle"><div class="v16-sectionHeading"><div><span class="v16-sectionKicker">DIE GESAMTE WISSENSORDNUNG</span><h2 id="v16-pathsTitle">Entdecke dein <i>Fachgebiet.</i></h2></div><p>Keine unendliche Liste auf einer Seite. Jedes Gebiet hat seine eigene Themenhierarchie und eine Suche.</p></div><div class="v16-pathList">'+groupItems.map((g,i)=>'<a href="#/gebiet/'+g[0]+'"><span class="v16-pathNo">'+String(i+1).padStart(2,"0")+'</span><span class="v16-pathCopy"><strong>'+E(g[1])+'</strong><small>'+E(g[2])+'</small></span><span class="v16-pathArrow">↗</span></a>').join("")+'</div></section>'+
'<section class="v16-researchBanner"><div><span class="v16-sectionKicker">WISSENSCHAFT OHNE DEKORATIVE QUELLEN</span><h2>Öffne die Untersuchung.<br>Prüfe ihre Grenzen.</h2><p>Jeder neue Essay trennt Forschungsbefunde, theoretische Einordnung und den Transfer in die Soziale Arbeit. Die Originalpublikationen sind vollständig online lesbar.</p></div><div class="v16-researchActions"><a href="#/studienatlas">Zum Studienatlas ↗</a><a href="#/forschungsdossiers">Alle Forschungsdossiers →</a></div></section></div>';
}
function bySources(ids){
return [...new Set(ids)].map(id=>{
 const s=D.v13Papers?.[id];
 if(!s||!s.fulltextUrl)return"";
 return '<a class="v16-citation" href="'+E(s.fulltextUrl)+'" target="_blank" rel="noopener noreferrer" title="Originalpublikation im Volltext öffnen"><span class="v16-citationKind">VOLLSTÄNDIGER FORSCHUNGSTEXT · '+E(s.year)+'</span><strong>'+E(s.authors)+'</strong><span>'+E(s.title)+'</span><small>Wissenschaftlichen Volltext lesen ↗</small></a>';
}).join("");
}
function page(t){
const e=get(t.id);if(!e)return"";
const allText=[e.intro,...e.chapters.flatMap(c=>c.paragraphs)].join(" ");
const words=totalWords(allText),times=readingTime(words),refs=[...new Set(e.chapters.flatMap(c=>c.sources))];
const toc=e.chapters.map((c,i)=>'<button type="button" data-v16-jump="v16-p-'+(i+1)+'" aria-label="Kapitel '+(i+1)+': '+E(c.title)+'"><span>'+String(i+1).padStart(2,"0")+'</span>'+E(c.title.replace(/^\d+\.\s*/,""))+'</button>').join("");
const chapters=e.chapters.map((c,i)=>'<section class="v16-chapter" id="v16-p-'+(i+1)+'" data-v16-section="'+(i+1)+'"><span class="v16-chapterKicker">KAPITEL '+String(i+1).padStart(2,"0")+' / '+String(e.chapters.length).padStart(2,"0")+'</span><h2>'+E(c.title.replace(/^\d+\.\s*/,""))+'</h2><div class="v16-chapterProse">'+c.paragraphs.map(p=>'<p>'+E(p)+'</p>').join("")+'</div><aside class="v16-marginInsight"><span>WISSENSCHAFTLICHER KERN</span><p>'+E(c.insight)+'</p></aside><div class="v16-inlineEvidence"><div class="v16-inlineHead"><span>FORSCHUNGSGRUNDLAGE</span><small>Diese Arbeiten wurden im Volltext erschlossen und sind direkt erreichbar.</small></div><div class="v16-inlineCitationList">'+bySources(c.sources)+'</div></div><div class="v16-between"><span>THEMENWEG · '+String(i+1)+' / '+String(e.chapters.length)+'</span>'+(i===e.chapters.length-1?'<button data-v16-jump="v16-bibliography" type="button">Zum Quellenverzeichnis ↓</button>':'<button data-v16-jump="v16-p-'+(i+2)+'" type="button">Nächstes Kapitel ↓</button>')+'</div></section>').join("");
const glossary='<div class="v16-glossary">'+e.glossary.map(([term,meaning])=>'<div><dt>'+E(term)+'</dt><dd>'+E(meaning)+'</dd></div>').join("")+'</div>';
const related='<div class="v16-relatedGrid">'+e.related.map(id=>D.topics.find(t=>t.id===id)).filter(Boolean).slice(0,4).map(a=>'<a href="'+url(a.id)+'"><span>'+E(a.category)+'</span><strong>'+E(a.title)+'</strong> <em>↗</em></a>').join("")+'</div>';
return '<div class="v16-reader" id="v16-reader" data-v16-id="'+E(t.id)+'">'+
'<div class="v16-readerTop"><nav class="v16-crumb" aria-label="Brotkrumennavigation"><a href="#/start">Start</a><span>/</span><a href="#/wissen">Fachbibliothek</a><span>/</span><span>'+E(e.area)+'</span></nav><div class="v16-readerBadge"><span class="v16-liveDot"></span> AUS WISSENSCHAFTLICHEN VOLLTEXTEN ERARBEITET</div></div>'+
'<header class="v16-essayHero"><span class="v16-sectionKicker">'+E(e.kicker)+'</span><h1>'+E(e.title)+'</h1><p class="v16-essaySubtitle">'+E(e.subtitle)+'</p><div class="v16-essayMetric"><span>'+e.chapters.length+' ausführliche Kapitel</span><span>'+words.toLocaleString("de-CH")+' Wörter</span><span>ca. '+times+' Minuten Lesezeit</span><span>'+refs.length+' direkte Volltextquellen</span></div><div class="v16-heroRule"></div></header>'+
'<div class="v16-readerTools" aria-label="Leseeinstellungen"><span>LESEN · NACHVOLLZIEHEN · VERTIEFEN</span><div><button type="button" data-v16-font="-1" title="Schrift verkleinern" aria-label="Schrift verkleinern">A−</button><button type="button" data-v16-font="1" title="Schrift vergrössern" aria-label="Schrift vergrössern">A+</button><button type="button" data-v16-focus aria-pressed="false">Fokusmodus</button><button type="button" data-v16-print>Drucken</button></div></div>'+
'<div class="v16-readingGrid"><aside class="v16-readingRail"><div class="v16-readingRailSticky"><span>IN DIESEM ESSAY</span>'+toc+'<div class="v16-railFoot"><span>TEXTFORTSCHRITT</span><div class="v16-railMeter"><span id="v16RailBar"></span></div><small id="v16RailPercent">0 % gelesen</small></div></div></aside><div class="v16-readingBody"><div class="v16-opening"><span class="v16-openingMark" aria-hidden="true">✦</span><p>'+E(e.intro)+'</p><button type="button" data-v16-jump="v16-p-1">Mit Kapitel 1 beginnen ↓</button></div>'+chapters+
'<section class="v16-bibliography" id="v16-bibliography"><span class="v16-sectionKicker">PRIMÄRLITERATUR UND KONTEXT</span><h2>Alle verwendeten Originalpublikationen</h2><p>Die Quellen führen direkt zu wissenschaftlichen Volltexten, nicht auf ein Buchcover oder eine allgemeine Verlagsübersicht. Die Abschnitte sind eigenständig formulierte Forschungssynthesen – keine wörtlichen Reproduktionen der Originaltexte und keine selbst peer-reviewten Artikel.</p><div class="v16-biblioList">'+refs.map((id,i)=>{const s=D.v13Papers[id];return '<article class="v16-biblioEntry"><span>'+String(i+1).padStart(2,"0")+'</span><div><h3>'+E(s.authors)+' ('+E(s.year)+'). '+E(s.title)+'</h3><p>'+E(s.reference||"")+'</p><p class="v16-biblioType">'+E(s.type||"Forschungsquelle")+'</p><p><b>Methodischer Zugang:</b> '+E(s.method||"Im Original prüfen")+'</p><p><b>Grenzen:</b> '+E(s.limit||"Übertragbarkeit im Original prüfen")+'</p><a href="'+E(s.fulltextUrl)+'" target="_blank" rel="noopener noreferrer">Originalstudie vollständig lesen ↗</a></div></article>'}).join("")+'</div></section>'+
'<section class="v16-glossaryBlock" aria-labelledby="v16-glossaryHeading"><span class="v16-sectionKicker">ZUM NACHLESEN</span><h2 id="v16-glossaryHeading">Begriffe und Konzepte</h2><dl>'+glossary+'</dl></section>'+
'<section class="v16-relatedBlock"><span class="v16-sectionKicker">ZUSAMMENHÄNGE VERSTEHEN</span><h2>Weiterdenken statt abbrechen</h2>'+related+'</section><div class="v16-return"><a href="#/start">← Zur Bibliothek zurück</a><span>Social Atlas · Wissenschaftlich begründete Fachorientierung</span></div></div></div></div>';
}
function bind(pageType,id){
if(observer){observer.disconnect();observer=null}
if(scrollFn){window.removeEventListener("scroll",scrollFn);scrollFn=null}
document.body.classList.toggle("v16-essay",!!(pageType==="artikel"&&get(id)));
if(pageType==="start"){
 const root=document.querySelector(".v16-home");
 if(!root)return;
 root.querySelectorAll("[data-v16-filter]").forEach(btn=>btn.addEventListener("click",()=>{
  const active=btn.dataset.v16Filter;
  root.querySelectorAll("[data-v16-filter]").forEach(b=>{b.classList.toggle("is-active",b===btn);b.setAttribute("aria-pressed",String(b===btn))});
  let count=0;root.querySelectorAll("[data-v16-area]").forEach(el=>{const show=active==="all"||el.dataset.v16Area===active;el.hidden=!show;if(show)count++});
  const label=document.getElementById("v16FilterCount");if(label)label.textContent=count+" "+(count===1?"Text":"Texte");
 }));
}
const root=document.getElementById("v16-reader");
if(!root){document.body.classList.remove("v16-focus");const progress=document.getElementById("v16Progress");if(progress)progress.style.width="0";return;}
root.querySelectorAll("[data-v16-jump]").forEach(b=>b.addEventListener("click",()=>{
 const target=document.getElementById(b.dataset.v16Jump);if(!target)return;
 target.scrollIntoView({behavior:window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches?"instant":"smooth",block:"start"});
 const m=b.dataset.v16Jump.match(/^v16-p-(\d+)$/);
 if(m)history.replaceState(null,"","#/artikel/"+encodeURIComponent(id)+"?section="+m[1]);
}));
const body=root.querySelector(".v16-readingBody");
let font=18;
root.querySelectorAll("[data-v16-font]").forEach(btn=>btn.addEventListener("click",()=>{font=Math.max(16,Math.min(23,font+Number(btn.dataset.v16Font)));body.style.setProperty("--v16-textsize",font+"px")}));
const focus=root.querySelector("[data-v16-focus]");
if(focus)focus.addEventListener("click",()=>{const next=!document.body.classList.contains("v16-focus");document.body.classList.toggle("v16-focus",next);focus.setAttribute("aria-pressed",String(next));focus.textContent=next?"Fokusmodus beenden":"Fokusmodus";});
root.querySelector("[data-v16-print]")?.addEventListener("click",()=>window.print());
const top=document.querySelector(".topbar");
if(top&&!document.getElementById("v16Progress"))top.insertAdjacentHTML("beforeend",'<div class="v16-progressTrack" aria-hidden="true"><div id="v16Progress"></div></div>');
const chapters=[...root.querySelectorAll(".v16-chapter")],buttons=[...root.querySelectorAll(".v16-readingRail [data-v16-jump]")];
const progress=document.getElementById("v16Progress"),rail=document.getElementById("v16RailBar"),pct=document.getElementById("v16RailPercent");
function update(){
 const total=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);
 const readingBottom=root.getBoundingClientRect().bottom+window.scrollY;
 const start=root.getBoundingClientRect().top+window.scrollY;
 const span=Math.max(1,readingBottom-start-window.innerHeight);
 const fraction=Math.max(0,Math.min(1,(window.scrollY-start)/span));
 if(progress)progress.style.width=(fraction*100).toFixed(1)+"%";
 if(rail)rail.style.width=(fraction*100).toFixed(1)+"%";
 if(pct)pct.textContent=Math.round(fraction*100)+" % gelesen";
 let active=-1;
 for(let i=0;i<chapters.length;i++){if(chapters[i].getBoundingClientRect().top<window.innerHeight*.38)active=i}
 buttons.forEach((b,i)=>{b.classList.toggle("is-current",i===active);if(i===active)b.setAttribute("aria-current","location");else b.removeAttribute("aria-current")});
}
let queued=false;scrollFn=()=>{if(queued)return;queued=true;window.requestAnimationFrame(()=>{queued=false;update()})};
window.addEventListener("scroll",scrollFn,{passive:true});
const selected=new URLSearchParams(location.hash.split("?")[1]||"").get("section");
if(selected&&/^[1-9]\d*$/.test(selected)){const node=document.getElementById("v16-p-"+selected);if(node)window.requestAnimationFrame(()=>node.scrollIntoView({block:"start"}))}
update();
}
return{home,page,bind,hasEssay:id=>!!get(id),stats:()=>({essays:Object.keys(D.v16Essays||{}).length,words:Object.values(D.v16Essays||{}).reduce((s,e)=>s+totalWords(e.intro)+e.chapters.reduce((n,c)=>n+c.paragraphs.reduce((a,p)=>a+totalWords(p),0),0),0)})};
})();