import {Component, Input, OnInit} from '@angular/core'
import {P5Container} from '../../classes'
import {P5GraphBounds} from '../../classes/p5/graphs/graph-interfaces'
import {P5PieGraph} from '../../classes/p5/graphs/p5-pie-graph'
import {FilterType} from '../../interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'

@Component({
  selector: 'app-pie-graph',
  template: `
    <div style="border: 1px solid gainsboro; display: flex; justify-content: center" id="pie-graph"></div>
  `,
  styles: []
})
export class PieGraphComponent implements OnInit {

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
    {x: 'f', y: 5},
    {x: 'g', y: 12},
    {x: 'h', y: 10},
    {x: 'i', y: 5}
  ]

  graph: P5PieGraph

  constructor(private canvasService: CanvasService) {
  }

  ngOnInit(): void {
    if (!this.useStandAlone) {
      this.canvasService.addOneDrawFn(s => {
        this.graph = new P5PieGraph(s, {x: s.width / 2, y: s.height / 2, width: 300, height: 300}, this.data)

        s.noStroke()

        this.graph.displayGraph()
      })
    } else {
      this.standAlone()
    }
  }

  standAlone() {
    let runOnce = true

    this.container = new P5Container(s => {
      s.setup = () => {
        s.setAttributes('antialias', true)
        s.createCanvas(1000, 800)
        // s.noLoop()
        this.graph = new P5PieGraph(s, {x: s.width / 2, y: s.height / 2, width: 300, height: 300}, this.data)
        s.noLoop()
      }

      s.draw = () => {
        s.filter(FilterType.BLUR, 4)
        s.background('#2c396f')
        s.fill(255)

        s.noStroke()

        this.graph.displayGraph()

        if (runOnce) {
          console.log('------ graph', this.graph)
        }

        runOnce = false
      }
    }, 'pie-graph')
  }
}
