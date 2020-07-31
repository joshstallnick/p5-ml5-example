import {P5Sketch, P5Vector} from '../../interfaces'

export class P5Particle {
  acceleration: P5Vector
  velocity: P5Vector
  position: P5Vector
  lifespan = 255

  constructor(protected sketch: P5Sketch, position: P5Vector) {
    this.acceleration = sketch.createVector(0, 0.05)
    this.velocity = sketch.createVector(sketch.random(-1, 1), sketch.random(-1, 0))
    this.position = position.copy()
  }

  run() {
    this.update()
    this.display()
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2
  }

  display() {
    this.sketch.stroke(200, this.lifespan)
    this.sketch.strokeWeight(2)
    this.sketch.fill(127, this.lifespan)
    this.sketch.ellipse(this.position.x, this.position.y, 12, 12)
  }

  isDead(): boolean {
    return this.lifespan < 0
  }
}

export class P5CrazyParticle extends P5Particle {

  theta = 0.0

  constructor(sketch: P5Sketch, origin: P5Vector) {
    super(sketch, origin)
  }

  update() {
    super.update()

    // increment rotation based on horizontal velocity
    this.theta += (this.velocity.x * this.velocity.mag()) / 10.0
  }

  display() {
    super.display()

    this.sketch.push()
    this.sketch.translate(this.position.x, this.position.y)
    this.sketch.rotate(this.theta)
    this.sketch.stroke(255, this.lifespan)
    this.sketch.line(0, 0, 25, 0)
    this.sketch.pop()
  }
}
