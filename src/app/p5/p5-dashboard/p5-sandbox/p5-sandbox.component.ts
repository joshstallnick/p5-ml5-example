import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5Grid} from '../../../shared/classes/p5/p5-grid'

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
    this.grid.addSection({section: {startX: 90, startY: 90, rowAmount: 8, columnAmount: 8}, strokeWeight: 1})
  }
}
