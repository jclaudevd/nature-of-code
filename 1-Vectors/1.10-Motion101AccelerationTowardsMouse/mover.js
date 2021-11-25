class Mover {
  constructor() {
    this.location = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.topSpeed = 5;
  }
  display() {
    fill(100);
    ellipse(this.location.x, this.location.y, 32);
  }
  update() {
    const mouse = new p5.Vector(mouseX, mouseY);
    const direction = p5.Vector.sub(mouse, this.location);
    direction.normalize();
    direction.mult(0.3);
    console.log(mouse, direction);

    this.acceleration = direction;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topSpeed);
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
