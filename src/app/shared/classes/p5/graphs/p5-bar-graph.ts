import {TwoAxisGraph} from './two-axis-graph'
import {P5Sketch} from '../../../interfaces'
import {P5GraphBounds, P5GraphOptions} from './graph-interfaces'
import {LocationMode} from '../../../interfaces/p5/p5-sketch'

export class P5BarGraph extends TwoAxisGraph {
  band: {
    size: number
    padding: number
  } = {
    size: 10,
    padding: 5
  }

  xMap: {[k: string]: number}

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

    const yRange = this.y.end - this.y.start

    const yDiff = yRange / yBound

    this.s.fill(255)

    this.data.forEach(datum => {
      // y
      const yDataMin = datum.y - this.y.axis.min

      const yProduct = yDataMin * yDiff

      // x
      datum.xCoord = this.xLabelMap[datum.x]
      datum.yCoord = this.yLabelMap[datum.y]
    })
  }

  addBars() {
    console.log(this.yLabelMap)

    this.s.strokeWeight(1)
    this.s.rectMode(LocationMode.CORNER)

    const barWidth = 50

    this.data.forEach(datum => {
      const barHeight = datum.y * this.y.axis.division

      console.log(datum.y, this.y.axis.division)
      this.s.rect(datum.xCoord - 20, datum.yCoord, barWidth, barHeight)
    })
  }

}
