// window.onload = function() {
//     document.body.classList.add('fade-in');
// }

//navbar element
const font = document.getElementById("font_icon");
const ani = document.getElementById("ani_icon");
const bord = document.getElementById("bord_icon");
//page interact with navbar
const gFont = document.getElementById("font_style");
const gAni = document.getElementById("animation");
const gBord = document.getElementById("border_style");

//new implement of border group
const bg_part = document.getElementById("bg_part");
const border_group = document.getElementById("border_group");
const background_styl = document.getElementById("background_styl");

//new implement of animation group
const aniOpt = document.getElementById("ani_option");
const textAni = document.getElementById("textAni");
const bgAni = document.getElementById("bgAni");
const background_ani = document.getElementById("background_ani");
const done_bgAni = document.getElementById("done_bgAni");
//done btn for each main page
const fDone = document.getElementById("done_font");
const aDone = document.getElementById("done_ani");
const bDone = document.getElementById("done_border");
const done_bord_sty = document.getElementById("done_bord_sty");
const doneListAni = document.getElementById("done_list");
//element in font style
const color = document.getElementById("color");
const bg_font  = document.getElementById("bg_font");
const style  = document.getElementById("style");
const bg_style = document.getElementById("bg_style");
const emo_btn = document.getElementById("emo_btn");
//page interact with font style element
const font_color = document.getElementById("font_color");
const font_bg = document.getElementById("font_bg");
const style_group = document.getElementById("style_group");
const bg_img = document.getElementById("bg_img");
const emo_gr = document.getElementById("emoji_group");

//done btn for each element in font style
const fcDone = document.getElementById("done_btn_color");
const bgDone = document.getElementById("done_btn_bg");
const fsDone = document.getElementById("done_btn_style");
const imgDone = document.getElementById("done_btn_img");
const emo_done = document.getElementById("done_emoji");
//text board controller
let text = document.getElementById("text_control");
//text board 
let t = document.getElementById("text");
let emoMain  =document.getElementById("emo_main");

//group emoji
const emos = [];
for (let i = 1; i <= 20; i++) {
  const em = document.getElementById(`emo${i}`);
  emos.push(em);
}

let emCode = ["&#128522","&#128512","&#128514","&#128517","&#128520",
                "&#128519","&#128523","&#128525","&#12856","&#128527",
                "&#128530","&#128531","&#128534","&#128536","&#128541",     
                "&#128542","&#128543","&#128545","&#128548","&#128557",
            ]

//navbar in small size page
const sNav = document.getElementById("semi_navbar");
const ham = document.getElementById("hamburger");
const sDone = document.getElementById("semi_done");

//semi navbar icon
const sFont = document.getElementById("font_icons");
const sAni = document.getElementById("ani_icons");
const sBord = document.getElementById("bord_icons");

//each element in animation type
let ani1 = document.getElementById("ani1");
let ani2 = document.getElementById("ani2");
let ani3 = document.getElementById("ani3");
let ani4 = document.getElementById("ani4");
let ani5 = document.getElementById("ani5");
let ani6 = document.getElementById("ani6");
let ani7 = document.getElementById("ani7");

//each element in border type
let border1 = document.getElementById("border1");
let border2 = document.getElementById("border2");
let border3 = document.getElementById("border3");
let border4 = document.getElementById("border4");
let border5 = document.getElementById("border5");
let border6 = document.getElementById("border6");
let border7 = document.getElementById("border7");
let border8 = document.getElementById("border8");

//get input text and throw input value
let input = document.getElementById("text_inp").value;
let inp_done = document.getElementById("done_head");

//font style type element
let style1 = document.getElementById("style1");
let style2 = document.getElementById("style2");
let style3 = document.getElementById("style3");
// let style4 = document.getElementById("style4");
let style5 = document.getElementById("style5");
let style6 = document.getElementById("style6");
// let style7 = document.getElementById("style7");
// let style8 = document.getElementById("style8");
// let style9 = document.getElementById("style9");
let style10 = document.getElementById("style10");
let style11 = document.getElementById("style11");
let style12 = document.getElementById("style12");
// let style13 = document.getElementById("style13");
let style14 = document.getElementById("style14");
let style15 = document.getElementById("style15");
// let style16 = document.getElementById("style16");
// let style17 = document.getElementById("style17");
let style18 = document.getElementById("style18");
let style19 = document.getElementById("style19");
let style20 = document.getElementById("style20");
t.style.fontFamily = 'Jacquard 12';

//color slider element in font color
let fRed = document.getElementById("fontRCode");
let fGreen = document.getElementById("fontGCode");
let fBlue = document.getElementById("fontBCode");
const rendFont = document.getElementById("font_render");
const fcolor_display = document.getElementById("fcolor_display");
const numFRed = document.getElementById("red_font").value;
const numFGreen = document.getElementById("green_font").value;
const numFBlue = document.getElementById("blue_font").value;

//color slider element in bg color
let bgRed = document.getElementById("bgRCode");
let bgGreen = document.getElementById("bgGCode");
let bgBlue = document.getElementById("bgBCode");
let rendbg = document.getElementById("bg_render");
const bgcolor_display = document.getElementById("bgcolor_display");
const numBgRed = document.getElementById("red_bg").value;
const numBgGreen = document.getElementById("green_bg").value;
const numBgBlue = document.getElementById("blue_bg").value;

//background image option
const bgAnis = [
    'url("gifs/building.gif") center/ cover no-repeat', 
    'url("gifs/Cotton candy.gif") center/ cover no-repeat', 
    'url("gifs/download.gif") center/ cover no-repeat',
    'url("gifs/Generosity.gif") center/ cover no-repeat', 
    'url("gifs/heart.gif") center/ cover no-repeat', 
    'url("gifs/Micro Cosmic.gif") center/ cover no-repeat',
    'url("gifs/Moods.gif") center/ cover no-repeat'
];


const imgs = ['url("img/air.jpg")',
              'url("img/board.jpg")',
              'url("img/gal.jpg")',
              'url("img/jungle.jpg")',
              'url("img/rock.jpg")',
              'url("img/sand.jpg")',
              'url("img/water.jpg")',
              'url("img/wood.jpg")',
              'url("img/led.jpg")'
];

if(font){
    font.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.add('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        gBord.classList.remove('open');
        background_ani.classList.remove('open');
        aniOpt.classList.remove('open');
        gAni.classList.remove('open');
        bg_part.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(ani){
    ani.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        aniOpt.classList.add('open');
        gBord.classList.remove('open');
        bg_img.classList.remove('open');
        background_ani.classList.remove('open');
        emo_gr.classList.remove('open');
        gAni.classList.remove('open');
        gFont.classList.remove('open');
        bg_part.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(bord){
    bord.addEventListener('click', ()=>{
        font_bg.classList.remove('open');
        font_color.classList.remove('open');
        style_group.classList.remove('open');
        bg_part.classList.add('open');
        gFont.classList.remove('open');
        gBord.classList.remove('open');
        gAni.classList.remove('open');
        aniOpt.classList.remove('open');
        emo_gr.classList.remove('open');
        background_ani.classList.remove('open');
        bg_img.classList.remove('open');
        aniOpt.classList.remove('open');
        text.classList.add('open');
        sNav.classList.remove('open');
    })
}
if(textAni){
    textAni.addEventListener('click', ()=>{
        gAni.classList.add('open');
        aniOpt.classList.remove('open');
    })
}
if(doneListAni){
    doneListAni.addEventListener('click', ()=>{
        aniOpt.classList.remove('open');
        text.classList.remove('open');
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
        gAni.classList.remove('open');
        aniOpt.classList.add('open');
        text.classList.remove('open');
    })
}
if(bDone){
    bDone.addEventListener('click', ()=>{
        gBord.classList.remove('open');
        bg_part.classList.add('open');
        text.classList.remove('open');
    })
}if(done_bord_sty){
    done_bord_sty.addEventListener('click', ()=>{
        bg_part.classList.remove('open');
        text.classList.remove('open');
    })
}
if(border_group){
    border_group.addEventListener('click', ()=>{
        gBord.classList.add('open');
        bg_part.classList.remove('open');
    })
}
if(background_styl){
    background_styl.addEventListener('click', ()=>{
        bg_img.classList.add('open');
        bg_part.classList.remove('open');
    })
}


if(color){
    color.addEventListener('click', ()=>{
        font_color.classList.add('open');
        font_bg.classList.remove('open');
        bg_img.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}
if(bg_font){
    bg_font.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.add('open');
        bg_img.classList.remove('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
    })
}
if(style){
    style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        bg_img.classList.remove('open');
        style_group.classList.add('open');
        gFont.classList.remove('open');
        text.classList.add('open');

        if(style1){
            style1.addEventListener('click', ()=>{
                t.style.fontFamily = 'Danfo';
            })
        }if(style2){
            style2.addEventListener('click', ()=>{
                t.style.fontFamily = 'Permanent Marker';
            })
        }if(style3){
            style3.addEventListener('click', ()=>{
                t.style.fontFamily = 'Poppins';
            })
        }
        // if(style4){
        //     style4.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Jacquard 12';
        //         t.style.color = 'red';
        //     })
        // }
        if(style5){
            style5.addEventListener('click', ()=>{
                t.style.fontFamily = 'Poetsen One';
            })
        }if(style6){
            style6.addEventListener('click', ()=>{
                t.style.fontFamily = 'Oswald';
            })
        }
        // if(style7){
        //     style7.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Noto Sans Khmer';
        //     })
        // }if(style8){
        //     style8.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Noto Sans JP';
        //     })
        // }if(style9){
        //     style9.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Major Mono Dislay';
        //         t.style.color = 'blue';
        //     })
        // }
        if(style10){
            style10.addEventListener('click', ()=>{
                t.style.fontFamily = 'Jaro';
            })
        }if(style11){
            style11.addEventListener('click', ()=>{
                t.style.fontFamily = 'Dancing Script';
            })
        }if(style12){
            style12.addEventListener('click', ()=>{
                t.style.fontFamily = 'Anton';
            })
        }
        // if(style13){
        //     style13.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Exo 2';
        //         t.style.color = 'red';
        //     })
        // }
        if(style14){
            style14.addEventListener('click', ()=>{
                t.style.fontFamily = 'Pacifico';
            })
        }if(style15){
            style15.addEventListener('click', ()=>{
                t.style.fontFamily = 'Shadows Into Light';
            })
        }
        // if(style16){
        //     style16.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Abril Fatface';
        //         t.style.color = 'red';
        //     })
        // }if(style17){
        //     style17.addEventListener('click', ()=>{
        //         t.style.fontFamily = 'Micro 5 Charted';
        //         t.style.color = 'red';
        //     })
        // }
        if(style18){
            style18.addEventListener('click', ()=>{
                t.style.fontFamily = 'Rubik Mono One';
            })
        }if(style19){
            style19.addEventListener('click', ()=>{
                t.style.fontFamily = 'Indie Flower';
            })
        }if(style20){
            style20.addEventListener('click', ()=>{
                t.style.fontFamily = 'Titan One';
            })
        }
    })
}
if(bgAni){
    bgAni.addEventListener('click', ()=>{
        background_ani.classList.add('open');
        aniOpt.classList.remove('open');
    })
}

for (let i = 1; i <= 7; i++) {
    const bgAni = document.getElementById(`bgAni${i}`);
    if (bgAni) {
        bgAni.addEventListener('click', () => {
            bgImg.style.background = bgAnis[i - 1];
        });
    }
}

if(done_bgAni){
    done_bgAni.addEventListener('click', ()=>{
        background_ani.classList.remove('open');
        text.classList.remove('open');  

    })
}

if(emo_btn){
    emo_btn.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        emo_gr.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');

    })
}

emos.forEach((em, index) => {
    em.addEventListener('click', () => {
      emoMain.innerHTML = emCode[index];
    });
  });

if(bg_style){
    bg_style.addEventListener('click', ()=>{
        font_color.classList.remove('open');
        font_bg.classList.remove('open');
        bg_img.classList.add('open');
        style_group.classList.remove('open');
        gFont.classList.remove('open');
        text.classList.add('open');
        

    })
}
for (let i = 0; i < 9; i++) {
    const img = document.getElementById(`img${i + 1}`);
    if (img) {
        img.addEventListener('click', () => {
            text.style.background = imgs[i];
        });
    }
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
if(imgDone){
    imgDone.addEventListener('click', ()=>{
        bg_img.classList.remove('open');
        bg_part.classList.add('open');
    })
}
if(emo_done){
    emo_done.addEventListener('click', ()=>{
        emo_gr.classList.remove('open');
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
        t.style.animation = 'slideAnimationjs 2s infinite'; // Setting animation, duration, and iteration count in one line
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
        text.style.border = ' 5px solid gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border2){
    border2.addEventListener('click', ()=>{
        text.style.border = ' 5px dashed gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border3){
    border3.addEventListener('click', ()=>{
        text.style.border = ' 5px dotted gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border4){
    border4.addEventListener('click', ()=>{
        text.style.border = ' 5px double gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border5){
    border5.addEventListener('click', ()=>{
        text.style.border = ' 5px inset gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border6){
    border6.addEventListener('click', ()=>{
        text.style.border = ' 5x outset gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border7){
    border7.addEventListener('click', ()=>{
        text.style.border = ' 5px groove gray';
        t.style.padding = '10px 15px';
        t.style.borderRadius = '10px';
    })
}
if(border8){
    border8.addEventListener('click', ()=>{
        text.style.border = ' 5px ridge gray';
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



function updateColorBg() {
    const redbgVal = bgRed.value;
    const greenbgVal = bgGreen.value;
    const bluebgVal = bgBlue.value;
    const fcb = `rgb(${redbgVal}, ${greenbgVal}, ${bluebgVal})`;
    bgRed.style.accentColor =  `rgb(${redbgVal}, 0, 0)`;
    bgGreen.style.accentColor =  `rgb(0,${greenbgVal} ,0)`;
    bgBlue.style.accentColor =  `rgb(0, 0, ${bluebgVal})`;

    rendbg.style.color = fcb;
    rendbg.innerHTML = fcb;
    bgcolor_display.style.backgroundColor = fcb;
    text.style.backgroundColor = fcb;
}

bgRed.addEventListener('input', updateColorBg);
bgGreen.addEventListener('input', updateColorBg);
bgBlue.addEventListener('input', updateColorBg);

function updateColorFont() {
    const redFVal = fRed.value;
    const greenFVal = fGreen.value;
    const blueFVal = fBlue.value;
    const fc = `rgb(${redFVal}, ${greenFVal}, ${blueFVal})`;
    fRed.style.accentColor =  `rgb(${redFVal}, 0, 0)`;
    fGreen.style.accentColor =  `rgb(0,${greenFVal} ,0)`;
    fBlue.style.accentColor =  `rgb(0, 0, ${blueFVal})`;

    rendFont.style.color = fc;
    rendFont.innerHTML = fc;
    fcolor_display.style.backgroundColor = fc;

    // Set the font color of element with id 'text_control'
    t.style.color = fc;
}

fRed.addEventListener('input', updateColorFont);
fGreen.addEventListener('input', updateColorFont);
fBlue.addEventListener('input', updateColorFont);
