
function Bird() {

    this.y = height / 2;
    this.x = 40;
    this.v = 0;
    this.size = 25;
    this.max = 12;

    this.g = 0.4;

    this.up = function() {
        this.v -= this.g * 28;
        // max up speed
        if (this.v < -this.max) {
            this.v = -this.max;
        }
    }

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, this.size, this.size);
    }

    this.update = function() {
        this.v += this.g;
        this.y += this.v;
        // max fall speed
        if (this.v > this.max) {
            this.v = this.max;
        }
        // set floor height
        if (this.y > height - this.size / 2) {
            this.y = height - this.size / 2;
            this.v = 0;
        }
        // set ceiling height
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.v = 0;
        }
        //console.log(this.v);
    }
}