/* SOCIAL ATLAS V5 – offizielles Sozialhilferecht aller 26 Kantone. Links aus SKOS-Rechtsübersicht, konsultiert 23.11.2026. */
(()=>{"use strict";const D=ATLAS_DB;
const R={
AG:["Sozialhilfe- und Präventionsgesetz","https://gesetzessammlungen.ag.ch/app/de/texts_of_law/851.200/versions/3402"],
AI:["Sozialhilfegesetz","https://ai.clex.ch/app/de/texts_of_law/850.000/versions/1390"],
AR:["Gesetz über die öffentliche Sozialhilfe","https://www.bgs.ar.ch/frontend/versions/789"],
BE:["Gesetz über die öffentliche Sozialhilfe","https://www.belex.sites.be.ch/app/de/texts_of_law/860.1/versions/2970"],
BL:["Gesetz über die Sozial- und die Jugendhilfe","https://bl.clex.ch/app/de/texts_of_law/850"],
BS:["Sozialhilfegesetz","https://www.gesetzessammlung.bs.ch/app/de/texts_of_law/890.100/versions/5128"],
FR:["Sozialhilfegesetz","https://bdlf.fr.ch/app/de/texts_of_law/831.0.1/versions/8229"],
GE:["Loi sur l'aide sociale et la lutte contre la précarité","https://silgeneve.ch/legis/data/rsg/rsg_j4_04.htm"],
GL:["Sozialhilfegesetz","https://gesetze.gl.ch/app/de/texts_of_law/VIII%20E%2F21%2F3/versions/2505"],
GR:["Kantonales Unterstützungsgesetz (BR 546.250)","https://www.gr-lex.gr.ch/app/de/texts_of_law/546.250/versions/3530"],
JU:["Loi sur l'action sociale","https://rsju.jura.ch/fr/viewdocument.html?id=36862&idn=20167"],
LU:["Sozialhilfegesetz","https://srl.lu.ch/app/de/texts_of_law/892/versions/4151"],
NE:["Loi sur l'action sociale","https://www.lexfind.ch/fe/de/tol/10370/fr"],
NW:["Gesetz über die Sozialhilfe","https://gesetze.nw.ch/app/de/texts_of_law/761.1"],
OW:["Sozialhilfegesetz","https://gdb.ow.ch/app/de/texts_of_law/870.1/versions/1688"],
SG:["Sozialhilfegesetz","https://www.gesetzessammlung.sg.ch/app/de/texts_of_law/381.1/versions/3833"],
SH:["Sozialhilfegesetz","https://rechtsbuch.sh.ch/app/de/texts_of_law/850.100"],
SO:["Sozialgesetz","https://bgs.so.ch/app/de/texts_of_law/831.1"],
SZ:["Gesetz über die Sozialhilfe","https://www.lexfind.ch/fe/de/tol/16821/de"],
TG:["Sozialhilfegesetz","https://www.rechtsbuch.tg.ch/app/de/texts_of_law/850.1"],
TI:["Legge sull'assistenza sociale","https://www3.ti.ch/CAN/RLeggi/public/index.php/raccolta-leggi/legge/num/392"],
UR:["Sozialhilfegesetz","https://rechtsbuch.ur.ch/app/de/texts_of_law/20.3421"],
VD:["Loi sur l'action sociale vaudoise","https://prestations.vd.ch/pub/blv-publication/actes/consolide/850.051?id=8b71b9d3-03d0-4865-8475-19e60cc46a73&key=1552481315175"],
VS:["Gesetz über die Eingliederung und die Sozialhilfe","https://lex.vs.ch/app/de/texts_of_law/850.1"],
ZG:["Sozialhilfegesetz","https://bgs.zg.ch/app/de/texts_of_law/861.4/versions/2504"],
ZH:["Sozialhilfegesetz","https://www.zh.ch/de/politik-staat/gesetze-beschluesse/gesetzessammlung/zhlex-ls/erlass-851_1-1981_06_14-1982_01_01-123.html"]
};
D.cantons.forEach(c=>{const r=R[c.id];if(!r)return;c.lawLinks=[{label:r[0],url:r[1],basis:"Kantonale Gesetzessammlung (über SKOS-Rechtsübersicht)"}];c.sources=[...c.lawLinks,{label:"SKOS – Rechtsgrundlagen für die Sozialhilfe der 26 Kantone",url:"https://skos.ch/skos-richtlinien/rechtliches/rechtsgrundlagen/"}];c.level=c.id==="GR"?"Kantonales Gesetz, Handbuch und Praxisquellen":"Amtlicher Gesetzeseinstieg vorhanden · Detailansätze noch offen"});
D.cantonPrimaryLaws=Object.keys(R).length;
})();