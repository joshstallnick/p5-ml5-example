import {P5Boid} from './p5-boid'

export class P5Flock {
  boids: P5Boid[] = []

  constructor() {}

  run() {
    this.boids.forEach(boid => boid.run(this.boids))
  }

  addBoid(boid: P5Boid) {
    this.boids.push(boid)
  }
}
