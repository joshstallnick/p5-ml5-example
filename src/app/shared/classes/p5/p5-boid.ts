import {P5Sketch, P5Vector} from '../../interfaces'
import {P5Container} from './p5-container'

export class P5Boid {

  acceleration: P5Vector
  velocity: P5Vector
  position: P5Vector
  r = 3.0
  maxSpeed = 3
  maxForce = 0.05

  constructor(private sketch: P5Sketch, public x: number, public y: number) {
    this.acceleration = sketch.createVector(0, 0)
    this.velocity = sketch.createVector(sketch.random(-1, 1), sketch.random(-1, 1))
    this.position = sketch.createVector(x, y)
  }

  /**
   *  Runs the boids
   *
   * @param boids - to add to the flock
   */
  run(boids: P5Boid[]) {
    this.flock(boids)
    this.update()
    this.borders()
    this.render()
  }

  /**
   *  A = F / M
   *
   * @param force   the force to calculate the acceleration
   */
  applyForce(force: P5Vector) {
    this.acceleration.add(force)
  }

  /**
   *  The boids accumulate a new acceleration each time based on three rules
   *
   * @param boids = items to act on
   */
  flock(boids: P5Boid[]) {
    const sep = this.separate(boids)
    const ali = this.align(boids)
    const coh = this.cohesion(boids)

    // arbitrarily weight these forces
    sep.mult(1.5)
    sep.mult(1.0)
    sep.mult(1.0)

    // add the force vectors to acceleration
    this.applyForce(sep)
    this.applyForce(ali)
    this.applyForce(coh)
  }

  /**
   *  Updates the location
   */
  update() {
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.position.add(this.velocity)
    this.acceleration.mult(0)
  }

  /**
   *  Draw a triangle rotated in the direction of velocity
   */
  render() {
    const theta = this.velocity.heading() + this.sketch.radians(90)
    this.sketch.fill(127)
    this.sketch.stroke(200)
    this.sketch.push()

    this.sketch.translate(this.position.x, this.position.y)
    this.sketch.rotate(theta)
    this.sketch.beginShape()

    this.sketch.vertex(0, -this.r * 2)
    this.sketch.vertex(-this.r, this.r * 2)
    this.sketch.vertex(this.r, this.r * 2)

    this.sketch.endShape('CLOSE')
    this.sketch.pop()
  }

  /**
   *  Adds the calculation of the border to the flock
   */
  borders() {
    const {width, height} = this.sketch
    const {r} = this
    const newX = width + r
    const newY = height + r

    if (this.position.x < -r)   { this.position.x = newX }
    if (this.position.y < -r)   { this.position.y = newY }
    if (this.position.x > newX) { this.position.x = -r   }
    if (this.position.y > newY) { this.position.y = -r   }
  }

  /**
   *  Keeps the boids separated - if they are too close it moves it away
   *
   * @param boids   the items to separate
   */
  separate(boids: P5Boid[]): P5Vector {
    const desiredSeparation = 25.0
    const steer: P5Vector = this.sketch.createVector(0, 0)
    let count = 0

    // for every boid in the system, check if it's too close
    boids.forEach(boid => {
      const d = P5Container.Vector.dist(this.position, boid.position)

      // if the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
      if (d > 0 && d < desiredSeparation) {
        // calculate vector pointing away from neighbor
        const diff: P5Vector = P5Container.Vector.sub(this.position, boid.position)

        diff.normalize()
        diff.div(d)             // weight by distance
        steer.add(diff)
        count++                 // keep track of how many
      }
    })

    if (count > 0) {
      steer.div(count)
    }

    if (steer.mag() > 0) {
      steer.normalize()
      steer.mult(this.maxSpeed)
      steer.sub(this.velocity)
      steer.limit(this.maxForce)
    }

    return steer
  }

  /**
   *  For every nearby boid in the system, calculate the average velocity
   *
   * @param boids   items to act upon
   */
  align(boids: P5Boid[]): P5Vector {
    const neighborDist = 50
    const sum = this.sketch.createVector(0, 0)
    let count = 0

    boids.forEach(boid => {
      const d = P5Container.Vector.dist(this.position, boid.position)

      if (d > 0 && d < neighborDist) {
        sum.add(boid.velocity)
        count++
      }
    })

    if (count > 0) {
      sum.div(count)
      sum.normalize()
      sum.mult(this.maxSpeed)
      const steer = P5Container.Vector.sub(sum, this.velocity)
      steer.limit(this.maxForce)
      return steer
    } else {
      return this.sketch.createVector(0, 0)
    }
  }

  /**
   *  For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
   *
   * @param boids   items to steer
   */
  cohesion(boids: P5Boid[]): P5Vector {
    const neighborDist = 50
    const sum = this.sketch.createVector(0, 0)
    let count = 0

    boids.forEach(boid => {
      const d = P5Container.Vector.dist(this.position, boid.position)

      if (d > 0 && d < neighborDist) {
        sum.add(boid.position)
        count++
      }
    })

    if (count > 0) {
      sum.div(count)
      return this.seek(sum)
    } else {
      return this.sketch.createVector(0, 0)
    }
  }

  /**
   *  A method that calculates and applies a steering force towards a target
   *
   * @param target  vector to steer
   */
  seek(target: P5Vector): P5Vector {
    // a vector pointing from the location to the target
    const desired: P5Vector = P5Container.Vector.sub(target, this.position)

    // normalize desired and scale to maximum speed
    desired.normalize()
    desired.mult(this.maxSpeed)

    // steering = desired minus velocity
    const steer: P5Vector = P5Container.Vector.sub(desired, this.velocity)
    steer.limit(this.maxForce)

    return steer
  }
}
