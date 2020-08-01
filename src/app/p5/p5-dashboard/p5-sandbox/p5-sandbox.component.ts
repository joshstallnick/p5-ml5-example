import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5Sketch} from '../../../shared/interfaces'
import {P5Grid, P5GridSection} from '../../../shared/classes/p5/p5-grid'

@Component({
  selector: 'app-p5-sandbox',
  templateUrl: './p5-sandbox.component.html',
  styleUrls: ['./p5-sandbox.component.sass']
})
export class P5SandboxComponent implements OnInit {

  // container = P5Container.default()
  grid: P5Grid

  constructor(private applicationService: ApplicationService) {
    applicationService.changeLocation('p5', 'sandbox')
  }

  ngOnInit(): void {
    this.grid = new P5Grid('vedic', 1000, 10, true)

    this.grid.container.canvas.remove()

    this.grid.add((s) => {
      const section: P5GridSection = this.grid.addSection(
        {startX: 10, startY: 10, rowsAmount: 8, columnAmount: 8})

      s.strokeWeight(3)
      s.rect(section.startX, section.startY, section.width, section.height)
    })

    // this.container = new P5Container((s) => {
    //   this.createGrid(s, 1000, 10, true)
    // }, 'vedic')
  }

  createGrid(s: P5Sketch, width: number, divisions: number = 10, byPercent: boolean = false) {
    if (byPercent) {
      divisions = s.floor(width / divisions)
    }

    const adjustDimension = (n: number) => {
      const additional = n % divisions
      return n + (divisions - additional)
    }

    width = adjustDimension(width)

    s.setup = () => {
      s.createCanvas(width, width)
    }

    s.draw = () => {
      s.fill(255)
      s.rect(0, 0, s.width, s.height)

      for (let i = 0; i < divisions; i++) {
        for (let j = 0; j < divisions; j++) {
          const wDivisions = s.width / divisions
          const hDivisions = s.height / divisions

          s.fill(255)
          s.rect(wDivisions * i, hDivisions * j, wDivisions, hDivisions)
        }
      }
    }
  }

  createGridWithBasic(s: P5Sketch, width: number, height?: number) {
    const adjustDimension = (n: number) => {
      const additional = n % 8
      return n + (8 - additional)
    }

    width = adjustDimension(width)

    height = height ? adjustDimension(height) : width

    console.log('wh', width, height)

    s.setup = () => {
      s.createCanvas(width, height)
    }

    s.draw = () => {
      s.fill(255)
      s.rect(0, 0, s.width, s.height)

      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
          const wDivisions = s.width / 8
          const hDivisions = s.height / 8

          s.fill(255)
          s.rect(wDivisions * i, hDivisions * j, wDivisions, hDivisions)
        }
      }
    }
  }

}
