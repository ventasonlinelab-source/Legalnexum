// Batch 2026-10-23: staging only; all slugs already exist in the 100-location factory.
// Priority is an editorial hypothesis, NOT measured fiscal density or search volume.
// No entry in this batch is automatically approved for indexing or sitemap inclusion.
export const COASTAL_BATCH_10_20261023 = Object.freeze([
  {slug:'benidorm',area:'Costa Blanca',municipality:'Benidorm'},
  {slug:'javea',area:'Costa Blanca',municipality:'Xàbia/Jávea'},
  {slug:'marbella',area:'Costa del Sol',municipality:'Marbella'},
  {slug:'orihuela-costa',area:'Costa Blanca',municipality:'Orihuela',administrativeType:'district'},
  {slug:'estepona',area:'Costa del Sol',municipality:'Estepona'},
  {slug:'mijas',area:'Costa del Sol',municipality:'Mijas'},
  {slug:'denia',area:'Costa Blanca',municipality:'Dénia'},
  {slug:'calpe',area:'Costa Blanca',municipality:'Calp/Calpe'},
  {slug:'altea',area:'Costa Blanca',municipality:'Altea'},
  {slug:'fuengirola',area:'Costa del Sol',municipality:'Fuengirola'},
].map(item=>Object.freeze({...item,verificationStatus:'pending',publishAllowed:false})));

export const COASTAL_BATCH_INTENTS = Object.freeze(['alquiler','imputacion','venta']);
export const COASTAL_BATCH_LOCALES = Object.freeze(['es','en','de','fr']);
export function getCoastalBatchCandidatePaths(){
  return COASTAL_BATCH_10_20261023.flatMap(({slug})=>
    COASTAL_BATCH_LOCALES.flatMap(locale=>
      COASTAL_BATCH_INTENTS.map(intent=>`/${locale}/modelo-210/${intent}/${slug}`)
    )
  );
}
export function validateCoastalBatch({getLocation, getCandidateLanding}){
  const paths=getCoastalBatchCandidatePaths();
  const locations=COASTAL_BATCH_10_20261023.map(({slug})=>({slug,exists:Boolean(getLocation(slug))}));
  const missingLandings=COASTAL_BATCH_10_20261023.flatMap(({slug})=>
    COASTAL_BATCH_LOCALES.flatMap(locale=>
      COASTAL_BATCH_INTENTS.filter(intent=>!getCandidateLanding(locale,intent,slug)).map(intent=>({locale,intent,slug}))
    )
  );
  return {locations,paths:paths.length,uniquePaths:new Set(paths).size,missingLandings,
    readyForTechnicalQA:locations.every(x=>x.exists)&&paths.length===120&&new Set(paths).size===120&&!missingLandings.length,
    approvedForSitemap:false};
}
