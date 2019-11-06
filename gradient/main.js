var slidersHidden = false;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  frameRate(30);
  var sliderWidth = 200;
  r1 = createSlider(0, 255, 0);
  g1 = createSlider(0, 255, 0);
  b1 = createSlider(0, 255, 0);
  r2 = createSlider(0, 255, 255);
  g2 = createSlider(0, 255, 255);
  b2 = createSlider(0, 255, 255);
  r1.position(10, 10);
  g1.position(10, 40);
  b1.position(10, 70);
  r2.position(width - 10 - sliderWidth, 10);
  g2.position(width - 10 - sliderWidth, 40);
  b2.position(width - 10 - sliderWidth, 70);
  r1.style("width", sliderWidth + "px");
  g1.style("width", sliderWidth + "px");
  b1.style("width", sliderWidth + "px");
  r2.style("width", sliderWidth + "px");
  g2.style("width", sliderWidth + "px");
  b2.style("width", sliderWidth + "px");
  alert("Press SPACE to toggle slider visibility");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  r2.position(windowWidth - 10 - sliderWidth, 10);
  g2.position(windowWidth - 10 - sliderWidth, 40);
  b2.position(windowWidth - 10 - sliderWidth, 70);
}

function draw() {
  for (i = 0; i <= width; i++) {
    if (r1.value() < r2.value()) var r = abs(r1.value() - r2.value()) / width * i + r1.value();
    else var r = (r1.value() - r2.value()) / width * i * -1 + r1.value();
    if (g1.value() < g2.value()) var g = abs(g1.value() - g2.value()) / width * i + g1.value();
    else var g = (g1.value() - g2.value()) / width * i * -1 + g1.value();
    if (b1.value() < b2.value()) var b = abs(b1.value() - b2.value()) / width * i + b1.value();
    else var b = (b1.value() - b2.value()) / width * i * -1 + b1.value();
    stroke(r, g, b);
    line(i, 0, i, height);
  }
}

function keyPressed() {
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
