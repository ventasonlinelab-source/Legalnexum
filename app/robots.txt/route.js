export function GET(){
 const body=['User-agent: *','Allow: /','Sitemap: https://www.legalnexum.com/sitemap.xml',''].join(String.fromCharCode(10));
 return new Response(body,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=0, must-revalidate'}});
}
