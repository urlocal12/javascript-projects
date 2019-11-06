var slidersHidden = false;

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');
  frameRate(30);
  var sliderWidth = 80;
  r1 = createSlider(0, 255, 0);
  g1 = createSlider(0, 255, 0);
  b1 = createSlider(0, 255, 0);
  r2 = createSlider(0, 255, 0);
  g2 = createSlider(0, 255, 0);
  b2 = createSlider(0, 255, 0);
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
}

function draw() {
  for (i = 0; i <= width; i++) {
    var r = abs(r1.value() - r2.value()) / width * i + r1.value();
    var g = abs(g1.value() - g2.value()) / width * i + g1.value();
    var b = abs(b1.value() - b2.value()) / width * i + b1.value();
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
