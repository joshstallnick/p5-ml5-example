import {P5Sketch} from '../../interfaces'
import {TextStyle} from '../../interfaces/p5/p5-sketch'

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
    maxLength?: number
    division?: number
    labels: P5GraphLabel[]
  }
  start?: number
  end?: number
}

export class P5LineGraph {
  x: P5GraphDimension = {
    axis: {
      maxLength: null,
      division: null,
      labels: []
    },
    start: null,
    end: null
  }

  y: P5GraphDimension = {
    axis: {
      maxLength: null,
      division: null,
      labels: []
    },
    start: null,
    end: null
  }

  constructor(public s: P5Sketch,
              public bounds: P5GraphBounds,
              public labels?: {x: any[], y: any[]}) {

    this.y.start = bounds.y
    this.y.end = bounds.height + bounds.y
    this.x.start = bounds.x
    this.x.end = bounds.x + bounds.width
  }

  createAxisX() {
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

    this.x.axis.maxLength = Math.max(...this.x.axis.labels.map(label => label.length))
  }

  /**
   *  For each of the labels add a circle to where they exist on the x axis
   */
  displayPositionsOfLabelsForX() {
    this.x.axis.labels.forEach(label => {
      this.s.circle(label.x, label.y, 10)
    })
  }

  displayLabelsForX() {
    this.x.axis.labels.forEach(label => {
      this.s.text(label.content, label.x, label.y + 20)
    })
  }

  createAxisY() {
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

    this.y.axis.maxLength = Math.max(...this.y.axis.labels.map(label => label.length))
  }

  /**
   *  For each of the labels add a circle to where they exist on the y axis
   */
  displayPositionOfLabelsForY() {
    this.y.axis.labels.forEach(label => {
      this.s.circle(label.x, label.y, 10)
    })
  }

  displayLabelsForY() {
    this.s.fill(0)

    this.y.axis.labels.forEach(label => {
      const buffer = this.y.axis.maxLength - label.length

      const padding = 36

      console.log('---y', label.x, this.y.axis.maxLength, label.length)

      this.s.text(label.content, label.x - padding + buffer, label.y + 3)
    })
  }

  displayGraphAndPositions() {
    this.createAxisX()
    this.createLabelsForX()
    this.displayPositionsOfLabelsForX()
    this.createAxisY()
    this.createLabelsForY()
    this.displayPositionOfLabelsForY()
    this.displayLabelsForY()
  }
}

