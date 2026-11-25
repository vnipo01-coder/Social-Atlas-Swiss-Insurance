"use strict";
/* Testet die neue freie Lesebibliothek ohne externe Node-Abhängigkeiten.
 * Auf GitHub Actions mit node tests/v16-smoke.cjs ausführen.
 */
const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),path=require("node:path");
const root=path.resolve(__dirname,".."),read=f=>fs.readFileSync(path.join(root,f),"utf8");
const html=read("index.html");
const order=[...html.matchAll(/<script src="([^"]+)" defer><\/script>/g)].map(m=>m[1]);
const sequence=["atlas-v15-studies.js","atlas-v16-fulltexts.js","atlas-v16-essays-neuro.js","atlas-v16-essays-society.js","atlas-v16-essay-extensions.js","atlas-v16-experience.js","atlas-v4.js"];
for(let i=0;i<sequence.length;i++){assert(order.includes(sequence[i]),"Missing "+sequence[i]);if(i)assert(order.indexOf(sequence[i-1])<order.indexOf(sequence[i]),"Wrong script order "+sequence[i])}
assert(html.includes('href="atlas-v16.css"'),"V16 design CSS not loaded");
assert(html.includes('href="atlas-v15.css"'),"V15 styles must remain");
const app=read("atlas-v4.js");
new vm.Script(app,{filename:"atlas-v4.js"});
assert(app.includes("window.ATLAS_EXPERIENCE_V16?.hasEssay(id)"),"Article routing not upgraded");
assert(app.includes("window.ATLAS_EXPERIENCE_V16?.bind(page,id)"),"Page interaction not bound");
assert(app.includes('"?section="+(i+1)'),"Search index missing direct essay chapter links");
const D={topics:["neuro-exekutiv","psy-stress","soz-ungleichheit","sa-profession"].map((id)=>({id,title:id,category:"Psychologie"})),laws:[],v14Longreads:{},v13Papers:{diamond2013:{authors:"Adele Diamond",title:"Executive Functions",year:2013,reference:"Annual Review of Psychology 64, 135–168",type:"Review",method:"Review",limit:"Review without direct clinical diagnosis"}}};
const context=vm.createContext({ATLAS_DB:D,window:{},URLSearchParams,Intl,console});
const files=["atlas-v16-fulltexts.js","atlas-v16-essays-neuro.js","atlas-v16-essays-society.js","atlas-v16-essay-extensions.js","atlas-v16-experience.js"];
for(const file of files){const code=read(file);new vm.Script(code,{filename:file});vm.runInContext(code,context,{filename:file})}
const X=context.window.ATLAS_EXPERIENCE_V16,ed=context.window.ATLAS_V16_EDITORIAL;
assert.equal(X.stats().essays,4,"Four real longform essays expected");
assert(X.stats().words>=6500,"Research prose should contain at least 6,500 words");
assert.equal(Object.keys(D.v16Essays).length,4);
const sources=new Set();
for(const [id,essay] of Object.entries(D.v16Essays)){
assert.equal(essay.chapters.length,7,"Seven substantial chapters required: "+id);
assert(essay.intro.length>350,"Essay needs an original introduction: "+id);
for(const ch of essay.chapters){
 assert(ch.paragraphs.length>=4,"Every chapter has at least four prose paragraphs: "+id);
 assert(ch.paragraphs.every(p=>p.trim().split(/\s+/).length>=35),"Not a proper paragraph: "+id+" "+ch.title);
 assert(ch.sources.length>=1);
 ch.sources.forEach(k=>{assert(D.v13Papers[k]?.fulltextUrl,"No genuine fulltext for "+k);sources.add(k)});
}
const output=X.page({id});
assert.equal((output.match(/class="v16-chapter"/g)||[]).length,7,"All chapters rendered: "+id);
assert(output.includes("Originalstudie vollständig lesen"),"Direct academic fulltext links absent: "+id);
assert(!output.includes("<details"),"Longform reader may not hide prose in accordions: "+id);
assert(output.includes('data-v16-focus'),"Focus mode missing: "+id);
assert(output.includes('data-v16-font'),"Font scaling missing: "+id);
assert(output.includes('id="v16-bibliography"'),"Research bibliography missing: "+id);
assert(output.includes('class="v16-readingRail"'),"Reading navigation missing: "+id);
}
assert.equal(sources.size,5,"Five distinct fulltext primary/review sources expected");
for(const key of sources){
const src=D.v13Papers[key],uri=new URL(src.fulltextUrl);
assert.equal(uri.protocol,"https:","Insecure link: "+key);
assert(["pmc.ncbi.nlm.nih.gov","onlinelibrary.wiley.com","journals.plos.org"].includes(uri.hostname),"Unexpected source host "+uri.hostname);
assert(typeof src.method==="string"&&typeof src.limit==="string","Study type and limitation missing "+key);
}
const start=X.home();
assert(start.includes('data-v16-filter'),"Interactive research filter missing");
assert(start.includes('v16-orbitNode'),"Dynamic knowledge universe missing");
assert(start.includes("#/gebiet/sozialhilfe"),"Previous legal/social-aid navigation must remain accessible");
assert(start.includes("#/studienatlas"),"Studies library link missing");
console.log("SOCIAL ATLAS V16: "+X.stats().essays+" essays, "+X.stats().words+" words, 28 connected chapters, "+sources.size+" accessible fulltext links; rendering, routes and UI structure OK.");
