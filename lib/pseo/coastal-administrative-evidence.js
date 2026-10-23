// Administrative evidence register for the 2026-10-23 coastal pSEO batch.
// This is a staging register, not an official INE certification.
// No INE codes are asserted without a checked official source.
// Orihuela Costa is an area within Orihuela, not a separate municipality.
export const COASTAL_ADMINISTRATIVE_EVIDENCE_20261023 = Object.freeze([
  {slug:'benidorm',municipality:'Benidorm',province:'Alicante',administrativeType:'municipality'},
  {slug:'javea',municipality:'Xàbia',province:'Alicante',administrativeType:'municipality'},
  {slug:'marbella',municipality:'Marbella',province:'Málaga',administrativeType:'municipality'},
  {slug:'orihuela-costa',municipality:'Orihuela',province:'Alicante',administrativeType:'area',note:'Orihuela Costa is not an independent municipality'},
  {slug:'estepona',municipality:'Estepona',province:'Málaga',administrativeType:'municipality'},
  {slug:'mijas',municipality:'Mijas',province:'Málaga',administrativeType:'municipality'},
  {slug:'denia',municipality:'Dénia',province:'Alicante',administrativeType:'municipality'},
  {slug:'calpe',municipality:'Calp',province:'Alicante',administrativeType:'municipality'},
  {slug:'altea',municipality:'Altea',province:'Alicante',administrativeType:'municipality'},
  {slug:'fuengirola',municipality:'Fuengirola',province:'Málaga',administrativeType:'municipality'}
].map(item=>Object.freeze({...item,officialIneCode:null,sourceUrl:null,verifiedAt:null,verificationStatus:'pending',publishAllowed:false})));
