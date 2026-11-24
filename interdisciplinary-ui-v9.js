/* SOCIAL ATLAS V9 – Interdisziplinäres Lexikon und fachbezogene Brücken */
window.ATLAS_HUMANITIES=(()=>{
"use strict";const D=ATLAS_DB,S=D.v9Science,E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const title=x=>D.topics.find(t=>t.id===x)?.title||x;
const href=x=>"#/artikel/"+encodeURIComponent(x);
const source=(s)=>'<a href="'+E(s.url)+'" target="_blank" rel="noopener noreferrer">'+E(s.label)+' ↗</a>';
function lexicon(){
return '<section class="h9-lexicon"><div class="h9-banner"><span class="eyebrow">INTERDISZIPLINÄRES NACHSCHLAGEWERK</span><h1>Fachlexikon Soziale Arbeit und Humanwissenschaften</h1><p>Begriffe aus Soziologie, Psychologie, Neurowissenschaften und Suchtwissenschaft präzise erklärt – mit direktem Link zum passenden ausführlichen Fachartikel.</p><div class="h9-counters"><span><b>'+S.terms.length+'</b> Begriffe</span><span><b>'+S.created.length+'</b> neue Fachdossiers</span><span><b>'+S.categories.length+'</b> Fachgebiete</span></div></div>'+
'<div class="h9-notice"><b>Wissenschaftliche Unterscheidung:</b> Eine soziologische Theorie, eine WHO-Klassifikation, eine fachliche Arbeitsmethode und eine klinische Diagnose haben unterschiedliche Funktionen. Diagnosen oder individuelle Rechtsansprüche werden nicht aus Glossarbegriffen abgeleitet.</div>'+
'<div class="h9-filter"><label for="h9Search">Begriffe suchen</label><input class="input" id="h9Search" placeholder="z. B. Habitus, ICF, Neuroplastizität, Sucht …"><label for="h9Area">Wissensgebiet</label><select class="select" id="h9Area"><option value="">Alle Fachgebiete</option>'+S.categories.map(x=>'<option>'+E(x)+'</option>').join("")+'</select><strong id="h9Count"></strong></div>'+
'<div id="h9Results" class="h9-results"></div><div class="v13-pages" id="h9Pagination"></div><h2>Weiterführende Grundlagen</h2><div class="h9-sourceGrid">'+["ifsw","ethics","icf","clinical","bag","infodrog","nida"].map(k=>source(S.sources[k])).join("")+'</div></section>'
}
let lexPage=1;
function draw(){
const q=(document.getElementById("h9Search")?.value||"").trim().toLowerCase(),a=document.getElementById("h9Area")?.value||"",terms=S.terms.filter(t=>(!a||t.area===a)&&[t.word,t.definition,t.area,t.extra,title(t.topic)].join(" ").toLowerCase().includes(q));
document.getElementById("h9Count").textContent=terms.length+" Begriffe";
const totalPages=Math.max(1,Math.ceil(terms.length/18));lexPage=Math.min(lexPage,totalPages);const buckets={};for(const t of terms.slice((lexPage-1)*18,lexPage*18)){const key=t.word[0].toUpperCase();(buckets[key]??=[]).push(t)}
document.getElementById("h9Results").innerHTML=terms.length?Object.entries(buckets).map(([letter,items])=>'<section class="h9-letter"><h2>'+E(letter)+'</h2><div class="h9-termList">'+items.map(t=>'<article class="h9-term"><div class="h9-termTop"><h3>'+E(t.word)+'</h3><span>'+E(t.area)+'</span></div><p>'+E(t.definition)+'</p>'+(t.extra?'<p>'+E(t.extra)+'</p>':"")+'<a href="'+href(t.topic)+'">Im Fachartikel '+E(title(t.topic))+' vertiefen →</a></article>').join("")+'</div></section>').join(""):'<div class="empty">Kein Fachbegriff gefunden. Versuche eine andere Schreibweise oder ein verwandtes Wort.</div>';
const pages=document.getElementById('h9Pagination');if(pages){pages.innerHTML=totalPages>1?'<button type="button" data-lex-page="prev" '+(lexPage===1?'disabled':'')+'>← Zurück</button><span>'+lexPage+' / '+totalPages+'</span><button type="button" data-lex-page="next" '+(lexPage>=totalPages?'disabled':'')+'>Weitere Begriffe →</button>':'';pages.onclick=e=>{const x=e.target.closest('[data-lex-page]');if(!x||x.disabled)return;lexPage+=x.dataset.lexPage==='next'?1:-1;draw();document.getElementById('h9Search')?.scrollIntoView({behavior:'smooth',block:'start'})}};
}
function bind(){const q=document.getElementById("h9Search"),a=document.getElementById("h9Area");if(q){const encoded=location.hash.split("?")[1]||"";const query=new URLSearchParams(encoded).get("q");if(query)q.value=query;q.oninput=()=>{lexPage=1;draw()}}if(a)a.onchange=()=>{lexPage=1;draw()};draw()}
function subjects(){
return '<section class="h9-subjects"><span class="eyebrow">SOZIALE ARBEIT · SOZIOLOGIE · PSYCHOLOGIE · NEUROWISSENSCHAFTEN · SUCHT</span><h1>Menschen, Gesellschaft und Gesundheit verstehen</h1><p class="lead">Vertiefende wissenschaftliche Begriffe und Theorien für das Verstehen sozialer Lebenslagen. Die Artikel verbinden Begriffe, Praxis, wissenschaftliche Quellen und kritische Grenzen.</p><div class="h9-disciplines">'+S.categories.map(cat=>{const a=D.topics.filter(t=>t.category===cat);return '<section class="h9-discipline"><h2>'+E(cat)+'</h2><p>'+({
"Soziale Arbeit":"Profession, Theorie, Fallführung, Selbstbestimmung und Ethik",
"Soziologie":"Ungleichheit, Kapital, Stigmatisierung, Sozialraum und Teilhabe",
"Psychologie":"Erleben, Stress, Trauma, Motivation und psychosoziale Krisen",
"Neurowissenschaften":"Gehirn, Lernen, Neuroplastizität, Belohnungsverarbeitung und ICF",
"Sucht & Gesundheit":"Abhängigkeit, Vier-Säulen-Politik, Schadensminderung und Recovery"
}[cat])+'</p><div class="h9-discGrid">'+a.map(t=>'<a href="'+href(t.id)+'"><strong>'+E(t.title)+'</strong><small>'+E(t.summary)+'</small></a>').join("")+'</div></section>'}).join("")+'</div><div class="toolbar"><a class="btn primary" href="#/fachlexikon">Alphabetisches Fachlexikon öffnen →</a><a class="btn" href="#/infografiken">Infografiken nach Fachthema →</a></div></section>'
}
const contextual={
sozialhilfe:["Armut, Deprivation und soziale Exklusion","soz-armut","Materielle Bedürftigkeit, soziale Teilhabe und institutionelle Zugänge müssen getrennt betrachtet werden."],
migration:["Intersektionalität und soziale Teilhabe","soz-intersektionalitaet","Aufenthaltsstatus, Sprachzugang und Lebenssituation können unterschiedliche soziale Barrieren erzeugen."],
"mig-s":["Psychosoziale Folgen und Stabilisierung","psy-trauma","Eine Fluchterfahrung erlaubt keine pauschale Traumadiagnose; Wohnstabilität und Zugang zu Hilfe sind zentrale Ressourcen."],
"mig-uno":["Menschenrechte in der professionellen Praxis","sa-ethik","Völkerrechtliche Prinzipien, Berufsethik und konkrete nationale Ansprüche besitzen unterschiedliche Funktionen."],
iv:["WHO-ICF und Teilhabe","neuro-icf","Gesundheitsdiagnose, Funktionsfähigkeit und rechtlich bemessene Invalidität sind verschiedene Grössen."],
iveingliederung:["Motivation und Handlungsmöglichkeiten","psy-motivation","Eingliederung verlangt passende Bedingungen, Ziele und Beteiligung statt eines pauschalen Motivationsurteils."],
"ivhilfsmittel":["Funktionsfähigkeit in der Umwelt","neuro-icf","Hilfsmittel können Kontextbarrieren verändern, ohne den medizinischen Befund aufzuheben."],
alv:["Ungleichheit und Arbeitsmarkt","soz-ungleichheit","Erwerbslosigkeit ist nicht ausschliesslich eine persönliche Eigenschaft; Arbeitsmarkt und Chancenstruktur gehören zur Analyse."],
kvg:["Psychische und soziale Gesundheit","psy-krise","Versicherungsschutz, Zugänglichkeit und psychosoziale Lebenslage sind verschiedene Aspekte."],
el:["Armut und materielle Teilhabe","soz-armut","Eine niedrige Rente ist nicht mit einer vollständigen EL-Bedarfsberechnung gleichzusetzen."],
sil:["Empowerment und soziale Teilhabe","sa-empowerment","Situationsbedingte Leistungen können Handlungsmöglichkeiten fördern; anwendbares Recht entscheidet über die Finanzierung."],
integration:["Teilhabe und Motivation","sa-partizipation","Integration bedeutet mehr als Erwerbsarbeit und setzt eine reale Beteiligung an Zielen voraus."],
graubuenden:["Fallführung zwischen Institutionen","sa-case","Zuständige Stellen und Leistungsströme müssen über Mikro-, Meso- und Makroebene koordiniert werden."],
grundbedarf:["Materielle Armut und soziale Ausgrenzung","soz-armut","Die Grundbedarfspauschale ist ein rechtlicher Budgetbaustein, keine vollständige soziologische Armutsdefinition."],
wohnkosten:["Sozialraum und Zugang zu Wohnraum","soz-sozialraum","Mietzinsrichtwerte und tatsächliche Wohnmöglichkeiten sind unterschiedliche Sachverhalte."],
medizinsh:["ICF und gesundheitliche Teilhabe","neuro-icf","Behandlung, Funktionsfähigkeit und Finanzierung müssen fallbezogen unterschieden werden."],
"grstatus":["Stigmatisierung und Migrationsrecht","soz-stigma","Aufenthaltsstatus soll in der Fallakte sachlich, nicht als moralische Bewertung behandelt werden."],
"mig-f-va":["Soziale Exklusion","soz-exklusion","Rechtsstatus und institutionelle Regeln können Möglichkeiten der Arbeit und Teilhabe beeinflussen."],
"mig-f-fl":["Intersektionalität","soz-intersektionalitaet","Flüchtlingseigenschaft, Familie und Wohnsituation bedürfen gesonderter individueller Betrachtung."],
"mig-b-fl":["Soziale Teilhabe","sa-partizipation","Formale Rechte und reale Zugänglichkeit gesellschaftlicher Angebote sind auseinanderzuhalten."],
"mig-n":["Sozialraum und Unterstützung","soz-sozialraum","Wohnsituation, Behördenkontakte und soziale Netzwerke können den Unterstützungsbedarf prägen."],
"mig-finanz":["Armut und Teilhabe","soz-armut","Bundespauschalen und individuelles verfügbares Einkommen sind nicht dasselbe."],
famz:["Kindliche Entwicklung und soziale Sicherung","sa-kinderschutz","Familienzulagen sind finanzielle Rechtsansprüche; Kindeswohl ist ein breiterer fachlicher Begriff."],
"ahv":["Lebenslauf und soziale Ungleichheit","soz-sozialisation","Vorsorgeansprüche und Lebensläufe hängen unter anderem mit Erwerbs- und Familienbiografien zusammen."],
"bvg":["Ungleichheit von Vorsorgechancen","soz-ungleichheit","Berufliche Vorsorge hängt von unterschiedlichen Erwerbsbiografien und institutionellen Regeln ab."],
"subsidiaritaet":["Wirtschaftliche Ressourcen und Fallführung","sa-case","Vorrangige Ansprüche, aktuelle Notlage und spätere Rückerstattung sind zeitlich zu trennen."],
"haushalt":["Rollen und familiäre Netzwerke","soz-sozialisation","Haushaltsformen, Unterhaltsrecht und tatsächliche Beziehungen sind nicht identisch."],
"opferhilfe":["Traumasensible Unterstützung","psy-trauma","Schutz und Versorgung müssen mit einem nicht-diagnostizierenden, respektvollen Zugang verbunden sein."],
"krankentaggeld":["Stress und psychosoziale Belastungen","psy-stress","Eine krankheitsbedingte Arbeitsunfähigkeit kann soziale und wirtschaftliche Folgen verstärken."]
};
function perspective(t){const c=contextual[t.id];if(!c)return "";return '<section class="h9-perspective"><span class="eyebrow">INTERDISZIPLINÄRE ERWEITERUNG</span><h2>Sozialwissenschaftliche Perspektive</h2><h3>'+E(c[0])+'</h3><p>'+E(c[2])+'</p><a href="'+href(c[1])+'">Im wissenschaftlichen Fachartikel vertiefen →</a><p class="count">Dieser Hinweis ergänzt die rechtliche Darstellung, ersetzt jedoch keine individuelle Sachverhalts-, Rechts- oder klinische Prüfung.</p></section>'}
function home(){return '<section class="h9-home"><div><span class="eyebrow">NEU · INTERDISZIPLINÄRES FACHWISSEN</span><h2>Sozialwissenschaften, Psychologie, Neurologie und Sucht verstehen</h2><p>'+S.created.length+' eigenständige wissenschaftliche Dossiers und '+S.terms.length+' präzise Lexikonbegriffe erweitern SOCIAL ATLAS über das Sozialversicherungsrecht hinaus.</p><div class="toolbar"><a class="btn primary" href="#/sozialwissenschaften">Wissensgebiete entdecken</a><a class="btn" href="#/fachlexikon">Fachlexikon öffnen</a></div></div></section>'}
return{lexicon,subjects,draw,bind,perspective,home,topics:S.created};
})();
