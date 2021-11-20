function setup() {
  createCanvas(400, 400);
  background(250);
  noStroke();
  fill(0, 25);
}

function draw() {
  const num = randomGaussian();

  const sd = 80;
  const mean = width / 2;
  const x = num * sd + mean;
  ellipse(x, height / 2, 25);
}
