const ver = 0.1;
const history = [];
const files = {};
let n = 0;

import pr from "./programs.js";

function run(t){
    let c;
    if(!t) return '';
    history.push(t);
    [c, ...t] = t.split(' ').map(v=>v.trim());
    if(Object.hasOwn(pr, c)) try {  return pr[c](...t); } 
    catch (e) { return e; } 
    else return `'${c}' command does not exist (v${ver} dude)`
}

function init(w){
    const $ = w.document.querySelector.bind(w.document);
    const addLn = (t,html=false) => $('output')[html?'innerHTML':'innerText'] += t+'\n';
    const pr = `TATIS DEV [v${ver}]\n`;
    const dt = new Date();
    if (dt.getMonth()==11 && dt.getDate()==10) dt = '🎂 '+dt; //HB to me :P
    try{
        w.addEventListener('click',()=>$('#in').focus());
        w.addEventListener('DOMContentLoaded', ()=>{
            addLn();
            $('#pre').innerHTML = `<address>dev</address>:<nav>/</nav>$`;
        });
        w.addEventListener('keydown',ev=>{
            switch (ev.key) {
                case 'Enter':
                    ev.preventDefault();
                    const c = $('#in').innerText; //Copy Command
                    const l = $('#cmd').innerText; //Copy Line

                    $('#in').innerText = null; //Clean Command
                    addLn(l); //Write Line
                    const r = run(c); //Run Command
                    if (r) addLn(r); //Write response
                    break;
                case 'Tab':
                    ev.preventDefault();

                    break;
                case 'ArrowDown':
                    ev.preventDefault();
                    n = Math.max(n,1);
                    $('#in').innerText = history[history.length-(--n)] ?? '';
                    break;
                case 'ArrowUp':
                    ev.preventDefault();
                    n = Math.min(n, history.length-1);
                    $('#in').innerText = history[history.length-(++n)] ?? '';
                    break;
                default: break;
            }
        });
    }catch(e){
        addLn(e);
    }
}
init(window);

async function pop(p){
    const pip = await window.documentPictureInPicture.requestWindow({width: 100, height: 100});
    pip.document.head.innerHTML = '<link href="style.css" rel="stylesheet"></link>';
    pip.document.body.append(p);
    init(pip);
}
document.querySelector('button').addEventListener('click',()=>pop(document.body),{once:true});
