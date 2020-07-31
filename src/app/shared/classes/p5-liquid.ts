import {P5Mover} from './p5-mover'
import {P5Sketch, P5Vector} from '../interfaces'

export class P5Liquid {
  constructor(public sketch: P5Sketch,
              public x: number,
              public y: number,
              public w: number,
              public h: number,
              public c: number) {
  }

  contains(m: P5Mover): boolean {
    const l = m.position

    const {x, y} = m.position

    return x > this.x && x < this.x + this.w &&
           y > this.y && y < this.y + this.h
  }

  calculateDrag(m: P5Mover): P5Vector {
    const speed = m.velocity.mag()
    const dragMagnitude = this.c * speed * speed

    const dragForce: P5Vector = m.velocity.copy()
    dragForce.mult(-1)

    dragForce.normalize()
    dragForce.mult(dragMagnitude)

    return dragForce
  }

  display() {
    this.sketch.noStroke()
    this.sketch.fill(50)
    this.sketch.rect(this.x, this.y, this.w, this.h)
  }
}
