var bubbles = [];
function bubble(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.size = speed * 5;
  this.move = function() {
    this.y += this.speed;
  }
  this.display = function() {
    fill(0, 60, 255);
    circle(this.x, windowHeight - this.y, this.size);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
  noStroke();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  for (i = 0; i < 4; i++) {
    bubbles.push(new bubble(random(0, windowWidth), -100, random(2, 8)));
  }

  background(200, 200, 200);
  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y + bubbles[i].size > windowHeight + 100) {
      bubbles.splice(i, 1);
    }
    bubbles[i].move();
    bubbles[i].display();
  }
}
