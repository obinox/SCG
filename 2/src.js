let n=[];let o=[];let x=[];let s=[];let a=[];let v=true;let w='none';let y=false;
let M;let S;let B;
let intervalIds = [];
let checkAnswerDone = true;
let scanDone = false;
function g(_a){return document.getElementById(_a);}
const d=t=>new Promise(r=>setTimeout(r,t));
function m(_a){M.hidden=false;document.getElementById('w').innerText=_a;}
function z(){M.hidden=true;}
function h(_a,_b){return Array.from(Array.from(_a).entries()).filter(e=>e[1].children[0].src==_b.src);}
function b(_a){return ['012','345','678','036','147','258','048','246'].some(_b=>{_b.split('').every(_c=>_a.some(_d=>{_c==_d[1]?true:false}))?true:false});}
async function c(_a){
    _a.target.src=a[2].src;
    console.log(b(h(s,a[2])));
    if(b(h(s,a[2]))){w='win';return m(w);}v=false;await d(500);
    n=h(s,a[0]);if(n.length){n[q(n.length)][1].children[0].src=a[1].src;}
    if(b(h(s,a[1]))){w='lose';return m(w);}await d(500);v=true;
}
function q(_a){return Math.floor(Math.random()*_a);}
function r(){location.reload();}
function i(){
    M=g('m');
    s=document.getElementsByClassName('ox');
    a=document.getElementsByClassName('c');
    S=g('s');
    B=g('b');
    S.addEventListener('animationend', handleAnimationEnd);
    document.documentElement.style.setProperty('--a',-B.offsetWidth+'px');
}
function handleAnimationEnd() {
    S.classList.remove('orange');
    S.classList.remove('green');
    S.classList.remove('red');
}
function checkAnswer() {
    if (!scanDone) return; 
    while (intervalIds.length > 0) clearInterval(intervalIds.pop());
    B.classList.remove('scanning');
    if (true) { 
        S.classList.add('green');
        setTimeout(() => { 
        checkAnswerDone = true;
        }, 1000);
    } else {
        S.classList.add('red');
        setTimeout(() => { checkAnswerDone = true; }, 500);
    }
    
}
function f(){
    if (!checkAnswerDone) return;
    checkAnswerDone = false;
    scanDone = false;
    intervalIds.push(setInterval(checkAnswer, 500));
    B.classList.add('scanning');
    scanDone = true;
}
window.onload=()=>{
    i();z();
    g('t').addEventListener('click',()=>m(w));
    g('r').addEventListener('click',()=>location.reload());
    g('z').addEventListener('click',z);
}
window.onclick=(e)=>{
    f()
    if(e.target.src==a[0].src&&v){
        c(e);n=h(s,a[0]);
        if(n.length===0&&!b(h(s,a[2]))){w='draw';m(w);}
        else{o=h(s,a[1]);x=h(s,a[2]);}
    }
}