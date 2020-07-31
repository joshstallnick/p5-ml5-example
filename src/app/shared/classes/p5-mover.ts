import {P5Container} from './p5-container'
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

  /**
   *  Newton's 2nd law: F = M * A or A = F / M
   *
   * @param force - vector to calculate the force with the mass
   */
  applyForce(force: P5Vector) {
    const f = P5Container.Vector.div(force, this.mass)
    this.acceleration.add(f)
  }

  /**
   *  Update the velocity and subsequently the position based on the acceleration
   */
  update() {
    // velocity changes according to the acceleration
    this.velocity.add(this.acceleration)
    // position changes by velocity
    this.position.add(this.velocity)
    // clear acceleration each frame
    this.acceleration.mult(0)
  }

  /**
   *  Displays the moves as a circle based on it's mass
   */
  display(multiplier: number = 16) {
    // width or height (circle)
    const wh = this.mass * multiplier

    this.sketch.stroke(0)
    this.sketch.strokeWeight(2)
    this.sketch.fill(255, 127)
    this.sketch.ellipse(this.position.x, this.position.y, wh, wh)
  }

  /**
   *  Checks the edges to bounce off the bottom - needs modification for not just bottom
   */
  checkEdges() {
    if (this.position.y > (this.sketch.height - this.mass * 8)) {
      this.velocity.y *= -0.9
      this.position.y = (this.sketch.height - this.mass * 8)
    }
  }
}
