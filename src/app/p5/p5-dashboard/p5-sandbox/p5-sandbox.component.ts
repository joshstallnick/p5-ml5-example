import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5Container} from '../../../shared/classes'
import {P5GraphBounds, P5LineGraph} from '../../../shared/classes/p5/graphs/p5-line-graph'
import {FilterType} from '../../../shared/interfaces'

@Component({
  selector: 'app-p5-sandbox',
  templateUrl: './p5-sandbox.component.html',
  styleUrls: ['./p5-sandbox.component.sass']
})
export class P5SandboxComponent implements OnInit {

  container = P5Container.default()
  bounds: P5GraphBounds = {
    x: 100,
    y: 100,
    width: 800,
    height: 400
  }
  xAxisLabels = [
    '6/2/2019', '6/16/2019', '6/30/2019', '7/14/2019', '7/28/2019', '8/11/2019',
    '8/25/2019', '9/8/2019', '9/22/2019', '10/6/2019', '10/20/2019'
  ]
  yAxisLabels = [
    70, 75, 80, 85, 90, 95, 100, 105
  ]
  graph: P5LineGraph

  data = [
    {y: 88, x: '06/03/2019'},
    {y: 89, x: '06/09/2019'},
    {y: 88, x: '06/15/2019'},
    {y: 88, x: '06/21/2019'},
    {y: 75, x: '06/27/2019'},
    {y: 92, x: '07/03/2019'},
    {y: 95, x: '07/09/2019'},
    {y: 94, x: '07/15/2019'},
    {y: 94, x: '07/21/2019'},
    {y: 95, x: '07/27/2019'},
    {y: 98, x: '08/02/2019'},
    {y: 99, x: '08/08/2019'},
    {y: 95, x: '08/14/2019'},
    {y: 94, x: '08/20/2019'},
    {y: 96, x: '08/26/2019'},
    {y: 100, x: '09/02/2019'},
    {y: 92, x: '09/08/2019'},
    {y: 100, x: '09/14/2019'},
    {y: 94, x: '09/20/2019'},
    {y: 98, x: '09/26/2019'}
  ]

  constructor(private applicationService: ApplicationService) {
    applicationService.changeLocation('p5', 'sandbox')
  }

  ngOnInit(): void {
    let runOnce = true

    const line = '#b77bce'

    const graphOptions = {
      styles: {
        yAxis: {
          line: {
            color: '#908780'
          },
          font: {
            color: 255
          }
        },
        data: {
          point: {
            color: line
          },
          line: {
            color: line,
            thickness: 2
          }
        }
      }
    }

    this.container = new P5Container(s => {
      s.setup = () => {
        s.setAttributes('antialias', true)
        s.createCanvas(1000, 800)
        s.noLoop()
      }

      s.draw = () => {
        s.filter(FilterType.BLUR, 4)
        s.background('#2c396f')
        s.fill(255)

        s.stroke(0)

        this.graph = new P5LineGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels}, this.data, graphOptions)
        this.graph.displayGraphAndPositions()
        this.graph.addDataPoints()
        this.graph.connectDataPoints()
        this.graph.displayDataPoints()

        if (runOnce) {
          console.log('------ graph', this.graph)
        }

        runOnce = false
      }
    }, 'graphs')
  }
}
