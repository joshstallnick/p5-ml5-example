import {P5Sketch, P5Vector} from '../interfaces'
import {P5Particle} from './p5-particle'

export class P5ParticleSystem {

  origin: P5Vector
  particles: P5Particle[] = []

  constructor(private sketch: P5Sketch, public position: P5Vector) {
    this.origin = position.copy()
  }

  addParticle() {
    this.particles.push(new P5Particle(this.sketch, this.origin))
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
