import {Component, OnInit} from '@angular/core'
import {P5Container} from '../../classes'
import {CanvasService} from '../../../services/canvas-service/canvas.service'

@Component({
  selector: 'app-canvas',
  template: `
    <div [id]="'canvas-' + id">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CanvasComponent implements OnInit {

  id = Math.random()

  container: P5Container = P5Container.default()

  drawFns: ((P5Sketch) => void)[] = []

  constructor(private canvasService: CanvasService) {

  }

  ngOnInit(): void {
    this.canvasService.drawFns$.subscribe(fns => {
      this.drawFns = fns
    })

    this.container = new P5Container(s => {
      s.setup = () => {
        s.setAttributes('antialias', true)
        s.createCanvas(1000, 800)
      }

      s.draw = () => {
        s.background('#2c396f')
        s.fill(255)

        this.drawFns.forEach(fn => fn(s))
      }
    }, 'canvas-' + this.id)
  }
}
