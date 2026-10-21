export const runtime='nodejs';
const recent=new Map();
export async function POST(request){
 const origin=request.headers.get('origin');
 if(origin && origin!=='https://www.legalnexum.com' && origin!=='https://legalnexum.com')return Response.json({ok:false,error:'Origen no permitido'},{status:403});
 let b;try{b=await request.json()}catch{return Response.json({ok:false,error:'JSON inválido'},{status:400})}
 const str=(v,n)=>typeof v==='string'?v.trim().slice(0,n):'';
 const nombre=str(b.nombre,100),email=str(b.email,180),pais=str(b.pais,100),consulta=str(b.consulta,500),ciudad=str(b.ciudad,100),idioma=str(b.idioma,10);
 if(str(b.website,100))return Response.json({ok:true});
 if(!nombre||!/^\S+@\S+\.\S+$/.test(email)||!pais||!consulta||b.consentimiento!==true)return Response.json({ok:false,error:'Revisa los campos obligatorios'},{status:400});
 const ip=(request.headers.get('x-forwarded-for')||'').split(',')[0];const key=ip||email;const now=Date.now();if(recent.size>1000)recent.clear();if(now-(recent.get(key)||0)<30000)return Response.json({ok:false,error:'Espera antes de volver a enviar'},{status:429});recent.set(key,now);
 const url=process.env.LEGALNEXUM_LEADS_WEBHOOK;if(!url)return Response.json({ok:false,error:'Servicio temporalmente no disponible'},{status:503});
 try{const res=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({nombre,email,pais,consulta,ciudad,idioma,consentimiento:true}),cache:'no-store',signal:AbortSignal.timeout(10000)});if(!res.ok)throw new Error('Webhook '+res.status);return Response.json({ok:true})}catch(e){console.error('LegalNexum lead submission failed',e.message);return Response.json({ok:false,error:'No se ha podido enviar. Inténtalo más tarde.'},{status:502})}
}