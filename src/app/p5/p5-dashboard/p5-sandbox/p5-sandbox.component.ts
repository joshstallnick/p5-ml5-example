import {Component, OnInit} from '@angular/core'
import {ApplicationService} from '../../../services/application-service/application.service'
import {P5Container} from '../../../shared/classes'
import {P5Sketch} from '../../../shared/interfaces'
import {P5GraphBounds, P5LineGraph} from '../../../shared/classes/p5/p5-line-graph'

@Component({
  selector: 'app-p5-sandbox',
  templateUrl: './p5-sandbox.component.html',
  styleUrls: ['./p5-sandbox.component.sass']
})
export class P5SandboxComponent implements OnInit {

  container = P5Container.default()

  constructor(private applicationService: ApplicationService) {
    applicationService.changeLocation('p5', 'sandbox')
  }

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

  ngOnInit(): void {
    this.container = new P5Container(s => {
      s.setup = () => {
        s.createCanvas(1000, 800)
        // this.graph = new P5LineGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels})
      }

      s.draw = () => {
        // this.createExample(s)
        s.background(255)
        s.fill(255)

        s.stroke(0)

        this.graph = new P5LineGraph(s, this.bounds, {x: this.xAxisLabels, y: this.yAxisLabels})
        this.graph.displayGraphAndPositions()
      }
    }, 'graphs')
  }

  createExample(s: P5Sketch) {
    s.background(255)
    s.fill(255)

    s.stroke(0)
    this.createAxisX(s, this.bounds, this.xAxisLabels)
    this.createAxisY(s, this.bounds, this.yAxisLabels)
  }

  createAxisX(s: P5Sketch, bounds: {x: number, y: number, width: number, height: number}, labels: any[]) {
    const line = {start: bounds.x, end: bounds.x + bounds.width}
    const labelInfo = {
      position: line.start
    }

    s.line(bounds.x, bounds.height + bounds.y, bounds.x + bounds.width, bounds.height + bounds.y)

    const division = bounds.width / (labels.length - 1)

    labels.forEach(label => {
      s.circle(labelInfo.position, bounds.height + bounds.y, 10)
      labelInfo.position += division
    })
  }

  createAxisY(s: P5Sketch, bounds: {x: number, y: number, width: number, height: number}, labels: any[]) {
    const line = {start: bounds.y, end: bounds.height + bounds.y}
    const labelInfo = {
      position: line.end
    }

    s.line(bounds.x, line.start, bounds.x, line.end)

    const divisions = bounds.height / (labels.length - 1)

    labels.forEach(label => {
      s.circle(bounds.x, labelInfo.position, 10)
      labelInfo.position -= divisions
    })
  }
}
