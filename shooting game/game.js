function player(x, y, move, turnL, turnR, shoot) {
	this.x = x;
	this.y = y;
	this.controls = [move, shoot, turnL, turnR];
	this.direction = 0;
	this.checkControls = function() {
		if (keyIsDown(controls[0])) {
			this.x += cos(direction);
			this.y += sin(direction);
		}
		if (keyIsDown(controls[1])) {
			direction -= 1;
		}
	}
	this.display = function() {
		circle(this.x, this.y, 20);
	}
}

function bullet(x, y, xDirection, yDirection) {
	this.x = x;
	this.y = y;
	this.direction = [xDirection, yDirection];
	this.move() = function() {
		this.x += this.direction[0];
		this.y += this.direction[1];
	}
	this.display = function() {
		circle(this.x, this.y, 5);
	}
}

function setup() {

}
function draw() {

}
