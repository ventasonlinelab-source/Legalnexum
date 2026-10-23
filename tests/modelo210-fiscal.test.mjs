import test from 'node:test';
import assert from 'node:assert/strict';
import {rentalEstimate,imputedEstimate,saleEstimate,filingWindow,daysInYear} from '../lib/modelo210-fiscal.mjs';
test('rental EU/EEA 19%, other 24%, expense documentation gate',()=>{
 assert.equal(rentalEstimate({income:12000,expenses:2000,eligible:true,expensesVerified:true}),1900);
 assert.equal(rentalEstimate({income:12000,expenses:2000,eligible:false}),2880);
 assert.equal(rentalEstimate({income:12000,expenses:2000,eligible:true,expensesVerified:false}),null);
 assert.equal(rentalEstimate({income:1000,expenses:2000,eligible:true,expensesVerified:true}),0);
 assert.equal(rentalEstimate({income:-1,eligible:false}),null);
});
test('imputation 1.1%, 2%, half higher valuation and prorated share',()=>{
 const basic={year:2026,cadastralMode:'notified',cadastral:85000,cadastralConfirmed:true,days:365,ownership:100,eligible:true};
 assert.equal(imputedEstimate({...basic,percentage:'1.1'}),177.65);
 assert.equal(imputedEstimate({...basic,percentage:'2'}),323);
 assert.equal(imputedEstimate({...basic,percentage:'1.1',ownership:50}),88.825);
 assert.equal(imputedEstimate({...basic,percentage:'unknown'}),null);
 assert.equal(imputedEstimate({...basic,days:366,percentage:'1.1'}),null);
 assert.equal(daysInYear(2024),366);
 assert.equal(daysInYear(2026),365);
 assert.equal(imputedEstimate({year:2026,cadastralMode:'missing',acquisitionValue:200000,assessedValue:250000,days:365,ownership:100,eligible:false}),330);
});
test('sale 19% gain, 3% withholding and refund on loss',()=>{
 const gain=saleEstimate({sale:240000,purchase:170000,sellingCosts:10000});
 assert.deepEqual(gain,{gain:60000,tax:11400,withholding:7200,balance:4200});
 const loss=saleEstimate({sale:100000,purchase:170000});
 assert.equal(loss.tax,0);assert.equal(loss.balance,-3000);
 assert.equal(saleEstimate({sale:-1,purchase:170000}),null);
 assert.equal(saleEstimate({sale:100000,purchase:0}),null);
});
test('2026 filing windows per AEAT HAC/623/2026',()=>{
 assert.deepEqual(filingWindow({intent:'imputacion',year:2026}),{start:'2027-04-01',end:'2027-12-31'});
 assert.deepEqual(filingWindow({intent:'imputacion',year:2025}),{start:'2026-01-01',end:'2026-12-31'});
 assert.deepEqual(filingWindow({intent:'alquiler',year:2026,grouped:true}),{start:'2027-04-01',end:'2027-04-20'});
 assert.deepEqual(filingWindow({intent:'alquiler',year:2026,grouped:false,quarter:4}),{start:'2027-04-01',end:'2027-04-20'});
 assert.equal(filingWindow({intent:'alquiler',year:2026,grouped:false,quarter:3}),null);
 assert.equal(filingWindow({intent:'venta',year:2026}),null);
});
