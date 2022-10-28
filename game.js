class Balloon {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.r = 25;
        this.vx = 0;
        this.vy = 0;

        this.col = color(random(255), random(255), random(255));
        this.popped = false;
    }

    blowAway() {
        
        if (!this.popped) {
            //calculate the blow away force
            let d = dist(this.x, this.y, mouseX, mouseY);
            let force = -10 / (d * d);

            //apply the force to the existing velocity
            this.vx += force * (mouseX - this.x);
            this.vy += force * (mouseY - this.y);
        }
            //also add some friction to take energy out of the system
            this.vx *= 0.95;
            this.vy *= 0.95;

            //update the position
            this.x += this.vx;
            this.y += this.vy;
    }

    checkBounds() {
        //make balloon wrap to the other side of the canvas
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    checkToPop() {
        if (!this.popped && dist(this.x, this.y, mouseX, mouseY) < this.r) {
            this.popped = true;
            let currScore = Number(document.getElementById("score").innerHTML);
            currScore++;
            document.getElementById("score").innerHTML = currScore;
            this.col = color(156);
            document.getElementById('soundtrack').play();
        }
    }
}

let balloons = [];
const NUM_OF_BALLOONS = 21;

function setup() {
    let canvas = createCanvas(1024, 480);
    canvas.parent("gameContainer");

    for (let i = 0; i < NUM_OF_BALLOONS; i++){
        balloons[i] = new Balloon();
    }
}

function draw() {
    background(135, 206, 235);

    for (let i = 0; i < NUM_OF_BALLOONS; i++){
        fill(balloons[i].col);
        circle(balloons[i].x, balloons[i].y, balloons[i].r);

        balloons[i].blowAway();
        balloons[i].checkBounds();
        balloons[i].checkToPop();
    }
}

function resetBoard() {
    for (let i = 0; i < NUM_OF_BALLOONS; i++) {
        balloons[i].popped = false;
        balloons[i].col = color(random(255), random(255), random(255));
    }
    document.getElementById("score").innerHTML = 0;
}