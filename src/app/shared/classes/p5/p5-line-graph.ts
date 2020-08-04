import {P5Sketch} from '../../interfaces'
import {createColor, P5ColorOption} from '../../interfaces/p5/p5-sketch'

export interface P5GraphBounds {
  x: number
  y: number
  width: number
  height: number
}

export interface P5GraphLabel {
  x: number
  y: number
  content: any
  length: number
}

interface P5GraphDimension {
  axis: {
    min?: any
    max?: any
    maxLength?: number
    division?: number
    labels: P5GraphLabel[]
  }
  start?: number
  end?: number
}

interface P5AxisOptions {
  line: {
    color?: P5ColorOption,
    borderWidth?: number
  },
  font: {
    color?: P5ColorOption,
    size?: number
  }
}

export interface P5GraphOptions {
  styles?: {
    yAxis?: P5AxisOptions
    xAxis?: P5AxisOptions
    data?: {
      point?: {
        style?: 'circle' | 'triangle'
        color?: P5ColorOption
        size?: number
      },
      line?: {
        color?: P5ColorOption
        thickness?: number
      }
    }
  }
}

export class P5LineGraph {
  x: P5GraphDimension = {
    axis: {
      min: null,
      max: null,
      maxLength: null,
      division: null,
      labels: []
    },
    start: null,
    end: null
  }

  y: P5GraphDimension = {
    axis: {
      min: null,
      max: null,
      maxLength: null,
      division: null,
      labels: []
    },
    start: null,
    end: null
  }

  constructor(public s: P5Sketch,
              public bounds: P5GraphBounds,
              public labels?: { x: any[], y: any[] },
              public data?: {x: any, y: any, xCoord?: number, yCoord?: number}[],
              public options?: P5GraphOptions) {

    this.y.start = bounds.y
    this.y.end = bounds.height + bounds.y
    this.x.start = bounds.x
    this.x.end = bounds.x + bounds.width
  }

  changeColorToAxisX() {
    const colorVal = this.options?.styles?.xAxis?.line?.color ??
      this.options?.styles?.yAxis?.line?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.stroke(color)
    this.s.fill(color)
  }

  createAxisX() {
    this.changeColorToAxisX()

    this.s.line(this.x.start, this.y.end, this.x.end, this.y.end)
  }

  /**
   *  Splits up the line by amount of labels -- need to catch too many (need a buffer)
   *
   *  For each label it adds the x/y coordinates calculated based on the bounds.
   */
  createLabelsForX() {
    let position = this.x.start

    const division = this.bounds.width / (this.labels.x.length - 1)

    this.x.axis.division = division

    this.labels.x.forEach(label => {
      this.x.axis.labels.push({x: position, y: this.y.end, content: label, length: this.s.textWidth(label)})
      position += division
    })

    this.x.axis.min = this.x.axis.labels[0].content
    this.x.axis.max = this.x.axis.labels[this.labels.x.length - 1].content

    this.x.axis.maxLength = Math.max(...this.x.axis.labels.map(label => label.length))
  }

  /**
   *  For each of the labels add a circle to where they exist on the x axis
   */
  displayPositionsOfLabelsForX() {
    this.changeColorToAxisX()

    this.x.axis.labels.forEach(label => {
      this.s.circle(label.x, label.y, 6)
    })
  }

  displayLabelsForX() {
    const colorVal = this.options?.styles?.xAxis?.font?.color ??
                     this.options?.styles?.yAxis?.font?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.fill(color)
    this.s.stroke(color)

    this.x.axis.labels.forEach(label => {
      this.s.text(label.content, label.x, label.y + 36)
    })
  }

  changeColorToAxisY() {
    const colorVal = this.options?.styles?.yAxis?.line?.color ??
      this.options?.styles?.xAxis?.line?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.stroke(color)
    this.s.fill(color)
  }

  createAxisY() {
    this.changeColorToAxisY()

    this.s.line(this.x.start, this.y.start, this.x.start, this.y.end)
  }

  /**
   *  Splits up the line by amount of labels -- need to catch too many (need a buffer)
   *
   *  For each label it adds the x/y coordinates calculated based on the bounds.
   */
  createLabelsForY() {
    let position = this.y.end

    const division = this.bounds.height / (this.labels.y.length - 1)

    this.y.axis.division = division

    this.labels.y.forEach(label => {
      this.y.axis.labels.push({x: this.x.start, y: position, content: label, length: this.s.textWidth(label)})
      position -= division
    })

    this.y.axis.min = this.y.axis.labels[0].content
    this.y.axis.max = this.y.axis.labels[this.labels.y.length - 1].content

    this.y.axis.maxLength = Math.max(...this.y.axis.labels.map(label => label.length))
  }

  /**
   *  For each of the labels add a circle to where they exist on the y axis
   */
  displayPositionOfLabelsForY() {
    this.changeColorToAxisY()

    this.y.axis.labels.forEach(label => {
      this.s.circle(label.x, label.y, 6)
    })
  }

  displayLabelsForY() {
    const color = createColor(this.s, this.options?.styles?.yAxis?.font?.color ?? '#000000')

    this.s.fill(color)
    this.s.stroke(color)

    this.y.axis.labels.forEach(label => {
      const buffer = this.y.axis.maxLength - label.length

      const padding = 36

      this.s.text(label.content, label.x - padding + buffer, label.y + 3)
    })
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

    this.s.fill(color)
    this.s.stroke(color)

    this.data.forEach(datum => this.s.ellipse(datum.xCoord, datum.yCoord, 6))
  }

  connectDataPoints() {
    const colorVal = this.options?.styles?.data?.line?.color ?? '#000000'

    const color = createColor(this.s, colorVal)

    this.s.stroke(color)

    const lineWidth = this.options?.styles?.data?.line?.thickness ?? 1

    this.s.strokeWeight(lineWidth)

    for (let i = 0; i  < this.data.length - 1; i++) {
      const first = this.data[i]
      const second = this.data[i + 1]

      this.s.line(first.xCoord, first.yCoord, second.xCoord, second.yCoord)
    }
  }

  displayGraphAndPositions() {
    this.createAxisX()
    this.createLabelsForX()
    // this.displayPositionsOfLabelsForX()
    this.displayLabelsForX()
    this.createAxisY()
    this.createLabelsForY()
    // this.displayPositionOfLabelsForY()
    this.displayLabelsForY()
  }
}

