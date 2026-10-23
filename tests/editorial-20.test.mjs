import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const src=readFileSync(new URL('../lib/pseo/editorial-20.js',import.meta.url),'utf8');
const mod=await import('data:text/javascript,'+encodeURIComponent(src));
const {EDITORIAL_20,EDITORIAL_20_PATHS,getEditorialDraft}=mod;
test('exactly 20 Spanish pages in ten localities and two intents',()=>{
 assert.equal(EDITORIAL_20_PATHS.length,20);
 assert.equal(new Set(EDITORIAL_20_PATHS.map(x=>[x.locale,x.intent,x.location].join('/'))).size,20);
 assert.equal(Object.keys(EDITORIAL_20).length,10);
 assert.ok(EDITORIAL_20_PATHS.every(x=>x.locale==='es'&&['alquiler','imputacion'].includes(x.intent)));
});
test('all twenty drafts have local context, document checklist and cautious fiscal advice',()=>{
 for(const p of EDITORIAL_20_PATHS){
  const d=getEditorialDraft(p.locale,p.intent,p.location);
  assert.ok(d,JSON.stringify(p));
  for(const key of ['title','intro','local','documents','warning'])assert.ok(d[key]?.length>(key==='title'?25:75),JSON.stringify(p)+' '+key);
  assert.ok(d.warning.includes('AEAT'),JSON.stringify(p));
 }
});
test('no other locale, sale or noncohort locality gets these editorial drafts',()=>{
 assert.equal(getEditorialDraft('en','alquiler','benidorm'),null);
 assert.equal(getEditorialDraft('es','venta','benidorm'),null);
 assert.equal(getEditorialDraft('es','alquiler','marbella'),null);
});
test('approval list stays independent from 20 draft candidates',()=>{
 const approvals=readFileSync(new URL('../lib/pseo/publication.js',import.meta.url),'utf8');
 assert.match(approvals,/locale:'es',intent:'alquiler',location:'torrevieja'/);
 assert.doesNotMatch(approvals,/location:'benidorm'/);
});
