function Snake() {
	this.x = scl * 2;
	this.y = scl * 2; 
	this.xspeed = 1;
	this.yspeed = 0;
	this.length = 0;
	this.body = [];
	this.go = false;

	this.start = function() {
		this.go = true;
	}

	this.stop = function() {
		this.go = false;
	}

	this.isRunning = function() {
		return this.go;
	}

	this.eat = function(position) {
		var distance = dist(this.x, this.y, position.x, position.y);
		if (distance < 1) {
			this.length++;
			return true;
		}
		else {
			return false;
		}
	}
	this.dir = function(x,y) {
		if (this.xspeed !== x * -1 || this.yspeed != y * -1) {
			this.xspeed = x;
			this.yspeed = y;
		}
	}
	this.death = function() {
		this.length = 0;
		this.body = [];
		this.x = scl * 2;
		this.y = scl * 2; 
		this.xspeed = 1;
		this.yspeed = 0;
		this.go = false;
	}
	this.move = function() {
		if (!this.go) {
			return;
		}
		if (this.x < 0) {
			this.x = 0;
			this.death();
		} 
		else if (this.y < 0) {
			this.y = 0;
			this.death();
		}
		else if (this.x > $(window).width()) {
			this.x = $(window).width() - $(window).width()%scl - scl;
			this.death();
		} 
		else if (this.y > $(window).height()) {
			this.y = $(window).height() - $(window).height()%scl - scl;
			this.death();
		}
		else {
			for (var i = 0; i < this.body.length - 1; i++) {
				this.body[i] = this.body[i+1];
			}
			if (this.length >= 1) {
				this.body[this.length - 1] = createVector(this.x, this.y);
			}
			this.x = this.x + this.xspeed * scl;
			this.y = this.y + this.yspeed * scl;
			for (var i = 0; i < this.body.length; i++) {
				var pos = this.body[i];
				var distance = dist(this.x, this.y, pos.x, pos.y);
				if (distance < 1) {
					this.death();
				}
			}
		}
	}
	this.show = function() {
		fill(255);
		for (var i = 0; i < this.body.length; i++) {
			rect(this.body[i].x, this.body[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}
}