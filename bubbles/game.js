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
    fill("cyan");
    circle(this.x, 720 - this.y, this.size);
  }
}

function setup() {
  createCanvas(1280, 720);
  frameRate(30);
  noStroke();
}
function draw() {
  for (i = 0; i < 4; i++) {
    bubbles.push(new bubble(random(0, 1820), -100, random(2, 8)));
  }

  background(220, 220, 220);
  for (i = 0; i < bubbles.length; i++) {
    if (bubbles[i].y + bubbles[i].size > 800) {
      bubbles.splice(i, 1);
    }
    bubbles[i].move();
    bubbles[i].display();
  }
}
