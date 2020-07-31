import {P5Container} from '../../shared/classes/p5-container'
import {P5Sketch} from '../../shared/interfaces'
import {Runnable} from '../../shared/types'

export const examples = {
  basic: {
    main: {
      name: 'Basic',
      buttons: [
        { link: ['basic', 'circle'], icon: 'new', name: 'Circle' },
        { link: ['basic', 'mouseMoveCircle'], icon: 'new', name: 'Mouse Move Circle' },
      ]
    },
    circle: () => new P5Container((s: P5Sketch) => {
        s.setup = setupBasic(s, 'Circle')
        s.draw = () => {
          s.background(200)
          s.ellipse(50, 50, 80, 80)
        }
      }, 'example-display'),
    mouseMoveCircle:  () => new P5Container((s: P5Sketch) => {
        s.setup = setupBasic(s, 'Mouse Move Circle')
        s.draw = () => {
          s.fill(s.mouseIsPressed ? 0 : 255)
          s.ellipse(s.mouseX, s.mouseY, 80, 80)
        }
      }, 'example-display')
  },
  structure: {
    main: {
      name: 'Structure',
      buttons: [
        { link: ['structure', 'coordinates'], icon: 'new', name: 'Coordinates' },
        { link: ['structure', 'widthAndHeight'], icon: 'new', name: 'Width & Height' },
      ]
    },
    coordinates: () => new P5Container((s: P5Sketch) => {
        s.setup = setupStructure(s, 'Coordinates')

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

      }, 'example-display'),
    widthAndHeight: () => new P5Container((s: P5Sketch) => {
        s.setup = setupStructure(s, 'Width & Height')

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
      }, 'example-display')
  }
}


function setupBasic(s: P5Sketch, title: string): Runnable {
  return () => {
    s.createElement('h3', title)
    s.createCanvas(400, 400)
  }
}

function setupStructure(s: P5Sketch, title: string): Runnable {
  return () => {
    s.createElement('h3', title)
    s.createCanvas(720, 400)
  }
}
