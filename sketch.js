
var bird;
var pipes;
var score;
var max_score;

function setup() {
	createCanvas(window.innerWidth,window.innerHeight);
	bird = new Bird();
	pipes = [];
	pipes.push(new Pipe());
	score = 0;
	max_score = score;
}

function draw() {
	background(0);
	if (frameCount % 60 == 0) {
		pipes.push(new Pipe());
	}
	for (var i = pipes.length - 1; i > 0; i--) {
		pipes[i].show();
		pipes[i].update();
		if (pipes[i].hits(bird)) {
			console.log("HIT");
			background(60, 0, 0);
			score = 0;
		}
		if (pipes[i].offscreen()) {
			pipes.splice(i,1);
		}
	}
	bird.update();
	bird.show();
	score += 1;
	if (score > max_score) {
		max_score = score;
	}
	text("Score: " + score, width/10, height/10);
	text("Max: " + max_score, width/10, height/8);

}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}
}