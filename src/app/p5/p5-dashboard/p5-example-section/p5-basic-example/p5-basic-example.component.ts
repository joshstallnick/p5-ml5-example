import {Component} from '@angular/core'
import {P5Container} from '../../../../shared/classes/p5-container'
import {P5Sketch} from '../../../../shared/interfaces'

@Component({
  selector: 'app-p5-basic-example',
  templateUrl: './p5-basic-example.component.html',
  styleUrls: ['./p5-basic-example.component.sass']
})
export class P5BasicExampleComponent {
  canvasContainer = 'example-canvas'

  container: P5Container = new P5Container(_ => {
  })
  canvas

  constructor() {
  }

  basicCircleSketch() {
    this.container.tearDown()

    this.container = new P5Container((sketch: P5Sketch) => {
      sketch.setup = () => sketch.createCanvas(400, 400)
      sketch.draw = () => {
        sketch.background(200)
        sketch.ellipse(50, 50, 80, 80)
      }
    }, 'example-canvas')
  }

  mousePushSketch() {
    this.container.tearDown()

    this.container = new P5Container((sketch: P5Sketch) => {
      sketch.setup = () => sketch.createCanvas(400, 400)
      sketch.draw = () => {
        sketch.fill(sketch.mouseIsPressed ? 0 : 255)
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80)
      }
    }, this.canvasContainer)
  }
}
