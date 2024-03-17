const e=require("express");const a=e();const h=require("./i.js");
const i=require("./r/1.js");const j=require("./r/2.js");const k=require("./r/3.js");const p=8080;const d=__dirname;
a.set('views',d+'/v');a.set('view engine','ejs');a.use(e.urlencoded({extended:false}));a.use(e.static(d+"/s"));
a.use('/',h);a.use('/1',i);a.use('/2',j);a.use('/3',k);
a.listen(p,()=>{console.log(`server run in http://localhost:${p}`);})