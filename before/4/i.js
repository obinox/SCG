const e=require("express");const r=e.Router();const d=__dirname;
r.get("/",(q,s)=>{s.render("main")});module.exports=r;