import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5Container} from '../../../shared/classes'
import {P5GraphBounds} from '../../../shared/classes/p5/graphs/graph-interfaces'
import {P5PieGraph} from '../../../shared/classes/p5/graphs/p5-pie-graph'
import {LineGraphParams} from '../../../shared/classes/p5/graphs/p5-line-graph'

@Component({
  selector: 'app-p5-sandbox',
  templateUrl: './p5-sandbox.component.html',
  styleUrls: ['./p5-sandbox.component.sass']
})
export class P5SandboxComponent implements OnInit {

  LineGraphParams = LineGraphParams

  container = P5Container.default()

  bounds: P5GraphBounds = {
    x: 100,
    y: 100,
    width: 800,
    height: 400
  }

  xAxisLabels = [
    'a', 'b', 'c', 'd', 'e', 'f'
  ]

  yAxisLabels = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  data = [
    {x: 'a', y: 3},
    {x: 'b', y: 2},
    {x: 'c', y: 9},
    {x: 'e', y: 8},
    {x: 'd', y: 1},
    {x: 'f', y: 5},
    {x: 'g', y: 12},
    {x: 'h', y: 10},
    {x: 'i', y: 5}
  ]

  graph: P5PieGraph

  constructor(private applicationService: ApplicationService) {
    applicationService.changeLocation('p5', 'sandbox')
  }

  ngOnInit(): void {

  }
}
