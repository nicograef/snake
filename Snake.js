function Snake() {
    this.x = floor(random(width / gridSize)) * gridSize;
    this.y = floor(random(height / gridSize)) * gridSize;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.length = 0;
    this.tail = [];

    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; ++i) {
            rect(this.tail[i].x, this.tail[i].y, gridSize, gridSize);
        }
        rect(this.x, this.y, gridSize, gridSize);
    }

    this.update = function() {
        if (this.length === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; ++i) {
                this.tail[i] = this.tail[i + 1];
            }
        }

        this.tail[this.length - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * gridSize;
        this.y = this.y + this.ySpeed * gridSize;
        if (this.x > (width - gridSize)) { this.x = 0; }
        if (this.y > (height - gridSize)) { this.y = 0; }
        if (this.x < 0) { this.x = (width - gridSize); }
        if (this.y < 0) { this.y = (height - gridSize); }
    }

    this.setSpeed = function(xSpeed, ySpeed) {
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
    }

    this.checkBite = function() {
        for (var i = 0; i < this.tail.length; ++i) {
            if (dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < gridSize) { return true; }
        }
        return false;
    }
}
