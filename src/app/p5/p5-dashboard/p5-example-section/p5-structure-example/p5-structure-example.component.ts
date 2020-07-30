import {Component, OnInit} from '@angular/core'
import {P5Container} from '../../../../shared/classes/p5-container'
import {P5Sketch} from '../../../../shared/interfaces'
import {Runnable} from '../../../../shared/types'

@Component({
  selector: 'app-p5-structure-example',
  templateUrl: './p5-structure-example.component.html',
  styleUrls: ['./p5-structure-example.component.sass']
})
export class P5StructureExampleComponent implements OnInit {

  ids = ['coordinates', 'width-and-height', 'setup-and-draw', 'no-loop', 'loop', 'redraw', 'functions', 'recursion', 'create-graphics']

  coordinateContainer = P5Container.default()
  widthAndHeightContainer = P5Container.default()

  canvas720x400Consumer = (s: P5Sketch) => s.createCanvas(720, 400)
  createHeading = (s: P5Sketch, title: string) =>  s.createElement('h3', title)

  constructor() {
    this.createCoordinateExample()
    this.createWidthAndHeightExample()
  }

  ngOnInit(): void {
  }

  /*
      https://p5js.org/examples/structure-coordinates.html
   */
  createCoordinateExample() {
    this.coordinateContainer = new P5Container(s => {
      s.setup = this.setup1(s, 'Coordinates')

      s.draw = () => {
        const {width, height} = s

        s.background(0)
        s.noFill()

        s.stroke(255)
        s.strokeWeight(5)
        s.point(width * 0.5, height * 0.5)
        s.point(width * 0.5, height * 0.25)

        s.strokeWeight(1)
        s.stroke(0, 153, 255)
        s.line(0, height * 0.33, width, height * 0.33)

        s.stroke(255, 153, 0)
        s.rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8)
      }

    }, 'coordinates')
  }

  /*
      https://p5js.org/examples/structure-width-and-height.html
   */
  createWidthAndHeightExample() {
    this.widthAndHeightContainer = new P5Container(s => {
      s.setup = this.setup1(s, 'Width & Height')

      s.draw = () => {
        s.background(127)
        s.noStroke()

        for (let i = 0; i < s.height; i += 20) {
          s.fill(129, 206, 15)
          s.rect(0, i, s.width, 10)
          s.fill(255)
          s.rect(i, 0, 10, s.height)
        }
      }
    }, 'width-and-height')
  }


  private setup1(s: P5Sketch, title: string): Runnable {
    return () => {
      this.createHeading(s, title)
      this.canvas720x400Consumer(s)
    }
  }
}
