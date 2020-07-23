import {Component, OnInit} from '@angular/core'
import * as P5 from 'p5'
import 'p5/lib/addons/p5.sound'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const sketch = s => {
      s.preload = () => {
        console.log('preload sketch')
      }

      s.setup = () => {
        console.log('setup sketch')
        s.createCanvas(400, 400)
      }

      s.draw = () => {
        console.log('draw sketch')
        s.background(255)
        s.rect(100, 100, 100, 100)
      }
    }

    const canvas = new P5(sketch)
  }
}
