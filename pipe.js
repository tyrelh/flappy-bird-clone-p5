
function Pipe() {

    this.space = random(height / 5, height / 2);
    this.top = random(height / 20, height - this.space);
    this.x = width;
    this.w = 35;
    this.v = 4;
    //console.log(this.space);

    this.hits = function(bird) {
        if (bird.x >= this.x && bird.x <= this.x + this.w) {
            if (bird.y < this.top || bird.y > this.top + this.space) {
                return true;
            }
        }
        return false;
    }

    this.offscreen = function() {
        return (this.x + 30 <= 0);
    }

    this.show = function() {
        fill(255);
        rect(this.x, 0, this.w, this.top);
        rect(this.x, this.top + this.space, this.w, height);
    }

    this.update = function() {
        this.x -= this.v;
    }

}