import {P5GraphBounds} from './graph-interfaces'
import {P5Sketch} from '../../../interfaces'

export class P5PieGraph {

  divisions: number
  pieces: number
  angleAspects: number
  angles: number[]

  constructor(private s: P5Sketch, public bounds: P5GraphBounds, data: {x: any, y: any}[]) {
    this.divisions = data.length
    this.pieces = data.map(datum => datum.y).reduce((a, b) => a + b)
    this.angleAspects = 360 / this.pieces
    this.angles = data.map(datum => datum.y * this.angleAspects)
  }

  displayGraph(percent: number = 1) {
    const first = this.s.color('rgba(199,44,255,0.73)')
    const second = this.s.color('rgba(93,51,122,0.76)')

    let lastAngle = 0

    this.angles.forEach((angle, i) => {
      const gray = this.s.lerpColor(first, second, i / this.divisions)
      this.s.fill(gray)
      this.s.arc(
        this.bounds.x,
        this.bounds.y,
        this.bounds.width, this.bounds.height,
        lastAngle, lastAngle + (this.s.radians(angle) * percent)
      )

      lastAngle += (this.s.radians(angle) * percent)
    })
  }
}
