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

if(font){
    font.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.add('open');
        gAni.classList.remove('open');
        gBord.classList.remove('open');
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
    })
}
if(fDone){
    fDone.addEventListener('click', ()=>{
        gFont.classList.remove('open');
    })
}
if(aDone){
    aDone.addEventListener('click', ()=>{
        gAni.classList.remove('open');
    })
}
if(bDone){
    bDone.addEventListener('click', ()=>{
        gBord.classList.remove('open');
    })
}
if(color){
    color.addEventListener('click', ()=>{
        font_color.classList.add('open');
        font_bg.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
    })
}
if(bg_font){
    bg_font.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
    })
}
if(style){
    style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        style_group.classList.add('open');
        gFont.classList.remove('open');
    })
}
if(fcDone){
    fcDone.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        gFont.classList.add('open')
    })
}
if(bgDone){
    bgDone.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        gFont.classList.add('open')
    })
}
if(fsDone){
    fsDone.addEventListener('click', ()=>{
        style_group.classList.remove('open');
        gFont.classList.add('open')
    })
}