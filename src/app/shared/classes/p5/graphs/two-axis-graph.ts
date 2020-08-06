import {P5Sketch} from '../../../interfaces'
import {P5GraphBounds, P5GraphDimension, P5GraphOptions} from './graph-interfaces'
import {createColor} from '../../../interfaces/p5/p5-sketch'

export class TwoAxisGraph {
  xLabelMap: {[label: string]: number} = {}
  yLabelMap: {[label: string]: number} = {}

  x: P5GraphDimension = {
    axis: {
      min: null,
      max: null,
      maxLength: null,
      division: null,
      labels: [],
      offset: null
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
      labels: [],
      offset: null
    },
    start: null,
    end: null
  }

  constructor(public s: P5Sketch,
              public bounds: P5GraphBounds,
              public labels?: { x: any[], y: any[] },
              public data?: { x: any, y: any, xCoord?: number, yCoord?: number }[],
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
    const offset = this.options?.styles?.xAxis?.offset ?? 0

    let position = this.x.start + offset

    const division = (this.bounds.width - offset * 2) / (this.labels.x.length - 1)

    this.x.axis.division = division

    this.labels.x.forEach(label => {
      this.xLabelMap[label] = position

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
      this.yLabelMap[label] = position

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

  displayGraphAndPositions() {
    this.s.push()
    this.createAxisX()
    this.createLabelsForX()
    // this.displayPositionsOfLabelsForX()
    this.displayLabelsForX()
    this.s.pop()

    this.s.push()
    this.createAxisY()
    this.createLabelsForY()
    // this.displayPositionOfLabelsForY()
    this.displayLabelsForY()
    this.s.pop()
  }
}
