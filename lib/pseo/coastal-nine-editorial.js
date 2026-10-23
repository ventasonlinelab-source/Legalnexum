// Staged locality-specific administrative context for nine coastal candidates.
// All tax guidance is national; locality-specific statements are limited to municipality/province.
// Codes/source evidence: coastal-administrative-evidence.js. Never auto-index these candidates.
import {COASTAL_ADMINISTRATIVE_EVIDENCE_20261023} from './coastal-administrative-evidence';
const LOCALES=Object.freeze({
 es:{in:'en',province:'provincia de',municipality:'municipio de',area:'zona de',intro:'El Modelo 210 se rige por la normativa estatal del IRNR, no por un tipo fiscal municipal propio.',alquiler:'Comprueba días alquilados, contratos, ingresos y justificantes de gastos. Separa los días sin alquiler y verifica residencia fiscal y requisitos de deducción.',imputacion:'Revisa valor catastral, revisiones, porcentaje de titularidad y días a disposición. Descuenta los períodos efectivamente alquilados cuando corresponda.',venta:'Reúne escrituras de compra y venta, costes acreditados, amortizaciones aplicables y justificante de la retención del 3 %.'},
 en:{in:'in',province:'province of',municipality:'municipality of',area:'area of',intro:'Modelo 210 follows Spain-wide non-resident income tax rules, not a separate municipal tax rate.',alquiler:'Check rented days, contracts, rent received and documented expenses. Separate unlet days and verify tax residence and deduction conditions.',imputacion:'Review cadastral value and revisions, ownership share and days available to the owner. Account separately for periods actually rented when applicable.',venta:'Gather purchase and sale deeds, documented costs, applicable depreciation and proof of the buyer’s 3% withholding.'},
 de:{in:'in',province:'Provinz',municipality:'Gemeinde',area:'Gebiet der Gemeinde',intro:'Für das Modelo 210 gelten landesweite Regeln für Nichtansässige, kein eigener kommunaler Steuersatz.',alquiler:'Prüfen Sie Vermietungstage, Verträge, Mieteinnahmen und Kostenbelege. Trennen Sie nicht vermietete Tage und prüfen Sie Steuerwohnsitz und Abzugsvoraussetzungen.',imputacion:'Prüfen Sie Katasterwert und Revision, Eigentumsanteil und Tage der Verfügbarkeit. Tatsächliche Vermietungszeiträume sind gegebenenfalls getrennt zu berücksichtigen.',venta:'Stellen Sie Kauf- und Verkaufsurkunden, belegte Kosten, relevante Abschreibungen und den Nachweis des 3-%-Einbehalts zusammen.'},
 fr:{in:'dans',province:'province de',municipality:'commune de',area:'zone de la commune d’',intro:'Le Modelo 210 relève des règles nationales de l’impôt des non-résidents, sans taux municipal spécifique.',alquiler:'Vérifiez les jours loués, contrats, loyers encaissés et frais justifiés. Distinguez les jours non loués et vérifiez la résidence fiscale et les conditions de déduction.',imputacion:'Contrôlez la valeur cadastrale et ses révisions, la quote-part de propriété et les jours de disponibilité. Tenez compte séparément des périodes réellement louées si nécessaire.',venta:'Réunissez les actes d’achat et de vente, les frais justifiés, les amortissements applicables et la preuve de la retenue de 3 %.'}
});
const AREAS=Object.freeze({'orihuela-costa':true});
const SLUGS=Object.freeze(['javea','marbella','orihuela-costa','estepona','mijas','denia','calpe','altea','fuengirola']);
export const COASTAL_NINE_EDITORIAL=Object.freeze(SLUGS.map(slug=>{
 const record=COASTAL_ADMINISTRATIVE_EVIDENCE_20261023.find(x=>x.slug===slug);
 if(!record)throw new Error('Missing administrative evidence for '+slug);
 const copy=Object.fromEntries(Object.entries(LOCALES).map(([locale,t])=>{
  const place=AREAS[slug]?t.area+' '+slug.replace('orihuela-costa','Orihuela Costa'):t.municipality+' '+record.municipality;
  const intro=locale==='fr'?place+', '+t.province+' '+record.province+'. '+t.intro:place+', '+t.province+' '+record.province+'. '+t.intro;
  return [locale,Object.freeze({intro,alquiler:t.alquiler,imputacion:t.imputacion,venta:t.venta})];
 }));
 return Object.freeze({slug,municipality:record.municipality,ineCode:record.ineCode,source:record.sourceUrl,publicationApproved:false,copy:Object.freeze(copy)});
}));
