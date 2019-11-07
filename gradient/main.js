var sliders = [];
var c = [];
var slidersHidden = false;
var hintY;
var sliderWidth = 255;
var textY = 160;

function load(r1, g1, b1, r2, g2, b2, startX, endX) {
  for (i = 0; i <= endX - startX; i++) {
    if (r1 < r2) var r = (r2 - r1) / (endX - startX) * i + r1;
    else var r = r1 - ((r1 - r2) / (endX - startX) * i);
    if (g1 < g2) var g = (g2 - g1) / (endX - startX) * i + g1;
    else var g = g1 - ((g1 - g2) / (endX - startX) * i);
    if (b1 < b2) var b = (b2 - b1) / (endX - startX) * i + b1;
    else var b = b1 - ((b1 - b2) / (endX - startX) * i);
    stroke(r, g, b);
    line(i + startX, 0, i + startX, height);
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  frameRate(30);
  hintY = height / 2;
  for (i = 0; i < 9; i++) sliders.push(createSlider(0, 255, random(0, 255)));
  sliders[0].position(100, 50);
  sliders[1].position(100, 80);
  sliders[2].position(100, 110);
  sliders[3].position(width / 2 - sliderWidth / 2, 50);
  sliders[4].position(width / 2 - sliderWidth / 2, 80);
  sliders[5].position(width / 2 - sliderWidth / 2, 110);
  sliders[6].position(width - 100 - sliderWidth, 50);
  sliders[7].position(width - 100 - sliderWidth, 80);
  sliders[8].position(width - 100 - sliderWidth, 110);
  for (i = 0; i < 9; i++) sliders[i].style("width", sliderWidth + "px");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sliders[3].position(width / 2 - sliderWidth / 2, 50);
  sliders[4].position(width / 2 - sliderWidth / 2, 80);
  sliders[5].position(width / 2 - sliderWidth / 2, 110);
  sliders[6].position(width - 100 - sliderWidth, 50);
  sliders[7].position(width - 100 - sliderWidth, 80);
  sliders[8].position(width - 100 - sliderWidth, 110);
}

function draw() {
  for (i = 0; i < 9; i++) c[i] = sliders[i].value();
  load(c[0], c[1], c[2], c[3], c[4], c[5], 0, width / 2);
  load(c[3], c[4], c[5], c[6], c[7], c[8], width / 2 + 1, width);
  textSize(32);
  stroke("black");
  textAlign(CENTER, CENTER);
  text("Press SPACE to toggle settings visibility", width / 2, hintY);
  textSize(24);
  text("R: " + c[0] + " G: " + c[1] + " B: " + c[2], 100 + sliderWidth / 2, textY);
  text("R: " + c[3] + " G: " + c[4] + " B: " + c[5], width / 2, textY);
  text("R: " + c[6] + " G: " + c[7] + " B: " + c[8], width - 100 - sliderWidth / 2, textY);
}

function keyPressed() {
  if (keyCode === 32) {
    hintY -= height;
    if (slidersHidden == true) {
      for (i = 0; i < 9; i++) sliders[i].show();
      slidersHidden = false;
      textY = 160;
    } else {
      for (i = 0; i < 9; i++) sliders[i].hide();
      slidersHidden = true;
      textY = -100;
    }
  }
}
