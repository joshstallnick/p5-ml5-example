import {P5Sketch} from '../../../interfaces'
import {createColor} from '../../../interfaces/p5/p5-sketch'
import {P5GraphBounds, P5GraphOptions} from './graph-interfaces'
import {TwoAxisGraph} from './two-axis-graph'


export class P5LineGraph extends TwoAxisGraph {
  constructor(s: P5Sketch,
              bounds: P5GraphBounds,
              labels?: { x: any[], y: any[] },
              data?: { x: any, y: any, xCoord?: number, yCoord?: number }[],
              options?: P5GraphOptions) {
    super(s, bounds, labels, data, options)
  }

  addDataPoints() {
    // y data
    const yBound = this.y.axis.max - this.y.axis.min

    const bound = this.y.end - this.y.start

    const fullDiv = bound / yBound

    // x data
    const firstDate = new Date(this.x.axis.max)

    const secondDate = new Date(this.x.axis.min)

    const dateBound = (firstDate.getTime() - secondDate.getTime()) / (1000 * 3600 * 24)

    const rangeBound = this.x.end - this.x.start

    const fullRange = rangeBound / dateBound

    this.s.fill(255)

    this.data.forEach(datum => {
      // y
      const yDataMin = datum.y - this.y.axis.min

      const yProduct = yDataMin * fullDiv

      const xDate = new Date(datum.x)

      const xMinDate = new Date(this.x.axis.min)

      const dateMin = (xDate.getTime() - xMinDate.getTime()) / (1000 * 3600 * 24)

      const xProduct = dateMin * fullRange

      datum.xCoord = xProduct + this.x.start
      datum.yCoord = yProduct + this.y.start
    })
  }

  displayDataPoints() {
    const colorVal = this.options?.styles?.data?.point?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.push()

    this.s.fill(color)
    this.s.stroke(color)

    this.data.forEach(datum => this.s.ellipse(datum.xCoord, datum.yCoord, 6))

    this.s.pop()
  }

  fillDataFall() {
    this.fillData(this.y.end, '#6bcb99', -10)
  }

  fillDataRise() {
    this.fillData(this.y.start, '#eeaeee')
  }

  private fillData(baseline: number, color: string, padding: number = 0) {
    this.s.push()
    this.s.fill(color)
    this.s.stroke(color)

    for (let i = 0; i < this.data.length - 1; i++) {
      const pointA  = this.data[i]
      const pointB = this.data[i + 1]

      this.s.quad(
        pointA.xCoord, pointA.yCoord,
        pointB.xCoord, pointB.yCoord,
        pointB.xCoord, baseline + padding,
        pointA.xCoord, baseline + padding)
    }

    this.s.pop()
  }

  connectDataPoints() {
    const colorVal = this.options?.styles?.data?.line?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.push()

    this.s.stroke(color)

    const lineWidth = this.options?.styles?.data?.line?.thickness ?? 1

    this.s.strokeWeight(lineWidth)

    for (let i = 0; i < this.data.length - 1; i++) {
      const first = this.data[i]
      const second = this.data[i + 1]

      this.s.line(first.xCoord, first.yCoord, second.xCoord, second.yCoord)
    }

    this.s.pop()
  }
}

export enum LineGraphParams {
  LINES = 'lines', DOTS = 'dots', RISE = 'rise', FALL = 'fall'
}

export type LineGraphParamType = 'lines' | 'dots' | 'rise' | 'fall'
