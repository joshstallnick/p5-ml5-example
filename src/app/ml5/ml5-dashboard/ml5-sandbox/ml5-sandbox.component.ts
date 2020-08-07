import {Component, OnDestroy, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'
import {P5Image, P5Sketch} from '../../../shared/interfaces'
import {CanvasService} from '../../../services/canvas-service/canvas.service'
import {P5Container} from '../../../shared/classes'

declare let ml5: ML5

interface ML5 {
  imageClassifier: (classifierName: string) => any
}

@Component({
  selector: 'app-ml5-sandbox',
  templateUrl: './ml5-sandbox.component.html',
  styleUrls: ['./ml5-sandbox.component.sass']
})
export class ML5SandboxComponent implements OnInit, OnDestroy {
  classifier
  img: P5Image
  canvas
  container: P5Container = P5Container.default()

  constructor(private canvasService: CanvasService) {
    // this.canvasService.addOnePreloadFn(s => {
    //   this.classifier = ml5.imageClassifier('MobileNet')
    //   this.img = s.loadImage('assets/images/bird.png')
    // })
    //
    // this.canvasService.addOneSetupFn(s => {
    //   this.classifier.classify(this.img, this.gotResults)
    //   s.image(this.img, 0, 0)
    // })
  }

  ngOnInit(): void {
    this.container = new P5Container((s: P5Sketch) => {
      s.preload = () => {
        console.log('preload sketch')
        this.classifier = ml5.imageClassifier('MobileNet')
        this.img = s.loadImage('assets/images/bird.png')
      }

      s.setup = () => {
        s.createCanvas(400, 400)
        this.classifier.classify(this.img, this.gotResults)
        s.image(this.img, 0, 0)

        console.groupCollapsed('setup sketch complete')
        console.log(s, this.img)
        console.groupEnd()
      }

      // s.draw = () => {
      //   console.log('draw sketch')
      //   s.background(255)
      //   s.rect(100, 100, 100, 100)
      // }
    }, 'ml5-test')
  }

  ngOnDestroy(): void {
    this.container.tearDown()
  }



  gotResults(error, results) {
    if (error) {
      console.error(error)
    } else {
      console.log(results)
    }
  }
}
