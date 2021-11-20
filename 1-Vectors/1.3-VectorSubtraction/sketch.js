let center;

function setup() {
  createCanvas(640, 360);
  center = createVector(width / 2, height / 2);
}

function draw() {
  background(255);
  const mouse = createVector(mouseX, mouseY);
  mouse.sub(center);

  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
