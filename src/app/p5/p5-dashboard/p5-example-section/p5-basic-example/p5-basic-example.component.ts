import {Component} from '@angular/core'
import {P5Container} from '../../../../shared/classes/p5-container'
import {P5Sketch} from '../../../../shared/interfaces'

@Component({
  selector: 'app-p5-basic-example',
  templateUrl: './p5-basic-example.component.html',
  styleUrls: ['./p5-basic-example.component.sass']
})
export class P5BasicExampleComponent {

  circleContainer: P5Container = new P5Container(_ => {})

  mouseMoveContainer: P5Container = new P5Container(_ => {})

  canvas

  constructor() {
    this.basicCircleSketch()
    this.mouseMoveSketch()
  }

  basicCircleSketch() {
    this.circleContainer.tearDown()

    this.circleContainer = new P5Container((sketch: P5Sketch) => {
      sketch.setup = () => sketch.createCanvas(400, 400)
      sketch.draw = () => {
        sketch.background(200)
        sketch.ellipse(50, 50, 80, 80)
      }
    }, 'basic-circle')
  }

  mouseMoveSketch() {
    this.mouseMoveContainer.tearDown()

    this.mouseMoveContainer = new P5Container((sketch: P5Sketch) => {
      sketch.setup = () => sketch.createCanvas(400, 400)
      sketch.draw = () => {
        sketch.fill(sketch.mouseIsPressed ? 0 : 255)
        sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80)
      }
    }, 'mouse-track-circles')
  }
}
