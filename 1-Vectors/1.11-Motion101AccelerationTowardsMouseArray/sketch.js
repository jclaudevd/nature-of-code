let movers = [];

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 20; i++) {
    movers[i] = new Mover();
  }
}

function draw() {
  background(240);

  for (let i = 0; i < movers.length; i++) {
    movers[i].display();
    movers[i].checkEdges();
    movers[i].update();
  }
}
