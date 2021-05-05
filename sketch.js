let img;

function preload() {
img = loadImage('House Frame 1-min.png');
}

function setup() {
createCanvas(800, 450);
img.resize(800, 450);
}

function draw() {
background(220);
image(img, 0, 0);

////structure

line(40, 150, 200, 145);
strokeWeight(4);
stroke('yellow');

line(55, 150, 55, 220 );
strokeWeight(4);
stroke('yellow');

line(200, 145, 305, 148);
strokeWeight(4);
stroke('yellow');

 line(305, 148, 305, 120);
strokeWeight(4);
stroke('yellow');

 line(305, 120, 453, 127);
strokeWeight(4);
stroke('yellow');

  line(453, 127, 470, 122);
strokeWeight(4);
stroke('yellow');

line(470, 122, 550, 126);
strokeWeight(4);
stroke('yellow');

line(550, 126, 548, 154);
strokeWeight(4);
stroke('yellow');

line(548, 154, 610, 158);
strokeWeight(4);
stroke('yellow');

  line(610, 158, 675, 155);
strokeWeight(4);
stroke('yellow');

 line(670, 155, 670, 188 );
strokeWeight(4);
stroke('yellow');

 line(670, 188, 692, 188 );
strokeWeight(4);
stroke('yellow');

 line(692, 188, 692, 270);
strokeWeight(4);
stroke('yellow');

////posts

  line(220, 223, 220, 280);
strokeWeight(4);
stroke('yellow');

 line(315, 220, 315, 280);
strokeWeight(4);
stroke('yellow');

   line(334, 222, 334, 280);
strokeWeight(4);
stroke('yellow');

 line(408, 222, 408, 280);
strokeWeight(4);
stroke('yellow');

  line(424, 222, 424, 280);
strokeWeight(4);
stroke('yellow');

line(494, 222, 494, 275);
strokeWeight(4);
stroke('yellow');

 line(510, 222, 510, 275);
strokeWeight(4);
stroke('yellow');


 line(570, 222, 570, 273);
strokeWeight(4);
stroke('yellow');

 line(585, 222, 585, 273);
strokeWeight(4);
stroke('yellow');

  line(622, 222, 622, 270);
strokeWeight(4);
stroke('yellow');

 line(635, 222, 635, 270);
strokeWeight(4);
stroke('yellow');

line(680, 222, 680, 270);
strokeWeight(4);
stroke('yellow');

///post tops

line(220, 223, 313, 222);
strokeWeight(4);
stroke('yellow');

line(334, 222, 405, 222);
strokeWeight(4);
stroke('yellow');

 line(425, 222, 492, 222);
strokeWeight(4);
stroke('yellow');

  line(512, 222, 570, 222);
strokeWeight(4);
stroke('yellow');

  line(587, 222, 620, 222);
strokeWeight(4);
stroke('yellow');

 line(637, 222, 678, 222);
strokeWeight(4);
stroke('yellow');

///text

fill(0);
textSize(32);
textFont('bebas kai');
text('House Frame 1', 620, 430);

}