function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  const mouse = createVector(mouseX, mouseY);
  const center = createVector(width / 2, height / 2);
  mouse.sub(center);

  mouse.normalize();
  mouse.mult(75);

  translate(width / 2, height / 2);
  line(0, 0, mouse.x, mouse.y);
}
