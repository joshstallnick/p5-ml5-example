import * as P5 from 'p5'
import {P5Sketch} from '../interfaces'

export class P5Container {

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
