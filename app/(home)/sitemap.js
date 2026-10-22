import {getVerifiedLocationSlugs} from '../../lib/pseo/locations';
import {LOCALE_CODES} from '../../lib/pseo/locales';
import {INTENT_SLUGS} from '../../lib/pseo/intents';
export default function sitemap(){const origin='https://www.legalnexum.com';const verified=getVerifiedLocationSlugs();return [{url:origin+'/',lastModified:new Date(),changeFrequency:'weekly',priority:1},...verified.flatMap(location=>INTENT_SLUGS.flatMap(intent=>LOCALE_CODES.map(locale=>({url:`${origin}/${locale}/modelo-210/${intent}/${location}`,changeFrequency:'monthly',priority:0.6}))))];}
