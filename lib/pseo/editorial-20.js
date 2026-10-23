// Editorial drafts: EXACTLY 20 Spanish-language routes (10 coastal areas x 2 intents).
// Draft content is not a publication approval and does not change robots or sitemap.
const places=[
 ['torrevieja','Torrevieja','municipio de la Vega Baja','las fechas de alquiler y los días en que la vivienda queda a disposición del propietario','contratos, justificantes de cobro y períodos de uso personal'],
 ['orihuela-costa','Orihuela Costa','zona litoral perteneciente al municipio de Orihuela, no municipio independiente','la dirección del inmueble y el municipio fiscal de Orihuela','contratos y referencia catastral que identifiquen correctamente el inmueble'],
 ['guardamar-del-segura','Guardamar del Segura','municipio litoral de la Vega Baja','los períodos arrendados frente a las semanas de uso propio','calendario de ocupación, ingresos y justificantes de gastos'],
 ['pilar-de-la-horadada','Pilar de la Horadada','municipio del sur de Alicante con núcleo urbano y zonas costeras','si el inmueble se alquila por temporadas o permanece disponible','documentos de propiedad, reservas y días efectivos de arrendamiento'],
 ['benidorm','Benidorm','municipio turístico de la Marina Baixa','la diferencia entre días alquilados y períodos vacíos a disposición del titular','registro de reservas, cobros y gastos imputables al alquiler'],
 ['alicante','Alicante','municipio y capital de la provincia','la ubicación exacta y el uso real de la vivienda durante el ejercicio','contratos, ingresos y documentación del titular no residente'],
 ['elche','Elche','municipio de la provincia de Alicante con ámbitos urbanos y litorales','la identificación catastral y el período de utilización del inmueble','referencia catastral, escrituras y documentación de ocupación'],
 ['santa-pola','Santa Pola','municipio litoral de la comarca del Baix Vinalopó','las estancias de uso personal frente a las arrendadas','calendario anual, contratos y justificantes de ingresos'],
 ['orihuela','Orihuela','municipio de la Vega Baja que incluye Orihuela Costa','si el inmueble está en el casco urbano o en la zona litoral sin duplicar la localidad fiscal','escritura, referencia catastral y fechas de arrendamiento'],
 ['rojales','Rojales','municipio de la Vega Baja','la titularidad, la residencia fiscal y los períodos de alquiler o disponibilidad','título de propiedad, ingresos y calendario de ocupación']
];
const content={};
for(const [slug,name,context,focus,docs] of places){
 content[slug]={
  alquiler:{
   title:`Modelo 210 por alquiler en ${name}: ingresos, gastos y plazos`,
   intro:`Si eres no residente y alquilas una vivienda situada en ${name}, ${context}, el Modelo 210 puede exigir declarar los rendimientos obtenidos. Antes de calcular, conviene separar los períodos alquilados de los días en que el inmueble estuvo a tu disposición.`,
   local:`En ${name}, presta especial atención a ${focus}. La ubicación no modifica por sí misma los tipos estatales del IRNR: la residencia fiscal y las circunstancias de la renta determinan el tratamiento.`,
   documents:`Prepara ${docs}, además del certificado de residencia fiscal cuando corresponda y las facturas que acrediten gastos deducibles.`,
   warning:'Para contribuyentes elegibles de la UE/EEE, la deducción de gastos requiere requisitos y documentación; en otros casos puede tributar el ingreso bruto. Los plazos varían según ejercicio y modalidad de presentación. Compruébalos en la AEAT.'
  },
  imputacion:{
   title:`Modelo 210 por renta imputada en ${name}: valor catastral y días`,
   intro:`Una vivienda situada en ${name}, ${context}, puede generar renta inmobiliaria imputada para su titular no residente durante los días en que está a su disposición y no se encuentra arrendada, con las excepciones legales aplicables.`,
   local:`Para un inmueble de ${name}, revisa ${focus}. Si hay alquiler durante parte del año, no confundas la renta efectivamente cobrada con la imputación correspondiente a otros períodos.`,
   documents:`Reúne ${docs}, el recibo del IBI o certificación catastral, el porcentaje de titularidad y el calendario de días a disposición.`,
   warning:'El porcentaje del valor catastral puede ser 1,1 % o 2 % según los requisitos del ejercicio; sin valor catastral notificado existen reglas específicas. La imputación se prorratea por días y titularidad. Verifica los plazos actuales en la AEAT.'
  }
 };
}
export const EDITORIAL_20=Object.freeze(content);
export const EDITORIAL_20_PATHS=Object.freeze(Object.entries(content).flatMap(([location,intents])=>Object.keys(intents).map(intent=>({locale:'es',intent,location}))));
export const getEditorialDraft=(locale,intent,location)=>locale==='es'?content[location]?.[intent]??null:null;
