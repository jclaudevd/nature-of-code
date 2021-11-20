let walker;

function setup() {
  createCanvas(400, 400);
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
    point(this.x, this.y);
  }
  step() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
