"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const path=require("node:path");
const ROOT=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
const html=read("index.html");
const scripts=[...html.matchAll(/<script\s+src="([^"]+)"\s+defer><\/script>/g)].map(x=>x[1]);
const order=["atlas-evidence-v13.js","atlas-longreads-v14-psych.js","atlas-longreads-v14-society.js","atlas-research-sources-v14.js","atlas-reader-v14.js","atlas-v15-data.js","atlas-v15-studies.js","atlas-v4.js"];
for (let i=0;i<order.length-1;i++){
assert(scripts.includes(order[i]),order[i]+" fehlt im HTML");
assert(scripts.indexOf(order[i])<scripts.indexOf(order[i+1]),"Lade-Reihenfolge verletzt: "+order[i]);
}
assert(html.includes('href="atlas-v15.css"'),"CSS fehlt");
for (const file of ["atlas-v4.js","atlas-reader-v14.js","atlas-v15-data.js","atlas-v15-studies.js"]){
new vm.Script(read(file),{filename:file}); // Syntaxprüfung ohne Browser
}
const DB={topics:[],edges:[],v13Papers:{},v14Longreads:{},v7Deep:{},v9Science:{created:[]}};
const ctx=vm.createContext({ATLAS_DB:DB,window:{}});
for(const file of ["atlas-reader-v14.js","atlas-v15-data.js","atlas-v15-studies.js"]){
vm.runInContext(read(file),ctx,{filename:file});
}
assert.equal(DB.topics.length,4,"Vier vertiefte neue Fachartikel erwartet");
assert.equal(Object.keys(DB.v14Longreads).length,4,"Vier Langtexte erwartet");
assert.equal(Object.keys(DB.v13Papers).length,6,"Sechs geprüfte Quellen erwartet");
for (const t of DB.topics) {
assert.equal(DB.v14Longreads[t.id].chapters.length,4,"Vier Kapitel für "+t.id);
assert(DB.v14Longreads[t.id].references.length>=2,"Fachliteratur für "+t.id);
assert(ctx.window.ATLAS_READER_V14.article(t).includes("v14-references"));
}
const ui=ctx.window.ATLAS_STUDIES_V15;
assert.equal(ui.count(),6);
assert(ui.overview().includes('id="v15StudySearch"'));
assert(ui.overview().includes('id="v15StudyResults"'));
assert(ui.details("osc2015").includes("10.1126/science.aac4716"));
assert(ui.details("osc2015").includes("#/artikel/psy-replikation"));
assert(ui.details("unknown").includes("nicht gefunden"));
console.log("SOCIAL ATLAS V15: Syntax, Daten, Navigation und Studienansichten überprüft.");
