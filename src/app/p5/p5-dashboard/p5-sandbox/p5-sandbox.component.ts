import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
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

    this.grid.subsectionColor = {v1: 255, v2: 204, v3: 0}

    const section1 = {
      section: {startX: 10, startY: 10, rowAmount: 8, columnAmount: 8},
      strokeWeight: 3
    }

    this.grid.addSection(section1)
    this.grid.addSection({section: {startX: 90, startY: 90, rowAmount: 8, columnAmount: 8}})

    // this.grid.divideGrid({section: {startX: 90, startY: 90, rowAmount: 8, columnAmount: 8}})

    // let i = 10
    // let j = 10
    //
    // for (let x = i; x < this.grid.width; x += i) {
    //   for (let y = j; y < this.grid.width; y += j) {
    //     const section: P5GridSection = this.grid.addSection({
    //       section: {startX: x, startY: y, rowAmount: 12, columnAmount: 12}
    //     })
    //
    //     console.log(i, j, section.endX, section.endY)
    //
    //     i = section.endX
    //     j = section.endY
    //     Object.keys(section).forEach(k => console.log('------fuck ' + k, section[k]))
    //     console.log('=======sect', i, j, x, y, section, this.grid.width)
    //   }
    // }
  }
}
