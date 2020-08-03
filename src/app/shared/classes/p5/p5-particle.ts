import {P5Sketch, P5Vector} from '../../interfaces'
import {NumberOrString} from '../../types'

export interface P5ParticleOptions {
  acceleration?: P5Vector
  velocity?: P5Vector
  speed?: P5Vector
  position?: P5Vector
  radii?: P5Vector | number
  lifespan?: number
  stroke?: { color: number, weight: number }
  fill?: NumberOrString
}

export class P5Particle {
  acceleration?: P5Vector
  velocity?: P5Vector
  speed?: P5Vector
  position: P5Vector
  lifespan?: number
  radii: P5Vector | number
  stroke?: { color: number, weight: number }
  fill: NumberOrString

  constructor(protected sketch: P5Sketch, options?: P5ParticleOptions) {
    if (options) {
      this.acceleration = options.acceleration
      this.velocity = options.velocity
      this.speed = options.speed
      this.position = options.position ?? sketch.createVector(0, 0)
      this.radii = options.radii ?? 10
      this.lifespan = options.lifespan ?? 255
      this.stroke = options.stroke
      this.fill = options.fill ?? 127
    }
  }

  setupForces(position: P5Vector, stroke?: { color: number, weight: number }): P5Particle {
    this.acceleration = this.sketch.createVector(0, 0.05)
    this.velocity = this.sketch.createVector(this.sketch.random(-1, 1), this.sketch.random(-1, 0))
    this.position = position.copy()

    this.stroke = stroke

    return this
  }

  run() {
    this.updateDisappear()
    this.display()
  }

  updateDisappear() {
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
    this.lifespan -= 2
  }

  display() {
    if (this.stroke) {
      this.sketch.stroke(this.stroke.color, this.lifespan)
      this.sketch.strokeWeight(this.stroke.weight)
    } else {
      this.sketch.noStroke()
    }

    const fillAsNumber = this.fill as number + 0

    if (((this.fill as number) as unknown as string).length === (fillAsNumber as unknown as string).length) {
      this.sketch.fill(this.fill as number, this.lifespan)
    } else {
      this.sketch.fill(this.fill as string)
    }

    const radiusVector = this.radii as P5Vector

    if (radiusVector.y) {
      this.sketch.ellipse(this.position.x, this.position.y, radiusVector.x, radiusVector.y)
    } else {
      const radius = this.radii as number

      this.sketch.ellipse(this.position.x, this.position.y, radius, radius)
    }
  }

  isDead(): boolean {
    return this.lifespan < 0
  }

  move() {
    if (this.position.x < 0 || this.position.x > this.sketch.width) {
      this.speed.x *= -1
    }

    if (this.position.y < 0 || this.position.y > this.sketch.height) {
      this.speed.y *= -1
    }

    this.position.x += this.speed.x
    this.position.y += this.speed.y
  }

  joinParticles(particles: P5Particle[], disAmount: number = 85) {
    particles.forEach(particle => {
      const distributed = this.sketch.dist(this.position.x, this.position.y, particle.position.x, particle.position.y)

      if (distributed < disAmount) {
        this.sketch.stroke('rgba(255,255,255,0.04)')
        this.sketch.line(this.position.x, this.position.y, particle.position.x, particle.position.y)
      }
    })
  }
}

export class P5CrazyParticle extends P5Particle {

  theta = 0.0

  constructor(sketch: P5Sketch, options?: P5ParticleOptions) {
    super(sketch, options)
  }

  updateDisappear() {
    super.updateDisappear()

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
