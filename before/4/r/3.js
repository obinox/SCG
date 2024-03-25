const e=require("express");const r=e.Router();const d=__dirname;let b={};r.get('/',(q,s)=>{s.render("3/main",{b:b});});
r.post("/x",(q,s)=>{if(!!q.body['n']?.trim()&&!!q.body['f']?.trim()){b[q.body['n']]=[q.body['f'],q.body['s']];}s.redirect('./');});
module.exports=r;