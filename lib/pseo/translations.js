export const translations = {
  es: { rental: 'Alquiler', imputed: 'Uso propio', sale: 'Venta', calculator: 'Calculadora Modelo 210', contact: 'Solicitar información' },
  en: { rental: 'Rental income', imputed: 'Personal use', sale: 'Property sale', calculator: 'Modelo 210 Tax Calculator', contact: 'Request information' },
  de: { rental: 'Mieteinnahmen', imputed: 'Eigennutzung', sale: 'Immobilienverkauf', calculator: 'Modelo 210 Steuerrechner', contact: 'Informationen anfordern' },
  fr: { rental: 'Revenus locatifs', imputed: 'Usage personnel', sale: 'Vente immobilière', calculator: 'Calculateur fiscal Modelo 210', contact: 'Demander des informations' }
};
export const getTranslations = locale => translations[locale] || null;
