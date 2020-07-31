import * as P5 from 'p5'
import {P5Sketch} from '../interfaces'
import {MutliDivFn} from '../interfaces/p5/p5-vector'



export class P5Container {
  // static methods
  static Vector = {
    div: P5.Vector.div
  }

  constructor(private sketchFn: (sketch: P5Sketch) => void, divId?: string) {
    this.canvas = divId ? new P5(this.sketchFn, divId) : new P5(this.sketchFn)
  }

  canvas: any

  static default() {
    return new P5Container(() => {})
  }

  tearDown() {
    this.canvas.remove()
  }


}
