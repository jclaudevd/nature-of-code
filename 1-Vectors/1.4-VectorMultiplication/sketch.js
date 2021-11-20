let center;

function setup() {
  createCanvas(640, 360);
  center = createVector(width / 2, height / 2);
}

function draw() {
  background(255);
  const mouse = createVector(mouseX, mouseY);
  mouse.sub(center);

  const m = mouse.mag();
  fill(0);
  rect(0, 0, m, 15);

  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
