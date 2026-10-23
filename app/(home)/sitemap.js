import {approvedRoutes} from '../../lib/pseo/publication';
import {LOCALE_CODES} from '../../lib/pseo/locales';
import {INTENT_SLUGS} from '../../lib/pseo/intents';
// Piloto editorial específico, distinto del catálogo pSEO aún no verificado.
const EDITORIAL_PILOT = '/es/modelo-210/alquiler/torrevieja';
export default function sitemap(){
 const origin='https://www.legalnexum.com';
 const dynamic=approvedRoutes().map(({locale,intent,location})=>({url:`${origin}/${locale}/modelo-210/${intent}/${location}`,changeFrequency:'monthly',priority:0.6}));
 return [
  {url:origin+'/',lastModified:new Date(),changeFrequency:'weekly',priority:1},
  {url:origin+EDITORIAL_PILOT,changeFrequency:'monthly',priority:0.7},
  ...dynamic.filter(entry=>entry.url!==origin+EDITORIAL_PILOT),
 ];
}
