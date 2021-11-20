let x = 100;
let y = 100;
let xSpeed = 1;
let ySpeed = 2.4;

function setup() {
  createCanvas(640, 360);
  strokeWeight(2);
  fill(255);
}

function draw() {
  background(51);

  x += xSpeed;
  y += ySpeed;

  if (x > width || x < 0) {
    xSpeed *= -1;
  }
  if (y > height || y < 0) {
    ySpeed *= -1;
  }

  ellipse(x, y, 48);
}
