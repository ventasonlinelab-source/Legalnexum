import { LOCALE_CODES } from './locales';
import { INTENT_SLUGS } from './intents';
import { LOCATION_SLUGS, getLocation, isLocationVerified } from './locations';
import { getTranslations } from './translations';

// The route catalogue is independent from publication/indexing approval.
// This allows QA of all 1,200 combinations without publishing unverified local claims.
export const ROUTE_COUNT = LOCALE_CODES.length * INTENT_SLUGS.length * LOCATION_SLUGS.length;

export function getCandidateLandingPaths() {
  return LOCALE_CODES.flatMap(locale =>
    INTENT_SLUGS.flatMap(intent =>
      LOCATION_SLUGS.map(location => ({ locale, intent, location }))
    )
  );
}

export function getCandidateLanding(locale, intent, location) {
  if (!LOCALE_CODES.includes(locale) || !INTENT_SLUGS.includes(intent)) return null;
  const place = getLocation(location);
  const translation = getTranslations(locale);
  if (!place || !translation) return null;
  const intentKey = intent === 'alquiler' ? 'rental' : intent === 'imputacion' ? 'imputed' : 'sale';
  return {
    locale, intent, location,
    name: place.name,
    province: place.province,
    autonomousCommunity: place.autonomousCommunity,
    administrativeType: place.administrativeType,
    localContext: place.localContext,
    verificationStatus: place.verificationStatus,
    isIndexable: isLocationVerified(location),
    title: translation.title.replace('{intent}', translation[intentKey]).replace('{location}', place.name),
    description: translation.intro.replace('{location}', place.name),
  };
}

export function validateCandidateLandingPaths() {
  const paths = getCandidateLandingPaths();
  const keys = new Set(paths.map(p => [p.locale,p.intent,p.location].join('/')));
  return {
    count: paths.length,
    unique: keys.size,
    expected: ROUTE_COUNT,
    complete: paths.length === ROUTE_COUNT && keys.size === paths.length,
    verifiedLocations: LOCATION_SLUGS.filter(isLocationVerified).length,
  };
}
