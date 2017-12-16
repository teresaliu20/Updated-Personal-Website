var snake;
var scl = 18;
var food;

function setup() {
	createCanvas($(window).width(),$(window).height());
	if ($(window).width() > 600) {
		snake = new Snake();
		frameRate(20);
		setFood();
	}
}

$(window).resize(function() {
	snake.stop();
	this.setup();
})

function mousePressed() {
	if (snake.isRunning()) {
		this.setup();
		snake.stop();
	}
	else {
		snake.start();
	}
}

function setFood(){
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw() {
	if ($(window).width() > 600) {
		background('#070018');
		snake.show();
		if (snake.isRunning()) {
			if (snake.eat(food)) {
				setFood();
			}
			snake.move();
			fill (255, 0 , 100);
			rect(food.x, food.y, scl, scl);
		}
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		snake.dir(-1, 0);
	}
}