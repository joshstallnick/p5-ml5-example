import {Component, OnInit} from '@angular/core'
import {P5Container} from '../../../shared/classes/p5-container'
import {P5Sketch} from '../../../shared/interfaces'
import 'p5/lib/addons/p5.sound'

@Component({
  selector: 'app-p5-example-section',
  templateUrl: './p5-example-section.component.html',
  styleUrls: ['./p5-example-section.component.sass']
})
export class P5ExampleSectionComponent implements OnInit {

  container: P5Container
  canvas

  constructor() {
  }

  ngOnInit(): void {
    this.container = new P5Container((sketch: P5Sketch) => {
      sketch.setup = () => {
        sketch.createCanvas(400, 400)
      }
      sketch.draw = () => {
        sketch.background(200)
        sketch.ellipse(50, 50, 80, 80)
      }
    }, 'example-canvas')

    console.log(this.container)
  }

}
