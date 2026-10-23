// Modelo 210: estimaciones generales sin establecimiento permanente.
// Fuentes AEAT: instrucciones Modelo 210, rentas imputadas, arrendamientos y ganancias patrimoniales.
// No sustituye la autoliquidación; las excepciones requieren revisión profesional.
export const finiteAmount = value => value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= 100000000 ? Number(value) : null;
export const daysInYear = year => Number.isInteger(Number(year)) && Number(year) >= 1900 && Number(year) <= 2100 ? (new Date(Number(year),1,29).getMonth() === 1 ? 366 : 365) : null;
export function rentalEstimate({income,expenses=0,eligible=false,expensesVerified=false}){
 const gross=finiteAmount(income),cost=finiteAmount(expenses);
 if(gross===null || (eligible && (cost===null || (cost>0 && !expensesVerified))))return null;
 return Math.max(0,gross-(eligible?cost:0))*(eligible?.19:.24);
}
export function imputedEstimate({year,cadastralMode='notified',cadastral,cadastralConfirmed=false,percentage='unknown',acquisitionValue,assessedValue='',days,ownership=100,eligible=false}){
 const annual=daysInYear(year),d=finiteAmount(days),share=finiteAmount(ownership);
 if(!annual||d===null||!Number.isInteger(d)||d>annual||share===null||share<=0||share>100)return null;
 let base=null;
 if(cadastralMode==='notified'){
  const value=finiteAmount(cadastral);
  if(cadastralConfirmed&&value!==null&&['1.1','2'].includes(String(percentage)))base=value*Number(percentage)/100;
 }else if(cadastralMode==='missing'){
  const acquisition=finiteAmount(acquisitionValue),assessed=assessedValue===''?0:finiteAmount(assessedValue);
  if(acquisition!==null&&acquisition>0&&assessed!==null)base=Math.max(acquisition,assessed)*.5*.011;
 }
 return base===null?null:base*d/annual*share/100*(eligible?.19:.24);
}
export function saleEstimate({sale,purchase,sellingCosts=0,acquisitionCosts=0,amortization=0}){
 const values=[sale,purchase,sellingCosts,acquisitionCosts,amortization].map(finiteAmount);
 if(values.some(x=>x===null)||values[0]<=0||values[1]<=0)return null;
 const [transfer,acquisition,selling,acquiring,depreciation]=values;
 const gain=(transfer-selling)-(acquisition+acquiring-depreciation);
 const tax=Math.max(0,gain)*.19;
 const withholding=transfer*.03;
 return {gain,tax,withholding,balance:tax-withholding};
}
export function filingWindow({intent,year,grouped=true,quarter=null}){
 const y=Number(year);
 if(!Number.isInteger(y)||y<2024||y>2100)return null;
 if(intent==='imputacion')return {start:`${y+1}-${y>=2026?'04':'01'}-01`,end:`${y+1}-12-31`};
 if(intent==='alquiler'&&grouped&&y>=2026)return {start:`${y+1}-04-01`,end:`${y+1}-04-20`};
 if(intent==='alquiler'&&!grouped&&y===2026&&quarter===4)return {start:'2027-04-01',end:'2027-04-20'};
 return null; // No inventar plazos para otros supuestos o declaraciones a devolver.
}
