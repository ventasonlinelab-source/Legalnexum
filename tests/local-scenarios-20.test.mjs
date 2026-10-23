import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../lib/pseo/local-scenarios-20.js',import.meta.url),'utf8');
const {LOCAL_SCENARIOS,getLocalScenario}=await import('data:text/javascript,'+encodeURIComponent(src));
test('twenty original editorial scenarios exactly match the pilot scope',()=>{
 assert.equal(Object.keys(LOCAL_SCENARIOS).length,10);
 const cases=Object.entries(LOCAL_SCENARIOS).flatMap(([city,intents])=>Object.entries(intents).map(([intent,data])=>({city,intent,...data})));
 assert.equal(cases.length,20);
 assert.equal(new Set(cases.map(x=>x.heading)).size,20);
 assert.equal(new Set(cases.map(x=>x.scenario)).size,20);
 assert.ok(cases.every(x=>x.scenario.length>230&&x.check.length>45&&x.action.length>55));
 assert.ok(cases.every(x=>getLocalScenario('es',x.intent,x.city)?.scenario===x.scenario));
 assert.equal(getLocalScenario('en','alquiler','benidorm'),null);
 assert.equal(getLocalScenario('es','venta','benidorm'),null);
});
test('scenario blocks rendered in selected routes without altering approval gate',()=>{
 const page=readFileSync(new URL('../app/[locale]/modelo-210/[intent]/[location]/page.jsx',import.meta.url),'utf8');
 assert.match(page,/getLocalScenario\(locale,intent,location\)/);
 assert.match(page,/scenario\.scenario/);
 assert.match(page,/index:isApprovedRoute/);
});
