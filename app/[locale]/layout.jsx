import {notFound} from 'next/navigation';
import {getLocale} from '../../lib/pseo/locales';
export default async function LocaleLayout({children,params}){const {locale}=await params;if(!getLocale(locale))notFound();return children;}
