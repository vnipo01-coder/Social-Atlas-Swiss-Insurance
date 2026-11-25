"use strict";
const assert=require("node:assert/strict");
const fs=require("node:fs");
const vm=require("node:vm");
const path=require("node:path");
const ROOT=path.resolve(__dirname,"..");
const read=p=>fs.readFileSync(path.join(ROOT,p),"utf8");
const html=read("index.html");
const scripts=[...html.matchAll(/<script\s+src="([^"]+)"\s+defer><\/script>/g)].map(x=>x[1]);
const ordered=[
 "atlas-evidence-v13.js",
 "atlas-research-sources-v14.js",
 "atlas-longreads-v14-psych.js",
 "atlas-longreads-v14-society.js",
 "atlas-reader-v14.js",
 "atlas-v15-data.js",
 "atlas-v15-research-depth.js",
 "atlas-v15-depth-methodology.js",
 "atlas-v15-depth-interdisciplinary.js",
 "atlas-v15-studies.js",
 "atlas-v4.js"
];
for(let i=0;i<ordered.length;i++){
 assert(scripts.includes(ordered[i]),"Script missing: "+ordered[i]);
 if(i)assert(scripts.indexOf(ordered[i-1])<scripts.indexOf(ordered[i]),"Load order incorrect: "+ordered[i]);
}
assert(html.includes('href="atlas-v15.css"'),"V15 stylesheet missing");
for(const file of ["atlas-v4.js","atlas-reader-v14.js","atlas-v15-data.js","atlas-v15-research-depth.js","atlas-v15-depth-methodology.js","atlas-v15-depth-interdisciplinary.js","atlas-v15-studies.js"]){
 new vm.Script(read(file),{filename:file});
}
const DB={topics:[],edges:[],laws:[],v13Papers:{},v14Longreads:{},v7Deep:{},v9Science:{created:[]}};
const ctx=vm.createContext({ATLAS_DB:DB,window:{}});
const modelFiles=[
 "atlas-evidence-v13.js","atlas-research-sources-v14.js",
 "atlas-longreads-v14-psych.js","atlas-longreads-v14-society.js",
 "atlas-reader-v14.js",
 "atlas-v15-data.js","atlas-v15-research-depth.js",
 "atlas-v15-depth-methodology.js","atlas-v15-depth-interdisciplinary.js",
 "atlas-v15-studies.js"
];
for(const file of modelFiles)vm.runInContext(read(file),ctx,{filename:file});
const added=ctx.window.ATLAS_DEEP_V15.added;
assert.equal(added.length,9,"Nine enriched dossiers expected");
assert.equal(added.reduce((n,x)=>n+x.added,0),22,"22 additional chapters expected");
const original=["psy-replikation","soz-qualitative-forschung","sa-evaluation","psy-heuristiken"];
for(const id of original){
 const m=DB.v14Longreads[id];
 assert(m,"Missing new dossier: "+id);
 assert.equal(m.chapters.length,7,"Expected 7 chapters: "+id);
 assert.equal(Object.keys(DB.v15ChapterEvidence[id]).length,7,"Every chapter needs evidence: "+id);
}
for(const id of ["psy-stress","neuro-exekutiv","soz-bourdieu","soz-ungleichheit","sa-gespraechsfuehrung"]){
 const m=DB.v14Longreads[id];
 assert(m,"Missing existing dossier: "+id);
 assert(m.chapters.length>=6,"Expected additional depth: "+id);
 assert.equal(Object.keys(DB.v15ChapterEvidence[id]).length,2,"Two new chapter citations expected: "+id);
}
for(const [id,chapters] of Object.entries(DB.v15ChapterEvidence)){
 for(const [idx,refs] of Object.entries(chapters)){
  assert(+idx<DB.v14Longreads[id].chapters.length,"Bad citation chapter: "+id+" "+idx);
  assert(refs.length>0,"Empty chapter citations: "+id+" "+idx);
  for(const ref of refs)assert(DB.v13Papers[ref],"Missing source "+ref);
 }
}
assert.equal(ctx.window.ATLAS_DEEP_V15.sources.length,8);
assert.equal(ctx.window.ATLAS_STUDIES_V15.count(),Object.keys(DB.v13Papers).length);
assert(ctx.window.ATLAS_STUDIES_V15.count()>=30,"Research atlas should retain earlier sources");
assert(ctx.window.ATLAS_STUDIES_V15.overview().includes('id="v15StudySearch"'));
assert(ctx.window.ATLAS_STUDIES_V15.details("miyake2000").includes("137"));
assert(ctx.window.ATLAS_STUDIES_V15.details("malterud2016").includes("Information Power"));
const testTopic=DB.topics.find(t=>t.id==="sa-evaluation");
const htmlReader=ctx.window.ATLAS_READER_V14.article(testTopic);
assert(htmlReader.includes("v15-chapterEvidence"),"Reader lacks chapter references");
assert(htmlReader.includes("#/studie/deaton2018"),"Reader lacks citation links");
assert(htmlReader.includes("FORSCHUNGSBASIS"),"Reader lacks evidence heading");
console.log("SOCIAL ATLAS: 9 dossiers deepened, 22 new chapters and chapter-level citations verified.");
