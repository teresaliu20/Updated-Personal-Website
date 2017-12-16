var snake;
var scl = 18;
var food;
var highScore;
var score;

function setup() {
	createCanvas($(window).width(),$(window).height());
	if ($(window).width() > 600) {
		snake = new Snake();
		frameRate(20);
		setFood();
	}
	score = 0;
	highScore = 0;
}

$(window).resize(function() {
	snake.stop();
	this.setup();
	$("#score").text("CLICK ANYWHERE");
})

function mousePressed() {
	if (!snake) {
		return;
	}
	if (snake.isRunning()) {
		this.setup();
		snake.stop();
	}
	else {
		console.log(mouseX)
		const btn = $("#buttons");
		if (!(btn.position().left < mouseX && btn.position().left + btn.width() > mouseX
			&& btn.position().top < mouseY && btn.position().top + btn.height() > mouseY)) {
			snake.start();
		}
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
			if (score === 0) {
				$("#score").text(score);
			}
			if (snake.eat(food)) {
				setFood();
				score++;
				$("#score").text(score);
				if (score > highScore) {
					$("#high-score").text("H: " + score);
				}
			}
			if (snake.death()) {
				score = 0;
				$("#score").text(score);
			}
			snake.move();
			fill (255, 0 , 100);
			rect(food.x, food.y, scl, scl);
		}
		else {
			$("#score").text("CLICK ANYWHERE");
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