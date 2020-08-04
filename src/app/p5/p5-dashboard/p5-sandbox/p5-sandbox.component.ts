import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5BarGraph, P5Container, P5LineGraph} from '../../../shared/classes'
import {P5GraphBounds, P5GraphOptions} from '../../../shared/classes/p5/graphs/graph-interfaces'
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
    'a', 'b', 'c', 'd', 'e', 'f'
  ]

  yAxisLabels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  data = [
    {x: 'a', y: 3},
    {x: 'b', y: 2},
    {x: 'c', y: 9},
    {x: 'e', y: 8},
    {x: 'd', y: 1},
    {x: 'f', y: 5}
  ]

  graph: P5BarGraph

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
        xAxis: {
          offset: 50
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
    } as P5GraphOptions

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

        this.graph = new P5BarGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels}, this.data, graphOptions)

        this.graph.displayGraphAndPositions()

        if (runOnce) {
          console.log('------ graph', this.graph)
        }

        runOnce = false
      }
    }, 'graphs')
  }
}
