function Food() {
    this.x = floor(random(width / gridSize)) * gridSize;
    this.y = floor(random(height / gridSize)) * gridSize;

    this.show = function() {
        fill(0, 220, 220);
        rect(this.x, this.y, gridSize, gridSize);
    }
}
