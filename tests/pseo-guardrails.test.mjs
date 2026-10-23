// Non-fiscal structural regression gates. Run: node --test tests/pseo-guardrails.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const locations=read('lib/pseo/locations.js');
const locales=read('lib/pseo/locales.js');
const catalog=read('lib/pseo/route-catalog.js');
const landing=read('app/[locale]/modelo-210/[intent]/[location]/page.jsx');
const sitemap=read('app/(home)/sitemap.js');
const calculator=read('components/Modelo210Calculator.jsx');
const translations=read('lib/pseo/translations.js');
const robots=read('app/robots.txt/route.js');
test('100 locations, three intents, four live locales are candidate-only',()=>{
 const slugs=[...locations.matchAll(/^  '([^']+)': Object\.freeze\(/gm)].map(m=>m[1]);
 assert.equal(new Set(slugs).size,slugs.length);
 assert.match(catalog,/LOCALE_CODES\.length \* INTENT_SLUGS\.length \* LOCATION_SLUGS\.length/);
 assert.match(locales,/es: Object\.freeze/);
 for(const code of ['en','de','fr']) assert.match(locales,new RegExp(code+': Object\\.freeze'));
 assert.match(locations,/verificationStatus: 'pending'/);
});
test('indexation requires verified location, except explicit editorial pilot',()=>{
 assert.match(landing,/index:d\.isIndexable\|\|isEditorialPilot/);
 assert.match(landing,/dynamicParams=false/);
 assert.match(sitemap,/getVerifiedLocationSlugs/);
 assert.match(sitemap,/EDITORIAL_PILOT/);
 assert.doesNotMatch(sitemap,/getCandidateLandingPaths/);
});
test('all published locales include fictional-example disclaimer',()=>{
 for(const code of ['es','en','de','fr']){
  assert.match(translations,new RegExp('\\b'+code+': \\{[^\\n]+disclaimer:'));
 }
 for(const fragment of ['ejemplos ficticios','fictional examples','fiktive Beispiele','exemples fictifs']) assert.ok(translations.includes(fragment),fragment);
 assert.match(calculator,/\{t\.disclaimer\}/);
});
test('calculator delegates to tested fiscal module',()=>{
 assert.match(calculator,/rentalEstimate\(/);
 assert.match(calculator,/imputedEstimate\(/);
 assert.match(calculator,/saleEstimate\(/);
 assert.match(calculator,/filingWindow\(/);
 assert.match(calculator,/expensesVerified/);
});
test('robots declares sitemap and uses line feeds',()=>{
 assert.match(robots,/Sitemap: https:\/\/www\.legalnexum\.com\/sitemap\.xml/);
 assert.match(robots,/String\.fromCharCode\(10\)/);
});
