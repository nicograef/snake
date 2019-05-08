var snake;
var food;
var gridSize = 20;
var fRate_start = 5;
var fRate = fRate_start;
var bg_start = 150;
var bg = bg_start;

function setup() {
    createCanvas(800, 600).parent('sketch-holder');
    background(bg);
    frameRate(fRate);
    snake = new Snake();
    food = new Food();
}

function draw() {
    background(bg);
    if (snake.checkBite()) {
        snake = new Snake();
        fRate = fRate_start;
        frameRate(fRate);
        bg = bg_start;
    }
    snake.update();
    snake.show();
    food.show();
    if (dist(snake.x, snake.y, food.x, food.y) < gridSize) {
        food = new Food();
        snake.length++;
        fRate++;
        bg -= 3;
        frameRate(fRate);
    }
}

// change direction of snake when arrow keys are pressed.
// but not in the (to the current direction) opposite direction
function keyPressed() {
    if (keyCode === UP_ARROW) {
        if (snake.ySpeed != 1) { snake.setSpeed(0, -1); }
    } else if (keyCode === DOWN_ARROW) {
        if (snake.ySpeed != -1) { snake.setSpeed(0, 1); }
    } else if (keyCode === RIGHT_ARROW) {
        if (snake.xSpeed != -1) { snake.setSpeed(1, 0); }
    } else if (keyCode === LEFT_ARROW) {
        if (snake.xSpeed != 1) { snake.setSpeed(-1, 0); }
    }
}
