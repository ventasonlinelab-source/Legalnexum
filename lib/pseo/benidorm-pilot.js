// Benidorm pilot: local administrative facts and intent-specific checklists.
// Source evidence is in coastal-administrative-evidence.js; this is NOT a fiscal certification.
// No invented tax rates, search volumes, tourist counts or local filing rules.
export const BENIDORM_PILOT = Object.freeze({
  slug:'benidorm',
  municipality:'Benidorm',
  province:'Alicante',
  ineCode:'03031',
  source:'https://www.boe.es/eli/es/rd/2025/03/25/250/dof/spa/pdf',
  publicationApproved:false,
  copy:Object.freeze({
    es:Object.freeze({
      intro:'Si el inmueble está situado en Benidorm, provincia de Alicante, el Modelo 210 se aplica conforme a la normativa estatal del IRNR. La localidad identifica el inmueble; no existe un tipo del Modelo 210 exclusivo de Benidorm.',
      alquiler:'Comprueba el calendario real de ocupación, contratos, cobros y períodos sin arrendamiento. Para gastos, conserva facturas y justificantes y verifica la residencia fiscal del titular. Los días no alquilados pueden requerir un tratamiento separado por imputación.',
      imputacion:'Para los días en que la vivienda de Benidorm estuvo a disposición del titular, comprueba el valor catastral y su revisión, el porcentaje de propiedad y los días aplicables. No presupongas que todo el año es de uso propio si hubo alquiler.',
      venta:'Antes de declarar la venta de un inmueble en Benidorm, reúne escrituras de adquisición y transmisión, gastos acreditados, amortizaciones aplicables y el justificante de la retención del 3 % efectuada por el adquirente.'
    }),
    en:Object.freeze({
      intro:'For property located in Benidorm, Alicante province, Modelo 210 follows Spain-wide non-resident income tax rules. Benidorm identifies the property location; it does not have a separate local Modelo 210 tax rate.',
      alquiler:'Check actual letting dates, contracts, rent received and periods without tenants. Keep expense invoices and verify the owner’s tax residence. Days without tenants may require separate imputed-income treatment.',
      imputacion:'For days when a Benidorm property was available to its owner, check cadastral value and revision, ownership share and the applicable number of days. Do not treat the whole year as private use if the property was rented.',
      venta:'Before reporting a Benidorm property sale, gather acquisition and sale deeds, documented costs, applicable depreciation and proof of the buyer’s 3% withholding.'
    }),
    de:Object.freeze({
      intro:'Für Immobilien in Benidorm, Provinz Alicante, gelten die landesweiten Regeln zur Einkommensteuer für Nichtansässige (Modelo 210). Benidorm bezeichnet den Standort, begründet aber keinen eigenen lokalen Steuersatz.',
      alquiler:'Prüfen Sie die tatsächlichen Vermietungstage, Verträge, Zahlungseingänge und Leerstandszeiten. Bewahren Sie Kostenbelege auf und prüfen Sie den Steuerwohnsitz. Nicht vermietete Tage können eine gesonderte Einkommenszurechnung erfordern.',
      imputacion:'Für Tage, an denen die Immobilie in Benidorm dem Eigentümer zur Verfügung stand, prüfen Sie Katasterwert und Revision, Eigentumsanteil und die relevanten Tage. Bei Vermietung darf nicht automatisch das ganze Jahr als Eigennutzung gelten.',
      venta:'Vor der Erklärung eines Immobilienverkaufs in Benidorm sind Kauf- und Verkaufsurkunden, belegte Kosten, relevante Abschreibungen und der Nachweis des 3-%-Einbehalts durch den Käufer zusammenzustellen.'
    }),
    fr:Object.freeze({
      intro:'Pour un bien situé à Benidorm, province d’Alicante, le Modelo 210 suit les règles nationales de l’impôt des non-résidents. Benidorm indique le lieu du bien sans créer de taux fiscal municipal particulier.',
      alquiler:'Vérifiez les périodes réellement louées, contrats, encaissements et jours sans locataire. Conservez les justificatifs des frais et vérifiez la résidence fiscale. Les jours non loués peuvent relever d’un revenu immobilier imputé distinct.',
      imputacion:'Pour les jours où le bien de Benidorm était à disposition du propriétaire, vérifiez la valeur cadastrale et sa révision, la quote-part de propriété et les jours applicables. Ne considérez pas toute l’année comme usage privé si le bien était loué.',
      venta:'Avant de déclarer la vente d’un bien à Benidorm, rassemblez les actes d’acquisition et de vente, les frais justifiés, les amortissements applicables et la preuve de la retenue de 3 % effectuée par l’acquéreur.'
    })
  })
});
