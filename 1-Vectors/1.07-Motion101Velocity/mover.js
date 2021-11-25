class Mover {
  constructor() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(random(-2, 2), random(-2, 2));
  }
  display() {
    fill(100);
    ellipse(this.location.x, this.location.y, 16);
  }
  update() {
    this.location.add(this.velocity);
  }
  checkEdges() {
    if (this.location.x > width) {
      this.location.x = 0;
    } else if (this.location.x < 0) {
      this.location.x = width;
    }

    if (this.location.y > height) {
      this.location.y = 0;
    } else if (this.location.y < 0) {
      this.location.y = height;
    }
  }
}
