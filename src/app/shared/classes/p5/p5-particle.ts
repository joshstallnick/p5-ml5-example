import {P5Sketch, P5Vector} from '../../interfaces'

export class P5Particle {
  acceleration: P5Vector
  velocity: P5Vector
  position: P5Vector
  lifespan = 255

  constructor(private sketch: P5Sketch, position: P5Vector) {
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
