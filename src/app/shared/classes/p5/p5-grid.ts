import {P5Container} from './p5-container'
import {P5Sketch} from '../../interfaces'

export interface P5GridCell {
  width: number
  height: number
  x?: number
  y?: number
}

export interface P5GridSection {
  rowsAmount?: number
  columnAmount?: number
  startX: number
  startY: number
  endX?: number
  endY?: number
  width?: number
  height?: number
}

export class P5Grid {
  container: P5Container

  drawFns: ((s: P5Sketch, cell?: P5GridCell) => void)[] = []

  cell: P5GridCell = {
    width: 0,
    height: 0
  }

  sections: P5GridSection[] = []

  constructor(
    private divId: string,
    public width: number,
    public divisions: number = 10,
    public byPercent: boolean = false) {
    this.container = new P5Container(this.createGrid(), divId)
  }

  createGrid() {
    return (s: P5Sketch) => {
      if (this.byPercent) {
        this.divisions = s.floor(this.width / this.divisions)
      }

      this.width = this.adjustDimension(this.width, this.divisions)

      s.setup = () => {
        s.createCanvas(this.width, this.width)
        s.noLoop()
      }

      s.draw = () => {
        s.fill(255)
        s.rect(0, 0, s.width, s.height)

        for (let i = 0; i < this.divisions; i++) {
          for (let j = 0; j < this.divisions; j++) {
            this.cell.width = s.width / this.divisions
            this.cell.height = s.height / this.divisions

            s.fill(255)
            s.rect(this.cell.width * i, this.cell.height * j, this.cell.width, this.cell.height)
          }
        }

        this.drawFns.forEach(fn => fn(s, this.cell))
      }
    }
  }

  add(drawFn: (s: P5Sketch, cell?: P5GridCell) => void) {
    this.drawFns.push(drawFn)
  }

  addSection(section: P5GridSection): P5GridSection {
    section.startX = this.adjustDimension(section.startX, this.cell.width)
    section.startY = this.adjustDimension(section.startY, this.cell.height)

    if (section.rowsAmount && section.columnAmount) {
      section.endX = (this.cell.width * section.rowsAmount) + this.cell.width
      section.endY = (this.cell.height * section.columnAmount) + this.cell.height
    } else if (section.endX && section.endY) {
      section.rowsAmount = section.endX / this.cell.width
      section.columnAmount = section.endY / this.cell.height
    } else {
      return section
    }

    if (!section.width || !section.height) {
      section.width = section.endX - section.startX
      section.height = section.endY - section.startY
    }

    this.sections.push(section)
    return section
  }

  private static adjustDimension(n: number, adjuster: number): number {
    if (n === 0 || n % adjuster === 0) { return n }
    const additional = n % adjuster
    return n + (adjuster - additional)
  }
}
