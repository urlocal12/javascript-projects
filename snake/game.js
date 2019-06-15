var snake_history = [[640, 360], [620, 360], [600, 360]];
var direction = [20, 0];
var foodX = 20;
var foodY = 20;
var snake_length = 3;
var score = 0;

function setup() {
  createCanvas(1280, 720);
  frameRate(10);
  stroke(255, 255, 255);
  textSize(16);
  textStyle(BOLD);
}

function draw() {
  if (keyIsDown(87) && direction[0] != 0 && direction[1] != 20) {
    direction = [0, -20];
  }
  if (keyIsDown(65) && direction[0] != 20 && direction[1] != 0) {
    direction = [-20, 0];
  }
  if (keyIsDown(83) && direction[0] != 0 && direction[1] != -20) {
    direction = [0, 20];
  }
  if (keyIsDown(68) && direction[0] != -20 && direction[1] != 0) {
    direction = [20, 0];
  }

  snake_history.unshift([snake_history[0][0] + direction[0], snake_history[0][1] + direction[1]]);
  while (snake_history.length > snake_length) {
    snake_history.splice(snake_history.length - 1, 1);
  }

  background(220, 220, 220);
  fill("black");
  text("Score: " + score, 5, 20);
  for (i = 0; i < snake_history.length; i++) {
    for (j = 0; j < snake_history.length; j++) {
      if ((snake_history[i][0] == snake_history[j][0] && snake_history[i][1] == snake_history[j][1] && i != j) || snake_history[0][0] < 0 || snake_history[0][0] >= 1280 || snake_history[0][1] < 0 || snake_history[0][1] >= 720) {
        snake_history = [[640, 360], [620, 360], [600, 360]];
        snake_length = 3;
        direction = [20, 0];
        alert("You lose!");
      }
    }
    if (snake_history[i][0] == foodX && snake_history[i][1] == foodY) {
      snake_length += 3;
      score += 1;
      foodX = round(random(63)) * 20;
      foodY = round(random(31)) * 20;
    }
    rect(snake_history[i][0], snake_history[i][1], 20, 20);
  }
  fill("red");
  rect(foodX, foodY, 20, 20);
}
