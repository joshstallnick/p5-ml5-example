import { Component, OnInit } from '@angular/core';
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'
import {P5Image, P5Sketch} from '../../../shared/interfaces'

declare let ml5: ML5

interface ML5 {
  imageClassifier: (classifierName: string) => any
}

@Component({
  selector: 'app-ml5-sandbox',
  templateUrl: './ml5-sandbox.component.html',
  styleUrls: ['./ml5-sandbox.component.sass']
})
export class ML5SandboxComponent implements OnInit {
  classifier
  img: P5Image

  ngOnInit(): void {
    const sketchFn = (s: P5Sketch) => {
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
