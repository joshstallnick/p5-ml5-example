import {Component, Input, OnInit} from '@angular/core'
import {P5BarGraph, P5Container} from '../../classes'
import {P5GraphBounds, P5GraphOptions} from '../../classes/p5/graphs/graph-interfaces'
import {FilterType} from '../../interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'

@Component({
  selector: 'app-bar-graph',
  template: `
    <div style="border: 1px solid gainsboro; display: flex; justify-content: center" id="bar-graph"></div>
  `,
  styles: []
})
export class BarGraphComponent implements OnInit {
  @Input() useStandAlone = false

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
    {x: 'f', y: 5}
  ]

  graph: P5BarGraph

  line = '#b77bce'

  graphOptions = {
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
          color: this.line
        },
        line: {
          color: this.line,
          thickness: 2
        }
      }
    }
  } as P5GraphOptions

  constructor(private canvasService: CanvasService) {
    if (!this.useStandAlone) {
      this.canvasService.addOneDrawFn(s => {
        s.stroke(0)

        this.graph = new P5BarGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels}, this.data, this.graphOptions)

        this.graph.displayGraphAndPositions()
        this.graph.addDataPoints()
        this.graph.addBars()
      })
    } else {
      this.standAlone()
    }
  }

  ngOnInit(): void {

  }

  standAlone() {
    let runOnce = true

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

        this.graph = new P5BarGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels}, this.data, this.graphOptions)

        this.graph.displayGraphAndPositions()
        this.graph.addDataPoints()
        this.graph.addBars()

        if (runOnce) {
          console.log('------ graph', this.graph)
        }

        runOnce = false
      }
    }, 'bar-graph')
  }
}
