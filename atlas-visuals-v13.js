/* SOCIAL ATLAS 13 – Infografik-Archiv: jede Grafik einzeln, vollständig lesbar,
 * kein Herunterskalieren komplexer 1200-px-Originale auf winzige Karten.
 */
window.ATLAS_VISUAL_V13=(()=>{
"use strict";
const D=ATLAS_DB,E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const originals=[
{id:"svg-three-pillars",file:"three-pillars",topic:"ahv",title:"Die drei Säulen der Vorsorge",desc:"Altersvorsorge mit unterschiedlichen Finanzierungs- und Anspruchslogiken.",w:1200,h:620},
{id:"svg-social-assistance",file:"social-assistance",topic:"sozialhilfe",title:"Fünf Betrachtungsbereiche der Sozialhilfe",desc:"Didaktisches Arbeitsmodell, keine gesetzliche Fünf-Säulen-Norm.",w:1200,h:580},
{id:"svg-europe-systems",file:"europe-systems",topic:"europa",title:"Zwölf europäische Vergleichsbereiche",desc:"Qualitatives Raster, keine Gleichstellung nationaler Tarife.",w:1200,h:660},
{id:"svg-coordination",file:"coordination",topic:"atsg",title:"Fragen bei einer Leistungsabklärung",desc:"Unterschiedliche Prüffragen, keine universell verbindliche Reihenfolge.",w:1200,h:580}
];
const isCustom=id=>window.ATLAS_VISUAL_QA?.keys?.includes(id);
const resolve=id=>originals.find(x=>x.id===id)||(isCustom(id)?{id,topic:id,title:D.topics.find(t=>t.id===id)?.title||id,desc:"Fachliches Modell mit erklärten Grenzen"}:null);
function gallery(){
const topics=(window.ATLAS_VISUAL_QA?.keys||[]).map(id=>resolve(id)).filter(Boolean);
const categories=[...new Set(topics.map(g=>D.topics.find(t=>t.id===g.topic)?.category||"Allgemein"))];
const item=g=>'<a class="v13-graphicItem" href="#/grafik/'+E(g.id)+'"><span class="v13-graphicIcon">▤</span><div><strong>'+E(g.title)+'</strong><small>'+E(g.desc)+'</small></div><span aria-hidden="true">↗</span></a>';
return '<span class="eyebrow">INFOGRAFIK-ARCHIV</span><h1>Infografiken in voller Grösse</h1><p class="lead">Jedes Schaubild besitzt eine eigene Ansicht. Die Originalgrafiken werden nicht mehr auf eine kleine Karte zusammengestaucht. Öffne ein Thema, vergrössere die Darstellung oder scrolle innerhalb des Bildes.</p><div class="v13-visualNotice"><b>Darstellungsprinzip:</b> Eine Grafik ist ein Modell, nicht automatisch eine amtliche Berechnung. Wissenschaftliche und rechtliche Grenzen stehen jeweils direkt beim Schaubild.</div><section class="v13-graphicShelf"><h2>Vier ursprüngliche SVG-Grafiken</h2><div class="v13-graphicList">'+originals.map(item).join("")+'</div></section><section class="v13-graphicShelf"><h2>Wissenschaftliche Themenmodelle</h2><p>Die 16 Fachmodelle sind nach ihren Disziplinen gruppiert und werden nicht gleichzeitig verkleinert angezeigt.</p>'+categories.map(cat=>'<details class="v13-graphicGroup"><summary>'+E(cat)+' <span>'+topics.filter(g=>(D.topics.find(t=>t.id===g.topic)?.category||"Allgemein")===cat).length+' Schaubilder</span></summary><div class="v13-graphicList">'+topics.filter(g=>(D.topics.find(t=>t.id===g.topic)?.category||"Allgemein")===cat).map(item).join("")+'</div></details>').join("")+'</section>';
}
function single(id){
const g=resolve(id);if(!g)return '<h1>Infografik nicht gefunden</h1><p><a href="#/infografiken">Zur Übersicht</a></p>';
const legacy=Boolean(g.file);
const graphic=legacy?'<div class="v13-graphicViewport v13-graphicViewportSvg" id="v13-graphicViewport" tabindex="0" aria-label="Breite Infografik, horizontal verschiebbar"><img id="v13-svg" src="assets/'+E(g.file)+'.svg" alt="'+E(g.title)+'" width="'+g.w+'" height="'+g.h+'"></div>':'<div class="v13-graphicViewport v13-customViewport" id="v13-graphicViewport" tabindex="0">'+(window.ATLAS_VISUAL_QA?.render(D.topics.find(t=>t.id===g.topic))||'<p>Keine Darstellung vorhanden.</p>')+'</div>';
return '<div class="v13-fullGraphic"><a class="v13-back" href="#/infografiken">← Zu allen Infografiken</a><span class="eyebrow">VOLLANSICHT · EIN FACHMODELL</span><h1>'+E(g.title)+'</h1><p class="lead">'+E(g.desc)+'</p><div class="v13-graphicTools"><button id="v13ZoomOut" type="button">− Verkleinern</button><button id="v13ZoomIn" type="button">+ Vergrössern</button><button id="v13ZoomFit" type="button">Breite anpassen</button>'+(legacy?'<a href="assets/'+E(g.file)+'.svg" target="_blank" rel="noopener noreferrer">SVG im Original öffnen ↗</a>':"")+'</div><p class="v13-viewHint">Das Schaubild kann innerhalb des Rahmens seitlich verschoben werden, wenn es breiter als der Bildschirm ist. Nutze die Zoom-Tasten für die gewünschte Lesbarkeit.</p>'+graphic+'<div class="v13-graphicFooter"><a class="btn primary" href="#/artikel/'+encodeURIComponent(g.topic)+'">Passenden wissenschaftlichen Fachartikel öffnen →</a><a class="btn" href="#/infografiken">Andere Grafik wählen</a></div></div>'
}
function bindSingle(){
const z=document.getElementById("v13ZoomIn"),a=document.getElementById("v13ZoomOut"),f=document.getElementById("v13ZoomFit"),viewport=document.getElementById("v13-graphicViewport");if(!z||!viewport)return;const img=document.getElementById("v13-svg"),body=img||viewport.querySelector(".vq-drawing");
if(!body)return;let scale=1;
const initial=img?1200:Math.max(680,Math.round(viewport.clientWidth||800));
const render=()=>{if(img){img.style.width=Math.round(initial*scale)+"px";img.style.height="auto";img.style.maxWidth="none"}else{body.style.width=Math.round(initial*scale)+"px";body.style.maxWidth="none";body.style.minWidth="0"}};
z.onclick=()=>{scale=Math.min(2.5,scale+.2);render()};a.onclick=()=>{scale=Math.max(.5,scale-.2);render()};f.onclick=()=>{scale=Math.max(.35,Math.min(1,(viewport.clientWidth-28)/initial));render()};render();
}
return{gallery,single,bindSingle,originals,resolve};
})();
