import {TwoAxisGraph} from './two-axis-graph'
import {P5Sketch} from '../../../interfaces'
import {P5GraphBounds, P5GraphOptions} from './graph-interfaces'

export class P5BarGraph extends TwoAxisGraph {
  band: {
    size: number
    padding: number
  } = {
    size: 10,
    padding: 5
  }

  constructor(s: P5Sketch,
              bounds: P5GraphBounds,
              labels?: { x: any[], y: any[] },
              data?: { x: any, y: any, xCoord?: number, yCoord?: number }[],
              options?: P5GraphOptions) {
    super(s, bounds, labels, data, options)
  }

  setupAxisXBands() {

  }

}
