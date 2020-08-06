import {P5Sketch} from '../../interfaces'

export class CanvasHelper {

  static createRoundedRectangle(s: P5Sketch) {

  }
}

export interface P5Gradient {
  offset: number,
  color: string
}

export interface BoxCorners {
  left?: number,
  top?: number,
  right?: number,
  bottom?: number,
  topLeft?: number,
  topRight?: number,
  bottomRight?: number,
  bottomLeft?: number,
  all?: number
}

export interface P5RectangleOption {
  x?: number
  y?: number
  width: number
  height?: number
  radius?: BoxCorners
  backgroundGradient?: P5Gradient[]
  hoverGradient?: P5Gradient[]
  activeGradient?: P5Gradient[]
  color?: string,
  hover?: boolean
}

export class P5Rectangle {
  x: number
  y: number
  width: number
  height: number
  corners: {
    tr: number
    br: number
    bl: number
    tl: number
  }
  background: any

  constructor(public s: P5Sketch, public options: P5RectangleOption) {
    this.x = options.x ?? 0
    this.y = options.y ?? 0
    this.width = options.width
    this.height = options.height ?? options.width

    this.corners = {
      tr: options.radius?.topRight ?? options.radius?.right ?? options.radius?.top ?? options.radius?.all ?? 0,
      br: options.radius?.bottomRight ?? options.radius?.right ?? options.radius?.bottom ?? options.radius?.all ?? 0,
      bl: options.radius?.bottomLeft ?? options.radius?.left ?? options.radius?.bottom ?? options.radius?.all ?? 0,
      tl: options.radius?.topLeft ?? options.radius?.left ?? options.radius?.top ?? options.radius?.all ?? 0
    }

    if (options.radius) {
      this.generateRoundedRectangle()
    } else {
      this.generateStandardRectangle()
    }
  }

  private generateRoundedRectangle() {
    const {s, x, y, width, height} = this

    if (this.options.backgroundGradient && this.options.backgroundGradient.length > 0) {
      this.background = this.options.backgroundGradient

      if ((s.mouseX > x && s.mouseX < width + x) && (s.mouseY > y && s.mouseY < height + y)) {
        this.background = [
          {offset: 0, color: '#d0d0d0'},
          {offset: 0.3, color: '#e9e9e9'},
          {offset: 1, color: '#f6f6f6'}
        ]
      }

      this.s.drawingContext.fillStyle = this.createGradient(this.background)
    }

    const {tr, br, bl, tl} = this.corners

    s.drawingContext.beginPath()
    s.drawingContext.moveTo(x + tl, y)
    s.drawingContext.lineTo(x + width - tr, y)
    s.drawingContext.quadraticCurveTo(x + width, y, x + width, y + tr)
    s.drawingContext.lineTo(x + width, y + height - br)
    s.drawingContext.quadraticCurveTo(x + width, y + height, x + width - br, y + height)
    s.drawingContext.lineTo(x + bl, y + height)
    s.drawingContext.quadraticCurveTo(x, y + height, x, y + height - bl)
    s.drawingContext.lineTo(x, y + tl)
    s.drawingContext.quadraticCurveTo(x, y, x + tl, y)
    s.drawingContext.closePath()

    s.drawingContext.fill()
  }

  private generateStandardRectangle() {

  }

  private createGradient(gradientStops: P5Gradient[]): any {
    const gradient = this.s.drawingContext.createLinearGradient(
      this.x + (this.width / 2), this.y,
      this.x + (this.width / 2), this.y + this.height)

    gradientStops.forEach(part => gradient.addColorStop(part.offset, part.color))

    return gradient
  }
}
