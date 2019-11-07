var sliders = [];
var colors = [];
var slidersHidden = false;
var textPlace;
var sliderWidth = 200;

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
  textPlace = height / 2;
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
  sliders[6].position(windowWidth - 100 - sliderWidth, 50);
  sliders[7].position(windowWidth - 100 - sliderWidth, 80);
  sliders[8].position(windowWidth - 100 - sliderWidth, 110);
}

function draw() {
  for (i = 0; i < 9; i++) colors[i] = sliders[i].value();
  load(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], 0, width / 2);
  load(colors[3], colors[4], colors[5], colors[6], colors[7], colors[8], width / 2 + 1, width);
  textSize(32);
  stroke("black");
  textAlign(CENTER, CENTER);
  text("Press SPACE to toggle slider visibility", width / 2, textPlace);
}

function keyPressed() {
  if (keyCode === 32) {
    textPlace -= height;
    if (slidersHidden == true) {
      for (i = 0; i < 9; i++) sliders[i].show();
      slidersHidden = false;
    } else {
      for (i = 0; i < 9; i++) sliders[i].hide();
      slidersHidden = true;
    }
  }
}
