
const $=id=>document.getElementById(id);
const nodes=[
["AHV","Alters- und Hinterlassenenversicherung","Erste Säule: Leistungen bei Alter und Tod.","BVG, EL, Sozialhilfe"],
["IV","Invalidenversicherung","Eingliederung und bei erfüllten Voraussetzungen weitere Leistungen.","BVG, EL, Sozialhilfe"],
["EL","Ergänzungsleistungen","Bedarfsabhängige Ergänzung zu AHV/IV bei erfüllten Voraussetzungen.","AHV, IV, Sozialhilfe"],
["BVG","Berufliche Vorsorge","Zweite Säule für Alter, Invalidität und Tod.","AHV, IV"],
["ALV","Arbeitslosenversicherung","Versicherung bei Arbeitslosigkeit nach gesetzlichen Voraussetzungen.","Sozialhilfe"],
["KVG","Krankenversicherung","Obligatorische Krankenpflegeversicherung; Prämienverbilligung separat prüfen.","UVG, Sozialhilfe"],
["UVG","Unfallversicherung","Leistungen bei versicherten Unfällen und Berufskrankheiten.","IV, BVG, KVG"],
["EO","Erwerbsersatzordnung","Erwerbsersatz bei bestimmten Dienst-, Elternschafts- und Betreuungsereignissen.","AHV"],
["FamZ","Familienzulagen","Familienbezogene Leistungen mit Anspruchs- und Koordinationsregeln.","ALV, Sozialhilfe"],
["SH","Sozialhilfe","Kantonal geregelte, subsidiäre Existenzsicherung; keine Sozialversicherung.","AHV, IV, EL, ALV, KVG"]
];
function showNode(id){const n=nodes.find(x=>x[0]===id);$("nodeDetail").innerHTML="<h2>"+n[0]+" – "+n[1]+"</h2><p>"+n[2]+"</p><b>Typische Schnittstellen</b><p>"+n[3].split(", ").map(x=>'<span class="chip">'+x+"</span>").join("")+'</p><p class="muted">Ansprüche erfordern eine individuelle Prüfung.</p><a href="https://www.bsv.admin.ch/" target="_blank" rel="noopener">Amtliche Informationen ↗</a>';[...$("nodes").children].forEach(b=>b.classList.toggle("active",b.dataset.id===id))}
nodes.forEach(n=>{let b=document.createElement("button");b.dataset.id=n[0];b.innerHTML="<strong>"+n[0]+"</strong><span>"+n[1]+"</span>";b.onclick=()=>showNode(n[0]);$("nodes").appendChild(b)});showNode("SH");
const cantons=[["AG","Aargau"],["AI","Appenzell Innerrhoden"],["AR","Appenzell Ausserrhoden"],["BE","Bern"],["BL","Basel-Landschaft"],["BS","Basel-Stadt"],["FR","Freiburg"],["GE","Genf"],["GL","Glarus"],["GR","Graubünden"],["JU","Jura"],["LU","Luzern"],["NE","Neuenburg"],["NW","Nidwalden"],["OW","Obwalden"],["SG","St. Gallen"],["SH","Schaffhausen"],["SO","Solothurn"],["SZ","Schwyz"],["TG","Thurgau"],["TI","Tessin"],["UR","Uri"],["VD","Waadt"],["VS","Wallis"],["ZG","Zug"],["ZH","Zürich"]];
cantons.forEach(c=>$("canton").add(new Option(c[0]+" – "+c[1],c[0])));$("canton").value="GR";
function showCanton(){const c=cantons.find(x=>x[0]===$("canton").value);const steps=["Zuständigkeit und Aufenthaltsstatus","Bedürftigkeit, Mittel und Subsidiarität","Grundbedarf, Wohnkosten und medizinische Grundversorgung","Situationsbedingte Leistungen und Integration","Verfahren, Begründung und Rechtsmittel"];$("cantonDetail").innerHTML="<h2>"+c[1]+" ("+c[0]+")</h2><p>Prüfschema der wirtschaftlichen Sozialhilfe:</p>"+steps.map((s,i)=>'<div class="step"><b>'+(i+1)+".</b> "+s+"</div>").join("")+'<p class="muted">Kantonsspezifische Beträge und Rechtsnormen sind in dieser Version noch nicht verifiziert und deshalb nicht hinterlegt.</p><a href="https://skos.ch/" target="_blank" rel="noopener">SKOS ↗</a>'}
$("canton").onchange=showCanton;showCanton();
const countries=[["Schweiz","AHV/IV, berufliche Vorsorge, Kranken- und weitere Sozialversicherungen; kantonale Sozialhilfe."],["Deutschland","Sozialgesetzbücher; Renten-, Kranken-, Pflege-, Unfall- und Arbeitslosenversicherung sowie Grundsicherung."],["Frankreich","Sécurité sociale und weitere soziale Sicherungsleistungen, darunter bedarfsabhängige Unterstützung."],["Italien","INPS als wichtiger Träger; Servizio Sanitario Nazionale für die öffentliche Gesundheitsversorgung."],["Österreich","Kranken-, Pensions- und Unfallversicherung; Arbeitslosenversicherung und landesrechtliche Sozialhilfe."],["Liechtenstein","Eigenständige AHV/IV, Krankenversicherung, berufliche Vorsorge und weitere Sicherungsleistungen."]];
function showCountry(i){$("countryDetail").innerHTML="<h2>"+countries[i][0]+"</h2><p>"+countries[i][1]+'</p><p class="muted">Vereinfachte Grundstruktur. Grenzüberschreitende Ansprüche erfordern eine Prüfung des Koordinationsrechts.</p>';[...$("countries").children].forEach((b,j)=>b.classList.toggle("active",i===j))}
countries.forEach((c,i)=>{let b=document.createElement("button");b.innerHTML="<strong>"+c[0]+"</strong><span>System öffnen</span>";b.onclick=()=>showCountry(i);$("countries").appendChild(b)});showCountry(0);
const scenarios=[
["Arbeitsverlust","Eine Person verliert ihre Arbeitsstelle.",[["ALV","Beitragszeit, Vermittlungsfähigkeit und Anmeldung prüfen."],["Andere Mittel","Weitere Einkommen, Vermögen und vorrangige Ansprüche klären."],["Sozialhilfe","Bei aktueller Bedürftigkeit kantonale Hilfe prüfen."]]],
["Längere Krankheit","Eine Person kann länger nicht arbeiten.",[["Gesundheit","Medizinische Versorgung und Lohnfortzahlung/Krankentaggeld abklären."],["IV/BVG","Eingliederung, Versicherungsdeckung und mögliche Leistungen prüfen."],["EL/Sozialhilfe","Bei geeigneter Grundleistung EL, bei aktueller Notlage Sozialhilfe prüfen."]]],
["Pensionierung","Eine Person erreicht das Referenzalter.",[["AHV","Rentenanspruch und Beitragsdauer prüfen."],["BVG","Berufliche Vorsorge und andere Einkommen klären."],["EL","Persönliche und wirtschaftliche Anspruchsvoraussetzungen prüfen."]]],
["Situationsbedingte Leistung","Eine unterstützte Person beantragt eine besondere Ausgabe.",[["Bedarf","Notwendigkeit, Zweck und Belege prüfen."],["Andere Kostenträger","Subsidiäre Zuständigkeit und mögliche Deckung abklären."],["Kantonale SIL","Grundversorgende oder fördernde SIL sowie Ermessen prüfen."]]]
];
scenarios.forEach((s,i)=>$("scenario").add(new Option(s[0],i)));
function showScenario(){const s=scenarios[+$("scenario").value];$("caseDetail").innerHTML="<h2>"+s[0]+"</h2><p>"+s[1]+"</p>"+s[2].map((a,i)=>'<div class="step"><strong>'+(i+1)+". "+a[0]+"</strong><p>"+a[1]+"</p></div>").join("")+'<p class="muted">Lernschema, keine zwingende zeitliche Reihenfolge oder Leistungszusage.</p>'}
$("scenario").onchange=showScenario;showScenario();
const questions=[
["Ist Sozialhilfe eine eidgenössische Sozialversicherung?",["Ja","Nein"],1,"Sie ist eine kantonal geregelte, bedarfsabhängige Existenzsicherung."],
["Welche Leistung sollte bei einer zu tiefen IV-Rente geprüft werden?",["EL","EO"],0,"EL können eine IV-Grundleistung bei erfüllten Voraussetzungen ergänzen."],
["Was gehört zur zweiten Säule?",["ALV","BVG"],1,"Die berufliche Vorsorge bildet die zweite Säule."],
["Sind die Sozialhilferegeln in allen Kantonen identisch?",["Ja","Nein"],1,"Kantonale Umsetzung und teils kommunale Vorgaben unterscheiden sich."]
];let q=0,score=0,answered=false;
function showQuestion(){answered=false;const x=questions[q];$("question").innerHTML='<p class="muted">Frage '+(q+1)+" / "+questions.length+" · "+score+" richtige Antworten</p><h2>"+x[0]+'</h2><div id="options"></div><p id="feedback" aria-live="polite"></p>';x[1].forEach((o,i)=>{let b=document.createElement("button");b.className="answer";b.textContent=o;b.onclick=()=>{if(answered)return;answered=true;if(i===x[2])score++;$("feedback").textContent=(i===x[2]?"✓ Richtig. ":"Noch nicht richtig. ")+x[3]};$("options").appendChild(b)})}
$("next").onclick=()=>{q=(q+1)%questions.length;if(q===0)score=0;showQuestion()};showQuestion();
$("tabs").querySelectorAll("button").forEach(b=>b.onclick=()=>{$("tabs").querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));["netz","kantone","europa","faelle","quiz"].forEach(id=>$(id).hidden=id!==b.dataset.tab)});
