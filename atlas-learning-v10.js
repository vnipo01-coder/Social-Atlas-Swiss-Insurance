/* SOCIAL ATLAS 10 – transparenter, lokal generierter Lernfall statt vorgetäuschter KI-Rechtsentscheidung. */
window.ATLAS_LEARN_V10=(()=>{
"use strict";
const D=ATLAS_DB,E=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const cases=D.cases,cantons=D.cantons;
const formOpts=(rows)=>rows.map(x=>'<option value="'+E(x.id)+'">'+E(x.title||x.name)+'</option>').join("");
function generator(){
return '<div class="a10-generator"><header class="a10-workHero"><span class="eyebrow">LERNSYSTEM · FIKTIVE FALLVARIANTEN</span><h1>Einen eigenen Lernfall erstellen</h1><p>Wähle einen vorhandenen Musterfall und verändere die Lebenssituation. Die App erzeugt ein Aufgabenblatt mit offenen Fragen, einem Prüfweg und einer ausklappbaren Lösungsskizze.</p><div class="a10-info"><strong>Was heisst «generieren»?</strong> Diese Funktion kombiniert redaktionelle Lernbausteine mit deinen Angaben. Es ist keine externe generative KI und keine automatische Berechnung von Sozialhilfe oder Versicherungsleistungen.</div></header>'+
'<div class="a10-labSteps"><div><b>01 · Thema auswählen</b><p>Was möchtest du bearbeiten?</p></div><div><b>02 · Situation anpassen</b><p>Kanton, Haushalt, Arbeit und Herausforderung ändern.</p></div><div><b>03 · Wissen anwenden</b><p>Aufgaben lösen und erst danach die Denkwege öffnen.</p></div></div>'+
'<section class="a10-config"><h2>Schritt 1 und 2 · Dein Fall</h2><div class="a10-formGrid">'+
'<label>Ausgangssituation<select class="select" id="genCase">'+formOpts(cases)+'</select><small>Legt die fachlichen Fragen des Falles fest.</small></label>'+
'<label>Bezugs-Kanton<select class="select" id="genCanton">'+formOpts(cantons)+'</select><small>Kantonale Regeln müssen eigens geprüft werden.</small></label>'+
'<label>Fiktives Alter<input class="input" type="number" id="genAge" min="0" max="110" value="42"><small>Verändert die Fallbeschreibung, nicht automatisch das Gesetz.</small></label>'+
'<label>Haushaltsform<select class="select" id="genHouse"><option>Alleinlebend</option><option>Paar</option><option>Familie mit Kindern</option><option>Wohngemeinschaft</option></select><small>Kann den Bedarf und die Haushaltsrechnung verändern.</small></label>'+
'<label>Erwerbssituation<select class="select" id="genWork"><option>Ohne Erwerbsarbeit</option><option>Teilzeit erwerbstätig</option><option>Vollzeit erwerbstätig</option><option>Arbeitsunfähig gemeldet</option><option>Pensioniert</option></select><small>Kann weitere Versicherungen oder Einkünfte betreffen.</small></label>'+
'<label>Zusätzliche Herausforderung<select class="select" id="genChallenge"><option>Unvollständige Unterlagen</option><option>Offener Leistungsentscheid</option><option>Hohe Wohnkosten</option><option>Unklare Zuständigkeit</option><option>Medizinische Zusatzkosten</option></select><small>Erzeugt vertiefende Klärungsfragen.</small></label>'+
'</div><div class="a10-configActions"><button id="genRun" class="btn primary">Lernfall erstellen →</button><span>Nur erfundene Beispiele verwenden. Keine echten Klientendaten eingeben.</span></div></section>'+
'<div id="genResult" class="a10-genEmpty" aria-live="polite"><h3>Dein Arbeitsblatt erscheint hier</h3><p>Wähle deine Einstellungen und klicke auf «Lernfall erstellen». Danach kannst du die Aufgaben selbst bearbeiten und eine Lösungsskizze aufklappen.</p></div>'+
'<details class="a10-suppInfo"><summary>Was kann der Generator – und was nicht? <span>+</span></summary><p>Der Generator ist ein didaktisches Werkzeug. Er verändert Textbausteine und erstellt gezielte Rückfragen. Er berechnet keine verbindlichen Tarife, diagnostiziert keine Krankheiten, prüft nicht automatisch den aktuellen Gesetzesstand und ersetzt keine Fachperson.</p></details></div>';
}
const challenges={
"Unvollständige Unterlagen":["Welche notwendigen Nachweise liegen noch nicht vor?","Welche ersten Abklärungen sind trotz unvollständiger Akte sinnvoll, insbesondere bei einer Notlage?"],
"Offener Leistungsentscheid":["Welche Stelle muss noch entscheiden, und welche Verfahrensphase ist erreicht?","Welche Übergangssituation muss während des offenen Entscheids abgeklärt werden?"],
"Hohe Wohnkosten":["Welche anerkannten Wohnkostenrichtlinien gelten für den konkreten Kanton und die Gemeinde?","Welche Tatsachen sind bei einer möglichen Kostensenkung und der Zumutbarkeit relevant?"],
"Unklare Zuständigkeit":["Welche Behörden oder Versicherungen könnten zuständig sein?","Wie werden örtliche, sachliche und zeitliche Zuständigkeit getrennt geprüft?"],
"Medizinische Zusatzkosten":["Welche gesundheitliche Leistung wird konkret benötigt, und gibt es fachliche Unterlagen?","Welche Versicherung, besondere Leistung oder Kostengutsprache ist möglicherweise vorrangig?"]
};
const v=(arr)=>arr.map((s,i)=>'<li>'+E(s)+'</li>').join("");
function variant({c,canton,age,house,work,challenge,n}){
const extra=challenges[challenge]||[];
const add=[];
if(house==="Familie mit Kindern")add.push("Welche Familiensituation, Betreuungsbedarfe und allfälligen Kinder- oder Familienleistungen sind relevant?");
if(work==="Arbeitsunfähig gemeldet")add.push("Sind Art und Dauer einer Arbeitsunfähigkeit ärztlich dokumentiert, und welche Versicherung könnte je nach Ursache leisten?");
if(work.includes("erwerbstätig"))add.push("Welche tatsächlichen Einkünfte sind vorhanden, und welche versicherungsrechtlichen Beiträge oder Ansprüche bestehen?");
if(work==="Pensioniert")add.push("Welche Altersvorsorgeleistungen, Pensionskassenansprüche oder Ergänzungsleistungen sind allenfalls relevant?");
if(Number(age)<18)add.push("Welche zusätzlichen Regeln für minderjährige Personen, Obsorge und Kindeswohl müssen fachlich geklärt werden?");
const prompts=[...new Set([...(c.questions||[]),...extra,...add])];
const steps=c.steps||[];
const refs=[...new Map(D.laws.filter(l=>(l.topics||[]).some(id=>(c.topics||[]).includes(id))).map(l=>[l.id,l])).values()].slice(0,9);
const related=[...new Set(c.topics||[])].map(id=>D.topics.find(t=>t.id===id)).filter(Boolean);
const opening="Fiktive Person ("+age+" Jahre), Haushaltsform: "+house+", Erwerbssituation: "+work+", Kanton "+canton.name+". "+c.situation+" Zusätzliche Herausforderung: "+challenge+".";
const refsHTML=refs.length?'<ul>'+refs.map(l=>'<li><a href="'+E(l.url)+'" target="_blank" rel="noopener noreferrer">'+E(l.code)+' · '+E(l.title)+'</a></li>').join("")+'</ul>':'<p>Für diese Variante sind keine abschliessend zugeordneten Rechtsnormen hinterlegt; das geltende Spezialrecht ist eigenständig zu prüfen.</p>';
const html='<section class="a10-generated"><header class="a10-generatedHeader"><div><span class="eyebrow">SCHRITT 3 · ARBEITSBLATT</span><h2>Lernfall '+n+': '+E(c.title)+'</h2></div><div class="a10-configActions"><button id="genCopy" class="btn minor">Text kopieren</button><button id="genPrint" class="btn">Drucken / PDF</button></div></header>'+
'<div class="a10-caseStory"><b>Ausgangslage</b><p>'+E(opening)+'</p></div>'+
'<section class="a10-task"><h3>Aufgabe A · Welche Tatsachen fehlen?</h3><p>Ordne zunächst die bekannte Ausgangslage und formuliere, was für eine korrekte Entscheidung zusätzlich geklärt werden müsste.</p><ol>'+v(prompts)+'</ol></section>'+
'<section class="a10-task"><h3>Aufgabe B · Wie würdest du vorgehen?</h3><p>Schreibe deinen eigenen Ablauf auf, bevor du die Lösungsskizze öffnest. Die Liste unten enthält einen ersten Prüfpfad.</p><ol>'+v(steps)+'</ol></section>'+
'<details class="a10-solution"><summary>Aufgabe C · Lösungsskizze anzeigen <span>+</span></summary><div><p>Diese Lösungsskizze enthält keine individuelle Leistungszusage. Sie zeigt, welche Überlegungen zur zusätzlichen Herausforderung <strong>'+E(challenge)+'</strong> gehören können.</p><h4>Zusätzliche Abklärungen</h4><ol>'+v(extra.length?extra:prompts.slice(0,3))+'</ol><h4>Systematischer Prüfpfad</h4><ol>'+v(steps)+'</ol><h4>Rechtsgrundlagen als Rechercheeinstieg</h4>'+refsHTML+'<h4>Passende Fachartikel</h4><div class="a10-caseLinks">'+related.map(t=>'<a href="#/artikel/'+encodeURIComponent(t.id)+'">'+E(t.title)+' →</a>').join("")+'</div><p class="a10-warning">Alter, Haushalt und Kanton verändern eine Fallbeschreibung. Sie lösen hier noch keine verbindliche Neuberechnung der Rechtsansprüche aus; dafür fehlen weitere individuelle Angaben und aktuelle Spezialnormen.</p></div></details>'+
'<footer class="a10-caseFoot">Fiktiver Übungsfall, nicht Rechtsberatung oder Verfügung. Gesetzesänderungen und Sonderfälle getrennt prüfen.</footer></section>';
const txt=["LERNFALL "+n+": "+c.title,opening,"","AUFGABE A: FEHLENDE TATSACHEN",...prompts.map((x,i)=>(i+1)+". "+x),"","AUFGABE B: PRÜFPFAD",...steps.map((x,i)=>(i+1)+". "+x),"","RECHTSGRUNDLAGEN",...refs.map(l=>l.code+" "+l.url),"","Nur didaktische Fallvariante, keine verbindliche Entscheidung."].join("\n");
return {html,text:txt};
}
return {generator,variant};
})();
