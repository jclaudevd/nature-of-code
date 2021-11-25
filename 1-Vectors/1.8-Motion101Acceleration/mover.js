class Mover {
  constructor() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(-0.001, 0.01);
    this.velocity.limit(10);
  }
  display() {
    fill(100);
    ellipse(this.location.x, this.location.y, 32);
  }
  update() {
    this.velocity.add(this.acceleration);
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
