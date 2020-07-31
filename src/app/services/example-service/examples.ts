import {P5Sketch} from '../../shared/interfaces'
import {Runnable} from '../../shared/types'
import {P5Boid, P5Container, P5Flock, P5Liquid, P5Mover, P5ParticleSystem} from '../../shared/classes'

// example object called by the example service
export const examples = {
  basic: {
    main: {
      name: 'Basic',
      buttons: [
        {link: ['basic', 'circle'], icon: 'new', name: 'Circle'},
        {link: ['basic', 'mouseMoveCircle'], icon: 'new', name: 'Mouse Move Circle'}
      ]
    },
    circle: () => new P5Container((s: P5Sketch) => {
      s.setup = setupBasic(s, 'Circle')
      s.draw = () => {
        s.background(200)
        s.ellipse(50, 50, 80, 80)
      }
    }, 'example-display'),
    mouseMoveCircle: () => new P5Container((s: P5Sketch) => {
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
        {link: ['structure', 'coordinates'], icon: 'new', name: 'Coordinates'},
        {link: ['structure', 'widthAndHeight'], icon: 'new', name: 'Width & Height'},
        {link: ['structure', 'setupAndDraw'], icon: 'new', name: 'Setup & Draw'},
        {link: ['structure', 'noLoop'], icon: 'new', name: 'No Loop'},
        {link: ['structure', 'loop'], icon: 'new', name: 'Loop'},
        {link: ['structure', 'redraw'], icon: 'new', name: 'Redraw'},
        {link: ['structure', 'functions'], icon: 'new', name: 'Functions'},
        {link: ['structure', 'recursion'], icon: 'new', name: 'Recursion'},
        {link: ['structure', 'createGraphics'], icon: 'new', name: 'Create Graphics'}
      ]
    },
    coordinates: () => new P5Container((s: P5Sketch) => {
      s.setup = () => setupStructure(s, 'Coordinates')

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
      s.setup = () => setupStructure(s, 'Width & Height')

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
    }, 'example-display'),
    setupAndDraw: () => new P5Container((s: P5Sketch) => {
      let y = 100

      s.setup = () => {
        setupStructure(s, 'Setup & Draw')
        s.stroke(255)
        s.frameRate(30)
      }

      s.draw = () => {
        y = createStructureLine(s, y)
      }
    }, 'example-display'),
    noLoop: () => new P5Container((s: P5Sketch) => {
      let y

      s.setup = () => {
        setupStructure(s, 'No Loop')
        s.stroke(255)
        s.noLoop()

        y = s.height * 0.5
      }

      s.draw = () => createStructureLine(s, y)
    }, 'example-display'),
    loop: () => new P5Container((s: P5Sketch) => {
      let y = 100

      s.setup = () => {
        setupStructure(s, 'Loop')
        s.stroke(255)
        s.frameRate(30)
      }

      s.draw = () => {
        y = createStructureLine(s, y)
      }
    }, 'example-display'),
    redraw: () => new P5Container((s: P5Sketch) => {
      let y

      s.setup = () => {
        setupStructure(s, 'Redraw')
        s.stroke(255)
        s.noLoop()
        y = s.height * 0.5
      }

      s.draw = () => {
        y = createStructureLine(s, y, 4)
      }

      s.mousePressed = () => {
        s.redraw(8)
      }
    }, 'example-display'),
    functions: () => new P5Container((s: P5Sketch) => {
      s.setup = () => {
        setupStructure(s, 'Functions')
        s.background(51)
        s.noStroke()
        s.noLoop()
      }

      s.draw = () => {
        const {width, height} = s

        drawTarget(width * 0.25, height * 0.4, 200, 4)
        drawTarget(width * 0.5, height * 0.5, 300, 10)
        drawTarget(width * 0.75, height * 0.3, 120, 6)
      }

      const drawTarget = (x, y, size, num) => {
        const grayValues = 255 / num
        const steps = size / num
        for (let i = 0; i < num; i++) {
          s.fill(i * grayValues)

          const wh = size - i * steps

          s.ellipse(x, y, wh, wh)
        }
      }
    }, 'example-display'),
    recursion: () => new P5Container((s: P5Sketch) => {
      s.setup = () => {
        s.createCanvas(720, 560)
        s.noStroke()
        s.noLoop()
      }

      s.draw = () => drawCircle(s.width / 2, 280, 6)

      const drawCircle = (x, radius, level) => {
        const tt = (126 * level) / 4.0
        const doubleR = radius * 2
        const halfR = radius / 2

        s.fill(tt)
        s.ellipse(x, s.height / 2, doubleR, doubleR)
        if (level > 1) {
          level -= 1
          drawCircle(x - halfR, halfR, level)
          drawCircle(x + halfR, halfR, level)
        }
      }
    }, 'example-display'),
    createGraphics: () => new P5Container((s: P5Sketch) => {
      let pg: P5Sketch

      s.setup = () => {
        s.createCanvas(710, 400)
        pg = s.createGraphics(400, 250)
      }

      s.draw = () => {
        const {mouseX, mouseY} = s

        const wh = 60

        s.fill(0, 12)
        s.rect(0, 0, s.width, s.height)
        s.fill(255)
        s.noStroke()
        s.ellipse(mouseX, mouseY, wh, wh)

        pg.background(51)
        pg.noFill()
        pg.stroke(255)
        pg.ellipse(mouseX - 150, mouseY - 75, wh, wh)

        s.image(pg, 150, 75)
      }
    }, 'example-display')
  },
  simulate: {
    main: {
      name: 'Simulate',
      buttons: [
        {link: ['simulate', 'forces'], icon: 'new', name: 'Forces'},
        {link: ['simulate', 'particleSystem'], icon: 'new', name: 'Particle System'},
        {link: ['simulate', 'flock'], icon: 'new', name: 'Flock'}
      ]
    },
    forces: () => new P5Container((s: P5Sketch) => {
      const movers = []

      let liquid

      s.setup = () => {
        s.createCanvas(640, 360)
        s.reset()
        liquid = new P5Liquid(s, 0, s.height / 2, s.width, s.height / 2, 0.1)
        console.groupCollapsed('new liquid')
        console.log(liquid)
        console.groupEnd()
      }

      s.draw = () => {
        s.background(127)

        liquid.display()

        movers.forEach(mover => {
          if (liquid.contains(mover)) {
            const dragForce = liquid.calculateDrag(mover)

            mover.applyForce(dragForce)
          }

          const gravity = s.createVector(0, 0.1 * mover.mass)

          mover.applyForce(gravity)

          mover.update()
          mover.display()
          mover.checkEdges()
        })
      }

      s.mousePressed = () => s.reset()

      s.reset = () => {
        for (let i = 0; i < 9; i++) {
          movers[i] = new P5Mover(s, s.random(0.5, 3), 40 + i * 70, 0)
        }
        console.groupCollapsed('movers')
        console.log(movers)
        console.groupEnd()
      }

    }, 'example-display'),
    particleSystem: () => new P5Container((s: P5Sketch) => {
      let system: P5ParticleSystem

      s.setup = () => {
        s.createCanvas(720, 400)
        system = new P5ParticleSystem(s, s.createVector(s.width / 2, 50))
      }

      s.draw = () => {
        s.background(51)
        system.addParticle()
        system.run()
      }
    }, 'example-display'),
    flock: () => new P5Container((s: P5Sketch) => {
      let flock: P5Flock

      s.setup = () => {
        s.createElement('h1', 'Flock')
        s.createCanvas(640, 360)
        s.createP('Drag the mouse to generate new boids.')

        flock = new P5Flock()

        for (let i = 0; i < 100; i++) {
          const b = new P5Boid(s, s.width / 2, s.height / 2)
          flock.addBoid(b)
        }
      }

      s.draw = () => {
        s.background(51)
        flock.run()
      }

      s.mouseDragged = () => {
        flock.addBoid(new P5Boid(s, s.mouseX, s.mouseY))
      }
    }, 'example-display'),
    template: () => new P5Container((s: P5Sketch) => {}, 'example-display')
  }
}


function setupBasic(s: P5Sketch, title: string): Runnable {
  return () => {
    s.createElement('h3', title)
    s.createCanvas(400, 400)
  }
}

function setupStructure(s: P5Sketch, title: string) {
  s.createElement('h3', title)
  s.createCanvas(720, 400)
}

function createStructureLine(s: P5Sketch, y: number, decrease: number = 1): number {
  s.background(0)

  y -= decrease

  if (y < 0) {
    y = s.height
  }

  s.line(0, y, s.width, y)

  return y
}
