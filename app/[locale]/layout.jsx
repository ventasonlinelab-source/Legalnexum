import '../globals.css';
import {notFound} from 'next/navigation';
import {getLocale} from '../../lib/pseo/locales';
export default async function LocaleLayout({children,params}){
 const {locale}=await params;
 const config=getLocale(locale);
 if(!config)notFound();
 return <html lang={config.htmlLang}><body>{children}</body></html>;
}
