let mover;

function setup() {
  createCanvas(640, 360);
  mover = new Mover();
}

function draw() {
  background(240);

  mover.display();
  mover.checkEdges();
  mover.update();
}
