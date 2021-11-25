let w;

function setup() {
  createCanvas(400, 400);
  w = new Walker();
}

function draw() {
  background(0);
  w.display();
  w.step();
}

class Walker {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.timeX = 0;
    this.timeY = 10000;
  }
  display() {
    ellipse(this.x, this.y, 75);
  }
  step() {
    this.x = map(noise(this.timeX), 0, 1, 0, width);
    this.y = map(noise(this.timeY), 0, 1, 0, height);

    this.timeX += 0.01;
    this.timeY += 0.01;
  }
}
