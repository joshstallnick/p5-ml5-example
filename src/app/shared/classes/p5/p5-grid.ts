import {P5Container} from './p5-container'
import {P5Sketch} from '../../interfaces'
import {createColor, P5ColorOption} from '../../interfaces/p5/p5-sketch'
import {Runnable} from '../../types'

export interface P5GridCell {
  width: number
  height: number
  x?: number
  y?: number
}

export interface P5GridSection {
  rowAmount?: number
  columnAmount?: number
  startX: number
  startY: number
  endX?: number
  endY?: number
  width?: number
  height?: number
}

export interface P5GridSectionOptions {
  section: P5GridSection
  color?: P5ColorOption
  strokeWeight?: number
}

export class P5Grid {
  container: P5Container

  drawFns: ((s: P5Sketch, cell?: P5GridCell) => void)[] = []

  cell: P5GridCell = {
    width: 0,
    height: 0
  }

  sections: P5GridSection[] = []

  subsectionColor: P5ColorOption = {v1: 0, v2: 0, v3: 0}
  subsectionStrokeWeight = 1

  sketch: P5Sketch

  constructor(
    private divId: string,
    public width: number,
    public divisions: number = 10,
    public byPercent: boolean = false) {
    this.container = new P5Container(this.createGrid(), divId)
  }

  private static adjustDimension(n: number, adjuster: number): number {
    if (n === 0 || n % adjuster === 0 || adjuster === 0) {
      return n
    }
    const additional = n % adjuster
    return n + (adjuster - additional)
  }

  createGrid() {
    return (s: P5Sketch) => {
      this.sketch = s

      if (this.byPercent) {
        this.divisions = s.floor(this.width / this.divisions)
      }

      this.width = P5Grid.adjustDimension(this.width, this.divisions)

      s.setup = () => {
        s.createCanvas(this.width, this.width)
        s.noLoop()
      }

      s.draw = () => {
        s.fill(255)
        s.rect(0, 0, s.width, s.height)

        if (this.cell.width === 0 || this.cell.height === 0) {
          this.cell.width = s.width / this.divisions
          this.cell.height = s.height / this.divisions
        }

        this.createCells(s, this.divisions, this.divisions)

        this.drawFns.forEach(fn => fn(s, this.cell))
      }
    }
  }

  add(drawFn: (s: P5Sketch, cell?: P5GridCell) => void) {
    this.drawFns.push(drawFn)
  }

  addSection(options: P5GridSectionOptions): P5GridSection {
    return this.sharedSectionCreator(options, (s, section) => {
      section = this.sanitizeSection(section)

      this.sections.push(section)

      this.createCells(s, section.rowAmount, section.columnAmount, section.startX, section.startY)
    })
  }

  // divideGrid(options: P5GridSectionOptions) {
  //   return this.sharedSectionCreator(options, (s, section) => {
  //     let xEnd = 10
  //
  //     for (let x = 10; x < this.width;) {
  //       for (let y = 10; y < this.width;) {
  //         const sect = this.sanitizeSection(
  //           {startX: x, startY: y, columnAmount: section.columnAmount, rowAmount: section.rowAmount})
  //
  //         this.sections.push(sect)
  //
  //         this.createCells(s, sect.rowAmount, sect.columnAmount, sect.startX, sect.startY)
  //         xEnd = sect.endX
  //         y = sect.endY
  //       }
  //       x = xEnd
  //     }
  //   })
  // }

  private sharedSectionCreator(options: P5GridSectionOptions,
                               fn: (s: P5Sketch, section: P5GridSection) => void = () => {}): P5GridSection {
    let {section, color, strokeWeight} = options

    strokeWeight = strokeWeight ?? this.subsectionStrokeWeight

    strokeWeight = strokeWeight % 2 === 0 ? strokeWeight + 1 : strokeWeight

    strokeWeight = strokeWeight < 0 ? 1 : strokeWeight

    this.add(s => {
      section = this.sanitizeSection(section)

      this.sections.push(section)

      const pColor = createColor(s, color ?? this.subsectionColor)

      s.stroke(pColor)

      s.strokeWeight(1)
      fn(s, section)
      s.strokeWeight(strokeWeight)
      s.fill(1, 0)
      s.rect(section.startX, section.startY, section.width, section.height)

    })

    return section
  }

  createCells(s: P5Sketch,
              rowAmount: number, columnAmount: number,
              x: number = 0, y: number = 0, color: number = 255) {
    for (let i = 0; i < rowAmount; i++) {
      for (let j = 0; j < columnAmount; j++) {
        s.fill(color)
        s.rect((this.cell.width * i) + x, (this.cell.height * j) + y, this.cell.width, this.cell.height)
      }
    }
  }

  sanitizeSection(section: P5GridSection): P5GridSection {
    section.startX = P5Grid.adjustDimension(section.startX, this.cell.width)
    section.startY = P5Grid.adjustDimension(section.startY, this.cell.height)

    if (section.rowAmount && section.columnAmount) {
      section.endX = (this.cell.width * section.rowAmount) + section.startX
      section.endY = (this.cell.height * section.columnAmount) + section.startY
    } else if (section.endX && section.endY) {
      section.rowAmount = section.endX / this.cell.width
      section.columnAmount = section.endY / this.cell.height
    } else {
      return section
    }

    if (!section.width || !section.height) {
      section.width = section.endX - section.startX
      section.height = section.endY - section.startY
    }

    return section
  }
}
