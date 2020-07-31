import {P5Container} from './p5-container'
import * as P5 from 'p5'
import {P5Sketch, P5Vector} from '../interfaces'

export class P5Mover {
  mass: number
  position: P5Vector
  velocity: P5Vector
  acceleration: P5Vector

  constructor(public sketch: P5Sketch,
              public m: number,
              public x: number,
              public y: number) {
    this.mass = m
    this.position = sketch.createVector(x, y)
    this.velocity = sketch.createVector(0, 0)
    this.acceleration = sketch.createVector(0, 0)
  }

  applyForce(force: P5Vector) {
    const f = this.sketch.createVector().div(force, this.mass)
    this.acceleration.add(f)
  }

  update() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  display() {
    this.sketch.stroke(0)
    this.sketch.strokeWeight(2)
    this.sketch.fill(255, 127)
    this.sketch.ellipse(this.position.x, this.position.y, this.mass * 16, this.mass)
  }

  checkEdges() {
    if (this.position.y > (this.sketch.height - this.mass * 8)) {
      this.velocity.y *= -0.9
      this.position.y = (this.sketch.height - this.mass * 8)
    }
  }
}
