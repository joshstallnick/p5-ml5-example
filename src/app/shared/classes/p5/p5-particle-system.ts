import {P5Sketch, P5Vector} from '../../interfaces'
import {P5CrazyParticle, P5Particle} from './p5-particle'

export class P5ParticleSystem {

  origin: P5Vector
  particles: P5Particle[] = []

  constructor(private sketch: P5Sketch, public position: P5Vector) {
    this.origin = position.copy()
  }

  addParticle(normal: boolean = true) {
    const stroke = {color: 200, weight: 2}

    const p = (normal || this.sketch.int(this.sketch.random(0, 2) === 0)) ?
      new P5Particle(this.sketch, {radii: 12}).setupForces(this.origin, stroke) :
      new P5CrazyParticle(this.sketch, {radii: 12}).setupForces(this.origin, stroke)

    this.particles.push(p)
  }

  run() {
    this.particles.forEach((particle, i) => {
      particle.run()
      if (particle.isDead()) {
        this.particles.splice(i, 1)
      }
    })
  }
}
