import * as P5 from 'p5'
import {P5Sketch} from '../../interfaces'


export class P5Container {
  // static methods
  static color = P5.color

  static Vector = {
    div: P5.Vector.div,
    dist: P5.Vector.dist,
    sub: P5.Vector.sub
  }
  canvas: any

  constructor(private sketchFn: (sketch: P5Sketch) => void, divId?: string) {
    this.canvas = divId ? new P5(this.sketchFn, divId) : new P5(this.sketchFn)
  }

  static default() {
    return new P5Container(() => {
    })
  }

  tearDown() {
    this.canvas.remove()
  }


}
