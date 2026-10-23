// A route is indexable only after explicit per-URL editorial + fiscal approval.
// Geographic verification alone is NOT sufficient to publish 21 language/intent variants.
export const APPROVED_ROUTES=Object.freeze([
 Object.freeze({locale:'es',intent:'alquiler',location:'torrevieja'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'benidorm'}),
 Object.freeze({locale:'es',intent:'alquiler',location:'orihuela-costa'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'rojales'}),
 Object.freeze({locale:'es',intent:'imputacion',location:'santa-pola'}),
]);
export const approvedKey=({locale,intent,location})=>[locale,intent,location].join('/');
export const isApprovedRoute=route=>APPROVED_ROUTES.some(item=>approvedKey(item)===approvedKey(route));
export const approvedRoutes=()=>APPROVED_ROUTES.map(route=>({...route}));
export const approvedLocalesFor=(intent,location)=>APPROVED_ROUTES.filter(route=>route.intent===intent&&route.location===location).map(route=>route.locale);
