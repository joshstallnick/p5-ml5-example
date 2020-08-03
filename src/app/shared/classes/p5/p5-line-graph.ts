import {P5Sketch} from '../../interfaces'

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
}

interface P5GraphDimension {
  legend: {
    division?: number
    labels: P5GraphLabel[]
  }

  actual?: number
}

export class P5LineGraph {
  x = {
    legend: {
      division: null,
      labels: []
    },
    actual: null
  }

  y = {
    legend: {
      division: null,
      labels: []
    },
    actual: null
  }

  constructor(public s: P5Sketch,
              public bounds: P5GraphBounds,
              public labels?: {x: any[], y: any[]}) {
    console.log('------', bounds)
    this.y.actual = bounds.height + bounds.y
  }

  createAxisX() {
    this.s.line(this.bounds.x, this.y.actual, this.bounds.x + this.bounds.width, this.y.actual)
  }

  createLabelsForX() {
    let position = this.bounds.x

    const division = this.bounds.width / (this.labels.x.length - 1)

    this.x.legend.division = division

    this.labels.x.forEach(label => {
      this.x.legend.labels.push({x: position, y: this.y.actual, content: label})
      position += division
    })
  }

  displayPositionsOfLabelsForX() {
    this.x.legend.labels.forEach(label => {
      this.s.circle(label.x, label.y, 10)
    })
  }

  createAxisY() {
    this.s.line(this.bounds.x, this.bounds.y, this.bounds.x, this.y.actual)
  }

  createLabelsForY() {
    let position = this.y.actual

    const division = this.bounds.height / (this.labels.y.length - 1)

    this.y.legend.division = division

    this.labels.y.forEach(label => {
      this.y.legend.labels.push({x: this.bounds.x, y: position, content: label})
      position -= division
    })
  }

  displayPositionOfLabelsForY() {
    this.y.legend.labels.forEach(label => {
      this.s.circle(label.x, label.y, 10)
    })
  }

  displayGraphAndPositions() {
    this.createAxisX()
    this.createLabelsForX()
    this.displayPositionsOfLabelsForX()
    this.createAxisY()
    this.createLabelsForY()
    this.displayPositionOfLabelsForY()
  }
}

