<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-80">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>
            Project Text Board
        </title>
        <!--Icon-->
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css" type="text/css">
    </head>
    <body>
        <section class="editor">
            <div class="header">
                <div id="navbar">
                    <a class="back"><i class="ri-arrow-left-s-line" id="back_icon"  onclick="window.location.href='index.html';"></i></a>
                    <div class="inp m">
                        <input placeholder="Enter your text"  id="text_inp">
                        <div id="done_head">Done</div>
                    </div>
                    <a id="font_icon" class="m"><i class="ri-font-size"></i></a>
                    <a id="ani_icon" class="m"><i class="ri-star-smile-line"></i></a>
                    <a id="bord_icon" class="m"><i class="ri-shape-2-line"></i></a>
                    <a id="hamburger" class="ham"><i class="ri-menu-line"></i></a>
                </div>

                <div id="font_style">
                    <div id="color" class="font">Font Color</div>
                    <div id="bg_font" class="font">Back ground Color</div>
                    <div id="style" class="font">Font Style</div>
                    <div id="bg_style" class="font">Background Style</div>
                    <div id="done_font" class="done_btn">Done</div>
                </div>

                <div id="font_color" class="color_fab">
                    <h3>Font Color</h3>
                    <div id="font_render">rgb(0, 0, 0)</div>
                    <div class="color-wrap" id="fcolor_display">
                    </div>
                    <div class="slider">
                        <label style="background-color: red;" for="red_font">Red:</label>
                        <input type="number" id="red_font" class="ninput">
                        <input id="fontRCode" type="range" min="0" max="255" value="0" class="rslide" style="accent-color: red;">
                    </div>
                    <div class="slider">
                        <label style="background-color: green;" for="green_font">Green:</label>
                        <input type="number" id="green_font" class="ninput">
                        <input id="fontGCode" type="range" min="0" max="255" value="0" class="gslide" style="accent-color: green;">
                    </div>
                    <div class="slider">
                        <label  style="background-color: blue;" for="blue_font">Blue:</label>
                        <input type="number" id="blue_font" class="ninput">
                        <input id="fontBCode" type="range" min="0" max="255" value="0" class="bslide" style="accent-color: blue;">
                    </div>
                    <div id="done_btn_color" class="done_btn">Done</div>
                </div>
                

                <div id="font_bg" class="color_fab">
                    <h3>Background Color</h3>
                    <div id="bg_render">rgb(0, 0, 0)</div>
                    <div class="color-wrap" id="bgcolor_display">
                    </div>
                    <div class="slider">
                        <label style="background-color: red;" for="red_font">Red:</label>
                        <input type="number" id="red_bg" class="ninput">
                        <input id="bgRCode" type="range" min="0" max="255" value="0" style="accent-color: red;">
                    </div>
                    <div class="slider">
                        <label style="background-color: green;" for="green_font">Green:</label>
                        <input type="number" id="green_bg" class="ninput">
                        <input id="bgGCode" type="range" min="0" max="255" value="0" style="accent-color: green;">
                    </div>
                    <div class="slider">
                        <label  style="background-color: blue;" for="blue_font">Blue:</label>
                        <input type="number" id="blue_bg" class="ninput">
                        <input id="bgBCode" type="range" min="0" max="255" value="0" style="accent-color: blue;">
                    </div>
                    <div id="done_btn_bg" class="done_btn">Done</div>
                </div>

                <div id="style_group">
                    <h3>Font Style</h3>
                    <div id="style1" class="style" style="font-family: serif;">Serif</div>
                    <div id="style2" class="style" style="font-family: sans-serif;">Sans-Serif</div>
                    <div id="style3" class="style" style="font-family: monospace;">Monospace</div>
                    <div id="style4" class="style" style="font-family: cursive;">Cursive</div>
                    <div id="style5" class="style" style="font-family: fantasy;">Fantasy</div>
                    <div id="done_btn_style" class="done_btn">Done</div>
                </div>

                <div id="bg_img">
                    <h3>Background Image</h3>
                    <div id="img1" class="img"><img src="img/air.jpg"></div> 
                    <div id="img2" class="img"><img src="img/board.jpg"></div> 
                    <div id="img3" class="img"><img src="img/gal.jpg"></div> 
                    <div id="img4" class="img"><img src="img/jungle.jpg"></div> 
                    <div id="img5" class="img"><img src="img/rock.jpg"></div> 
                    <div id="img6" class="img"><img src="img/sand.jpg"></div> 
                    <div id="img7" class="img"><img src="img/water.jpg"></div> 
                    <div id="img8" class="img"><img src="img/wood.jpg"></div>
                    <div id="img9" class="img"></div> 
                    <div id="done_btn_img" class="done_btn">Done</div>
                </div>

                    <!-- <div id="sticker">
                        <div class="stick">1</div>
                        <div class="stick">2</div>
                        <div class="stick">3</div>
                        <div class="stick">4</div>
                        <div class="stick">5</div>
                        <div class="stick">6</div>
                    </div> -->

                <div id="animation">
                    <h3>Animation List</h3>
                    <div id="ani1" class="ani">animtion1</div>
                    <div id="ani2" class="ani">animtion2</div>
                    <div id="ani3" class="ani">animtion3</div>
                    <div id="ani4" class="ani">animtion4</div>
                    <div id="ani5" class="ani">animtion5</div>
                    <div id="ani6" class="ani">animtion6</div>
                    <div id="ani7" class="ani">animtion7</div>
                    <div id="done_ani" class="done_btn">Done</div>
                </div>

                <div id="border_style">
                    <h3>Border List</h3>
                    <div><a id="border1" class="border" style="border-style: solid; border-color: #fff">solid</a></div>
                    <div><a id="border2" class="border" style="border-style: dashed; border-color: #fff">dashed</a></div>
                    <div><a id="border3" class="border" style="border-style: dotted; border-color: #fff">dotted</a></div>
                    <div><a id="border4" class="border" style="border-style: double; border-color: #fff">double</a></div>
                    <div><a id="border5" class="border" style="border-style: inset; border-color: #fff">inset</a></div>
                    <div><a id="border6" class="border" style="border-style: outset; border-color: #fff">outset</a></div>
                    <div><a id="border7" class="border" style="border-style: groove; border-color: #fff">groove</a></div>
                    <div><a id="border8" class="border" style="border-style: ridge;border-color: #fff">ridge</a></div>
                    <a id="done_border" class="done_btn">Done</a>
                </div>

                <div id="semi_navbar">
                    <div class="inp m">
                        <input placeholder="Enter your text"  id="text_inps">
                        <div id="sdone_head" class="shead_done">Done</div>
                    </div>
                    <a id="font_icons" class="m m1"><i class="ri-font-size"></i>Font Custom</a>
                    <a id="ani_icons" class="m"><i class="ri-star-smile-line"></i>Animation</a>
                    <a id="bord_icons" class="m"><i class="ri-shape-2-line"></i>Border</a>
                    <div id="semi_done" class="done_btn">Done</div>
                </div>
            </div>

            <div class="body_text">
                <div id="text_control">
                    <span id="text">
                        Text Board <!--&#128522-->
                    </span>
                </div>
            </div>
        </section>
        <script src="script.js"></script>
    </body>
</html>
