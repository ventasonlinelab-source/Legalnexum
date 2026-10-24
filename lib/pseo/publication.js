// A route is indexable only after explicit per-URL editorial + fiscal approval.
// Geographic verification alone is NOT sufficient to publish 21 language/intent variants.
export const APPROVED_ROUTES=Object.freeze([
 Object.freeze({locale:'es',intent:'alquiler',location:'torrevieja'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'benidorm'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'orihuela-costa'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'rojales'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'santa-pola'}),
 // Second editorial batch: approved after all first-batch URLs confirmed indexed in GSC (2026-10-24).
 Object.freeze({locale:'es',intent:'alquiler',location:'guardamar-del-segura'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'pilar-de-la-horadada'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'alicante'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'elche'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'orihuela'}),

 // International editorial pilot: six individually written, reviewed pages.
 Object.freeze({locale:'en',intent:'alquiler',location:'torrevieja'}),
 Object.freeze({locale:'en',intent:'alquiler',location:'orihuela-costa'}),
 Object.freeze({locale:'en',intent:'imputacion',location:'benidorm'}),
 Object.freeze({locale:'de',intent:'alquiler',location:'torrevieja'}),
 Object.freeze({locale:'de',intent:'imputacion',location:'javea'}),
 Object.freeze({locale:'de',intent:'imputacion',location:'denia'}),
]);
export const approvedKey=({locale,intent,location})=>[locale,intent,location].join('/');
export const isApprovedRoute=route=>APPROVED_ROUTES.some(item=>approvedKey(item)===approvedKey(route));
export const approvedRoutes=()=>APPROVED_ROUTES.map(route=>({...route}));
export const approvedLocalesFor=(intent,location)=>APPROVED_ROUTES.filter(route=>route.intent===intent&&route.location===location).map(route=>route.locale);
