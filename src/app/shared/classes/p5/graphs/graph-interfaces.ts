import {P5ColorOption} from '../../../interfaces/p5/p5-sketch'

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

export interface P5GraphDimension {
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

export interface P5AxisOptions {
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
