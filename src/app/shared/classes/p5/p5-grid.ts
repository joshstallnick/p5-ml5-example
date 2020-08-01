import {P5Container} from './p5-container'
import {P5Sketch} from '../../interfaces'

export class P5Grid {
  container: P5Container

  drawFns: ((s: P5Sketch) => void)[] = []

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

      const adjustDimension = (n: number) => {
        const additional = n % this.divisions
        return n + (this.divisions - additional)
      }

      this.width = adjustDimension(this.width)

      s.setup = () => {
        s.createCanvas(this.width, this.width)
      }

      s.draw = () => {
        s.fill(255)
        s.rect(0, 0, s.width, s.height)

        for (let i = 0; i < this.divisions; i++) {
          for (let j = 0; j < this.divisions; j++) {
            const wDivisions = s.width / this.divisions
            const hDivisions = s.height / this.divisions

            s.fill(255)
            s.rect(wDivisions * i, hDivisions * j, wDivisions, hDivisions)
          }
        }

        this.drawFns.forEach(fn => fn(s))
      }
    }
  }

  add(drawFn: (s: P5Sketch) => void) {
    this.drawFns.push(drawFn)
  }
}
