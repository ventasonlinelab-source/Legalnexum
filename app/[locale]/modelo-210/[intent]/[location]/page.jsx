import {notFound} from 'next/navigation';
import Modelo210Calculator from '../../../../../components/Modelo210Calculator';
import LeadForm from '../../../../../components/LeadForm';
import {getLanding,getLandingPaths} from '../../../../../lib/pseo';
import {getTranslations} from '../../../../../lib/pseo/translations';
import {buildHreflangAlternates} from '../../../../../lib/pseo/locales';
export const dynamicParams=false;
export function generateStaticParams(){return getLandingPaths();}
export async function generateMetadata({params}){
 const {locale,intent,location}=await params;
 const d=getLanding(locale,intent,location);
 if(!d)return {robots:{index:false,follow:false}};
 return {title:d.title+' | LegalNexum',description:d.description,robots:{index:d.isIndexable,follow:true},alternates:{canonical:'https://www.legalnexum.com/'+locale+'/modelo-210/'+intent+'/'+location+'/',...(d.isIndexable?{languages:buildHreflangAlternates({intent,location})}:{})}};
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
 <Modelo210Calculator locale={locale} intent={intent} location={d.name}/>
 <LeadForm location={d.name} locale={locale} intent={intent}/>
 </main><footer className="footer"><div className="wrap footer-row"><strong>LEGALNEXUM</strong><span>{t.disclaimer}</span><a href="https://sede.agenciatributaria.gob.es/" target="_blank" rel="noopener noreferrer">Agencia Tributaria ↗</a></div></footer>
 </>;
}
