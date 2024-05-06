window.onload = function() {
    document.body.classList.add('fade-in');
}


const font = document.getElementById("font_icon");
const ani = document.getElementById("ani_icon");
const bord = document.getElementById("bord_icon");
const gFont = document.getElementById("font_style");
const gAni = document.getElementById("animation");
const gBord = document.getElementById("border_style");

const fDone = document.getElementById("done_font");
const aDone = document.getElementById("done_ani");
const bDone = document.getElementById("done_border");

const color = document.getElementById("color");
const bg_font  = document.getElementById("bg_font");
const style  = document.getElementById("style");

const font_color = document.getElementById("font_color");
const font_bg = document.getElementById("font_bg");
const style_group = document.getElementById("style_group");

const fcDone = document.getElementById("done_btn_color");
const bgDone = document.getElementById("done_btn_bg");
const fsDone = document.getElementById("done_btn_style");

let text = document.getElementById("text_control");

const sNav = document.getElementById("semi_navbar");
const ham = document.getElementById("hamburger");
const sDone = document.getElementById("semi_done");

const font_icon = document.getElementsByClassName("font-icon");

const sFont = document.getElementById("font_icons");
const sAni = document.getElementById("ani_icons");
const sBord = document.getElementById("bord_icons");

let t = document.getElementById("text");

let ani1 = document.getElementById("ani1");
let ani2 = document.getElementById("ani2");
let ani3 = document.getElementById("ani3");
let ani4 = document.getElementById("ani4");
let ani5 = document.getElementById("ani5");
let ani6 = document.getElementById("ani6");
let ani7 = document.getElementById("ani7");

let border1 = document.getElementById("border1");
let border2 = document.getElementById("border2");
let border3 = document.getElementById("border3");
let border4 = document.getElementById("border4");
let border5 = document.getElementById("border5");
let border6 = document.getElementById("border6");
let border7 = document.getElementById("border7");
let border8 = document.getElementById("border8");

let input = document.getElementById("text_inp").value;
let inp_done = document.getElementById("done_head");

let style1 = document.getElementById("style1");
let style2 = document.getElementById("style2");
let style3 = document.getElementById("style3");
let style4 = document.getElementById("style4");
let style5 = document.getElementById("style5");

if(font){
    font.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.add('open');
        gAni.classList.remove('open');
        gBord.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(ani){
    ani.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gAni.classList.add('open');
        gFont.classList.remove('open');
        gBord.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(bord){
    bord.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gBord.classList.add('open');
        gFont.classList.remove('open');
        gAni.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(fDone){
    fDone.addEventListener('click', ()=>{
        // sNav.classList.add('open');
        gFont.classList.remove('open');
        text.classList.remove('open');
    })
}
if(aDone){
    aDone.addEventListener('click', ()=>{
        // sNav.classList.add('open');
        gAni.classList.remove('open');
        text.classList.remove('open');
    })
}
if(bDone){
    bDone.addEventListener('click', ()=>{
        // sNav.classList.add('open');
        gBord.classList.remove('open');
        text.classList.remove('open');
    })
}
if(color){
    color.addEventListener('click', ()=>{
        font_color.classList.add('open');
        font_bg.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}
if(bg_font){
    bg_font.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}
if(style){
    style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        style_group.classList.add('open');
        gFont.classList.remove('open');
        text.classList.add('open');

        if(style1){
            style1.addEventListener('click', ()=>{
                t.style.fontFamily = 'serif';
            })
        }if(style2){
            style2.addEventListener('click', ()=>{
                t.style.fontFamily = 'sans-serif';
            })
        }if(style3){
            style3.addEventListener('click', ()=>{
                t.style.fontFamily = 'monospace';
            })
        }if(style4){
            style4.addEventListener('click', ()=>{
                t.style.fontFamily = 'cursive';
            })
        }if(style5){
            style5.addEventListener('click', ()=>{
                t.style.fontFamily = 'fantasy';
            })
        }
    })
}
if(fcDone){
    fcDone.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(bgDone){
    bgDone.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(fsDone){
    fsDone.addEventListener('click', ()=>{
        style_group.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(ham){
    ham.addEventListener('click', ()=>{
        sNav.classList.add('open');
    })
}
if(sDone){
    sDone.addEventListener('click', ()=>{
        sNav.classList.remove('open');
    })
}

if(sFont){
    sFont.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gFont.classList.add('open');
    })
}
if(sAni){
    sAni.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gAni.classList.add('open');
        text.classList.add('open');
    })
}
if(sBord){
    sBord.addEventListener('click', ()=>{
        sNav.classList.remove('open');
        gBord.classList.add('open');
        text.classList.add('open');
    })
}

if(ani1){
    ani1.addEventListener('click', ()=>{
        t.style.animation = 'slideAnimation 5s infinite'; // Setting animation, duration, and iteration count in one line
    })
}
if(ani2){
    ani2.addEventListener('click', ()=>{
        t.style.animation = 'fadeAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}if(ani3){
    ani3.addEventListener('click', ()=>{
        t.style.animation = 'scaleAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}if(ani4){
    ani4.addEventListener('click', ()=>{
        t.style.animation = 'colorChangeAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}if(ani5){
    ani5.addEventListener('click', ()=>{
        t.style.animation = 'bounceAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}
if(ani6){
    ani6.addEventListener('click', ()=>{
        t.style.animation = 'waverAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}
if(ani7){
    ani7.addEventListener('click', ()=>{
        t.style.animation = 'pulseAnimation 2s infinite'; // Setting animation, duration, and iteration count in one line
    })
}

if(border1){
    border1.addEventListener('click', ()=>{
        text.style.border = ' 3px solid gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border2){
    border2.addEventListener('click', ()=>{
        text.style.border = ' 3px dashed gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border3){
    border3.addEventListener('click', ()=>{
        text.style.border = ' 3px dotted gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border4){
    border4.addEventListener('click', ()=>{
        text.style.border = ' 3px double gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border5){
    border5.addEventListener('click', ()=>{
        text.style.border = ' 3px inset gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border6){
    border6.addEventListener('click', ()=>{
        text.style.border = ' 3px outset gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border7){
    border7.addEventListener('click', ()=>{
        text.style.border = ' 3px groove gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border8){
    border8.addEventListener('click', ()=>{
        text.style.border = ' 3px ridge blue';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}

if(inp_done){
    inp_done.addEventListener('click', ()=>{
        let input = document.getElementById("text_inp").value;
        t.innerHTML = input;
    })
}
