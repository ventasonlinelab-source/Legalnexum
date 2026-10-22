// Catálogo local pSEO: únicamente datos comprobados. Nunca inventar CP ni oficinas AEAT.
// "taxOffice" se deja sin asignar hasta verificar competencia por trámite.
const SEED = {
  torrevieja: {name:'Torrevieja',province:'Alicante',autonomousCommunity:'Comunitat Valenciana',regionalFactor:'costa_blanca_sur',localContext:'Municipio costero con viviendas residenciales y vacacionales; distinguir alquiler de días a disposición del titular.'},
  'orihuela-costa': {name:'Orihuela Costa',province:'Alicante',autonomousCommunity:'Comunitat Valenciana',regionalFactor:'costa_blanca_sur',localContext:'Zona costera del municipio de Orihuela; no tratarla como municipio independiente en datos administrativos.'},
  'guardamar-del-segura': {name:'Guardamar del Segura',province:'Alicante',autonomousCommunity:'Comunitat Valenciana',regionalFactor:'costa_blanca_sur',localContext:'Municipio litoral del sur de Alicante; comprobar periodos de ocupación y alquiler.'},
  'pilar-de-la-horadada': {name:'Pilar de la Horadada',province:'Alicante',autonomousCommunity:'Comunitat Valenciana',regionalFactor:'costa_blanca_sur',localContext:'Municipio del sur de Alicante con zona litoral; distinguir uso propio y arrendamiento.'},
  benidorm: {name:'Benidorm',province:'Alicante',autonomousCommunity:'Comunitat Valenciana',regionalFactor:'costa_blanca_norte',localContext:'Municipio turístico de la Costa Blanca; comprobar periodos reales de alquiler.'},
};
export const LOCATIONS = Object.freeze(Object.fromEntries(
  Object.entries(SEED).map(([slug,data])=>[slug,Object.freeze({
    slug,...data,
    postalCodes: Object.freeze([]), // Pendiente de verificación documental
    taxOffice: null, // No inferir competencia de AEAT por municipio
    sources: Object.freeze([]), // Añadir URLs oficiales y fecha de comprobación
    verificationStatus: 'pending',
  })])
));
export const LOCATION_SLUGS = Object.freeze(Object.keys(LOCATIONS));
export function getLocation(slug) {
  return Object.prototype.hasOwnProperty.call(LOCATIONS,slug) ? LOCATIONS[slug] : null;
}
export function isLocationVerified(slug) {
  const location=getLocation(slug);
  return Boolean(location && location.verificationStatus==='verified' && location.sources.length);
}
