import {Component, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'
import {P5Image} from './shared/interfaces'

declare let ml5: ML5

interface ML5 {
  imageClassifier: (classifierName: string) => any
}

interface Sketch {
  // lifecycle
  preload: () => void
  setup: () => void
  draw: () => void

  // canvas
  createCanvas: (width: number, height: number) => any
  background: (color: number) => any
  rect: (width: number, height: number, x: number, y: number) => any

  // image
  loadImage: (path: string, successCallback?: (image: P5Image) => any, failureCallback?: (event: any) => any) => P5Image
  image: (imgRef: P5Image, x: number, y: number) => any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  classifier
  img: P5Image

  ngOnInit(): void {
    const sketchFn = (s: Sketch) => {
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
    }

    const canvas = new P5(sketchFn)
  }

  gotResults(error, results) {
    if (error) {
      console.error(error)
    } else {
      console.log(results)
    }
  }
}
