let n=[];
let o=[];
let x=[];
let s=[];
let a=[];
let v=true;
let w="none";
let y=false;
let M;
let S;
let B;

function g(e){return document.getElementById(e)}const d=n=>new Promise(e=>setTimeout(e,n));

function m(e){M.hidden=false;
    document.getElementById("w").innerText=e}
function z(){M.hidden=true}
function h(e,n){return Array.from(Array.from(e).entries()).filter(e=>e[1].children[0].src==n.src)}
function b(t){return["012","345","678","036","147","258","048","246"].some(e=>{if(e.split("").every(n=>t.some(e=>f(n,e)))){return true}})}
async function c(e){e.target.src=a[2].src;
    if(b(h(s,a[2]))){w="win";
return m(w)}v=false;
await d(500);
n=h(s,a[0]);
if(n.length){n[q(n.length)][1].children[0].src=a[1].src}if(b(h(s,a[1]))){w="lose";
return m(w)}await d(500);
v=true}
function q(e){return Math.floor(Math.random()*e)}
function r(){location.reload()}
function i(){M=g("m");
s=document.getElementsByClassName("ox");
a=document.getElementsByClassName("c");
S=g("s");
B=g("b")}
function f(){}window.onload=()=>{i();
    z();
    g("t").addEventListener("click",()=>m(w));
g("r").addEventListener("click",()=>location.reload());
g("z").addEventListener("click",z)};
window.onclick=e=>{if(e.target.src==a[0].src&&v){c(e);
    n=h(s,a[0]);
    if(n.length===0&&!b(h(s,a[2]))){w="draw";
m(w)}else{o=h(s,a[1]);
    x=h(s,a[2])}}};

