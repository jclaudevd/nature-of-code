let walker;

function setup() {
  createCanvas(400, 400);
  background(250);
  walker = new Walker();
}

function draw() {
  walker.display();
  walker.step();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }
  display() {
    stroke(0);
    point(this.x, this.y);
  }
  step() {
    // generate a float between 0.0 and 1.0
    const r = random(1);
    if (r < 0.4) {
      // chance of moving right: 40%
      this.x++;
    } else if (r < 0.6) {
      // chance of moving left: 20%
      this.x--;
    } else if (r < 0.8) {
      // chance of moving down: 20%
      this.y++;
    } else {
      // chance of moving up: 20%
      this.y--;
    }
  }
}
