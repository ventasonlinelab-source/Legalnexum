// Modelo 210: categorías fiscales, sin tasas ni plazos hardcodeados.
// Las reglas fiscales dependen del ejercicio y circunstancias; validar contra AEAT.
export const INTENTS = Object.freeze({
  alquiler: Object.freeze({
    slug: 'alquiler',
    taxEvent: 'rental_income',
    calculator: 'rental',
    requires: ['taxYear', 'taxResidence', 'rentalPeriods', 'grossIncome'],
    optional: ['deductibleExpenses', 'ownershipShare', 'withholdings'],
    fiscalTopics: ['rental_income', 'deductible_expenses', 'filing_periods', 'mixed_use'],
    excludedTopics: ['sale_gain_as_rental_income'],
  }),
  imputacion: Object.freeze({
    slug: 'imputacion',
    taxEvent: 'imputed_real_estate_income',
    calculator: 'imputed-income',
    requires: ['taxYear', 'taxResidence', 'cadastralValue', 'daysAtDisposal'],
    optional: ['cadastralValueReviewYear', 'ownershipShare', 'propertyUse'],
    fiscalTopics: ['imputed_income', 'cadastral_value', 'days_at_disposal', 'mixed_use'],
    excludedTopics: ['rental_income_as_imputed_income'],
  }),
  venta: Object.freeze({
    slug: 'venta',
    taxEvent: 'property_disposal_gain',
    calculator: 'capital-gain',
    requires: ['taxYear', 'taxResidence', 'acquisitionValue', 'transferValue', 'transferDate'],
    optional: ['acquisitionCosts', 'transferCosts', 'ownershipShare', 'buyerWithholding'],
    fiscalTopics: ['capital_gain', 'acquisition_costs', 'transfer_costs', 'buyer_withholding'],
    excludedTopics: ['gross_sale_price_as_taxable_gain'],
  }),
});
export const INTENT_SLUGS = Object.freeze(Object.keys(INTENTS));
export function getIntent(slug) {
  return Object.prototype.hasOwnProperty.call(INTENTS, slug) ? INTENTS[slug] : null;
}
export function isSupportedIntent(slug) { return getIntent(slug) !== null; }
