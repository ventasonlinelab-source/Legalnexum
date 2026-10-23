import {notFound} from 'next/navigation';
import Modelo210Calculator from '../../../../../components/Modelo210Calculator';
import LeadForm from '../../../../../components/LeadForm';
import {getLanding,getLandingPaths} from '../../../../../lib/pseo';
import {getTranslations} from '../../../../../lib/pseo/translations';
import {buildHreflangAlternates} from '../../../../../lib/pseo/locales';
import {isApprovedRoute,approvedLocalesFor} from '../../../../../lib/pseo/publication';
const EDITORIAL_PILOT = {locale:'es',intent:'alquiler',location:'torrevieja'};
const isEditorialPilot = ({locale,intent,location}) => locale===EDITORIAL_PILOT.locale && intent===EDITORIAL_PILOT.intent && location===EDITORIAL_PILOT.location;
export const dynamicParams=false;
export function generateStaticParams(){return getLandingPaths();}
export async function generateMetadata({params}){
 const {locale,intent,location}=await params;
 const d=getLanding(locale,intent,location);
 if(!d)return {robots:{index:false,follow:false}};
 return {title:d.title+' | LegalNexum',description:d.description,robots:{index:isApprovedRoute({locale,intent,location}),follow:true},alternates:{canonical:'https://www.legalnexum.com/'+locale+'/modelo-210/'+intent+'/'+location,...(approvedLocalesFor(intent,location).length>1&&isApprovedRoute({locale,intent,location})?{languages:buildHreflangAlternates({intent,location,availableLocales:approvedLocalesFor(intent,location)})}:{})}};
}
export default async function Landing({params}){
 const {locale,intent,location}=await params;
 const d=getLanding(locale,intent,location);
 if(!d)notFound();
 const t=getTranslations(locale);
 const label=t[intent==='alquiler'?'rental':intent==='imputacion'?'imputed':'sale'];
 const intro=t[intent==='alquiler'?'rentalDescription':intent==='imputacion'?'imputedDescription':'saleDescription'];
 return <>
 <div className="topbar"><div className="wrap">LEGALNEXUM · MODELO 210</div></div>
 <div className="wrap"><nav className="nav"><a className="brand" href="/">LEGAL<span>NEXUM</span></a><div className="navlinks"><a href="#calculadora">{t.calculator}</a><a href="#contacto">{t.contact}</a></div></nav><div className="crumb"><a href="/">LegalNexum</a> / Modelo 210 / {label} / {d.name}</div></div>
 <main><header className="hero"><div className="wrap hero-grid"><div><div className="eyebrow">Modelo 210 · {d.province} · {label}</div><h1>{d.title}</h1><p className="lead">{d.description} {intro}</p><div className="hero-actions"><a className="btn" href="#calculadora">{t.calculator} →</a><a className="btn" href="#contacto">{t.contact} →</a></div></div><aside className="sidecard"><div className="eyebrow">LegalNexum</div><h2>{label}</h2><p>{intro}</p><p className="micro">{t.disclaimer}</p></aside></div></header>
 <section className="section" id="obligaciones"><div className="wrap content-grid"><div><div className="eyebrow">Modelo 210</div><h2>{label} · {d.name}</h2><p>{intro}</p><p>{d.description}</p><p>{t.disclaimer}</p></div><aside className="note"><strong>{d.province}</strong><p>{d.autonomousCommunity}</p></aside></div></section>
 {isEditorialPilot({locale,intent,location}) && <section className="section" aria-label="Guía local de alquiler en Torrevieja"><div className="wrap"><h2>Alquiler de vivienda en Torrevieja: cómo preparar el Modelo 210</h2><p>Si alquilas un inmueble situado en Torrevieja y eres no residente fiscal en España, revisa por separado las fechas efectivamente alquiladas y los períodos en que la vivienda estuvo a tu disposición. El Modelo 210 puede exigir tratamientos distintos para el alquiler y la imputación inmobiliaria.</p><h3>Documentación que conviene reunir</h3><ul><li>Fechas de ocupación y contratos de arrendamiento.</li><li>Ingresos obtenidos y justificantes de cobro.</li><li>País de residencia fiscal y titularidad del inmueble.</li><li>Facturas y documentación de gastos si pretendes aplicar deducciones legalmente permitidas.</li></ul><h3>¿Se presenta trimestral o anualmente?</h3><p>Depende del devengo y de los requisitos aplicables. Para determinadas rentas de alquiler devengadas desde 2024 existe una opción de agrupación anual. Comprueba las condiciones y el plazo vigentes en la Agencia Tributaria antes de presentar la declaración.</p><p>La normativa del IRNR es estatal: residir en Torrevieja no crea un tipo fiscal municipal propio. El municipio identifica dónde está situado el inmueble.</p><p><a href="https://sede.agenciatributaria.gob.es/Sede/todas-gestiones/impuestos-tasas/impuesto-sobre-renta-no-residentes/modelo-210-irnr______a-no-residentes-permanente_/instrucciones.html" target="_blank" rel="noopener noreferrer">Consultar instrucciones oficiales del Modelo 210 (AEAT) ↗</a></p></div></section>}
 <Modelo210Calculator locale={locale} intent={intent} location={d.name}/>
 <LeadForm location={d.name} locale={locale} intent={intent}/>
 </main><footer className="footer"><div className="wrap footer-row"><strong>LEGALNEXUM</strong><span>{t.disclaimer}</span><a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener noreferrer">Agencia Tributaria ↗</a></div></footer>
 </>;
}
