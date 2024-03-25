const e=require("express");const r=e.Router();const d=__dirname;
r.get('/',(q,s)=>{s.render("1/main")});
r.get('/req',(q,s)=>{s.render("1/req")});
r.get('/point',(q,s)=>{s.render("1/point")});
module.exports=r;