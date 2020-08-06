import {Component, OnInit} from '@angular/core'
import {P5Container} from '../../classes'
import {CanvasService} from '../../../services/canvas-service/canvas.service'
import {P5Sketch} from '../../interfaces'
import {P5Rectangle} from '../../classes/canvas/canvas-helper'

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

  loadComplete = false

  constructor(private canvasService: CanvasService) {

  }

  ngOnInit(): void {
    this.canvasService.drawFns$.subscribe(fns => {
      this.drawFns = fns
      this.loadComplete = true
    })

    this.container = new P5Container(s => {
      s.setup = () => {
        s.setAttributes('antialias', true)
        s.createCanvas(1000, 800)
      }

      s.draw = () => {
        s.background('#2c396f')
        s.fill(255)


        if (this.loadComplete) {
          s.noLoop()
        }

        s.push()

        s.pop()

        this.drawFns.forEach(fn => fn(s))

        this.loadComplete = false
      }
    }, 'canvas-' + this.id)
  }

  setGradient(s: P5Sketch) {
    s.noFill()


  }

  drawRadialGradient(s: P5Sketch, wh: number, x: number, y: number) {
    s.push()
    for (let w = wh; w > 0; --w) {
      s.fill(w, 255, 255)
      s.square(x, y, w, 5)
    }
    s.pop()
  }

  createRoundRectangle(
    s: P5Sketch,
    x: number, y: number,
    width: number, height: number,
    radius: { ul: number, ur: number, bl: number, br: number }, fill: any) {

    console.log(fill)

    const gradient = s.drawingContext.createLinearGradient(
      x + (width / 2), y,
      x + (width / 2), y + height)

    gradient.addColorStop(0, '#d0d0d0')
    gradient.addColorStop(0.3, '#f3f3f3')
    gradient.addColorStop(1, '#ffffff')

    s.drawingContext.fillStyle = gradient

    s.drawingContext.beginPath()
    s.drawingContext.moveTo(x + radius.ul, y)
    s.drawingContext.lineTo(x + width - radius.ur, y)
    s.drawingContext.quadraticCurveTo(x + width, y, x + width, y + radius.ur)
    s.drawingContext.lineTo(x + width, y + height - radius.br)
    s.drawingContext.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height)
    s.drawingContext.lineTo(x + radius.bl, y + height)
    s.drawingContext.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
    s.drawingContext.lineTo(x, y + radius.ul)
    s.drawingContext.quadraticCurveTo(x, y, x + radius.ul, y)
    s.drawingContext.closePath()

    s.drawingContext.fill()
  }
}
