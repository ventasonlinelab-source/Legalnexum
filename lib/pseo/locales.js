// Idiomas oficiales de LegalNexum pSEO.
// Una única fuente de verdad para rutas, html lang y hreflang.
export const LOCALES = Object.freeze({
  es: Object.freeze({code:'es',language:'Español',nativeName:'Español',htmlLang:'es',hreflang:'es',intlLocale:'es-ES'}),
  en: Object.freeze({code:'en',language:'English',nativeName:'English',htmlLang:'en',hreflang:'en',intlLocale:'en-GB'}),
  de: Object.freeze({code:'de',language:'German',nativeName:'Deutsch',htmlLang:'de',hreflang:'de',intlLocale:'de-DE'}),
  fr: Object.freeze({code:'fr',language:'French',nativeName:'Français',htmlLang:'fr',hreflang:'fr',intlLocale:'fr-FR'}),
  it: Object.freeze({code:'it',language:'Italian',nativeName:'Italiano',htmlLang:'it',hreflang:'it',intlLocale:'it-IT'}),
  ru: Object.freeze({code:'ru',language:'Russian',nativeName:'Русский',htmlLang:'ru',hreflang:'ru',intlLocale:'ru-RU'}),
  no: Object.freeze({code:'no',language:'Norwegian',nativeName:'Norsk',htmlLang:'nb',hreflang:'nb',intlLocale:'nb-NO'}),
});
export const LOCALE_CODES = Object.freeze(Object.keys(LOCALES));
export const DEFAULT_LOCALE = 'es';
export function getLocale(code) {
  return Object.prototype.hasOwnProperty.call(LOCALES, code) ? LOCALES[code] : null;
}
export function isSupportedLocale(code) { return getLocale(code) !== null; }
// No generar hreflang para una variante hasta confirmar que la página existe y está traducida.
export function buildHreflangAlternates({intent,location,availableLocales=LOCALE_CODES,origin='https://www.legalnexum.com'}) {
  const languages = {};
  for (const code of availableLocales) {
    if (!isSupportedLocale(code)) throw new Error('Unsupported locale: '+code);
    languages[LOCALES[code].hreflang] = new URL('/'+code+'/modelo-210/'+intent+'/'+location, origin).toString();
  }
  return languages;
}
