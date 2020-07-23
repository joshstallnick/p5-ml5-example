import {Component, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'

declare let ml5: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  classifier
  img

  ngOnInit(): void {
    const sketch = s => {
      s.preload = () => {
        console.log('preload sketch')
        this.classifier = ml5.imageClassifier('MobileNet')
        this.img = s.loadImage('assets/images/bird.png')
      }

      s.setup = () => {
        console.log('setup sketch')
        s.createCanvas(400, 400)
        this.classifier.classify(this.img, this.gotResults)
        s.image(this.img, 0, 0)
      }

      // s.draw = () => {
      //   console.log('draw sketch')
      //   s.background(255)
      //   s.rect(100, 100, 100, 100)
      // }
    }

    const canvas = new P5(sketch)
  }

  gotResults(error, results) {
    if (error) {
      console.error(error)
    } else {
      console.log(results)
    }
  }
}
