var slidersHidden = false;
var textPlace = 100;

function load(r1, g1, b1, r2, g2, b2) {
  for (i = 0; i <= width; i++) {
    if (r1 < r2) var r = abs(r1 - r2) / width * i + r1;
    else var r = (r1 - r2) / width * i * -1 + r1;
    if (g1 < g2) var g = abs(g1 - g2) / width * i + g1;
    else var g = (g1 - g2) / width * i * -1 + g1;
    if (b1 < b2) var b = abs(b1 - b2) / width * i + b1;
    else var b = (b1 - b2) / width * i * -1 + b1;
    stroke(r, g, b);
    line(i, 0, i, height);
  }
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  frameRate(30);
  var sliderWidth = 200;
  r1 = createSlider(0, 255, random(255));
  g1 = createSlider(0, 255, random(255));
  b1 = createSlider(0, 255, random(255));
  r2 = createSlider(0, 255, random(255));
  g2 = createSlider(0, 255, random(255));
  b2 = createSlider(0, 255, random(255));
  r1.position(100, 50);
  g1.position(100, 80);
  b1.position(100, 110);
  r2.position(width - 100 - sliderWidth, 50);
  g2.position(width - 100 - sliderWidth, 80);
  b2.position(width - 100 - sliderWidth, 110);
  r1.style("width", sliderWidth + "px");
  g1.style("width", sliderWidth + "px");
  b1.style("width", sliderWidth + "px");
  r2.style("width", sliderWidth + "px");
  g2.style("width", sliderWidth + "px");
  b2.style("width", sliderWidth + "px");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  r2.position(windowWidth - 10 - sliderWidth, 10);
  g2.position(windowWidth - 10 - sliderWidth, 40);
  b2.position(windowWidth - 10 - sliderWidth, 70);
}

function draw() {
  load(r1.value(), g1.value(), b1.value(), r2.value(), g2.value(), b2.value());
  textSize(32);
  stroke("black");
  textAlign(CENTER, CENTER);
  var helpText = text("Press SPACE to toggle slider visibility", width / 2, textPlace);
}

function keyPressed() {
  textPlace = height * 10;
  if (keyCode === 32) {
    if (slidersHidden == true) {
      r1.show();
      g1.show();
      b1.show();
      r2.show();
      g2.show();
      b2.show();
      slidersHidden = false;
    } else {
      r1.hide();
      g1.hide();
      b1.hide();
      r2.hide();
      g2.hide();
      b2.hide();
      slidersHidden = true;
    }
  }
}
