import {Component, Input, OnInit} from '@angular/core'
import {P5Container, P5LineGraph} from '../../classes'
import {FilterType} from '../../interfaces'
import {P5GraphBounds} from '../../classes/p5/graphs/graph-interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'
import {LineGraphParams, LineGraphParamType} from '../../classes/p5/graphs/p5-line-graph'

@Component({
  selector: 'app-line-graph',
  template: `
    <div style="border: 1px solid gainsboro; display: flex; justify-content: center" id="line-graph"></div>
  `
})
export class LineGraphComponent implements OnInit {

  @Input() useStandAlone = false
  @Input() lines = false
  @Input() dots = true
  @Input() rise = false
  @Input() fall = false
  @Input() params: LineGraphParams[] | LineGraphParamType[] = []

  @Input() bounds: P5GraphBounds = {
    x: 100,
    y: 100,
    width: 800,
    height: 400
  }

  container = P5Container.default()
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
      data: {
        point: {
          color: this.line
        },
        line: {
          color: this.line,
          thickness: 1.86
        }
      }
    }
  }

  constructor(private canvasService: CanvasService) {}

  ngOnInit(): void {
    this.params.forEach(param => {this[param] = true})

    if (!this.useStandAlone) {
      this.canvasService.addOneDrawFn(this.addDrawFn)
    } else {
      this.standAlone()
    }
  }

  addDrawFn = s => {
    s.stroke(0)

    this.graph = new P5LineGraph(s,
      this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels},
      this.data, this.graphOptions,
      // {
      //   fallGradient: [
      //     {offset: 0, color: '#d9e9df'},
      //     {offset: 0.7, color: '#6bcb99'},
      //     {offset: 1, color: '#0d532f'}
      //   ],
      //   riseGradient: [
      //     {offset: 0, color: '#f3e7f3'},
      //     {offset: 0.7, color: '#eeaeee'},
      //     {offset: 1, color: '#d770d7'}
      //   ]
      // }
      )
    this.graph.displayGraphAndPositions()
    this.graph.addDataPoints()

    if (this.rise)  { this.graph.fillDataRise()      }
    if (this.fall)  { this.graph.fillDataFall()      }
    if (this.lines) { this.graph.connectDataPoints() }
    if (this.dots)  { this.graph.displayDataPoints() }
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

        this.addDrawFn(s)

        if (runOnce) {
          console.log('------ graph', this.graph)
        }

        runOnce = false
      }
    }, 'line-graph')
  }
}
