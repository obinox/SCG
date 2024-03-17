let _l=[];let _m=[];let _n=[];let _o=[];let _p=[];let _q=[];
let _f;let _g;let _h=true;let _i='none';
const _j=['none','win','lose','draw','click'];
const _k=['012','345','678','036','147','258','048','246'];
const a=_a=>new Promise(_b=>setTimeout(_b,_a));
function b(_a){return document.getElementById(_a);}
function c(_a){return Math.floor(Math.random()*_a);}
function d(){_f.hidden=true;}
function e(_a){_f.hidden=false;b('w').innerText=_a;}
function f(_a){return _k.some(_b=>_b.split('').every(_c=>_a.some(_d=>_c==_d[0]?true:false)?true:false)?true:false);}
function g(_a,_b){return Array.from(Array.from(_a).entries()).filter(e=>e[1].children[0].src==_b.src);}
function h(){_f=b('m');_g=b('s');_g=b('b');_o=document.getElementsByClassName('ox');_p=document.getElementsByClassName('c');}
async function i(_a){
    _a.target.src=_p[2].src;
    if(f(g(_o,_p[2]))){_i=_j[1];return e(_i);}_h=false;await a(500);
    _l=g(_o,_p[0]);if(_l.length){_l[c(_l.length)][1].children[0].src=_p[1].src;}
    if(f(g(_o,_p[1]))){_i=_j[2];return e(_i);}await a(500);_h=true;
}
window.onload=()=>{
    h();d();b('t').addEventListener(_j[4],()=>e(_i));
    b('r').addEventListener(_j[4],()=>location.reload());
    b('z').addEventListener(_j[4],d);
}
window.onclick=(_a)=>{
    if(_a.target.src==_p[0].src&&_h&&_i==_j[0]){
        i(_a);_l=g(_o,_p[0]);
        if(_l.length===0&&!f(g(_o,_p[2]))){_i=_j[3];e(_i);}
        else{_m=g(_o,_p[1]);_n=g(_o,_p[2]);}
    }
}