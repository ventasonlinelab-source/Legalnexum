// Catálogo candidato de 100 localidades. NO constituye verificación individual.
// No usar campos pendientes como hechos SEO ni generar automáticamente páginas indexables.
// Fuente de comprobación recomendada: INE (municipios), Correos (CP), AEAT (competencia).
const INITIAL_CONTEXT = Object.freeze({
  torrevieja: 'Municipio costero con viviendas residenciales y vacacionales; distinguir alquiler de días a disposición del titular.',
  'orihuela-costa': 'Zona costera del municipio de Orihuela; no tratarla como municipio independiente.',
  'guardamar-del-segura': 'Municipio litoral del sur de Alicante; comprobar periodos de ocupación y alquiler.',
  'pilar-de-la-horadada': 'Municipio del sur de Alicante con zona litoral; distinguir uso propio y arrendamiento.',
  benidorm: 'Municipio turístico de la Costa Blanca; comprobar periodos reales de alquiler.',
});
// Fuentes oficiales de contraste; una fuente global NO certifica automáticamente cada ficha.
export const VALIDATION_REFERENCES = Object.freeze({
  municipalities: 'https://ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736177031&idp=1254735976614&menu=ultiDatos',
  cadastralMunicipalities: 'https://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejero.asmx?op=ConsultaMunicipio',
  populationEntities: 'https://www.ine.es/nomenclator/metodologia.htm',
});
// Piloto SEO: candidatos seleccionados para investigación, NO verificados ni indexables.
// Requieren contraste municipal INE, contexto local contrastado y demanda SERP medida.
export const SEO_PILOT_10 = Object.freeze([
  'torrevieja','orihuela-costa','guardamar-del-segura','pilar-de-la-horadada',
  'benidorm','alicante','elche','santa-pola','orihuela','rojales',
]);
export const SEO_PILOT_GATES = Object.freeze({
  administrativeEvidence: 'pending',
  localContextEvidence: 'pending',
  searchDemandEvidence: 'pending',
  serpCompetitionEvidence: 'pending',
  publishAllowed: false,
});
const SEED = {
  "torrevieja": {name:"Torrevieja",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "orihuela-costa": {name:"Orihuela Costa",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "guardamar-del-segura": {name:"Guardamar del Segura",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "pilar-de-la-horadada": {name:"Pilar de la Horadada",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "benidorm": {name:"Benidorm",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "alicante": {name:"Alicante",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "elche": {name:"Elche",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "santa-pola": {name:"Santa Pola",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "orihuela": {name:"Orihuela",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "rojales": {name:"Rojales",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "san-fulgencio": {name:"San Fulgencio",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "los-montesinos": {name:"Los Montesinos",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "almoradi": {name:"Almoradí",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "dolores": {name:"Dolores",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "daya-nueva": {name:"Daya Nueva",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "daya-vieja": {name:"Daya Vieja",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "formentera-del-segura": {name:"Formentera del Segura",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "benijofar": {name:"Benijófar",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "algorfa": {name:"Algorfa",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "san-miguel-de-salinas": {name:"San Miguel de Salinas",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "bigastro": {name:"Bigastro",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "callosa-de-segura": {name:"Callosa de Segura",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "redovan": {name:"Redován",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "cox": {name:"Cox",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "albatera": {name:"Albatera",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "catral": {name:"Catral",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "crevillent": {name:"Crevillent",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "aspe": {name:"Aspe",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "novelda": {name:"Novelda",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "elda": {name:"Elda",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "petrer": {name:"Petrer",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "villena": {name:"Villena",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "altea": {name:"Altea",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "calpe": {name:"Calpe",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "javea": {name:"Jávea",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "denia": {name:"Dénia",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "teulada": {name:"Teulada",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "benissa": {name:"Benissa",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "moraira": {name:"Moraira",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "la-nucia": {name:"La Nucía",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "finestrat": {name:"Finestrat",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "villajoyosa": {name:"Villajoyosa",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "el-campello": {name:"El Campello",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "san-juan-de-alicante": {name:"San Juan de Alicante",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "mutxamel": {name:"Mutxamel",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "alfaz-del-pi": {name:"Alfaz del Pi",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "pego": {name:"Pego",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "ondara": {name:"Ondara",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "pedreguer": {name:"Pedreguer",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "gata-de-gorgos": {name:"Gata de Gorgos",province:"Alicante",autonomousCommunity:"Comunitat Valenciana"},
  "murcia": {name:"Murcia",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "cartagena": {name:"Cartagena",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "san-javier": {name:"San Javier",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "san-pedro-del-pinatar": {name:"San Pedro del Pinatar",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "los-alcazares": {name:"Los Alcázares",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "torre-pacheco": {name:"Torre-Pacheco",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "mazarron": {name:"Mazarrón",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "aguilas": {name:"Águilas",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "lorca": {name:"Lorca",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "la-union": {name:"La Unión",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "fuente-alamo-de-murcia": {name:"Fuente Álamo de Murcia",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "molina-de-segura": {name:"Molina de Segura",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "alcantarilla": {name:"Alcantarilla",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "archena": {name:"Archena",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "cieza": {name:"Cieza",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "jumilla": {name:"Jumilla",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "yecla": {name:"Yecla",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "caravaca-de-la-cruz": {name:"Caravaca de la Cruz",province:"Murcia",autonomousCommunity:"Región de Murcia"},
  "valencia": {name:"Valencia",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "gandia": {name:"Gandía",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "oliva": {name:"Oliva",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "cullera": {name:"Cullera",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "sueca": {name:"Sueca",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "sagunto": {name:"Sagunto",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "paterna": {name:"Paterna",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "torrent": {name:"Torrent",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "alboraya": {name:"Alboraya",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "xativa": {name:"Xàtiva",province:"Valencia",autonomousCommunity:"Comunitat Valenciana"},
  "castellon-de-la-plana": {name:"Castellón de la Plana",province:"Castellón",autonomousCommunity:"Comunitat Valenciana"},
  "benicassim": {name:"Benicàssim",province:"Castellón",autonomousCommunity:"Comunitat Valenciana"},
  "oropesa-del-mar": {name:"Oropesa del Mar",province:"Castellón",autonomousCommunity:"Comunitat Valenciana"},
  "peniscola": {name:"Peñíscola",province:"Castellón",autonomousCommunity:"Comunitat Valenciana"},
  "vinaros": {name:"Vinaròs",province:"Castellón",autonomousCommunity:"Comunitat Valenciana"},
  "malaga": {name:"Málaga",province:"Málaga",autonomousCommunity:"Andalucía"},
  "marbella": {name:"Marbella",province:"Málaga",autonomousCommunity:"Andalucía"},
  "estepona": {name:"Estepona",province:"Málaga",autonomousCommunity:"Andalucía"},
  "fuengirola": {name:"Fuengirola",province:"Málaga",autonomousCommunity:"Andalucía"},
  "mijas": {name:"Mijas",province:"Málaga",autonomousCommunity:"Andalucía"},
  "benalmadena": {name:"Benalmádena",province:"Málaga",autonomousCommunity:"Andalucía"},
  "torremolinos": {name:"Torremolinos",province:"Málaga",autonomousCommunity:"Andalucía"},
  "nerja": {name:"Nerja",province:"Málaga",autonomousCommunity:"Andalucía"},
  "rincon-de-la-victoria": {name:"Rincón de la Victoria",province:"Málaga",autonomousCommunity:"Andalucía"},
  "manilva": {name:"Manilva",province:"Málaga",autonomousCommunity:"Andalucía"},
  "almeria": {name:"Almería",province:"Almería",autonomousCommunity:"Andalucía"},
  "roquetas-de-mar": {name:"Roquetas de Mar",province:"Almería",autonomousCommunity:"Andalucía"},
  "el-ejido": {name:"El Ejido",province:"Almería",autonomousCommunity:"Andalucía"},
  "mojacar": {name:"Mojácar",province:"Almería",autonomousCommunity:"Andalucía"},
  "vera": {name:"Vera",province:"Almería",autonomousCommunity:"Andalucía"},
  "madrid": {name:"Madrid",province:"Madrid",autonomousCommunity:"Comunidad de Madrid"},
  "barcelona": {name:"Barcelona",province:"Barcelona",autonomousCommunity:"Cataluña"},
};
export const LOCATIONS = Object.freeze(Object.fromEntries(
  Object.entries(SEED).map(([slug,data])=>[slug,Object.freeze({
    slug,...data,
    administrativeType: slug==='orihuela-costa' ? 'district' : (slug==='moraira' ? 'locality' : 'municipality_candidate'),
    regionalFactor: data.province==='Alicante' ? 'costa_blanca' : null,
    localContext: INITIAL_CONTEXT[slug] ?? null, // Resto pendiente de investigación local
    postalCodes: Object.freeze([]),
    taxOffice: null,
    sources: Object.freeze([]),
    verificationStatus: 'pending',
  })])
));
export const LOCATION_SLUGS = Object.freeze(Object.keys(LOCATIONS));
export function getLocation(slug) {
  return Object.prototype.hasOwnProperty.call(LOCATIONS,slug) ? LOCATIONS[slug] : null;
}
export function isLocationVerified(slug) {
  const l=getLocation(slug);
  return Boolean(l && l.verificationStatus==='verified' && l.sources.length>0);
}
export function getVerifiedLocationSlugs() {
  return LOCATION_SLUGS.filter(isLocationVerified);
}
