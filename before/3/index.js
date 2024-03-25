const e=require("express");const a=e();const p=8080;let b={};
const d=__dirname;const m=require(d+"/main.html")['m'];
a.use(e.urlencoded({extended:false}));
a.get("/",(q,s)=>{
    let t="";
    for(const [k,v] of Object.entries(b)){t+=`<tr><td><xmp>${k}</xmp></td><td><xmp>${v[0]}</xmp></td><td><xmp>${v[1]}</xmp></td></tr>`}
    s.send(m(t));
})
a.get("/style.css",(q,s)=>{s.sendFile(d+"/style.css");})
a.listen(p,()=>{console.log(`server run in http://localhost:${p}`);})
a.post("/x",(q,s)=>{if(!!q.body['n']?.trim()&&!!q.body['f']?.trim()){b[q.body['n']]=[q.body['f'],q.body['s']];}s.redirect('/');})